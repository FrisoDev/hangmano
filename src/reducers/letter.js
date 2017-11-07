import { GUESS } from '../actions/guess'

  const words = ['acres', 'adult', 'arrangement', 'attempt', 'August', 'Autumn', 'border', 'breeze', 'brick', 'calm', 'canal', 'Casey', 'cast', 'chose', 'claws', 'coach', 'constantly', 'contrast', 'cookies', 'customs', 'damage', 'Danny', 'deeply', 'depth', 'discussion', 'doll', 'donkey',
  ];
  var result = ""
  const guesses = []
  var word = words[Math.floor(Math.random() * words.length)]

  function wrongGuessCount(word, guesses) {
    const wrongGuesses = guesses.filter(letter => word.indexOf(letter) === -1)
    return wrongGuesses.length
    }

  function showLetter(word, guesses) {
    const letters = word.split("");
    const scores = letters.map(letter => "_ ")

    for (var i=0; i < letters.length; i++ ) {
     guesses.map(function(guess) {
       if (guess === letters[i]) {scores[i] = letters[i]};
       });
     }
      return scores.join(" ");
    }

    function winState(word, guesses) {
      var winner = showLetter(word, guesses).replace(/ /g,'');
      return winner === word;
    }

    function next(word, guesses) {
      if (wrongGuessCount(word, guesses) === 6)
        return result = word
      if (winState(word, guesses)) return result = "Winner winner";
        result = showLetter(word, guesses) ;
    }

export default (state = result, { type, payload } = {}) => {
  switch(type) {
      case GUESS :
      guesses.push(payload)
      next(word, guesses)
      return [result, wrongGuessCount(word, guesses)]

    default :
      return state
  }
}
