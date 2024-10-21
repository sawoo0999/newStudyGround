class SearchView {
  _parentEl = document.querySelector('.search');

  //Input Value 가져오기
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  //초기화
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  //이벤트 리스너
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
