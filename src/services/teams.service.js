import Configuration from "../configuration/config";
import axios from "axios";

class TeamsService {
  async list() {
    return await axios.get(`${Configuration.BaseURL}/teams`);
  }

  async checkSolves(team_id) {
    return await axios.get(`${Configuration.BaseURL}/teams/${team_id}/solves`);
  }

  async checkFails(team_id) {
    return await axios.get(`${Configuration.BaseURL}/teams/${team_id}/fails`);
  }
}

const instance = new TeamsService();

export default instance;
