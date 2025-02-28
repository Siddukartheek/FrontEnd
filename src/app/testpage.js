
// "use client"
// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     description: ''
//   });
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Fetch posts
//   const fetchPosts = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/posts');
//       const data = await response.json();
//       if (data.success) {
//         setPosts(data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     try {
//       const response = await fetch('http://localhost:8080/api/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setMessage('Post created successfully!');
//         setFormData({ title: '', author: '', description: '' });
//         fetchPosts(); // Refresh posts list
//       } else {
//         setMessage(data.message || 'Error creating post');
//       }
//     } catch (error) {
//       setMessage('Error creating post');
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Posts Management</title>
//         <meta name="description" content="Posts management system" />
//       </Head>

//       <div className="container py-5">
//         <h1 className="mb-4">Posts Management</h1>

//         {/* Create Post Form */}
//         <div className="card mb-4">
//           <div className="card-body">
//             <h2 className="card-title mb-4">Create New Post</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="title" className="form-label">Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="author" className="form-label">Author</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="author"
//                   name="author"
//                   value={formData.author}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="description" className="form-label">Description</label>
//                 <textarea
//                   className="form-control"
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   rows="3"
//                   required
//                 ></textarea>
//               </div>
//               <button 
//                 type="submit" 
//                 className="btn btn-primary"
//                 disabled={loading}
//               >
//                 {loading ? 'Creating...' : 'Submit'}
//               </button>
//             </form>
//             {message && (
//               <div className={`alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'} mt-3`}>
//                 {message}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Posts List */}
//         <div className="card">
//           <div className="card-body">
//             <h2 className="card-title mb-4">Posts List</h2>
//             <div className="table-responsive">
//               <table className="table table-striped">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Author</th>
//                     <th>Description</th>
//                     <th>Created At</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {posts.map((post) => (
//                     <tr key={post.id}>
//                       <td>{post.id}</td>
//                       <td>{post.title}</td>
//                       <td>{post.author}</td>
//                       <td>{post.description}</td>
//                       <td>{new Date(post.createdAt).toLocaleDateString()}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {posts.length === 0 && (
//                 <p className="text-center">No posts found</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>


//       <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-inner">

//         <div className="carousel-item active">
//           <div className="card text-center">
//             <div className="card-body">
//               <h5 className="card-title">Card 1</h5>
//               <p className="card-text">This is some sample data inside Card 1.</p>
//               <a href="#" className="btn btn-primary">Read More</a>
//             </div>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="card text-center">
//             <div className="card-body">
//               <h5 className="card-title">Card 2</h5>
//               <p className="card-text">This is some sample data inside Card 2.</p>
//               <a href="#" className="btn btn-success">View Details</a>
//             </div>
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="card text-center">
//             <div className="card-body">
//               <h5 className="card-title">Card 3</h5>
//               <p className="card-text">This is some sample data inside Card 3.</p>
//               <a href="#" className="btn btn-danger">Explore</a>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//     </>
//   );
// }