import { connect } from "@/dbConfig/dbConfig";
import { sendMail } from "@/helpers/mailer";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Connect to the database
    await connect();

    // Parse the request body
    const reqBody = await request.json();
    const { fullName, email, mobile, message } = reqBody;
    console.log(fullName,email,mobile,message);
    
    // Validate required fields
    if (!fullName || !email || !mobile || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save the data to the database
    const newUser = new User({ fullName, email, mobile,message });
    const savedUser = await newUser.save();

    // Send Email
    await sendMail({ email, emailType: "VERIFY", userId: savedUser._id });

    // Respond with success
    return NextResponse.json(
      { message: "User created successfully", user: savedUser },
      { status: 201 }
    );
  } catch (error:any) {
    // Handle errors
    console.log(error.message,"jajajjajaja");
    
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
