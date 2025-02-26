import React from 'react';
import './Dashboard.css'; 
import table from '../../assets/table.gif'
import order from '../../assets/ordernow.gif'
import menu from '../../assets/menu.gif';
import cust from '../../assets/customers.gif';
import custt from '../../assets/customerss.gif';
import kitch from '../../assets/kitchen.gif';
import rev from '../../assets/revenue.gif'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Restaurant Billing Dashboard</h1>
      
      <div className="stats-grid">

      <div className="stat-card">
          <Link to="/tables"><img src={table} alt="Table Booking" className="stat-icon" /></Link>
          <h3>Table Booking</h3>
        </div>

        <div className="stat-card">
          <Link to="/menu"><img src={menu} alt="Menu" className="stat-icon" /></Link>
          <h3>Menu</h3>
        </div>

        <div className="stat-card">
          <Link to="/orders"><img src={order} alt="Order Now" className="stat-icon" /></Link>
          <h3>Orders</h3>
        </div>

        <div className="stat-card">
          <Link to="/kitchen-display"><img src={kitch} alt="Kitchen" className="stat-icon" /></Link>
          <h3>Kitchen</h3>
        </div>

        <div className="stat-card">
          <Link to="/revenue"><img src={rev} alt="Revenue" className="stat-icon" /></Link>
          <h3>Revenue</h3>
        </div>

        <div className="stat-card">
          <img src={custt} alt="Customers" className="stat-icon" />
          <h3>Customers</h3>
        </div>

        <div className="stat-card">
          <img src={cust} alt="Customers" className="stat-icon" />
          <h3>Customers</h3>
        </div>

        <div className="stat-card">
          <img src={cust} alt="Customers" className="stat-icon" />
          <h3>Customers</h3>
        </div>

        <div className="stat-card admin-panel-card">
          <Link to="/admin-panel"><img src={rev} alt="Admin Panel" className="stat-icon" /></Link>
          <h3>Admin Panel</h3>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
