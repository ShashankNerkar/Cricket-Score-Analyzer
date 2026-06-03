let btn = document.getElementById("analyzeBtn");

btn.addEventListener("click", function() {

    let runs = document.getElementById("runs").value;
    let balls = document.getElementById("balls").value;

    let sr = calculateStrikeRate(runs, balls);

    document.getElementById("strikeRate").innerHTML =
    "Strike Rate : " + sr.toFixed(2);

    let fours = document.getElementById("fours").value;
    let sixes = document.getElementById("sixes").value;
    let boundaryRuns = calculateBoundaryRuns(fours, sixes);

    document.getElementById("boundaryRuns").innerHTML =
    "Boundary Runs : " + boundaryRuns;

    let boundaryPercentage =
    calculateBoundaryPercentage(boundaryRuns, runs);

    document.getElementById("boundaryPercentage").innerHTML =
    "Boundary % : " + boundaryPercentage.toFixed(2) + "%";

    let performance = playerPerformance(sr);

    document.getElementById("performance").innerHTML =
    "Performance : " + performance;
     
    let currentScore = document.getElementById("currentScore").value;
    let oversPlayed = document.getElementById("oversPlayed").value;
    let runRate = calculateRunRate(currentScore,oversPlayed);

    document.getElementById("runRate").innerHTML =
    "Run Rate : " + runRate;

    let targetScore = document.getElementById("targetScore").value;

    let runsNeeded =calculateRunsNeeded(targetScore,currentScore);

    document.getElementById("runsNeeded").innerHTML =
    "Runs Needed : " + runsNeeded ;


    let totalovers =document.getElementById("totalOvers").value;
    let ballsLeft = calculateBallsLeft (totalovers ,oversPlayed);

    document.getElementById("ballsLeft").innerHTML =
    "Balls Left :" + ballsLeft;

   let requiredRR =calculateRequiredRR(runsNeeded, totalovers, oversPlayed);
    document.getElementById("requiredRR").innerHTML =
    "Required Run Rate : " + requiredRR ;


    let prediction =
predictWinner(runRate, requiredRR);

document.getElementById("matchStatus").innerHTML =
"Prediction : " + prediction;
   


});

function calculateStrikeRate(runs, balls) {
    return (runs / balls) * 100;
}

function calculateBoundaryRuns(fours, sixes) {
    return (fours * 4) + (sixes * 6);
}

function calculateBoundaryPercentage(boundaryRuns, runs) {
    return (boundaryRuns / runs) * 100;
}

function playerPerformance(sr) {

    if (sr > 150) {
        return "Excellent";
    }
    else if (sr > 120) {
        return "Good";
    }
    else {
        return "Average";
    }

}

function calculateRunRate (currentScore,oversPlayed) {
    return currentScore/oversPlayed ;
}

function calculateRunsNeeded (targetScore,currentScore){
    return targetScore-currentScore ;

}   

function calculateBallsLeft(totalovers, oversPlayed){
    return (totalovers - oversPlayed) * 6;
}



function calculateRequiredRR(runsNeeded, totalovers, oversPlayed){
    let oversLeft = totalovers - oversPlayed;
    return runsNeeded / oversLeft;
}

function predictWinner(runRate, requiredRR){

    if(runRate >= requiredRR){
        return "Winning Chances High";
    }
    else{
        return "Chasing Difficult";
    }

}