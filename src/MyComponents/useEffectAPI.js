import React, { useState, useEffect } from 'react'

const UseEffectAPI = (props) => {

  const [data, setData] = useState([]);
  const getUsers = async () => {
    fetch("https://randomuser.me/api/")
      .then(responce => responce.json())
      .then(data => setData(data));
    console.log(data.results);
    console.log("API was called")

  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {/* {data.results[0].email} */}
      <div className="p-3">
        {/* <h1>Hello {props.title}</h1> */}
        <button type="button" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={getUsers}>Get Users</button>
        <div className="row g-4 p-4">
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <button type="button" className="btn-close" aria-label="Close"></button>
                {/* <h5 className="card-title">Name: {data.results[0].name.first}</h5>
                <p className="card-text">Email: {data.results[0].email}</p>
                <p className="card-text">Cell: {data.results[0].cell}</p>
                <p className="card-text">Location: {data.results[0].location.city}</p> */}
                <a href="#" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default UseEffectAPI