document.addEventListener("DOMContentLoaded", () => {
    const sparks = document.querySelectorAll('.spark');

    // Randomly position and animate the sparks
    sparks.forEach(spark => {
        spark.style.top = `${Math.random() * window.innerHeight}px`;
        spark.style.left = `${Math.random() * window.innerWidth}px`;
        spark.style.animationDuration = `${1 + Math.random()}s`;
    });
});
