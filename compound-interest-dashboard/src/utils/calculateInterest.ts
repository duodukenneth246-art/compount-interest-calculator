export function calculateCompoundInterest(principal: number, rate: number, time: number, frequency: number): number {
    const amount = principal * Math.pow((1 + (rate / (frequency * 100))), frequency * time);
    const compoundInterest = amount - principal;
    return compoundInterest;
}