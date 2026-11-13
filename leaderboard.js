// Comet Dash's leaderboard functions. For you to finish.
//
// Every function gets `players`: an array of high-score entries like this one.
//
//   { tag: "PixelPanda", score: 8200, level: 7, date: "2026-10-03" }
//
// The examples below use the eight entries in high-scores.js.
// Use the array methods from this chapter (map, filter, reduce, sort or toSorted, slice), not for loops.
// Never change the array you're given: the game still needs it in the order the games were played.

/*
 * 1. Return the three entries with the highest scores, highest first.
 *    With fewer than three entries, return all of them, highest first.
 *
 *    topThree(highScores) -> the entries for NovaFox (12450), GlitchGoose (10300) and LunaByte (9900)
 */
export function topThree(players) {
  return [];
}

/*
 * 2. Return the entries that scored more than `minimum` points, in the order they're in now.
 *    A score equal to `minimum` doesn't count as more.
 *
 *    playersOver(highScores, 9000) -> the entries for NovaFox, LunaByte and GlitchGoose
 *    playersOver(highScores, 20000) -> []
 */
export function playersOver(players, minimum) {
  return [];
}

/*
 * 3. Return one line of text per entry, in the same order, like this:
 *
 *    displayLines(highScores) -> ["PixelPanda: 8200 points (level 7)", "NovaFox: 12450 points (level 9)", ...]
 */
export function displayLines(players) {
  return [];
}

/*
 * 4. Return the total of every entry's score. An empty list totals 0.
 *
 *    totalScore(highScores) -> 56300
 *    totalScore([]) -> 0
 */
export function totalScore(players) {
  return 0;
}

/*
 * 5. Return the average score, rounded to a whole number with Math.round. An empty list averages 0.
 *
 *    averageScore(highScores) -> 7038
 *    averageScore([]) -> 0
 */
export function averageScore(players) {
  return 0;
}

/*
 * 6. Return the leaderboard: the entries that reached level `minLevel` or higher, highest score first,
 *    as numbered lines. Write it as one chain of array methods.
 *
 *    leaderboard(highScores, 8) -> ["1. NovaFox: 12450", "2. GlitchGoose: 10300", "3. LunaByte: 9900"]
 */
export function leaderboard(players, minLevel) {
  return [];
}
