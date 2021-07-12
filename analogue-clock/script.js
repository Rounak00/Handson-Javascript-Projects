setInterval(()=>{
    let date = new Date();
    let ht = date.getHours();
    let mt=date.getMinutes();
    let st=date.getSeconds();
    let hrotate= 30*ht + mt/2;
    let mrotate= 6*mt;
    let srotate= 6*st;

    hour.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;
},1000);