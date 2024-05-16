'use client';
import Link from 'next/link';
import React, { useEffect, useState} from 'react'

 function Sites() {
    
  const [data, setData] = useState([]);

    // useEffect(() => {
     
    //     async function getData() {
    //         alert('am i executed');
    //         const sites = await fetch('http://localhost:3002/api/sites', {next: { revalidate: 1 }});
    //         const data = await sites.json();
    //         return data;
    //         };
    //         const data = await getData();
    //         setData(data);
        
    // }, [])

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


    return ( 
        <div className='w-full flex flex-wrap gap-5 mt-5'>
        {data?.map((site:any) => {
        
        return (
        <Link href={`Sites/${site.id}`} className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={site.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{site.name}</h2>
                <p>{site.desc}</p>
                <p>{site.budget}</p>
                {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
       </Link>
        );
    }) }
    </div>
    )
}

export default Sites