//Card1
const cs = document.querySelector('#coffeeswitch')
const ts = document.querySelector('#teaswitch')
const c1 = document.querySelector('#card1')
// Card2
const rtd = document.querySelector('#rtd')
const diy = document.querySelector('#diy')
const c2 = document.querySelector('#card2')
// Card3
const fy = document.querySelector('#flavory')
const fn = document.querySelector('#flavorn')
const c3 = document.querySelector('#card3')
// Card4
const cr = document.querySelector('#cuprange')
const crl = document.querySelector('#cuprangelabel')
const c4 = document.querySelector('#card4')
// Array From ValidateCheck()
const finalArray = [];
// Submit Btn
const sub1 = document.querySelector('#submit1')
const cb = document.querySelector('#changeBtn')
// HTML to Change Upon Submit
const op1 = document.querySelector('#op1')
const op2 = document.querySelector('#op2')
const op3 = document.querySelector('#op3')
const op4 = document.querySelector('#op4')
// Form Submit Btn
const sb = document.querySelector('#form-submit')
//Validation Images
const val = document.querySelector('#validate')
const val1 = document.querySelector('#val1')
const val2 = document.querySelector('#val2')
const val3 = document.querySelector('#val3')
//Select all Checkbox Inputs
const allCheck1 = c1.querySelectorAll('input[type = checkbox]')
const allCheck2 = c2.querySelectorAll('input[type = checkbox]')
const allCheck3 = c3.querySelectorAll('input[type = checkbox]')
// Get All Labels In A Card
const label1 = document.querySelectorAll('.label1')
const label2 = document.querySelectorAll('.label2')
const label3 = document.querySelectorAll('.label3')

// New JS For Squarespace

//Start Modal Subscription Btn
const startBtn = document.querySelector('#startSubBtn')
//Modal 1
const modal1 = document.querySelector('#modal1')
const closeModal = document.querySelector('.closeModal')
//Modal 1 Btn to Open Modal 2
const submit = document.querySelector('#submit1')
const submit2 = document.querySelector('.submit1')
//Modal 2
const modal2 = document.querySelector('#modal2')
const closeModal2 = document.querySelector('.closeModal2')
//Change Selection Btn (Close 2 and reopen 1)
const changeBtn = document.querySelector('#changeBtn')

//Func() to add

//Open Modal 1
startBtn.addEventListener('click', (e) => {
    modal1.showModal()
})
//Close Modal 1
closeModal.addEventListener('click', (e) => {
    modal1.close()
})
//Close Modal 2 And Open Modal 1
changeBtn.addEventListener('click', (e) => {
    modal2.close()
    modal1.showModal()
})
//Close Modal 2 
closeModal2.addEventListener('click', (e) => {
    modal2.close()
})
// //Close Modal 1 If Click Outside
// document.addEventListener('click', function(e){   
//     if (!modal1.contains(e.target)){
//         //Clicked Outside Modal 1
//         modal1.close()
//     }
// })
// //Close Modal 2 If Click Outside
// document.addEventListener('click', function(e){   
//   if (!modal2.contains(e.target)){
//     //Clicked Outside Modal 1
//       modal2.close()
//   }
// });

// Func() To Alternate Between Checkboxes
function alternateCheck(x, y) {
    x.addEventListener('click', (e) => {
        if (y.checked = true) {
            y.checked = false
        }
    })

    y.addEventListener('click', (e) => {
        if (x.checked = true) {
            x.checked = false
        }
    })
}

// Callbacks Inserted In Func()
alternateCheck(cs, ts)
alternateCheck(rtd, diy)
alternateCheck(fy, fn)

//Func() for validating Individual Cards Are Checked
function validateCards(x, y, z) {
    if (x[0].checked === false && x[1].checked === false) {
        y.forEach(l => {
            l.classList.replace('text-light', 'text-danger')
        })
        z.style.opacity = '1'
    } else {
        y.forEach(l => {
            l.classList.replace('text-danger', 'text-light')
        })
        z.style.opacity = '0'
    }
}
// Func() for Modal Event Listener
function modalEvent() {
    modal1.close()
    modal2.showModal()
}

// Func() to check if any cards are wrong and stop submission
function validateSubmit() {
    if (allCheck1[0].checked == false && allCheck1[1].checked == false || allCheck2[0].checked == false && allCheck2[1].checked == false || allCheck3[0].checked == false && allCheck3[1].checked == false) {
        //Remove Modal Event On Submit BTN
        submit.removeEventListener('click', modalEvent)
        val.style.opacity = '1'
    } else {
        //Add Click Event To Close Modal 1 and Open Modal 2
        submit.addEventListener('click', modalEvent)
        val.style.opacity = '0'
        finalArray.length = 0
    }
}

//Hover Submit BTN And See If Checks Are Checked
sub1.addEventListener('mouseover', (e) => {
    validateCards(allCheck1, label1, val1)
    validateCards(allCheck2, label2, val2)
    validateCards(allCheck3, label3, val3)
    validateSubmit()
})

// Func() To Change HTML On Slider Change To Reflect Cups Per Day Usage
cr.oninput = function () {
    if (cr.value == '5') {
        crl.innerHTML = this.value + '+';
    } else {
        crl.innerHTML = this.value;
    }
}

// Func() To To Which Checkbox Is Checked
function validateCheck() {
    // Push Coffee Or Tea Into Array
    if (cs.checked == true) {
        finalArray.push('Coffee')
    } else if (ts.checked == true) {
        finalArray.push('Tea')
    }
    // Push Ready To Drink or Do It Yourself Into Array
    if (rtd.checked == true) {
        finalArray.push('RTD')
    } else if (diy.checked == true) {
        finalArray.push('DIY')
    }
    // Push Flavored Or Not Flavored Into Array
    if (fy.checked == true) {
        finalArray.push('Flavored')
    } else if (fn.checked == true) {
        finalArray.push('Non Flavored')
    }
    // Push Type Of Drinker Into Array Based On Slider Value
    if (cr.value < '4') {
        finalArray.push('Light Drinker')
    } else if (cr.value > '3') {
        finalArray.push('Moderate Drinker')
    }
}

// Arrays To Check finalArray Variable Against
// Coffee Options
const coffeeDiyFlavoredLight = ['Coffee', 'DIY', 'Flavored', 'Light Drinker']
const coffeeDiyFlavoredMod = ['Coffee', 'DIY', 'Flavored', 'Moderate Drinker']
const coffeeDiyNonflavoredLight = ['Coffee', 'DIY', 'Non Flavored', 'Light Drinker']
const coffeeDiyNonflavoredMod = ['Coffee', 'DIY', 'Non Flavored', 'Moderate Drinker']
const coffeeRtdFlavoredLight = ['Coffee', 'RTD', 'Flavored', 'Light Drinker']
const coffeeRtdFlavoredMod = ['Coffee', 'RTD', 'Flavored', 'Moderate Drinker']
const coffeeRtdNonflavoredLight = ['Coffee', 'RTD', 'Non Flavored', 'Light Drinker']
const coffeeRtdNonflavoredMod = ['Coffee', 'RTD', 'Non Flavored', 'Moderate Drinker']
// Tea Options
const teaDiyFlavoredLight = ['Tea', 'DIY', 'Flavored', 'Light Drinker']
const teaDiyFlavoredMod = ['Tea', 'DIY', 'Flavored', 'Moderate Drinker']
const teaDiyNonflavoredLight = ['Tea', 'DIY', 'Non Flavored', 'Light Drinker']
const teaDiyNonflavoredMod = ['Tea', 'DIY', 'Non Flavored', 'Moderate Drinker']
const teaRtdFlavoredLight = ['Tea', 'RTD', 'Flavored', 'Light Drinker']
const teaRtdFlavoredMod = ['Tea', 'RTD', 'Flavored', 'Moderate Drinker']
const teaRtdNonflavoredLight = ['Tea', 'RTD', 'Non Flavored', 'Light Drinker']
const teaRtdNonflavoredMod = ['Tea', 'RTD', 'Non Flavored', 'Moderate Drinker']

// SUBMIT BTNS EVENTS
sub1.addEventListener('click', (e) => {
    validateCheck()
    op1.innerHTML = finalArray[0]
    op2.innerHTML = finalArray[1]
    op3.innerHTML = finalArray[2]
    op4.innerHTML = cr.value
})

sb.addEventListener('click', (e) => {
    e.preventDefault()

    // Check finalArray Against Other Arrays To Direct Customer To Subscription Package For Them
    const equalsCheck = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    // Coffee Packages
    if (equalsCheck(finalArray, coffeeDiyFlavoredLight)) {
        console.log('Direct to Coffee DIY Flavored Light Page')
        window.location.assign('https://www.omnicoffeebrands.com')
    } else if (equalsCheck(finalArray, coffeeDiyFlavoredMod)) {
        console.log('Direct to Coffee DIY Flavored Moderate Page')
    } else if (equalsCheck(finalArray, coffeeDiyNonflavoredLight)) {
        console.log('Direct to Coffee DIY Non Flavored Light Page')
    } else if (equalsCheck(finalArray, coffeeDiyNonflavoredMod)) {
        console.log('Direct to Coffee DIY Non Flavored Moderate Page')
    } else if (equalsCheck(finalArray, coffeeRtdFlavoredLight)) {
        console.log('Direct to Coffee RTD Flavored Light Page')
    } else if (equalsCheck(finalArray, coffeeRtdFlavoredMod)) {
        console.log('Direct to Coffee RTD Flavored Moderate Page')
    } else if (equalsCheck(finalArray, coffeeRtdNonflavoredLight)) {
        console.log('Direct to Coffee RTD Non Flavored Light Page')
    } else if (equalsCheck(finalArray, coffeeRtdNonflavoredMod)) {
        console.log('Direct to Coffee RTD Non Flavored Moderate Page')
    }
    // Tea Packages
    else if (equalsCheck(finalArray, teaDiyFlavoredLight)) {
        console.log('Direct to Tea DIY Flavored Light Page')
    } else if (equalsCheck(finalArray, teaDiyFlavoredMod)) {
        console.log('Direct to Tea DIY Flavored Moderate Page')
    } else if (equalsCheck(finalArray, teaDiyNonflavoredLight)) {
        console.log('Direct to Tea DIY Non Flavored Light Page')
    } else if (equalsCheck(finalArray, teaDiyNonflavoredMod)) {
        console.log('Direct to Tea DIY Non Flavored Moderate Page')
    } else if (equalsCheck(finalArray, teaRtdFlavoredLight)) {
        console.log('Direct to Tea RTD Flavored Light Page')
    } else if (equalsCheck(finalArray, teaRtdFlavoredMod)) {
        console.log('Direct to Tea RTD Flavored Moderate Page')
    } else if (equalsCheck(finalArray, teaRtdNonflavoredLight)) {
        console.log('Direct to Tea RTD Non Flavored Light Page')
    } else if (equalsCheck(finalArray, teaRtdNonflavoredMod)) {
        console.log('Direct to Tea RTD Non Flavored Moderate Page')
    }
})

cb.addEventListener('click', (e) => {
    finalArray.length = 0
})










