var elemCloud = document.getElementById('cloud-div');

var cloudanimate = elemCloud.animate(
  [{ transform: 'translate(1200px,0)' }, { transform: 'translate(-1400px,0)' }],
  {
    duration: 5000,
    iterations: Infinity,
    playbackRate: -4 ,
  }
);
var plane=document.getElementById("plane-div")
var plananimattion =plane.animate([
  {transform:"translate(0,-400px)"},
  {transform:"translate(600px,-200px)"}, 
  {transform:"translate(800px,0)"},
  {transform:"translate(1000px,200px )"},
  {transform:"translate(1200px,400px )"},
  {transform:"translate(100%,400px )"},
  
],{
  duration:10000 ,
  
});
var elembird = document.getElementById('bird-image');

var cloudanimate = elembird.animate(
  [{ transform: 'translate(0,0)' }, 
  
  {transform:"translate(20%,-200px)"}, 
  {transform:"translate(40%,0)"},
  {transform:"translate(60%,200px )"},
  {transform:"translate(80%,0 )"},
  { transform: 'translate(100%,0)' }],
  {
    duration: 7000,
    iterations: Infinity,
    playbackRate: -4 ,
  }
);