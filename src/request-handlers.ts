import type { Context } from 'hono';
import { workerIoE } from './io';
import { ScannerFactory } from './scanner/factory';
import { Document, DocumentType } from './ocr/types';
import type { Env } from './types';

/**
 * Handle OCR requests for specific document types.
 * Shared by the /check and /receipt endpoints.
 */
export async function handleDocumentRequest(
  c: Context<{ Bindings: Env }>,
  type: 'check' | 'receipt'
): Promise<Response> {
  try {
    const contentType = c.req.header('Content-Type');
    if (!contentType?.startsWith('image/')) {
      return new Response(
        JSON.stringify({ error: 'Invalid content type. Expected image/*' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const documentFormat = c.req.query('format') || 'image';
    const documentType =
      documentFormat === 'pdf' ? DocumentType.PDF : DocumentType.Image;

    const imageBuffer = await c.req.arrayBuffer();

    const scanner = ScannerFactory.createScannerByType(
      workerIoE,
      c.env.MISTRAL_API_KEY,
      type
    );

    const document: Document = {
      content: imageBuffer,
      type: documentType,
      name: c.req.query('filename') || `${type}-document`
    };

    const result = await scanner.processDocument(document);

    if (result[0] === 'error') {
      return new Response(JSON.stringify({ error: result[1] }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(
      JSON.stringify({
        data: result[1].json,
        confidence: {
          ocr: result[1].ocrConfidence,
          extraction: result[1].extractionConfidence,
          overall: result[1].overallConfidence
        }
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(`Error processing ${type}:`, error);
    return new Response(
      JSON.stringify({ message: 'Internal server error', error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

