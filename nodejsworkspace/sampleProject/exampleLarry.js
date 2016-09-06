fs.readFile('sample.txt',(err,data) => {
    if (err) throw err;
    console.log(data.toString());    

    fs.writeFile('sample2.txt', data.toString(), (err) => {
        if (err) {
            throw err;
        }
        console.log('it is saved.');
    });    
});