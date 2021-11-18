import axios from "axios";
import React, { useState } from "react";
import Alert from "./Alert";
import base_url from "./API/BaseUrl";


const AddBook = ({flag , showAlert , alert}) => {

    const [books, setBooks] = useState({});

    const handleSubmit = (e) => {
        console.log("handle submit....")
        e.preventDefault();
        flag !== true ? PostBooks(books) : UpdateBooks(books);
    }

    const PostBooks = (data) => {
        axios.post(`${base_url}/add`,data).then(
          (response) => {
            console.log(response.data);
            console.log("success")
            showAlert("Add Book Successfully !!","success")
          },
          (error) => {
            console.log(error);
            showAlert("Add Book Fail !!","danger")
            
          }
        );
      };

      const UpdateBooks = (data) => {
        axios.put(`${base_url}/update/${data.book_id}`,data).then(
          (response) => {
            console.log(response.data);
            console.log("success")
            showAlert("Update Book Successfully !!","success")
          },
          (error) => {
            console.log(error);
            showAlert("Update Book Fail !!","danger")
            
          }
        );
      };

  return (
    <>
    
      <div className="container">
        <div className="alert alert-info" role="alert" style={{marginTop:"70px"}}>
          <h4 className="text-center">
           { flag !== true ? <b>Add books to library here !!</b> : <b>Update books to library here !!</b>}
          </h4>
        </div>
        <Alert alert={alert}/> 
        <div
          className="card mx-auto"
          style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
        >
          <form className="mx-5 my-2 " onSubmit={handleSubmit}>
          { flag === true ?
            <div className="form-group">
              <label style={{fontWeight:"bold"}}>Book Id</label>
              <input
                type="text"
                className="form-control"
                id="book_id"
                placeholder="Enter book id"
                onChange={(e) => {
                    setBooks({...books,book_id : e.target.value});
                }}
              />
            </div>
            :
            null
            }
            <div className="form-group">
              <label style={{fontWeight:"bold"}}>Book Name</label>
              <input
                type="text"
                className="form-control"
                id="book_name"
                placeholder="Enter book name"
                onChange={(e) => {
                    setBooks({...books,book_name : e.target.value});
                }}
              />
            </div>
            <div className="form-group">
              <label style={{fontWeight:"bold"}}>Book Description</label>
              <textarea
                type="text"
                className="form-control"
                id="book_description"
                placeholder="Enter book description"
                rows={5}
                onChange={(e) => {
                    setBooks({...books,book_description : e.target.value});
                }}
              />
            </div>
            <div className="form-group">
              <label style={{fontWeight:"bold"}}>Book Author</label>
              <input
                type="text"
                className="form-control"
                id="book_author"
                placeholder="Enter book author"
                onChange={(e) => {
                    setBooks({...books,book_author : e.target.value});
                }}
              />
            </div>
            {flag !== true ? 
            <button type="submit" className="btn btn-primary">
              Add Book
            </button>
            :
            <button type="submit" className="btn btn-primary">
            Update Book
          </button>
            }
          </form>
        </div>
      </div>
  </>
  );
};

export default AddBook;
