function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

while(true){
    let random = Math.random();
    const final = random * 11;
    console.log(Math.floor(final)+1);
    sleep(1000);
}