const school = 'Kamarjuri Yousuf Ali High school'

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry'
const book = 'chemistry'

if(subject.toLowerCase === book.toLowerCase){
    console.log('I am reading books');
}
else {
    console.log('hudai pora lekha kori');
}


const drink = 'water ';
const liquid = ' water';

//for ignoring the white space we use trim() function
if (drink.trim() === liquid.trim()){
    console.log('panir opor nam jibon');
}
else{
    console.log ('somudre pani ase khaite pari na');
}