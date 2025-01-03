import { useEffect, useState } from "react";
import SliderArr from "@assets/icons/211607_right_arrow_icon.svg?react";
import Status from "../Status/Status";
import s from "./slider.module.scss";
import { useAppSelector } from "@/utils/store/store";

interface Props {
  amountSlides: number;
  content: JSX.Element[];
}

export default function Slider({ amountSlides, content }: Props) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { currentIndexOfLevel: currentLevel } = useAppSelector(
    (state) => state.game
  );

  useEffect(() => {
    setCurrentSlide(1);
  }, [currentLevel]);

  function next() {
    if (currentSlide < amountSlides) {
      setCurrentSlide((prev) => prev + 1);
    }
  }

  function prev() {
    if (currentSlide > 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  }

  return (
    <div className={s.slider}>
      <button
        onClick={prev}
        className={`${s.slider_arr} ${s.left} ${
          currentSlide === 1 ? s.unactive : ""
        }`}>
        <SliderArr width={20} />
      </button>

      <button
        onClick={next}
        className={`${s.slider_arr} ${s.right} ${
          currentSlide === amountSlides ? s.unactive : ""
        }`}>
        <SliderArr width={20} />
      </button>

      <Status active={currentSlide} items={3} />

      <div className={s.content}>
        <div className={`${s.content__item} ${s.active}`}>
          {content[currentSlide - 1]}
        </div>
        {/* {content.map((el, i) => (
          <div key={i}
            className={`${s.content__item} ${
              i + 1 === currentSlide ? s.active : ""
            }`}>
            {el}
          </div>
        ))} */}
      </div>
    </div>
  );
}
