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
      <div className='flex justify-center my-20'>
        <div className='flex-col items-center justify-center border border-slate-300 rounded-md'>
          <ScoreBoard />
          <InputForm />
        </div>
      </div>

      <div className='my-3 text-center text-red-600'>
        {answer}
      </div>

      <Footer />

      {currentRoundNum >= totalRoundCount
        ? <GameOver />
        : ""}

    </>
  )
}

export default App
