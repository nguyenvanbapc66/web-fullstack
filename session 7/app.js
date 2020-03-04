$(document).ready(function(){
    let letters = "0123456789ABCDEF"
    let colors = "#"
    for (let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)]
    }
    console.log(colors)
    $('#mydiv').css({
        background: colors,
        width: '100%',
        height: '100vh'
    })
})