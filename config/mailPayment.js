import nodemailer from 'nodemailer'
import User from "../models/User";
import Shop from "../models/Shop.js";

async function createMailTransporterPay (userPayment) {
    const { email, storeId, totalValue, products } = userPayment;

    const user = await User.findOne({ email });
    const shop = await Shop.findById(storeId);
  
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    let productsList = "";
    products.forEach((product) => {
      productsList += `<li>${product.name} - ${product.price}</li>`;
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Lance" <LanceApp4@gmail.com>',
        to: email,
        subject:"Verify your email...",
        html: `<p>Hi ${user.name},</p>
        <p>Thank you for your purchase at ${shop.name}!</p>
        <p>Here's a summary of your order:</p>
        <ul>
          ${productsList}
        </ul>
        <p>Total: ${totalValue}</p>
        <img src="${shop.photo}" alt="${shop.name}" width="200px" />
        <p>Best regards,</p>
        <p>The Lance Team</p>`
    });
  
}
  

export default createMailTransporterPay