function print(name){
    console.log(name)
}
print("hello")

function fibanacci (number) {
    if (number == 1 || number == 2) {
        return 1;
    } else {
        return fibanacci (number - 1) + fibanacci (number - 2);
    }
}

print(fibanacci(15));
// this will print the hello before the fibanacci function finishes
async function getfib(val) {
    return fibanacci(val);
}
getfib(25).then(result => print(result));
getfib(15).then(result => print(result));
print(fibanacci(30));
getfib(30);

print("hello");

