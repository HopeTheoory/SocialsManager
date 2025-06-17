import React, { useState } from 'react';

const goals = [
  'Grow my personal brand',
  'Promote my business',
  'Share knowledge',
  'Other',
];

const Onboarding: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Welcome to SocialsManager</h2>
      {step === 1 && (
        <>
          <p className="mb-2">What is your primary goal?</p>
          <ul className="mb-4">
            {goals.map((goal) => (
              <li key={goal}>
                <button
                  className={`w-full text-left px-4 py-2 rounded mb-2 border ${selectedGoal === goal ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}
                  onClick={() => setSelectedGoal(goal)}
                >
                  {goal}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={!selectedGoal}
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <p className="mb-4">Great! We'll tailor your experience for: <span className="font-semibold">{selectedGoal}</span></p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => alert('Onboarding complete!')}
          >
            Finish
          </button>
        </>
      )}
    </div>
  );
};

export default Onboarding;
