let divCont = document.createElement('div');
divCont.setAttribute('class', 'container p-3 mb-2 bg-dark text-white background');
document.body.appendChild(divCont)

let titleDivR1 = document.createElement("div");
titleDivR1.setAttribute('class', 'row');
divCont.appendChild(titleDivR1);

let titleDiv = document.createElement('div');
titleDiv.setAttribute('class', 'col-sm-12 col-md -12 col-lg-12 text-center');
titleDivR1.appendChild(titleDiv);

let heading = document.createElement('h3')
heading.setAttribute('class', 'head')
heading.innerHTML = "Cricket Game";
titleDiv.appendChild(heading)

let divContR2 = document.createElement('div');
divContR2.setAttribute('class', 'row border-top border-bottom mb-2 pb-1');
divCont.appendChild(divContR2);

let divR2Cl1 = document.createElement('div');
divR2Cl1.setAttribute('class', 'col-lg-4 text-center');
divR2Cl1.innerHTML = "TEAM 1 SCORE"
divContR2.appendChild(divR2Cl1)

let divT1Score = document.createElement('div')
divT1Score.setAttribute('id', 'Team1Score')
divT1Score.innerHTML = "score";
divR2Cl1.appendChild(divT1Score)

let divT1Hit = document.createElement('button')
divT1Hit.setAttribute('id', "Team1Hit")
divT1Hit.setAttribute('class', 'btn btn-primary')
divT1Hit.setAttribute('onclick', 'team1.start()')
divT1Hit.innerHTML = "Hit"
divR2Cl1.appendChild(divT1Hit);

let divR2Cl2 = document.createElement('div');
divR2Cl2.setAttribute('class', 'col-lg-4 text-center');
divR2Cl2.innerHTML = "TIMER"
divContR2.appendChild(divR2Cl2)

let divTimer = document.createElement('div')
divTimer.setAttribute('id', 'timer')
divTimer.innerHTML = "";
divR2Cl2.appendChild(divTimer)

let divR2Cl3 = document.createElement('div');
divR2Cl3.setAttribute('class', 'col-lg-4 text-center');
divR2Cl3.innerHTML = "TEAM 2 SCORE"
divContR2.appendChild(divR2Cl3)

let divT2Score = document.createElement('div')
divT2Score.setAttribute('id', 'Team2Score')
divT2Score.innerHTML = "score";
divR2Cl3.appendChild(divT2Score)

let divT2Hit = document.createElement('button')
divT2Hit.setAttribute('id', "Team2Hit")
divT2Hit.setAttribute('class', 'btn btn-primary')
divT2Hit.setAttribute('onclick', 'team2.start()')
divT2Hit.innerHTML = "Hit";
divR2Cl3.appendChild(divT2Hit);

let result = document.createElement('div');
result.setAttribute('class', 'row mb-2 pb-1');
divCont.appendChild(result);

let resultColumn = document.createElement('div');
resultColumn.setAttribute('class', 'col-lg-12 text-center');
result.appendChild(resultColumn);

let resultButton = document.createElement('button');
resultButton.setAttribute('id', 'result');
resultButton.setAttribute('class', 'btn btn-primary')
resultButton.innerHTML = "Result"
resultButton.setAttribute('onclick', 'display()');
resultColumn.appendChild(resultButton);

let divR3 = document.createElement('div');
divR3.setAttribute('class', 'row d-flex justify-content-center');
divCont.appendChild(divR3);

let played = false;
let team1Played = false;
let team2Played = false;
let team1Start = false;
let team2Start = false;
let counter = 0;
let interval;
let manOfTheMatch = "";
let highestScorer = 0;

(<HTMLInputElement>document.getElementById("result")).disabled = true;

class Team {
    name: string;
    players: Player[] = [];
    i: number = 1;
    j: number = 1;
    total: number = 0;
    teamScore: number = 0;
    

    constructor(teamName: string) {
        this.name = teamName;
        //console.log(this.name);
    }

    createTable() {
        let tableDiv = document.createElement('div')
        tableDiv.setAttribute('class', 'col-sm-10 col-md-10 col-lg-5')
        divR3.appendChild(tableDiv);

        let table = document.createElement("table");
        table.setAttribute('class', 'table table-bordered p-3 mb-2 bg-dark text-white table-responsive');
        tableDiv.appendChild(table);

        let tHead = document.createElement('thead');
        table.appendChild(tHead);

        let tableRow = document.createElement('tr')
        tHead.appendChild(tableRow);

        let thc1 = document.createElement('th');
        thc1.innerHTML = `${this.name}`;
        tableRow.appendChild(thc1);

        let b1 = document.createElement('th');
        b1.innerHTML = "B1";
        tableRow.appendChild(b1);

        let thc3 = document.createElement('th');
        thc3.innerHTML = "B2";
        tableRow.appendChild(thc3);

        let thc4 = document.createElement('th');
        thc4.innerHTML = "B3";
        tableRow.appendChild(thc4);

        let b4 = document.createElement('th');
        b4.innerHTML = "B4";
        tableRow.appendChild(b4);

        let b5 = document.createElement('th');
        b5.innerHTML = "B5";
        tableRow.appendChild(b5);

        let b6 = document.createElement('th');
        b6.innerHTML = "B6";
        tableRow.appendChild(b6);

        let total = document.createElement('th');
        total.innerHTML = "Total";
        tableRow.appendChild(total);

        let tBody = document.createElement('tbody');
        table.appendChild(tBody);

        for (let i = 1; i <= 10; i++) {
            let row = document.createElement('tr');
            tBody.appendChild(row);
            let th = document.createElement('th');
            th.setAttribute('class','');
            th.innerHTML = `Player${i}`;
            row.appendChild(th);
            for (let j = 1; j <= 6; j++) {
                let td = document.createElement('td');
                td.setAttribute('id', `${this.name}${i}${j}`);
                row.appendChild(td);
            }
            let tdTotal = document.createElement('td');
            tdTotal.setAttribute('id', `${this.name}Total${i}`)
            row.appendChild(tdTotal)
        }
    }

    start() {

        if (this.name == "Team1") {
            if (!team1Start) {
                counter = 60;
                interval = setInterval(() => {
                    counter--;
                    if (counter <= 0) {
                        if (!played) {
                            (<HTMLInputElement>document.getElementById("Team1Hit")).disabled = true;
                            (<HTMLInputElement>document.getElementById("Team2Hit")).disabled = false;
                            played = true;
                        } else {
                            (<HTMLInputElement>document.getElementById("Team1Hit")).disabled = true;
                        }
                        team1Played = true;
                        if (team1Played && team2Played) {
                            (<HTMLInputElement>document.getElementById("result")).disabled = false;
                        }
                        clearInterval(interval);
                        return;
                    }
                    else {
                        (<HTMLInputElement>document.getElementById("timer")).innerHTML = `${counter}`;
                    }
                }, 1000);
            }
            (<HTMLInputElement>document.getElementById("Team2Hit")).disabled = true;
            team1Start = true;
        }
        else {
            if (!team2Start) {
                counter = 60;
                interval = setInterval(() => {
                    counter--;
                    if (counter <= 0) {
                        if (!played) {
                            (<HTMLInputElement>document.getElementById("Team2Hit")).disabled = true;
                            (<HTMLInputElement>document.getElementById("Team1Hit")).disabled = false;
                            played = true;
                        } else {
                            (<HTMLInputElement>document.getElementById("Team2Hit")).disabled = true;
                        }
                        team2Played = true;
                        if (team1Played && team2Played) {
                            (<HTMLInputElement>document.getElementById("result")).disabled = false;
                        }
                        clearInterval(interval);
                        return;
                    }
                    else {
                        (<HTMLInputElement>document.getElementById("timer")).innerHTML = `${counter}`;
                    }
                }, 1000);
            }
            (<HTMLInputElement>document.getElementById("Team1Hit")).disabled = true;
            team2Start = true;
        }

        let array = [0, 1, 2, 4, 6];
        let randomNumber = array[Math.floor(Math.random() * array.length)];
        this.total += randomNumber;
        this.teamScore += randomNumber;
        (<HTMLInputElement>document.getElementById(`${this.name}Score`)).innerHTML = `${this.teamScore}`;
        (<HTMLInputElement>document.getElementById(`${this.name}${this.i}${this.j}`)).innerHTML = `${randomNumber}`;
        this.j++;
        if (this.j == 7 || randomNumber == 0) {
            this.i++;
            this.j = 1;
            (<HTMLInputElement>document.getElementById(`${this.name}Total${this.i - 1}`)).innerHTML = `${this.total}`;
            let plyr = new Player();
            plyr.pName = `${this.name} Player${this.i-1}`;
            plyr.runs = this.total;
            this.players.push(plyr);
            if(this.total > highestScorer){
                highestScorer = this.total;
                manOfTheMatch = plyr.pName;
            }
            this.total = 0;
        }
        if (this.i == 11) {
            if (this.name == "Team1") {
                if (played == false) {
                    (<HTMLInputElement>document.getElementById("Team1Hit")).disabled = true;
                    (<HTMLInputElement>document.getElementById("Team2Hit")).disabled = false;
                    played = true;
                } else {
                    (<HTMLInputElement>document.getElementById("Team1Hit")).disabled = true;
                }
                clearInterval(interval);
                (<HTMLInputElement>document.getElementById("timer")).innerHTML = `0`;
                team1Played = true;
            }
            if (this.name == "Team2") {
                if (played == false) {
                    (<HTMLInputElement>document.getElementById("Team2Hit")).disabled = true;
                    (<HTMLInputElement>document.getElementById("Team1Hit")).disabled = false;
                    played = true;
                } else {
                    (<HTMLInputElement>document.getElementById("Team2Hit")).disabled = true;
                }
                team2Played = true;
            }
            if (team1Played && team2Played) {
                (<HTMLInputElement>document.getElementById("result")).disabled = false;
            }
            clearInterval(interval);
            (<HTMLInputElement>document.getElementById("timer")).innerHTML = `0`;
            this.i = 1;
            this.j = 1;
        }
    }
}

class Player {
    pName: string;
    runs: number;
}
let team1 = new Team("Team1");
team1.createTable();
let team2 = new Team("Team2");
team2.createTable();

let display = () => {
    let new_page = window.open();
    //console.log(team1)
    //console.log(team2)
    //console.log(manOfTheMatch);
    if (team1.teamScore > team2.teamScore) {
        new_page.document.write(`
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <style>
        .background{
            background: rgb(92,4,193);
            background: linear-gradient(45deg, rgba(92,4,193,1) 0%, rgba(3,206,23,1) 57%, rgba(255,0,26,1) 100%);
            color: white;
        }
        </style>
        </head>
        <div class = "container text-center background">
        <h1>Team 1 Won </h1>
        <h3><i>Man of the Match is ${manOfTheMatch} with Maximum runs of ${highestScorer}</i></h3>
        <p><b>Team 1 Score is : ${team1.teamScore}</b></p>
        <p>Team 2 Score is : ${team2.teamScore}</p>
        </div>`);
    } else {
        new_page.document.write(`
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <style>
        .background{
            background: rgb(92,4,193);
            background: linear-gradient(45deg, rgba(92,4,193,1) 0%, rgba(3,206,23,1) 57%, rgba(255,0,26,1) 100%);
            color: white;
        }
        </style>
        </head>
        <div class = "container text-center background">
        <h1>Team 2 Won </h1>
        <h3><i>Man of the Match is ${manOfTheMatch} with Maximum runs of ${highestScorer}</i></h3>
        <p><b>Team 2 Score is : ${team2.teamScore}</b></p>
        <p>Team 1 Score is : ${team1.teamScore}</p>
        </div>`);
    }

}