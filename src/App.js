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
    {
      "Unique_Id": "2505",
      "Company_Name": "CDH Investments",
      "Website_URL": "https://www.cdhfund.com/en/contact-en/",
      "Field_Type": "Email_Validation",
      "Input_Data": "cdh@cdhfund.com",
      "Extracted_Data": "",
      "Match_Score": "0",
      "Status": ""
    },
    {
      "Unique_Id": "2325",
      "Company_Name": "IDG Capital",
      "Website_URL": "https://en.idgcapital.com/contact-us",
      "Field_Type": "Address_Validation",
      "Input_Data": "6 Floor, Tower A, COFCO Plaza, 8 Jianguomennei Avenue",
      "Extracted_Data": "6 Floor, Tower A, COFCO Plaza 8 Jianguomennei Ave.",
      "Match_Score": "95",
      "Status": ""
    },
    {
      "Unique_Id": "2325",
      "Company_Name": "IDG Capital",
      "Website_URL": "https://en.idgcapital.com/contact-us",
      "Field_Type": "Phone_Validation",
      "Input_Data": "+86 10 8590 1800",
      "Extracted_Data": "86-10-8590-1800",
      "Match_Score": "77",
      "Status": ""
    },
    {
      "Unique_Id": "2325",
      "Company_Name": "IDG Capital",
      "Website_URL": "https://en.idgcapital.com/contact-us",
      "Field_Type": "Email_Validation",
      "Input_Data": "0",
      "Extracted_Data": "N/A",
      "Match_Score": "0",
      "Status": ""
    },
    {
      "Unique_Id": "1434",
      "Company_Name": "Oak Hill Capital",
      "Website_URL": "https://oakhill.com/firm/",
      "Field_Type": "Address_Validation",
      "Input_Data": "65 East 55th Street, 32nd Floor",
      "Extracted_Data": "65 East 55th Street 32nd Floor",
      "Match_Score": "98",
      "Status": ""
    },
    {
      "Unique_Id": "1434",
      "Company_Name": "Oak Hill Capital",
      "Website_URL": "https://oakhill.com/firm/",
      "Field_Type": "Phone_Validation",
      "Input_Data": "(212) 527-8400",
      "Extracted_Data": "212-527-8400",
      "Match_Score": "85",
      "Status": ""
    },
    {
      "Unique_Id": "1434",
      "Company_Name": "Oak Hill Capital",
      "Website_URL": "https://oakhill.com/firm/",
      "Field_Type": "Email_Validation",
      "Input_Data": "0",
      "Extracted_Data": "",
      "Match_Score": "0",
      "Status": ""
    },
    {
      "Unique_Id": "614",
      "Company_Name": "Strength Capital",
      "Website_URL": "https://www.strengthcapital.com/contact",
      "Field_Type": "Address_Validation",
      "Input_Data": "44 Cook Street, Suite #700",
      "Extracted_Data": "44 Cook Street, Suite #700",
      "Match_Score": "100",
      "Status": ""
    },
    {
      "Unique_Id": "614",
      "Company_Name": "Strength Capital",
      "Website_URL": "https://www.strengthcapital.com/contact",
      "Field_Type": "Phone_Validation",
      "Input_Data": "0",
      "Extracted_Data": "",
      "Match_Score": "0",
      "Status": ""
    },
    {
      "Unique_Id": "614",
      "Company_Name": "Strength Capital",
      "Website_URL": "https://www.strengthcapital.com/contact",
      "Field_Type": "Email_Validation",
      "Input_Data": "mark@strengthcapital.com",
      "Extracted_Data": "",
      "Match_Score": "0",
      "Status": ""
    },
    {
      "Unique_Id": "5710",
      "Company_Name": "Teak Capital",
      "Website_URL": "https://www.teakcapital.pt/about-us/",
      "Field_Type": "Address_Validation",
      "Input_Data": "Edifv?cio Oceanus, Avenida da Boavista, 3265 - 3.3",
      "Extracted_Data": "Avenida da Boavista, 3265 - 3.3",
      "Match_Score": "77",
      "Status": ""
    },
    {
      "Unique_Id": "5710",
      "Company_Name": "Teak Capital",
      "Website_URL": "https://www.teakcapital.pt/about-us/",
      "Field_Type": "Phone_Validation",
      "Input_Data": "+351 22 245 0710",
      "Extracted_Data": "+351 22 245 0710",
      "Match_Score": "100",
      "Status": ""
    },
    {
      "Unique_Id": "5710",
      "Company_Name": "Teak Capital",
      "Website_URL": "https://www.teakcapital.pt/about-us/",
      "Field_Type": "Email_Validation",
      "Input_Data": "info@teakcapital.pt",
      "Extracted_Data": "info@teakcapital.pt",
      "Match_Score": "100",
      "Status": ""
    },
    {
      "Unique_Id": "3337",
      "Company_Name": "Noro-Moseley Partners",
      "Website_URL": "https://noromoseley.com/contact-us/",
      "Field_Type": "Address_Validation",
      "Input_Data": "The Medici Building, 3284 Northside Parkway, Northwest, Suite 525",
      "Extracted_Data": "3284 Northside Parkway, NW Suite 525",
      "Match_Score": "69",
      "Status": ""
    },
    {
      "Unique_Id": "3337",
      "Company_Name": "Noro-Moseley Partners",
      "Website_URL": "https://noromoseley.com/contact-us/",
      "Field_Type": "Phone_Validation",
      "Input_Data": "(404) 233-1966",
      "Extracted_Data": "404.233.1966",
      "Match_Score": "77",
      "Status": ""
    },
    {
      "Unique_Id": "3337",
      "Company_Name": "Noro-Moseley Partners",
      "Website_URL": "https://noromoseley.com/contact-us/",
      "Field_Type": "Email_Validation",
      "Input_Data": "0",
      "Extracted_Data": "",
      "Match_Score": "0",
      "Status": ""
    }
  ];

  const [csvData, setCsvData] = useState(initialData);

  const handleAccept = (index) => {
    const updated = [...csvData];
    updated[index].Status = 'Accepted';
    setCsvData(updated);
  };

  const handleModify = (index) => {
    const updated = [...csvData];
    updated[index].Status = 'Modified';
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
                    onClick={() => handleModify(index)}
                  >
                    Modify
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