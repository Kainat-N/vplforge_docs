---
sidebar_position: 1
title: Getting Started
---

# Setting up the Environment

As a VPL Developer, follow these simple steps to set up the **VPLForge** project and develop VPLs of your choice!


---

## Step 1: Install Node.js

Make sure you have `Node.js` installed on your computer.  
We recommend installing the **LTS version**.

Download it from: [https://nodejs.org/en](https://nodejs.org/en)

---
> **Note:** Make sure you have `yarn` installed. If not, you can install it using:
> ```bash
> npm install --global yarn
> ```


---

## Step 2: Clone the Repository

Open a terminal or command prompt and run:

```bash
git clone https://github.com/ASD0x41/unified-vpl-framework.git
```

---


## Step 3: Install Dependencies

Navigate to the cloned folder and install the following package:

```bash
yarn install
```
---

## Step 4: Run the Application
You can either run the **Web Application** or the **Desktop Application**.

### A. Running the web application 

```bash
yarn web
```

### B. Running Desktop Application
**For Linux:**

```bash 
yarn desktop
```
> Tip: If you're using WSL or Linux, make sure your system supports Electron GUI apps.


**For windows:**

In one terminal window, run:

```bash
yarn web
```

Then in a separate terminal window, run: 
```bash
yarn electron-start
```

Here’s what the **VPLForge interface** looks like after launching:

![VPLForge Interface](/img/vpl-ui.png)


---

*Woohoo! You're all set to develop your own VPL now!*
