import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Stack,
  Grid,
  Rating,
  Avatar,
  CircularProgress,
  Alert,
  Divider,
  IconButton,
  Paper,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import StarIcon from '@mui/icons-material/Star';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        
        
        if (location.state?.product) {
          setProduct(location.state.product);
          setLoading(false);
          return;
        }

        
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        
        
        const transformedProduct = {
          id: data.id,
          name: data.title,
          price: data.price,
          category: data.category,
          stock: Math.floor(Math.random() * 100) + 1,
          status: Math.floor(Math.random() * 100) + 1 > 20 ? 'In Stock' : 
                  Math.floor(Math.random() * 100) + 1 > 5 ? 'Low Stock' : 'Out of Stock',
          rating: data.rating.rate,
          sales: Math.floor(Math.random() * 500) + 50,
          image: data.image,
          description: data.description,
        };
        
        setProduct(transformedProduct);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, location.state]);

  const handleBack = () => {
    navigate('/products');
  };

  const handleAddToCart = () => {

    console.log('Added to cart:', product);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
        <Button variant="contained" onClick={handleBack} startIcon={<ArrowBackIcon />}>
          Back to Products
        </Button>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="warning" sx={{ mb: 3 }}>
          Product not found
        </Alert>
        <Button variant="contained" onClick={handleBack} startIcon={<ArrowBackIcon />}>
          Back to Products
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
  
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ mb: 3 }}
      >
        Back to Products
      </Button>

      <Grid container spacing={4}>
    
        <Grid item xs={12} md={6}>
          <Card sx={{ overflow: 'hidden' }}>
            <CardMedia
              component="img"
              height="500"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: 'contain', p: 2 }}
            />
          </Card>
        </Grid>

     
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
        
            <Box>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                {product.name}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                <Chip label={product.category} color="primary" />
                <Chip
                  label={product.status}
                  color={
                    product.status === 'In Stock' ? 'success' :
                    product.status === 'Low Stock' ? 'warning' : 'error'
                  }
                />
              </Stack>
            </Box>

           
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                <Rating value={product.rating} precision={0.1} readOnly />
                <Typography variant="body2" color="text.secondary">
                  {product.rating} ({product.sales} reviews)
                </Typography>
              </Stack>
            </Box>

           
            <Box>
              <Typography variant="h3" fontWeight={700} color="primary">
                ${product.price}
              </Typography>
            </Box>

            
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Description
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {product.description}
              </Typography>
            </Box>

         
            <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <InventoryIcon />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Stock Available
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {product.stock} units
                  </Typography>
                </Box>
              </Stack>
            </Paper>

          
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
                onClick={handleAddToCart}
                disabled={product.status === 'Out of Stock'}
                sx={{ flex: 1 }}
              >
                {product.status === 'Out of Stock' ? 'Out of Stock' : 'Add to Cart'}
              </Button>
              <IconButton color="primary" size="large">
                <FavoriteIcon />
              </IconButton>
              <IconButton color="primary" size="large">
                <ShareIcon />
              </IconButton>
            </Stack>

            
            <Divider />
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Product Information
              </Typography>
              <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" color="text.secondary">
                    Category:
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {product.category}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" color="text.secondary">
                    Stock Status:
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {product.status}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2" color="text.secondary">
                    Total Sales:
                  </Typography>
                  <Typography variant="body2" fontWeight={500}>
                    {product.sales}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
