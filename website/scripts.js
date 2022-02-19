//for future use
async function getDice() {

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: "{}"
    }

    const response = await fetch('/getDice', options)
    const dice = await response.json();

    document.getElementById("firstDice").innerHTML = dice[0];
    document.getElementById("secondDice").innerHTML = dice[1];
    document.getElementById("thirdDice").innerHTML = dice[2];
    document.getElementById("fourthDice").innerHTML = dice[3];
    document.getElementById("fifthDice").innerHTML = dice[4];

    console.log(dice);
}