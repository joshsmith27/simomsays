const nums = [1,2,3,4,5,6];
const strings = ['Josh', 'Brent', 'Dan', 'Stuff'];
const arrOfObjs = [
    {
        name: 'josh',
        age: 26,
        arr: [1,2,3,4,5,6]
    },
    {
        name: 'dan',
        age: 27,
        arr: [1,2,3,4,5,6]
    },
    {
        name: 'brent',
        age: 31,
        arr: [1,2,3,4,5,6]
    },
];

 const looperloop = (arr) => {
    return arr.reduce((r, e) => {
         e.arr.forEach((e)=>{
            r.push(e);
        })
        return r
    }, [])
 }


console.log( looperloop(arrOfObjs))