const btnAdd = document.querySelector('.add-button');
const btnClose = document.querySelector('.close');
const addTo = document.querySelector('.add-to')
addTo.style.display = "none";
let deferredPrompt;

window.addEventListener('beforeinstallprompt', function(event) {
  // Preventing earlier versions
  event.preventDefault();
  console.log("done");
  addTo.style.display = "flex";

  
  deferredPrompt = event;
});

// Add button click event
btnAdd.addEventListener('click', (e) => {

  addTo.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();

  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        // console.log('User accepted the A2HS prompt');
      } else {
        // console.log('User dismissed the A2HS prompt');
        addTo.style.display = 'flex';

      }
      deferredPrompt = null;
    });
});

//close button click event
btnClose.addEventListener('click',(e)=>
{
    addTo.style.display = 'none';
})
