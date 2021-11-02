const sentence = "hello there from lighthouse labs";
let iteration = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    iteration++;
    if (iteration === sentence.length)
      console.log();
  }, 50 * i);
}