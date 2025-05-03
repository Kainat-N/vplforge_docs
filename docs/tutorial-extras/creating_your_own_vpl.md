---
sidebar_position: 2
title: Create a New VPL
---

# Creating a New VPL Using JSON

In this section, you will learn how to create a new Visual Programming Language (VPL) using a JSON file. This file defines the blocks of your VPL, specifies how the blocks can connect with each other, and map the visual elements to backend logic.

---

## Where to place the JSON
Navigate to the 'samples' folder where you have to place the JSON file.

unified-vpl-framework --> public --> samples

## What to include in the JSON file
To create your own VPL, make a JSON file following this structure:

```json
{
    "name": "xyz",
    "type": "zyz",
    "version": "0.0.0",
    "components": [] 
}
``` 
Here:

- `"name"` specifies the name of your language.
- `"type"` represents the category of blocks(e.g. flowchart, block, dataflow, etc.).
- `"version"` shows the current version of your language.
- `"components"` includes the properties of the blocks supported by your VPL

## How to represent Components
Each component of your VPL must follow this structure:

```json
{
    "id": "xyz",
    "style": {},
    "text": [],
    "dimensions": [],
    "inpins": [],
    "outpins": [],
    "props": ["xyz"],
    "code": "$1"
}
```

In this:

- `"id"` gives the name of the component.
- `"style"` specifies the visual properties of the components like color and shape.
- `"text"` represents what would be written on the component on the screen.
- `"dimensions"` sets the dimensions of the component.
- `"inpins"` defines the input connection points for the component (position, label, and type).
- `"outpins"` defines the output connection points for the component (position, label, and type).
- `"props"` lists customizable properties of the block that can be entered by the user (e.g., inputs to functions).
- `"code"` specifies the backend logic that will be executed, where **$1**, **$2**, etc. are placeholders for user-defined properties.
 
---
## Example JSON 
Here is a sample JSON file for a dataflow based VPL.

```json
{
    "name": "DataLang",
    "type": "dataflow",
    "version": "0.1.0",
    "components": [
        {
            "id": "input",
            "style": {
                "type": "circle",
                "left": 0,
                "top": 0,
                "radius": 25,
                "fill": "blue"
            },
            "text": [
                {
                    "content": "Input",
                    "fontSize": 14,
                    "fill": "white",
                    "textAlign": "center",
                    "area": [[0,0],[50,50]],
                    "prop": null
                }
            ],
            "dimensions": [50,50],
            "inpins": [],
            "outpins": [[25,50,"bottom"]],
            "props": ["prompt"],
            "code": "$1 = input(#1)"
        }
    ]
}
```

---


*With this foundation, you're now ready to design and implement your own VPLs using JSON!*