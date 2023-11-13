const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title') 

//Song titles 
const songs = ['Comfibeats - Sunshine and Butterflies', 'Comfibeats - Last Cup of Coffee', 'Comfibeats - Foreverland']

//Keep track of songs 
let songIndex = 2 

//Initially load song info 
loadSong(songs[songIndex])

//Update song details 
function loadSong(song) {
    title.innerText = '♫ ' + song 
    audio.src = `audio/${song}.mp3`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex = songs.length - 1 
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++

    if(songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
    
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement 
    const progressPercent = (currentTime / duration) * 100 
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth 
    const clickX = e.offsetX 
    const duration = audio.duration 

    audio.currentTime = (clickX / width) * duration
}

//Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// Change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

//Clock 
function startTime() {
    const today = new Date(); 
    let h = today.getHours(); 
    let m = today.getMinutes();
    m = checkTime(m); 
    document.getElementById('time').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i; 
}

// Quote Generator

const quotes= [
    "A smile is happiness you'll find right under your nose!", 
    "Celebrate every tiny victory", 
    "Accept that some days you’re the pigeon , and some days you’re the statue",
    "Be a pineapple . Stand tall , wear a crown and be sweet on the inside!", 
    "Learning is never done without errors and defeat", 
    "You don’t have to be great to start , but you have to start to be great", 
    "Start where you are . Use what you have . Do what you can", 
    "i believe that you can do it!", 
    "I hope that you had a wonderful day!", 
    "life goes on , so keep going!",
    "you can do it!",
    "Success is forged in the fire of defeat",
    "Hard work matters",
    "Stay consistent!",
    "Don’t give in",
    "Go get it!",
    "Today’s studying plants the seeds for tomorrow’s success",
]

function loadQuote(){
    let quoteIndex = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quote').innerHTML = quotes[quoteIndex]
}


//Pomodoro Timer 
const pomBtn = document.getElementsByClassName("pom-btn");
const pomPlay = document.querySelector("#pom-play");


function closePomTimer() {
    console.log("bro work");
    document.getElementById("pom-timer").style.display = "none";
}

function on() {
    document.getElementById("pom-timer").style.display = "block";
    console.log("it works bro");
  }


 


const countdownM = document.getElementById("countdown");
const breakTxt = document.getElementById("break-btn");
var pauseflag = false;
var myTimer;
let time;

function countdownupdate() { 
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  //let countdownM = document.getElementById("countdown");
  if (!pauseflag) {
    if (seconds < 10) {seconds = "0" + seconds}; 
    countdownM.innerHTML = `${minutes}: ${seconds}`;
    
    if (minutes == 0 && seconds == 0) {
      clearInterval(myTimer);
      let audio = new Audio("audio/softding.wav");
      audio.play();

    } else {
      time--;
    }
  }
}

function playcountdown() {
  if (!pauseflag && myTimer == null) {
    myTimer = setInterval(countdownupdate, 1000);
  } else {
    pauseflag = false;
  }
}

function pausecountdown() {
  pauseflag = true;
}

function playStudy() {
    time = 25 * 60;
    document.getElementById('countdown').innerHTML = "25:00"
    document.getElementById('phrase').innerHTML = "Time for work!"
}
function playBreak() {
    time = 10 * 60
    document.getElementById('countdown').innerHTML = "10:00"
    document.getElementById('phrase').innerHTML = "Take a break! :)"
}

function closeForm() {
    document.querySelector('.form-box').style.display = 'none';
}

document.getElementById('profile-icon').addEventListener('click', () => {
    const formBox = document.querySelector('.form-box');
    formBox.style.display = formBox.style.display === 'none' ? 'block' : 'none';
});

function openTaskMenu() {
    document.querySelector('.task-menu').style.transform = 'translateX(0)';
}

function closeTaskMenu() {
    document.querySelector('.task-menu').style.transform = 'translateX(-100%)';
}

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const newTask = taskInput.value;

    if (newTask.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" id="task-${taskList.children.length + 1}">
            <label for="task-${taskList.children.length + 1}">${newTask}</label>
            <i class="fas fa-trash-alt" onclick="deleteTask(this)"></i>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function deleteTask(deleteIcon) {
    const taskItem = deleteIcon.parentElement;
    taskItem.remove();
}

function toggleTaskMenu() {
    const taskMenu = document.querySelector('.task-menu');
    const isOpen = taskMenu.style.transform === 'translateX(0)';

    if (isOpen) {
        closeTaskMenu();
    } else {
        openTaskMenu();
    }
}

function openTaskMenu() {
    document.querySelector('.task-menu').style.transform = 'translateX(0)';
}

function closeTaskMenu() {
    document.querySelector('.task-menu').style.transform = 'translateX(-100%)';
}

 // Calender inner contet
 const currentDate = new Date();

 const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

 const firstDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

 const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

 const months = [
     'January', 'February', 'March', 'April', 'May', 'June',
     'July', 'August', 'September', 'October', 'November', 'December'
 ];

 let calendarHTML = `<div class="month">${months[currentDate.getMonth()]} ${currentDate.getFullYear()}</div><table>`;

 calendarHTML += '<tr>';
 for (let day of daysOfWeek) {
     calendarHTML += `<th>${day}</th>`;
 }
 calendarHTML += '</tr>';

 let dayCounter = 1;
 for (let i = 0; i < 5; i++) { 
     calendarHTML += '<tr>';
     for (let j = 0; j < 7; j++) {
         if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
             calendarHTML += '<td></td>'; 
         } else {
             const isToday = dayCounter === currentDate.getDate() && currentDate.getMonth() === currentDate.getMonth();
             const circleStyle = isToday ? 'background-color: var(--secondry-color); color: var(--third-color);' : '';
             calendarHTML += `<td style="${circleStyle}">${dayCounter}</td>`;
             dayCounter++;
         }
     }
     calendarHTML += '</tr>';
 }

 calendarHTML += '</table>';

 document.getElementById('calendarContent').innerHTML = calendarHTML;