const countdown = () => {
    const countDate = new Date("February 11, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = ('0' + textDay).slice(-2);
    document.querySelector(".hour").innerText =('0' + textHour).slice(-2); 
    document.querySelector(".minute").innerText =('0' + textMinute).slice(-2); 
    document.querySelector(".second").innerText = ('0' + textSecond).slice(-2);
};

setInterval(countdown, 1000);




