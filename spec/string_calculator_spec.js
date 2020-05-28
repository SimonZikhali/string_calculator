const {Add} = require("../src/string_calculator_src.js");
describe('Add', function () {

    it('should return 0 for empty input', function () {
      expect(Add("")).toEqual(0);
    });
    it('should return a number for single number input', function () {
     expect(Add("1")).toEqual(1);
    });
    
      it('should add two numbers separated by delimiter', function () {
        expect(Add("1,1")).toEqual(2);
      });
      it('should add many numbers separated by delimiter', function () {
        expect(Add("1,2,3,")).toEqual(6);
      });
    
      it('should treat new line character as delimiter', function () {
        expect(Add("1\n2,3")).toEqual(6);
      });
    
      it('should ignore numbers more than 1000', function () {
        expect(Add("1,1001,3")).toEqual(3);
      });
    
      it('should support multiple length delimiter', function () {
        expect(Add("//[**]\n1**2**3")).toEqual(6);
      });
    
      it('should support multiple delimiters', function () {
        expect(Add("//[*][?]\n1*2?3")).toEqual(6);
      });
    
      it('should support number as a delimiter', function () {
        expect(Add("//5\n15253")).toEqual(6);
      });
    });
 
