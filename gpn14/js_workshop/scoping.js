// what is the output?

var a = 10;
function test() {
    console.log(a);
    return;
    var a = 5;
}
test();
