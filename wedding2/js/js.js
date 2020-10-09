let k = 2;
let l = parseInt(window.getComputedStyle(document.getElementById('primary')).width.replace('px',''));
let n = 200;
let parent = document.getElementById('primary');
let firstColor = {
  r : 129,
  g : 236,
  b : 236
}
let secondColor = {
  r : 255,
  g : 10,
  b : 44
}

async function loading(){
    let rotate = 0;
    commonDifference();
    
        let r = secondColor.r;
        let g = secondColor.g;
        let b = secondColor.b
    for(i = 0 ; i <= n ; i++){
        let x = Math.sqrt(Math.pow((l - k), 2) + Math.pow(k, 2));
        let alpha = radToDeg(Math.acos((l-k) / x));
        rotate += alpha;
        let newDiv = document.createElement("div");
        newDiv.style.width = x + 'px';
        newDiv.style.height = x + 'px';
        newDiv.style.transform = "rotate(" + alpha + "deg) perspective(50000px) translateZ(0.2px)";
        
            newDiv.style.backgroundColor = "rgb(" + firstColor.r + ", " + firstColor.g + ", " + firstColor.b + ")";
            
            firstColor.r = Math.round(firstColor.r - secondColor.r);
            firstColor.g = Math.round(firstColor.g - secondColor.g);
            firstColor.b = Math.round(firstColor.b - secondColor.b);
        parent.innerText = "";
        parent.appendChild(newDiv);
        newDiv.innerText = i;
        parent = newDiv;
        l = x;
        await sleep(40);
    }
    show()
}

async function show(){
  t = document.getElementById("primary")
  while(true){
    t.style.transform = "rotateY(89deg)"
    await sleep(10000)
    t.style.transform = "rotateY(-89deg)"
    await sleep(10000)
  }
}

function radToDeg(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function commonDifference(){
  secondColor.r = (firstColor.r - secondColor.r)/n;
  secondColor.g = (firstColor.g - secondColor.g)/n;
  secondColor.b = (firstColor.b - secondColor.b)/n;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}