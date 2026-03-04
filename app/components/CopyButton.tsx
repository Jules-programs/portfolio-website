'use client'

import React, { useState } from 'react';

const CopyButton: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const email = process.env.NEXT_PUBLIC_EMAIL as string;

  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy text. Please try again or copy manually.');
    }
  };

  return (
    <div>
      <button onClick={copyTextToClipboard}>
        {isCopied ? 'Copied!' : 'Copy Email'}
      </button>
    </div>
  );
};

export default CopyButton;