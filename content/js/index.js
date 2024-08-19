var motiarrays=

["Here's a test to find out whether your mission on earth is finished: If you are alive, it isn't! -Richard Bach",

"No one ever attains very eminent success by simply doing what is required of him; it is the amount and excellence of what is over and above the required that determines the greatness of ultimate distinction. - Charles Kendall Adams",

"It's not the will to win, but the will to prepare to win that makes the difference. - Bear Bryant",

"Obstacles can't stop you. Problems can't stop you. Most of all, other people can't stop you. Only you can stop you. - Jeffrey Gitomer",

"What is important is not what happens to us, but how we respond to what happens to us. -Jean-Paul Sartre",

"Start by doing what's necessary, then what's possible, and suddenly you are doing the impossible. - St. Francis of Assisi",

"Begin to free yourself at once by doing all that is possible with the means you have, and as you proceed in this spirit the way will open for you to do more. - Robert Collier",

"Four short words sum up what has lifted most successful individuals above the crowd: a little bit more. They did all that was expected of them and a little bit more. - A. Lou Vickery",

"Courage means to keep working a relationship, to continue seeking solutions to difficult problems, and to stay focused during stressful periods. - Denis Waitley",

"Courage is the enforcing virtue, the one that makes possible all the other virtues common to exceptional leaders: honesty, integrity, confidence, compassion, and humility. - John McCain"]


function loadmotivation(){
    document.getElementById("pnlquot").innerHTML = "New text!";
    alert(motiarrays[getRandomInt(10)]);
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

loadmotivation();