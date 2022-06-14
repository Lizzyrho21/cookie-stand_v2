const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; // Hours are defined

// Our first location data!
let seattle = {
    maxCustomers:65, // max
    minCustomers:23, // min
    avgeCookie: 6.3, // average cookies
    cookiesPerHour: [], // array for all cookies each hour
    customersPerHour: [], // array for all customers per hour
    totalDailyCookies: 0, // total cookies for eahc hour combined!

    // we need a method that calculates our customers per hour..
    calcustomersPerHour: function(){
        // calculate customers
        for(i=0; i < hours.length; i++){
       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1 ) * this.minCustomers));
    }
    console.log(this.customersPerHour);
    },
// we need a method that calcultaes our cookies per hour
    calCookiesPerHour: function(){
        // calculate cookies per hourS
        // set a variable that performs my calculation 
        for(i = 0; i < this.customersPerHour.length; i++){
        let oneHour = Math.ceil(this.customersPerHour[i] * this.avgeCookie);
        // add to the total daily cookies per hour
        this.totalDailyCookies += oneHour;
        // push each hour into your array!
        this.cookiesPerHour.push(oneHour);
       
    }
   
    // console.log(this.cookiesPerHour);
    console.log(this.totalDailyCookies);
        
    },

}


// console.log(Math.random(seattle.maxCustomers * seattle.minCustomers));

// working with the DOM to print our results on the browser

// we need to access the div we want to put our results in!
let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is

// lets create a ul!
let ul = document.createElement('ul'); //unordered list


// render function to call with the results we want display on the broswer as parameters
function render(hours, cookies, totalDaily) {
// rendering the hours 
for(i=0; i < hours.length; i++){

    for (i=0; i < cookies.length; i++){
    // create a list element
    let li = document.createElement('li'); // crate a li item

    li.textContent = `${hours[i]} : ${cookies[i]}`;


    // append list to ul
    ul.append(li);

}
}


cookieContainer.append(ul); // adding our ul to our div
let total = document.createElement('li');
total.textContent = ` Total : ${totalDaily}`;

ul.append(total);
}



seattle.calcustomersPerHour();
seattle.calCookiesPerHour();

render(hours, seattle.cookiesPerHour, seattle.totalDailyCookies); //call our function!


