// task_5/js/main.ts
// Functions to sum the credits
export function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'major',
    };
}
export function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'minor',
    };
}
//# sourceMappingURL=main.js.map