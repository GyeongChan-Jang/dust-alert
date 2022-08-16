import React from 'react'

const Selector = () => {
  return (
    <div className="flex">
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option selected className="text-lg">
          서울
        </option>
        <option value="US" className="text-lg">
          United States
        </option>
        <option value="CA" className="text-lg">
          Canada
        </option>
        <option value="FR" className="text-lg">
          France
        </option>
        <option value="DE" className="text-lg">
          Germany
        </option>
      </select>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option selected className="text-lg">
          강남구
        </option>
        <option value="US" className="text-lg">
          United States
        </option>
        <option value="CA" className="text-lg">
          Canada
        </option>
        <option value="FR" className="text-lg">
          France
        </option>
        <option value="DE" className="text-lg">
          Germany
        </option>
      </select>
    </div>
  )
}

export default Selector
