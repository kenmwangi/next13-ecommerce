"use client";
import React from "react";
interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div>
      <h3 className="h3">Something went wrong. Please refresh the page</h3>
      <button onClick={() => reset()} className="btn-sm bg-red-400 text-white">
        Try again
      </button>
    </div>
  );
}
