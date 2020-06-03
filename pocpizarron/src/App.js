import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import ExcalidrawLink, { generateLink } from 'excalidraw-share-peer-link';
import { Excalidraw } from "@mizchi/excalidraw";

function App() {
  const [link, setLink] = useState('');
 
  useEffect(() => {
    generateLink().then(result => {
      setLink(result);
    })
  }, [])

  // ReactDOM.render(
  //   <Excalidraw
  //     width={500}
  //     height={500}
  //     onChange={state => console.log(state)}
  //   />,
  //   document.querySelector("root"),
  // );
 
  return (
      <div className="App">
        {/* <ExcalidrawLink link={link} label="Go to whiteboard" /> */}
        <Excalidraw
      width={100}
      height={100}
      onChange={state => console.log(state)}
    />
      </div>
    );
}

export default App;
