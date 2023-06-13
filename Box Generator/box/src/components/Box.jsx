import React, { useState } from 'react';

const Box = () => {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);
    const [size, setSize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, { color, size }]); // Add the current color value to the boxes array
        setColor(''); // Reset the color input field
        setSize('');
    };

    return (
        <div style={{ margin: '100px' }}>
            <form onSubmit={handleSubmit}>
                <label style={{ marginRight: '20px' }}>Color</label>
                <input className="col-form-label" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <label style={{ marginRight: '20px', marginLeft: '20px' }}>Size</label>
                <input className="col-form-label" type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                <input className="btn btn-outline-secondary" style={{ marginLeft: '20px' }} type="submit" value="Add" />
            </form>
            <div style={{ display: 'flex', margin: '100px', flexWrap: 'wrap' }}>
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: box.color,
                            width: box.size + 'px',
                            height: box.size + 'px',
                            margin: '10px'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Box;
