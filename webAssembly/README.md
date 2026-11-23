# WebAssembly Proof of Concept (Docker vs. WebAssembly)

A minimalist WebAssembly (Wasm) Proof of Concept built with **AssemblyScript**, native **HTML**, and the standard **WebAssembly JavaScript API** (no React, Vite, or bundlers).

## What This POC Demonstrates

1. **Real Compilation to Wasm:** Compiles TypeScript-like AssemblyScript (`assembly/index.ts`) into an optimized binary (`build/hello.wasm`) and a human-readable WebAssembly Text Format file (`build/hello.wat`) for inspecting stack-based VM instructions.
2. **Linear Memory Access:** Reads the exact string `"Hello World from WebAssembly!"` directly from the module's exported linear memory (`WebAssembly.Memory`).
3. **JS ↔ Wasm Interoperability:** Calls an exported `add(a: i32, b: i32): i32` function (`add(20, 22) = 42`).
4. **Comparable Metrics vs. Docker:**
   - Exact binary footprint of `build/hello.wasm` in bytes and KB.
   - End-to-end fetch + streaming compilation + instantiation time (`WebAssembly.instantiateStreaming`) measured in milliseconds with `performance.now()`.

## Project Structure

```text
webAssembly/
├── package.json
├── assembly/
│   └── index.ts       # AssemblyScript source compiled to build/hello.wasm
├── build/             # Generated after running npm run build
│   ├── hello.wasm     # Optimized WebAssembly binary
│   └── hello.wat      # Human-readable stack-based VM text format
├── index.html         # Loads build/hello.wasm via WebAssembly.instantiateStreaming
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended) and `npm`.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Compile to WebAssembly (`.wasm` and `.wat`)

```bash
npm run build
```

This runs AssemblyScript (`asc`) with `-O` optimization and generates both `build/hello.wasm` and `build/hello.wat`.

### 3. Check the Binary Size

**Linux / macOS:**
```bash
ls -lh build/hello.wasm
```

**Windows (PowerShell):**
```powershell
(Get-Item build/hello.wasm).Length
```

### 4. Serve Locally and Open in the Browser

Because `WebAssembly.instantiateStreaming()` requires serving `.wasm` over HTTP with the `application/wasm` MIME type, run a local static server:

```bash
npx serve .
```

Then open the local URL printed in the terminal (typically `http://localhost:3000`) in your browser to view the output and metrics.
