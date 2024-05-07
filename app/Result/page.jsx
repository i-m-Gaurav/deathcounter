'use client';
import React, { useEffect, useState } from 'react';

const Result = () => {
  const [totalWeeks, setTotalWeeks] = useState(0);
  const [livedWeeks, setLivedWeeks] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    // Fetch data from localStorage
    const predictedAge = parseInt(localStorage.getItem('predictedAge') ?? '0', 10);
    const yearOfBirth = parseInt(localStorage.getItem('yearOfBirth') ?? '0', 10);

    // Calculate years lived and total weeks based on predicted age
    const currentYear = new Date().getFullYear();
    const yearsLived = currentYear - yearOfBirth;
    const predictedYear = yearOfBirth + predictedAge;

    // Set total and lived weeks
    setTotalWeeks(predictedAge * 52);
    setLivedWeeks(yearsLived * 52);

    // Calculate the seconds remaining until the predicted age
    const currentDate = new Date();
    const predictedDate = new Date(predictedYear, currentDate.getMonth(), currentDate.getDate());
    const totalSecondsToPredict = Math.floor((predictedDate.getTime() - currentDate.getTime()) / 1000);

    setRemainingSeconds(totalSecondsToPredict);

    // Update countdown every second
    const interval = setInterval(() => {
      setRemainingSeconds((prevSeconds) => {
        const newSeconds = prevSeconds - 1;

        // Update formatted time display
        const days = Math.floor(newSeconds / (24 * 3600));
        const hours = Math.floor((newSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((newSeconds % 3600) / 60);
        const seconds = newSeconds % 60;
        const years = Math.floor(days / 365);
        const months = Math.floor((days / 365) / 30);
        const remainingDays = days % 30;

        setFormattedTime(`${years} years ; ${months} months : ${remainingDays} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`);

        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate the number of remaining weeks
  const remainingWeeks = Math.floor(remainingSeconds / (7 * 24 * 60 * 60));

  // Create week divs with accurate colors
  const weeksDivs = Array.from({ length: totalWeeks }, (_, index) => (
    <div
      className="rounded"
      key={index}
      style={{
        width: '15px',
        height: '15px',
        border: '1px solid white',
        margin: '5px',
        backgroundColor: index < livedWeeks ? 'red' : 'green',
      }}
    />
  ));

  return (
    <>
    <div className= "flex justify-center flex-col items-center">

    <div className="font-bold mb-5 text-2xl mt-5">{formattedTime}</div>
    <h1 className= "text-xl">" Don't worry, This too shall pass! "</h1>


    </div>
          

    <div className="flex flex-wrap min-h-screen items-center justify-center p-10 relative">
      {weeksDivs}

      <h1>Huh, You got some time, up there.</h1>
    </div>
    </>
  );
};

export default Result;
