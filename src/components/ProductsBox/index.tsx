import { useState } from "react";
import { DesktopTower, GameController, Keyboard } from "phosphor-react"
import { ButtonProduct, ProductBoxContainer, ProductBoxContent, ProductBoxHeader, ProductItem } from "./style"

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { DeskTopListType } from "../../dataProducts/desktops/DesktopsList";


interface ProductBoxProps {
    icon: 'desktops' | 'accessories' | 'gamer'
    title: string
    data: {img: string, title: string}[]
    slidePerView?: number
}

export function ProductBox({icon, title, data}: ProductBoxProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      breakpoints: {
        "(max-width: 1375px)": {
          slides: { perView: 3, spacing: 5 },
        },
        "(max-width: 1000px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(max-width: 685px)": {
          slides: { perView: 1, spacing: 10 },
        },
      },
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })

    function Arrow(props: {
        disabled: boolean
        left?: boolean
        onClick: (e: any) => void
      }) {
        const disabeld = props.disabled ? " arrow--disabled" : ""
        return (
          <svg
            onClick={props.onClick}
            className={`arrow ${
              props.left ? "arrow--left" : "arrow--right"
            } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {props.left && (
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
          </svg>
        )
    }
    
    function createIcon(i: any) {
        switch(i){
            case 'desktops': {
                return <DesktopTower size={32} weight="bold" />;
            }
            case 'accessories': {
                return <Keyboard size={32} weight="bold" />
            }
            case 'gamer': {
              return <GameController size={32} weight="bold" />
            }
            default: {
                return;
            }
        }
    }

    return (
        <ProductBoxContainer>
            <ProductBoxHeader>
                {createIcon(icon)}
                <h3>{title}</h3>
            </ProductBoxHeader>
            <div className="navigation-wrapper">
              <ProductBoxContent ref={sliderRef} className="keen-slider">
                {data && data.map((product, index) => (
                  <ProductItem className="keen-slider__slide">
                    <img src={product.img} alt="" />
                    <p>{product.title}</p>
                    <ButtonProduct>VER PREÇO</ButtonProduct>
                  </ProductItem>
                ))}
              </ProductBoxContent>

              {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
              )}
        </div>
              {loaded && instanceRef.current && (
                <div className="dots">
                  {[
                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        className={"dot" + (currentSlide === idx ? " active" : "")}
                      ></button>
                    )
                  })}
                </div>
                )}
        </ProductBoxContainer>
    )
}