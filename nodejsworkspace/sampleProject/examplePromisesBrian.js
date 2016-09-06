var fs = require('fs');

function timedPromise(ms, resolveVal) {
    return new Promise(function(resolve, reject) {
    
        // This is only an example to create asynchronism
        setTimeout(
            function() {
                // We fulfill the promise !
                resolve(resolveVal);
            }, 
            ms
        );
    });
}



var p = timedPromise(2000, 'hi');

var p2 = p.then(
    (val) => {
        console.log(val);
        return timedPromise(1000, 'next');
    },
    (err) => {
        //
    }
);


p2.then(
    (val) => {
        console.log(val);
    },
    (err) => {
        console.log(err);
    }
);

