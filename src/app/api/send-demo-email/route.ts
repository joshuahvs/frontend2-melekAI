// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();

  const {
    fullName,
    company,
    email,
    jobTitle,
    phone,
    country,
    city,
    budget,
  } = body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail", // or another SMTP provider
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD, 
//     },
//   });

//   const mailOptions = {
//     from: `"Demo Booking" <${process.env.EMAIL_USERNAME}>`,
//     to: "youremail@example.com", 
//     subject: "Demo Booking Client",
//     text: `
//         New demo booking request:

//         Name: ${fullName}
//         Company: ${company}
//         Email: ${email}
//         Job Title: ${jobTitle}
//         Phone: ${phone}
//         Country: ${country}
//         City: ${city}
//         Project Budget: ${budget}
//             `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error("Error sending email:", err);
//     return new NextResponse("Failed to send email", { status: 500 });
//   }
}
