const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function print1(text3, text) {
        console.log(text);
    }
    callbackFunction(print1);
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    const promise1 = promiseFunction();
    promise1.then(result => console.log(result));
}


/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    const promise2 = await promiseFunction();
    console.log(promise2);
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    callError(function (error, success) {
        if (error) {
            throw error;
        } else {
            return success;
        }
    });
}


/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    const promise5 = promiseFunctionError();
    return promise5.catch(error => {
        throw error;
    });
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    const promise6 = promiseFunctionError();
    try {
        await promise6;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};