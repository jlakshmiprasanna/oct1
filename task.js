var day="thursday";
switch(day){
    case "monday":
        console.log("This is monday");
        break;
    case "tuesday":
        console.log("This is tuesday");
        break;
    case "wednesday":
        console.log("This is wednesday");
        break;
    case "thursday":
        console.log("This is thursday");
        break;
    case "friday":
        console.log("This is friday");
        break;
    case "weekend":
        console.log("This is weekend");
        break;
}

// Question-2
var month="november"
switch(month){
    case "january":
        console.log("This is January");
        break;
    case "febrauary":
        console.log("This is febrauary");
        break;
    case "march":
        console.log("This is march");
        break; 
    case "april":
        console.log("This is april");
        break; 
    case "may":
        console.log("This is may");
        break;
    case "june":
        console.log("This is June");
        break;
    case "july":
        console.log("This is July");
        break;
    case "august":
        console.log("This is august");
        break;
    case "september":
        console.log("This is september");
        break;
    case "october":
        console.log("This is october");
        break;
    case "november":
        console.log("This is november");
        break;
    case "December":
        console.log("This december");
        break;
}

// Question-3
var even=1;
console.log("Even numbers in the first 10 numbers:")
while(even<=10){
    if (even%2==0){
        console.log(even);
    }
    even++;
}

// Question-4
var countdown=10;
console.log("countdown starts:");
while(countdown>=0){
    console.log(countdown);
    countdown--;
}