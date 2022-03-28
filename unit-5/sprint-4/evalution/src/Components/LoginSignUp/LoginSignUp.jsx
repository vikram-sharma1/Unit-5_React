import axios from "axios";
import { useForm } from "react-hook-form";

export const LoginSignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    let interests =[];
    if(data.culture){
      interests.push("culture")
    }
    if(data.art){
      interests.push("art")
    }
    if(data.food){
      interests.push("food")
    }
    if(data.movies){
      interests.push("movies")
    }
    if(data.technology){
      interests.push("technology")
    }
    let users={
      name: data.name,
      password: data.password,
      location : data.location,
      interests : interests,
      image : data.image
    }
    axios.post("http://localhost:8080/users",users);
    console.log("hello")
  

  axios.get("http://localhost:8080/users").then((res)=>{
    console.log(res.data)
  }).catch((err)=>{
    console.log(err)
  })
  
  }
  return (
    <div className="loginSignUp">
      <form className="signUp border border-dark m-3 p-2 " onSubmit={handleSubmit(onSubmit)}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
         
          {...register("name", { required: true, maxLength: 20 })} 
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
         
          {...register("password",{ required: true})} 
          required
        />
        <br />
        <select className="location" {...register("location",{ required: true})} >
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
          className="technology"
          {...register("technology")} 
        />
        <br />
        <label className="form-check-label">food</label>
        <input type="checkbox" className="food form-check-input" {...register("food")}  />
        <br />
        <label className="form-check-label">movies</label>
        <input type="checkbox" className="movies form-check-input" {...register("movies")} />
        <br />
        <label className="form-check-label">culture</label>
        <input type="checkbox" className="culture form-check-input" {...register("culture")} />
        <br />
        <label className="form-check-label">art</label>
        <input type="checkbox" className="art form-check-input" {...register("art")} />
        <br />
        <label className="form-check-label">drama</label>
        <input type="checkbox" className="drama form-check-input" {...register("drama")} />
        <br />
        <label className="">image</label>
        <input
          type="text"
          className="image"
          {...register("image")}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm btn btn-warning" />
      </form>
      <form className="login border border-dark m-3 p-2" onSubmit={(e) => { }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
         
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
         
          required
        />
        <br />
        <input type="submit" className="submitLoginForm btn btn-primary" />
      </form>
    </div>
  );
};