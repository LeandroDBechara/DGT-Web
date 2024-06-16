import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext.jsx";
import TopBar from "./components/TopBar";
import ButtonBar from "./components/ButtomBar";
import "./Styles/main.css";
// dar formato : alt +shift + f

/*<iframe src="https://www.google.com/maps/d/embed?mid=1OX0HEbWcr330MAuM18Ud8OR54mIw26w&ehbc=2E312F" width="640" height="480"></iframe>*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <TopBar />
      <main>
      <div className="imgdgt"><img  src="src/assets/colectivo.png" alt="" /></div>
      <div className="sitios">
        <div className="sitio1">
          <a href="https://www.tucuman.gov.ar/">
            <img
              src="src/assets/hnzthxf9.png"
              alt="Gobierno de Tucuman"
            />
          </a>

          <a href="http://mininteriortucuman.gob.ar/">
            <img
              src="src/assets/q1mp2h4e.png"
              alt="Ministerio"
            />
          </a>
        </div>
        <div className="sitio2">
          <a href="https://www.argentina.gob.ar/transporte/cnrt">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logo_CNRT.png" alt="CNRT" />
          </a>
          <a href="https://smt.gob.ar/">
            <img
              src="https://media.licdn.com/dms/image/D4D0BAQGqBTLENcU6MA/company-logo_200_200/0/1713455769855/munismtucuman_logo?e=2147483647&v=beta&t=YvO0OxnY9kGjiXvVW2EFPkXlKBfYbfYsoaeXbUb-Im4"
              alt="Ministerio"
            />
          </a>
        </div>
      </div>
      <h2>TELÉFONOS ÚTILES</h2>
      <div className="telefonos">
          <div>
            <h1>911</h1>
            <p>EMERGENCIA POLICIAL</p>
          </div>
          <div>
            <h1>100</h1>
            <p>BOMBEROS</p>
          </div>
          <div>
            <h1>102</h1>
            <p>AYUDA AL NIÑO</p>
          </div>
          <div>
            <h1>103</h1>
            <p>DEFENSA CIVIL</p>
          </div>
          <div>
            <h1>105</h1>
            <p>EMERGENCIA AMBIENTAL</p>
          </div>
          <div>
            <h1>106</h1>
            <p>EMERGENCIA NÁUTICA</p>
          </div>
          <div>
            <h1>107</h1>
            <p>EMERGENCIA SALUD</p>
          </div>
        </div>
        </main>
      <ButtonBar />
    </TaskContextProvider>
  </React.StrictMode>
);
