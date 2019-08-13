window.onload = setup;

var questionNum;
var question;
var output;

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});

function setup() {
  questionNum = 0;													// keep count of question, used for IF condition.
  question = '<h1>what is your name?</h1>';				  // first question

  output = document.getElementById('output');				// store id="output" in output variable
  output.innerHTML = question;
}


function bot() {
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>rant in the text box under!!</h1>';			    	// load next question
    setTimeout(timedQuestion, 1000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>WOW didnt that feel better</h1>';
    document.getElementById("input").value = "";
    question = '<h1>What kind advice would you like? relationship, friends, bullying, college, family, school?</h1>';
    setTimeout(timedQuestion, 1000);
    }

    if(questionNum == 2){
      if(document.getElementById("input").value == "Relationship" || document.getElementById("input").value == "relationship"){
        window.open("/Users/gwc/Desktop/Final%20Project/relationship.html");
      }
      if (document.getElementById("input").value == "Friends" || document.getElementById("input").value == "friends"){
        window.open("/Users/gwc/Desktop/Final%20Project/friends.html");
      }
      if (document.getElementById("input").value == "School" || document.getElementById("input").value == "school"){
        window.open("/Users/gwc/Desktop/Final%20Project/school.html");
      }
      if (document.getElementById("input").value == "Bullying" || document.getElementById("input").value == "bullying"){
        window.open("/Users/gwc/Desktop/Final%20Project/bullying.html");
      }
      if (document.getElementById("input").value == "College" || document.getElementById("input").value == "college"){
        window.open("/Users/gwc/Desktop/Final%20Project/college.html");
      }
      if (document.getElementById("input").value == "Family"|| document.getElementById("input").value == "family"){
        window.open("/Users/gwc/Desktop/Final%20Project/family.html");
      }
      else{
        window.open("/Users/gwc/Desktop/Final%20Project/coverpage.html");
      }

    }
}

function timedQuestion() {
    output.innerHTML = question;
}
