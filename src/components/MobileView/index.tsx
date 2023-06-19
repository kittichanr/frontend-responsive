import footballPlayerBg from "../../assets/footballer_bg.png"
import playerBg from "../../assets/player_bg.png"

import SwiperComponent from "../Swiper"
import { ATHLETS, PLAYER } from "../../constants"

import "./styles.css"

const MobileView = () => {
  return (
    <div className="mobile">
      <div className="text-title container-title">ATHLETS</div>
      <img
        className="image-athlets-mobile"
        src={footballPlayerBg}
        alt="footballPlayerBg"
      />
      <div className="box-container" />
      <SwiperComponent data={ATHLETS} />
      <div className="text-title container-title">Player</div>
      <div>
        <img className="image-player-mobile" src={playerBg} alt="playerBg" />
        <div className="box-container" />
      </div>
      <SwiperComponent data={PLAYER} />
    </div>
  )
}

export default MobileView
