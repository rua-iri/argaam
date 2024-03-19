import { useDispatch, useSelector } from 'react-redux';
import './App.css'
// Import our custom CSS and JS
import './scss/styles.scss'
import InputForm from './components/InputForm';
import { generateAnswer } from "./app/mainSlice";
import Header from './components/Header';
import { useEffect } from 'react';
import Footer from './components/Footer';
import ScoreBoard from './components/ScoreBoard';
import GameOver from './components/GameOver';

function App() {

  const dispatch = useDispatch();
  const totalRoundCount = useSelector((state) => state.main.totalRoundCount);
  const currentRoundNum = useSelector((state) => state.main.currentRoundNum);


  const answer = useSelector((state) => state.main.answer);


  useEffect(() => {
    if (answer === null) {
      dispatch(generateAnswer());
      // console.log(answer)
    }
  }, []);

  return (
    <>
      <Header />

      <div className="relative flex-grow h-full border border-red-500">
        <div className='flex justify-center my-32'>
          <div className='flex-col items-center justify-center border border-slate-300 rounded-md'>
            <ScoreBoard />
            <InputForm />
          </div>
        </div>

        <div className="flex-grow">
          <div className="absolute top-0 bottom-0 mx-auto left-1/2 transform -translate-x-1/2 z-0 w-full max-w-screen">
            <img className="w-full h-full object-cover" src="/background-desktop.svg" alt="background image" />
          </div>
        </div>
      </div>

      {/* <div className='my-3 text-center text-red-600'>{answer}</div> */}

      <Footer />

      {currentRoundNum >= totalRoundCount
        ? <GameOver />
        : ""}




    </>
  )
}

export default App
