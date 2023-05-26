
const code = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log(code);


function Encrypt() {
    const valN = document.getElementById('valNumber').value;
    const valT = document.getElementById('valText').value;
    const result = document.getElementById('result');
    let text;
    console.log(valN);
    console.log(valT);
    console.log(parseInt(code.indexOf(valT[0])) + parseInt(valN));
    // text += parseInt(code.indexOf(valT[0])) + parseInt(valN) + "";
    result.innerHTML = code[(parseInt(code.indexOf(valT[0])) + parseInt(valN))%26];
}


