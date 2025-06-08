function debounce(fn,delay){
    let timer;
    return function(...args){
        clearInterval(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}