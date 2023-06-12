import React, { useState } from 'react'

const Tabs = ({ tabs }) => {
    const [label,setLabel]=useState('');
    const onClickHandler = (e, content) => {
        setLabel(content);
      };
      
      
    
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {tabs.map((tab, index) => (
                    <div key={index}>
                        <button className="btn btn-outline-secondary m-5 mt-5" onClick={(e) => onClickHandler(e, tab.content)}>{tab.label}</button>
                    </div>
                ))}
            </div>
            <div className="card w-50 h-100 mx-auto" style={{ width: "18rem" }}>
                <p>{label}</p>
            </div>
        </div >
    )
}

export default Tabs