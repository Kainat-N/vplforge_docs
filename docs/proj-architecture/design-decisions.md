---
sidebar_position: 2
title: Design Decisions & Planned Features
---

# Design Decisions & Planned Features

This section documents key architectural decisions, along with features we plan to support in the near future.

---

## Design Decisions

### 1. JSON-Driven Block System
We adopted a JSON-based configuration format to define visual language components like blocks, categories, and connections. 
- Allows VPL designers to create and modify languages without touching the core framework logic or UI code.
- Promotes rapid prototyping as the designers only need to construct a JSON for making their own VPLs

### 2. Web + Electron Architecture
The framework is built using a combination of web technologies (React + Vite) and Electron. This hybrid architecture enables two modes of operation: 
- an online mode for immediate web-based access and sharing 
- an offline mode for desktop use without requiring a web server. 

This ensures cross-platform compatibility, ease of deployment, and consistent behavior across environments.

### 3. Modular Code Generation
The code generation logic is kept independent of the visual editor and UI components.
- allows support for multiple backend languages without changing the core framework
- enables flexible customization of how code is produced from block arrangements
- paves the way for adding language-specific features or runtime execution

### 4. Clean Separation of Concerns
The framework follows a modular architecture where components have clearly defined responsibilities.
- UI, logic, and backend systems are decoupled to prevent overlap and confusion
- easier to test, debug, and scale different parts of the system independently
- simplifies adding future extensions like debuggers, simulators, or plugins

---

## Planned Features

Here’s a sneak peek at the awesome features we’re cooking up to make VPLForge the most powerful VPL engine out there!

### 1. Enhanced Block Types and Customization
**Feature**: Introduction of new block types such as conditionals, functions, and custom user-defined blocks.  
**Reason**: To provide greater flexibility in how users can structure their VPLs, enabling them to create more complex and functional workflows.

### 2. Interactive Debugging Tools
**Feature**: Integration of a real-time debugger that allows users to step through their VPL, inspect variable values, and highlight problematic connections or logic.  
**Reason**: Helps users troubleshoot their workflows and understand how their VPL is executing, improving the debugging experience.

### 3. Version Control Integration
**Feature**: Implement version control for VPLs, allowing users to save different versions of their projects, compare changes, and revert to previous states.  
**Reason**: Version control is a critical feature for maintaining complex projects, especially in collaborative environments.

### 4. Support for Multiple Backend Languages
**Feature**: Enable the framework to generate code in multiple backend languages such as Python, Java, JavaScript, and C++.
**Reason**: Allowing users to tailor the generated code to their specific needs (e.g., exporting to Python, Java, or JavaScript) could improve usability and expand the user base.

### 5. Collaboration and Sharing Features
**Feature**: Real-time collaboration support where multiple users can edit a VPL simultaneously or share VPLs with easy-to-use export/import options.  
**Reason**: Collaborative features can improve team-based development and make it easier for users to share their work.

### 6. Mobile and Cloud Support
**Feature**: Enable mobile access or cloud-based VPL development where users can design and test VPLs from anywhere.  
**Reason**: Increases accessibility and allows users to work on projects from multiple devices or collaborate without being tied to a single machine.

---

*We’ll keep expanding the capabilities of VPLForge to make it the go-to platform for visual language design!*

