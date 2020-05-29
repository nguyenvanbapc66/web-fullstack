$(document).ready(function() {
    let btnRegister = document.getElementById('btn-register')
    btnRegister.onclick = function() {
        $.ajax({
            url: '/register',
            method: 'get',
            success: function(result) {
                window.location.href = '/register'
            }
        })
    }

    let form = document.getElementById('form-login')
    form.onsubmit = function(e) {
        e.preventDefault()

        $.ajax({
            url: '/api/login',
            method: 'post',
            data: {
                username: form.username.value,
                password: form.password.value
            },
            success: function(result) {
                console.log(result)
                alert(`${result.message}`)

                user = result

                let fanpageId = result.data._id
                window.location.href = `/fanpage/${fanpageId}`
            }
        })
    }
})