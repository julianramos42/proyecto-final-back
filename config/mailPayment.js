import nodemailer from 'nodemailer'
import User from "../models/User.js";
import Shop from "../models/Shop.js";

async function createMailTransporterPay(userPayment) {
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


    let productsName = "";
    products.forEach((product) => {
        productsName += `<li style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 12px;color:#495464;min-height: 20px;margin-bottom: 5px;">${product.title}</li>`;
    });

    let productsPrice = "";
    products.forEach((product) => {
        productsPrice += `<li style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 12px;color:#495464;min-height: 20px;margin-bottom: 5px;">$${product.unit_price}</li>`;
    });

    let productsQuantity = "";
    products.forEach((product) => {
        productsQuantity += `<li style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 12px;color:#495464;min-height: 20px;margin-bottom: 5px;">${product.quantity}</li>`;
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Lance" <LanceApp4@gmail.com>',
        to: email,
        subject: "Purchase details...",
        html: `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Subject</title>
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        </head>
        <body>
            <div style="margin:0;padding:0;background-color:#F4F4F2;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#F4F4F2" style="max-width:614px;margin:0 auto;">
                <tr>
                  <td height="60" style="font-size:0;line-height:0;border-collapse:collapse;">
                    <img style="width:129px;height:38px;padding-left:70px;object-fit:cover;object-position:center;" src="https://i.postimg.cc/HWFJjCKw/logo.png" alt="logo" />
                  </td>
                </tr>
                <tr>
                  <td height="208" style="font-size:0;line-height:0;border-collapse:collapse;">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#161616">
                      <tr>
                        <td width="430" valign="middle" style="font-size:0;line-height:0;border-collapse:collapse;padding-left:100px;">
                          <h2 style="font-family:'Montserrat', sans-serif;font-weight:400;font-size:16px;color:white;margin:0;padding-top:10px;">You bought in the store ${shop.name}</h2>
                          <h2 style="font-family:'Montserrat', sans-serif;font-weight:700;font-size:20px;color:white;margin:0;padding-top:30px;">Arrives within 15 days</h2>
                        </td>
                        <td width="184" height="200" valign="middle" style="font-size:0;line-height:0;border-collapse:collapse;">
                          <img style="width:80px;height:80px;border-radius:100px;margin-top:20px;margin-left:20px;object-fit:cover;object-position:center;" src="https://i.postimg.cc/Kjv4zzqZ/logostore.jpg" alt="logo" />
                        </td>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td height="400" style="font-size:0;line-height:0;border-collapse:collapse;position:relative;">
                    <div style="position:absolute;width:50%;height:400px;padding: 50px 25% 0 25%;left:50%;top:45%;transform:translate(-50%,-50%);overflow:hidden;background-color:white;border-radius:8px;box-shadow:0px 4px 4px rgba(0,0,0,0.25);">
                      <div style="width:433px;height:5%;display:flex;align-items:flex-end;padding-left:44px;">
                        <h2 style="font-family:'Montserrat', sans-serif;font-weight:500;font-size:16px;margin:0;">Summary of your purchase</h2>
                      </div>
                    <div style="width:433px;height:70%;display:flex;align-items:center;justify-content:center;">
                        <table cellpadding="0" cellspacing="0" border="0" width="80%">
                            <tr>
                                <td style="font-family:'Montserrat', sans-serif;font-weight:500;font-size:14px;padding:10px;border-bottom:1px solid #E8E8E8;">Product Name:</td>
                                <td style="font-family:'Montserrat', sans-serif;font-weight:400;font-size:14px;padding:10px;border-bottom:1px solid #E8E8E8;">

                                    <ul>
                                      ${productsName}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td style="font-family:'Montserrat', sans-serif;font-weight:500;font-size:14px;padding:10px;border-bottom:1px solid #E8E8E8;">Price:</td>
                                <td style="font-family:'Montserrat', sans-serif;font-weight:400;font-size:14px;padding:10px;border-bottom:1px solid #E8E8E8;">
                                    <ul>
                                      ${productsPrice}
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td style="font-family:'Montserrat', sans-serif;font-weight:500;font-size:14px;padding:10px;border-bottom:1px solid #E8E8E8;">Quantity:</td>
                                <td style="font-family:'Montserrat', sans-serif;font-weight:400;font-size:14px;padding:10px;border-bottom:1px solid #E8E8E8;">

                                    <ul>
                                      ${productsQuantity}
                                    </ul>

                                </td>
                            </tr>
                            <tr>
                                <td style="font-family:'Montserrat', sans-serif;font-weight:500;font-size:14px;padding:10px;">Total:</td>
                                <td style="font-family:'Montserrat', sans-serif;font-weight:400;font-size:14px;padding:10px;">
                                    <ul>
                                        $${totalValue}
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                  </td>
                  <tr>
                    <td height="60" style="font-size:0;line-height:0;border-collapse:collapse;">
                        <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding-left:25%">
                            <a style="text-decoration: none;font-family:'Montserrat', sans-serif;font-weight: 700;font-size: 16px;color: white;padding: 30px 75px;background: #161616;border-radius: 14px;" href="${process.env.CLIENT_URL}/shops">SEE MORE PRODUCTS</a>
                        </div>
                    </td>
                </tr>
                </tr>
              </table>
            </div> 
        </body>
        </html>
        `
    });

}


export default createMailTransporterPay
