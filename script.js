buttonLights = document.querySelector("#turn-on");
noLights = document.querySelector('#no-lights');
mainDiv = document.querySelector('#main');
photosBtn = document.querySelector('#photos');
photosSection = document.querySelector("#photos-section");
photosContainer = document.querySelector('#photos-container')
lightsText = document.querySelector('#turn-on-text');
seta = document.querySelector('#seta');
textsSection = document.querySelector('#texts-section');

buttonLights.addEventListener('click', () => {
  noLights.classList.remove('dark');
  noLights.classList.add('fade-in')
  buttonLights.classList.add('no-show');
  mainDiv.classList.remove('no-show');
  mainDiv.classList.add('fade-in');
  lightsText.classList.add('no-show');

});

photosBtn.addEventListener('click', () => {
  mainDiv.classList.add('no-show');
  photosSection.classList.remove('no-show');
  photosContainer.classList.add("photos");
  seta.classList.remove('no-show');
});

seta.addEventListener("click", () => {
  photosSection.classList.add('no-show');
  seta.classList.add('no-show');
  textsSection.classList.remove('no-show')
})