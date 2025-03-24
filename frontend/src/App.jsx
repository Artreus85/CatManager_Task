import React, { useState, useEffect } from "react";
import axios from "axios";
import CatForm from "./components/CatForm"; // 🔹 Форма за добавяне на котка
import CatList from "./components/CatList"; // 🔹 Списък с котки

function App() {
  // 🐱 Държим списъка с котки в state
  const [cats, setCats] = useState([]);

  // 📥 Зареждаме котките от бекенда при стартиране
  //useEffect();

  // ➕ Функция за добавяне на котка
  const addCat = (cat) => {};

  // ❌ Функция за изтриване на котка
  const deleteCat = (id) => {};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* 🔹 Заглавие на приложението */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        🐱 Cat Manager 3000
      </h1>

      {/* 🔹 Форма за добавяне на котка */}
      <CatForm onAddCat={addCat} />

      {/* 🔹 Списък на котките */}
      <CatList cats={cats} onDeleteCat={deleteCat} />
    </div>
  );
}

export default App;
