import { connect } from "react-redux";

import FEnd from "../../components/FEnd/FEnd";
import { getScoreboard } from "../../redux/actions";

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLoad: () => {
      dispatch(getScoreboard());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FEnd);
