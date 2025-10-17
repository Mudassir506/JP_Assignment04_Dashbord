import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  Stack,
  Paper,
  Grid,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Avatar,
  CircularProgress,
  Alert,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: '',
  });


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
       
        const transformedProducts = data.map((product, index) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          category: product.category,
          stock: Math.floor(Math.random() * 100) + 1, 
          status: Math.floor(Math.random() * 100) + 1 > 20 ? 'In Stock' : 
                  Math.floor(Math.random() * 100) + 1 > 5 ? 'Low Stock' : 'Out of Stock',
          rating: product.rating.rate,
          sales: Math.floor(Math.random() * 500) + 50, 
          image: product.image,
          description: product.description,
        }));
        
        setProducts(transformedProducts);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleMenuClick = (event, product) => {
    setAnchorEl(event.currentTarget);
    setSelectedProduct(product);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewProduct = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setFormData({
      name: '',
      price: '',
      category: '',
      stock: '',
      description: '',
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

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: formData.name,
      price: parseFloat(formData.price),
      category: formData.category,
      stock: parseInt(formData.stock),
      status: parseInt(formData.stock) > 0 ? 'In Stock' : 'Out of Stock',
      rating: 0,
      sales: 0,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
      description: formData.description,
    };
    setProducts([...products, newProduct]);
    handleCloseDialog();
  };

  const handleDeleteProduct = () => {
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    handleMenuClose();
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalProducts = products.length;
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  const totalSales = products.reduce((sum, p) => sum + p.sales, 0);
  const lowStock = products.filter(p => p.stock > 0 && p.stock < 20).length;

  return (
    <Box style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
    
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom sx={{ 
          color: '#232f3e',
          fontSize: '1.75rem',
        }}>
          Products
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
          Showing {filteredProducts.length} products
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 5 }}>
        <Grid item xs={6} sm={3}>
          <Box sx={{ 
            p: 2, 
            bgcolor: '#f8f9fa', 
            borderRadius: 1,
            border: '1px solid #e0e0e0',
            textAlign: 'center'
            
          }}>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#232f3e' }}>
              {totalProducts}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Products
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box sx={{ 
            p: 2, 
            bgcolor: '#f8f9fa', 
            borderRadius: 1,
            border: '1px solid #e0e0e0',
            textAlign: 'center'
          }}>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#232f3e' }}>
              ${totalValue.toFixed(0)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Value
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box sx={{ 
            p: 2, 
            bgcolor: '#f8f9fa', 
            borderRadius: 1,
            border: '1px solid #e0e0e0',
            textAlign: 'center'
          }}>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#232f3e' }}>
              {totalSales}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Sales
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Box sx={{ 
            p: 2, 
            bgcolor: '#f8f9fa', 
            borderRadius: 1,
            border: '1px solid #e0e0e0',
            textAlign: 'center'
          }}>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#232f3e' }}>
              {lowStock}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Low Stock
            </Typography>
          </Box>
        </Grid>
      </Grid>

    
      <Box sx={{ 
        mb: 3,
        p: 2,
        bgcolor: '#f8f9fa',
        borderRadius: 1,
        border: '1px solid #e0e0e0',
      }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ sm: 'center' }}
        >
          <TextField
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#666' }} />
                </InputAdornment>
              ),
            }}
            sx={{ 
              flex: 1, 
              maxWidth: { sm: 400 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                bgcolor: 'white',
                '&:hover': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff6b35',
                  },
                },
              },
            }}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenDialog}
            sx={{ 
              whiteSpace: 'nowrap',
              py: 1,
              px: 2,
              borderRadius: 1,
              bgcolor: '#ff6b35',
              '&:hover': {
                bgcolor: '#e55a2b',
              }
            }}
          >
            Add Product
          </Button>
        </Stack>
      </Box>

 
      {loading && (
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          py: 8,
          height: '200px',
          width: '100%',
          gap: 2
        }}>
          <CircularProgress size={60} sx={{ color: 'primary.main' }} />
          <Typography variant="h6" color="text.secondary">
            Loading amazing products...
          </Typography>
        </Box>
      )}

  
      {error && (
        <Alert 
          severity="error" 
          sx={{ 
            mb: 4,
            borderRadius: 3,
            '& .MuiAlert-message': {
              fontSize: '1rem',
            }
          }}
        >
          {error}
        </Alert>
      )}

  
      {!loading && !error && (
        <Grid container spacing={3} sx={{ mt: 2, mb: 2, alignItems: 'stretch' }}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ display: 'flex' }}>
              <Card 
                sx={{ 
                  height: '450px', 
                  width: '100%',
                  maxWidth: '300px',
                  minWidth: '280px',
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 1,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    borderColor: '#ff6b35',
                  }
                }}
              >
              
                <Box sx={{ 
                  position: 'relative', 
                  overflow: 'hidden',
                  bgcolor: '#f8f9fa',
                  height: '220px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      objectFit: 'contain',
                      cursor: 'pointer',
                      width: '100%',
                      height: '220px',
                      maxHeight: '220px',
                      minHeight: '220px',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                    onClick={() => handleViewProduct(product)}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      bgcolor: 'rgba(255,255,255,0.9)',
                      borderRadius: '50%',
                      p: 0.5,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={(e) => handleMenuClick(e, product)}
                      sx={{ 
                        bgcolor: 'transparent',
                        '&:hover': {
                          bgcolor: 'rgba(0,0,0,0.04)',
                        }
                      }}
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                
               
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '230px',
                  minHeight: '230px',
                  maxHeight: '230px',
                  width: '100%',
                  '&:last-child': {
                    pb: 2
                  }
                }}>
                
                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 1,
                        fontSize: '0.875rem',
                        lineHeight: 1.4,
                        color: '#333',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        minHeight: '2.5rem',
                        flexGrow: 1
                      }}
                    >
                      {product.name}
                    </Typography>

                    <Stack direction="row" spacing={0.5} alignItems="center" mb={1}>
                      <Rating 
                        value={product.rating} 
                        precision={0.1} 
                        size="small" 
                        readOnly 
                        sx={{ 
                          '& .MuiRating-iconFilled': {
                            color: '#ffc107',
                            fontSize: '1rem',
                          },
                          '& .MuiRating-iconEmpty': {
                            color: '#ddd',
                            fontSize: '1rem',
                          }
                        }}
                      />
                      <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5, fontSize: '0.75rem' }}>
                        ({product.sales})
                      </Typography>
                    </Stack>

                    <Typography 
                      variant="h6" 
                      fontWeight={700} 
                      sx={{ 
                        mb: 1,
                        color: '#B12704',
                        fontSize: '1.125rem',
                      }}
                    >
                      ${product.price}
                    </Typography>

                    <Typography 
                      variant="caption" 
                      sx={{ 
                        mb: 2,
                        color: '#007185',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      ✓ Prime
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    onClick={() => handleViewProduct(product)}
                    fullWidth
                    sx={{ 
                      py: 1,
                      borderRadius: 1,
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      bgcolor: '#ff6b35',
                      '&:hover': {
                        bgcolor: '#e55a2b',
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

 
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { handleViewProduct(selectedProduct); handleMenuClose(); }}>
          <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
          View Details
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <EditIcon fontSize="small" sx={{ mr: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteProduct} sx={{ color: 'error.main' }}>
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>

      
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              label="Product Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              fullWidth
              required
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
            <TextField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              label="Stock Quantity"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={3}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleAddProduct}>
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Products;

