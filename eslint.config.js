import js from '@eslint/js';
import * as tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }],
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      'prefer-const': 'error'
    }
  },
  {
    files: ['**/tests/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.jasmine
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  },
  {
    files: ['**/tests/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jasmine,
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  },
  {
    ignores: [
      '**/*.d.ts',
      'dist/**/*',
      'node_modules/**/*',
      '.wrangler/**/*',
      'debug-test/**/*',
      'scripts/**/*',
      'examples/**/*',
      'debug-test/**/*',
      'examples/dist/**/*',
      'coverage/**/*',
      '*.js',
      '*.json',
      '*.md',
      '*.yml',
      '*.yaml',
      '*.toml',
      '*.lock',
      '*.log',
      '*.txt',
      '*.csv',
      '*.xml',
      '*.html',
      '*.css',
      '*.scss',
      '*.sass',
      '*.less',
      '*.styl',
      '*.png',
      '*.jpg',
      '*.jpeg',
      '*.gif',
      '*.svg',
      '*.ico',
      '*.woff',
      '*.woff2',
      '*.ttf',
      '*.eot',
      '*.mp3',
      '*.mp4',
      '*.webm',
      '*.ogg',
      '*.wav',
      '*.flac',
      '*.aac',
      '*.m4a',
      '*.mov',
      '*.avi',
      '*.mkv',
      '*.zip',
      '*.tar',
      '*.gz',
      '*.rar',
      '*.7z',
      '*.pdf',
      '*.doc',
      '*.docx',
      '*.xls',
      '*.xlsx',
      '*.ppt',
      '*.pptx',
      '*.odt',
      '*.ods',
      '*.odp',
      '*.rtf',
      '*.tex',
      '*.sql',
      '*.sqlite',
      '*.db',
      '*.sqlite3',
      '*.db3',
      '*.s3db',
      '*.sl3',
      '*.db2',
      '*.dbf',
      '*.mdb',
      '*.accdb',
      '*.pdb',
      '*.ldb',
      '*.mdf',
      '*.ndf',
      '*.bak',
      '*.tmp',
      '*.temp',
      '*.swp',
      '*.swo',
      '*.swn',
      '*.bak',
      '*.backup',
      '*.old',
      '*.orig',
      '*.rej',
      '*.patch',
      '*.diff',
      '*.err',
      '*.error',
      '*.log',
      '*.trace',
      '*.debug',
      '*.info',
      '*.warn',
      '*.fatal',
      '*.crash',
      '*.dump',
      '*.core',
      '*.pid',
      '*.lock',
      '*.lck',
      '*.pid',
      '*.state',
      '*.status',
      '*.progress',
      '*.progress~',
      '*.part',
      '*.partial',
      '*.incomplete',
      '*.temp',
      '*.tmp',
      '*.swp',
      '*.swo',
      '*.swn',
      '*.bak',
      '*.backup',
      '*.old',
      '*.orig',
      '*.rej',
      '*.patch',
      '*.diff',
      '*.err',
      '*.error',
      '*.log',
      '*.trace',
      '*.debug',
      '*.info',
      '*.warn',
      '*.fatal',
      '*.crash',
      '*.dump',
      '*.core',
      '*.pid',
      '*.lock',
      '*.lck',
      '*.pid',
      '*.state',
      '*.status',
      '*.progress',
      '*.progress~',
      '*.part',
      '*.partial',
      '*.incomplete'
    ]
  }
); 