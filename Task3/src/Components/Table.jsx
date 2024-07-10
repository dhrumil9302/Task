import { useState } from "react";
import GridLayout from "react-grid-layout";
import { FiAlignJustify } from "react-icons/fi";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const DragandDrop = () => {
  const Data = [
    {
      name: "Jeet",
      phone: "7021971221",
      email: "jeet@gmail.com",
      city: "Mumbai",
    },
    {
      name: "jay",
      phone: "6082057052",
      email: "jay@gmail.com",
      city: "Ahmedabad",
    },
    {
      name: "Raj",
      phone: "4905470009",
      email: "Raj@gmail.com",
      city: "Rajkot",
    },
    {
      name: "Darshan",
      phone: "4905470009",
      email: "Darshan@gmail.com",
      city: "Vadodara",
    },
    {
      name: "Bhavik",
      phone: "4905470009",
      email: "Bhavik@gmail.com",
      city: "Gir",
    },
    {
      name: "Meet",
      phone: "4905470009",
      email: "meet@gmail.com",
      city: "Bhuj",
    },
  ];

  const [items, setItems] = useState(Data);
  const [darkMode, setDarkMode] = useState(false);

  const layout = items.map((item, index) => ({
    i: item.email,
    x: 0,
    y: index,
    w: 1,
    h: 1,
    static: false,
  }));

  const onLayoutChange = (newLayout) => {
    const sortedItems = [...items].sort((a, b) => {
      const layoutA = newLayout.find((layoutItem) => layoutItem.i === a.email);
      const layoutB = newLayout.find((layoutItem) => layoutItem.i === b.email);
      return layoutA.y - layoutB.y;
    });
    setItems(sortedItems);
  };

  return (
    <div className={`h-screen ${darkMode ? 'bg-dark-mode-bg text-white' : 'bg-light-mode-bg text-black'}`}>
      <div className="fixed top-4 right-4">
        <input
          type="checkbox"
          id="darkModeSwitch"
          className="hidden"
          checked={darkMode}
          onChange={() => setDarkMode((prevMode) => !prevMode)}
        />
        <label
          htmlFor="darkModeSwitch"
          className={`relative inline-block w-14 h-8 rounded-full transition duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-400'}`}
        >
          <span className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </label>
      </div>

      <h1 className="text-4xl font-serif mx-64">Drag and Drop Component</h1>
      <GridLayout
        layout={layout}
        cols={1}
        rowHeight={50}
        width={890}
        isResizable={false}
        onLayoutChange={onLayoutChange}
        draggableHandle=".drag-handle"
      >
        {items.map((item, index) => (
          <div
            key={item.email}
            data-grid={{ x: 0, y: items.indexOf(item), w: 1, h: 1 }}
            className={`flex items-center mt-36 mx-64 p-4 rounded-lg ${darkMode ? 'bg-custom-dark-gray' : 'bg-custom-gray'}`}
          >
            <button className="drag-handle w-16">
              <FiAlignJustify />
            </button>
            <h2 className="w-16 ml-5">{index + 1}</h2>
            <h2 className="w-44">{item.name}</h2>
            <h2 className="w-40">{item.phone}</h2>
            <h2 className="w-60">{item.email}</h2>
            <h2 className="w-20">{item.city}</h2>
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default DragandDrop;
