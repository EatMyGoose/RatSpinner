export function UniformDistribution(
    lowerBound: number, 
    upperBound: number)
{
    return lowerBound + (Math.random() * (upperBound - lowerBound));
}