
let str = ("\>\_because this is an illusional\
 world inside the browser world,do I get to call it \'the matrix\'\? ");
let i = 0;
let $ = document.getElementById('screen');
const selfType = ()=>{
if (i<str.length){
   $.innerHTML += str.charAt(i);
   i++;
   }
}

setInterval(selfType, 400);
