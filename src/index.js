const Mute = (() => {
  var _internalValue;
  var _lastElement = [];

  return {
    latest: function () {
      return { latest: _lastElement[_lastElement.length - 2] };
    },
    latestN: function (idx) {
      return { last: _lastElement[idx] != null ? _lastElement[idx] : null };
    },
    getAll: function () {
      let concatArray = [_internalValue].concat(_lastElement);
      return { value: concatArray.slice(0, concatArray.length - 1) };
    },
    get: function (x) {
      let concatArray = [_internalValue].concat(_lastElement);
      if (concatArray.slice(0, concatArray.length - 1)[x] === undefined)
        throw Error("ERROR: no value at this index");
      return { value: concatArray.slice(0, concatArray.length - 1)[x] };
    },
    mutate: function (inital) {
      _lastElement.unshift(_internalValue);
      _internalValue = inital;
      return _internalValue;
    },
  };
})();

module.exports = Mute;
