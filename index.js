const translate = (string="") => {
    const proteins=[];
    let obtainedproteins=[];
    
    let codons = {AUG:"Methionine",
      UUU:"Phenylalanine", UUC:"Phenylalanine",
      UUA:"Leucine", UUG:"Leucine",
      UCU:"Serine", UCC:"Serine", UCA:"Serine", UCG:"Serine",
      UAU:"Tyrosine", UAC:"Tyrosine",
      UGU:"Cysteine", UGC:"Cysteine",
      UGG:"Tryptophan",
      UAA:"STOP", UAG:"STOP", UGA:"STOP"
    };
  
   //type code here
    return obtainedproteins;
  
  };

  module.exports = translate;