import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import codeStore from '../../store/codeStore';
import '../styles/styles.css';

const AddCodePage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleAdd = () => {
    codeStore.addCode(name);
    navigate('/');
  };

  return (
    <div className="addCode-container">
      <input
        className="addCode-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Code Name"
      />
      <button className="addCode-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddCodePage;
