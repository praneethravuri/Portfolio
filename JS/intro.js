let introID = $("#intros");
let intro1 = "<p class='small-size'>Hello!</p><p>I'm <span class='turq-color'>Praneeth Ravuri</span></p>";
let intro2 = "<p class='small-size'>Master's in Computer Science Student</p><p><span class='turq-color'>George Mason University</span></p>";
let isIntro1 = false; // Updated initial value

function keepFading() {
  $("#introduction").fadeOut(3000, function () {
    if (isIntro1) {
      introID.html(intro2); // Use .html() method to set HTML content
      isIntro1 = false;
    } else {
      introID.html(intro1); // Use .html() method to set HTML content
      isIntro1 = true;
    }
    $("#introduction").fadeIn(2500, keepFading);
  });
}

keepFading();

/*
const linkedinLogo = document.getElementById('linkedin-logo');
const linkedinimg = document.getElementById('linkedin-img');
const hoverImageSrc = './Images/Logos/github-black.svg';
const defaultImageSrc = './Images/Logos/linkedin-black.svg';

linkedinLogo.addEventListener('mouseover', function() {
  linkedinimg.src = hoverImageSrc;
});

linkedinLogo.addEventListener('mouseout', function() {
  linkedinimg.src = defaultImageSrc;

});
*/