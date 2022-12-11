import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/inputBar.css";

export default function InputBar({listOfGifts, setListOfGifts}) {

    const [text, setText] = useState("");

    function handleGiftName(e){
        setText(e.target.value);
    }

    function addGift(){
        if(text){
            setListOfGifts([...listOfGifts, text]);
        }
    }

    return (
        <>
            <div className="form">
                <input type="search" className="form-control" onChange={(e) => handleGiftName(e)}/>
                <button type="button" className="btn btn-warning" onClick={addGift}>Agregar</button>
            </div>
        </>
    )

}