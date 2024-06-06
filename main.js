fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => createCards(data.slice(0,20)))
  .catch(error => console.error('Error fetching data:', error));

function createCards(data) {
  const container = document.querySelector('.cards');

  data.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';

    const id = document.createElement('h1');
    id.classList.add("id")
    id.textContent = `Id: ${user.id}`;

    const name = document.createElement('h2');
    name.textContent = `Name: ${user.name}`;

    const price = document.createElement('h3');
    price.textContent = `Email: ${user.email}`;

    const category = document.createElement('h3');
    category.textContent = `Body: ${user.body}`;

    card.append(id, name, price, category );

    container.appendChild(card);
  });
}