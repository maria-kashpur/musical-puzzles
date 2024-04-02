import Question from './Question/Question';
import Answer from './Answer/Answer';
import Resut from './Result/Resut';
import Slider from '@/components/Slider/Slider';

export default function PlayGame() {
  return (
    <section className="section">
      <Slider
        amountSlides={3}
        content={[
          <Question />,
          <Answer />,
          <Resut />,
        ]}></Slider>
    </section>
  );
}
