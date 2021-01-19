// ============================== Date Method () =============================

//=============================== Question no 1 ==============================

// var new_date = new Date()
// document.write(new_date)

//=============================== Question no 2 =============================


// var new_date = new Date()
// var new_month = ["january","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec",]
// var new_month1 = new_date.getMonth()
// var new_month2 = new_month1.toString()
// var new_month3 = new_month[new_month1]
// console.log(new_month3)


//=============================== Question no 3 ==============================

// var weekday = new Date()
// var weekday0 = ["Sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// var weekday1 = weekday.getDay()
// console.log(weekday0[weekday1].slice(0,3))

// ============================ Question no 4 ================================


// switch (new Date().getDay()) {
//     case 0:
//         console.log("it's Fun Day")
//         break;
//     case 1, 2, 3, 4, 5:
//         console.log("work Days")
//         break;
//     case 6:
//         console.log("it's Fun Day")
//         break;
// }


// ============================ Question no 5 =================================

// var date = new Date()
// var date1 = date.getDate()
// if(date1 < 15){
//     console.log("First fifteen days of the month")
// }else{
//     console.log("Last days of the month")
// }

// ============================ Question no 6 ==================================

// var date_of_current = new Date()
// var time = date_of_current.getTime()
// var second = date_of_current.getMilliseconds() 
// console.log(date_of_current)
// console.log(time)
// console.log(second)
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ============================ Question no 7 ==================================

// var hours_of_day = new Date()
// var hours_of_day1 = hours_of_day.getHours()
// if(hours_of_day1 >= 12){
//     console.log("It's PM")
// }else{
//     console.log("It's AM")
// }

// ============================ Question no 8 ==================================

// var Change_of_date = new Date("Dec 31 2020")
// console.log(Change_of_date)

// ============================ Question no 9 ==================================




// ============================ Question no 10 ==================================


// var second_elasped = new Date("Dec 2015 15")
// var second_elasped1 = second_elasped.getMilliseconds();
// var second_elasped2 = second_elasped1.toString()
// console.log(second_elasped2)


// ============================ Question no 11 ==================================

// var current_date = new Date()
// console.log(current_date)
// var current_date1 = new Date()
// var current_date2 = current_date1
// console.log(current_date2)



// ============================ Question no 12 ==================================

// var reverse_years = new Date()
// console.log(reverse_years)
// var reverse_years1 = new Date("1921")
// console.log(reverse_years1)

// ============================ Question no 13 ==================================


// var dob = new Date();
// var dob1 = dob.getTime();
// var dob2 = new Date(prompt("Enter Your Birth Year","1992"));
// var dob3 = dob2.getTime();
// var dob4 = dob1 - dob3;
// var dob5 = dob4 / (1000 * 60 * 60 * 24 * 365.25);
// var dob6 = Math.floor(dob5)
// console.log(dob6)


// ============================ Question no 14 ==================================

// var costumer_name = prompt("Enter Your Name","A Y A N")
// var current_month = "February"
// var number_of_unit = 410;
// var Charges_per_unit = 16;
// var within_due_date = number_of_unit * Charges_per_unit;
// var late_charges = 350
// var after_due_date = number_of_unit * Charges_per_unit + late_charges;
// document.write("<h1>K-Electricity Bill </h1><br><br>")
// document.write("Costumer Name : " + costumer_name + "<br><br>")
// document.write("Month : " + current_month + "<br><br>")
// document.write("Number Uf Unit : " + number_of_unit + "<br><br><br>")
// document.write("Charges Per Unit : " + Charges_per_unit)
// document.write("Net Amount payable ( Within Due Date ) : " + within_due_date + "<br><br>")
// document.write("Late Payment Surchase : " + late_charges  + "<br><br>")

// document.write("Gross Amount payable ( After Due Date ) : " + after_due_date + "<br><br>")


// ================================= FUNCTION ==================================

// ============================ Question no 1 ==================================

// function time(){
//     var Current_time = new Date()
//     console.log(Current_time)
// }
// time()

// ============================ Question no 2 ==================================

// function Fullname(){
//     var FirstName = "AYAN ";
//     var LastName = "MUHAMMAD ALI"
//     var FullName = FirstName + LastName;
//     console.log(FullName)
// }
// Fullname()

// ============================ Question no 3 ==================================

// function sumNumber(){
//     var Value1 = +prompt("Enter Your Number",8)
//     var Value2 = +prompt("Enter Your Number",2)
//     var Sumof = Value1 + Value2
//     return Sumof;
// }
// sumNumber1 = sumNumber();
// console.log(sumNumber1)

// ============================ Question no 4 ==================================

// function Calculation(a,b){
//     return;
// }

// console.log(result)

// ============================ Question no 5 ==================================

// function sumOfSquares(num) {
//     for (i=0;i<=num;i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      console.log(num + " is " + sum ) 
// }
// var num = +prompt("Enter a number:")
// sumOfSquares(num);


// ============================ Question no 6 ==================================


// function FactorialNum(){
//     number = +prompt("enter Your Number")
//     var fact = 1
//     for(i = 1; i <= number;i++){
//         fact *= i
//     }
//     console.log(number,fact)
// }
// FactorialNum()

// ============================ Question no 7 ==================================

// function counting(){
//     var end_number = +prompt("Enter Last Number")
//     for(i = 1;i <= end_number;i++ ){
//         console.log(i)
//     }
// }
// counting()

// ============================ Question no 8 ==================================

// console.log(Math.hypot(5))
// console.log(Math.hypot(2, 3))
// console.log(Math.hypot(8, 1, -5))

// ============================ Question no 9 ==================================

// var width = +prompt("Enter a Number Width")
// var height = +prompt("Enter a Number height")

// function area() {
//     var result = width * height;
//     console.log(result)
// }
// area()

// ============================ Question no 10 ==================================

// function palindrome(str){
//     var palindrome1 = str.split("")
//     var palindrome2 = palindrome1.reverse()
//     var palindrome3 = palindrome2.join("")

//     if(str === palindrome3){
//         console.log("It Is palindrome")
//     }else{
//         console.log("It Is Not palindrome")
//     }
// }

// palindrome(prompt("Enter your palindrome"))


// ============================ Question no 11 ==================================


// function Capital_letter(upper){
//     var upper1 = upper.split(" ")
//     var upper2 = []

//     for(i = 0; i < upper1.length;i++){
//         upper2.push(upper1[i].charAt(0).toUpperCase() + upper1[i].slice(1))
//     }
//     return upper2.join(" ");
// }
// console.log(Capital_letter("the quick brown fox"));


// ============================ Question no 12 ==================================


// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));


// ============================ Question no 13 ==================================


// function count(element,count){
//     var count1 = 0
//     for(i = 0; i < element.length;i++){
//         if(element.charAt(i) === count){
//             count1 += 1

//         }
//     }
//     return "Your Number Count is : " + count1;


// }
// console.log(count("JSofficial.com",prompt("Enter A count number")))


// ======================== While - Statement - do loop ========================


// ============================= Question no 1 ================================


// function power(base, exponent) {
//     var result = 1;
//     if(exponent == undefined) {
//         exponent = 2;
//     }
//     for(var i=1; i<=exponent; i++) {
//         result = result * base;
//     }
//     return result;
// }

// console.log(power(2,4));
// console.log(power(5));

// ============================= Question no 2 ================================

// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);
// 
// Triangle_donate(+prompt("Enter a num"), +prompt("Enter a num"), +prompt("Enter a num"), +prompt("Enter a num"))


// ============================= Question no 3 ================================

// function result(){
//     var student = "AYAN"
//     var Obtained_mark = 350;
//     var total_marks = 400;
//     console(student + " Obtained marks " + Obtained_mark + " Total marks " + total_marks)

//     function percentage(result){
//         var per = 400 / 350 * 100
//         console.log(per)
//     }
//     percentage()
// }

// ============================== Question no 4 ===============================


// var string = "heelloo world";
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// console.log(string);


// ============================== Question no 5 ===============================


// function vowels_count(vowel1,vowel2,vowel3){
//     if(vowel1 === "ea"){
//         vowel1 += 1
//     }else if(vowel2 === "oy"){
//         vowel2 += 1
//     }else if(vowel3 === "ap"){
//         vowel3 += + 1
//     }
//     console.log(vowel1)
//     console.log(vowel2)
//     console.log(vowel3)
// }
// vowels_count("ea","oy","ui")



// function findOccurrences(vowel) {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }

// console.log(findOccurrences(prompt("enter value")));


// ============================== question no 6 =============================

// miles = kilometers * 0.621371
// var kilometers = prompt("Enter value in kilometers: ")
// var factor = 0.621371
// var miles = kilometers * factor
// console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

// ============================= Question no 7 ============================== 



// function main() {
//     var ovr_rate = 12;
//     var std_hr = 40;
//     var hr_worked;
//     var ovr_hr;
//     var count = 1;
//     var pay;

//     while (count <= 10) {
//         prompt(" Enter the Hours worked : ");
//         var hr_worked = ('%s');
//         var ovr_hr = hr_worked - std_hr;
//         if (ovr_hr > 0) {
//             pay = ovr_hr * ovr_rate;
//             console.log("The Over Time Pay is: %d", pay);
//         } else {
//             console.log("Not eligible for overtime pay");
//         }

//         count = count += 1;
//     }


//     return 0;
// }
// main()


