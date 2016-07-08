var cases = {
    1:'I',
    2:'II',
    3:'III',
    4:'IV',
    5:'V',
    8:'VIII',
    9:'IX',
    10:'X',
    14:'XIV',
    40:'XL',
    50:'L',
    90:'XC',
    99:'XCIX',
    100:'C',
    500:'D',
    888:'DCCCLXXXVIII',
    900:'CM',
    999:'CMXCIX',
    1000:'M',
    1066:'MLXVI',
    1944:'MCMXLIV',
    1989:'MCMLXXXIX',
    1999:'MCMXCIX'
};

describe('arabic to roman',function(){

    //this consolidates our logic and reduces duplication.
    Object.keys(cases).forEach(function(key){
        it('returns '+cases[key]+' for '+key, function(){
            var result = roman(key);

            // http://www.regexpal.com/
            // and http://www.regular-expressions.info/
            // were helpful in coming up with the following regex patterns:

            //The symbols 'I', 'X', 'C', and 'M' can be repeated at most 3 times in a row.
            expect(result.match('([IXCM])\1\1\1+')).toBeFalsy();

            //The symbols 'V', 'L', and 'D' can never be repeated.
            expect(result.match('([VLD])\1+')).toBeFalsy();

            //this produces like:
            //expect(roman(1066)).toBe('MLXVI');
            expect(result).toBe(cases[key]);
        })
    });

});

describe('roman to arabic',function(){

    Object.keys(cases).forEach(function(key){
        it('returns '+key+' for '+cases[key], function(){
            var result = arabic(cases[key]);
            expect(result).toBe(parseInt(key));
        })
    });

});