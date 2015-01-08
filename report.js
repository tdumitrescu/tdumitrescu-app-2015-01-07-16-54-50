MPAPI.ready(function() {
    MPAPI.option('api_host', 'https://mixpanel.com');
    var eventSelect = new MPUI.EventSelect();
    eventSelect.render($('<div style="margin-bottom: 10px;">').appendTo('body'));
    eventSelect.on('change', function(eventName) {
        MPAPI.events(eventName).done(function(results) {
            (new MPUI.Line(results)).render($('<div>').appendTo('body'));
        });
    });
});
