import './App.css';
// import React, { useEffect, useState } from 'react';
import UseEffectAPI from './MyComponents/useEffectAPI';
// import axios, { Axios } from 'axios';
// import {myFunction} from "./functions.js";
// import React, { Component } from 'react';

function App() {

  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }

  const myFunction = () => {
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
  window.onClick = function (event) {
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

  return (
    <div className="App">
      <>
        <div className="navbar">
          <div>
            <h3>AI Lawyer</h3>
          </div>
          <div className="main-menu">
            <a href="#home">Home</a>
            <a href="#business">Business</a>
            <div className="dropdown">
              <button onClick={myFunction} className="dropbtn">Functional Requirements</button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Input the number of hours</a>
                <a href="#">Get the output</a>
                <a href="#">View the Functional Requirement</a>
                <a href="#">View the Non-Functional Requirements</a>
                <a href="#">User can get solution to their legal issue</a>
                <a href="#">Software Legal policy</a>
                <a href="#">Software privacy policy</a>
                <a href="#">Email Client</a>
                <a href="#">Discord username</a>
                <a href="#">Account profile name</a>
                <a href="#">Account Name</a>
                <a href="#">Notifications</a>
                <a href="#">Car Repossession Issue</a>
                <a href="#">Taxes</a>
                <a href="#">Car Registration Renewal</a>
                <a href="#">Child Support Payment</a>
                <a href="#">Close Bank Accounts</a>
                <a href="#">Copyright Protection</a>
                <a href="#">File for Bankruptcy</a>
                <a href="#">File SEC Complaint</a>
                <a href="#">Hotel Complaint and Refund</a>
                <a href="#">Inflation Pay Request</a>
                <a href="#">Insurance Claims</a>
              </div>
            </div>
            <div className="dropdown">
              <button onClick={myFunction2} className="dropbtn">Non-Functional Requirements</button>
              <div id="non-myDropdown" className="dropdown-content">
                <a href="#">Response Time</a>
                <a href="#">Net processing time</a>
                <a href="#">Software availability timing</a>
                <a href="#">User Experience</a>
                <a href="#">Ease of software</a>
                <a href="#">Software maintenance time</a>
                <a href="#">Number of users software can handle concurrently</a>
                <a href="#">Number of users use a specific function concurrently</a>
                <a href="#">Data usage</a>
                <a href="#">Computation power</a>
              </div>
            </div>
          </div>
        </div>
        <div className="back-image">
          <form>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
                  <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Rate for this project is $6/hr</h2>

                  {/* <!-- Estimate Hours --> */}
                  <div className="relative mb-4">
                    <label for="hours" className="leading-7 text-gray-600">Enter Hours</label>
                    <input type="number" name="hours" id="hours" placeholder="Hours..." className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required /><br /><br />
                  </div>

                  {/* <!--  button--> */}
                  <button type="button" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={myrate}>Submit</button>
                  <div className="leading-7 mt-5 text-gray-600">
                    <p id="rate-output"></p>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>

        {/* <button onClick={getUsers}>get data</button> */}
        {/* <div>
          <p>{data}</p>
        </div> */}

        <UseEffectAPI title="Zain" />

        <footer className="footer">
          <p className="mr-5">zaintariq#9731</p> |
          <a href="mailto: bsce19023@itu.edu.pk" className="ml-5">bsce19023@itu.edu.pk</a>
        </footer>
      </>
    </div>
  );
  // }
}

export default App;
