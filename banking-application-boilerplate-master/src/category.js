var category = function category(key) {
  
  key = key.toLowerCase();
  // Write the Logic here
  switch(key) {
    case 'pl':
      return 'Personal Loan';
    case 'vl':
      return 'Vehicle Loan';
    case 'el':
      return 'Education Loan';
    case 'hl':
      return 'Home Loan';
    default:
      return 'Uncategorized';
  }

  };
  
  module.exports = {
    category: category
  };