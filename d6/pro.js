// const pro=new Promise((resolve,reject)=>
// {
//     let success=true;
//     if(success)
//     {
//         resolve("Promise resolved");
//     }
//     else{
//         reject("Promise rejected");
//     }
// });

// pro
// .then((message)=>console.log(message))
// .catch((error)=>console.log("error fetching data"+error));

function task(message,delay)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
            resolve();
    },delay);
});
}
task("first task completed",1000)
.then(() => task("second task completed",2000))
.then(() => task("third task completed",3000))
