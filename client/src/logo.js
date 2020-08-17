import React from 'react';
import logo from './piclinx-logo.png'; // Tell webpack this JS file uses this image

console.log(logo); 


function Logo() {
    // Import result is the URL of your image
    return <img className="Logo" src={require("./piclinx-logo.png")} alt="Logo" width="220"/>;
}
export default Logo;