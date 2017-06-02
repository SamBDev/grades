// initialize vars
var aCount = 0;
var bCount = 0;
var cCount = 0;
var dCount = 0;
var fCount = 0;

// given array of grades
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// assign first score as lowest and highest so variables can be compared later
var lowestGrade = scores[0];
var highestGrade = scores[0];

// begin looping through array
for (var i = 0; i < scores.length; i++) {

	// compare currently iterated over score to highest and lowest. reassign as necessary
	if (scores[i] < lowestGrade) {lowestGrade = scores[i]}
	if (scores[i] > highestGrade) {highestGrade = scores[i]}

	if (scores[i] >= 50 && scores[i] <= 60){fCount++}
	if (scores[i] >= 60 && scores[i] <= 70){dCount++}
	if (scores[i] >= 70 && scores[i] <= 80){cCount++}
	if (scores[i] >= 80 && scores[i] <= 90){bCount++}
	if (scores[i] >= 90 && scores[i] <= 100){aCount++}
}


console.log(lowestGrade);
console.log(highestGrade);
console.log(fCount);
console.log(dCount);
console.log(cCount);
console.log(bCount);
console.log(aCount);