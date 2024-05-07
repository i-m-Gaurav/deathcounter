'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Dob = () => {
  const [dob, setDob] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Date of Birth stored:', dob);
    const yearOfBirth = new Date(dob).getFullYear();
    localStorage.setItem('yearOfBirth', yearOfBirth);

    // Navigate to the /Age page
    router.push('/Age');
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-24">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="dob" className="text-2xl">
          Enter your date of birth!
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          className="border-2 border-gray-800 text-black mt-5 rounded-lg p-2"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-4 mt-5 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dob;