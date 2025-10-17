# Dashboard Application - Pages Overview

This is a modern React dashboard application built with Material-UI and Vite.

## 📁 Project Structure

```
my-app/
├── src/
│   ├── pages/
│   │   ├── Customers.jsx    # Customer management page
│   │   ├── Products.jsx     # Product inventory page
│   │   ├── Orders.jsx       # Order tracking page
│   │   └── GithubFinder.jsx # GitHub user search page
│   ├── components/
│   │   ├── Dashboard.jsx        # Original dashboard (legacy)
│   │   └── DashboardContent.jsx # Dashboard content page
│   ├── App.jsx              # Main app with routing
│   └── main.jsx            # Entry point
```

## 🚀 Features

### 1. **Dashboard** (`/dashboard`)
- Revenue overview with line charts
- Sales statistics cards
- Product category distribution (pie chart)
- Recent orders table
- Order statistics breakdown

### 2. **Customers** (`/customers`)
- Customer list with DataGrid
- Search functionality
- Add new customers via dialog
- Customer statistics (Total, Active, Revenue)
- Edit and delete customer actions
- View customer details:
  - Name, Email, Phone
  - Company and Location
  - Order count and total spent
  - Status (Active/Inactive)

### 3. **Products** (`/products`)
- Product catalog with card grid layout
- Product images and descriptions
- Rating and sales information
- Search functionality
- Add new products via dialog
- Product statistics:
  - Total Products
  - Inventory Value
  - Total Sales
  - Low Stock Items
- Stock status indicators
- Category badges

### 4. **Orders** (`/orders`)
- Order list with DataGrid
- Order tracking and status
- Search by order number, customer name, or email
- Order statistics:
  - Total Orders
  - Total Revenue
  - Delivered Orders
  - Pending Orders
- Status indicators:
  - Delivered (Green)
  - Shipped (Blue)
  - Processing (Orange)
  - Pending (Gray)
  - Cancelled (Red)
- Payment method tracking
- Order details and actions

### 5. **GitHub Finder** (`/github`)
- Search GitHub users by username
- Display user profile information:
  - Avatar, name, username
  - Bio and location
  - Company and website
  - Twitter handle
  - Join date
- User statistics:
  - Public repositories
  - Followers
  - Following
- Recent repositories display:
  - Repository name and description
  - Programming language
  - Star count
  - Last updated date
  - Direct links to repositories

## 🎨 UI/UX Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Modern Material-UI**: Latest Material-UI v7 components
- **Smooth Navigation**: React Router with sidebar navigation
- **Interactive Elements**: Hover effects, animations, and transitions
- **Data Visualization**: Charts using MUI X-Charts
- **Professional Layout**: Consistent spacing and typography
- **Color-coded Status**: Visual indicators for different states
- **Search & Filter**: Easy data discovery
- **Modal Dialogs**: For adding new items
- **Action Menus**: Context menus for item actions

## 🛠️ Technologies Used

- **React 19**: Latest React version
- **Vite**: Fast build tool
- **Material-UI v7**: Modern UI component library
- **MUI X-Charts**: Data visualization
- **MUI X-DataGrid**: Advanced data tables
- **React Router DOM**: Client-side routing
- **GitHub API**: Real-time user data fetching

## 🚦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   ```
   http://localhost:5173
   ```

## 🔗 Navigation Routes

- `/` - Redirects to Dashboard
- `/dashboard` - Main dashboard with statistics and charts
- `/customers` - Customer management page
- `/products` - Product inventory page
- `/orders` - Order tracking page
- `/github` - GitHub user finder

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

## 🎯 Key Components

### Sidebar Navigation
- Fixed on desktop
- Drawer on mobile
- Active route highlighting
- Gradient background
- Icon-based menu items

### Top AppBar
- User profile avatar
- Notification badge
- Mobile menu toggle
- Clean white design

### Data Tables (Customers & Orders)
- Sortable columns
- Pagination
- Row actions
- Search filtering
- Responsive design

### Product Cards
- Image display
- Rating system
- Stock status
- Category tags
- Price display

### Statistics Cards
- Animated hover effects
- Trend indicators
- Icon-based design
- Color-coded gradients

## 🔮 Future Enhancements

- User authentication
- Real backend integration
- Export to CSV/PDF
- Advanced filtering
- Dark mode toggle
- Email notifications
- Real-time updates
- Analytics dashboard

## 📝 Notes

- All data is currently mock data
- GitHub Finder uses live GitHub API
- No backend required for development
- Fully functional frontend application

## 🤝 Contributing

Feel free to extend the functionality by:
1. Adding more pages
2. Connecting to a real backend
3. Implementing user authentication
4. Adding more charts and visualizations
5. Enhancing mobile responsiveness

---

**Built with ❤️ using React and Material-UI**


