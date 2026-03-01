// ------------------------------
// 1) FOR LOOP: count 0 to 10, show odd/even
// ------------------------------
const forOutput = document.getElementById("forOutput");

for (let i = 0; i <= 10; i++) {
  const isEven = (i % 2 === 0);
  const msg = `Count ${i} is ${isEven ? "even" : "odd"}`;

  const line = document.createElement("div");
  line.className = "output-line";
  line.textContent = msg;
  forOutput.appendChild(line);
}

// ------------------------------
// 2) PROMPT user for a number 5-20, store in myNum
//    Then DO/WHILE loop from 1 until it equals myNum
// ------------------------------
let myNum;

// Keep prompting until the user enters a valid number (5 to 20)
do {
  const input = prompt("Enter a number between 5 and 20:");
  myNum = Number(input);
} while (!Number.isInteger(myNum) || myNum < 5 || myNum > 20);

const doWhileOutput = document.getElementById("doWhileOutput");

let counter = 1;
do {
  const line = document.createElement("div");
  line.className = "output-line";
  line.textContent = `Do/While counter: ${counter}`;
  doWhileOutput.appendChild(line);

  counter++;
} while (counter <= myNum);

// ------------------------------
// 3) ARRAY: store subjects, display with forEach(), then commas
// ------------------------------
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Readable format using forEach()
const arrayReadable = document.getElementById("arrayReadable");
subjects.forEach(subject => {
  const li = document.createElement("li");
  li.textContent = subject;
  arrayReadable.appendChild(li);
});

// Comma-separated using one statement
document.getElementById("arrayComma").textContent = subjects.join(", ");
