/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .

    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/
    
    // let sisName = 'ანა'
    // let broName = 'ლევანი'
    // let sisAge = 28
    // let broAge = 21

    // let difference = `ანა ლევანზე ${sisAge-broAge} წლით უფროსია`
    // console.log(difference)
/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების კენტი სიგრძის მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.

*/
// let names = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
// let namesLen = names.length
// console.log(names[(namesLen-1)/2])

/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )

    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან

    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.

        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.

        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        

*/

// const student ={
//     firstName : 'sam',
//     lastName : 'smith',
//     age : 32,
//     subject : ['math', 'geo', 'phy', 'lit', 'programming'],
//     roomate : {
//         fullname: 'Ann Smith',
//         age : 30

//     }
// }
// const subLen = student.subject.length
// for(let i = 0 ; i < subLen; i++){
//     console.log(student.subject[i])
// }

// let fullName = student.firstName + ' ' + student.lastName
// student.fullName = fullName

// let result = `${fullName} არის ${student.age} წლის და მისი რუმმეითი არის ${student.roomate.fullname}`

// console.log(result)





/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.

*/
// let array = ["Banana", "Orange", "Apple", "Mango",2,12];

// let i = 0;

// while(typeof array[i] == 'string'){
//     console.log(array[i]);
//     i++;

// }

/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'

*/

// let array = [12,23,43,11,9,2,121,90];
// let arrLen = array.length
// for( let i = 0 ; i < arrLen; i++){
//     if (array[i]>31 && array[i]%2 == 0){
//         console.log(array[i] + ' Element is greater than provided value and is EVEN')
//     } else if( array[i] < 31 && array % 2 !=0){
//         console.log(array[i] + ' Element is less than provided value and is ODD'
//         )
//     }
// }
