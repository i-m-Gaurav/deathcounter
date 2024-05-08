'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Age = () => {
  const [predictedAge, setPredictedAge] = useState('');
  const router = useRouter();

  const handleAgeInput = (event) => {
    setPredictedAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const age = event.target.ageInput.value; // Assuming the input's name is 'ageInput'
    localStorage.setItem('predictedAge', age);
    router.push('/Result');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="age" className="text-2xl text-center">How long do you think you will live?</label>
        <input
          type="number"
          id="age"
          name="ageInput"
          min="1"
          max="100"
          placeholder="Enter your predicted age"
          className="outline-none border-gray-800 text-black w-64 rounded-lg p-2 mt-4"
          value={predictedAge}
          onChange={handleAgeInput}
        />
        <button type="submit" className="bg-gray-800 text-white font-bold py-2 px-4 mt-5 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Age