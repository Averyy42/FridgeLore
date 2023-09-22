import React, { useState } from "react";

interface CuisineDropdownProps {
  onChange: (selectedCuisines: string[]) => void;
}

const CuisineDropdown: React.FC<CuisineDropdownProps> = ({ onChange }) => {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [newCuisine, setNewCuisine] = useState<string>("");

  const handleSelectCuisine = (cuisine: string) => {
    if (!selectedCuisines.includes(cuisine)) {
      const updatedCuisines = [...selectedCuisines, cuisine];
      setSelectedCuisines(updatedCuisines);
      onChange(updatedCuisines);
    }
  };

  const handleRemoveCuisine = (cuisine: string) => {
    const updatedCuisines = selectedCuisines.filter((c) => c !== cuisine);
    setSelectedCuisines(updatedCuisines);
    onChange(updatedCuisines);
  };

  const handleNewCuisineInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewCuisine(e.target.value);
  };

  const handleAddNewCuisine = () => {
    if (newCuisine.trim() !== "") {
      handleSelectCuisine(newCuisine);
      setNewCuisine("");
    }
  };

  return (
    <div>
      <div>
        <select onChange={(e) => handleSelectCuisine(e.target.value)} value="">
          <option value="" disabled>
            Select a cuisine
          </option>
          <option value="Korean">Korean</option>
          <option value="Mexican">Mexican</option>
          <option value="Greek">Greek</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Jamaican">Jamaican</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>
      <ul>
        {selectedCuisines.map((cuisine) => (
          <li key={cuisine}>
            {cuisine}
            <button onClick={() => handleRemoveCuisine(cuisine)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add a new cuisine"
          value={newCuisine}
          onChange={handleNewCuisineInputChange}
        />
        <button onClick={handleAddNewCuisine}>Add</button>
      </div>
    </div>
  );
};

export default CuisineDropdown;
