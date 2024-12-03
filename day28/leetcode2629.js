// 2694. Event Emitter
// URL -> https://leetcode.com/problems/event-emitter

class EventEmitter {
  constructor() {
    this.eventRecords = {}
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.eventRecords.hasOwnProperty(eventName)) {
      this.eventRecords[eventName] = []
    }

    let cbList = this.eventRecords[eventName]
    cbList.push(callback);

    return {
      unsubscribe: () => {
        const index = cbList.indexOf(callback)
        cbList.splice(index, 1)
      }
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.eventRecords.hasOwnProperty(eventName)) {
      return []
    }
    let result = []
    let cbList = this.eventRecords[eventName]

    for (let cb of cbList) {
      result.push(cb(...args))
    }
    return result
  }
}

/**
* const emitter = new EventEmitter();
*
* // Subscribe to the onClick event with onClickCallback
* function onClickCallback() { return 99 }
* const sub = emitter.subscribe('onClick', onClickCallback);
*
* emitter.emit('onClick'); // [99]
* sub.unsubscribe(); // undefined
* emitter.emit('onClick'); // []
*/