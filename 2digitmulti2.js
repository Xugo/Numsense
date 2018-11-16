//2-Digit Reverse Foil Multiplication Problem Generator v2.3

    var a = 1;
    var b = 1;
    var c = 1;
    var d = 1;
    var firstNum = "Generate";
    var secNum = "Problem";
    var answer = "z";
    var hscore = 0;
    
    function Question(){
      Randomize();
      Generate();
      question = document.getElementById("question");
      question.innerHTML = "What is " + firstNum + " x " + secNum + "?";
      divOutput = document.getElementById("divOutput");
      divOutput.innerHTML = "";
    }

    function Randomize(){
      a = Math.ceil(Math.random() * 9);
      b = Math.ceil(Math.random() * 9);
      c = Math.ceil(Math.random() * 9);
      d = Math.ceil(Math.random() * 9);
    }
    
    function Generate(){
      a = a.toString();
      b = b.toString();
      c = c.toString();
      d = d.toString();
      firstNum = a + b;
      firstNum = firstNum * 1;
      secNum = c + d;
      secNum = secNum * 1;
    }
    
    function Evaluate(){
      answer = document.getElementById("txtanswer");
      txthscore = document.getElementById("txthscore");
      answer = answer.value;
      var canswer = firstNum * secNum;
      if (canswer == answer){
        Question();
        hscore++;
        txtcanswer = document.getElementById("txtcanswer");
        txtcanswer.innerHTML = "";
          if (hscore == 1){
            txthscore.innerHTML = "One";
            document.getElementById("txtanswer").value = "";
          }
          else if (hscore == 250){
            txthscore.innerHTML = "You have answered " + hscore + " questions correctly in a row!" + "\n" + " ... you rock my socks ...";
            document.getElementById("txtanswer").value = "";
          }
          else if (hscore == 100){
            txthscore.innerHTML = "You have answered " + hscore + " questions correctly in a row!" + "\n" + "Go take a break!" + "\n" + "or at least refresh the page ...";
            document.getElementById("txtanswer").value = "";
          }
          else if (hscore == 50){
            txthscore.innerHTML = "You have answered " + hscore + " questions correctly in a row!" + "\n" + "Wow! 50 correct answers in a row!? You are AMAZING!";
            document.getElementById("txtanswer").value = "";
          }
          else if (hscore == 20){
            txthscore.innerHTML = "You have answered " + hscore + " questions correctly in a row!" + "\n" + "Excellent!";
            document.getElementById("txtanswer").value = "";
          }
          else if (hscore == 10){
            txthscore.innerHTML = "You have answered " + hscore + " questions correctly in a row!" + "\n" + "Good Job!";
            document.getElementById("txtanswer").value = "";
          }
          else if (hscore == 5){
            txthscore.innerHTML = "You have answered " + hscore + " questions correctly in a row!" + "\n" + "You better not be cheating ...";
            document.getElementById("txtanswer").value = "";
          }
          else {
            txthscore.innerHTML = "You have answered " + hscore + " questions correctly in a row!";
            document.getElementById("txtanswer").value = "";
          }
        }
        else if (canswer != answer){
          // for a blank submission
          if (answer == ""){
          }
          // for the cancel button
          else if (Boolean(answer) == false){
          }
          else {
            hscore = 0;
            txthscore.innerHTML = "";
            document.getElementById("txtanswer").value = "";
            txtcanswer = document.getElementById("txtcanswer");
            txtcanswer.innerHTML = firstNum + " x " + secNum + " is " + canswer;            
        }
        }
        else {
          alert("Something has gone wrong, please send the numbers that were being multiplied and your input to me so I can fix this.")
        }
    }
    
    function Explain(){
      hscore = 0;
      txthscore.innerHTML = "";
      divOutput = document.getElementById("divOutput");
      var canswer = firstNum * secNum;
      var f = d * b;
      var g = d * a;
      var h = c * b;
      var i = c * a;
      var j = g + h;
      var ftwo = f.toString();
      var stepOne = ftwo.split("");
      var stepOneb = stepOne[0]*1;
      var stepTwo = stepOneb + g;
      var stepThree = stepTwo + h;
      var stepThreeb = stepThree.toString();
      var stepFour = stepThreeb.split("");
      var stepFive = stepFour[0]*1;
      var k = i + stepFive;
      var z = j + stepOneb;
      
      
      if (f > 9) {
        if (j > 99 || z > 99){
          var jtwo = j.toString();
          var stepThree = j.toString();
          var stepNew = stepTwo + h;
          var stepNewb = stepNew.toString();
          var stepNewc = stepNewb.split("");
          var stepFour = stepThree.split("");
          var stepFive = stepFour[0]*1;
          var stepNewd = stepNewc[0]*1;
          var l = stepNewc[0].concat(stepNewc[1]);
          var l = l*1;
          var k = i + l;
          divOutput.innerHTML = "The Problem: " + firstNum + " x " + secNum + "\n" + "First Step: Multiply " + d + " and " + b + " together to get " + f + "\n" + "Write down the ones place (" + stepOne[1] + ") and mentally carry the tens place (" + stepOne[0] + ")" + "\n" + "\n" + "Second Step: Multiply " + d + " and " + a + " together to get " + g + "\n" + "Go ahead and add the " + stepOne[0] + " that you had to carry from step one and hold this new number (" + stepTwo + ") in your head" + "\n" + "\n" + "Third Step: Multiply " + c + " and " + b + " together to get " + h + "\n" + "Add " + h + " together with the previous number of " + stepTwo + " to get " + stepNew + "\n" + "\n" + "Fourth Step: Write down the ones place (" + stepNewc[2] + ") and mentally carry the tens and hundreds place (" + stepNewc[0] + stepNewc[1] + ")" + "\n" + "\n" + "Fifth Step: Multiply " + c + " and " + a + " together to get " + i + "\n" + "Add your carry from step four (" + stepNewc[0] + stepNewc[1] +") to " + i + " to get " + k + "\n" + "Then just write that down" + "\n" + "\n" + "Answer: " + canswer;
      }
        else if (j > 9 && j <= 99){
          var jtwo = j.toString();
          var stepThree = j.toString();
          var stepNew = stepTwo + h;
          var stepNewb = stepNew.toString();
          var stepNewc = stepNewb.split("");
          var stepFour = stepThree.split("");
          var stepFive = stepFour[0]*1;
          var stepNewd = stepNewc[0]*1;
          var k = i + stepNewd;
          divOutput.innerHTML = "The Problem: " + firstNum + " x " + secNum + "\n" + "First Step: Multiply " + d + " and " + b + " together to get " + f + "\n" + "Write down the ones place (" + stepOne[1] + ") and mentally carry the tens place (" + stepOne[0] + ")" + "\n" + "\n" + "Second Step: Multiply " + d + " and " + a + " together to get " + g + "\n" + "Go ahead and add the " + stepOne[0] + " that you had to carry from step one and hold this new number (" + stepTwo + ") in your head" + "\n" + "\n" + "Third Step: Multiply " + c + " and " + b + " together to get " + h + "\n" + "Add " + h + " together with the previous number of " + stepTwo + " to get " + stepNew + "\n" + "\n" + "Fourth Step: Write down the ones place (" + stepNewc[1] + ") and mentally carry the tens place (" + stepNewc[0] + ")" + "\n" + "\n" + "Fifth Step: Multiply " + c + " and " + a + " together to get " + i + "\n" + "Add your carry from step four (" + stepNewc[0] +") to " + i + " to get " + k + "\n" + "Then just write that down" + "\n" + "\n" + "Answer: " + canswer;
      }
        else if (j > 0 && j <= 9){
          var jtwo = j.toString();
          var stepThree = j.toString();
          var stepFour = stepThree.split("");
          var stepFive = stepFour[0]*1;
          var k = i + stepFive;
          divOutput.innerHTML = "The Problem: " + firstNum + " x " + secNum + "\n" + "First Step: Multiply " + d + " and " + b + " together to get " + f + "\n" + "Write down the ones place (" + stepOne[1] + ") and mentally carry the tens place (" + stepOne[0] + ")" + "\n" + "\n" + "Second Step: Multiply " + d + " and " + a + " together to get " + g + "\n" + "Hold this number (" + g + ") in your head" + "\n" + "\n" + "Third Step: Multiply " + c + " and " + b + " together to get " + h + "\n" + "Add " + h + " together with the previous number of " + g + " to get " + j + "\n" + "\n" + "Fourth Step: Write down that number (" + j + ")" + "\n" + "\n" + "Fifth Step: Multiply " + c + " and " + a + " together to get " + i + "\n" + "Then just write that down" + "\n" + "\n" + "Answer: " + canswer;
        }
        else {
          divOutput.innerHTML = "An error has occurred please send the numbers that were being multiplied to me \(Kelvin Nguyen\) at kelvin94@gmail.com so that I may look into the problem.";
        }
      }
      else if (j > 9){
        var jtwo = j.toString();
        var stepThree = j.toString();
        var stepFour = stepThree.split("");
        var stepFive = stepFour[0]*1;
        var k = i + stepFive;
        divOutput.innerHTML = "The Problem: " + firstNum + " x " + secNum + "\n" + "First Step: Multiply " + d + " and " + b + " together to get " + f + "\n" + "Write down this number" + "\n" + "\n" + "Second Step: Multiply " + d + " and " + a + " together to get " + g + "\n" + "Hold this number (" + g + ") in your head" + "\n" + "\n" + "Third Step: Multiply " + c + " and " + b + " together to get " + h + "\n" + "Add " + h + " together with the previous number of " + g + " to get " + j + "\n" + "\n" + "Fourth Step: Write down the ones place (" + stepFour[1] + ") and mentally carry the tens place (" + stepFour[0] + ")" + "\n" + "\n" + "Fifth Step: Multiply " + c + " and " + a + " together to get " + i + "\n" + "Add your carry from step four (" + stepFour[0] +") to " + i + " to get " + k + "\n" + "Then just write that down" + "\n" + "\n" + "Answer: " + canswer;
      }
      else if (j > 0 && j < 10){
        var jtwo = j.toString();
        var stepThree = j.toString();
        var stepFour = stepThree.split("");
        var stepFive = stepFour[0]*1;
        var k = i + stepFive;
        divOutput.innerHTML = "The Problem: " + firstNum + " x " + secNum + "\n" + "First Step: Multiply " + d + " and " + b + " together to get " + f + "\n" + "Write down this number" + "\n" + "\n" + "Second Step: Multiply " + d + " and " + a + " together to get " + g + "\n" + "Hold this number (" + g + ") in your head" + "\n" + "\n" + "Third Step: Multiply " + c + " and " + b + " together to get " + h + "\n" + "Add " + h + " together with the previous number of " + g + " to get " + j + "\n" + "\n" + "Fourth Step: Write down that number (" + j + ")" + "\n" + "\n" + "Fifth Step: Multiply " + c + " and " + a + " together to get " + i + "\n" + "Then just write that down" + "\n" + "\n" + "Answer: " + canswer;
      }
      else {
          divOutput.innerHTML = "An error has occurred please send the numbers that were being multiplied to me \(Kelvin Nguyen\) at kelvin94@gmail.com so that I may look into the problem.";
      }
    }