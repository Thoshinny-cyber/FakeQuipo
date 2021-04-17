function values(){
    var x,txt="",meddetails;
    meddetails = {Batchno:"abc606",
    MedicineName:"med1",
    Dosage:"50mg",
    FactoryName:"CMPNY1",
    Mfgdate:"22/02/2020",
    Expdate:"22/01/2023"};

    for(x in meddetails){
        txt+=x+":"+meddetails[x]+"\n";

      
    };
    window.alert(txt);
    document.getElementById("demo").innerHTML=txt;



}