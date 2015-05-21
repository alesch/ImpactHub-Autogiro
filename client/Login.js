Template.Login.onRendered(function () {
    $('.ui.form')
        .form({
            username : {
                identifier : 'username',
                rules : [ { type : 'email', prompt : 'enter a valid email'  } ]
            },
            passwrod : {
                identifier : 'password',
                rules : [ { type : 'empty', prompt : 'enter your Nexudus password' }]
            }
        }, {
            inline  : true,
            on      : 'change'
        });
});
