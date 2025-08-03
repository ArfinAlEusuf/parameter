const experience = 40;
const startingSalary = 30000;
/**  impliment 5% 
 * 
 * */

let currentSalary = startingSalary;
for(i=0; i<experience; i++){
    currentSalary = currentSalary * 1.05;
}
console.log(currentSalary.toFixed(2));