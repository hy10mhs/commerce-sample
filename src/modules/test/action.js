export const PING = 'test/PING';
export const PONG = 'test/PONG';

export const ping = payload => ({ type: PING, payload });
export const pong = payload => ({ type: PONG, payload });
