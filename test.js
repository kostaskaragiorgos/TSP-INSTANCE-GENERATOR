function getInputValue(){
    var inputVal = Number(document.getElementById("numberofr").value);
    var fromVal = Number(document.getElementById("distancefrom").value);
    var toVal = Number(document.getElementById("distanceto").value);
    if (inputVal > 4 && Number.isInteger(inputVal)){
        if (fromVal>0 && Number.isInteger(fromVal)){
            if (toVal>fromVal && Number.isInteger(toVal)){
                alert("Nodes"+inputVal+"F"+fromVal+"TO"+toVal);
                makearry(inputVal,fromVal,toVal);
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

function makearry(inputVal,fromVal,toVal){
    for (var i =0; i<inputVal;i++)
    {
        for (var j=0;j<inputVal;j++)
        {
            console.log(getRandomNumber(fromVal,toVal));
        }
    }
}


    