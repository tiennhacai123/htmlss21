var num = +prompt("Nhap vao 1 so:");
if(num>1&&num<9){
    switch(num){
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log(`Tuesday`);
        break;
    case 4:
        console.log(`Wednesday`);
        break;
    case 5:
        console.log(`Thursday`);
        break;
    case 6:
        console.log(`Friday`);
        break;
    case 7:
        console.log(`Saturday`);
        break;
    case 8:
        console.log(`Sunday`);
        break;
    default: 
        console.log("ko hop le");
    }
}else{
    console.log("So khong hop le");
}
