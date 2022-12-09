import "../css/giftList.css";

export default function GiftList() {

    let listOfGifts = ["Buzo", "Remera", "Bermuda"];

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
                {
                    listOfGifts.map(gift => {
                        return (
                            <ul>
                                <lu>
                                    {gift}
                                </lu>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}