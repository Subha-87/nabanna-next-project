import { NextResponse } from "next/server";

import mongoose from "mongoose";
import { mongoURI } from "@/lib/db";
import { userModel } from "@/lib/model/user"


//const DBconnect = require('../../../lib/db')




// GET METHOD //


export async function GET() {

    //await DBconnect()
    let data = []
    let success = true
    try {
        await mongoose.connect(mongoURI)
        data = await userModel.find()
        return NextResponse.json({
            result: data,
            success:success
        })
        
    } catch (error) {
        data = {result:"error"}
        success= false
    }
    //console.log(data)



}

// POST METHOD //

export async function POST(request) {

    const payload = await request.json()
    console.log(payload)
    await mongoose.connect(mongoURI)

    let newUser = new userModel(payload)
    const result = await newUser.save()
    return NextResponse.json({
        result: result,
        success: true,
        message: "Successfully Created"
    }, {
        status: 201
    }
    )


}



