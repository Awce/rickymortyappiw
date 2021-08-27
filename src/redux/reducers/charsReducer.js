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

const InitialState = {
  characters: [],
  error: null,
  loading: false,
  characterdelete: null,
  characterupdate: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = InitialState, action) {
  switch (action.type) {
    case WIEW_CHARACTERS:
    case ADD_CHARACTER:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CHARACTER_DONE:
      return {
        ...state,
        loading: false,
        characters: [...state.characters, action.payload],
      };
    case WIEW_CHARACTERS_ERROR:
    case ADD_CHARACTER_ERROR:
    case DEL_CHARACTER_ERROR:
    case UPDATE_CHARACTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case WIEW_CHARACTERS_DONE:
      return {
        ...state,
        loading: false,
        error: null,
        characters: action.payload,
      };
    case DEL_CHARACTER:
      return {
        ...state,
        characterdelete: action.payload,
      };
    case DEL_CHARACTER_DONE:
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character.id !== state.characterdelete
        ),
        characterdelete: null,
      };
    case UPDATE_CHARACTER:
      return {
        ...state,
        characterupdate: action.payload,
      };
    case UPDATE_CHARACTER_EDIT:
      return {
        ...state,
      };
    case UPDATE_CHARACTER_DONE:
      return {
        ...state,
        characterupdate: null,
        // characters: state.characters.map((character) => {
        //   // eslint-disable-next-line no-unused-expressions
        //   character.id === action.payload.id
        //     ? (character = action.payload)
        //     : character;
        // }),
      };
    default:
      return state;
  }
}
