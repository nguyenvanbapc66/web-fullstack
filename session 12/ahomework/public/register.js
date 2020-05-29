$(document).ready(function() {
    let btnLogin = document.getElementById('btn-login')
    btnLogin.onclick = function() {
        $.ajax({
            url: '/',
            method: 'get',
            success: function(result) {
                console.log(result)
                window.location.href = '/'
            }
        })
    }

    let form = document.getElementById('form-register')
    form.onsubmit = function(e) {
        e.preventDefault()

        let user = {
            username: form.username.value,
            fullname: form.fullname.value,
            password: form.password.value,
            age: form.age.value,
            role: form.role.value
        }

        $.ajax({
            url: '/api/users',
            method: 'post',
            data: {
                username: form.username.value,
                fullname: form.fullname.value,
                password: form.password.value,
                age: form.age.value,
                role: form.role.value
            },
            success: function(result) {
                alert('Bạn đã đăng ký thành công')
                window.location.href = '/'
            }
        })
    }
})