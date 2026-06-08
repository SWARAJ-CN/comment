import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  
  const [data, setdata] = useState([]); 
  const URL = "https://jsonplaceholder.typicode.com/comments";

  const dataFetch = async () => {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setdata(result);
      console.log(result);
       
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
    <nav className="navbar">
      <div>
        <p className="logo">COMMENT FINDER</p>
      </div>
    </nav>
    <div className="comments-container">
      {data.map((comment) => (
       
        <div className="comment-card" key={comment.id}>
          <div className="card-header">
           
            <div className="user-avatar">
              {comment.name ? comment.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="user-info">
              <h3 className="user-name">{comment.name}</h3>
              <a href={`mailto:${comment.email}`} className="user-email">
                {comment.email}
              </a>
            </div>
            <span className="meta-tag">Post #{comment.postId}</span>
          </div>
          <p className="card-body">{comment.body}</p>
          <div className="card-footer">
            <span className="comment-id">ID: {comment.id}</span>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default App;
