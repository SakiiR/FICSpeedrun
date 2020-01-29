import { connect } from "react-redux";

import FTable from "../../components/FTable/FTable";
import { getScoreboard } from "../../redux/actions";

function mapStateToProps(state, ownProps) {
  return {
    teams: state.general.teams
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    tick: () => {
      dispatch(getScoreboard());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FTable);
