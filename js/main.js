var users=[];
document.getElementById("add").onclick =function(){
    var inpname = document.getElementById("name").value;
    document.getElementById("name").value=null;
    users.push(inpname);
    document.getElementById("output").innerText="the number is "+users.length;
    console.log(users);
}