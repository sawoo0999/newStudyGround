import View from './View';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _curPage;
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    this._curPage = this._data.page;

    //받은 데이터 배열 길이와 최대페이지랑 나누기
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //첫 페이지(다른페이지가 있을경우), 다른 페이지로 넘어가기
    if (this._curPage === 1 && numPages > 1) {
      return this._markupCreate('next');
    }
    //마지막 페이지
    if (this._curPage === numPages && numPages > 1) {
      return this._markupCreate('prev');
    }
    // 중간 페이지
    if (this._curPage < numPages) {
      return this._markupCreate('prev') + this._markupCreate('next');
    }
    //첫 페이지(다른페이지 없음)
    return '';
  }

  //이벤트 리스너
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      //타켓 안에 있는 지정 클래스 찾기
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  //버튼 생성
  _markupCreate(cla) {
    // 짧게 요약 가능하지만 화살표 위치 변경 어려움
    const pageNum = cla === 'next' ? this._curPage + 1 : this._curPage - 1;
    return `
        <button data-goto="${pageNum}" class="btn--inline pagination__btn--${cla}">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-${
      cla === 'next' ? 'right' : 'left'
    }"></use>
            </svg>
            <span>Page ${pageNum}</span>
        </button>`;
  }
  //길지만 화살표 위치 변경 쉬움
  // if (cla === 'next') {
  //   return `
  //   </button>
  //   <button data-goto="${
  //     this._curPage + 1
  //   }" class="btn--inline pagination__btn--next">
  //     <span>Page ${this._curPage + 1}</span>
  //     <svg class="search__icon">
  //       <use href="${icons}#icon-arrow-right"></use>
  //     </svg>
  //   </button> `;
  // } else if (cla === 'prev') {
  //   return `<button data-goto="${
  //     this._curPage - 1
  //   }" class="btn--inline pagination__btn--prev">
  //     <svg class="search__icon">
  //       <use href="${icons}#icon-arrow-left"></use>
  //     </svg>
  //     <span>Page ${this._curPage - 1}</span>`;
  // } else {
  //   return `<button data-goto="${
  //     this._curPage - 1
  //   }" class="btn--inline pagination__btn--prev">
  //     <svg class="search__icon">
  //       <use href="${icons}#icon-arrow-left"></use>
  //     </svg>
  //     <span>Page ${this._curPage - 1}</span>
  //   </button>
  //   <button data-goto="${
  //     this._curPage + 1
  //   }" class="btn--inline pagination__btn--next">
  //     <span>Page ${this._curPage + 1}</span>
  //     <svg class="search__icon">
  //       <use href="${icons}#icon-arrow-right"></use>
  //     </svg>
  //   </button> `;
  // }
}

export default new PaginationView();
