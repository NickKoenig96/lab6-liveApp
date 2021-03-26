let primus = Primus.connect("http://localhost:3000", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

 


document.querySelector('.submit').addEventListener('click', (e) =>{
  e.preventDefault();
    let team = document.querySelector('.team').value;
    let score = document.querySelector('.score').value;

    primus.write({
        team: team,
        score: score
      });

      console.log(team + ' '+score)

      



})