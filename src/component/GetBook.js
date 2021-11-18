import axios from 'axios';
import React from 'react'
import base_url from './API/BaseUrl';

const GetBook = ({book, updatenew }) => {


    const deletebook =(id) => {
        axios.delete(`${base_url}/delete/${id}`).then(
            (response) => {
              console.log(response.data);
              updatenew(id);
            },
            (error) => {
              console.log(error);
            }
          );
    }

    return (
        
        <div className="container-fluid">
                <div className="card my-2" >
                    <div className="card-body">
                <h5 className="card-title">{book.book_name}</h5>
                <p className="card-text">{book.book_description}</p>
                <p className="card-text">{book.book_author}</p>
                
                <a href="/updatebook" className="btn btn-warning" >
                  Edit
                </a>
                <button  className="btn btn-danger mx-2" onClick={() => deletebook(book.book_id)}>
                  Delete 
                </button>
                </div>
                </div>
           </div>
    )
}

export default GetBook
