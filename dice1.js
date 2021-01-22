// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
   
  if (diceNumber !== 1) {
    // dice number 1s ylgaatai buuh uyd
    roundScore = roundScore + diceNumber
    document.getElementById("current-" + activePlayer).textContent = roundScore;

  }
  // 1 buuh uyd 
  else{
    switchSide();
    roundScore = 0;
  }
});
// hold tovchiig ajiluulah
// hold tovchiig darhad current dr bgaa onoog deesh nemeh
document.querySelector(".btn-hold").addEventListener("click", function(){
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
  if(scores[activePlayer] > 20){
    document.getElementById("name-" + activePlayer).textContent = "Winner";
    
  }
  // roundScore 0 boloh
  roundScore = 0; 
  diceDom.style.display = "none";
  switchSide();
  
})
function switchSide(){
  document.getElementById("current-" + activePlayer).textContent = 0;
    if(activePlayer ===0){
      activePlayer = 1;
    }
    else{
      activePlayer = 0;
    }
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

}

