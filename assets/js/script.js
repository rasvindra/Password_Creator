

var lwrLetterChar =["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upprLetterChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChar =["0","1","2","3","4","5","6","7","8","9"];
var specialLetterChar =["~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","'","<",">","?",".","/","|",'"',","];


function UserInput() {
var upper = prompt("Would you like to include Upper Case Letters In your password? Please enter Y for yes or N or no.")
if (upper !== "Y" && upper !== "N")
alert("Sorry not a Valid option. Please enter Y or N for your choice")
    
var lower = prompt("Would you like to include Lower Case Letters In your password? Please enter Y for yes or N or no.")
if (lower !== "Y" && lower !== "N")
alert("Sorry not a Valid option. Please enter Y or N for your choice")

var special = prompt("Would you like to include Special Characters In your password? Please enter Y for yes or N or no.")
if (special !== "Y" && special !== "N")
alert("Sorry not a Valid option. Please enter Y or N for your choice")

var number = prompt("Would you like to include Numbers In your password? Please enter Y for yes or N or no.")
if (number !== "Y" && number !== "N")
alert("Sorry not a Valid option. Please enter Y or N for your choice")

var passwordLength = parseInt( prompt(
    "How many charaters would you like your password to be? Minimum length is 8 characters and maximum length can be 128 characters"
  ));
if (passwordLength < 8 || passwordLength > 128)
  alert("Sorry Not a valid choice! Please select a number between 8 and 128");


if (upper !=="Y" && lower !=="Y" && special !=="Y" && number !=="Y") {
alert("You decided to have no values for your password. Please enter at least one value to create your password")
}
else {
    var result = []
        if (upper==="Y"){
            result = result.concat(upprLetterChar)
        }
        if (lower==="Y"){
            result = result.concat(lwrLetterChar)
        }
        if (special==="Y"){
            result = result.concat(specialLetterChar)
        }
        if (number==="Y"){
            result = result.concat(numChar)
        }

        begintheProcess(passwordLength, result) 
        console.log(result, "test 111111111111111111111")
        console.log(numChar,"test 33333333333333333333")
        console.log(specialLetterChar, "test 444444444444444444")
    }
}


 function begintheProcess(passwordLength, result){
    var newPassword = ""
    for(var i=0; i < passwordLength; i++){


        newPassword=newPassword+result[Math.floor(Math.random()* result.length)]
        
        console.log(newPassword) //test 222222
        console.log(result, 'test555555555555555555')
    }
    var displayPassword = document.querySelector("#password")
    displayPassword.value = newPassword
 }

document.querySelector("#createpassword").addEventListener("click",UserInput)