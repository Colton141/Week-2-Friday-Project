$(document).ready(function(){
  $("button#enter").click(function(event){
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();

    if (question1 ==="1"){
      $(".result1").show();
    }




    if (question1 ==="0"){
      alert("Please fill out all questions");
    }
    if (question2 ==="0"){
      alert("Please fill out all questions")
    }
    if (question3 ==="0"){
      alert("Please fill out all questions")
    }
    if (question4 ==="0"){
      alert("Please fill out all questions")
    }
    if (question5 ==="0"){
      alert("Please fill out all questions")
    }

    event.preventDefault();
  })
})
