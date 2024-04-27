import React from 'react';

const EditArtist = ({ artist, onUpdate, onCancel }) => {
    const [name, setName] = React.useState(artist.name);
    const [genre, setGenre] = React.useState(artist.genre);
    const [description, setDescription] = React.useState(artist.description);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'genre') {
            setGenre(value);
        } else if (name === 'description') {
            setDescription(value);
        }
    };

    const handleUpdate = () => {
        const updatedArtist = { name, genre, description };
        fetch(`${import.meta.env.VITE_BASE_URL}artists/${artist._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedArtist),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to update artist.');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Artist updated:', data);
            onUpdate(data);
            onCancel(); // Close the edit form
        })
        .catch((error) => {
            console.error('Error updating artist:', error);
            alert('Failed to update artist.');
        });
    };

    return (
        <div className="flex flex-col items-center w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow">
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Artist Name"
            />
            <input
                type="text"
                name="genre"
                value={genre}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Artist Genre"
            />
            <textarea
                name="description"
                value={description}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Artist Description"
            />
            <div className="flex space-x-2 w-full">
                <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    Save Changes
                </button>
                <button onClick={onCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditArtist;
