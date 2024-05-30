
import { generateAnswer, resetState, setAudioSpeed } from "../app/mainSlice";



export const resetGame = (dispatch) => {
    dispatch(resetState())
    dispatch(generateAnswer());
}



export const saveSettings = (dispatch, event) => {

    // event.preventDefault();

    const settingsData = new FormData(event.target);
    console.log(settingsData);

    dispatch(
        setAudioSpeed(
            settingsData.get("audioSpeed")
        )
    );

    
}




