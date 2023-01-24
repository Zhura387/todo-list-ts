import React from "react";
import { Route,Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { AboutPage } from "./Components/Pages/AboutPage";
import { TodosPage } from "./Components/Pages/TodosPage";

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <div className="container">
<Routes>
  <Route path="/" element={<TodosPage />} />
  <Route path="info" element={<AboutPage />} />
</Routes>
      </div>
    </>
  );
}

export default App;
