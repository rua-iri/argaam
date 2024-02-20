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

function App() {

  const dispatch = useDispatch();
  const answer = useSelector((state) => state.main.answer);

  const baseURL = "https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=Leila22k?inputText=";
  // const randNum = Math.ceil(Math.random() * 50);
  let randNum;
  const rand64 = btoa(randNum);
  // const fullURL = baseURL + rand64;
  // console.log(fullURL);

  console.log(randNum)
  console.log(typeof (randNum))

  useEffect(() => {
    if (answer === null) {
      randNum = dispatch(generateAnswer());
      console.log(randNum)
    }
  }, []);

  return (
    <>
      <Header />
      <div className='flex justify-center'>
        <div className='flex-col items-center justify-center px-5 py-10 border'>
          <ScoreBoard />
          <InputForm />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
