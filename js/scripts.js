$(document).ready(function(){
  $("button#enter").click(function(event){
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();

    if (question1 ==="1" && question2 === "3"){
      $(".result").show();
      $(".result2").show();
      $("#about").show();
    }
    if (question1 ==="1" && question2 ==="1"){
      $(".result").show();
      $(".result1").show();
      $("#about").show();
    }
    if (question1 ==="3" && question2 ==="1"){
      $(".result3").show();
      $(".result").show();
      $("#about").show();
    }
    if (question1 ==="3" && question2 ==="2"){
      $(".result3").show();
      $(".result").show();
      $("#about").show();
    }
    if (question1 ==="3" && question2 ==="3"){
      $(".result1").show();
      $(".result").show();
      $("#about").show();
    }
    if (question1 ==="2" && question2 ==="1"){
      $(".result2").show();
      $(".result").show();
      $("#about").show();
    }
    if (question1 ==="2" && question2 ==="2"){
      $(".result2").show();
      $(".result").show();
      $("#about").show();
    }
    if (question1 ==="2" && question2 ==="3"){
      $(".result1").show();
      $(".result").show();
      $("#about").show();
    }
    if (question1 ==="1" && question2 ==="2"){
      $(".result").show();
      $(".result2").show();
      $("#about").show();
    }



    event.preventDefault();
  });
});
