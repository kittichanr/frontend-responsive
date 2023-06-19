import "./styles.css"

interface Props {
  data: {
    number: string
    title: string
    description: string
    underlineColor?: string
    textColor?: string
    bgColor?: string
  }[]
}

const Section1 = ({ data }: Props) => {
  const vhIndex = (index: number) => {
    if (index === 0) {
      return "14vh"
    } else if (index === 1) {
      return "16vh"
    } else if (index === 2) {
      return "18vh"
    }
  }
  return (
    <>
      {data.map((item, index) => (
        <div className="flex" key={index} style={{ background: item.bgColor }}>
          <div className="flex-1" />
          <div className="container" style={{ height: vhIndex(index) }}>
            <div className="title-container">
              <div>
                <div>{item.number}</div>
                <div
                  className={
                    item.underlineColor === "white"
                      ? "underline-white"
                      : "underline-purple"
                  }
                />
              </div>
              <div className="title-text">{item.title}</div>
            </div>
            <div style={{ color: item.textColor }} className="description-text">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Section1
