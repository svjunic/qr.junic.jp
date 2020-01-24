// import Vue from 'vue';

export const state = () => ({
  //state
  history: []
});

export const getters = {
  historyOrderByDesc(state) {
    let history = [].concat(state.history);
    history = history.sort((a, b) => {
      let comparison = 0;
      if (a.datetime < b.datetime) {
        comparison = 1;
      } else if (a.datetime > b.datetime) {
        comparison = -1;
      }
      return comparison;
    });
    return history;
  }
};

export const actions = {
  //actions
  ADD_ITEM({ commit }, payload) {
    // payloadはhtmlかなにか
    if (typeof payload.datetime === 'number' && typeof payload.date === 'string' && typeof payload.text === 'string') {
      commit('ADD_ITEM', payload);
    }
  },
  DELETE_ITEM({ commit }, payload) {
    if (typeof payload === 'number') {
      commit('DELETE_ITEM', payload);
    }
  }
};

export const mutations = {
  //mutations
  ADD_ITEM(state, payload) {
    console.log('ADD_ITEM', payload);
    console.log(payload);
    state.history.push(payload);
  },
  DELETE_ITEM(state, payload) {
    console.log('DELETE_LIST', payload);
    console.log(payload);
    state.history.splice(payload, 1);
  }
};
