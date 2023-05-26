function check()
{
    let hoten=document.getElementById("hoten");
    while(hoten.value[0]==" "){
        hoten.value=hoten.value.slice(1,hoten.value.length);
    }
    while(hoten.value[hoten.value.length-1]==" "){
        hoten.value=hoten.value.slice(0,hoten.value.length-1);
    }
    while(hoten.value.includes("  ")){
        let hoten1=hoten.value.slice(0,hoten.value.indexOf("  ")+1);
        let hoten2=hoten.value.slice(hoten.value.indexOf("  ")+2,hoten.value.length);
        hoten.value=hoten1+hoten2;
    }
    let Hoten=hoten.value[0].toUpperCase();
    for(let i=1;i<hoten.value.length;i++)
    {
        if(hoten.value[i]==" ")
        {
            Hoten+=" ";
            Hoten+=hoten.value[i+1].toUpperCase();
            i++;
            
        }
        else{
            Hoten+=hoten.value[i];
        }
    }
    hoten.value=Hoten;

}