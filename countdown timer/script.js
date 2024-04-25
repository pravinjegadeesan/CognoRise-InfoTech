function startCountdown() {
    const targetDate = new Date(document.getElementById('datetime').value).getTime();
    
    if (isNaN(targetDate)) {
        alert('Please enter a valid date and time.');
        return;
    }

    const timer = setInterval(function() {
        const currentDate = new Date().getTime();
        const remainingTime = targetDate - currentDate;

        if (remainingTime <= 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Countdown Over';
        } else {
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = `Days: ${days} | Hours: ${hours} | Minutes: ${minutes} | Seconds: ${seconds}`;
        }
    }, 1000);
}
