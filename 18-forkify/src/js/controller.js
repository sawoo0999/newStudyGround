import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import bookmarksView from './views/bookmarksView';
import addRecipeView from './views/addRecipeView';
import { MODAL_CLOSE_SEC } from './config';
// if (module.hot) {
//   module.hot.accept();
// }
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//레시피 출력
const controlRecipes = async function () {
  try {
    //현재 주소 해쉬태그 주소값만 따로 추출
    const id = window.location.hash.slice(1);

    //값이 없으면 반환
    if (!id) return;
    recipeView.renderSpinner();

    //0) 현재 선택된 리스트 색상 변경
    resultsView.update(model.getSearchResultsPage());

    //1) Updating bookmark
    bookmarksView.update(model.state.bookmarks);

    //2) Loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    //3)Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

//주소 해쉬태크가 바뀔때마다, 로드할때마다 이벤트 실행
// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controlRecipes)
// );

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

//검색 결과
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    //1) input 데이터 가져오기
    const query = searchView.getQuery();
    if (!query) return;

    //2) 검색 결과 데이터 가져오기
    await model.loadSearchResults(query);

    //3) 결과 리스트 출력
    // resultsView.render(model.state.search.results) 제한없이 배열에 모든 값출력
    resultsView.render(model.getSearchResultsPage(1)); //10 페이지씩 제한 하면서 값 출력

    //4) 초기 페이지 버튼 표시
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

// 페이지 관리
const controlPagination = function (page) {
  //1) 새로운 페이지 출력
  // resultsView.render(model.state.search.results) 제한없이 배열에 모든 값출력
  resultsView.render(model.getSearchResultsPage(page)); //10 페이지씩 제한 하면서 값 출력

  //4)새로운 페이지 버튼 표시
  paginationView.render(model.state.search);
};

//인원 수 조절
const controlServings = function (newServings) {
  // 레시피 인원수 업데이트
  model.updateServings(newServings);
  //레시피 뷰 업데이트
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //1) add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  //2)Update recipe view
  recipeView.update(model.state.recipe);
  console.log(model.state.recipe);

  //3)Rander bookmark List
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

//레시피 직접 생성
const controlAddRceip = async function (newRecipe) {
  try {
    //로딩 스피너
    addRecipeView.renderSpinner();

    //새로운 레시피 데이터 업로드
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    //만든 레시피 바로 렌더
    recipeView.render(model.state.recipe);

    // 업로드 성공 메세지
    addRecipeView.renderMessage();

    // 북마크 재 렌더
    bookmarksView.render(model.state.bookmarks);

    //Change  URL in id
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //레시피 등록창 닫기
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💣', err);
    addRecipeView.renderError(err.message);
  }
};

//이벤트 리스너 종합
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServigns(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRceip);
};
init();

//bookmark 초기화
const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
