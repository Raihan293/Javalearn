const sentence = 'I am learing Web dev';
let reverse='';
for (const letter of sentence){
    console.log(letter);

    reverse = letter + reverse;
}
console.log(reverse);