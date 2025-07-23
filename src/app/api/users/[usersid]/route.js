import { NextResponse } from "next/server";
import { userModel } from "@/lib/model/user";
import { mongoURI } from "@/lib/db";
import mongoose from "mongoose";

//GET SINGLE DATA FOR UPDATE & POPULATE OVER UI//

export async function GET(request, { params }) {
    const { usersid } = await params
    const edit_id = { _id: usersid }
    await mongoose.connect(mongoURI)
    const result = await userModel.findById(edit_id)
    //console.log(result)
    return NextResponse.json({
        data: result
    })

}

// POST UPDATED DATA INTO DATABASE & UPDATE THE RESULT //
export async function PUT(request, { params }) {
    const { usersid } = await params
   
    const editId = { _id: usersid }
   
    //console.log(usersid )
    const payload = await request.json()
    //console.log(payload)
    await mongoose.connect(mongoURI)
    try {
        const result = await userModel.findOneAndUpdate(editId,payload)
        return NextResponse.json({
            message:"SuccessFull Updated",
            data:result
        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:error.message,
           
        },{
            status:500
        })
    }

}

// DELETE DATA BASED ON ID //

export async function DELETE(request, { params }) {
    const { usersid } = await params
    //console.log(usersid)

    const record = { _id: usersid }
    await mongoose.connect(mongoURI)
    try {
        const result = await userModel.deleteOne(record)
        return NextResponse.json({
            message: "Deleted Successfully",
            data: result
        }, {
            status: 200
        }
        )

    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: error.response?.status || 500 }
        );
    }
}