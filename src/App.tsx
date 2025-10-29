import { useDispatch } from 'react-redux';
import './App.css'
import './scss/styles.scss'
import InputForm from './components/InputForm';
import { generateAnswer } from "./app/mainSlice";
import Header from './components/Header';
import { useEffect, useRef } from 'react';
import Footer from './components/Footer';
import ScoreBoard from './components/ScoreBoard';
import GameOver from './components/GameOver';
import Settings from './components/Settings';
import { useAppSelector } from './app/hooks';
// import Toast from './components/Toast';

function App() {

  const dispatch = useDispatch();
  const maxRoundCount = useAppSelector((state) => state.main.maxRoundCount);
  const currentRoundNum = useAppSelector((state) => state.main.currentRoundNum);
  const answer = useAppSelector((state) => state.main.answer);

  const settingsRef = useRef<HTMLDialogElement>(null); 
  const gameOverRef = useRef<HTMLDialogElement>();


  useEffect(() => {
    if (answer === null) {
      dispatch(generateAnswer());
      // console.log(answer)
    }
  }, []);

  useEffect(() => {
    if (gameOverRef.current && currentRoundNum >= maxRoundCount) {
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
