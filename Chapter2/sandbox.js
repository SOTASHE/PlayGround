
//let
// let age = 25

// let year = 2019

// console.log(age, year)

// age = 30

// console.log(age)
 

//const
// const point = 100

// console.log(point)

//point= 50
//error


 
//var
// var score = 75
// console.log(score)

// score = 80

// console.log(score)

//Data types
//JS has 8 data types

// Number : 1,2,3,100,3.14

// String : "Hello, World" "mario@thenetninja.co.za"

// let email = "sinayesotatshe@gmail.com"

// console.log(email)
 
//String concatenation


// let firstName = "Snaye"
// let lastName = "Sotashe"

// let fullName = firstName + ' ' +  lastName
// console.log(fullName)

//single charactor
//first charactor
// console.log(fullName[0])
// console.log(fullName[3])

// string length

//console.log(fullName.length)

//string methods
 
// console.log(firstName.toUpperCase())

// let result = fullName.toLowerCase()

// console.log(result)


// let index = email.indexOf('@')

// console.log(index)



//let result = email.lastIndexOf('e')



//slice method

//let result = email.slice(0,6)

// let result = email.substr(0,6)
//sinaye
// let result = email.replace('s', 'u')
//only replacing the first 's' with u

//uinayesotatshe@gmail.com


// console.log(result)





//Numbers


// let radius=10
// const pi = 3.14

//console.log(radius,pi)

//math operators +, -, *, /, **, %

//console.log(10/2)

//area of a circle
//let result = pi * radius**2

//console.log(result)


//order of operation- BIDMAS


//let result = 5 * (10-8)**2
//console.log(result)


//let likes = 10

// likes = likes+ 1

//likes += 1
//likes -=1
//likes++
// likes--
//likes +=10//

//likes -=5//

// likes *=2
// likes /=2


//console.log(likes)//


//NaN - not a number


// console.log(5/'hello')

// console.log(5*'hello')





//let result = "the blog has " + likes +' likes'

// console.log(result)//






//Template strings

   //concatenation way
// const title = "Best reads of 2022"
// const author = 'Snaye'
// const likes = 30

// let result = 'The blog called ' + title + ' by ' +author + ' has ' + likes + ' likes'

// console.log(result)


     //Template string way
    //  let result = `The blog called ${title} by ${author} has ${likes} likes`
   
    // console.log(result)



      //creating html template
                //    let html=`
                //      <h2>${title}</h2>
                //      <p>By &{author}</p>
                //      <span>This blog has ${likes} likes</span>
                   
                //    `


                //    console.log(html)




// // Boolean : true / false
 

//            //console.log(true,false)
//            //method can return booleans

//            let email= "sinayesotatshe@gmail.com"
//         //    let result = email.includes('q')
//         //    console.log(result)


// let names =['Snaye','David','Andile','Snoxolo']

// let result = names.includes('Andile')
// console.log(result)


  //Comparison operators
//      let age = 29
//      console.log(age==29)
//      console.log(age==25)
//      console.log(age!=29)
//      console.log(age>20)
//      console.log(age<29)
//      console.log(age<=29)
//      console.log(age <=29)

//      let name = 'snaye'

//      console.log(name=='snaye')
//      console.log(name=='Snaye')
//      console.log(name>'david')
//      console.log(name>'Snaye')
//      console.log(name >'David')


   

// //loose comparison (Different times can still be equal)
//     console.log(age==29)
//     console.log(age=='29')
//     console.log(age!=29)
//     console.log(age!='29')


// //Strict comparison (different types cannot be equal)

// console.log(age===29)
// console.log(age==='29')
// console.log(age!==29)
// console.log(age!=='29')


// // Type conversion


      let score = '100 '
      //convert string to a number
      score=Number(score)

     console.log(score+1)
     //Check type
     console.log(typeof score)


      //NaN - not a number
     let result = Number("hello")
     console.log(result)

     result=String(50)
     console.log(result,typeof result)


 //Negative and positive numbers are considered as true values in JS
 // 0 is the false value
     let result1 = Boolean(100)
     let result2 = Boolean(0)
     let result3 = Boolean(-1)
     console.log(result1,result2,result3)




// // null    : Explicity set a variable with no value
//          age=null

//         console.log(age,age+3, `The age is ${age}`)



// undefined : For variables that have not yet been defined

        // let age

        // console.log(age,age+3, `The age is ${age}`)



// Object: Complex data structures - Array, Dates, Literals, etc

        //   let ninjas =['Snaye', 'ryu','chun-li']
        //   ninjas[1]='David'

        //   console.log(ninjas[1])

        // let ages = [28,25,40]
        // console.log(ages[2])

        // let random = ['Snaye', 35,20]
        // console.log(random)


        //   console.log(ninjas.length)

       // let result = ninjas.join('-')
        // console.log(result)
        //let result = ninjas.indexOf('Snaye')
        //console.log(result)
       

        // //concatinating an array
        // let result = ninjas.concat('Ken','Crystal')
        // console.log(result)

        //Adding to array
         //Method that change the value
         //Also called distractive method
        // let result = ninjas.push('Ken')
        // //delete the last value and return it
        // result=ninjas.pop()
        // console.log(ninjas)
        
// Symbol : used with objects







   





