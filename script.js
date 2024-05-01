// Mantiqiy ko'paytirish And &&
// Mantiqiy qushish  or 
// Mantiqiy inkor !


//mantiqiy kupaytirish
// true && true = true
// false && true = false
// true && false = false
// false && false = false

//mantiqiy qushish

// true && true = true
// false && true = true
// true && false = true
// false && false = false


//  let anor = true
// olma = true
// yongoq = false
// anjir =true
// tarvuz= NaN
// rost_yolgon= (!anor  !olma && yongoq && !tarvuz);
// console.log(rost_yolgon ? 'ha bu rost': 'bu yolgon ishonma');

// console.log(4+5*6);

// Qisqa shart operatori yoki ternary opretori

// let olma =true
// let anor =false
// let supermarket = olma && anor

// console.log(supermarket ? 'bizda barcha narsa muhayyo' : 'bu safar keling');

// shart operatori  yoki if /else

// if(supermarket){
//     console.log("salom");
// }
// else{
//     console.log('xayr');
// }


let parol={
    email: 'abbostursunov@gmail.com',
    password: '123456',

}

let userParol={
    email:'',
    password:'',
}
function userHandler(e){ 

  userParol[e.name] = e.value
}

function userSign(){
    if(userParol.email==parol.email && userParol.password==parol.password){
        alert('Xush kelibsiz');
        open('https://google.com');
    }
    else{
       document.getElementById("xato")
       .style.display="block";
       alert('Parol yoki E-pochta manzili xato! Boshqattan urinib ko`ring!');
    }
    
}
