import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Create() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [comments, setComments] = useState('');
    const [photo, setPhoto] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file); 
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newUser = {
            id: Date.now(), 
            name,
            quantity,
            comments,
            photo,
        };

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                navigate('/');
            } else {
                console.error('Failed to save the user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <h3>Add New List</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Photo:</label>
                            <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" className="form-control" placeholder="Enter name"
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="text" name="quantity" className="form-control" placeholder="How many items"
                                onChange={e => setQuantity(e.target.value)} />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="comments">Comments:</label>
                            <input type="text" name="comments" className="form-control" placeholder="Leave a comment here"
                                onChange={e => setComments(e.target.value)} />
                        </div>
                        <br />
                        <button className="btn btn-info">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;
