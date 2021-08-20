const counter = document.getElementById('counter');
const lowerBtn = document.getElementById('lower');
const addBtn = document.getElementById('add');

lowerBtn.addEventListener('click', function(){
    counter.textContent--
    if (counter.textContent < 0){
        counter.style.color = "red"
    }if (counter.textContent > 0){
        counter.style.color = "green"
    }if(counter.textContent == 0){

        counter.style.color = "white"
    }
})

addBtn.addEventListener('click', function(){
    counter.textContent++
    if (counter.textContent < 0){
        counter.style.color = "red"
    }if (counter.textContent > 0){
        counter.style.color = "green"
    }if (counter.textContent == 0){
        counter.style.color = "white"
    }
})


