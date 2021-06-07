function head(){



 //Automatic Slideshow - change image every 3 seconds
 var myIndex = 0;
 carousel();
 
 function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) {myIndex = 1}
   x[myIndex-1].style.display = "block"; 


   
}}
var companyName= prompt("please enter your name")
   if (companyName!= null) {
    document.getElementsByClassName("w3-button w3-bar-item").appendChild.value = companyName;
   }
    var phonenumber=prompt("please enter your phonenumber")
    if (phonenumber!=null){
        document.getElementsByClassName("w3-button w3-bar-item").appendChild.value=phonenumber;
        }
        var location=prompt("please enter your location")
        if (location!=null){
            document.getElementsByClassName("w3-button w3-bar-item").appendChild.value.contact;
        // }
        // var username = prompt("What is your name?");
        var name = window.prompt("Enter your name: ");
alert("Your name is " + name);


function calender(){
    var table="";
    var rows=3;
    var columns=6;
    var numbers=31;
    for (var i=0;i<rows;i++){
        table+="<tr>"
        for (var x=0;x<columns;x++){
            table+="<td>"+x +"<td>"
        }
        table +="<tr>"
    }
    document.write('<table>' +table+ '</table>')
}
function isPasswordValid(password) {
        if (password.length > 5) {
        console.log(true);
        }
        else{
            console.log("please input your password")
        }
       }
       function isfirstNameValid(password) {
        if (name==firstName) {
        console.log(true);
        }
        else{
            console.log("please input your firstName")
        }
       }
       function islastnamevalid(password) {
        if (name==lastName) {
        console.log(true);
        }
        else{
            console.log("please input your lastName")
        }
       }
       function isemailValid(email) {
        if (input==email) {
        console.log(true);
        }
        else{
            console.log("please input your email")
        }
       }
    }
    var myObject = {
        name: "Lovelace",
        func: function() {
            var self = this;
            console.log("outer func:  this.name = " + this.name);
            console.log("outer func:  self.name = " + self.name);
            (function() {
                console.log("inner func:  this.name = " + this.name);
                console.log("inner func:  self.name = " + self.name);
            }());
        }
    };
    myObject.func();

//inner function console out underfined because  it is console  in other function 





    
