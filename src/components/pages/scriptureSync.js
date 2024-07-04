import React from "react";
import '../../App.css';
import '../../App.js';


// script.js

document.addEventListener('DOMContentLoaded', function() {
    var iframeContainer = document.getElementById('iframeContainer');
  
    // Example URL to embed
    var iframeSrc = 'https://app.formwise.ai/dashboard/1717505473743x171077984022954000';
  
    // Create an iframe element
    var iframe = document.createElement('iframe');
  
    // Set attributes of the iframe
    iframe.src = iframeSrc;
    iframe.width = '800'; // Adjust width as needed
    iframe.height = '700'; // Adjust height as needed
    iframe.frameBorder = '0'; // Remove iframe border
  
    // Append the iframe to the container
    iframeContainer.appendChild(iframe);
  });


