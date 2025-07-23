import { NextResponse } from 'next/server';
const DBconnect = require('../../../lib/db')
import empModel from "@/lib/model/employee";
const empCollection = require('../../../lib/model/employee')

// GET handler
export async function GET() {
   //DBconnect()
 
  return NextResponse.json({
    message: 'Hello from API!',
    timestamp: new Date().toISOString()
  });
}

// POST handler
export async function POST(request) {
  const data = await request.json();
  return NextResponse.json({
    received: true,
    data,
    method: 'POST'
  }, { status: 201 });
}