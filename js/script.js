const hour = document.querySelector('.h'),
      sec  = document.querySelector('.s'),
      min  = document.querySelector('.m'),
      hNum = document.querySelector('.hours'),
      mNum = document.querySelector('.minutes');

function clock() {
    let time    = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours   = time.getHours()   * 30
        
    sec.style.transform  = `rotate(${seconds}deg)`    
    min.style.transform  = `rotate(${minutes}deg)`    
    hour.style.transform = `rotate(${hours}deg)`   
    
    hNum.innerHTML = time.getHours()   < 10 ? '0' + time.getHours()   : time.getHours()
    mNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    
    setTimeout(() => clock())
    
    if (time.getSeconds() < 10) {
        document.body.style.background = 'black'
    }
    else if (time.getSeconds() < 20) {
        document.body.style.background = 'gray'
    }
    else if (time.getSeconds() < 30) {
        document.body.style.background = 'green'
    }
    else if (time.getSeconds() < 40) {
        document.body.style.background = 'purple'
    }
    else if (time.getSeconds() < 50) {
        document.body.style.background = 'yellow'
    }
    else{
        document.body.style.background = 'white'
    }
}
clock()

const links = document.querySelectorAll('.tabsItem'),
      tabs = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault()
        for(let x = 0; x < links.length; x++){
            links[x].classList.remove('active')   
            tabs[x].classList.remove('active')   
        }
        tab(this, tabs[i])
    })
}

function tab(link, tab) {
    link.classList.add('active')
    tab.classList.add('active')
}

const watchBtn  = document.querySelector('.stopwatch__btn'),
      secWatch  = document.querySelector('.stopwatch__seconds'),
      minWatch  = document.querySelector('.stopwatch__minutes'),
      hourWatch = document.querySelector('.stopwatch__hours'),
      watchInfo = document.querySelector('.tabsLink__span')
      
watchBtn.addEventListener('click', function() {
    if(watchBtn.innerHTML  === 'start') {
        watchBtn.innerHTML = 'stop'
        watchInfo.classList.add('active')
        let second = 0
        stopWatch(this, second)
    }
    else if(watchBtn.innerHTML  === 'stop'){
        watchBtn.innerHTML = 'clear'
        watchInfo.classList.remove('active')
        watchInfo.classList.add('active_clear')
    }
    else{
        watchBtn.innerHTML = 'start'
        watchInfo.classList.remove('active_clear')
        secWatch.innerHTML = minWatch.innerHTML = hourWatch.innerHTML = 0
    }
})

function stopWatch(btn, second) {
    if(btn.innerHTML === 'stop'){
        if(second === 59){
            second = 0
            secWatch.innerHTML = second
            if(minWatch.innerHTML == 59){
                minWatch.innerHTML = 0
                hourWatch.innerHTML++
            }
            else
            {
                minWatch.innerHTML++
            }
        }
        else{
            second++
            secWatch.innerHTML = second
        }
        setTimeout(() => stopWatch(btn, second), 10)
    }
}