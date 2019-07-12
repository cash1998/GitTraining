(function(globalScope)
{   
    
    function Patient(mnbp,mrn,name)
    {this.MRN=mrn;
    this.Name=name
    this.minBP=mnbp;
    }

    Patient.prototype.getBP=function()
    {this.minBP=Math.random()*160 + 40;
    return this.minBP;
    }

    globalScope.Philips.PMSLab.PatientData=Patient;
})(window);
