import './App.css'
import InputForm from './components/InputForm';

function App() {

  const baseURL = "https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=Leila22k?inputText=";
  const randNum = Math.ceil(Math.random() * 50);
  const rand64 = btoa(randNum);
  const fullURL = baseURL + rand64

  console.log(fullURL)

  return (
    <>
      {randNum}
      <audio src={fullURL}></audio>
      <InputForm />
    </>
  )
}

export default App
