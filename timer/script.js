// Timer fields
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
let interval


// Buttons
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const resetButton = document.querySelector('.reset')
const oneminButton = document.querySelector('.one')
const fiveminButton = document.querySelector('.five')
const tenminButton = document.querySelector('.ten')

//Inputs
const field = document.querySelector('.field');
const input_hours = document.getElementById('inhour')
const input_minutes = document.getElementById('inmin')
const input_seconds = document.getElementById('insec')
input_hours.value = 0;
input_minutes.value = 2;
input_seconds.value = 10;
secondElement.textContent=input_seconds.value
minuteElement.textContent=input_minutes.value
hourElement.textContent=input_hours.value
//Lesteners
startButton.addEventListener('click',() =>{
    clearInterval(interval)
    interval = setInterval(startTimer,1000)
})

pauseButton.addEventListener('click', ()=>{
    clearInterval(interval)
    document.getElementById('inhour').disabled = false;
    document.getElementById('inmin').disabled = false;
    document.getElementById('insec').disabled = false;
})

resetButton.addEventListener('click', () =>{
    clearInterval(interval)
    hourElement.textContent="0"
    minuteElement.textContent="0"
    secondElement.textContent="0"
    input_hours.value = 0;
    input_minutes.value = 0;
    input_seconds.value = 0;
    document.getElementById('inhour').disabled = false;
    document.getElementById('inmin').disabled = false;
    document.getElementById('insec').disabled = false;
    Music(audio.autoplay = false)
    field.style.backgroundColor ="white"
})

//Timer function
function startTimer() {
    document.getElementById('inhour').disabled = true;
    document.getElementById('inmin').disabled = true;
    document.getElementById('insec').disabled = true;
    
    if (input_seconds.value>0){
        secondElement.textContent--
        input_seconds.value--
    }

    // if(input_seconds.value=0 & input_minutes.value>0){
    //     input_seconds.value=59
    //     input_minutes.value--
    // }

    // if(input_minutes=0 & input_hours>0){
    //     input_minutes.value=59
    //     input_hours--
    // }
    // if((input_seconds.value=0) && (input_hours.value=0) && (input_minutes.value=0)){
    //     Music
    //     field.style.backgroundColor ="rgb(243, 139, 139);"
    // }
}

//Music
function Music() {
    var audio = new Audio(); 
    audio.src="iphone-11-pro.mp3"; 
    audio.autoplay = true; 
  }

//buttons
oneminButton.addEventListener('click', ()=>{
    input_hours.value = 0;
    input_minutes.value = 1;
    input_seconds.value = 0;
    secondElement.textContent=input_seconds.value
    minuteElement.textContent=input_minutes.value
    hourElement.textContent=input_hours.value
}
)
fiveminButton.addEventListener('click', ()=>{
    input_hours.value = 0;
    input_minutes.value = 5;
    input_seconds.value = 0;
    secondElement.textContent=input_seconds.value
    minuteElement.textContent=input_minutes.value
    hourElement.textContent=input_hours.value
}
)
tenminButton.addEventListener('click', ()=>{
    input_hours.value = 0;
    input_minutes.value = 10;
    input_seconds.value = 0;
    secondElement.textContent=input_seconds.value
    minuteElement.textContent=input_minutes.value
    hourElement.textContent=input_hours.value
}
)
