import axios from "axios";
import {
FETCH_ALL_BREEDS_REQUEST,
FETCH_ALL_BREEDS_SUCCESS,
FETCH_ALL_BREEDS_ERROR,
FETCH_SINGLE_BREED_REQUEST,
FETCH_SINGLE_BREED_SUCCESS,
FETCH_SINGLE_BREED_ERROR
} from "./types";

export const fetchDogBreeds = () => {
  return dispatch => {
    dispatch({ type: FETCH_ALL_BREEDS_REQUEST });

    axios.get('https://dog.ceo/api/breeds/list/all').then(res => {
      dispatch({ type: FETCH_ALL_BREEDS_SUCCESS, payload: res.data.message});
    }).catch(error => {
      console.error(error);
      dispatch({ type: FETCH_ALL_BREEDS_ERROR, payload: error });
    });
  }
};

export const fetchSingleBreed = (breed) => {
  return dispatch => {
    dispatch({ type: FETCH_SINGLE_BREED_REQUEST });

    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(res => {
      dispatch({ type: FETCH_SINGLE_BREED_SUCCESS, payload: res.data.message});
    }).catch(error => {
      console.error(error);
      dispatch({ type: FETCH_SINGLE_BREED_ERROR, payload: error });
    });
  }
};
