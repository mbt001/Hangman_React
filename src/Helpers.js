function generateButtons(props) {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={props.handleGuess}
        disabled={props.guessed.has(ltr)}>
        {ltr}
      </button>
    ));
  }

export { generateButtons };