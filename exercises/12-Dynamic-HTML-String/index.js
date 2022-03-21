let myDate = new Date();
let myYear = myDate.getFullYear();
let myString = "<p>Hello!</p> <strong>My friend,</strong>";
myString = myString.concat(` we are in the year ${myYear}`); 

document.write(myString);