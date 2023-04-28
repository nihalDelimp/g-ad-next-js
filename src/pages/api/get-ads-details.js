import connectDB from '../../config/db';
import Ad from '../../models/ad';
connectDB();
export default async function handler(req, res) {
    // Handle the API request here
    try {
        const ad = await Ad.findById(req.params.id);
        if (!ad) {
            return res.status(404).json({ message: 'Ad not found' });
        }
        const adId = ad._id.toString();
        res.status(200).json(ad);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}