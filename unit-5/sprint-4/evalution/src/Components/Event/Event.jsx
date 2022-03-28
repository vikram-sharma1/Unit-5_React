// This is an event details page which has its own route

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  // const [user, setUser] = useState({});

  // const checkLogin = () => {};

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = () => {
    axios.get(`http://localhost:8080/meetups/${id}`).then(({ data }) => {
      console.log(data);
      setEvent(data);
    });
  };

  // const subscribe = () =>{
  //   axios.patch(`http://localhost:8080/meetups/${id}`, ).then(({ data }) => {
  //     console.log(data);
  //     setEvent(data);
  //   });
  // }

  return (
    <div className="eventContainer">
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}
      <div className="title">
        {" "}
        <h1>{event.title}</h1>{" "}
      </div>
      <div className="theme">
        {" "}
        <h3>{event.theme}</h3>
      </div>
      <div className="description">
        {" "}
        <h3>{event.description}</h3>
      </div>
      <div className="date">
        {" "}
        <h3>{event.date}</h3>
      </div>
      <div className="time">
        <h3>{event.time}</h3>{" "}
      </div>
      <div className="location">
        {" "}
        <h3>{event.location}</h3>{" "}
      </div>
      <div className="image">
        {" "}
        <img src={event.image} alt="" />
      </div>

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
      <button className="unsubscribe">Unsubscribe</button>
      <button
        className="subscribe"
        onClick={() => {
          // subscribe();
        }}
      >
        Subscribe
      </button>
    </div>
  );
};
