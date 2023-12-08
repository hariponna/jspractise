function rent(){

    let yearly = document.getElementById("rent").value;

    let result = yearly/12;

    document.getElementById("result").innerHTML = result.toFixed(0);
} 