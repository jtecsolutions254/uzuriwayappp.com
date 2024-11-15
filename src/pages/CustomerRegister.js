import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function CustomerRegister() {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ id: '', name: '', email: '', phone: '' });
  const [editingCustomer, setEditingCustomer] = useState(null); // Holds customer being edited
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch customer data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/customers')
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error('Error fetching customer data:', error));
  }, []);

  // Add New Customer
  const handleAddCustomer = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCustomer),
    })
      .then((response) => response.json())
      .then((newCustomerData) => {
        setCustomers([...customers, newCustomerData]);
        setNewCustomer({ id: '', name: '', email: '', phone: '' });
      })
      .catch((error) => console.error('Error adding customer:', error));
  };

  // Edit Customer
  const handleEditCustomer = (customer) => {
    setEditingCustomer(customer);
  };

  const handleUpdateCustomer = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/customers/${editingCustomer.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingCustomer),
    })
      .then((response) => response.json())
      .then((updatedCustomer) => {
        setCustomers(
          customers.map((customer) =>
            customer.id === updatedCustomer.id ? updatedCustomer : customer
          )
        );
        setEditingCustomer(null);
      })
      .catch((error) => console.error('Error updating customer:', error));
  };

  // Filter Customers
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.id.toString().includes(searchTerm)
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h2>Customer Register</h2>

      {/* Add New Customer Form */}
      <form onSubmit={handleAddCustomer} className="mb-4">
        <h4>Add New Customer</h4>
        <input
          type="text"
          placeholder="Customer ID"
          value={newCustomer.id}
          onChange={(e) => setNewCustomer({ ...newCustomer, id: e.target.value })}
          required
          className="form-control mb-2"
        />
        <input
          type="text"
          placeholder="Name"
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
          required
          className="form-control mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newCustomer.email}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          required
          className="form-control mb-2"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={newCustomer.phone}
          onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
          required
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">Add Customer</button>
      </form>

      {/* Edit Customer Form */}
      {editingCustomer && (
        <form onSubmit={handleUpdateCustomer} className="mb-4">
          <h4>Edit Customer</h4>
          <input
            type="text"
            placeholder="Customer ID"
            value={editingCustomer.id}
            onChange={(e) => setEditingCustomer({ ...editingCustomer, id: e.target.value })}
            required
            className="form-control mb-2"
            disabled // Disable ID field to prevent changes
          />
          <input
            type="text"
            placeholder="Name"
            value={editingCustomer.name}
            onChange={(e) => setEditingCustomer({ ...editingCustomer, name: e.target.value })}
            required
            className="form-control mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={editingCustomer.email}
            onChange={(e) => setEditingCustomer({ ...editingCustomer, email: e.target.value })}
            required
            className="form-control mb-2"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={editingCustomer.phone}
            onChange={(e) => setEditingCustomer({ ...editingCustomer, phone: e.target.value })}
            required
            className="form-control mb-2"
          />
          <button type="submit" className="btn btn-success">Update Customer</button>
          <button onClick={() => setEditingCustomer(null)} className="btn btn-secondary ml-2">Cancel</button>
        </form>
      )}

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />

      {/* Customer Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCustomers.map((customer) => (
            <tr key={customer.id}>
               <td>
  <Link to={`/customer-profile/${customer.id}`}>{customer.name}</Link>
</td>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <button onClick={() => handleEditCustomer(customer)} className="btn btn-warning btn-sm">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={i + 1 === currentPage ? 'btn btn-primary' : 'btn btn-light'}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CustomerRegister;
