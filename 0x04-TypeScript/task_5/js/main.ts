// task_5/js/main.ts

// Unique "brand" using TypeScript's nominal typing pattern
interface MajorCredits {
    credits: number;
    __brand: 'major';
  }
  
  interface MinorCredits {
    credits: number;
    __brand: 'minor';
  }
  
  // Functions to sum the credits
  
  export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'major',
    };
  }
  
  export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'minor',
    };
  }
  