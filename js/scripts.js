$(document).ready(function(){
  $("button#enter").click(function(event){
    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();

      $(".track").hide();
      $(".track1").hide();
      $(".track2").hide();
      $(".track3").hide();
      $("#about-track").hide();
    if (question1 ==="1" && question2 === "3"){
      $(".track").show();
      $(".track2").show();
      $("#about-track").show();
    }
    if (question1 ==="1" && question2 ==="1"){
      $(".track").show();
      $(".track1").show();
      $("#about-track").show();
    }
    if (question1 ==="3" && question2 ==="1"){
      $(".track3").show();
      $(".track").show();
      $("#about-track").show();
    }
    if (question1 ==="3" && question2 ==="2"){
      $(".track3").show();
      $(".track").show();
      $("#about-track").show();
    }
    if (question1 ==="3" && question2 ==="3"){
      $(".track1").show();
      $(".track").show();
      $("#about-track").show();
    }
    if (question1 ==="2" && question2 ==="1"){
      $(".track2").show();
      $(".track").show();
      $("#about-track").show();
    }
    if (question1 ==="2" && question2 ==="2"){
      $(".track2").show();
      $(".track").show();
      $("#about-track").show();
    }
    if (question1 ==="2" && question2 ==="3"){
      $(".track1").show();
      $(".track").show();
      $("#about-track").show();
    }
    if (question1 ==="1" && question2 ==="2"){
      $(".track").show();
      $(".track2").show();
      $("#about-track").show();
    }



    event.preventDefault();
  });
});
