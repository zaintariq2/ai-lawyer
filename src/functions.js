/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function myFunction2() {
    document.getElementById("non-myDropdown").classList.toggle("show");
  }
  
  function myrate() {
    debugger;
    var hours = document.getElementById("hours").value;
    if (hours != '') {
      var rate = hours * 6;
      document.getElementById("rate-output").innerHTML = "The rate is $" + rate;
    }
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  export default myFunction;