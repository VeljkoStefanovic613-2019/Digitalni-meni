import "../index.css"
import React, { useState, useEffect } from 'react';
export const Pice = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Assuming data.json is in the same folder as this component
    import('../menu.json')
      .then((data) => {
        setMenuItems(data.items);
        // Initial display with all items from the 'hrana' category
        setFilteredItems(data.items.filter((item) => item.category === 'pice'));
      })
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  const handleCategoryClick = (subcategory) => {
    // Filter items based on category and subcategory
    const filtered = menuItems.filter(
        (item) => item.category === 'pice' && item.subcategory === subcategory
        );
    setFilteredItems(filtered);
  };

  return (
    <div className='min-h-screen bg-crna-100 pt-6 flex flex-col'>
       <div className=" flex overflow-x-auto p-4 ">
      <button onClick={() => handleCategoryClick('kafetoplinapici')} className="custom-button">KAFE, TOPLI NAPICI I ŠEJKOVI</button>
      <button onClick={() => handleCategoryClick('sokovi')} className="custom-button">BEZALKOHOLNA PIĆA-SOKOVI</button>
      <button onClick={() => handleCategoryClick('cedjenisokovi')} className="custom-button">CEĐENI SOKOVI</button>
      <button onClick={() => handleCategoryClick('monin')} className="custom-button">MONIN LIMUNADE I PIREI</button>
      <button onClick={() => handleCategoryClick('energija')} className="custom-button">ENERGETSKA PIĆA</button>
      <button onClick={() => handleCategoryClick('vodanegazirana')} className="custom-button">VODA NEGAZIRANA</button>
      <button onClick={() => handleCategoryClick('vodagazirana')} className="custom-button">VODA GAZIRANA</button>
      <button onClick={() => handleCategoryClick('rakije')} className="custom-button">RAKIJE</button>
      <button onClick={() => handleCategoryClick('whiskey')} className="custom-button">WHISKEY</button>
      <button onClick={() => handleCategoryClick('bourbons')} className="custom-button">BOURBONS</button>
      <button onClick={() => handleCategoryClick('brandycognac')} className="custom-button">BRANDY & COGNAC</button>
      <button onClick={() => handleCategoryClick('vodka')} className="custom-button">VODKA</button>
      <button onClick={() => handleCategoryClick('tequila/gin/rum')} className="custom-button">TEQUILA / GIN / RUM</button>
      <button onClick={() => handleCategoryClick('likeri')} className="custom-button">LIQUERS & VERMOUTH</button>
      <button onClick={() => handleCategoryClick('cider')} className="custom-button">CIDER</button>
      <button onClick={() => handleCategoryClick('toceno')} className="custom-button">TOČENA PIVA</button>
      <button onClick={() => handleCategoryClick('pivo')} className="custom-button">FLAŠIRANA PIVA</button>
      <button onClick={() => handleCategoryClick('vinobelo')} className="custom-button">BELA VINA</button>
      <button onClick={() => handleCategoryClick('vinocrveno')} className="custom-button">CRVENA VINA</button>
      <button onClick={() => handleCategoryClick('vinorose')} className="custom-button">ROSE VINA</button>
      <button onClick={() => handleCategoryClick('vinocasa')} className="custom-button">VINA NA ČASU</button>
      <button onClick={() => handleCategoryClick('sampanjac')} className="custom-button">PENUŠAVA VINA I ŠAMPANJCI</button>
      {/* Add more buttons as needed */}
    </div><div className="flex-col flex overflow-x-auto p-4 bg-stone-900">
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
