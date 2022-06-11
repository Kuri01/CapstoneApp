const departures = [
  {
    id: 1,
    description: {
      date: '2022/6/12',
      departureCity: 'Wroclaw',
      arrivalCity: 'Warszawa',
      departureTime: '14:30',
      arrivalTime: '17:20',
      price: 15.9,
      seats: [
        {
          name: 'a',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'b',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'c',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: false },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'd',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'e',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'f',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'g',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'h',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'i',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'j',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: true, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    description: {
      date: '2022/6/12',
      departureCity: 'Torun',
      arrivalCity: 'Gdansk',
      departureTime: '14:30',
      arrivalTime: '17:20',
      price: 20,
      seats: [
        {
          name: 'a',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'b',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'c',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'd',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'e',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'f',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'g',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'h',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'i',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'j',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: true, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    description: {
      date: '2022/6/12',
      departureCity: 'Wroclaw',
      arrivalCity: 'Warszawa',
      departureTime: '16:30',
      arrivalTime: '18:20',
      price: 19,
      seats: [
        {
          name: 'a',
          seats: [
            { id: 1, display: true, free: false },
            { id: 2, display: true, free: false },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'b',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'c',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'd',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'e',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'f',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'g',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'h',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'i',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'j',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: true, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    description: {
      date: '2022/6/12',
      departureCity: 'Wroclaw',
      arrivalCity: 'Warszawa',
      departureTime: '10:30',
      arrivalTime: '17:20',
      price: 16.9,
      seats: [
        {
          name: 'a',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'b',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'c',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'd',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'e',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'f',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'g',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'h',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'i',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'j',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: true, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
      ],
    },
  },
  {
    id: 5,
    description: {
      date: '2022/6/12',
      departureCity: 'Wroclaw',
      arrivalCity: 'Warszawa',
      departureTime: '20:30',
      arrivalTime: '23:20',
      price: 20.3,
      seats: [
        {
          name: 'a',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'b',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'c',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'd',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'e',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'f',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'g',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'h',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'i',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'j',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: true, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
      ],
    },
  },
  {
    id: 6,
    description: {
      date: '2022/6/12',
      departureCity: 'Wroclaw',
      arrivalCity: 'Warszawa',
      departureTime: '14:30',
      arrivalTime: '17:20',
      price: 10.3,
      seats: [
        {
          name: 'a',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'b',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'c',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'd',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'e',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'f',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'g',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'h',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'i',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'j',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: true, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
      ],
    },
  },
  {
    id: 7,
    description: {
      date: '2022/6/8',
      departureCity: 'Wroclaw',
      arrivalCity: 'Warszawa',
      departureTime: '14:30',
      arrivalTime: '17:20',
      price: 17.3,
      seats: [
        {
          name: 'a',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'b',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'c',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'd',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'e',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'f',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'g',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'h',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'i',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: false, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
        {
          name: 'j',
          seats: [
            { id: 1, display: true, free: true },
            { id: 2, display: true, free: true },
            { id: 3, display: true, free: false },
            { id: 4, display: true, free: true },
            { id: 5, display: true, free: false },
          ],
        },
      ],
    },
  },
];

module.exports = { departures };
