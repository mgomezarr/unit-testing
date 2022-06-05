export const custom = (tiempo: number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);        
    }, tiempo);
});