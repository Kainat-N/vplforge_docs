---
sidebar_position: 1
---

# Set Up

### Step 1: Install Node.js
Make sure you have Node.js installed on your computer (we recommended the LTS version).  
Download it from: [Node.js](https://nodejs.org/en)

---

### Step 2: Clone the Repository  
Open a terminal or command prompt and run:  
```bash
git clone https://github.com/ASD0x41/unified-vpl-framework.git
```

---

### Step 3: Install dependencies
- Navigate to the cloned folder i.e. `unified-vpl-framework` and install the following package:
```
yarn install
```
If you have Node.js and npm already installed, you can run the following command in your terminal:  
```bash
npm install --global yarn
```
- Then install `react-app-rewired` using:  

```bash 
yarn add --dev react-app-rewired
```

---

### Step 4: Run the Application
You can either run the Web Application or the Desktop application.

#### Running the web application
Run this command: 
```bash
yarn web
```

#### Running Desktop Application

***For Linux:***  
Run the command: 
```bash
yarn desktop
```
***For windows:***  
In your cmd window, run:  
```
yarn web
```
Then in a separate terminal window, run:  
```
yarn electron-start
```  


Woohoo! You're all set to use the framework.


