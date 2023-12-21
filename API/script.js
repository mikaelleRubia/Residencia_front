const characterId = document.getElementById('characterId')
const btnGo = document.getElementById('btn-go')
const content = document.getElementById('content')
const image = document.getElementById('img')


const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data)=>{
        return data;
    });

    return result;
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'image', 'episode']
const buildResult = (result) => {
    const newobj = {};
    keys.map((key) => document.getElementById(key))
    .map((element) => {
        element.checked && (newobj[element.name] = result[element.name]);
    });

    return newobj;

};

btnGo.addEventListener('click', async (event) =>{
    event.preventDefault();
    const result = await fetchApi(characterId.value);
    // content.textContent = `${JSON.stringify(result.name, undefined, 2)}`;
    content.textContent = `${JSON.stringify(buildResult(result), undefined, 2)}`;
    // console.log(buildResult(result));
    image.src =  `${result.image}`;
});

