FlowRouter.route('/settings', {
    action : function (params) {
        console.log('route=/settings');
        FlowLayout.render('Layout', { main: 'Settings'} );
    }
});

FlowRouter.route('/fileGeneration', {
    action : function (params) {
        console.log('route=/fileGeneration');
        FlowLayout.render('Layout', { main: 'FileGeneration'} );
    }
});

FlowRouter.route('/', {
    action : function (params) {
        console.log('route=/');
        FlowRouter.go('/fileGeneration');
    }
});

