
function abc()
{
    document.getElementById("lblcustomer").innerText = document.getElementById("txtcustomer").value;

    document.getElementById("lbldate").innerText = document.getElementById("txtdate").value;

    document.getElementById("lblday").innerText = document.getElementById("txtdays").value;

    document.getElementById("lblperson").innerText = document.getElementById("txtperson").value;

    var radio1 = document.getElementById("txtradio1").value;

    var radio2 = document.getElementById("txtradio2").value;



    if(txtradio1.checked)
    {
        lblrroom.innerText = radio1;
       
    }

    if(txtradio2.checked){
        lblrroom.innerText = radio2;
        
    }
    
    var checker = document.getElementById("check1").value;
    lbladavance.innerText = checker;


}