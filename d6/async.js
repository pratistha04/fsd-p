// hello=()=>
// {
//     console.log("heyloo");
// };
// console.log("start");
// setTimeout(hello,4000);
// console.log("end");

console.log("start");
setTimeout(() => ){
    console.log("first task completed");
    setTimeout(()=>){
        console.log("second task completed");
        setTimeout(()=>){
    console.log("third task completed");
    }, 2000);
}, 3000);
}, 4000);
 console.log("end");