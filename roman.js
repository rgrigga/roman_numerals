var valuemap = {
    1:'I',
    5:'V',
    10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M'
};

function roman(i,ret){
    if(!ret){
        ret = "";
    }

    if(i>=1000){
        i=i-1000;
        ret = ret + 'M' + roman(i,ret);
    }else if(i>=900){
        i=i-900;
        ret = ret + 'CM' + roman(i,ret);
    }else if(i>=500){
        i=i-500;
        ret = ret + 'D' + roman(i,ret);
    }else if(i>=400){
        i=i-400;
        ret = ret + 'CD' + roman(i,ret);
    }else if(i>=100){
        i=i-100;
        ret = ret + 'C' + roman(i,ret);
    }else if(i>=90){
        i=i-90;
        ret = ret + 'XC' + roman(i,ret)
    }else if(i>=50){
        i=i-50;
        ret = ret + 'L' + roman(i,ret);
    }else if(i>=40){
        i=i-40;
        ret = ret + 'XL' + roman(i,ret);
    }else if(i>=10){
        i=i-10;
        ret = ret + 'X' + roman(i,ret);
    }else if(i>=9){
        i=i-9;
        ret = ret + 'IX' + roman(i,ret);
    }else if(i>=5){
        i=i-5;
        ret = ret + 'V' + roman(i,ret);
    }else if(i>=4){
        i=i-4;
        ret = ret + 'IV' + roman(i,ret);
    }else if(i>=1){
        i=i-1;
        ret = ret + 'I' + roman(i,ret);
    }

    return ret;
}

function arabic(str,ret){
    if(!ret){
        //'initialize' the return
        ret = 0;
    }

    var char1 = str.slice(0,1);//first place
    var val1 = parseInt(getKeyByValue(valuemap,char1));//first value

    var char2 = str.slice(1,2);//second place

    if(char2){
        var val2 = parseInt(getKeyByValue(valuemap,char2));//second value

        if(val1 < val2){
            //if value of char1 is less than char2, this is a "subtractive" pair.
            ret = parseInt(ret) + parseInt(val2) - parseInt(val1);
            str = str.slice(2);

            if(str){
                //there is more in the string
                return arabic(str,ret);
            }

        }else{
            //val2 is less than or equal to val1
            //process ONLY the first position, as the second may be a subtraction of the third character, and will be caught on the next iteration:
            ret = parseInt(ret) + parseInt(val1);
            str = str.slice(1);
            return arabic(str,ret);
        }
    }else{
        //there is no second char
        ret = parseInt(ret) + parseInt(val1);
    }

    return parseInt(ret);
}

//this is ES6:
//http://stackoverflow.com/a/28191966/2238694
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}