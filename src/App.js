import React from "react";
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="bg-zinc-900 min-h-screen min-w-screen">
      <div className="pb-[64px]">
        <Navbar />
      </div>
      <div className="p-10">
        <AppRouter />
      </div>
    </div>
  );
}
