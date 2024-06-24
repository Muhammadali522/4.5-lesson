// const cars = ["BMW" , "Mercedes" , "Bugatti" , "AUDI", "Honda"];
// for (let i = 0; i < cars.length; i++){
//     let newText = document.createElement("h1")
//     newText.textContent = cars[i]
//     document.body.appendChild(newText)  
// }

// let fantastic = [
//     {
//         ism: "Muhammadali",
//         familya: "Botirov",
//         yosh: 12,
//         tugilgan_yil: 2012,
//     },
//     {
//         ism: "ELshod",
//         familya: "Turgunjonov",
//         yosh: 14,
//         tugilgan_yil: 2000,
//     },
//     {
//         ism: "Sanjar",
//         familya: "Yusupov",
//         yosh: 13,
//         tugilgan_yil: 2001,
//     },
//     {
//         ism: "Murod",
//         familya: "Sagdulayev",
//         yosh: 12,
//         tugilgan_yil: 2013,
//     },
//     {
//         ism: "Sanjar",
//         familya: "Safarof",
//         yosh: 14,
//         tugilgan_yil: 2004,
//     },
//     {
//         ism: "Muhammadali",
//         familya: "Botirov",
//         yosh: 12,
//         tugilgan_yil: 2012,
//     },
//     {
//         ism: "ELshod",
//         familya: "Turgunjonov",
//         yosh: 14,
//         tugilgan_yil: 2000,
//     },
//     {
//         ism: "Sanjar",
//         familya: "Yusupov",
//         yosh: 13,
//         tugilgan_yil: 2001,
//     },
//     {
//         ism: "Murod",
//         familya: "Sagdulayev",
//         yosh: 12,
//         tugilgan_yil: 2013,
//     },
//     {
//         ism: "Sanjar",
//         familya: "Safarof",
//         yosh: 14,
//         tugilgan_yil: 2004,
//     },
//     {
//         ism: "Muhammadali",
//         familya: "Botirov",
//         yosh: 12,
//         tugilgan_yil: 2012,
//     },
//     {
//         ism: "ELshod",
//         familya: "Turgunjonov",
//         yosh: 14,
//         tugilgan_yil: 2000,
//     },
//     {
//         ism: "ELshod",
//         familya: "Turgunjonov",
//         yosh: 14,
//         tugilgan_yil: 2000,
//     },
//     {
//         ism: "Sanjar",
//         familya: "Yusupov",
//         yosh: 13,
//         tugilgan_yil: 2001,
//     },
//     {
//         ism: "Murod",
//         familya: "Sagdulayev",
//         yosh: 12,
//         tugilgan_yil: 2013,
//     }
// ]

// fantastic.forEach(item => {
//     let newText1 = document.createElement("h1")
//     let newText2 = document.createElement("h1")
//     let newText3 = document.createElement("h1")
//     let newText4 = document.createElement("h1")
//     let div = document.createElement("div")

//     newText1.textContent = item.ism
//     newText2.textContent = item.familya
//     newText3.textContent = item.yosh
//     newText4.textContent = item.tugilgan_yil

//     newText1.style.backgroundColor = "Red"
//     newText1.style.color = "white"
//     newText2.style.backgroundColor = "Yellow"
//     newText2.style.color = "green"
//     newText3.style.backgroundColor = "Blue"
//     newText3.style.color = "white"
//     newText4.style.backgroundColor = "Pink"
//     newText4.style.color = "black"
//     div.style.border = "1px solid black"
//     div.style.width = "250px"
//     div.style.height = "300px"
//     div.style.textAlign = "center"
//     div.style.margin = "10px"
//     document.body.style.display = "flex"
//     document.body.style.justifyContent = "space-around"
//     document.body.style.flexWrap = "wrap"


//     document.body.append(div)
//     div.append(newText1, newText2, newText3, newText4)
// })


let userName = prompt("Enter your name")

let newText = document.createElement("h1")

newText.textContent = userName

document.body.append(newText)

newText.className = "userName"

