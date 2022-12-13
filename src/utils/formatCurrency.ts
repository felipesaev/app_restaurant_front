export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-bt', { style: 'currency', currency: 'BRL' }).format(value);
}
