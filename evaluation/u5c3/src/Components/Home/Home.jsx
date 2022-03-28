import axios from "axios";
import { useState,useEffect } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components"

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below

  const [book,setBook] =useState([]);

  useEffect(()=>{
    getBooks()
  },[])

  const getBooks = () => {
    axios.get("http://localhost:8080/books").then((res)=>{
      console.log(res.data)
      setBook([...res.data])
    })
  }

  const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    text-Align: center;
  `;

  function AscTitle(a,b){
    if(a.title <b.title){
      return -1;
    }
    if(a.title>b.title){
      return 1;
    }
    return 0
  }

  const SortAscArticle=()=>{
    let results = book.sort(AscTitle);
    setBook([...results])
  };

  function DescTitle(a,b){
    if(a.title <b.title){
      return 1;
    }
    if(a.title>b.title){
      return -1;
    }
    return 0
  }
  const SortDescArticle=()=>{
    let results = book.sort(DescTitle);
    setBook([...results])
  };

  function DescPrice(a,b){
    if(+a.price <+b.price){
      return 1;
    }
    if(+a.price>+b.price){
      return -1;
    }
    return 0
  }
  const SortDescPrice=()=>{
    let results = book.sort(DescPrice);
    setBook([...results])
  };

  function AscPrice(a,b){
    if(+a.price>+b.price){
      return 1;
    }
    if(+a.price<+b.price){
      return -1;
    }
    return 0
  }
  const SortAscPrice=()=>{
    let results = book.sort(AscPrice);
    setBook([...results])
  };

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={SortAscArticle}
        class_name= {"sortByTitleAsc"}
        buttonName= {"sortByTitleAsc"}
      />
      <SortAndFilterButtons
        handleSort={SortDescArticle}
        class_name= {"sortByTitleDesc"}
        buttonName= {"sortByTitleDesc"}
      />
      <SortAndFilterButtons
        handleSort={SortAscPrice}
        class_name= {"sortByPriceAsc"}
        buttonName= {"sortByPriceAsc"}
      />
      <SortAndFilterButtons
        handleSort={SortDescPrice}
        class_name= {"sortByPriceDesc"}
        buttonName= {"sortByPriceDesc"}
      />

      <Main className="mainContainer">
        {
          book.map((el)=>{
            return(
              <BookCard
                key={el.id}
                id={el.id}
                imageUrl = {el.imageUrl}
                title = {el.title}
                price = {el.price}
              />
            );
          })
        }
      </Main>
    </div>
  );
};
