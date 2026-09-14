var timeOut;
var isRunning = false;
var d = 0;
var m = 0;
var h = 0;
var s = 0;

const day = () => {
    d++
    showTime()
}

const hour = () => {
    h++
    showTime()
}

const minute = () => {
    m++
    showTime()

}

const second = () => {
    s++
    showTime()
}

const start = () => {
     if (isRunning) {
        return
    }

    isRunning = true

    if (s > 0) {
        s--
    }
    else if (m > 0) {
        m--
        s = 59
    }
    else if (h > 0) {
        h--
        m = 59
        s = 59
    }
    else if (d > 0) {
        d--
        h = 23
        m = 59
        s = 59
    }
    else {
        isRunning = false
        return
    }

    showTime()
   timeOut = setTimeout(() => {
        isRunning = false
        start()
    }, 1000)
}


const restart = () => {

    clearTimeout(timeOut)
    isRunning = false

    d = 0
    h = 0
    m = 0
    s = 0

    showTime()

}

const showTime = () => {

    // Sabke pahle 00 lagane ke liye
    let ss = s < 10 ? "0" + s : s;
    let mm = m < 10 ? "0" + m : m;
    let hh = h < 10 ? "0" + h : h;
    let dd = d < 10 ? "0" + d : d;

    document.getElementById("begin").innerText = dd + ":" + hh + ":" + mm + ":" + ss;
}
