import React, {useState} from "react";
import { findDOMNode } from "react-dom";
import Item from "./Item";

function ShoppingList({ items }) {
  //console.log(items)
  const [selectedCategory, setSelectedCategory]=useState("Filter by category")
  
  function handelFilter(e){
    setSelectedCategory(e.target.value)
  }
  const itemsToRender = items.filter((item)=>{
    if(selectedCategory==="Filter by category"){
      return true
    }else {
      return item.category===selectedCategory
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handelFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToRender.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
