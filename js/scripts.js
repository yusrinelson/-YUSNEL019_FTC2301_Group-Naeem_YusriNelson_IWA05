const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
let NONE_SELECTED = 0

let location = 'USA'
let currency = null
let customers = 1
let shipping = null

if (location === 'RSA') {
    shipping = 400
    currency = 'R'
}
else if (location === 'NAM') {
    shipping = 600
    currency = '$'
} else if (location !== 'RSA' || location !== 'NAM') {
    shipping = 800
    currency = '$'
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

//shipping = 0
// currency = '$' && 'R'

if (shoes + batteries + pens + shirts + toys >= 1000) {
    location === 'RSA' && customers === 1
    shipping = 0
}

if (shoes + batteries + pens + shirts + toys >= 60) {
    location === 'NAM' && customers === 1
    shipping = 0
}


if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING)
}

if (location === 'RSA') {
    console.log('price', currency, shoes + batteries + pens + shirts + shipping + toys)
}
else if (location === 'NAM') {
    console.log('price', currency, shoes + batteries + pens + shirts + shipping + toys)
}
else {
    console.log(BANNED_WARNING)
}
