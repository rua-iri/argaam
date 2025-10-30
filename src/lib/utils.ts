import type { Dispatch } from "@reduxjs/toolkit";
import { generateAnswer, resetState, setAudioSpeed } from "../app/mainSlice";
import type { FormEvent } from "react";
import type { AppDispatch } from "../app/store";

export const resetGame = (dispatch: AppDispatch) => {
  dispatch(resetState());
  dispatch(generateAnswer());
};

export const saveSettings = (
  dispatch: Dispatch,
  event: FormEvent<HTMLFormElement>
) => {
  // event.preventDefault();

  const settingsData = new FormData(event.currentTarget);
  console.log(settingsData);

  dispatch(setAudioSpeed(settingsData.get("audioSpeed")));
};

export const checkIsExistingPlayer = (): boolean => {
  if (sessionStorage.getItem("isExistingPlayer") === "true") {
    return true;
  }

  return false;
};

export const createExistingPlayer = (): void => {
  sessionStorage.setItem("isExistingPlayer", "true");
  sessionStorage.setItem("userFirstPlayed", String(new Date().getTime()));
};
