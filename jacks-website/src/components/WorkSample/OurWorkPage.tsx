import React, {useState, useRef, useEffect} from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import './OurWork.css'

interface LandingPageProps {
  isNavbarOpen: boolean;
}

const DEFAULT_DURATION = 800;

const DEMONSTRATION_DELAY = 1000;

type Animation = {
  start: number;
  end: number;
  duration: number;
};

const START_POSITION = 55;
const END_POSITION_1 = 35;
const END_POSITION_2 = 80;

const ANIMATIONS: Animation[] = [
  { start: START_POSITION, end: END_POSITION_1, duration: DEFAULT_DURATION },
  { start: END_POSITION_1, end: END_POSITION_1, duration: 30 },
  { start: END_POSITION_1, end: END_POSITION_2, duration: DEFAULT_DURATION },
];

function timePhaseToCoordinateDifferenceCoefficient(x: number) {
  return (Math.sin(x * Math.PI - Math.PI / 2) + 1) / 2;
}

const OurWorkPage: React.FC<LandingPageProps> = ({ isNavbarOpen}) => {
  const JOB1_BEFORE = { imageUrl: '/before+after/1Before.png' };
  const JOB1_AFTER = { imageUrl: '/before+after/1After.png' };

  const JOB2_BEFORE = { imageUrl: '/before+after/2Before.png' };
  const JOB2_AFTER = { imageUrl: '/before+after/2After.png' };

  const JOB3_BEFORE = { imageUrl: '/before+after/3Before.png' };
  const JOB3_AFTER = { imageUrl: '/before+after/3After.png' };

  const JOB4_BEFORE = { imageUrl: '/before+after/4Before.png' };
  const JOB4_AFTER = { imageUrl: '/before+after/4After.png' };

  const JOB5_BEFORE = { imageUrl: '/before+after/5Before.png' };
  const JOB5_AFTER = { imageUrl: '/before+after/5After.png' };

  const JOB6_BEFORE = { imageUrl: '/before+after/6Before.png' };
  const JOB6_AFTER = { imageUrl: '/before+after/6After.png' };

  const JOB7_BEFORE = { imageUrl: '/before+after/7Before.png' };
  const JOB7_AFTER = { imageUrl: '/before+after/7After.png' };

  const JOB8_BEFORE = { imageUrl: '/before+after/8Before.png' };
  const JOB8_AFTER = { imageUrl: '/before+after/8After.png' };

  const JOB9_BEFORE = { imageUrl: '/before+after/9Before.png' };
  const JOB9_AFTER = { imageUrl: '/before+after/9After.png' };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  /** Delimiter */
  const [delimiterPercentPosition, setDelimiterPercentPosition] = useState<number>(START_POSITION);
  
      /** Animation start */
  const allAnimationsRef = useRef<Animation[]>([]);
  const animationStartTimeRef = useRef<number | null>(null);
  const animationPositionsRef = useRef<Animation | null>(null);
  const animate = (timestamp: number) => {
    let animationPositions = animationPositionsRef.current;

  if (!animationPositions) {
    const currentAnimation = allAnimationsRef.current.shift();
    if (!currentAnimation) {
      return;
    }
    animationPositions = animationPositionsRef.current = currentAnimation;
  }

  let animationStartTime = animationStartTimeRef.current;
  if (!animationStartTime) {
      animationStartTime = animationStartTimeRef.current = timestamp;
  }

  const {
      start: animationStartPosition,
      end: animationEndPosition,
      duration: animationDuration
  } = animationPositions;

  if (timestamp > animationStartTime + animationDuration) {
    setDelimiterPercentPosition(animationEndPosition);
    animationPositionsRef.current = null;
    animationStartTimeRef.current = null;
  } else {
    const animationPhase = (timestamp - animationStartTime) / animationDuration;
    const coordinatesDifference =
        (animationEndPosition - animationStartPosition)
        * timePhaseToCoordinateDifferenceCoefficient(animationPhase);

    setDelimiterPercentPosition(animationStartPosition + coordinatesDifference);
  }

      window.requestAnimationFrame(animate);
  }

    const demonstrate = () => {
        allAnimationsRef.current = [...ANIMATIONS];
        setTimeout(() => window.requestAnimationFrame(animate), DEMONSTRATION_DELAY);
    };

    useEffect(() => {
      demonstrate();
  }, []);

      
      /** Animation end */

  return (
    <div className="text-center p-10 min-h-[72vh] bg-white flex-col flex justify-center items-center">

      <h1 className={`text-6xl font-bold mb-4 ${isNavbarOpen ? 'visible' : 'visible'}`}>Examples of Our Work</h1>

      <p className={`font-bold text-4xl ${isNavbarOpen ? 'visivle' : 'visible'}`}>Drag the sliders below to see before and after!</p>

      <div className='all-work-container lg:w-[80%]'>

        <div className={`slider-container ${isNavbarOpen ? 'visible' : 'visible'}`}>
          <ReactBeforeSliderComponent
            currentPercentPosition={delimiterPercentPosition}
            firstImage={JOB1_AFTER}
            secondImage={JOB1_BEFORE}
            onChangePercentPosition={setDelimiterPercentPosition}
          />
        </div>

        <div className={`slider-container ${isNavbarOpen ? 'visible' : 'visible'}`}>
          <ReactBeforeSliderComponent
            firstImage={JOB2_AFTER}
            secondImage={JOB2_BEFORE}
          />
        </div>

        <div className={`slider-container ${isNavbarOpen ? 'visible' : 'visible'}`}>
          <ReactBeforeSliderComponent
            firstImage={JOB3_AFTER}
            secondImage={JOB3_BEFORE}
          />
        </div>

        <div className={`slider-container ${isNavbarOpen ? 'visible' : 'visible'}`}>
        <ReactBeforeSliderComponent
          firstImage={JOB4_AFTER}
          secondImage={JOB4_BEFORE}
        />
      </div>

      <div className={`slider-container ${isNavbarOpen ? 'visible' : 'visible'}`}>
        <ReactBeforeSliderComponent
          firstImage={JOB5_AFTER}
          secondImage={JOB5_BEFORE}
        />
      </div>

      <div className={`slider-container ${isNavbarOpen ? 'visible' : 'visible'}`}>
        <ReactBeforeSliderComponent
          firstImage={JOB6_AFTER}
          secondImage={JOB6_BEFORE}
        />
      </div>

      <div className={`slider-container ${isNavbarOpen ? 'visible' : 'visible'}`}>
        <ReactBeforeSliderComponent
          firstImage={JOB7_AFTER}
          secondImage={JOB7_BEFORE}
        />
      </div>

      <div className={`slider-container ${isNavbarOpen ? 'visible' : 'visible'}`}>
        <ReactBeforeSliderComponent
          firstImage={JOB8_AFTER}
          secondImage={JOB8_BEFORE}
        />
      </div>

      <div className={`slider-container ${isNavbarOpen ? 'visible' : 'visible'}`}>
        <ReactBeforeSliderComponent
          firstImage={JOB9_AFTER}
          secondImage={JOB9_BEFORE}
        />
      </div>

      </div>
    </div>
  );
};

export default OurWorkPage;