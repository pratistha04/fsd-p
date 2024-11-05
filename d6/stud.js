const stud=[
    {
    name:"jay",
    score:20,
},
{
    name:"ram",
    score:70,
},
{
    name:"shyam",
    score:90,
},
{
    name:"krishna",
    score:50,
}
];
let sum=stud;
let newar=sum.filter((stud)=>stud.score>60).map(((stud)=> stud.score*2)).reduce((x,y) => x+y,0);
console.log(newar);
