import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const RESET = "RESET";
export const URL = "http://localhost3001";

export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${URL}/rickandmorty/fav`, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });

      // eslint-disable-next-line no-unreachable
    } catch (error) {
      console.error(error);
    }
  };
};

export const removeFavorite = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.delete(`${URL}/rickandmorty/fav/${id}`);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export function orderFavorites(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
export function filterFavorites(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function resetFavorites() {
  return {
    type: RESET,
  };
}
