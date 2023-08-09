export function formatValue(valueInCents: number){
  const valueInReais = valueInCents / 100
  return valueInReais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}