// User should be able to add/create new meetups

import { nanoid } from "nanoid";
import { useState } from "react";
import axios from "axios";

export const AddMeetup = () => {
  const [form, setForm] = useState({
    id: nanoid(),
    title: "",
    location: "",
    date: "",
    time: "",
    theme: "",
    description: "",
    image: "",
  });
  const handleSubmit = (event) => {
    // setId(form.id);
    event.preventDefault();
    //axios
    // console.log("id", id);
    axios.post("http://localhost:8080/meetups", form).then(
      alert("user is created successfully"),
      setForm({
        id: "",
        title: "",
        location: "",
        date: "",
        time: "",
        theme: "",
        description: "",
        image: "",
      })
    );
  };
  const handleChange = (event) => {
    const { id, value } = event.target; // note
    setForm({ ...form, [id]: value });
  };
  return (
    <div className="addMeetupContainer">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <h1>Add Meetup</h1>
        <label>title</label>
        <input
          type="text"
          id="title"
          value={form.title}
          className="title"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <label>Location</label>
        <select
          value={form.location}
          id="location"
          className="location"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          value={form.date}
          id="date"
          className="date"
          onChange={(event) => {
            handleChange(event);
          }}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          value={form.time}
          id="time"
          className="time"
          onChange={(event) => {
            handleChange(event);
          }}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select
          value={form.theme}
          id="theme"
          className="theme"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          value={form.description}
          id="description"
          className="description"
          onChange={(event) => {
            handleChange(event);
          }}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          value={form.image}
          id="image"
          className="image"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
