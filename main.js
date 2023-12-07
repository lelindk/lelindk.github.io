let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #08d8ff;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a273fe ;">Realizo Soporte TI visionado desde la Cultura Libre, aplicando saberes para la sostenibilidad.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
