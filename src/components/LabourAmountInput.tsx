'use client';

import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";


function LabourAmountInput() {
  const [labourData, setLabourData] = useState([{ wage: 0, }]);
  const [labour, setSelectedLabour] = useState({wage: 0});

  useEffect(() => {
    async function getLabourData() {
        const labours = await fetch('http://localhost:3002/api/labours',  {next: { revalidate: 1 }});
        const labourData = await labours.json();
        console.log('labourData', labourData);
        setLabourData(labourData);
      }
      getLabourData();
  }, []);

  const getWage = async (value:any) => {
        console.log('from getWage', value);

        const selectedLabour = labourData.find((labour:any) => labour?.name === value);
        setSelectedLabour(selectedLabour as any);
        console.log('labour', labour);
        
  }

  return (
    <>
    <div className="flex flex-col space-y-1.5">
              <Label htmlFor="labour">Labours</Label>
              <Select name="labourName" onValueChange={getWage} >
                <SelectTrigger id="labour">
                  <SelectValue placeholder="Select"/>
                </SelectTrigger>
                <SelectContent  position="popper">
                    {/* {data.map((site:any) => {
                     return <SelectItem key={site?.id}  value={site?.name}>{site.name}</SelectItem> 
                     } }
                    { ) } */}

                    { labourData.map((labour:any) => <SelectItem key={labour?.id} value={labour?.name}>{labour.name}</SelectItem> )}

                  {/* <SelectItem value="next">Site 1</SelectItem>
                  <SelectItem value="sveltekit">Site 2</SelectItem>
                  <SelectItem value="astro">Site 3</SelectItem>
                  <SelectItem value="nuxt">Site 4</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
    <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Amount</Label>
        <Input type="number" name="amount" id="name" placeholder="500" value={labour?.wage}/>
    </div>
    </>
  )
}

export default LabourAmountInput;