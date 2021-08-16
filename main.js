// -------------------- שאלה 1 -----------------------

const ChangeClick = document.getElementById("ChangeButton")
ChangeClick.addEventListener("click", function () {
    console.log("clicked");
    const text = ChangeClick.innerText
    ChangeClick.innerText = "click me"
})
// -------------------- שאלה 2 -----------------------
const oneB = document.getElementById("btnOne")
oneB.addEventListener("click", function () {
    console.log("click one");
    const text = oneB.innerText
    oneB.innerText = alert("you click on button one")
});
const twoB = document.getElementById("btnTwo")
twoB.addEventListener("click", function () {
    console.log("click two");
    const text = twoB.innerText
    twoB.innerText = alert("you click on button two")
});
const threeB = document.getElementById("btnThree")
threeB.addEventListener("click", function () {
    console.log("click three");
    const text = threeB.innerText
    threeB.innerText = alert("you click on button three")
});
const fourB = document.getElementById("btnFour")
fourB.addEventListener("click", function () {
    console.log("click four");
    const text = fourB.innerText
    fourB.innerText = alert("you click on button four")
});
// -------------------- שאלה 3 -----------------------
const names = document.getElementsByClassName("name")
for (let i = 0; i < names.length; i++) {
    names[i].addEventListener("click", function () {
        const nameT = names[i].innerText
        console.log(names[i].innerText);
    })
}
// -------------------- שאלה 4 /שאלה 5---------------

const pBtn = document.getElementById("pAskFour")
let num = 0

const fourBtn = document.getElementById("btnAskFour")
fourBtn.addEventListener("click", function () {
    const plosh = pBtn.innerText
    pBtn.innerText = Number(num++)

    const PMin = document.getElementById("btnMIN")
    let min = num - 3
    PMin.addEventListener("click", function () {

        pBtn.innerText = min
    })
})
// -------------------- שאלה 7 -----------------------

const array =
    [Bottle = {
        Name: "Bottle",
        price: "20",
        description: "big",
        // Discount:function (){
        //     this.price=70%

        // }
    },
    Table = {
        Name: "Table",
        price: "400",
        description: "round"
    },
    Paper = {
        Name: "Paper",
        price: "40",
        description: "smuller"
    },]

function Expensive() {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].price < array[j].price) {
                return array[j];
            }
        }
    } return array[i];
}
console.log(Expensive());


function cheap() {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].price < array[j].price) {
                return array[i];
            }
        }
    } return array[j];
}
console.log(cheap());



// function Discount(){
//     for (let i = 0; i < array.length; i++) {
//         array[i]= a        
//     }
// }
// console.log(Discount());


