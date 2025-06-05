/** lOOPING METHODS 
 * 1.FOR LOOP
 * 2, While Loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno 
 * 
 * *? */

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for(const friend of friends){
    console.log(friend);
}

for(let i= 0; i<friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}