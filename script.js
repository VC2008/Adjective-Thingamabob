//Generate Prefix
function genPrefix (firstName) {
    if (firstName.length > 5) {
      return 'Legendary'
    } else {
      return 'Mastered'
    }
  }
  //generate first name
  function genFirstName (firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
      return 'Extreme'
    } else if (firstLetter === 'b') {
      return 'Sparking'
    } else {
      return 'Uber'
    }
  }
  
  //generate middle name
  function genMiddleName (roadType, favoriteColor) {
    if (roadType === 'road') {
      return `${favoriteColor}Gem` //EX:  blueridge
    } else if (roadType === 'street') {
      return `${favoriteColor}Prismatic` //EX: blueson
    } else {
      return `${favoriteColor}Rune` //EX: bluestone
    }
  }
  
  //generate Last Name
  function genLastName (lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1)
    if (lastLetter === 'a') {
      return 'Shadow'
    } else if (lastLetter === 'e') {
      return 'Plasmatic'
    } else if (lastLetter === 'i') {
      return 'Mechanical'
    } else if (lastLetter === 'o') {
      return 'Crystalline'
    } else if (lastLetter === 'u') {
      return 'Poisonous'
    } else {
      return 'Ethereal' // Default last name for letters not matched
    }
  }
  
  //generate Suffix
  function genSuffix (favoriteAnimal) {
    return `${favoriteAnimal} Powered-Ultra-Mega-Super-Hyper-Refined-Synthesiser.`
  }
  
  //MAster Name Building FUnction
  function genFullName () {
    //Get the Users Inputs from HTML Elements
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()
  
    //Run Name Generating Functions & store them in new variables
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favoriteAnimal)
  
    //Capitalize Name Variables when needed
    const capitalizedPrefix = capitalize(prefix)
    const capitalizedFirstName = capitalize(newFirstName)
    const capitalizedMiddleName = capitalize(middleName)
    const capitalizedLastName = capitalize(newLastName)
  
    //Combine all of the Name variables in a new name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`
    console.log(fullName)
    //Display the new name
    document.getElementById('result').textContent = fullName
  }
  
  //Capitalization Function
  function capitalize (input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
  }