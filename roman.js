function roman(i){
    var ret = '';
    if(i == 1){
        ret = "I";
    }
    if(i == 5){
        ret = "V";
    }
    if(i == 10){
        ret = "X";
    }
    if(i == 50){
        ret = "L";
    }
    if(i == 100){
        ret = "C";
    }
    if(i == 500){
        ret = "D";
    }
    if(i == 1000){
        ret = "M";
    }
    return ret;
}