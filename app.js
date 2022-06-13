


let seattle = {
    maxCustomers:65,
    minCustomers:23,
    avgeCookie: 6.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    calcustomersPerHour: function(){
        // calculate customers
        for(i=0; i < hours.length; i++){
       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1 ) * this.minCustomers));
    }
    console.log(this.customersPerHour);
    },

    calCookiesPerHour: function(){
        // calculate cookies per hour
    },

}


// console.log(Math.random(seattle.maxCustomers * seattle.minCustomers));
const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is

let ul = document.createElement('ul'); //unordered list

function render(hours) {
// rendering the hours 
for(i=0; i < hours.length; i++){
    // create a list element
    let li = document.createElement('li'); // crate a li item

    li.textContent = `${hours[i]} Hello World`;
    

    // append list to ul
    ul.append(li);

}
cookieContainer.append(ul); // adding our ul to our div
}

render(hours); //call our function!

