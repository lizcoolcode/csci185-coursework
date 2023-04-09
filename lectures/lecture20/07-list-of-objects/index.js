const people = [
    { name: "Jane", pic: "images/patrick.png", score: 300 },
    { name: "Brenda", pic: "images/spongebob.png", score: 10} ,
    { name: "Wanda", pic: "images/spongebob.png", score: 60 },
    { name: "Maria", pic: "images/patrick.png", score: 80 },
    { name: "Jasper", pic: "images/spongebob.png", score: 600 },
    { name: "Malik", pic: "images/patrick.png", score: 40 }
];

function pointForWanda() {
    people[2].score += 10;
}

function pointForMaria() {
    people[3].score += 10;
    showWinner;
}

function showWinner () {
    let i = 0;
    while (i < people.length) {
        let template = `
        <div class="card">
            <div>
                <img src="http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png">
                <p>${people[i].name} scored ${people[i].score} points</p>
            </div>
        </div>
        `;
    document.querySelector(".players").innerHTML += template;
    ++i;
    }
}
