// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(added="*") {
    return function(param="special"){
        return `You are ${added}${param}${added}!`
    }
}

const Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a -b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b
    }
}

function actionApplyer(start, arrOfFunc){
    let a = start
    for (let i = 0; i < arrOfFunc.length; i++){
        a = arrOfFunc[i](a)
    }
    return a 
}