const {add} = require("../src/string_calculator_src.js");
describe('add', function () {

  it('should return 0 for empty input', function () {
    expect(add("")).toEqual(0);
  });

  it('should return a number for single number input', function () {
    expect(add("1")).toEqual(1);
  });

  it('should add multiple numbers',function () {
    expect(add("1,1")).toEqual(2);
  });

  it('should add multiple numbers',function () {
    expect(add("1,2,3,4")).toEqual(10);
  });

  it('should treat new line character as delimiter',function () {
    expect(add("1\n2,3")).toEqual(6);
  });

  it('should add two numbers separated by delimiter',function () {
    expect(add("1,2")).toEqual(3);
  });

  it('should check if string has negative values',function () {
    expect(function(){
       add("-1,-2,3,4")})
       .toThrow ('ERROR: negatives not allowed -1,-2');
  });

  it('should ignore numbers more than 1000',function () {
    expect(add("1,1001,3")).toEqual(4);
  });

  it('should support multiple length delimiter',function () {
    expect(add("//[:D][%]\n1:D2%3")).toEqual(6);
  });

  it('should support multiple delimiters',function () {
    expect(add("//[***][%%%]\n1***2%%%3")).toEqual(6);
  });

  it('should support number as a delimiter',function () {
    expect(add("//[(-_-')][%]\n1(-_-')2%3")).toEqual(6);
  });

  it('Should support different delimeters',function(){
    expect(add("//[abc][777][:(]\n1abc27773:(1")).toEqual(7);
  });

  it('should check if inputs valid',function(){
    expect(function(){
     add("//;\n1000;1;2;")}).toThrow("ERROR: invalid input")
  });

  it('should check if inputs valid',function(){
    expect(function(){
     add("  //;\n1000;1;2")}).toThrow("ERROR: invalid input")
   });

  it('should check if inputs valid',function(){
   expect(function(){
    add("1,2,3//;\n1000;1;2")}).toThrow("ERROR: invalid input")
  });
  
});  


    




   
