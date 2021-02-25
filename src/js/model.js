import { API_URL } from './config.js';
import { async } from 'regenerator-runtime';

export const state = {
  search: {
    query: '',
    resluts: [],
    done: [],
    todo: [],
  },
};

export async function loadSearchResults(query) {
  try {
    state.search.query = query;

    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    state.search.resluts = data;

    if (!res.ok) throw new Error(`Cannot reach API 🔥 (${res.status})`);

    state.search.done = data.filter((el) => el.completed);

    state.search.todo = data.filter((el) => !el.completed);
  } catch (err) {
    throw err;
  }
}
