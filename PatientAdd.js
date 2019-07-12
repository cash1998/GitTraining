(function(globalScope){
    
    function patientAdd()
    {
    var name=globalScope.document.querySelector("#name");
    var mrn=Math.random().toString().substr(3,7);
    var mnbp=globalScope.document.querySelector("#mnbp");
    var patient=new globalScope.Philips.PMSLab.patientData(mnbp,mrn,name);
    localStorage.setItem("pat",JSON.stringify(patient));
    }

    function patientShow()
    {   var patientFetch=JSON.parse(localStorage.getItem("pat"));
        globalScope.document.querySelector().innerHTML=patientFetch.name;
        globalScope.document.querySelector().innerHTML=patientFetch.minBP;
        globalScope.document.querySelector().innerHTML=patientFetch.mrn;
    }

})(window);