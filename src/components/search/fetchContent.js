const APP_ID = "4da8fa26";
const APP_KEY = "992b97bf7814b259ae3bebf8fab14924";

const getData = async (s, page, setnextpagestate, setq) => {
  const from = (page - 1) * 10;

  const to = page * 10;
  console.log(to + " , " + from);
  const result = await fetch(
    `https://api.edamam.com/search?q=${s}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`
  );
  const response = await result.json();
  // const page2 = page + 1;
  // const fr = (page2 - 1) * 10;
  // const t = page * 10;
  // const result2 = await fetch(
  //   `https://api.edamam.com/search?q=${s}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${fr}&to=${t}`
  // );
  // console.log(result2);
  // const response2 = await result2.json();
  // console.log(response2);
  const more = await response.more;
  console.log(more);
  setq(s);
  setnextpagestate(more);
  console.log(more);
  const recipes = await response.hits;
  console.log(recipes);
  return recipes;
};

export default getData;
