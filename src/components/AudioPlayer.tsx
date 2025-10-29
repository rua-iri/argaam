import { useEffect, useRef } from "react";
import { useAppSelector } from "../app/hooks";
import { TbVolume } from "react-icons/tb";
import { IconContext } from "react-icons";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const currentRoundNum = useAppSelector((state) => state.main.currentRoundNum);
  const maxRoundCount = useAppSelector((state) => state.main.maxRoundCount);
  const audioSpeed = useAppSelector((state) => state.main.audioSpeed);
  const answer = useAppSelector((state) => state.main.answer);
  console.log(answer)
  const fullPath = `/audio/${answer}.mp3`;

  function setPlaybackSpeed() {
    if (audioRef.current) audioRef.current.playbackRate = audioSpeed;
  }

  function playAudio() {
    if (!answer) return;
    if (currentRoundNum >= maxRoundCount) return;

    if (!audioRef.current) throw Error("audioRef not defined");

    const playPromise = audioRef.current.play();

    playPromise.catch((e) => {
      console.error(e);
      console.log("Audio Autoplay failed");
    });
  }


  useEffect(() => {
    if (currentRoundNum == 1) {
      setTimeout(() => {
        playAudio();
      }, 500);
    } else {
      playAudio();
    }
  }, [fullPath]);

  return (
    <>
      <button
        className="btn btn-primary h-full m-3 p-3 ring-1 ring-gray-300 group"
        onClick={() => playAudio()}
        aria-label="Play Audio"
      >
        <IconContext.Provider
          value={{
            className: "h-20 w-20 stroke-[0.75] group-hover:stroke-[1]",
          }}
        >
          <TbVolume />
        </IconContext.Provider>
      </button>
      <audio
        onCanPlay={() => setPlaybackSpeed()}
        ref={audioRef}
        src={fullPath}
      ></audio>
    </>
  );
}
