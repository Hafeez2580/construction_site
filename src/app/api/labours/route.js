import { NextResponse } from "next/server";

const labours = [
    { id: '1',  name: 'hafeez', wage: 1000, },
    { id: '2',  name: 'santhosh', wage: 800, },
    { id: '3',  name: 'rakesh', wage: 700, },
    { id: '4',  name: 'mukesh', wage: 800, },
    { id: '5',  name: 'ramesh', wage: 700, },
];


export const GET = async (req) => {
   return NextResponse.json(labours);
}


