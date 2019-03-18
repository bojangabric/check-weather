import { GET_CITY_INFO } from "../actions/types";

const initialState = {
  city: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CITY_INFO:
      return {
        ...state,
        city: action.payload
      };
    default:
      return state;
  }
}
