function updateClock() {
    const now = new Date();
    
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString(undefined, options);
    
  
    document.getElementById('time').innerHTML = 
        hours + ':' + minutes + ':' + '<span class="seconds">' + seconds + '</span>';
    document.getElementById('date').textContent = dateStr;
}


updateClock();
setInterval(updateClock, 1000);
