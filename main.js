
let getPassword = () =>  {
    let arrOf = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','A', 'B', 
    'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N','O', 'P', 'Q', 
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'];
    let n;
    let password = [];
    //let k = 0;
    for (let i = 0; i < 14; i++) {
     
     n = Math.floor(Math.random() * arrOf.length);
     if (arrOf[n] == 'z') { console.log('BAZZZZINGA!!!')};

     password[i] = arrOf[n]
     console.log(n)

    }
     console.log(password);
     console.log(password.join(''));
     console.log(password.length)
};

getPassword();


