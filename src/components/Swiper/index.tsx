/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react"

// @ts-ignore
import { Pagination } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "./styles.css"

interface Props {
  data: {
    number: string
    title: string
    description: string
  }[]
}

const SwiperComponent = ({ data }: Props) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      style={{
        width: "100%",
        backgroundColor: "#f5f4f9",
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-container">
            <div className="title-container">
              <div>
                <div>{item.number}</div>
                <div className="underline-purple" />
              </div>
              <div className="title-text">{item.title}</div>
            </div>
            <div className="description-text">{item.description}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperComponent
