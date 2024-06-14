import icons from 'url:../../img/icons.svg';

//부모 클래스 다른 View 들이 공통으로 사용하는 함수 변수 모음
export default class View {
  _data;

  /**
   * DOM에서 받은 오브젝트를 표시
   * @param {Object | Object[]} data  렌더된 데이터 (e.g. recipe)
   * @param {boolean} [render= true ] 만약 false 면 markup으로 반환
   * @returns
   */

  //data 맞는값 표시
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //update
  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();
    this._data = data;
    const newMarkup = this._generateMarkup();
    //Dom markup 된 모든 값 가져오기
    const newDom = document.createRange().createContextualFragment(newMarkup);
    //새로운 모든 요소 선택
    const newElements = Array.from(newDom.querySelectorAll('*'));
    //기존 모든 요소 선택
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    //새로운 요소 반복
    newElements.forEach((newEl, i) => {
      //현재 El 설정
      const curEl = curElements[i];

      //현재 El 이랑 새로운 El 값 비교후 모든값이 true 아닐시 조건문 AND 새로운 El 값 자식 요소에 텍스트 가 있을시 조건문

      // 텍스트 변경
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        //현재 El 값 text 를 새로운 El 값의 text로 변경
        curEl.textContent = newEl.textContent;
      }
      //변경된 속성 변경
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  //초기화
  _clear() {
    this._parentElement.innerHTML = '';
  }

  //Spinner
  renderSpinner() {
    const markup = `<div class="spinner">
        <svg>
            <use href="${icons}#icon-loader"></use>
        </svg>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //에러 메세지
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //기본상태 메세지
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
