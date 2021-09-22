// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   //console.log(char);
  
//   process.stdout.write(char);

//   setTimeout(() => { sentence
//   }, 3000);         
//}


const sentence = "hello there from lighthouse labs \n";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay);
  delay += 50;
}