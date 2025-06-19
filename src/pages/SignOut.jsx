import React from 'react';
import { useNavigate } from 'react-router';
import { FaSignOutAlt, FaArrowLeft } from 'react-icons/fa';

function SignOut() {

    const navigate = useNavigate();

    const handleSignOut = () => {
      // Add your logout logic here
      // Example: clear localStorage, reset auth state, etc.
      localStorage.removeItem('userToken');
      navigate('/');
    };
  
    const handleCancel = () => {
      navigate(-1);
    };
  
    
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-red-600 px-6 py-8 text-center">
          <FaSignOutAlt className="mx-auto text-white text-5xl mb-4" />
          <h2 className="text-2xl font-bold text-white">Sign Out</h2>
        </div>
        
        <div className="px-6 py-8">
          <p className="text-gray-600 text-center mb-8">
            Are you sure you want to sign out? You'll need to sign in again to access your account.
          </p>
          
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleSignOut}
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 
                       transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <FaSignOutAlt />
              <span>Sign Out</span>
            </button>
            
            <button
              onClick={handleCancel}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 
                       transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <FaArrowLeft />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignOut





