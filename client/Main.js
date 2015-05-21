Template.Main.onRendered(function () {
    $('.menu .item').tab();
    console.log('main rendered');
});

Template.UserLogin.helpers({
    loggedIn : function () {
        return Session.get('user');
    }
});

