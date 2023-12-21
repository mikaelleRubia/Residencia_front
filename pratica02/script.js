
const fetchApi = () => {
    const result = fetch('https://restcountries.com/v3.1/name/brasil')
      .then(response => response.json())
      .then((data)=>{console.log(data);
    });
}

fetchApi();
