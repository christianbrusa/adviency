
function App() {

  let listOfGifts = ["Buzo", "Remera", "Bermuda"];

  return (
    <div className="App">
      <h2>Regalos</h2>
      {
        listOfGifts.map(gift => {
          return (
            <ul>
              <li>
                {gift}
              </li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default App
