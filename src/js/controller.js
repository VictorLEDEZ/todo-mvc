import * as model from './model.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';

async function controlSearchResults(filter) {
  try {
    if (filter) return resultsView.render(model.state.search[filter]);

    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    resultsView.render(model.state.search.resluts);
  } catch (err) {
    resultsView.renderError(err);
    console.error(err.message);
  }
}

function init() {
  searchView.addHandlerSearch(controlSearchResults);
  searchView.addHandlerTodoBtn(controlSearchResults);
  searchView.addHandlerDoneBtn(controlSearchResults);
}
init();
