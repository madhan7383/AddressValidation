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

function App() {
  const initialData = [{
    input_website: "https://example.com",
    input_address: "123 Test St, Test City",
    input_phone: "123-456-7890",
    input_fax: "123-456-7891",
    input_email: "info@example.com",
    Status: ''
  }];

  const [csvData, setCsvData] = useState(initialData);

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

  return (
    <Container maxWidth="xl" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Address Verification Tool
      </Typography>

      <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto', marginTop: 3 }}>
        <Table size="small" sx={{ minWidth: 1200 }}>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Website URL</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Fax</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {csvData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.input_website}</TableCell>
                <TableCell>{row.input_address}</TableCell>
                <TableCell>{row.input_phone}</TableCell>
                <TableCell>{row.input_fax}</TableCell>
                <TableCell>{row.input_email}</TableCell>
                <TableCell>{row.Status}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    color="success" 
                    onClick={() => handleAccept(index)} 
                    sx={{ mr: 1 }}
                  >
                    Accept
                  </Button>
                  <Button 
                    variant="contained" 
                    color="error" 
                    onClick={() => handleReject(index)}
                  >
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;