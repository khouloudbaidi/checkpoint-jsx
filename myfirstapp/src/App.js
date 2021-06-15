import React from "react";
import "./style.css"; 
import "./App.css";

import imageInSrc from "./assets/imageInSrc.png";
// import imageInPublic from "..public/imageInPublic.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">bienvenu dans GomyCode</h1>
          <br />
          <img src={imageInSrc.png} style={{ width: "30%" }} alt="firstimage" />
          <br />
          <img
            src="/public/imageInPublic.jpg"
            style={{ width: "30%" }}
            alt="secondimage"
          />
        </div>
        <vidéo width={320} height={240} contrôles>
          <source src="maVidéo.mp4" type="video/mp4" />
        </vidéo>
      </header>
    </div>
  );
}

export default App;
