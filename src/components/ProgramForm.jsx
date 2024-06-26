import React, { useState, useEffect } from 'react';
import { useUserContext } from '../UserContext';

import './ProgramsDashboard.css'; 

const ProgramForm = ({ program, onCreateProgram, onUpdateProgram, onDeleteProgram ,availableDomains ,ownerUsername,isEditMode}) => {
  // const [formData, setFormData] = useState(program || {});
  const [formData, setFormData] = useState({});

  const { user } = useUserContext();

  useEffect(() => {
    setFormData(program || {});
  }, [program]);


  
  const handleSave = () => {
    
    console.log(user);
    // setFormData({ ...formData, ownerUsername: user?.username || '' });
    const programData = { ...formData, ownerUsername }; // Include ownerUsername in the data

    if (formData && formData.id) {
      onUpdateProgram(programData);
    } else {
      onCreateProgram(programData);
    }
    
  };
  

  const handleDelete = () => {
    if (formData && formData.id) {
      onDeleteProgram(formData.id);
    } else {
      console.error("Cannot delete program without an ID");
    }
    
  };
  const handleUpdate = () => {
    handleSave();
  };
  
  

  return (
    <div className="program-form-container" >
      <h2>Programs Form</h2>
      <label>Name:*</label>
      <input type="text" value={formData?.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

      <label>Price:*</label>
      <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />

      <label>Domain:*</label>
      <input type="text" value={formData.domain} onChange={(e) => setFormData({ ...formData, domain: e.target.value })}/>
        
       <label>Owner Username:</label>
      <input
        type="text"
        value={user.username} onChange={(e) => setFormData({ ...formData, ownerUsername: e.target.value })}
        
        disabled // Disable editing
      />

      <label>Type:*</label>
      <input type="text" value={formData.programType || ''} onChange={(e) => setFormData({ ...formData, programType: e.target.value })}/>

      <label>Registrations:*</label>
      <select value={formData.registrations} onChange={(e) => setFormData({ ...formData, registrations: e.target.value })}>
      <option value="null">---Select---</option>
        <option value="open">Open</option>
        <option value="closed">Closed</option>
      </select>

      <label>Description:*</label>
      <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>

      <label>Placement Assurance:*</label>
      <select value={formData.placementAssurance} onChange={(e) => setFormData({ ...formData, placementAssurance: e.target.value })}>
        <option value="null">---Select---</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>

      <label>Image URL:*</label>
      <input type="text" value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} />

      <label>University Name:*</label>
      <input type="text" value={formData.universityName} onChange={(e) => setFormData({ ...formData, universityName: e.target.value })} />

      <label>Faculty Profile:*</label>
      <input type="text" value={formData.facultyProfile} onChange={(e) => setFormData({ ...formData, facultyProfile: e.target.value })} />

      <label>Learning Hours:*</label>
      <input type="number" value={formData.learningHours} onChange={(e) => setFormData({ ...formData, learningHours: e.target.value })} />

      <label>Duration:*</label>
      <input type="text" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} />

      <label>Certificate/Diploma:*</label>
      <input type="text" value={formData.certificate} onChange={(e) => setFormData({ ...formData, certificate: e.target.value })} />

      <label>Eligibility Criteria:*</label>
      <textarea value={formData.eligibilityCriteria} onChange={(e) => setFormData({ ...formData, eligibilityCriteria: e.target.value })}></textarea>

      <button onClick={handleSave} style={{marginTop:'20px', maxWidth:'100px'}}>Save</button>
      <button onClick={handleDelete} style={{margin:'10px', maxWidth:'100px'}}>Delete</button>
      {formData && formData.id && (
        <button onClick={handleUpdate} style={{margin:'0px', maxWidth:'100px'}}>Update</button>
      )}
    </div>
  );
};

export default ProgramForm;
