// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, dnaArray) => {
  return {
    specimenNum: number,
    dna: dnaArray,

    // Mutate method
    mutate() {
      const index = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[index];
      let newBase = returnRandBase();
      while (currentBase === newBase) {
        newBase = returnRandBase();
      }
      this.dna[index] = newBase;
      return this.dna;
    },

    // Compare DNA method
    compareDNA(otherPAequor) {
      let commonCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPAequor.dna[i]) {
          commonCount++;
        }
      }
      const commonPercentage = (commonCount / this.dna.length) * 100;
      console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${commonPercentage.toFixed(2)}% DNA in common`);
    },

    // Will likely survive method
    willLikelySurvive() {
      const survivalBases = this.dna.filter(base => base === 'C' || base === 'G');
      return survivalBases.length / this.dna.length >= 0.6;
    },

    // Complement strand method
    complementStrand() {
      const complement = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
      return this.dna.map(base => complement[base]);
    }
  };
}

// Create 30 instances of pAequor that can survive
const survivingPAequors = [];
let idCounter = 1;

while (survivingPAequors.length < 30) {
  const newPAequor = pAequorFactory(idCounter, mockUpStrand());
  if (newPAequor.willLikelySurvive()) {
    survivingPAequors.push(newPAequor);
  }
  idCounter++;
}

console.log(survivingPAequors);
