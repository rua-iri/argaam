import { useDispatch } from 'react-redux';
import './App.css'
// Import our custom CSS and JS
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import InputForm from './components/InputForm';
import { setAnswer } from "./app/mainSlice";
import SubmitResults from './components/SubmitResults';

function App() {

  const dispatch = useDispatch();

  const baseURL = "https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=Leila22k?inputText=";
  const randNum = Math.ceil(Math.random() * 50);
  const rand64 = btoa(randNum);
  const fullURL = baseURL + rand64

  dispatch(setAnswer(randNum));

  console.log(fullURL)

  return (
    <>
      {randNum}
      {/* <audio src={fullURL}></audio> */}
      <InputForm />
      <SubmitResults />
    </>
  )
}

export default App
