import React from "react";

function CatList({ cats, onDeleteCat }) {
  return (
    <div className="space-y-4">
      {cats.length === 0 ? (
        <p className="text-center text-gray-500">🐾 Все още няма котки...</p>
      ) : (
        cats.map((cat) => (
          <div
            key={cat.id}
            className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center"
          >
            {/* 🔹 Име, възраст и порода */}
            <div>
              <h2 className="text-xl font-semibold">{cat.name}</h2>
              <p className="text-gray-600">🕰️ {cat.age} години</p>
              <p className="text-gray-600">🐾 Порода: {cat.breed}</p>
            </div>

            {/* 🔹 Бутон за изтриване */}
            <button
              onClick={() => onDeleteCat(cat.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              🗑️ Изтрий
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CatList;
