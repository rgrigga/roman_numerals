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

function arabic(s,ret){
    if(!ret){
        ret = 0;
    }
    if(s == 'I'){
        ret = 1;
    }
    return ret;
}