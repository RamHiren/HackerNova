import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Ip = () => {
  const [ifscCode, setIfscCode] = useState("");
  const [bankDetails, setBankDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch bank details by IFSC code
  const fetchBankDetails = async () => {
    if (!ifscCode) {
      setError("Please enter a valid IFSC code");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiUrl = `http://localhost:3000/api/tools/ifsc?ifscCode=${ifscCode}`; // API URL to fetch bank details

      const response = await fetch(apiUrl);

      // Check if response is OK and contains JSON data
      if (!response.ok) {
        throw new Error("Failed to fetch bank details");
      }

      // Ensure the response is JSON
      const data = await response.json();

      setBankDetails(data); // Set the fetched bank details to state
    } catch (err) {
      console.error("Error fetching bank details:", err.message);
      setError(err.message); // Handle errors
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  const handleSearch = () => {
    fetchBankDetails();
  };

  const handleClose = () => {
    setBankDetails(null); // Clears the bank details to close the modal
  };

  return (
    <div className="container">
      <div className="inner">
        <h1 className="text-white">IFSC Code Search</h1>
        <img
          src="/images/additionaltools/ifsc.png"
          alt="IFSC logo"
          height={250}
          width={250}
        />
        <p className="centered-text">
          Effortlessly get details by IFSC codes for any bank branch with our
          IFSC Code Search tool.
        </p>
        <input
          placeholder="Example : SBIN0000691"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
        />
        <button className="buttons" onClick={handleSearch}>
          <FaSearch /> &nbsp; Search
        </button>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {bankDetails && (
          <BankDetailsDisplay data={bankDetails} onClose={handleClose} />
        )}
      </div>
    </div>
  );
};

// Bank Details Modal
const BankDetailsDisplay = ({ data, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h3 className="bank-title">Bank Details</h3>
        <div className="bank-card">
          <div className="bank-details">
            {/* Display the fetched bank details here */}
            <div className="bank-row">
              <span className="bank-label">Branch:</span>
              <span className="bank-value">{data?.BRANCH || "N/A"}</span>
            </div>
            <div className="bank-row">
              <span className="bank-label">Bank:</span>
              <span className="bank-value">{data?.BANK || "N/A"}</span>
            </div>
            <div className="bank-row">
              <span className="bank-label">Address:</span>
              <span className="bank-value">{data?.ADDRESS || "N/A"}</span>
            </div>
            {/* Add other bank details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ip;
