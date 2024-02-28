function displayGreeting() {
        var today = new Date(); 
        var day = today.getDay();
        var msg = "";
    
        if (day == 0) {  // Sunday
        msg = "Sunday is Fun-day over in Smethwick!"; 
        } else if (day == 1) { // Monday
        msg = "Monday is Fun-day over in Smethwick!"; 
        } else if (day == 2) {  // Tues
        msg = "Come in for our special Taco Tuesdays!"; 
        } else if (day == 3) {  // Weds
        msg = "Come on down to Smethwick to celebrate Slump Day!"; 
        } else if (day == 4) {  // Thurs
        msg = "Did you know: Smethwick Pub was founded on a Thursday"; 
        } else if (day == 5) {  // Fri
        msg = "Woohoo! It's Friday! Come on down to Smethy for a drink!"; 
        } else if (day == 6) {  // Sat
        msg = "Come on down to Smethwick for Funny hat-urday Saturday!"; 
        }
       
        var newmsg = document.getElementById("daily-message")
        newmsg.innerHTML = msg;
}

displayGreeting()