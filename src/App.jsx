import { useDispatch, useSelector } from 'react-redux';
import './App.css'
// Import our custom CSS and JS
import './scss/styles.scss'
import InputForm from './components/InputForm';
import { generateAnswer } from "./app/mainSlice";
import Header from './components/Header';
import { useEffect, useRef } from 'react';
import Footer from './components/Footer';
import ScoreBoard from './components/ScoreBoard';
import GameOver from './components/GameOver';
import Settings from './components/Settings';

function App() {

  const dispatch = useDispatch();
  const totalRoundCount = useSelector((state) => state.main.totalRoundCount);
  const currentRoundNum = useSelector((state) => state.main.currentRoundNum);

  const settingsRef = useRef();


  const answer = useSelector((state) => state.main.answer);


  useEffect(() => {
    if (answer === null) {
      dispatch(generateAnswer());
      // console.log(answer)
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header settingsRef={settingsRef} />

      <div className="relative flex-grow border">
        <div className='flex justify-center my-32 relative z-10'>
          <div className='flex-col items-center justify-center border border-slate-300 shadow-xl rounded-md'>
            <ScoreBoard />
            <InputForm />
          </div>
        </div>
      </div>

      {/* <div className='my-3 text-center text-red-600'>{answer}</div> */}

      <Footer />

      {currentRoundNum >= totalRoundCount
        ? <GameOver />
        : ""}

        <Settings settingsRef={settingsRef} />

    </div>
  )
}

export default App
