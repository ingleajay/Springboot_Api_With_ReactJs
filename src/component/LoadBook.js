import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "./API/BaseUrl";
import GetBook from "./GetBook";


const LoadBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
      getAllBooks();
  },[]);

  const getAllBooks = () => {
    axios.get(`${base_url}/get`).then(
      (response) => {
        console.log(response.data);
        setBooks(response.data);
        
      },
      (error) => {
        console.log(error);
        
      }
    );
  };
  

  const afterdelete = (id) => {
      setBooks(books.filter((b) => b.book_id !== id))
  }
  

  return (
    <div className="container" >
      <div className="alert alert-warning " role="alert" style={{marginTop:"70px"}}>
        <h4 className="text-center">
          <b>All Available books to read out !!</b>
        </h4>
      </div>
     
        { books.length !== 0 ? 
        <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
          <div className="card-body">
        <div className="container">
          <div className="row" >
        {books.map((e) => {
          return (
            <div className="row" key={e.book_id}>
            <GetBook  book_id={e.book_id} updatenew={afterdelete} book={e}/>
            </div>
          );
        })}
        </div> 
        </div>
        </div>
    </div>
        : 
        <div className="alert alert-danger" role="alert">
        <h4 className="text-center">
          <b>No books available in library!!</b>
        </h4>
      </div>
        }
        </div>
     
  );
};

export default LoadBook;
