import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { userLogin } from "./";

export const Home = () => {
  const [arr, setArr] = useState([]);

  const dispatch = useDispatch();

  const { checkUser } = useSelector((store) => store.user);

  // const updateUser = () => {
  //   if (checkUser.name != undefined) {
  //     dispatch;
  //   }
  // };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`http://localhost:8080/meetups`).then(({ data }) => {
      setArr([...data]);
    });
  };

  return (
    <div className="homeContainer">
      {arr
        .filter((el) => {}) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={``} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"} // add value here
            onChange={(e) => {}}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addmeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {arr.map((el) => {
            return (
              <Link to={`/meetup/${el.id}`} className="events">
                {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                <br />
                {el.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
