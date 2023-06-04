// #1
// console.log(hello);                                   
// var hello = 'world';  //undefined 
//as interpreter 
// var hello;
// console.log(hello);
// hello='world';
//_______
//#2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);//magnet
// }
//_______
//#3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);//function not call
// }
// console.log(brendan);//super cool
//_______
//#4
// var food = 'chicken';
// console.log(food);//chicken
// eat();
// function eat(){
    
//     food = 'half-chicken';
//     console.log(food);//half-chicken'
//     var food = 'gone';   
// }
//_______
//#5


// mean();//no function name mean
// console.log(food);//undefined 
// var mean = function mean() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);//undefined 




//_______
//#6
// console.log(genre);//undefined
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);//rock
//     var genre = "r&b";
//     console.log(genre);//r&b
// }
// console.log(genre);//disco
//_______
//#7
// dojo = "san jose";
// console.log(dojo);//san jose
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);//seattle
//     var dojo = "burbank";
//     console.log(dojo);//burbank
// }
// console.log(dojo);//san jose
//_______
//#8
console.log(makeDojo("Chicago", 65));//{ name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0));//{ name: 'Berkeley', students: 0, hiring: 'closed for now' }
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}









   
