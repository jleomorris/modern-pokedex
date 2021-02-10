const mockData = [
  {
    name: 'Barry Johnson',
    age: 43,
  },
  {
    name: 'Chris Evan',
    age: 25,
  },
  {
    name: 'Teresa Middleton',
    age: 29,
  },
];

const getAll = () => {
  return mockData;
};

const addListing = (name, age) => {
  const listing = {
    name,
    age,
  };

  return listing;
};

export default {
  getAll,
  addListing,
};
