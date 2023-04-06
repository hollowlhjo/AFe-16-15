let obj = {
    Name: "Max"
}
obj.Age = 13
obj.Height = 180
obj.Place = "Ukraine"

for(let property  in obj){
    console.log(property + ":" + " " + obj[property])
}

let obj1 = JSON.stringify(obj)
obj1 = JSON.parse(obj1)

let copy = Object.assign(obj)

copy.Age = 14
copy.Name = "Yapik"

for(let property  in obj){
    console.log(property + ":" + " " + obj[property])
}
let MyMap = new Map([
    [Yapik, undefined]
    [Max, +380950483994]
]
); 