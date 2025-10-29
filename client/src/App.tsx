import Field from "./core/game/Field";
import { Routes, Route } from "react-router";
import Menu from "./components/Menu";
import { Suspense, lazy } from 'react';


function App() {
  return (
    <Routes>
      <Route index element={<Menu />} />
      <Route path="game" element={<Field />} />

    </Routes>
  );
}

export default App;
