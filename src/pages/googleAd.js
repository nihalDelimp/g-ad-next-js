import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import $ from 'jquery';
import Image from 'next/image';

function GoogleAdd() {
    const [headlineForm, setHeadlineForm] = useState([{ headline: 'Make this headline count' }, { headline: 'And this one' }, { headline: `Don't forget this one` }])
    const [descriptionForm, setDescriptionForm] = useState([{ description: 'Highlight Features of Your Service/Product' }, { description: 'description two' }])

    var maxHeadLineLength = 30
    var maxDescriptionLength = 90
    const handleChangeHeadLine = (i, event) => {
        const { name, value } = event.target
        let newInputValues = [...headlineForm];
        newInputValues[i][name] = value;
        setHeadlineForm(newInputValues)
    }

    const handleChangeDescription = (i, event) => {
        const { name, value } = event.target
        let newInputValues = [...descriptionForm];
        newInputValues[i][name] = value;
        setDescriptionForm(newInputValues)
    }

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
                                        <div className="input-group mb-2">
                                            <span className="input-group-text">Headline {i + 1}</span>
                                            <input type="text" className="form-control" value={item.headline} onChange={(e) => handleChangeHeadLine(i, e)} placeholder="Enter Headline" name="headline" />
                                            {/* <span className={`input-group-text ${maxHeadLineLength - item.headline.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxHeadLineLength - item.headline.length}</span> */}
                                            <span className={`input-group-text ${maxHeadLineLength - item.headline.length < 0 ? 'alert-danger' : 'alert-success'}`}>{maxHeadLineLength - item.headline.length}</span>

                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="headline--box">
                                <h3 className="title--sm mb-3">DESCRIPTIONS</h3>
                                <div className="headline--inputs">
                                    {descriptionForm.map((item, i) =>
                                        <div className="input-group mb-2">
                                            <span className="input-group-text">Description {i + 1}</span>
                                            <textarea name="description" value={item.description} onChange={(e) => handleChangeDescription(i, e)} className="form-control" id="" rows="2"></textarea>
                                            <span className={`input-group-text ${maxDescriptionLength - item.description.length >= 0 ? 'alert-success' : 'alert-danger'} `}>{maxDescriptionLength - item.description.length}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="checkbox--form--group mt-4">
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check2" name="option2" value="something" />
                                    <label className="form-check-label" htmlFor="check2">ADD SITELINK ASSETS</label>
                                </div>
                                <div className="tab--content">
                                    <div className="form-check tab--item--inner mb-3 pl-60">
                                        <input type="checkbox" className="form-check-input" id="check12" name="option12" value="something" />
                                        <label className="form-check-label" htmlFor="check12">ADD SITELINK ASSETS</label>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Sitelink 1</span>
                                        <input type="text" className="form-control" placeholder="Show 2 Headlines" name="usrname" />
                                        <span className="input-group-text alert-success">15</span>
                                    </div>
                                    <div className="input-group mb-2 ps-4 ds--input">
                                        <span className="input-group-text">Description 1</span>
                                        <input type="text" className="form-control" placeholder="Sitelink1 description first line" name="usrname" />
                                        <span className="input-group-text alert-success">3</span>
                                    </div>
                                    <div className="input-group mb-2 ps-4 ds--input">
                                        <span className="input-group-text">Description 2</span>
                                        <input type="text" className="form-control" placeholder="Sitelink1 description second line" name="usrname" />
                                        <span className="input-group-text alert-success">2</span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Sitelink 2</span>
                                        <input type="text" className="form-control" placeholder="30-Character Headline" name="usrname" />
                                        <span className="input-group-text alert-success">18</span>
                                    </div>
                                    <div className="input-group mb-2 ps-4 ds--input">
                                        <span className="input-group-text ">Description 1</span>
                                        <input type="text" className="form-control" placeholder="Sitelink2 description first line" name="usrname" />
                                        <span className="input-group-text alert-success">3</span>
                                    </div>
                                    <div className="input-group mb-2 ps-4 ds--input">
                                        <span className="input-group-text">Description 2</span>
                                        <input type="text" className="form-control" placeholder="Sitelink2 description second line" name="usrname" />
                                        <span className="input-group-text alert-success">2</span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Sitelink 3</span>
                                        <input type="text" className="form-control" placeholder="80 Character Description" name="usrname" />
                                        <span className="input-group-text alert-success">21</span>
                                    </div>
                                    <div className="input-group mb-2 ps-4 ds--input">
                                        <span className="input-group-text">Description 1</span>
                                        <input type="text" className="form-control" placeholder="Sitelink3 description first line" name="usrname" />
                                        <span className="input-group-text alert-success">3</span>
                                    </div>
                                    <div className="input-group mb-2 ps-4 ds--input">
                                        <span className="input-group-text">Description 2</span>
                                        <input type="text" className="form-control" placeholder="Sitelink3 description second line" name="usrname" />
                                        <span className="input-group-text alert-success">2</span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Sitelink 4</span>
                                        <input type="text" className="form-control" placeholder="Automatic Domain Name" name="usrname" />
                                        <span className="input-group-text alert-success">21</span>
                                    </div>
                                    <div className="input-group mb-2 ps-4 ds--input">
                                        <span className="input-group-text">Description 1</span>
                                        <input type="text" className="form-control" placeholder="Sitelink4 description first line" name="usrname" />
                                        <span className="input-group-text alert-success">3</span>
                                    </div>
                                    <div className="input-group mb-2 ps-4 ds--input">
                                        <span className="input-group-text">Description 2</span>
                                        <input type="text" className="form-control" placeholder="Sitelink4 description second line" name="usrname" />
                                        <span className="input-group-text alert-success">2</span>
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check3" name="option3" value="something" />
                                    <label className="form-check-label" htmlFor="check3">ADD CALLOUT ASSETS</label>
                                </div>
                                <div className="tab--content">
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Callout 1</span>
                                        <input type="text" className="form-control" placeholder="Additional Text for Ad" name="usrname" />
                                        <span className="input-group-text alert-success">15</span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Callout 2</span>
                                        <input type="text" className="form-control" placeholder="Product/Service Details" name="usrname" />
                                        <span className="input-group-text alert-success">18</span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Callout 3</span>
                                        <input type="text" className="form-control" placeholder="Highlight Offers" name="usrname" />
                                        <span className="input-group-text alert-success">21</span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Callout 4</span>
                                        <input type="text" className="form-control" placeholder="Show Additional Benefits" name="usrname" />
                                        <span className="input-group-text alert-success">21</span>
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check4" name="option4" value="something" />
                                    <label className="form-check-label" htmlFor="check4">ADD PROMOTIONS ASSET</label>
                                </div>
                                <div className="tab--content">
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Occasion</strong>
                                        <div className="col-9">
                                            <select className="form-control ">
                                                <option value="" className="" selected="selected">None</option>
                                                <option label="New Year's" value="New-Year">New Year's</option>
                                                <option label="Valentine's Day" value="Valentine-Day">Valentine's Day</option>
                                                <option label="Easter" value="Easter">Easter</option>
                                                <option label="Mother's Day" value="Mother-Day">Mother's Day</option>
                                                <option label="Father's Day" value="Father-Day">Father's Day</option>
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
                                            <select className="form-control ">
                                                <option value="" className="" selected="selected">USD</option>
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
                                            <select className="form-control">
                                                <option value="" className="" selected="selected">Monetary discount</option>
                                                <option label="Percent discount" value="Percent-discount">Percent discount</option>
                                                <option label="Up to monetary discount" value="Up-to-monetary-discount">Up to monetary discount</option>
                                                <option label="Up to percent discount" value="Up-to-percent-discount">Up to percent discount</option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Item</span>
                                        <input type="text" className="form-control" placeholder="Automatic Domain Name" name="usrname" />
                                        <span className="input-group-text alert-success">0</span>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Promotion Details</strong>
                                        <div className="col-5">
                                            <select className="form-control">
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
                                                <input type="text" className="form-control br--right" placeholder="" name="usrname" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">End Date</span>
                                                <input type="text" className="form-control br--right" placeholder="" name="usrname" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check5" name="option5" value="something" />
                                    <label className="form-check-label" htmlFor="check5">ADD PRICE ASSET</label>
                                </div>
                                <div className="tab--content">
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Currency</strong>
                                        <div className="col-9">
                                            <select className="form-control">
                                                <option value="?" selected="selected"></option>
                                                <option label="USD" value="">USD</option>
                                                <option label="GBP" value="">GBP</option>
                                                <option label="EUR" value="">EUR</option>
                                                <option label="INR" value="">INR</option>
                                                <option label="JPY" value="">JPY</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Price Qualifier</strong>
                                        <div className="col-9">
                                            <select className="form-control">
                                                <option value="" className="" selected="selected">No qualifier</option>
                                                <option label="From" value="">From</option>
                                                <option label="Up to" value="">Up to</option>
                                                <option label="Average" value="">Average</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Item 1</span>
                                        <div className="input--merge">
                                            <input type="text" className="form-control" placeholder="Header 1" name="usrname" />
                                            <input type="number" className="form-control" placeholder="0" name="usrname" />
                                            <input type="text" className="form-control" placeholder="Description 1" name="usrname" />
                                        </div>
                                        <span className="input-group-text alert-success span--br"><span>17</span> <span>--</span><span>12</span></span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Item 2</span>
                                        <div className="input--merge">
                                            <input type="text" className="form-control" placeholder="Header 2" name="usrname" />
                                            <input type="number" className="form-control" placeholder="0" name="usrname" />
                                            <input type="text" className="form-control" placeholder="Description 2" name="usrname" />
                                        </div>
                                        <span className="input-group-text alert-success span--br"><span>17</span> <span>--</span><span>12</span></span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Item 3</span>
                                        <div className="input--merge">
                                            <input type="text" className="form-control" placeholder="Header 3" name="usrname" />
                                            <input type="number" className="form-control" placeholder="0" name="usrname" />
                                            <input type="text" className="form-control" placeholder="Description 3" name="usrname" />
                                        </div>
                                        <span className="input-group-text alert-success span--br"><span>17</span> <span>--</span><span>12</span></span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Item 4</span>
                                        <div className="input--merge">
                                            <input type="text" className="form-control" placeholder="Header 4" name="usrname" />
                                            <input type="number" className="form-control" placeholder="0" name="usrname" />
                                            <input type="text" className="form-control" placeholder="Description 4" name="usrname" />
                                        </div>
                                        <span className="input-group-text alert-success span--br"><span>17</span> <span>--</span><span>12</span></span>
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check6" name="option6" value="something" />
                                    <label className="form-check-label" htmlFor="check6">ADD CALL ASSET</label>
                                </div>
                                <div className="tab--content">
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Phone Number</span>
                                        <input type="text" className="form-control" placeholder="8001234567" name="usrname" />
                                        <span className="input-group-text alert-success">5</span>
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check7" name="option7" value="something" />
                                    <label className="form-check-label" htmlFor="check7">ADD LOCATION ASSETS</label>
                                </div>
                                <div className="tab--content">
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Address</span>
                                        <input type="text" className="form-control br--right" placeholder="" name="usrname" />
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check8" name="option8" value="something" />
                                    <label className="form-check-label" htmlFor="check8">ADD MESSAGE ASSETS</label>
                                </div>
                                <div className="tab--content">
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Msg. Ext. Text</span>
                                        <input type="text" className="form-control" placeholder="Got Questions? Send Us a Text!" name="usrname" />
                                        <span className="input-group-text alert-success">5</span>
                                    </div>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check9" name="option9" value="something" />
                                    <label className="form-check-label" htmlFor="check9">SHOW ADVERTISER RATING</label>
                                </div>
                                <div className="form-check tab--item mb-3">
                                    <input type="checkbox" className="form-check-input" id="check10" name="option10" value="something" />
                                    <label className="form-check-label" htmlFor="check10">ADD STRUCTURED SNIPPETS ASSET</label>
                                </div>
                                <div className="tab--content">
                                    <div className="form-group row mb-3">
                                        <strong className="col-3">Header</strong>
                                        <div className="col-9">
                                            <select className="form-control">
                                                <option value="" className="" selected="selected">-- Choose Header --</option>
                                                <option label="Amenities" value="">Amenities</option>
                                                <option label="Brands" value="">Brands</option>
                                                <option label="Courses" value="">Courses</option>
                                                <option label="Degree programs" value="">Degree programs</option>
                                                <option label="Destinations" value="">Destinations</option>
                                                <option label="Featured hotels" value="">Featured hotels</option>
                                                <option label="Insurance coverage" value="">Insurance coverage</option>
                                                <option label="Models" value="">Models</option>
                                                <option label="Neighborhoods" value="">Neighborhoods</option>
                                                <option label="Service catalog" value="">Service catalog</option>
                                                <option label="Shows" value="">Shows</option>
                                                <option label="Styles" value="">Styles</option>
                                                <option label="Types" value="">Types</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Value 1</span>
                                        <input type="text" className="form-control" placeholder="" name="usrname" />
                                        <span className="input-group-text alert-success">25</span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Value 2</span>
                                        <input type="text" className="form-control" placeholder="" name="usrname" />
                                        <span className="input-group-text alert-success">25</span>
                                    </div>
                                    <div className="input-group mb-2">
                                        <span className="input-group-text">Value 3</span>
                                        <input type="text" className="form-control" placeholder="" name="usrname" />
                                        <span className="input-group-text alert-success">25</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form--actions">
                                <button className="btn btn-warning w-100 btn-reset text-white" type="button">RESET</button>
                                <button className="btn btn-success text-white" type="button">SHARE THIS AD</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pl--45">
                            <div className="main-sec">
                                <div className="desktop-sec">
                                    <div id="header">
                                        <div id="topbar">
                                            <Image id="searchbarimage" src="/googlelogo_color_120x44dp.png" alt="My Image" width={120} height={44} />
                                            {/* <img id="searchbarimage" src={require("../assets/googlelogo_color_120x44dp.png")} alt='' /> */}
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
                                            <h2>{`${headlineForm[0].headline} | ${headlineForm[1].headline} | ${headlineForm[2].headline}`}</h2>
                                            <p>{`${descriptionForm[0].description} - ${descriptionForm[1].description}`}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mobile-sec">
                                            <div className="mobile-inner">
                                                <div id="header">
                                                    <div className="search-result">
                                                        <div class="g--img">
                                                            <Image id="searchbarimage" src="/googlelogo_color_120x44dp.png" alt="My Image" width={94} height={34} />
                                                        </div>
                                                        <div class="mobile--topbar">
                                                            <div class="input--group">
                                                                <input id="mobile-search-input" value="Search Term here..." class="form-control input" type="text" />
                                                                <div class="btn-search">
                                                                    <Image id="searchbarimage" src="/Search.svg" alt="My Image" width={30} height={32} />

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
                                                        <h2>{`${headlineForm[0].headline} | ${headlineForm[1].headline} | ${headlineForm[2].headline}`}</h2>
                                                        <p>{`${descriptionForm[0].description} - ${descriptionForm[1].description}`}</p>
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
            </section >
        </>
    )
}

export default GoogleAdd
