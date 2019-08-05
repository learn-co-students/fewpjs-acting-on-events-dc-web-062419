var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4"

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", " ");
    var left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    var rightNumbers = dodger.style.left.replace("px", " ");
    var right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`
    }
}
function moveDodgerUp() {
    var upNumbers = dodger.style.bottom.replace("px", " ");
    var up = parseInt(upNumbers, 10);

    if (up < 380) {
        dodger.style.bottom = `${up + 1}px`
    }
}

function moveDodgerDown() {
    var downNumbers = dodger.style.bottom.replace("px", " ");
    var down = parseInt(downNumbers, 10);

    if (down > 0) {
        dodger.style.bottom = `${down - 1}px`
    }
}



document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } 
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
    if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
    console.log(e.key);
  });