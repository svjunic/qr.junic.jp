import Vue from 'vue';

export const state = () => ({
  //state
  history: []
});

export const getter = {
  //getter
};

export const actions = {
  //actions
  ADD_LIST({ commit }, payload) {
    // payloadはhtmlかなにか
    if (typeof payload.date === 'number' && typeof payload.text === 'string') {
      commit('ADD_LIST', payload);
    }
  }
};

export const mutations = {
  //mutations
  ADD_LIST(state, payload) {
    console.log('ADD_LIST', payload);
    console.log(payload);
    state.history.push(payload);
  }
};
