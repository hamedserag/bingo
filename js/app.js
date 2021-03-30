var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var elements = document.querySelectorAll(".input");
shuffle(nums);
console.log(elements);
for (var i = 0; i < nums.length; i++) {
  elements[i].innerHTML = nums[i];
}

function reshuffle(){
  shuffle(nums);
  for (var i = 0; i < nums.length; i++) {
    elements[i].innerHTML = nums[i];
  }
}
function changeColor(name){
  console.log(name);
  document.querySelector("."+name).style.backgroundColor = "#fff";
  document.querySelector("."+name).style.color = "#000";
}
