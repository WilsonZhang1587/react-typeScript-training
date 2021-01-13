const last2 = <T>(arr:T[]): T => {
    return arr[arr.length -1];
}
const last = (arr:Array<any>) => {
    return arr[arr.length -1];
}
const l = last2([1,2,3])
const l2 = last2<string>(['a','b','c'])

const makeArr = <X, Y = any>(x:X, y:Y):[X,Y] => { // 有沒有 :[] 代表是不是已經確定個別型態， 沒有的話會有 |
    return [x,y]
}
const v = makeArr(5,6);
const v2 = makeArr("a","b");
const v3 = makeArr<string | null, number>(null,5);  // 後來使用時進行修改
const v4 = makeArr<string | null>(null,5); // 可以跟原本的型態搭配，假如原本型態有特別設置，此地不用特別在設置

const makeFullName = <T extends {firstName:string,lastName:string}>(obj:T) => {
    return{
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}
const v5 = makeFullName({firstName:'bob',lastName:'junior',age:15})
// const v6 = makeFullName({another:'bob',lastName:'junior',age:15})

// ------------------------------------------------------------------------------------------------------------------

interface Tab<T> {
    id: string,
    position: number,
    data: T;
}
type NumberTab = Tab<number>;
type StringTab = Tab<string>;