# React Central Loader

## About this project
### What it contains
- Two demo pages - Home & About
- Test api call made on each of the pages using axios

### What it does
- Anytime any api call made on any page, loader will be shown
- Upon api call complete, loader will disappear

### How it's does 
- `NetworkContext`: React context using which network state shared among Components
- `NetworkProvider`: React context provider which provides helpful functions like `networkCallBegin` & `networkCallEnd` to Components
- `useNetworkCallHandler`: Custom hook created to inject & eject interceptors on axios
- `NetworkHandler`: Gets network state using `NetworkContext` and show loader based on that.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
