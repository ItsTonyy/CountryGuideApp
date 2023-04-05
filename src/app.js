let myBtn = document.querySelector('.search-button');
let textInput = document.querySelector('.input-text');

const handleError = (error) => {
  console.log('deu ruim paizão', error);
};

myBtn.addEventListener('click', () => {
  let countryName = 'Brazil';
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log('deu erro paizão', error);
    });
});

// png: imagem
// capital: capital
// population: população
// currencies : moeda local (ele passa a sigla e só depois o nome da moeda)
// languages : lingua
// continents : continente
