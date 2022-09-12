import React, { useState, useEffect } from 'react'

const UseEffectAPI = (props) => {

  // function MyComponent() {
  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  //   const [items, setItems] = useState([]);
  
  //   // Note: the empty deps array [] means
  //   // this useEffect will run once
  //   // similar to componentDidMount()
  //   useEffect(() => {
  //     fetch("https://randomuser.me/api/")
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           setIsLoaded(true);
  //           setItems(result);
  //         },
  //         // Note: it's important to handle errors here
  //         // instead of a catch() block so that we don't swallow
  //         // exceptions from actual bugs in components.
  //         (error) => {
  //           setIsLoaded(true);
  //           setError(error);
  //         }
  //       )
  //   }, [])
  
  //   if (error) {
  //     return <div>Error: {error.message}</div>;
  //   } else if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   } else {
  //     return (
  //       <ul>
  //         {items.map(item => (
  //           <li key={item.id}>
  //             {item.name} {item.price}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  // const [data, setData] = useState([]);

  // const getUsers = async () => {
  //   const response = await fetch('https://randomuser.me/');
  //   const data = await response.json();
  //   console.log(data);
  // }

  // const [data, setData] = useState([]);
  // const getUsers = () => {
  //   fetch("https://randomuser.me/api/")
  //   .then(response => responce.json())
  //   .then(data => setData(data));
  //   console.log(data);  
  // }

  // useEffect(() => {
  //   getUsers();
  // })
  // const data = MyComponent;

  return (
    <>
      {/* {data} */}
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