import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from "@mui/x-data-grid";

function StatCard({ title, value, change, changeType, icon, color, gradient }) {
  const isPositive = changeType === "positive";

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          transform: "translateY(-8px)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background:
            gradient || `linear-gradient(135deg, ${color} 0%, ${color} 100%)`,
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2.5}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 3,
                background:
                  gradient ||
                  `linear-gradient(135deg, ${color}15 0%, ${color}30 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: color,
                backdropFilter: "blur(10px)",
                boxShadow: `0 4px 16px ${color}15`,
              }}
            >
              {icon}
            </Box>
            <Box
              sx={{
                px: 1.5,
                py: 0.75,
                borderRadius: 2,
                bgcolor: isPositive ? "#10b98108" : "#ef444408",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {isPositive ? (
                <TrendingUpIcon sx={{ fontSize: 18, color: "#10b981" }} />
              ) : (
                <TrendingDownIcon sx={{ fontSize: 18, color: "#ef4444" }} />
              )}
              <Typography
                variant="caption"
                fontWeight="700"
                sx={{ color: isPositive ? "#10b981" : "#ef4444" }}
              >
                {change}
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" fontWeight="800" sx={{ color: "text.primary" }}>
              {value}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function DashboardContent() {
  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title="Total Revenue"
            value="$48,574"
            change="+14.5%"
            changeType="positive"
            icon={<AttachMoneyIcon sx={{ fontSize: 32 }} />}
            color="#10b981"
            gradient="linear-gradient(135deg, #10b98120 0%, #10b98140 100%)"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title="Total Orders"
            value="1,856"
            change="+9.3%"
            changeType="positive"
            icon={<ShoppingCartIcon sx={{ fontSize: 32 }} />}
            color="#3b82f6"
            gradient="linear-gradient(135deg, #3b82f620 0%, #3b82f640 100%)"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title="New Customers"
            value="1,234"
            change="-2.4%"
            changeType="negative"
            icon={<PersonAddIcon sx={{ fontSize: 32 }} />}
            color="#f59e0b"
            gradient="linear-gradient(135deg, #f59e0b20 0%, #f59e0b40 100%)"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <StatCard
            title="Products Sold"
            value="4,892"
            change="+18.2%"
            changeType="positive"
            icon={<InventoryIcon sx={{ fontSize: 32 }} />}
            color="#8b5cf6"
            gradient="linear-gradient(135deg, #8b5cf620 0%, #8b5cf640 100%)"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Box>
                  <Typography variant="h6" fontWeight="800" gutterBottom>
                    Revenue Overview
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monthly revenue trends for 2024
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ borderRadius: 2, textTransform: "none" }}
                  >
                    Monthly
                  </Button>
                  <Button
                    size="small"
                    sx={{ borderRadius: 2, textTransform: "none" }}
                  >
                    Yearly
                  </Button>
                </Stack>
              </Stack>
              <Box sx={{ width: "100%", height: 320 }}>
                <LineChart
                  xAxis={[
                    {
                      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                      scaleType: "point",
                      label: "Month",
                    },
                  ]}
                  series={[
                    {
                      data: [
                        4000, 5200, 4800, 6100, 5900, 7200, 6800, 7500, 8200,
                        7900, 8900, 9200,
                      ],
                      area: true,
                      color: "#667eea",
                      label: "Revenue",
                    },
                  ]}
                  height={320}
                  margin={{ top: 10, right: 10, bottom: 40, left: 60 }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="800" gutterBottom>
                Sales by Category
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                Product distribution
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 280,
                }}
              >
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 35, label: "Electronics", color: "#667eea" },
                        { id: 1, value: 28, label: "Clothing", color: "#764ba2" },
                        { id: 2, value: 22, label: "Food", color: "#10b981" },
                        { id: 3, value: 15, label: "Others", color: "#f59e0b" },
                      ],
                      innerRadius: 50,
                      outerRadius: 100,
                      paddingAngle: 2,
                      cornerRadius: 5,
                    },
                  ]}
                  height={280}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </Box>
              <Stack spacing={2} mt={2}>
                {[
                  { label: "Electronics", value: "35%", color: "#667eea" },
                  { label: "Clothing", value: "28%", color: "#764ba2" },
                  { label: "Food", value: "22%", color: "#10b981" },
                  { label: "Others", value: "15%", color: "#f59e0b" },
                ].map((item) => (
                  <Stack
                    key={item.label}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <FiberManualRecordIcon
                        sx={{ fontSize: 12, color: item.color }}
                      />
                      <Typography variant="body2">{item.label}</Typography>
                    </Stack>
                    <Typography variant="body2" fontWeight="700">
                      {item.value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} lg={8}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="800" gutterBottom>
                Recent Orders
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                Latest customer orders
              </Typography>
              <Box sx={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={[
                    {
                      id: 1,
                      order: "#ORD-2024-001",
                      customer: "John Doe",
                      product: "Wireless Headphones",
                      amount: "$129.99",
                      status: "Delivered",
                      date: "2024-01-15",
                    },
                    {
                      id: 2,
                      order: "#ORD-2024-002",
                      customer: "Sarah Smith",
                      product: "Smart Watch",
                      amount: "$299.99",
                      status: "Shipped",
                      date: "2024-01-14",
                    },
                    {
                      id: 3,
                      order: "#ORD-2024-003",
                      customer: "Mike Johnson",
                      product: "Laptop",
                      amount: "$1,299.99",
                      status: "Processing",
                      date: "2024-01-14",
                    },
                    {
                      id: 4,
                      order: "#ORD-2024-004",
                      customer: "Emily Brown",
                      product: "Keyboard",
                      amount: "$89.99",
                      status: "Delivered",
                      date: "2024-01-13",
                    },
                    {
                      id: 5,
                      order: "#ORD-2024-005",
                      customer: "David Wilson",
                      product: "Mouse",
                      amount: "$49.99",
                      status: "Shipped",
                      date: "2024-01-12",
                    },
                  ]}
                  columns={[
                    {
                      field: "order",
                      headerName: "Order ID",
                      flex: 1,
                      minWidth: 140,
                    },
                    {
                      field: "customer",
                      headerName: "Customer",
                      flex: 1,
                      minWidth: 130,
                    },
                    {
                      field: "product",
                      headerName: "Product",
                      flex: 1,
                      minWidth: 150,
                    },
                    {
                      field: "amount",
                      headerName: "Amount",
                      width: 120,
                    },
                    {
                      field: "status",
                      headerName: "Status",
                      width: 130,
                      renderCell: (params) => (
                        <Chip
                          label={params.value}
                          size="small"
                          color={
                            params.value === "Delivered"
                              ? "success"
                              : params.value === "Shipped"
                              ? "info"
                              : "warning"
                          }
                        />
                      ),
                    },
                    {
                      field: "date",
                      headerName: "Date",
                      width: 120,
                    },
                  ]}
                  pageSizeOptions={[5, 10]}
                  disableRowSelectionOnClick
                  sx={{
                    border: "none",
                    "& .MuiDataGrid-cell:focus": {
                      outline: "none",
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="800" gutterBottom>
                Order Statistics
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                Order status breakdown
              </Typography>
              <Stack spacing={3}>
                {[
                  {
                    icon: <LocalShippingIcon />,
                    label: "Shipped",
                    value: "245",
                    color: "#3b82f6",
                    percent: "45%",
                  },
                  {
                    icon: <PaymentIcon />,
                    label: "Processing",
                    value: "189",
                    color: "#f59e0b",
                    percent: "35%",
                  },
                  {
                    icon: <ShoppingCartIcon />,
                    label: "Delivered",
                    value: "108",
                    color: "#10b981",
                    percent: "20%",
                  },
                ].map((item) => (
                  <Box key={item.label}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            background: `${item.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.color,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="body2" fontWeight="600">
                            {item.label}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.value} orders
                          </Typography>
                        </Box>
                      </Stack>
                      <Typography variant="h6" fontWeight="700" color={item.color}>
                        {item.percent}
                      </Typography>
                    </Stack>
                    <Box
                      sx={{
                        width: "100%",
                        height: 8,
                        borderRadius: 1,
                        bgcolor: "#f1f5f9",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: item.percent,
                          height: "100%",
                          bgcolor: item.color,
                          borderRadius: 1,
                          transition: "width 0.3s ease",
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

