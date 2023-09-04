const butInstall = document.getElementById('buttonInstall');



window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
   
    const deferredPrompt = event;

    butInstall.style.display = 'block'
    
    butInstall.addEventListener('click', () => {
     
      if (deferredPrompt) {
       
        deferredPrompt.prompt();
  
       
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          
       
          deferredPrompt = null;
        });
      }
    });
  });



window.addEventListener('appinstalled', (event) => {
    console.log('App was installed.');
});
