import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Web3 from 'web3';
import {abi} from '../../abi'
// Smart contract details (replace with your actual contract ABI and address)
const contractAddress = '0x2Ea64dAc8cd5E51E75c3273C2F8C152218002cE5'; // Replace with your contract address


const ScannerLogin = () => {
  const { id } = useParams(); // Get the prescription ID from the URL
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [prescription, setPrescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFulfilled, setIsFulfilled] = useState(false);

  // Initialize Web3 and contract instance
  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' }); // Request access to accounts
          const accounts = await web3Instance.eth.getAccounts();
          const contractInstance = new web3Instance.eth.Contract(abi, contractAddress);

          setWeb3(web3Instance);
          setContract(contractInstance);
          setAccount(accounts[0]); // Set the user's account
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('No Ethereum wallet detected.');
      }
    };

    initWeb3();
  }, []);

  // Fetch prescription details
  useEffect(() => {
    const fetchPrescription = async () => {
      if (contract && id) {
        try {
          const prescriptionData = await contract.methods.getPrescription(id).call();
          setPrescription({
            prescriptionId: prescriptionData[0].toString(),
            userId: prescriptionData[1],
            timestamp: new Date(parseInt(prescriptionData[2]) * 1000), // Convert Unix timestamp
            description: prescriptionData[3],
            dept: prescriptionData[4].toString(),
            medicines: prescriptionData[5],
            documents: prescriptionData[6],
            allergies: prescriptionData[7],
            isFulfilled: prescriptionData[8]
          });
          setIsFulfilled(prescriptionData[8]); // Track if the prescription is already fulfilled
        } catch (error) {
          console.error('Error fetching prescription:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPrescription();
  }, [contract, id]);

  // Function to fulfill the prescription
  const fulfillPrescription = async () => {
    if (contract && account && id) {
      try {
        await contract.methods.fulfillPrescription(id).send({ from: account });
        alert('Prescription fulfilled successfully.');
        setIsFulfilled(true); // Update state to show that the prescription is fulfilled
      } catch (error) {
        console.error('Error fulfilling prescription:', error);
        alert('Error fulfilling prescription. Make sure you have the correct role and are connected to the network.');
      }
    }
  };

  if (loading) {
    return <div>Loading prescription details...</div>;
  }

  if (!prescription) {
    return <div>Prescription not found.</div>;
  }

  return (
    <div>
      <h2>Prescription Details for ID: {prescription.prescriptionId}</h2>
      <div>
        <strong>User ID:</strong> {prescription.userId}
      </div>
      <div>
        <strong>Timestamp:</strong> {prescription.timestamp.toString()}
      </div>
      <div>
        <strong>Description:</strong> {prescription.description}
      </div>
      <div>
        <strong>Department:</strong> {prescription.dept}
      </div>
      <div>
        <strong>Medicines:</strong> {prescription.medicines.join(', ')}
      </div>
      <div>
        <strong>Allergies:</strong> {prescription.allergies.length > 0 ? prescription.allergies.join(', ') : 'None'}
      </div>
      <div>
        <strong>Documents:</strong> 
        <ul>
          {prescription.documents.map((doc, index) => (
            <li key={index}>
              <a href={`https://ipfs.io/ipfs/${doc}`} target="_blank" rel="noopener noreferrer">
                Document {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Status:</strong> {isFulfilled ? 'Fulfilled' : 'Not Fulfilled'}
      </div>

      {/* Fulfill Prescription Button */}
      {!isFulfilled && (
        <button onClick={fulfillPrescription}>Update Prescription as Fulfilled</button>
      )}
    </div>
  );
};

export default ScannerLogin;
