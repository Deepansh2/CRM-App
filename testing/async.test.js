/**
 * Testing the callback function
 * 
 * In this the callback function passed will take a minmum of 5 seconds
 */

function fetchData(callback){
    setTimeout(()=>{
        callback("Deepanshu")
    },2000)
}

/**
 * Write a test to validate "Deepanshu is passed as the argument to
 * the callback function"
 */

/** 
test("testing Deepanshu argument is passed to callback fn passed inside the fetchData fn",()=>{

    function callback(data){
        expect(data).toBe("Deepanshu");// Testing argument of the cb fn is "Deepanshu"
    }

    fetchData(callback)// Invoking the function
});
*/

test("Testing callback properly",(done)=>{
    
    function callback(data){
        expect(data).toBe("Deepanshu");
        done();// This will ensure that the test is waiting for the callback to be executed
    }
    fetchData(callback);
});

/**
 * Testing the promise
 */
function willMarry(){
    return new Promise((resolve,reject)=>{
        resolve("I will marry you !");
    })
}

test("Testing promise",()=>{ //test.only

    willMarry().then((mesg)=>{
        expect(mesg).toBe("I will marry you !");
    })
})

/**
 * Only method will make only test to be executed
 */
