import ContactInfo from '@/components/footer/ContactInfo';
import Container from '@/shared/Container';
import React from 'react';

const page = () => {
    return (
        <Container>
         <div className="flex justify-center  mb-16 bg-gradient-to-br mt-16">
  <form className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-lg w-full max-w-sm border border-gray-700">
    <h2 className="text-2xl font-bold text-center text-cyan-400 mb-6">Login</h2>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 text-gray-900 bg-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        className="w-full p-3 text-gray-900 bg-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 rounded-lg hover:shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
    >
      Login
    </button>
    <p className="text-sm text-gray-400 text-center mt-4">
      Forgot your password?{" "}
      <a href="#" className="text-cyan-400 hover:underline">
        Reset here
      </a>
    </p>
  </form>
</div>

        </Container>
    );
};

export default page;