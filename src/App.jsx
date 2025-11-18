import { useState, Suspense } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="py-4 px-8 md:px-4">
          <Outlet />
      </main>
    </>
  );
}

export default App;
