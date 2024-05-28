// delay.js
const delay = 99999; // 延迟时间（毫秒）

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    await sleep(delay);
    $done({});
})();
