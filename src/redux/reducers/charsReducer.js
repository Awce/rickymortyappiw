import {
  ADD_CHARACTER,
  ADD_CHARACTER_DONE,
  ADD_CHARACTER_ERROR,
} from "../types";

const InitialState = {
  characters: [],
  error: null,
  loading: false,
};

export default function (state = InitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
