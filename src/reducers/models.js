import { RECEIVED_MODELS } from "../constants/models";

const initial = {
  models: []
};

export default (state = initial, { type, payload }) => {
  switch (type) {
    case RECEIVED_MODELS: {
      return { ...state, models: payload.models };
    }
    default: {
      return state;
    }
  }
};
