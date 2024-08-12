// alert("Who are u")
let clrs = ["red", "blue", "green", "yellow"];
let clrptrn = [];
let usrptrn = [];
let level = 0;
let started = false;

$(document).keypress(function () {
  if (!started) {
    $("h1").text("Level" + level);
    nextSeq();
    started = true;
  }
});

function StartOver(){
      level=0;
      clrptrn=[];
      started=false;
      console.log("StartOver");
}
function checkAnswer(currlevel) {
    if(clrptrn[currlevel]==usrptrn[currlevel]){
      console.log("Success");
      if(usrptrn.length==clrptrn.length){
            setTimeout(function(){
                  nextSeq();
            },1000)
      }
    }
    else{
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){
            $("body").removeClass("game-over");
      },200);
      $("h1").text("Wrong Answer, Tap key to restart");
      StartOver();
    }

}

function nextSeq() {
      usrptrn=[];
  level++;
  $("h1").text("Level" + level);
  let n = Math.random() * 4;
  n = Math.floor(n);
  let rclr = clrs[n];
  clrptrn.push(rclr);
  $("#" + rclr)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound();
}
console.log(clrptrn);


$(".btn").click(function () {
  let ubtn = $(this).attr("id");
  usrptrn.push(ubtn);
  console.log(usrptrn);
  // var aud=new Audio("sounds/"+ubtn+".mp3");
  // aud.play();
  AnimatePress(ubtn);
  playSound(ubtn);
  checkAnswer(usrptrn.length-1);
});

function playSound(name) {
  var aud = new Audio("sounds/" + name + ".mp3");
  aud.play();
}

// $("button").addClass("pressed");
function AnimatePress(curclr) {
  $("#" + curclr).addClass("pressed");
  setTimeout(() => {
    $("#" + curclr).removeClass("pressed");
  }, 100);
}
