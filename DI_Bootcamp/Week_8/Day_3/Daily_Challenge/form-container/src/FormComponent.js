import React from 'react';

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="radio"
        name="gender"
        value="male"
        checked={formData.gender === 'male'}
        onChange={handleChange}
      /> Male
      <input
        type="radio"
        name="gender"
        value="female"
        checked={formData.gender === 'female'}
        onChange={handleChange}
      /> Female
      <select name="destination" value={formData.destination} onChange={handleChange}>
        <option value="">-- Choose Destination --</option>
        <option value="Japan">Japan</option>
        <option value="Australia">Australia</option>
        <option value="New Zealand">New Zealand</option>
      </select>
      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        /> Lactose Free
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
