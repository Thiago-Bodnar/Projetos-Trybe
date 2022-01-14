const sum = require('./sum');

test('Valor Esperado = 9', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('Valor Esperado = 0', () => {
  expect(sum(0, 0)).toEqual(0);
});
test('Erro esperado', () => {
  expect(sum(0, '0')).toEqual(error);
});