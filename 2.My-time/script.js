function runclock() {
    var now = new Date();
    var dname=now.getDay(),
     mo=now.getMonth(),
     dnum=now.getDate(),
     yr= now.getFullYear(),
     hou=now.getHours(),
     min=now.getMinutes(),
     sec= now.getSeconds();
     pe= "AM";
     
     if(hou==0){
         hou=12;
     }
     if(hou>12){
         hou=hou-12;
         pe="PM";
     }

    var months=["January","February","March","April","May","June","July","July", "August","September","October","November","December"];
    var week =["Sunday","Monday","Tuesday","Wednesday","Thurseday","Friday","Saturday"];
    var ids=["dayname","month","daynum","year","hour","minute","second","period"]
    var values=[week[dname],months[mo],dnum,yr,hou,min,sec,pe];
    for(var i=0; i<ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue =  values[i];
    

}


function startclock(){
   runclock();
   setInterval("runclock()",1);
}