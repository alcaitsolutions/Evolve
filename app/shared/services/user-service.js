function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

exports.register = function (user) {
    return new Promise((resolve, reject) => {
        resolve();
    });
};

exports.login = function (user) {
    return new Promise((resolve, reject) => {

        fetch('https://jsonplaceholder.typicode.com/users?id=' + user.email)
            .then(response => response.json())
            .then(data => {
                // We need to check data. In this example we
                // are checking data[0].id
                if (data === undefined || data.length == 0) {
                    // array empty or does not exist
                    reject();
                } else {
                    console.log(`Data returned from promise Resolve is: ${data[0].username}`);
                    // return the first result of the array
                    resolve(data[0]);
                }
                
            })
            .catch( (error)  => {
                console.error(error); 
                reject();
            })

    })
}
