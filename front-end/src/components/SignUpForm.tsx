import { FormEvent, useState } from "react";
import { Login } from "../models/Login";
import "../styles/signupform.css"
import AllergyDropdown from "./AllergyDropDown";
import CuisineDropdown from "./CuisineDropDown";

function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allergies, setAllergies] = useState(false);
    const [cuisine, setCuisine] = useState(false);
    
    
  function createAccount(event: FormEvent) {
    event.preventDefault();
    const login: Login = {
        email,
        password: ""
    };
    setEmail("");
    setPassword("");
}
 const handleAllergyChange = (selectedAllergies: string[]) => {
    console.log('Selected Allergies:', selectedAllergies);
 }
 const handleCuisineChange = (selectedCuisines: string[]) => {
    console.log('Selected Cuisines:', selectedCuisines);
 }
  return (
    <div className="form-container-parent">
      <div className="form-container-child">
        <form className="SignUp-Form" onSubmit={createAccount}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <label htmlFor="Allergies">Allergies:</label>
          <AllergyDropdown onChange={handleAllergyChange} />
          <label htmlFor="Cuisine">Cuisine</label>
          <CuisineDropdown onChange={handleCuisineChange} />
          <br></br>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
export default SignUpForm;