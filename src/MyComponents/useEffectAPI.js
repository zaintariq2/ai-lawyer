import React, { useState, useEffect } from 'react'
import ApiError from './apiError';

const UseEffectAPI = (props) => {

  const [data, setData] = useState([]);
  const getUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then(responce => responce.json())
      .then(data => setData(data));
    console.log(data.results);
    console.log("API was called");

  }

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = (props) => {
    console.log("I am on delete"+props);
    setData(data.results[props].filter((e)=>{
      return e!==props;
    }));
  }

  return (
    <>
      <div className="p-3">
        <button type="button" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={getUsers}>Get Users</button>
        {/* <h1 className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none rounded text-lg width-100" >Users Data</h1> */}
      </div>

      {data.results === undefined ? (
        <ApiError />
      ) : (
        data.results.map((curElem) => {
          return (
            <div className="row g-4 p-4">
              <div className="col-3">
                <div className="card">
                  <div className="card-body">
                    <div className='text-right'>
                      <button type="button" className="btn-close" aria-label="Close" onClick={()=>{onDelete(curElem)}}></button>
                    </div>
                    <h5 className="card-title">Name: {curElem.name.first}</h5>
                    <p className="card-text">Email: {curElem.email}</p>
                    <p className="card-text">Cell: {curElem.cell}</p>
                    <p className="card-text">Location: {curElem.location.city}</p>
                    <a href="#" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Details</a>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )}
    </>
  )
}

export default UseEffectAPI