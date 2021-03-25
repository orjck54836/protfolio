window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas5");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const mouse = {
      x2: null,
      y2: null,
      radius: 100,
    };
  
    window.addEventListener("mousemove", (event) => {
      mouse.x2 = event.clientX;
      mouse.y2 = event.clientY;
    });
  
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    let particleArray = [];
    const numOfParticles = 500;
  
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 10;
        this.ranY = Math.random() * 0.5 + 1;
        this.alpha = Math.random() * 0.5;
      }
      draw() {
        ctx.beginPath();
        ctx.fillStyle = `rgb(175,195,204, ${this.alpha})`;

        ctx.arc(this.x, this.y, 2, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
          this.y += this.ranY + Math.random() * 1;
          if (this.y > canvas.height) {
            this.y = 0;
          }
          
      }
    }
  
    function init() {
      for (let i = 0; i < numOfParticles; i++) {
        particleArray.push(new Particle());
      }
    }
  
    function animate() {
      //ctx.globalAlpha = 0.05;
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
      }
      requestAnimationFrame(animate);
    }
    init();
    animate();
  });
  