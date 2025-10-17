import * as React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import TaskIcon from "@mui/icons-material/Task";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from "@mui/x-data-grid";
import { Route } from "@mui/icons-material";

const drawerWidth = 280;

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
              }}
            >
              {icon}
            </Box>
            <Chip
              size="small"
              icon={isPositive ? <TrendingUpIcon /> : <TrendingDownIcon />}
              label={change}
              color={isPositive ? "success" : "error"}
              sx={{
                fontWeight: 700,
                fontSize: "0.75rem",
                height: 28,
              }}
            />
          </Stack>
          <Box>
            <Typography
              variant="h4"
              fontWeight="800"
              gutterBottom
              sx={{ color: "text.primary" }}
            >
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight={500}>
              {title}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const [selectedMenu, setSelectedMenu] = React.useState("Dashboard");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { icon: <DashboardIcon />, label: "Dashboard" },
    // { icon: <AssessmentIcon />, label: "Analytics" },
    { icon: <PeopleIcon />, label: "Customers" },
    { icon: <ShoppingCartIcon />, label: "Orders" },
    { icon: <InventoryIcon />, label: "Products" },
    // { icon: <TaskIcon />, label: "Tasks" },
    { icon: <SettingsIcon />, label: "GitHub Finder" },
  ];

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ p: 3 }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2.5,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <DashboardIcon sx={{ color: "white", fontSize: 28 }} />
          </Box>
          <Box>
            <Typography variant="h6" fontWeight="800" sx={{ color: "white" }}>
              AdminPro
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        <Typography
          variant="caption"
          sx={{
            px: 2,
            py: 1.5,
            display: "block",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            letterSpacing: 1.2,
            fontWeight: 700,
            fontSize: "0.7rem",
          }}
        >
        </Typography>
        <List sx={{ mt: 1 }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.label}
              selected={selectedMenu === item.label}
              onClick={() => setSelectedMenu(item.label)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                py: 1.25,
                color: "rgba(255,255,255,0.7)",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.12)",
                  color: "white",
                  transform: "translateX(4px)",
                },
                "&.Mui-selected": {
                  bgcolor: "rgba(255,255,255,0.18)",
                  color: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.22)",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: 42 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          ))}
        </List>
        <Card
          sx={{
            mt: 3,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 3,
          }}
        >
        </Card>
      </Box>
      <Box sx={{ p: 2, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar
            sx={{
              width: 44,
              height: 44,
              background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
              fontWeight: 700,
              border: "2px solid rgba(255,255,255,0.2)",
            }}
          >
            RC
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="body2"
              fontWeight="700"
              sx={{ color: "white" }}
            >
              Riley Carter
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.6)" }}
            >
              Admin
            </Typography>
          </Box>
          <IconButton
            size="small"
            sx={{
              color: "white",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <MoreVertIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8fafc" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "4px 0 24px rgba(0,0,0,0.12)",
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, minHeight: "100vh" }}>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            bgcolor: "white",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Toolbar sx={{ gap: 2, py: 1.5 }}>
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h5"
                fontWeight="800"
                color="text.primary"
                sx={{ lineHeight: 1.2 }}
              >
                Dashboard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
              </Typography>
            </Box>

            <TextField
              size="small"
              placeholder="Search anything..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: 320,
                display: { xs: "none", lg: "block" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2.5,
                  bgcolor: "#f8fafc",
                  "&:hover": {
                    bgcolor: "#f1f5f9",
                  },
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
            />

            <IconButton
              sx={{
                bgcolor: "#f8fafc",
                "&:hover": { bgcolor: "#e2e8f0" },
              }}
            >
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              sx={{
                bgcolor: "#f8fafc",
                "&:hover": { bgcolor: "#e2e8f0" },
              }}
            >
              <CalendarTodayIcon />
            </IconButton>

            <Avatar
              sx={{
                width: 44,
                height: 44,
                cursor: "pointer",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "2px solid #e2e8f0",
                fontWeight: 700,
              }}
            >
              RC
            </Avatar>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
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
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
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
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
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
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
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
            <Grid size={{ xs: 12, lg: 8 }}>
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
                        sx={{ borderRadius: 2 }}
                      >
                        Week
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{ borderRadius: 2 }}
                      >
                        Month
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        sx={{ borderRadius: 2 }}
                      >
                        Year
                      </Button>
                    </Stack>
                  </Stack>
                  <LineChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                      },
                    ]}
                    series={[
                      {
                        data: [
                          28000, 32000, 35000, 39000, 42000, 45000, 44000,
                          47000, 51000, 54000, 57000, 61000,
                        ],
                        color: "#667eea",
                        area: true,
                        curve: "natural",
                        label: "Revenue",
                      },
                    ]}
                    height={380}
                    margin={{ left: 70, right: 20, top: 20, bottom: 40 }}
                    grid={{ horizontal: true, vertical: false }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
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
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    Product category breakdown
                  </Typography>
                  <PieChart
                    series={[
                      {
                        data: [
                          {
                            id: 0,
                            value: 38,
                            label: "Electronics",
                            color: "#667eea",
                          },
                          {
                            id: 1,
                            value: 28,
                            label: "Fashion",
                            color: "#764ba2",
                          },
                          { id: 2, value: 18, label: "Home", color: "#f093fb" },
                          {
                            id: 3,
                            value: 12,
                            label: "Sports",
                            color: "#4facfe",
                          },
                          {
                            id: 4,
                            value: 4,
                            label: "Others",
                            color: "#43e97b",
                          },
                        ],
                        innerRadius: 65,
                        outerRadius: 105,
                        paddingAngle: 3,
                        cornerRadius: 6,
                      },
                    ]}
                    height={320}
                    slotProps={{
                      legend: {
                        direction: "column",
                        position: { vertical: "bottom", horizontal: "left" },
                        padding: { top: 20 },
                        itemMarkWidth: 12,
                        itemMarkHeight: 12,
                        markGap: 8,
                        itemGap: 10,
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
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
                    Sales Performance
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={3}>
                    Monthly sales vs target comparison
                  </Typography>
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                      },
                    ]}
                    series={[
                      {
                        data: [42000, 48000, 45000, 58000, 55000, 62000],
                        label: "Sales",
                        color: "#667eea",
                      },
                      {
                        data: [38000, 42000, 40000, 48000, 45000, 52000],
                        label: "Target",
                        color: "#f093fb",
                      },
                    ]}
                    height={320}
                    margin={{ left: 70, right: 20, top: 20, bottom: 40 }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
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
                    Recent Activity
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={3}>
                    Latest updates and transactions
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      {
                        title: "New order received",
                        description: "Order #ORD-2024-1234 from John Doe",
                        time: "2 min ago",
                        icon: <ShoppingCartIcon />,
                        color: "#10b981",
                      },
                      {
                        title: "Payment processed",
                        description: "$3,250 payment received",
                        time: "15 min ago",
                        icon: <PaymentIcon />,
                        color: "#3b82f6",
                      },
                      {
                        title: "Product restocked",
                        description: "iPhone 15 Pro - 50 units added",
                        time: "1 hour ago",
                        icon: <InventoryIcon />,
                        color: "#8b5cf6",
                      },
                      {
                        title: "Order shipped",
                        description: "Order #ORD-2024-1230 dispatched",
                        time: "2 hours ago",
                        icon: <LocalShippingIcon />,
                        color: "#f59e0b",
                      },
                      {
                        title: "New customer",
                        description: "Sarah Smith registered",
                        time: "3 hours ago",
                        icon: <PersonAddIcon />,
                        color: "#06b6d4",
                      },
                    ].map((activity, index) => (
                      <Stack
                        key={index}
                        direction="row"
                        spacing={2}
                        sx={{
                          p: 2,
                          borderRadius: 2.5,
                          bgcolor: "#f8fafc",
                          border: "1px solid",
                          borderColor: "divider",
                          transition: "all 0.2s",
                          "&:hover": {
                            bgcolor: "#f1f5f9",
                            borderColor: activity.color,
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 2,
                            bgcolor: `${activity.color}15`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            color: activity.color,
                          }}
                        >
                          {activity.icon}
                        </Box>
                        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                          <Typography variant="body2" fontWeight="700" noWrap>
                            {activity.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            noWrap
                          >
                            {activity.description}
                          </Typography>
                        </Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ flexShrink: 0, alignSelf: "center" }}
                        >
                          {activity.time}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Card
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Box>
                      <Typography variant="h6" fontWeight="800">
                        Top Selling Products
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Best performers this month
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                    >
                      View All Products
                    </Button>
                  </Stack>
                  <Box sx={{ height: 420, width: "100%", mt: 2,overflowY: 'hidden' }}>
                    <DataGrid
                      rows={[
                        {
                          id: 1,
                          product: "iPhone 15 Pro Max 256GB",
                          category: "Electronics",
                          price: "$1,199",
                          sales: 287,
                          revenue: "$344,013",
                          status: "In Stock",
                          stock: 45,
                        },
                        {
                          id: 2,
                          product: "Samsung Galaxy S24 Ultra",
                          category: "Electronics",
                          price: "$1,099",
                          sales: 234,
                          revenue: "$257,166",
                          status: "In Stock",
                          stock: 38,
                        },
                        {
                          id: 3,
                          product: 'MacBook Pro M3 14"',
                          category: "Electronics",
                          price: "$1,999",
                          sales: 198,
                          revenue: "$395,802",
                          status: "In Stock",
                          stock: 22,
                        },
                        {
                          id: 4,
                          product: "Nike Air Max 2024",
                          category: "Fashion",
                          price: "$189",
                          sales: 176,
                          revenue: "$33,264",
                          status: "Low Stock",
                          stock: 8,
                        },
                        {
                          id: 5,
                          product: "Sony WH-1000XM5 Headphones",
                          category: "Electronics",
                          price: "$399",
                          sales: 165,
                          revenue: "$65,835",
                          status: "In Stock",
                          stock: 31,
                        },
                      ]}
                      columns={[
                        {
                          field: "product",
                          headerName: "Product Name",
                          flex: 1,
                          minWidth: 220,
                          renderCell: (params) => (
                            <Typography variant="body2" fontWeight={600}>
                              {params.value}
                            </Typography>
                          ),
                        },
                        {
                          field: "category",
                          headerName: "Category",
                          width: 130,
                        },
                        {
                          field: "price",
                          headerName: "Price",
                          width: 110,
                          renderCell: (params) => (
                            <Typography
                              variant="body2"
                              fontWeight={700}
                              color="primary"
                            >
                              {params.value}
                            </Typography>
                          ),
                        },
                        {
                          field: "sales",
                          headerName: "Units Sold",
                          width: 120,
                          type: "number",
                        },
                        {
                          field: "revenue",
                          headerName: "Revenue",
                          width: 130,
                          renderCell: (params) => (
                            <Typography
                              variant="body2"
                              fontWeight={700}
                              color="success.main"
                            >
                              {params.value}
                            </Typography>
                          ),
                        },
                        {
                          field: "stock",
                          headerName: "Stock",
                          width: 100,
                          type: "number",
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
                                params.value === "In Stock"
                                  ? "success"
                                  : "warning"
                              }
                              sx={{
                                fontWeight: 700,
                                fontSize: "0.75rem",
                              }}
                            />
                          ),
                        },
                      ]}
                      pageSizeOptions={[5, 10, 20]}
                      disableRowSelectionOnClick
                      sx={{
                        border: "none",
                        "& .MuiDataGrid-cell": {
                          borderColor: "divider",
                        },
                        "& .MuiDataGrid-columnHeaders": {
                          bgcolor: "#f8fafc",
                          borderRadius: 2,
                          fontWeight: 700,
                        },
                        "& .MuiDataGrid-cell:focus": {
                          outline: "none",
                        },
                        "& .MuiDataGrid-row:hover": {
                          bgcolor: "#f8fafc",
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
