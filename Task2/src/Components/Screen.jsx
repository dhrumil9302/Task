import React, { useState, useEffect } from "react";
import Switch from "./Switch";
import hooks from "../hooks";

const Table = () => {
  const { data, loading, error } = hooks(
    "https://dev.carzup.in/api/pricelist/test-mock"
  );
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [isActive, setIsActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const filterData = () => {
      let filtered = data.filter((item) => {
        const matchSearch = item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchLocation =
          selectedLocation === "All" || item.location === selectedLocation;
        return matchSearch && matchLocation;
      });

      if (isActive) {
        filtered = filtered.filter((item) => item.active);
      }

      setFilteredData(filtered);
    };

    filterData();
  }, [searchQuery, selectedLocation, isActive, data]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleToggleSwitchActive = () => {
    setIsActive((prev) => !prev);
  };

  const handleSwitchActive = (index) => {
    const newData = [...filteredData];
    newData[index].active = !newData[index].active;
    setFilteredData(newData);
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={`container mx-auto p-8 rounded-lg shadow-lg ${darkMode ? 'bg-darkModeBg text-white' : 'bg-lightModeBg text-black'}`}>
      <div className="fixed top-4 right-4">
        <input
          type="checkbox"
          id="darkModeSwitch"
          className="hidden"
          checked={darkMode}
          onChange={handleDarkModeToggle}
        />
        <label
          htmlFor="darkModeSwitch"
          className={`relative inline-block w-14 h-8 rounded-full transition duration-300 ${darkMode ? 'bg-switchDark' : 'bg-switchLight'}`}
        >
          <span className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </label>
      </div>

      <div className="mb-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          className="p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Locations</option>
          {[...new Set(data.map((item) => item.location))].map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <div className="flex items-center">
          <Switch
            isActive={isActive}
            toggleSwitch={handleToggleSwitchActive}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-tableHeader">
            <tr>
              <th className="py-2 px-4 border border-gray-200 text-sm font-medium text-gray-700">
                Sr No.
              </th>
              <th className="py-2 px-4 border border-gray-200 text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="py-2 px-4 border border-gray-200 text-sm font-medium text-gray-700">
                Phone
              </th>
              <th className="py-2 px-4 border border-gray-200 text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="py-2 px-4 border border-gray-200 text-sm font-medium text-gray-700">
                Location
              </th>
              <th className="py-2 px-4 border border-gray-200 text-sm font-medium text-gray-700">
                Active
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id} className={`text-center text-black ${darkMode ? 'hover:bg-hoverRow' : 'hover:bg-hoverRow'}`}>
                <td className="py-2 px-4 border border-gray-200">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  {item.name}
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  {item.phone}
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  {item.email}
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  {item.location}
                </td>
                <td className="py-2 px-4 border border-gray-200">
                  <Switch
                    isActive={item.active}
                    toggleSwitch={() => handleSwitchActive(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
