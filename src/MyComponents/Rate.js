import React from 'react'

const Rate = () => {
    function myrate() {
        debugger;
        var hours = document.getElementById("hours").value;
        if (hours !== '') {
            var rate = hours * 6;
            document.getElementById("rate-output").innerHTML = "The rate is $" + rate;
        }
    }
    return (
        <div className="back-image">
            <form>
                <section className="text-gray-100 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
                            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Rate for this project is $6/hr</h2>

                            {/* <!-- Estimate Hours --> */}
                            <div className="relative mb-4">
                                <label htmlFor="hours" className="leading-7 text-gray-600">Enter Hours</label>
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
    )
}

export default Rate