function updateTime() {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');
    const now = new Date();
    
    // Format the time to HH:MM:SS format
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    currentTimeUTC.textContent = `${hours}:${minutes}:${seconds}`;

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    currentDay.textContent = daysOfWeek[now.getUTCDay()];
}

setInterval(updateTime, 1000);  // Update time every second
updateTime();  // Initial call to set the time immediately
