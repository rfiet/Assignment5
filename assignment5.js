// Step 1
// Add a button to a web page. Use the old school HTML attribute method to attach a click event handler to 
// the button. That handler should call a function that displays the message “I have been clicked” out into 
// an alert box.

//function msgOut() {	
    
 //   alert("I have been clicked!");
// }

// Step 2
// Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. 
// Then use the DOM Element method to associate a function with the onclick event of the button. Again, 
// display the message “I have been clicked” out into an alert box.

 //   var myEl = document.getElementById("step2");
 //   myEl.onclick = function() {
 //        alert("I have been clicked 2");
 //   }
    
// Step 3
// Add a button to a web page and uniquely ID the button. Write a script that attaches an event listener to 
// the button and listens for the click event. When it’s heard, a user-defined function should be called and 
// the message “I have been clicked” should be displayed out into an alert box.

//step3.addEventListener("click",callbackClick, false);

//function callbackClick(){
//    alert("I have been clicked 3");
//}

// Step 4
// Modify the code within step 3 so that the code that displays an alert box is written directly within a callback
// function as opposed to a user-defined function.


//step3.addEventListener("click", function() {
//    alert("I have been clicked 3");
//}, false);

// Step 5
// Modify the code in step 4 so that you can write your script within the <head> tag of the page rather 
// than underneath the button in the markup.   
    
  // see under head
    
// Step 6
// Add a link to your web page. Add the text “Visit Google” to the link, set the ID to “redirect” and set 
// the href attribute to http://www.google.com. Now, write a script that alerts the user that they clicked 
// on the link but prevents the browser from also redirecting to the Google site.
 
  //  redirect.addEventListener("click", function() {
        
  //      event.preventDefault(); 
  //      alert("You have clicked on the google link, but you are going nowhere");
        
 //   }, false);
    
 
// Step 7
// Add a text box and a button to a web page. Add an event listener to the button. When the click event is heard, the
//  button should be disabled, and the text that the user input into the text box should be displayed within an alert box.

//step7.addEventListener("click", function() {
//    var btnEl = document.getElementById("step7").disabled = true;
//    alert(document.getElementsByName("step7Text")[0].value);
//}, false);
    
// Step 8
// Create a new page called newpage.html. You will now have 2 web pages including index.html and newpage.html. 
// Add a button to index.html. When the button is clicked, newpage.html should appear as a popup window at 300 
// pixels wide by 300 pixels high. As soon as newpage.html loads however, resize the window to 500 pixels wide by 
// 300 pixels high. You will need to handle the load event on newpage.html and use a BOM method on newpage.html to
// accomplish this task.

//step8.addEventListener("click", function() {
 //   window.open('newpage.html','gg','width=300,height=300,resizable=yes');
//}, false);

// Step 9
// Add two buttons to a web page. Add the text Start to one button and Stop to the other button. 
// Using the BOM .setInterval() method, figure out a way to display the text “Learning JavaScript is fun!” 
// into the console window every 2 seconds but only when the Start button is clicked. If the user clicks on the 
// Stop button, the console should stop logging the text immediately.
//function fun() { 	
//    console.log('Learning JavaScript is fun!'); 
//}
//var funId;
//step9Start.addEventListener("click", function() {
//   funId =  setInterval(fun, 2000);
//}, false);
//step9Stop.addEventListener("click", function() {
//    clearInterval(funId);
//}, false);

//Step 10
// Add a drop down list to a web page. Populate the drop down list with 4 items. Add a button next to 
// the drop down list and set the text to “Select”. When the user clicks the button, the item selected 
// in the drop down list should appear within an alert box.

//step10Btn.addEventListener("click", function() {
    
//    var el = document.getElementById("step10");
//    var myCar = el.options[el.selectedIndex].text;
    
//    if(myCar != null && myCar != undefined){
        
//       alert("You selected " +  myCar);
//    }
//}, false);



