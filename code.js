/*
---------------------------------------------------------------------------
Objects - Part One
*/

// Do not modify this object here.
let examplePerson = {
  firstName: "Homer",
  lastName: "Simpson",
  hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
  address: {
    number: 742,
    street: "Evergreen Terrace",
    city: "Springfield",
    state: "Illinois",
    zipcode: "12345",
  },
  "favorite color": "yellow",
};

/*
Using the function below, print the person to the page according 
to the instructions on my.kenzie
*/

const renderPerson = function (person) {
  // Your Code Here
  //step One
  let cardDiv = document.createElement('div')
  cardDiv.className = 'card'
  document.body.append(cardDiv)
  cardDiv.innerHTML = `<h2>${person.firstName} ${person.lastName}</h2>`

  //step two
  let hobbiesTitle = document.createElement('h4'), hobbiesList =document.createElement('ul')
  hobbiesTitle.innerText = 'Hobbies'
  
  for (let hobby of person.hobbies) {
    hobbiesList.innerHTML+= `<li>${hobby}</li>`
  }
  
  cardDiv.append(hobbiesTitle, hobbiesList)

  //step three
  let shippingAddressTitle = document.createElement('h4'), shippingAddress = document.createElement('p')
  shippingAddressTitle.innerText = "Shipping Address"

  shippingAddress.innerText = `${person.firstName} ${person.lastName}\n${person.address.number} ${person.address.street}\n${person.address.city}, ${person.address.state} ${person.address.zipcode}`
  
  cardDiv.append(shippingAddressTitle, shippingAddress)

  //step four
  let favoriteColorTitle = document.createElement('h4'), favoriteColor = document.createElement('p')
  favoriteColorTitle.innerText = 'Favorite Color'
  favoriteColor.innerText = person['favorite color']

  cardDiv.append(favoriteColorTitle, favoriteColor)
}

renderPerson(examplePerson);

/*
---------------------------------------------------------------------------
Part Two

Create a new person.  

Your object should look very similar to the Person object above!
But you should use different values.  Put whatever you want for the values.

Call renderPerson() and pass your new person object in as an argument to 
render your person to the page.
*/

// Your Code Here

let newPerson = {
  firstName: 'faren',
  lastName: 'Kouadio',
  hobbies: ['Tik Tok', 'Nexflix Movies', 'Facebook'],
  address : {
    number : 935,
    street: 'West Trenton Avenue',
    city: 'Morrisville',
    state: 'New Jersey',
    zipcode: 17045,
  },
  'favorite color': 'Purple'
}
renderPerson(newPerson)

/*
---------------------------------------------------------------------------
Part Three

Modify the person object to change them to bart.  
Follow the instruction on my.kenzie
*/

const changePersonToBart = function (person) {
  // Your Code Here
  person.firstName = 'Bart'
  person.hobbies.splice(2, 1, 'Skateboarding')
  person['favorite color'] = 'orange'

  return person
}

// Then, call the function with the argument examplePerson
// Assign the result to a new variable.  Then call renderPerson with the 
// new variable
let newResult = changePersonToBart(examplePerson)
renderPerson(newResult)
/*
---------------------------------------------------------------------------
Part Four (Optional Practice)

Create your own object!
*/

// Your Code Here
let dogObject = {
  name: 'scooby doo',
  age: 1,
  male: true,
  features: {
    color:'Black',
    race: 'Dobermann',
    height: '2.2 feet',
    weight: '66 lbs'
  },
  vaccines: ['canine distemper', 'canine hepatitis', 'coronavirus', 'lyme disease', 'rabies' ]
}

const renderDog = function(dog) {
  //step One
  let dogDiv = document.createElement('div')
  dogDiv.className = 'card'
  document.body.append(dogDiv)
  dogDiv.innerHTML = `<h2>${dog.name}</h2>`

  //step two
  let vaccinesDone = document.createElement('h4'), vaccinesList = document.createElement('ul')
  vaccinesDone.innerText = 'Vaccines updated'

  for (let vaccine of dog.vaccines) {
    vaccinesList.innerHTML += `<li>${vaccine}</li>`
  }

  dogDiv.append(vaccinesDone, vaccinesList)

  //step three
  let featuresTitle = document.createElement('h4'), dogFeatures = document.createElement('p')
  featuresTitle.innerText = "Dog Features"

  dogFeatures.innerText = `${dog.name}\n${dog.features.color},  ${dog.features.race}\nWeight: ${dog.features.weight},\nHeight: ${dog.features.height}`

  dogDiv.append(featuresTitle, dogFeatures)

  //step four
  let dogAgeAndSexTitle = document.createElement('h4'), dogAgeAndSex = document.createElement('p')
  dogAgeAndSexTitle.innerText = 'Age and Sex'
  dogAgeAndSex.innerText = `Age: ${dog.age} year \nMale: ${dog.male}`

  dogDiv.append(dogAgeAndSexTitle, dogAgeAndSex)
}

renderDog(dogObject)


