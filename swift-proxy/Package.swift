// swift-tools-version:5.9
//
// NolockOCR Swift Package
// https://github.com/o2alexanderfedin/OCRChecksServer
//
// Copyright (c) 2025 Nolock.social
// Licensed under MIT License
//

import PackageDescription

let package = Package(
    name: "NolockOCR",
    platforms: [
        .iOS(.v15),
        .macOS(.v12)
    ],
    products: [
        .library(
            name: "NolockOCR",
            targets: ["NolockOCR"]),
    ],
    dependencies: [],
    targets: [
        .target(
            name: "NolockOCR",
            dependencies: [],
            path: "Sources"),
        .testTarget(
            name: "NolockOCRTests",
            dependencies: ["NolockOCR"],
            path: "Tests"),
    ],
    swiftLanguageVersions: [.v5]
)