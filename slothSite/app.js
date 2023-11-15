window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('audio')
  const btns = document.querySelectorAll('.btn-area div')

  
  

  btns.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
      const img = document.querySelector('img')

      sounds[index].currentTime = 0;
      sounds[index].play();

      img.setAttribute('src', './images/slothMascot2.svg')
      setTimeout(() => {
        img.setAttribute('src', './images/slothMascot.svg')
      }, 100)

    })
  })
})