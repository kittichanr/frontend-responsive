import "./App.css"
import footballPlayer from "./assets/footballer.png"
import player from "./assets/player.png"
import Section1 from "./components/Section1"

import MobileView from "./components/MobileView"
import { ATHLETS, PLAYER } from "./constants"
import Section2 from "./components/Section2"

function App() {
  return (
    <>
      <MobileView />
      <div className="container-section">
        <img className="image1" src={footballPlayer} alt="footballPlayer" />
        <div className="flex">
          <div className="flex-1" />
          <div className="text-title container-title">ATHLETS</div>
        </div>
        <Section1 data={ATHLETS} />
      </div>
      <div className="container-section">
        <img className="image2" src={player} alt="player" />
        <div className="container-title-section-2 text-title">PLAYERS</div>
        <Section2 data={PLAYER} />
      </div>
    </>
  )
}

export default App
