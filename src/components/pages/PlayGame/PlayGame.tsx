import Question from './Question/Question';
import Answer from './Answer/Answer';
import Resut from './Result/Resut';
import Slider from '@/components/Slider/Slider';
import { useAppSelector } from '@/utils/store/store';
import { useEffect } from 'react';

export default function PlayGame() {
  return (
      <Slider
        amountSlides={3}
        content={[
          <Question />,
          <Answer />,
          <Resut />,
        ]}></Slider>
  );
}
