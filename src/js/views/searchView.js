class SearchView {
  _parentEl = document.querySelector('form');
  _todoBtnEl = document.querySelector('.todoBtn');
  _doneBtnEl = document.querySelector('.doneBtn');

  getQuery() {
    const query = this._parentEl.querySelector('input').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('input').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerTodoBtn(handler) {
    this._todoBtnEl.addEventListener('click', function () {
      handler('todo');
    });
  }

  addHandlerDoneBtn(handler) {
    this._doneBtnEl.addEventListener('click', function () {
      handler('done');
    });
  }
}

export default new SearchView();
