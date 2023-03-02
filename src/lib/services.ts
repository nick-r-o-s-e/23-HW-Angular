interface Service {
  title: string;
  price: number;
  picked: boolean;
}

export const services = [
  { title: 'Web Development', price: 300, picked: false },
  { title: 'Design', price: 400, picked: false },
  { title: 'Integration', price: 250, picked: false },
  { title: 'Training', price: 220, picked: false },
];
