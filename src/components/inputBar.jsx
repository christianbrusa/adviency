import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/inputBar.css";

export default function InputBar({listOfGifts, setListOfGifts}) {

    const [text, setText] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleGiftName(e){
        setText(e.target.value);
    }

    function addGift(){
        if(text && !listOfGifts.includes(text)){
            setListOfGifts([...listOfGifts, `${text} (${quantity})`]);
            setQuantity(1);
        }
    }

    function increase(){
        setQuantity(quantity + 1);
    }

    function decrease(){
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
            <div className="form">
                <input type="search" className="form-control" onChange={(e) => handleGiftName(e)}/>
                <div className="item-count">
                    <button id= "add" onClick={increase}>+</button>
                    <input id= "quantity" value={quantity}></input>
                    <button id= "remove" onClick={decrease}>-</button>
                </div>
                <button type="button" className="btn btn-warning" onClick={addGift}>Agregar</button>
            </div>
        </>
    )

}