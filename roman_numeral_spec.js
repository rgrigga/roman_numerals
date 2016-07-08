describe('roman',function(){

    var cases = {
        1:'I',
        2:'II',
        3:'III',
        5:'V',
        9:'IX',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M'
    };

    //this consolidates out logic and reduces duplication.
    Object.keys(cases).forEach(function(key){
        it('returns '+cases[key]+' for '+key, function(){
            var result = roman(key);

            expect(countCharacter(result,'I')).toBeLessThan(4);

            expect(result).toBe(cases[key]);
        })
    });

    //it('should return I for 1',function(){
    //    expect(roman(1)).toBe("I");
    //});
    //
    //it('should return V for 5',function(){
    //    expect(roman(5)).toBe("V");
    //});
    //
    //it('should return X for 10',function(){
    //    expect(roman(10)).toBe("X");
    //});
    //
    //it('should return L for 50',function(){
    //    expect(roman(50)).toBe("L");
    //});
    //
    //it('should return C for 100',function(){
    //    expect(roman(100)).toBe("C");
    //});
    //
    //it('should return D for 500',function(){
    //    expect(roman(500)).toBe("D");
    //});
    //
    //it('should return M for 1000',function(){
    //    expect(roman(1000)).toBe("M");
    //});
    //
    //it('should return III for 3',function(){
    //    expect(roman(3)).toBe("III");
    //});
    //
    //it('should return IX for 9',function(){
    //    expect(roman(9)).toBe("IX");
    //});

    //afterEach(function(){
    //    expect(countCharacter(roman(4),'I')).toBeLessThan(4);
    //    expect(countCharacter(roman(4),'X')).toBeLessThan(4);
    //    expect(countCharacter(roman(4),'C')).toBeLessThan(4);
    //    expect(countCharacter(roman(4),'M')).toBeLessThan(4);
    //});
});

//describe('rules',function(){
//    it('should not repeat some letters more than 3 times in a row',function(){
//        //The symbols 'I', 'X', 'C', and 'M' can be repeated at most 3 times in a row.
//        expect(countCharacter(roman(4),'I')).toBeLessThan(4);
//        expect(countCharacter(roman(4),'X')).toBeLessThan(4);
//        expect(countCharacter(roman(4),'C')).toBeLessThan(4);
//        expect(countCharacter(roman(4),'M')).toBeLessThan(4);
//    })
//});

//this is a utility function to abstract counting a character
//thank you Lo Sauer http://stackoverflow.com/a/10671743/2238694
function countCharacter(subjectString,char){
    var regex = new RegExp(char,'g');
    return (subjectString.match(regex)||[]).length;
}