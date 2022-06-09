const p = new Promise((resolve, reject)=>{
    for(i=0;i<100000;i++){
    console.log('test')
    }
    resolve(1);
})

console.log('first!')
p.then(()=>console.log('done'))