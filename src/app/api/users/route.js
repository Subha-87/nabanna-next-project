import { NextResponse } from "next/server";

import mongoose from "mongoose";
import { mongoURI } from "@/lib/db";
import { userModel } from "@/lib/model/user"


//const DBconnect = require('../../../lib/db')




// GET METHOD //


export async function GET() {

    //await DBconnect()

    await mongoose.connect(mongoURI)
    const data = await userModel.find()
    //console.log(data)

    return NextResponse.json({
        data: data
    })


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



