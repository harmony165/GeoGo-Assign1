


// api url

var api_url = new URL("http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=2ada180610a408b061e5c5474149492d");



function getInput(e){
    if(e.keyCode==13){
        console.log("test");
        var newq = document.getElementById("newplace").value;
        console.log(newq);
        api_url.searchParams.set('q',newq);
        getapi(api_url);
    }
   

}
//


// document.getElementById("newplace").addEventListener("click",function(){
//     var newq = document.getElementById("newplace");
//     console.log(newq);
// });


// Defining async function 
async function getapi(url) {
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
    console.log(data);
    var temp = Math.round(data.main.temp * 10) / 10;
    console.log(temp);
    if (response){
        show(data);
    }else console.log(loading);
	
}
// Calling that async function
getapi(api_url);
function onSub(e){
    e.preventDefault();
    var newq = document.getElementById("newplace");
    api_url.searchParams.set('q',newq);
    getapi(api_url);
    
}
// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

var input = document.getElementById("newplace");

// Execute a function when the user releases a key on the keyboard

function search(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
        var newq = document.getElementById("newplace");
        api_url.searchParams.set('q',newq);
        getapi(api_url);
    }
}
function Circular(arr, startIntex){
    this.arr = arr;
    this.currentIndex = startIntex || 0;
  }
  
  Circular.prototype.next = function(){
    var i = this.currentIndex, arr = this.arr;
    this.currentIndex = i < arr.length-1 ? i+1 : 0;
    return this.current();
  }
  
  Circular.prototype.prev = function(){
    var i = this.currentIndex, arr = this.arr;
    this.currentIndex = i > 0 ? i-1 : arr.length-1;
    return this.current();
  }
  
  Circular.prototype.current = function(){
    return this.arr[this.currentIndex];
  }
//   Function to define innerHTML for HTML table
function show(data) {
    // Setting innerHTML as tab variable
    
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // document.getElementById("next").innerHTML = daysprefix[d.getDay()+1];
    // document.getElementById("next2").innerHTML = daysprefix[d.getDay()+2];
    // document.getElementById("next3").innerHTML = daysprefix[d.getDay()+3];
    // document.getElementById("next4").innerHTML = daysprefix[d.getDay()+4];
    // document.getElementById("next5").innerHTML = daysprefix[d.getDay()+5];
    // document.getElementById("next6").innerHTML = daysprefix[d.getDay()+6];
    document.getElementById("date").innerHTML = days[d.getDay()] + ', ' + d.getDate() + 'th' + ' '  + months[d.getMonth()] + ' ' + d.getFullYear();
    document.getElementById("switchtemp").innerHTML = Math.round((data.main.temp-273) * 10) / 10  + '&#176';
    document.getElementById("location").innerHTML = data.name + ',' + data.sys.country;
    
}
