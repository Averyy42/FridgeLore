import React, { useState } from "react";

interface AllergyDropdownProps {
  onChange: (selectedAllergies: string[]) => void;
}

const AllergyDropdown: React.FC<AllergyDropdownProps> = ({ onChange }) => {
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [newAllergy, setNewAllergy] = useState<string>("");

  const handleSelectAllergy = (allergy: string) => {
    if (!selectedAllergies.includes(allergy)) {
      const updatedAllergies = [...selectedAllergies, allergy];
      setSelectedAllergies(updatedAllergies);
      onChange(updatedAllergies);
    }
  };

  const handleRemoveAllergy = (allergy: string) => {
    const updatedAllergies = selectedAllergies.filter((a) => a !== allergy);
    setSelectedAllergies(updatedAllergies);
    onChange(updatedAllergies);
  };

  const handleNewAllergyInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewAllergy(e.target.value);
  };

  const handleAddNewAllergy = () => {
    if (newAllergy.trim() !== "") {
      handleSelectAllergy(newAllergy);
      setNewAllergy("");
    }
  };

  return (
    <div>
      <div>
        <select onChange={(e) => handleSelectAllergy(e.target.value)} value="">
          <option value="" disabled>
            Select an allergy
          </option>
          <option value="peanuts">Peanuts</option>
          <option value="shellfish">Shellfish</option>
          <option value="soy">Soy</option>
          <option value="tree nut">Tree Nut</option>
        </select>
      </div>
      <ul>
        {selectedAllergies.map((allergy) => (
          <li key={allergy}>
            {allergy}
            <button onClick={() => handleRemoveAllergy(allergy)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add a new allergy"
          value={newAllergy}
          onChange={handleNewAllergyInputChange}
        />
        <button onClick={handleAddNewAllergy}>Add</button>
      </div>
    </div>
  );
};

export default AllergyDropdown;
