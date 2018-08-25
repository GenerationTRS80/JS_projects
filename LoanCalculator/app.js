// alert(1);
// Event Listner
document.getElementById('loan-form').addEventListener('submit',function(e){

  // Note: Need to hide results before each calculations
  // Hide results use getElementById using style setting display to none
  document.getElementById('results').style.display='none';

  // Show the loader as soon as the calculate button is clicked
  document.getElementById('loading').style.display='block';

  // Set time for the program to wait time 2 seconds before running the function  
  setTimeout(calculateResults,1200);

  e.preventDefault();
});

// Calculate Results
function calculateResults(){
  console.log('Calculating...');

  // UI Values
  const UIamount = document.getElementById('amount');
  const UIinterest = document.getElementById('interest');
  const UIyears = document.getElementById('years');
  const UImonthlyPayment = document.getElementById('monthly-payment');
  const UItotalPayment = document.getElementById('total-payment');
  const UItotalInterest = document.getElementById('total-interest');

  // Calculate principal use parseFloat to get decimal
  const principal = parseFloat(UIamount.value);
  const calculatedInterest = parseFloat(UIinterest.value)/100/12;
  const calculatedPayments = parseFloat(UIyears.value) * 12;

  console.log('principal = ' + principal);
  console.log('calculatedInterest = ' + calculatedInterest);
  console.log('culatedPayments = ' + calculatedPayments);


  // Compute Monthly Payments (pow = power)
  // https://www.w3schools.com/js/js_math.asp
  const x = Math.pow(1+calculatedInterest, calculatedPayments);

  // Note lower case math is not a function const x = math.pow(1+calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  console.log('monthly = ' + monthly.toFixed(2));

  // Check monthly number is a finite number
  if(isFinite(monthly)){

    // Set values to the form values
    UImonthlyPayment.value = monthly.toFixed(2);
    UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    UItotalInterest.value= ((monthly * calculatedPayments)-principal).toFixed(2);

    // Show the results - Remove display block for results
    document.getElementById('results').style.display='block';

    // Hide the spinner
    document.getElementById('loading').style.display='none';
   
  } else {

    console.log('Please check your numbers');
    showError('Please check your numbers ');

  }


}

// Error Function
function showError(error){

  // Hide results
  document.getElementById('results').style.display='none';

  // Hide calcuculating
  document.getElementById('loading').style.display='none';

  const errorDiv = document.createElement('div');

  // Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // To make the message red: use the alert class alert-danger
  errorDiv.className='alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert Error message above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  // Note: setTimeout function is in milliseconds so 3000 equals 3 seconds
  setTimeout(clearError,3000);

  // Clear Error function
  function clearError(){

    document.querySelector('.alert').remove();
  }

  
}