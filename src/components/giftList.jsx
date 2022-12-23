import { useState } from "react";
import InputBar from "./inputBar";
import "../css/giftList.css";

export default function GiftList() {

    const [listOfGifts, setListOfGifts] = useState([]);

    function removeGift(selectedGift){
        let newlistOfGifts = listOfGifts.filter(gift => gift != selectedGift);
        setListOfGifts(newlistOfGifts);
    }

    function removeAllGifts(){
        setListOfGifts([]);
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
                            <div class="row g-4">
                                <div class="col-sm-6 col-md-8">
                                    <ul>
                                        <li>
                                            {gift}
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6 col-md-4" id="delete-button-column">
                                    <button id="delete-button" onClick={() => removeGift(gift)}>
                                        <img id="delete-icon" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1670898341/advincy/delete-icon_xmuw21.png" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="delete-all-button">
                <button type="button" class="btn btn-danger" onClick={() => removeAllGifts()}>Borrar todo</button>
            </div>
        </div>
    )
}