// function (callback)
// function originalFunction(cb){
//     cb()
// }

// function callbackFunction(){
//     console.log('This is callback function')
// }

// originalFunction(callbackFunction)

// setTimeout(function(){
//     console.log('First after 1s')
// }, 1000)

// for(let i = 0; i < 10; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, 500)
// }

// let j = 0
// setInterval(() => {
//     console.log(j)
//     j++
// }, 500)

// document.getElementById('body').onresize = showWidthAndHeight

// function showWidthAndHeight(){
//     let width = window.outerWidth
//     let height = window.outerHeight
//     console.log('width: ', width)
//     console.log('height: ', height)
    
// }

// window.addEventListener('resize', function(){
//     let width = document.getElementById('width')
//     let height = document.getElementById('height')

//     width.innerText = window.innerWidth
//     height.innerText = window.innerHeight
// })

let books = [
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead' 
    },
    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson' 
    },
    { 
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games'
    }
]

function getObjectKey(obj) {
    let objResult = []
    for (keys in obj) {
        if (typeof obj[keys] == "object") {
            objResult.push(keys)
            objResult = objResult.concat(getObjectKey(obj[keys]))
        } else {
            objResult.push(keys);
        }
    }
    return objResult;
}
console.log(getObjectKey(books));