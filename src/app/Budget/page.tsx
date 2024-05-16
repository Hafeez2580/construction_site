import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import actionInComponent from '@/actions/serverAction';
import LabourAmountInput from '@/components/LabourAmountInput';






async function Budget() {
    const sites = await fetch('http://localhost:3002/api/sites',  {next: { revalidate: 1 }});
    const data = await sites.json();

    const labours = await fetch('http://localhost:3002/api/labours',  {next: { revalidate: 1 }});
    const labourData = await labours.json();

  return (
    <form action={actionInComponent}>
    <Card className="mx-auto mt-5 w-[350px]">
      <CardHeader>
        <CardTitle>Allocate Budget to a Site </CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
       
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Site</Label>
              <Select name="siteName">
                <SelectTrigger name='some name' id="name">
                  <SelectValue placeholder="Select"/>
                </SelectTrigger>
                <SelectContent position="popper">
                    {/* {data.map((site:any) => {
                     return <SelectItem key={site?.id}  value={site?.name}>{site.name}</SelectItem> 
                     } }
                    { ) } */}

                    { data.map((site:any) => <SelectItem key={site?.id}  value={site?.name}>{site.name}</SelectItem> )}

                  {/* <SelectItem value="next">Site 1</SelectItem>
                  <SelectItem value="sveltekit">Site 2</SelectItem>
                  <SelectItem value="astro">Site 3</SelectItem>
                  <SelectItem value="nuxt">Site 4</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
            <LabourAmountInput />
          </div>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Allocate</Button>
      </CardFooter>
    </Card>
    </form>
  )
}

export default Budget