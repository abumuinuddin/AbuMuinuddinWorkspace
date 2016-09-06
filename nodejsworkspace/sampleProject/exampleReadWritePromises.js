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


function fileReadPromise(path){
    return new Promise ((resolve, reject) => {
        fs.readFile(path, (err, data) =>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

}

//Reading it from source to destination
//fs.createReadStream('testRead.txt').pipe(fs.createWriteStream('testWrite.txt'));

var fp = fileReadPromise('testRead.txt').then(
    (val) => {
        console.log(val.toString());
        return val;
    }
).catch (
    (err) => {
        console.log(err);
    }
);

fp.then(
    (val) => {
        fs.writeFile("testWrite.txt", val, function(err) {
            (err) => {
                return console.log(err);
            }

            console.log("The file was saved!");
        }); 
    },
    (err) => {
        console.log(err);
    }
);

