import { UniformDistribution } from "./Util";
import { TVec3 } from "./types";

let randomV3Cache = new Map<string, TVec3>();

export function cacheRandomV3(
    lowerBound: number, 
    upperBound: number,
    instance: number) : TVec3
{
    const key = `${lowerBound},${upperBound},${instance}`;

    if(!randomV3Cache.has(key))
    {
        randomV3Cache.set(key, 
            [
                UniformDistribution(lowerBound, upperBound),
                UniformDistribution(lowerBound, upperBound),
                UniformDistribution(lowerBound, upperBound)
            ]
        );
    }

    return randomV3Cache.get(key) as TVec3;
}


let randomNumberCache = new Map<string, number>();

export function cacheRandomNumber(
    lowerBound: number, 
    upperBound: number,
    instance: number) : number
{
    const key = `${lowerBound},${upperBound},${instance}`;

    if(!randomNumberCache.has(key))
    {
        randomNumberCache.set(key, UniformDistribution(lowerBound, upperBound));
    }

    return randomNumberCache.get(key) as number;
}
