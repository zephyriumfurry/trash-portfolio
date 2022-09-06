const logging = {
    info: function(text) {
        console.log('%c[INFO] ' + text, 'color: #6DCFF6');
    },
    warn: function(text) {
        console.log('%c[WARN] ' + text, 'color: #FFFF00;');
    },
    error: function(text) {
        console.log('%c[ERROR] ' + text, 'color: #FF0000;');
    }
};