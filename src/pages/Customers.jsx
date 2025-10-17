import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Avatar,
  Chip,
  IconButton,
  InputAdornment,
  Stack,
  Paper,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
  });

  
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      // email: 'john.doe@example.com',
      phone: '+1 234 567 8900',
      company: 'Tech Corp',
      location: 'New York, USA',
      status: 'Active',
      orders: 24,
      totalSpent: '$12,450',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      // email: 'sarah.smith@example.com',
      phone: '+1 234 567 8901',
      company: 'Design Studio',
      location: 'Los Angeles, USA',
      status: 'Active',
      orders: 18,
      totalSpent: '$8,320',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      // email: 'michael.j@example.com',
      phone: '+1 234 567 8902',
      company: 'Marketing Inc',
      location: 'Chicago, USA',
      status: 'Inactive',
      orders: 12,
      totalSpent: '$5,670',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      name: 'Emily Brown',
      // email: 'emily.brown@example.com',
      phone: '+1 234 567 8903',
      company: 'Finance Co',
      location: 'Boston, USA',
      status: 'Active',
      orders: 31,
      totalSpent: '$15,890',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 5,
      name: 'David Wilson',
      // email: 'david.w@example.com',
      phone: '+1 234 567 8904',
      company: 'Consulting Group',
      location: 'San Francisco, USA',
      status: 'Active',
      orders: 27,
      totalSpent: '$13,240',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {      id: 6,
      name: 'Olivia Martinez',
      // email: 'olivia.m@example.com',
      phone: '+1 234 567 8905',
      company: 'IT Solutions',
      location: 'Seattle, USA',
      status: 'Inactive',
      orders: 9,
      totalSpent: '$4,230',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
  ]);

  const handleMenuClick = (event, customer) => {
    setAnchorEl(event.currentTarget);
    setSelectedCustomer(customer);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      location: '',
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCustomer = () => {
    const newCustomer = {
      id: customers.length + 1,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      location: formData.location,
      status: 'Active',
      orders: 0,
      totalSpent: '$0',
      avatar: `https://i.pravatar.cc/150?img=${customers.length + 1}`,
    };
    setCustomers([...customers, newCustomer]);
    handleCloseDialog();
  };

  const handleDeleteCustomer = () => {
    setCustomers(customers.filter(c => c.id !== selectedCustomer.id));
    handleMenuClose();
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Customer',
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar src={params.row.avatar} alt={params.row.name}>
            {params.row.name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight={600}>
              {params.row.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {params.row.email}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 0.8,
      minWidth: 150,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 0.8,
      minWidth: 150,
    },
    {
      field: 'location',
      headerName: 'Location',
      flex: 0.8,
      minWidth: 150,
    },
    {
      field: 'orders',
      headerName: 'Orders',
      width: 100,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'totalSpent',
      headerName: 'Total Spent',
      width: 120,
      align: 'right',
      headerAlign: 'right',
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.row.status}
          color={params.row.status === 'Active' ? 'success' : 'default'}
          size="small"
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 80,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      renderCell: (params) => (
        <IconButton
          size="small"
          onClick={(e) => handleMenuClick(e, params.row)}
        >
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
     
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Customers
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Manage your customer base and track their activity
        </Typography>
      </Box>

   
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 4 }}>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Total Customers
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  {customers.length}
                </Typography>
              </Box>
              <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                <PersonIcon />
              </Avatar>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Active Customers
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  {customers.filter(c => c.status === 'Active').length}
                </Typography>
              </Box>
              <Avatar sx={{ bgcolor: 'success.main', width: 56, height: 56 }}>
                <PersonIcon />
              </Avatar>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Total Revenue
                </Typography>
                <Typography variant="h4" fontWeight={700}>
                  $55,570
                </Typography>
              </Box>
              <Avatar sx={{ bgcolor: 'info.main', width: 56, height: 56 }}>
                <EmailIcon />
              </Avatar>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

     
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ sm: 'center' }}
        >
          <TextField
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1, maxWidth: { sm: 400 } }}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenDialog}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Add Customer
          </Button>
        </Stack>
      </Paper>

   
      <Paper sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredCustomers}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 25]}
          disableSelectionOnClick
          sx={{
            border: 'none',
            '& .MuiDataGrid-cell:focus': {
              outline: 'none',
            },
          }}
        />
      </Paper>

      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <EditIcon fontSize="small" sx={{ mr: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteCustomer} sx={{ color: 'error.main' }}>
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>

      
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Customer</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleAddCustomer}>
            Add Customer
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Customers;

