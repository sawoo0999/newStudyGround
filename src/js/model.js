import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE } from './config';
import { getJSON } from './helpers';

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

export const loadRecipe = async function (id) {
  try {
    //294 Helpers or Config
    const data = await getJSON(`${API_URL}${id}`);

    //293 Refactoring for MVC 강의
    //controller.js 에서 id 값을 받아와서 레시피 추출
    // const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    // const data = await res.json();
    // //실패시 새로운 에러값 을 설정
    // if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    //오브젝트 키값 재설정
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
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
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
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
console.log(state.bookmarks);
