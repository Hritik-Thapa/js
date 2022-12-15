let str='Hritik'
console.log(str[str.length-1])

typeof'str'

let name='Hritik thapa'

// temperature to celsius

let celcius=20
let farenheit
farenheit=(celcius*1.8)+32
console.log(farenheit)


// == and ===


let bool='1'==1
console.log(bool)

bool='1'===1
console.log(bool)

bool='1'!==1
console.log(bool)


//if


let condition=false
if (condition===true){
    console.log('Its true')
}
else{
    console.log('Its false')
}

let cash=30
let price=60
let diff
if (cash>price) {
    diff=cash-price
    console.log(`you paid ${cash-price} extra`)
}
else if (cash===price){
    console.log('you paid exact amount')
}
else {
    diff=price-cash
    console.log(`You need to pay ${price-cash} more`)
}


let val=""
if ("vall"){
    console.log(!!val)
}
else if (""){
    console.log(!!val)
}


// ternary operators


let hot=true
let rainy=false
str =hot&&rainy? 'its hot':'weather is cold'
console.log(str)


cash=50
price=40
let isStoreOpen=true

let perm=cash>=price && isStoreOpen? 'Give receipt':'dont give receipt'
console.log(perm)


//loop

let count=1

while(count<=3){
    console.log(count)
    count++

}//pretest

count=1
while(count<=3){
    console.log(count)
    count++
}


for(let i=0;i<=3;i++){
    console.log(i)

}


let print
for(j=1;j<=20;j++){
    if (j%3===0 && j%5===0){
        print='Frontend Simplified'
    }
    else if(j%3===0){
        print='Frontend'
    }
    else if(j%5===0){
        print='Simplified'
    }
    else{
        print=j
    }
    console.log(print)
}


// all characters form a string


count=0
let vari='Frontend Simplified'
for(i=0;i<vari.length;i++){
    console.log(vari[i])
}


//function


function hello(firstName, lastName){
    console.log(`welcome to Paris ${firstName + lastName} ` )
    return firstName+lastName
}
let prt=hello('Hritik','Thapa');
console.log(prt)


//celcius to farenheit


function CtoF(cel){
    return (cel*1.8)+32
}

let faren=CtoF(50)
console.log(`50 degrees celcius is ${faren} drgree farenheit`)



//array


let arr=[20,30,40,60,100]
//first element
console.log(arr[0])
//last element
console.log(arr[arr.length - 1])

arr.push(500)
console.log(arr[arr.length - 1])

let array=[1,2,3,4,5,6,7,8]


// arr.filter


let NewArr=array.filter((element) => {
    if (element%2!==0){
        return true
    }
    }
)

console.log(NewArr)


let grades=['A+','A','Fail']
let pass=grades.filter(element => element!=='Fail')
console.log(pass)
let fail=grades.filter((element) => {
    if(element==='Fail'){
        return true
    }
})
console.log(fail)


function arrFilter(array1){
    for(i=0;i<array1.length;i++){
        if (array1[i]<40){
            return 'Fail'
        }
    }
    return 'Pass'
    
}

let array2=[30,50,80,65,70]
let array3=[50,60,80,75,60]

console.log(`The student is ${arrFilter(array2)}`)
console.log(`The student is ${arrFilter(array3)}`)


// arr.map (change value of an element of array)

NewArr=arr.map((element)=>{
    return 1
    
})

console.log(NewArr)


// Dollars into rupees

let dollars=[10,20,30,78]
let rate=127.4
NewArr=dollars.map(element=>element*rate)
console.log(NewArr)


//objects

let obj={
    username:'Hritik',
    age:'18',
    address:'BuNaPa',
    lessonsComplete:[0, 1],
}

console.log(obj.username)
console.log(obj.lessonsComplete.map(element => element*2))


let users=[
    {
        username:'Hritik',
        password:'123',
        age:18,
        address:'BuNaPa',
        lessonsComplete:[0, 1],
    },
    {
        username:'Ram',
        password:'234',
        age:24,
        address:'BuNaPa',
        lessonsComplete:[0, 1, 2],
    },
    {
        username:'Shyam',
        password:'234',
        age:20,
        address:'BuNaPa',
        lessonsComplete:[0, 1, 2, 3],
    }
]

for(i=0;i<users.length;i++){
    if (users[i].lessonsComplete[users[i].lessonsComplete.length-1]>=2){
        console.log(users[i].username)
    }

}

function lessonscheck(usern, passw){
    for(i=0;i<users.length;i++){
        if (users[i].username===usern && users[i].password===passw){
            console.log(`This user has completed upto ${users[i].lessonsComplete.length+1} chapters`)
            return 1
        }
    }
    console.log('doesnt exist')
}

lessonscheck('Hritik','123');

function add(usern,passw,userage,useraddress,userlesson){
    users.push({
        username:usern,
        password:passw,
        age:userage,
        addresss:useraddress,
        lessonsComplete:userlesson,
})
}
add('Hari','456','34','Swayambu',[0,1,2,3])
console.log(users[users.length-1].username)


//DOM


console.log(document.querySelector("#name"))

console.log(document.getElementById('name'))

document.querySelector('h1').innerHTML+="Hello"

document.querySelector("#name").style.color="blue"
document.querySelector("#name").style.fontFamily="Helvetica"

function changeFontSize(){
    document.querySelector('#name').style.fontSize="50px"
}


