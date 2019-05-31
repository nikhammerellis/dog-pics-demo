import {
  FETCH_ALL_BREEDS_REQUEST,
  FETCH_ALL_BREEDS_SUCCESS,
  FETCH_ALL_BREEDS_ERROR,
  FETCH_SINGLE_BREED_REQUEST,
  FETCH_SINGLE_BREED_SUCCESS,
  FETCH_SINGLE_BREED_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  dogsLoading: false,
  dogBreeds: {},
  singleBreedImages: [],
  error: ""
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ALL_BREEDS_REQUEST:
      return {
        dogsLoading: true
      };
    case FETCH_ALL_BREEDS_SUCCESS:
      return {
        dogsLoading: false,
        dogBreeds: action.payload
      };
    case FETCH_ALL_BREEDS_ERROR:
      return {
        dogsLoading: false,
        error: action.payload
      };
    case FETCH_SINGLE_BREED_REQUEST:
      return {
        dogsLoading: true
      };
    case FETCH_SINGLE_BREED_SUCCESS:
      return {
        dogsLoading: false,
        singleBreedImages: action.payload
      };
    case FETCH_SINGLE_BREED_ERROR:
      return {
        dogsLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
