let slideIndex = 0;
let timer;
function startSlideshow() 
{
  const container = document.getElementById("slideshow-container");
  if (container.style.display === "block")
  {} 
    else 
      {
        container.style.display = "block";
        timer = setInterval(function () 
        {
          showSlides((slideIndex += 1));
        }, 3000);
        showSlides(slideIndex);
      }
    }

function stopSlideshow() 
{
  clearInterval(timer);
  document.getElementById("slideshow-container").style.display = "none";
}

function showSlides(n) 
{
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length - 1)
  {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

document.getElementById("monitorizare").addEventListener("dblclick", function ()
{
  startSlideshow();
});
