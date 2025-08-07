let intro  = document.querySelector(".intro");
let buttonPerson = document.getElementById("person")



buttonPerson.onclick = function idk() {
    intro.innerHTML =  `
   <h3>Front End Web Developer</h3>
      
      <h1>Helder Lagrisola</h1>

  <p>I’m a passionate Front-End Web Developer skilled in HTML, CSS, JavaScript, and modern frameworks like React. I create responsive, user-friendly websites with a focus on great design and smooth functionality. I enjoy turning ideas into interactive digital experiences and am always eager to learn new technologies.</p>
 
    <div class="social">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-github"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-download"></i>
      
    </div>
    
    
`
}