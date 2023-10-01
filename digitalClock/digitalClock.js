function updateTime() {
    var now = new Date(); //now becomes an object of Date class
		//The below three lines create references to the dials we made in the html file.
    const hourDiv = document.getElementById("hour-dial"); 
    const minDiv = document.getElementById("min-dial");
    const secDiv = document.getElementById("sec-dial");
		//The belo three lines retrieve the value of the current hour, minute and second value into three variables.
    currHour = now.getHours()
    currMin = now.getMinutes()
    currSec = now.getSeconds()
		// set the content of the element with the ID time to the formatted string
    // also 0 padding is added to the numbers for single digit time values
    hourDiv.innerHTML = currHour.toString().padStart(2, '0');
    minDiv.innerHTML = currMin.toString().padStart(2, '0');
    secDiv.innerHTML = currSec.toString().padStart(2, '0');
    //Since time changes every second, we make sure this update function is called every second.
    setTimeout(updateTime, 1000);
}
updateTime(); // this function is called as soon as the page is rendered (when script tag is rendered)