import nodemailer from 'nodemailer'
import User from "../models/User.js";
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
      productsList += `<li style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 12px;color:#495464;margin-bottom: 5px;">${product.title} - $${product.unit_price}</li>`;
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Lance" <LanceApp4@gmail.com>',
        to: email,
        subject:"Purchase details...",
        html: `<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">

        <div style="margin:0;padding:0;display: flex;justify-content:center;align-items: center;" width="100%">
            <div style="width:614px;background-color:#F4F4F2;height:730px;">
                <div style="width:100%;background-color:#F4F4F2;height:6vh;display:flex;align-items: center;justify-content:space-between ">
                    <img style="width:129px;height:38px;padding-left: 70px;object-fit: cover;object-position: center;" src="https://i.postimg.cc/HWFJjCKw/logo.png" alt="logo">
                    <h2 style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 18px;padding-right:70px ;">${user.name}</h2>
                </div>
                <div style="height:208px;width:100%;background-color:#161616;display:flex;">
                    <div style="width:430px;height:208px">
        
                        <h2 style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 16px;color: white;padding-left: 100px;padding-top: 30px;">you bought in the store ${shop.name}</h2>
        
                        <h2 style="font-family:'Montserrat', sans-serif;font-weight: 700;font-size: 20px;color: white;padding-left: 100px;">arrives within 15 days</h2>
        
                    </div>
                    <div style="width:184px;height:208px">
                        <img style="width:80px;height:80px;border-radius: 100PX;margin-top:40px;margin-left: 20px;object-fit: cover;object-position: center;" src="${shop.photo}" alt="logo">
                    </div>
                </div>
        
                <div style="position: absolute; width: 433px; height: 487px; left: 550px; top: 200px;overflow:hidden;background-color: white;border-radius: 8px;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25); ;">
        
                    <div style="width:433px;height:15%;display: flex;align-items: flex-end;">
                        <h2 style="font-family:'Montserrat', sans-serif;font-weight: 500;font-size: 16px;padding-left: 44px;">Summary of your purchase</h2>
                        
                    </div>
                    <div style="width:433px;height:65%">
                        <div style="width:433px;height:20%;display: flex;align-items: flex-end;">
                            <div style="display:flex;justify-content: center;align-items: center;gap: 10px;">
                                <img style="width:24px;height:24px;padding-left: 44px;object-fit: cover;object-position: center;" src="https://i.postimg.cc/DydDfvWM/transport.png" alt="transport">
                                <h2 style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 12px;color: #495464;text-align: center;">Home delivery</h2>
                            </div>
                        </div>
                        <div style="width:433px;height:auto;display: flex;align-items: flex-start;flex-direction: column;">
                            <div style="display:flex;justify-content: center;align-items: center;gap: 10px;">
                                <img style="width:24px;height:24px;padding-left: 44px;object-fit: cover;object-position: center;" src="https://i.postimg.cc/Jh4tYzJV/products.png" alt="products">
                                <h2 style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 12px;color: #495464;text-align: center;">Products:</h2>
                            </div>
                            <div style="display:flex;justify-content: center;align-items: center;gap: 10px;padding-left: 60px;">
                                <ul>
                                    ${productsList}
                                </ul>
                            </div>
                        </div>
                        <div style="width:433px;height:20%;display: flex;align-items: flex-start;flex-direction: column;">
                            <div style="display:flex;justify-content: center;align-items: center;gap: 10px;">
                                <img style="width:24px;height:24px;padding-left: 44px;object-fit: cover;object-position: center;" src="https://i.postimg.cc/q7fj2WC3/pay.png" alt="pay">
                                <h2 style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 12px;color: #495464;text-align: center;">Paid $${totalValue}</h2>
                            </div>
                            <h2 style="font-family:'Montserrat', sans-serif;font-weight: 400;font-size: 12px;color: #495464;text-align: center;padding-left: 80px;">With credit card</h2>
                        </div>
                    </div>
                    <div style="width:433px;height:20%;display: flex;justify-content: center;align-items: center;">
                        <a style="text-decoration: none;font-family:'Montserrat', sans-serif;font-weight: 700;font-size: 16px;color: white;padding: 21px 75px;background: #161616;border-radius: 14px;" href="${process.env.CLIENT_URL}/shops">SEE MORE PRODUCTS</a>
                    </div>
                    
                </div>
                
            </div>
        
        </div>
        `
    });
  
}
  

export default createMailTransporterPay
