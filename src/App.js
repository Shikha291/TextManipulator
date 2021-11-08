// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(67 83 98)";
      // document.title = "TextUtils - Dark mode";
      showAlert("Dark mode enabled", "success");
      // setInterval(() => {
      //   document.title = "TextUtils is amazing!!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils!!";
      // }, 1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.title = "TextUtils - Light mode";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    //Code below is JSX -> just like HTML code but the reserved keywords of JS such as class can't be used as such
    <>
      {/* <BrowserRouter> */}
        {/*fragment wrapper -> cannot add tags seperately, either group them into div or use fragment wrapper*/}
        <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar /> */}
          {/* <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter the text below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            /> */}
            {/* <Route exact path="/About" element={<About mode={mode} />} />
          </Routes> */}
        <TextForm heading="Enter the text below" mode={mode} showAlert={showAlert}/>
        {/* <About mode={mode} /> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
