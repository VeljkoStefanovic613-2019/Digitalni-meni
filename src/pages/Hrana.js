import React, { useState, useEffect } from 'react';

export const Hrana = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Assuming data.json is in the same folder as this component
    import('../menu.json')
      .then((data) => {
        setMenuItems(data.items);
        // Initial display with all items from the 'hrana' category
        setFilteredItems(data.items.filter((item) => item.category === 'hrana'));
      })
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  const handleCategoryClick = (subcategory) => {
    // Filter items based on category and subcategory
    const filtered = menuItems.filter(
        (item) => item.category === 'hrana' && item.subcategory === subcategory
        );
    setFilteredItems(filtered);
  };
  

  return (
    
    <div className='min-h-screen bg-crna-100 pt-6 flex flex-col'>

        <div className=" flex overflow-x-auto p-4 ">
      <button onClick={() => handleCategoryClick('dorucak')} className="custom-button">DORUČAK</button>
      <button onClick={() => handleCategoryClick('obrokSalate')} className="custom-button">OBROK SALATE</button>
      <button onClick={() => handleCategoryClick('predjela')} className="custom-button">PREDJELA</button>
      <button onClick={() => handleCategoryClick('specijalitetiKuce')} className="custom-button">SPECIJALITETI KUĆE</button>
      <button onClick={() => handleCategoryClick('sendvici')} className="custom-button">SENDVIČI</button>
      <button onClick={() => handleCategoryClick('burgeri')} className="custom-button">BURGERI</button>
      <button onClick={() => handleCategoryClick('pnjr')} className="custom-button">PASTE, NJOKE, RIŽOTO</button>
      <button onClick={() => handleCategoryClick('corbe')} className="custom-button">ČORBE I POTAŽI</button>
      <button onClick={() => handleCategoryClick('pizza')} className="custom-button">PIZZA</button>
      <button onClick={() => handleCategoryClick('kiflice')} className="custom-button">KIFLICE</button>
      <button onClick={() => handleCategoryClick('poslastice')} className="custom-button">POSLASTICE</button>
      <button onClick={() => handleCategoryClick('hleb')} className="custom-button">HLEB</button>
      <button onClick={() => handleCategoryClick('prilozi')} className="custom-button">PRILOZI</button>
      <button onClick={() => handleCategoryClick('salate')} className="custom-button">SALATE</button>
      {/* Add more buttons as needed */}
    </div>
      <div className="flex-col flex overflow-x-auto p-4 bg-stone-900">
      {filteredItems.map((item) => (
          <div key={item.Id} className="font-bold flex flex-col md:flex-row items-start justify-between h-25 border-b-2 border-b-gray border-dashed">
            <div>
            <h3 className="text-lg font-bold mb-1 text-white pt-3">{item.name}</h3>
            <p className="text-gray-600">{item.desc}</p>      
          </div>
          <p className="text-yellow-500 font-bold mt-2">{item.price}RSD</p>
          </div>
          

          
        ))}
        
      </div>
    </div>
  );
};
