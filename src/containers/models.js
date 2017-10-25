import { connect } from "vue2-redux";
import { getModels } from "../actions/models";

export default connect(
  state => ({
    models: state.Models.models
  }),
  dispatch => ({
    requestModels: () => dispatch(getModels())
  })
);
