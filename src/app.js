let myBtn = document.querySelector('.search-button');
let textInput = document.querySelector('.input-text');
// let result = document.querySelector('.main-box')

const handleError = (error) => {
  console.log('deu ruim paizão', error);
};

myBtn.addEventListener('click', () => {
  let countryName = textInput.value // 
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      // testes abaixo:

      // console.log(data)
      // console.log(data[0].flags.png)
      // console.log(data[0].name.common)
      // console.log(data[0].capital[0])
      // console.log(data[0].continents[0])
      // console.log(data[0].population)
      // console.log(Object.keys(data[0].currencies)[0])
      // console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
      // console.log(Object.values(data[0].languages).toString().split(',').join(', '))
      
      result.innerHTML = `

      <div class = 'data-box'>
        <h2 class = 'country-name' >${data[0].name.common}</h2>
        <img src="${data[0].flags.png}" alt="imagem" class = 'flag-img'>
      
        <div class = 'data-wrapper'> 

        <div class = 'wrapper'        
          <h4>Capital:</h4> 
          <span> ${data[0].capital[0]} </span>
        </div>

        <div class = 'wrapper'      
          <h4>Continent: </h4>
          <span> ${data[0].continents[0]} </span>
        </div>

        <div class = 'wrapper'
          <h4>Population: </h4>
          <span> ${data[0].population} </span>
        </div>

        <div class = 'wrapper'
          <h4>Currency: </h4>
          <span>  ${Object.keys(data[0].currencies)[0] + ' - ' +data[0].currencies[Object.keys(data[0].currencies)].name} </span>
        </div>

        <div class = 'wrapper'
          <h4>Common Languages:</h4>
          <span> ${Object.values(data[0].languages).toString().split(',').join(', ')}  </span> 
        </div>     

      </div>

      </div>
      `;
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
