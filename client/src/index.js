import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DataProvider from "./providers/DataProvider";
import Home from "./pages/Home";
import Users from "./pages/Users";

const NotFound = () => {
  return <p>path not found</p>;
};

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/users" element={<Users/>} />
          <Route path="*" element={<NotFound />} />
          {/* <Route exact path="/users/:id" component={UserShow} />
          <Route exact path="/grades" component={Grades} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/skills/:id" component={SkillShow} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
