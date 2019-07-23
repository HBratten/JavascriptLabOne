let name = "Hillary Bratten";
let age = 25;
let birthday = "June 29";
let detroitGC = true;
let lifeEvents = [
  "I was born in Rochester, NY.",
  "I went to Allegheny College.",
  "I got married on December 5, 2015.",
  "I was voted most optimistic in 4th grade."
];

if ((detroitGC = true)) {
  console.log(
    "My name is " +
      name +
      ". I am a student at Grand Circus in Detroit, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      "."
  );
} else {
  console.log(
    "My name is " +
      name +
      ". I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday +
      "."
  );
}

for (let i = 0; i < [lifeEvents.length]; i++) {
  console.log(lifeEvents[i]);
}

let randomNumber = Math.floor(Math.random() * 10 + 1);
let counter = 0;

while (true) {
  if (randomNumber !== 5) {
    console.log(randomNumber + "!== 5");
    randomNumber = Math.floor(Math.random() * 10 + 1);
    counter++;
  } else {
    counter++;
    console.log(
      "5 === 5. It took " +
        counter +
        " iterations to randomly generate the number 5."
    );
    break;
  }
}
