$(document).ready(function() {
    discuss.onclick =  function() {
        discuss.className += ' active'
        introduction.className = 'nav-link link'
        members.className = 'nav-link link'

        introductionDetail.className += ' inactive'
        discussDetail.className = 'introduction nav-link'
        membersDeltail.className += ' inactive'
        formPosting.className = 'introduction nav-link'
    }

    introduction.onclick = function() {
        discuss.className = ' nav-link link'
        introduction.className += ' active'
        members.className = 'nav-link link'

        introductionDetail.className = 'introduction nav-link'
        discussDetail.className += ' inactive'
        membersDeltail.className += ' inactive'
        formPosting.className += ' inactive'
    }

    members.onclick = function() {
        discuss.className = ' nav-link link'
        introduction.className = 'nav-link link'
        members.className += ' active'

        introductionDetail.className += ' inactive'
        discussDetail.className += ' inactive'
        membersDeltail.className = 'introduction nav-link'
        formPosting.className += ' inactive'
    }

    $.ajax({
        url: '/api/users',
        method: 'get',
        success: function(result) {
            sumOfMembers.innerHTML = `(${result.data.length})`

            let listUsername = result.data

            for(let user of listUsername){
                console.log(user)
                allOfMember.innerHTML += `
                    - ${user.fullname}
                    <br>
                `
            }
        }
    })

    let form = document.getElementById('form-posting')
    form.onsubmit = function(e) {
        e.preventDefault()

        $.ajax({
            url: '/api/status-posting',
            method: 'post',
            data: {
                status: form.status.value
            },
            success: function(result) {
                console.log(result)
                discussDetail.innerHTML += `
                <div class="form-discuss">
                    <div class="status">${result.data.status}</div>
                </div>
                `
            }
        })
    }
})