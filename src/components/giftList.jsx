import { useState } from "react";
import InputBar from "./inputBar";
import "../css/giftList.css";

export default function GiftList() {

    const [listOfGifts, setListOfGifts] = useState([]);

    function removeGift(selectedGift){
        let newlistOfGifts = listOfGifts.filter(gift => gift != selectedGift);
        setListOfGifts(newlistOfGifts);
    }

    return (
        <div className="container">
            <div>
                <img 
                    src="https://res.cloudinary.com/dycoseuyv/image/upload/v1670554472/advincy/icon-santa-2-removebg-preview_pkxhdk.png" 
                    alt=""
                    width="130px"
                    height="90px"
                    id="santa-icon"
                />
                <p>Regalos</p>
            </div>
            <div className="gift-list">
                <InputBar listOfGifts={listOfGifts} setListOfGifts={setListOfGifts}/>
                {
                    listOfGifts.map(gift => {
                        return (
                            <ul>
                                <li>
                                    {gift}
                                    <button id="delete-button" onClick={() => removeGift(gift)}>
                                    <img id="delete-icon" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1670898341/advincy/delete-icon_xmuw21.png" />
                                    </button>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}