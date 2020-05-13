
// Match RNA strings to their actual meaning
let codons = ( () => {
  let AUG,UUU,UUC,UUA,UUG,UCU,UCC,UCA,UCG,UAU,UAC,UGU,UGC,UGG,UAA,UAG,UGA;
  AUG = "Methionine";
  UUU = UUC = "Phenylalanine";
  UUA = UUG = "Leucine";
  UCU = UCC = UCA = UCG = "Serine";
  UAU = UAC = "Tyrosine";
  UGU = UGC = "Cysteine";
  UGG = "Tryptophan";
  UAA = UAG = UGA = "STOP";
  return {AUG,UUU,UUC,UUA,UUG,UCU,UCC,UCA,UCG,UAU,UAC,UGU,UGC,UGG,UAA,UAG,UGA}
})();


// Translate Function
const translate = (string="") => {
 
  //Create array to hold protein names 
  const proteins=[];

  // divide strings into 3 with this for loop
  for (let index = 0; index < string.length; index+=3) {
    const protein = codons[string.substring(index,index+3)];
    
    // throw error if protein is undefined
    if (protein === undefined)
      throw new Error ('Invalid codon')

    if (protein === 'STOP')
      break;

    //Push proteins to protein arrays 
    proteins.push(protein);
  }

  return proteins
};

translate('UCUUCCUCAUCG')

  module.exports = translate;