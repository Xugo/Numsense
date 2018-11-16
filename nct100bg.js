//Numbers Close to 100 But Greater Than 100 Problem Generator v1.3

    var min = 101; //minimum value of the numbers
    var max = 112; //max value of the numbers
    var first = 103; //first number
    var second = 108; //second number
    var fdist = 1; //first distance
    var sdist = 1; //second distance
    var mdist = 1; //multiplied distance
    var mdistb = 1; //multiplied distance with leading zero
    var adddist = 1; //added distance to the other number
    var canswer = 1;
    
    function Question(){
        Randomize();
        Generate();
        question = document.getElementById("question");
        question.innerHTML = "What is " + first + " x " + second + "?";
    }
    
    function Randomize(){
        first = Math.floor(Math.random() * (max - min + 1)) + min;
        second = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function Generate(){
        fdist = first - 100;
        sdist = second - 100;
        mdist = fdist * sdist;
        adddist = fdist + second;
        canswer = first * second;
        txtcanswer = document.getElementById("txtcanswer");
        txtcanswer.innerHTML = "";
        explanation = document.getElementById("explanation");
        explanation.innerHTML = "";
    }
    
    function Evaluate(){
        answer = document.getElementById("txtanswer");
        answer = answer.value;
        document.getElementById("txtanswer").value = ""; //clears the answer field
          if (canswer == answer){
            txtcanswer.innerHTML = "That is Correct!";
            explanation.innerHTML = "";
        }
        else if (canswer != answer){
            //for black submissions
            if (answer == ""){
                }
                // for the cancel button
                else if (Boolean(answer) == false){
                }
                else {
                    txtcanswer.innerHTML = "That is incorrect;" + first + " x " + second + " is " + canswer;
                    Explain();
                }
                }
        else {
            txtcanswer.innerHTML = "Error Code: #002 \n" + "An error has occurred please send the numbers that were being multiplied and the Error Code to me \(Kelvin Nguyen\) at kelvin94@gmail.com so that I may look into the problem."; 
        }
    }
    
    function Explain(){
        if (mdist > -1 && mdist < 10){
            mdistb = "0" + mdist.toString();
            explanation.innerHTML = "The Problem: " + first + " x " + second + "\n" + "First Step: Multiply the distance from 100 of both numbers (" + fdist + " and " + sdist + ") together to get " + mdist + "\n" + "Write this number down as a 2 digit number " + "(" + mdistb + ")" + "\n" + "\n" + "Second Step: Add one of the distances to the other number (" + fdist + " + " + second + ") to get " + adddist + "\n" + "Write this number down" + "\n" + "\n" + "Answer: " + canswer;
            }
        else if (mdist > 9 && mdist < 100){
            explanation.innerHTML = "The Problem: " + first + " x " + second + "\n" + "First Step: Multiply the distance from 100 of both numbers (" + fdist + " and " + sdist + ") together to get " + mdist + "\n" + "Write this number down " + "\n" + "\n" + "Second Step: Add one of the distances to the other number (" + fdist + " + " + second + ") to get " + adddist + "\n" + "Write this number down" + "\n" + "\n" + "Answer: " + canswer;
        }
        else if (mdist > 99 && mdist < 1000){
            var mdist2  = mdist.toString();
            mdist2 = mdist2.split("");
            mdist3 = mdist2[1] + mdist2[2]; //tens and ones digit combined
            var adddist2 = mdist2[0]*1 + adddist; //adds the carry from step one to the second step
            explanation.innerHTML = "The Problem: " + first + " x " + second + "\n" + "First Step: Multiply the distance from 100 of both numbers (" + fdist + " and " + sdist + ") together to get " + mdist + "\n" + "Write down the tens and ones place (" + mdist3 + ") and carry the hundreds place " + "(" + mdist2[0] + ")" + "\n" + "\n" + "Second Step: Add one of the distances to the other number (" + fdist + " + " + second + ") to get " + adddist + "\n" + "Then add your carry from step one to " + adddist + " to get " + adddist2 + "\n" + "Write this number down" + "\n" + "\n" + "Answer: " + canswer;
        }
        else {
        txtcanswer.innerHTML = "Error Code: #003 \n" + "An error has occurred please send the numbers that were being multiplied and the Error Code to me \(Kelvin Nguyen\) at kelvin94@gmail.com so that I may look into the problem."; 
        }
    }