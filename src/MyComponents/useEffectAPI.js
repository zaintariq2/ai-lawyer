import React, { useState, useEffect } from 'react'

const UseEffectAPI = (props) => {

  const [data, setData] = useState([]);
  const getUsers = () => {
    fetch("https://randomuser.me/api/")
    .then(responce => responce.json())
    .then(data => setData(data));
    console.log(data.results);
    console.log("API was called")
  }
  useEffect(() => {
    getUsers();
  });

  return (
    <>
      {/* {data.results[0].email} */}
      <h1>Hello {props.title}</h1>
      <div className="row g-4 p-4">
        <div className="col-3">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <button type="button" className="btn-close" aria-label="Close"></button>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <button type="button" className="btn-close" aria-label="Close"></button>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <button type="button" className="btn-close" aria-label="Close"></button>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
             <button type="button" className="btn-close" aria-label="Close"></button>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <button type="button" className="btn-close" aria-label="Close"></button>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UseEffectAPI