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
    solve: { gifs: ["/gifs/oscars.gif"], duration: 15000 },
    fail: { gifs: ["/gifs/spidey.gif"], duration: 15000 },
    newlead: { gifs: ["/gifs/dab.gif"], duration: 15000 },
    hurry: {
      gifs: ["/gifs/tennis.gif"],
      duration: 15000,
      time_before_trigger: 15000 // Le temps pendant lequel le joueur ne flag pas
    }
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
  tick_duration: 5000,

  /**
   * Messages affichés en haut lors des events
   */
  messages: {
    solve: team_name => `Le joueur ${team_name} vient de flag !!🤯🤯🤯`,
    fail: team_name =>
      `Le joueur ${team_name} n'arrive pas à entrer un flag correctement ...🤷🏼‍♂️🤷🏼‍♂️🤷🏼‍♂️🤷🏼‍♂️`,
    lead_change: team_name =>
      `Le joueur ${team_name} prend le lead !!!!! 🥳🥳🥳🥳`,
    hurry: team_name =>
      `Le joueur ${team_name} n'a pas flag depuis un bon moment !`
  },

  /**
   * Sponsors page tiles :)
   */
  tileData: [
    {
      img: "/sponsors/manhattan.svg",
      title: "Manhattan",
      author: "author"
    },
    {
      img: "/sponsors/synacktiv.png",
      title: "Synacktiv",
      author: "author"
    }
  ]
};

export default Configuration;
