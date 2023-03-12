
let count = 0;

let watchShow = document.getElementById('watch')

function intervalFunc() {
    let intervalId = setInterval(() => { 
        count++ 
    }, 1000)
    return intervalId;
}

// document.getElementById('start').addEventListener('click', () => {
//     // setInterval(() => {
//     //     count++;
//     //     watchShow.innerHTML = count;
//     // }, 1000);
//     watchShow.innerHTML = intervalFunc()
// })

document.getElementById('stop').addEventListener('click', () => {
    console.log('hello')
    count = count;
})

let startCount = ()=>{
    setInterval(() => {
        count++;
        watchShow.innerHTML = count;
    }, 1000);
}