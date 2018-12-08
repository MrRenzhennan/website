const TIMERKEY = '_CACHETIME';

/**
 * 存储localStorage
 * @param key key
 * @param content 存储对象
 * @param exptime 过期时间单位秒 （默认7天）
 */
export const setStore = (key, content, exptime) => {
  if (!key) return;
  if (typeof content === 'object') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(key, content);
  if (exptime === undefined) {
    exptime = 86400 * 7;
  }
  window.localStorage.setItem(key + TIMERKEY, new Date().valueOf() + (exptime * 1000))
};

/**
 * 获取localStorage
 */
export const getStore = key => {
  if (!key) return;
  let expTime = window.localStorage.getItem(key + TIMERKEY);

  if (expTime && parseInt(expTime) <= new Date().valueOf()) {
    removeStore(key);
    removeStore(key + TIMERKEY);
  }
  let data = window.localStorage.getItem(key);
  return data;
};

/**
 * 获取JSON localStorage
 * @param key
 * @returns {null}
 */
export const getStoreToJson = key => {
  let json = getStore(key);
  if (json) {
    return JSON.parse(json);
  }
  return null;
};

/**
 * 删除localStorage
 */
export const removeStore = key => {
  if (!key) return;
  window.localStorage.removeItem(key + TIMERKEY);
  window.localStorage.removeItem(key);

};


export const setSessionStore = (key, content, exptime) => {
  if (!key) return;
  if (typeof content === 'object') {
    content = JSON.stringify(content);
  }
  checkStorageSupport().sessionStorage.setItem(key, content);
  if (exptime === undefined) {
    exptime = 86400 * 7;
  }
  checkStorageSupport().sessionStorage.setItem(key + TIMERKEY, new Date().valueOf() + (exptime * 1000))
};

/**
 * 获取localStorage
 */
export const getSessionStore = key => {
  if (!key) return;
  let expTime = checkStorageSupport().sessionStorage.getItem(key + TIMERKEY);

  if (expTime && parseInt(expTime) <= new Date().valueOf()) {
    removeStore(key);
    removeStore(key + TIMERKEY);
  }
  let data = checkStorageSupport().sessionStorage.getItem(key);
  return data;
};


/**
 * 获取JSON localStorage
 * @param key
 * @returns {null}
 */
export const getSessionStoreToJson = key => {
  let json = getSessionStore(key);
  if (json) {
    return JSON.parse(json);
  }
  return null;
};

/**
 * 删除localStorage
 */
export const removeSessionStore = key => {
  if (!key) return;
  checkStorageSupport().sessionStorage.removeItem(key + TIMERKEY);
  checkStorageSupport().sessionStorage.removeItem(key);

};

export const checkStorageSupport = () => {

  let result = {};
  //sessionStorage
  result.sessionStorage = window.sessionStorage;

  return result;

}
