// Tests for leaderboard.js. Run them with: node --test
// Each test calls one of your functions with a high-score list and checks what it gives back.
// You don't need to change this file.
import { test } from "node:test";
import assert from "node:assert/strict";
import { topThree, playersOver, displayLines, totalScore, averageScore, leaderboard } from "./leaderboard.js";

// A fresh copy of the list for every test, so one test can't change another's data.
function sampleScores() {
  return [
    { tag: "PixelPanda", score: 8200, level: 7, date: "2026-10-03" },
    { tag: "NovaFox", score: 12450, level: 9, date: "2026-10-05" },
    { tag: "CaptainCrumb", score: 3100, level: 3, date: "2026-10-05" },
    { tag: "LunaByte", score: 9900, level: 8, date: "2026-10-07" },
    { tag: "TurboSnail", score: 450, level: 1, date: "2026-10-08" },
    { tag: "WaffleWizard", score: 6750, level: 6, date: "2026-10-09" },
    { tag: "GlitchGoose", score: 10300, level: 8, date: "2026-10-11" },
    { tag: "MossyMoose", score: 5150, level: 5, date: "2026-10-12" },
  ];
}

const playedOrder = sampleScores().map((player) => player.tag);
const tagsOf = (players) => (Array.isArray(players) ? players.map((player) => player?.tag) : players);

function assertUnchanged(players, name) {
  assert.deepEqual(players.map((player) => player.tag), playedOrder,
    `${name} changed the list it was given. Leave the original alone: toSorted (or a copy made with [...players]) sorts a copy.`);
}

test("1) topThree gives the three highest scores, highest first, and leaves the list alone", () => {
  const players = sampleScores();
  const result = topThree(players);
  assert.deepEqual(tagsOf(result), ["NovaFox", "GlitchGoose", "LunaByte"],
    "topThree should give the entries for NovaFox (12450), GlitchGoose (10300) and LunaByte (9900), in that order.");
  assert.equal(result[0].score, 12450, "topThree should give the whole entries, not only their tags or scores.");
  assertUnchanged(players, "topThree");
  assert.deepEqual(tagsOf(topThree(sampleScores().slice(0, 2))), ["NovaFox", "PixelPanda"],
    "With only PixelPanda (8200) and NovaFox (12450), topThree should give both, highest first.");
});

test("2) playersOver keeps the entries that scored more than the minimum", () => {
  const players = sampleScores();
  assert.deepEqual(tagsOf(playersOver(players, 9000)), ["NovaFox", "LunaByte", "GlitchGoose"],
    "Over 9000 points: NovaFox, LunaByte and GlitchGoose, in the order they're in the list.");
  assert.deepEqual(tagsOf(playersOver(players, 9900)), ["NovaFox", "GlitchGoose"],
    "LunaByte scored exactly 9900, which isn't more than 9900, so playersOver(players, 9900) leaves LunaByte out.");
  assert.deepEqual(playersOver(players, 20000), [], "Nobody scored over 20000, so playersOver should give an empty array.");
  assertUnchanged(players, "playersOver");
});

test("3) displayLines gives one line per entry, in the same order", () => {
  const lines = displayLines(sampleScores());
  assert.equal(lines.length, 8, "Eight entries go in, so eight lines come out.");
  assert.equal(lines[0], "PixelPanda: 8200 points (level 7)", "The first line is for PixelPanda.");
  assert.equal(lines[4], "TurboSnail: 450 points (level 1)", "The fifth line is for TurboSnail.");
  assert.deepEqual(displayLines([]), [], "An empty list gives no lines: an empty array.");
});

test("4) totalScore adds up every score", () => {
  assert.equal(totalScore(sampleScores()), 56300, "The eight scores add up to 56300.");
  assert.equal(totalScore([{ tag: "LunaByte", score: 9900, level: 8, date: "2026-10-07" }]), 9900,
    "A list with one entry totals that entry's score.");
  assert.equal(totalScore([]), 0, "An empty list totals 0. Does your reduce have a starting value?");
});

test("5) averageScore gives the average, rounded to a whole number", () => {
  assert.equal(averageScore(sampleScores()), 7038, "56300 points over 8 entries is 7037.5, which rounds to 7038.");
  const two = [
    { tag: "PixelPanda", score: 100, level: 1, date: "2026-10-03" },
    { tag: "NovaFox", score: 300, level: 2, date: "2026-10-05" },
  ];
  assert.equal(averageScore(two), 200, "100 and 300 average 200.");
  assert.equal(averageScore([]), 0, "An empty list averages 0, not NaN. Check for an empty list before you divide.");
});

test("6) leaderboard gives numbered lines for one level and up, highest score first", () => {
  const players = sampleScores();
  assert.deepEqual(leaderboard(players, 8), ["1. NovaFox: 12450", "2. GlitchGoose: 10300", "3. LunaByte: 9900"],
    "Level 8 and up: NovaFox, GlitchGoose and LunaByte, numbered from 1, highest score first.");
  assert.deepEqual(leaderboard(players, 5), [
    "1. NovaFox: 12450",
    "2. GlitchGoose: 10300",
    "3. LunaByte: 9900",
    "4. PixelPanda: 8200",
    "5. WaffleWizard: 6750",
    "6. MossyMoose: 5150",
  ], "Level 5 and up is six entries. MossyMoose reached exactly level 5, so it counts.");
  assert.deepEqual(leaderboard(players, 10), [], "Nobody reached level 10, so the leaderboard is an empty array.");
  assertUnchanged(players, "leaderboard");
});
