import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { mongoURI } from "@/lib/db";
import {empModel } from "@/lib/model/employee"
//const DBconnect = require('../../../lib/db')


// 
export async function GET(){
     
    //DBconnect()
    await mongoose.connect(mongoURI )
    const data = await empModel.find()
    console.log(data)
    return NextResponse.json({
        message:data
    })
}


export async function POST(request,content) {
    //const payload = content.p
}