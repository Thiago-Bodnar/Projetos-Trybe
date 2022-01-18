const numberDrawn = () => Math.floor(Math.random() * 5);
const drawValidation = (bet) => {
  if (bet === numberDrawn()) {
    return "Tente Novamente";
  } else {
    return "Parabéns, Você Ganhou";
  }
};

const prizeDraw = (bet, validation) => {
  const result = validation(bet);
  return result;
};

console.log(prizeDraw(3, drawValidation(3)));





