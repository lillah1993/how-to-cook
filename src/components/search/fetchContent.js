const APP_ID= "4da8fa26";
const APP_KEY= "992b97bf7814b259ae3bebf8fab14924";

const getData = async(s,func) => {
    const result = await fetch(`https://api.edamam.com/search?q=${s}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const response = await result.json();
    console.log(response)
    const recipes = response.hits;
    console.log(recipes);
    func('');
    return recipes;

}

export default getData;