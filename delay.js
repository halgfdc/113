// delay_simulation.js

function delayResponse(request) {
    // Introduce a delay of 99999 milliseconds (almost 100 seconds)
    let delay = 99999; // Milliseconds

    // Wrap the original response with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(request.response);
        }, delay);
    });
}

function onRequest(request) {
    if (request.protocol === 'udp') {
        return delayResponse(request);
    }
    return request.response;
}

module.exports = {
    onRequest
};
