// Prints what your functions in leaderboard.js give back for Comet Dash's high-score list.
// Run it with: node show-leaderboard.js
// Ready to use: you don't need to change this file.
import { highScores } from "./high-scores.js";
import { topThree, playersOver, displayLines, totalScore, averageScore, leaderboard } from "./leaderboard.js";

const tagsOf = (players) => players.map((player) => player.tag).join(", ");

console.log(`1) topThree: ${tagsOf(topThree(highScores))}`);
console.log(`2) playersOver 9000: ${tagsOf(playersOver(highScores, 9000))}`);
console.log(`3) displayLines, the first line: ${displayLines(highScores)[0]}`);
console.log(`4) totalScore: ${totalScore(highScores)}`);
console.log(`5) averageScore: ${averageScore(highScores)}`);
console.log("6) leaderboard, level 5 and up:");
leaderboard(highScores, 5).forEach((line) => console.log(`   ${line}`));
