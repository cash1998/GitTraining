(function(globalScope)
{
    function PMS()
    {this.bpRefernceMinValue=80;
    this.bpReferenceMaxValue=120;
    this.subscriberList=[];}

    PMS.prototype.nursingDocStation=function(mrn,Parameter,minVal)
    {//if(minVal<this.bpRefernceMinValue||maxVal>this.bpReferenceMaxValue)
        console.log(mrn+"   "+minVal);
    }
    //PMS.prototype.subscribe=function(mrn,callback)
   // {
     //   this.subscriberList.push(mrn);
       // callback
    //}

        globalScope.Philips.PMSLab.PMSportal=PMS;
})(window);
