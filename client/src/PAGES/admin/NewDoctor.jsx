import React, { useState } from 'react';
import styled from 'styled-components';
import { pinata } from '../../config';
import api from '../../API/api';

// Styled Components for blue and white theme
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const FormWrapper = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Title = styled.h2`
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
  grid-column: span 3;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #333;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  grid-column: span 3;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  grid-column: span 3;
  color: red;
  text-align: center;
`;

const SuccessMessage = styled.p`
  grid-column: span 3;
  color: green;
  text-align: center;
`;

const NewDoctor = () => {
  const [doctorData, setDoctorData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    wallet: '',
    hospital: '',
    verification: '',
    dept: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await pinata.pinFileToIPFS(formData); // Pin the file to IPFS
      const cid = response.data.IpfsHash; // Get the IPFS CID

      setDoctorData({ ...doctorData, verification: cid });
      console.log('CID:', cid);
    } catch (error) {
      console.error('Error uploading to IPFS:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/admin/new-doc', doctorData);

      if (response.data.status) {
        const { id } = response.data;
        console.log('Doctor ID:', id);

        setSuccess('Doctor registered successfully!');
        setDoctorData({
          name: '',
          email: '',
          phone: '',
          address: '',
          wallet: '',
          hospital: '',
          verification: '',
          dept: ''
        });

        window.location.href = '/admin/dashboard';
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Error occurred while registering the doctor');
      console.error('Error:', error);
    }
  };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Register Doctor</Title>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <InputGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={doctorData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={doctorData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Phone</Label>
          <Input
            type="tel"
            name="phone"
            value={doctorData.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Address</Label>
          <Input
            type="text"
            name="address"
            value={doctorData.address}
            onChange={handleInputChange}
            placeholder="Enter address"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Wallet Address</Label>
          <Input
            type="text"
            name="wallet"
            value={doctorData.wallet}
            onChange={handleInputChange}
            placeholder="Enter wallet address"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Hospital</Label>
          <Input
            type="text"
            name="hospital"
            value={doctorData.hospital}
            onChange={handleInputChange}
            placeholder="Enter hospital name"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Department</Label>
          <Input
            type="text"
            name="dept"
            value={doctorData.dept}
            onChange={handleInputChange}
            placeholder="Enter department"
            required
          />
        </InputGroup>

        <InputGroup>
          <Label>Verification Document (MBBS Certificate, Joining Letter)</Label>
          <Input type="file" onChange={handleFileChange} required />
          <Button type="button" onClick={handleFileUpload}>
            Upload to IPFS
          </Button>
        </InputGroup>

        <Button type="submit">Register Doctor</Button>
      </FormWrapper>
    </FormContainer>
  );
};

export default NewDoctor;
