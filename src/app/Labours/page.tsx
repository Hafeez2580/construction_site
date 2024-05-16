'use client';
import Link from 'next/link';
import React, { useEffect, useState} from 'react'

 function Labours() {
    
  const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
      
          try {
            const response = await fetch('http://localhost:3002/api/labours', { cache: 'no-store'});
            const data = await response.json();
            setData(data);
          } catch (error) {
          } finally {
          }
        };
      
        fetchData();
      }, []); 


    return ( 
        <div className='w-full flex flex-wrap gap-5 mt-5'>
        {data?.map((labour:any) => {
        
        return (
        <div className="card w-96 bg-base-100 shadow-xl">
            
            <div className="card-body">
                <h2 className="card-title">Name: {labour.name}</h2>
                <p>Wage: {labour.wage}</p>
            </div>
       </div>
        );
    }) }
    </div>
    )
}

export default Labours