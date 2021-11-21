const formatProductName = (product) => {
  if (product === 1) {
    return 'Chás';
  }
  if (product === 2) {
    return 'Incensos';
  }
  return 'Produtos Orgânicos';
};

export default formatProductName;
