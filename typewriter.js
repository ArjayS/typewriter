const sentence = "hello there from lighthouse labs";

// // for (const char of sentence) {
// //   // console.log(char);
// //   // process.stdout.write(char);
// //   setTimeout(() => {
// //     process.stdout.write(char);
// //   }, 1000);
// // }

let delay = 0;
const newSentence = sentence + "\n";
for (const char of newSentence) {
  delay += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}
