# Exercise: High-Score Leaderboard

Exercise code for the lesson **Exercise: High-Score Leaderboard** in the JavaScript in Depth course on [ask-codey.com](https://www.ask-codey.com).

Comet Dash, an arcade game, keeps every game's result in one list: the player's gamer tag, their score, the level they reached and the date they played. You'll finish six functions in `leaderboard.js` that turn that list into what the game's screens show: the top 3, the players over a score, one display line per player, the total and average score, and a numbered leaderboard. Tests check every function.

## What's here

- `leaderboard.js`: the six functions, each returning an empty array `[]` or `0` for now. The comment above each one says what it should return, with examples. For you to finish.
- `high-scores.js`: the game's high-score list, eight games in the order they were played. Ready to use.
- `show-leaderboard.js`: prints what your functions give back for that list, so you can see them at work. Ready to use.
- `leaderboard.test.js`: tests that call your functions. You don't need to change this file.
- `package.json`: tells Node.js that this folder's files use `import` and `export`, and how to run its tests. Ready to use.

The word `export` in front of each function lets other files, such as the tests, use it. *Modules: import and export* in Module 3 explains how it works; for now, leave it where it is.

## Run it

Open the folder in VS Code, then open its terminal with **Terminal > New Terminal**, and type:

```bash
node show-leaderboard.js
```

At first most lines are empty or `0`. Each function you finish fills in its line.

## Check your work

```bash
node --test
```

At first every test fails: that is expected. Each function you finish turns its test green. A failing test's message says what it expected, for example *Over 9000 points: NovaFox, LunaByte and GlitchGoose, in the order they're in the list.*

## The rules

- Use the array methods from the chapter: `map`, `filter`, `reduce`, `sort` or `toSorted`, and `slice`. The tests can't see how you wrote a function, but this exercise is your practice with them, so no `for` loops.
- Never change the list a function is given. The game still needs it in the order the games were played. The tests check this.
- Write `leaderboard` as one chain of array methods.

## Tips

- Say each job in words first: "keep these", "turn each one into a line", "add them all up", "put them in order". Each phrase points to one method.
- `slice(0, 3)` copies the first three items of an array, and gives back fewer when the array is shorter.
- A sort needs a compare function to sort numbers. Which one puts the highest score first?
- A function you've finished can be called by another one. `averageScore` needs a total, and you'll already have written a function for that.
- For an empty list, an average would divide by 0. Check the list's `length` first.

## Hand it in

When it works, put your solution in a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. You don't need Git: create the repo on GitHub, choose **Add file**, then **Upload files**, and upload everything in this folder. The lesson page shows each step, and the lesson *Put Your Code on GitHub* walks through every screen.
