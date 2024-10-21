import { async } from 'regenerator-runtime';
import { API_URL, KEY, RES_PER_PAGE } from './config';
import { AJAX } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }), //&& 는 한가지만 true 경우 뒤에 값을 반환시키는 트릭을 이용해서 key 값이 있으면 오브젝트 생성
  };
};

export const loadRecipe = async function (id) {
  try {
    //294 Helpers or Config
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);
    //293 Refactoring for MVC 강의
    //controller.js 에서 id 값을 받아와서 레시피 추출
    // const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    // const data = await res.json();
    // //실패시 새로운 에러값 을 설정
    // if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    //오브젝트 키값 재설정

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
    console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (ser) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * ser) / state.recipe.servings;
  });
  state.recipe.servings = ser;
};

const persisBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  //Bookmark 배열 오브젝트 추가
  state.bookmarks.push(recipe);

  // 레시피 북마크 버튼 활성화
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persisBookmarks();
};

export const removeBookmark = function (id) {
  //강의없이 만든 코드
  //Bookmarks 배열 삭제
  // state.bookmarks.map((el, i) => {
  //   if (el.id === id) state.bookmarks.splice(i, 1);
  // });

  //강의 코드
  //Bookmarks 배열 삭제
  const index = state.bookmarks.findIndex(book => book.id === id);
  state.bookmarks.splice(index, 1);
  // 레시피 북마크 버튼 비활성화
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persisBookmarks();
};

const init = function () {
  const storage = window.localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

export const uploadRecipe = async function (newRecipe) {
  try {
    //Object.entries() 오브젝트를 배열로 변환
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '') //배열 첫번째가 'ingredient' 고 두번째가 빈값이 아닌것만 가져오기
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        // ing[1].replaceAll(' ', '').split(','); // 빈칸에을 없애고 ,가 기준으로 배열 생성
        if (ingArr.length !== 3)
          //quntify,unit,description 이 요소가 하나라도 없으면 에러
          throw new Error(
            'Wrong ingreient fromat! Please use the correct format :>'
          );
        const [quantity, unit, description] = ingArr; //배열안에 내용을 변수에 대입

        return { quantity: quantity ? +quantity : null, unit, description }; //변수모아서 한 오브젝트로 만든걸 반환
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe); //서버에 reciep 오브젝트 보내기
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
