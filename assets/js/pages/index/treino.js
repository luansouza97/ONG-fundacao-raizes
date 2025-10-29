let index = 0;
setInterval(() => {
    index = (index + 1) % 3;
    console.log(`impressão ${index}`);
}, 1000);