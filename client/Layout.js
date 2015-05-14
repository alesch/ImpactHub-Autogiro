Template.Layout.events({
    'click div.menu' : function (event) {
        $('div.menu > a.active.item').removeClass('active');
        $(event.target).addClass('active');
    }
});

Template.Layout.helpers({
});

Template.Layout.onCreated(function () {
    console.log('onCreated');
});

