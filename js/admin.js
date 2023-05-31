$(document).ready(function () {

    let users = [
        ['user1', 1, 'Ariana Grande'],
        ['user2', 2, 'Rita Ora'],
        ['user3', 3, 'Ava Max'],
        ['user4', 4, 'Dua Lipa'],
        ['user5', 5, 'Alan Walker'],
        ['user6', 6, 'Miley Cyrus']
    ]
    $('form').submit(function (ev) {
        // ev.preventDefault()
        $('.errors').text('')
        // ///////////age
    
        if ($('#age').val() <= 18) {
            $('.errors').append('<div class="olderThan18">you must be older than 18</div>')
        }
    
        // ///////////age
    
        // ///////////username
        let usernameExist = users.find(item => item[0] == $('#username').val())
        console.log(usernameExist)
        if (usernameExist != undefined) {
            $('.errors').append('<div class="userExists">this username already exists</div>')
    
        }
        if ($('#username').val().length < 5) {
            $('.errors').append('<div class="userLength">the username must contain at least 5 symbols</div>')
        }
    
        if ($('#lastname').val().length === 0 || $('#name').val().length === 0 || $('#confirmPassword').val().length === 0) {
            $('.errors').append('<div class="emptyField">the field cannot be empty</div>')
        }
    
        // ///////////username
    
        // ///////////password
        ($('#password').val().length < 6) ? $('.errors').append('<div>the password must contain at least 6 symbols</div>') : '';
        ($('#password').val() === $('#username').val()) ? $('.errors').append('<div>the password and username cannot be the same</div>') : '';
        ($('#password').val().search(/[A-Z]/g) < 0) ? $('.errors').append('<div>the password must contain an uppercase letter</div>') : '';
        ($('#password').val().search(/[0-9]/g) < 0) ? $('.errors').append('<div>the password must contain a number</div>') : '';
        ($('#password').val().search(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,@.\/]/g) < 0) ? $('.errors').append('<div>the password must contain a special symbol</div>') : '';
        ($('#confirmPassword').val() != $('#password').val() && $('#confirmPassword').val().length > 0) ? $('.errors').append('<div>the passwords don\'t match</div>') : '';
    
        if ($('.errors').text() == '') {
            $('.errors').append("<div class='confirmed'>password is confirmed</div>")
            $('.errors').append('<a href="log-in.html" class="signedUp">enter your account</a>')
            return true
        }
        else {
            return false
        }
        
    })

 })