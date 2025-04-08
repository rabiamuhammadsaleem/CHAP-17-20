                // ----------- Chapter 17-20 ARRAYS AND LOOP ----------


        "QUESTION NO:01"
// 1 Declare and initialize an empty multidimensional array.(Array of arrays)

// let array = []


        "QUESTION NO:02"
// 2. Declare and initialize a multidimensional array representing the following matrix:

// let arr = [
//      [0,1,2,3]
//     ,[1,0,1,2]
//     ,[2,1,0,1]];

// for(let i=0;i<3;i++){
//     for(let j =0;j<4;j++){
//         document.write(arr[i][j]+' ')
//     }
//     document.write("<br>")
// }

  
        "QUESTION NO:03"
// 3. Write a program to print numeric counting from 1 to 10.

// let num = 1
// for (let i =1;i<=10;i++){
//     document.write(i+"<br>"); 
// }


        "QUESTION NO:04"
// 4.Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// let table = +prompt("Enter a number to show its multiplication table")
// let length = +prompt("Enter length multiplication table")
// document.write("Multiplication table of "+table+"<br>")
// document.write("Length "+length+"<br>"+"<br>")
// for(let i=1;i<=length;i++){
// document.write(table+" X "+i+" ="+table*i+"<br>")
// }


        "QUESTION NO:05"
// 5.Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

// let fruits=["apple", "banana", "mango", "orange", "strawberry"];
// for(let i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>")
// }
// document.write("<br>")
// for(let j=0;j<fruits.length;+j++){
//     document.write("Element at index "+j+" is "+fruits[j]+"<br>")
// }


         
        "QUESTION NO:06"
// 6. Generate the following series in your browser. See example output.

// a.Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<h3>"+"Counting: "+"</h3>")
// for(let i=1;i<=15;i++){
//      document.write(i+",")
// }
// document.write("<br>");

// b.Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<h3>"+"Reverse counting: "+"</h3>")
// for(let i=10;i>=1;i--){
//      document.write(i+",")
// }
// document.write("<br>");

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<h3>"+"Even: "+"</h3>")
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<h3>"+"Odd: "+"</h3>")
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br>");

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<h3>"+"Series: "+"</h3>")
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }
// document.write("<br>");


        "QUESTION NO:07"
// 7.You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// let A = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userInput = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am").toLowerCase()
// let found = false
// for(let i = 0;i<A.length;i++){
//     if(userInput === A[i]){
//       document.write(userInput+" is available at index "+i+" in our bakery")
//       found = true;
//       break
//     }
// }
// if(found === false){
//          document.write("We are sorry! " + userInput + " is not available in our bakery")
//     }



        "QUESTION NO:08"
// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

// let A = [24, 53, 78, 91, 12]
// let largest = A[0]
// for(let i=1;i<A.length;i++){
//     if(A[i] > largest){ 
//         largest = A[i] 
//     }
// }
// document.write("Array items: " + A.join(", ") + "<br>");
// document.write("The largest number is: " + largest);


        "QUESTION NO:09"
// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// let A = [24, 53, 78, 91, 12]
// let smallest = A[0]
// for(let i=1;i<A.length;i++){
//     if(A[i] < smallest){ 
//         smallest = A[i] 
//     }
// }
// document.write("Array items: " + A.join(", ") + "<br>");
// document.write("The largest number is: " + smallest);


        "QUESTION NO:10"
// 10. Write a program to print multiples of 5 ranging 1 to 100.

// for(let i=5;i<=100;i=i+5){
//     document.write(i+',')
// }

//                 ----------- End of Chapter 17-20 ----------