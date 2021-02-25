class ResultsView {
  _parentEl = document.querySelector('.questions');

  render(resultsArr) {
    this.clearResults();

    resultsArr.forEach((result) => {
      const html = `
      <div class="question">
        <p>
          ${result.title}
        </p>
        ${
          result.completed
            ? '<strong class="done">DONE</strong>'
            : '<strong class="todo">TODO</strong>'
        }
      </div>
      `;

      this._parentEl.insertAdjacentHTML('afterbegin', html);
    });
  }

  renderError(err) {
    this.clearResults();

    const html = `<strong class="todo">${err}</strong>`;

    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  clearResults() {
    this._parentEl.innerHTML = '';
  }
}

export default new ResultsView();
