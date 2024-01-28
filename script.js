function calculate()

{  
    dvr = document.getElementById("ds").value;
    rates = document.getElementById("rate").value;

    //conversion
    kwh = dvr/1000;

    //per hour
    rph = kwh * rates;
    //per day
    rpd = rph * 24;
        //per month
        rpm = rpd * 30;

    kwhl = kwh.toLocaleString("en-US");
    rphl =rph.toLocaleString("en-US");
    rpml = rpm.toLocaleString("en-US");
    rpdl =rpd.toLocaleString("en-US");

    document.getElementById("kwh").value = kwhl;
    document.getElementById("Hour").value = rphl;
    document.getElementById("Day").value = rpdl;
    document.getElementById("Month").value = rpml;





}

