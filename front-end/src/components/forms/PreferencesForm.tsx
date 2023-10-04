import { FormEvent, useState } from "react";
import AllergyDropdown from "../AllergyDropDown";
import CuisineDropdown from "../CuisineDropDown";
import { addIngredients } from "../../services/ingredientService";
import "../../styles/settingform.css";

function PreferencesForm() {
  const [allergies, setAllergies] = useState("");
  const [cuisine, setCuisine] = useState("");

  function createPreferences(event: FormEvent) {
    event.preventDefault();
    // const preference: Preference = {
    //   allergies,
    //   cuisine
    // };

    // const UserIngredients = {_id: email, ingredients: []}
    // addIngredients(UserIngredients)
    setAllergies("");
    setCuisine("");
  }
  const handleAllergyChange = (selectedAllergies: string[]) => {
    console.log("Selected Allergies:", selectedAllergies);
  };
  const handleCuisineChange = (selectedCuisines: string[]) => {
    console.log("Selected Cuisines:", selectedCuisines);
  };
  return (
    <div className="form-container-parent">
      <div className="form-container-child">
        <form className="Setting-Form" onSubmit={createPreferences}>
          <label htmlFor="Allergies">Allergies:</label>
          <AllergyDropdown onChange={handleAllergyChange} />
          <label htmlFor="Cuisine">Cuisine</label>
          <CuisineDropdown onChange={handleCuisineChange} />
          <br></br>
          <button type="submit">Change Preferences</button>
        </form>
      </div>
    </div>
  );
}
export default PreferencesForm;
