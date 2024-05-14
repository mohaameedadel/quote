let array = [
  {
    text: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    text: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "Marilyn Monroe",
  },
  {
    text: "“So many books, so little time.”",
    author: "Frank Zappa",
  },
  {
    text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "Albert Einstein",
  },
  {
    text: "“A room without books is like a body without a soul.”",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.”",
    author: "William W. Purkey",
  },
  {
    text: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "Dr. Seuss",
  },
  {
    text: "“You only live once, but if you do it right, once is enough.”",
    author: "Mae West",
  },
  {
    text: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    text: "“Always forgive your enemies; nothing annoys them so much.”",
    author: "Oscar Wilde",
  },
  {
    text: "“Without music, life would be a mistake.”",
    author: "Friedrich Nietzsche, Twilight of the Idols",
  },
  {
    text: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "Andre Gide, Autumn Leaves",
  },
];

let button = document.getElementById("button");
let quote = document.getElementById("quote");
let authorName = document.getElementById("authorName");
let lastNum = "";

button.onclick = function () {
  let random = Math.floor(Math.random() * array.length);

  while (random == lastNum) {
    random = Math.floor(Math.random() * array.length);
  }

  quote.innerHTML = array[random]["text"];
  authorName.innerHTML = array[random]["author"];
  lastNum = random;
};
