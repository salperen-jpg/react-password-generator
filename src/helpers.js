const getUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
};
const getLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
};

const getNumber = () => {
  return Math.floor(Math.random() * 10);
};
const getSymbolSign = () => {
  const randomSymbs = [
    String.fromCharCode(Math.floor(Math.random() * 15 + 33)),
    String.fromCharCode(Math.floor(Math.random() * 7 + 58)),
    String.fromCharCode(Math.floor(Math.random() * 6 + 91)),
    String.fromCharCode(Math.floor(Math.random() * 4 + 123)),
  ];
  return randomSymbs[Math.floor(Math.random() * 4)][0];
};

export const strengthData = [
  {
    id: 1,
    text: 'tooweak',
  },
  {
    id: 2,
    text: 'weak',
  },
  {
    id: 3,
    text: 'medium',
  },
  {
    id: 4,
    text: 'strong',
  },
];

export { getLowerCase, getUpperCase, getNumber, getSymbolSign };
