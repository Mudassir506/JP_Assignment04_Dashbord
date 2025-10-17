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
  Grid,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PendingIcon from '@mui/icons-material/Pending';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  
  const [orders] = useState([
    {
      id: 1,
      orderNumber: 'ORD-001234',
      customer: 'John Doe',
      // email: 'john.doe@example.com',
      date: '2024-10-12',
      total: 234.50,
      status: 'Delivered',
      items: 3,
      payment: 'Credit Card',
    },
    {
      id: 2,
      orderNumber: 'ORD-001235',
      customer: 'Sarah Smith',
      // email: 'sarah.smith@example.com',
      date: '2024-10-13',
      total: 459.99,
      status: 'Shipped',
      items: 2,
      payment: 'PayPal',
    },
    {
      id: 3,
      orderNumber: 'ORD-001236',
      customer: 'Michael Johnson',
      // email: 'michael.j@example.com',
      date: '2024-10-13',
      total: 129.00,
      status: 'Processing',
      items: 1,
      payment: 'Credit Card',
    },
    {
      id: 4,
      orderNumber: 'ORD-001237',
      customer: 'Emily Brown',
      // email: 'emily.brown@example.com',
      date: '2024-10-14',
      total: 789.50,
      status: 'Pending',
      items: 5,
      payment: 'Bank Transfer',
    },
    {
      id: 5,
      orderNumber: 'ORD-001238',
      customer: 'David Wilson',
      // email: 'david.w@example.com',
      date: '2024-10-14',
      total: 324.99,
      status: 'Delivered',
      items: 2,
      payment: 'Credit Card',
    },
    {
      id: 6,
      orderNumber: 'ORD-001239',
      customer: 'Lisa Anderson',
      // email: 'lisa.a@example.com',
      date: '2024-10-14',
      total: 199.00,
      status: 'Cancelled',
      items: 1,
      payment: 'PayPal',
    },
    {
      id: 7,
      orderNumber: 'ORD-001240',
      customer: 'James Taylor',
      // email: 'james.t@example.com',
      date: '2024-10-15', 
      total: 599.99,
      status: 'Shipped',
      items: 3,
      payment: 'Credit Card',
    },
    { id: 8,
      orderNumber: 'ORD-001241',
      customer: 'Olivia Martinez',
      // email: 'olivia.m@example.com',
      date: '2024-10-15',
      total: 149.50,
      status: 'Delivered',
      items: 1,
      payment: 'PayPal',
    },
  ]);

  const handleMenuClick = (event, order) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrder(order);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'success';
      case 'Shipped':
        return 'info';
      case 'Processing':
        return 'warning';
      case 'Pending':
        return 'default';
      case 'Cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircleIcon fontSize="small" />;
      case 'Shipped':
        return <LocalShippingIcon fontSize="small" />;
      case 'Processing':
      case 'Pending':
        return <PendingIcon fontSize="small" />;
      case 'Cancelled':
        return <CancelIcon fontSize="small" />;
      default:
        return null;
    }
  };

  const columns = [
    {
      field: 'orderNumber',
      headerName: 'Order Number',
      flex: 0.8,
      minWidth: 130,
      renderCell: (params) => (
        <Typography variant="body2" fontWeight={600} color="primary">
          {params.row.orderNumber}
        </Typography>
      ),
    },
    {
      field: 'customer',
      headerName: 'Customer',
      flex: 1,
      minWidth: 180,
      renderCell: (params) => (
        <Box>
          <Typography variant="body2" fontWeight={600}>
            {params.row.customer}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {params.row.email}
          </Typography>
        </Box>
      ),
    },
    {
      field: 'date',
      headerName: 'Order Date',
      flex: 0.7,
      minWidth: 120,
    },
    {
      field: 'items',
      headerName: 'Items',
      width: 80,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 120,
      align: 'right',
      headerAlign: 'right',
      renderCell: (params) => (
        <Typography variant="body2" fontWeight={600}>
          ${params.row.total.toFixed(2)}
        </Typography>
      ),
    },
    {
      field: 'payment',
      headerName: 'Payment',
      flex: 0.7,
      minWidth: 120,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      renderCell: (params) => (
        <Chip
          icon={getStatusIcon(params.row.status)}
          label={params.row.status}
          color={getStatusColor(params.row.status)}
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

  const filteredOrders = orders.filter((order) =>
    order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const deliveredOrders = orders.filter(o => o.status === 'Delivered').length;
  const pendingOrders = orders.filter(o => o.status === 'Pending' || o.status === 'Processing').length;

  return (
    <Box sx={{ p: 3 }}>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Orders
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Track and manage customer orders
        </Typography>
      </Box>

    
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Total Orders
                  </Typography>
                  <Typography variant="h4" fontWeight={700}>
                    {totalOrders}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                  <ShoppingCartIcon />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Total Revenue
                  </Typography>
                  <Typography variant="h4" fontWeight={700}>
                    ${totalRevenue.toFixed(2)}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'success.main', width: 56, height: 56 }}>
                  <AttachMoneyIcon />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Delivered
                  </Typography>
                  <Typography variant="h4" fontWeight={700}>
                    {deliveredOrders}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'info.main', width: 56, height: 56 }}>
                  <CheckCircleIcon />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Pending
                  </Typography>
                  <Typography variant="h4" fontWeight={700}>
                    {pendingOrders}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'warning.main', width: 56, height: 56 }}>
                  <PendingIcon />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      
      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField
          placeholder="Search orders by order number, customer name, or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Paper>

    
      <Paper sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredOrders}
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
          <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
          View Details
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <LocalShippingIcon fontSize="small" sx={{ mr: 1 }} />
          Track Shipment
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          <CancelIcon fontSize="small" sx={{ mr: 1 }} />
          Cancel Order
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Orders;

