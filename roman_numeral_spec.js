describe('roman',function(){

    it('should return I for 1',function(){
        expect(roman(1)).toBe("I");
    });

    it('should return V for 5',function(){
        expect(roman(5)).toBe("V");
    });

    it('should return X for 10',function(){
        expect(roman(10)).toBe("X");
    });

    it('should return L for 50',function(){
        expect(roman(50)).toBe("L");
    });

    it('should return C for 100',function(){
        expect(roman(100)).toBe("C");
    });

    it('should return D for 500',function(){
        expect(roman(500)).toBe("D");
    });

    it('should return M for 1000',function(){
        expect(roman(1000)).toBe("M");
    });

});