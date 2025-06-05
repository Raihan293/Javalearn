const address = 'gazipurdhaka';
const part = address.slice(2,5);
console.log(part);

const sentence = 'I am a good and hardworking person';
console.log(sentence.split());
//output [ 'I am a good and hardworking person' ]


console.log(sentence.split(''));//output 
   // 'I', ' ', 'a', 'm', ' ', 'a', ' ',
    //'g', 'o', 'o', 'd', ' ', 'a', 'n',
    //'d', ' ', 'h', 'a', 'r', 'd', 'w',
    //'o', 'r', 'k', 'i', 'n', 'g', ' ',
    //'p', 'e', 'r', 's', 'o', 'n'

console.log(sentence.split(' '));
//output [ 'I', 'am', 'a', 'good', 'and', 'hardworking', 'person' ]


const friendsStr = ['Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim'];
console.log(friendsStr.join());//output Rahim, kahim, dahim, lahim, fahim, sahim
console.log(friendsStr.join('-'));//output Rahim-kahim-dahim-lahim-fahim-sahim