function renderTime()
{
    var mydate = new Date();
    var year = mydate.getFullYear();
        if(year < 1000)
        {
            year +=1900
        }
    var day = mydate.getDay();
    var month= mydate.getMonth();
    var daym =mydate.getDate();
    // var dayarray= new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
    
    day= day-8
    month=month-12
    year=year-2001
    var realDob =document.getElementById("b2");
    realDob.textContent= year +" Years "+month+" month "+day+" day "
    realDob.innerText= year +" Years "+month+" month "+day+" day "
    setTimeout("renderTime()", 1000);
}
renderTime();