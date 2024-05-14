function validationform() {
    var name = document.getElementById("name").value;
    var idNumber = document.getElementById("idNumber").value;

    if(name.trim() == ""){
    alert("Name Must Not Be Empty")
    return false;

    }

    if(idNumber.length !== 9 || isNaN(idNumber)){
        alert("OHH SO YOU GO AROUND GIVING YOUR NUMBER AWAY")
        return false;
    }

    return true;
}