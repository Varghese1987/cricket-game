var divCont = document.createElement('div');
divCont.setAttribute('class', 'container p-3 mb-2 bg-dark text-white background');
document.body.appendChild(divCont);
var titleDivR1 = document.createElement("div");
titleDivR1.setAttribute('class', 'row');
divCont.appendChild(titleDivR1);
var titleDiv = document.createElement('div');
titleDiv.setAttribute('class', 'col-sm-12 col-md -12 col-lg-12 text-center');
titleDivR1.appendChild(titleDiv);
var heading = document.createElement('h3');
heading.setAttribute('class', 'head');
heading.innerHTML = "Cricket Game";
titleDiv.appendChild(heading);
var divContR2 = document.createElement('div');
divContR2.setAttribute('class', 'row border-top border-bottom mb-2 pb-1');
divCont.appendChild(divContR2);
var divR2Cl1 = document.createElement('div');
divR2Cl1.setAttribute('class', 'col-lg-4 text-center');
divR2Cl1.innerHTML = "TEAM 1 SCORE";
divContR2.appendChild(divR2Cl1);
var divT1Score = document.createElement('div');
divT1Score.setAttribute('id', 'Team1Score');
divT1Score.innerHTML = "score";
divR2Cl1.appendChild(divT1Score);
var divT1Hit = document.createElement('button');
divT1Hit.setAttribute('id', "Team1Hit");
divT1Hit.setAttribute('class', 'btn btn-primary');
divT1Hit.setAttribute('onclick', 'team1.start()');
divT1Hit.innerHTML = "Hit";
divR2Cl1.appendChild(divT1Hit);
var divR2Cl2 = document.createElement('div');
divR2Cl2.setAttribute('class', 'col-lg-4 text-center');
divR2Cl2.innerHTML = "TIMER";
divContR2.appendChild(divR2Cl2);
var divTimer = document.createElement('div');
divTimer.setAttribute('id', 'timer');
divTimer.innerHTML = "";
divR2Cl2.appendChild(divTimer);
var divR2Cl3 = document.createElement('div');
divR2Cl3.setAttribute('class', 'col-lg-4 text-center');
divR2Cl3.innerHTML = "TEAM 2 SCORE";
divContR2.appendChild(divR2Cl3);
var divT2Score = document.createElement('div');
divT2Score.setAttribute('id', 'Team2Score');
divT2Score.innerHTML = "score";
divR2Cl3.appendChild(divT2Score);
var divT2Hit = document.createElement('button');
divT2Hit.setAttribute('id', "Team2Hit");
divT2Hit.setAttribute('class', 'btn btn-primary');
divT2Hit.setAttribute('onclick', 'team2.start()');
divT2Hit.innerHTML = "Hit";
divR2Cl3.appendChild(divT2Hit);
var result = document.createElement('div');
result.setAttribute('class', 'row mb-2 pb-1');
divCont.appendChild(result);
var resultColumn = document.createElement('div');
resultColumn.setAttribute('class', 'col-lg-12 text-center');
result.appendChild(resultColumn);
var resultButton = document.createElement('button');
resultButton.setAttribute('id', 'result');
resultButton.setAttribute('class', 'btn btn-primary');
resultButton.innerHTML = "Result";
resultButton.setAttribute('onclick', 'display()');
resultColumn.appendChild(resultButton);
var divR3 = document.createElement('div');
divR3.setAttribute('class', 'row d-flex justify-content-center');
divCont.appendChild(divR3);
var played = false;
var team1Played = false;
var team2Played = false;
var team1Start = false;
var team2Start = false;
var counter = 0;
var interval;
var manOfTheMatch = "";
var highestScorer = 0;
document.getElementById("result").disabled = true;
var Team = /** @class */ (function () {
    function Team(teamName) {
        this.players = [];
        this.i = 1;
        this.j = 1;
        this.total = 0;
        this.teamScore = 0;
        this.name = teamName;
        //console.log(this.name);
    }
    Team.prototype.createTable = function () {
        var tableDiv = document.createElement('div');
        tableDiv.setAttribute('class', 'col-sm-10 col-md-10 col-lg-5');
        divR3.appendChild(tableDiv);
        var table = document.createElement("table");
        table.setAttribute('class', 'table table-bordered p-3 mb-2 bg-dark text-white table-responsive');
        tableDiv.appendChild(table);
        var tHead = document.createElement('thead');
        table.appendChild(tHead);
        var tableRow = document.createElement('tr');
        tHead.appendChild(tableRow);
        var thc1 = document.createElement('th');
        thc1.innerHTML = "" + this.name;
        tableRow.appendChild(thc1);
        var b1 = document.createElement('th');
        b1.innerHTML = "B1";
        tableRow.appendChild(b1);
        var thc3 = document.createElement('th');
        thc3.innerHTML = "B2";
        tableRow.appendChild(thc3);
        var thc4 = document.createElement('th');
        thc4.innerHTML = "B3";
        tableRow.appendChild(thc4);
        var b4 = document.createElement('th');
        b4.innerHTML = "B4";
        tableRow.appendChild(b4);
        var b5 = document.createElement('th');
        b5.innerHTML = "B5";
        tableRow.appendChild(b5);
        var b6 = document.createElement('th');
        b6.innerHTML = "B6";
        tableRow.appendChild(b6);
        var total = document.createElement('th');
        total.innerHTML = "Total";
        tableRow.appendChild(total);
        var tBody = document.createElement('tbody');
        table.appendChild(tBody);
        for (var i = 1; i <= 10; i++) {
            var row = document.createElement('tr');
            tBody.appendChild(row);
            var th = document.createElement('th');
            th.setAttribute('class', '');
            th.innerHTML = "Player" + i;
            row.appendChild(th);
            for (var j = 1; j <= 6; j++) {
                var td = document.createElement('td');
                td.setAttribute('id', "" + this.name + i + j);
                row.appendChild(td);
            }
            var tdTotal = document.createElement('td');
            tdTotal.setAttribute('id', this.name + "Total" + i);
            row.appendChild(tdTotal);
        }
    };
    Team.prototype.start = function () {
        if (this.name == "Team1") {
            if (!team1Start) {
                counter = 60;
                interval = setInterval(function () {
                    counter--;
                    if (counter <= 0) {
                        if (!played) {
                            document.getElementById("Team1Hit").disabled = true;
                            document.getElementById("Team2Hit").disabled = false;
                            played = true;
                        }
                        else {
                            document.getElementById("Team1Hit").disabled = true;
                        }
                        team1Played = true;
                        if (team1Played && team2Played) {
                            document.getElementById("result").disabled = false;
                        }
                        clearInterval(interval);
                        return;
                    }
                    else {
                        document.getElementById("timer").innerHTML = "" + counter;
                    }
                }, 1000);
            }
            document.getElementById("Team2Hit").disabled = true;
            team1Start = true;
        }
        else {
            if (!team2Start) {
                counter = 60;
                interval = setInterval(function () {
                    counter--;
                    if (counter <= 0) {
                        if (!played) {
                            document.getElementById("Team2Hit").disabled = true;
                            document.getElementById("Team1Hit").disabled = false;
                            played = true;
                        }
                        else {
                            document.getElementById("Team2Hit").disabled = true;
                        }
                        team2Played = true;
                        if (team1Played && team2Played) {
                            document.getElementById("result").disabled = false;
                        }
                        clearInterval(interval);
                        return;
                    }
                    else {
                        document.getElementById("timer").innerHTML = "" + counter;
                    }
                }, 1000);
            }
            document.getElementById("Team1Hit").disabled = true;
            team2Start = true;
        }
        var array = [0, 1, 2, 4, 6];
        var randomNumber = array[Math.floor(Math.random() * array.length)];
        this.total += randomNumber;
        this.teamScore += randomNumber;
        document.getElementById(this.name + "Score").innerHTML = "" + this.teamScore;
        document.getElementById("" + this.name + this.i + this.j).innerHTML = "" + randomNumber;
        this.j++;
        if (this.j == 7 || randomNumber == 0) {
            this.i++;
            this.j = 1;
            document.getElementById(this.name + "Total" + (this.i - 1)).innerHTML = "" + this.total;
            var plyr = new Player();
            plyr.pName = this.name + " Player" + (this.i - 1);
            plyr.runs = this.total;
            this.players.push(plyr);
            if (this.total > highestScorer) {
                highestScorer = this.total;
                manOfTheMatch = plyr.pName;
            }
            this.total = 0;
        }
        if (this.i == 11) {
            if (this.name == "Team1") {
                if (played == false) {
                    document.getElementById("Team1Hit").disabled = true;
                    document.getElementById("Team2Hit").disabled = false;
                    played = true;
                }
                else {
                    document.getElementById("Team1Hit").disabled = true;
                }
                clearInterval(interval);
                document.getElementById("timer").innerHTML = "0";
                team1Played = true;
            }
            if (this.name == "Team2") {
                if (played == false) {
                    document.getElementById("Team2Hit").disabled = true;
                    document.getElementById("Team1Hit").disabled = false;
                    played = true;
                }
                else {
                    document.getElementById("Team2Hit").disabled = true;
                }
                team2Played = true;
            }
            if (team1Played && team2Played) {
                document.getElementById("result").disabled = false;
            }
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "0";
            this.i = 1;
            this.j = 1;
        }
    };
    return Team;
}());
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var team1 = new Team("Team1");
team1.createTable();
var team2 = new Team("Team2");
team2.createTable();
var display = function () {
    var new_page = window.open();
    //console.log(team1)
    //console.log(team2)
    //console.log(manOfTheMatch);
    if (team1.teamScore > team2.teamScore) {
        new_page.document.write("\n        <head>\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\n        <style>\n        .background{\n            background: rgb(92,4,193);\n            background: linear-gradient(45deg, rgba(92,4,193,1) 0%, rgba(3,206,23,1) 57%, rgba(255,0,26,1) 100%);\n            color: white;\n        }\n        </style>\n        </head>\n        <div class = \"container text-center background\">\n        <h1>Team 1 Won </h1>\n        <h3><i>Man of the Match is " + manOfTheMatch + " with Maximum runs of " + highestScorer + "</i></h3>\n        <p><b>Team 1 Score is : " + team1.teamScore + "</b></p>\n        <p>Team 2 Score is : " + team2.teamScore + "</p>\n        </div>");
    }
    else {
        new_page.document.write("\n        <head>\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\">\n        <style>\n        .background{\n            background: rgb(92,4,193);\n            background: linear-gradient(45deg, rgba(92,4,193,1) 0%, rgba(3,206,23,1) 57%, rgba(255,0,26,1) 100%);\n            color: white;\n        }\n        </style>\n        </head>\n        <div class = \"container text-center background\">\n        <h1>Team 2 Won </h1>\n        <h3><i>Man of the Match is " + manOfTheMatch + " with Maximum runs of " + highestScorer + "</i></h3>\n        <p><b>Team 2 Score is : " + team2.teamScore + "</b></p>\n        <p>Team 1 Score is : " + team1.teamScore + "</p>\n        </div>");
    }
};
