import { useState } from "react";
import { useDispatch } from "react-redux";

import { createPlant } from "../features/plants/plantSlice";
const PlantForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(createPlant({ name }));
    setName("");
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Plant Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Plant
          </button>
        </div>
      </form>
    </section>
  );
};

export default PlantForm;
