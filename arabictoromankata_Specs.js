describe("Test suite to arabic to roman conversion", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

   it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(1);
    expect(romanString).toBe("I");
  });

    it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(2);
    expect(romanString).toBe("II");
  });

    it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(9);
    expect(romanString).toBe("IX");
  });

    it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(11);
    expect(romanString).toBe("XI");
  });

    it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(20);
    expect(romanString).toBe("XX");
  });

    it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(89);
    expect(romanString).toBe("LXXXIX");
  });

     it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(90);
    expect(romanString).toBe("XC");
  });

     it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(99);
    expect(romanString).toBe("XCIX");
  });

      it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(100);
    expect(romanString).toBe("C");
  });

      it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(198);
    expect(romanString).toBe("CXCVIII");
  });

       it("contains spec with an expectation", function() {
   	var romanString= arabictoromanConverter(898);
    expect(romanString).toBe("DCCCXCVIII");
  });


      
});