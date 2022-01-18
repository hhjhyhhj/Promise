# 函数对象 和  实例对象
    函数对象： 将函数当对象来使用就是函数对象  xx.qq  xx 是函数  xx此时就叫函数对象  
    实例对象： 通过new出来的对象就是实例对象

# 回调函数
    同步回调：函数会立即执行
    异步回调：函数不会立即执行，而是等程序执行完之后才执行

# JS的error处理
    1、常见的错误类型
        1)Error：所有错误的父类型
        2)ReferenceError:引用错误
            console.log(a) 
        3)TypeError:数据类型不正确的错误
            let a = null
            console.log(a.xxx)
        4)RangeError: 数据值不在其所允许的范围内
            function fn(){
                fn()
            }
            fn()      递归
        5)SyntaxError: 语法错误
            const b = ''''

# 错误处理
    1、捕获错误
        try...catch
    2、抛出错误
        throw Error

# Promise
    定义：JS中进行异步编程的新的解决方案(旧的是什么？旧的是纯回调的形式)
    从语法上来说: Promise 是一个构造函数
    从功能上来看: Promise封装异步操作并且可以获取结果

    状态： 1 pending-处理中 2 resolved-已成功 3 reject-失败

# 为什么使用Promise
    1、指定回调函数的方法更加灵活
        旧的：必须再启动异步任务之前指定

    2、支持链式调用，可以解决回调地狱的问题  
        什么是回调地狱？回调函数嵌套使用，外部回调函数异步执行的结果是嵌套的回调函数执行的条件


# async\await   回调地狱最终的解决方案(比Promise好的地方在于没有回调函数)
    1、async函数
        1)函数的返回值为Promise对象
        2)promise对象的结果由await函数执行的返回值决定
    2、await
        1)右侧的表达式一版为promise对象，但也可以是其他的值
        2)如果表达式是promise对象，await返回的时promise成功的值
        3)如果表达式不是promise对象，await返回的是值本身

    3、注意
        1)await必须写在async函数中，但async函数中可以没有await
        2)如果await的promise失败了，就会抛出异常，需要通过try...catch捕获








