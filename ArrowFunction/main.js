/* OLD FUNCTION */
const upperizedNames = ["Dimas", "Widy", "Buchori"]
    .map(function(name) {
        return name.toUpperCase();
});
 
console.log(...upperizedNames);
 
/* output:
DIMAS WIDY BUCHORI
*/


/*ARROW FUNCTION */

const upperizedNames = ["Dimas", "Widy", "Buchori"]
    .map(name => name.toUpperCase());
 
console.log(...upperizedNames);
 
/* output:
DIMAS WIDY BUCHORI
*/