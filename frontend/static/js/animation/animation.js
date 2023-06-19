const AnimationFunciton = () => {
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");

  const sunCenterX = sun.offsetLeft + sun.offsetWidth / 2;
  const sunCenterY = sun.offsetTop + sun.offsetHeight / 2;

  let degree = 0;
  const radius = 200;

  loop();

  function loop() {
    const rotation = (degree * Math.PI) / 180;
    const targetX = sunCenterX - 30 + radius * Math.cos(rotation);
    const targetY = sunCenterY - 30 + radius * Math.sin(rotation);

    moon.style.left = targetX + "px";
    moon.style.top = targetY + "px";

    degree++;

    requestAnimationFrame(loop);
  }
};

export default AnimationFunciton;
