//Prefix
function genPreFix (FirstName) {
    if(FirstName.length > 5 ){
        return 'Legendary'
    } else {
        return 'Finished'
    }
}

//First Name
function genFirstName (FirstName){
    const FirstLetter = FirstName.charAt(0).toLowerCase()
    if(FirstLetter === 'a'){
        return 'Extreme'
    }else if(FirstLetter === 'b'){
        return 'Sparking'
    }else{
        return 'Crazy'
    }
}


//Middle Name
function genMiddleName (roadType, favoriteColor){
    if(roadType === 'Road'){
        return `${favoriteColor} ridge`
    }else if(roadType === 'Street'){
        return `${favoriteColor} son`
    }else {
        return `${favoriteColor} stone`
    }
}

//generate Last Name
function genLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1)
    if (lastLetter === 'a') {
        return 'Shadowed'
    }else if (lastLetter === 'p') {
        return 'Plasmatic'
    } else {
        return 'Crystalline'
    }
}

//Suffix
function genSuffix(favoriteAnimal){
    return `${favoriteAnimal}-Ultra-Mega-Super-Hyper-Refined-Synthesiser.`
}

//Name Building Function
function genFullName(){
    //Step 1
    const FirstName = document.getElementById('FirstName').ariaValueMax.trim()
    const lastName = document.getElementById('lastName').ariaValueMax.trim()
    const roadType = document.getElementById('roadType').ariaValueMax.trim()
    const favoriteColor = document.getElementById('favoriteColor').ariaValueMax.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').ariaValueMax.trim()

    //Step 2
        const Prefix = genPreFix(FirstName)
        const newFirstName = genFirstName(FirstName)
        const genMiddleName = genMiddleName(roadType, favoriteColor)
        const newLastName = genLastName(lastName)
        const Suffix = genSuffix(favoriteAnimal)
    //Step 3
    const capitalizedPrefux = capitalize(Prefix)
    const capitalizednewFirstName = capitalize(newFirstName)
    const capitalizedgenMiddleName = capitalize(middleName)
    const capitalizednewLastName = capitalize(lastName)
    const capitalizedSuffix = capitalize(favoriteAnimal)
    //Step 4

    //Step 5
}

function capitalize(input){
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}