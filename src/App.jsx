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
import Toast from './components/Toast';

function App() {

  const dispatch = useDispatch();
  const maxRoundCount = useSelector((state) => state.main.maxRoundCount);
  const currentRoundNum = useSelector((state) => state.main.currentRoundNum);
  const answer = useSelector((state) => state.main.answer);

  const settingsRef = useRef();
  const gameOverRef = useRef();


  useEffect(() => {
    if (answer === null) {
      dispatch(generateAnswer());
      // console.log(answer)
    }
  }, []);

  useEffect(() => {
    if (currentRoundNum >= maxRoundCount) {
      gameOverRef.current.showModal();
    }
  }, [currentRoundNum])

  return (
    <div className="flex flex-col h-screen">
      <Header settingsRef={settingsRef} />

      <div className="relative flex-grow border">
        <div className='flex justify-center my-32 relative'>
          <div className='flex-col items-center justify-center border border-slate-300 shadow-xl rounded-md'>
            <ScoreBoard />
            <InputForm />
          </div>
        </div>
      </div>


      {/* <div className='my-3 text-center text-red-600'>{answer}</div> */}

      <Footer />

      <GameOver gameOverRef={gameOverRef} />

      <Settings settingsRef={settingsRef} />


      {/* {
        false
          ? <Toast />
          : ""
      } */}

    </div>
  )
}

export default App
