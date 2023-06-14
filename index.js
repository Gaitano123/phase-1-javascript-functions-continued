// code your solution here
function saturdayFun( activity = "roller-skate") {

    return (`This Saturday, I want to ${activity}!`)
}


function mondayWork ( activity ) {
    if (!activity) {
        return  `This Monday, I will go to the office.`
    }
    else {
        return `This Monday, I will work from home.`
    }
}


function wrapAdjective (flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}