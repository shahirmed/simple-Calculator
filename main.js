function insert(value){
  var answerView = document.getElementById("answer-view");
  if(answerView.value == "Error")
    answerView.value = value;
  else
    answerView.value+=value;
}

function back(){
  var answerView = document.getElementById("answer-view");
  if(answerView.value == "Error")
    clean();
  else
    answerView.value = answerView.value.substring(0,answerView.value.length-1);
}

function clean(){
  document.getElementById("answer-view").value = "";
}

function equal(){
  var answerView = document.getElementById("answer-view");
  try{
    var answer = eval(answerView.value);
  }catch{
    var answer = "Error";
  }
  answerView.value = answer;
}