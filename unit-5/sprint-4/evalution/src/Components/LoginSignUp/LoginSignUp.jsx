import {useState} from 'react'
import {nanoid} from 'nanoid'
import axios from 'axios';



export const LoginSignUp = () => {

  const [checked, setChecked] = useState([]);
const [form, setForm] = useState({
  id:nanoid(),
  name:"",
  password:"",
  location:"",
  interests:"",
  iamge:""

})

const handleChange = (event) => {
  const {id, value} = event.target
  setForm({...form, [id]:value})
}

const handleCheckbox = (event) => {
  var updatedList = [...checked]
  if(event.target.checked){
    updatedList = [...checked, event.target.checked]
  }
  else{
    updatedList.splice(checked.indexOf(event.target.value),1)
  }
  setChecked(updatedList)
}

const handleSubmit = (e) => {
  e.preventDefault()

  axios.post("http://localhost:8080/users", form).then(
    alert("user is created successfully"),
    setForm({
      id:"",
      name:"",
      password:"",
      location:"",
      interests:"",
      iamge:""
    })
  )
}

const handleSubmitLogin = (err) => {
  e.preventDefault()
}



  return (
    <div className="loginSignUp">
      <form className="signUp" 
      onSubmit={(e) => {
        handleSubmit(e)
       }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          id={"name"}
          onChange={(event) => { 
            handleChange(event)
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
            handleChange(event)
          }}
          required
        />
        <br />
        <select value={""} className="location" 
          id={"location"}
        onChange={(event) => {
          handleChange(event)
         }}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          id="interests"
          value="technology"
          className="technology"
          onChange={(event) => { 
            handleCheckbox(event)
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
          handleCheckbox(event)
         }} />
        <br />
        <label>movies</label>
        <input 
        type="checkbox" 
        id="interests"
         value="movies"
        className="movies" 
        onChange={(event) => { 
          handleCheckbox(event)
        }} />
        <br />
        <label>culture</label>
        <input 
        type="checkbox" 
        className="culture"
        id="interests"
        value="culture"
         onChange={(event) => {
          handleCheckbox(event)
          }} />
        <br />
        <label>art</label>
        <input 
        type="checkbox" 
        className="art" 
        id="interests"
        value="art" 
        onChange={(event) => {
          handleCheckbox(event)

         }} />
        <br />
        <label>drama</label>
        <input 
        type="checkbox" 
        className="drama" 
        id="interests"
        value="drama" 
        onChange={(event) => { 
          handleCheckbox(event)

        }} />
        <br />
        <label>image</label>
        <input
          type="text"
          value={form.image}
          id="image"
          className="image"
          onChange={(event) => {
          handleCheckbox(event)

           }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form 
      className="login" 
      onSubmit={(e) => { 
        handleSubmitLogin(e)
      }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          id='name'
          className="name"
          onChange={(event) => { }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          id='password'
          className="password"
          onChange={(event) => { }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
