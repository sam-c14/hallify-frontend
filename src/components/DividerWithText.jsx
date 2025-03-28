import React from 'react';

const DividerWithText = ({ children, text }) => {
    return (
        <div className="flex items-center text-gray-500">
            <div className="flex-1 border-b border-gray-300"></div>
            <span className="mx-4">{text}</span>
            <div className="flex-1 border-b border-gray-300"></div>
        </div>
    );
};

export default DividerWithText;