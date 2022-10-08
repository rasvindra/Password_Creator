
const createPassword = document.querySelector("#createpassword")

const letterLwr =["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const letterUpper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numeric =["0","1","2","3","4","5","6","7","8","9"];
const letterSpecial =["~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","'","<",">","?",".","/","|",'"',","];

function UserInput() {
var upperLetter = prompt("Would you like to include Upper Case Letters In your password? Please enter Y for yes or N or no.")
if (upperLetter !== "Y" && upperLetter !== "N")
alert("Sorry not a Valid option. Please enter Y or N for your choice")
    
var lowerLetter = prompt("Would you like to include Lower Case Letters In your password? Please enter Y for yes or N or no.")
if (lowerLetter !== "Y" && lowerLetter !== "N")
alert("Sorry not a Valid option. Please enter Y or N for your choice")

var specialChar = prompt("Would you like to include Special Characters In your password? Please enter Y for yes or N or no.")
if (specialChar !== "Y" && specialChar !== "N")
alert("Sorry not a Valid option. Please enter Y or N for your choice")

var numValue = prompt("Would you like to include Numbers In your password? Please enter Y for yes or N or no.")
if (numValue !== "Y" && numValue !== "N")
alert("Sorry not a Valid option. Please enter Y or N for your choice")

var passLength = parseInt( prompt(
    "How many charaters would you like your password to be? Minimum length is 8 characters and no maximum length can be 128 characters"
  ));
if (passLength < 8 || passlength > 128)
  alert("Sorry Not a valid choice! Please select a number between 8 and 128");


}