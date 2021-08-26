import {
  ADD_CHARACTER,
  ADD_CHARACTER_DONE,
  ADD_CHARACTER_ERROR,
} from "../types";

// crear nuevos personajes
export function createNewCharAction(character) {
  return () => {
    console.log(character);
  };
}
