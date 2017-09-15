import assert from 'assert';
import * as actions from '../constants';
import auth, { user, token, error } from '../reducers';

describe('Combined Auth Reducer', () => {
  it('initial value', () => {
    assert.deepEqual(auth(undefined, { type: 'NO_ACTION' }), { token: null, user: null, error: null });
  });

  it('pass-thru', () => {
    const state = { token: null, user: null, error: null };
    assert.strictEqual(auth(state, { type: 'NO_ACTION' }), state);
  });
});

describe('User Reducer', () => {
  
  it('initial value', () => {
    assert.equal(user(undefined, { type: 'NO_ACTION' }), null);
  });

  it('pass-thru', () => {
    const state = 'user';
    assert.strictEqual(user(state, { type: 'NO_ACTION' }), state);
  });

  it('Fetched', () => {
    const userState = { name: 'user' };
    assert.deepEqual(user(null, {
      type: actions.FETCHED_USER, payload: userState
    }), userState);
  });

  it('LOGOUT and AUTH_FAILED clears user', () => {
    assert.equal(user({}, { type: actions.LOGOUT }), null);
    assert.equal(user({}, { type: actions.AUTH_FAILED }), null);
  });
});

describe('Token Reducer', () => {
  it('initial value', () => {
    assert.equal(token(undefined, { type: 'NO_ACTION' }), null);
  });

  it('pass-thru', () => {
    const state = 'token';
    assert.strictEqual(token(state, { type: 'NO_ACTION' }), state);
  });

  it('GOT_TOKEN adds token', () => {
    const tokenState = {};
    assert.deepEqual(token(null, {
      type: actions.GOT_TOKEN,
      payload: tokenState
    }), tokenState);
  });

  it('LOGOUT and AUTH_FAILED clears token', () => {
    assert.equal(token({}, { type: actions.LOGOUT }), null);
    assert.equal(token({}, { type: actions.AUTH_FAILED }), null);
  });
});

describe('Error Reducer', () => {
  it('initial value', () => {
    assert.equal(error(undefined, { type: 'NO_ACTION' }), null);
  });

  it('pass-thru', () => {
    const state = 'error';
    assert.strictEqual(error(state, { type: 'NO_ACTION' }), state);
  });

  it('AUTH_FAILED adds error', () => {
    const errorState = {};
    assert.deepEqual(error(null, {
      type: actions.AUTH_FAILED,
      payload: errorState
    }), errorState);
  });

  it('LOGOUT and GOT_TOKEN and FETCHED_USER clears error', () => {
    assert.equal(error({}, { type: actions.LOGOUT }), null);
    assert.equal(error({}, { type: actions.GOT_TOKEN }), null);
    assert.equal(error({}, { type: actions.FETCHED_USER }), null);
  });
});