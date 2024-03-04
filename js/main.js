let carousel = `<table id="carousel-table">
<tr>
    <td></td>
    <td>
        <div class="slideshow-container">
            <div class="mySlides fade">
              <img src="../images/dna-helix.jpg">
            </div>
            
            <div class="mySlides fade">
              <img src="../images/doctor-cartoon.jpg">
            </div>
            
            <div class="mySlides fade">
              <img src="../images/nurse.jpg">
            </div>
            <br>
            <div style="text-align:center">
              <span class="dot" onclick="currentSlide(1)"></span> 
              <span class="dot" onclick="currentSlide(2)"></span> 
              <span class="dot" onclick="currentSlide(3)"></span> 
            </div>                    
    </div>
    </td>
    <td></td>
</tr>
</table>`;

let navBar = `<br><ul class="navbar">
    <li><a href="../index.html">Home</a></li>
    <li><a href="Articles.html">Articles</a></li>
    <li><a href="Resources.html">Resources</a></li>
    <li><a href="Symptoms.html">Symptoms</a></li>
</ul><br>`;

let footer = `<br><hr><br>
<p>Sources</p>
<ul>
    <li>Early, M. |. F. U. P. (2024, February 22). NONO. https://www.mendelian.co/genes/nono</li>
    <li>NONO-associated X-linked ID syndrome. (2021). Unique. Retrieved February 24, 2024, from https://rarechromo.org/media/singlegeneinfo/Single%20Gene%20Disorder%20Guides/NONO-associated%20X-linked%20ID%20syndrome%20QFN.pdf</li>
</ul>`;

function showSlideShow(){
    const element = document.getElementById("slide-show");
    element.innerHTML = carousel;
}

function showNavBar(){
    const element = document.getElementById("navbar");
    element.innerHTML = navBar;
}

function showFooter(){
    const element = document.getElementById("footer-sources");
    element.innerHTML = footer;
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}


showSlideShow();
showNavBar();
showFooter();

let slideIndex = 0;
showSlides();

