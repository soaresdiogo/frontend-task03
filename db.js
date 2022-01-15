const faker = require("faker");

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = () => {
  const data = {
    movies: [],
  };

  for (let i = 1; i <= 1000; i++) {
    data.movies.push({
      id: `movie-${i}`,
      title: capitalizeFirstLetter(faker.lorem.words()),
      director: faker.name.findName(),
      description: faker.lorem.paragraph(),
      year: faker.date.past(10).getFullYear(),
      coverImage: faker.image.business(),
    });
  }

  return data;
};
