import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"


export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const {id} = useParams()


  const [book,setBook] = useState({})
  const [found,setFound] = useState(true)

  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setBook(res.data)
      setFound(true)
    }).catch((error)=>{
      setFound(false)
    })
  }
  
  console.log("book",book);

  return (
    <>
      <div className="bookContainer" style={{textAlign: 'center'}}>
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.imageUrl} alt="#" />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          
        </ul>
      </div>          
    </>
  );
};
