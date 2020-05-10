_ = {}

_.filter = function(arr, cb) {
    //declare array
    const storage = [];
    //loop through the array
    for (let i =0; i<arr.length; i++){
        if (cb(arr[i],i,arr) === true) {
            storage.push(arr[i]);
        }
    }
    return storage;
};

//repeat the same code with _.each function
_.filter = function(arr, cb) {
    //declare array
    const storage = [];
    //loop through the array
    _.each(arr,function(val,i,list){
        if (cb(arr[i],i,arr) === true) {
            storage.push(arr[i]);
        }
    });

    return storage;
};

