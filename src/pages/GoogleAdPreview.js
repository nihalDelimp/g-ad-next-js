import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import $ from 'jquery';
import Image from 'next/image';
import { toast } from 'react-toastify';

function GoogleAdPreview() {
    const [headlineForm, setHeadlineForm] = useState(['Make this headline count', 'And this one', `Don't forget this one`])
    const [descriptionForm, setDescriptionForm] = useState(['Highlight Features of Your Service', 'description two'])

    const [siteLinkAsset, setSiteLinkAsset] = useState([{ headline: '', description_1: '', description_2: '' }, { headline: '', description_1: '', description_2: '' }, { headline: '', description_1: '', description_2: '' }, { headline: '', description_1: '', description_2: '' }])
    const [calloutAsset, setCalloutAsset] = useState(['', '', ''])
    const [promotionsAsset, setPromotionsAsset] = useState({ occasion: '', currency: '', promotion_type: '', discount: '', automatic_domain_name: '', promotion_details: '', promotion_start_date: '', promotion_end_date: '' })
    const [priceAsset, setPriceAsset] = useState({ currency: '', price_qualifier: '' })
    const [priceItems, setPriceItems] = useState([{ headline: '', price: '', description: '' }, { headline: '', price: '', description: '' }, { headline: '', price: '', description: '' }, { headline: '', price: '', description: '' }])
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')
    const [advertiserRating, setAdvertiserRating] = useState(false)
    const [structuredSnippets, setstructuredSnippets] = useState({ header: '' })
    const [snippetsItems, setSnippetsItems] = useState(['', '', ''])


    const maxHeadLineLimit = 30
    const maxDescriptionLimit = 90
    const maxSiteLinkHeadLimit = 25
    const maxSiteLinkDescLimit = 35
    const maxCalloutLimit = 25
    const maxPriceHeadLimit = 30
    const maxPriceDescLimit = 30
    const maxPhoneLimit = 15
    const maxSnippetsItemLimit = 25

    const handleChangeHeadLine = (i, event) => {
        const { value } = event.target
        let newInputValues = [...headlineForm];
        newInputValues[i] = value;
        setHeadlineForm(newInputValues)
    }

    const handleChangeDescription = (i, event) => {
        const { value } = event.target
        let newInputValues = [...descriptionForm];
        newInputValues[i] = value;
        setDescriptionForm(newInputValues)
    }

    const handleChangeSiteLinkAsset = (i, event) => {
        const { name, value } = event.target
        let newInputValues = [...siteLinkAsset];
        newInputValues[i][name] = value;
        setSiteLinkAsset(newInputValues)
    }

    const handleChangeCalloutAsset = (i, event) => {
        const { value } = event.target
        let newInputValues = [...calloutAsset];
        newInputValues[i] = value;
        setCalloutAsset(newInputValues)
    }

    const handleChangePromotionsAsset = (event) => {
        const { name, value } = event.target
        setPromotionsAsset(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangePriceAsset = (event) => {
        const { name, value } = event.target
        setPriceAsset(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangePriceItems = (i, event) => {
        const { name, value } = event.target
        let newInputValues = [...priceItems];
        newInputValues[i][name] = value;
        setPriceItems(newInputValues)
    }

    const handleChangeStructuredSneppets = (event) => {
        const { name, value } = event.target
        setstructuredSnippets(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangeSnippetsItems = (i, event) => {
        const { value } = event.target
        let newInputValues = [...snippetsItems];
        newInputValues[i] = value;
        setSnippetsItems(newInputValues)
    }




    const handleSubmit = async () => {
        const payload = {
            headlines: headlineForm,
            descriptions: descriptionForm,
            site_link_asset: siteLinkAsset,
            callout_asset: calloutAsset,
            promotions_asset: promotionsAsset,
            price_asset: { ...priceAsset, priceItems },
            phone_number: phoneNumber,
            address: address,
            message: message,
            advertiser_rating: advertiserRating,
            structured_snippets: { ...structuredSnippets, snippetsItems }
        };
        fetch('/api/save-new-ads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 1) {
                    toast.success('Registration successfully');
                } else {
                    toast.error(data.message);
                }
            })
            .catch(error => {
                toast.error(error.message);
                console.log(error);
            });
    };

    return (
        <>
            <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                onLoad={() => {
                    $(document).on("click", ".tab--item > label", function () {
                        $(this).parent().next(".tab--content").toggleClass("active");
                    });
                    $(document).on("click", ".tab--item--inner > label", function () {
                        $(".ds--input").toggleClass("active");
                    });
                }}
            />
            <section className="form--area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pr--45">
                            <div className="search--form--left">
                                <form action="/action_page.php">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Final URL</span>
                                        <input type="search" className="form-control" placeholder="Search" name="usrname" />
                                    </div>
                                </form>
                            </div>
                            <div className="headline--box mb-3">
                                <h3 className="title--sm mb-3">Headlines</h3>
                                <div className="headline--inputs">
                                    {headlineForm.map((item, i) =>
                                        <div className="input-group mb-2" key={i}>
                                            <span className="input-group-text">Headline {i + 1}</span>
                                            <input type="text" className="form-control" value={item} onChange={(e) => handleChangeHeadLine(i, e)} placeholder="Enter Headline" name="headline" />
                                            <span className={`input-group-text ${maxHeadLineLimit - item.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxHeadLineLimit - item.length}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="headline--box">
                                <h3 className="title--sm mb-3">DESCRIPTIONS</h3>
                                <div className="headline--inputs">
                                    {descriptionForm.map((item, i) =>
                                        <div className="input-group mb-2" key={i}>
                                            <span className="input-group-text">Description {i + 1}</span>
                                            <textarea name="description" value={item} onChange={(e) => handleChangeDescription(i, e)} className="form-control" id="" rows="2"></textarea>
                                            <span className={`input-group-text ${maxDescriptionLimit - item.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxDescriptionLimit - item.length}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="checkbox--form--group mt-4">
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2" value="something" />
                                    <label className="form-check-label" for="check2">ADD SITELINK ASSETS</label>
                                </div>
                                <div className="tab--content">
                                    <div className="form-check tab--item--inner mb-3 pl-60">
                                        <input type="checkbox" className="form-check-input" id="check12" name="option12" value="something" />
                                        <label className="form-check-label" for="check12">ADD SITELINK ASSETS</label>
                                    </div>

                                    {siteLinkAsset.map((item, i) =>
                                        <React.Fragment key={i}>
                                            <div className="input-group mb-2">
                                                <span className="input-group-text">Sitelink {i + 1}</span>
                                                <input type="text" className="form-control" onChange={(e) => handleChangeSiteLinkAsset(i, e)} name='headline' value={item.headline} placeholder="Show Headlines" />
                                                <span className={`input-group-text ${maxSiteLinkHeadLimit - item.headline.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxSiteLinkHeadLimit - item.headline.length}</span>
                                            </div>
                                            <div className="input-group mb-2 ps-4 ds--input">
                                                <span className="input-group-text">Description 1</span>
                                                <input type="text" className="form-control" placeholder="Sitelink description" onChange={(e) => handleChangeSiteLinkAsset(i, e)} value={item.description_1} name="description_1" />
                                                <span className={`input-group-text ${maxSiteLinkDescLimit - item.description_1.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxSiteLinkDescLimit - item.description_1.length}</span>
                                            </div>
                                            <div className="input-group mb-2 ps-4 ds--input">
                                                <span className="input-group-text">Description 2</span>
                                                <input type="text" className="form-control" placeholder="Sitelink description" onChange={(e) => handleChangeSiteLinkAsset(i, e)} value={item.description_2} name="description_2" />
                                                <span className={`input-group-text ${maxSiteLinkDescLimit - item.description_2.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxSiteLinkDescLimit - item.description_2.length}</span>
                                            </div>
                                        </React.Fragment>
                                    )}

                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check3" name="option3" value="something" />
                                    <label className="form-check-label" for="check3">ADD CALLOUT ASSETS</label>
                                </div>
                                <div className="tab--content">
                                    {calloutAsset.map((item, i) =>
                                        <div className="input-group mb-2" key={i}>
                                            <span className="input-group-text">Callout {i + 1}</span>
                                            <input type="text" className="form-control" onChange={(e) => handleChangeCalloutAsset(i, e)} value={item} placeholder="Additional Text for Ad" name="callout" />
                                            <span className={`input-group-text ${maxCalloutLimit - item.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxCalloutLimit - item.length}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check4" name="option4" value="something" />
                                    <label className="form-check-label" for="check4">ADD PROMOTIONS ASSET</label>
                                </div>
                                <div className="tab--content">
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Occasion</strong>
                                        <div className="col-9">
                                            <select name='occasion' onChange={handleChangePromotionsAsset} value={promotionsAsset.occasion} className="form-control ">
                                                <option value="" selected="selected">Choose Occasion</option>
                                                <option label="New Year&rsquo;s" value="New-Year">New Year&rsquo;s</option>
                                                <option label="Valentine&rsquo;s Day" value="Valentine-Day">Valentine&rsquo;s Day</option>
                                                <option label="Easter" value="Easter">Easter</option>
                                                <option label="Mother&rsquo;s Day" value="Mother-Day">Mother&rsquo;s Day</option>
                                                <option label="Father&rsquo;s Day" value="Father-Day">Father&rsquo;s Day</option>
                                                <option label="Labor Day" value="Labor-Day">Labor Day</option>
                                                <option label="Back to school" value="Back-to-school">Back to school</option>
                                                <option label="Halloween" value="Halloween">Halloween</option>
                                                <option label="Black Friday" value="Black-Friday">Black Friday</option>
                                                <option label="Cyber Monday" value="Cyber-Monday">Cyber Monday</option>
                                                <option label="Christmas" value="Christmas">Christmas</option>
                                                <option label="Boxing Day" value="Boxing Day">Boxing Day</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Currency</strong>
                                        <div className="col-9">
                                            <select name='currency' onChange={handleChangePromotionsAsset} value={promotionsAsset.currency} className="form-control ">
                                                <option value="" className="" selected="selected">Choose Currency</option>
                                                <option label="USD" value="USD">USD</option>
                                                <option label="AED" value="AED">AED</option>
                                                <option label="ARS" value="ARS">ARS</option>
                                                <option label="AUD" value="AUD">AUD</option>
                                                <option label="BGN" value="BGN">BGN</option>
                                                <option label="BND" value="BND">BND</option>
                                                <option label="BOB" value="BOB">BOB</option>
                                                <option label="BRL" value="BRL">BRL</option>
                                                <option label="CAD" value="CAD">CAD</option>
                                                <option label="CHF" value="CHF">CHF</option>
                                                <option label="CLP" value="CLP">CLP</option>
                                                <option label="CNY" value="CNY">CNY</option>
                                                <option label="COP" value="COP">COP</option>
                                                <option label="CZK" value="CZK">CZK</option>
                                                <option label="DKK" value="DKK">DKK</option>
                                                <option label="EGP" value="EGP">EGP</option>
                                                <option label="EUR" value="EUR">EUR</option>
                                                <option label="FJD" value="FJD">FJD</option>
                                                <option label="GBP" value="GBP">GBP</option>
                                                <option label="HKD" value="HKD">HKD</option>
                                                <option label="HRK" value="HRK">HRK</option>
                                                <option label="HUF" value="HUF">HUF</option>
                                                <option label="IDR" value="IDR">IDR</option>
                                                <option label="ILS" value="ILS">ILS</option>
                                                <option label="INR" value="INR">INR</option>
                                                <option label="JPY" value="JPY">JPY</option>
                                                <option label="KES" value="KES">KES</option>
                                                <option label="KRW" value="KRW">KRW</option>
                                                <option label="MAD" value="MAD">MAD</option>
                                                <option label="MXN" value="MXN">MXN</option>
                                                <option label="MYR" value="MYR">MYR</option>
                                                <option label="NOK" value="NOK">NOK</option>
                                                <option label="NZD" value="NZD">NZD</option>
                                                <option label="PEN" value="PEN">PEN</option>
                                                <option label="PHP" value="PHP">PHP</option>
                                                <option label="PKR" value="PKR">PKR</option>
                                                <option label="PLN" value="PLN">PLN</option>
                                                <option label="RON" value="RON">RON</option>
                                                <option label="RSD" value="RSD">RSD</option>
                                                <option label="RUB" value="RUB">RUB</option>
                                                <option label="SAR" value="SAR">SAR</option>
                                                <option label="SEK" value="SEK">SEK</option>
                                                <option label="SGD" value="SGD">SGD</option>
                                                <option label="THB" value="THB">THB</option>
                                                <option label="TRY" value="TRY">TRY</option>
                                                <option label="TWD" value="TWD">TWD</option>
                                                <option label="UAH" value="UAH">UAH</option>
                                                <option label="USD" value="USD">USD</option>
                                                <option label="VND" value="VND">VND</option>
                                                <option label="ZAR" value="ZAR">ZAR</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Promotion Type</strong>
                                        <div className="col-5">
                                            <select name='promotion_type' onChange={handleChangePromotionsAsset} value={promotionsAsset.promotion_type} className="form-control">
                                                <option value="" className="" selected="selected">Choose promotion type</option>
                                                <option value="Monetary discount" className="" selected="selected">Monetary discount</option>
                                                <option label="Percent discount" value="Percent-discount">Percent discount</option>
                                                <option label="Up to monetary discount" value="Up-to-monetary-discount">Up to monetary discount</option>
                                                <option label="Up to percent discount" value="Up-to-percent-discount">Up to percent discount</option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <input name='discount' onChange={handleChangePromotionsAsset} value={promotionsAsset.discount} type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Item</span>
                                        <input type="text" name='automatic_domain_name' onChange={handleChangePromotionsAsset} value={promotionsAsset.automatic_domain_name} className="form-control" placeholder="Automatic Domain Name" />
                                        <span className="input-group-text alert-success">0</span>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Promotion Details</strong>
                                        <div className="col-5">
                                            <select name='promotion_details' onChange={handleChangePromotionsAsset} value={promotionsAsset.promotion_details} className="form-control">
                                                <option value="" className="" selected="selected">None</option>
                                                <option label="On orders over" value="On-orders-over">On orders over</option>
                                                <option label="Promo code" value="Promo-code">Promo code</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <strong className="col-12">Promotion Dates</strong>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <div className="col-6">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">Start Date</span>
                                                <input type="date" className="form-control br--right" onChange={handleChangePromotionsAsset} value={promotionsAsset.promotion_start_date} placeholder="Select date" name="promotion_start_date" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">End Date</span>
                                                <input type="date" className="form-control br--right" onChange={handleChangePromotionsAsset} value={promotionsAsset.promotion_end_date} placeholder="Select date" name="promotion_end_date" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check5" name="option5" value="something" />
                                    <label className="form-check-label" for="check5">ADD PRICE ASSET</label>
                                </div>
                                <div className="tab--content">
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Currency</strong>
                                        <div className="col-9">
                                            <select name='currency' onChange={handleChangePriceAsset} value={priceAsset.currency} className="form-control">
                                                <option value="" selected="selected">Choose Currency </option>
                                                <option label="USD" value="USD">USD</option>
                                                <option label="GBP" value="GBP">GBP</option>
                                                <option label="EUR" value="EUR">EUR</option>
                                                <option label="INR" value="INR">INR</option>
                                                <option label="JPY" value="JPY">JPY</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Price Qualifier</strong>
                                        <div className="col-9">
                                            <select name='price_qualifier' onChange={handleChangePriceAsset} value={priceAsset.price_qualifier} className="form-control">
                                                <option value="" className="none" selected="selected">Choose qualifier</option>
                                                <option label="From" value="From">From</option>
                                                <option label="Up to" value="Up to">Up to</option>
                                                <option label="Average" value="Average">Average</option>
                                            </select>
                                        </div>
                                    </div>
                                    {
                                        priceItems.map((item, i) =>
                                            <div className="input-group mb-2" key={i}>
                                                <span className="input-group-text">Item {i + 1}</span>
                                                <div className="input--merge">
                                                    <input type="text" className="form-control" onChange={(e) => handleChangePriceItems(i, e)} value={item.headline} placeholder="Header" name="headline" />
                                                    <input type="number" className="form-control" onChange={(e) => handleChangePriceItems(i, e)} value={item.price} placeholder="0" name="price" />
                                                    <input type="text" className="form-control" onChange={(e) => handleChangePriceItems(i, e)} value={item.description} placeholder="Description" name="description" />
                                                </div>
                                                <span className={`input-group-text  span--br ${(maxPriceHeadLimit - item.headline.length < 0 || maxPriceDescLimit - item.description.length < 0) ? 'alert-danger' : 'alert-success'}`}><span>{maxPriceHeadLimit - item.headline.length}</span> <span>--</span><span>{maxPriceDescLimit - item.description.length}</span></span>
                                            </div>
                                        )}
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check6" name="option6" value="something" />
                                    <label className="form-check-label" for="check6">ADD CALL ASSET</label>
                                </div>
                                <div className="tab--content">
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Phone Number</span>
                                        <input type="number" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} className="form-control" placeholder="8001234567" />
                                        <span className={`input-group-text ${maxPhoneLimit - phoneNumber.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxPhoneLimit - phoneNumber.length}</span>
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check7" name="option7" value="something" />
                                    <label className="form-check-label" for="check7">ADD LOCATION ASSETS</label>
                                </div>
                                <div className="tab--content">
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Address</span>
                                        <input type="text" name='address' onChange={(e) => setAddress(e.target.value)} className="form-control br--right" placeholder="" />
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check8" name="option8" value="something" />
                                    <label className="form-check-label" for="check8">ADD MESSAGE ASSETS</label>
                                </div>
                                <div className="tab--content">
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Msg. Ext. Text</span>
                                        <input type="text" name='message' onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder="Got Questions? Send Us a Text!" />
                                        <span className="input-group-text alert-success">5</span>
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" onChange={(e) => setAdvertiserRating(e.target.checked)} checked={advertiserRating} className="form-check-input" id="check9" name="option9" value="something" />
                                    <label className="form-check-label" for="check9">SHOW ADVERTISER RATING</label>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check10" name="option10" value="something" />
                                    <label className="form-check-label" for="check10">ADD STRUCTURED SNIPPETS ASSET</label>
                                </div>
                                <div className="tab--content">
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Header</strong>
                                        <div className="col-9">
                                            <select name='header' onChange={handleChangeStructuredSneppets} value={structuredSnippets.header} className="form-control">
                                                <option value="" className="" selected="selected">Choose Header</option>
                                                <option label="Amenities" value="Amenities">Amenities</option>
                                                <option label="Brands" value="Brands">Brands</option>
                                                <option label="Courses" value="Courses">Courses</option>
                                                <option label="Degree programs" value="Degree programs">Degree programs</option>
                                                <option label="Destinations" value="Destinations">Destinations</option>
                                                <option label="Featured hotels" value="Featured hotels">Featured hotels</option>
                                                <option label="Insurance coverage" value="Insurance coverage">Insurance coverage</option>
                                                <option label="Models" value="Models">Models</option>
                                                <option label="Neighborhoods" value="Neighborhoods">Neighborhoods</option>
                                                <option label="Service catalog" value="Service catalog">Service catalog</option>
                                                <option label="Shows" value="Shows">Shows</option>
                                                <option label="Styles" value="Styles">Styles</option>
                                                <option label="Types" value="Types">Types</option>
                                            </select>
                                        </div>
                                    </div>

                                    {snippetsItems.map((element, i) =>
                                        <div className="input-group mb-2" key={i}>
                                            <span className="input-group-text">Value {i + 1}</span>
                                            <input type="text" onChange={(e) => handleChangeSnippetsItems(i, e)} value={element} className="form-control" placeholder="" name="item" />
                                            <span className={`input-group-text ${maxSnippetsItemLimit - element.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxSnippetsItemLimit - element.length}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form--actions">
                                <button className="btn btn-warning w-100 text-white" type="button">RESET</button>
                                <button onClick={handleSubmit} className="btn btn-success text-white" type="button">SHARE THIS AD</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pl--45">
                            <div className="main-sec">
                                <div className="desktop-sec">
                                    <div id="header">
                                        <div id="topbar">
                                            {/* <img id="searchbarimage" src={require("./image/googlelogo_color_120x44dp.png")} alt='' /> */}
                                            <Image id="searchbarimage" src="/googlelogo_color_120x44dp.png" alt="Google logo" width={120} height={44} />
                                            <div id="searchbar" type="text">
                                                <input id="searchbartext" type="text" placeholder="Search Terms Here" />
                                                <button id="searchbarbutton">
                                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="searchresultsarea">
                                        <div className="searchresult">
                                            <a><span className="adtag--site">Ad.&nbsp;</span>www.example.com/3-Headlines/2-Descriptions </a>
                                            <h2>{`${headlineForm[0]} | ${headlineForm[1]} | ${headlineForm[2]}`}</h2>
                                            <p>{`${descriptionForm[0]} - ${descriptionForm[1]}`}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mobile-sec">
                                            <div className="mobile-inner">
                                                <div id="header">
                                                    <div className="search-result">

                                                        <div class="g--img">
                                                            <Image id="searchbarimage" src="/googlelogo_color_120x44dp.png" alt="Google logo" width={120} height={44} />

                                                            {/* <img id="searchbarimage" src={require("./image/googlelogo_color_120x44dp.png")} /> */}
                                                        </div>
                                                        <div class="mobile--topbar">
                                                            <div class="input--group">
                                                                <input id="mobile-search-input" value="Search Term here..." class="form-control input" type="text" />
                                                                <div class="btn-search">
                                                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="mob-captions">
                                                                <span class="active--mob--cps">ALL</span>
                                                                <span>IMAGES</span>
                                                                <span>VIDEOS</span>
                                                                <span>NEWS</span>
                                                                <span>BOOKS</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div id="searchresultsarea">
                                                    <div className="searchresult">
                                                        <a><span className="adtag--site">Ad.&nbsp;</span>www.example.com/3-Headlines/2-Descriptions </a>
                                                        <h2>{`${headlineForm[0]} | ${headlineForm[1]} | ${headlineForm[2]}`}</h2>
                                                        <p>{`${descriptionForm[0]} - ${descriptionForm[1]}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GoogleAdPreview
