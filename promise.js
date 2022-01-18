// const a = new Promise((resolve,reject)=>{
//     //执行异步操作任务

//     //成功的回调
//     // resolve(111)
//     //失败的回调
//     reject(222)
// })
// a.then(
//     value => { //接收到成功的参数
//         console.log(value)
//     },
//     reason =>{// 接收到失败的参数
//         console.log(reason)
//     }
// )

// async function fn1(){
//     return 1
// }
// const a =await fn1()
// console.log(a)
function fn1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(12)
        },1000)
    })
}

async function fn2(){
  try{
    const a = await fn1()
    console.log(a)
  }catch(error){
    console.log(error)
  }
}
fn2()







