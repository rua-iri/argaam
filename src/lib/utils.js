import { useDispatch } from "react-redux"
import { generateAnswer, resetState } from "../app/mainSlice";



export const resetGame = (dispatch) => {
    
    dispatch(resetState())
    dispatch(generateAnswer());

}