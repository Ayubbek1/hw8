// let future = "2023-06-23 18:10"

// let time = Date.parse(future) - new Date().getTime()
// let timer_day =Math.floor(time / (1000 *60*60*24)) 
// let timer_hour = Math.floor((time / (1000 *60*60)) % 24)
// let timer_min = Math.floor((time / (1000 *60)) % 60)
// let timer_sec = Math.floor((time / 1000) % 60)

// console.log(
//     timer_day,
//     timer_hour,
//     timer_min,
//     timer_sec
// )
// if( timer_day + timer_hour +timer_min +timer_sec <= 0  ){
//         alert("Будильник")
// }


let current_time = new Date().getTime()
let current_time_hour = new Date().getHours()
let current_time_min = Math.floor((current_time / (1000 *60)) % 60)
let current_time_sec = Math.floor((current_time / 1000) % 60)
вечер
console.log(
    current_time_hour,
    current_time_min,
    current_time_sec
)
if(current_time_hour >= 0 &&  current_time_hour < 6){
    alert("Добрая ночь")
}
if(current_time_hour >= 6 &&  current_time_hour < 12){
    alert("Доброе утро ")
}
if(current_time_hour >= 12 &&  current_time_hour < 18){
    alert("Добрый день ")
}
if(current_time_hour >= 18 &&  current_time_hour <+ 24){
    alert("Добрый вечер ")
}