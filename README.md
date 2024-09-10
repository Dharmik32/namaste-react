# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algoritm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking - remove unused code
- Different dev and prod bundles

# Namaste Food
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - ResturantContainer
 *    - ResturantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisines, delivery time.
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */


 Two types of Export/Import

 - Default Export/Import

 export default Component;
 import Component from "path";

 - Name Export/Import

 export const Component;
 import {Component} from "path";


# React Hooks
(Normal JS utility functions)
- useState() - super powerful state variables in react 
- useEffect() 


# 2 types of Routing in web apps
- Client Side Routing
- Server Side Routing 


# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to app
- Slice (carSlice)
- dispatch(action)
- Selector


# Types of testing (developer)
- Unit testing
- Integration Testing
- End to End Testing - e2e testing


# Setting up testing in our app
- Install React Testing library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable Babel transpilation
- Jest configuration - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX works in test cases
- Include @babel/preset-react inside my babel configuration
- npm i -D @testing-library/jest-dom