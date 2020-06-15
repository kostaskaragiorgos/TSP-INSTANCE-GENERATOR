function getInputValue(){
    var inputVal = Number(document.getElementById("numberofr").value);
    if (inputVal > 4 && Number.isInteger(inputVal)){
        alert(inputVal);
    }else{
        alert("ERROR ADD AN INTEGER NUMBRER >4")

    }
}