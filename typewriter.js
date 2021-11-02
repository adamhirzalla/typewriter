const sentence = "hello there from lighthouse labs";
const node = process.stdout;
let time = 0;
let iteration = 0;
for (const char of sentence) {
  time += 50;
  setTimeout(() => {
    node.write(char);
    iteration++;
    if (iteration === sentence.length)
      console.log('\n');
  }, time);
}