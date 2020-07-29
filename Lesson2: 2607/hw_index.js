//find
var productInf = [
    { id: 01, size: 'm', color: 'black' },
    { id: 01, size: 'l', color: 'yellow' },
    { id: 03, size: 's', color: 'black' }
]
var id = productInf.find(item => item.color === 'black');
console.log(id);

//sort
var height = [165, 168, 149, 170, 155, 148];
var sort = height.sort(function (a, b) { return a - b });
console.log(sort);

//sum
var number = [1,2,3,4,5,6,7,8,9,10,11]
var sum = number.reduce( (a, b) => a + b, 0);
console.log(sum);

//filter
var students = [
    { name: "Nam", age: 18 },
    { name: "Thuy", age: 18 },
    { name: "Sang", age: 16 },
];
var filter = students.filter(student => student.name === 'Nam');
console.log(filter);

//paging 
function paging(array, number){
    var results = [];
    while (array.length) {
        results.push(array.splice(0, number)); 
    }
    return results;
}
var result = paging([11,15,20,356,81,12],11);
console.log(result);

