let root = document.getElementById("root");
let clicked = false;
let colorOne = {
    r : 255,
    g : 255,
    b : 255
}
let colorTwo = {
    r : 0,
    g : 0,
    b : 0
}

let ns = 50;

function averageColor(){
    colorTwo.r = (colorTwo.r + colorOne.r)/ns;
    colorTwo.g = (colorTwo.g + colorOne.g)/ns;
    colorTwo.b = (colorTwo.b + colorOne.b)/ns;
}
averageColor()

let k = 10;

function nSquare(l){
    a = document.createElement("div");
    return a;
}

function stylize(el, l, alpha){
    el.style.width = l;
    el.style.height = l;
    el.style.transform = `rotate(${alpha}rad)`;
    el.style.backgroundColor = `rgb(${colorOne.r}, ${colorOne.g}, ${colorOne.b})`;
    colorOne.r -= colorTwo.r;
    colorOne.g -= colorTwo.g;
    colorOne.b -= colorTwo.b;
    el.classList.add("sub");
    
}

async function wedding(){
    if(clicked){
        return
    } else {
        clicked = true;
        root.innerHTML = "";
    }
    let l = window.getComputedStyle(root).height.replace("px", "");
    console.log(l);
    let alpha = 0;
    let par = root;
    for(i = 0; i <= ns; i++){
        await wait(20);
        alpha += Math.acos((l - k)/(Math.pow(l-k, 2) + Math.pow(k, 2)))
        l = Math.sqrt(Math.pow(l-k, 2) + Math.pow(k, 2));
        console.log(par);
        par = par.appendChild(nSquare(l));
        stylize(par, l + "px", alpha);
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}