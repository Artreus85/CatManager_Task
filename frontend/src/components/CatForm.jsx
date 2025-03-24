import React, { useState } from "react";

function CatForm({ onAddCat }) {
  // 📝 Състояния за формата (име, възраст, порода)
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");

  // ➕ Функция за изпращане на нова котка
  const handleSubmit = (e) => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow-lg rounded-lg mb-6"
    >
      {/* 🔹 Поле за име */}
      <input
        type="text"
        placeholder="Име на котката"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full rounded-md mb-2"
      />

      {/* 🔹 Поле за възраст */}
      <input
        type="number"
        placeholder="Възраст (години)"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 w-full rounded-md mb-2"
      />

      {/* 🔹 Поле за порода */}
      <input
        type="text"
        placeholder="Порода"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        className="border p-2 w-full rounded-md mb-4"
      />

      {/* 🔹 Бутон за добавяне */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600"
      >
        ➕ Добави котка
      </button>
    </form>
  );
}

export default CatForm;
