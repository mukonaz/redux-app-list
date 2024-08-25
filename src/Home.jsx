import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

function Home() {
    const currentUser = useSelector((state) => state.users.currentUser);
    const users = useSelector((state) => state.users.users.filter(user => user.email === currentUser.email));
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({ id }));
    };

    return (
        <div className="container1">
            <h2>Shopping List</h2>
            <Link to="/create" className="btn btn-success my-3">Create +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Comments</th>
                        <th>Category/Tags</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td><img src={user.photo} alt={user.name} width="50" height="50"/></td>
                            <td>{user.name}</td>
                            <td>{user.quantity}</td>
                            <td>{user.comments}</td>
                            <td>{user.category}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
                                <button className="btn btn-sm btn-info ms-2">Share</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
