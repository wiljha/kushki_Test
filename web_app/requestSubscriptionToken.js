var callback = function(response) {
  if(!response.code){
    console.log(response.token);
  } else {
    console.error('Error: ',response.error, 'Code: ', response.code, 'Message: ',response.message);
  }
}

kushki.requestSubscriptionToken({
  card: {
    name: "Juan Guerra",
    number: "4544980425511225",
    cvc: "345",
    expiryMonth: "12",
    expiryYear: "28"
},
  currency: "USD"
}, callback); // Also you can set the function directly
