import { connect } from "react-redux";

import { listTeams, checkSolves, checkFails } from "../../redux/actions";
import FGrid from "../../components/FGrid/FGrid";
import Configuration from "../../configuration/config";

function mapStateToProps(state, ownProps) {
  return {
    team1: state.general.team1,
    team2: state.general.team2,
    team3: state.general.team3,
    team4: state.general.team4,
    message: state.general.message
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    listTeams: () => {
      dispatch(listTeams());
    },
    tick: () => {
      console.log("TIIIIIIIIIIIIIIICK");
      for (const id of Configuration.ctfd_ids) {
        dispatch(checkSolves(id));
        dispatch(checkFails(id));
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FGrid);
