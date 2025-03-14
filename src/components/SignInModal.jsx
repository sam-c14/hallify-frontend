import React from 'react';
import DividerWithText from './DividerWithText'

const SignInModalContent = ({ onClose }) => {
    return (<div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="flex items-center p-2">
            <button className="shadow appearance-none border rounded w-full px-3 mx-2 py-2 mtext-gray-700 leading-tight" type="button">
                G
            </button>
            <button className="shadow appearance-none border rounded w-full px-3 mx-2 py-2 text-gray-700 leading-tight" type="button">
                A
            </button>
            <button className="shadow appearance-none border rounded w-full px-3 mx-2 py-2 text-gray-700 leading-tight" type="button">
                F
            </button>

        </div>
        <div><DividerWithText text={"or"} /></div>

        <div className="mb-4">
            <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Full name:</label>
            <input type="text" id="full_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button
            type="button" // Use type="button" to prevent form submission
            className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800 focus:outline-none mb-4 underline" // Tailwind classes for text button style
            onClick={() => {
                alert("Forgot password clicked! (Functionality to be implemented)"); // Placeholder action
                // In a real app, you'd trigger password reset logic here
            }}
        >
            Forgot password?
        </button>
        <div className="flex items-center mb-2">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>

        </div>
        <div className='flex '>
            <span>Don't have an account yet?</span> <div>
                <button
                    type="button" // Use type="button" to prevent form submission
                    className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800 focus:outline-none mb-4 underline" // Tailwind classes for text button style
                    onClick={() => {
                        alert("Forgot password clicked! (Functionality to be implemented)"); // Placeholder action
                        // In a real app, you'd trigger password reset logic here
                    }}
                >
                    Create Account.
                </button>
            </div>
        </div>
    </div>);
};

export default SignInModalContent;

//{/* <button className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" onClick={onClose}> {/* ADDED: closeSignInModal on click */ }
// Cancel
// </button> */}