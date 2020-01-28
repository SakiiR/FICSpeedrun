import Configuration from "../configuration/config";
import axios from "axios";

class ScoreboardService {
  async checkLead() {
    return await axios.get(`${Configuration.BaseURL}/scoreboard`);
  }

  async getScoreboard() {
    // Same but just give it an other name ;-)
    return await axios.get(`${Configuration.BaseURL}/scoreboard`);
  }
}

const instance = new ScoreboardService();

export default instance;
