import React, { useState } from 'react';

const AddEventForm = ({ addEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    startLocalTime: '',
    endLocalTime: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    attractionNames: [],
    imageURL: '',
    placeName: '',
    tmID: '',
    genreClassifications: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;  //that is, the key name and value of the input field
    setFormData({ ...formData, [name]: value }); //copy the existing form data and update the changed fields
  };

  const handleSubmit = (e) => {  // here we first add a new event to the database with the values from the form, and then reset those values
    e.preventDefault();
    // Validate form data here maybe? (e.g., check required fields)
    // If validation passes, call addEvent with formData
    addEvent(formData);
    // Reset form data after submission
    setFormData({
      name: '',
      date: '',
      startLocalTime: '',
      endLocalTime: '',
      description: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      attractionNames: [],
      imageURL: '',
      placeName: '',
      tmID: '',
      genreClassifications: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />

      <label>Start Local Time:</label>
      <input type="time" name="startLocalTime" value={formData.startLocalTime} onChange={handleChange} required />

      <label>End Local Time:</label>
      <input type="time" name="endLocalTime" value={formData.endLocalTime} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required />

      {/* Add more fields as needed */}

      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
