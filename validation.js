let sub=document.getElementById("sub");
let x=0;
function check(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let phone=document.getElementById("phone").value;
    let birthdate=document.getElementById("bday").value;
    phone=Number(phone);
    if(username==""){
        alert("Username cant be empty!");
        x-=1;
    }
    if(password==""){
        alert("Password cant be empty!");
        x-=1;
    }
    if( typeof phone==String ||  String(phone).length!=10){
        alert("Phone number is not valid!");
        x-=1;
    }
    let year=birthdate.slice(0,4);
    year=Number(year);
    if(year>2007){
        alert("Your age is too low");
        x-=1;
    }
    if(x==0){
        document.cookie=`name:${username};expires:Sun,1 January 2030 12:00:00 UTC;path=validation.json`;
        console.log(document.cookie);
    }
    return x
}
sub.onclick=function(){
    if(check()==0){
        open("home.html");
    }
}
