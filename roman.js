function roman(i,ret){
    if(!ret){
        ret = "";
    }
    //if(i == 1){
    //    ret = "I";
    //}
    //if(i == 5){
    //    ret = "V";
    //}
    //if(i == 10){
    //    ret = "X";
    //}
    //if(i == 50){
    //    ret = "L";
    //}
    //if(i == 100){
    //    ret = "C";
    //}
    //if(i == 500){
    //    ret = "D";
    //}
    //if(i == 1000){
    //    ret = "M";
    //}

    if(i>=1000){
        i=i-1000;
        ret = ret + 'M' + roman(i,ret);
    }else if(i>=500){
        i=i-500;
        ret = ret + 'D' + roman(i,ret);
    }else if(i>=100){
        i=i-100;
        ret = ret + 'C' + roman(i,ret);
    }else if(i>=50){
        i=i-50;
        ret = ret + 'L' + roman(i,ret);
    }else if(i>=10){
        i=i-10;
        ret = ret + 'X' + roman(i,ret);
    }else if(i>=5){
        i=i-5;
        ret = ret + 'V' + roman(i,ret);
    }else if(i>=1){
        i=i-1;
        ret = ret + 'I' + roman(i,ret);
    }

    return ret;
}

