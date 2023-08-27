const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    const deferredPrompt = event;

    butInstall.style.display = 'block'
    butInstall.addEvetListener('click', ()=> {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
              }
              deferredPrompt = null;
            });
          });
        });


butInstall.addEventListener('click', async () => {
 // Check if the deferredPrompt is available
 if (deferredPrompt) {
    // Show a confirmation dialog to the user
    const choice = await deferredPrompt.prompt();

    // Handle the user's choice
    if (choice.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferredPrompt after prompt is shown
    deferredPrompt = null;
  }
});



window.addEventListener('appinstalled', (event) => {
    console.log('App was installed.');
});
