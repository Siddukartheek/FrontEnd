// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, Button, Form, Spinner, Modal } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Home = () => {
//   const [customers, setCustomers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [limit] = useState(10);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterField, setFilterField] = useState("");
//   const [filterValue, setFilterValue] = useState("");
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);
//   const [newCustomer, setNewCustomer] = useState({
//     name_of_customer: "",
//     email: "",
//     mobile_number: "",
//     address: "",
//     city: "",
//     country: "",
//     company: "",
//     job_title: "",
//   });

//   useEffect(() => {
//     fetchCustomers();
//   }, [currentPage, searchQuery, filterField, filterValue]);

//   const fetchCustomers = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://localhost:8000/api/customers", {
//         params: { page: currentPage, limit, search: searchQuery, filterField, filterValue },
//       });
//       setCustomers(response.data.data.customers);
//       setTotalPages(response.data.data.pagination.totalPages);
//     } catch (error) {
//       console.error("Error fetching customers:", error);
//       alert("Failed to fetch customers. Please check the API server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleFilterChange = (e) => {
//     setFilterField(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleFilterValueChange = (e) => {
//     setFilterValue(e.target.value);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Customer Table</h1>
//       {loading && <Spinner animation="border" role="status" className="d-block mx-auto" />} 

//       <div className="d-flex mb-3">
//         <Form.Control
//           type="text"
//           placeholder="Search by name or email"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="me-2"
//         />

//         <Form.Select onChange={handleFilterChange} value={filterField} className="me-2">
//           <option value="">Filter By</option>
//           <option value="name_of_customer">Name</option>
//           <option value="email">Email</option>
//           <option value="mobile_number">Mobile Number</option>
//         </Form.Select>

//         <Form.Control
//           type="text"
//           placeholder="Filter Value"
//           value={filterValue}
//           onChange={handleFilterValueChange}
//           className="me-2"
//         />
//       </div>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile Number</th>
//             <th>Address</th>
//             <th>City</th>
//             <th>Country</th>
//             <th>Company</th>
//             <th>Job Title</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan="9" className="text-center">Loading...</td>
//             </tr>
//           ) : (
//             customers.map((customer, index) => (
//               <tr key={index}>
//                 <td>{customer.id}</td>
//                 <td>{customer.name_of_customer}</td>
//                 <td>{customer.email}</td>
//                 <td>{customer.mobile_number}</td>
//                 <td>{customer.address}</td>
//                 <td>{customer.city}</td>
//                 <td>{customer.country}</td>
//                 <td>{customer.company}</td>
//                 <td>{customer.job_title}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </Table>

//       <div className="d-flex justify-content-between">
//         <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
//           Previous
//         </Button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Home;

'use client';

import Link from "next/link";

export default function Home() {
     return (
       <main>
         <div className="min-h-screen flex items-center justify-center bg-gray-50">
           <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
             <h1 className="text-4xl font-bold text-center">Welcome to Auth System</h1>
             <div className="space-y-4">
             <Link href="/login" className="text-blue-600 hover:text-blue-500">
              Login
            </Link>
                <a 
                 href="/signup" 
                 className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
               >
                 Sign Up
               </a>
             </div>
           </div>
         </div>
       </main>
     );
   }