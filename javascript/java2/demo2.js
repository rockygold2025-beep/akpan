const horizontal = document.getElementById("horizontal");
const vertical = document.getElementById("vertical");
const win = document.getElementById("win");
const lose = document.getElementById("lose");

let hBalls = [];
let vBalls = [];
console.log(hBalls)
function init() {
    hBalls = [
        ...Array(3).fill("red"),
        ...Array(3).fill("blue"),
        ...Array(3).fill("green")
    ];
    

    vBalls = [
        ...Array(6).fill("red"),
        ...Array(6).fill("blue"),
        ...Array(6).fill("green")
    ];

    draw();
}

function draw() {
    horizontal.innerHTML = "";
    vertical.innerHTML = "";

    hBalls.forEach(c => {
        const b = document.createElement("div");
        b.className = `ball ${c}`;
        horizontal.appendChild(b);
    });

    vBalls.forEach(c => {
        const b = document.createElement("div");
        b.className = `ball ${c}`;
        vertical.appendChild(b);
    });
}

document.getElementById("add").onclick = () => {
    if (vBalls.length === 0 || hBalls.length >= 9) return;

    hBalls.push(vBalls.shift());
    draw();
    checkResult();
};

document.getElementById("removeLeft").onclick = () => {
    if (hBalls.length === 0) return;

    vBalls.unshift(hBalls.shift());
    draw();
};

document.getElementById("removeRight").onclick = () => {
    if (hBalls.length === 0) return;

    vBalls.unshift(hBalls.pop());
    draw();
};

document.getElementById("shuffle").onclick = () => {
    vBalls.sort(() => Math.random() - 0.5);
    draw();
};

document.getElementById("reset").onclick = restart;

function checkResult() {
    if (hBalls.length !== 9) return;

    const same = hBalls.every(c => c === hBalls[0]);
    same ? win.style.display = "flex" : lose.style.display = "flex";
}

function restart() {
    win.style.display = "none";
    lose.style.display = "none";
    init();
}

init();
