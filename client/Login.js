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

Template.Login.events({
    'click #LoginButton' : function (event, template) {
        var credentials = {
            username: $('input[name="username"]').val(),
            password: $('input[name="password"]').val()
        };
        Session.set('user', credentials);
        return false;
    }
});