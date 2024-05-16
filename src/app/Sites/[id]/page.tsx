'use client';

import React, { useEffect, useState} from 'react'

 function Site({params}: any) {

     const { id }  = params;
    const [data, setData] = useState([]);
    type site = { img: string, budget: number, name: string, desc: string, id: number};
    let site: site;
    useEffect(() => {
        const fetchData = async () => {
      
          try {
            const response = await fetch('http://localhost:3002/api/sites', { cache: 'no-store'});
            const data = await response.json();
            setData(data);
          } catch (error) {
          } finally {
          }
        };
      
        fetchData();
      }, []); // The dependency array (explained later)

   site = data.find((site: { img: string, budget: number, name: string, desc: string, id: number}) => site.id === parseInt(id))!;
   console.log('sitedata',site);
   console.log('id', id, typeof id);

  return (
    <>
    <div className="hero min-h-[400px] bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={site?.img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Budget {site?.budget}</h1>
      <h1 className="text-3xl font-bold">Name {site?.name}</h1>
      <p className="py-6">{site?.desc}</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
 
</div>

</>
  );
}

export default Site