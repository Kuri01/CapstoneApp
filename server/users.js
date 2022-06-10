const users = [
  {
    id: 1,
    details: {
      username: 'kkuriata',
      name: 'Kamil',
      surname: 'Kuriata',
      email: 'kuribiznes@gmail.com',
      gender: 'man',
      password: '$2a$12$UFKNWwaDXu/AT4q3gDb3feoKAWdeEjzF8S/4YdXyHsmB0Saebb4pq',
      image: 'none',
    },
    tickets: [
      {
        id: '9ba087d9-8305-4d8f-9a43-6b061242819d',
        departureCity: 'Wroclaw',
        arrivalCity: 'Warszawa',
        departureTime: '17:00',
        arrivalTime: '20:00',
        date: '20/02/2022',
        price: 30,
      },
    ],
  },
  {
    id: 2,
    details: {
      username: 'somegirl1',
      name: 'Katarzyna',
      surname: 'Nowak',
      email: 'knowak@gmail.com',
      gender: 'woman',
      password: '$2a$12$Dh4GNCRTRDWliLlAflbVz.jeNnRi/SnPJdp8SU37VvZuLSq1Raela',
      image: 'none',
    },
    tickets: [
      {
        id: '39ade6d4-3561-42c7-b62c-21ea7e02642f',
        departureCity: 'Wroclaw',
        arrivalCity: 'Warszawa',
        departureTime: '17:00',
        arrivalTime: '20:00',
        date: '20/02/2022',
        price: 30,
      },
    ],
  },
];

module.exports = { users };
