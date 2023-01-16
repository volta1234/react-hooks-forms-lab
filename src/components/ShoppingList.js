import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemsChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[inputText, setInputText] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onFieldSearch(event) {
    setInputText(event.target.value);
  }

  const itemsToDisplay = items

  items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  items.filter((item) => {
    if(item.name === inputText){
      return true
    }
  });

  function onItemFormSubmit(newItem) {
    onItemsChange(newItem)
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onFieldSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
