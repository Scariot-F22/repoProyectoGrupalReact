import React, { useEffect, useState } from 'react'

const Banner = () => {

  return (
    <div className="bg-orange-400 invisible sm:visible h-12">
      <div className="max-w-xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between flex-wrap sm:visible ">
          

            <span className="flex p-2 rounded-lg items-center " >
                <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <p className="ml-3 font-medium text-white truncate ">
                  <span className=" sm:visible  ">Hasta 6 cuotas sin interés</span>
                </p>
            </span>

            <span className="flex p-2 rounded-lg items-center " >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
                <p className="ml-3 font-medium text-white truncate ">
                  <span className="sm:visible ">Hacemos envios a todo el país</span>
                </p>
            </span>  
        </div>
      </div>
    </div>
  )
}

export default Banner

