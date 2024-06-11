document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    const player = document.getElementById("player");

    let rotation = 0;
    let rotationSpeed = 2;

    let positionX = 0;
    let positionY = -28;
    let playerSpeed = .1;

    let rotateLeft = false;
    let rotateRight = false;
    let moveForward = false;


    // Decide booleans(true,false) when keys are pressed or released
    document.addEventListener("keydown", function(event) {
        if (event.key === "a" || event.key === "ArrowLeft") {
            rotateLeft = true;
        }
        if (event.key === "d" || event.key === "ArrowRight") {
            rotateRight = true;
        }
        if (event.key === "w" || event.key === "ArrowUp") {
            moveForward = true;
        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.key === "a" || event.key === "ArrowLeft") {
            rotateLeft = false;
        }
        if (event.key === "d" || event.key === "ArrowRight") {
            rotateRight = false;
        }
        if (event.key === "w" || event.key === "ArrowUp") {
            moveForward = false;
        }
    });

    // Function to update rotation/movement continuously
    function updateRotation() {
        if (rotateLeft == true) {
            rotation -= rotationSpeed;
        }
        if (rotateRight == true) {
            rotation += rotationSpeed;
        }
        if (moveForward == true) {
            const moveX = playerSpeed * Math.cos(rotation * (Math.PI/180)); //Degrees turn into radiants
            const moveY = playerSpeed * Math.sin(rotation * (Math.PI/180)); //Degrees turn into radiants

            positionX += moveY;
            positionY -= moveX;
        }
        player.style.transform = `rotate(${rotation}deg)`; //rotate
        player.style.left = `${positionX}em`; // Update left position
        player.style.top = `${positionY}em`; // Update top position

        requestAnimationFrame(updateRotation); // Continue updating
    }

    // Start updating rotation
    updateRotation();
});