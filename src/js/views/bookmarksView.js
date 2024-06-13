import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet, Find a nice recipe and bookmark it :)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  //가져온데이터 배열 반복 실행 해서 여러개 PreView 생성
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new BookmarksView();
