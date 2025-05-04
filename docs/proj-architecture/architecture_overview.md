---
id: overview
title: Architecture Overview
sidebar_position: 1
---

# Architecture Overview

VPLForge follows a modular, layered architecture designed to support the visual programming workflow from component placement to code execution.

---

At a high level, the architecture is split into three key layers, each handling a specific part of the visual programming pipeline:


### Frontend (Presentation Layer)
  The frontend includes the component library, the visual programming canvas, and an embedded console. Designers drag and connect components to visually construct programs. The UI dynamically reflects the program's structure and state.


### Backend (Logic & Execution Layer)
  Once a program is visually constructed, the backend handles validation of component connections, transformation of the visual graph into TPL (Typed Programming Language) code, and its compilation into WebAssembly using a Pyodide-based runtime. Execution results are then displayed in the embedded console.


### Persistence Layer (Data Storage)
  This layer manages saving and loading of component configurations, canvas layouts, and generated TPL code — primarily using JSON.

The following diagram summarizes this architecture and the flow of data within the system:

![VPLForge System Architecture](/img/architecture-overview.jpg)

> This architectural design enables rapid prototyping, clean separation of concerns, and supports both local development (via Electron) and web-based deployment.

---

### Notes for Implementation

- The architecture supports easy extension by allowing new components to be defined declaratively.
- Communication between frontend and backend is handled via in-browser APIs (e.g., Pyodide running in WebAssembly).
- State is preserved locally and can be exported for reuse or sharing.
