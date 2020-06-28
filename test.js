function getInputValue(){
    var inputVal = Number(document.getElementById("numberofr").value);
    var fromVal = Number(document.getElementById("distancefrom").value);
    var toVal = Number(document.getElementById("distanceto").value);
    var radiob = document.getElementById("Radiob").value;
    if (inputVal > 4 && Number.isInteger(inputVal)){
        if (fromVal>0 && Number.isInteger(fromVal)){
            if (toVal>fromVal && Number.isInteger(toVal)){
                if (radiob == "Asymmetric"){
                    arr= asymetric(inputVal, fromVal, toVal);
                    console.log(arr);
                    
                }
                else if(radiob=="Symmetric"){
                   arr=  symetric(inputVal, fromVal, toVal);
                   console.log(arr);
                }
                downloadtofile(arr,'testf.txt','application/octet-stream');

               
            }
            else{
                alert("ERROR DISTANCE TO VALUE MUST BE > FROM");
            }
        }
        else{
            alert("ERROR DISTANCE FROM VALUE MUST BE > 0");
        }
    }else{
        alert("ERROR ADD AN INTEGER NUMBRER >4");

    }
}


let getRandomNumber = function(start, range){
    let getRandom = Math.floor((Math.random()* range)+ start);
    while (getRandom > range){
        getRandom = Math.floor((Math.random()* range)+ start);
    }
    return getRandom;
}


let symetric = function(inputv, fromVal, toVal){
    var arr= [];
    for (var i=0;i<inputv;i++){
        arr[i]=[];
        for (var j=0;j<inputv;j++){
             if (i>j){
                arr[i][j]= getRandomNumber(fromVal,toVal);
            }
            else if(i==j){
                arr[i][j]=0;

            } 
        }
    }
    for (var i=0;i<inputv;i++){
        for (var j=0;j<inputv;j++){
            if (i<j){
                arr[i][j]= arr[j][i];
            }
        }
    }
    return arr;
}

let asymetric = function(inputv, fromVal , toVal){
    var arr = [new Array(inputv)];
    
    for (var i =0; i<inputv;i++){
        arr[i]=[];
        for (var j=0;j<inputv;j++)
        {
            if (i != j){
            arr[i][j] = getRandomNumber(fromVal,toVal);
            }
            else if(i==j){
                arr[i][j]=0;
            }
        }
    }
    return arr;
}

const downloadtofile = (content, filename,contentType) => {
    const a = document.createElement('a');

    const file = new Blob([content],{type: contentType});

	a.href= URL.createObjectURL(file);
	a.download= filename;
	a.click();
	URL.revokeObjectURL(a.href);
}
