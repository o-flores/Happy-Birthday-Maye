buttonLights = document.querySelector("#turn-on");
noLights = document.querySelector('#no-lights');
mainDiv = document.querySelector('#main');
photosBtn = document.querySelector('#photos');
photosSection = document.querySelector("#photos-section")

buttonLights.addEventListener('click', () => {
  noLights.classList.remove('dark');
  noLights.classList.add('fade-in')
  buttonLights.classList.add('no-show');
  mainDiv.classList.remove('no-show')
  mainDiv.classList.add('fade-in')
});

photosBtn.addEventListener('click', () => {
  mainDiv.classList.add('no-show');
  photosSection.classList.remove('no-show');
})