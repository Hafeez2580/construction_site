import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const sites = [
    { id: 1, name: 'site1', img: '/site1.jpeg', desc: 'this is the site 1 description.', budget: 100000, labours: [ { name: 'name of labour', date: 'date of work', wage: 100}] },
    { id: 2, name: 'site2', img: '/site2.jpeg', desc: 'this is the site 2 description.', budget: 200000, labours: [ { name: 'name of labour', date: 'date of work', wage: 100}]  },
    { id: 3, name: 'site3', img: '/site3.jpeg', desc: 'this is the site 3 description.', budget: 300000, labours: [ { name: 'name of labour', date: 'date of work', wage: 100}]  },
    { id: 4, name: 'site4', img: '/site4.jpeg', desc: 'this is the site 4 description.', budget: 400000, labours: [ { name: 'name of labour', date: 'date of work', wage: 100}] },
];


export const GET = async (req) => {
    revalidateTag('collection');
   return NextResponse.json(sites);
}



export const POST = async (request) => {
    const { name, amount, siteName} =await request.json();

    const selectedSite = sites.find(site => site.name === siteName);
    selectedSite.budget = selectedSite.budget - amount;
    console.log(selectedSite);
    revalidateTag('collection');
    return selectedSite;
}

// export const GET = async (request) => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 3600}});
//         const data = await res.json();
//         if(!res.ok) {
//          throw new Error('something went wrong');
//         }
//         return NextResponse.json(data);
//     } catch(err) {
//         console.log(err);
//     }
// }