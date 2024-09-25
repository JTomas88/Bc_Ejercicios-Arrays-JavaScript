let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let parSinEsp = par.replace(/\s+/g,'');
let minus = parSinEsp.toLowerCase();

let counts = {};

// Your code here
let contador = 0;
for (let i=0; i<minus.length; i++){
    
    if (counts[minus[i]]) {
        counts[minus[i]] ++ ;
    }else{
        counts[minus[i]] = 1;        
    }    
}

console.log(counts);
