import { useState } from "react";
import FoodForm  from '../components/FoodForm';
import CategoryForm  from '../components/CategoryForm';

function Add() {
  const [activeTab, setActiveTab] = useState("food"); // food | category

  return (
    <div>
      <h2>Qo‘shish</h2>
      <p>Yangi kategoriya/taom qo‘shish</p>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("category")}
          className={activeTab === "category" ? "active-tab" : ""}
        >
          Kategoriya
        </button>

        <button
          onClick={() => setActiveTab("food")}
          className={activeTab === "food" ? "active-tab" : ""}
        >
          Taom
        </button>
      </div>

      {/* Content */}
      {activeTab === "food" ? <FoodForm /> : <CategoryForm />}
    </div>
  );
}

export default Add;
