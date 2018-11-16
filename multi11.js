//Multiplying by 11 Problem Generator v1.5

    var min = 10000; //minimum value of the numbers
    var max = 500000; //max value of the numbers
    var number = 17346; //first number
    var eleven = 11; //eleven
    var canswer = 1;
    var order = 0;
    
    function Question(){
        Randomize(); 
        Order();
        Generate();
        question = document.getElementById("question");
        question.innerHTML = "What is " + number + " x " + eleven + "?";
    }
    
    function Randomize(){
        var preliminaryNum = Math.floor(Math.random()*3);
        if (preliminaryNum == 0){
            number = Math.floor(Math.random() * (max/10 - min + 1)) + min;
        }
        else if (preliminaryNum == 1){
            number = Math.floor(Math.random() * (max/100 - min + 1)) + min;
        }
        else if (preliminaryNum == 2){
            number = Math.floor(Math.random() * (max/1000 - min + 1)) + min;
        }
        eleven = 11;
    }
    
    function Order(){
        order = Math.floor(Math.random()*2);
        if (order == 0){
            
        }
        else if (order == 1){
            var temp = number;
            number = eleven;
            eleven = temp;
        }
        else {
            alert("Error Code: #0" + order + "1 \n" + "An error has occurred please send this Error Code to me \(Kelvin Nguyen\) at kelvinnguyen94@gmail.com so that I may look into the problem.")
        }
    }
    
    function Generate(){
        canswer = number * eleven;
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
                    txtcanswer.innerHTML = "That is incorrect;" + number + " x " + eleven + " is " + canswer;
                    Explain();
                  }
            }
            else {
            txtcanswer.innerHTML = "Error Code: #002 \n" + "An error has occurred please send the numbers that were being multiplied and the Error Code to me \(Kelvin Nguyen\) at kelvinnguyen94@gmail.com so that I may look into the problem.";
            }
    }
    
    function Explain(){
if (order == 0){
        var numberb = number.toString();
        numberb = numberb.split("");
        var i = 0;
        var last = numberb.length - 1;
        var explain = "";
        var step = 1;
        var carry = 0;
        var interval = 0;
        var carryadded = 0;
        var carryaddedc = 0;
        for (i = numberb.length - 1; i > -2; i--){
            interval = 0;
            if (i == numberb.length - 1){ //beginning
                explain += ("The Problem: " + number + " x " + eleven + "\n" + "Step " + step + ": Write down the last digit of the number (" + numberb[last] + ").");
                explanation.innerHTML = explain;
                }
            else if (i == -1){ //ending
                step++;
                if (carry == 0){
                    explain += ("\n" + "\n" + "Step " + (step) + ": Lastly write down the first digit of the number (" + numberb[0] + ") and you're done." + "\n" + "\n" + "Answer: " + canswer);
                }
                else if (carry > 0 && carry < 99){
                    stepb = step-1;
                    numberc = numberb[0]*1;
                    var first = carry + numberc;
                    explain += ("\n" + "\n" + "Step " + (step) + ": Lastly add your carry from step " + stepb + " (" + carry + ")" + " to the first digit of the number being multiplied with eleven (" + numberb[0] + ") to get " + first + "\n Then just write " + first + " down and you're done." + "\n" + "\n" + "Answer: " + canswer);
                }
                else {
                    alert("Error Code: #0" + carry + "3 \n" + "An error has occurred please send this Error Code to me \(Kelvin Nguyen\) at kelvinnguyen94@gmail.com so that I may look into the problem.")
                }
                explanation.innerHTML = explain;
            }
            //add another step for each interval that is created
            else {
                step++;
                interval = parseInt(numberb[i+1]) + parseInt(numberb[i]);
                if (carryaddedc > 9 && carryaddedc < 100){
                    carryadded = carry + interval;
                    var intervalb = interval.toString();
                    intervalb = intervalb.split("");
                    intervalb[1] = intervalb[1]*1;
                    carry = intervalb[0]*1
                    stepb = step-1; //referring to where carry came from
                    explain += ("\n" + "\n" + "Step " + step + ": Add " + numberb[i+1] + " and " + numberb[i] +  " and your carry from step " + stepb + " (" + carry + ")" + " to get " + carryadded + ". Write this number down..")
                    explanation.innerHTML = explain;
                }
                else if (carry > 0 && carry < 99){
                    carryadded = carry + interval;
                    var carryaddedb = carryadded.toString();
                    carryaddedb = carryaddedb.split("");
                    carryaddedb[1] = carryaddedb[1]*1;
                    carryaddedb[0] = carryaddedb[0]*1;
                    stepb = step-1; //referring to where carry came from
                    if (carryadded > 9 && carryadded < 100){
                        explain += ("\n" + "\n" + "Step " + step + ": Add " + numberb[i+1] + " and " + numberb[i] +  " and your carry from step " + stepb + " (" + carry + ")" + " to get " + carryadded + ". Write down the digit in the ones place (" + carryaddedb[1] + ") and mentally carry the tens place (" + carryaddedb[0] + ") ")
                        carry = carryaddedb[0];
                    }
                    else if (carryadded > -1 && carryadded < 9){
                        explain += ("\n" + "\n" + "Step " + step + ": Add " + numberb[i+1] + " and " + numberb[i] +  " and your carry from step " + stepb + " (" + carry + ")" + " to get " + carryadded + ". Write this number down.")
                        carry = 0;
                    }
                    else {
                        explain += ("\n" + "\n" + "Step " + step + ": Add " + numberb[i+1] + " and " + numberb[i] +  " and your carry from step " + stepb + " (" + carry + ")" + " to get " + carryadded + ". Write this number down.")
                        carry = 0;
                    }
                    explanation.innerHTML = explain;
                    carryaddedb = carryadded;
                    carryadded = 0;
                    interval = 0;
                }
                else if (interval > -1 && interval < 10){
                    explain += ("\n" + "\n" + "Step " + step + ": Add " + numberb[i+1] + " and " + numberb[i] + " to get " + interval + ". Write this number down.");
                    explanation.innerHTML = explain;
                }
                else if (interval > 9 && interval < 100){
                    var intervalb = interval.toString();
                    intervalb = intervalb.split(""); 
                    intervalb[1] = intervalb[1]*1; //setting the ones digit to an integer instead of string
                    carry = intervalb[0]*1  //the tens digit carried over to the next step
                    explain += ("\n" + "\n" + "Step " + step + ": Add " + numberb[i+1] + " and " + numberb[i] + " to get " + interval + ". Write down the digit in the ones place (" + intervalb[1] + ") and mentally carry the tens place (" + carry + ") ")
                    explanation.innerHTML = explain;
                }
                else {
                    alert("Error Code: #0" + interval + "1 \n" + "An error has occurred please send this Error Code to me \(Kelvin Nguyen\) at kelvinnguyen94@gmail.com so that I may look into the problem.")
                 }
            }
        }
}
else if (order == 1){
        var elevenb = eleven.toString();
        elevenb = elevenb.split("");
        var i = 0;
        var last = elevenb.length - 1;
        var explain = "";
        var step = 1;
        var carry = 0;
        var interval = 0;
        var carryadded = 0;
        var carryaddedc = 0;
        for (i = elevenb.length - 1; i > -2; i--){
            interval = 0;
            if (i == elevenb.length - 1){
                explain += ("The Problem: " + number + " x " + eleven + "\n" + "Step " + step + ": Write down the last digit of the number (" + elevenb[last] + ").");
                explanation.innerHTML = explain;
                }
            else if (i == -1){
                step++;
                if (carry == 0){
                    explain += ("\n" + "\n" + "Step " + (step) + ": Lastly write down the first digit of the number (" + elevenb[0] + ") and you're done." + "\n" + "\n" + "Answer: " + canswer);
                }
                else if (carry > 0 && carry < 99){
                    stepb = step-1;
                    elevenc = elevenb[0]*1;
                    var first = carry + elevenc;
                    explain += ("\n" + "\n" + "Step " + (step) + ": Lastly add your carry from step " + stepb + " (" + carry + ")" + " to the first digit of the number being multiplied with eleven (" + elevenb[0] + ") to get " + first + "\n Then just write " + first + " down and you're done." + "\n" + "\n" + "Answer: " + canswer);
                }
                else {
                    alert("Error Code: #0" + carry + "3 \n" + "An error has occurred please send this Error Code to me \(Kelvin Nguyen\) at kelvinnguyen94@gmail.com so that I may look into the problem.")
                }
                explanation.innerHTML = explain;
            }
            //add another step for each interval that is created
            else {
                step++;
                interval = parseInt(elevenb[i+1]) + parseInt(elevenb[i]);
                if (carryaddedc > 9 && carryaddedc < 100){
                    carryadded = carry + interval;
                    var intervalb = interval.toString();
                    intervalb = intervalb.split("");
                    intervalb[1] = intervalb[1]*1;
                    carry = intervalb[0]*1
                    stepb = step-1; //referring to where carry came from
                    explain += ("\n" + "\n" + "Step " + step + ": Add " + elevenb[i+1] + " and " + elevenb[i] +  " and your carry from step " + stepb + " (" + carry + ")" + " to get " + carryadded + ". Write this number down..")
                    explanation.innerHTML = explain;
                }
                else if (carry > 0 && carry < 99){
                    carryadded = carry + interval;
                    var carryaddedb = carryadded.toString();
                    carryaddedb = carryaddedb.split("");
                    carryaddedb[1] = carryaddedb[1]*1;
                    carryaddedb[0] = carryaddedb[0]*1;
                    stepb = step-1; //referring to where carry came from
                    if (carryadded > 9 && carryadded < 100){
                        explain += ("\n" + "\n" + "Step " + step + ": Add " + elevenb[i+1] + " and " + elevenb[i] +  " and your carry from step " + stepb + " (" + carry + ")" + " to get " + carryadded + ". Write down the digit in the ones place (" + carryaddedb[1] + ") and mentally carry the tens place (" + carryaddedb[0] + ") ")
                        carry = carryaddedb[0];
                    }
                    else if (carryadded > -1 && carryadded < 9){
                        explain += ("\n" + "\n" + "Step " + step + ": Add " + elevenb[i+1] + " and " + elevenb[i] +  " and your carry from step " + stepb + " (" + carry + ")" + " to get " + carryadded + ". Write this number down.")
                        carry = 0;
                    }
                    else {
                        explain += ("\n" + "\n" + "Step " + step + ": Add " + elevenb[i+1] + " and " + elevenb[i] +  " and your carry from step " + stepb + " (" + carry + ")" + " to get " + carryadded + ". Write this number down.")
                        carry = 0;
                    }
                    explanation.innerHTML = explain;
                    carryaddedb = carryadded;
                    carryadded = 0;
                    interval = 0;
                }
                else if (interval > -1 && interval < 10){
                    explain += ("\n" + "\n" + "Step " + step + ": Add " + elevenb[i+1] + " and " + elevenb[i] + " to get " + interval + ". Write this number down.");
                    explanation.innerHTML = explain;
                }
                else if (interval > 9 && interval < 100){
                    var intervalb = interval.toString();
                    intervalb = intervalb.split(""); 
                    intervalb[1] = intervalb[1]*1; //setting the ones digit to an integer instead of string
                    carry = intervalb[0]*1  //the tens digit carried over to the next step
                    explain += ("\n" + "\n" + "Step " + step + ": Add " + elevenb[i+1] + " and " + elevenb[i] + " to get " + interval + ". Write down the digit in the ones place (" + intervalb[1] + ") and mentally carry the tens place (" + carry + ") ")
                    explanation.innerHTML = explain;
                }
                else {
                    alert("Error Code: #0" + interval + "1 \n" + "An error has occurred please send this Error Code to me \(Kelvin Nguyen\) at kelvin94@gmail.com so that I may look into the problem.")
                 }
            }
        }
}
else {
    alert("Error Code: #0" + order + "4 \n" + "An error has occurred please send this Error Code to me \(Kelvin Nguyen\) at kelvinnguyen94@gmail.com so that I may look into the problem.")
}

    }