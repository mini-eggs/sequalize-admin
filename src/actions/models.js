import { API_ROUTE } from "../constants";
import { RECEIVED_MODELS } from "../constants/models";

export const getModels = () => async dispatch => {
  // fetch(`${API_ROUTE}/api/get/models`)
  //   .then(res => res.json())
  //   .then(payload => dispatch({ type: RECEIVED_MODELS, payload }))
  //   .catch(console.log);

  const res = await fetch(`${API_ROUTE}/api/get/models`);
  const payload = await res.json();
  dispatch({ type: RECEIVED_MODELS, payload });
};
