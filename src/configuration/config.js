const Configuration = {
  /**
   * Base URL de CTFd
   */
  BaseURL: "/api/v1",

  /**
   * La step à laquelle on est actuallement (affiché dans le title)
   */
  step: "FIC Gala Speedrun by Hexpresso",

  /**
   * ID des teams sur le CTFd
   */
  ctfd_ids: [1, 2, 3, 4],

  /**
   * Events sur les teams
   */
  events: {
    solve: { gifs: ["/gif/solves/baby.gif",
	            "/gif/solves/basketball.gif",
	            "/gif/solves/cap_girl.gif",
	            "/gif/solves/clapping.gif",
	            "/gif/solves/dab.gif",
	            "/gif/solves/epic.gif",
	            "/gif/solves/epic_scream.gif",
	            "/gif/solves/esport.gif",
	            "/gif/solves/fire.gif",
	            "/gif/solves/hadoken.gif",
	            "/gif/solves/laughfactory.gif",
	            "/gif/solves/oscars.gif",
	            "/gif/solves/sport_guy.gif",
	            "/gif/solves/tennis.gif",
	            "/gif/solves/thor.gif",
	            "/gif/solves/trophy.gif"]
	    , duration: 15000 },
    fail: { gifs: ["/gifs/fails/facepalm.gif",
                   "/gifs/fails/failure.gif",
                   "/gifs/fails/barte.gif",
                   "/gifs/fails/losse.gif"], duration: 15000 },
    newlead: { gifs: ["/gifs/new_lead/leader.gif"], duration: 15000 },
    ninetys: { gifs: ["/gifs/ninetys/cookie.gif",
	              "/gifs/ninetys/go.gif",
	              "/gifs/ninetys/letsgo.gif",
	              "/gifs/ninetys/levelup.gif",
	              "/gifs/ninetys/tellmore.gif",
	              "/gifs/ninetys/unimpressed.gif"], duration: 15000 }
  },

  /**
   * Return on random elem of the given array ;)
   */
  rd: arr => {
    const i = Math.floor(Math.random() * (arr.length - 1));
    return arr[i]; // returns a random integer from 1 to 100
  },

  /**
   * Gif initiale
   */
  initial_gif: "/gifs/initial.webp",

  /**
   * Durée de l'afficha des messages
   */
  message_duration: 15000,

  /**
   * Tick duration: le temps entre chaque check :)
   */
  tick_duration: 1000,

  /**
   * Messages affichés en haut lors des events
   */
  messages: {
    solve: team_name => `FLAG de ${team_name} !!🤯🤯🤯`,
    fail: team_name =>
      `${team_name} n'arrive pas à entrer un flag correctement ...🤷🏼‍♂️🤷🏼‍♂️🤷🏼‍♂️🤷🏼‍♂️`,
    lead_change: team_name =>
      `${team_name} prend le lead !!!!! 🥳🥳🥳🥳`
  }
};

export default Configuration;
