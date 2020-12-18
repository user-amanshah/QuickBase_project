import {
  POST_VALUES,
  FETCH_VALUES,
  DELETE_VALUE,
  CLEAR_VALUES,
} from "../actions/types";
const INITIAL_STATE = {
  label: "Sales Region",
  defaultChoice: "Asia",
  multiSelect: true,
  addChoice: "",
  Choices: [
    "Australia",
    "South Africa",
    "Antartica",
    "South America",
    "China",
    "India",
    "Japan",
    "Chile",
    "llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogog",
  ],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_VALUES:
      if (
        action.payload.defaultChoice == undefined ||
        (state.Choices.includes(action.payload.defaultChoice) &&
          !state.Choices.includes(action.payload.addChoice) &&
          state.Choices.length < 40)
      ) {
        return {
          label: action.payload.label,
          defaultChoice: action.payload.defaultChoice,
          multiSelect: action.payload.multiSelect,
          Choices: [...state.Choices, action.payload.addChoice],
        };
      } else if (
        state.Choices.includes(action.payload.addChoice) ||
        state.Choices.length > 40
      ) {
        return state;
      } else {
        return {
          label: action.payload.label,
          defaultChoice: action.payload.defaultChoice,
          multiSelect: action.payload.multiSelect,
          Choices: [
            ...state.Choices,
            action.payload.addChoice,
            action.payload.defaultChoice,
          ],
        };
      }
    case FETCH_VALUES:
      return state;
    case CLEAR_VALUES:
      return {
        ...state,
        label: "",
        defaultChoice: "",
        multiSelect: false,
        Choices: [],
      };

    case DELETE_VALUE:
      return {
        ...state,
        Choices: state.Choices.filter((choice) => choice !== action.payload),
      };
    default:
      return state;
  }
};
