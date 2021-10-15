import React,{useState} from "react";

function Item({ name, category }) {
  const [card,setToCard] = useState(true)
   
  function changeCardButton(){
    setToCard((card)=>!card)
  }
  return (
    <li className={!card? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeCardButton}>{card ?"Add to Cart" : "Remove From Cart"} </button>
    </li>
  );
}

export default Item;
