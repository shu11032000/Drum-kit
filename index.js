var numberofdrumbutton=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrumbutton;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
var buttonInnerHTML =  this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keypress",function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key){
  case "w":
  var audio = new Audio("sounds/Drum-Sticks-Hit-A.mp3");
audio.play();
    break;
    case "a":
    var audio = new Audio("sounds/Drum-Sticks-Hit-B.mp3");
  audio.play();
      break;
      case "s":
      var audio = new Audio("sounds/Drum-Sticks-Hit-C.mp3");
    audio.play();
        break;
        case "d":
        var audio = new Audio("sounds/Drum-Sticks-Hit-D.mp3");
      audio.play();
          break;
          case "j":
          var audio = new Audio("sounds/Drum-Sticks-Hit-E.mp3");
        audio.play();
            break;
            case "k":
            var audio = new Audio("sounds/Drum-Sticks-Hit-F.mp3");
          audio.play();
              break;
              case "l":
              var audio = new Audio("sounds/Drum-Sticks-Hit-G.mp3");
            audio.play();
                break;

  default: console.log(key)

}
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
    activeButton .classlist.add("pressed");
  setTimeout(function(){
      activeButton .classlist.remove("pressed");



  },100);
}
