
import { generateAnswer, resetState } from "../app/mainSlice";



export const resetGame = (dispatch) => {
    dispatch(resetState())
    dispatch(generateAnswer());
}


export const saveSettings = (dispatch, event) => {

    // const settingsData = new FormData(event.target);

    console.log(event)
    
    alert("Saving Settings")
    
}


