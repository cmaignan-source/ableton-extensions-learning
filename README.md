# Ableton Extensions Learning

A learning repository for the [Ableton Extensions SDK](https://ableton.github.io/extensions-sdk/) — built with TypeScript and JavaScript.

The goal of this repo is to explore, experiment, and document the Extensions SDK step by step. It is intended both as a personal learning space and as a reference for other developers getting started with Ableton Live extensions.

## About the Extensions SDK

The Ableton Extensions SDK is an open JavaScript/TypeScript toolkit that lets you build custom tools running directly inside Ableton Live 12 Suite. Extensions can read and modify tracks, clips, MIDI, tempo, devices, and more.

> Currently available as a **public beta** alongside Live 12.4.5.  
> Learn more: [https://ableton.github.io/extensions-sdk/](https://ableton.github.io/extensions-sdk/)

## Repository Structure

```
examples/
└── 1.0.0-beta.0/
    └── show-tempo/       # Read and display the current tempo of the Live Set
        ├── src/
        │   └── extension.ts
        ├── manifest.json
        ├── package.json
        └── README.md
```

Each example is organized by SDK version so that changes between beta releases are easy to track and compare.

## SDK & Compatibility

| Component       | Version              |
|----------------|----------------------|
| Extensions SDK  | 1.0.0-beta.0         |
| Ableton Live    | 12.4.5 (public beta) |
| Node.js         | >= 24.14.1           |
| TypeScript      | ^5.9.3               |

## Getting Started

### Prerequisites

- [Ableton Live 12.4.5 Suite (public beta)](https://www.ableton.com/en/live/extensions/)
- [Node.js >= 24.14.1](https://nodejs.org/)
- The Extensions SDK and CLI `.tgz` files (provided in `vendor/`)

### Running an example

```bash
cd examples/1.0.0-beta.0/show-tempo
npm install
npm start
```

This builds the extension in dev mode and runs it via `extensions-cli`.

### Building for production

```bash
npm run build
npm run package
```

## Branch Convention

| Branch | Purpose |
|--------|---------|
| `main` | Stable, documented reference |
| `sdk/x.x.x-betaX` | Examples pinned to a specific SDK version |
| `feature/x.x.x-betaX/name` | Work in progress on a specific example |

## Author

Christophe MAIGNAN — [@cmaignan-source](https://github.com/cmaignan-source)

***

*Built with [`@ableton-extensions/sdk`](https://ableton.github.io/extensions-sdk/)*
