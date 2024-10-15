// 1.১ থেকে ৫০ পর্যন্ত সংখ্যা প্রিন্ট করুন। 
console.log("question number 1")

for(i=1; i<=50; i++){
    console.log(i)
}

// 2.৩৩ থেকে ১ পর্যন্ত সংখ্যা প্রিন্ট করুন। 
console.log("question number 2")

for (let i = 33; i >= 1; i--){
    console.log(i)
   
}
// 3.১ থেকে ৪৫ এর মধ্যে যতগুলো জোড় সংখ্যা আছে সেগুলোর যোগফল বের করুন। 
console.log("question number 3")

let sum = 0;
for (let i = 1; i <= 45; i++){
    if (i % 2 == 0) {
        sum +=  i;
    }
    
}
console.log(sum)

// 4.১ থেকে ১০ পর্যন্ত সকল বেজোড় সংখ্যার বর্গ বের করে সবগুলো বর্গকে যোগ করুন। 
console.log("question number 4")

let sum_of_odd_number = 0;
for(i = 1; i < 11; i++){
    if (i % 2 != 0) {
        let square = i ** 2;
        sum_of_odd_number += square; 
    }
}
console.log(sum_of_odd_number)
// 5.৭ এর ঘরের নামতা লেখার জন্য একটি প্রোগ্রাম লিখুন। 
console.log("question number 5")

for(i = 1; i<=10; i++){
    const number = 7;
    console.log(`${number} * ${i} = ${number * i}`)
}

// 6.১৩৯৫৮৬৮৮৩ সংখ্যাটিতে কয়টি ডিজিট আছে তা বের করার প্রোগ্রাম লিখুন।
console.log("question number 6")

let count = 0;
const arr = [139586883]
let num = arr[0];
while (num > 0) {
  num = (num / 10) | 0;
  count++;
}
console.log(count);