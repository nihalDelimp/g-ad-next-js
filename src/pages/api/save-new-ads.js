import sendgrid from "@sendgrid/mail";
import connectDB from '../../config/db';
import { generateUniqueId } from '../../helper/helpers';
import Ad from '../../models/ad';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(url, email) {
    try {
        await sendgrid.send({
            to: "nhlchaurasia1234@gmail.com", //postmagnetmedia@gmail.com
            from: "nihal@delimp.com",
            subject: "Here's some new ads has been created",
            html: `<!DOCTYPE html>
            <html>
              <head>
                <title>New Ad Preview Created</title>
              </head>
              <body>
                <p>Dear postmagnetmedia,</p>
                <p>
                  I am pleased to inform you that the ad preview has been created by <b>${email}</b>. I am excited to share
                  with you the URL for the final ad preview:
                  <a href="https://g-ad-next-js.vercel.app/${url}">https://g-ad-next-js.vercel.app/${url}</a>.
                </p>
                <p>
                  I would appreciate it if you could take a moment to review the ad.
                  Thank you for your continued support.
                </p>
                <p>Best regards,</p>
                <p>Nobody</p>
              </body>
            </html>
            `,
            text: "body",
            cc: 'nobody@delimp.com'
        });
    } catch (error) {
        console.log(error.message)
        // return res.status(error.statusCode || 500).json({ error: error.message });
    }

}

connectDB();

export default async function handler(req, res) {
    // Handle the API request here
    try {
        const adId = generateUniqueId();
        const ad = new Ad({
            _id: adId,
            final_url: req.body.final_url,
            headlines: req.body.headlines,
            descriptions: req.body.descriptions,
            site_link_asset: req.body.site_link_asset,
            callout_asset: req.body.callout_asset,
            promotions_asset: req.body.promotions_asset,
            price_asset: req.body.price_asset,
            phone_number: req.body.phone_number,
            address: req.body.address,
            message: req.body.message,
            advertiser_rating: req.body.advertiser_rating,
            structured_snippets: req.body.structured_snippets,
            generatedID: adId,
            email: req.body.email,
            isSiteLinkHead: req.body.isSiteLinkHead,
            isSiteLinkDesc: req.body.isSiteLinkDesc,
            isCallout: req.body.isCallout,
            ispromotion: req.body.ispromotion,
            isAddPrice: req.body.isAddPrice,
            isCallAsset: req.body.isCallAsset,
            isLocationAsset: req.body.isLocationAsset,
            isMessageAsset: req.body.isMessageAsset,
            isSnippetsAsset: req.body.isSnippetsAsset,
        });
        console.log(req.body.final_url)
        await ad.save();
        await sendEmail(`resources/adspreview?id=${adId}`, req.body.email);
        res.status(201).json({ id: adId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}