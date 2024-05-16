'use server';
import {redirect} from 'next/navigation'

const actionInComponent = async (formData: any) => {

    const { nameOfLabour, amount, siteName } = Object.fromEntries(formData);

    const res = await fetch('http://localhost:3002/api/sites', {
        method: 'POST',
        body: JSON.stringify({
            name: nameOfLabour,
            amount,
            siteName,
        }),
       
    });
    



    // const sites = [
    //     { id: 1, name: 'site1', img: '/site1.jpeg', desc: 'this is the site 1 description.', budget: 100000, labours: [ { id: 'name of labour', date: 'date of work', wage: 100}] },
    //     { id: 2, name: 'site2', img: '/site2.jpeg', desc: 'this is the site 2 description.', budget: 200000, labours: [ { id: 'name of labour', date: 'date of work', wage: 100}]  },
    //     { id: 3, name: 'site3', img: '/site3.jpeg', desc: 'this is the site 3 description.', budget: 300000, labours: [ { id: 'name of labour', date: 'date of work', wage: 100}]  },
    //     { id: 4, name: 'site4', img: '/site4.jpeg', desc: 'this is the site 4 description.', budget: 400000, labours: [ { id: 'name of labour', date: 'date of work', wage: 100}] },
    // ];

    
    // const { nameOfLabour, amount, siteName } = Object.fromEntries(formData);
    // const selectedSite = sites.filter((site) => site.name === siteName).map(site => {
    //     return [
    //         {...site, labours: [ ...site.labours, { id: nameOfLabour, date: Date.now().toString(), wage: amount }]}
    //     ]
    // }).flat(10);

    // sites[selectedSite[0].id].labours.push({ id: nameOfLabour, date: Date.now().toString(), wage: amount });
   
    // const updatedSite = selectedSite.forEach(site => {
    //     return [
    //         {...site, labours: [ ...site.labours, { id: nameOfLabour, date: Date.now().toString(), wage: amount }]}
    //     ]
    // });
    // console.log('updatedSite', selectedSite[0].labours);
    
    // console.log('selectedSite', selectedSite)
    // console.log('newSite', );
    // const userName = formData.get('name');
    // console.log(name, desc, slug, userId);
    redirect('/Sites');
  };

  export default actionInComponent;