const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "RUB",
  style: "currency",
  minimumFractionDigits: 0,
})

function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}

export default formatCurrency;