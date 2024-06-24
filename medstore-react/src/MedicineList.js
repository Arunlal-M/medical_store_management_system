// MedicineList.js
import React, { useState, useEffect } from 'react';
import EditMedicineForm from './EditMedicineForm';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [editingMedicineId, setEditingMedicineId] = useState(null);

  useEffect(() => {
    // Fetch the list of medicines from your API
    fetch('your-api-endpoint/medicines')
      .then((response) => response.json())
      .then((data) => setMedicines(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`your-api-endpoint/medicines/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setMedicines(medicines.filter((medicine) => medicine.id !== id));
      } else {
        const data = await response.json();
        alert(data.message); // Display error message from API
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred, please try again');
    }
  };

  const handleEdit = (id) => {
    setEditingMedicineId(id);
  };

  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            <div>Name: {medicine.name}</div>
            <div>Price: {medicine.price}</div>
            <div>Description: {medicine.description}</div>
            {editingMedicineId === medicine.id ? (
              <EditMedicineForm
                medicine={medicine}
                onUpdateMedicine={(updatedMedicine) => {
                  setMedicines(medicines.map((m) =>
                    m.id === updatedMedicine.id ? updatedMedicine : m
                  ));
                  setEditingMedicineId(null);
                }}
              />
            ) : (
              <>
                <button onClick={() => handleEdit(medicine.id)}>Edit</button>
                <button onClick={() => handleDelete(medicine.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
