//Base Conversion Problem Generator v1.1

    var min = 20; // minimum value of the number
    var max = 10000; // max value of the number
    var number = 2012; // Number that needs to be converted
    var base = 3; // starting base of the number
    var cases = 0;
    var canswer = 59;
    
    function Question(){
        Randomize(); 
        Generate();
        question = document.getElementById("question");
        question.innerHTML = "What is " + number + "<sub>" + base + "</sub> in base 10?";
    }
    
    function Randomize(){
        base = Math.ceil(Math.random()* 8) + 1;
        cases = Math.floor(Math.random() * 3);
        switch (base){
            case 2:
                if (cases == 0){
                        canswer = Math.ceil(Math.random() * max/500);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 1){
                        canswer = Math.ceil(Math.random() * max/250);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 2){
                        canswer = Math.ceil(Math.random() * max/250);
                        number = canswer.toString(base) * 1;
                }
                break;
            case 3:
                if (cases == 0){
                        canswer = Math.ceil(Math.random() * max/100);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 1){
                        canswer = Math.ceil(Math.random() * max/100);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 2){
                        canswer = Math.ceil(Math.random() * max/50);
                        number = canswer.toString(base) * 1;
                }
                break;
            case 4:
                if (cases == 0){
                        canswer = Math.ceil(Math.random() * max/50);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 1){
                        canswer = Math.ceil(Math.random() * max/25);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 2){
                        canswer = Math.ceil(Math.random() * max/10);
                        number = canswer.toString(base) * 1;
                }
                break;
            case 5:
                if (cases == 0){
                        canswer = Math.ceil(Math.random() * max/10);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 1){
                        canswer = Math.ceil(Math.random() * max/10);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 2){
                        canswer = Math.ceil(Math.random() * max/5);
                        number = canswer.toString(base) * 1;
                }
                break;
            case 6:
                if (cases == 0){
                        canswer = Math.ceil(Math.random() * max/10);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 1){
                        canswer = Math.ceil(Math.random() * max/5);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 2){
                        canswer = Math.ceil(Math.random() * max/5);
                        number = canswer.toString(base) * 1;
                }
                break;
            case 7:
                if (cases == 0){
                        canswer = Math.ceil(Math.random() * max/2);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 1){
                        canswer = Math.ceil(Math.random() * max/2);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 2){
                        canswer = Math.ceil(Math.random() * max/2);
                        number = canswer.toString(base) * 1;
                }
                break;
            case 8:
                if (cases == 0){
                        canswer = Math.ceil(Math.random() * max/2);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 1){
                        canswer = Math.ceil(Math.random() * max/2);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 2){
                        canswer = Math.ceil(Math.random() * max/2);
                        number = canswer.toString(base) * 1;
                }
                break;
            case 9:
                if (cases == 0){
                        canswer = Math.ceil(Math.random() * max/2);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 1){
                        canswer = Math.ceil(Math.random() * max/5);
                        number = canswer.toString(base) * 1;
                }
                else if (cases == 2){
                        canswer = Math.ceil(Math.random() * max/5);
                        number = canswer.toString(base) * 1;
                }
                break;                
        }
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
                    txtcanswer.innerHTML = "That is incorrect;" + number + " x " + base + " is " + canswer;
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
        var numberArray = number.toString().split("");
        var numSuffix = ""; // st, nd, rd, th in explanation steps (1st, 2nd, etc)
        var explainSum = "";
        
        explain += ("The Problem: Convert " + number + "<sub>" + base + "</sub> to base 10 \n");
        for (var i = 0; i < numberArray.length; i++){
            if (i == 0){
                numSuffix = "st";
            }
            else if (i == 1){
                numSuffix = "nd";
            }
            else if (i == 2){
                numSuffix = "rd";
            }
            else {
                numSuffix = "th";
            }
            if (i == 0){
                explainSum += "Last step: Add up all your products ("; 
            }
            explain += ("Step " + step + ": Multiply " + base + "<sup>" + (numberArray.length - i - 1) + "</sup> (" + (Math.pow(base, numberArray.length - i - 1)) + ") by the " + (i + 1) + numSuffix + " digit (" + numberArray[i] + ") to get " + (numberArray[i] * Math.pow(base, numberArray.length - i - 1)) + ". \n");
            if (i < numberArray.length - 1){
                explainSum += (numberArray[i] * Math.pow(base, numberArray.length - i - 1)) + " + ";
            }
            step++;
        }
        explainSum += (numberArray[i - 1] * Math.pow(base, numberArray.length - i)) + ").";
        explain += explainSum;
        explain += "\n\nAnswer: " + canswer;
        
        explanation.innerHTML = explain;
    }
