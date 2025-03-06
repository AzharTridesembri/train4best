import { useState } from 'react';
import { 
  Box,
  Typography,
  TextField,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import ReceiptIcon from '@mui/icons-material/Receipt';

const PaymentReport = () => {
  const [paymentFilter, setPaymentFilter] = useState('all');
  
  const paymentData = [
    {
      id: 1,
      name: 'Ilham Ramadhan',
      date: '01-02-2024',
      paymentMethod: 'Transfer Bank',
      referenceNumber: 'TRF-20240108-001',
      amount: 'Rp. 1.000.000,-',
      status: 'Paid'
    },
    // ... data lainnya
  ];

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">Payment Report</Typography>
        
        <Box display="flex" gap={2}>
          <Select
            size="small"
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            sx={{ width: 200 }}
          >
            <MenuItem value="all">All Payments</MenuItem>
            <MenuItem value="paid">Paid</MenuItem>
            <MenuItem value="unpaid">Unpaid</MenuItem>
          </Select>

          <Button 
            variant="outlined" 
            startIcon={<PrintIcon />}
          >
            Print File
          </Button>

          <TextField
            size="small"
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              )
            }}
          />
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Tanggal</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Nomor Referensi</TableCell>
              <TableCell>Jumlah (idr)</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell>{row.referenceNumber}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      bgcolor: row.status === 'Paid' ? '#E8F5E9' : '#FFEBEE',
                      color: row.status === 'Paid' ? '#2E7D32' : '#C62828',
                      py: 0.5,
                      px: 2,
                      borderRadius: 1,
                      display: 'inline-block'
                    }}
                  >
                    {row.status}
                  </Box>
                </TableCell>
                <TableCell>
                  <IconButton size="small">
                    <ReceiptIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaymentReport; 