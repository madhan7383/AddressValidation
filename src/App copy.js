// src/App.js
import React, { useState } from 'react';
import {
  Button,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Papa from 'papaparse';

function App() {
  const [csvData, setCsvData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,             // ✅ Use headers
        skipEmptyLines: true,
        complete: (result) => {
          const withStatus = result.data.map((row) => ({ ...row, Status: '' }));
          setCsvData(withStatus);
        },
      });
    }
  };

  const handleAccept = (index) => {
    const updated = [...csvData];
    updated[index].Status = 'Accepted';
    setCsvData(updated);
  };

  const handleReject = (index) => {
    const updated = [...csvData];
    updated[index].Status = 'Rejected';
    setCsvData(updated);
  };
  const handleReject = (index) => {
    const updated = [...csvData];
    updated[index].Status = 'Rejected';
    setCsvData(updated);
  };

  const handleAcceptAll = () => {
    const updated = csvData.map(row => ({ ...row, Status: 'Accepted' }));
    setCsvData(updated);
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: 4 }}>
  <Typography variant="h4" align="center" gutterBottom>
    AI-Powered Address Verification Tool
  </Typography>

  <input type="file" accept=".csv" onChange={handleFileChange} style={{ marginBottom: '20px' }} />

  {csvData.length > 0 && (
    <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }}>
      <Table size="small" sx={{ minWidth: 1200 }}>
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            <TableCell>Unique_Id</TableCell>
            <TableCell>Company_Name</TableCell>
            <TableCell>Website_URL</TableCell>
            <TableCell>Field_Type</TableCell>
            <TableCell>Input_Data</TableCell>
            <TableCell>Extracted_Data</TableCell>
            <TableCell>Match_Score</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {csvData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.Unique_Id}</TableCell>
              <TableCell>{row.Company_Name}</TableCell>
              <TableCell>{row.Website_URL}</TableCell>
              <TableCell>{row.Field_Type}</TableCell>
              <TableCell>{row.Input_Data}</TableCell>
              <TableCell>{row.Extracted_Data}</TableCell>
              <TableCell>{row.Match_Score}</TableCell>
              <TableCell>{row.Status}</TableCell>
              <TableCell>
                <Button variant="contained" color="success" onClick={() => handleAccept(index)} sx={{ mr: 1 }}>
                  Accept
                </Button>
                <Button variant="contained" color="error" onClick={() => handleReject(index)}>
                  Modify
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
</Container>

  );
}

export default App;
