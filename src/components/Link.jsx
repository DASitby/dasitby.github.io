'use client'
import React, { useState } from 'react';
export default function Link({name, text, setWindowText, handleShowWindow, handleHideWindow}){
  
  const handleClick = () => {
    handleShowWindow()
    setWindowText(text)
  };
  return(
 <>
      <div
        onClick={handleClick}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {name}{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </div>
    </>
  )
}