import mongoose from 'mongoose';

const { Schema } = mongoose;

const promotionSchema = new Schema({
    occasion: String,
    currency: String,
    promotion_type: String,
    discount: String,
    automatic_domain_name: String,
    promotion_details: String,
    promotion_start_date: Date,
    promotion_end_date: Date
});

const priceItemSchema = new Schema({
    headline: String,
    price: String,
    description: String
});

const priceAssetSchema = new Schema({
    currency: String,
    price_qualifier: String,
    priceItems: [priceItemSchema]
});

const structuredSnippetsSchema = new Schema({
    header: String,
    snippetsItems: [String]
});

const siteLinkSchema = new Schema({
    headline: String,
    description_1: String,
    description_2: String
});

const adSchema = new Schema({
    headlines: [String],
    descriptions: [String],
    site_link_asset: [siteLinkSchema],
    callout_asset: [String],
    promotions_asset: promotionSchema,
    price_asset: priceAssetSchema,
    phone_number: String,
    address: String,
    message: String,
    advertiser_rating: Boolean,
    structured_snippets: structuredSnippetsSchema,
});

let Ad;

try {
    Ad = mongoose.model('Ad');
} catch (error) {
    Ad = mongoose.model('Ad', adSchema);
}

export default Ad;
