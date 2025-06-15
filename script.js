let score = 0;

function increaseScore() {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const ball = document.querySelector(".ball");
    if (ball) {
        ball.style.backgroundColor = "red"; // แสดงว่า JS ทำงาน
    }
});
