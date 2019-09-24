let testData = [ 
  {"TEAM_CITY": "Brooklyn", "PLAYER_NAME": "Spencer Dinwiddie", "FG3_PCT": 0.25, "AST": 4},
  {"TEAM_CITY": "Brooklyn", "PLAYER_NAME": "Joe Harris", "FG3_PCT": 0.75, "AST": 3},
  {"TEAM_CITY": "Atlanta", "PLAYER_NAME": "Trae Young", "FG3_PCT": 0.67, "AST": 12}
]

function bestPasser(data) {
	let mostDimes = 0;
	let mostDimesObj = data[0];
	let bestPasser;

	const findBestPasser = function(bestPasser, currentPasser) {
		if(bestPasser["AST"] > currentPasser["AST"]) {
			bestPasser = currentPasser;
		}
	}
	bestPasser = data.reduce(findBestPasser, data[0]);
	return bestPasser;

}

let dimeDropper = bestPasser(testData);
console.log(dimeDropper);