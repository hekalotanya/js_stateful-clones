'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const arrayOfState = [];
  const newState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(newState, action.extraData);
        break;

      case 'removeProperties':
        for (const keyRemove of action.keysToRemove) {
          delete newState[keyRemove];
        }
        break;

      case 'clear':
        for (const key in newState) {
          delete newState[key];
        }
    }
    arrayOfState.push({ ...newState });
  }

  return arrayOfState;
}

module.exports = transformStateWithClones;
