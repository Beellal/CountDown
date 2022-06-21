let countdown;

const timerDisplay = document.querySelector('.display-time-left');
const endTime = document.querySelector('.display-end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {

            // Effacer tous les minuteries existantes 
            //clear any existing timers

            clearInterval(countdown);
        
            const now = Date.now();
            const then = now + seconds * 1000;
            displayTimeLeft(seconds);
            displayEndTime(then);
        
            countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            // Verifions si nous devons l'arreter !
            // check if we should stop it!

            if(secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }
            // L'afficher  

            //Display it
            displayTimeLeft(secondsLeft);
            }, 1000);
  }

  function displayTimeLeft(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainderSeconds = seconds % 60;
            const display = `${minutes}min:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}secs`;
            document.title = display;
            timerDisplay.textContent = display;
  }
  

  
function displayEndTime(timestamp) {
            const end = new Date(timestamp);
            const hour = end.getHours();
            const adjustedHour = hour;
            const minutes = end.getMinutes();
            endTime.textContent = `Be Back At ${adjustedHour}h:${minutes < 10 ? '0' : ''}${minutes}min`;
}


function startTimer() {
            const seconds = parseInt(this.dataset.time);
            timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const mins = this.minutes.value;
            console.log(mins);
            timer(mins * 60);
            this.reset();
});
