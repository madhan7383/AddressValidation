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
  const initialData = [
    {
      "Unique_Id": "2505",
      "Company_Name": "CDH Investments",
      "Website_URL": "https://www.cdhfund.com/en/contact-en/",
      "Field_Type": "Address_Validation",
      "Input_Data": "25/F, Fortune Financial Center, 5 Dong San Huan Central Road, Chaoyang District",
      "Extracted_Data": "5 Dong San Huan Central Road, Chaoyang District",
      "Match_Score": "75",
      "Status": ""
    },
    {
      "Unique_Id": "2505",
      "Company_Name": "CDH Investments",
      "Website_URL": "https://www.cdhfund.com/en/contact-en/",
      "Field_Type": "Phone_Validation",
      "Input_Data": "+86 10 8507 6998",
      "Extracted_Data": "",
      "Match_Score": "0",
      "Status": ""
    },
    // ... continuing with all the data from your CSV file
    {
      "Unique_Id": "4955",
      "Company_Name": "Hunter Valley Company",
      "Website_URL": "https://www.huntervalleyco.com/contact",
      "Field_Type": "Email_Validation",
      "Input_Data": "info@huntervalleyco.com",
      "Extracted_Data": "ocolligan@huntervalleyco.com",
      "Match_Score": "82",
      "Status": ""
    }
  ];

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
              <TableCell>Unique ID</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Website URL</TableCell>
              <TableCell>Field Type</TableCell>
              <TableCell>Input Data</TableCell>
              <TableCell>Extracted Data</TableCell>
              <TableCell>Match Score</TableCell>
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