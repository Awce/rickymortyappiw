import { notification } from "antd";
import axios from "axios";

import {
  ADD_CHARACTER,
  ADD_CHARACTER_DONE,
  ADD_CHARACTER_ERROR,
  WIEW_CHARACTERS,
  WIEW_CHARACTERS_DONE,
  WIEW_CHARACTERS_ERROR,
  UPDATE_CHARACTER,
  UPDATE_CHARACTER_EDIT,
  UPDATE_CHARACTER_DONE,
  UPDATE_CHARACTER_ERROR,
  DEL_CHARACTER,
  DEL_CHARACTER_DONE,
  DEL_CHARACTER_ERROR,
} from "../types";

const openNotificationAdd = (type) => {
  notification[type]({
    message: "Excelente!!",
    description: "Se agrego el Personaje, correctamente",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

const openNotificationUpdate = (type) => {
  notification[type]({
    message: "Bien !!",
    description: "Se actualizo el Personaje, correctamente",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

const openNotificationDelete = (type) => {
  notification[type]({
    message: "Lastima !!",
    description: "Se elimino el Personaje, correctamente",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

// C
export function createNewCharAction(character) {
  return async (dispatch) => {
    dispatch(addCharacter());
    try {
      // insertar en LocalStorage
      // await writeCharsData();
      dispatch(addCharacterDone(character));
      openNotificationAdd("success");
    } catch (error) {
      console.log(error);
      dispatch(addCharacterError(true));
    }
  };
}

const addCharacter = () => ({
  type: ADD_CHARACTER,
  payload: true,
});

const addCharacterDone = (character) => ({
  type: ADD_CHARACTER_DONE,
  payload: character,
});

const addCharacterError = (error) => ({
  type: ADD_CHARACTER_ERROR,
  payload: error,
});

// R
export function getAllCharactersAction() {
  return async (dispatch) => {
    dispatch(viewAllCharacters());
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const response = await axios.get(url);
      dispatch(viewAllCharactersDone(response.data.results));
    } catch (error) {
      console.log(error);
      dispatch(viewAllCharactersError());
    }
  };
}

const viewAllCharacters = () => ({
  type: WIEW_CHARACTERS,
  payload: true,
});

const viewAllCharactersDone = (characters) => ({
  type: WIEW_CHARACTERS_DONE,
  payload: characters,
});

const viewAllCharactersError = () => ({
  type: WIEW_CHARACTERS_ERROR,
  payload: true,
});

// U
export function updateCharacterAction(character) {
  return async (dispatch) => {
    dispatch(updateCharacter(character));
  };
}

const updateCharacter = (character) => ({
  type: UPDATE_CHARACTER,
  payload: character,
});

export function updateCharacterEditAction(character) {
  return async (dispatch) => {
    dispatch(updateCharacterEdit());
    try {
      dispatch(updateCharacterDone(character));
      openNotificationUpdate("success");
    } catch (error) {
      console.log(error);
      dispatch(updateCharacterError(true));
    }
  };
}

const updateCharacterEdit = (character) => ({
  type: UPDATE_CHARACTER_EDIT,
});

const updateCharacterDone = (character) => ({
  type: UPDATE_CHARACTER_DONE,
  payload: character,
});

const updateCharacterError = (error) => ({
  type: UPDATE_CHARACTER_ERROR,
  payload: error,
});

// D
export function deleteCharacterAction(id) {
  return async (dispatch) => {
    dispatch(delCharacter(id));
    try {
      dispatch(delCharacterDone());
      openNotificationDelete("success");
    } catch (error) {
      console.log(error);
      dispatch(delCharacterError());
    }
  };
}

const delCharacter = (id) => ({
  type: DEL_CHARACTER,
  payload: id,
});

const delCharacterDone = () => ({
  type: DEL_CHARACTER_DONE,
});

const delCharacterError = () => ({
  type: DEL_CHARACTER_ERROR,
  payload: true,
});
