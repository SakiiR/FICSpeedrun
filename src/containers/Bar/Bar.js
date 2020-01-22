import { connect } from "react-redux";

import FBar from "../../components/FBar/FBar";

function mapStateToProps(state, ownProps) {
  return {
    loading: state.general.loading
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actualize: () => {
      // dispatch(checkLead());
      // dispatch(checkSolves(2));
      // dispatch(triggerMessage("Le joueur MachinTruc est passé prems !"));
      // dispatch(listTeams());
      // dispatch(triggerEvent(1, "fail"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FBar);
