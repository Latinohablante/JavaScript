let arr = [4.6, 2.5, 2.5, 3.5]

arr.forEach(function(e) {
    console.log(e)
});

arr.forEach(e => console.log(e))

let curv8 = arr.map(e => e * 0.8 + 1)
console.log(curv8)

// filtro

let mayor3 = arr.filter(function (e) {
    if (e >= 3) return e
})
console.log(mayor3)

let sumC8 = arr.reduce((c, e) => c + (e * 0.8 + 1))
console.log(sumC8.toFixed(2))