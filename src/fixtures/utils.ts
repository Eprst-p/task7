export const convertDuration = (bggDuration:number) => +(bggDuration * 1.4 / 60).toFixed(1);

export const getRandomPositiveNumber = (a:number, b:number) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    return Math.floor(Math.random() * (upper - lower + 1)) + lower; //рандомное число от a до b включительно
  };
  
 export  const getRandomElement = (array:unknown[]) => array[getRandomPositiveNumber(0, array.length-1)];
  