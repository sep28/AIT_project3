// nba.js


function bestPasser(data) {
	//let mostDimes = 0;
	let bestPasser;
	const findBestPasser = function(bestPasser, currentPasser) {
		if(bestPasser["AST"] < currentPasser["AST"]) {
			//console.log("found a better passer: ", currentPasser, "\n");
			bestPasser = currentPasser;
		}
		return bestPasser;
	};
	dimeDropper = data.reduce(findBestPasser, data[0]);
	return dimeDropper;
}

function getTeamCities(data) {
	let teamArr = [];

	const findTeams = function(teamName, currentTeam) {
		if(!teamArr.includes(currentTeam["TEAM_CITY"])) {
			teamArr.push(currentTeam["TEAM_CITY"]);
		}
		return currentTeam;
	};
	
	let throwAway = data.reduce(findTeams);
	return teamArr;

}

function teamRebounds(city, data) {
	let rebounds;

	const findRebounds = function(totalRebs, currentPlayer) {
		if (currentPlayer["TEAM_CITY"] === city) {
			totalRebs += currentPlayer["REB"];
		}
		return totalRebs
	};
	
	rebounds = data.reduce(findRebounds, 0);
	return rebounds;	
}

function reboundTotals(data) {
	let arrayOfTeams = getTeamCities(data);
	totalRebObj = {};
	totalRebObj[arrayOfTeams[0]] = teamRebounds(arrayOfTeams[0], data);
	totalRebObj[arrayOfTeams[1]] = teamRebounds(arrayOfTeams[1], data);
	return totalRebObj;
}


module.exports = {
	bestPasser: bestPasser,
	getTeamCities: getTeamCities,
	teamRebounds: teamRebounds,
	totalRebObj: totalRebObj
};