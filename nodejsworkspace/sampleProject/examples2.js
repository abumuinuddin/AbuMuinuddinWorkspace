
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
var promises = [
        timedPromise(1000, 'hi'),
        timedPromise(1000, 'yo'),
        timedPromise(1000, 'bye')
];

//Promise.all(promises);
