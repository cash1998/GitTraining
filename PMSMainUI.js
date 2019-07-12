(function(globalScope)
{   var PatientData=new globalScope.Philips.PMSLab.PatientData(80,120,1);
    var PMSData=new globalScope.Philips.PMSLab.PMSportal();
    var addedp=[];
    
    function displayer()
    {   if(JSON.parse(localStorage.getItem("patientList"))==null)
            localStorage.setItem("patientList",JSON.stringify(addedp));
            
        addedp=JSON.parse(localStorage.getItem("patientList"));
        for(var i=0;i<addedp.length;i++)
        {  
            var patientFetch=JSON.parse(localStorage.getItem("pat"+addedp[i]));
            console.log(patientFetch);
            globalScope.document.querySelector("#displayer").innerHTML+="<td><tr>"+addedp[i]+"</tr>&nbsp;&nbsp;<tr>"+patientFetch.Name+
            "</tr>&nbsp;&nbsp;<tr>"+patientFetch.minBP;//+"</tr><tr><button class='getBP' id='"+
            //addedp[i]+"'>Start</button></tr>&nbsp;&nbsp;<tr><button class='stopBP' id='"+addedp[i]+"s'>Stop</button></tr></td></td>";
        }
    }
    
    
    function patientAdd()
    {
    if(JSON.parse(localStorage.getItem("patientList"))==null)
        localStorage.setItem("patientList",JSON.stringify(addedp));
    addedp=JSON.parse(localStorage.getItem("patientList"));
    var name=globalScope.document.querySelector("#name").value;
    var mrn=Math.random().toString().substr(3,7);
    var mnbp=globalScope.document.querySelector("#mnbp").value;
    var patient=new globalScope.Philips.PMSLab.PatientData(mnbp,mrn,name);
    localStorage.setItem("pat"+mrn,JSON.stringify(patient));
    globalScope.document.querySelector("#fname").innerHTML=patient.MRN;
    addedp.push(mrn);
    localStorage.setItem("patientList",JSON.stringify(addedp));
    displayer();
    }
    
    function patientShow()
    {   var mrn=globalScope.document.querySelector("#mnr").value;
        var patientFetch=JSON.parse(localStorage.getItem("pat"+mrn));
        console.log(patientFetch);
        globalScope.document.querySelector("#fname").innerHTML=patientFetch.Name;
        globalScope.document.querySelector("#minbp").innerHTML=JSON.parse(localStorage.getItem(patientFetch.MRN+"BPList"))||patientFetch.minBP;
        globalScope.document.querySelector("#mrn").innerHTML=patientFetch.MRN;
    }
    
    
    
    var addButton=globalScope.document.querySelector("#add");
    addButton.addEventListener("click",patientAdd);

    var showButton=globalScope.document.querySelector("#show");
    showButton.addEventListener("click",patientShow);

    //var showPat=patientShow();
    
    var startButtons=globalScope.document.querySelector("#start");
    var stopButtons=globalScope.document.querySelector("#stop");
    
    {
    startButtons.addEventListener("click",function(){
    var time=setInterval(function(){
        
        var id=globalScope.document.querySelector("#mnr").value;
        var bpvalues=JSON.parse(localStorage.getItem(id+"BPList"))||[];
        bpvalues.push(PatientData.getBP());
        
        localStorage.setItem(id+"BPList",JSON.stringify(bpvalues));
        PMSData.nursingDocStation(PatientData.MRN,"Blood Pressure",PatientData.minBP);
        stopButtons.addEventListener("click",function()
        {   
            clearInterval(time);
            
        });
    },1000);
    
    //make subscribe and unsubscribe function. make a bit of changes.
});}})(window);

/*things to be added-
1. Subscribe and unsubscribe.
2. Subscriber list.
3. Subscriber number. 
4. Better HTML.
5. Entry for new patients?

Then, create a login page for the PMS users. 
They should be able to see the details of the patients, 
and we need to show if the patient needs attention or not.
Store timestamp as well, for the Blood pressure data*/


//How to interact with local storage