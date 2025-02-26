import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import VerticalSlideshow from './VerticalSlideshow.jsx';

function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <div>
      <window.VerticalSlideshow currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    </div>
  );
}

// Mount the App component into the "root" div in index.html
ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener("DOMContentLoaded", function() {
    console.log("App is initializing...");
    const root = document.getElementById("root");
    if (!root) {
         console.error("No root element found!");
         return;
    }
    // Adding inline styling to force visible text
    root.innerHTML = "<h1 style='color:#000'>Welcome to v1.2!</h1><p style='color:#000;'>Your app should render here.</p>";
}); 