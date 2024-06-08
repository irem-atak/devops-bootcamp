import React, { useState, useEffect } from "react";
import axios from "axios";


const PropertiesCard = () => {
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://localhost:7160/api/Property");
        setPropertyList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div className="content grid3 mtop">
      {propertyList.map((property) => {
        const { fotoURL, type, status, startDate, endDate, price, id } = property;
        return (
          <div className='box shadow' key={id}>
            <div className='img'>
            <img src={fotoURL} alt=''/>

           </div>
           <div className="text">
            <div className="category flex">
              <span style={{ background: status === "For Sale" ? "#25b5791a" : "#ff98001a", color: status === "For Sale" ? "#25b579" : "#ff9800" }}>{status}</span>
              <i className='fa fa-heart'></i>
           </div>
           
          </div>
          <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>USD</label>
                </div>
                <span>{type}</span>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertiesCard;