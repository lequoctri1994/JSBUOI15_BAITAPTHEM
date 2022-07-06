function ex1 (){
    var fullName = "Lê Quốc Trị";
    var totalIncome = 120000000;
    var dependentPerson = 3;
    var incomeTaxes = totalIncome - 4000000 - (3 * 1600000)
    var personalIncomeTax;

    if (incomeTaxes <= 60000000){
        personalIncomeTax = incomeTaxes * 5 / 100;
    } else if (incomeTaxes <= 120000000){
        personalIncomeTax = incomeTaxes * 10 / 100;
    } else if (incomeTaxes <= 210000000){
        personalIncomeTax = incomeTaxes * 15 / 100;
    } else if (incomeTaxes <= 384000000){
        personalIncomeTax = incomeTaxes * 20 / 100;
    } else if (incomeTaxes <= 624000000){
        personalIncomeTax = incomeTaxes * 25 / 100;
    } else if (incomeTaxes <= 960000000){
        personalIncomeTax = incomeTaxes * 30 / 100;
    } else {
        personalIncomeTax = incomeTaxes * 35 / 100;
    }

    console.log("Tổng số thuế thu nhập cá nhân của Lê Quốc Trị là:", personalIncomeTax.toLocaleString() )
}

ex1()