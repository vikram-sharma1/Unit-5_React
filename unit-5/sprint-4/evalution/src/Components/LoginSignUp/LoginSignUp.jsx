import { useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

export const LoginSignUp = () => {
  const [checked, setChecked] = useState([]);
  const [name, setName] = useState("");

  const [pw, setPw] = useState("");
  const [arr, setArr] = useState([]);
  const [loginArr, setLoginArr] = useState([]);
  const [login, setLogin] = useState({});
  const [form, setForm] = useState({
    id: nanoid(),
    name: "",
    password: "",
    location: "",
    interests: "",
    image: "",
    subscribed: [],
  });
  // const [id, setId] = useState("");

  //handleChange
  const handleChange = (event) => {
    const { id, value } = event.target; // note
    setForm({ ...form, [id]: value });
  };

  //handleCheckbox
  const handleCheckbox = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const handleSubmit = (e) => {
    // setId(form.id);
    e.preventDefault();
    //axios
    // console.log("id", id);
    axios.post("http://localhost:8080/users", form).then(
      alert("user is created successfully"),
      setForm({
        id: "",
        name: "",
        password: "",
        location: "",
        interests: "",
        image: "",
      })
    );

    console.log(checked);
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    //axios
    axios.get(`http://localhost:8080/users`).then(({ data }) => {
      setArr([...data]);
    });
    let result = arr.filter((el) => {
      return el.name == name && el.password == pw;
    });
    setLoginArr([...result]);
    setLogin(loginArr[0]);
    // console.log(loginArr[0]);
    // console.log([...result]);
    console.log("login", login);
    localStorage.setItem("userLoginDetails", JSON.stringify(login));
  };

  return (
    <div className="loginSignUp">
      <form
        className="signUp"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          id={"name"}
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          id={"password"}
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <select
          value={""}
          id={"location"}
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
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          id="interests"
          value="technology"
          className="technology"
          onChange={(event) => {
            handleCheckbox(event);
          }}
        />
        <br />
        <label>food</label>
        <input
          type="checkbox"
          id="interests"
          value="food"
          className="food"
          onChange={(event) => {
            handleCheckbox(event);
          }}
        />
        <br />
        <label>movies</label>
        <input
          type="checkbox"
          id="interests"
          value="movies"
          className="movies"
          onChange={(event) => {
            handleCheckbox(event);
          }}
        />
        <br />
        <label>culture</label>
        <input
          type="checkbox"
          id="interests"
          value="culture"
          className="culture"
          onChange={(event) => {
            handleCheckbox(event);
          }}
        />
        <br />
        <label>art</label>
        <input
          type="checkbox"
          id="interests"
          value="art"
          className="art"
          onChange={(event) => {
            handleCheckbox(event);
          }}
        />
        <br />
        <label>drama</label>
        <input
          type="checkbox"
          id="interests"
          value="drama"
          className="drama"
          onChange={(event) => {
            handleCheckbox(event);
          }}
        />
        <br />
        <label>image</label>
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
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form
        className="login"
        onSubmit={(e) => {
          handleSubmitLogin(e);
        }}
      >
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          id="name"
          className="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          id="password"
          className="password"
          onChange={(event) => {
            setPw(event.target.value);
          }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
