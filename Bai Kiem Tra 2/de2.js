function kiemtra()
{
    if(document.getElementById("hoten").value=="")
    {
        alert("Chưa nhập họ tên");
        return;
    }
    let diachi=document.getElementById("diachi");
    let Diachi=diachi.value;
    while(Diachi[0]==" ")
    {
        Diachi=Diachi.slice(1,Diachi.length);
    }
    while(Diachi[Diachi.length-1]==" ")
    {
        Diachi=Diachi.slice(0,Diachi.length-1);
    }
    while(Diachi.includes("  ")){
        let a=Diachi.slice(0,Diachi.indexOf("  ")+1);
        let b=Diachi.slice(Diachi.indexOf("  ")+2,Diachi.length);
        Diachi=a+b;
    }
    let DiaChi=Diachi[0].toUpperCase();
    for(let i=1;i<Diachi.length;i++)
    {
        DiaChi+=Diachi[i];
        if(Diachi[i]==" ")
        {
            DiaChi+=Diachi[i+1].toUpperCase();
            i++;
        }
    }
    diachi.value=DiaChi;
}