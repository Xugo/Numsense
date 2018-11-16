//Perfect Cube Root Problem Generator v1.0

    var min = 10; // minimum value of the number (10^3 = 1,000)
    var max = 99; // max value of the number (99^3 = 970,299)
    var number = 10648; // Number that needs to be cube rooted
    var canswer = 22;
    
    function Question(){
        Randomize(); 
        Generate();
        question = document.getElementById("question");
        question.innerHTML = "What is the cube root of " + number + "?";
    }
    
    function Randomize(){
        canswer = Math.ceil(Math.random() * (max - min)) + min;
        number = Math.pow(canswer, 3);
    }
    
    function Generate(){
        txtcanswer = document.getElementById("txtcanswer");
        txtcanswer.innerHTML = "";
        explanation = document.getElementById("explanation");
        explanation.innerHTML = "";
        document.getElementById("txtanswer").value = ""; //clears the answer field
    }
    
    function Evaluate(){
        answer = document.getElementById("txtanswer");
        answer = answer.value;
          if (canswer == answer){
            document.getElementById("txtanswer").value = ""; //clears the answer field
            txtcanswer.innerHTML = "That is Correct!";
            explanation.innerHTML = "";
            }
            else if (canswer != answer){
                //for blank submissions
                if (answer == ""){
                }
                // for the cancel button
                  else if (Boolean(answer) == false){   
                  }
                  else {
                    txtcanswer.innerHTML = "That is incorrect; the cube root of " + number + " is " + canswer;
                    Explain();
                  }
            }
            else {
            txtcanswer.innerHTML = "Error Code: #002 \n" + "An error has occurred please send the numbers that were being multiplied and the Error Code to me \(Kelvin Nguyen\) at kelvinnguyen94@gmail.com so that I may look into the problem.";
            }
    }
    
    function Explain(){
        var explain = "";
        var step = 1; // counts the step the explanation is currently on
        var numberString = "" + number;
        var numberPart = number.toString(); // Number with the last three digits truncated
        numberPart2 = numberPart.substring(0, numberPart.length - 3);
        
        explain += ("The Problem: Find the cube root of " + number + ". \n\n");
        if (numberString.charAt(numberString.length - 1) * 1 == 2){
            explain += ("Step " + step + ": Look at the last digit of the number. \n");
            explain += ("This is a special case; we know that if a perfect cube ends in a 2, \n then the cube root will end in an (8). \n\n");
            step++;
        }
        else if (numberString.charAt(numberString.length - 1) * 1 == 3){
            explain += ("Step " + step + ": Look at the last digit of the number. \n");
            explain += ("This is a special case; we know that if a perfect cube ends in a 3, \n then the cube root will end in a (7). \n\n");
            step++;
        }
        else if (numberString.charAt(numberString.length - 1) * 1 == 7){
            explain += ("Step " + step + ": Look at the last digit of the number. \n");
            explain += ("This is a special case; we know that if a perfect cube ends in a 7, \n then the cube root will end in a (3). \n\n");
            step++;
        }
        else if (numberString.charAt(numberString.length - 1) * 1 == 8){
            explain += ("Step " + step + ": Look at the last digit of the number. \n");
            explain += ("This is a special case; we know that if a perfect cube ends in an 8, \n then the cube root will end in a (2). \n\n");
            step++;
        }
        else{
            explain += ("Step " + step + ": Look at the last digit of the number. \n");
            explain += ("This is not a special case; so we know that the number the perfect cube \n ends in will be the same as the number the cube root will end in (" + numberString.charAt(numberString.length - 1) + "). \n\n");
            step++;
        }
        explain += ("Step " + step + ": Now ignore the last three digits (" + numberPart.substring(numberPart.length - 3, numberPart.length) + ") and only look at what remains (" + numberPart2 + "). \n\n");
        step++;
        
        explain += ("Step " + step + ": See which two perfect cubes the remaining digits lie between and then take the lower of the two. \n");
        explain += (numberPart2 + " is between " + Math.pow(Math.floor(canswer/10), 3) + " and " + Math.pow((Math.floor(canswer/10 + 1)), 3) + " so the final digit to our answer is (" + Math.floor(canswer/10) + ").\n\n");
        explain += "Answer: " + canswer;
        
        explanation.innerHTML = explain;
    }
