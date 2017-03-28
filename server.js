var Nightmare = require('nightmare');
require('nightmare-upload')(Nightmare);
var nightmare = Nightmare({ show: true});

nightmare
    .goto('https://www.ksl.com/public/member/signin?login_forward=%2Fmyaccount%2Flisting-classified')
    .insert('#memberemail', 'plaidscott@gmail.com')
    .insert('#memberpassword', 'milamber08')
    .click('.continue')
    .goto('https://www.ksl.com/classifieds/sell')
    .select('#category-input', 'Electronics')
    .select('#subCategory-input', 'Cell Phones Verizon')
    .insert('#title-input', 'Verizon Basic Phone, no contract')
    .insert('#price-input', '30.00')
    .select('#marketType-input', 'Sale')
    .insert('#city-input', 'Salt Lake City')
    .select('#state-input', 'Utah')
    .insert('#description-input', 'Awesome working phones, perfect for the thrifty and budget conscious call 801-857-7898, ask for Scott')
    .select('#sellerType-input', 'Private')
    .insert('#name-input', 'Scott Schermerhorn')
    .insert('#primaryPhone-input', '801-857-7898')
    .check('#acceptText-input')
    .insert('#email-input', 'plaidscott@gmail.com')
    // .upload('.upload-drop-area', 'lgSlider.jpg')
    .check('#acceptTermsConditions-input')
    .wait(1000)
    .click('.continue-button')
    .wait(1000)
    .click('.post-listing-button')
    .wait(1000)
    .evaluate(function() {
        return document.title;
    })
    .end()
    .then(function(title) {
        console.log('title', title);
    })
    .catch(function(err) {
        console.log('err', err);
    })