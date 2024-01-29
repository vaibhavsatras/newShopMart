
let day = document.getElementById('day');
let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let second = document.getElementById('second');

let counterInfo = ()=> {
    future_date = new Date('June 2023, 20')
    curr_date = new Date();

    date  = future_date  - curr_date;
    
    let d = Math.floor(date / 1000 / 60 / 60 / 24);
    let h = Math.floor(date / 1000 / 60 / 60) % 24;
    let m = Math.floor(date / 1000 / 60) % 60;
    let s = Math.floor(date / 1000) % 60;

    day.innerHTML = d;
    hour.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML = s;
    
}

counterInfo();

setInterval(counterInfo,1000);