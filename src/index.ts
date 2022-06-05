export const funcionQueEspera = (tiempo: number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);        
    }, tiempo);
});

export const verdadero = () => {
    return true;
}