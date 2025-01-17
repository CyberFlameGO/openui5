sap.ui.define(['sap/ui/webc/common/thirdparty/base/UI5Element', 'sap/ui/webc/common/thirdparty/base/renderer/LitRenderer', 'sap/ui/webc/common/thirdparty/base/i18nBundle', 'sap/ui/webc/main/thirdparty/Dialog', 'sap/ui/webc/main/thirdparty/Button', 'sap/ui/webc/main/thirdparty/BusyIndicator', './generated/templates/BarcodeScannerDialogTemplate.lit', './generated/themes/BarcodeScannerDialog.css', './generated/i18n/i18n-defaults'], function (UI5Element, litRender, i18nBundle, Dialog, Button, BusyIndicator, BarcodeScannerDialogTemplate_lit, BarcodeScannerDialog_css, i18nDefaults) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

  var UI5Element__default = /*#__PURE__*/_interopDefaultLegacy(UI5Element);
  var litRender__default = /*#__PURE__*/_interopDefaultLegacy(litRender);
  var Dialog__default = /*#__PURE__*/_interopDefaultLegacy(Dialog);
  var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
  var BusyIndicator__default = /*#__PURE__*/_interopDefaultLegacy(BusyIndicator);

  function fixProto(target, prototype) {
    var setPrototypeOf = Object.setPrototypeOf;
    setPrototypeOf ? setPrototypeOf(target, prototype) : target.__proto__ = prototype;
  }
  function fixStack(target, fn) {
    if (fn === void 0) {
      fn = target.constructor;
    }
    var captureStackTrace = Error.captureStackTrace;
    captureStackTrace && captureStackTrace(target, fn);
  }
  var __extends$13 = function () {
    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } }
      };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  var CustomError = function (_super) {
    __extends$13(CustomError, _super);
    function CustomError(message) {
      var _newTarget = this.constructor;
      var _this = _super.call(this, message) || this;
      Object.defineProperty(_this, 'name', {
        value: _newTarget.name,
        enumerable: false,
        configurable: true
      });
      fixProto(_this, _newTarget.prototype);
      fixStack(_this);
      return _this;
    }
    return CustomError;
  }(Error);

  var __extends$12 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var Exception =  (function (_super) {
      __extends$12(Exception, _super);
      function Exception(message) {
          if (message === void 0) { message = undefined; }
          var _this = _super.call(this, message) || this;
          _this.message = message;
          return _this;
      }
      Exception.prototype.getKind = function () {
          var ex = this.constructor;
          return ex.kind;
      };
      Exception.kind = 'Exception';
      return Exception;
  }(CustomError));

  var __extends$11 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var ArgumentException =  (function (_super) {
      __extends$11(ArgumentException, _super);
      function ArgumentException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ArgumentException.kind = 'ArgumentException';
      return ArgumentException;
  }(Exception));

  var __extends$10 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var IllegalArgumentException =  (function (_super) {
      __extends$10(IllegalArgumentException, _super);
      function IllegalArgumentException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      IllegalArgumentException.kind = 'IllegalArgumentException';
      return IllegalArgumentException;
  }(Exception));

  var BinaryBitmap =  (function () {
      function BinaryBitmap(binarizer) {
          this.binarizer = binarizer;
          if (binarizer === null) {
              throw new IllegalArgumentException('Binarizer must be non-null.');
          }
      }
      BinaryBitmap.prototype.getWidth = function () {
          return this.binarizer.getWidth();
      };
      BinaryBitmap.prototype.getHeight = function () {
          return this.binarizer.getHeight();
      };
      BinaryBitmap.prototype.getBlackRow = function (y , row) {
          return this.binarizer.getBlackRow(y, row);
      };
      BinaryBitmap.prototype.getBlackMatrix = function () {
          if (this.matrix === null || this.matrix === undefined) {
              this.matrix = this.binarizer.getBlackMatrix();
          }
          return this.matrix;
      };
      BinaryBitmap.prototype.isCropSupported = function () {
          return this.binarizer.getLuminanceSource().isCropSupported();
      };
      BinaryBitmap.prototype.crop = function (left , top , width , height ) {
          var newSource = this.binarizer.getLuminanceSource().crop(left, top, width, height);
          return new BinaryBitmap(this.binarizer.createBinarizer(newSource));
      };
      BinaryBitmap.prototype.isRotateSupported = function () {
          return this.binarizer.getLuminanceSource().isRotateSupported();
      };
      BinaryBitmap.prototype.rotateCounterClockwise = function () {
          var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise();
          return new BinaryBitmap(this.binarizer.createBinarizer(newSource));
      };
      BinaryBitmap.prototype.rotateCounterClockwise45 = function () {
          var newSource = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
          return new BinaryBitmap(this.binarizer.createBinarizer(newSource));
      };
      BinaryBitmap.prototype.toString = function () {
          try {
              return this.getBlackMatrix().toString();
          }
          catch (e ) {
              return '';
          }
      };
      return BinaryBitmap;
  }());

  var __extends$$ = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var ChecksumException =  (function (_super) {
      __extends$$(ChecksumException, _super);
      function ChecksumException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ChecksumException.getChecksumInstance = function () {
          return new ChecksumException();
      };
      ChecksumException.kind = 'ChecksumException';
      return ChecksumException;
  }(Exception));

  var Binarizer =  (function () {
      function Binarizer(source) {
          this.source = source;
      }
      Binarizer.prototype.getLuminanceSource = function () {
          return this.source;
      };
      Binarizer.prototype.getWidth = function () {
          return this.source.getWidth();
      };
      Binarizer.prototype.getHeight = function () {
          return this.source.getHeight();
      };
      return Binarizer;
  }());

  var System =  (function () {
      function System() {
      }
      System.arraycopy = function (src, srcPos, dest, destPos, length) {
          while (length--) {
              dest[destPos++] = src[srcPos++];
          }
      };
      System.currentTimeMillis = function () {
          return Date.now();
      };
      return System;
  }());

  var __extends$_ = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var IndexOutOfBoundsException =  (function (_super) {
      __extends$_(IndexOutOfBoundsException, _super);
      function IndexOutOfBoundsException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      IndexOutOfBoundsException.kind = 'IndexOutOfBoundsException';
      return IndexOutOfBoundsException;
  }(Exception));

  var __extends$Z = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var ArrayIndexOutOfBoundsException =  (function (_super) {
      __extends$Z(ArrayIndexOutOfBoundsException, _super);
      function ArrayIndexOutOfBoundsException(index, message) {
          if (index === void 0) { index = undefined; }
          if (message === void 0) { message = undefined; }
          var _this = _super.call(this, message) || this;
          _this.index = index;
          _this.message = message;
          return _this;
      }
      ArrayIndexOutOfBoundsException.kind = 'ArrayIndexOutOfBoundsException';
      return ArrayIndexOutOfBoundsException;
  }(IndexOutOfBoundsException));

  var __values$D = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var Arrays =  (function () {
      function Arrays() {
      }
      Arrays.fill = function (a, val) {
          for (var i = 0, len = a.length; i < len; i++)
              a[i] = val;
      };
      Arrays.fillWithin = function (a, fromIndex, toIndex, val) {
          Arrays.rangeCheck(a.length, fromIndex, toIndex);
          for (var i = fromIndex; i < toIndex; i++)
              a[i] = val;
      };
      Arrays.rangeCheck = function (arrayLength, fromIndex, toIndex) {
          if (fromIndex > toIndex) {
              throw new IllegalArgumentException('fromIndex(' + fromIndex + ') > toIndex(' + toIndex + ')');
          }
          if (fromIndex < 0) {
              throw new ArrayIndexOutOfBoundsException(fromIndex);
          }
          if (toIndex > arrayLength) {
              throw new ArrayIndexOutOfBoundsException(toIndex);
          }
      };
      Arrays.asList = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          return args;
      };
      Arrays.create = function (rows, cols, value) {
          var arr = Array.from({ length: rows });
          return arr.map(function (x) { return Array.from({ length: cols }).fill(value); });
      };
      Arrays.createInt32Array = function (rows, cols, value) {
          var arr = Array.from({ length: rows });
          return arr.map(function (x) { return Int32Array.from({ length: cols }).fill(value); });
      };
      Arrays.equals = function (first, second) {
          if (!first) {
              return false;
          }
          if (!second) {
              return false;
          }
          if (!first.length) {
              return false;
          }
          if (!second.length) {
              return false;
          }
          if (first.length !== second.length) {
              return false;
          }
          for (var i = 0, length_1 = first.length; i < length_1; i++) {
              if (first[i] !== second[i]) {
                  return false;
              }
          }
          return true;
      };
      Arrays.hashCode = function (a) {
          var e_1, _a;
          if (a === null) {
              return 0;
          }
          var result = 1;
          try {
              for (var a_1 = __values$D(a), a_1_1 = a_1.next(); !a_1_1.done; a_1_1 = a_1.next()) {
                  var element = a_1_1.value;
                  result = 31 * result + element;
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (a_1_1 && !a_1_1.done && (_a = a_1.return)) _a.call(a_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          return result;
      };
      Arrays.fillUint8Array = function (a, value) {
          for (var i = 0; i !== a.length; i++) {
              a[i] = value;
          }
      };
      Arrays.copyOf = function (original, newLength) {
          return original.slice(0, newLength);
      };
      Arrays.copyOfUint8Array = function (original, newLength) {
          if (original.length <= newLength) {
              var newArray = new Uint8Array(newLength);
              newArray.set(original);
              return newArray;
          }
          return original.slice(0, newLength);
      };
      Arrays.copyOfRange = function (original, from, to) {
          var newLength = to - from;
          var copy = new Int32Array(newLength);
          System.arraycopy(original, from, copy, 0, newLength);
          return copy;
      };
      Arrays.binarySearch = function (ar, el, comparator) {
          if (undefined === comparator) {
              comparator = Arrays.numberComparator;
          }
          var m = 0;
          var n = ar.length - 1;
          while (m <= n) {
              var k = (n + m) >> 1;
              var cmp = comparator(el, ar[k]);
              if (cmp > 0) {
                  m = k + 1;
              }
              else if (cmp < 0) {
                  n = k - 1;
              }
              else {
                  return k;
              }
          }
          return -m - 1;
      };
      Arrays.numberComparator = function (a, b) {
          return a - b;
      };
      return Arrays;
  }());

  var Integer =  (function () {
      function Integer() {
      }
      Integer.numberOfTrailingZeros = function (i) {
          var y;
          if (i === 0)
              return 32;
          var n = 31;
          y = i << 16;
          if (y !== 0) {
              n -= 16;
              i = y;
          }
          y = i << 8;
          if (y !== 0) {
              n -= 8;
              i = y;
          }
          y = i << 4;
          if (y !== 0) {
              n -= 4;
              i = y;
          }
          y = i << 2;
          if (y !== 0) {
              n -= 2;
              i = y;
          }
          return n - ((i << 1) >>> 31);
      };
      Integer.numberOfLeadingZeros = function (i) {
          if (i === 0) {
              return 32;
          }
          var n = 1;
          if (i >>> 16 === 0) {
              n += 16;
              i <<= 16;
          }
          if (i >>> 24 === 0) {
              n += 8;
              i <<= 8;
          }
          if (i >>> 28 === 0) {
              n += 4;
              i <<= 4;
          }
          if (i >>> 30 === 0) {
              n += 2;
              i <<= 2;
          }
          n -= i >>> 31;
          return n;
      };
      Integer.toHexString = function (i) {
          return i.toString(16);
      };
      Integer.toBinaryString = function (intNumber) {
          return String(parseInt(String(intNumber), 2));
      };
      Integer.bitCount = function (i) {
          i = i - ((i >>> 1) & 0x55555555);
          i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
          i = (i + (i >>> 4)) & 0x0f0f0f0f;
          i = i + (i >>> 8);
          i = i + (i >>> 16);
          return i & 0x3f;
      };
      Integer.truncDivision = function (dividend, divisor) {
          return Math.trunc(dividend / divisor);
      };
      Integer.parseInt = function (num, radix) {
          if (radix === void 0) { radix = undefined; }
          return parseInt(num, radix);
      };
      Integer.MIN_VALUE_32_BITS = -2147483648;
      Integer.MAX_VALUE = Number.MAX_SAFE_INTEGER;
      return Integer;
  }());

  var BitArray  =  (function () {
      function BitArray(size , bits) {
          if (undefined === size) {
              this.size = 0;
              this.bits = new Int32Array(1);
          }
          else {
              this.size = size;
              if (undefined === bits || null === bits) {
                  this.bits = BitArray.makeArray(size);
              }
              else {
                  this.bits = bits;
              }
          }
      }
      BitArray.prototype.getSize = function () {
          return this.size;
      };
      BitArray.prototype.getSizeInBytes = function () {
          return Math.floor((this.size + 7) / 8);
      };
      BitArray.prototype.ensureCapacity = function (size ) {
          if (size > this.bits.length * 32) {
              var newBits = BitArray.makeArray(size);
              System.arraycopy(this.bits, 0, newBits, 0, this.bits.length);
              this.bits = newBits;
          }
      };
      BitArray.prototype.get = function (i ) {
          return (this.bits[Math.floor(i / 32)] & (1 << (i & 0x1F))) !== 0;
      };
      BitArray.prototype.set = function (i ) {
          this.bits[Math.floor(i / 32)] |= 1 << (i & 0x1F);
      };
      BitArray.prototype.flip = function (i ) {
          this.bits[Math.floor(i / 32)] ^= 1 << (i & 0x1F);
      };
      BitArray.prototype.getNextSet = function (from ) {
          var size = this.size;
          if (from >= size) {
              return size;
          }
          var bits = this.bits;
          var bitsOffset = Math.floor(from / 32);
          var currentBits = bits[bitsOffset];
          currentBits &= ~((1 << (from & 0x1F)) - 1);
          var length = bits.length;
          while (currentBits === 0) {
              if (++bitsOffset === length) {
                  return size;
              }
              currentBits = bits[bitsOffset];
          }
          var result = (bitsOffset * 32) + Integer.numberOfTrailingZeros(currentBits);
          return result > size ? size : result;
      };
      BitArray.prototype.getNextUnset = function (from ) {
          var size = this.size;
          if (from >= size) {
              return size;
          }
          var bits = this.bits;
          var bitsOffset = Math.floor(from / 32);
          var currentBits = ~bits[bitsOffset];
          currentBits &= ~((1 << (from & 0x1F)) - 1);
          var length = bits.length;
          while (currentBits === 0) {
              if (++bitsOffset === length) {
                  return size;
              }
              currentBits = ~bits[bitsOffset];
          }
          var result = (bitsOffset * 32) + Integer.numberOfTrailingZeros(currentBits);
          return result > size ? size : result;
      };
      BitArray.prototype.setBulk = function (i , newBits ) {
          this.bits[Math.floor(i / 32)] = newBits;
      };
      BitArray.prototype.setRange = function (start , end ) {
          if (end < start || start < 0 || end > this.size) {
              throw new IllegalArgumentException();
          }
          if (end === start) {
              return;
          }
          end--;
          var firstInt = Math.floor(start / 32);
          var lastInt = Math.floor(end / 32);
          var bits = this.bits;
          for (var i = firstInt; i <= lastInt; i++) {
              var firstBit = i > firstInt ? 0 : start & 0x1F;
              var lastBit = i < lastInt ? 31 : end & 0x1F;
              var mask = (2 << lastBit) - (1 << firstBit);
              bits[i] |= mask;
          }
      };
      BitArray.prototype.clear = function () {
          var max = this.bits.length;
          var bits = this.bits;
          for (var i = 0; i < max; i++) {
              bits[i] = 0;
          }
      };
      BitArray.prototype.isRange = function (start , end , value) {
          if (end < start || start < 0 || end > this.size) {
              throw new IllegalArgumentException();
          }
          if (end === start) {
              return true;
          }
          end--;
          var firstInt = Math.floor(start / 32);
          var lastInt = Math.floor(end / 32);
          var bits = this.bits;
          for (var i = firstInt; i <= lastInt; i++) {
              var firstBit = i > firstInt ? 0 : start & 0x1F;
              var lastBit = i < lastInt ? 31 : end & 0x1F;
              var mask = (2 << lastBit) - (1 << firstBit) & 0xFFFFFFFF;
              if ((bits[i] & mask) !== (value ? mask : 0)) {
                  return false;
              }
          }
          return true;
      };
      BitArray.prototype.appendBit = function (bit) {
          this.ensureCapacity(this.size + 1);
          if (bit) {
              this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 0x1F);
          }
          this.size++;
      };
      BitArray.prototype.appendBits = function (value , numBits ) {
          if (numBits < 0 || numBits > 32) {
              throw new IllegalArgumentException('Num bits must be between 0 and 32');
          }
          this.ensureCapacity(this.size + numBits);
          for (var numBitsLeft = numBits; numBitsLeft > 0; numBitsLeft--) {
              this.appendBit(((value >> (numBitsLeft - 1)) & 0x01) === 1);
          }
      };
      BitArray.prototype.appendBitArray = function (other) {
          var otherSize = other.size;
          this.ensureCapacity(this.size + otherSize);
          for (var i = 0; i < otherSize; i++) {
              this.appendBit(other.get(i));
          }
      };
      BitArray.prototype.xor = function (other) {
          if (this.size !== other.size) {
              throw new IllegalArgumentException('Sizes don\'t match');
          }
          var bits = this.bits;
          for (var i = 0, length_1 = bits.length; i < length_1; i++) {
              bits[i] ^= other.bits[i];
          }
      };
      BitArray.prototype.toBytes = function (bitOffset , array, offset , numBytes ) {
          for (var i = 0; i < numBytes; i++) {
              var theByte = 0;
              for (var j = 0; j < 8; j++) {
                  if (this.get(bitOffset)) {
                      theByte |= 1 << (7 - j);
                  }
                  bitOffset++;
              }
              array[offset + i] =  theByte;
          }
      };
      BitArray.prototype.getBitArray = function () {
          return this.bits;
      };
      BitArray.prototype.reverse = function () {
          var newBits = new Int32Array(this.bits.length);
          var len = Math.floor((this.size - 1) / 32);
          var oldBitsLen = len + 1;
          var bits = this.bits;
          for (var i = 0; i < oldBitsLen; i++) {
              var x = bits[i];
              x = ((x >> 1) & 0x55555555) | ((x & 0x55555555) << 1);
              x = ((x >> 2) & 0x33333333) | ((x & 0x33333333) << 2);
              x = ((x >> 4) & 0x0f0f0f0f) | ((x & 0x0f0f0f0f) << 4);
              x = ((x >> 8) & 0x00ff00ff) | ((x & 0x00ff00ff) << 8);
              x = ((x >> 16) & 0x0000ffff) | ((x & 0x0000ffff) << 16);
              newBits[len - i] =  x;
          }
          if (this.size !== oldBitsLen * 32) {
              var leftOffset = oldBitsLen * 32 - this.size;
              var currentInt = newBits[0] >>> leftOffset;
              for (var i = 1; i < oldBitsLen; i++) {
                  var nextInt = newBits[i];
                  currentInt |= nextInt << (32 - leftOffset);
                  newBits[i - 1] = currentInt;
                  currentInt = nextInt >>> leftOffset;
              }
              newBits[oldBitsLen - 1] = currentInt;
          }
          this.bits = newBits;
      };
      BitArray.makeArray = function (size ) {
          return new Int32Array(Math.floor((size + 31) / 32));
      };
      BitArray.prototype.equals = function (o) {
          if (!(o instanceof BitArray)) {
              return false;
          }
          var other = o;
          return this.size === other.size && Arrays.equals(this.bits, other.bits);
      };
      BitArray.prototype.hashCode = function () {
          return 31 * this.size + Arrays.hashCode(this.bits);
      };
      BitArray.prototype.toString = function () {
          var result = '';
          for (var i = 0, size = this.size; i < size; i++) {
              if ((i & 0x07) === 0) {
                  result += ' ';
              }
              result += this.get(i) ? 'X' : '.';
          }
          return result;
      };
      BitArray.prototype.clone = function () {
          return new BitArray(this.size, this.bits.slice());
      };
      return BitArray;
  }());

  var DecodeHintType;
  (function (DecodeHintType) {
      DecodeHintType[DecodeHintType["OTHER"] = 0] = "OTHER";
      DecodeHintType[DecodeHintType["PURE_BARCODE"] = 1] = "PURE_BARCODE";
      DecodeHintType[DecodeHintType["POSSIBLE_FORMATS"] = 2] = "POSSIBLE_FORMATS";
      DecodeHintType[DecodeHintType["TRY_HARDER"] = 3] = "TRY_HARDER";
      DecodeHintType[DecodeHintType["CHARACTER_SET"] = 4] = "CHARACTER_SET";
      DecodeHintType[DecodeHintType["ALLOWED_LENGTHS"] = 5] = "ALLOWED_LENGTHS";
      DecodeHintType[DecodeHintType["ASSUME_CODE_39_CHECK_DIGIT"] = 6] = "ASSUME_CODE_39_CHECK_DIGIT";
      DecodeHintType[DecodeHintType["ASSUME_GS1"] = 7] = "ASSUME_GS1";
      DecodeHintType[DecodeHintType["RETURN_CODABAR_START_END"] = 8] = "RETURN_CODABAR_START_END";
      DecodeHintType[DecodeHintType["NEED_RESULT_POINT_CALLBACK"] = 9] = "NEED_RESULT_POINT_CALLBACK";
      DecodeHintType[DecodeHintType["ALLOWED_EAN_EXTENSIONS"] = 10] = "ALLOWED_EAN_EXTENSIONS";
  })(DecodeHintType || (DecodeHintType = {}));
  var DecodeHintType$1 = DecodeHintType;

  var __extends$Y = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var FormatException =  (function (_super) {
      __extends$Y(FormatException, _super);
      function FormatException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      FormatException.getFormatInstance = function () {
          return new FormatException();
      };
      FormatException.kind = 'FormatException';
      return FormatException;
  }(Exception));

  var __values$C = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var CharacterSetValueIdentifiers;
  (function (CharacterSetValueIdentifiers) {
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp437"] = 0] = "Cp437";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_1"] = 1] = "ISO8859_1";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_2"] = 2] = "ISO8859_2";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_3"] = 3] = "ISO8859_3";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_4"] = 4] = "ISO8859_4";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_5"] = 5] = "ISO8859_5";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_6"] = 6] = "ISO8859_6";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_7"] = 7] = "ISO8859_7";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_8"] = 8] = "ISO8859_8";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_9"] = 9] = "ISO8859_9";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_10"] = 10] = "ISO8859_10";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_11"] = 11] = "ISO8859_11";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_13"] = 12] = "ISO8859_13";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_14"] = 13] = "ISO8859_14";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_15"] = 14] = "ISO8859_15";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_16"] = 15] = "ISO8859_16";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["SJIS"] = 16] = "SJIS";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1250"] = 17] = "Cp1250";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1251"] = 18] = "Cp1251";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1252"] = 19] = "Cp1252";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1256"] = 20] = "Cp1256";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["UnicodeBigUnmarked"] = 21] = "UnicodeBigUnmarked";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["UTF8"] = 22] = "UTF8";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ASCII"] = 23] = "ASCII";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Big5"] = 24] = "Big5";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["GB18030"] = 25] = "GB18030";
      CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["EUC_KR"] = 26] = "EUC_KR";
  })(CharacterSetValueIdentifiers || (CharacterSetValueIdentifiers = {}));
  var CharacterSetECI =  (function () {
      function CharacterSetECI(valueIdentifier, valuesParam, name) {
          var e_1, _a;
          var otherEncodingNames = [];
          for (var _i = 3; _i < arguments.length; _i++) {
              otherEncodingNames[_i - 3] = arguments[_i];
          }
          this.valueIdentifier = valueIdentifier;
          this.name = name;
          if (typeof valuesParam === 'number') {
              this.values = Int32Array.from([valuesParam]);
          }
          else {
              this.values = valuesParam;
          }
          this.otherEncodingNames = otherEncodingNames;
          CharacterSetECI.VALUE_IDENTIFIER_TO_ECI.set(valueIdentifier, this);
          CharacterSetECI.NAME_TO_ECI.set(name, this);
          var values = this.values;
          for (var i = 0, length_1 = values.length; i !== length_1; i++) {
              var v = values[i];
              CharacterSetECI.VALUES_TO_ECI.set(v, this);
          }
          try {
              for (var otherEncodingNames_1 = __values$C(otherEncodingNames), otherEncodingNames_1_1 = otherEncodingNames_1.next(); !otherEncodingNames_1_1.done; otherEncodingNames_1_1 = otherEncodingNames_1.next()) {
                  var otherName = otherEncodingNames_1_1.value;
                  CharacterSetECI.NAME_TO_ECI.set(otherName, this);
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (otherEncodingNames_1_1 && !otherEncodingNames_1_1.done && (_a = otherEncodingNames_1.return)) _a.call(otherEncodingNames_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
      }
      CharacterSetECI.prototype.getValueIdentifier = function () {
          return this.valueIdentifier;
      };
      CharacterSetECI.prototype.getName = function () {
          return this.name;
      };
      CharacterSetECI.prototype.getValue = function () {
          return this.values[0];
      };
      CharacterSetECI.getCharacterSetECIByValue = function (value ) {
          if (value < 0 || value >= 900) {
              throw new FormatException('incorect value');
          }
          var characterSet = CharacterSetECI.VALUES_TO_ECI.get(value);
          if (undefined === characterSet) {
              throw new FormatException('incorect value');
          }
          return characterSet;
      };
      CharacterSetECI.getCharacterSetECIByName = function (name) {
          var characterSet = CharacterSetECI.NAME_TO_ECI.get(name);
          if (undefined === characterSet) {
              throw new FormatException('incorect value');
          }
          return characterSet;
      };
      CharacterSetECI.prototype.equals = function (o) {
          if (!(o instanceof CharacterSetECI)) {
              return false;
          }
          var other = o;
          return this.getName() === other.getName();
      };
      CharacterSetECI.VALUE_IDENTIFIER_TO_ECI = new Map();
      CharacterSetECI.VALUES_TO_ECI = new Map();
      CharacterSetECI.NAME_TO_ECI = new Map();
      CharacterSetECI.Cp437 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp437, Int32Array.from([0, 2]), 'Cp437');
      CharacterSetECI.ISO8859_1 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_1, Int32Array.from([1, 3]), 'ISO-8859-1', 'ISO88591', 'ISO8859_1');
      CharacterSetECI.ISO8859_2 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_2, 4, 'ISO-8859-2', 'ISO88592', 'ISO8859_2');
      CharacterSetECI.ISO8859_3 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_3, 5, 'ISO-8859-3', 'ISO88593', 'ISO8859_3');
      CharacterSetECI.ISO8859_4 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_4, 6, 'ISO-8859-4', 'ISO88594', 'ISO8859_4');
      CharacterSetECI.ISO8859_5 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_5, 7, 'ISO-8859-5', 'ISO88595', 'ISO8859_5');
      CharacterSetECI.ISO8859_6 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_6, 8, 'ISO-8859-6', 'ISO88596', 'ISO8859_6');
      CharacterSetECI.ISO8859_7 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_7, 9, 'ISO-8859-7', 'ISO88597', 'ISO8859_7');
      CharacterSetECI.ISO8859_8 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_8, 10, 'ISO-8859-8', 'ISO88598', 'ISO8859_8');
      CharacterSetECI.ISO8859_9 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_9, 11, 'ISO-8859-9', 'ISO88599', 'ISO8859_9');
      CharacterSetECI.ISO8859_10 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_10, 12, 'ISO-8859-10', 'ISO885910', 'ISO8859_10');
      CharacterSetECI.ISO8859_11 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_11, 13, 'ISO-8859-11', 'ISO885911', 'ISO8859_11');
      CharacterSetECI.ISO8859_13 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_13, 15, 'ISO-8859-13', 'ISO885913', 'ISO8859_13');
      CharacterSetECI.ISO8859_14 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_14, 16, 'ISO-8859-14', 'ISO885914', 'ISO8859_14');
      CharacterSetECI.ISO8859_15 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_15, 17, 'ISO-8859-15', 'ISO885915', 'ISO8859_15');
      CharacterSetECI.ISO8859_16 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_16, 18, 'ISO-8859-16', 'ISO885916', 'ISO8859_16');
      CharacterSetECI.SJIS = new CharacterSetECI(CharacterSetValueIdentifiers.SJIS, 20, 'SJIS', 'Shift_JIS');
      CharacterSetECI.Cp1250 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1250, 21, 'Cp1250', 'windows-1250');
      CharacterSetECI.Cp1251 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1251, 22, 'Cp1251', 'windows-1251');
      CharacterSetECI.Cp1252 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1252, 23, 'Cp1252', 'windows-1252');
      CharacterSetECI.Cp1256 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1256, 24, 'Cp1256', 'windows-1256');
      CharacterSetECI.UnicodeBigUnmarked = new CharacterSetECI(CharacterSetValueIdentifiers.UnicodeBigUnmarked, 25, 'UnicodeBigUnmarked', 'UTF-16BE', 'UnicodeBig');
      CharacterSetECI.UTF8 = new CharacterSetECI(CharacterSetValueIdentifiers.UTF8, 26, 'UTF8', 'UTF-8');
      CharacterSetECI.ASCII = new CharacterSetECI(CharacterSetValueIdentifiers.ASCII, Int32Array.from([27, 170]), 'ASCII', 'US-ASCII');
      CharacterSetECI.Big5 = new CharacterSetECI(CharacterSetValueIdentifiers.Big5, 28, 'Big5');
      CharacterSetECI.GB18030 = new CharacterSetECI(CharacterSetValueIdentifiers.GB18030, 29, 'GB18030', 'GB2312', 'EUC_CN', 'GBK');
      CharacterSetECI.EUC_KR = new CharacterSetECI(CharacterSetValueIdentifiers.EUC_KR, 30, 'EUC_KR', 'EUC-KR');
      return CharacterSetECI;
  }());

  var __extends$X = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var UnsupportedOperationException =  (function (_super) {
      __extends$X(UnsupportedOperationException, _super);
      function UnsupportedOperationException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      UnsupportedOperationException.kind = 'UnsupportedOperationException';
      return UnsupportedOperationException;
  }(Exception));

  var StringEncoding =  (function () {
      function StringEncoding() {
      }
      StringEncoding.decode = function (bytes, encoding) {
          var encodingName = this.encodingName(encoding);
          if (this.customDecoder) {
              return this.customDecoder(bytes, encodingName);
          }
          if (typeof TextDecoder === 'undefined' || this.shouldDecodeOnFallback(encodingName)) {
              return this.decodeFallback(bytes, encodingName);
          }
          return new TextDecoder(encodingName).decode(bytes);
      };
      StringEncoding.shouldDecodeOnFallback = function (encodingName) {
          return !StringEncoding.isBrowser() && encodingName === 'ISO-8859-1';
      };
      StringEncoding.encode = function (s, encoding) {
          var encodingName = this.encodingName(encoding);
          if (this.customEncoder) {
              return this.customEncoder(s, encodingName);
          }
          if (typeof TextEncoder === 'undefined') {
              return this.encodeFallback(s);
          }
          return new TextEncoder().encode(s);
      };
      StringEncoding.isBrowser = function () {
          return (typeof window !== 'undefined' && {}.toString.call(window) === '[object Window]');
      };
      StringEncoding.encodingName = function (encoding) {
          return typeof encoding === 'string'
              ? encoding
              : encoding.getName();
      };
      StringEncoding.encodingCharacterSet = function (encoding) {
          if (encoding instanceof CharacterSetECI) {
              return encoding;
          }
          return CharacterSetECI.getCharacterSetECIByName(encoding);
      };
      StringEncoding.decodeFallback = function (bytes, encoding) {
          var characterSet = this.encodingCharacterSet(encoding);
          if (StringEncoding.isDecodeFallbackSupported(characterSet)) {
              var s = '';
              for (var i = 0, length_1 = bytes.length; i < length_1; i++) {
                  var h = bytes[i].toString(16);
                  if (h.length < 2) {
                      h = '0' + h;
                  }
                  s += '%' + h;
              }
              return decodeURIComponent(s);
          }
          if (characterSet.equals(CharacterSetECI.UnicodeBigUnmarked)) {
              return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
          }
          throw new UnsupportedOperationException("Encoding " + this.encodingName(encoding) + " not supported by fallback.");
      };
      StringEncoding.isDecodeFallbackSupported = function (characterSet) {
          return characterSet.equals(CharacterSetECI.UTF8) ||
              characterSet.equals(CharacterSetECI.ISO8859_1) ||
              characterSet.equals(CharacterSetECI.ASCII);
      };
      StringEncoding.encodeFallback = function (s) {
          var encodedURIstring = btoa(unescape(encodeURIComponent(s)));
          var charList = encodedURIstring.split('');
          var uintArray = [];
          for (var i = 0; i < charList.length; i++) {
              uintArray.push(charList[i].charCodeAt(0));
          }
          return new Uint8Array(uintArray);
      };
      return StringEncoding;
  }());

  var StringUtils =  (function () {
      function StringUtils() {
      }
      StringUtils.castAsNonUtf8Char = function (code, encoding) {
          if (encoding === void 0) { encoding = null; }
          var e = encoding ? encoding.getName() : this.ISO88591;
          return StringEncoding.decode(new Uint8Array([code]), e);
      };
      StringUtils.guessEncoding = function (bytes, hints) {
          if (hints !== null && hints !== undefined && undefined !== hints.get(DecodeHintType$1.CHARACTER_SET)) {
              return hints.get(DecodeHintType$1.CHARACTER_SET).toString();
          }
          var length = bytes.length;
          var canBeISO88591 = true;
          var canBeShiftJIS = true;
          var canBeUTF8 = true;
          var utf8BytesLeft = 0;
          var utf2BytesChars = 0;
          var utf3BytesChars = 0;
          var utf4BytesChars = 0;
          var sjisBytesLeft = 0;
          var sjisKatakanaChars = 0;
          var sjisCurKatakanaWordLength = 0;
          var sjisCurDoubleBytesWordLength = 0;
          var sjisMaxKatakanaWordLength = 0;
          var sjisMaxDoubleBytesWordLength = 0;
          var isoHighOther = 0;
          var utf8bom = bytes.length > 3 &&
              bytes[0] ===  0xEF &&
              bytes[1] ===  0xBB &&
              bytes[2] ===  0xBF;
          for (var i = 0; i < length && (canBeISO88591 || canBeShiftJIS || canBeUTF8); i++) {
              var value = bytes[i] & 0xFF;
              if (canBeUTF8) {
                  if (utf8BytesLeft > 0) {
                      if ((value & 0x80) === 0) {
                          canBeUTF8 = false;
                      }
                      else {
                          utf8BytesLeft--;
                      }
                  }
                  else if ((value & 0x80) !== 0) {
                      if ((value & 0x40) === 0) {
                          canBeUTF8 = false;
                      }
                      else {
                          utf8BytesLeft++;
                          if ((value & 0x20) === 0) {
                              utf2BytesChars++;
                          }
                          else {
                              utf8BytesLeft++;
                              if ((value & 0x10) === 0) {
                                  utf3BytesChars++;
                              }
                              else {
                                  utf8BytesLeft++;
                                  if ((value & 0x08) === 0) {
                                      utf4BytesChars++;
                                  }
                                  else {
                                      canBeUTF8 = false;
                                  }
                              }
                          }
                      }
                  }
              }
              if (canBeISO88591) {
                  if (value > 0x7F && value < 0xA0) {
                      canBeISO88591 = false;
                  }
                  else if (value > 0x9F) {
                      if (value < 0xC0 || value === 0xD7 || value === 0xF7) {
                          isoHighOther++;
                      }
                  }
              }
              if (canBeShiftJIS) {
                  if (sjisBytesLeft > 0) {
                      if (value < 0x40 || value === 0x7F || value > 0xFC) {
                          canBeShiftJIS = false;
                      }
                      else {
                          sjisBytesLeft--;
                      }
                  }
                  else if (value === 0x80 || value === 0xA0 || value > 0xEF) {
                      canBeShiftJIS = false;
                  }
                  else if (value > 0xA0 && value < 0xE0) {
                      sjisKatakanaChars++;
                      sjisCurDoubleBytesWordLength = 0;
                      sjisCurKatakanaWordLength++;
                      if (sjisCurKatakanaWordLength > sjisMaxKatakanaWordLength) {
                          sjisMaxKatakanaWordLength = sjisCurKatakanaWordLength;
                      }
                  }
                  else if (value > 0x7F) {
                      sjisBytesLeft++;
                      sjisCurKatakanaWordLength = 0;
                      sjisCurDoubleBytesWordLength++;
                      if (sjisCurDoubleBytesWordLength > sjisMaxDoubleBytesWordLength) {
                          sjisMaxDoubleBytesWordLength = sjisCurDoubleBytesWordLength;
                      }
                  }
                  else {
                      sjisCurKatakanaWordLength = 0;
                      sjisCurDoubleBytesWordLength = 0;
                  }
              }
          }
          if (canBeUTF8 && utf8BytesLeft > 0) {
              canBeUTF8 = false;
          }
          if (canBeShiftJIS && sjisBytesLeft > 0) {
              canBeShiftJIS = false;
          }
          if (canBeUTF8 && (utf8bom || utf2BytesChars + utf3BytesChars + utf4BytesChars > 0)) {
              return StringUtils.UTF8;
          }
          if (canBeShiftJIS && (StringUtils.ASSUME_SHIFT_JIS || sjisMaxKatakanaWordLength >= 3 || sjisMaxDoubleBytesWordLength >= 3)) {
              return StringUtils.SHIFT_JIS;
          }
          if (canBeISO88591 && canBeShiftJIS) {
              return (sjisMaxKatakanaWordLength === 2 && sjisKatakanaChars === 2) || isoHighOther * 10 >= length
                  ? StringUtils.SHIFT_JIS : StringUtils.ISO88591;
          }
          if (canBeISO88591) {
              return StringUtils.ISO88591;
          }
          if (canBeShiftJIS) {
              return StringUtils.SHIFT_JIS;
          }
          if (canBeUTF8) {
              return StringUtils.UTF8;
          }
          return StringUtils.PLATFORM_DEFAULT_ENCODING;
      };
      StringUtils.format = function (append) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          var i = -1;
          function callback(exp, p0, p1, p2, p3, p4) {
              if (exp === '%%')
                  return '%';
              if (args[++i] === undefined)
                  return undefined;
              exp = p2 ? parseInt(p2.substr(1)) : undefined;
              var base = p3 ? parseInt(p3.substr(1)) : undefined;
              var val;
              switch (p4) {
                  case 's':
                      val = args[i];
                      break;
                  case 'c':
                      val = args[i][0];
                      break;
                  case 'f':
                      val = parseFloat(args[i]).toFixed(exp);
                      break;
                  case 'p':
                      val = parseFloat(args[i]).toPrecision(exp);
                      break;
                  case 'e':
                      val = parseFloat(args[i]).toExponential(exp);
                      break;
                  case 'x':
                      val = parseInt(args[i]).toString(base ? base : 16);
                      break;
                  case 'd':
                      val = parseFloat(parseInt(args[i], base ? base : 10).toPrecision(exp)).toFixed(0);
                      break;
              }
              val = typeof val === 'object' ? JSON.stringify(val) : (+val).toString(base);
              var size = parseInt(p1);
              var ch = p1 && (p1[0] + '') === '0' ? '0' : ' ';
              while (val.length < size)
                  val = p0 !== undefined ? val + ch : ch + val;
              return val;
          }
          var regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
          return append.replace(regex, callback);
      };
      StringUtils.getBytes = function (str, encoding) {
          return StringEncoding.encode(str, encoding);
      };
      StringUtils.getCharCode = function (str, index) {
          if (index === void 0) { index = 0; }
          return str.charCodeAt(index);
      };
      StringUtils.getCharAt = function (charCode) {
          return String.fromCharCode(charCode);
      };
      StringUtils.SHIFT_JIS = CharacterSetECI.SJIS.getName();
      StringUtils.GB2312 = 'GB2312';
      StringUtils.ISO88591 = CharacterSetECI.ISO8859_1.getName();
      StringUtils.EUC_JP = 'EUC_JP';
      StringUtils.UTF8 = CharacterSetECI.UTF8.getName();
      StringUtils.PLATFORM_DEFAULT_ENCODING = StringUtils.UTF8;
      StringUtils.ASSUME_SHIFT_JIS = false;
      return StringUtils;
  }());

  var StringBuilder =  (function () {
      function StringBuilder(value) {
          if (value === void 0) { value = ''; }
          this.value = value;
      }
      StringBuilder.prototype.enableDecoding = function (encoding) {
          this.encoding = encoding;
          return this;
      };
      StringBuilder.prototype.append = function (s) {
          if (typeof s === 'string') {
              this.value += s.toString();
          }
          else if (this.encoding) {
              this.value += StringUtils.castAsNonUtf8Char(s, this.encoding);
          }
          else {
              this.value += String.fromCharCode(s);
          }
          return this;
      };
      StringBuilder.prototype.appendChars = function (str, offset, len) {
          for (var i = offset; offset < offset + len; i++) {
              this.append(str[i]);
          }
          return this;
      };
      StringBuilder.prototype.length = function () {
          return this.value.length;
      };
      StringBuilder.prototype.charAt = function (n) {
          return this.value.charAt(n);
      };
      StringBuilder.prototype.deleteCharAt = function (n) {
          this.value = this.value.substr(0, n) + this.value.substring(n + 1);
      };
      StringBuilder.prototype.setCharAt = function (n, c) {
          this.value = this.value.substr(0, n) + c + this.value.substr(n + 1);
      };
      StringBuilder.prototype.substring = function (start, end) {
          return this.value.substring(start, end);
      };
      StringBuilder.prototype.setLengthToZero = function () {
          this.value = '';
      };
      StringBuilder.prototype.toString = function () {
          return this.value;
      };
      StringBuilder.prototype.insert = function (n, c) {
          this.value = this.value.substr(0, n) + c + this.value.substr(n + c.length);
      };
      return StringBuilder;
  }());

  var BitMatrix  =  (function () {
      function BitMatrix(width , height , rowSize , bits) {
          this.width = width;
          this.height = height;
          this.rowSize = rowSize;
          this.bits = bits;
          if (undefined === height || null === height) {
              height = width;
          }
          this.height = height;
          if (width < 1 || height < 1) {
              throw new IllegalArgumentException('Both dimensions must be greater than 0');
          }
          if (undefined === rowSize || null === rowSize) {
              rowSize = Math.floor((width + 31) / 32);
          }
          this.rowSize = rowSize;
          if (undefined === bits || null === bits) {
              this.bits = new Int32Array(this.rowSize * this.height);
          }
      }
      BitMatrix.parseFromBooleanArray = function (image) {
          var height = image.length;
          var width = image[0].length;
          var bits = new BitMatrix(width, height);
          for (var i = 0; i < height; i++) {
              var imageI = image[i];
              for (var j = 0; j < width; j++) {
                  if (imageI[j]) {
                      bits.set(j, i);
                  }
              }
          }
          return bits;
      };
      BitMatrix.parseFromString = function (stringRepresentation, setString, unsetString) {
          if (stringRepresentation === null) {
              throw new IllegalArgumentException('stringRepresentation cannot be null');
          }
          var bits = new Array(stringRepresentation.length);
          var bitsPos = 0;
          var rowStartPos = 0;
          var rowLength = -1;
          var nRows = 0;
          var pos = 0;
          while (pos < stringRepresentation.length) {
              if (stringRepresentation.charAt(pos) === '\n' ||
                  stringRepresentation.charAt(pos) === '\r') {
                  if (bitsPos > rowStartPos) {
                      if (rowLength === -1) {
                          rowLength = bitsPos - rowStartPos;
                      }
                      else if (bitsPos - rowStartPos !== rowLength) {
                          throw new IllegalArgumentException('row lengths do not match');
                      }
                      rowStartPos = bitsPos;
                      nRows++;
                  }
                  pos++;
              }
              else if (stringRepresentation.substring(pos, pos + setString.length) === setString) {
                  pos += setString.length;
                  bits[bitsPos] = true;
                  bitsPos++;
              }
              else if (stringRepresentation.substring(pos, pos + unsetString.length) === unsetString) {
                  pos += unsetString.length;
                  bits[bitsPos] = false;
                  bitsPos++;
              }
              else {
                  throw new IllegalArgumentException('illegal character encountered: ' + stringRepresentation.substring(pos));
              }
          }
          if (bitsPos > rowStartPos) {
              if (rowLength === -1) {
                  rowLength = bitsPos - rowStartPos;
              }
              else if (bitsPos - rowStartPos !== rowLength) {
                  throw new IllegalArgumentException('row lengths do not match');
              }
              nRows++;
          }
          var matrix = new BitMatrix(rowLength, nRows);
          for (var i = 0; i < bitsPos; i++) {
              if (bits[i]) {
                  matrix.set(Math.floor(i % rowLength), Math.floor(i / rowLength));
              }
          }
          return matrix;
      };
      BitMatrix.prototype.get = function (x , y ) {
          var offset = y * this.rowSize + Math.floor(x / 32);
          return ((this.bits[offset] >>> (x & 0x1f)) & 1) !== 0;
      };
      BitMatrix.prototype.set = function (x , y ) {
          var offset = y * this.rowSize + Math.floor(x / 32);
          this.bits[offset] |= (1 << (x & 0x1f)) & 0xFFFFFFFF;
      };
      BitMatrix.prototype.unset = function (x , y ) {
          var offset = y * this.rowSize + Math.floor(x / 32);
          this.bits[offset] &= ~((1 << (x & 0x1f)) & 0xFFFFFFFF);
      };
      BitMatrix.prototype.flip = function (x , y ) {
          var offset = y * this.rowSize + Math.floor(x / 32);
          this.bits[offset] ^= ((1 << (x & 0x1f)) & 0xFFFFFFFF);
      };
      BitMatrix.prototype.xor = function (mask) {
          if (this.width !== mask.getWidth() || this.height !== mask.getHeight()
              || this.rowSize !== mask.getRowSize()) {
              throw new IllegalArgumentException('input matrix dimensions do not match');
          }
          var rowArray = new BitArray(Math.floor(this.width / 32) + 1);
          var rowSize = this.rowSize;
          var bits = this.bits;
          for (var y = 0, height = this.height; y < height; y++) {
              var offset = y * rowSize;
              var row = mask.getRow(y, rowArray).getBitArray();
              for (var x = 0; x < rowSize; x++) {
                  bits[offset + x] ^= row[x];
              }
          }
      };
      BitMatrix.prototype.clear = function () {
          var bits = this.bits;
          var max = bits.length;
          for (var i = 0; i < max; i++) {
              bits[i] = 0;
          }
      };
      BitMatrix.prototype.setRegion = function (left , top , width , height ) {
          if (top < 0 || left < 0) {
              throw new IllegalArgumentException('Left and top must be nonnegative');
          }
          if (height < 1 || width < 1) {
              throw new IllegalArgumentException('Height and width must be at least 1');
          }
          var right = left + width;
          var bottom = top + height;
          if (bottom > this.height || right > this.width) {
              throw new IllegalArgumentException('The region must fit inside the matrix');
          }
          var rowSize = this.rowSize;
          var bits = this.bits;
          for (var y = top; y < bottom; y++) {
              var offset = y * rowSize;
              for (var x = left; x < right; x++) {
                  bits[offset + Math.floor(x / 32)] |= ((1 << (x & 0x1f)) & 0xFFFFFFFF);
              }
          }
      };
      BitMatrix.prototype.getRow = function (y , row) {
          if (row === null || row === undefined || row.getSize() < this.width) {
              row = new BitArray(this.width);
          }
          else {
              row.clear();
          }
          var rowSize = this.rowSize;
          var bits = this.bits;
          var offset = y * rowSize;
          for (var x = 0; x < rowSize; x++) {
              row.setBulk(x * 32, bits[offset + x]);
          }
          return row;
      };
      BitMatrix.prototype.setRow = function (y , row) {
          System.arraycopy(row.getBitArray(), 0, this.bits, y * this.rowSize, this.rowSize);
      };
      BitMatrix.prototype.rotate180 = function () {
          var width = this.getWidth();
          var height = this.getHeight();
          var topRow = new BitArray(width);
          var bottomRow = new BitArray(width);
          for (var i = 0, length_1 = Math.floor((height + 1) / 2); i < length_1; i++) {
              topRow = this.getRow(i, topRow);
              bottomRow = this.getRow(height - 1 - i, bottomRow);
              topRow.reverse();
              bottomRow.reverse();
              this.setRow(i, bottomRow);
              this.setRow(height - 1 - i, topRow);
          }
      };
      BitMatrix.prototype.getEnclosingRectangle = function () {
          var width = this.width;
          var height = this.height;
          var rowSize = this.rowSize;
          var bits = this.bits;
          var left = width;
          var top = height;
          var right = -1;
          var bottom = -1;
          for (var y = 0; y < height; y++) {
              for (var x32 = 0; x32 < rowSize; x32++) {
                  var theBits = bits[y * rowSize + x32];
                  if (theBits !== 0) {
                      if (y < top) {
                          top = y;
                      }
                      if (y > bottom) {
                          bottom = y;
                      }
                      if (x32 * 32 < left) {
                          var bit = 0;
                          while (((theBits << (31 - bit)) & 0xFFFFFFFF) === 0) {
                              bit++;
                          }
                          if ((x32 * 32 + bit) < left) {
                              left = x32 * 32 + bit;
                          }
                      }
                      if (x32 * 32 + 31 > right) {
                          var bit = 31;
                          while ((theBits >>> bit) === 0) {
                              bit--;
                          }
                          if ((x32 * 32 + bit) > right) {
                              right = x32 * 32 + bit;
                          }
                      }
                  }
              }
          }
          if (right < left || bottom < top) {
              return null;
          }
          return Int32Array.from([left, top, right - left + 1, bottom - top + 1]);
      };
      BitMatrix.prototype.getTopLeftOnBit = function () {
          var rowSize = this.rowSize;
          var bits = this.bits;
          var bitsOffset = 0;
          while (bitsOffset < bits.length && bits[bitsOffset] === 0) {
              bitsOffset++;
          }
          if (bitsOffset === bits.length) {
              return null;
          }
          var y = bitsOffset / rowSize;
          var x = (bitsOffset % rowSize) * 32;
          var theBits = bits[bitsOffset];
          var bit = 0;
          while (((theBits << (31 - bit)) & 0xFFFFFFFF) === 0) {
              bit++;
          }
          x += bit;
          return Int32Array.from([x, y]);
      };
      BitMatrix.prototype.getBottomRightOnBit = function () {
          var rowSize = this.rowSize;
          var bits = this.bits;
          var bitsOffset = bits.length - 1;
          while (bitsOffset >= 0 && bits[bitsOffset] === 0) {
              bitsOffset--;
          }
          if (bitsOffset < 0) {
              return null;
          }
          var y = Math.floor(bitsOffset / rowSize);
          var x = Math.floor(bitsOffset % rowSize) * 32;
          var theBits = bits[bitsOffset];
          var bit = 31;
          while ((theBits >>> bit) === 0) {
              bit--;
          }
          x += bit;
          return Int32Array.from([x, y]);
      };
      BitMatrix.prototype.getWidth = function () {
          return this.width;
      };
      BitMatrix.prototype.getHeight = function () {
          return this.height;
      };
      BitMatrix.prototype.getRowSize = function () {
          return this.rowSize;
      };
      BitMatrix.prototype.equals = function (o) {
          if (!(o instanceof BitMatrix)) {
              return false;
          }
          var other = o;
          return this.width === other.width && this.height === other.height && this.rowSize === other.rowSize &&
              Arrays.equals(this.bits, other.bits);
      };
      BitMatrix.prototype.hashCode = function () {
          var hash = this.width;
          hash = 31 * hash + this.width;
          hash = 31 * hash + this.height;
          hash = 31 * hash + this.rowSize;
          hash = 31 * hash + Arrays.hashCode(this.bits);
          return hash;
      };
      BitMatrix.prototype.toString = function (setString, unsetString, lineSeparator) {
          if (setString === void 0) { setString = 'X '; }
          if (unsetString === void 0) { unsetString = '  '; }
          if (lineSeparator === void 0) { lineSeparator = '\n'; }
          return this.buildToString(setString, unsetString, lineSeparator);
      };
      BitMatrix.prototype.buildToString = function (setString, unsetString, lineSeparator) {
          var result = new StringBuilder();
          for (var y = 0, height = this.height; y < height; y++) {
              for (var x = 0, width = this.width; x < width; x++) {
                  result.append(this.get(x, y) ? setString : unsetString);
              }
              result.append(lineSeparator);
          }
          return result.toString();
      };
      BitMatrix.prototype.clone = function () {
          return new BitMatrix(this.width, this.height, this.rowSize, this.bits.slice());
      };
      return BitMatrix;
  }());

  var __extends$W = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var NotFoundException =  (function (_super) {
      __extends$W(NotFoundException, _super);
      function NotFoundException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      NotFoundException.getNotFoundInstance = function () {
          return new NotFoundException();
      };
      NotFoundException.kind = 'NotFoundException';
      return NotFoundException;
  }(Exception));

  var __extends$V = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var GlobalHistogramBinarizer =  (function (_super) {
      __extends$V(GlobalHistogramBinarizer, _super);
      function GlobalHistogramBinarizer(source) {
          var _this = _super.call(this, source) || this;
          _this.luminances = GlobalHistogramBinarizer.EMPTY;
          _this.buckets = new Int32Array(GlobalHistogramBinarizer.LUMINANCE_BUCKETS);
          return _this;
      }
      GlobalHistogramBinarizer.prototype.getBlackRow = function (y , row) {
          var source = this.getLuminanceSource();
          var width = source.getWidth();
          if (row === undefined || row === null || row.getSize() < width) {
              row = new BitArray(width);
          }
          else {
              row.clear();
          }
          this.initArrays(width);
          var localLuminances = source.getRow(y, this.luminances);
          var localBuckets = this.buckets;
          for (var x = 0; x < width; x++) {
              localBuckets[(localLuminances[x] & 0xff) >> GlobalHistogramBinarizer.LUMINANCE_SHIFT]++;
          }
          var blackPoint = GlobalHistogramBinarizer.estimateBlackPoint(localBuckets);
          if (width < 3) {
              for (var x = 0; x < width; x++) {
                  if ((localLuminances[x] & 0xff) < blackPoint) {
                      row.set(x);
                  }
              }
          }
          else {
              var left = localLuminances[0] & 0xff;
              var center = localLuminances[1] & 0xff;
              for (var x = 1; x < width - 1; x++) {
                  var right = localLuminances[x + 1] & 0xff;
                  if (((center * 4) - left - right) / 2 < blackPoint) {
                      row.set(x);
                  }
                  left = center;
                  center = right;
              }
          }
          return row;
      };
      GlobalHistogramBinarizer.prototype.getBlackMatrix = function () {
          var source = this.getLuminanceSource();
          var width = source.getWidth();
          var height = source.getHeight();
          var matrix = new BitMatrix(width, height);
          this.initArrays(width);
          var localBuckets = this.buckets;
          for (var y = 1; y < 5; y++) {
              var row = Math.floor((height * y) / 5);
              var localLuminances_1 = source.getRow(row, this.luminances);
              var right = Math.floor((width * 4) / 5);
              for (var x = Math.floor(width / 5); x < right; x++) {
                  var pixel = localLuminances_1[x] & 0xff;
                  localBuckets[pixel >> GlobalHistogramBinarizer.LUMINANCE_SHIFT]++;
              }
          }
          var blackPoint = GlobalHistogramBinarizer.estimateBlackPoint(localBuckets);
          var localLuminances = source.getMatrix();
          for (var y = 0; y < height; y++) {
              var offset = y * width;
              for (var x = 0; x < width; x++) {
                  var pixel = localLuminances[offset + x] & 0xff;
                  if (pixel < blackPoint) {
                      matrix.set(x, y);
                  }
              }
          }
          return matrix;
      };
      GlobalHistogramBinarizer.prototype.createBinarizer = function (source) {
          return new GlobalHistogramBinarizer(source);
      };
      GlobalHistogramBinarizer.prototype.initArrays = function (luminanceSize ) {
          if (this.luminances.length < luminanceSize) {
              this.luminances = new Uint8ClampedArray(luminanceSize);
          }
          var buckets = this.buckets;
          for (var x = 0; x < GlobalHistogramBinarizer.LUMINANCE_BUCKETS; x++) {
              buckets[x] = 0;
          }
      };
      GlobalHistogramBinarizer.estimateBlackPoint = function (buckets) {
          var numBuckets = buckets.length;
          var maxBucketCount = 0;
          var firstPeak = 0;
          var firstPeakSize = 0;
          for (var x = 0; x < numBuckets; x++) {
              if (buckets[x] > firstPeakSize) {
                  firstPeak = x;
                  firstPeakSize = buckets[x];
              }
              if (buckets[x] > maxBucketCount) {
                  maxBucketCount = buckets[x];
              }
          }
          var secondPeak = 0;
          var secondPeakScore = 0;
          for (var x = 0; x < numBuckets; x++) {
              var distanceToBiggest = x - firstPeak;
              var score = buckets[x] * distanceToBiggest * distanceToBiggest;
              if (score > secondPeakScore) {
                  secondPeak = x;
                  secondPeakScore = score;
              }
          }
          if (firstPeak > secondPeak) {
              var temp = firstPeak;
              firstPeak = secondPeak;
              secondPeak = temp;
          }
          if (secondPeak - firstPeak <= numBuckets / 16) {
              throw new NotFoundException();
          }
          var bestValley = secondPeak - 1;
          var bestValleyScore = -1;
          for (var x = secondPeak - 1; x > firstPeak; x--) {
              var fromFirst = x - firstPeak;
              var score = fromFirst * fromFirst * (secondPeak - x) * (maxBucketCount - buckets[x]);
              if (score > bestValleyScore) {
                  bestValley = x;
                  bestValleyScore = score;
              }
          }
          return bestValley << GlobalHistogramBinarizer.LUMINANCE_SHIFT;
      };
      GlobalHistogramBinarizer.LUMINANCE_BITS = 5;
      GlobalHistogramBinarizer.LUMINANCE_SHIFT = 8 - GlobalHistogramBinarizer.LUMINANCE_BITS;
      GlobalHistogramBinarizer.LUMINANCE_BUCKETS = 1 << GlobalHistogramBinarizer.LUMINANCE_BITS;
      GlobalHistogramBinarizer.EMPTY = Uint8ClampedArray.from([0]);
      return GlobalHistogramBinarizer;
  }(Binarizer));

  var __extends$U = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var HybridBinarizer =  (function (_super) {
      __extends$U(HybridBinarizer, _super);
      function HybridBinarizer(source) {
          var _this = _super.call(this, source) || this;
          _this.matrix = null;
          return _this;
      }
      HybridBinarizer.prototype.getBlackMatrix = function () {
          if (this.matrix !== null) {
              return this.matrix;
          }
          var source = this.getLuminanceSource();
          var width = source.getWidth();
          var height = source.getHeight();
          if (width >= HybridBinarizer.MINIMUM_DIMENSION && height >= HybridBinarizer.MINIMUM_DIMENSION) {
              var luminances = source.getMatrix();
              var subWidth = width >> HybridBinarizer.BLOCK_SIZE_POWER;
              if ((width & HybridBinarizer.BLOCK_SIZE_MASK) !== 0) {
                  subWidth++;
              }
              var subHeight = height >> HybridBinarizer.BLOCK_SIZE_POWER;
              if ((height & HybridBinarizer.BLOCK_SIZE_MASK) !== 0) {
                  subHeight++;
              }
              var blackPoints = HybridBinarizer.calculateBlackPoints(luminances, subWidth, subHeight, width, height);
              var newMatrix = new BitMatrix(width, height);
              HybridBinarizer.calculateThresholdForBlock(luminances, subWidth, subHeight, width, height, blackPoints, newMatrix);
              this.matrix = newMatrix;
          }
          else {
              this.matrix = _super.prototype.getBlackMatrix.call(this);
          }
          return this.matrix;
      };
      HybridBinarizer.prototype.createBinarizer = function (source) {
          return new HybridBinarizer(source);
      };
      HybridBinarizer.calculateThresholdForBlock = function (luminances, subWidth , subHeight , width , height , blackPoints, matrix) {
          var maxYOffset = height - HybridBinarizer.BLOCK_SIZE;
          var maxXOffset = width - HybridBinarizer.BLOCK_SIZE;
          for (var y = 0; y < subHeight; y++) {
              var yoffset = y << HybridBinarizer.BLOCK_SIZE_POWER;
              if (yoffset > maxYOffset) {
                  yoffset = maxYOffset;
              }
              var top_1 = HybridBinarizer.cap(y, 2, subHeight - 3);
              for (var x = 0; x < subWidth; x++) {
                  var xoffset = x << HybridBinarizer.BLOCK_SIZE_POWER;
                  if (xoffset > maxXOffset) {
                      xoffset = maxXOffset;
                  }
                  var left = HybridBinarizer.cap(x, 2, subWidth - 3);
                  var sum = 0;
                  for (var z = -2; z <= 2; z++) {
                      var blackRow = blackPoints[top_1 + z];
                      sum += blackRow[left - 2] + blackRow[left - 1] + blackRow[left] + blackRow[left + 1] + blackRow[left + 2];
                  }
                  var average = sum / 25;
                  HybridBinarizer.thresholdBlock(luminances, xoffset, yoffset, average, width, matrix);
              }
          }
      };
      HybridBinarizer.cap = function (value , min , max ) {
          return value < min ? min : value > max ? max : value;
      };
      HybridBinarizer.thresholdBlock = function (luminances, xoffset , yoffset , threshold , stride , matrix) {
          for (var y = 0, offset = yoffset * stride + xoffset; y < HybridBinarizer.BLOCK_SIZE; y++, offset += stride) {
              for (var x = 0; x < HybridBinarizer.BLOCK_SIZE; x++) {
                  if ((luminances[offset + x] & 0xFF) <= threshold) {
                      matrix.set(xoffset + x, yoffset + y);
                  }
              }
          }
      };
      HybridBinarizer.calculateBlackPoints = function (luminances, subWidth , subHeight , width , height ) {
          var maxYOffset = height - HybridBinarizer.BLOCK_SIZE;
          var maxXOffset = width - HybridBinarizer.BLOCK_SIZE;
          var blackPoints = new Array(subHeight);
          for (var y = 0; y < subHeight; y++) {
              blackPoints[y] = new Int32Array(subWidth);
              var yoffset = y << HybridBinarizer.BLOCK_SIZE_POWER;
              if (yoffset > maxYOffset) {
                  yoffset = maxYOffset;
              }
              for (var x = 0; x < subWidth; x++) {
                  var xoffset = x << HybridBinarizer.BLOCK_SIZE_POWER;
                  if (xoffset > maxXOffset) {
                      xoffset = maxXOffset;
                  }
                  var sum = 0;
                  var min = 0xFF;
                  var max = 0;
                  for (var yy = 0, offset = yoffset * width + xoffset; yy < HybridBinarizer.BLOCK_SIZE; yy++, offset += width) {
                      for (var xx = 0; xx < HybridBinarizer.BLOCK_SIZE; xx++) {
                          var pixel = luminances[offset + xx] & 0xFF;
                          sum += pixel;
                          if (pixel < min) {
                              min = pixel;
                          }
                          if (pixel > max) {
                              max = pixel;
                          }
                      }
                      if (max - min > HybridBinarizer.MIN_DYNAMIC_RANGE) {
                          for (yy++, offset += width; yy < HybridBinarizer.BLOCK_SIZE; yy++, offset += width) {
                              for (var xx = 0; xx < HybridBinarizer.BLOCK_SIZE; xx++) {
                                  sum += luminances[offset + xx] & 0xFF;
                              }
                          }
                      }
                  }
                  var average = sum >> (HybridBinarizer.BLOCK_SIZE_POWER * 2);
                  if (max - min <= HybridBinarizer.MIN_DYNAMIC_RANGE) {
                      average = min / 2;
                      if (y > 0 && x > 0) {
                          var averageNeighborBlackPoint = (blackPoints[y - 1][x] + (2 * blackPoints[y][x - 1]) + blackPoints[y - 1][x - 1]) / 4;
                          if (min < averageNeighborBlackPoint) {
                              average = averageNeighborBlackPoint;
                          }
                      }
                  }
                  blackPoints[y][x] = average;
              }
          }
          return blackPoints;
      };
      HybridBinarizer.BLOCK_SIZE_POWER = 3;
      HybridBinarizer.BLOCK_SIZE = 1 << HybridBinarizer.BLOCK_SIZE_POWER;
      HybridBinarizer.BLOCK_SIZE_MASK = HybridBinarizer.BLOCK_SIZE - 1;
      HybridBinarizer.MINIMUM_DIMENSION = HybridBinarizer.BLOCK_SIZE * 5;
      HybridBinarizer.MIN_DYNAMIC_RANGE = 24;
      return HybridBinarizer;
  }(GlobalHistogramBinarizer));

  var LuminanceSource =  (function () {
      function LuminanceSource(width , height ) {
          this.width = width;
          this.height = height;
      }
      LuminanceSource.prototype.getWidth = function () {
          return this.width;
      };
      LuminanceSource.prototype.getHeight = function () {
          return this.height;
      };
      LuminanceSource.prototype.isCropSupported = function () {
          return false;
      };
      LuminanceSource.prototype.crop = function (left , top , width , height ) {
          throw new UnsupportedOperationException('This luminance source does not support cropping.');
      };
      LuminanceSource.prototype.isRotateSupported = function () {
          return false;
      };
      LuminanceSource.prototype.rotateCounterClockwise = function () {
          throw new UnsupportedOperationException('This luminance source does not support rotation by 90 degrees.');
      };
      LuminanceSource.prototype.rotateCounterClockwise45 = function () {
          throw new UnsupportedOperationException('This luminance source does not support rotation by 45 degrees.');
      };
      LuminanceSource.prototype.toString = function () {
          var row = new Uint8ClampedArray(this.width);
          var result = new StringBuilder();
          for (var y = 0; y < this.height; y++) {
              var sourceRow = this.getRow(y, row);
              for (var x = 0; x < this.width; x++) {
                  var luminance = sourceRow[x] & 0xFF;
                  var c = void 0;
                  if (luminance < 0x40) {
                      c = '#';
                  }
                  else if (luminance < 0x80) {
                      c = '+';
                  }
                  else if (luminance < 0xC0) {
                      c = '.';
                  }
                  else {
                      c = ' ';
                  }
                  result.append(c);
              }
              result.append('\n');
          }
          return result.toString();
      };
      return LuminanceSource;
  }());

  var __extends$T = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var InvertedLuminanceSource =  (function (_super) {
      __extends$T(InvertedLuminanceSource, _super);
      function InvertedLuminanceSource(delegate) {
          var _this = _super.call(this, delegate.getWidth(), delegate.getHeight()) || this;
          _this.delegate = delegate;
          return _this;
      }
      InvertedLuminanceSource.prototype.getRow = function (y , row) {
          var sourceRow = this.delegate.getRow(y, row);
          var width = this.getWidth();
          for (var i = 0; i < width; i++) {
              sourceRow[i] =  (255 - (sourceRow[i] & 0xFF));
          }
          return sourceRow;
      };
      InvertedLuminanceSource.prototype.getMatrix = function () {
          var matrix = this.delegate.getMatrix();
          var length = this.getWidth() * this.getHeight();
          var invertedMatrix = new Uint8ClampedArray(length);
          for (var i = 0; i < length; i++) {
              invertedMatrix[i] =  (255 - (matrix[i] & 0xFF));
          }
          return invertedMatrix;
      };
      InvertedLuminanceSource.prototype.isCropSupported = function () {
          return this.delegate.isCropSupported();
      };
      InvertedLuminanceSource.prototype.crop = function (left , top , width , height ) {
          return new InvertedLuminanceSource(this.delegate.crop(left, top, width, height));
      };
      InvertedLuminanceSource.prototype.isRotateSupported = function () {
          return this.delegate.isRotateSupported();
      };
      InvertedLuminanceSource.prototype.invert = function () {
          return this.delegate;
      };
      InvertedLuminanceSource.prototype.rotateCounterClockwise = function () {
          return new InvertedLuminanceSource(this.delegate.rotateCounterClockwise());
      };
      InvertedLuminanceSource.prototype.rotateCounterClockwise45 = function () {
          return new InvertedLuminanceSource(this.delegate.rotateCounterClockwise45());
      };
      return InvertedLuminanceSource;
  }(LuminanceSource));

  var __extends$S = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var HTMLCanvasElementLuminanceSource =  (function (_super) {
      __extends$S(HTMLCanvasElementLuminanceSource, _super);
      function HTMLCanvasElementLuminanceSource(canvas) {
          var _this = _super.call(this, canvas.width, canvas.height) || this;
          _this.canvas = canvas;
          _this.tempCanvasElement = null;
          _this.buffer = HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData(canvas);
          return _this;
      }
      HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData = function (canvas) {
          var imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
          return HTMLCanvasElementLuminanceSource.toGrayscaleBuffer(imageData.data, canvas.width, canvas.height);
      };
      HTMLCanvasElementLuminanceSource.toGrayscaleBuffer = function (imageBuffer, width, height) {
          var grayscaleBuffer = new Uint8ClampedArray(width * height);
          for (var i = 0, j = 0, length_1 = imageBuffer.length; i < length_1; i += 4, j++) {
              var gray = void 0;
              var alpha = imageBuffer[i + 3];
              if (alpha === 0) {
                  gray = 0xFF;
              }
              else {
                  var pixelR = imageBuffer[i];
                  var pixelG = imageBuffer[i + 1];
                  var pixelB = imageBuffer[i + 2];
                  gray = (306 * pixelR +
                      601 * pixelG +
                      117 * pixelB +
                      0x200) >> 10;
              }
              grayscaleBuffer[j] = gray;
          }
          return grayscaleBuffer;
      };
      HTMLCanvasElementLuminanceSource.prototype.getRow = function (y , row) {
          if (y < 0 || y >= this.getHeight()) {
              throw new IllegalArgumentException('Requested row is outside the image: ' + y);
          }
          var width = this.getWidth();
          var start = y * width;
          if (row === null) {
              row = this.buffer.slice(start, start + width);
          }
          else {
              if (row.length < width) {
                  row = new Uint8ClampedArray(width);
              }
              row.set(this.buffer.slice(start, start + width));
          }
          return row;
      };
      HTMLCanvasElementLuminanceSource.prototype.getMatrix = function () {
          return this.buffer;
      };
      HTMLCanvasElementLuminanceSource.prototype.isCropSupported = function () {
          return true;
      };
      HTMLCanvasElementLuminanceSource.prototype.crop = function (left , top , width , height ) {
          _super.prototype.crop.call(this, left, top, width, height);
          return this;
      };
      HTMLCanvasElementLuminanceSource.prototype.isRotateSupported = function () {
          return true;
      };
      HTMLCanvasElementLuminanceSource.prototype.rotateCounterClockwise = function () {
          this.rotate(-90);
          return this;
      };
      HTMLCanvasElementLuminanceSource.prototype.rotateCounterClockwise45 = function () {
          this.rotate(-45);
          return this;
      };
      HTMLCanvasElementLuminanceSource.prototype.getTempCanvasElement = function () {
          if (null === this.tempCanvasElement) {
              var tempCanvasElement = this.canvas.ownerDocument.createElement('canvas');
              tempCanvasElement.width = this.canvas.width;
              tempCanvasElement.height = this.canvas.height;
              this.tempCanvasElement = tempCanvasElement;
          }
          return this.tempCanvasElement;
      };
      HTMLCanvasElementLuminanceSource.prototype.rotate = function (angle) {
          var tempCanvasElement = this.getTempCanvasElement();
          var tempContext = tempCanvasElement.getContext('2d');
          var angleRadians = angle * HTMLCanvasElementLuminanceSource.DEGREE_TO_RADIANS;
          var width = this.canvas.width;
          var height = this.canvas.height;
          var newWidth = Math.ceil(Math.abs(Math.cos(angleRadians)) * width + Math.abs(Math.sin(angleRadians)) * height);
          var newHeight = Math.ceil(Math.abs(Math.sin(angleRadians)) * width + Math.abs(Math.cos(angleRadians)) * height);
          tempCanvasElement.width = newWidth;
          tempCanvasElement.height = newHeight;
          tempContext.translate(newWidth / 2, newHeight / 2);
          tempContext.rotate(angleRadians);
          tempContext.drawImage(this.canvas, width / -2, height / -2);
          this.buffer = HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData(tempCanvasElement);
          return this;
      };
      HTMLCanvasElementLuminanceSource.prototype.invert = function () {
          return new InvertedLuminanceSource(this);
      };
      HTMLCanvasElementLuminanceSource.DEGREE_TO_RADIANS = Math.PI / 180;
      return HTMLCanvasElementLuminanceSource;
  }(LuminanceSource));

  var VideoInputDevice =  (function () {
      function VideoInputDevice(deviceId, label, groupId) {
          this.deviceId = deviceId;
          this.label = label;
          this.kind = 'videoinput';
          this.groupId = groupId || undefined;
      }
      VideoInputDevice.prototype.toJSON = function () {
          return {
              kind: this.kind,
              groupId: this.groupId,
              deviceId: this.deviceId,
              label: this.label,
          };
      };
      return VideoInputDevice;
  }());

  var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  };
  var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  };
  var __values$B = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var BrowserCodeReader =  (function () {
      function BrowserCodeReader(reader, timeBetweenScansMillis, _hints) {
          if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
          this.reader = reader;
          this.timeBetweenScansMillis = timeBetweenScansMillis;
          this._hints = _hints;
          this._stopContinuousDecode = false;
          this._stopAsyncDecode = false;
          this._timeBetweenDecodingAttempts = 0;
      }
      Object.defineProperty(BrowserCodeReader.prototype, "hasNavigator", {
          get: function () {
              return typeof navigator !== 'undefined';
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(BrowserCodeReader.prototype, "isMediaDevicesSuported", {
          get: function () {
              return this.hasNavigator && !!navigator.mediaDevices;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(BrowserCodeReader.prototype, "canEnumerateDevices", {
          get: function () {
              return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(BrowserCodeReader.prototype, "timeBetweenDecodingAttempts", {
          get: function () {
              return this._timeBetweenDecodingAttempts;
          },
          set: function (millis) {
              this._timeBetweenDecodingAttempts = millis < 0 ? 0 : millis;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(BrowserCodeReader.prototype, "hints", {
          get: function () {
              return this._hints;
          },
          set: function (hints) {
              this._hints = hints || null;
          },
          enumerable: false,
          configurable: true
      });
      BrowserCodeReader.prototype.listVideoInputDevices = function () {
          return __awaiter(this, void 0, void 0, function () {
              var devices, videoDevices, devices_1, devices_1_1, device, kind, deviceId, label, groupId, videoDevice;
              var e_1, _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          if (!this.hasNavigator) {
                              throw new Error('Can\'t enumerate devices, navigator is not present.');
                          }
                          if (!this.canEnumerateDevices) {
                              throw new Error('Can\'t enumerate devices, method not supported.');
                          }
                          return [4 , navigator.mediaDevices.enumerateDevices()];
                      case 1:
                          devices = _b.sent();
                          videoDevices = [];
                          try {
                              for (devices_1 = __values$B(devices), devices_1_1 = devices_1.next(); !devices_1_1.done; devices_1_1 = devices_1.next()) {
                                  device = devices_1_1.value;
                                  kind = device.kind === 'video' ? 'videoinput' : device.kind;
                                  if (kind !== 'videoinput') {
                                      continue;
                                  }
                                  deviceId = device.deviceId || device.id;
                                  label = device.label || "Video device " + (videoDevices.length + 1);
                                  groupId = device.groupId;
                                  videoDevice = { deviceId: deviceId, label: label, kind: kind, groupId: groupId };
                                  videoDevices.push(videoDevice);
                              }
                          }
                          catch (e_1_1) { e_1 = { error: e_1_1 }; }
                          finally {
                              try {
                                  if (devices_1_1 && !devices_1_1.done && (_a = devices_1.return)) _a.call(devices_1);
                              }
                              finally { if (e_1) throw e_1.error; }
                          }
                          return [2 , videoDevices];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.getVideoInputDevices = function () {
          return __awaiter(this, void 0, void 0, function () {
              var devices;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 , this.listVideoInputDevices()];
                      case 1:
                          devices = _a.sent();
                          return [2 , devices.map(function (d) { return new VideoInputDevice(d.deviceId, d.label); })];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.findDeviceById = function (deviceId) {
          return __awaiter(this, void 0, void 0, function () {
              var devices;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 , this.listVideoInputDevices()];
                      case 1:
                          devices = _a.sent();
                          if (!devices) {
                              return [2 , null];
                          }
                          return [2 , devices.find(function (x) { return x.deviceId === deviceId; })];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.decodeFromInputVideoDevice = function (deviceId, videoSource) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 , this.decodeOnceFromVideoDevice(deviceId, videoSource)];
                      case 1: return [2 , _a.sent()];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.decodeOnceFromVideoDevice = function (deviceId, videoSource) {
          return __awaiter(this, void 0, void 0, function () {
              var videoConstraints, constraints;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          this.reset();
                          if (!deviceId) {
                              videoConstraints = { facingMode: 'environment' };
                          }
                          else {
                              videoConstraints = { deviceId: { exact: deviceId } };
                          }
                          constraints = { video: videoConstraints };
                          return [4 , this.decodeOnceFromConstraints(constraints, videoSource)];
                      case 1: return [2 , _a.sent()];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.decodeOnceFromConstraints = function (constraints, videoSource) {
          return __awaiter(this, void 0, void 0, function () {
              var stream;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 , navigator.mediaDevices.getUserMedia(constraints)];
                      case 1:
                          stream = _a.sent();
                          return [4 , this.decodeOnceFromStream(stream, videoSource)];
                      case 2: return [2 , _a.sent()];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.decodeOnceFromStream = function (stream, videoSource) {
          return __awaiter(this, void 0, void 0, function () {
              var video, result;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          this.reset();
                          return [4 , this.attachStreamToVideo(stream, videoSource)];
                      case 1:
                          video = _a.sent();
                          return [4 , this.decodeOnce(video)];
                      case 2:
                          result = _a.sent();
                          return [2 , result];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.decodeFromInputVideoDeviceContinuously = function (deviceId, videoSource, callbackFn) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 , this.decodeFromVideoDevice(deviceId, videoSource, callbackFn)];
                      case 1: return [2 , _a.sent()];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.decodeFromVideoDevice = function (deviceId, videoSource, callbackFn) {
          return __awaiter(this, void 0, void 0, function () {
              var videoConstraints, constraints;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (!deviceId) {
                              videoConstraints = { facingMode: 'environment' };
                          }
                          else {
                              videoConstraints = { deviceId: { exact: deviceId } };
                          }
                          constraints = { video: videoConstraints };
                          return [4 , this.decodeFromConstraints(constraints, videoSource, callbackFn)];
                      case 1: return [2 , _a.sent()];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.decodeFromConstraints = function (constraints, videoSource, callbackFn) {
          return __awaiter(this, void 0, void 0, function () {
              var stream;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4 , navigator.mediaDevices.getUserMedia(constraints)];
                      case 1:
                          stream = _a.sent();
                          return [4 , this.decodeFromStream(stream, videoSource, callbackFn)];
                      case 2: return [2 , _a.sent()];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.decodeFromStream = function (stream, videoSource, callbackFn) {
          return __awaiter(this, void 0, void 0, function () {
              var video;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          this.reset();
                          return [4 , this.attachStreamToVideo(stream, videoSource)];
                      case 1:
                          video = _a.sent();
                          return [4 , this.decodeContinuously(video, callbackFn)];
                      case 2: return [2 , _a.sent()];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.stopAsyncDecode = function () {
          this._stopAsyncDecode = true;
      };
      BrowserCodeReader.prototype.stopContinuousDecode = function () {
          this._stopContinuousDecode = true;
      };
      BrowserCodeReader.prototype.attachStreamToVideo = function (stream, videoSource) {
          return __awaiter(this, void 0, void 0, function () {
              var videoElement;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          videoElement = this.prepareVideoElement(videoSource);
                          this.addVideoSource(videoElement, stream);
                          this.videoElement = videoElement;
                          this.stream = stream;
                          return [4 , this.playVideoOnLoadAsync(videoElement)];
                      case 1:
                          _a.sent();
                          return [2 , videoElement];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.playVideoOnLoadAsync = function (videoElement) {
          var _this = this;
          return new Promise(function (resolve, reject) { return _this.playVideoOnLoad(videoElement, function () { return resolve(); }); });
      };
      BrowserCodeReader.prototype.playVideoOnLoad = function (element, callbackFn) {
          var _this = this;
          this.videoEndedListener = function () { return _this.stopStreams(); };
          this.videoCanPlayListener = function () { return _this.tryPlayVideo(element); };
          element.addEventListener('ended', this.videoEndedListener);
          element.addEventListener('canplay', this.videoCanPlayListener);
          element.addEventListener('playing', callbackFn);
          this.tryPlayVideo(element);
      };
      BrowserCodeReader.prototype.isVideoPlaying = function (video) {
          return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
      };
      BrowserCodeReader.prototype.tryPlayVideo = function (videoElement) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          if (this.isVideoPlaying(videoElement)) {
                              console.warn('Trying to play video that is already playing.');
                              return [2 ];
                          }
                          _b.label = 1;
                      case 1:
                          _b.trys.push([1, 3, , 4]);
                          return [4 , videoElement.play()];
                      case 2:
                          _b.sent();
                          return [3 , 4];
                      case 3:
                          _b.sent();
                          console.warn('It was not possible to play the video.');
                          return [3 , 4];
                      case 4: return [2 ];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.getMediaElement = function (mediaElementId, type) {
          var mediaElement = document.getElementById(mediaElementId);
          if (!mediaElement) {
              throw new ArgumentException("element with id '" + mediaElementId + "' not found");
          }
          if (mediaElement.nodeName.toLowerCase() !== type.toLowerCase()) {
              throw new ArgumentException("element with id '" + mediaElementId + "' must be an " + type + " element");
          }
          return mediaElement;
      };
      BrowserCodeReader.prototype.decodeFromImage = function (source, url) {
          if (!source && !url) {
              throw new ArgumentException('either imageElement with a src set or an url must be provided');
          }
          if (url && !source) {
              return this.decodeFromImageUrl(url);
          }
          return this.decodeFromImageElement(source);
      };
      BrowserCodeReader.prototype.decodeFromVideo = function (source, url) {
          if (!source && !url) {
              throw new ArgumentException('Either an element with a src set or an URL must be provided');
          }
          if (url && !source) {
              return this.decodeFromVideoUrl(url);
          }
          return this.decodeFromVideoElement(source);
      };
      BrowserCodeReader.prototype.decodeFromVideoContinuously = function (source, url, callbackFn) {
          if (undefined === source && undefined === url) {
              throw new ArgumentException('Either an element with a src set or an URL must be provided');
          }
          if (url && !source) {
              return this.decodeFromVideoUrlContinuously(url, callbackFn);
          }
          return this.decodeFromVideoElementContinuously(source, callbackFn);
      };
      BrowserCodeReader.prototype.decodeFromImageElement = function (source) {
          if (!source) {
              throw new ArgumentException('An image element must be provided.');
          }
          this.reset();
          var element = this.prepareImageElement(source);
          this.imageElement = element;
          var task;
          if (this.isImageLoaded(element)) {
              task = this.decodeOnce(element, false, true);
          }
          else {
              task = this._decodeOnLoadImage(element);
          }
          return task;
      };
      BrowserCodeReader.prototype.decodeFromVideoElement = function (source) {
          var element = this._decodeFromVideoElementSetup(source);
          return this._decodeOnLoadVideo(element);
      };
      BrowserCodeReader.prototype.decodeFromVideoElementContinuously = function (source, callbackFn) {
          var element = this._decodeFromVideoElementSetup(source);
          return this._decodeOnLoadVideoContinuously(element, callbackFn);
      };
      BrowserCodeReader.prototype._decodeFromVideoElementSetup = function (source) {
          if (!source) {
              throw new ArgumentException('A video element must be provided.');
          }
          this.reset();
          var element = this.prepareVideoElement(source);
          this.videoElement = element;
          return element;
      };
      BrowserCodeReader.prototype.decodeFromImageUrl = function (url) {
          if (!url) {
              throw new ArgumentException('An URL must be provided.');
          }
          this.reset();
          var element = this.prepareImageElement();
          this.imageElement = element;
          var decodeTask = this._decodeOnLoadImage(element);
          element.src = url;
          return decodeTask;
      };
      BrowserCodeReader.prototype.decodeFromVideoUrl = function (url) {
          if (!url) {
              throw new ArgumentException('An URL must be provided.');
          }
          this.reset();
          var element = this.prepareVideoElement();
          var decodeTask = this.decodeFromVideoElement(element);
          element.src = url;
          return decodeTask;
      };
      BrowserCodeReader.prototype.decodeFromVideoUrlContinuously = function (url, callbackFn) {
          if (!url) {
              throw new ArgumentException('An URL must be provided.');
          }
          this.reset();
          var element = this.prepareVideoElement();
          var decodeTask = this.decodeFromVideoElementContinuously(element, callbackFn);
          element.src = url;
          return decodeTask;
      };
      BrowserCodeReader.prototype._decodeOnLoadImage = function (element) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              _this.imageLoadedListener = function () { return _this.decodeOnce(element, false, true).then(resolve, reject); };
              element.addEventListener('load', _this.imageLoadedListener);
          });
      };
      BrowserCodeReader.prototype._decodeOnLoadVideo = function (videoElement) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                      return [4 , this.playVideoOnLoadAsync(videoElement)];
                      case 1:
                          _a.sent();
                          return [4 , this.decodeOnce(videoElement)];
                      case 2:
                      return [2 , _a.sent()];
                  }
              });
          });
      };
      BrowserCodeReader.prototype._decodeOnLoadVideoContinuously = function (videoElement, callbackFn) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                      return [4 , this.playVideoOnLoadAsync(videoElement)];
                      case 1:
                          _a.sent();
                          this.decodeContinuously(videoElement, callbackFn);
                          return [2 ];
                  }
              });
          });
      };
      BrowserCodeReader.prototype.isImageLoaded = function (img) {
          if (!img.complete) {
              return false;
          }
          if (img.naturalWidth === 0) {
              return false;
          }
          return true;
      };
      BrowserCodeReader.prototype.prepareImageElement = function (imageSource) {
          var imageElement;
          if (typeof imageSource === 'undefined') {
              imageElement = document.createElement('img');
              imageElement.width = 200;
              imageElement.height = 200;
          }
          if (typeof imageSource === 'string') {
              imageElement = this.getMediaElement(imageSource, 'img');
          }
          if (imageSource instanceof HTMLImageElement) {
              imageElement = imageSource;
          }
          return imageElement;
      };
      BrowserCodeReader.prototype.prepareVideoElement = function (videoSource) {
          var videoElement;
          if (!videoSource && typeof document !== 'undefined') {
              videoElement = document.createElement('video');
              videoElement.width = 200;
              videoElement.height = 200;
          }
          if (typeof videoSource === 'string') {
              videoElement = this.getMediaElement(videoSource, 'video');
          }
          if (videoSource instanceof HTMLVideoElement) {
              videoElement = videoSource;
          }
          videoElement.setAttribute('autoplay', 'true');
          videoElement.setAttribute('muted', 'true');
          videoElement.setAttribute('playsinline', 'true');
          return videoElement;
      };
      BrowserCodeReader.prototype.decodeOnce = function (element, retryIfNotFound, retryIfChecksumOrFormatError) {
          var _this = this;
          if (retryIfNotFound === void 0) { retryIfNotFound = true; }
          if (retryIfChecksumOrFormatError === void 0) { retryIfChecksumOrFormatError = true; }
          this._stopAsyncDecode = false;
          var loop = function (resolve, reject) {
              if (_this._stopAsyncDecode) {
                  reject(new NotFoundException('Video stream has ended before any code could be detected.'));
                  _this._stopAsyncDecode = undefined;
                  return;
              }
              try {
                  var result = _this.decode(element);
                  resolve(result);
              }
              catch (e) {
                  var ifNotFound = retryIfNotFound && e instanceof NotFoundException;
                  var isChecksumOrFormatError = e instanceof ChecksumException || e instanceof FormatException;
                  var ifChecksumOrFormat = isChecksumOrFormatError && retryIfChecksumOrFormatError;
                  if (ifNotFound || ifChecksumOrFormat) {
                      return setTimeout(loop, _this._timeBetweenDecodingAttempts, resolve, reject);
                  }
                  reject(e);
              }
          };
          return new Promise(function (resolve, reject) { return loop(resolve, reject); });
      };
      BrowserCodeReader.prototype.decodeContinuously = function (element, callbackFn) {
          var _this = this;
          this._stopContinuousDecode = false;
          var loop = function () {
              if (_this._stopContinuousDecode) {
                  _this._stopContinuousDecode = undefined;
                  return;
              }
              try {
                  var result = _this.decode(element);
                  callbackFn(result, null);
                  setTimeout(loop, _this.timeBetweenScansMillis);
              }
              catch (e) {
                  callbackFn(null, e);
                  var isChecksumOrFormatError = e instanceof ChecksumException || e instanceof FormatException;
                  var isNotFound = e instanceof NotFoundException;
                  if (isChecksumOrFormatError || isNotFound) {
                      setTimeout(loop, _this._timeBetweenDecodingAttempts);
                  }
              }
          };
          loop();
      };
      BrowserCodeReader.prototype.decode = function (element) {
          var binaryBitmap = this.createBinaryBitmap(element);
          return this.decodeBitmap(binaryBitmap);
      };
      BrowserCodeReader.prototype.createBinaryBitmap = function (mediaElement) {
          var ctx = this.getCaptureCanvasContext(mediaElement);
          this.drawImageOnCanvas(ctx, mediaElement);
          var canvas = this.getCaptureCanvas(mediaElement);
          var luminanceSource = new HTMLCanvasElementLuminanceSource(canvas);
          var hybridBinarizer = new HybridBinarizer(luminanceSource);
          return new BinaryBitmap(hybridBinarizer);
      };
      BrowserCodeReader.prototype.getCaptureCanvasContext = function (mediaElement) {
          if (!this.captureCanvasContext) {
              var elem = this.getCaptureCanvas(mediaElement);
              var ctx = elem.getContext('2d');
              this.captureCanvasContext = ctx;
          }
          return this.captureCanvasContext;
      };
      BrowserCodeReader.prototype.getCaptureCanvas = function (mediaElement) {
          if (!this.captureCanvas) {
              var elem = this.createCaptureCanvas(mediaElement);
              this.captureCanvas = elem;
          }
          return this.captureCanvas;
      };
      BrowserCodeReader.prototype.drawImageOnCanvas = function (canvasElementContext, srcElement) {
          canvasElementContext.drawImage(srcElement, 0, 0);
      };
      BrowserCodeReader.prototype.decodeBitmap = function (binaryBitmap) {
          return this.reader.decode(binaryBitmap, this._hints);
      };
      BrowserCodeReader.prototype.createCaptureCanvas = function (mediaElement) {
          if (typeof document === 'undefined') {
              this._destroyCaptureCanvas();
              return null;
          }
          var canvasElement = document.createElement('canvas');
          var width;
          var height;
          if (typeof mediaElement !== 'undefined') {
              if (mediaElement instanceof HTMLVideoElement) {
                  width = mediaElement.videoWidth;
                  height = mediaElement.videoHeight;
              }
              else if (mediaElement instanceof HTMLImageElement) {
                  width = mediaElement.naturalWidth || mediaElement.width;
                  height = mediaElement.naturalHeight || mediaElement.height;
              }
          }
          canvasElement.style.width = width + 'px';
          canvasElement.style.height = height + 'px';
          canvasElement.width = width;
          canvasElement.height = height;
          return canvasElement;
      };
      BrowserCodeReader.prototype.stopStreams = function () {
          if (this.stream) {
              this.stream.getVideoTracks().forEach(function (t) { return t.stop(); });
              this.stream = undefined;
          }
          if (this._stopAsyncDecode === false) {
              this.stopAsyncDecode();
          }
          if (this._stopContinuousDecode === false) {
              this.stopContinuousDecode();
          }
      };
      BrowserCodeReader.prototype.reset = function () {
          this.stopStreams();
          this._destroyVideoElement();
          this._destroyImageElement();
          this._destroyCaptureCanvas();
      };
      BrowserCodeReader.prototype._destroyVideoElement = function () {
          if (!this.videoElement) {
              return;
          }
          if (typeof this.videoEndedListener !== 'undefined') {
              this.videoElement.removeEventListener('ended', this.videoEndedListener);
          }
          if (typeof this.videoPlayingEventListener !== 'undefined') {
              this.videoElement.removeEventListener('playing', this.videoPlayingEventListener);
          }
          if (typeof this.videoCanPlayListener !== 'undefined') {
              this.videoElement.removeEventListener('loadedmetadata', this.videoCanPlayListener);
          }
          this.cleanVideoSource(this.videoElement);
          this.videoElement = undefined;
      };
      BrowserCodeReader.prototype._destroyImageElement = function () {
          if (!this.imageElement) {
              return;
          }
          if (undefined !== this.imageLoadedListener) {
              this.imageElement.removeEventListener('load', this.imageLoadedListener);
          }
          this.imageElement.src = undefined;
          this.imageElement.removeAttribute('src');
          this.imageElement = undefined;
      };
      BrowserCodeReader.prototype._destroyCaptureCanvas = function () {
          this.captureCanvasContext = undefined;
          this.captureCanvas = undefined;
      };
      BrowserCodeReader.prototype.addVideoSource = function (videoElement, stream) {
          try {
              videoElement.srcObject = stream;
          }
          catch (err) {
              videoElement.src = URL.createObjectURL(stream);
          }
      };
      BrowserCodeReader.prototype.cleanVideoSource = function (videoElement) {
          try {
              videoElement.srcObject = null;
          }
          catch (err) {
              videoElement.src = '';
          }
          this.videoElement.removeAttribute('src');
      };
      return BrowserCodeReader;
  }());

  var Result =  (function () {
      function Result(text, rawBytes, numBits, resultPoints, format, timestamp) {
          if (numBits === void 0) { numBits = rawBytes == null ? 0 : 8 * rawBytes.length; }
          if (timestamp === void 0) { timestamp = System.currentTimeMillis(); }
          this.text = text;
          this.rawBytes = rawBytes;
          this.numBits = numBits;
          this.resultPoints = resultPoints;
          this.format = format;
          this.timestamp = timestamp;
          this.text = text;
          this.rawBytes = rawBytes;
          if (undefined === numBits || null === numBits) {
              this.numBits = (rawBytes === null || rawBytes === undefined) ? 0 : 8 * rawBytes.length;
          }
          else {
              this.numBits = numBits;
          }
          this.resultPoints = resultPoints;
          this.format = format;
          this.resultMetadata = null;
          if (undefined === timestamp || null === timestamp) {
              this.timestamp = System.currentTimeMillis();
          }
          else {
              this.timestamp = timestamp;
          }
      }
      Result.prototype.getText = function () {
          return this.text;
      };
      Result.prototype.getRawBytes = function () {
          return this.rawBytes;
      };
      Result.prototype.getNumBits = function () {
          return this.numBits;
      };
      Result.prototype.getResultPoints = function () {
          return this.resultPoints;
      };
      Result.prototype.getBarcodeFormat = function () {
          return this.format;
      };
      Result.prototype.getResultMetadata = function () {
          return this.resultMetadata;
      };
      Result.prototype.putMetadata = function (type, value) {
          if (this.resultMetadata === null) {
              this.resultMetadata = new Map();
          }
          this.resultMetadata.set(type, value);
      };
      Result.prototype.putAllMetadata = function (metadata) {
          if (metadata !== null) {
              if (this.resultMetadata === null) {
                  this.resultMetadata = metadata;
              }
              else {
                  this.resultMetadata = new Map(metadata);
              }
          }
      };
      Result.prototype.addResultPoints = function (newPoints) {
          var oldPoints = this.resultPoints;
          if (oldPoints === null) {
              this.resultPoints = newPoints;
          }
          else if (newPoints !== null && newPoints.length > 0) {
              var allPoints = new Array(oldPoints.length + newPoints.length);
              System.arraycopy(oldPoints, 0, allPoints, 0, oldPoints.length);
              System.arraycopy(newPoints, 0, allPoints, oldPoints.length, newPoints.length);
              this.resultPoints = allPoints;
          }
      };
      Result.prototype.getTimestamp = function () {
          return this.timestamp;
      };
      Result.prototype.toString = function () {
          return this.text;
      };
      return Result;
  }());

  var BarcodeFormat;
  (function (BarcodeFormat) {
      BarcodeFormat[BarcodeFormat["AZTEC"] = 0] = "AZTEC";
      BarcodeFormat[BarcodeFormat["CODABAR"] = 1] = "CODABAR";
      BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
      BarcodeFormat[BarcodeFormat["CODE_93"] = 3] = "CODE_93";
      BarcodeFormat[BarcodeFormat["CODE_128"] = 4] = "CODE_128";
      BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 5] = "DATA_MATRIX";
      BarcodeFormat[BarcodeFormat["EAN_8"] = 6] = "EAN_8";
      BarcodeFormat[BarcodeFormat["EAN_13"] = 7] = "EAN_13";
      BarcodeFormat[BarcodeFormat["ITF"] = 8] = "ITF";
      BarcodeFormat[BarcodeFormat["MAXICODE"] = 9] = "MAXICODE";
      BarcodeFormat[BarcodeFormat["PDF_417"] = 10] = "PDF_417";
      BarcodeFormat[BarcodeFormat["QR_CODE"] = 11] = "QR_CODE";
      BarcodeFormat[BarcodeFormat["RSS_14"] = 12] = "RSS_14";
      BarcodeFormat[BarcodeFormat["RSS_EXPANDED"] = 13] = "RSS_EXPANDED";
      BarcodeFormat[BarcodeFormat["UPC_A"] = 14] = "UPC_A";
      BarcodeFormat[BarcodeFormat["UPC_E"] = 15] = "UPC_E";
      BarcodeFormat[BarcodeFormat["UPC_EAN_EXTENSION"] = 16] = "UPC_EAN_EXTENSION";
  })(BarcodeFormat || (BarcodeFormat = {}));
  var BarcodeFormat$1 = BarcodeFormat;

  var ResultMetadataType;
  (function (ResultMetadataType) {
      ResultMetadataType[ResultMetadataType["OTHER"] = 0] = "OTHER";
      ResultMetadataType[ResultMetadataType["ORIENTATION"] = 1] = "ORIENTATION";
      ResultMetadataType[ResultMetadataType["BYTE_SEGMENTS"] = 2] = "BYTE_SEGMENTS";
      ResultMetadataType[ResultMetadataType["ERROR_CORRECTION_LEVEL"] = 3] = "ERROR_CORRECTION_LEVEL";
      ResultMetadataType[ResultMetadataType["ISSUE_NUMBER"] = 4] = "ISSUE_NUMBER";
      ResultMetadataType[ResultMetadataType["SUGGESTED_PRICE"] = 5] = "SUGGESTED_PRICE";
      ResultMetadataType[ResultMetadataType["POSSIBLE_COUNTRY"] = 6] = "POSSIBLE_COUNTRY";
      ResultMetadataType[ResultMetadataType["UPC_EAN_EXTENSION"] = 7] = "UPC_EAN_EXTENSION";
      ResultMetadataType[ResultMetadataType["PDF417_EXTRA_METADATA"] = 8] = "PDF417_EXTRA_METADATA";
      ResultMetadataType[ResultMetadataType["STRUCTURED_APPEND_SEQUENCE"] = 9] = "STRUCTURED_APPEND_SEQUENCE";
      ResultMetadataType[ResultMetadataType["STRUCTURED_APPEND_PARITY"] = 10] = "STRUCTURED_APPEND_PARITY";
  })(ResultMetadataType || (ResultMetadataType = {}));
  var ResultMetadataType$1 = ResultMetadataType;

  var DecoderResult =  (function () {
      function DecoderResult(rawBytes, text, byteSegments, ecLevel, structuredAppendSequenceNumber, structuredAppendParity) {
          if (structuredAppendSequenceNumber === void 0) { structuredAppendSequenceNumber = -1; }
          if (structuredAppendParity === void 0) { structuredAppendParity = -1; }
          this.rawBytes = rawBytes;
          this.text = text;
          this.byteSegments = byteSegments;
          this.ecLevel = ecLevel;
          this.structuredAppendSequenceNumber = structuredAppendSequenceNumber;
          this.structuredAppendParity = structuredAppendParity;
          this.numBits = (rawBytes === undefined || rawBytes === null) ? 0 : 8 * rawBytes.length;
      }
      DecoderResult.prototype.getRawBytes = function () {
          return this.rawBytes;
      };
      DecoderResult.prototype.getNumBits = function () {
          return this.numBits;
      };
      DecoderResult.prototype.setNumBits = function (numBits ) {
          this.numBits = numBits;
      };
      DecoderResult.prototype.getText = function () {
          return this.text;
      };
      DecoderResult.prototype.getByteSegments = function () {
          return this.byteSegments;
      };
      DecoderResult.prototype.getECLevel = function () {
          return this.ecLevel;
      };
      DecoderResult.prototype.getErrorsCorrected = function () {
          return this.errorsCorrected;
      };
      DecoderResult.prototype.setErrorsCorrected = function (errorsCorrected ) {
          this.errorsCorrected = errorsCorrected;
      };
      DecoderResult.prototype.getErasures = function () {
          return this.erasures;
      };
      DecoderResult.prototype.setErasures = function (erasures ) {
          this.erasures = erasures;
      };
      DecoderResult.prototype.getOther = function () {
          return this.other;
      };
      DecoderResult.prototype.setOther = function (other) {
          this.other = other;
      };
      DecoderResult.prototype.hasStructuredAppend = function () {
          return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
      };
      DecoderResult.prototype.getStructuredAppendParity = function () {
          return this.structuredAppendParity;
      };
      DecoderResult.prototype.getStructuredAppendSequenceNumber = function () {
          return this.structuredAppendSequenceNumber;
      };
      return DecoderResult;
  }());

  var AbstractGenericGF =  (function () {
      function AbstractGenericGF() {
      }
      AbstractGenericGF.prototype.exp = function (a) {
          return this.expTable[a];
      };
      AbstractGenericGF.prototype.log = function (a ) {
          if (a === 0) {
              throw new IllegalArgumentException();
          }
          return this.logTable[a];
      };
      AbstractGenericGF.addOrSubtract = function (a , b ) {
          return a ^ b;
      };
      return AbstractGenericGF;
  }());

  var GenericGFPoly =  (function () {
      function GenericGFPoly(field, coefficients) {
          if (coefficients.length === 0) {
              throw new IllegalArgumentException();
          }
          this.field = field;
          var coefficientsLength = coefficients.length;
          if (coefficientsLength > 1 && coefficients[0] === 0) {
              var firstNonZero = 1;
              while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                  firstNonZero++;
              }
              if (firstNonZero === coefficientsLength) {
                  this.coefficients = Int32Array.from([0]);
              }
              else {
                  this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
                  System.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
              }
          }
          else {
              this.coefficients = coefficients;
          }
      }
      GenericGFPoly.prototype.getCoefficients = function () {
          return this.coefficients;
      };
      GenericGFPoly.prototype.getDegree = function () {
          return this.coefficients.length - 1;
      };
      GenericGFPoly.prototype.isZero = function () {
          return this.coefficients[0] === 0;
      };
      GenericGFPoly.prototype.getCoefficient = function (degree ) {
          return this.coefficients[this.coefficients.length - 1 - degree];
      };
      GenericGFPoly.prototype.evaluateAt = function (a ) {
          if (a === 0) {
              return this.getCoefficient(0);
          }
          var coefficients = this.coefficients;
          var result;
          if (a === 1) {
              result = 0;
              for (var i = 0, length_1 = coefficients.length; i !== length_1; i++) {
                  var coefficient = coefficients[i];
                  result = AbstractGenericGF.addOrSubtract(result, coefficient);
              }
              return result;
          }
          result = coefficients[0];
          var size = coefficients.length;
          var field = this.field;
          for (var i = 1; i < size; i++) {
              result = AbstractGenericGF.addOrSubtract(field.multiply(a, result), coefficients[i]);
          }
          return result;
      };
      GenericGFPoly.prototype.addOrSubtract = function (other) {
          if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException('GenericGFPolys do not have same GenericGF field');
          }
          if (this.isZero()) {
              return other;
          }
          if (other.isZero()) {
              return this;
          }
          var smallerCoefficients = this.coefficients;
          var largerCoefficients = other.coefficients;
          if (smallerCoefficients.length > largerCoefficients.length) {
              var temp = smallerCoefficients;
              smallerCoefficients = largerCoefficients;
              largerCoefficients = temp;
          }
          var sumDiff = new Int32Array(largerCoefficients.length);
          var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
          System.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
          for (var i = lengthDiff; i < largerCoefficients.length; i++) {
              sumDiff[i] = AbstractGenericGF.addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
          }
          return new GenericGFPoly(this.field, sumDiff);
      };
      GenericGFPoly.prototype.multiply = function (other) {
          if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException('GenericGFPolys do not have same GenericGF field');
          }
          if (this.isZero() || other.isZero()) {
              return this.field.getZero();
          }
          var aCoefficients = this.coefficients;
          var aLength = aCoefficients.length;
          var bCoefficients = other.coefficients;
          var bLength = bCoefficients.length;
          var product = new Int32Array(aLength + bLength - 1);
          var field = this.field;
          for (var i = 0; i < aLength; i++) {
              var aCoeff = aCoefficients[i];
              for (var j = 0; j < bLength; j++) {
                  product[i + j] = AbstractGenericGF.addOrSubtract(product[i + j], field.multiply(aCoeff, bCoefficients[j]));
              }
          }
          return new GenericGFPoly(field, product);
      };
      GenericGFPoly.prototype.multiplyScalar = function (scalar ) {
          if (scalar === 0) {
              return this.field.getZero();
          }
          if (scalar === 1) {
              return this;
          }
          var size = this.coefficients.length;
          var field = this.field;
          var product = new Int32Array(size);
          var coefficients = this.coefficients;
          for (var i = 0; i < size; i++) {
              product[i] = field.multiply(coefficients[i], scalar);
          }
          return new GenericGFPoly(field, product);
      };
      GenericGFPoly.prototype.multiplyByMonomial = function (degree , coefficient ) {
          if (degree < 0) {
              throw new IllegalArgumentException();
          }
          if (coefficient === 0) {
              return this.field.getZero();
          }
          var coefficients = this.coefficients;
          var size = coefficients.length;
          var product = new Int32Array(size + degree);
          var field = this.field;
          for (var i = 0; i < size; i++) {
              product[i] = field.multiply(coefficients[i], coefficient);
          }
          return new GenericGFPoly(field, product);
      };
      GenericGFPoly.prototype.divide = function (other) {
          if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException('GenericGFPolys do not have same GenericGF field');
          }
          if (other.isZero()) {
              throw new IllegalArgumentException('Divide by 0');
          }
          var field = this.field;
          var quotient = field.getZero();
          var remainder = this;
          var denominatorLeadingTerm = other.getCoefficient(other.getDegree());
          var inverseDenominatorLeadingTerm = field.inverse(denominatorLeadingTerm);
          while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
              var degreeDifference = remainder.getDegree() - other.getDegree();
              var scale = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
              var term = other.multiplyByMonomial(degreeDifference, scale);
              var iterationQuotient = field.buildMonomial(degreeDifference, scale);
              quotient = quotient.addOrSubtract(iterationQuotient);
              remainder = remainder.addOrSubtract(term);
          }
          return [quotient, remainder];
      };
      GenericGFPoly.prototype.toString = function () {
          var result = '';
          for (var degree = this.getDegree(); degree >= 0; degree--) {
              var coefficient = this.getCoefficient(degree);
              if (coefficient !== 0) {
                  if (coefficient < 0) {
                      result += ' - ';
                      coefficient = -coefficient;
                  }
                  else {
                      if (result.length > 0) {
                          result += ' + ';
                      }
                  }
                  if (degree === 0 || coefficient !== 1) {
                      var alphaPower = this.field.log(coefficient);
                      if (alphaPower === 0) {
                          result += '1';
                      }
                      else if (alphaPower === 1) {
                          result += 'a';
                      }
                      else {
                          result += 'a^';
                          result += alphaPower;
                      }
                  }
                  if (degree !== 0) {
                      if (degree === 1) {
                          result += 'x';
                      }
                      else {
                          result += 'x^';
                          result += degree;
                      }
                  }
              }
          }
          return result;
      };
      return GenericGFPoly;
  }());

  var __extends$R = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var ArithmeticException =  (function (_super) {
      __extends$R(ArithmeticException, _super);
      function ArithmeticException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ArithmeticException.kind = 'ArithmeticException';
      return ArithmeticException;
  }(Exception));

  var __extends$Q = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var GenericGF =  (function (_super) {
      __extends$Q(GenericGF, _super);
      function GenericGF(primitive , size , generatorBase ) {
          var _this = _super.call(this) || this;
          _this.primitive = primitive;
          _this.size = size;
          _this.generatorBase = generatorBase;
          var expTable = new Int32Array(size);
          var x = 1;
          for (var i = 0; i < size; i++) {
              expTable[i] = x;
              x *= 2;
              if (x >= size) {
                  x ^= primitive;
                  x &= size - 1;
              }
          }
          _this.expTable = expTable;
          var logTable = new Int32Array(size);
          for (var i = 0; i < size - 1; i++) {
              logTable[expTable[i]] = i;
          }
          _this.logTable = logTable;
          _this.zero = new GenericGFPoly(_this, Int32Array.from([0]));
          _this.one = new GenericGFPoly(_this, Int32Array.from([1]));
          return _this;
      }
      GenericGF.prototype.getZero = function () {
          return this.zero;
      };
      GenericGF.prototype.getOne = function () {
          return this.one;
      };
      GenericGF.prototype.buildMonomial = function (degree , coefficient ) {
          if (degree < 0) {
              throw new IllegalArgumentException();
          }
          if (coefficient === 0) {
              return this.zero;
          }
          var coefficients = new Int32Array(degree + 1);
          coefficients[0] = coefficient;
          return new GenericGFPoly(this, coefficients);
      };
      GenericGF.prototype.inverse = function (a ) {
          if (a === 0) {
              throw new ArithmeticException();
          }
          return this.expTable[this.size - this.logTable[a] - 1];
      };
      GenericGF.prototype.multiply = function (a , b ) {
          if (a === 0 || b === 0) {
              return 0;
          }
          return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
      };
      GenericGF.prototype.getSize = function () {
          return this.size;
      };
      GenericGF.prototype.getGeneratorBase = function () {
          return this.generatorBase;
      };
      GenericGF.prototype.toString = function () {
          return ('GF(0x' + Integer.toHexString(this.primitive) + ',' + this.size + ')');
      };
      GenericGF.prototype.equals = function (o) {
          return o === this;
      };
      GenericGF.AZTEC_DATA_12 = new GenericGF(0x1069, 4096, 1);
      GenericGF.AZTEC_DATA_10 = new GenericGF(0x409, 1024, 1);
      GenericGF.AZTEC_DATA_6 = new GenericGF(0x43, 64, 1);
      GenericGF.AZTEC_PARAM = new GenericGF(0x13, 16, 1);
      GenericGF.QR_CODE_FIELD_256 = new GenericGF(0x011d, 256, 0);
      GenericGF.DATA_MATRIX_FIELD_256 = new GenericGF(0x012d, 256, 1);
      GenericGF.AZTEC_DATA_8 = GenericGF.DATA_MATRIX_FIELD_256;
      GenericGF.MAXICODE_FIELD_64 = GenericGF.AZTEC_DATA_6;
      return GenericGF;
  }(AbstractGenericGF));

  var __extends$P = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var ReedSolomonException =  (function (_super) {
      __extends$P(ReedSolomonException, _super);
      function ReedSolomonException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ReedSolomonException.kind = 'ReedSolomonException';
      return ReedSolomonException;
  }(Exception));

  var __extends$O = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var IllegalStateException =  (function (_super) {
      __extends$O(IllegalStateException, _super);
      function IllegalStateException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      IllegalStateException.kind = 'IllegalStateException';
      return IllegalStateException;
  }(Exception));

  var ReedSolomonDecoder =  (function () {
      function ReedSolomonDecoder(field) {
          this.field = field;
      }
      ReedSolomonDecoder.prototype.decode = function (received, twoS ) {
          var field = this.field;
          var poly = new GenericGFPoly(field, received);
          var syndromeCoefficients = new Int32Array(twoS);
          var noError = true;
          for (var i = 0; i < twoS; i++) {
              var evalResult = poly.evaluateAt(field.exp(i + field.getGeneratorBase()));
              syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evalResult;
              if (evalResult !== 0) {
                  noError = false;
              }
          }
          if (noError) {
              return;
          }
          var syndrome = new GenericGFPoly(field, syndromeCoefficients);
          var sigmaOmega = this.runEuclideanAlgorithm(field.buildMonomial(twoS, 1), syndrome, twoS);
          var sigma = sigmaOmega[0];
          var omega = sigmaOmega[1];
          var errorLocations = this.findErrorLocations(sigma);
          var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations);
          for (var i = 0; i < errorLocations.length; i++) {
              var position = received.length - 1 - field.log(errorLocations[i]);
              if (position < 0) {
                  throw new ReedSolomonException('Bad error location');
              }
              received[position] = GenericGF.addOrSubtract(received[position], errorMagnitudes[i]);
          }
      };
      ReedSolomonDecoder.prototype.runEuclideanAlgorithm = function (a, b, R ) {
          if (a.getDegree() < b.getDegree()) {
              var temp = a;
              a = b;
              b = temp;
          }
          var field = this.field;
          var rLast = a;
          var r = b;
          var tLast = field.getZero();
          var t = field.getOne();
          while (r.getDegree() >= (R / 2 | 0)) {
              var rLastLast = rLast;
              var tLastLast = tLast;
              rLast = r;
              tLast = t;
              if (rLast.isZero()) {
                  throw new ReedSolomonException('r_{i-1} was zero');
              }
              r = rLastLast;
              var q = field.getZero();
              var denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
              var dltInverse = field.inverse(denominatorLeadingTerm);
              while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
                  var degreeDiff = r.getDegree() - rLast.getDegree();
                  var scale = field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
                  q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
                  r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
              }
              t = q.multiply(tLast).addOrSubtract(tLastLast);
              if (r.getDegree() >= rLast.getDegree()) {
                  throw new IllegalStateException('Division algorithm failed to reduce polynomial?');
              }
          }
          var sigmaTildeAtZero = t.getCoefficient(0);
          if (sigmaTildeAtZero === 0) {
              throw new ReedSolomonException('sigmaTilde(0) was zero');
          }
          var inverse = field.inverse(sigmaTildeAtZero);
          var sigma = t.multiplyScalar(inverse);
          var omega = r.multiplyScalar(inverse);
          return [sigma, omega];
      };
      ReedSolomonDecoder.prototype.findErrorLocations = function (errorLocator) {
          var numErrors = errorLocator.getDegree();
          if (numErrors === 1) {
              return Int32Array.from([errorLocator.getCoefficient(1)]);
          }
          var result = new Int32Array(numErrors);
          var e = 0;
          var field = this.field;
          for (var i = 1; i < field.getSize() && e < numErrors; i++) {
              if (errorLocator.evaluateAt(i) === 0) {
                  result[e] = field.inverse(i);
                  e++;
              }
          }
          if (e !== numErrors) {
              throw new ReedSolomonException('Error locator degree does not match number of roots');
          }
          return result;
      };
      ReedSolomonDecoder.prototype.findErrorMagnitudes = function (errorEvaluator, errorLocations) {
          var s = errorLocations.length;
          var result = new Int32Array(s);
          var field = this.field;
          for (var i = 0; i < s; i++) {
              var xiInverse = field.inverse(errorLocations[i]);
              var denominator = 1;
              for (var j = 0; j < s; j++) {
                  if (i !== j) {
                      var term = field.multiply(errorLocations[j], xiInverse);
                      var termPlus1 = (term & 0x1) === 0 ? term | 1 : term & ~1;
                      denominator = field.multiply(denominator, termPlus1);
                  }
              }
              result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
              if (field.getGeneratorBase() !== 0) {
                  result[i] = field.multiply(result[i], xiInverse);
              }
          }
          return result;
      };
      return ReedSolomonDecoder;
  }());

  var Table;
  (function (Table) {
      Table[Table["UPPER"] = 0] = "UPPER";
      Table[Table["LOWER"] = 1] = "LOWER";
      Table[Table["MIXED"] = 2] = "MIXED";
      Table[Table["DIGIT"] = 3] = "DIGIT";
      Table[Table["PUNCT"] = 4] = "PUNCT";
      Table[Table["BINARY"] = 5] = "BINARY";
  })(Table || (Table = {}));
  var Decoder$2 =  (function () {
      function Decoder() {
      }
      Decoder.prototype.decode = function (detectorResult) {
          this.ddata = detectorResult;
          var matrix = detectorResult.getBits();
          var rawbits = this.extractBits(matrix);
          var correctedBits = this.correctBits(rawbits);
          var rawBytes = Decoder.convertBoolArrayToByteArray(correctedBits);
          var result = Decoder.getEncodedData(correctedBits);
          var decoderResult = new DecoderResult(rawBytes, result, null, null);
          decoderResult.setNumBits(correctedBits.length);
          return decoderResult;
      };
      Decoder.highLevelDecode = function (correctedBits) {
          return this.getEncodedData(correctedBits);
      };
      Decoder.getEncodedData = function (correctedBits) {
          var endIndex = correctedBits.length;
          var latchTable = Table.UPPER;
          var shiftTable = Table.UPPER;
          var result = '';
          var index = 0;
          while (index < endIndex) {
              if (shiftTable === Table.BINARY) {
                  if (endIndex - index < 5) {
                      break;
                  }
                  var length_1 = Decoder.readCode(correctedBits, index, 5);
                  index += 5;
                  if (length_1 === 0) {
                      if (endIndex - index < 11) {
                          break;
                      }
                      length_1 = Decoder.readCode(correctedBits, index, 11) + 31;
                      index += 11;
                  }
                  for (var charCount = 0; charCount < length_1; charCount++) {
                      if (endIndex - index < 8) {
                          index = endIndex;
                          break;
                      }
                      var code = Decoder.readCode(correctedBits, index, 8);
                      result +=  StringUtils.castAsNonUtf8Char(code);
                      index += 8;
                  }
                  shiftTable = latchTable;
              }
              else {
                  var size = shiftTable === Table.DIGIT ? 4 : 5;
                  if (endIndex - index < size) {
                      break;
                  }
                  var code = Decoder.readCode(correctedBits, index, size);
                  index += size;
                  var str = Decoder.getCharacter(shiftTable, code);
                  if (str.startsWith('CTRL_')) {
                      latchTable = shiftTable;
                      shiftTable = Decoder.getTable(str.charAt(5));
                      if (str.charAt(6) === 'L') {
                          latchTable = shiftTable;
                      }
                  }
                  else {
                      result += str;
                      shiftTable = latchTable;
                  }
              }
          }
          return result;
      };
      Decoder.getTable = function (t) {
          switch (t) {
              case 'L':
                  return Table.LOWER;
              case 'P':
                  return Table.PUNCT;
              case 'M':
                  return Table.MIXED;
              case 'D':
                  return Table.DIGIT;
              case 'B':
                  return Table.BINARY;
              case 'U':
              default:
                  return Table.UPPER;
          }
      };
      Decoder.getCharacter = function (table, code) {
          switch (table) {
              case Table.UPPER:
                  return Decoder.UPPER_TABLE[code];
              case Table.LOWER:
                  return Decoder.LOWER_TABLE[code];
              case Table.MIXED:
                  return Decoder.MIXED_TABLE[code];
              case Table.PUNCT:
                  return Decoder.PUNCT_TABLE[code];
              case Table.DIGIT:
                  return Decoder.DIGIT_TABLE[code];
              default:
                  throw new IllegalStateException('Bad table');
          }
      };
      Decoder.prototype.correctBits = function (rawbits) {
          var gf;
          var codewordSize;
          if (this.ddata.getNbLayers() <= 2) {
              codewordSize = 6;
              gf = GenericGF.AZTEC_DATA_6;
          }
          else if (this.ddata.getNbLayers() <= 8) {
              codewordSize = 8;
              gf = GenericGF.AZTEC_DATA_8;
          }
          else if (this.ddata.getNbLayers() <= 22) {
              codewordSize = 10;
              gf = GenericGF.AZTEC_DATA_10;
          }
          else {
              codewordSize = 12;
              gf = GenericGF.AZTEC_DATA_12;
          }
          var numDataCodewords = this.ddata.getNbDatablocks();
          var numCodewords = rawbits.length / codewordSize;
          if (numCodewords < numDataCodewords) {
              throw new FormatException();
          }
          var offset = rawbits.length % codewordSize;
          var dataWords = new Int32Array(numCodewords);
          for (var i = 0; i < numCodewords; i++, offset += codewordSize) {
              dataWords[i] = Decoder.readCode(rawbits, offset, codewordSize);
          }
          try {
              var rsDecoder = new ReedSolomonDecoder(gf);
              rsDecoder.decode(dataWords, numCodewords - numDataCodewords);
          }
          catch (ex) {
              throw new FormatException(ex);
          }
          var mask = (1 << codewordSize) - 1;
          var stuffedBits = 0;
          for (var i = 0; i < numDataCodewords; i++) {
              var dataWord = dataWords[i];
              if (dataWord === 0 || dataWord === mask) {
                  throw new FormatException();
              }
              else if (dataWord === 1 || dataWord === mask - 1) {
                  stuffedBits++;
              }
          }
          var correctedBits = new Array(numDataCodewords * codewordSize - stuffedBits);
          var index = 0;
          for (var i = 0; i < numDataCodewords; i++) {
              var dataWord = dataWords[i];
              if (dataWord === 1 || dataWord === mask - 1) {
                  correctedBits.fill(dataWord > 1, index, index + codewordSize - 1);
                  index += codewordSize - 1;
              }
              else {
                  for (var bit = codewordSize - 1; bit >= 0; --bit) {
                      correctedBits[index++] = (dataWord & (1 << bit)) !== 0;
                  }
              }
          }
          return correctedBits;
      };
      Decoder.prototype.extractBits = function (matrix) {
          var compact = this.ddata.isCompact();
          var layers = this.ddata.getNbLayers();
          var baseMatrixSize = (compact ? 11 : 14) + layers * 4;
          var alignmentMap = new Int32Array(baseMatrixSize);
          var rawbits = new Array(this.totalBitsInLayer(layers, compact));
          if (compact) {
              for (var i = 0; i < alignmentMap.length; i++) {
                  alignmentMap[i] = i;
              }
          }
          else {
              var matrixSize = baseMatrixSize + 1 + 2 * Integer.truncDivision((Integer.truncDivision(baseMatrixSize, 2) - 1), 15);
              var origCenter = baseMatrixSize / 2;
              var center = Integer.truncDivision(matrixSize, 2);
              for (var i = 0; i < origCenter; i++) {
                  var newOffset = i + Integer.truncDivision(i, 15);
                  alignmentMap[origCenter - i - 1] = center - newOffset - 1;
                  alignmentMap[origCenter + i] = center + newOffset + 1;
              }
          }
          for (var i = 0, rowOffset = 0; i < layers; i++) {
              var rowSize = (layers - i) * 4 + (compact ? 9 : 12);
              var low = i * 2;
              var high = baseMatrixSize - 1 - low;
              for (var j = 0; j < rowSize; j++) {
                  var columnOffset = j * 2;
                  for (var k = 0; k < 2; k++) {
                      rawbits[rowOffset + columnOffset + k] =
                          matrix.get(alignmentMap[low + k], alignmentMap[low + j]);
                      rawbits[rowOffset + 2 * rowSize + columnOffset + k] =
                          matrix.get(alignmentMap[low + j], alignmentMap[high - k]);
                      rawbits[rowOffset + 4 * rowSize + columnOffset + k] =
                          matrix.get(alignmentMap[high - k], alignmentMap[high - j]);
                      rawbits[rowOffset + 6 * rowSize + columnOffset + k] =
                          matrix.get(alignmentMap[high - j], alignmentMap[low + k]);
                  }
              }
              rowOffset += rowSize * 8;
          }
          return rawbits;
      };
      Decoder.readCode = function (rawbits, startIndex, length) {
          var res = 0;
          for (var i = startIndex; i < startIndex + length; i++) {
              res <<= 1;
              if (rawbits[i]) {
                  res |= 0x01;
              }
          }
          return res;
      };
      Decoder.readByte = function (rawbits, startIndex) {
          var n = rawbits.length - startIndex;
          if (n >= 8) {
              return Decoder.readCode(rawbits, startIndex, 8);
          }
          return Decoder.readCode(rawbits, startIndex, n) << (8 - n);
      };
      Decoder.convertBoolArrayToByteArray = function (boolArr) {
          var byteArr = new Uint8Array((boolArr.length + 7) / 8);
          for (var i = 0; i < byteArr.length; i++) {
              byteArr[i] = Decoder.readByte(boolArr, 8 * i);
          }
          return byteArr;
      };
      Decoder.prototype.totalBitsInLayer = function (layers, compact) {
          return ((compact ? 88 : 112) + 16 * layers) * layers;
      };
      Decoder.UPPER_TABLE = [
          'CTRL_PS', ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
          'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'CTRL_LL', 'CTRL_ML', 'CTRL_DL', 'CTRL_BS'
      ];
      Decoder.LOWER_TABLE = [
          'CTRL_PS', ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
          'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'CTRL_US', 'CTRL_ML', 'CTRL_DL', 'CTRL_BS'
      ];
      Decoder.MIXED_TABLE = [
          'CTRL_PS', ' ', '\\1', '\\2', '\\3', '\\4', '\\5', '\\6', '\\7', '\b', '\t', '\n',
          '\\13', '\f', '\r', '\\33', '\\34', '\\35', '\\36', '\\37', '@', '\\', '^', '_',
          '`', '|', '~', '\\177', 'CTRL_LL', 'CTRL_UL', 'CTRL_PL', 'CTRL_BS'
      ];
      Decoder.PUNCT_TABLE = [
          '', '\r', '\r\n', '. ', ', ', ': ', '!', '"', '#', '$', '%', '&', '\'', '(', ')',
          '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', ']', '{', '}', 'CTRL_UL'
      ];
      Decoder.DIGIT_TABLE = [
          'CTRL_PS', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.', 'CTRL_UL', 'CTRL_US'
      ];
      return Decoder;
  }());

  var MathUtils =  (function () {
      function MathUtils() {
      }
      MathUtils.round = function (d ) {
          if (NaN === d)
              return 0;
          if (d <= Number.MIN_SAFE_INTEGER)
              return Number.MIN_SAFE_INTEGER;
          if (d >= Number.MAX_SAFE_INTEGER)
              return Number.MAX_SAFE_INTEGER;
          return  (d + (d < 0.0 ? -0.5 : 0.5)) | 0;
      };
      MathUtils.distance = function (aX , aY , bX , bY ) {
          var xDiff = aX - bX;
          var yDiff = aY - bY;
          return  Math.sqrt(xDiff * xDiff + yDiff * yDiff);
      };
      MathUtils.sum = function (array) {
          var count = 0;
          for (var i = 0, length_1 = array.length; i !== length_1; i++) {
              var a = array[i];
              count += a;
          }
          return count;
      };
      return MathUtils;
  }());

  var Float =  (function () {
      function Float() {
      }
      Float.floatToIntBits = function (f) {
          return f;
      };
      Float.MAX_VALUE = Number.MAX_SAFE_INTEGER;
      return Float;
  }());

  var ResultPoint =  (function () {
      function ResultPoint(x, y) {
          this.x = x;
          this.y = y;
      }
      ResultPoint.prototype.getX = function () {
          return this.x;
      };
      ResultPoint.prototype.getY = function () {
          return this.y;
      };
      ResultPoint.prototype.equals = function (other) {
          if (other instanceof ResultPoint) {
              var otherPoint = other;
              return this.x === otherPoint.x && this.y === otherPoint.y;
          }
          return false;
      };
      ResultPoint.prototype.hashCode = function () {
          return 31 * Float.floatToIntBits(this.x) + Float.floatToIntBits(this.y);
      };
      ResultPoint.prototype.toString = function () {
          return '(' + this.x + ',' + this.y + ')';
      };
      ResultPoint.orderBestPatterns = function (patterns) {
          var zeroOneDistance = this.distance(patterns[0], patterns[1]);
          var oneTwoDistance = this.distance(patterns[1], patterns[2]);
          var zeroTwoDistance = this.distance(patterns[0], patterns[2]);
          var pointA;
          var pointB;
          var pointC;
          if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
              pointB = patterns[0];
              pointA = patterns[1];
              pointC = patterns[2];
          }
          else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
              pointB = patterns[1];
              pointA = patterns[0];
              pointC = patterns[2];
          }
          else {
              pointB = patterns[2];
              pointA = patterns[0];
              pointC = patterns[1];
          }
          if (this.crossProductZ(pointA, pointB, pointC) < 0.0) {
              var temp = pointA;
              pointA = pointC;
              pointC = temp;
          }
          patterns[0] = pointA;
          patterns[1] = pointB;
          patterns[2] = pointC;
      };
      ResultPoint.distance = function (pattern1, pattern2) {
          return MathUtils.distance(pattern1.x, pattern1.y, pattern2.x, pattern2.y);
      };
      ResultPoint.crossProductZ = function (pointA, pointB, pointC) {
          var bX = pointB.x;
          var bY = pointB.y;
          return ((pointC.x - bX) * (pointA.y - bY)) - ((pointC.y - bY) * (pointA.x - bX));
      };
      return ResultPoint;
  }());

  var DetectorResult =  (function () {
      function DetectorResult(bits, points) {
          this.bits = bits;
          this.points = points;
      }
      DetectorResult.prototype.getBits = function () {
          return this.bits;
      };
      DetectorResult.prototype.getPoints = function () {
          return this.points;
      };
      return DetectorResult;
  }());

  var __extends$N = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AztecDetectorResult =  (function (_super) {
      __extends$N(AztecDetectorResult, _super);
      function AztecDetectorResult(bits, points, compact, nbDatablocks, nbLayers) {
          var _this = _super.call(this, bits, points) || this;
          _this.compact = compact;
          _this.nbDatablocks = nbDatablocks;
          _this.nbLayers = nbLayers;
          return _this;
      }
      AztecDetectorResult.prototype.getNbLayers = function () {
          return this.nbLayers;
      };
      AztecDetectorResult.prototype.getNbDatablocks = function () {
          return this.nbDatablocks;
      };
      AztecDetectorResult.prototype.isCompact = function () {
          return this.compact;
      };
      return AztecDetectorResult;
  }(DetectorResult));

  var WhiteRectangleDetector =  (function () {
      function WhiteRectangleDetector(image, initSize , x , y ) {
          this.image = image;
          this.height = image.getHeight();
          this.width = image.getWidth();
          if (undefined === initSize || null === initSize) {
              initSize = WhiteRectangleDetector.INIT_SIZE;
          }
          if (undefined === x || null === x) {
              x = image.getWidth() / 2 | 0;
          }
          if (undefined === y || null === y) {
              y = image.getHeight() / 2 | 0;
          }
          var halfsize = initSize / 2 | 0;
          this.leftInit = x - halfsize;
          this.rightInit = x + halfsize;
          this.upInit = y - halfsize;
          this.downInit = y + halfsize;
          if (this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) {
              throw new NotFoundException();
          }
      }
      WhiteRectangleDetector.prototype.detect = function () {
          var left = this.leftInit;
          var right = this.rightInit;
          var up = this.upInit;
          var down = this.downInit;
          var sizeExceeded = false;
          var aBlackPointFoundOnBorder = true;
          var atLeastOneBlackPointFoundOnBorder = false;
          var atLeastOneBlackPointFoundOnRight = false;
          var atLeastOneBlackPointFoundOnBottom = false;
          var atLeastOneBlackPointFoundOnLeft = false;
          var atLeastOneBlackPointFoundOnTop = false;
          var width = this.width;
          var height = this.height;
          while (aBlackPointFoundOnBorder) {
              aBlackPointFoundOnBorder = false;
              var rightBorderNotWhite = true;
              while ((rightBorderNotWhite || !atLeastOneBlackPointFoundOnRight) && right < width) {
                  rightBorderNotWhite = this.containsBlackPoint(up, down, right, false);
                  if (rightBorderNotWhite) {
                      right++;
                      aBlackPointFoundOnBorder = true;
                      atLeastOneBlackPointFoundOnRight = true;
                  }
                  else if (!atLeastOneBlackPointFoundOnRight) {
                      right++;
                  }
              }
              if (right >= width) {
                  sizeExceeded = true;
                  break;
              }
              var bottomBorderNotWhite = true;
              while ((bottomBorderNotWhite || !atLeastOneBlackPointFoundOnBottom) && down < height) {
                  bottomBorderNotWhite = this.containsBlackPoint(left, right, down, true);
                  if (bottomBorderNotWhite) {
                      down++;
                      aBlackPointFoundOnBorder = true;
                      atLeastOneBlackPointFoundOnBottom = true;
                  }
                  else if (!atLeastOneBlackPointFoundOnBottom) {
                      down++;
                  }
              }
              if (down >= height) {
                  sizeExceeded = true;
                  break;
              }
              var leftBorderNotWhite = true;
              while ((leftBorderNotWhite || !atLeastOneBlackPointFoundOnLeft) && left >= 0) {
                  leftBorderNotWhite = this.containsBlackPoint(up, down, left, false);
                  if (leftBorderNotWhite) {
                      left--;
                      aBlackPointFoundOnBorder = true;
                      atLeastOneBlackPointFoundOnLeft = true;
                  }
                  else if (!atLeastOneBlackPointFoundOnLeft) {
                      left--;
                  }
              }
              if (left < 0) {
                  sizeExceeded = true;
                  break;
              }
              var topBorderNotWhite = true;
              while ((topBorderNotWhite || !atLeastOneBlackPointFoundOnTop) && up >= 0) {
                  topBorderNotWhite = this.containsBlackPoint(left, right, up, true);
                  if (topBorderNotWhite) {
                      up--;
                      aBlackPointFoundOnBorder = true;
                      atLeastOneBlackPointFoundOnTop = true;
                  }
                  else if (!atLeastOneBlackPointFoundOnTop) {
                      up--;
                  }
              }
              if (up < 0) {
                  sizeExceeded = true;
                  break;
              }
              if (aBlackPointFoundOnBorder) {
                  atLeastOneBlackPointFoundOnBorder = true;
              }
          }
          if (!sizeExceeded && atLeastOneBlackPointFoundOnBorder) {
              var maxSize = right - left;
              var z = null;
              for (var i = 1; z === null && i < maxSize; i++) {
                  z = this.getBlackPointOnSegment(left, down - i, left + i, down);
              }
              if (z == null) {
                  throw new NotFoundException();
              }
              var t = null;
              for (var i = 1; t === null && i < maxSize; i++) {
                  t = this.getBlackPointOnSegment(left, up + i, left + i, up);
              }
              if (t == null) {
                  throw new NotFoundException();
              }
              var x = null;
              for (var i = 1; x === null && i < maxSize; i++) {
                  x = this.getBlackPointOnSegment(right, up + i, right - i, up);
              }
              if (x == null) {
                  throw new NotFoundException();
              }
              var y = null;
              for (var i = 1; y === null && i < maxSize; i++) {
                  y = this.getBlackPointOnSegment(right, down - i, right - i, down);
              }
              if (y == null) {
                  throw new NotFoundException();
              }
              return this.centerEdges(y, z, x, t);
          }
          else {
              throw new NotFoundException();
          }
      };
      WhiteRectangleDetector.prototype.getBlackPointOnSegment = function (aX , aY , bX , bY ) {
          var dist = MathUtils.round(MathUtils.distance(aX, aY, bX, bY));
          var xStep = (bX - aX) / dist;
          var yStep = (bY - aY) / dist;
          var image = this.image;
          for (var i = 0; i < dist; i++) {
              var x = MathUtils.round(aX + i * xStep);
              var y = MathUtils.round(aY + i * yStep);
              if (image.get(x, y)) {
                  return new ResultPoint(x, y);
              }
          }
          return null;
      };
      WhiteRectangleDetector.prototype.centerEdges = function (y, z, x, t) {
          var yi = y.getX();
          var yj = y.getY();
          var zi = z.getX();
          var zj = z.getY();
          var xi = x.getX();
          var xj = x.getY();
          var ti = t.getX();
          var tj = t.getY();
          var CORR = WhiteRectangleDetector.CORR;
          if (yi < this.width / 2.0) {
              return [
                  new ResultPoint(ti - CORR, tj + CORR),
                  new ResultPoint(zi + CORR, zj + CORR),
                  new ResultPoint(xi - CORR, xj - CORR),
                  new ResultPoint(yi + CORR, yj - CORR)
              ];
          }
          else {
              return [
                  new ResultPoint(ti + CORR, tj + CORR),
                  new ResultPoint(zi + CORR, zj - CORR),
                  new ResultPoint(xi - CORR, xj + CORR),
                  new ResultPoint(yi - CORR, yj - CORR)
              ];
          }
      };
      WhiteRectangleDetector.prototype.containsBlackPoint = function (a , b , fixed , horizontal) {
          var image = this.image;
          if (horizontal) {
              for (var x = a; x <= b; x++) {
                  if (image.get(x, fixed)) {
                      return true;
                  }
              }
          }
          else {
              for (var y = a; y <= b; y++) {
                  if (image.get(fixed, y)) {
                      return true;
                  }
              }
          }
          return false;
      };
      WhiteRectangleDetector.INIT_SIZE = 10;
      WhiteRectangleDetector.CORR = 1;
      return WhiteRectangleDetector;
  }());

  var GridSampler =  (function () {
      function GridSampler() {
      }
      GridSampler.checkAndNudgePoints = function (image, points) {
          var width = image.getWidth();
          var height = image.getHeight();
          var nudged = true;
          for (var offset = 0; offset < points.length && nudged; offset += 2) {
              var x = Math.floor(points[offset]);
              var y = Math.floor(points[offset + 1]);
              if (x < -1 || x > width || y < -1 || y > height) {
                  throw new NotFoundException();
              }
              nudged = false;
              if (x === -1) {
                  points[offset] = 0.0;
                  nudged = true;
              }
              else if (x === width) {
                  points[offset] = width - 1;
                  nudged = true;
              }
              if (y === -1) {
                  points[offset + 1] = 0.0;
                  nudged = true;
              }
              else if (y === height) {
                  points[offset + 1] = height - 1;
                  nudged = true;
              }
          }
          nudged = true;
          for (var offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
              var x = Math.floor(points[offset]);
              var y = Math.floor(points[offset + 1]);
              if (x < -1 || x > width || y < -1 || y > height) {
                  throw new NotFoundException();
              }
              nudged = false;
              if (x === -1) {
                  points[offset] = 0.0;
                  nudged = true;
              }
              else if (x === width) {
                  points[offset] = width - 1;
                  nudged = true;
              }
              if (y === -1) {
                  points[offset + 1] = 0.0;
                  nudged = true;
              }
              else if (y === height) {
                  points[offset + 1] = height - 1;
                  nudged = true;
              }
          }
      };
      return GridSampler;
  }());

  var PerspectiveTransform =  (function () {
      function PerspectiveTransform(a11 , a21 , a31 , a12 , a22 , a32 , a13 , a23 , a33 ) {
          this.a11 = a11;
          this.a21 = a21;
          this.a31 = a31;
          this.a12 = a12;
          this.a22 = a22;
          this.a32 = a32;
          this.a13 = a13;
          this.a23 = a23;
          this.a33 = a33;
      }
      PerspectiveTransform.quadrilateralToQuadrilateral = function (x0 , y0 , x1 , y1 , x2 , y2 , x3 , y3 , x0p , y0p , x1p , y1p , x2p , y2p , x3p , y3p ) {
          var qToS = PerspectiveTransform.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
          var sToQ = PerspectiveTransform.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
          return sToQ.times(qToS);
      };
      PerspectiveTransform.prototype.transformPoints = function (points) {
          var max = points.length;
          var a11 = this.a11;
          var a12 = this.a12;
          var a13 = this.a13;
          var a21 = this.a21;
          var a22 = this.a22;
          var a23 = this.a23;
          var a31 = this.a31;
          var a32 = this.a32;
          var a33 = this.a33;
          for (var i = 0; i < max; i += 2) {
              var x = points[i];
              var y = points[i + 1];
              var denominator = a13 * x + a23 * y + a33;
              points[i] = (a11 * x + a21 * y + a31) / denominator;
              points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
          }
      };
      PerspectiveTransform.prototype.transformPointsWithValues = function (xValues, yValues) {
          var a11 = this.a11;
          var a12 = this.a12;
          var a13 = this.a13;
          var a21 = this.a21;
          var a22 = this.a22;
          var a23 = this.a23;
          var a31 = this.a31;
          var a32 = this.a32;
          var a33 = this.a33;
          var n = xValues.length;
          for (var i = 0; i < n; i++) {
              var x = xValues[i];
              var y = yValues[i];
              var denominator = a13 * x + a23 * y + a33;
              xValues[i] = (a11 * x + a21 * y + a31) / denominator;
              yValues[i] = (a12 * x + a22 * y + a32) / denominator;
          }
      };
      PerspectiveTransform.squareToQuadrilateral = function (x0 , y0 , x1 , y1 , x2 , y2 , x3 , y3 ) {
          var dx3 = x0 - x1 + x2 - x3;
          var dy3 = y0 - y1 + y2 - y3;
          if (dx3 === 0.0 && dy3 === 0.0) {
              return new PerspectiveTransform(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0.0, 0.0, 1.0);
          }
          else {
              var dx1 = x1 - x2;
              var dx2 = x3 - x2;
              var dy1 = y1 - y2;
              var dy2 = y3 - y2;
              var denominator = dx1 * dy2 - dx2 * dy1;
              var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
              var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
              return new PerspectiveTransform(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1.0);
          }
      };
      PerspectiveTransform.quadrilateralToSquare = function (x0 , y0 , x1 , y1 , x2 , y2 , x3 , y3 ) {
          return PerspectiveTransform.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3).buildAdjoint();
      };
      PerspectiveTransform.prototype.buildAdjoint = function () {
          return new PerspectiveTransform(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
      };
      PerspectiveTransform.prototype.times = function (other) {
          return new PerspectiveTransform(this.a11 * other.a11 + this.a21 * other.a12 + this.a31 * other.a13, this.a11 * other.a21 + this.a21 * other.a22 + this.a31 * other.a23, this.a11 * other.a31 + this.a21 * other.a32 + this.a31 * other.a33, this.a12 * other.a11 + this.a22 * other.a12 + this.a32 * other.a13, this.a12 * other.a21 + this.a22 * other.a22 + this.a32 * other.a23, this.a12 * other.a31 + this.a22 * other.a32 + this.a32 * other.a33, this.a13 * other.a11 + this.a23 * other.a12 + this.a33 * other.a13, this.a13 * other.a21 + this.a23 * other.a22 + this.a33 * other.a23, this.a13 * other.a31 + this.a23 * other.a32 + this.a33 * other.a33);
      };
      return PerspectiveTransform;
  }());

  var __extends$M = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var DefaultGridSampler =  (function (_super) {
      __extends$M(DefaultGridSampler, _super);
      function DefaultGridSampler() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      DefaultGridSampler.prototype.sampleGrid = function (image, dimensionX , dimensionY , p1ToX , p1ToY , p2ToX , p2ToY , p3ToX , p3ToY , p4ToX , p4ToY , p1FromX , p1FromY , p2FromX , p2FromY , p3FromX , p3FromY , p4FromX , p4FromY ) {
          var transform = PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
          return this.sampleGridWithTransform(image, dimensionX, dimensionY, transform);
      };
      DefaultGridSampler.prototype.sampleGridWithTransform = function (image, dimensionX , dimensionY , transform) {
          if (dimensionX <= 0 || dimensionY <= 0) {
              throw new NotFoundException();
          }
          var bits = new BitMatrix(dimensionX, dimensionY);
          var points = new Float32Array(2 * dimensionX);
          for (var y = 0; y < dimensionY; y++) {
              var max = points.length;
              var iValue = y + 0.5;
              for (var x = 0; x < max; x += 2) {
                  points[x] = (x / 2) + 0.5;
                  points[x + 1] = iValue;
              }
              transform.transformPoints(points);
              GridSampler.checkAndNudgePoints(image, points);
              try {
                  for (var x = 0; x < max; x += 2) {
                      if (image.get(Math.floor(points[x]), Math.floor(points[x + 1]))) {
                          bits.set(x / 2, y);
                      }
                  }
              }
              catch (aioobe ) {
                  throw new NotFoundException();
              }
          }
          return bits;
      };
      return DefaultGridSampler;
  }(GridSampler));

  var GridSamplerInstance =  (function () {
      function GridSamplerInstance() {
      }
      GridSamplerInstance.setGridSampler = function (newGridSampler) {
          GridSamplerInstance.gridSampler = newGridSampler;
      };
      GridSamplerInstance.getInstance = function () {
          return GridSamplerInstance.gridSampler;
      };
      GridSamplerInstance.gridSampler = new DefaultGridSampler();
      return GridSamplerInstance;
  }());

  var Point =  (function () {
      function Point(x, y) {
          this.x = x;
          this.y = y;
      }
      Point.prototype.toResultPoint = function () {
          return new ResultPoint(this.getX(), this.getY());
      };
      Point.prototype.getX = function () {
          return this.x;
      };
      Point.prototype.getY = function () {
          return this.y;
      };
      return Point;
  }());
  var Detector$3 =  (function () {
      function Detector(image) {
          this.EXPECTED_CORNER_BITS = new Int32Array([
              0xee0,
              0x1dc,
              0x83b,
              0x707,
          ]);
          this.image = image;
      }
      Detector.prototype.detect = function () {
          return this.detectMirror(false);
      };
      Detector.prototype.detectMirror = function (isMirror) {
          var pCenter = this.getMatrixCenter();
          var bullsEyeCorners = this.getBullsEyeCorners(pCenter);
          if (isMirror) {
              var temp = bullsEyeCorners[0];
              bullsEyeCorners[0] = bullsEyeCorners[2];
              bullsEyeCorners[2] = temp;
          }
          this.extractParameters(bullsEyeCorners);
          var bits = this.sampleGrid(this.image, bullsEyeCorners[this.shift % 4], bullsEyeCorners[(this.shift + 1) % 4], bullsEyeCorners[(this.shift + 2) % 4], bullsEyeCorners[(this.shift + 3) % 4]);
          var corners = this.getMatrixCornerPoints(bullsEyeCorners);
          return new AztecDetectorResult(bits, corners, this.compact, this.nbDataBlocks, this.nbLayers);
      };
      Detector.prototype.extractParameters = function (bullsEyeCorners) {
          if (!this.isValidPoint(bullsEyeCorners[0]) || !this.isValidPoint(bullsEyeCorners[1]) ||
              !this.isValidPoint(bullsEyeCorners[2]) || !this.isValidPoint(bullsEyeCorners[3])) {
              throw new NotFoundException();
          }
          var length = 2 * this.nbCenterLayers;
          var sides = new Int32Array([
              this.sampleLine(bullsEyeCorners[0], bullsEyeCorners[1], length),
              this.sampleLine(bullsEyeCorners[1], bullsEyeCorners[2], length),
              this.sampleLine(bullsEyeCorners[2], bullsEyeCorners[3], length),
              this.sampleLine(bullsEyeCorners[3], bullsEyeCorners[0], length)
          ]);
          this.shift = this.getRotation(sides, length);
          var parameterData = 0;
          for (var i = 0; i < 4; i++) {
              var side = sides[(this.shift + i) % 4];
              if (this.compact) {
                  parameterData <<= 7;
                  parameterData += (side >> 1) & 0x7F;
              }
              else {
                  parameterData <<= 10;
                  parameterData += ((side >> 2) & (0x1f << 5)) + ((side >> 1) & 0x1F);
              }
          }
          var correctedData = this.getCorrectedParameterData(parameterData, this.compact);
          if (this.compact) {
              this.nbLayers = (correctedData >> 6) + 1;
              this.nbDataBlocks = (correctedData & 0x3F) + 1;
          }
          else {
              this.nbLayers = (correctedData >> 11) + 1;
              this.nbDataBlocks = (correctedData & 0x7FF) + 1;
          }
      };
      Detector.prototype.getRotation = function (sides, length) {
          var cornerBits = 0;
          sides.forEach(function (side, idx, arr) {
              var t = ((side >> (length - 2)) << 1) + (side & 1);
              cornerBits = (cornerBits << 3) + t;
          });
          cornerBits = ((cornerBits & 1) << 11) + (cornerBits >> 1);
          for (var shift = 0; shift < 4; shift++) {
              if (Integer.bitCount(cornerBits ^ this.EXPECTED_CORNER_BITS[shift]) <= 2) {
                  return shift;
              }
          }
          throw new NotFoundException();
      };
      Detector.prototype.getCorrectedParameterData = function (parameterData, compact) {
          var numCodewords;
          var numDataCodewords;
          if (compact) {
              numCodewords = 7;
              numDataCodewords = 2;
          }
          else {
              numCodewords = 10;
              numDataCodewords = 4;
          }
          var numECCodewords = numCodewords - numDataCodewords;
          var parameterWords = new Int32Array(numCodewords);
          for (var i = numCodewords - 1; i >= 0; --i) {
              parameterWords[i] = parameterData & 0xF;
              parameterData >>= 4;
          }
          try {
              var rsDecoder = new ReedSolomonDecoder(GenericGF.AZTEC_PARAM);
              rsDecoder.decode(parameterWords, numECCodewords);
          }
          catch (ignored) {
              throw new NotFoundException();
          }
          var result = 0;
          for (var i = 0; i < numDataCodewords; i++) {
              result = (result << 4) + parameterWords[i];
          }
          return result;
      };
      Detector.prototype.getBullsEyeCorners = function (pCenter) {
          var pina = pCenter;
          var pinb = pCenter;
          var pinc = pCenter;
          var pind = pCenter;
          var color = true;
          for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
              var pouta = this.getFirstDifferent(pina, color, 1, -1);
              var poutb = this.getFirstDifferent(pinb, color, 1, 1);
              var poutc = this.getFirstDifferent(pinc, color, -1, 1);
              var poutd = this.getFirstDifferent(pind, color, -1, -1);
              if (this.nbCenterLayers > 2) {
                  var q = (this.distancePoint(poutd, pouta) * this.nbCenterLayers) / (this.distancePoint(pind, pina) * (this.nbCenterLayers + 2));
                  if (q < 0.75 || q > 1.25 || !this.isWhiteOrBlackRectangle(pouta, poutb, poutc, poutd)) {
                      break;
                  }
              }
              pina = pouta;
              pinb = poutb;
              pinc = poutc;
              pind = poutd;
              color = !color;
          }
          if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7) {
              throw new NotFoundException();
          }
          this.compact = this.nbCenterLayers === 5;
          var pinax = new ResultPoint(pina.getX() + 0.5, pina.getY() - 0.5);
          var pinbx = new ResultPoint(pinb.getX() + 0.5, pinb.getY() + 0.5);
          var pincx = new ResultPoint(pinc.getX() - 0.5, pinc.getY() + 0.5);
          var pindx = new ResultPoint(pind.getX() - 0.5, pind.getY() - 0.5);
          return this.expandSquare([pinax, pinbx, pincx, pindx], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
      };
      Detector.prototype.getMatrixCenter = function () {
          var pointA;
          var pointB;
          var pointC;
          var pointD;
          try {
              var cornerPoints = new WhiteRectangleDetector(this.image).detect();
              pointA = cornerPoints[0];
              pointB = cornerPoints[1];
              pointC = cornerPoints[2];
              pointD = cornerPoints[3];
          }
          catch (e) {
              var cx_1 = this.image.getWidth() / 2;
              var cy_1 = this.image.getHeight() / 2;
              pointA = this.getFirstDifferent(new Point(cx_1 + 7, cy_1 - 7), false, 1, -1).toResultPoint();
              pointB = this.getFirstDifferent(new Point(cx_1 + 7, cy_1 + 7), false, 1, 1).toResultPoint();
              pointC = this.getFirstDifferent(new Point(cx_1 - 7, cy_1 + 7), false, -1, 1).toResultPoint();
              pointD = this.getFirstDifferent(new Point(cx_1 - 7, cy_1 - 7), false, -1, -1).toResultPoint();
          }
          var cx = MathUtils.round((pointA.getX() + pointD.getX() + pointB.getX() + pointC.getX()) / 4.0);
          var cy = MathUtils.round((pointA.getY() + pointD.getY() + pointB.getY() + pointC.getY()) / 4.0);
          try {
              var cornerPoints = new WhiteRectangleDetector(this.image, 15, cx, cy).detect();
              pointA = cornerPoints[0];
              pointB = cornerPoints[1];
              pointC = cornerPoints[2];
              pointD = cornerPoints[3];
          }
          catch (e) {
              pointA = this.getFirstDifferent(new Point(cx + 7, cy - 7), false, 1, -1).toResultPoint();
              pointB = this.getFirstDifferent(new Point(cx + 7, cy + 7), false, 1, 1).toResultPoint();
              pointC = this.getFirstDifferent(new Point(cx - 7, cy + 7), false, -1, 1).toResultPoint();
              pointD = this.getFirstDifferent(new Point(cx - 7, cy - 7), false, -1, -1).toResultPoint();
          }
          cx = MathUtils.round((pointA.getX() + pointD.getX() + pointB.getX() + pointC.getX()) / 4.0);
          cy = MathUtils.round((pointA.getY() + pointD.getY() + pointB.getY() + pointC.getY()) / 4.0);
          return new Point(cx, cy);
      };
      Detector.prototype.getMatrixCornerPoints = function (bullsEyeCorners) {
          return this.expandSquare(bullsEyeCorners, 2 * this.nbCenterLayers, this.getDimension());
      };
      Detector.prototype.sampleGrid = function (image, topLeft, topRight, bottomRight, bottomLeft) {
          var sampler = GridSamplerInstance.getInstance();
          var dimension = this.getDimension();
          var low = dimension / 2 - this.nbCenterLayers;
          var high = dimension / 2 + this.nbCenterLayers;
          return sampler.sampleGrid(image, dimension, dimension, low, low,
          high, low,
          high, high,
          low, high,
          topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRight.getX(), bottomRight.getY(), bottomLeft.getX(), bottomLeft.getY());
      };
      Detector.prototype.sampleLine = function (p1, p2, size) {
          var result = 0;
          var d = this.distanceResultPoint(p1, p2);
          var moduleSize = d / size;
          var px = p1.getX();
          var py = p1.getY();
          var dx = moduleSize * (p2.getX() - p1.getX()) / d;
          var dy = moduleSize * (p2.getY() - p1.getY()) / d;
          for (var i = 0; i < size; i++) {
              if (this.image.get(MathUtils.round(px + i * dx), MathUtils.round(py + i * dy))) {
                  result |= 1 << (size - i - 1);
              }
          }
          return result;
      };
      Detector.prototype.isWhiteOrBlackRectangle = function (p1, p2, p3, p4) {
          var corr = 3;
          p1 = new Point(p1.getX() - corr, p1.getY() + corr);
          p2 = new Point(p2.getX() - corr, p2.getY() - corr);
          p3 = new Point(p3.getX() + corr, p3.getY() - corr);
          p4 = new Point(p4.getX() + corr, p4.getY() + corr);
          var cInit = this.getColor(p4, p1);
          if (cInit === 0) {
              return false;
          }
          var c = this.getColor(p1, p2);
          if (c !== cInit) {
              return false;
          }
          c = this.getColor(p2, p3);
          if (c !== cInit) {
              return false;
          }
          c = this.getColor(p3, p4);
          return c === cInit;
      };
      Detector.prototype.getColor = function (p1, p2) {
          var d = this.distancePoint(p1, p2);
          var dx = (p2.getX() - p1.getX()) / d;
          var dy = (p2.getY() - p1.getY()) / d;
          var error = 0;
          var px = p1.getX();
          var py = p1.getY();
          var colorModel = this.image.get(p1.getX(), p1.getY());
          var iMax = Math.ceil(d);
          for (var i = 0; i < iMax; i++) {
              px += dx;
              py += dy;
              if (this.image.get(MathUtils.round(px), MathUtils.round(py)) !== colorModel) {
                  error++;
              }
          }
          var errRatio = error / d;
          if (errRatio > 0.1 && errRatio < 0.9) {
              return 0;
          }
          return (errRatio <= 0.1) === colorModel ? 1 : -1;
      };
      Detector.prototype.getFirstDifferent = function (init, color, dx, dy) {
          var x = init.getX() + dx;
          var y = init.getY() + dy;
          while (this.isValid(x, y) && this.image.get(x, y) === color) {
              x += dx;
              y += dy;
          }
          x -= dx;
          y -= dy;
          while (this.isValid(x, y) && this.image.get(x, y) === color) {
              x += dx;
          }
          x -= dx;
          while (this.isValid(x, y) && this.image.get(x, y) === color) {
              y += dy;
          }
          y -= dy;
          return new Point(x, y);
      };
      Detector.prototype.expandSquare = function (cornerPoints, oldSide, newSide) {
          var ratio = newSide / (2.0 * oldSide);
          var dx = cornerPoints[0].getX() - cornerPoints[2].getX();
          var dy = cornerPoints[0].getY() - cornerPoints[2].getY();
          var centerx = (cornerPoints[0].getX() + cornerPoints[2].getX()) / 2.0;
          var centery = (cornerPoints[0].getY() + cornerPoints[2].getY()) / 2.0;
          var result0 = new ResultPoint(centerx + ratio * dx, centery + ratio * dy);
          var result2 = new ResultPoint(centerx - ratio * dx, centery - ratio * dy);
          dx = cornerPoints[1].getX() - cornerPoints[3].getX();
          dy = cornerPoints[1].getY() - cornerPoints[3].getY();
          centerx = (cornerPoints[1].getX() + cornerPoints[3].getX()) / 2.0;
          centery = (cornerPoints[1].getY() + cornerPoints[3].getY()) / 2.0;
          var result1 = new ResultPoint(centerx + ratio * dx, centery + ratio * dy);
          var result3 = new ResultPoint(centerx - ratio * dx, centery - ratio * dy);
          var results = [result0, result1, result2, result3];
          return results;
      };
      Detector.prototype.isValid = function (x, y) {
          return x >= 0 && x < this.image.getWidth() && y > 0 && y < this.image.getHeight();
      };
      Detector.prototype.isValidPoint = function (point) {
          var x = MathUtils.round(point.getX());
          var y = MathUtils.round(point.getY());
          return this.isValid(x, y);
      };
      Detector.prototype.distancePoint = function (a, b) {
          return MathUtils.distance(a.getX(), a.getY(), b.getX(), b.getY());
      };
      Detector.prototype.distanceResultPoint = function (a, b) {
          return MathUtils.distance(a.getX(), a.getY(), b.getX(), b.getY());
      };
      Detector.prototype.getDimension = function () {
          if (this.compact) {
              return 4 * this.nbLayers + 11;
          }
          if (this.nbLayers <= 4) {
              return 4 * this.nbLayers + 15;
          }
          return 4 * this.nbLayers + 2 * (Integer.truncDivision((this.nbLayers - 4), 8) + 1) + 15;
      };
      return Detector;
  }());

  var AztecReader =  (function () {
      function AztecReader() {
      }
      AztecReader.prototype.decode = function (image, hints) {
          if (hints === void 0) { hints = null; }
          var exception = null;
          var detector = new Detector$3(image.getBlackMatrix());
          var points = null;
          var decoderResult = null;
          try {
              var detectorResult = detector.detectMirror(false);
              points = detectorResult.getPoints();
              this.reportFoundResultPoints(hints, points);
              decoderResult = new Decoder$2().decode(detectorResult);
          }
          catch (e) {
              exception = e;
          }
          if (decoderResult == null) {
              try {
                  var detectorResult = detector.detectMirror(true);
                  points = detectorResult.getPoints();
                  this.reportFoundResultPoints(hints, points);
                  decoderResult = new Decoder$2().decode(detectorResult);
              }
              catch (e) {
                  if (exception != null) {
                      throw exception;
                  }
                  throw e;
              }
          }
          var result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), decoderResult.getNumBits(), points, BarcodeFormat$1.AZTEC, System.currentTimeMillis());
          var byteSegments = decoderResult.getByteSegments();
          if (byteSegments != null) {
              result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
          }
          var ecLevel = decoderResult.getECLevel();
          if (ecLevel != null) {
              result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
          }
          return result;
      };
      AztecReader.prototype.reportFoundResultPoints = function (hints, points) {
          if (hints != null) {
              var rpcb_1 = hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
              if (rpcb_1 != null) {
                  points.forEach(function (point, idx, arr) {
                      rpcb_1.foundPossibleResultPoint(point);
                  });
              }
          }
      };
      AztecReader.prototype.reset = function () {
      };
      return AztecReader;
  }());

  var __extends$L = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  ((function (_super) {
      __extends$L(BrowserAztecCodeReader, _super);
      function BrowserAztecCodeReader(timeBetweenScansMillis) {
          if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
          return _super.call(this, new AztecReader(), timeBetweenScansMillis) || this;
      }
      return BrowserAztecCodeReader;
  })(BrowserCodeReader));

  var OneDReader =  (function () {
      function OneDReader() {
      }
      OneDReader.prototype.decode = function (image, hints) {
          try {
              return this.doDecode(image, hints);
          }
          catch (nfe) {
              var tryHarder = hints && (hints.get(DecodeHintType$1.TRY_HARDER) === true);
              if (tryHarder && image.isRotateSupported()) {
                  var rotatedImage = image.rotateCounterClockwise();
                  var result = this.doDecode(rotatedImage, hints);
                  var metadata = result.getResultMetadata();
                  var orientation_1 = 270;
                  if (metadata !== null && (metadata.get(ResultMetadataType$1.ORIENTATION) === true)) {
                      orientation_1 = (orientation_1 + metadata.get(ResultMetadataType$1.ORIENTATION) % 360);
                  }
                  result.putMetadata(ResultMetadataType$1.ORIENTATION, orientation_1);
                  var points = result.getResultPoints();
                  if (points !== null) {
                      var height = rotatedImage.getHeight();
                      for (var i = 0; i < points.length; i++) {
                          points[i] = new ResultPoint(height - points[i].getY() - 1, points[i].getX());
                      }
                  }
                  return result;
              }
              else {
                  throw new NotFoundException();
              }
          }
      };
      OneDReader.prototype.reset = function () {
      };
      OneDReader.prototype.doDecode = function (image, hints) {
          var width = image.getWidth();
          var height = image.getHeight();
          var row = new BitArray(width);
          var tryHarder = hints && (hints.get(DecodeHintType$1.TRY_HARDER) === true);
          var rowStep = Math.max(1, height >> (tryHarder ? 8 : 5));
          var maxLines;
          if (tryHarder) {
              maxLines = height;
          }
          else {
              maxLines = 15;
          }
          var middle = Math.trunc(height / 2);
          for (var x = 0; x < maxLines; x++) {
              var rowStepsAboveOrBelow = Math.trunc((x + 1) / 2);
              var isAbove = (x & 0x01) === 0;
              var rowNumber = middle + rowStep * (isAbove ? rowStepsAboveOrBelow : -rowStepsAboveOrBelow);
              if (rowNumber < 0 || rowNumber >= height) {
                  break;
              }
              try {
                  row = image.getBlackRow(rowNumber, row);
              }
              catch (ignored) {
                  continue;
              }
              var _loop_1 = function (attempt) {
                  if (attempt === 1) {
                      row.reverse();
                      if (hints && (hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK) === true)) {
                          var newHints_1 = new Map();
                          hints.forEach(function (hint, key) { return newHints_1.set(key, hint); });
                          newHints_1.delete(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
                          hints = newHints_1;
                      }
                  }
                  try {
                      var result = this_1.decodeRow(rowNumber, row, hints);
                      if (attempt === 1) {
                          result.putMetadata(ResultMetadataType$1.ORIENTATION, 180);
                          var points = result.getResultPoints();
                          if (points !== null) {
                              points[0] = new ResultPoint(width - points[0].getX() - 1, points[0].getY());
                              points[1] = new ResultPoint(width - points[1].getX() - 1, points[1].getY());
                          }
                      }
                      return { value: result };
                  }
                  catch (re) {
                  }
              };
              var this_1 = this;
              for (var attempt = 0; attempt < 2; attempt++) {
                  var state_1 = _loop_1(attempt);
                  if (typeof state_1 === "object")
                      return state_1.value;
              }
          }
          throw new NotFoundException();
      };
      OneDReader.recordPattern = function (row, start, counters) {
          var numCounters = counters.length;
          for (var index = 0; index < numCounters; index++)
              counters[index] = 0;
          var end = row.getSize();
          if (start >= end) {
              throw new NotFoundException();
          }
          var isWhite = !row.get(start);
          var counterPosition = 0;
          var i = start;
          while (i < end) {
              if (row.get(i) !== isWhite) {
                  counters[counterPosition]++;
              }
              else {
                  if (++counterPosition === numCounters) {
                      break;
                  }
                  else {
                      counters[counterPosition] = 1;
                      isWhite = !isWhite;
                  }
              }
              i++;
          }
          if (!(counterPosition === numCounters || (counterPosition === numCounters - 1 && i === end))) {
              throw new NotFoundException();
          }
      };
      OneDReader.recordPatternInReverse = function (row, start, counters) {
          var numTransitionsLeft = counters.length;
          var last = row.get(start);
          while (start > 0 && numTransitionsLeft >= 0) {
              if (row.get(--start) !== last) {
                  numTransitionsLeft--;
                  last = !last;
              }
          }
          if (numTransitionsLeft >= 0) {
              throw new NotFoundException();
          }
          OneDReader.recordPattern(row, start + 1, counters);
      };
      OneDReader.patternMatchVariance = function (counters, pattern, maxIndividualVariance) {
          var numCounters = counters.length;
          var total = 0;
          var patternLength = 0;
          for (var i = 0; i < numCounters; i++) {
              total += counters[i];
              patternLength += pattern[i];
          }
          if (total < patternLength) {
              return Number.POSITIVE_INFINITY;
          }
          var unitBarWidth = total / patternLength;
          maxIndividualVariance *= unitBarWidth;
          var totalVariance = 0.0;
          for (var x = 0; x < numCounters; x++) {
              var counter = counters[x];
              var scaledPattern = pattern[x] * unitBarWidth;
              var variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
              if (variance > maxIndividualVariance) {
                  return Number.POSITIVE_INFINITY;
              }
              totalVariance += variance;
          }
          return totalVariance / total;
      };
      return OneDReader;
  }());

  var __extends$K = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var Code128Reader =  (function (_super) {
      __extends$K(Code128Reader, _super);
      function Code128Reader() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Code128Reader.findStartPattern = function (row) {
          var width = row.getSize();
          var rowOffset = row.getNextSet(0);
          var counterPosition = 0;
          var counters = Int32Array.from([0, 0, 0, 0, 0, 0]);
          var patternStart = rowOffset;
          var isWhite = false;
          var patternLength = 6;
          for (var i = rowOffset; i < width; i++) {
              if (row.get(i) !== isWhite) {
                  counters[counterPosition]++;
              }
              else {
                  if (counterPosition === (patternLength - 1)) {
                      var bestVariance = Code128Reader.MAX_AVG_VARIANCE;
                      var bestMatch = -1;
                      for (var startCode = Code128Reader.CODE_START_A; startCode <= Code128Reader.CODE_START_C; startCode++) {
                          var variance = OneDReader.patternMatchVariance(counters, Code128Reader.CODE_PATTERNS[startCode], Code128Reader.MAX_INDIVIDUAL_VARIANCE);
                          if (variance < bestVariance) {
                              bestVariance = variance;
                              bestMatch = startCode;
                          }
                      }
                      if (bestMatch >= 0 &&
                          row.isRange(Math.max(0, patternStart - (i - patternStart) / 2), patternStart, false)) {
                          return Int32Array.from([patternStart, i, bestMatch]);
                      }
                      patternStart += counters[0] + counters[1];
                      counters = counters.slice(2, counters.length - 1);
                      counters[counterPosition - 1] = 0;
                      counters[counterPosition] = 0;
                      counterPosition--;
                  }
                  else {
                      counterPosition++;
                  }
                  counters[counterPosition] = 1;
                  isWhite = !isWhite;
              }
          }
          throw new NotFoundException();
      };
      Code128Reader.decodeCode = function (row, counters, rowOffset) {
          OneDReader.recordPattern(row, rowOffset, counters);
          var bestVariance = Code128Reader.MAX_AVG_VARIANCE;
          var bestMatch = -1;
          for (var d = 0; d < Code128Reader.CODE_PATTERNS.length; d++) {
              var pattern = Code128Reader.CODE_PATTERNS[d];
              var variance = this.patternMatchVariance(counters, pattern, Code128Reader.MAX_INDIVIDUAL_VARIANCE);
              if (variance < bestVariance) {
                  bestVariance = variance;
                  bestMatch = d;
              }
          }
          if (bestMatch >= 0) {
              return bestMatch;
          }
          else {
              throw new NotFoundException();
          }
      };
      Code128Reader.prototype.decodeRow = function (rowNumber, row, hints) {
          var convertFNC1 = hints && (hints.get(DecodeHintType$1.ASSUME_GS1) === true);
          var startPatternInfo = Code128Reader.findStartPattern(row);
          var startCode = startPatternInfo[2];
          var currentRawCodesIndex = 0;
          var rawCodes = new Uint8Array(20);
          rawCodes[currentRawCodesIndex++] = startCode;
          var codeSet;
          switch (startCode) {
              case Code128Reader.CODE_START_A:
                  codeSet = Code128Reader.CODE_CODE_A;
                  break;
              case Code128Reader.CODE_START_B:
                  codeSet = Code128Reader.CODE_CODE_B;
                  break;
              case Code128Reader.CODE_START_C:
                  codeSet = Code128Reader.CODE_CODE_C;
                  break;
              default:
                  throw new FormatException();
          }
          var done = false;
          var isNextShifted = false;
          var result = '';
          var lastStart = startPatternInfo[0];
          var nextStart = startPatternInfo[1];
          var counters = Int32Array.from([0, 0, 0, 0, 0, 0]);
          var lastCode = 0;
          var code = 0;
          var checksumTotal = startCode;
          var multiplier = 0;
          var lastCharacterWasPrintable = true;
          var upperMode = false;
          var shiftUpperMode = false;
          while (!done) {
              var unshift = isNextShifted;
              isNextShifted = false;
              lastCode = code;
              code = Code128Reader.decodeCode(row, counters, nextStart);
              rawCodes[currentRawCodesIndex++] = code;
              if (code !== Code128Reader.CODE_STOP) {
                  lastCharacterWasPrintable = true;
              }
              if (code !== Code128Reader.CODE_STOP) {
                  multiplier++;
                  checksumTotal += multiplier * code;
              }
              lastStart = nextStart;
              nextStart += counters.reduce(function (previous, current) { return previous + current; }, 0);
              switch (code) {
                  case Code128Reader.CODE_START_A:
                  case Code128Reader.CODE_START_B:
                  case Code128Reader.CODE_START_C:
                      throw new FormatException();
              }
              switch (codeSet) {
                  case Code128Reader.CODE_CODE_A:
                      if (code < 64) {
                          if (shiftUpperMode === upperMode) {
                              result += String.fromCharCode((' '.charCodeAt(0) + code));
                          }
                          else {
                              result += String.fromCharCode((' '.charCodeAt(0) + code + 128));
                          }
                          shiftUpperMode = false;
                      }
                      else if (code < 96) {
                          if (shiftUpperMode === upperMode) {
                              result += String.fromCharCode((code - 64));
                          }
                          else {
                              result += String.fromCharCode((code + 64));
                          }
                          shiftUpperMode = false;
                      }
                      else {
                          if (code !== Code128Reader.CODE_STOP) {
                              lastCharacterWasPrintable = false;
                          }
                          switch (code) {
                              case Code128Reader.CODE_FNC_1:
                                  if (convertFNC1) {
                                      if (result.length === 0) {
                                          result += ']C1';
                                      }
                                      else {
                                          result += String.fromCharCode(29);
                                      }
                                  }
                                  break;
                              case Code128Reader.CODE_FNC_2:
                              case Code128Reader.CODE_FNC_3:
                                  break;
                              case Code128Reader.CODE_FNC_4_A:
                                  if (!upperMode && shiftUpperMode) {
                                      upperMode = true;
                                      shiftUpperMode = false;
                                  }
                                  else if (upperMode && shiftUpperMode) {
                                      upperMode = false;
                                      shiftUpperMode = false;
                                  }
                                  else {
                                      shiftUpperMode = true;
                                  }
                                  break;
                              case Code128Reader.CODE_SHIFT:
                                  isNextShifted = true;
                                  codeSet = Code128Reader.CODE_CODE_B;
                                  break;
                              case Code128Reader.CODE_CODE_B:
                                  codeSet = Code128Reader.CODE_CODE_B;
                                  break;
                              case Code128Reader.CODE_CODE_C:
                                  codeSet = Code128Reader.CODE_CODE_C;
                                  break;
                              case Code128Reader.CODE_STOP:
                                  done = true;
                                  break;
                          }
                      }
                      break;
                  case Code128Reader.CODE_CODE_B:
                      if (code < 96) {
                          if (shiftUpperMode === upperMode) {
                              result += String.fromCharCode((' '.charCodeAt(0) + code));
                          }
                          else {
                              result += String.fromCharCode((' '.charCodeAt(0) + code + 128));
                          }
                          shiftUpperMode = false;
                      }
                      else {
                          if (code !== Code128Reader.CODE_STOP) {
                              lastCharacterWasPrintable = false;
                          }
                          switch (code) {
                              case Code128Reader.CODE_FNC_1:
                                  if (convertFNC1) {
                                      if (result.length === 0) {
                                          result += ']C1';
                                      }
                                      else {
                                          result += String.fromCharCode(29);
                                      }
                                  }
                                  break;
                              case Code128Reader.CODE_FNC_2:
                              case Code128Reader.CODE_FNC_3:
                                  break;
                              case Code128Reader.CODE_FNC_4_B:
                                  if (!upperMode && shiftUpperMode) {
                                      upperMode = true;
                                      shiftUpperMode = false;
                                  }
                                  else if (upperMode && shiftUpperMode) {
                                      upperMode = false;
                                      shiftUpperMode = false;
                                  }
                                  else {
                                      shiftUpperMode = true;
                                  }
                                  break;
                              case Code128Reader.CODE_SHIFT:
                                  isNextShifted = true;
                                  codeSet = Code128Reader.CODE_CODE_A;
                                  break;
                              case Code128Reader.CODE_CODE_A:
                                  codeSet = Code128Reader.CODE_CODE_A;
                                  break;
                              case Code128Reader.CODE_CODE_C:
                                  codeSet = Code128Reader.CODE_CODE_C;
                                  break;
                              case Code128Reader.CODE_STOP:
                                  done = true;
                                  break;
                          }
                      }
                      break;
                  case Code128Reader.CODE_CODE_C:
                      if (code < 100) {
                          if (code < 10) {
                              result += '0';
                          }
                          result += code;
                      }
                      else {
                          if (code !== Code128Reader.CODE_STOP) {
                              lastCharacterWasPrintable = false;
                          }
                          switch (code) {
                              case Code128Reader.CODE_FNC_1:
                                  if (convertFNC1) {
                                      if (result.length === 0) {
                                          result += ']C1';
                                      }
                                      else {
                                          result += String.fromCharCode(29);
                                      }
                                  }
                                  break;
                              case Code128Reader.CODE_CODE_A:
                                  codeSet = Code128Reader.CODE_CODE_A;
                                  break;
                              case Code128Reader.CODE_CODE_B:
                                  codeSet = Code128Reader.CODE_CODE_B;
                                  break;
                              case Code128Reader.CODE_STOP:
                                  done = true;
                                  break;
                          }
                      }
                      break;
              }
              if (unshift) {
                  codeSet = codeSet === Code128Reader.CODE_CODE_A ? Code128Reader.CODE_CODE_B : Code128Reader.CODE_CODE_A;
              }
          }
          var lastPatternSize = nextStart - lastStart;
          nextStart = row.getNextUnset(nextStart);
          if (!row.isRange(nextStart, Math.min(row.getSize(), nextStart + (nextStart - lastStart) / 2), false)) {
              throw new NotFoundException();
          }
          checksumTotal -= multiplier * lastCode;
          if (checksumTotal % 103 !== lastCode) {
              throw new ChecksumException();
          }
          var resultLength = result.length;
          if (resultLength === 0) {
              throw new NotFoundException();
          }
          if (resultLength > 0 && lastCharacterWasPrintable) {
              if (codeSet === Code128Reader.CODE_CODE_C) {
                  result = result.substring(0, resultLength - 2);
              }
              else {
                  result = result.substring(0, resultLength - 1);
              }
          }
          var left = (startPatternInfo[1] + startPatternInfo[0]) / 2.0;
          var right = lastStart + lastPatternSize / 2.0;
          var rawCodesSize = rawCodes.length;
          var rawBytes = new Uint8Array(rawCodesSize);
          for (var i = 0; i < rawCodesSize; i++) {
              rawBytes[i] = rawCodes[i];
          }
          var points = [new ResultPoint(left, rowNumber), new ResultPoint(right, rowNumber)];
          return new Result(result, rawBytes, 0, points, BarcodeFormat$1.CODE_128, new Date().getTime());
      };
      Code128Reader.CODE_PATTERNS = [
          Int32Array.from([2, 1, 2, 2, 2, 2]),
          Int32Array.from([2, 2, 2, 1, 2, 2]),
          Int32Array.from([2, 2, 2, 2, 2, 1]),
          Int32Array.from([1, 2, 1, 2, 2, 3]),
          Int32Array.from([1, 2, 1, 3, 2, 2]),
          Int32Array.from([1, 3, 1, 2, 2, 2]),
          Int32Array.from([1, 2, 2, 2, 1, 3]),
          Int32Array.from([1, 2, 2, 3, 1, 2]),
          Int32Array.from([1, 3, 2, 2, 1, 2]),
          Int32Array.from([2, 2, 1, 2, 1, 3]),
          Int32Array.from([2, 2, 1, 3, 1, 2]),
          Int32Array.from([2, 3, 1, 2, 1, 2]),
          Int32Array.from([1, 1, 2, 2, 3, 2]),
          Int32Array.from([1, 2, 2, 1, 3, 2]),
          Int32Array.from([1, 2, 2, 2, 3, 1]),
          Int32Array.from([1, 1, 3, 2, 2, 2]),
          Int32Array.from([1, 2, 3, 1, 2, 2]),
          Int32Array.from([1, 2, 3, 2, 2, 1]),
          Int32Array.from([2, 2, 3, 2, 1, 1]),
          Int32Array.from([2, 2, 1, 1, 3, 2]),
          Int32Array.from([2, 2, 1, 2, 3, 1]),
          Int32Array.from([2, 1, 3, 2, 1, 2]),
          Int32Array.from([2, 2, 3, 1, 1, 2]),
          Int32Array.from([3, 1, 2, 1, 3, 1]),
          Int32Array.from([3, 1, 1, 2, 2, 2]),
          Int32Array.from([3, 2, 1, 1, 2, 2]),
          Int32Array.from([3, 2, 1, 2, 2, 1]),
          Int32Array.from([3, 1, 2, 2, 1, 2]),
          Int32Array.from([3, 2, 2, 1, 1, 2]),
          Int32Array.from([3, 2, 2, 2, 1, 1]),
          Int32Array.from([2, 1, 2, 1, 2, 3]),
          Int32Array.from([2, 1, 2, 3, 2, 1]),
          Int32Array.from([2, 3, 2, 1, 2, 1]),
          Int32Array.from([1, 1, 1, 3, 2, 3]),
          Int32Array.from([1, 3, 1, 1, 2, 3]),
          Int32Array.from([1, 3, 1, 3, 2, 1]),
          Int32Array.from([1, 1, 2, 3, 1, 3]),
          Int32Array.from([1, 3, 2, 1, 1, 3]),
          Int32Array.from([1, 3, 2, 3, 1, 1]),
          Int32Array.from([2, 1, 1, 3, 1, 3]),
          Int32Array.from([2, 3, 1, 1, 1, 3]),
          Int32Array.from([2, 3, 1, 3, 1, 1]),
          Int32Array.from([1, 1, 2, 1, 3, 3]),
          Int32Array.from([1, 1, 2, 3, 3, 1]),
          Int32Array.from([1, 3, 2, 1, 3, 1]),
          Int32Array.from([1, 1, 3, 1, 2, 3]),
          Int32Array.from([1, 1, 3, 3, 2, 1]),
          Int32Array.from([1, 3, 3, 1, 2, 1]),
          Int32Array.from([3, 1, 3, 1, 2, 1]),
          Int32Array.from([2, 1, 1, 3, 3, 1]),
          Int32Array.from([2, 3, 1, 1, 3, 1]),
          Int32Array.from([2, 1, 3, 1, 1, 3]),
          Int32Array.from([2, 1, 3, 3, 1, 1]),
          Int32Array.from([2, 1, 3, 1, 3, 1]),
          Int32Array.from([3, 1, 1, 1, 2, 3]),
          Int32Array.from([3, 1, 1, 3, 2, 1]),
          Int32Array.from([3, 3, 1, 1, 2, 1]),
          Int32Array.from([3, 1, 2, 1, 1, 3]),
          Int32Array.from([3, 1, 2, 3, 1, 1]),
          Int32Array.from([3, 3, 2, 1, 1, 1]),
          Int32Array.from([3, 1, 4, 1, 1, 1]),
          Int32Array.from([2, 2, 1, 4, 1, 1]),
          Int32Array.from([4, 3, 1, 1, 1, 1]),
          Int32Array.from([1, 1, 1, 2, 2, 4]),
          Int32Array.from([1, 1, 1, 4, 2, 2]),
          Int32Array.from([1, 2, 1, 1, 2, 4]),
          Int32Array.from([1, 2, 1, 4, 2, 1]),
          Int32Array.from([1, 4, 1, 1, 2, 2]),
          Int32Array.from([1, 4, 1, 2, 2, 1]),
          Int32Array.from([1, 1, 2, 2, 1, 4]),
          Int32Array.from([1, 1, 2, 4, 1, 2]),
          Int32Array.from([1, 2, 2, 1, 1, 4]),
          Int32Array.from([1, 2, 2, 4, 1, 1]),
          Int32Array.from([1, 4, 2, 1, 1, 2]),
          Int32Array.from([1, 4, 2, 2, 1, 1]),
          Int32Array.from([2, 4, 1, 2, 1, 1]),
          Int32Array.from([2, 2, 1, 1, 1, 4]),
          Int32Array.from([4, 1, 3, 1, 1, 1]),
          Int32Array.from([2, 4, 1, 1, 1, 2]),
          Int32Array.from([1, 3, 4, 1, 1, 1]),
          Int32Array.from([1, 1, 1, 2, 4, 2]),
          Int32Array.from([1, 2, 1, 1, 4, 2]),
          Int32Array.from([1, 2, 1, 2, 4, 1]),
          Int32Array.from([1, 1, 4, 2, 1, 2]),
          Int32Array.from([1, 2, 4, 1, 1, 2]),
          Int32Array.from([1, 2, 4, 2, 1, 1]),
          Int32Array.from([4, 1, 1, 2, 1, 2]),
          Int32Array.from([4, 2, 1, 1, 1, 2]),
          Int32Array.from([4, 2, 1, 2, 1, 1]),
          Int32Array.from([2, 1, 2, 1, 4, 1]),
          Int32Array.from([2, 1, 4, 1, 2, 1]),
          Int32Array.from([4, 1, 2, 1, 2, 1]),
          Int32Array.from([1, 1, 1, 1, 4, 3]),
          Int32Array.from([1, 1, 1, 3, 4, 1]),
          Int32Array.from([1, 3, 1, 1, 4, 1]),
          Int32Array.from([1, 1, 4, 1, 1, 3]),
          Int32Array.from([1, 1, 4, 3, 1, 1]),
          Int32Array.from([4, 1, 1, 1, 1, 3]),
          Int32Array.from([4, 1, 1, 3, 1, 1]),
          Int32Array.from([1, 1, 3, 1, 4, 1]),
          Int32Array.from([1, 1, 4, 1, 3, 1]),
          Int32Array.from([3, 1, 1, 1, 4, 1]),
          Int32Array.from([4, 1, 1, 1, 3, 1]),
          Int32Array.from([2, 1, 1, 4, 1, 2]),
          Int32Array.from([2, 1, 1, 2, 1, 4]),
          Int32Array.from([2, 1, 1, 2, 3, 2]),
          Int32Array.from([2, 3, 3, 1, 1, 1, 2]),
      ];
      Code128Reader.MAX_AVG_VARIANCE = 0.25;
      Code128Reader.MAX_INDIVIDUAL_VARIANCE = 0.7;
      Code128Reader.CODE_SHIFT = 98;
      Code128Reader.CODE_CODE_C = 99;
      Code128Reader.CODE_CODE_B = 100;
      Code128Reader.CODE_CODE_A = 101;
      Code128Reader.CODE_FNC_1 = 102;
      Code128Reader.CODE_FNC_2 = 97;
      Code128Reader.CODE_FNC_3 = 96;
      Code128Reader.CODE_FNC_4_A = 101;
      Code128Reader.CODE_FNC_4_B = 100;
      Code128Reader.CODE_START_A = 103;
      Code128Reader.CODE_START_B = 104;
      Code128Reader.CODE_START_C = 105;
      Code128Reader.CODE_STOP = 106;
      return Code128Reader;
  }(OneDReader));

  var __extends$J = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$A = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var Code39Reader =  (function (_super) {
      __extends$J(Code39Reader, _super);
      function Code39Reader(usingCheckDigit, extendedMode) {
          if (usingCheckDigit === void 0) { usingCheckDigit = false; }
          if (extendedMode === void 0) { extendedMode = false; }
          var _this = _super.call(this) || this;
          _this.usingCheckDigit = usingCheckDigit;
          _this.extendedMode = extendedMode;
          _this.decodeRowResult = '';
          _this.counters = new Int32Array(9);
          return _this;
      }
      Code39Reader.prototype.decodeRow = function (rowNumber, row, hints) {
          var e_1, _a, e_2, _b;
          var theCounters = this.counters;
          theCounters.fill(0);
          this.decodeRowResult = '';
          var start = Code39Reader.findAsteriskPattern(row, theCounters);
          var nextStart = row.getNextSet(start[1]);
          var end = row.getSize();
          var decodedChar;
          var lastStart;
          do {
              Code39Reader.recordPattern(row, nextStart, theCounters);
              var pattern = Code39Reader.toNarrowWidePattern(theCounters);
              if (pattern < 0) {
                  throw new NotFoundException();
              }
              decodedChar = Code39Reader.patternToChar(pattern);
              this.decodeRowResult += decodedChar;
              lastStart = nextStart;
              try {
                  for (var theCounters_1 = (e_1 = void 0, __values$A(theCounters)), theCounters_1_1 = theCounters_1.next(); !theCounters_1_1.done; theCounters_1_1 = theCounters_1.next()) {
                      var counter = theCounters_1_1.value;
                      nextStart += counter;
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (theCounters_1_1 && !theCounters_1_1.done && (_a = theCounters_1.return)) _a.call(theCounters_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              nextStart = row.getNextSet(nextStart);
          } while (decodedChar !== '*');
          this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
          var lastPatternSize = 0;
          try {
              for (var theCounters_2 = __values$A(theCounters), theCounters_2_1 = theCounters_2.next(); !theCounters_2_1.done; theCounters_2_1 = theCounters_2.next()) {
                  var counter = theCounters_2_1.value;
                  lastPatternSize += counter;
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (theCounters_2_1 && !theCounters_2_1.done && (_b = theCounters_2.return)) _b.call(theCounters_2);
              }
              finally { if (e_2) throw e_2.error; }
          }
          var whiteSpaceAfterEnd = nextStart - lastStart - lastPatternSize;
          if (nextStart !== end && (whiteSpaceAfterEnd * 2) < lastPatternSize) {
              throw new NotFoundException();
          }
          if (this.usingCheckDigit) {
              var max = this.decodeRowResult.length - 1;
              var total = 0;
              for (var i = 0; i < max; i++) {
                  total += Code39Reader.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(i));
              }
              if (this.decodeRowResult.charAt(max) !== Code39Reader.ALPHABET_STRING.charAt(total % 43)) {
                  throw new ChecksumException();
              }
              this.decodeRowResult = this.decodeRowResult.substring(0, max);
          }
          if (this.decodeRowResult.length === 0) {
              throw new NotFoundException();
          }
          var resultString;
          if (this.extendedMode) {
              resultString = Code39Reader.decodeExtended(this.decodeRowResult);
          }
          else {
              resultString = this.decodeRowResult;
          }
          var left = (start[1] + start[0]) / 2.0;
          var right = lastStart + lastPatternSize / 2.0;
          return new Result(resultString, null, 0, [new ResultPoint(left, rowNumber), new ResultPoint(right, rowNumber)], BarcodeFormat$1.CODE_39, new Date().getTime());
      };
      Code39Reader.findAsteriskPattern = function (row, counters) {
          var width = row.getSize();
          var rowOffset = row.getNextSet(0);
          var counterPosition = 0;
          var patternStart = rowOffset;
          var isWhite = false;
          var patternLength = counters.length;
          for (var i = rowOffset; i < width; i++) {
              if (row.get(i) !== isWhite) {
                  counters[counterPosition]++;
              }
              else {
                  if (counterPosition === patternLength - 1) {
                      if (this.toNarrowWidePattern(counters) === Code39Reader.ASTERISK_ENCODING &&
                          row.isRange(Math.max(0, patternStart - Math.floor((i - patternStart) / 2)), patternStart, false)) {
                          return [patternStart, i];
                      }
                      patternStart += counters[0] + counters[1];
                      counters.copyWithin(0, 2, 2 + counterPosition - 1);
                      counters[counterPosition - 1] = 0;
                      counters[counterPosition] = 0;
                      counterPosition--;
                  }
                  else {
                      counterPosition++;
                  }
                  counters[counterPosition] = 1;
                  isWhite = !isWhite;
              }
          }
          throw new NotFoundException();
      };
      Code39Reader.toNarrowWidePattern = function (counters) {
          var e_3, _a;
          var numCounters = counters.length;
          var maxNarrowCounter = 0;
          var wideCounters;
          do {
              var minCounter = 0x7fffffff;
              try {
                  for (var counters_1 = (e_3 = void 0, __values$A(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
                      var counter = counters_1_1.value;
                      if (counter < minCounter && counter > maxNarrowCounter) {
                          minCounter = counter;
                      }
                  }
              }
              catch (e_3_1) { e_3 = { error: e_3_1 }; }
              finally {
                  try {
                      if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return)) _a.call(counters_1);
                  }
                  finally { if (e_3) throw e_3.error; }
              }
              maxNarrowCounter = minCounter;
              wideCounters = 0;
              var totalWideCountersWidth = 0;
              var pattern = 0;
              for (var i = 0; i < numCounters; i++) {
                  var counter = counters[i];
                  if (counter > maxNarrowCounter) {
                      pattern |= 1 << (numCounters - 1 - i);
                      wideCounters++;
                      totalWideCountersWidth += counter;
                  }
              }
              if (wideCounters === 3) {
                  for (var i = 0; i < numCounters && wideCounters > 0; i++) {
                      var counter = counters[i];
                      if (counter > maxNarrowCounter) {
                          wideCounters--;
                          if ((counter * 2) >= totalWideCountersWidth) {
                              return -1;
                          }
                      }
                  }
                  return pattern;
              }
          } while (wideCounters > 3);
          return -1;
      };
      Code39Reader.patternToChar = function (pattern) {
          for (var i = 0; i < Code39Reader.CHARACTER_ENCODINGS.length; i++) {
              if (Code39Reader.CHARACTER_ENCODINGS[i] === pattern) {
                  return Code39Reader.ALPHABET_STRING.charAt(i);
              }
          }
          if (pattern === Code39Reader.ASTERISK_ENCODING) {
              return '*';
          }
          throw new NotFoundException();
      };
      Code39Reader.decodeExtended = function (encoded) {
          var length = encoded.length;
          var decoded = '';
          for (var i = 0; i < length; i++) {
              var c = encoded.charAt(i);
              if (c === '+' || c === '$' || c === '%' || c === '/') {
                  var next = encoded.charAt(i + 1);
                  var decodedChar = '\0';
                  switch (c) {
                      case '+':
                          if (next >= 'A' && next <= 'Z') {
                              decodedChar = String.fromCharCode(next.charCodeAt(0) + 32);
                          }
                          else {
                              throw new FormatException();
                          }
                          break;
                      case '$':
                          if (next >= 'A' && next <= 'Z') {
                              decodedChar = String.fromCharCode(next.charCodeAt(0) - 64);
                          }
                          else {
                              throw new FormatException();
                          }
                          break;
                      case '%':
                          if (next >= 'A' && next <= 'E') {
                              decodedChar = String.fromCharCode(next.charCodeAt(0) - 38);
                          }
                          else if (next >= 'F' && next <= 'J') {
                              decodedChar = String.fromCharCode(next.charCodeAt(0) - 11);
                          }
                          else if (next >= 'K' && next <= 'O') {
                              decodedChar = String.fromCharCode(next.charCodeAt(0) + 16);
                          }
                          else if (next >= 'P' && next <= 'T') {
                              decodedChar = String.fromCharCode(next.charCodeAt(0) + 43);
                          }
                          else if (next === 'U') {
                              decodedChar = '\0';
                          }
                          else if (next === 'V') {
                              decodedChar = '@';
                          }
                          else if (next === 'W') {
                              decodedChar = '`';
                          }
                          else if (next === 'X' || next === 'Y' || next === 'Z') {
                              decodedChar = '\x7f';
                          }
                          else {
                              throw new FormatException();
                          }
                          break;
                      case '/':
                          if (next >= 'A' && next <= 'O') {
                              decodedChar = String.fromCharCode(next.charCodeAt(0) - 32);
                          }
                          else if (next === 'Z') {
                              decodedChar = ':';
                          }
                          else {
                              throw new FormatException();
                          }
                          break;
                  }
                  decoded += decodedChar;
                  i++;
              }
              else {
                  decoded += c;
              }
          }
          return decoded;
      };
      Code39Reader.ALPHABET_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%';
      Code39Reader.CHARACTER_ENCODINGS = [
          0x034, 0x121, 0x061, 0x160, 0x031, 0x130, 0x070, 0x025, 0x124, 0x064,
          0x109, 0x049, 0x148, 0x019, 0x118, 0x058, 0x00D, 0x10C, 0x04C, 0x01C,
          0x103, 0x043, 0x142, 0x013, 0x112, 0x052, 0x007, 0x106, 0x046, 0x016,
          0x181, 0x0C1, 0x1C0, 0x091, 0x190, 0x0D0, 0x085, 0x184, 0x0C4, 0x0A8,
          0x0A2, 0x08A, 0x02A
      ];
      Code39Reader.ASTERISK_ENCODING = 0x094;
      return Code39Reader;
  }(OneDReader));

  var __extends$I = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$z = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var ITFReader =  (function (_super) {
      __extends$I(ITFReader, _super);
      function ITFReader() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.narrowLineWidth = -1;
          return _this;
      }
      ITFReader.prototype.decodeRow = function (rowNumber, row, hints) {
          var e_1, _a;
          var startRange = this.decodeStart(row);
          var endRange = this.decodeEnd(row);
          var result = new StringBuilder();
          ITFReader.decodeMiddle(row, startRange[1], endRange[0], result);
          var resultString = result.toString();
          var allowedLengths = null;
          if (hints != null) {
              allowedLengths = hints.get(DecodeHintType$1.ALLOWED_LENGTHS);
          }
          if (allowedLengths == null) {
              allowedLengths = ITFReader.DEFAULT_ALLOWED_LENGTHS;
          }
          var length = resultString.length;
          var lengthOK = false;
          var maxAllowedLength = 0;
          try {
              for (var allowedLengths_1 = __values$z(allowedLengths), allowedLengths_1_1 = allowedLengths_1.next(); !allowedLengths_1_1.done; allowedLengths_1_1 = allowedLengths_1.next()) {
                  var value = allowedLengths_1_1.value;
                  if (length === value) {
                      lengthOK = true;
                      break;
                  }
                  if (value > maxAllowedLength) {
                      maxAllowedLength = value;
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (allowedLengths_1_1 && !allowedLengths_1_1.done && (_a = allowedLengths_1.return)) _a.call(allowedLengths_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          if (!lengthOK && length > maxAllowedLength) {
              lengthOK = true;
          }
          if (!lengthOK) {
              throw new FormatException();
          }
          var points = [new ResultPoint(startRange[1], rowNumber), new ResultPoint(endRange[0], rowNumber)];
          var resultReturn = new Result(resultString, null,
          0, points, BarcodeFormat$1.ITF, new Date().getTime());
          return resultReturn;
      };
      ITFReader.decodeMiddle = function (row, payloadStart, payloadEnd, resultString) {
          var counterDigitPair = new Int32Array(10);
          var counterBlack = new Int32Array(5);
          var counterWhite = new Int32Array(5);
          counterDigitPair.fill(0);
          counterBlack.fill(0);
          counterWhite.fill(0);
          while (payloadStart < payloadEnd) {
              OneDReader.recordPattern(row, payloadStart, counterDigitPair);
              for (var k = 0; k < 5; k++) {
                  var twoK = 2 * k;
                  counterBlack[k] = counterDigitPair[twoK];
                  counterWhite[k] = counterDigitPair[twoK + 1];
              }
              var bestMatch = ITFReader.decodeDigit(counterBlack);
              resultString.append(bestMatch.toString());
              bestMatch = this.decodeDigit(counterWhite);
              resultString.append(bestMatch.toString());
              counterDigitPair.forEach(function (counterDigit) {
                  payloadStart += counterDigit;
              });
          }
      };
      ITFReader.prototype.decodeStart = function (row) {
          var endStart = ITFReader.skipWhiteSpace(row);
          var startPattern = ITFReader.findGuardPattern(row, endStart, ITFReader.START_PATTERN);
          this.narrowLineWidth = (startPattern[1] - startPattern[0]) / 4;
          this.validateQuietZone(row, startPattern[0]);
          return startPattern;
      };
      ITFReader.prototype.validateQuietZone = function (row, startPattern) {
          var quietCount = this.narrowLineWidth * 10;
          quietCount = quietCount < startPattern ? quietCount : startPattern;
          for (var i = startPattern - 1; quietCount > 0 && i >= 0; i--) {
              if (row.get(i)) {
                  break;
              }
              quietCount--;
          }
          if (quietCount !== 0) {
              throw new NotFoundException();
          }
      };
      ITFReader.skipWhiteSpace = function (row) {
          var width = row.getSize();
          var endStart = row.getNextSet(0);
          if (endStart === width) {
              throw new NotFoundException();
          }
          return endStart;
      };
      ITFReader.prototype.decodeEnd = function (row) {
          row.reverse();
          try {
              var endStart = ITFReader.skipWhiteSpace(row);
              var endPattern = void 0;
              try {
                  endPattern = ITFReader.findGuardPattern(row, endStart, ITFReader.END_PATTERN_REVERSED[0]);
              }
              catch (error) {
                  if (error instanceof NotFoundException) {
                      endPattern = ITFReader.findGuardPattern(row, endStart, ITFReader.END_PATTERN_REVERSED[1]);
                  }
              }
              this.validateQuietZone(row, endPattern[0]);
              var temp = endPattern[0];
              endPattern[0] = row.getSize() - endPattern[1];
              endPattern[1] = row.getSize() - temp;
              return endPattern;
          }
          finally {
              row.reverse();
          }
      };
      ITFReader.findGuardPattern = function (row, rowOffset, pattern) {
          var patternLength = pattern.length;
          var counters = new Int32Array(patternLength);
          var width = row.getSize();
          var isWhite = false;
          var counterPosition = 0;
          var patternStart = rowOffset;
          counters.fill(0);
          for (var x = rowOffset; x < width; x++) {
              if (row.get(x) !== isWhite) {
                  counters[counterPosition]++;
              }
              else {
                  if (counterPosition === patternLength - 1) {
                      if (OneDReader.patternMatchVariance(counters, pattern, ITFReader.MAX_INDIVIDUAL_VARIANCE) < ITFReader.MAX_AVG_VARIANCE) {
                          return [patternStart, x];
                      }
                      patternStart += counters[0] + counters[1];
                      System.arraycopy(counters, 2, counters, 0, counterPosition - 1);
                      counters[counterPosition - 1] = 0;
                      counters[counterPosition] = 0;
                      counterPosition--;
                  }
                  else {
                      counterPosition++;
                  }
                  counters[counterPosition] = 1;
                  isWhite = !isWhite;
              }
          }
          throw new NotFoundException();
      };
      ITFReader.decodeDigit = function (counters) {
          var bestVariance = ITFReader.MAX_AVG_VARIANCE;
          var bestMatch = -1;
          var max = ITFReader.PATTERNS.length;
          for (var i = 0; i < max; i++) {
              var pattern = ITFReader.PATTERNS[i];
              var variance = OneDReader.patternMatchVariance(counters, pattern, ITFReader.MAX_INDIVIDUAL_VARIANCE);
              if (variance < bestVariance) {
                  bestVariance = variance;
                  bestMatch = i;
              }
              else if (variance === bestVariance) {
                  bestMatch = -1;
              }
          }
          if (bestMatch >= 0) {
              return bestMatch % 10;
          }
          else {
              throw new NotFoundException();
          }
      };
      ITFReader.PATTERNS = [
          Int32Array.from([1, 1, 2, 2, 1]),
          Int32Array.from([2, 1, 1, 1, 2]),
          Int32Array.from([1, 2, 1, 1, 2]),
          Int32Array.from([2, 2, 1, 1, 1]),
          Int32Array.from([1, 1, 2, 1, 2]),
          Int32Array.from([2, 1, 2, 1, 1]),
          Int32Array.from([1, 2, 2, 1, 1]),
          Int32Array.from([1, 1, 1, 2, 2]),
          Int32Array.from([2, 1, 1, 2, 1]),
          Int32Array.from([1, 2, 1, 2, 1]),
          Int32Array.from([1, 1, 3, 3, 1]),
          Int32Array.from([3, 1, 1, 1, 3]),
          Int32Array.from([1, 3, 1, 1, 3]),
          Int32Array.from([3, 3, 1, 1, 1]),
          Int32Array.from([1, 1, 3, 1, 3]),
          Int32Array.from([3, 1, 3, 1, 1]),
          Int32Array.from([1, 3, 3, 1, 1]),
          Int32Array.from([1, 1, 1, 3, 3]),
          Int32Array.from([3, 1, 1, 3, 1]),
          Int32Array.from([1, 3, 1, 3, 1])
      ];
      ITFReader.MAX_AVG_VARIANCE = 0.38;
      ITFReader.MAX_INDIVIDUAL_VARIANCE = 0.5;
      ITFReader.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14];
      ITFReader.START_PATTERN = Int32Array.from([1, 1, 1, 1]);
      ITFReader.END_PATTERN_REVERSED = [
          Int32Array.from([1, 1, 2]),
          Int32Array.from([1, 1, 3])
      ];
      return ITFReader;
  }(OneDReader));

  var __extends$H = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AbstractUPCEANReader =  (function (_super) {
      __extends$H(AbstractUPCEANReader, _super);
      function AbstractUPCEANReader() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.decodeRowStringBuffer = '';
          return _this;
      }
      AbstractUPCEANReader.findStartGuardPattern = function (row) {
          var foundStart = false;
          var startRange;
          var nextStart = 0;
          var counters = Int32Array.from([0, 0, 0]);
          while (!foundStart) {
              counters = Int32Array.from([0, 0, 0]);
              startRange = AbstractUPCEANReader.findGuardPattern(row, nextStart, false, this.START_END_PATTERN, counters);
              var start = startRange[0];
              nextStart = startRange[1];
              var quietStart = start - (nextStart - start);
              if (quietStart >= 0) {
                  foundStart = row.isRange(quietStart, start, false);
              }
          }
          return startRange;
      };
      AbstractUPCEANReader.checkChecksum = function (s) {
          return AbstractUPCEANReader.checkStandardUPCEANChecksum(s);
      };
      AbstractUPCEANReader.checkStandardUPCEANChecksum = function (s) {
          var length = s.length;
          if (length === 0)
              return false;
          var check = parseInt(s.charAt(length - 1), 10);
          return AbstractUPCEANReader.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
      };
      AbstractUPCEANReader.getStandardUPCEANChecksum = function (s) {
          var length = s.length;
          var sum = 0;
          for (var i = length - 1; i >= 0; i -= 2) {
              var digit = s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
              if (digit < 0 || digit > 9) {
                  throw new FormatException();
              }
              sum += digit;
          }
          sum *= 3;
          for (var i = length - 2; i >= 0; i -= 2) {
              var digit = s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
              if (digit < 0 || digit > 9) {
                  throw new FormatException();
              }
              sum += digit;
          }
          return (1000 - sum) % 10;
      };
      AbstractUPCEANReader.decodeEnd = function (row, endStart) {
          return AbstractUPCEANReader.findGuardPattern(row, endStart, false, AbstractUPCEANReader.START_END_PATTERN, new Int32Array(AbstractUPCEANReader.START_END_PATTERN.length).fill(0));
      };
      AbstractUPCEANReader.findGuardPatternWithoutCounters = function (row, rowOffset, whiteFirst, pattern) {
          return this.findGuardPattern(row, rowOffset, whiteFirst, pattern, new Int32Array(pattern.length));
      };
      AbstractUPCEANReader.findGuardPattern = function (row, rowOffset, whiteFirst, pattern, counters) {
          var width = row.getSize();
          rowOffset = whiteFirst ? row.getNextUnset(rowOffset) : row.getNextSet(rowOffset);
          var counterPosition = 0;
          var patternStart = rowOffset;
          var patternLength = pattern.length;
          var isWhite = whiteFirst;
          for (var x = rowOffset; x < width; x++) {
              if (row.get(x) !== isWhite) {
                  counters[counterPosition]++;
              }
              else {
                  if (counterPosition === patternLength - 1) {
                      if (OneDReader.patternMatchVariance(counters, pattern, AbstractUPCEANReader.MAX_INDIVIDUAL_VARIANCE) < AbstractUPCEANReader.MAX_AVG_VARIANCE) {
                          return Int32Array.from([patternStart, x]);
                      }
                      patternStart += counters[0] + counters[1];
                      var slice = counters.slice(2, counters.length - 1);
                      for (var i = 0; i < counterPosition - 1; i++) {
                          counters[i] = slice[i];
                      }
                      counters[counterPosition - 1] = 0;
                      counters[counterPosition] = 0;
                      counterPosition--;
                  }
                  else {
                      counterPosition++;
                  }
                  counters[counterPosition] = 1;
                  isWhite = !isWhite;
              }
          }
          throw new NotFoundException();
      };
      AbstractUPCEANReader.decodeDigit = function (row, counters, rowOffset, patterns) {
          this.recordPattern(row, rowOffset, counters);
          var bestVariance = this.MAX_AVG_VARIANCE;
          var bestMatch = -1;
          var max = patterns.length;
          for (var i = 0; i < max; i++) {
              var pattern = patterns[i];
              var variance = OneDReader.patternMatchVariance(counters, pattern, AbstractUPCEANReader.MAX_INDIVIDUAL_VARIANCE);
              if (variance < bestVariance) {
                  bestVariance = variance;
                  bestMatch = i;
              }
          }
          if (bestMatch >= 0) {
              return bestMatch;
          }
          else {
              throw new NotFoundException();
          }
      };
      AbstractUPCEANReader.MAX_AVG_VARIANCE = 0.48;
      AbstractUPCEANReader.MAX_INDIVIDUAL_VARIANCE = 0.7;
      AbstractUPCEANReader.START_END_PATTERN = Int32Array.from([1, 1, 1]);
      AbstractUPCEANReader.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]);
      AbstractUPCEANReader.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
      AbstractUPCEANReader.L_PATTERNS = [
          Int32Array.from([3, 2, 1, 1]),
          Int32Array.from([2, 2, 2, 1]),
          Int32Array.from([2, 1, 2, 2]),
          Int32Array.from([1, 4, 1, 1]),
          Int32Array.from([1, 1, 3, 2]),
          Int32Array.from([1, 2, 3, 1]),
          Int32Array.from([1, 1, 1, 4]),
          Int32Array.from([1, 3, 1, 2]),
          Int32Array.from([1, 2, 1, 3]),
          Int32Array.from([3, 1, 1, 2]),
      ];
      return AbstractUPCEANReader;
  }(OneDReader));

  var __values$y = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var UPCEANExtension5Support =  (function () {
      function UPCEANExtension5Support() {
          this.CHECK_DIGIT_ENCODINGS = [0x18, 0x14, 0x12, 0x11, 0x0C, 0x06, 0x03, 0x0A, 0x09, 0x05];
          this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
          this.decodeRowStringBuffer = '';
      }
      UPCEANExtension5Support.prototype.decodeRow = function (rowNumber, row, extensionStartRange) {
          var result = this.decodeRowStringBuffer;
          var end = this.decodeMiddle(row, extensionStartRange, result);
          var resultString = result.toString();
          var extensionData = UPCEANExtension5Support.parseExtensionString(resultString);
          var resultPoints = [
              new ResultPoint((extensionStartRange[0] + extensionStartRange[1]) / 2.0, rowNumber),
              new ResultPoint(end, rowNumber)
          ];
          var extensionResult = new Result(resultString, null, 0, resultPoints, BarcodeFormat$1.UPC_EAN_EXTENSION, new Date().getTime());
          if (extensionData != null) {
              extensionResult.putAllMetadata(extensionData);
          }
          return extensionResult;
      };
      UPCEANExtension5Support.prototype.decodeMiddle = function (row, startRange, resultString) {
          var e_1, _a;
          var counters = this.decodeMiddleCounters;
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var end = row.getSize();
          var rowOffset = startRange[1];
          var lgPatternFound = 0;
          for (var x = 0; x < 5 && rowOffset < end; x++) {
              var bestMatch = AbstractUPCEANReader.decodeDigit(row, counters, rowOffset, AbstractUPCEANReader.L_AND_G_PATTERNS);
              resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch % 10));
              try {
                  for (var counters_1 = (e_1 = void 0, __values$y(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
                      var counter = counters_1_1.value;
                      rowOffset += counter;
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return)) _a.call(counters_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              if (bestMatch >= 10) {
                  lgPatternFound |= 1 << (4 - x);
              }
              if (x !== 4) {
                  rowOffset = row.getNextSet(rowOffset);
                  rowOffset = row.getNextUnset(rowOffset);
              }
          }
          if (resultString.length !== 5) {
              throw new NotFoundException();
          }
          var checkDigit = this.determineCheckDigit(lgPatternFound);
          if (UPCEANExtension5Support.extensionChecksum(resultString.toString()) !== checkDigit) {
              throw new NotFoundException();
          }
          return rowOffset;
      };
      UPCEANExtension5Support.extensionChecksum = function (s) {
          var length = s.length;
          var sum = 0;
          for (var i = length - 2; i >= 0; i -= 2) {
              sum += s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
          }
          sum *= 3;
          for (var i = length - 1; i >= 0; i -= 2) {
              sum += s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
          }
          sum *= 3;
          return sum % 10;
      };
      UPCEANExtension5Support.prototype.determineCheckDigit = function (lgPatternFound) {
          for (var d = 0; d < 10; d++) {
              if (lgPatternFound === this.CHECK_DIGIT_ENCODINGS[d]) {
                  return d;
              }
          }
          throw new NotFoundException();
      };
      UPCEANExtension5Support.parseExtensionString = function (raw) {
          if (raw.length !== 5) {
              return null;
          }
          var value = UPCEANExtension5Support.parseExtension5String(raw);
          if (value == null) {
              return null;
          }
          return new Map([[ResultMetadataType$1.SUGGESTED_PRICE, value]]);
      };
      UPCEANExtension5Support.parseExtension5String = function (raw) {
          var currency;
          switch (raw.charAt(0)) {
              case '0':
                  currency = '£';
                  break;
              case '5':
                  currency = '$';
                  break;
              case '9':
                  switch (raw) {
                      case '90000':
                          return null;
                      case '99991':
                          return '0.00';
                      case '99990':
                          return 'Used';
                  }
                  currency = '';
                  break;
              default:
                  currency = '';
                  break;
          }
          var rawAmount = parseInt(raw.substring(1));
          var unitsString = (rawAmount / 100).toString();
          var hundredths = rawAmount % 100;
          var hundredthsString = hundredths < 10 ? '0' + hundredths : hundredths.toString();
          return currency + unitsString + '.' + hundredthsString;
      };
      return UPCEANExtension5Support;
  }());

  var __values$x = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var UPCEANExtension2Support =  (function () {
      function UPCEANExtension2Support() {
          this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
          this.decodeRowStringBuffer = '';
      }
      UPCEANExtension2Support.prototype.decodeRow = function (rowNumber, row, extensionStartRange) {
          var result = this.decodeRowStringBuffer;
          var end = this.decodeMiddle(row, extensionStartRange, result);
          var resultString = result.toString();
          var extensionData = UPCEANExtension2Support.parseExtensionString(resultString);
          var resultPoints = [
              new ResultPoint((extensionStartRange[0] + extensionStartRange[1]) / 2.0, rowNumber),
              new ResultPoint(end, rowNumber)
          ];
          var extensionResult = new Result(resultString, null, 0, resultPoints, BarcodeFormat$1.UPC_EAN_EXTENSION, new Date().getTime());
          if (extensionData != null) {
              extensionResult.putAllMetadata(extensionData);
          }
          return extensionResult;
      };
      UPCEANExtension2Support.prototype.decodeMiddle = function (row, startRange, resultString) {
          var e_1, _a;
          var counters = this.decodeMiddleCounters;
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var end = row.getSize();
          var rowOffset = startRange[1];
          var checkParity = 0;
          for (var x = 0; x < 2 && rowOffset < end; x++) {
              var bestMatch = AbstractUPCEANReader.decodeDigit(row, counters, rowOffset, AbstractUPCEANReader.L_AND_G_PATTERNS);
              resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch % 10));
              try {
                  for (var counters_1 = (e_1 = void 0, __values$x(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
                      var counter = counters_1_1.value;
                      rowOffset += counter;
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return)) _a.call(counters_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              if (bestMatch >= 10) {
                  checkParity |= 1 << (1 - x);
              }
              if (x !== 1) {
                  rowOffset = row.getNextSet(rowOffset);
                  rowOffset = row.getNextUnset(rowOffset);
              }
          }
          if (resultString.length !== 2) {
              throw new NotFoundException();
          }
          if (parseInt(resultString.toString()) % 4 !== checkParity) {
              throw new NotFoundException();
          }
          return rowOffset;
      };
      UPCEANExtension2Support.parseExtensionString = function (raw) {
          if (raw.length !== 2) {
              return null;
          }
          return new Map([[ResultMetadataType$1.ISSUE_NUMBER, parseInt(raw)]]);
      };
      return UPCEANExtension2Support;
  }());

  var UPCEANExtensionSupport =  (function () {
      function UPCEANExtensionSupport() {
      }
      UPCEANExtensionSupport.decodeRow = function (rowNumber, row, rowOffset) {
          var extensionStartRange = AbstractUPCEANReader.findGuardPattern(row, rowOffset, false, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
          try {
              var fiveSupport = new UPCEANExtension5Support();
              return fiveSupport.decodeRow(rowNumber, row, extensionStartRange);
          }
          catch (err) {
              var twoSupport = new UPCEANExtension2Support();
              return twoSupport.decodeRow(rowNumber, row, extensionStartRange);
          }
      };
      UPCEANExtensionSupport.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]);
      return UPCEANExtensionSupport;
  }());

  var __extends$G = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var UPCEANReader =  (function (_super) {
      __extends$G(UPCEANReader, _super);
      function UPCEANReader() {
          var _this = _super.call(this) || this;
          _this.decodeRowStringBuffer = '';
          UPCEANReader.L_AND_G_PATTERNS = UPCEANReader.L_PATTERNS.map(function (arr) { return Int32Array.from(arr); });
          for (var i = 10; i < 20; i++) {
              var widths = UPCEANReader.L_PATTERNS[i - 10];
              var reversedWidths = new Int32Array(widths.length);
              for (var j = 0; j < widths.length; j++) {
                  reversedWidths[j] = widths[widths.length - j - 1];
              }
              UPCEANReader.L_AND_G_PATTERNS[i] = reversedWidths;
          }
          return _this;
      }
      UPCEANReader.prototype.decodeRow = function (rowNumber, row, hints) {
          var startGuardRange = UPCEANReader.findStartGuardPattern(row);
          var resultPointCallback = hints == null ? null : hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
          if (resultPointCallback != null) {
              var resultPoint_1 = new ResultPoint((startGuardRange[0] + startGuardRange[1]) / 2.0, rowNumber);
              resultPointCallback.foundPossibleResultPoint(resultPoint_1);
          }
          var budello = this.decodeMiddle(row, startGuardRange, this.decodeRowStringBuffer);
          var endStart = budello.rowOffset;
          var result = budello.resultString;
          if (resultPointCallback != null) {
              var resultPoint_2 = new ResultPoint(endStart, rowNumber);
              resultPointCallback.foundPossibleResultPoint(resultPoint_2);
          }
          var endRange = UPCEANReader.decodeEnd(row, endStart);
          if (resultPointCallback != null) {
              var resultPoint_3 = new ResultPoint((endRange[0] + endRange[1]) / 2.0, rowNumber);
              resultPointCallback.foundPossibleResultPoint(resultPoint_3);
          }
          var end = endRange[1];
          var quietEnd = end + (end - endRange[0]);
          if (quietEnd >= row.getSize() || !row.isRange(end, quietEnd, false)) {
              throw new NotFoundException();
          }
          var resultString = result.toString();
          if (resultString.length < 8) {
              throw new FormatException();
          }
          if (!UPCEANReader.checkChecksum(resultString)) {
              throw new ChecksumException();
          }
          var left = (startGuardRange[1] + startGuardRange[0]) / 2.0;
          var right = (endRange[1] + endRange[0]) / 2.0;
          var format = this.getBarcodeFormat();
          var resultPoint = [new ResultPoint(left, rowNumber), new ResultPoint(right, rowNumber)];
          var decodeResult = new Result(resultString, null, 0, resultPoint, format, new Date().getTime());
          var extensionLength = 0;
          try {
              var extensionResult = UPCEANExtensionSupport.decodeRow(rowNumber, row, endRange[1]);
              decodeResult.putMetadata(ResultMetadataType$1.UPC_EAN_EXTENSION, extensionResult.getText());
              decodeResult.putAllMetadata(extensionResult.getResultMetadata());
              decodeResult.addResultPoints(extensionResult.getResultPoints());
              extensionLength = extensionResult.getText().length;
          }
          catch (err) {
          }
          var allowedExtensions = hints == null ? null : hints.get(DecodeHintType$1.ALLOWED_EAN_EXTENSIONS);
          if (allowedExtensions != null) {
              var valid = false;
              for (var length_1 in allowedExtensions) {
                  if (extensionLength.toString() === length_1) {
                      valid = true;
                      break;
                  }
              }
              if (!valid) {
                  throw new NotFoundException();
              }
          }
          if (format === BarcodeFormat$1.EAN_13 || format === BarcodeFormat$1.UPC_A) ;
          return decodeResult;
      };
      UPCEANReader.checkChecksum = function (s) {
          return UPCEANReader.checkStandardUPCEANChecksum(s);
      };
      UPCEANReader.checkStandardUPCEANChecksum = function (s) {
          var length = s.length;
          if (length === 0)
              return false;
          var check = parseInt(s.charAt(length - 1), 10);
          return UPCEANReader.getStandardUPCEANChecksum(s.substring(0, length - 1)) === check;
      };
      UPCEANReader.getStandardUPCEANChecksum = function (s) {
          var length = s.length;
          var sum = 0;
          for (var i = length - 1; i >= 0; i -= 2) {
              var digit = s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
              if (digit < 0 || digit > 9) {
                  throw new FormatException();
              }
              sum += digit;
          }
          sum *= 3;
          for (var i = length - 2; i >= 0; i -= 2) {
              var digit = s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
              if (digit < 0 || digit > 9) {
                  throw new FormatException();
              }
              sum += digit;
          }
          return (1000 - sum) % 10;
      };
      UPCEANReader.decodeEnd = function (row, endStart) {
          return UPCEANReader.findGuardPattern(row, endStart, false, UPCEANReader.START_END_PATTERN, new Int32Array(UPCEANReader.START_END_PATTERN.length).fill(0));
      };
      return UPCEANReader;
  }(AbstractUPCEANReader));

  var __extends$F = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$w = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var EAN13Reader =  (function (_super) {
      __extends$F(EAN13Reader, _super);
      function EAN13Reader() {
          var _this = _super.call(this) || this;
          _this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
          return _this;
      }
      EAN13Reader.prototype.decodeMiddle = function (row, startRange, resultString) {
          var e_1, _a, e_2, _b;
          var counters = this.decodeMiddleCounters;
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var end = row.getSize();
          var rowOffset = startRange[1];
          var lgPatternFound = 0;
          for (var x = 0; x < 6 && rowOffset < end; x++) {
              var bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_AND_G_PATTERNS);
              resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch % 10));
              try {
                  for (var counters_1 = (e_1 = void 0, __values$w(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
                      var counter = counters_1_1.value;
                      rowOffset += counter;
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return)) _a.call(counters_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              if (bestMatch >= 10) {
                  lgPatternFound |= 1 << (5 - x);
              }
          }
          resultString = EAN13Reader.determineFirstDigit(resultString, lgPatternFound);
          var middleRange = UPCEANReader.findGuardPattern(row, rowOffset, true, UPCEANReader.MIDDLE_PATTERN, new Int32Array(UPCEANReader.MIDDLE_PATTERN.length).fill(0));
          rowOffset = middleRange[1];
          for (var x = 0; x < 6 && rowOffset < end; x++) {
              var bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_PATTERNS);
              resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch));
              try {
                  for (var counters_2 = (e_2 = void 0, __values$w(counters)), counters_2_1 = counters_2.next(); !counters_2_1.done; counters_2_1 = counters_2.next()) {
                      var counter = counters_2_1.value;
                      rowOffset += counter;
                  }
              }
              catch (e_2_1) { e_2 = { error: e_2_1 }; }
              finally {
                  try {
                      if (counters_2_1 && !counters_2_1.done && (_b = counters_2.return)) _b.call(counters_2);
                  }
                  finally { if (e_2) throw e_2.error; }
              }
          }
          return { rowOffset: rowOffset, resultString: resultString };
      };
      EAN13Reader.prototype.getBarcodeFormat = function () {
          return BarcodeFormat$1.EAN_13;
      };
      EAN13Reader.determineFirstDigit = function (resultString, lgPatternFound) {
          for (var d = 0; d < 10; d++) {
              if (lgPatternFound === this.FIRST_DIGIT_ENCODINGS[d]) {
                  resultString = String.fromCharCode(('0'.charCodeAt(0) + d)) + resultString;
                  return resultString;
              }
          }
          throw new NotFoundException();
      };
      EAN13Reader.FIRST_DIGIT_ENCODINGS = [0x00, 0x0B, 0x0D, 0xE, 0x13, 0x19, 0x1C, 0x15, 0x16, 0x1A];
      return EAN13Reader;
  }(UPCEANReader));

  var __extends$E = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$v = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var EAN8Reader =  (function (_super) {
      __extends$E(EAN8Reader, _super);
      function EAN8Reader() {
          var _this = _super.call(this) || this;
          _this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]);
          return _this;
      }
      EAN8Reader.prototype.decodeMiddle = function (row, startRange, resultString) {
          var e_1, _a, e_2, _b;
          var counters = this.decodeMiddleCounters;
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var end = row.getSize();
          var rowOffset = startRange[1];
          for (var x = 0; x < 4 && rowOffset < end; x++) {
              var bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_PATTERNS);
              resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch));
              try {
                  for (var counters_1 = (e_1 = void 0, __values$v(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
                      var counter = counters_1_1.value;
                      rowOffset += counter;
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return)) _a.call(counters_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
          }
          var middleRange = UPCEANReader.findGuardPattern(row, rowOffset, true, UPCEANReader.MIDDLE_PATTERN, new Int32Array(UPCEANReader.MIDDLE_PATTERN.length).fill(0));
          rowOffset = middleRange[1];
          for (var x = 0; x < 4 && rowOffset < end; x++) {
              var bestMatch = UPCEANReader.decodeDigit(row, counters, rowOffset, UPCEANReader.L_PATTERNS);
              resultString += String.fromCharCode(('0'.charCodeAt(0) + bestMatch));
              try {
                  for (var counters_2 = (e_2 = void 0, __values$v(counters)), counters_2_1 = counters_2.next(); !counters_2_1.done; counters_2_1 = counters_2.next()) {
                      var counter = counters_2_1.value;
                      rowOffset += counter;
                  }
              }
              catch (e_2_1) { e_2 = { error: e_2_1 }; }
              finally {
                  try {
                      if (counters_2_1 && !counters_2_1.done && (_b = counters_2.return)) _b.call(counters_2);
                  }
                  finally { if (e_2) throw e_2.error; }
              }
          }
          return { rowOffset: rowOffset, resultString: resultString };
      };
      EAN8Reader.prototype.getBarcodeFormat = function () {
          return BarcodeFormat$1.EAN_8;
      };
      return EAN8Reader;
  }(UPCEANReader));

  var __extends$D = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var UPCAReader =  (function (_super) {
      __extends$D(UPCAReader, _super);
      function UPCAReader() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.ean13Reader = new EAN13Reader();
          return _this;
      }
      UPCAReader.prototype.getBarcodeFormat = function () {
          return BarcodeFormat$1.UPC_A;
      };
      UPCAReader.prototype.decode = function (image, hints) {
          return this.maybeReturnResult(this.ean13Reader.decode(image));
      };
      UPCAReader.prototype.decodeRow = function (rowNumber, row, hints) {
          return this.maybeReturnResult(this.ean13Reader.decodeRow(rowNumber, row, hints));
      };
      UPCAReader.prototype.decodeMiddle = function (row, startRange, resultString) {
          return this.ean13Reader.decodeMiddle(row, startRange, resultString);
      };
      UPCAReader.prototype.maybeReturnResult = function (result) {
          var text = result.getText();
          if (text.charAt(0) === '0') {
              var upcaResult = new Result(text.substring(1), null, null, result.getResultPoints(), BarcodeFormat$1.UPC_A);
              if (result.getResultMetadata() != null) {
                  upcaResult.putAllMetadata(result.getResultMetadata());
              }
              return upcaResult;
          }
          else {
              throw new NotFoundException();
          }
      };
      UPCAReader.prototype.reset = function () {
          this.ean13Reader.reset();
      };
      return UPCAReader;
  }(UPCEANReader));

  var __extends$C = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$u = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var UPCEReader =  (function (_super) {
      __extends$C(UPCEReader, _super);
      function UPCEReader() {
          var _this = _super.call(this) || this;
          _this.decodeMiddleCounters = new Int32Array(4);
          return _this;
      }
      UPCEReader.prototype.decodeMiddle = function (row, startRange, result) {
          var e_1, _a;
          var counters = this.decodeMiddleCounters.map(function (x) { return x; });
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var end = row.getSize();
          var rowOffset = startRange[1];
          var lgPatternFound = 0;
          for (var x = 0; x < 6 && rowOffset < end; x++) {
              var bestMatch = UPCEReader.decodeDigit(row, counters, rowOffset, UPCEReader.L_AND_G_PATTERNS);
              result += String.fromCharCode(('0'.charCodeAt(0) + bestMatch % 10));
              try {
                  for (var counters_1 = (e_1 = void 0, __values$u(counters)), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
                      var counter = counters_1_1.value;
                      rowOffset += counter;
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return)) _a.call(counters_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              if (bestMatch >= 10) {
                  lgPatternFound |= 1 << (5 - x);
              }
          }
          UPCEReader.determineNumSysAndCheckDigit(new StringBuilder(result), lgPatternFound);
          return rowOffset;
      };
      UPCEReader.prototype.decodeEnd = function (row, endStart) {
          return UPCEReader.findGuardPatternWithoutCounters(row, endStart, true, UPCEReader.MIDDLE_END_PATTERN);
      };
      UPCEReader.prototype.checkChecksum = function (s) {
          return UPCEANReader.checkChecksum(UPCEReader.convertUPCEtoUPCA(s));
      };
      UPCEReader.determineNumSysAndCheckDigit = function (resultString, lgPatternFound) {
          for (var numSys = 0; numSys <= 1; numSys++) {
              for (var d = 0; d < 10; d++) {
                  if (lgPatternFound === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[numSys][d]) {
                      resultString.insert(0,  ('0' + numSys));
                      resultString.append( ('0' + d));
                      return;
                  }
              }
          }
          throw NotFoundException.getNotFoundInstance();
      };
      UPCEReader.prototype.getBarcodeFormat = function () {
          return BarcodeFormat$1.UPC_E;
      };
      UPCEReader.convertUPCEtoUPCA = function (upce) {
          var upceChars = upce.slice(1, 7).split('').map(function (x) { return x.charCodeAt(0); });
          var result = new StringBuilder( );
          result.append(upce.charAt(0));
          var lastChar = upceChars[5];
          switch (lastChar) {
              case 0:
              case 1:
              case 2:
                  result.appendChars(upceChars, 0, 2);
                  result.append(lastChar);
                  result.append('0000');
                  result.appendChars(upceChars, 2, 3);
                  break;
              case 3:
                  result.appendChars(upceChars, 0, 3);
                  result.append('00000');
                  result.appendChars(upceChars, 3, 2);
                  break;
              case 4:
                  result.appendChars(upceChars, 0, 4);
                  result.append('00000');
                  result.append(upceChars[4]);
                  break;
              default:
                  result.appendChars(upceChars, 0, 5);
                  result.append('0000');
                  result.append(lastChar);
                  break;
          }
          if (upce.length >= 8) {
              result.append(upce.charAt(7));
          }
          return result.toString();
      };
      UPCEReader.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]);
      UPCEReader.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
          Int32Array.from([0x38, 0x34, 0x32, 0x31, 0x2C, 0x26, 0x23, 0x2A, 0x29, 0x25]),
          Int32Array.from([0x07, 0x0B, 0x0D, 0x0E, 0x13, 0x19, 0x1C, 0x15, 0x16, 0x1]),
      ];
      return UPCEReader;
  }(UPCEANReader));

  var __extends$B = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$t = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var MultiFormatUPCEANReader =  (function (_super) {
      __extends$B(MultiFormatUPCEANReader, _super);
      function MultiFormatUPCEANReader(hints) {
          var _this = _super.call(this) || this;
          var possibleFormats = hints == null ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
          var readers = [];
          if (possibleFormats != null) {
              if (possibleFormats.indexOf(BarcodeFormat$1.EAN_13) > -1) {
                  readers.push(new EAN13Reader());
              }
              else if (possibleFormats.indexOf(BarcodeFormat$1.UPC_A) > -1) {
                  readers.push(new UPCAReader());
              }
              if (possibleFormats.indexOf(BarcodeFormat$1.EAN_8) > -1) {
                  readers.push(new EAN8Reader());
              }
              if (possibleFormats.indexOf(BarcodeFormat$1.UPC_E) > -1) {
                  readers.push(new UPCEReader());
              }
          }
          if (readers.length === 0) {
              readers.push(new EAN13Reader());
              readers.push(new EAN8Reader());
              readers.push(new UPCEReader());
          }
          _this.readers = readers;
          return _this;
      }
      MultiFormatUPCEANReader.prototype.decodeRow = function (rowNumber, row, hints) {
          var e_1, _a;
          try {
              for (var _b = __values$t(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var reader = _c.value;
                  try {
                      var result = reader.decodeRow(rowNumber, row, hints);
                      var ean13MayBeUPCA = result.getBarcodeFormat() === BarcodeFormat$1.EAN_13 &&
                          result.getText().charAt(0) === '0';
                      var possibleFormats = hints == null ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
                      var canReturnUPCA = possibleFormats == null || possibleFormats.includes(BarcodeFormat$1.UPC_A);
                      if (ean13MayBeUPCA && canReturnUPCA) {
                          var rawBytes = result.getRawBytes();
                          var resultUPCA = new Result(result.getText().substring(1), rawBytes, rawBytes.length, result.getResultPoints(), BarcodeFormat$1.UPC_A);
                          resultUPCA.putAllMetadata(result.getResultMetadata());
                          return resultUPCA;
                      }
                      return result;
                  }
                  catch (err) {
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
          throw new NotFoundException();
      };
      MultiFormatUPCEANReader.prototype.reset = function () {
          var e_2, _a;
          try {
              for (var _b = __values$t(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var reader = _c.value;
                  reader.reset();
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_2) throw e_2.error; }
          }
      };
      return MultiFormatUPCEANReader;
  }(OneDReader));

  var __extends$A = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$s = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var AbstractRSSReader =  (function (_super) {
      __extends$A(AbstractRSSReader, _super);
      function AbstractRSSReader() {
          var _this = _super.call(this) || this;
          _this.decodeFinderCounters = new Int32Array(4);
          _this.dataCharacterCounters = new Int32Array(8);
          _this.oddRoundingErrors = new Array(4);
          _this.evenRoundingErrors = new Array(4);
          _this.oddCounts = new Array(_this.dataCharacterCounters.length / 2);
          _this.evenCounts = new Array(_this.dataCharacterCounters.length / 2);
          return _this;
      }
      AbstractRSSReader.prototype.getDecodeFinderCounters = function () {
          return this.decodeFinderCounters;
      };
      AbstractRSSReader.prototype.getDataCharacterCounters = function () {
          return this.dataCharacterCounters;
      };
      AbstractRSSReader.prototype.getOddRoundingErrors = function () {
          return this.oddRoundingErrors;
      };
      AbstractRSSReader.prototype.getEvenRoundingErrors = function () {
          return this.evenRoundingErrors;
      };
      AbstractRSSReader.prototype.getOddCounts = function () {
          return this.oddCounts;
      };
      AbstractRSSReader.prototype.getEvenCounts = function () {
          return this.evenCounts;
      };
      AbstractRSSReader.prototype.parseFinderValue = function (counters, finderPatterns) {
          for (var value = 0; value < finderPatterns.length; value++) {
              if (OneDReader.patternMatchVariance(counters, finderPatterns[value], AbstractRSSReader.MAX_INDIVIDUAL_VARIANCE) < AbstractRSSReader.MAX_AVG_VARIANCE) {
                  return value;
              }
          }
          throw new NotFoundException();
      };
      AbstractRSSReader.count = function (array) {
          return MathUtils.sum(new Int32Array(array));
      };
      AbstractRSSReader.increment = function (array, errors) {
          var index = 0;
          var biggestError = errors[0];
          for (var i = 1; i < array.length; i++) {
              if (errors[i] > biggestError) {
                  biggestError = errors[i];
                  index = i;
              }
          }
          array[index]++;
      };
      AbstractRSSReader.decrement = function (array, errors) {
          var index = 0;
          var biggestError = errors[0];
          for (var i = 1; i < array.length; i++) {
              if (errors[i] < biggestError) {
                  biggestError = errors[i];
                  index = i;
              }
          }
          array[index]--;
      };
      AbstractRSSReader.isFinderPattern = function (counters) {
          var e_1, _a;
          var firstTwoSum = counters[0] + counters[1];
          var sum = firstTwoSum + counters[2] + counters[3];
          var ratio = firstTwoSum / sum;
          if (ratio >= AbstractRSSReader.MIN_FINDER_PATTERN_RATIO && ratio <= AbstractRSSReader.MAX_FINDER_PATTERN_RATIO) {
              var minCounter = Number.MAX_SAFE_INTEGER;
              var maxCounter = Number.MIN_SAFE_INTEGER;
              try {
                  for (var counters_1 = __values$s(counters), counters_1_1 = counters_1.next(); !counters_1_1.done; counters_1_1 = counters_1.next()) {
                      var counter = counters_1_1.value;
                      if (counter > maxCounter) {
                          maxCounter = counter;
                      }
                      if (counter < minCounter) {
                          minCounter = counter;
                      }
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (counters_1_1 && !counters_1_1.done && (_a = counters_1.return)) _a.call(counters_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              return maxCounter < 10 * minCounter;
          }
          return false;
      };
      AbstractRSSReader.MAX_AVG_VARIANCE = 0.2;
      AbstractRSSReader.MAX_INDIVIDUAL_VARIANCE = 0.45;
      AbstractRSSReader.MIN_FINDER_PATTERN_RATIO = 9.5 / 12.0;
      AbstractRSSReader.MAX_FINDER_PATTERN_RATIO = 12.5 / 14.0;
      return AbstractRSSReader;
  }(OneDReader));

  var DataCharacter =  (function () {
      function DataCharacter(value, checksumPortion) {
          this.value = value;
          this.checksumPortion = checksumPortion;
      }
      DataCharacter.prototype.getValue = function () {
          return this.value;
      };
      DataCharacter.prototype.getChecksumPortion = function () {
          return this.checksumPortion;
      };
      DataCharacter.prototype.toString = function () {
          return this.value + '(' + this.checksumPortion + ')';
      };
      DataCharacter.prototype.equals = function (o) {
          if (!(o instanceof DataCharacter)) {
              return false;
          }
          var that = o;
          return this.value === that.value && this.checksumPortion === that.checksumPortion;
      };
      DataCharacter.prototype.hashCode = function () {
          return this.value ^ this.checksumPortion;
      };
      return DataCharacter;
  }());

  var FinderPattern$1 =  (function () {
      function FinderPattern(value, startEnd, start, end, rowNumber) {
          this.value = value;
          this.startEnd = startEnd;
          this.value = value;
          this.startEnd = startEnd;
          this.resultPoints = new Array();
          this.resultPoints.push(new ResultPoint(start, rowNumber));
          this.resultPoints.push(new ResultPoint(end, rowNumber));
      }
      FinderPattern.prototype.getValue = function () {
          return this.value;
      };
      FinderPattern.prototype.getStartEnd = function () {
          return this.startEnd;
      };
      FinderPattern.prototype.getResultPoints = function () {
          return this.resultPoints;
      };
      FinderPattern.prototype.equals = function (o) {
          if (!(o instanceof FinderPattern)) {
              return false;
          }
          var that = o;
          return this.value === that.value;
      };
      FinderPattern.prototype.hashCode = function () {
          return this.value;
      };
      return FinderPattern;
  }());

  var __values$r = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var RSSUtils =  (function () {
      function RSSUtils() {
      }
      RSSUtils.getRSSvalue = function (widths, maxWidth, noNarrow) {
          var e_1, _a;
          var n = 0;
          try {
              for (var widths_1 = __values$r(widths), widths_1_1 = widths_1.next(); !widths_1_1.done; widths_1_1 = widths_1.next()) {
                  var width = widths_1_1.value;
                  n += width;
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (widths_1_1 && !widths_1_1.done && (_a = widths_1.return)) _a.call(widths_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          var val = 0;
          var narrowMask = 0;
          var elements = widths.length;
          for (var bar = 0; bar < elements - 1; bar++) {
              var elmWidth = void 0;
              for (elmWidth = 1, narrowMask |= 1 << bar; elmWidth < widths[bar]; elmWidth++, narrowMask &= ~(1 << bar)) {
                  var subVal = RSSUtils.combins(n - elmWidth - 1, elements - bar - 2);
                  if (noNarrow && (narrowMask === 0) && (n - elmWidth - (elements - bar - 1) >= elements - bar - 1)) {
                      subVal -= RSSUtils.combins(n - elmWidth - (elements - bar), elements - bar - 2);
                  }
                  if (elements - bar - 1 > 1) {
                      var lessVal = 0;
                      for (var mxwElement = n - elmWidth - (elements - bar - 2); mxwElement > maxWidth; mxwElement--) {
                          lessVal += RSSUtils.combins(n - elmWidth - mxwElement - 1, elements - bar - 3);
                      }
                      subVal -= lessVal * (elements - 1 - bar);
                  }
                  else if (n - elmWidth > maxWidth) {
                      subVal--;
                  }
                  val += subVal;
              }
              n -= elmWidth;
          }
          return val;
      };
      RSSUtils.combins = function (n, r) {
          var maxDenom;
          var minDenom;
          if (n - r > r) {
              minDenom = r;
              maxDenom = n - r;
          }
          else {
              minDenom = n - r;
              maxDenom = r;
          }
          var val = 1;
          var j = 1;
          for (var i = n; i > maxDenom; i--) {
              val *= i;
              if (j <= minDenom) {
                  val /= j;
                  j++;
              }
          }
          while ((j <= minDenom)) {
              val /= j;
              j++;
          }
          return val;
      };
      return RSSUtils;
  }());

  var BitArrayBuilder =  (function () {
      function BitArrayBuilder() {
      }
      BitArrayBuilder.buildBitArray = function (pairs) {
          var charNumber = (pairs.length * 2) - 1;
          if (pairs[pairs.length - 1].getRightChar() == null) {
              charNumber -= 1;
          }
          var size = 12 * charNumber;
          var binary = new BitArray(size);
          var accPos = 0;
          var firstPair = pairs[0];
          var firstValue = firstPair.getRightChar().getValue();
          for (var i = 11; i >= 0; --i) {
              if ((firstValue & (1 << i)) != 0) {
                  binary.set(accPos);
              }
              accPos++;
          }
          for (var i = 1; i < pairs.length; ++i) {
              var currentPair = pairs[i];
              var leftValue = currentPair.getLeftChar().getValue();
              for (var j = 11; j >= 0; --j) {
                  if ((leftValue & (1 << j)) != 0) {
                      binary.set(accPos);
                  }
                  accPos++;
              }
              if (currentPair.getRightChar() != null) {
                  var rightValue = currentPair.getRightChar().getValue();
                  for (var j = 11; j >= 0; --j) {
                      if ((rightValue & (1 << j)) != 0) {
                          binary.set(accPos);
                      }
                      accPos++;
                  }
              }
          }
          return binary;
      };
      return BitArrayBuilder;
  }());

  var BlockParsedResult =  (function () {
      function BlockParsedResult(finished, decodedInformation) {
          if (decodedInformation) {
              this.decodedInformation = null;
          }
          else {
              this.finished = finished;
              this.decodedInformation = decodedInformation;
          }
      }
      BlockParsedResult.prototype.getDecodedInformation = function () {
          return this.decodedInformation;
      };
      BlockParsedResult.prototype.isFinished = function () {
          return this.finished;
      };
      return BlockParsedResult;
  }());

  var DecodedObject =  (function () {
      function DecodedObject(newPosition) {
          this.newPosition = newPosition;
      }
      DecodedObject.prototype.getNewPosition = function () {
          return this.newPosition;
      };
      return DecodedObject;
  }());

  var __extends$z = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var DecodedChar =  (function (_super) {
      __extends$z(DecodedChar, _super);
      function DecodedChar(newPosition, value) {
          var _this = _super.call(this, newPosition) || this;
          _this.value = value;
          return _this;
      }
      DecodedChar.prototype.getValue = function () {
          return this.value;
      };
      DecodedChar.prototype.isFNC1 = function () {
          return this.value === DecodedChar.FNC1;
      };
      DecodedChar.FNC1 = '$';
      return DecodedChar;
  }(DecodedObject));

  var __extends$y = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var DecodedInformation =  (function (_super) {
      __extends$y(DecodedInformation, _super);
      function DecodedInformation(newPosition, newString, remainingValue) {
          var _this = _super.call(this, newPosition) || this;
          if (remainingValue) {
              _this.remaining = true;
              _this.remainingValue = _this.remainingValue;
          }
          else {
              _this.remaining = false;
              _this.remainingValue = 0;
          }
          _this.newString = newString;
          return _this;
      }
      DecodedInformation.prototype.getNewString = function () {
          return this.newString;
      };
      DecodedInformation.prototype.isRemaining = function () {
          return this.remaining;
      };
      DecodedInformation.prototype.getRemainingValue = function () {
          return this.remainingValue;
      };
      return DecodedInformation;
  }(DecodedObject));

  var __extends$x = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var DecodedNumeric =  (function (_super) {
      __extends$x(DecodedNumeric, _super);
      function DecodedNumeric(newPosition, firstDigit, secondDigit) {
          var _this = _super.call(this, newPosition) || this;
          if (firstDigit < 0 || firstDigit > 10 || secondDigit < 0 || secondDigit > 10) {
              throw new FormatException();
          }
          _this.firstDigit = firstDigit;
          _this.secondDigit = secondDigit;
          return _this;
      }
      DecodedNumeric.prototype.getFirstDigit = function () {
          return this.firstDigit;
      };
      DecodedNumeric.prototype.getSecondDigit = function () {
          return this.secondDigit;
      };
      DecodedNumeric.prototype.getValue = function () {
          return this.firstDigit * 10 + this.secondDigit;
      };
      DecodedNumeric.prototype.isFirstDigitFNC1 = function () {
          return this.firstDigit === DecodedNumeric.FNC1;
      };
      DecodedNumeric.prototype.isSecondDigitFNC1 = function () {
          return this.secondDigit === DecodedNumeric.FNC1;
      };
      DecodedNumeric.prototype.isAnyFNC1 = function () {
          return this.firstDigit === DecodedNumeric.FNC1 || this.secondDigit === DecodedNumeric.FNC1;
      };
      DecodedNumeric.FNC1 = 10;
      return DecodedNumeric;
  }(DecodedObject));

  var __values$q = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var FieldParser =  (function () {
      function FieldParser() {
      }
      FieldParser.parseFieldsInGeneralPurpose = function (rawInformation) {
          var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
          if (!rawInformation) {
              return null;
          }
          if (rawInformation.length < 2) {
              throw new NotFoundException();
          }
          var firstTwoDigits = rawInformation.substring(0, 2);
          try {
              for (var _e = __values$q(FieldParser.TWO_DIGIT_DATA_LENGTH), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var dataLength = _f.value;
                  if (dataLength[0] === firstTwoDigits) {
                      if (dataLength[1] === FieldParser.VARIABLE_LENGTH) {
                          return FieldParser.processVariableAI(2, dataLength[2], rawInformation);
                      }
                      return FieldParser.processFixedAI(2, dataLength[1], rawInformation);
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
              }
              finally { if (e_1) throw e_1.error; }
          }
          if (rawInformation.length < 3) {
              throw new NotFoundException();
          }
          var firstThreeDigits = rawInformation.substring(0, 3);
          try {
              for (var _g = __values$q(FieldParser.THREE_DIGIT_DATA_LENGTH), _h = _g.next(); !_h.done; _h = _g.next()) {
                  var dataLength = _h.value;
                  if (dataLength[0] === firstThreeDigits) {
                      if (dataLength[1] === FieldParser.VARIABLE_LENGTH) {
                          return FieldParser.processVariableAI(3, dataLength[2], rawInformation);
                      }
                      return FieldParser.processFixedAI(3, dataLength[1], rawInformation);
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
              }
              finally { if (e_2) throw e_2.error; }
          }
          try {
              for (var _j = __values$q(FieldParser.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), _k = _j.next(); !_k.done; _k = _j.next()) {
                  var dataLength = _k.value;
                  if (dataLength[0] === firstThreeDigits) {
                      if (dataLength[1] === FieldParser.VARIABLE_LENGTH) {
                          return FieldParser.processVariableAI(4, dataLength[2], rawInformation);
                      }
                      return FieldParser.processFixedAI(4, dataLength[1], rawInformation);
                  }
              }
          }
          catch (e_3_1) { e_3 = { error: e_3_1 }; }
          finally {
              try {
                  if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
              }
              finally { if (e_3) throw e_3.error; }
          }
          if (rawInformation.length < 4) {
              throw new NotFoundException();
          }
          var firstFourDigits = rawInformation.substring(0, 4);
          try {
              for (var _l = __values$q(FieldParser.FOUR_DIGIT_DATA_LENGTH), _m = _l.next(); !_m.done; _m = _l.next()) {
                  var dataLength = _m.value;
                  if (dataLength[0] === firstFourDigits) {
                      if (dataLength[1] === FieldParser.VARIABLE_LENGTH) {
                          return FieldParser.processVariableAI(4, dataLength[2], rawInformation);
                      }
                      return FieldParser.processFixedAI(4, dataLength[1], rawInformation);
                  }
              }
          }
          catch (e_4_1) { e_4 = { error: e_4_1 }; }
          finally {
              try {
                  if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
              }
              finally { if (e_4) throw e_4.error; }
          }
          throw new NotFoundException();
      };
      FieldParser.processFixedAI = function (aiSize, fieldSize, rawInformation) {
          if (rawInformation.length < aiSize) {
              throw new NotFoundException();
          }
          var ai = rawInformation.substring(0, aiSize);
          if (rawInformation.length < aiSize + fieldSize) {
              throw new NotFoundException();
          }
          var field = rawInformation.substring(aiSize, aiSize + fieldSize);
          var remaining = rawInformation.substring(aiSize + fieldSize);
          var result = '(' + ai + ')' + field;
          var parsedAI = FieldParser.parseFieldsInGeneralPurpose(remaining);
          return parsedAI == null ? result : result + parsedAI;
      };
      FieldParser.processVariableAI = function (aiSize, variableFieldSize, rawInformation) {
          var ai = rawInformation.substring(0, aiSize);
          var maxSize;
          if (rawInformation.length < aiSize + variableFieldSize) {
              maxSize = rawInformation.length;
          }
          else {
              maxSize = aiSize + variableFieldSize;
          }
          var field = rawInformation.substring(aiSize, maxSize);
          var remaining = rawInformation.substring(maxSize);
          var result = '(' + ai + ')' + field;
          var parsedAI = FieldParser.parseFieldsInGeneralPurpose(remaining);
          return parsedAI == null ? result : result + parsedAI;
      };
      FieldParser.VARIABLE_LENGTH = [];
      FieldParser.TWO_DIGIT_DATA_LENGTH = [
          ['00', 18],
          ['01', 14],
          ['02', 14],
          ['10', FieldParser.VARIABLE_LENGTH, 20],
          ['11', 6],
          ['12', 6],
          ['13', 6],
          ['15', 6],
          ['17', 6],
          ['20', 2],
          ['21', FieldParser.VARIABLE_LENGTH, 20],
          ['22', FieldParser.VARIABLE_LENGTH, 29],
          ['30', FieldParser.VARIABLE_LENGTH, 8],
          ['37', FieldParser.VARIABLE_LENGTH, 8],
          ['90', FieldParser.VARIABLE_LENGTH, 30],
          ['91', FieldParser.VARIABLE_LENGTH, 30],
          ['92', FieldParser.VARIABLE_LENGTH, 30],
          ['93', FieldParser.VARIABLE_LENGTH, 30],
          ['94', FieldParser.VARIABLE_LENGTH, 30],
          ['95', FieldParser.VARIABLE_LENGTH, 30],
          ['96', FieldParser.VARIABLE_LENGTH, 30],
          ['97', FieldParser.VARIABLE_LENGTH, 3],
          ['98', FieldParser.VARIABLE_LENGTH, 30],
          ['99', FieldParser.VARIABLE_LENGTH, 30],
      ];
      FieldParser.THREE_DIGIT_DATA_LENGTH = [
          ['240', FieldParser.VARIABLE_LENGTH, 30],
          ['241', FieldParser.VARIABLE_LENGTH, 30],
          ['242', FieldParser.VARIABLE_LENGTH, 6],
          ['250', FieldParser.VARIABLE_LENGTH, 30],
          ['251', FieldParser.VARIABLE_LENGTH, 30],
          ['253', FieldParser.VARIABLE_LENGTH, 17],
          ['254', FieldParser.VARIABLE_LENGTH, 20],
          ['400', FieldParser.VARIABLE_LENGTH, 30],
          ['401', FieldParser.VARIABLE_LENGTH, 30],
          ['402', 17],
          ['403', FieldParser.VARIABLE_LENGTH, 30],
          ['410', 13],
          ['411', 13],
          ['412', 13],
          ['413', 13],
          ['414', 13],
          ['420', FieldParser.VARIABLE_LENGTH, 20],
          ['421', FieldParser.VARIABLE_LENGTH, 15],
          ['422', 3],
          ['423', FieldParser.VARIABLE_LENGTH, 15],
          ['424', 3],
          ['425', 3],
          ['426', 3],
      ];
      FieldParser.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
          ['310', 6],
          ['311', 6],
          ['312', 6],
          ['313', 6],
          ['314', 6],
          ['315', 6],
          ['316', 6],
          ['320', 6],
          ['321', 6],
          ['322', 6],
          ['323', 6],
          ['324', 6],
          ['325', 6],
          ['326', 6],
          ['327', 6],
          ['328', 6],
          ['329', 6],
          ['330', 6],
          ['331', 6],
          ['332', 6],
          ['333', 6],
          ['334', 6],
          ['335', 6],
          ['336', 6],
          ['340', 6],
          ['341', 6],
          ['342', 6],
          ['343', 6],
          ['344', 6],
          ['345', 6],
          ['346', 6],
          ['347', 6],
          ['348', 6],
          ['349', 6],
          ['350', 6],
          ['351', 6],
          ['352', 6],
          ['353', 6],
          ['354', 6],
          ['355', 6],
          ['356', 6],
          ['357', 6],
          ['360', 6],
          ['361', 6],
          ['362', 6],
          ['363', 6],
          ['364', 6],
          ['365', 6],
          ['366', 6],
          ['367', 6],
          ['368', 6],
          ['369', 6],
          ['390', FieldParser.VARIABLE_LENGTH, 15],
          ['391', FieldParser.VARIABLE_LENGTH, 18],
          ['392', FieldParser.VARIABLE_LENGTH, 15],
          ['393', FieldParser.VARIABLE_LENGTH, 18],
          ['703', FieldParser.VARIABLE_LENGTH, 30],
      ];
      FieldParser.FOUR_DIGIT_DATA_LENGTH = [
          ['7001', 13],
          ['7002', FieldParser.VARIABLE_LENGTH, 30],
          ['7003', 10],
          ['8001', 14],
          ['8002', FieldParser.VARIABLE_LENGTH, 20],
          ['8003', FieldParser.VARIABLE_LENGTH, 30],
          ['8004', FieldParser.VARIABLE_LENGTH, 30],
          ['8005', 6],
          ['8006', 18],
          ['8007', FieldParser.VARIABLE_LENGTH, 30],
          ['8008', FieldParser.VARIABLE_LENGTH, 12],
          ['8018', 18],
          ['8020', FieldParser.VARIABLE_LENGTH, 25],
          ['8100', 6],
          ['8101', 10],
          ['8102', 2],
          ['8110', FieldParser.VARIABLE_LENGTH, 70],
          ['8200', FieldParser.VARIABLE_LENGTH, 70],
      ];
      return FieldParser;
  }());

  var GeneralAppIdDecoder =  (function () {
      function GeneralAppIdDecoder(information) {
          this.buffer = new StringBuilder();
          this.information = information;
      }
      GeneralAppIdDecoder.prototype.decodeAllCodes = function (buff, initialPosition) {
          var currentPosition = initialPosition;
          var remaining = null;
          do {
              var info = this.decodeGeneralPurposeField(currentPosition, remaining);
              var parsedFields = FieldParser.parseFieldsInGeneralPurpose(info.getNewString());
              if (parsedFields != null) {
                  buff.append(parsedFields);
              }
              if (info.isRemaining()) {
                  remaining = '' + info.getRemainingValue();
              }
              else {
                  remaining = null;
              }
              if (currentPosition === info.getNewPosition()) {
                  break;
              }
              currentPosition = info.getNewPosition();
          } while (true);
          return buff.toString();
      };
      GeneralAppIdDecoder.prototype.isStillNumeric = function (pos) {
          if (pos + 7 > this.information.getSize()) {
              return pos + 4 <= this.information.getSize();
          }
          for (var i = pos; i < pos + 3; ++i) {
              if (this.information.get(i)) {
                  return true;
              }
          }
          return this.information.get(pos + 3);
      };
      GeneralAppIdDecoder.prototype.decodeNumeric = function (pos) {
          if (pos + 7 > this.information.getSize()) {
              var numeric_1 = this.extractNumericValueFromBitArray(pos, 4);
              if (numeric_1 === 0) {
                  return new DecodedNumeric(this.information.getSize(), DecodedNumeric.FNC1, DecodedNumeric.FNC1);
              }
              return new DecodedNumeric(this.information.getSize(), numeric_1 - 1, DecodedNumeric.FNC1);
          }
          var numeric = this.extractNumericValueFromBitArray(pos, 7);
          var digit1 = (numeric - 8) / 11;
          var digit2 = (numeric - 8) % 11;
          return new DecodedNumeric(pos + 7, digit1, digit2);
      };
      GeneralAppIdDecoder.prototype.extractNumericValueFromBitArray = function (pos, bits) {
          return GeneralAppIdDecoder.extractNumericValueFromBitArray(this.information, pos, bits);
      };
      GeneralAppIdDecoder.extractNumericValueFromBitArray = function (information, pos, bits) {
          var value = 0;
          for (var i = 0; i < bits; ++i) {
              if (information.get(pos + i)) {
                  value |= 1 << (bits - i - 1);
              }
          }
          return value;
      };
      GeneralAppIdDecoder.prototype.decodeGeneralPurposeField = function (pos, remaining) {
          this.buffer.setLengthToZero();
          if (remaining != null) {
              this.buffer.append(remaining);
          }
          this.current.setPosition(pos);
          var lastDecoded = this.parseBlocks();
          if (lastDecoded != null && lastDecoded.isRemaining()) {
              return new DecodedInformation(this.current.getPosition(), this.buffer.toString(), lastDecoded.getRemainingValue());
          }
          return new DecodedInformation(this.current.getPosition(), this.buffer.toString());
      };
      GeneralAppIdDecoder.prototype.parseBlocks = function () {
          var isFinished;
          var result;
          do {
              var initialPosition = this.current.getPosition();
              if (this.current.isAlpha()) {
                  result = this.parseAlphaBlock();
                  isFinished = result.isFinished();
              }
              else if (this.current.isIsoIec646()) {
                  result = this.parseIsoIec646Block();
                  isFinished = result.isFinished();
              }
              else {
                  result = this.parseNumericBlock();
                  isFinished = result.isFinished();
              }
              var positionChanged = initialPosition !== this.current.getPosition();
              if (!positionChanged && !isFinished) {
                  break;
              }
          } while (!isFinished);
          return result.getDecodedInformation();
      };
      GeneralAppIdDecoder.prototype.parseNumericBlock = function () {
          while (this.isStillNumeric(this.current.getPosition())) {
              var numeric = this.decodeNumeric(this.current.getPosition());
              this.current.setPosition(numeric.getNewPosition());
              if (numeric.isFirstDigitFNC1()) {
                  var information = void 0;
                  if (numeric.isSecondDigitFNC1()) {
                      information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
                  }
                  else {
                      information = new DecodedInformation(this.current.getPosition(), this.buffer.toString(), numeric.getSecondDigit());
                  }
                  return new BlockParsedResult(true, information);
              }
              this.buffer.append(numeric.getFirstDigit());
              if (numeric.isSecondDigitFNC1()) {
                  var information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
                  return new BlockParsedResult(true, information);
              }
              this.buffer.append(numeric.getSecondDigit());
          }
          if (this.isNumericToAlphaNumericLatch(this.current.getPosition())) {
              this.current.setAlpha();
              this.current.incrementPosition(4);
          }
          return new BlockParsedResult(false);
      };
      GeneralAppIdDecoder.prototype.parseIsoIec646Block = function () {
          while (this.isStillIsoIec646(this.current.getPosition())) {
              var iso = this.decodeIsoIec646(this.current.getPosition());
              this.current.setPosition(iso.getNewPosition());
              if (iso.isFNC1()) {
                  var information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
                  return new BlockParsedResult(true, information);
              }
              this.buffer.append(iso.getValue());
          }
          if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
              this.current.incrementPosition(3);
              this.current.setNumeric();
          }
          else if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
              if (this.current.getPosition() + 5 < this.information.getSize()) {
                  this.current.incrementPosition(5);
              }
              else {
                  this.current.setPosition(this.information.getSize());
              }
              this.current.setAlpha();
          }
          return new BlockParsedResult(false);
      };
      GeneralAppIdDecoder.prototype.parseAlphaBlock = function () {
          while (this.isStillAlpha(this.current.getPosition())) {
              var alpha = this.decodeAlphanumeric(this.current.getPosition());
              this.current.setPosition(alpha.getNewPosition());
              if (alpha.isFNC1()) {
                  var information = new DecodedInformation(this.current.getPosition(), this.buffer.toString());
                  return new BlockParsedResult(true, information);
              }
              this.buffer.append(alpha.getValue());
          }
          if (this.isAlphaOr646ToNumericLatch(this.current.getPosition())) {
              this.current.incrementPosition(3);
              this.current.setNumeric();
          }
          else if (this.isAlphaTo646ToAlphaLatch(this.current.getPosition())) {
              if (this.current.getPosition() + 5 < this.information.getSize()) {
                  this.current.incrementPosition(5);
              }
              else {
                  this.current.setPosition(this.information.getSize());
              }
              this.current.setIsoIec646();
          }
          return new BlockParsedResult(false);
      };
      GeneralAppIdDecoder.prototype.isStillIsoIec646 = function (pos) {
          if (pos + 5 > this.information.getSize()) {
              return false;
          }
          var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
          if (fiveBitValue >= 5 && fiveBitValue < 16) {
              return true;
          }
          if (pos + 7 > this.information.getSize()) {
              return false;
          }
          var sevenBitValue = this.extractNumericValueFromBitArray(pos, 7);
          if (sevenBitValue >= 64 && sevenBitValue < 116) {
              return true;
          }
          if (pos + 8 > this.information.getSize()) {
              return false;
          }
          var eightBitValue = this.extractNumericValueFromBitArray(pos, 8);
          return eightBitValue >= 232 && eightBitValue < 253;
      };
      GeneralAppIdDecoder.prototype.decodeIsoIec646 = function (pos) {
          var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
          if (fiveBitValue === 15) {
              return new DecodedChar(pos + 5, DecodedChar.FNC1);
          }
          if (fiveBitValue >= 5 && fiveBitValue < 15) {
              return new DecodedChar(pos + 5, ('0' + (fiveBitValue - 5)));
          }
          var sevenBitValue = this.extractNumericValueFromBitArray(pos, 7);
          if (sevenBitValue >= 64 && sevenBitValue < 90) {
              return new DecodedChar(pos + 7, ('' + (sevenBitValue + 1)));
          }
          if (sevenBitValue >= 90 && sevenBitValue < 116) {
              return new DecodedChar(pos + 7, ('' + (sevenBitValue + 7)));
          }
          var eightBitValue = this.extractNumericValueFromBitArray(pos, 8);
          var c;
          switch (eightBitValue) {
              case 232:
                  c = '!';
                  break;
              case 233:
                  c = '"';
                  break;
              case 234:
                  c = '%';
                  break;
              case 235:
                  c = '&';
                  break;
              case 236:
                  c = '\'';
                  break;
              case 237:
                  c = '(';
                  break;
              case 238:
                  c = ')';
                  break;
              case 239:
                  c = '*';
                  break;
              case 240:
                  c = '+';
                  break;
              case 241:
                  c = ',';
                  break;
              case 242:
                  c = '-';
                  break;
              case 243:
                  c = '.';
                  break;
              case 244:
                  c = '/';
                  break;
              case 245:
                  c = ':';
                  break;
              case 246:
                  c = ';';
                  break;
              case 247:
                  c = '<';
                  break;
              case 248:
                  c = '=';
                  break;
              case 249:
                  c = '>';
                  break;
              case 250:
                  c = '?';
                  break;
              case 251:
                  c = '_';
                  break;
              case 252:
                  c = ' ';
                  break;
              default:
                  throw new FormatException();
          }
          return new DecodedChar(pos + 8, c);
      };
      GeneralAppIdDecoder.prototype.isStillAlpha = function (pos) {
          if (pos + 5 > this.information.getSize()) {
              return false;
          }
          var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
          if (fiveBitValue >= 5 && fiveBitValue < 16) {
              return true;
          }
          if (pos + 6 > this.information.getSize()) {
              return false;
          }
          var sixBitValue = this.extractNumericValueFromBitArray(pos, 6);
          return sixBitValue >= 16 && sixBitValue < 63;
      };
      GeneralAppIdDecoder.prototype.decodeAlphanumeric = function (pos) {
          var fiveBitValue = this.extractNumericValueFromBitArray(pos, 5);
          if (fiveBitValue === 15) {
              return new DecodedChar(pos + 5, DecodedChar.FNC1);
          }
          if (fiveBitValue >= 5 && fiveBitValue < 15) {
              return new DecodedChar(pos + 5, ('0' + (fiveBitValue - 5)));
          }
          var sixBitValue = this.extractNumericValueFromBitArray(pos, 6);
          if (sixBitValue >= 32 && sixBitValue < 58) {
              return new DecodedChar(pos + 6, ('' + (sixBitValue + 33)));
          }
          var c;
          switch (sixBitValue) {
              case 58:
                  c = '*';
                  break;
              case 59:
                  c = ',';
                  break;
              case 60:
                  c = '-';
                  break;
              case 61:
                  c = '.';
                  break;
              case 62:
                  c = '/';
                  break;
              default:
                  throw new IllegalStateException('Decoding invalid alphanumeric value: ' + sixBitValue);
          }
          return new DecodedChar(pos + 6, c);
      };
      GeneralAppIdDecoder.prototype.isAlphaTo646ToAlphaLatch = function (pos) {
          if (pos + 1 > this.information.getSize()) {
              return false;
          }
          for (var i = 0; i < 5 && i + pos < this.information.getSize(); ++i) {
              if (i === 2) {
                  if (!this.information.get(pos + 2)) {
                      return false;
                  }
              }
              else if (this.information.get(pos + i)) {
                  return false;
              }
          }
          return true;
      };
      GeneralAppIdDecoder.prototype.isAlphaOr646ToNumericLatch = function (pos) {
          if (pos + 3 > this.information.getSize()) {
              return false;
          }
          for (var i = pos; i < pos + 3; ++i) {
              if (this.information.get(i)) {
                  return false;
              }
          }
          return true;
      };
      GeneralAppIdDecoder.prototype.isNumericToAlphaNumericLatch = function (pos) {
          if (pos + 1 > this.information.getSize()) {
              return false;
          }
          for (var i = 0; i < 4 && i + pos < this.information.getSize(); ++i) {
              if (this.information.get(pos + i)) {
                  return false;
              }
          }
          return true;
      };
      return GeneralAppIdDecoder;
  }());

  var AbstractExpandedDecoder =  (function () {
      function AbstractExpandedDecoder(information) {
          this.information = information;
          this.generalDecoder = new GeneralAppIdDecoder(information);
      }
      AbstractExpandedDecoder.prototype.getInformation = function () {
          return this.information;
      };
      AbstractExpandedDecoder.prototype.getGeneralDecoder = function () {
          return this.generalDecoder;
      };
      return AbstractExpandedDecoder;
  }());

  var __extends$w = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AI01decoder =  (function (_super) {
      __extends$w(AI01decoder, _super);
      function AI01decoder(information) {
          return _super.call(this, information) || this;
      }
      AI01decoder.prototype.encodeCompressedGtin = function (buf, currentPos) {
          buf.append('(01)');
          var initialPosition = buf.length();
          buf.append('9');
          this.encodeCompressedGtinWithoutAI(buf, currentPos, initialPosition);
      };
      AI01decoder.prototype.encodeCompressedGtinWithoutAI = function (buf, currentPos, initialBufferPosition) {
          for (var i = 0; i < 4; ++i) {
              var currentBlock = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos + 10 * i, 10);
              if (currentBlock / 100 === 0) {
                  buf.append('0');
              }
              if (currentBlock / 10 === 0) {
                  buf.append('0');
              }
              buf.append(currentBlock);
          }
          AI01decoder.appendCheckDigit(buf, initialBufferPosition);
      };
      AI01decoder.appendCheckDigit = function (buf, currentPos) {
          var checkDigit = 0;
          for (var i = 0; i < 13; i++) {
              var digit = buf.charAt(i + currentPos).charCodeAt(0) - '0'.charCodeAt(0);
              checkDigit += (i & 0x01) === 0 ? 3 * digit : digit;
          }
          checkDigit = 10 - (checkDigit % 10);
          if (checkDigit === 10) {
              checkDigit = 0;
          }
          buf.append(checkDigit);
      };
      AI01decoder.GTIN_SIZE = 40;
      return AI01decoder;
  }(AbstractExpandedDecoder));

  var __extends$v = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AI01AndOtherAIs =  (function (_super) {
      __extends$v(AI01AndOtherAIs, _super);
      function AI01AndOtherAIs(information) {
          return _super.call(this, information) || this;
      }
      AI01AndOtherAIs.prototype.parseInformation = function () {
          var buff = new StringBuilder();
          buff.append('(01)');
          var initialGtinPosition = buff.length();
          var firstGtinDigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01AndOtherAIs.HEADER_SIZE, 4);
          buff.append(firstGtinDigit);
          this.encodeCompressedGtinWithoutAI(buff, AI01AndOtherAIs.HEADER_SIZE + 4, initialGtinPosition);
          return this.getGeneralDecoder().decodeAllCodes(buff, AI01AndOtherAIs.HEADER_SIZE + 44);
      };
      AI01AndOtherAIs.HEADER_SIZE = 1 + 1 + 2;
      return AI01AndOtherAIs;
  }(AI01decoder));

  var __extends$u = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AnyAIDecoder =  (function (_super) {
      __extends$u(AnyAIDecoder, _super);
      function AnyAIDecoder(information) {
          return _super.call(this, information) || this;
      }
      AnyAIDecoder.prototype.parseInformation = function () {
          var buf = new StringBuilder();
          return this.getGeneralDecoder().decodeAllCodes(buf, AnyAIDecoder.HEADER_SIZE);
      };
      AnyAIDecoder.HEADER_SIZE = 2 + 1 + 2;
      return AnyAIDecoder;
  }(AbstractExpandedDecoder));

  var __extends$t = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AI01weightDecoder =  (function (_super) {
      __extends$t(AI01weightDecoder, _super);
      function AI01weightDecoder(information) {
          return _super.call(this, information) || this;
      }
      AI01weightDecoder.prototype.encodeCompressedWeight = function (buf, currentPos, weightSize) {
          var originalWeightNumeric = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos, weightSize);
          this.addWeightCode(buf, originalWeightNumeric);
          var weightNumeric = this.checkWeight(originalWeightNumeric);
          var currentDivisor = 100000;
          for (var i = 0; i < 5; ++i) {
              if (weightNumeric / currentDivisor === 0) {
                  buf.append('0');
              }
              currentDivisor /= 10;
          }
          buf.append(weightNumeric);
      };
      return AI01weightDecoder;
  }(AI01decoder));

  var __extends$s = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AI013x0xDecoder =  (function (_super) {
      __extends$s(AI013x0xDecoder, _super);
      function AI013x0xDecoder(information) {
          return _super.call(this, information) || this;
      }
      AI013x0xDecoder.prototype.parseInformation = function () {
          if (this.getInformation().getSize() != AI013x0xDecoder.HEADER_SIZE + AI01weightDecoder.GTIN_SIZE + AI013x0xDecoder.WEIGHT_SIZE) {
              throw new NotFoundException();
          }
          var buf = new StringBuilder();
          this.encodeCompressedGtin(buf, AI013x0xDecoder.HEADER_SIZE);
          this.encodeCompressedWeight(buf, AI013x0xDecoder.HEADER_SIZE + AI01weightDecoder.GTIN_SIZE, AI013x0xDecoder.WEIGHT_SIZE);
          return buf.toString();
      };
      AI013x0xDecoder.HEADER_SIZE = 4 + 1;
      AI013x0xDecoder.WEIGHT_SIZE = 15;
      return AI013x0xDecoder;
  }(AI01weightDecoder));

  var __extends$r = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AI013103decoder =  (function (_super) {
      __extends$r(AI013103decoder, _super);
      function AI013103decoder(information) {
          return _super.call(this, information) || this;
      }
      AI013103decoder.prototype.addWeightCode = function (buf, weight) {
          buf.append('(3103)');
      };
      AI013103decoder.prototype.checkWeight = function (weight) {
          return weight;
      };
      return AI013103decoder;
  }(AI013x0xDecoder));

  var __extends$q = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AI01320xDecoder =  (function (_super) {
      __extends$q(AI01320xDecoder, _super);
      function AI01320xDecoder(information) {
          return _super.call(this, information) || this;
      }
      AI01320xDecoder.prototype.addWeightCode = function (buf, weight) {
          if (weight < 10000) {
              buf.append('(3202)');
          }
          else {
              buf.append('(3203)');
          }
      };
      AI01320xDecoder.prototype.checkWeight = function (weight) {
          if (weight < 10000) {
              return weight;
          }
          return weight - 10000;
      };
      return AI01320xDecoder;
  }(AI013x0xDecoder));

  var __extends$p = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AI01392xDecoder =  (function (_super) {
      __extends$p(AI01392xDecoder, _super);
      function AI01392xDecoder(information) {
          return _super.call(this, information) || this;
      }
      AI01392xDecoder.prototype.parseInformation = function () {
          if (this.getInformation().getSize() < AI01392xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE) {
              throw new NotFoundException();
          }
          var buf = new StringBuilder();
          this.encodeCompressedGtin(buf, AI01392xDecoder.HEADER_SIZE);
          var lastAIdigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01392xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE, AI01392xDecoder.LAST_DIGIT_SIZE);
          buf.append('(392');
          buf.append(lastAIdigit);
          buf.append(')');
          var decodedInformation = this.getGeneralDecoder().decodeGeneralPurposeField(AI01392xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE + AI01392xDecoder.LAST_DIGIT_SIZE, null);
          buf.append(decodedInformation.getNewString());
          return buf.toString();
      };
      AI01392xDecoder.HEADER_SIZE = 5 + 1 + 2;
      AI01392xDecoder.LAST_DIGIT_SIZE = 2;
      return AI01392xDecoder;
  }(AI01decoder));

  var __extends$o = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AI01393xDecoder =  (function (_super) {
      __extends$o(AI01393xDecoder, _super);
      function AI01393xDecoder(information) {
          return _super.call(this, information) || this;
      }
      AI01393xDecoder.prototype.parseInformation = function () {
          if (this.getInformation().getSize() < AI01393xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE) {
              throw new NotFoundException();
          }
          var buf = new StringBuilder();
          this.encodeCompressedGtin(buf, AI01393xDecoder.HEADER_SIZE);
          var lastAIdigit = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE, AI01393xDecoder.LAST_DIGIT_SIZE);
          buf.append('(393');
          buf.append(lastAIdigit);
          buf.append(')');
          var firstThreeDigits = this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE + AI01393xDecoder.LAST_DIGIT_SIZE, AI01393xDecoder.FIRST_THREE_DIGITS_SIZE);
          if (firstThreeDigits / 100 == 0) {
              buf.append('0');
          }
          if (firstThreeDigits / 10 == 0) {
              buf.append('0');
          }
          buf.append(firstThreeDigits);
          var generalInformation = this.getGeneralDecoder().decodeGeneralPurposeField(AI01393xDecoder.HEADER_SIZE + AI01decoder.GTIN_SIZE + AI01393xDecoder.LAST_DIGIT_SIZE + AI01393xDecoder.FIRST_THREE_DIGITS_SIZE, null);
          buf.append(generalInformation.getNewString());
          return buf.toString();
      };
      AI01393xDecoder.HEADER_SIZE = 5 + 1 + 2;
      AI01393xDecoder.LAST_DIGIT_SIZE = 2;
      AI01393xDecoder.FIRST_THREE_DIGITS_SIZE = 10;
      return AI01393xDecoder;
  }(AI01decoder));

  var __extends$n = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AI013x0x1xDecoder =  (function (_super) {
      __extends$n(AI013x0x1xDecoder, _super);
      function AI013x0x1xDecoder(information, firstAIdigits, dateCode) {
          var _this = _super.call(this, information) || this;
          _this.dateCode = dateCode;
          _this.firstAIdigits = firstAIdigits;
          return _this;
      }
      AI013x0x1xDecoder.prototype.parseInformation = function () {
          if (this.getInformation().getSize() != AI013x0x1xDecoder.HEADER_SIZE + AI013x0x1xDecoder.GTIN_SIZE + AI013x0x1xDecoder.WEIGHT_SIZE + AI013x0x1xDecoder.DATE_SIZE) {
              throw new NotFoundException();
          }
          var buf = new StringBuilder();
          this.encodeCompressedGtin(buf, AI013x0x1xDecoder.HEADER_SIZE);
          this.encodeCompressedWeight(buf, AI013x0x1xDecoder.HEADER_SIZE + AI013x0x1xDecoder.GTIN_SIZE, AI013x0x1xDecoder.WEIGHT_SIZE);
          this.encodeCompressedDate(buf, AI013x0x1xDecoder.HEADER_SIZE + AI013x0x1xDecoder.GTIN_SIZE + AI013x0x1xDecoder.WEIGHT_SIZE);
          return buf.toString();
      };
      AI013x0x1xDecoder.prototype.encodeCompressedDate = function (buf, currentPos) {
          var numericDate = this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos, AI013x0x1xDecoder.DATE_SIZE);
          if (numericDate == 38400) {
              return;
          }
          buf.append('(');
          buf.append(this.dateCode);
          buf.append(')');
          var day = numericDate % 32;
          numericDate /= 32;
          var month = numericDate % 12 + 1;
          numericDate /= 12;
          var year = numericDate;
          if (year / 10 == 0) {
              buf.append('0');
          }
          buf.append(year);
          if (month / 10 == 0) {
              buf.append('0');
          }
          buf.append(month);
          if (day / 10 == 0) {
              buf.append('0');
          }
          buf.append(day);
      };
      AI013x0x1xDecoder.prototype.addWeightCode = function (buf, weight) {
          buf.append('(');
          buf.append(this.firstAIdigits);
          buf.append(weight / 100000);
          buf.append(')');
      };
      AI013x0x1xDecoder.prototype.checkWeight = function (weight) {
          return weight % 100000;
      };
      AI013x0x1xDecoder.HEADER_SIZE = 7 + 1;
      AI013x0x1xDecoder.WEIGHT_SIZE = 20;
      AI013x0x1xDecoder.DATE_SIZE = 16;
      return AI013x0x1xDecoder;
  }(AI01weightDecoder));

  function createDecoder(information) {
      try {
          if (information.get(1)) {
              return new AI01AndOtherAIs(information);
          }
          if (!information.get(2)) {
              return new AnyAIDecoder(information);
          }
          var fourBitEncodationMethod = GeneralAppIdDecoder.extractNumericValueFromBitArray(information, 1, 4);
          switch (fourBitEncodationMethod) {
              case 4: return new AI013103decoder(information);
              case 5: return new AI01320xDecoder(information);
          }
          var fiveBitEncodationMethod = GeneralAppIdDecoder.extractNumericValueFromBitArray(information, 1, 5);
          switch (fiveBitEncodationMethod) {
              case 12: return new AI01392xDecoder(information);
              case 13: return new AI01393xDecoder(information);
          }
          var sevenBitEncodationMethod = GeneralAppIdDecoder.extractNumericValueFromBitArray(information, 1, 7);
          switch (sevenBitEncodationMethod) {
              case 56: return new AI013x0x1xDecoder(information, '310', '11');
              case 57: return new AI013x0x1xDecoder(information, '320', '11');
              case 58: return new AI013x0x1xDecoder(information, '310', '13');
              case 59: return new AI013x0x1xDecoder(information, '320', '13');
              case 60: return new AI013x0x1xDecoder(information, '310', '15');
              case 61: return new AI013x0x1xDecoder(information, '320', '15');
              case 62: return new AI013x0x1xDecoder(information, '310', '17');
              case 63: return new AI013x0x1xDecoder(information, '320', '17');
          }
      }
      catch (e) {
          console.log(e);
          throw new IllegalStateException('unknown decoder: ' + information);
      }
  }

  var ExpandedPair =  (function () {
      function ExpandedPair(leftChar, rightChar, finderPatter, mayBeLast) {
          this.leftchar = leftChar;
          this.rightchar = rightChar;
          this.finderpattern = finderPatter;
          this.maybeLast = mayBeLast;
      }
      ExpandedPair.prototype.mayBeLast = function () {
          return this.maybeLast;
      };
      ExpandedPair.prototype.getLeftChar = function () {
          return this.leftchar;
      };
      ExpandedPair.prototype.getRightChar = function () {
          return this.rightchar;
      };
      ExpandedPair.prototype.getFinderPattern = function () {
          return this.finderpattern;
      };
      ExpandedPair.prototype.mustBeLast = function () {
          return this.rightchar == null;
      };
      ExpandedPair.prototype.toString = function () {
          return '[ ' + this.leftchar + ', ' + this.rightchar + ' : ' + (this.finderpattern == null ? 'null' : this.finderpattern.getValue()) + ' ]';
      };
      ExpandedPair.equals = function (o1, o2) {
          if (!(o1 instanceof ExpandedPair)) {
              return false;
          }
          return ExpandedPair.equalsOrNull(o1.leftchar, o2.leftchar) &&
              ExpandedPair.equalsOrNull(o1.rightchar, o2.rightchar) &&
              ExpandedPair.equalsOrNull(o1.finderpattern, o2.finderpattern);
      };
      ExpandedPair.equalsOrNull = function (o1, o2) {
          return o1 === null ? o2 === null : ExpandedPair.equals(o1, o2);
      };
      ExpandedPair.prototype.hashCode = function () {
          var value = this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
          return value;
      };
      return ExpandedPair;
  }());

  var ExpandedRow =  (function () {
      function ExpandedRow(pairs, rowNumber, wasReversed) {
          this.pairs = pairs;
          this.rowNumber = rowNumber;
          this.wasReversed = wasReversed;
      }
      ExpandedRow.prototype.getPairs = function () {
          return this.pairs;
      };
      ExpandedRow.prototype.getRowNumber = function () {
          return this.rowNumber;
      };
      ExpandedRow.prototype.isReversed = function () {
          return this.wasReversed;
      };
      ExpandedRow.prototype.isEquivalent = function (otherPairs) {
          return this.checkEqualitity(this, otherPairs);
      };
      ExpandedRow.prototype.toString = function () {
          return '{ ' + this.pairs + ' }';
      };
      ExpandedRow.prototype.equals = function (o1, o2) {
          if (!(o1 instanceof ExpandedRow)) {
              return false;
          }
          return this.checkEqualitity(o1, o2) && o1.wasReversed === o2.wasReversed;
      };
      ExpandedRow.prototype.checkEqualitity = function (pair1, pair2) {
          if (!pair1 || !pair2)
              return;
          var result;
          pair1.forEach(function (e1, i) {
              pair2.forEach(function (e2) {
                  if (e1.getLeftChar().getValue() === e2.getLeftChar().getValue() && e1.getRightChar().getValue() === e2.getRightChar().getValue() && e1.getFinderPatter().getValue() === e2.getFinderPatter().getValue()) {
                      result = true;
                  }
              });
          });
          return result;
      };
      return ExpandedRow;
  }());

  var __extends$m = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$p = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var RSSExpandedReader =  (function (_super) {
      __extends$m(RSSExpandedReader, _super);
      function RSSExpandedReader() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.pairs = new Array(RSSExpandedReader.MAX_PAIRS);
          _this.rows = new Array();
          _this.startEnd = [2];
          return _this;
      }
      RSSExpandedReader.prototype.decodeRow = function (rowNumber, row, hints) {
          this.pairs.length = 0;
          this.startFromEven = false;
          try {
              return RSSExpandedReader.constructResult(this.decodeRow2pairs(rowNumber, row));
          }
          catch (e) {
          }
          this.pairs.length = 0;
          this.startFromEven = true;
          return RSSExpandedReader.constructResult(this.decodeRow2pairs(rowNumber, row));
      };
      RSSExpandedReader.prototype.reset = function () {
          this.pairs.length = 0;
          this.rows.length = 0;
      };
      RSSExpandedReader.prototype.decodeRow2pairs = function (rowNumber, row) {
          var done = false;
          while (!done) {
              try {
                  this.pairs.push(this.retrieveNextPair(row, this.pairs, rowNumber));
              }
              catch (error) {
                  if (error instanceof NotFoundException) {
                      if (!this.pairs.length) {
                          throw new NotFoundException();
                      }
                      done = true;
                  }
              }
          }
          if (this.checkChecksum()) {
              return this.pairs;
          }
          var tryStackedDecode;
          if (this.rows.length) {
              tryStackedDecode = true;
          }
          else {
              tryStackedDecode = false;
          }
          this.storeRow(rowNumber, false);
          if (tryStackedDecode) {
              var ps = this.checkRowsBoolean(false);
              if (ps != null) {
                  return ps;
              }
              ps = this.checkRowsBoolean(true);
              if (ps != null) {
                  return ps;
              }
          }
          throw new NotFoundException();
      };
      RSSExpandedReader.prototype.checkRowsBoolean = function (reverse) {
          if (this.rows.length > 25) {
              this.rows.length = 0;
              return null;
          }
          this.pairs.length = 0;
          if (reverse) {
              this.rows = this.rows.reverse();
          }
          var ps = null;
          try {
              ps = this.checkRows(new Array(), 0);
          }
          catch (e) {
              console.log(e);
          }
          if (reverse) {
              this.rows = this.rows.reverse();
          }
          return ps;
      };
      RSSExpandedReader.prototype.checkRows = function (collectedRows, currentRow) {
          var e_1, _a;
          for (var i = currentRow; i < this.rows.length; i++) {
              var row = this.rows[i];
              this.pairs.length = 0;
              try {
                  for (var collectedRows_1 = (e_1 = void 0, __values$p(collectedRows)), collectedRows_1_1 = collectedRows_1.next(); !collectedRows_1_1.done; collectedRows_1_1 = collectedRows_1.next()) {
                      var collectedRow = collectedRows_1_1.value;
                      this.pairs.push(collectedRow.getPairs());
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (collectedRows_1_1 && !collectedRows_1_1.done && (_a = collectedRows_1.return)) _a.call(collectedRows_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              this.pairs.push(row.getPairs());
              if (!RSSExpandedReader.isValidSequence(this.pairs)) {
                  continue;
              }
              if (this.checkChecksum()) {
                  return this.pairs;
              }
              var rs = new Array(collectedRows);
              rs.push(row);
              try {
                  return this.checkRows(rs, i + 1);
              }
              catch (e) {
                  console.log(e);
              }
          }
          throw new NotFoundException();
      };
      RSSExpandedReader.isValidSequence = function (pairs) {
          var e_2, _a;
          try {
              for (var _b = __values$p(RSSExpandedReader.FINDER_PATTERN_SEQUENCES), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var sequence = _c.value;
                  if (pairs.length > sequence.length) {
                      continue;
                  }
                  var stop_1 = true;
                  for (var j = 0; j < pairs.length; j++) {
                      if (pairs[j].getFinderPattern().getValue() != sequence[j]) {
                          stop_1 = false;
                          break;
                      }
                  }
                  if (stop_1) {
                      return true;
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_2) throw e_2.error; }
          }
          return false;
      };
      RSSExpandedReader.prototype.storeRow = function (rowNumber, wasReversed) {
          var insertPos = 0;
          var prevIsSame = false;
          var nextIsSame = false;
          while (insertPos < this.rows.length) {
              var erow = this.rows[insertPos];
              if (erow.getRowNumber() > rowNumber) {
                  nextIsSame = erow.isEquivalent(this.pairs);
                  break;
              }
              prevIsSame = erow.isEquivalent(this.pairs);
              insertPos++;
          }
          if (nextIsSame || prevIsSame) {
              return;
          }
          if (RSSExpandedReader.isPartialRow(this.pairs, this.rows)) {
              return;
          }
          this.rows.push(insertPos, new ExpandedRow(this.pairs, rowNumber, wasReversed));
          this.removePartialRows(this.pairs, this.rows);
      };
      RSSExpandedReader.prototype.removePartialRows = function (pairs, rows) {
          var e_3, _a, e_4, _b, e_5, _c;
          try {
              for (var rows_1 = __values$p(rows), rows_1_1 = rows_1.next(); !rows_1_1.done; rows_1_1 = rows_1.next()) {
                  var row = rows_1_1.value;
                  if (row.getPairs().length === pairs.length) {
                      continue;
                  }
                  var allFound = true;
                  try {
                      for (var _d = (e_4 = void 0, __values$p(row.getPairs())), _e = _d.next(); !_e.done; _e = _d.next()) {
                          var p = _e.value;
                          var found = false;
                          try {
                              for (var pairs_1 = (e_5 = void 0, __values$p(pairs)), pairs_1_1 = pairs_1.next(); !pairs_1_1.done; pairs_1_1 = pairs_1.next()) {
                                  var pp = pairs_1_1.value;
                                  if (ExpandedPair.equals(p, pp)) {
                                      found = true;
                                      break;
                                  }
                              }
                          }
                          catch (e_5_1) { e_5 = { error: e_5_1 }; }
                          finally {
                              try {
                                  if (pairs_1_1 && !pairs_1_1.done && (_c = pairs_1.return)) _c.call(pairs_1);
                              }
                              finally { if (e_5) throw e_5.error; }
                          }
                          if (!found) {
                              allFound = false;
                          }
                      }
                  }
                  catch (e_4_1) { e_4 = { error: e_4_1 }; }
                  finally {
                      try {
                          if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                      }
                      finally { if (e_4) throw e_4.error; }
                  }
              }
          }
          catch (e_3_1) { e_3 = { error: e_3_1 }; }
          finally {
              try {
                  if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return)) _a.call(rows_1);
              }
              finally { if (e_3) throw e_3.error; }
          }
      };
      RSSExpandedReader.isPartialRow = function (pairs, rows) {
          var e_6, _a, e_7, _b, e_8, _c;
          try {
              for (var rows_2 = __values$p(rows), rows_2_1 = rows_2.next(); !rows_2_1.done; rows_2_1 = rows_2.next()) {
                  var r = rows_2_1.value;
                  var allFound = true;
                  try {
                      for (var pairs_2 = (e_7 = void 0, __values$p(pairs)), pairs_2_1 = pairs_2.next(); !pairs_2_1.done; pairs_2_1 = pairs_2.next()) {
                          var p = pairs_2_1.value;
                          var found = false;
                          try {
                              for (var _d = (e_8 = void 0, __values$p(r.getPairs())), _e = _d.next(); !_e.done; _e = _d.next()) {
                                  var pp = _e.value;
                                  if (p.equals(pp)) {
                                      found = true;
                                      break;
                                  }
                              }
                          }
                          catch (e_8_1) { e_8 = { error: e_8_1 }; }
                          finally {
                              try {
                                  if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                              }
                              finally { if (e_8) throw e_8.error; }
                          }
                          if (!found) {
                              allFound = false;
                              break;
                          }
                      }
                  }
                  catch (e_7_1) { e_7 = { error: e_7_1 }; }
                  finally {
                      try {
                          if (pairs_2_1 && !pairs_2_1.done && (_b = pairs_2.return)) _b.call(pairs_2);
                      }
                      finally { if (e_7) throw e_7.error; }
                  }
                  if (allFound) {
                      return true;
                  }
              }
          }
          catch (e_6_1) { e_6 = { error: e_6_1 }; }
          finally {
              try {
                  if (rows_2_1 && !rows_2_1.done && (_a = rows_2.return)) _a.call(rows_2);
              }
              finally { if (e_6) throw e_6.error; }
          }
          return false;
      };
      RSSExpandedReader.prototype.getRows = function () {
          return this.rows;
      };
      RSSExpandedReader.constructResult = function (pairs) {
          var binary = BitArrayBuilder.buildBitArray(pairs);
          var decoder = createDecoder(binary);
          var resultingString = decoder.parseInformation();
          var firstPoints = pairs[0].getFinderPattern().getResultPoints();
          var lastPoints = pairs[pairs.length - 1].getFinderPattern().getResultPoints();
          var points = [firstPoints[0], firstPoints[1], lastPoints[0], lastPoints[1]];
          return new Result(resultingString, null, null, points, BarcodeFormat$1.RSS_EXPANDED, null);
      };
      RSSExpandedReader.prototype.checkChecksum = function () {
          var firstPair = this.pairs.get(0);
          var checkCharacter = firstPair.getLeftChar();
          var firstCharacter = firstPair.getRightChar();
          if (firstCharacter == null) {
              return false;
          }
          var checksum = firstCharacter.getChecksumPortion();
          var s = 2;
          for (var i = 1; i < this.pairs.size(); ++i) {
              var currentPair = this.pairs.get(i);
              checksum += currentPair.getLeftChar().getChecksumPortion();
              s++;
              var currentRightChar = currentPair.getRightChar();
              if (currentRightChar != null) {
                  checksum += currentRightChar.getChecksumPortion();
                  s++;
              }
          }
          checksum %= 211;
          var checkCharacterValue = 211 * (s - 4) + checksum;
          return checkCharacterValue == checkCharacter.getValue();
      };
      RSSExpandedReader.getNextSecondBar = function (row, initialPos) {
          var currentPos;
          if (row.get(initialPos)) {
              currentPos = row.getNextUnset(initialPos);
              currentPos = row.getNextSet(currentPos);
          }
          else {
              currentPos = row.getNextSet(initialPos);
              currentPos = row.getNextUnset(currentPos);
          }
          return currentPos;
      };
      RSSExpandedReader.prototype.retrieveNextPair = function (row, previousPairs, rowNumber) {
          var isOddPattern = previousPairs.length % 2 == 0;
          if (this.startFromEven) {
              isOddPattern = !isOddPattern;
          }
          var pattern;
          var keepFinding = true;
          var forcedOffset = -1;
          do {
              this.findNextPair(row, previousPairs, forcedOffset);
              pattern = this.parseFoundFinderPattern(row, rowNumber, isOddPattern);
              if (pattern == null) {
                  forcedOffset = RSSExpandedReader.getNextSecondBar(row, this.startEnd[0]);
              }
              else {
                  keepFinding = false;
              }
          } while (keepFinding);
          var leftChar = this.decodeDataCharacter(row, pattern, isOddPattern, true);
          if (!this.isEmptyPair(previousPairs) && previousPairs[previousPairs.length - 1].mustBeLast()) {
              throw new NotFoundException();
          }
          var rightChar;
          try {
              rightChar = this.decodeDataCharacter(row, pattern, isOddPattern, false);
          }
          catch (e) {
              rightChar = null;
              console.log(e);
          }
          return new ExpandedPair(leftChar, rightChar, pattern, true);
      };
      RSSExpandedReader.prototype.isEmptyPair = function (pairs) {
          if (pairs.length === 0) {
              return true;
          }
          return false;
      };
      RSSExpandedReader.prototype.findNextPair = function (row, previousPairs, forcedOffset) {
          var counters = this.getDecodeFinderCounters();
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var width = row.getSize();
          var rowOffset;
          if (forcedOffset >= 0) {
              rowOffset = forcedOffset;
          }
          else if (this.isEmptyPair(previousPairs)) {
              rowOffset = 0;
          }
          else {
              var lastPair = previousPairs[previousPairs.length - 1];
              rowOffset = lastPair.getFinderPattern().getStartEnd()[1];
          }
          var searchingEvenPair = previousPairs.length % 2 != 0;
          if (this.startFromEven) {
              searchingEvenPair = !searchingEvenPair;
          }
          var isWhite = false;
          while (rowOffset < width) {
              isWhite = !row.get(rowOffset);
              if (!isWhite) {
                  break;
              }
              rowOffset++;
          }
          var counterPosition = 0;
          var patternStart = rowOffset;
          for (var x = rowOffset; x < width; x++) {
              if (row.get(x) != isWhite) {
                  counters[counterPosition]++;
              }
              else {
                  if (counterPosition == 3) {
                      if (searchingEvenPair) {
                          RSSExpandedReader.reverseCounters(counters);
                      }
                      if (RSSExpandedReader.isFinderPattern(counters)) {
                          this.startEnd[0] = patternStart;
                          this.startEnd[1] = x;
                          return;
                      }
                      if (searchingEvenPair) {
                          RSSExpandedReader.reverseCounters(counters);
                      }
                      patternStart += counters[0] + counters[1];
                      counters[0] = counters[2];
                      counters[1] = counters[3];
                      counters[2] = 0;
                      counters[3] = 0;
                      counterPosition--;
                  }
                  else {
                      counterPosition++;
                  }
                  counters[counterPosition] = 1;
                  isWhite = !isWhite;
              }
          }
          throw new NotFoundException();
      };
      RSSExpandedReader.reverseCounters = function (counters) {
          var length = counters.length;
          for (var i = 0; i < length / 2; ++i) {
              var tmp = counters[i];
              counters[i] = counters[length - i - 1];
              counters[length - i - 1] = tmp;
          }
      };
      RSSExpandedReader.prototype.parseFoundFinderPattern = function (row, rowNumber, oddPattern) {
          var firstCounter;
          var start;
          var end;
          if (oddPattern) {
              var firstElementStart = this.startEnd[0] - 1;
              while (firstElementStart >= 0 && !row.get(firstElementStart)) {
                  firstElementStart--;
              }
              firstElementStart++;
              firstCounter = this.startEnd[0] - firstElementStart;
              start = firstElementStart;
              end = this.startEnd[1];
          }
          else {
              start = this.startEnd[0];
              end = row.getNextUnset(this.startEnd[1] + 1);
              firstCounter = end - this.startEnd[1];
          }
          var counters = this.getDecodeFinderCounters();
          System.arraycopy(counters, 0, counters, 1, counters.length - 1);
          counters[0] = firstCounter;
          var value;
          try {
              value = this.parseFinderValue(counters, RSSExpandedReader.FINDER_PATTERNS);
          }
          catch (e) {
              return null;
          }
          return new FinderPattern$1(value, [start, end], start, end, rowNumber);
      };
      RSSExpandedReader.prototype.decodeDataCharacter = function (row, pattern, isOddPattern, leftChar) {
          var counters = this.getDataCharacterCounters();
          for (var x = 0; x < counters.length; x++) {
              counters[x] = 0;
          }
          if (leftChar) {
              RSSExpandedReader.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
          }
          else {
              RSSExpandedReader.recordPattern(row, pattern.getStartEnd()[1], counters);
              for (var i = 0, j = counters.length - 1; i < j; i++, j--) {
                  var temp = counters[i];
                  counters[i] = counters[j];
                  counters[j] = temp;
              }
          }
          var numModules = 17;
          var elementWidth = MathUtils.sum(new Int32Array(counters)) / numModules;
          var expectedElementWidth = (pattern.getStartEnd()[1] - pattern.getStartEnd()[0]) / 15.0;
          if (Math.abs(elementWidth - expectedElementWidth) / expectedElementWidth > 0.3) {
              throw new NotFoundException();
          }
          var oddCounts = this.getOddCounts();
          var evenCounts = this.getEvenCounts();
          var oddRoundingErrors = this.getOddRoundingErrors();
          var evenRoundingErrors = this.getEvenRoundingErrors();
          for (var i = 0; i < counters.length; i++) {
              var value_1 = 1.0 * counters[i] / elementWidth;
              var count = value_1 + 0.5;
              if (count < 1) {
                  if (value_1 < 0.3) {
                      throw new NotFoundException();
                  }
                  count = 1;
              }
              else if (count > 8) {
                  if (value_1 > 8.7) {
                      throw new NotFoundException();
                  }
                  count = 8;
              }
              var offset = i / 2;
              if ((i & 0x01) == 0) {
                  oddCounts[offset] = count;
                  oddRoundingErrors[offset] = value_1 - count;
              }
              else {
                  evenCounts[offset] = count;
                  evenRoundingErrors[offset] = value_1 - count;
              }
          }
          this.adjustOddEvenCounts(numModules);
          var weightRowNumber = 4 * pattern.getValue() + (isOddPattern ? 0 : 2) + (leftChar ? 0 : 1) - 1;
          var oddSum = 0;
          var oddChecksumPortion = 0;
          for (var i = oddCounts.length - 1; i >= 0; i--) {
              if (RSSExpandedReader.isNotA1left(pattern, isOddPattern, leftChar)) {
                  var weight = RSSExpandedReader.WEIGHTS[weightRowNumber][2 * i];
                  oddChecksumPortion += oddCounts[i] * weight;
              }
              oddSum += oddCounts[i];
          }
          var evenChecksumPortion = 0;
          for (var i = evenCounts.length - 1; i >= 0; i--) {
              if (RSSExpandedReader.isNotA1left(pattern, isOddPattern, leftChar)) {
                  var weight = RSSExpandedReader.WEIGHTS[weightRowNumber][2 * i + 1];
                  evenChecksumPortion += evenCounts[i] * weight;
              }
          }
          var checksumPortion = oddChecksumPortion + evenChecksumPortion;
          if ((oddSum & 0x01) != 0 || oddSum > 13 || oddSum < 4) {
              throw new NotFoundException();
          }
          var group = (13 - oddSum) / 2;
          var oddWidest = RSSExpandedReader.SYMBOL_WIDEST[group];
          var evenWidest = 9 - oddWidest;
          var vOdd = RSSUtils.getRSSvalue(oddCounts, oddWidest, true);
          var vEven = RSSUtils.getRSSvalue(evenCounts, evenWidest, false);
          var tEven = RSSExpandedReader.EVEN_TOTAL_SUBSET[group];
          var gSum = RSSExpandedReader.GSUM[group];
          var value = vOdd * tEven + vEven + gSum;
          return new DataCharacter(value, checksumPortion);
      };
      RSSExpandedReader.isNotA1left = function (pattern, isOddPattern, leftChar) {
          return !(pattern.getValue() == 0 && isOddPattern && leftChar);
      };
      RSSExpandedReader.prototype.adjustOddEvenCounts = function (numModules) {
          var oddSum = MathUtils.sum(new Int32Array(this.getOddCounts()));
          var evenSum = MathUtils.sum(new Int32Array(this.getEvenCounts()));
          var incrementOdd = false;
          var decrementOdd = false;
          if (oddSum > 13) {
              decrementOdd = true;
          }
          else if (oddSum < 4) {
              incrementOdd = true;
          }
          var incrementEven = false;
          var decrementEven = false;
          if (evenSum > 13) {
              decrementEven = true;
          }
          else if (evenSum < 4) {
              incrementEven = true;
          }
          var mismatch = oddSum + evenSum - numModules;
          var oddParityBad = (oddSum & 0x01) == 1;
          var evenParityBad = (evenSum & 0x01) == 0;
          if (mismatch == 1) {
              if (oddParityBad) {
                  if (evenParityBad) {
                      throw new NotFoundException();
                  }
                  decrementOdd = true;
              }
              else {
                  if (!evenParityBad) {
                      throw new NotFoundException();
                  }
                  decrementEven = true;
              }
          }
          else if (mismatch == -1) {
              if (oddParityBad) {
                  if (evenParityBad) {
                      throw new NotFoundException();
                  }
                  incrementOdd = true;
              }
              else {
                  if (!evenParityBad) {
                      throw new NotFoundException();
                  }
                  incrementEven = true;
              }
          }
          else if (mismatch == 0) {
              if (oddParityBad) {
                  if (!evenParityBad) {
                      throw new NotFoundException();
                  }
                  if (oddSum < evenSum) {
                      incrementOdd = true;
                      decrementEven = true;
                  }
                  else {
                      decrementOdd = true;
                      incrementEven = true;
                  }
              }
              else {
                  if (evenParityBad) {
                      throw new NotFoundException();
                  }
              }
          }
          else {
              throw new NotFoundException();
          }
          if (incrementOdd) {
              if (decrementOdd) {
                  throw new NotFoundException();
              }
              RSSExpandedReader.increment(this.getOddCounts(), this.getOddRoundingErrors());
          }
          if (decrementOdd) {
              RSSExpandedReader.decrement(this.getOddCounts(), this.getOddRoundingErrors());
          }
          if (incrementEven) {
              if (decrementEven) {
                  throw new NotFoundException();
              }
              RSSExpandedReader.increment(this.getEvenCounts(), this.getOddRoundingErrors());
          }
          if (decrementEven) {
              RSSExpandedReader.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
          }
      };
      RSSExpandedReader.SYMBOL_WIDEST = [7, 5, 4, 3, 1];
      RSSExpandedReader.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204];
      RSSExpandedReader.GSUM = [0, 348, 1388, 2948, 3988];
      RSSExpandedReader.FINDER_PATTERNS = [
          Int32Array.from([1, 8, 4, 1]),
          Int32Array.from([3, 6, 4, 1]),
          Int32Array.from([3, 4, 6, 1]),
          Int32Array.from([3, 2, 8, 1]),
          Int32Array.from([2, 6, 5, 1]),
          Int32Array.from([2, 2, 9, 1])
      ];
      RSSExpandedReader.WEIGHTS = [
          [1, 3, 9, 27, 81, 32, 96, 77],
          [20, 60, 180, 118, 143, 7, 21, 63],
          [189, 145, 13, 39, 117, 140, 209, 205],
          [193, 157, 49, 147, 19, 57, 171, 91],
          [62, 186, 136, 197, 169, 85, 44, 132],
          [185, 133, 188, 142, 4, 12, 36, 108],
          [113, 128, 173, 97, 80, 29, 87, 50],
          [150, 28, 84, 41, 123, 158, 52, 156],
          [46, 138, 203, 187, 139, 206, 196, 166],
          [76, 17, 51, 153, 37, 111, 122, 155],
          [43, 129, 176, 106, 107, 110, 119, 146],
          [16, 48, 144, 10, 30, 90, 59, 177],
          [109, 116, 137, 200, 178, 112, 125, 164],
          [70, 210, 208, 202, 184, 130, 179, 115],
          [134, 191, 151, 31, 93, 68, 204, 190],
          [148, 22, 66, 198, 172, 94, 71, 2],
          [6, 18, 54, 162, 64, 192, 154, 40],
          [120, 149, 25, 75, 14, 42, 126, 167],
          [79, 26, 78, 23, 69, 207, 199, 175],
          [103, 98, 83, 38, 114, 131, 182, 124],
          [161, 61, 183, 127, 170, 88, 53, 159],
          [55, 165, 73, 8, 24, 72, 5, 15],
          [45, 135, 194, 160, 58, 174, 100, 89]
      ];
      RSSExpandedReader.FINDER_PAT_A = 0;
      RSSExpandedReader.FINDER_PAT_B = 1;
      RSSExpandedReader.FINDER_PAT_C = 2;
      RSSExpandedReader.FINDER_PAT_D = 3;
      RSSExpandedReader.FINDER_PAT_E = 4;
      RSSExpandedReader.FINDER_PAT_F = 5;
      RSSExpandedReader.FINDER_PATTERN_SEQUENCES = [
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_D],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_C],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_F],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_F, RSSExpandedReader.FINDER_PAT_F],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_D],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_E],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_F, RSSExpandedReader.FINDER_PAT_F],
          [RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_A, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_B, RSSExpandedReader.FINDER_PAT_C, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_D, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_E, RSSExpandedReader.FINDER_PAT_F, RSSExpandedReader.FINDER_PAT_F],
      ];
      RSSExpandedReader.MAX_PAIRS = 11;
      return RSSExpandedReader;
  }(AbstractRSSReader));

  var __extends$l = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var Pair =  (function (_super) {
      __extends$l(Pair, _super);
      function Pair(value, checksumPortion, finderPattern) {
          var _this = _super.call(this, value, checksumPortion) || this;
          _this.count = 0;
          _this.finderPattern = finderPattern;
          return _this;
      }
      Pair.prototype.getFinderPattern = function () {
          return this.finderPattern;
      };
      Pair.prototype.getCount = function () {
          return this.count;
      };
      Pair.prototype.incrementCount = function () {
          this.count++;
      };
      return Pair;
  }(DataCharacter));

  var __extends$k = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$o = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var RSS14Reader =  (function (_super) {
      __extends$k(RSS14Reader, _super);
      function RSS14Reader() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.possibleLeftPairs = [];
          _this.possibleRightPairs = [];
          return _this;
      }
      RSS14Reader.prototype.decodeRow = function (rowNumber, row, hints) {
          var e_1, _a, e_2, _b;
          var leftPair = this.decodePair(row, false, rowNumber, hints);
          RSS14Reader.addOrTally(this.possibleLeftPairs, leftPair);
          row.reverse();
          var rightPair = this.decodePair(row, true, rowNumber, hints);
          RSS14Reader.addOrTally(this.possibleRightPairs, rightPair);
          row.reverse();
          try {
              for (var _c = __values$o(this.possibleLeftPairs), _d = _c.next(); !_d.done; _d = _c.next()) {
                  var left = _d.value;
                  if (left.getCount() > 1) {
                      try {
                          for (var _e = (e_2 = void 0, __values$o(this.possibleRightPairs)), _f = _e.next(); !_f.done; _f = _e.next()) {
                              var right = _f.value;
                              if (right.getCount() > 1 && RSS14Reader.checkChecksum(left, right)) {
                                  return RSS14Reader.constructResult(left, right);
                              }
                          }
                      }
                      catch (e_2_1) { e_2 = { error: e_2_1 }; }
                      finally {
                          try {
                              if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                          }
                          finally { if (e_2) throw e_2.error; }
                      }
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
              }
              finally { if (e_1) throw e_1.error; }
          }
          throw new NotFoundException();
      };
      RSS14Reader.addOrTally = function (possiblePairs, pair) {
          var e_3, _a;
          if (pair == null) {
              return;
          }
          var found = false;
          try {
              for (var possiblePairs_1 = __values$o(possiblePairs), possiblePairs_1_1 = possiblePairs_1.next(); !possiblePairs_1_1.done; possiblePairs_1_1 = possiblePairs_1.next()) {
                  var other = possiblePairs_1_1.value;
                  if (other.getValue() === pair.getValue()) {
                      other.incrementCount();
                      found = true;
                      break;
                  }
              }
          }
          catch (e_3_1) { e_3 = { error: e_3_1 }; }
          finally {
              try {
                  if (possiblePairs_1_1 && !possiblePairs_1_1.done && (_a = possiblePairs_1.return)) _a.call(possiblePairs_1);
              }
              finally { if (e_3) throw e_3.error; }
          }
          if (!found) {
              possiblePairs.push(pair);
          }
      };
      RSS14Reader.prototype.reset = function () {
          this.possibleLeftPairs.length = 0;
          this.possibleRightPairs.length = 0;
      };
      RSS14Reader.constructResult = function (leftPair, rightPair) {
          var symbolValue = 4537077 * leftPair.getValue() + rightPair.getValue();
          var text = new String(symbolValue).toString();
          var buffer = new StringBuilder();
          for (var i = 13 - text.length; i > 0; i--) {
              buffer.append('0');
          }
          buffer.append(text);
          var checkDigit = 0;
          for (var i = 0; i < 13; i++) {
              var digit = buffer.charAt(i).charCodeAt(0) - '0'.charCodeAt(0);
              checkDigit += ((i & 0x01) === 0) ? 3 * digit : digit;
          }
          checkDigit = 10 - (checkDigit % 10);
          if (checkDigit === 10) {
              checkDigit = 0;
          }
          buffer.append(checkDigit.toString());
          var leftPoints = leftPair.getFinderPattern().getResultPoints();
          var rightPoints = rightPair.getFinderPattern().getResultPoints();
          return new Result(buffer.toString(), null, 0, [leftPoints[0], leftPoints[1], rightPoints[0], rightPoints[1]], BarcodeFormat$1.RSS_14, new Date().getTime());
      };
      RSS14Reader.checkChecksum = function (leftPair, rightPair) {
          var checkValue = (leftPair.getChecksumPortion() + 16 * rightPair.getChecksumPortion()) % 79;
          var targetCheckValue = 9 * leftPair.getFinderPattern().getValue() + rightPair.getFinderPattern().getValue();
          if (targetCheckValue > 72) {
              targetCheckValue--;
          }
          if (targetCheckValue > 8) {
              targetCheckValue--;
          }
          return checkValue === targetCheckValue;
      };
      RSS14Reader.prototype.decodePair = function (row, right, rowNumber, hints) {
          try {
              var startEnd = this.findFinderPattern(row, right);
              var pattern = this.parseFoundFinderPattern(row, rowNumber, right, startEnd);
              var resultPointCallback = hints == null ? null : hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
              if (resultPointCallback != null) {
                  var center = (startEnd[0] + startEnd[1]) / 2.0;
                  if (right) {
                      center = row.getSize() - 1 - center;
                  }
                  resultPointCallback.foundPossibleResultPoint(new ResultPoint(center, rowNumber));
              }
              var outside = this.decodeDataCharacter(row, pattern, true);
              var inside = this.decodeDataCharacter(row, pattern, false);
              return new Pair(1597 * outside.getValue() + inside.getValue(), outside.getChecksumPortion() + 4 * inside.getChecksumPortion(), pattern);
          }
          catch (err) {
              return null;
          }
      };
      RSS14Reader.prototype.decodeDataCharacter = function (row, pattern, outsideChar) {
          var counters = this.getDataCharacterCounters();
          for (var x = 0; x < counters.length; x++) {
              counters[x] = 0;
          }
          if (outsideChar) {
              OneDReader.recordPatternInReverse(row, pattern.getStartEnd()[0], counters);
          }
          else {
              OneDReader.recordPattern(row, pattern.getStartEnd()[1] + 1, counters);
              for (var i = 0, j = counters.length - 1; i < j; i++, j--) {
                  var temp = counters[i];
                  counters[i] = counters[j];
                  counters[j] = temp;
              }
          }
          var numModules = outsideChar ? 16 : 15;
          var elementWidth = MathUtils.sum(new Int32Array(counters)) / numModules;
          var oddCounts = this.getOddCounts();
          var evenCounts = this.getEvenCounts();
          var oddRoundingErrors = this.getOddRoundingErrors();
          var evenRoundingErrors = this.getEvenRoundingErrors();
          for (var i = 0; i < counters.length; i++) {
              var value = counters[i] / elementWidth;
              var count = Math.floor(value + 0.5);
              if (count < 1) {
                  count = 1;
              }
              else if (count > 8) {
                  count = 8;
              }
              var offset = Math.floor(i / 2);
              if ((i & 0x01) === 0) {
                  oddCounts[offset] = count;
                  oddRoundingErrors[offset] = value - count;
              }
              else {
                  evenCounts[offset] = count;
                  evenRoundingErrors[offset] = value - count;
              }
          }
          this.adjustOddEvenCounts(outsideChar, numModules);
          var oddSum = 0;
          var oddChecksumPortion = 0;
          for (var i = oddCounts.length - 1; i >= 0; i--) {
              oddChecksumPortion *= 9;
              oddChecksumPortion += oddCounts[i];
              oddSum += oddCounts[i];
          }
          var evenChecksumPortion = 0;
          var evenSum = 0;
          for (var i = evenCounts.length - 1; i >= 0; i--) {
              evenChecksumPortion *= 9;
              evenChecksumPortion += evenCounts[i];
              evenSum += evenCounts[i];
          }
          var checksumPortion = oddChecksumPortion + 3 * evenChecksumPortion;
          if (outsideChar) {
              if ((oddSum & 0x01) !== 0 || oddSum > 12 || oddSum < 4) {
                  throw new NotFoundException();
              }
              var group = (12 - oddSum) / 2;
              var oddWidest = RSS14Reader.OUTSIDE_ODD_WIDEST[group];
              var evenWidest = 9 - oddWidest;
              var vOdd = RSSUtils.getRSSvalue(oddCounts, oddWidest, false);
              var vEven = RSSUtils.getRSSvalue(evenCounts, evenWidest, true);
              var tEven = RSS14Reader.OUTSIDE_EVEN_TOTAL_SUBSET[group];
              var gSum = RSS14Reader.OUTSIDE_GSUM[group];
              return new DataCharacter(vOdd * tEven + vEven + gSum, checksumPortion);
          }
          else {
              if ((evenSum & 0x01) !== 0 || evenSum > 10 || evenSum < 4) {
                  throw new NotFoundException();
              }
              var group = (10 - evenSum) / 2;
              var oddWidest = RSS14Reader.INSIDE_ODD_WIDEST[group];
              var evenWidest = 9 - oddWidest;
              var vOdd = RSSUtils.getRSSvalue(oddCounts, oddWidest, true);
              var vEven = RSSUtils.getRSSvalue(evenCounts, evenWidest, false);
              var tOdd = RSS14Reader.INSIDE_ODD_TOTAL_SUBSET[group];
              var gSum = RSS14Reader.INSIDE_GSUM[group];
              return new DataCharacter(vEven * tOdd + vOdd + gSum, checksumPortion);
          }
      };
      RSS14Reader.prototype.findFinderPattern = function (row, rightFinderPattern) {
          var counters = this.getDecodeFinderCounters();
          counters[0] = 0;
          counters[1] = 0;
          counters[2] = 0;
          counters[3] = 0;
          var width = row.getSize();
          var isWhite = false;
          var rowOffset = 0;
          while (rowOffset < width) {
              isWhite = !row.get(rowOffset);
              if (rightFinderPattern === isWhite) {
                  break;
              }
              rowOffset++;
          }
          var counterPosition = 0;
          var patternStart = rowOffset;
          for (var x = rowOffset; x < width; x++) {
              if (row.get(x) !== isWhite) {
                  counters[counterPosition]++;
              }
              else {
                  if (counterPosition === 3) {
                      if (AbstractRSSReader.isFinderPattern(counters)) {
                          return [patternStart, x];
                      }
                      patternStart += counters[0] + counters[1];
                      counters[0] = counters[2];
                      counters[1] = counters[3];
                      counters[2] = 0;
                      counters[3] = 0;
                      counterPosition--;
                  }
                  else {
                      counterPosition++;
                  }
                  counters[counterPosition] = 1;
                  isWhite = !isWhite;
              }
          }
          throw new NotFoundException();
      };
      RSS14Reader.prototype.parseFoundFinderPattern = function (row, rowNumber, right, startEnd) {
          var firstIsBlack = row.get(startEnd[0]);
          var firstElementStart = startEnd[0] - 1;
          while (firstElementStart >= 0 && firstIsBlack !== row.get(firstElementStart)) {
              firstElementStart--;
          }
          firstElementStart++;
          var firstCounter = startEnd[0] - firstElementStart;
          var counters = this.getDecodeFinderCounters();
          var copy = new Int32Array(counters.length);
          System.arraycopy(counters, 0, copy, 1, counters.length - 1);
          copy[0] = firstCounter;
          var value = this.parseFinderValue(copy, RSS14Reader.FINDER_PATTERNS);
          var start = firstElementStart;
          var end = startEnd[1];
          if (right) {
              start = row.getSize() - 1 - start;
              end = row.getSize() - 1 - end;
          }
          return new FinderPattern$1(value, [firstElementStart, startEnd[1]], start, end, rowNumber);
      };
      RSS14Reader.prototype.adjustOddEvenCounts = function (outsideChar, numModules) {
          var oddSum = MathUtils.sum(new Int32Array(this.getOddCounts()));
          var evenSum = MathUtils.sum(new Int32Array(this.getEvenCounts()));
          var incrementOdd = false;
          var decrementOdd = false;
          var incrementEven = false;
          var decrementEven = false;
          if (outsideChar) {
              if (oddSum > 12) {
                  decrementOdd = true;
              }
              else if (oddSum < 4) {
                  incrementOdd = true;
              }
              if (evenSum > 12) {
                  decrementEven = true;
              }
              else if (evenSum < 4) {
                  incrementEven = true;
              }
          }
          else {
              if (oddSum > 11) {
                  decrementOdd = true;
              }
              else if (oddSum < 5) {
                  incrementOdd = true;
              }
              if (evenSum > 10) {
                  decrementEven = true;
              }
              else if (evenSum < 4) {
                  incrementEven = true;
              }
          }
          var mismatch = oddSum + evenSum - numModules;
          var oddParityBad = (oddSum & 0x01) === (outsideChar ? 1 : 0);
          var evenParityBad = (evenSum & 0x01) === 1;
          if (mismatch === 1) {
              if (oddParityBad) {
                  if (evenParityBad) {
                      throw new NotFoundException();
                  }
                  decrementOdd = true;
              }
              else {
                  if (!evenParityBad) {
                      throw new NotFoundException();
                  }
                  decrementEven = true;
              }
          }
          else if (mismatch === -1) {
              if (oddParityBad) {
                  if (evenParityBad) {
                      throw new NotFoundException();
                  }
                  incrementOdd = true;
              }
              else {
                  if (!evenParityBad) {
                      throw new NotFoundException();
                  }
                  incrementEven = true;
              }
          }
          else if (mismatch === 0) {
              if (oddParityBad) {
                  if (!evenParityBad) {
                      throw new NotFoundException();
                  }
                  if (oddSum < evenSum) {
                      incrementOdd = true;
                      decrementEven = true;
                  }
                  else {
                      decrementOdd = true;
                      incrementEven = true;
                  }
              }
              else {
                  if (evenParityBad) {
                      throw new NotFoundException();
                  }
              }
          }
          else {
              throw new NotFoundException();
          }
          if (incrementOdd) {
              if (decrementOdd) {
                  throw new NotFoundException();
              }
              AbstractRSSReader.increment(this.getOddCounts(), this.getOddRoundingErrors());
          }
          if (decrementOdd) {
              AbstractRSSReader.decrement(this.getOddCounts(), this.getOddRoundingErrors());
          }
          if (incrementEven) {
              if (decrementEven) {
                  throw new NotFoundException();
              }
              AbstractRSSReader.increment(this.getEvenCounts(), this.getOddRoundingErrors());
          }
          if (decrementEven) {
              AbstractRSSReader.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
          }
      };
      RSS14Reader.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126];
      RSS14Reader.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81];
      RSS14Reader.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715];
      RSS14Reader.INSIDE_GSUM = [0, 336, 1036, 1516];
      RSS14Reader.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1];
      RSS14Reader.INSIDE_ODD_WIDEST = [2, 4, 6, 8];
      RSS14Reader.FINDER_PATTERNS = [
          Int32Array.from([3, 8, 2, 1]),
          Int32Array.from([3, 5, 5, 1]),
          Int32Array.from([3, 3, 7, 1]),
          Int32Array.from([3, 1, 9, 1]),
          Int32Array.from([2, 7, 4, 1]),
          Int32Array.from([2, 5, 6, 1]),
          Int32Array.from([2, 3, 8, 1]),
          Int32Array.from([1, 5, 7, 1]),
          Int32Array.from([1, 3, 9, 1]),
      ];
      return RSS14Reader;
  }(AbstractRSSReader));

  var __extends$j = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var MultiFormatOneDReader =  (function (_super) {
      __extends$j(MultiFormatOneDReader, _super);
      function MultiFormatOneDReader(hints) {
          var _this = _super.call(this) || this;
          _this.readers = [];
          var possibleFormats = !hints ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
          var useCode39CheckDigit = hints && hints.get(DecodeHintType$1.ASSUME_CODE_39_CHECK_DIGIT) !== undefined;
          if (possibleFormats) {
              if (possibleFormats.includes(BarcodeFormat$1.EAN_13) ||
                  possibleFormats.includes(BarcodeFormat$1.UPC_A) ||
                  possibleFormats.includes(BarcodeFormat$1.EAN_8) ||
                  possibleFormats.includes(BarcodeFormat$1.UPC_E)) {
                  _this.readers.push(new MultiFormatUPCEANReader(hints));
              }
              if (possibleFormats.includes(BarcodeFormat$1.CODE_39)) {
                  _this.readers.push(new Code39Reader(useCode39CheckDigit));
              }
              if (possibleFormats.includes(BarcodeFormat$1.CODE_128)) {
                  _this.readers.push(new Code128Reader());
              }
              if (possibleFormats.includes(BarcodeFormat$1.ITF)) {
                  _this.readers.push(new ITFReader());
              }
              if (possibleFormats.includes(BarcodeFormat$1.RSS_14)) {
                  _this.readers.push(new RSS14Reader());
              }
              if (possibleFormats.includes(BarcodeFormat$1.RSS_EXPANDED)) {
                  console.warn('RSS Expanded reader IS NOT ready for production yet! use at your own risk.');
                  _this.readers.push(new RSSExpandedReader());
              }
          }
          if (_this.readers.length === 0) {
              _this.readers.push(new MultiFormatUPCEANReader(hints));
              _this.readers.push(new Code39Reader());
              _this.readers.push(new MultiFormatUPCEANReader(hints));
              _this.readers.push(new Code128Reader());
              _this.readers.push(new ITFReader());
              _this.readers.push(new RSS14Reader());
          }
          return _this;
      }
      MultiFormatOneDReader.prototype.decodeRow = function (rowNumber, row, hints) {
          for (var i = 0; i < this.readers.length; i++) {
              try {
                  return this.readers[i].decodeRow(rowNumber, row, hints);
              }
              catch (re) {
              }
          }
          throw new NotFoundException();
      };
      MultiFormatOneDReader.prototype.reset = function () {
          this.readers.forEach(function (reader) { return reader.reset(); });
      };
      return MultiFormatOneDReader;
  }(OneDReader));

  var __extends$i = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  ((function (_super) {
      __extends$i(BrowserBarcodeReader, _super);
      function BrowserBarcodeReader(timeBetweenScansMillis, hints) {
          if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
          return _super.call(this, new MultiFormatOneDReader(hints), timeBetweenScansMillis, hints) || this;
      }
      return BrowserBarcodeReader;
  })(BrowserCodeReader));

  var __values$n = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var ECBlocks$1 =  (function () {
      function ECBlocks(ecCodewords, ecBlocks1, ecBlocks2) {
          this.ecCodewords = ecCodewords;
          this.ecBlocks = [ecBlocks1];
          ecBlocks2 && this.ecBlocks.push(ecBlocks2);
      }
      ECBlocks.prototype.getECCodewords = function () {
          return this.ecCodewords;
      };
      ECBlocks.prototype.getECBlocks = function () {
          return this.ecBlocks;
      };
      return ECBlocks;
  }());
  var ECB$1 =  (function () {
      function ECB(count, dataCodewords) {
          this.count = count;
          this.dataCodewords = dataCodewords;
      }
      ECB.prototype.getCount = function () {
          return this.count;
      };
      ECB.prototype.getDataCodewords = function () {
          return this.dataCodewords;
      };
      return ECB;
  }());
  var Version$1 =  (function () {
      function Version(versionNumber, symbolSizeRows, symbolSizeColumns, dataRegionSizeRows, dataRegionSizeColumns, ecBlocks) {
          var e_1, _a;
          this.versionNumber = versionNumber;
          this.symbolSizeRows = symbolSizeRows;
          this.symbolSizeColumns = symbolSizeColumns;
          this.dataRegionSizeRows = dataRegionSizeRows;
          this.dataRegionSizeColumns = dataRegionSizeColumns;
          this.ecBlocks = ecBlocks;
          var total = 0;
          var ecCodewords = ecBlocks.getECCodewords();
          var ecbArray = ecBlocks.getECBlocks();
          try {
              for (var ecbArray_1 = __values$n(ecbArray), ecbArray_1_1 = ecbArray_1.next(); !ecbArray_1_1.done; ecbArray_1_1 = ecbArray_1.next()) {
                  var ecBlock = ecbArray_1_1.value;
                  total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (ecbArray_1_1 && !ecbArray_1_1.done && (_a = ecbArray_1.return)) _a.call(ecbArray_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          this.totalCodewords = total;
      }
      Version.prototype.getVersionNumber = function () {
          return this.versionNumber;
      };
      Version.prototype.getSymbolSizeRows = function () {
          return this.symbolSizeRows;
      };
      Version.prototype.getSymbolSizeColumns = function () {
          return this.symbolSizeColumns;
      };
      Version.prototype.getDataRegionSizeRows = function () {
          return this.dataRegionSizeRows;
      };
      Version.prototype.getDataRegionSizeColumns = function () {
          return this.dataRegionSizeColumns;
      };
      Version.prototype.getTotalCodewords = function () {
          return this.totalCodewords;
      };
      Version.prototype.getECBlocks = function () {
          return this.ecBlocks;
      };
      Version.getVersionForDimensions = function (numRows, numColumns) {
          var e_2, _a;
          if ((numRows & 0x01) !== 0 || (numColumns & 0x01) !== 0) {
              throw new FormatException();
          }
          try {
              for (var _b = __values$n(Version.VERSIONS), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var version = _c.value;
                  if (version.symbolSizeRows === numRows && version.symbolSizeColumns === numColumns) {
                      return version;
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_2) throw e_2.error; }
          }
          throw new FormatException();
      };
      Version.prototype.toString = function () {
          return '' + this.versionNumber;
      };
      Version.buildVersions = function () {
          return [
              new Version(1, 10, 10, 8, 8, new ECBlocks$1(5, new ECB$1(1, 3))),
              new Version(2, 12, 12, 10, 10, new ECBlocks$1(7, new ECB$1(1, 5))),
              new Version(3, 14, 14, 12, 12, new ECBlocks$1(10, new ECB$1(1, 8))),
              new Version(4, 16, 16, 14, 14, new ECBlocks$1(12, new ECB$1(1, 12))),
              new Version(5, 18, 18, 16, 16, new ECBlocks$1(14, new ECB$1(1, 18))),
              new Version(6, 20, 20, 18, 18, new ECBlocks$1(18, new ECB$1(1, 22))),
              new Version(7, 22, 22, 20, 20, new ECBlocks$1(20, new ECB$1(1, 30))),
              new Version(8, 24, 24, 22, 22, new ECBlocks$1(24, new ECB$1(1, 36))),
              new Version(9, 26, 26, 24, 24, new ECBlocks$1(28, new ECB$1(1, 44))),
              new Version(10, 32, 32, 14, 14, new ECBlocks$1(36, new ECB$1(1, 62))),
              new Version(11, 36, 36, 16, 16, new ECBlocks$1(42, new ECB$1(1, 86))),
              new Version(12, 40, 40, 18, 18, new ECBlocks$1(48, new ECB$1(1, 114))),
              new Version(13, 44, 44, 20, 20, new ECBlocks$1(56, new ECB$1(1, 144))),
              new Version(14, 48, 48, 22, 22, new ECBlocks$1(68, new ECB$1(1, 174))),
              new Version(15, 52, 52, 24, 24, new ECBlocks$1(42, new ECB$1(2, 102))),
              new Version(16, 64, 64, 14, 14, new ECBlocks$1(56, new ECB$1(2, 140))),
              new Version(17, 72, 72, 16, 16, new ECBlocks$1(36, new ECB$1(4, 92))),
              new Version(18, 80, 80, 18, 18, new ECBlocks$1(48, new ECB$1(4, 114))),
              new Version(19, 88, 88, 20, 20, new ECBlocks$1(56, new ECB$1(4, 144))),
              new Version(20, 96, 96, 22, 22, new ECBlocks$1(68, new ECB$1(4, 174))),
              new Version(21, 104, 104, 24, 24, new ECBlocks$1(56, new ECB$1(6, 136))),
              new Version(22, 120, 120, 18, 18, new ECBlocks$1(68, new ECB$1(6, 175))),
              new Version(23, 132, 132, 20, 20, new ECBlocks$1(62, new ECB$1(8, 163))),
              new Version(24, 144, 144, 22, 22, new ECBlocks$1(62, new ECB$1(8, 156), new ECB$1(2, 155))),
              new Version(25, 8, 18, 6, 16, new ECBlocks$1(7, new ECB$1(1, 5))),
              new Version(26, 8, 32, 6, 14, new ECBlocks$1(11, new ECB$1(1, 10))),
              new Version(27, 12, 26, 10, 24, new ECBlocks$1(14, new ECB$1(1, 16))),
              new Version(28, 12, 36, 10, 16, new ECBlocks$1(18, new ECB$1(1, 22))),
              new Version(29, 16, 36, 14, 16, new ECBlocks$1(24, new ECB$1(1, 32))),
              new Version(30, 16, 48, 14, 22, new ECBlocks$1(28, new ECB$1(1, 49)))
          ];
      };
      Version.VERSIONS = Version.buildVersions();
      return Version;
  }());

  var BitMatrixParser$1 =  (function () {
      function BitMatrixParser(bitMatrix) {
          var dimension = bitMatrix.getHeight();
          if (dimension < 8 || dimension > 144 || (dimension & 0x01) !== 0) {
              throw new FormatException();
          }
          this.version = BitMatrixParser.readVersion(bitMatrix);
          this.mappingBitMatrix = this.extractDataRegion(bitMatrix);
          this.readMappingMatrix = new BitMatrix(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
      }
      BitMatrixParser.prototype.getVersion = function () {
          return this.version;
      };
      BitMatrixParser.readVersion = function (bitMatrix) {
          var numRows = bitMatrix.getHeight();
          var numColumns = bitMatrix.getWidth();
          return Version$1.getVersionForDimensions(numRows, numColumns);
      };
      BitMatrixParser.prototype.readCodewords = function () {
          var result = new Int8Array(this.version.getTotalCodewords());
          var resultOffset = 0;
          var row = 4;
          var column = 0;
          var numRows = this.mappingBitMatrix.getHeight();
          var numColumns = this.mappingBitMatrix.getWidth();
          var corner1Read = false;
          var corner2Read = false;
          var corner3Read = false;
          var corner4Read = false;
          do {
              if ((row === numRows) && (column === 0) && !corner1Read) {
                  result[resultOffset++] = this.readCorner1(numRows, numColumns) & 0xff;
                  row -= 2;
                  column += 2;
                  corner1Read = true;
              }
              else if ((row === numRows - 2) && (column === 0) && ((numColumns & 0x03) !== 0) && !corner2Read) {
                  result[resultOffset++] = this.readCorner2(numRows, numColumns) & 0xff;
                  row -= 2;
                  column += 2;
                  corner2Read = true;
              }
              else if ((row === numRows + 4) && (column === 2) && ((numColumns & 0x07) === 0) && !corner3Read) {
                  result[resultOffset++] = this.readCorner3(numRows, numColumns) & 0xff;
                  row -= 2;
                  column += 2;
                  corner3Read = true;
              }
              else if ((row === numRows - 2) && (column === 0) && ((numColumns & 0x07) === 4) && !corner4Read) {
                  result[resultOffset++] = this.readCorner4(numRows, numColumns) & 0xff;
                  row -= 2;
                  column += 2;
                  corner4Read = true;
              }
              else {
                  do {
                      if ((row < numRows) && (column >= 0) && !this.readMappingMatrix.get(column, row)) {
                          result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 0xff;
                      }
                      row -= 2;
                      column += 2;
                  } while ((row >= 0) && (column < numColumns));
                  row += 1;
                  column += 3;
                  do {
                      if ((row >= 0) && (column < numColumns) && !this.readMappingMatrix.get(column, row)) {
                          result[resultOffset++] = this.readUtah(row, column, numRows, numColumns) & 0xff;
                      }
                      row += 2;
                      column -= 2;
                  } while ((row < numRows) && (column >= 0));
                  row += 3;
                  column += 1;
              }
          } while ((row < numRows) || (column < numColumns));
          if (resultOffset !== this.version.getTotalCodewords()) {
              throw new FormatException();
          }
          return result;
      };
      BitMatrixParser.prototype.readModule = function (row, column, numRows, numColumns) {
          if (row < 0) {
              row += numRows;
              column += 4 - ((numRows + 4) & 0x07);
          }
          if (column < 0) {
              column += numColumns;
              row += 4 - ((numColumns + 4) & 0x07);
          }
          this.readMappingMatrix.set(column, row);
          return this.mappingBitMatrix.get(column, row);
      };
      BitMatrixParser.prototype.readUtah = function (row, column, numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(row - 2, column - 2, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row - 2, column - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row - 1, column - 2, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row - 1, column - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row - 1, column, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row, column - 2, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row, column - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(row, column, numRows, numColumns)) {
              currentByte |= 1;
          }
          return currentByte;
      };
      BitMatrixParser.prototype.readCorner1 = function (numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, 2, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          return currentByte;
      };
      BitMatrixParser.prototype.readCorner2 = function (numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 4, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          return currentByte;
      };
      BitMatrixParser.prototype.readCorner3 = function (numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 3, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 3, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          return currentByte;
      };
      BitMatrixParser.prototype.readCorner4 = function (numRows, numColumns) {
          var currentByte = 0;
          if (this.readModule(numRows - 3, 0, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 2, 0, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(numRows - 1, 0, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 2, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(0, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(1, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(2, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          currentByte <<= 1;
          if (this.readModule(3, numColumns - 1, numRows, numColumns)) {
              currentByte |= 1;
          }
          return currentByte;
      };
      BitMatrixParser.prototype.extractDataRegion = function (bitMatrix) {
          var symbolSizeRows = this.version.getSymbolSizeRows();
          var symbolSizeColumns = this.version.getSymbolSizeColumns();
          if (bitMatrix.getHeight() !== symbolSizeRows) {
              throw new IllegalArgumentException('Dimension of bitMatrix must match the version size');
          }
          var dataRegionSizeRows = this.version.getDataRegionSizeRows();
          var dataRegionSizeColumns = this.version.getDataRegionSizeColumns();
          var numDataRegionsRow = symbolSizeRows / dataRegionSizeRows | 0;
          var numDataRegionsColumn = symbolSizeColumns / dataRegionSizeColumns | 0;
          var sizeDataRegionRow = numDataRegionsRow * dataRegionSizeRows;
          var sizeDataRegionColumn = numDataRegionsColumn * dataRegionSizeColumns;
          var bitMatrixWithoutAlignment = new BitMatrix(sizeDataRegionColumn, sizeDataRegionRow);
          for (var dataRegionRow = 0; dataRegionRow < numDataRegionsRow; ++dataRegionRow) {
              var dataRegionRowOffset = dataRegionRow * dataRegionSizeRows;
              for (var dataRegionColumn = 0; dataRegionColumn < numDataRegionsColumn; ++dataRegionColumn) {
                  var dataRegionColumnOffset = dataRegionColumn * dataRegionSizeColumns;
                  for (var i = 0; i < dataRegionSizeRows; ++i) {
                      var readRowOffset = dataRegionRow * (dataRegionSizeRows + 2) + 1 + i;
                      var writeRowOffset = dataRegionRowOffset + i;
                      for (var j = 0; j < dataRegionSizeColumns; ++j) {
                          var readColumnOffset = dataRegionColumn * (dataRegionSizeColumns + 2) + 1 + j;
                          if (bitMatrix.get(readColumnOffset, readRowOffset)) {
                              var writeColumnOffset = dataRegionColumnOffset + j;
                              bitMatrixWithoutAlignment.set(writeColumnOffset, writeRowOffset);
                          }
                      }
                  }
              }
          }
          return bitMatrixWithoutAlignment;
      };
      return BitMatrixParser;
  }());

  var __values$m = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var DataBlock$1 =  (function () {
      function DataBlock(numDataCodewords, codewords) {
          this.numDataCodewords = numDataCodewords;
          this.codewords = codewords;
      }
      DataBlock.getDataBlocks = function (rawCodewords, version) {
          var e_1, _a, e_2, _b;
          var ecBlocks = version.getECBlocks();
          var totalBlocks = 0;
          var ecBlockArray = ecBlocks.getECBlocks();
          try {
              for (var ecBlockArray_1 = __values$m(ecBlockArray), ecBlockArray_1_1 = ecBlockArray_1.next(); !ecBlockArray_1_1.done; ecBlockArray_1_1 = ecBlockArray_1.next()) {
                  var ecBlock = ecBlockArray_1_1.value;
                  totalBlocks += ecBlock.getCount();
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (ecBlockArray_1_1 && !ecBlockArray_1_1.done && (_a = ecBlockArray_1.return)) _a.call(ecBlockArray_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          var result = new Array(totalBlocks);
          var numResultBlocks = 0;
          try {
              for (var ecBlockArray_2 = __values$m(ecBlockArray), ecBlockArray_2_1 = ecBlockArray_2.next(); !ecBlockArray_2_1.done; ecBlockArray_2_1 = ecBlockArray_2.next()) {
                  var ecBlock = ecBlockArray_2_1.value;
                  for (var i = 0; i < ecBlock.getCount(); i++) {
                      var numDataCodewords = ecBlock.getDataCodewords();
                      var numBlockCodewords = ecBlocks.getECCodewords() + numDataCodewords;
                      result[numResultBlocks++] = new DataBlock(numDataCodewords, new Uint8Array(numBlockCodewords));
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (ecBlockArray_2_1 && !ecBlockArray_2_1.done && (_b = ecBlockArray_2.return)) _b.call(ecBlockArray_2);
              }
              finally { if (e_2) throw e_2.error; }
          }
          var longerBlocksTotalCodewords = result[0].codewords.length;
          var longerBlocksNumDataCodewords = longerBlocksTotalCodewords - ecBlocks.getECCodewords();
          var shorterBlocksNumDataCodewords = longerBlocksNumDataCodewords - 1;
          var rawCodewordsOffset = 0;
          for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
              for (var j = 0; j < numResultBlocks; j++) {
                  result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
              }
          }
          var specialVersion = version.getVersionNumber() === 24;
          var numLongerBlocks = specialVersion ? 8 : numResultBlocks;
          for (var j = 0; j < numLongerBlocks; j++) {
              result[j].codewords[longerBlocksNumDataCodewords - 1] = rawCodewords[rawCodewordsOffset++];
          }
          var max = result[0].codewords.length;
          for (var i = longerBlocksNumDataCodewords; i < max; i++) {
              for (var j = 0; j < numResultBlocks; j++) {
                  var jOffset = specialVersion ? (j + 8) % numResultBlocks : j;
                  var iOffset = specialVersion && jOffset > 7 ? i - 1 : i;
                  result[jOffset].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
              }
          }
          if (rawCodewordsOffset !== rawCodewords.length) {
              throw new IllegalArgumentException();
          }
          return result;
      };
      DataBlock.prototype.getNumDataCodewords = function () {
          return this.numDataCodewords;
      };
      DataBlock.prototype.getCodewords = function () {
          return this.codewords;
      };
      return DataBlock;
  }());

  var BitSource =  (function () {
      function BitSource(bytes) {
          this.bytes = bytes;
          this.byteOffset = 0;
          this.bitOffset = 0;
      }
      BitSource.prototype.getBitOffset = function () {
          return this.bitOffset;
      };
      BitSource.prototype.getByteOffset = function () {
          return this.byteOffset;
      };
      BitSource.prototype.readBits = function (numBits ) {
          if (numBits < 1 || numBits > 32 || numBits > this.available()) {
              throw new IllegalArgumentException('' + numBits);
          }
          var result = 0;
          var bitOffset = this.bitOffset;
          var byteOffset = this.byteOffset;
          var bytes = this.bytes;
          if (bitOffset > 0) {
              var bitsLeft = 8 - bitOffset;
              var toRead = numBits < bitsLeft ? numBits : bitsLeft;
              var bitsToNotRead = bitsLeft - toRead;
              var mask = (0xFF >> (8 - toRead)) << bitsToNotRead;
              result = (bytes[byteOffset] & mask) >> bitsToNotRead;
              numBits -= toRead;
              bitOffset += toRead;
              if (bitOffset === 8) {
                  bitOffset = 0;
                  byteOffset++;
              }
          }
          if (numBits > 0) {
              while (numBits >= 8) {
                  result = (result << 8) | (bytes[byteOffset] & 0xFF);
                  byteOffset++;
                  numBits -= 8;
              }
              if (numBits > 0) {
                  var bitsToNotRead = 8 - numBits;
                  var mask = (0xFF >> bitsToNotRead) << bitsToNotRead;
                  result = (result << numBits) | ((bytes[byteOffset] & mask) >> bitsToNotRead);
                  bitOffset += numBits;
              }
          }
          this.bitOffset = bitOffset;
          this.byteOffset = byteOffset;
          return result;
      };
      BitSource.prototype.available = function () {
          return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
      };
      return BitSource;
  }());

  var Mode$2;
  (function (Mode) {
      Mode[Mode["PAD_ENCODE"] = 0] = "PAD_ENCODE";
      Mode[Mode["ASCII_ENCODE"] = 1] = "ASCII_ENCODE";
      Mode[Mode["C40_ENCODE"] = 2] = "C40_ENCODE";
      Mode[Mode["TEXT_ENCODE"] = 3] = "TEXT_ENCODE";
      Mode[Mode["ANSIX12_ENCODE"] = 4] = "ANSIX12_ENCODE";
      Mode[Mode["EDIFACT_ENCODE"] = 5] = "EDIFACT_ENCODE";
      Mode[Mode["BASE256_ENCODE"] = 6] = "BASE256_ENCODE";
  })(Mode$2 || (Mode$2 = {}));
  var DecodedBitStreamParser$2 =  (function () {
      function DecodedBitStreamParser() {
      }
      DecodedBitStreamParser.decode = function (bytes) {
          var bits = new BitSource(bytes);
          var result = new StringBuilder();
          var resultTrailer = new StringBuilder();
          var byteSegments = new Array();
          var mode = Mode$2.ASCII_ENCODE;
          do {
              if (mode === Mode$2.ASCII_ENCODE) {
                  mode = this.decodeAsciiSegment(bits, result, resultTrailer);
              }
              else {
                  switch (mode) {
                      case Mode$2.C40_ENCODE:
                          this.decodeC40Segment(bits, result);
                          break;
                      case Mode$2.TEXT_ENCODE:
                          this.decodeTextSegment(bits, result);
                          break;
                      case Mode$2.ANSIX12_ENCODE:
                          this.decodeAnsiX12Segment(bits, result);
                          break;
                      case Mode$2.EDIFACT_ENCODE:
                          this.decodeEdifactSegment(bits, result);
                          break;
                      case Mode$2.BASE256_ENCODE:
                          this.decodeBase256Segment(bits, result, byteSegments);
                          break;
                      default:
                          throw new FormatException();
                  }
                  mode = Mode$2.ASCII_ENCODE;
              }
          } while (mode !== Mode$2.PAD_ENCODE && bits.available() > 0);
          if (resultTrailer.length() > 0) {
              result.append(resultTrailer.toString());
          }
          return new DecoderResult(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, null);
      };
      DecodedBitStreamParser.decodeAsciiSegment = function (bits, result, resultTrailer) {
          var upperShift = false;
          do {
              var oneByte = bits.readBits(8);
              if (oneByte === 0) {
                  throw new FormatException();
              }
              else if (oneByte <= 128) {
                  if (upperShift) {
                      oneByte += 128;
                  }
                  result.append(String.fromCharCode(oneByte - 1));
                  return Mode$2.ASCII_ENCODE;
              }
              else if (oneByte === 129) {
                  return Mode$2.PAD_ENCODE;
              }
              else if (oneByte <= 229) {
                  var value = oneByte - 130;
                  if (value < 10) {
                      result.append('0');
                  }
                  result.append('' + value);
              }
              else {
                  switch (oneByte) {
                      case 230:
                          return Mode$2.C40_ENCODE;
                      case 231:
                          return Mode$2.BASE256_ENCODE;
                      case 232:
                          result.append(String.fromCharCode(29));
                          break;
                      case 233:
                      case 234:
                          break;
                      case 235:
                          upperShift = true;
                          break;
                      case 236:
                          result.append('[)>\u001E05\u001D');
                          resultTrailer.insert(0, '\u001E\u0004');
                          break;
                      case 237:
                          result.append('[)>\u001E06\u001D');
                          resultTrailer.insert(0, '\u001E\u0004');
                          break;
                      case 238:
                          return Mode$2.ANSIX12_ENCODE;
                      case 239:
                          return Mode$2.TEXT_ENCODE;
                      case 240:
                          return Mode$2.EDIFACT_ENCODE;
                      case 241:
                          break;
                      default:
                          if (oneByte !== 254 || bits.available() !== 0) {
                              throw new FormatException();
                          }
                          break;
                  }
              }
          } while (bits.available() > 0);
          return Mode$2.ASCII_ENCODE;
      };
      DecodedBitStreamParser.decodeC40Segment = function (bits, result) {
          var upperShift = false;
          var cValues = [];
          var shift = 0;
          do {
              if (bits.available() === 8) {
                  return;
              }
              var firstByte = bits.readBits(8);
              if (firstByte === 254) {
                  return;
              }
              this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
              for (var i = 0; i < 3; i++) {
                  var cValue = cValues[i];
                  switch (shift) {
                      case 0:
                          if (cValue < 3) {
                              shift = cValue + 1;
                          }
                          else if (cValue < this.C40_BASIC_SET_CHARS.length) {
                              var c40char = this.C40_BASIC_SET_CHARS[cValue];
                              if (upperShift) {
                                  result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                                  upperShift = false;
                              }
                              else {
                                  result.append(c40char);
                              }
                          }
                          else {
                              throw new FormatException();
                          }
                          break;
                      case 1:
                          if (upperShift) {
                              result.append(String.fromCharCode(cValue + 128));
                              upperShift = false;
                          }
                          else {
                              result.append(String.fromCharCode(cValue));
                          }
                          shift = 0;
                          break;
                      case 2:
                          if (cValue < this.C40_SHIFT2_SET_CHARS.length) {
                              var c40char = this.C40_SHIFT2_SET_CHARS[cValue];
                              if (upperShift) {
                                  result.append(String.fromCharCode(c40char.charCodeAt(0) + 128));
                                  upperShift = false;
                              }
                              else {
                                  result.append(c40char);
                              }
                          }
                          else {
                              switch (cValue) {
                                  case 27:
                                      result.append(String.fromCharCode(29));
                                      break;
                                  case 30:
                                      upperShift = true;
                                      break;
                                  default:
                                      throw new FormatException();
                              }
                          }
                          shift = 0;
                          break;
                      case 3:
                          if (upperShift) {
                              result.append(String.fromCharCode(cValue + 224));
                              upperShift = false;
                          }
                          else {
                              result.append(String.fromCharCode(cValue + 96));
                          }
                          shift = 0;
                          break;
                      default:
                          throw new FormatException();
                  }
              }
          } while (bits.available() > 0);
      };
      DecodedBitStreamParser.decodeTextSegment = function (bits, result) {
          var upperShift = false;
          var cValues = [];
          var shift = 0;
          do {
              if (bits.available() === 8) {
                  return;
              }
              var firstByte = bits.readBits(8);
              if (firstByte === 254) {
                  return;
              }
              this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
              for (var i = 0; i < 3; i++) {
                  var cValue = cValues[i];
                  switch (shift) {
                      case 0:
                          if (cValue < 3) {
                              shift = cValue + 1;
                          }
                          else if (cValue < this.TEXT_BASIC_SET_CHARS.length) {
                              var textChar = this.TEXT_BASIC_SET_CHARS[cValue];
                              if (upperShift) {
                                  result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                                  upperShift = false;
                              }
                              else {
                                  result.append(textChar);
                              }
                          }
                          else {
                              throw new FormatException();
                          }
                          break;
                      case 1:
                          if (upperShift) {
                              result.append(String.fromCharCode(cValue + 128));
                              upperShift = false;
                          }
                          else {
                              result.append(String.fromCharCode(cValue));
                          }
                          shift = 0;
                          break;
                      case 2:
                          if (cValue < this.TEXT_SHIFT2_SET_CHARS.length) {
                              var textChar = this.TEXT_SHIFT2_SET_CHARS[cValue];
                              if (upperShift) {
                                  result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                                  upperShift = false;
                              }
                              else {
                                  result.append(textChar);
                              }
                          }
                          else {
                              switch (cValue) {
                                  case 27:
                                      result.append(String.fromCharCode(29));
                                      break;
                                  case 30:
                                      upperShift = true;
                                      break;
                                  default:
                                      throw new FormatException();
                              }
                          }
                          shift = 0;
                          break;
                      case 3:
                          if (cValue < this.TEXT_SHIFT3_SET_CHARS.length) {
                              var textChar = this.TEXT_SHIFT3_SET_CHARS[cValue];
                              if (upperShift) {
                                  result.append(String.fromCharCode(textChar.charCodeAt(0) + 128));
                                  upperShift = false;
                              }
                              else {
                                  result.append(textChar);
                              }
                              shift = 0;
                          }
                          else {
                              throw new FormatException();
                          }
                          break;
                      default:
                          throw new FormatException();
                  }
              }
          } while (bits.available() > 0);
      };
      DecodedBitStreamParser.decodeAnsiX12Segment = function (bits, result) {
          var cValues = [];
          do {
              if (bits.available() === 8) {
                  return;
              }
              var firstByte = bits.readBits(8);
              if (firstByte === 254) {
                  return;
              }
              this.parseTwoBytes(firstByte, bits.readBits(8), cValues);
              for (var i = 0; i < 3; i++) {
                  var cValue = cValues[i];
                  switch (cValue) {
                      case 0:
                          result.append('\r');
                          break;
                      case 1:
                          result.append('*');
                          break;
                      case 2:
                          result.append('>');
                          break;
                      case 3:
                          result.append(' ');
                          break;
                      default:
                          if (cValue < 14) {
                              result.append(String.fromCharCode(cValue + 44));
                          }
                          else if (cValue < 40) {
                              result.append(String.fromCharCode(cValue + 51));
                          }
                          else {
                              throw new FormatException();
                          }
                          break;
                  }
              }
          } while (bits.available() > 0);
      };
      DecodedBitStreamParser.parseTwoBytes = function (firstByte, secondByte, result) {
          var fullBitValue = (firstByte << 8) + secondByte - 1;
          var temp = Math.floor(fullBitValue / 1600);
          result[0] = temp;
          fullBitValue -= temp * 1600;
          temp = Math.floor(fullBitValue / 40);
          result[1] = temp;
          result[2] = fullBitValue - temp * 40;
      };
      DecodedBitStreamParser.decodeEdifactSegment = function (bits, result) {
          do {
              if (bits.available() <= 16) {
                  return;
              }
              for (var i = 0; i < 4; i++) {
                  var edifactValue = bits.readBits(6);
                  if (edifactValue === 0x1F) {
                      var bitsLeft = 8 - bits.getBitOffset();
                      if (bitsLeft !== 8) {
                          bits.readBits(bitsLeft);
                      }
                      return;
                  }
                  if ((edifactValue & 0x20) === 0) {
                      edifactValue |= 0x40;
                  }
                  result.append(String.fromCharCode(edifactValue));
              }
          } while (bits.available() > 0);
      };
      DecodedBitStreamParser.decodeBase256Segment = function (bits, result, byteSegments) {
          var codewordPosition = 1 + bits.getByteOffset();
          var d1 = this.unrandomize255State(bits.readBits(8), codewordPosition++);
          var count;
          if (d1 === 0) {
              count = bits.available() / 8 | 0;
          }
          else if (d1 < 250) {
              count = d1;
          }
          else {
              count = 250 * (d1 - 249) + this.unrandomize255State(bits.readBits(8), codewordPosition++);
          }
          if (count < 0) {
              throw new FormatException();
          }
          var bytes = new Uint8Array(count);
          for (var i = 0; i < count; i++) {
              if (bits.available() < 8) {
                  throw new FormatException();
              }
              bytes[i] = this.unrandomize255State(bits.readBits(8), codewordPosition++);
          }
          byteSegments.push(bytes);
          try {
              result.append(StringEncoding.decode(bytes, StringUtils.ISO88591));
          }
          catch (uee) {
              throw new IllegalStateException('Platform does not support required encoding: ' + uee.message);
          }
      };
      DecodedBitStreamParser.unrandomize255State = function (randomizedBase256Codeword, base256CodewordPosition) {
          var pseudoRandomNumber = ((149 * base256CodewordPosition) % 255) + 1;
          var tempVariable = randomizedBase256Codeword - pseudoRandomNumber;
          return tempVariable >= 0 ? tempVariable : tempVariable + 256;
      };
      DecodedBitStreamParser.C40_BASIC_SET_CHARS = [
          '*', '*', '*', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
          'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];
      DecodedBitStreamParser.C40_SHIFT2_SET_CHARS = [
          '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.',
          '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_'
      ];
      DecodedBitStreamParser.TEXT_BASIC_SET_CHARS = [
          '*', '*', '*', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
          'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
      ];
      DecodedBitStreamParser.TEXT_SHIFT2_SET_CHARS = DecodedBitStreamParser.C40_SHIFT2_SET_CHARS;
      DecodedBitStreamParser.TEXT_SHIFT3_SET_CHARS = [
          '`', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
          'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '{', '|', '}', '~', String.fromCharCode(127)
      ];
      return DecodedBitStreamParser;
  }());

  var __values$l = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var Decoder$1 =  (function () {
      function Decoder() {
          this.rsDecoder = new ReedSolomonDecoder(GenericGF.DATA_MATRIX_FIELD_256);
      }
      Decoder.prototype.decode = function (bits) {
          var e_1, _a;
          var parser = new BitMatrixParser$1(bits);
          var version = parser.getVersion();
          var codewords = parser.readCodewords();
          var dataBlocks = DataBlock$1.getDataBlocks(codewords, version);
          var totalBytes = 0;
          try {
              for (var dataBlocks_1 = __values$l(dataBlocks), dataBlocks_1_1 = dataBlocks_1.next(); !dataBlocks_1_1.done; dataBlocks_1_1 = dataBlocks_1.next()) {
                  var db = dataBlocks_1_1.value;
                  totalBytes += db.getNumDataCodewords();
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (dataBlocks_1_1 && !dataBlocks_1_1.done && (_a = dataBlocks_1.return)) _a.call(dataBlocks_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          var resultBytes = new Uint8Array(totalBytes);
          var dataBlocksCount = dataBlocks.length;
          for (var j = 0; j < dataBlocksCount; j++) {
              var dataBlock = dataBlocks[j];
              var codewordBytes = dataBlock.getCodewords();
              var numDataCodewords = dataBlock.getNumDataCodewords();
              this.correctErrors(codewordBytes, numDataCodewords);
              for (var i = 0; i < numDataCodewords; i++) {
                  resultBytes[i * dataBlocksCount + j] = codewordBytes[i];
              }
          }
          return DecodedBitStreamParser$2.decode(resultBytes);
      };
      Decoder.prototype.correctErrors = function (codewordBytes, numDataCodewords) {
          var codewordsInts = new Int32Array(codewordBytes);
          try {
              this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
          }
          catch (ignored ) {
              throw new ChecksumException();
          }
          for (var i = 0; i < numDataCodewords; i++) {
              codewordBytes[i] = codewordsInts[i];
          }
      };
      return Decoder;
  }());

  var Detector$2 =  (function () {
      function Detector(image) {
          this.image = image;
          this.rectangleDetector = new WhiteRectangleDetector(this.image);
      }
      Detector.prototype.detect = function () {
          var cornerPoints = this.rectangleDetector.detect();
          var points = this.detectSolid1(cornerPoints);
          points = this.detectSolid2(points);
          points[3] = this.correctTopRight(points);
          if (!points[3]) {
              throw new NotFoundException();
          }
          points = this.shiftToModuleCenter(points);
          var topLeft = points[0];
          var bottomLeft = points[1];
          var bottomRight = points[2];
          var topRight = points[3];
          var dimensionTop = this.transitionsBetween(topLeft, topRight) + 1;
          var dimensionRight = this.transitionsBetween(bottomRight, topRight) + 1;
          if ((dimensionTop & 0x01) === 1) {
              dimensionTop += 1;
          }
          if ((dimensionRight & 0x01) === 1) {
              dimensionRight += 1;
          }
          if (4 * dimensionTop < 7 * dimensionRight && 4 * dimensionRight < 7 * dimensionTop) {
              dimensionTop = dimensionRight = Math.max(dimensionTop, dimensionRight);
          }
          var bits = Detector.sampleGrid(this.image, topLeft, bottomLeft, bottomRight, topRight, dimensionTop, dimensionRight);
          return new DetectorResult(bits, [topLeft, bottomLeft, bottomRight, topRight]);
      };
      Detector.shiftPoint = function (point, to, div) {
          var x = (to.getX() - point.getX()) / (div + 1);
          var y = (to.getY() - point.getY()) / (div + 1);
          return new ResultPoint(point.getX() + x, point.getY() + y);
      };
      Detector.moveAway = function (point, fromX, fromY) {
          var x = point.getX();
          var y = point.getY();
          if (x < fromX) {
              x -= 1;
          }
          else {
              x += 1;
          }
          if (y < fromY) {
              y -= 1;
          }
          else {
              y += 1;
          }
          return new ResultPoint(x, y);
      };
      Detector.prototype.detectSolid1 = function (cornerPoints) {
          var pointA = cornerPoints[0];
          var pointB = cornerPoints[1];
          var pointC = cornerPoints[3];
          var pointD = cornerPoints[2];
          var trAB = this.transitionsBetween(pointA, pointB);
          var trBC = this.transitionsBetween(pointB, pointC);
          var trCD = this.transitionsBetween(pointC, pointD);
          var trDA = this.transitionsBetween(pointD, pointA);
          var min = trAB;
          var points = [pointD, pointA, pointB, pointC];
          if (min > trBC) {
              min = trBC;
              points[0] = pointA;
              points[1] = pointB;
              points[2] = pointC;
              points[3] = pointD;
          }
          if (min > trCD) {
              min = trCD;
              points[0] = pointB;
              points[1] = pointC;
              points[2] = pointD;
              points[3] = pointA;
          }
          if (min > trDA) {
              points[0] = pointC;
              points[1] = pointD;
              points[2] = pointA;
              points[3] = pointB;
          }
          return points;
      };
      Detector.prototype.detectSolid2 = function (points) {
          var pointA = points[0];
          var pointB = points[1];
          var pointC = points[2];
          var pointD = points[3];
          var tr = this.transitionsBetween(pointA, pointD);
          var pointBs = Detector.shiftPoint(pointB, pointC, (tr + 1) * 4);
          var pointCs = Detector.shiftPoint(pointC, pointB, (tr + 1) * 4);
          var trBA = this.transitionsBetween(pointBs, pointA);
          var trCD = this.transitionsBetween(pointCs, pointD);
          if (trBA < trCD) {
              points[0] = pointA;
              points[1] = pointB;
              points[2] = pointC;
              points[3] = pointD;
          }
          else {
              points[0] = pointB;
              points[1] = pointC;
              points[2] = pointD;
              points[3] = pointA;
          }
          return points;
      };
      Detector.prototype.correctTopRight = function (points) {
          var pointA = points[0];
          var pointB = points[1];
          var pointC = points[2];
          var pointD = points[3];
          var trTop = this.transitionsBetween(pointA, pointD);
          var trRight = this.transitionsBetween(pointB, pointD);
          var pointAs = Detector.shiftPoint(pointA, pointB, (trRight + 1) * 4);
          var pointCs = Detector.shiftPoint(pointC, pointB, (trTop + 1) * 4);
          trTop = this.transitionsBetween(pointAs, pointD);
          trRight = this.transitionsBetween(pointCs, pointD);
          var candidate1 = new ResultPoint(pointD.getX() + (pointC.getX() - pointB.getX()) / (trTop + 1), pointD.getY() + (pointC.getY() - pointB.getY()) / (trTop + 1));
          var candidate2 = new ResultPoint(pointD.getX() + (pointA.getX() - pointB.getX()) / (trRight + 1), pointD.getY() + (pointA.getY() - pointB.getY()) / (trRight + 1));
          if (!this.isValid(candidate1)) {
              if (this.isValid(candidate2)) {
                  return candidate2;
              }
              return null;
          }
          if (!this.isValid(candidate2)) {
              return candidate1;
          }
          var sumc1 = this.transitionsBetween(pointAs, candidate1) + this.transitionsBetween(pointCs, candidate1);
          var sumc2 = this.transitionsBetween(pointAs, candidate2) + this.transitionsBetween(pointCs, candidate2);
          if (sumc1 > sumc2) {
              return candidate1;
          }
          else {
              return candidate2;
          }
      };
      Detector.prototype.shiftToModuleCenter = function (points) {
          var pointA = points[0];
          var pointB = points[1];
          var pointC = points[2];
          var pointD = points[3];
          var dimH = this.transitionsBetween(pointA, pointD) + 1;
          var dimV = this.transitionsBetween(pointC, pointD) + 1;
          var pointAs = Detector.shiftPoint(pointA, pointB, dimV * 4);
          var pointCs = Detector.shiftPoint(pointC, pointB, dimH * 4);
          dimH = this.transitionsBetween(pointAs, pointD) + 1;
          dimV = this.transitionsBetween(pointCs, pointD) + 1;
          if ((dimH & 0x01) === 1) {
              dimH += 1;
          }
          if ((dimV & 0x01) === 1) {
              dimV += 1;
          }
          var centerX = (pointA.getX() + pointB.getX() + pointC.getX() + pointD.getX()) / 4;
          var centerY = (pointA.getY() + pointB.getY() + pointC.getY() + pointD.getY()) / 4;
          pointA = Detector.moveAway(pointA, centerX, centerY);
          pointB = Detector.moveAway(pointB, centerX, centerY);
          pointC = Detector.moveAway(pointC, centerX, centerY);
          pointD = Detector.moveAway(pointD, centerX, centerY);
          var pointBs;
          var pointDs;
          pointAs = Detector.shiftPoint(pointA, pointB, dimV * 4);
          pointAs = Detector.shiftPoint(pointAs, pointD, dimH * 4);
          pointBs = Detector.shiftPoint(pointB, pointA, dimV * 4);
          pointBs = Detector.shiftPoint(pointBs, pointC, dimH * 4);
          pointCs = Detector.shiftPoint(pointC, pointD, dimV * 4);
          pointCs = Detector.shiftPoint(pointCs, pointB, dimH * 4);
          pointDs = Detector.shiftPoint(pointD, pointC, dimV * 4);
          pointDs = Detector.shiftPoint(pointDs, pointA, dimH * 4);
          return [pointAs, pointBs, pointCs, pointDs];
      };
      Detector.prototype.isValid = function (p) {
          return p.getX() >= 0 && p.getX() < this.image.getWidth() && p.getY() > 0 && p.getY() < this.image.getHeight();
      };
      Detector.sampleGrid = function (image, topLeft, bottomLeft, bottomRight, topRight, dimensionX, dimensionY) {
          var sampler = GridSamplerInstance.getInstance();
          return sampler.sampleGrid(image, dimensionX, dimensionY, 0.5, 0.5, dimensionX - 0.5, 0.5, dimensionX - 0.5, dimensionY - 0.5, 0.5, dimensionY - 0.5, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRight.getX(), bottomRight.getY(), bottomLeft.getX(), bottomLeft.getY());
      };
      Detector.prototype.transitionsBetween = function (from, to) {
          var fromX = Math.trunc(from.getX());
          var fromY = Math.trunc(from.getY());
          var toX = Math.trunc(to.getX());
          var toY = Math.trunc(to.getY());
          var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
          if (steep) {
              var temp = fromX;
              fromX = fromY;
              fromY = temp;
              temp = toX;
              toX = toY;
              toY = temp;
          }
          var dx = Math.abs(toX - fromX);
          var dy = Math.abs(toY - fromY);
          var error = -dx / 2;
          var ystep = fromY < toY ? 1 : -1;
          var xstep = fromX < toX ? 1 : -1;
          var transitions = 0;
          var inBlack = this.image.get(steep ? fromY : fromX, steep ? fromX : fromY);
          for (var x = fromX, y = fromY; x !== toX; x += xstep) {
              var isBlack = this.image.get(steep ? y : x, steep ? x : y);
              if (isBlack !== inBlack) {
                  transitions++;
                  inBlack = isBlack;
              }
              error += dy;
              if (error > 0) {
                  if (y === toY) {
                      break;
                  }
                  y += ystep;
                  error -= dx;
              }
          }
          return transitions;
      };
      return Detector;
  }());

  var DataMatrixReader =  (function () {
      function DataMatrixReader() {
          this.decoder = new Decoder$1();
      }
      DataMatrixReader.prototype.decode = function (image, hints) {
          if (hints === void 0) { hints = null; }
          var decoderResult;
          var points;
          if (hints != null && hints.has(DecodeHintType$1.PURE_BARCODE)) {
              var bits = DataMatrixReader.extractPureBits(image.getBlackMatrix());
              decoderResult = this.decoder.decode(bits);
              points = DataMatrixReader.NO_POINTS;
          }
          else {
              var detectorResult = new Detector$2(image.getBlackMatrix()).detect();
              decoderResult = this.decoder.decode(detectorResult.getBits());
              points = detectorResult.getPoints();
          }
          var rawBytes = decoderResult.getRawBytes();
          var result = new Result(decoderResult.getText(), rawBytes, 8 * rawBytes.length, points, BarcodeFormat$1.DATA_MATRIX, System.currentTimeMillis());
          var byteSegments = decoderResult.getByteSegments();
          if (byteSegments != null) {
              result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
          }
          var ecLevel = decoderResult.getECLevel();
          if (ecLevel != null) {
              result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
          }
          return result;
      };
      DataMatrixReader.prototype.reset = function () {
      };
      DataMatrixReader.extractPureBits = function (image) {
          var leftTopBlack = image.getTopLeftOnBit();
          var rightBottomBlack = image.getBottomRightOnBit();
          if (leftTopBlack == null || rightBottomBlack == null) {
              throw new NotFoundException();
          }
          var moduleSize = this.moduleSize(leftTopBlack, image);
          var top = leftTopBlack[1];
          var bottom = rightBottomBlack[1];
          var left = leftTopBlack[0];
          var right = rightBottomBlack[0];
          var matrixWidth = (right - left + 1) / moduleSize;
          var matrixHeight = (bottom - top + 1) / moduleSize;
          if (matrixWidth <= 0 || matrixHeight <= 0) {
              throw new NotFoundException();
          }
          var nudge = moduleSize / 2;
          top += nudge;
          left += nudge;
          var bits = new BitMatrix(matrixWidth, matrixHeight);
          for (var y = 0; y < matrixHeight; y++) {
              var iOffset = top + y * moduleSize;
              for (var x = 0; x < matrixWidth; x++) {
                  if (image.get(left + x * moduleSize, iOffset)) {
                      bits.set(x, y);
                  }
              }
          }
          return bits;
      };
      DataMatrixReader.moduleSize = function (leftTopBlack, image) {
          var width = image.getWidth();
          var x = leftTopBlack[0];
          var y = leftTopBlack[1];
          while (x < width && image.get(x, y)) {
              x++;
          }
          if (x === width) {
              throw new NotFoundException();
          }
          var moduleSize = x - leftTopBlack[0];
          if (moduleSize === 0) {
              throw new NotFoundException();
          }
          return moduleSize;
      };
      DataMatrixReader.NO_POINTS = [];
      return DataMatrixReader;
  }());

  var __extends$h = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  ((function (_super) {
      __extends$h(BrowserDatamatrixCodeReader, _super);
      function BrowserDatamatrixCodeReader(timeBetweenScansMillis) {
          if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
          return _super.call(this, new DataMatrixReader(), timeBetweenScansMillis) || this;
      }
      return BrowserDatamatrixCodeReader;
  })(BrowserCodeReader));

  var ErrorCorrectionLevelValues;
  (function (ErrorCorrectionLevelValues) {
      ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["L"] = 0] = "L";
      ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["M"] = 1] = "M";
      ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["Q"] = 2] = "Q";
      ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["H"] = 3] = "H";
  })(ErrorCorrectionLevelValues || (ErrorCorrectionLevelValues = {}));
  var ErrorCorrectionLevel =  (function () {
      function ErrorCorrectionLevel(value, stringValue, bits ) {
          this.value = value;
          this.stringValue = stringValue;
          this.bits = bits;
          ErrorCorrectionLevel.FOR_BITS.set(bits, this);
          ErrorCorrectionLevel.FOR_VALUE.set(value, this);
      }
      ErrorCorrectionLevel.prototype.getValue = function () {
          return this.value;
      };
      ErrorCorrectionLevel.prototype.getBits = function () {
          return this.bits;
      };
      ErrorCorrectionLevel.fromString = function (s) {
          switch (s) {
              case 'L': return ErrorCorrectionLevel.L;
              case 'M': return ErrorCorrectionLevel.M;
              case 'Q': return ErrorCorrectionLevel.Q;
              case 'H': return ErrorCorrectionLevel.H;
              default: throw new ArgumentException(s + 'not available');
          }
      };
      ErrorCorrectionLevel.prototype.toString = function () {
          return this.stringValue;
      };
      ErrorCorrectionLevel.prototype.equals = function (o) {
          if (!(o instanceof ErrorCorrectionLevel)) {
              return false;
          }
          var other = o;
          return this.value === other.value;
      };
      ErrorCorrectionLevel.forBits = function (bits ) {
          if (bits < 0 || bits >= ErrorCorrectionLevel.FOR_BITS.size) {
              throw new IllegalArgumentException();
          }
          return ErrorCorrectionLevel.FOR_BITS.get(bits);
      };
      ErrorCorrectionLevel.FOR_BITS = new Map();
      ErrorCorrectionLevel.FOR_VALUE = new Map();
      ErrorCorrectionLevel.L = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.L, 'L', 0x01);
      ErrorCorrectionLevel.M = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.M, 'M', 0x00);
      ErrorCorrectionLevel.Q = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.Q, 'Q', 0x03);
      ErrorCorrectionLevel.H = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.H, 'H', 0x02);
      return ErrorCorrectionLevel;
  }());

  var __values$k = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var FormatInformation =  (function () {
      function FormatInformation(formatInfo ) {
          this.errorCorrectionLevel = ErrorCorrectionLevel.forBits((formatInfo >> 3) & 0x03);
          this.dataMask =  (formatInfo & 0x07);
      }
      FormatInformation.numBitsDiffering = function (a , b ) {
          return Integer.bitCount(a ^ b);
      };
      FormatInformation.decodeFormatInformation = function (maskedFormatInfo1 , maskedFormatInfo2 ) {
          var formatInfo = FormatInformation.doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2);
          if (formatInfo !== null) {
              return formatInfo;
          }
          return FormatInformation.doDecodeFormatInformation(maskedFormatInfo1 ^ FormatInformation.FORMAT_INFO_MASK_QR, maskedFormatInfo2 ^ FormatInformation.FORMAT_INFO_MASK_QR);
      };
      FormatInformation.doDecodeFormatInformation = function (maskedFormatInfo1 , maskedFormatInfo2 ) {
          var e_1, _a;
          var bestDifference = Number.MAX_SAFE_INTEGER;
          var bestFormatInfo = 0;
          try {
              for (var _b = __values$k(FormatInformation.FORMAT_INFO_DECODE_LOOKUP), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var decodeInfo = _c.value;
                  var targetInfo = decodeInfo[0];
                  if (targetInfo === maskedFormatInfo1 || targetInfo === maskedFormatInfo2) {
                      return new FormatInformation(decodeInfo[1]);
                  }
                  var bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo1, targetInfo);
                  if (bitsDifference < bestDifference) {
                      bestFormatInfo = decodeInfo[1];
                      bestDifference = bitsDifference;
                  }
                  if (maskedFormatInfo1 !== maskedFormatInfo2) {
                      bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo2, targetInfo);
                      if (bitsDifference < bestDifference) {
                          bestFormatInfo = decodeInfo[1];
                          bestDifference = bitsDifference;
                      }
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
          if (bestDifference <= 3) {
              return new FormatInformation(bestFormatInfo);
          }
          return null;
      };
      FormatInformation.prototype.getErrorCorrectionLevel = function () {
          return this.errorCorrectionLevel;
      };
      FormatInformation.prototype.getDataMask = function () {
          return this.dataMask;
      };
      FormatInformation.prototype.hashCode = function () {
          return (this.errorCorrectionLevel.getBits() << 3) | this.dataMask;
      };
      FormatInformation.prototype.equals = function (o) {
          if (!(o instanceof FormatInformation)) {
              return false;
          }
          var other = o;
          return this.errorCorrectionLevel === other.errorCorrectionLevel &&
              this.dataMask === other.dataMask;
      };
      FormatInformation.FORMAT_INFO_MASK_QR = 0x5412;
      FormatInformation.FORMAT_INFO_DECODE_LOOKUP = [
          Int32Array.from([0x5412, 0x00]),
          Int32Array.from([0x5125, 0x01]),
          Int32Array.from([0x5E7C, 0x02]),
          Int32Array.from([0x5B4B, 0x03]),
          Int32Array.from([0x45F9, 0x04]),
          Int32Array.from([0x40CE, 0x05]),
          Int32Array.from([0x4F97, 0x06]),
          Int32Array.from([0x4AA0, 0x07]),
          Int32Array.from([0x77C4, 0x08]),
          Int32Array.from([0x72F3, 0x09]),
          Int32Array.from([0x7DAA, 0x0A]),
          Int32Array.from([0x789D, 0x0B]),
          Int32Array.from([0x662F, 0x0C]),
          Int32Array.from([0x6318, 0x0D]),
          Int32Array.from([0x6C41, 0x0E]),
          Int32Array.from([0x6976, 0x0F]),
          Int32Array.from([0x1689, 0x10]),
          Int32Array.from([0x13BE, 0x11]),
          Int32Array.from([0x1CE7, 0x12]),
          Int32Array.from([0x19D0, 0x13]),
          Int32Array.from([0x0762, 0x14]),
          Int32Array.from([0x0255, 0x15]),
          Int32Array.from([0x0D0C, 0x16]),
          Int32Array.from([0x083B, 0x17]),
          Int32Array.from([0x355F, 0x18]),
          Int32Array.from([0x3068, 0x19]),
          Int32Array.from([0x3F31, 0x1A]),
          Int32Array.from([0x3A06, 0x1B]),
          Int32Array.from([0x24B4, 0x1C]),
          Int32Array.from([0x2183, 0x1D]),
          Int32Array.from([0x2EDA, 0x1E]),
          Int32Array.from([0x2BED, 0x1F]),
      ];
      return FormatInformation;
  }());

  var __values$j = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var ECBlocks =  (function () {
      function ECBlocks(ecCodewordsPerBlock ) {
          var ecBlocks = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              ecBlocks[_i - 1] = arguments[_i];
          }
          this.ecCodewordsPerBlock = ecCodewordsPerBlock;
          this.ecBlocks = ecBlocks;
      }
      ECBlocks.prototype.getECCodewordsPerBlock = function () {
          return this.ecCodewordsPerBlock;
      };
      ECBlocks.prototype.getNumBlocks = function () {
          var e_1, _a;
          var total = 0;
          var ecBlocks = this.ecBlocks;
          try {
              for (var ecBlocks_1 = __values$j(ecBlocks), ecBlocks_1_1 = ecBlocks_1.next(); !ecBlocks_1_1.done; ecBlocks_1_1 = ecBlocks_1.next()) {
                  var ecBlock = ecBlocks_1_1.value;
                  total += ecBlock.getCount();
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (ecBlocks_1_1 && !ecBlocks_1_1.done && (_a = ecBlocks_1.return)) _a.call(ecBlocks_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          return total;
      };
      ECBlocks.prototype.getTotalECCodewords = function () {
          return this.ecCodewordsPerBlock * this.getNumBlocks();
      };
      ECBlocks.prototype.getECBlocks = function () {
          return this.ecBlocks;
      };
      return ECBlocks;
  }());

  var ECB =  (function () {
      function ECB(count , dataCodewords ) {
          this.count = count;
          this.dataCodewords = dataCodewords;
      }
      ECB.prototype.getCount = function () {
          return this.count;
      };
      ECB.prototype.getDataCodewords = function () {
          return this.dataCodewords;
      };
      return ECB;
  }());

  var __values$i = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var Version =  (function () {
      function Version(versionNumber , alignmentPatternCenters) {
          var e_1, _a;
          var ecBlocks = [];
          for (var _i = 2; _i < arguments.length; _i++) {
              ecBlocks[_i - 2] = arguments[_i];
          }
          this.versionNumber = versionNumber;
          this.alignmentPatternCenters = alignmentPatternCenters;
          this.ecBlocks = ecBlocks;
          var total = 0;
          var ecCodewords = ecBlocks[0].getECCodewordsPerBlock();
          var ecbArray = ecBlocks[0].getECBlocks();
          try {
              for (var ecbArray_1 = __values$i(ecbArray), ecbArray_1_1 = ecbArray_1.next(); !ecbArray_1_1.done; ecbArray_1_1 = ecbArray_1.next()) {
                  var ecBlock = ecbArray_1_1.value;
                  total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (ecbArray_1_1 && !ecbArray_1_1.done && (_a = ecbArray_1.return)) _a.call(ecbArray_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          this.totalCodewords = total;
      }
      Version.prototype.getVersionNumber = function () {
          return this.versionNumber;
      };
      Version.prototype.getAlignmentPatternCenters = function () {
          return this.alignmentPatternCenters;
      };
      Version.prototype.getTotalCodewords = function () {
          return this.totalCodewords;
      };
      Version.prototype.getDimensionForVersion = function () {
          return 17 + 4 * this.versionNumber;
      };
      Version.prototype.getECBlocksForLevel = function (ecLevel) {
          return this.ecBlocks[ecLevel.getValue()];
      };
      Version.getProvisionalVersionForDimension = function (dimension ) {
          if (dimension % 4 !== 1) {
              throw new FormatException();
          }
          try {
              return this.getVersionForNumber((dimension - 17) / 4);
          }
          catch (ignored ) {
              throw new FormatException();
          }
      };
      Version.getVersionForNumber = function (versionNumber ) {
          if (versionNumber < 1 || versionNumber > 40) {
              throw new IllegalArgumentException();
          }
          return Version.VERSIONS[versionNumber - 1];
      };
      Version.decodeVersionInformation = function (versionBits ) {
          var bestDifference = Number.MAX_SAFE_INTEGER;
          var bestVersion = 0;
          for (var i = 0; i < Version.VERSION_DECODE_INFO.length; i++) {
              var targetVersion = Version.VERSION_DECODE_INFO[i];
              if (targetVersion === versionBits) {
                  return Version.getVersionForNumber(i + 7);
              }
              var bitsDifference = FormatInformation.numBitsDiffering(versionBits, targetVersion);
              if (bitsDifference < bestDifference) {
                  bestVersion = i + 7;
                  bestDifference = bitsDifference;
              }
          }
          if (bestDifference <= 3) {
              return Version.getVersionForNumber(bestVersion);
          }
          return null;
      };
      Version.prototype.buildFunctionPattern = function () {
          var dimension = this.getDimensionForVersion();
          var bitMatrix = new BitMatrix(dimension);
          bitMatrix.setRegion(0, 0, 9, 9);
          bitMatrix.setRegion(dimension - 8, 0, 8, 9);
          bitMatrix.setRegion(0, dimension - 8, 9, 8);
          var max = this.alignmentPatternCenters.length;
          for (var x = 0; x < max; x++) {
              var i = this.alignmentPatternCenters[x] - 2;
              for (var y = 0; y < max; y++) {
                  if ((x === 0 && (y === 0 || y === max - 1)) || (x === max - 1 && y === 0)) {
                      continue;
                  }
                  bitMatrix.setRegion(this.alignmentPatternCenters[y] - 2, i, 5, 5);
              }
          }
          bitMatrix.setRegion(6, 9, 1, dimension - 17);
          bitMatrix.setRegion(9, 6, dimension - 17, 1);
          if (this.versionNumber > 6) {
              bitMatrix.setRegion(dimension - 11, 0, 3, 6);
              bitMatrix.setRegion(0, dimension - 11, 6, 3);
          }
          return bitMatrix;
      };
      Version.prototype.toString = function () {
          return '' + this.versionNumber;
      };
      Version.VERSION_DECODE_INFO = Int32Array.from([
          0x07C94, 0x085BC, 0x09A99, 0x0A4D3, 0x0BBF6,
          0x0C762, 0x0D847, 0x0E60D, 0x0F928, 0x10B78,
          0x1145D, 0x12A17, 0x13532, 0x149A6, 0x15683,
          0x168C9, 0x177EC, 0x18EC4, 0x191E1, 0x1AFAB,
          0x1B08E, 0x1CC1A, 0x1D33F, 0x1ED75, 0x1F250,
          0x209D5, 0x216F0, 0x228BA, 0x2379F, 0x24B0B,
          0x2542E, 0x26A64, 0x27541, 0x28C69
      ]);
      Version.VERSIONS = [
          new Version(1, new Int32Array(0), new ECBlocks(7, new ECB(1, 19)), new ECBlocks(10, new ECB(1, 16)), new ECBlocks(13, new ECB(1, 13)), new ECBlocks(17, new ECB(1, 9))),
          new Version(2, Int32Array.from([6, 18]), new ECBlocks(10, new ECB(1, 34)), new ECBlocks(16, new ECB(1, 28)), new ECBlocks(22, new ECB(1, 22)), new ECBlocks(28, new ECB(1, 16))),
          new Version(3, Int32Array.from([6, 22]), new ECBlocks(15, new ECB(1, 55)), new ECBlocks(26, new ECB(1, 44)), new ECBlocks(18, new ECB(2, 17)), new ECBlocks(22, new ECB(2, 13))),
          new Version(4, Int32Array.from([6, 26]), new ECBlocks(20, new ECB(1, 80)), new ECBlocks(18, new ECB(2, 32)), new ECBlocks(26, new ECB(2, 24)), new ECBlocks(16, new ECB(4, 9))),
          new Version(5, Int32Array.from([6, 30]), new ECBlocks(26, new ECB(1, 108)), new ECBlocks(24, new ECB(2, 43)), new ECBlocks(18, new ECB(2, 15), new ECB(2, 16)), new ECBlocks(22, new ECB(2, 11), new ECB(2, 12))),
          new Version(6, Int32Array.from([6, 34]), new ECBlocks(18, new ECB(2, 68)), new ECBlocks(16, new ECB(4, 27)), new ECBlocks(24, new ECB(4, 19)), new ECBlocks(28, new ECB(4, 15))),
          new Version(7, Int32Array.from([6, 22, 38]), new ECBlocks(20, new ECB(2, 78)), new ECBlocks(18, new ECB(4, 31)), new ECBlocks(18, new ECB(2, 14), new ECB(4, 15)), new ECBlocks(26, new ECB(4, 13), new ECB(1, 14))),
          new Version(8, Int32Array.from([6, 24, 42]), new ECBlocks(24, new ECB(2, 97)), new ECBlocks(22, new ECB(2, 38), new ECB(2, 39)), new ECBlocks(22, new ECB(4, 18), new ECB(2, 19)), new ECBlocks(26, new ECB(4, 14), new ECB(2, 15))),
          new Version(9, Int32Array.from([6, 26, 46]), new ECBlocks(30, new ECB(2, 116)), new ECBlocks(22, new ECB(3, 36), new ECB(2, 37)), new ECBlocks(20, new ECB(4, 16), new ECB(4, 17)), new ECBlocks(24, new ECB(4, 12), new ECB(4, 13))),
          new Version(10, Int32Array.from([6, 28, 50]), new ECBlocks(18, new ECB(2, 68), new ECB(2, 69)), new ECBlocks(26, new ECB(4, 43), new ECB(1, 44)), new ECBlocks(24, new ECB(6, 19), new ECB(2, 20)), new ECBlocks(28, new ECB(6, 15), new ECB(2, 16))),
          new Version(11, Int32Array.from([6, 30, 54]), new ECBlocks(20, new ECB(4, 81)), new ECBlocks(30, new ECB(1, 50), new ECB(4, 51)), new ECBlocks(28, new ECB(4, 22), new ECB(4, 23)), new ECBlocks(24, new ECB(3, 12), new ECB(8, 13))),
          new Version(12, Int32Array.from([6, 32, 58]), new ECBlocks(24, new ECB(2, 92), new ECB(2, 93)), new ECBlocks(22, new ECB(6, 36), new ECB(2, 37)), new ECBlocks(26, new ECB(4, 20), new ECB(6, 21)), new ECBlocks(28, new ECB(7, 14), new ECB(4, 15))),
          new Version(13, Int32Array.from([6, 34, 62]), new ECBlocks(26, new ECB(4, 107)), new ECBlocks(22, new ECB(8, 37), new ECB(1, 38)), new ECBlocks(24, new ECB(8, 20), new ECB(4, 21)), new ECBlocks(22, new ECB(12, 11), new ECB(4, 12))),
          new Version(14, Int32Array.from([6, 26, 46, 66]), new ECBlocks(30, new ECB(3, 115), new ECB(1, 116)), new ECBlocks(24, new ECB(4, 40), new ECB(5, 41)), new ECBlocks(20, new ECB(11, 16), new ECB(5, 17)), new ECBlocks(24, new ECB(11, 12), new ECB(5, 13))),
          new Version(15, Int32Array.from([6, 26, 48, 70]), new ECBlocks(22, new ECB(5, 87), new ECB(1, 88)), new ECBlocks(24, new ECB(5, 41), new ECB(5, 42)), new ECBlocks(30, new ECB(5, 24), new ECB(7, 25)), new ECBlocks(24, new ECB(11, 12), new ECB(7, 13))),
          new Version(16, Int32Array.from([6, 26, 50, 74]), new ECBlocks(24, new ECB(5, 98), new ECB(1, 99)), new ECBlocks(28, new ECB(7, 45), new ECB(3, 46)), new ECBlocks(24, new ECB(15, 19), new ECB(2, 20)), new ECBlocks(30, new ECB(3, 15), new ECB(13, 16))),
          new Version(17, Int32Array.from([6, 30, 54, 78]), new ECBlocks(28, new ECB(1, 107), new ECB(5, 108)), new ECBlocks(28, new ECB(10, 46), new ECB(1, 47)), new ECBlocks(28, new ECB(1, 22), new ECB(15, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(17, 15))),
          new Version(18, Int32Array.from([6, 30, 56, 82]), new ECBlocks(30, new ECB(5, 120), new ECB(1, 121)), new ECBlocks(26, new ECB(9, 43), new ECB(4, 44)), new ECBlocks(28, new ECB(17, 22), new ECB(1, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(19, 15))),
          new Version(19, Int32Array.from([6, 30, 58, 86]), new ECBlocks(28, new ECB(3, 113), new ECB(4, 114)), new ECBlocks(26, new ECB(3, 44), new ECB(11, 45)), new ECBlocks(26, new ECB(17, 21), new ECB(4, 22)), new ECBlocks(26, new ECB(9, 13), new ECB(16, 14))),
          new Version(20, Int32Array.from([6, 34, 62, 90]), new ECBlocks(28, new ECB(3, 107), new ECB(5, 108)), new ECBlocks(26, new ECB(3, 41), new ECB(13, 42)), new ECBlocks(30, new ECB(15, 24), new ECB(5, 25)), new ECBlocks(28, new ECB(15, 15), new ECB(10, 16))),
          new Version(21, Int32Array.from([6, 28, 50, 72, 94]), new ECBlocks(28, new ECB(4, 116), new ECB(4, 117)), new ECBlocks(26, new ECB(17, 42)), new ECBlocks(28, new ECB(17, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(19, 16), new ECB(6, 17))),
          new Version(22, Int32Array.from([6, 26, 50, 74, 98]), new ECBlocks(28, new ECB(2, 111), new ECB(7, 112)), new ECBlocks(28, new ECB(17, 46)), new ECBlocks(30, new ECB(7, 24), new ECB(16, 25)), new ECBlocks(24, new ECB(34, 13))),
          new Version(23, Int32Array.from([6, 30, 54, 78, 102]), new ECBlocks(30, new ECB(4, 121), new ECB(5, 122)), new ECBlocks(28, new ECB(4, 47), new ECB(14, 48)), new ECBlocks(30, new ECB(11, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(16, 15), new ECB(14, 16))),
          new Version(24, Int32Array.from([6, 28, 54, 80, 106]), new ECBlocks(30, new ECB(6, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(6, 45), new ECB(14, 46)), new ECBlocks(30, new ECB(11, 24), new ECB(16, 25)), new ECBlocks(30, new ECB(30, 16), new ECB(2, 17))),
          new Version(25, Int32Array.from([6, 32, 58, 84, 110]), new ECBlocks(26, new ECB(8, 106), new ECB(4, 107)), new ECBlocks(28, new ECB(8, 47), new ECB(13, 48)), new ECBlocks(30, new ECB(7, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(13, 16))),
          new Version(26, Int32Array.from([6, 30, 58, 86, 114]), new ECBlocks(28, new ECB(10, 114), new ECB(2, 115)), new ECBlocks(28, new ECB(19, 46), new ECB(4, 47)), new ECBlocks(28, new ECB(28, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(33, 16), new ECB(4, 17))),
          new Version(27, Int32Array.from([6, 34, 62, 90, 118]), new ECBlocks(30, new ECB(8, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(22, 45), new ECB(3, 46)), new ECBlocks(30, new ECB(8, 23), new ECB(26, 24)), new ECBlocks(30, new ECB(12, 15), new ECB(28, 16))),
          new Version(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new ECBlocks(30, new ECB(3, 117), new ECB(10, 118)), new ECBlocks(28, new ECB(3, 45), new ECB(23, 46)), new ECBlocks(30, new ECB(4, 24), new ECB(31, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(31, 16))),
          new Version(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new ECBlocks(30, new ECB(7, 116), new ECB(7, 117)), new ECBlocks(28, new ECB(21, 45), new ECB(7, 46)), new ECBlocks(30, new ECB(1, 23), new ECB(37, 24)), new ECBlocks(30, new ECB(19, 15), new ECB(26, 16))),
          new Version(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new ECBlocks(30, new ECB(5, 115), new ECB(10, 116)), new ECBlocks(28, new ECB(19, 47), new ECB(10, 48)), new ECBlocks(30, new ECB(15, 24), new ECB(25, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(25, 16))),
          new Version(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new ECBlocks(30, new ECB(13, 115), new ECB(3, 116)), new ECBlocks(28, new ECB(2, 46), new ECB(29, 47)), new ECBlocks(30, new ECB(42, 24), new ECB(1, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(28, 16))),
          new Version(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new ECBlocks(30, new ECB(17, 115)), new ECBlocks(28, new ECB(10, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(10, 24), new ECB(35, 25)), new ECBlocks(30, new ECB(19, 15), new ECB(35, 16))),
          new Version(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new ECBlocks(30, new ECB(17, 115), new ECB(1, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(21, 47)), new ECBlocks(30, new ECB(29, 24), new ECB(19, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(46, 16))),
          new Version(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new ECBlocks(30, new ECB(13, 115), new ECB(6, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(44, 24), new ECB(7, 25)), new ECBlocks(30, new ECB(59, 16), new ECB(1, 17))),
          new Version(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new ECBlocks(30, new ECB(12, 121), new ECB(7, 122)), new ECBlocks(28, new ECB(12, 47), new ECB(26, 48)), new ECBlocks(30, new ECB(39, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(41, 16))),
          new Version(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new ECBlocks(30, new ECB(6, 121), new ECB(14, 122)), new ECBlocks(28, new ECB(6, 47), new ECB(34, 48)), new ECBlocks(30, new ECB(46, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(2, 15), new ECB(64, 16))),
          new Version(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new ECBlocks(30, new ECB(17, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(29, 46), new ECB(14, 47)), new ECBlocks(30, new ECB(49, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(24, 15), new ECB(46, 16))),
          new Version(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new ECBlocks(30, new ECB(4, 122), new ECB(18, 123)), new ECBlocks(28, new ECB(13, 46), new ECB(32, 47)), new ECBlocks(30, new ECB(48, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(42, 15), new ECB(32, 16))),
          new Version(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new ECBlocks(30, new ECB(20, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(40, 47), new ECB(7, 48)), new ECBlocks(30, new ECB(43, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(10, 15), new ECB(67, 16))),
          new Version(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new ECBlocks(30, new ECB(19, 118), new ECB(6, 119)), new ECBlocks(28, new ECB(18, 47), new ECB(31, 48)), new ECBlocks(30, new ECB(34, 24), new ECB(34, 25)), new ECBlocks(30, new ECB(20, 15), new ECB(61, 16)))
      ];
      return Version;
  }());

  var DataMaskValues;
  (function (DataMaskValues) {
      DataMaskValues[DataMaskValues["DATA_MASK_000"] = 0] = "DATA_MASK_000";
      DataMaskValues[DataMaskValues["DATA_MASK_001"] = 1] = "DATA_MASK_001";
      DataMaskValues[DataMaskValues["DATA_MASK_010"] = 2] = "DATA_MASK_010";
      DataMaskValues[DataMaskValues["DATA_MASK_011"] = 3] = "DATA_MASK_011";
      DataMaskValues[DataMaskValues["DATA_MASK_100"] = 4] = "DATA_MASK_100";
      DataMaskValues[DataMaskValues["DATA_MASK_101"] = 5] = "DATA_MASK_101";
      DataMaskValues[DataMaskValues["DATA_MASK_110"] = 6] = "DATA_MASK_110";
      DataMaskValues[DataMaskValues["DATA_MASK_111"] = 7] = "DATA_MASK_111";
  })(DataMaskValues || (DataMaskValues = {}));
  var DataMask =  (function () {
      function DataMask(value, isMasked) {
          this.value = value;
          this.isMasked = isMasked;
      }
      DataMask.prototype.unmaskBitMatrix = function (bits, dimension ) {
          for (var i = 0; i < dimension; i++) {
              for (var j = 0; j < dimension; j++) {
                  if (this.isMasked(i, j)) {
                      bits.flip(j, i);
                  }
              }
          }
      };
      DataMask.values = new Map([
          [DataMaskValues.DATA_MASK_000, new DataMask(DataMaskValues.DATA_MASK_000, function (i , j ) { return ((i + j) & 0x01) === 0; })],
          [DataMaskValues.DATA_MASK_001, new DataMask(DataMaskValues.DATA_MASK_001, function (i , j ) { return (i & 0x01) === 0; })],
          [DataMaskValues.DATA_MASK_010, new DataMask(DataMaskValues.DATA_MASK_010, function (i , j ) { return j % 3 === 0; })],
          [DataMaskValues.DATA_MASK_011, new DataMask(DataMaskValues.DATA_MASK_011, function (i , j ) { return (i + j) % 3 === 0; })],
          [DataMaskValues.DATA_MASK_100, new DataMask(DataMaskValues.DATA_MASK_100, function (i , j ) { return ((Math.floor(i / 2) + Math.floor(j / 3)) & 0x01) === 0; })],
          [DataMaskValues.DATA_MASK_101, new DataMask(DataMaskValues.DATA_MASK_101, function (i , j ) { return (i * j) % 6 === 0; })],
          [DataMaskValues.DATA_MASK_110, new DataMask(DataMaskValues.DATA_MASK_110, function (i , j ) { return ((i * j) % 6) < 3; })],
          [DataMaskValues.DATA_MASK_111, new DataMask(DataMaskValues.DATA_MASK_111, function (i , j ) { return ((i + j + ((i * j) % 3)) & 0x01) === 0; })],
      ]);
      return DataMask;
  }());

  var BitMatrixParser =  (function () {
      function BitMatrixParser(bitMatrix) {
          var dimension = bitMatrix.getHeight();
          if (dimension < 21 || (dimension & 0x03) !== 1) {
              throw new FormatException();
          }
          this.bitMatrix = bitMatrix;
      }
      BitMatrixParser.prototype.readFormatInformation = function () {
          if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== undefined) {
              return this.parsedFormatInfo;
          }
          var formatInfoBits1 = 0;
          for (var i = 0; i < 6; i++) {
              formatInfoBits1 = this.copyBit(i, 8, formatInfoBits1);
          }
          formatInfoBits1 = this.copyBit(7, 8, formatInfoBits1);
          formatInfoBits1 = this.copyBit(8, 8, formatInfoBits1);
          formatInfoBits1 = this.copyBit(8, 7, formatInfoBits1);
          for (var j = 5; j >= 0; j--) {
              formatInfoBits1 = this.copyBit(8, j, formatInfoBits1);
          }
          var dimension = this.bitMatrix.getHeight();
          var formatInfoBits2 = 0;
          var jMin = dimension - 7;
          for (var j = dimension - 1; j >= jMin; j--) {
              formatInfoBits2 = this.copyBit(8, j, formatInfoBits2);
          }
          for (var i = dimension - 8; i < dimension; i++) {
              formatInfoBits2 = this.copyBit(i, 8, formatInfoBits2);
          }
          this.parsedFormatInfo = FormatInformation.decodeFormatInformation(formatInfoBits1, formatInfoBits2);
          if (this.parsedFormatInfo !== null) {
              return this.parsedFormatInfo;
          }
          throw new FormatException();
      };
      BitMatrixParser.prototype.readVersion = function () {
          if (this.parsedVersion !== null && this.parsedVersion !== undefined) {
              return this.parsedVersion;
          }
          var dimension = this.bitMatrix.getHeight();
          var provisionalVersion = Math.floor((dimension - 17) / 4);
          if (provisionalVersion <= 6) {
              return Version.getVersionForNumber(provisionalVersion);
          }
          var versionBits = 0;
          var ijMin = dimension - 11;
          for (var j = 5; j >= 0; j--) {
              for (var i = dimension - 9; i >= ijMin; i--) {
                  versionBits = this.copyBit(i, j, versionBits);
              }
          }
          var theParsedVersion = Version.decodeVersionInformation(versionBits);
          if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
              this.parsedVersion = theParsedVersion;
              return theParsedVersion;
          }
          versionBits = 0;
          for (var i = 5; i >= 0; i--) {
              for (var j = dimension - 9; j >= ijMin; j--) {
                  versionBits = this.copyBit(i, j, versionBits);
              }
          }
          theParsedVersion = Version.decodeVersionInformation(versionBits);
          if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
              this.parsedVersion = theParsedVersion;
              return theParsedVersion;
          }
          throw new FormatException();
      };
      BitMatrixParser.prototype.copyBit = function (i , j , versionBits ) {
          var bit = this.isMirror ? this.bitMatrix.get(j, i) : this.bitMatrix.get(i, j);
          return bit ? (versionBits << 1) | 0x1 : versionBits << 1;
      };
      BitMatrixParser.prototype.readCodewords = function () {
          var formatInfo = this.readFormatInformation();
          var version = this.readVersion();
          var dataMask = DataMask.values.get(formatInfo.getDataMask());
          var dimension = this.bitMatrix.getHeight();
          dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
          var functionPattern = version.buildFunctionPattern();
          var readingUp = true;
          var result = new Uint8Array(version.getTotalCodewords());
          var resultOffset = 0;
          var currentByte = 0;
          var bitsRead = 0;
          for (var j = dimension - 1; j > 0; j -= 2) {
              if (j === 6) {
                  j--;
              }
              for (var count = 0; count < dimension; count++) {
                  var i = readingUp ? dimension - 1 - count : count;
                  for (var col = 0; col < 2; col++) {
                      if (!functionPattern.get(j - col, i)) {
                          bitsRead++;
                          currentByte <<= 1;
                          if (this.bitMatrix.get(j - col, i)) {
                              currentByte |= 1;
                          }
                          if (bitsRead === 8) {
                              result[resultOffset++] =  currentByte;
                              bitsRead = 0;
                              currentByte = 0;
                          }
                      }
                  }
              }
              readingUp = !readingUp;
          }
          if (resultOffset !== version.getTotalCodewords()) {
              throw new FormatException();
          }
          return result;
      };
      BitMatrixParser.prototype.remask = function () {
          if (this.parsedFormatInfo === null) {
              return;
          }
          var dataMask = DataMask.values[this.parsedFormatInfo.getDataMask()];
          var dimension = this.bitMatrix.getHeight();
          dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
      };
      BitMatrixParser.prototype.setMirror = function (isMirror) {
          this.parsedVersion = null;
          this.parsedFormatInfo = null;
          this.isMirror = isMirror;
      };
      BitMatrixParser.prototype.mirror = function () {
          var bitMatrix = this.bitMatrix;
          for (var x = 0, width = bitMatrix.getWidth(); x < width; x++) {
              for (var y = x + 1, height = bitMatrix.getHeight(); y < height; y++) {
                  if (bitMatrix.get(x, y) !== bitMatrix.get(y, x)) {
                      bitMatrix.flip(y, x);
                      bitMatrix.flip(x, y);
                  }
              }
          }
      };
      return BitMatrixParser;
  }());

  var __values$h = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var DataBlock =  (function () {
      function DataBlock(numDataCodewords , codewords) {
          this.numDataCodewords = numDataCodewords;
          this.codewords = codewords;
      }
      DataBlock.getDataBlocks = function (rawCodewords, version, ecLevel) {
          var e_1, _a, e_2, _b;
          if (rawCodewords.length !== version.getTotalCodewords()) {
              throw new IllegalArgumentException();
          }
          var ecBlocks = version.getECBlocksForLevel(ecLevel);
          var totalBlocks = 0;
          var ecBlockArray = ecBlocks.getECBlocks();
          try {
              for (var ecBlockArray_1 = __values$h(ecBlockArray), ecBlockArray_1_1 = ecBlockArray_1.next(); !ecBlockArray_1_1.done; ecBlockArray_1_1 = ecBlockArray_1.next()) {
                  var ecBlock = ecBlockArray_1_1.value;
                  totalBlocks += ecBlock.getCount();
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (ecBlockArray_1_1 && !ecBlockArray_1_1.done && (_a = ecBlockArray_1.return)) _a.call(ecBlockArray_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          var result = new Array(totalBlocks);
          var numResultBlocks = 0;
          try {
              for (var ecBlockArray_2 = __values$h(ecBlockArray), ecBlockArray_2_1 = ecBlockArray_2.next(); !ecBlockArray_2_1.done; ecBlockArray_2_1 = ecBlockArray_2.next()) {
                  var ecBlock = ecBlockArray_2_1.value;
                  for (var i = 0; i < ecBlock.getCount(); i++) {
                      var numDataCodewords = ecBlock.getDataCodewords();
                      var numBlockCodewords = ecBlocks.getECCodewordsPerBlock() + numDataCodewords;
                      result[numResultBlocks++] = new DataBlock(numDataCodewords, new Uint8Array(numBlockCodewords));
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (ecBlockArray_2_1 && !ecBlockArray_2_1.done && (_b = ecBlockArray_2.return)) _b.call(ecBlockArray_2);
              }
              finally { if (e_2) throw e_2.error; }
          }
          var shorterBlocksTotalCodewords = result[0].codewords.length;
          var longerBlocksStartAt = result.length - 1;
          while (longerBlocksStartAt >= 0) {
              var numCodewords = result[longerBlocksStartAt].codewords.length;
              if (numCodewords === shorterBlocksTotalCodewords) {
                  break;
              }
              longerBlocksStartAt--;
          }
          longerBlocksStartAt++;
          var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.getECCodewordsPerBlock();
          var rawCodewordsOffset = 0;
          for (var i = 0; i < shorterBlocksNumDataCodewords; i++) {
              for (var j = 0; j < numResultBlocks; j++) {
                  result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
              }
          }
          for (var j = longerBlocksStartAt; j < numResultBlocks; j++) {
              result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
          }
          var max = result[0].codewords.length;
          for (var i = shorterBlocksNumDataCodewords; i < max; i++) {
              for (var j = 0; j < numResultBlocks; j++) {
                  var iOffset = j < longerBlocksStartAt ? i : i + 1;
                  result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
              }
          }
          return result;
      };
      DataBlock.prototype.getNumDataCodewords = function () {
          return this.numDataCodewords;
      };
      DataBlock.prototype.getCodewords = function () {
          return this.codewords;
      };
      return DataBlock;
  }());

  var ModeValues;
  (function (ModeValues) {
      ModeValues[ModeValues["TERMINATOR"] = 0] = "TERMINATOR";
      ModeValues[ModeValues["NUMERIC"] = 1] = "NUMERIC";
      ModeValues[ModeValues["ALPHANUMERIC"] = 2] = "ALPHANUMERIC";
      ModeValues[ModeValues["STRUCTURED_APPEND"] = 3] = "STRUCTURED_APPEND";
      ModeValues[ModeValues["BYTE"] = 4] = "BYTE";
      ModeValues[ModeValues["ECI"] = 5] = "ECI";
      ModeValues[ModeValues["KANJI"] = 6] = "KANJI";
      ModeValues[ModeValues["FNC1_FIRST_POSITION"] = 7] = "FNC1_FIRST_POSITION";
      ModeValues[ModeValues["FNC1_SECOND_POSITION"] = 8] = "FNC1_SECOND_POSITION";
      ModeValues[ModeValues["HANZI"] = 9] = "HANZI";
  })(ModeValues || (ModeValues = {}));
  var Mode$1 =  (function () {
      function Mode(value, stringValue, characterCountBitsForVersions, bits ) {
          this.value = value;
          this.stringValue = stringValue;
          this.characterCountBitsForVersions = characterCountBitsForVersions;
          this.bits = bits;
          Mode.FOR_BITS.set(bits, this);
          Mode.FOR_VALUE.set(value, this);
      }
      Mode.forBits = function (bits ) {
          var mode = Mode.FOR_BITS.get(bits);
          if (undefined === mode) {
              throw new IllegalArgumentException();
          }
          return mode;
      };
      Mode.prototype.getCharacterCountBits = function (version) {
          var versionNumber = version.getVersionNumber();
          var offset;
          if (versionNumber <= 9) {
              offset = 0;
          }
          else if (versionNumber <= 26) {
              offset = 1;
          }
          else {
              offset = 2;
          }
          return this.characterCountBitsForVersions[offset];
      };
      Mode.prototype.getValue = function () {
          return this.value;
      };
      Mode.prototype.getBits = function () {
          return this.bits;
      };
      Mode.prototype.equals = function (o) {
          if (!(o instanceof Mode)) {
              return false;
          }
          var other = o;
          return this.value === other.value;
      };
      Mode.prototype.toString = function () {
          return this.stringValue;
      };
      Mode.FOR_BITS = new Map();
      Mode.FOR_VALUE = new Map();
      Mode.TERMINATOR = new Mode(ModeValues.TERMINATOR, 'TERMINATOR', Int32Array.from([0, 0, 0]), 0x00);
      Mode.NUMERIC = new Mode(ModeValues.NUMERIC, 'NUMERIC', Int32Array.from([10, 12, 14]), 0x01);
      Mode.ALPHANUMERIC = new Mode(ModeValues.ALPHANUMERIC, 'ALPHANUMERIC', Int32Array.from([9, 11, 13]), 0x02);
      Mode.STRUCTURED_APPEND = new Mode(ModeValues.STRUCTURED_APPEND, 'STRUCTURED_APPEND', Int32Array.from([0, 0, 0]), 0x03);
      Mode.BYTE = new Mode(ModeValues.BYTE, 'BYTE', Int32Array.from([8, 16, 16]), 0x04);
      Mode.ECI = new Mode(ModeValues.ECI, 'ECI', Int32Array.from([0, 0, 0]), 0x07);
      Mode.KANJI = new Mode(ModeValues.KANJI, 'KANJI', Int32Array.from([8, 10, 12]), 0x08);
      Mode.FNC1_FIRST_POSITION = new Mode(ModeValues.FNC1_FIRST_POSITION, 'FNC1_FIRST_POSITION', Int32Array.from([0, 0, 0]), 0x05);
      Mode.FNC1_SECOND_POSITION = new Mode(ModeValues.FNC1_SECOND_POSITION, 'FNC1_SECOND_POSITION', Int32Array.from([0, 0, 0]), 0x09);
      Mode.HANZI = new Mode(ModeValues.HANZI, 'HANZI', Int32Array.from([8, 10, 12]), 0x0D);
      return Mode;
  }());

  var DecodedBitStreamParser$1 =  (function () {
      function DecodedBitStreamParser() {
      }
      DecodedBitStreamParser.decode = function (bytes, version, ecLevel, hints) {
          var bits = new BitSource(bytes);
          var result = new StringBuilder();
          var byteSegments = new Array();
          var symbolSequence = -1;
          var parityData = -1;
          try {
              var currentCharacterSetECI = null;
              var fc1InEffect = false;
              var mode = void 0;
              do {
                  if (bits.available() < 4) {
                      mode = Mode$1.TERMINATOR;
                  }
                  else {
                      var modeBits = bits.readBits(4);
                      mode = Mode$1.forBits(modeBits);
                  }
                  switch (mode) {
                      case Mode$1.TERMINATOR:
                          break;
                      case Mode$1.FNC1_FIRST_POSITION:
                      case Mode$1.FNC1_SECOND_POSITION:
                          fc1InEffect = true;
                          break;
                      case Mode$1.STRUCTURED_APPEND:
                          if (bits.available() < 16) {
                              throw new FormatException();
                          }
                          symbolSequence = bits.readBits(8);
                          parityData = bits.readBits(8);
                          break;
                      case Mode$1.ECI:
                          var value = DecodedBitStreamParser.parseECIValue(bits);
                          currentCharacterSetECI = CharacterSetECI.getCharacterSetECIByValue(value);
                          if (currentCharacterSetECI === null) {
                              throw new FormatException();
                          }
                          break;
                      case Mode$1.HANZI:
                          var subset = bits.readBits(4);
                          var countHanzi = bits.readBits(mode.getCharacterCountBits(version));
                          if (subset === DecodedBitStreamParser.GB2312_SUBSET) {
                              DecodedBitStreamParser.decodeHanziSegment(bits, result, countHanzi);
                          }
                          break;
                      default:
                          var count = bits.readBits(mode.getCharacterCountBits(version));
                          switch (mode) {
                              case Mode$1.NUMERIC:
                                  DecodedBitStreamParser.decodeNumericSegment(bits, result, count);
                                  break;
                              case Mode$1.ALPHANUMERIC:
                                  DecodedBitStreamParser.decodeAlphanumericSegment(bits, result, count, fc1InEffect);
                                  break;
                              case Mode$1.BYTE:
                                  DecodedBitStreamParser.decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments, hints);
                                  break;
                              case Mode$1.KANJI:
                                  DecodedBitStreamParser.decodeKanjiSegment(bits, result, count);
                                  break;
                              default:
                                  throw new FormatException();
                          }
                          break;
                  }
              } while (mode !== Mode$1.TERMINATOR);
          }
          catch (iae ) {
              throw new FormatException();
          }
          return new DecoderResult(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, ecLevel === null ? null : ecLevel.toString(), symbolSequence, parityData);
      };
      DecodedBitStreamParser.decodeHanziSegment = function (bits, result, count ) {
          if (count * 13 > bits.available()) {
              throw new FormatException();
          }
          var buffer = new Uint8Array(2 * count);
          var offset = 0;
          while (count > 0) {
              var twoBytes = bits.readBits(13);
              var assembledTwoBytes = (((twoBytes / 0x060) << 8) & 0xFFFFFFFF) | (twoBytes % 0x060);
              if (assembledTwoBytes < 0x003BF) {
                  assembledTwoBytes += 0x0A1A1;
              }
              else {
                  assembledTwoBytes += 0x0A6A1;
              }
              buffer[offset] =  ((assembledTwoBytes >> 8) & 0xFF);
              buffer[offset + 1] =  (assembledTwoBytes & 0xFF);
              offset += 2;
              count--;
          }
          try {
              result.append(StringEncoding.decode(buffer, StringUtils.GB2312));
          }
          catch (ignored ) {
              throw new FormatException(ignored);
          }
      };
      DecodedBitStreamParser.decodeKanjiSegment = function (bits, result, count ) {
          if (count * 13 > bits.available()) {
              throw new FormatException();
          }
          var buffer = new Uint8Array(2 * count);
          var offset = 0;
          while (count > 0) {
              var twoBytes = bits.readBits(13);
              var assembledTwoBytes = (((twoBytes / 0x0C0) << 8) & 0xFFFFFFFF) | (twoBytes % 0x0C0);
              if (assembledTwoBytes < 0x01F00) {
                  assembledTwoBytes += 0x08140;
              }
              else {
                  assembledTwoBytes += 0x0C140;
              }
              buffer[offset] =  (assembledTwoBytes >> 8);
              buffer[offset + 1] =  assembledTwoBytes;
              offset += 2;
              count--;
          }
          try {
              result.append(StringEncoding.decode(buffer, StringUtils.SHIFT_JIS));
          }
          catch (ignored ) {
              throw new FormatException(ignored);
          }
      };
      DecodedBitStreamParser.decodeByteSegment = function (bits, result, count , currentCharacterSetECI, byteSegments, hints) {
          if (8 * count > bits.available()) {
              throw new FormatException();
          }
          var readBytes = new Uint8Array(count);
          for (var i = 0; i < count; i++) {
              readBytes[i] =  bits.readBits(8);
          }
          var encoding;
          if (currentCharacterSetECI === null) {
              encoding = StringUtils.guessEncoding(readBytes, hints);
          }
          else {
              encoding = currentCharacterSetECI.getName();
          }
          try {
              result.append(StringEncoding.decode(readBytes, encoding));
          }
          catch (ignored ) {
              throw new FormatException(ignored);
          }
          byteSegments.push(readBytes);
      };
      DecodedBitStreamParser.toAlphaNumericChar = function (value ) {
          if (value >= DecodedBitStreamParser.ALPHANUMERIC_CHARS.length) {
              throw new FormatException();
          }
          return DecodedBitStreamParser.ALPHANUMERIC_CHARS[value];
      };
      DecodedBitStreamParser.decodeAlphanumericSegment = function (bits, result, count , fc1InEffect) {
          var start = result.length();
          while (count > 1) {
              if (bits.available() < 11) {
                  throw new FormatException();
              }
              var nextTwoCharsBits = bits.readBits(11);
              result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(nextTwoCharsBits / 45)));
              result.append(DecodedBitStreamParser.toAlphaNumericChar(nextTwoCharsBits % 45));
              count -= 2;
          }
          if (count === 1) {
              if (bits.available() < 6) {
                  throw new FormatException();
              }
              result.append(DecodedBitStreamParser.toAlphaNumericChar(bits.readBits(6)));
          }
          if (fc1InEffect) {
              for (var i = start; i < result.length(); i++) {
                  if (result.charAt(i) === '%') {
                      if (i < result.length() - 1 && result.charAt(i + 1) === '%') {
                          result.deleteCharAt(i + 1);
                      }
                      else {
                          result.setCharAt(i, String.fromCharCode(0x1D));
                      }
                  }
              }
          }
      };
      DecodedBitStreamParser.decodeNumericSegment = function (bits, result, count ) {
          while (count >= 3) {
              if (bits.available() < 10) {
                  throw new FormatException();
              }
              var threeDigitsBits = bits.readBits(10);
              if (threeDigitsBits >= 1000) {
                  throw new FormatException();
              }
              result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(threeDigitsBits / 100)));
              result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(threeDigitsBits / 10) % 10));
              result.append(DecodedBitStreamParser.toAlphaNumericChar(threeDigitsBits % 10));
              count -= 3;
          }
          if (count === 2) {
              if (bits.available() < 7) {
                  throw new FormatException();
              }
              var twoDigitsBits = bits.readBits(7);
              if (twoDigitsBits >= 100) {
                  throw new FormatException();
              }
              result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(twoDigitsBits / 10)));
              result.append(DecodedBitStreamParser.toAlphaNumericChar(twoDigitsBits % 10));
          }
          else if (count === 1) {
              if (bits.available() < 4) {
                  throw new FormatException();
              }
              var digitBits = bits.readBits(4);
              if (digitBits >= 10) {
                  throw new FormatException();
              }
              result.append(DecodedBitStreamParser.toAlphaNumericChar(digitBits));
          }
      };
      DecodedBitStreamParser.parseECIValue = function (bits) {
          var firstByte = bits.readBits(8);
          if ((firstByte & 0x80) === 0) {
              return firstByte & 0x7F;
          }
          if ((firstByte & 0xC0) === 0x80) {
              var secondByte = bits.readBits(8);
              return (((firstByte & 0x3F) << 8) & 0xFFFFFFFF) | secondByte;
          }
          if ((firstByte & 0xE0) === 0xC0) {
              var secondThirdBytes = bits.readBits(16);
              return (((firstByte & 0x1F) << 16) & 0xFFFFFFFF) | secondThirdBytes;
          }
          throw new FormatException();
      };
      DecodedBitStreamParser.ALPHANUMERIC_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';
      DecodedBitStreamParser.GB2312_SUBSET = 1;
      return DecodedBitStreamParser;
  }());

  var QRCodeDecoderMetaData =  (function () {
      function QRCodeDecoderMetaData(mirrored) {
          this.mirrored = mirrored;
      }
      QRCodeDecoderMetaData.prototype.isMirrored = function () {
          return this.mirrored;
      };
      QRCodeDecoderMetaData.prototype.applyMirroredCorrection = function (points) {
          if (!this.mirrored || points === null || points.length < 3) {
              return;
          }
          var bottomLeft = points[0];
          points[0] = points[2];
          points[2] = bottomLeft;
      };
      return QRCodeDecoderMetaData;
  }());

  var __values$g = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var Decoder =  (function () {
      function Decoder() {
          this.rsDecoder = new ReedSolomonDecoder(GenericGF.QR_CODE_FIELD_256);
      }
      Decoder.prototype.decodeBooleanArray = function (image, hints) {
          return this.decodeBitMatrix(BitMatrix.parseFromBooleanArray(image), hints);
      };
      Decoder.prototype.decodeBitMatrix = function (bits, hints) {
          var parser = new BitMatrixParser(bits);
          var ex = null;
          try {
              return this.decodeBitMatrixParser(parser, hints);
          }
          catch (e ) {
              ex = e;
          }
          try {
              parser.remask();
              parser.setMirror(true);
              parser.readVersion();
              parser.readFormatInformation();
              parser.mirror();
              var result = this.decodeBitMatrixParser(parser, hints);
              result.setOther(new QRCodeDecoderMetaData(true));
              return result;
          }
          catch (e ) {
              if (ex !== null) {
                  throw ex;
              }
              throw e;
          }
      };
      Decoder.prototype.decodeBitMatrixParser = function (parser, hints) {
          var e_1, _a, e_2, _b;
          var version = parser.readVersion();
          var ecLevel = parser.readFormatInformation().getErrorCorrectionLevel();
          var codewords = parser.readCodewords();
          var dataBlocks = DataBlock.getDataBlocks(codewords, version, ecLevel);
          var totalBytes = 0;
          try {
              for (var dataBlocks_1 = __values$g(dataBlocks), dataBlocks_1_1 = dataBlocks_1.next(); !dataBlocks_1_1.done; dataBlocks_1_1 = dataBlocks_1.next()) {
                  var dataBlock = dataBlocks_1_1.value;
                  totalBytes += dataBlock.getNumDataCodewords();
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (dataBlocks_1_1 && !dataBlocks_1_1.done && (_a = dataBlocks_1.return)) _a.call(dataBlocks_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          var resultBytes = new Uint8Array(totalBytes);
          var resultOffset = 0;
          try {
              for (var dataBlocks_2 = __values$g(dataBlocks), dataBlocks_2_1 = dataBlocks_2.next(); !dataBlocks_2_1.done; dataBlocks_2_1 = dataBlocks_2.next()) {
                  var dataBlock = dataBlocks_2_1.value;
                  var codewordBytes = dataBlock.getCodewords();
                  var numDataCodewords = dataBlock.getNumDataCodewords();
                  this.correctErrors(codewordBytes, numDataCodewords);
                  for (var i = 0; i < numDataCodewords; i++) {
                      resultBytes[resultOffset++] = codewordBytes[i];
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (dataBlocks_2_1 && !dataBlocks_2_1.done && (_b = dataBlocks_2.return)) _b.call(dataBlocks_2);
              }
              finally { if (e_2) throw e_2.error; }
          }
          return DecodedBitStreamParser$1.decode(resultBytes, version, ecLevel, hints);
      };
      Decoder.prototype.correctErrors = function (codewordBytes, numDataCodewords ) {
          var codewordsInts = new Int32Array(codewordBytes);
          try {
              this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
          }
          catch (ignored ) {
              throw new ChecksumException();
          }
          for (var i = 0; i < numDataCodewords; i++) {
              codewordBytes[i] =  codewordsInts[i];
          }
      };
      return Decoder;
  }());

  var __extends$g = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var AlignmentPattern =  (function (_super) {
      __extends$g(AlignmentPattern, _super);
      function AlignmentPattern(posX , posY , estimatedModuleSize ) {
          var _this = _super.call(this, posX, posY) || this;
          _this.estimatedModuleSize = estimatedModuleSize;
          return _this;
      }
      AlignmentPattern.prototype.aboutEquals = function (moduleSize , i , j ) {
          if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
              var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
              return moduleSizeDiff <= 1.0 || moduleSizeDiff <= this.estimatedModuleSize;
          }
          return false;
      };
      AlignmentPattern.prototype.combineEstimate = function (i , j , newModuleSize ) {
          var combinedX = (this.getX() + j) / 2.0;
          var combinedY = (this.getY() + i) / 2.0;
          var combinedModuleSize = (this.estimatedModuleSize + newModuleSize) / 2.0;
          return new AlignmentPattern(combinedX, combinedY, combinedModuleSize);
      };
      return AlignmentPattern;
  }(ResultPoint));

  var __values$f = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var AlignmentPatternFinder =  (function () {
      function AlignmentPatternFinder(image, startX , startY , width , height , moduleSize , resultPointCallback) {
          this.image = image;
          this.startX = startX;
          this.startY = startY;
          this.width = width;
          this.height = height;
          this.moduleSize = moduleSize;
          this.resultPointCallback = resultPointCallback;
          this.possibleCenters = [];
          this.crossCheckStateCount = new Int32Array(3);
      }
      AlignmentPatternFinder.prototype.find = function () {
          var startX = this.startX;
          var height = this.height;
          var width = this.width;
          var maxJ = startX + width;
          var middleI = this.startY + (height / 2);
          var stateCount = new Int32Array(3);
          var image = this.image;
          for (var iGen = 0; iGen < height; iGen++) {
              var i = middleI + ((iGen & 0x01) === 0 ? Math.floor((iGen + 1) / 2) : -Math.floor((iGen + 1) / 2));
              stateCount[0] = 0;
              stateCount[1] = 0;
              stateCount[2] = 0;
              var j = startX;
              while (j < maxJ && !image.get(j, i)) {
                  j++;
              }
              var currentState = 0;
              while (j < maxJ) {
                  if (image.get(j, i)) {
                      if (currentState === 1) {
                          stateCount[1]++;
                      }
                      else {
                          if (currentState === 2) {
                              if (this.foundPatternCross(stateCount)) {
                                  var confirmed = this.handlePossibleCenter(stateCount, i, j);
                                  if (confirmed !== null) {
                                      return confirmed;
                                  }
                              }
                              stateCount[0] = stateCount[2];
                              stateCount[1] = 1;
                              stateCount[2] = 0;
                              currentState = 1;
                          }
                          else {
                              stateCount[++currentState]++;
                          }
                      }
                  }
                  else {
                      if (currentState === 1) {
                          currentState++;
                      }
                      stateCount[currentState]++;
                  }
                  j++;
              }
              if (this.foundPatternCross(stateCount)) {
                  var confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
                  if (confirmed !== null) {
                      return confirmed;
                  }
              }
          }
          if (this.possibleCenters.length !== 0) {
              return this.possibleCenters[0];
          }
          throw new NotFoundException();
      };
      AlignmentPatternFinder.centerFromEnd = function (stateCount, end ) {
          return (end - stateCount[2]) - stateCount[1] / 2.0;
      };
      AlignmentPatternFinder.prototype.foundPatternCross = function (stateCount) {
          var moduleSize = this.moduleSize;
          var maxVariance = moduleSize / 2.0;
          for (var i = 0; i < 3; i++) {
              if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
                  return false;
              }
          }
          return true;
      };
      AlignmentPatternFinder.prototype.crossCheckVertical = function (startI , centerJ , maxCount , originalStateCountTotal ) {
          var image = this.image;
          var maxI = image.getHeight();
          var stateCount = this.crossCheckStateCount;
          stateCount[0] = 0;
          stateCount[1] = 0;
          stateCount[2] = 0;
          var i = startI;
          while (i >= 0 && image.get(centerJ, i) && stateCount[1] <= maxCount) {
              stateCount[1]++;
              i--;
          }
          if (i < 0 || stateCount[1] > maxCount) {
              return NaN;
          }
          while (i >= 0 && !image.get(centerJ, i) && stateCount[0] <= maxCount) {
              stateCount[0]++;
              i--;
          }
          if (stateCount[0] > maxCount) {
              return NaN;
          }
          i = startI + 1;
          while (i < maxI && image.get(centerJ, i) && stateCount[1] <= maxCount) {
              stateCount[1]++;
              i++;
          }
          if (i === maxI || stateCount[1] > maxCount) {
              return NaN;
          }
          while (i < maxI && !image.get(centerJ, i) && stateCount[2] <= maxCount) {
              stateCount[2]++;
              i++;
          }
          if (stateCount[2] > maxCount) {
              return NaN;
          }
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
          if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
              return NaN;
          }
          return this.foundPatternCross(stateCount) ? AlignmentPatternFinder.centerFromEnd(stateCount, i) : NaN;
      };
      AlignmentPatternFinder.prototype.handlePossibleCenter = function (stateCount, i , j ) {
          var e_1, _a;
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
          var centerJ = AlignmentPatternFinder.centerFromEnd(stateCount, j);
          var centerI = this.crossCheckVertical(i,  centerJ, 2 * stateCount[1], stateCountTotal);
          if (!isNaN(centerI)) {
              var estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3.0;
              try {
                  for (var _b = __values$f(this.possibleCenters), _c = _b.next(); !_c.done; _c = _b.next()) {
                      var center = _c.value;
                      if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                          return center.combineEstimate(centerI, centerJ, estimatedModuleSize);
                      }
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              var point = new AlignmentPattern(centerJ, centerI, estimatedModuleSize);
              this.possibleCenters.push(point);
              if (this.resultPointCallback !== null && this.resultPointCallback !== undefined) {
                  this.resultPointCallback.foundPossibleResultPoint(point);
              }
          }
          return null;
      };
      return AlignmentPatternFinder;
  }());

  var __extends$f = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var FinderPattern =  (function (_super) {
      __extends$f(FinderPattern, _super);
      function FinderPattern(posX , posY , estimatedModuleSize , count ) {
          var _this = _super.call(this, posX, posY) || this;
          _this.estimatedModuleSize = estimatedModuleSize;
          _this.count = count;
          if (undefined === count) {
              _this.count = 1;
          }
          return _this;
      }
      FinderPattern.prototype.getEstimatedModuleSize = function () {
          return this.estimatedModuleSize;
      };
      FinderPattern.prototype.getCount = function () {
          return this.count;
      };
      FinderPattern.prototype.aboutEquals = function (moduleSize , i , j ) {
          if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
              var moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
              return moduleSizeDiff <= 1.0 || moduleSizeDiff <= this.estimatedModuleSize;
          }
          return false;
      };
      FinderPattern.prototype.combineEstimate = function (i , j , newModuleSize ) {
          var combinedCount = this.count + 1;
          var combinedX = (this.count * this.getX() + j) / combinedCount;
          var combinedY = (this.count * this.getY() + i) / combinedCount;
          var combinedModuleSize = (this.count * this.estimatedModuleSize + newModuleSize) / combinedCount;
          return new FinderPattern(combinedX, combinedY, combinedModuleSize, combinedCount);
      };
      return FinderPattern;
  }(ResultPoint));

  var FinderPatternInfo =  (function () {
      function FinderPatternInfo(patternCenters) {
          this.bottomLeft = patternCenters[0];
          this.topLeft = patternCenters[1];
          this.topRight = patternCenters[2];
      }
      FinderPatternInfo.prototype.getBottomLeft = function () {
          return this.bottomLeft;
      };
      FinderPatternInfo.prototype.getTopLeft = function () {
          return this.topLeft;
      };
      FinderPatternInfo.prototype.getTopRight = function () {
          return this.topRight;
      };
      return FinderPatternInfo;
  }());

  var __values$e = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var FinderPatternFinder =  (function () {
      function FinderPatternFinder(image, resultPointCallback) {
          this.image = image;
          this.resultPointCallback = resultPointCallback;
          this.possibleCenters = [];
          this.crossCheckStateCount = new Int32Array(5);
          this.resultPointCallback = resultPointCallback;
      }
      FinderPatternFinder.prototype.getImage = function () {
          return this.image;
      };
      FinderPatternFinder.prototype.getPossibleCenters = function () {
          return this.possibleCenters;
      };
      FinderPatternFinder.prototype.find = function (hints) {
          var tryHarder = (hints !== null && hints !== undefined) && undefined !== hints.get(DecodeHintType$1.TRY_HARDER);
          var pureBarcode = (hints !== null && hints !== undefined) && undefined !== hints.get(DecodeHintType$1.PURE_BARCODE);
          var image = this.image;
          var maxI = image.getHeight();
          var maxJ = image.getWidth();
          var iSkip = Math.floor((3 * maxI) / (4 * FinderPatternFinder.MAX_MODULES));
          if (iSkip < FinderPatternFinder.MIN_SKIP || tryHarder) {
              iSkip = FinderPatternFinder.MIN_SKIP;
          }
          var done = false;
          var stateCount = new Int32Array(5);
          for (var i = iSkip - 1; i < maxI && !done; i += iSkip) {
              stateCount[0] = 0;
              stateCount[1] = 0;
              stateCount[2] = 0;
              stateCount[3] = 0;
              stateCount[4] = 0;
              var currentState = 0;
              for (var j = 0; j < maxJ; j++) {
                  if (image.get(j, i)) {
                      if ((currentState & 1) === 1) {
                          currentState++;
                      }
                      stateCount[currentState]++;
                  }
                  else {
                      if ((currentState & 1) === 0) {
                          if (currentState === 4) {
                              if (FinderPatternFinder.foundPatternCross(stateCount)) {
                                  var confirmed = this.handlePossibleCenter(stateCount, i, j, pureBarcode);
                                  if (confirmed === true) {
                                      iSkip = 2;
                                      if (this.hasSkipped === true) {
                                          done = this.haveMultiplyConfirmedCenters();
                                      }
                                      else {
                                          var rowSkip = this.findRowSkip();
                                          if (rowSkip > stateCount[2]) {
                                              i += rowSkip - stateCount[2] - iSkip;
                                              j = maxJ - 1;
                                          }
                                      }
                                  }
                                  else {
                                      stateCount[0] = stateCount[2];
                                      stateCount[1] = stateCount[3];
                                      stateCount[2] = stateCount[4];
                                      stateCount[3] = 1;
                                      stateCount[4] = 0;
                                      currentState = 3;
                                      continue;
                                  }
                                  currentState = 0;
                                  stateCount[0] = 0;
                                  stateCount[1] = 0;
                                  stateCount[2] = 0;
                                  stateCount[3] = 0;
                                  stateCount[4] = 0;
                              }
                              else {
                                  stateCount[0] = stateCount[2];
                                  stateCount[1] = stateCount[3];
                                  stateCount[2] = stateCount[4];
                                  stateCount[3] = 1;
                                  stateCount[4] = 0;
                                  currentState = 3;
                              }
                          }
                          else {
                              stateCount[++currentState]++;
                          }
                      }
                      else {
                          stateCount[currentState]++;
                      }
                  }
              }
              if (FinderPatternFinder.foundPatternCross(stateCount)) {
                  var confirmed = this.handlePossibleCenter(stateCount, i, maxJ, pureBarcode);
                  if (confirmed === true) {
                      iSkip = stateCount[0];
                      if (this.hasSkipped) {
                          done = this.haveMultiplyConfirmedCenters();
                      }
                  }
              }
          }
          var patternInfo = this.selectBestPatterns();
          ResultPoint.orderBestPatterns(patternInfo);
          return new FinderPatternInfo(patternInfo);
      };
      FinderPatternFinder.centerFromEnd = function (stateCount, end ) {
          return (end - stateCount[4] - stateCount[3]) - stateCount[2] / 2.0;
      };
      FinderPatternFinder.foundPatternCross = function (stateCount) {
          var totalModuleSize = 0;
          for (var i = 0; i < 5; i++) {
              var count = stateCount[i];
              if (count === 0) {
                  return false;
              }
              totalModuleSize += count;
          }
          if (totalModuleSize < 7) {
              return false;
          }
          var moduleSize = totalModuleSize / 7.0;
          var maxVariance = moduleSize / 2.0;
          return Math.abs(moduleSize - stateCount[0]) < maxVariance &&
              Math.abs(moduleSize - stateCount[1]) < maxVariance &&
              Math.abs(3.0 * moduleSize - stateCount[2]) < 3 * maxVariance &&
              Math.abs(moduleSize - stateCount[3]) < maxVariance &&
              Math.abs(moduleSize - stateCount[4]) < maxVariance;
      };
      FinderPatternFinder.prototype.getCrossCheckStateCount = function () {
          var crossCheckStateCount = this.crossCheckStateCount;
          crossCheckStateCount[0] = 0;
          crossCheckStateCount[1] = 0;
          crossCheckStateCount[2] = 0;
          crossCheckStateCount[3] = 0;
          crossCheckStateCount[4] = 0;
          return crossCheckStateCount;
      };
      FinderPatternFinder.prototype.crossCheckDiagonal = function (startI , centerJ , maxCount , originalStateCountTotal ) {
          var stateCount = this.getCrossCheckStateCount();
          var i = 0;
          var image = this.image;
          while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i)) {
              stateCount[2]++;
              i++;
          }
          if (startI < i || centerJ < i) {
              return false;
          }
          while (startI >= i && centerJ >= i && !image.get(centerJ - i, startI - i) &&
              stateCount[1] <= maxCount) {
              stateCount[1]++;
              i++;
          }
          if (startI < i || centerJ < i || stateCount[1] > maxCount) {
              return false;
          }
          while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i) &&
              stateCount[0] <= maxCount) {
              stateCount[0]++;
              i++;
          }
          if (stateCount[0] > maxCount) {
              return false;
          }
          var maxI = image.getHeight();
          var maxJ = image.getWidth();
          i = 1;
          while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i)) {
              stateCount[2]++;
              i++;
          }
          if (startI + i >= maxI || centerJ + i >= maxJ) {
              return false;
          }
          while (startI + i < maxI && centerJ + i < maxJ && !image.get(centerJ + i, startI + i) &&
              stateCount[3] < maxCount) {
              stateCount[3]++;
              i++;
          }
          if (startI + i >= maxI || centerJ + i >= maxJ || stateCount[3] >= maxCount) {
              return false;
          }
          while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i) &&
              stateCount[4] < maxCount) {
              stateCount[4]++;
              i++;
          }
          if (stateCount[4] >= maxCount) {
              return false;
          }
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
          return Math.abs(stateCountTotal - originalStateCountTotal) < 2 * originalStateCountTotal &&
              FinderPatternFinder.foundPatternCross(stateCount);
      };
      FinderPatternFinder.prototype.crossCheckVertical = function (startI , centerJ , maxCount , originalStateCountTotal ) {
          var image = this.image;
          var maxI = image.getHeight();
          var stateCount = this.getCrossCheckStateCount();
          var i = startI;
          while (i >= 0 && image.get(centerJ, i)) {
              stateCount[2]++;
              i--;
          }
          if (i < 0) {
              return NaN;
          }
          while (i >= 0 && !image.get(centerJ, i) && stateCount[1] <= maxCount) {
              stateCount[1]++;
              i--;
          }
          if (i < 0 || stateCount[1] > maxCount) {
              return NaN;
          }
          while (i >= 0 && image.get(centerJ, i) && stateCount[0] <= maxCount) {
              stateCount[0]++;
              i--;
          }
          if (stateCount[0] > maxCount) {
              return NaN;
          }
          i = startI + 1;
          while (i < maxI && image.get(centerJ, i)) {
              stateCount[2]++;
              i++;
          }
          if (i === maxI) {
              return NaN;
          }
          while (i < maxI && !image.get(centerJ, i) && stateCount[3] < maxCount) {
              stateCount[3]++;
              i++;
          }
          if (i === maxI || stateCount[3] >= maxCount) {
              return NaN;
          }
          while (i < maxI && image.get(centerJ, i) && stateCount[4] < maxCount) {
              stateCount[4]++;
              i++;
          }
          if (stateCount[4] >= maxCount) {
              return NaN;
          }
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
              stateCount[4];
          if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
              return NaN;
          }
          return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, i) : NaN;
      };
      FinderPatternFinder.prototype.crossCheckHorizontal = function (startJ , centerI , maxCount , originalStateCountTotal ) {
          var image = this.image;
          var maxJ = image.getWidth();
          var stateCount = this.getCrossCheckStateCount();
          var j = startJ;
          while (j >= 0 && image.get(j, centerI)) {
              stateCount[2]++;
              j--;
          }
          if (j < 0) {
              return NaN;
          }
          while (j >= 0 && !image.get(j, centerI) && stateCount[1] <= maxCount) {
              stateCount[1]++;
              j--;
          }
          if (j < 0 || stateCount[1] > maxCount) {
              return NaN;
          }
          while (j >= 0 && image.get(j, centerI) && stateCount[0] <= maxCount) {
              stateCount[0]++;
              j--;
          }
          if (stateCount[0] > maxCount) {
              return NaN;
          }
          j = startJ + 1;
          while (j < maxJ && image.get(j, centerI)) {
              stateCount[2]++;
              j++;
          }
          if (j === maxJ) {
              return NaN;
          }
          while (j < maxJ && !image.get(j, centerI) && stateCount[3] < maxCount) {
              stateCount[3]++;
              j++;
          }
          if (j === maxJ || stateCount[3] >= maxCount) {
              return NaN;
          }
          while (j < maxJ && image.get(j, centerI) && stateCount[4] < maxCount) {
              stateCount[4]++;
              j++;
          }
          if (stateCount[4] >= maxCount) {
              return NaN;
          }
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
              stateCount[4];
          if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
              return NaN;
          }
          return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, j) : NaN;
      };
      FinderPatternFinder.prototype.handlePossibleCenter = function (stateCount, i , j , pureBarcode) {
          var stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
              stateCount[4];
          var centerJ = FinderPatternFinder.centerFromEnd(stateCount, j);
          var centerI = this.crossCheckVertical(i,  Math.floor(centerJ), stateCount[2], stateCountTotal);
          if (!isNaN(centerI)) {
              centerJ = this.crossCheckHorizontal( Math.floor(centerJ),  Math.floor(centerI), stateCount[2], stateCountTotal);
              if (!isNaN(centerJ) &&
                  (!pureBarcode || this.crossCheckDiagonal( Math.floor(centerI),  Math.floor(centerJ), stateCount[2], stateCountTotal))) {
                  var estimatedModuleSize = stateCountTotal / 7.0;
                  var found = false;
                  var possibleCenters = this.possibleCenters;
                  for (var index = 0, length_1 = possibleCenters.length; index < length_1; index++) {
                      var center = possibleCenters[index];
                      if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                          possibleCenters[index] = center.combineEstimate(centerI, centerJ, estimatedModuleSize);
                          found = true;
                          break;
                      }
                  }
                  if (!found) {
                      var point = new FinderPattern(centerJ, centerI, estimatedModuleSize);
                      possibleCenters.push(point);
                      if (this.resultPointCallback !== null && this.resultPointCallback !== undefined) {
                          this.resultPointCallback.foundPossibleResultPoint(point);
                      }
                  }
                  return true;
              }
          }
          return false;
      };
      FinderPatternFinder.prototype.findRowSkip = function () {
          var e_1, _a;
          var max = this.possibleCenters.length;
          if (max <= 1) {
              return 0;
          }
          var firstConfirmedCenter = null;
          try {
              for (var _b = __values$e(this.possibleCenters), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var center = _c.value;
                  if (center.getCount() >= FinderPatternFinder.CENTER_QUORUM) {
                      if (firstConfirmedCenter == null) {
                          firstConfirmedCenter = center;
                      }
                      else {
                          this.hasSkipped = true;
                          return  Math.floor((Math.abs(firstConfirmedCenter.getX() - center.getX()) -
                              Math.abs(firstConfirmedCenter.getY() - center.getY())) / 2);
                      }
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
          return 0;
      };
      FinderPatternFinder.prototype.haveMultiplyConfirmedCenters = function () {
          var e_2, _a, e_3, _b;
          var confirmedCount = 0;
          var totalModuleSize = 0.0;
          var max = this.possibleCenters.length;
          try {
              for (var _c = __values$e(this.possibleCenters), _d = _c.next(); !_d.done; _d = _c.next()) {
                  var pattern = _d.value;
                  if (pattern.getCount() >= FinderPatternFinder.CENTER_QUORUM) {
                      confirmedCount++;
                      totalModuleSize += pattern.getEstimatedModuleSize();
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
              }
              finally { if (e_2) throw e_2.error; }
          }
          if (confirmedCount < 3) {
              return false;
          }
          var average = totalModuleSize / max;
          var totalDeviation = 0.0;
          try {
              for (var _e = __values$e(this.possibleCenters), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var pattern = _f.value;
                  totalDeviation += Math.abs(pattern.getEstimatedModuleSize() - average);
              }
          }
          catch (e_3_1) { e_3 = { error: e_3_1 }; }
          finally {
              try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
              }
              finally { if (e_3) throw e_3.error; }
          }
          return totalDeviation <= 0.05 * totalModuleSize;
      };
      FinderPatternFinder.prototype.selectBestPatterns = function () {
          var e_4, _a, e_5, _b;
          var startSize = this.possibleCenters.length;
          if (startSize < 3) {
              throw new NotFoundException();
          }
          var possibleCenters = this.possibleCenters;
          var average;
          if (startSize > 3) {
              var totalModuleSize = 0.0;
              var square = 0.0;
              try {
                  for (var _c = __values$e(this.possibleCenters), _d = _c.next(); !_d.done; _d = _c.next()) {
                      var center = _d.value;
                      var size = center.getEstimatedModuleSize();
                      totalModuleSize += size;
                      square += size * size;
                  }
              }
              catch (e_4_1) { e_4 = { error: e_4_1 }; }
              finally {
                  try {
                      if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                  }
                  finally { if (e_4) throw e_4.error; }
              }
              average = totalModuleSize / startSize;
              var stdDev = Math.sqrt(square / startSize - average * average);
              possibleCenters.sort(
              function (center1, center2) {
                  var dA = Math.abs(center2.getEstimatedModuleSize() - average);
                  var dB = Math.abs(center1.getEstimatedModuleSize() - average);
                  return dA < dB ? -1 : dA > dB ? 1 : 0;
              });
              var limit = Math.max(0.2 * average, stdDev);
              for (var i = 0; i < possibleCenters.length && possibleCenters.length > 3; i++) {
                  var pattern = possibleCenters[i];
                  if (Math.abs(pattern.getEstimatedModuleSize() - average) > limit) {
                      possibleCenters.splice(i, 1);
                      i--;
                  }
              }
          }
          if (possibleCenters.length > 3) {
              var totalModuleSize = 0.0;
              try {
                  for (var possibleCenters_1 = __values$e(possibleCenters), possibleCenters_1_1 = possibleCenters_1.next(); !possibleCenters_1_1.done; possibleCenters_1_1 = possibleCenters_1.next()) {
                      var possibleCenter = possibleCenters_1_1.value;
                      totalModuleSize += possibleCenter.getEstimatedModuleSize();
                  }
              }
              catch (e_5_1) { e_5 = { error: e_5_1 }; }
              finally {
                  try {
                      if (possibleCenters_1_1 && !possibleCenters_1_1.done && (_b = possibleCenters_1.return)) _b.call(possibleCenters_1);
                  }
                  finally { if (e_5) throw e_5.error; }
              }
              average = totalModuleSize / possibleCenters.length;
              possibleCenters.sort(
              function (center1, center2) {
                  if (center2.getCount() === center1.getCount()) {
                      var dA = Math.abs(center2.getEstimatedModuleSize() - average);
                      var dB = Math.abs(center1.getEstimatedModuleSize() - average);
                      return dA < dB ? 1 : dA > dB ? -1 : 0;
                  }
                  else {
                      return center2.getCount() - center1.getCount();
                  }
              });
              possibleCenters.splice(3);
          }
          return [
              possibleCenters[0],
              possibleCenters[1],
              possibleCenters[2]
          ];
      };
      FinderPatternFinder.CENTER_QUORUM = 2;
      FinderPatternFinder.MIN_SKIP = 3;
      FinderPatternFinder.MAX_MODULES = 57;
      return FinderPatternFinder;
  }());

  var Detector$1 =  (function () {
      function Detector(image) {
          this.image = image;
      }
      Detector.prototype.getImage = function () {
          return this.image;
      };
      Detector.prototype.getResultPointCallback = function () {
          return this.resultPointCallback;
      };
      Detector.prototype.detect = function (hints) {
          this.resultPointCallback = (hints === null || hints === undefined) ? null :
               hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
          var finder = new FinderPatternFinder(this.image, this.resultPointCallback);
          var info = finder.find(hints);
          return this.processFinderPatternInfo(info);
      };
      Detector.prototype.processFinderPatternInfo = function (info) {
          var topLeft = info.getTopLeft();
          var topRight = info.getTopRight();
          var bottomLeft = info.getBottomLeft();
          var moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
          if (moduleSize < 1.0) {
              throw new NotFoundException('No pattern found in proccess finder.');
          }
          var dimension = Detector.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
          var provisionalVersion = Version.getProvisionalVersionForDimension(dimension);
          var modulesBetweenFPCenters = provisionalVersion.getDimensionForVersion() - 7;
          var alignmentPattern = null;
          if (provisionalVersion.getAlignmentPatternCenters().length > 0) {
              var bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
              var bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
              var correctionToTopLeft = 1.0 - 3.0 / modulesBetweenFPCenters;
              var estAlignmentX =  Math.floor(topLeft.getX() + correctionToTopLeft * (bottomRightX - topLeft.getX()));
              var estAlignmentY =  Math.floor(topLeft.getY() + correctionToTopLeft * (bottomRightY - topLeft.getY()));
              for (var i = 4; i <= 16; i <<= 1) {
                  try {
                      alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
                      break;
                  }
                  catch (re ) {
                      if (!(re instanceof NotFoundException)) {
                          throw re;
                      }
                  }
              }
          }
          var transform = Detector.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
          var bits = Detector.sampleGrid(this.image, transform, dimension);
          var points;
          if (alignmentPattern === null) {
              points = [bottomLeft, topLeft, topRight];
          }
          else {
              points = [bottomLeft, topLeft, topRight, alignmentPattern];
          }
          return new DetectorResult(bits, points);
      };
      Detector.createTransform = function (topLeft, topRight, bottomLeft, alignmentPattern, dimension ) {
          var dimMinusThree = dimension - 3.5;
          var bottomRightX;
          var bottomRightY;
          var sourceBottomRightX;
          var sourceBottomRightY;
          if (alignmentPattern !== null) {
              bottomRightX = alignmentPattern.getX();
              bottomRightY = alignmentPattern.getY();
              sourceBottomRightX = dimMinusThree - 3.0;
              sourceBottomRightY = sourceBottomRightX;
          }
          else {
              bottomRightX = (topRight.getX() - topLeft.getX()) + bottomLeft.getX();
              bottomRightY = (topRight.getY() - topLeft.getY()) + bottomLeft.getY();
              sourceBottomRightX = dimMinusThree;
              sourceBottomRightY = dimMinusThree;
          }
          return PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRightX, bottomRightY, bottomLeft.getX(), bottomLeft.getY());
      };
      Detector.sampleGrid = function (image, transform, dimension ) {
          var sampler = GridSamplerInstance.getInstance();
          return sampler.sampleGridWithTransform(image, dimension, dimension, transform);
      };
      Detector.computeDimension = function (topLeft, topRight, bottomLeft, moduleSize ) {
          var tltrCentersDimension = MathUtils.round(ResultPoint.distance(topLeft, topRight) / moduleSize);
          var tlblCentersDimension = MathUtils.round(ResultPoint.distance(topLeft, bottomLeft) / moduleSize);
          var dimension = Math.floor((tltrCentersDimension + tlblCentersDimension) / 2) + 7;
          switch (dimension & 0x03) {
              case 0:
                  dimension++;
                  break;
              case 2:
                  dimension--;
                  break;
              case 3:
                  throw new NotFoundException('Dimensions could be not found.');
          }
          return dimension;
      };
      Detector.prototype.calculateModuleSize = function (topLeft, topRight, bottomLeft) {
          return (this.calculateModuleSizeOneWay(topLeft, topRight) +
              this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2.0;
      };
      Detector.prototype.calculateModuleSizeOneWay = function (pattern, otherPattern) {
          var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays( Math.floor(pattern.getX()),
           Math.floor(pattern.getY()),
           Math.floor(otherPattern.getX()),
           Math.floor(otherPattern.getY()));
          var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays( Math.floor(otherPattern.getX()),
           Math.floor(otherPattern.getY()),
           Math.floor(pattern.getX()),
           Math.floor(pattern.getY()));
          if (isNaN(moduleSizeEst1)) {
              return moduleSizeEst2 / 7.0;
          }
          if (isNaN(moduleSizeEst2)) {
              return moduleSizeEst1 / 7.0;
          }
          return (moduleSizeEst1 + moduleSizeEst2) / 14.0;
      };
      Detector.prototype.sizeOfBlackWhiteBlackRunBothWays = function (fromX , fromY , toX , toY ) {
          var result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
          var scale = 1.0;
          var otherToX = fromX - (toX - fromX);
          if (otherToX < 0) {
              scale = fromX /  (fromX - otherToX);
              otherToX = 0;
          }
          else if (otherToX >= this.image.getWidth()) {
              scale = (this.image.getWidth() - 1 - fromX) /  (otherToX - fromX);
              otherToX = this.image.getWidth() - 1;
          }
          var otherToY =  Math.floor(fromY - (toY - fromY) * scale);
          scale = 1.0;
          if (otherToY < 0) {
              scale = fromY /  (fromY - otherToY);
              otherToY = 0;
          }
          else if (otherToY >= this.image.getHeight()) {
              scale = (this.image.getHeight() - 1 - fromY) /  (otherToY - fromY);
              otherToY = this.image.getHeight() - 1;
          }
          otherToX =  Math.floor(fromX + (otherToX - fromX) * scale);
          result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
          return result - 1.0;
      };
      Detector.prototype.sizeOfBlackWhiteBlackRun = function (fromX , fromY , toX , toY ) {
          var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
          if (steep) {
              var temp = fromX;
              fromX = fromY;
              fromY = temp;
              temp = toX;
              toX = toY;
              toY = temp;
          }
          var dx = Math.abs(toX - fromX);
          var dy = Math.abs(toY - fromY);
          var error = -dx / 2;
          var xstep = fromX < toX ? 1 : -1;
          var ystep = fromY < toY ? 1 : -1;
          var state = 0;
          var xLimit = toX + xstep;
          for (var x = fromX, y = fromY; x !== xLimit; x += xstep) {
              var realX = steep ? y : x;
              var realY = steep ? x : y;
              if ((state === 1) === this.image.get(realX, realY)) {
                  if (state === 2) {
                      return MathUtils.distance(x, y, fromX, fromY);
                  }
                  state++;
              }
              error += dy;
              if (error > 0) {
                  if (y === toY) {
                      break;
                  }
                  y += ystep;
                  error -= dx;
              }
          }
          if (state === 2) {
              return MathUtils.distance(toX + xstep, toY, fromX, fromY);
          }
          return NaN;
      };
      Detector.prototype.findAlignmentInRegion = function (overallEstModuleSize , estAlignmentX , estAlignmentY , allowanceFactor ) {
          var allowance =  Math.floor(allowanceFactor * overallEstModuleSize);
          var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
          var alignmentAreaRightX = Math.min(this.image.getWidth() - 1, estAlignmentX + allowance);
          if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
              throw new NotFoundException('Alignment top exceeds estimated module size.');
          }
          var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
          var alignmentAreaBottomY = Math.min(this.image.getHeight() - 1, estAlignmentY + allowance);
          if (alignmentAreaBottomY - alignmentAreaTopY < overallEstModuleSize * 3) {
              throw new NotFoundException('Alignment bottom exceeds estimated module size.');
          }
          var alignmentFinder = new AlignmentPatternFinder(this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback);
          return alignmentFinder.find();
      };
      return Detector;
  }());

  var QRCodeReader =  (function () {
      function QRCodeReader() {
          this.decoder = new Decoder();
      }
      QRCodeReader.prototype.getDecoder = function () {
          return this.decoder;
      };
      QRCodeReader.prototype.decode = function (image, hints) {
          var decoderResult;
          var points;
          if (hints !== undefined && hints !== null && undefined !== hints.get(DecodeHintType$1.PURE_BARCODE)) {
              var bits = QRCodeReader.extractPureBits(image.getBlackMatrix());
              decoderResult = this.decoder.decodeBitMatrix(bits, hints);
              points = QRCodeReader.NO_POINTS;
          }
          else {
              var detectorResult = new Detector$1(image.getBlackMatrix()).detect(hints);
              decoderResult = this.decoder.decodeBitMatrix(detectorResult.getBits(), hints);
              points = detectorResult.getPoints();
          }
          if (decoderResult.getOther() instanceof QRCodeDecoderMetaData) {
              decoderResult.getOther().applyMirroredCorrection(points);
          }
          var result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), undefined, points, BarcodeFormat$1.QR_CODE, undefined);
          var byteSegments = decoderResult.getByteSegments();
          if (byteSegments !== null) {
              result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
          }
          var ecLevel = decoderResult.getECLevel();
          if (ecLevel !== null) {
              result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
          }
          if (decoderResult.hasStructuredAppend()) {
              result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_SEQUENCE, decoderResult.getStructuredAppendSequenceNumber());
              result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_PARITY, decoderResult.getStructuredAppendParity());
          }
          return result;
      };
      QRCodeReader.prototype.reset = function () {
      };
      QRCodeReader.extractPureBits = function (image) {
          var leftTopBlack = image.getTopLeftOnBit();
          var rightBottomBlack = image.getBottomRightOnBit();
          if (leftTopBlack === null || rightBottomBlack === null) {
              throw new NotFoundException();
          }
          var moduleSize = this.moduleSize(leftTopBlack, image);
          var top = leftTopBlack[1];
          var bottom = rightBottomBlack[1];
          var left = leftTopBlack[0];
          var right = rightBottomBlack[0];
          if (left >= right || top >= bottom) {
              throw new NotFoundException();
          }
          if (bottom - top !== right - left) {
              right = left + (bottom - top);
              if (right >= image.getWidth()) {
                  throw new NotFoundException();
              }
          }
          var matrixWidth = Math.round((right - left + 1) / moduleSize);
          var matrixHeight = Math.round((bottom - top + 1) / moduleSize);
          if (matrixWidth <= 0 || matrixHeight <= 0) {
              throw new NotFoundException();
          }
          if (matrixHeight !== matrixWidth) {
              throw new NotFoundException();
          }
          var nudge =  Math.floor(moduleSize / 2.0);
          top += nudge;
          left += nudge;
          var nudgedTooFarRight = left +  Math.floor((matrixWidth - 1) * moduleSize) - right;
          if (nudgedTooFarRight > 0) {
              if (nudgedTooFarRight > nudge) {
                  throw new NotFoundException();
              }
              left -= nudgedTooFarRight;
          }
          var nudgedTooFarDown = top +  Math.floor((matrixHeight - 1) * moduleSize) - bottom;
          if (nudgedTooFarDown > 0) {
              if (nudgedTooFarDown > nudge) {
                  throw new NotFoundException();
              }
              top -= nudgedTooFarDown;
          }
          var bits = new BitMatrix(matrixWidth, matrixHeight);
          for (var y = 0; y < matrixHeight; y++) {
              var iOffset = top +  Math.floor(y * moduleSize);
              for (var x = 0; x < matrixWidth; x++) {
                  if (image.get(left +  Math.floor(x * moduleSize), iOffset)) {
                      bits.set(x, y);
                  }
              }
          }
          return bits;
      };
      QRCodeReader.moduleSize = function (leftTopBlack, image) {
          var height = image.getHeight();
          var width = image.getWidth();
          var x = leftTopBlack[0];
          var y = leftTopBlack[1];
          var inBlack = true;
          var transitions = 0;
          while (x < width && y < height) {
              if (inBlack !== image.get(x, y)) {
                  if (++transitions === 5) {
                      break;
                  }
                  inBlack = !inBlack;
              }
              x++;
              y++;
          }
          if (x === width || y === height) {
              throw new NotFoundException();
          }
          return (x - leftTopBlack[0]) / 7.0;
      };
      QRCodeReader.NO_POINTS = new Array();
      return QRCodeReader;
  }());

  var __values$d = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var PDF417Common =  (function () {
      function PDF417Common() {
      }
      PDF417Common.prototype.PDF417Common = function () {
      };
      PDF417Common.getBitCountSum = function (moduleBitCount) {
          return MathUtils.sum(moduleBitCount);
      };
      PDF417Common.toIntArray = function (list) {
          var e_1, _a;
          if (list == null || !list.length) {
              return PDF417Common.EMPTY_INT_ARRAY;
          }
          var result = new Int32Array(list.length);
          var i = 0;
          try {
              for (var list_1 = __values$d(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                  var integer = list_1_1.value;
                  result[i++] = integer;
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          return result;
      };
      PDF417Common.getCodeword = function (symbol ) {
          var i = Arrays.binarySearch(PDF417Common.SYMBOL_TABLE, symbol & 0x3FFFF);
          if (i < 0) {
              return -1;
          }
          return (PDF417Common.CODEWORD_TABLE[i] - 1) % PDF417Common.NUMBER_OF_CODEWORDS;
      };
      PDF417Common.NUMBER_OF_CODEWORDS = 929;
      PDF417Common.MAX_CODEWORDS_IN_BARCODE = PDF417Common.NUMBER_OF_CODEWORDS - 1;
      PDF417Common.MIN_ROWS_IN_BARCODE = 3;
      PDF417Common.MAX_ROWS_IN_BARCODE = 90;
      PDF417Common.MODULES_IN_CODEWORD = 17;
      PDF417Common.MODULES_IN_STOP_PATTERN = 18;
      PDF417Common.BARS_IN_MODULE = 8;
      PDF417Common.EMPTY_INT_ARRAY = new Int32Array([]);
      PDF417Common.SYMBOL_TABLE = Int32Array.from([
          0x1025e, 0x1027a, 0x1029e, 0x102bc, 0x102f2, 0x102f4, 0x1032e, 0x1034e, 0x1035c, 0x10396, 0x103a6, 0x103ac,
          0x10422, 0x10428, 0x10436, 0x10442, 0x10444, 0x10448, 0x10450, 0x1045e, 0x10466, 0x1046c, 0x1047a, 0x10482,
          0x1049e, 0x104a0, 0x104bc, 0x104c6, 0x104d8, 0x104ee, 0x104f2, 0x104f4, 0x10504, 0x10508, 0x10510, 0x1051e,
          0x10520, 0x1053c, 0x10540, 0x10578, 0x10586, 0x1058c, 0x10598, 0x105b0, 0x105be, 0x105ce, 0x105dc, 0x105e2,
          0x105e4, 0x105e8, 0x105f6, 0x1062e, 0x1064e, 0x1065c, 0x1068e, 0x1069c, 0x106b8, 0x106de, 0x106fa, 0x10716,
          0x10726, 0x1072c, 0x10746, 0x1074c, 0x10758, 0x1076e, 0x10792, 0x10794, 0x107a2, 0x107a4, 0x107a8, 0x107b6,
          0x10822, 0x10828, 0x10842, 0x10848, 0x10850, 0x1085e, 0x10866, 0x1086c, 0x1087a, 0x10882, 0x10884, 0x10890,
          0x1089e, 0x108a0, 0x108bc, 0x108c6, 0x108cc, 0x108d8, 0x108ee, 0x108f2, 0x108f4, 0x10902, 0x10908, 0x1091e,
          0x10920, 0x1093c, 0x10940, 0x10978, 0x10986, 0x10998, 0x109b0, 0x109be, 0x109ce, 0x109dc, 0x109e2, 0x109e4,
          0x109e8, 0x109f6, 0x10a08, 0x10a10, 0x10a1e, 0x10a20, 0x10a3c, 0x10a40, 0x10a78, 0x10af0, 0x10b06, 0x10b0c,
          0x10b18, 0x10b30, 0x10b3e, 0x10b60, 0x10b7c, 0x10b8e, 0x10b9c, 0x10bb8, 0x10bc2, 0x10bc4, 0x10bc8, 0x10bd0,
          0x10bde, 0x10be6, 0x10bec, 0x10c2e, 0x10c4e, 0x10c5c, 0x10c62, 0x10c64, 0x10c68, 0x10c76, 0x10c8e, 0x10c9c,
          0x10cb8, 0x10cc2, 0x10cc4, 0x10cc8, 0x10cd0, 0x10cde, 0x10ce6, 0x10cec, 0x10cfa, 0x10d0e, 0x10d1c, 0x10d38,
          0x10d70, 0x10d7e, 0x10d82, 0x10d84, 0x10d88, 0x10d90, 0x10d9e, 0x10da0, 0x10dbc, 0x10dc6, 0x10dcc, 0x10dd8,
          0x10dee, 0x10df2, 0x10df4, 0x10e16, 0x10e26, 0x10e2c, 0x10e46, 0x10e58, 0x10e6e, 0x10e86, 0x10e8c, 0x10e98,
          0x10eb0, 0x10ebe, 0x10ece, 0x10edc, 0x10f0a, 0x10f12, 0x10f14, 0x10f22, 0x10f28, 0x10f36, 0x10f42, 0x10f44,
          0x10f48, 0x10f50, 0x10f5e, 0x10f66, 0x10f6c, 0x10fb2, 0x10fb4, 0x11022, 0x11028, 0x11042, 0x11048, 0x11050,
          0x1105e, 0x1107a, 0x11082, 0x11084, 0x11090, 0x1109e, 0x110a0, 0x110bc, 0x110c6, 0x110cc, 0x110d8, 0x110ee,
          0x110f2, 0x110f4, 0x11102, 0x1111e, 0x11120, 0x1113c, 0x11140, 0x11178, 0x11186, 0x11198, 0x111b0, 0x111be,
          0x111ce, 0x111dc, 0x111e2, 0x111e4, 0x111e8, 0x111f6, 0x11208, 0x1121e, 0x11220, 0x11278, 0x112f0, 0x1130c,
          0x11330, 0x1133e, 0x11360, 0x1137c, 0x1138e, 0x1139c, 0x113b8, 0x113c2, 0x113c8, 0x113d0, 0x113de, 0x113e6,
          0x113ec, 0x11408, 0x11410, 0x1141e, 0x11420, 0x1143c, 0x11440, 0x11478, 0x114f0, 0x115e0, 0x1160c, 0x11618,
          0x11630, 0x1163e, 0x11660, 0x1167c, 0x116c0, 0x116f8, 0x1171c, 0x11738, 0x11770, 0x1177e, 0x11782, 0x11784,
          0x11788, 0x11790, 0x1179e, 0x117a0, 0x117bc, 0x117c6, 0x117cc, 0x117d8, 0x117ee, 0x1182e, 0x11834, 0x1184e,
          0x1185c, 0x11862, 0x11864, 0x11868, 0x11876, 0x1188e, 0x1189c, 0x118b8, 0x118c2, 0x118c8, 0x118d0, 0x118de,
          0x118e6, 0x118ec, 0x118fa, 0x1190e, 0x1191c, 0x11938, 0x11970, 0x1197e, 0x11982, 0x11984, 0x11990, 0x1199e,
          0x119a0, 0x119bc, 0x119c6, 0x119cc, 0x119d8, 0x119ee, 0x119f2, 0x119f4, 0x11a0e, 0x11a1c, 0x11a38, 0x11a70,
          0x11a7e, 0x11ae0, 0x11afc, 0x11b08, 0x11b10, 0x11b1e, 0x11b20, 0x11b3c, 0x11b40, 0x11b78, 0x11b8c, 0x11b98,
          0x11bb0, 0x11bbe, 0x11bce, 0x11bdc, 0x11be2, 0x11be4, 0x11be8, 0x11bf6, 0x11c16, 0x11c26, 0x11c2c, 0x11c46,
          0x11c4c, 0x11c58, 0x11c6e, 0x11c86, 0x11c98, 0x11cb0, 0x11cbe, 0x11cce, 0x11cdc, 0x11ce2, 0x11ce4, 0x11ce8,
          0x11cf6, 0x11d06, 0x11d0c, 0x11d18, 0x11d30, 0x11d3e, 0x11d60, 0x11d7c, 0x11d8e, 0x11d9c, 0x11db8, 0x11dc4,
          0x11dc8, 0x11dd0, 0x11dde, 0x11de6, 0x11dec, 0x11dfa, 0x11e0a, 0x11e12, 0x11e14, 0x11e22, 0x11e24, 0x11e28,
          0x11e36, 0x11e42, 0x11e44, 0x11e50, 0x11e5e, 0x11e66, 0x11e6c, 0x11e82, 0x11e84, 0x11e88, 0x11e90, 0x11e9e,
          0x11ea0, 0x11ebc, 0x11ec6, 0x11ecc, 0x11ed8, 0x11eee, 0x11f1a, 0x11f2e, 0x11f32, 0x11f34, 0x11f4e, 0x11f5c,
          0x11f62, 0x11f64, 0x11f68, 0x11f76, 0x12048, 0x1205e, 0x12082, 0x12084, 0x12090, 0x1209e, 0x120a0, 0x120bc,
          0x120d8, 0x120f2, 0x120f4, 0x12108, 0x1211e, 0x12120, 0x1213c, 0x12140, 0x12178, 0x12186, 0x12198, 0x121b0,
          0x121be, 0x121e2, 0x121e4, 0x121e8, 0x121f6, 0x12204, 0x12210, 0x1221e, 0x12220, 0x12278, 0x122f0, 0x12306,
          0x1230c, 0x12330, 0x1233e, 0x12360, 0x1237c, 0x1238e, 0x1239c, 0x123b8, 0x123c2, 0x123c8, 0x123d0, 0x123e6,
          0x123ec, 0x1241e, 0x12420, 0x1243c, 0x124f0, 0x125e0, 0x12618, 0x1263e, 0x12660, 0x1267c, 0x126c0, 0x126f8,
          0x12738, 0x12770, 0x1277e, 0x12782, 0x12784, 0x12790, 0x1279e, 0x127a0, 0x127bc, 0x127c6, 0x127cc, 0x127d8,
          0x127ee, 0x12820, 0x1283c, 0x12840, 0x12878, 0x128f0, 0x129e0, 0x12bc0, 0x12c18, 0x12c30, 0x12c3e, 0x12c60,
          0x12c7c, 0x12cc0, 0x12cf8, 0x12df0, 0x12e1c, 0x12e38, 0x12e70, 0x12e7e, 0x12ee0, 0x12efc, 0x12f04, 0x12f08,
          0x12f10, 0x12f20, 0x12f3c, 0x12f40, 0x12f78, 0x12f86, 0x12f8c, 0x12f98, 0x12fb0, 0x12fbe, 0x12fce, 0x12fdc,
          0x1302e, 0x1304e, 0x1305c, 0x13062, 0x13068, 0x1308e, 0x1309c, 0x130b8, 0x130c2, 0x130c8, 0x130d0, 0x130de,
          0x130ec, 0x130fa, 0x1310e, 0x13138, 0x13170, 0x1317e, 0x13182, 0x13184, 0x13190, 0x1319e, 0x131a0, 0x131bc,
          0x131c6, 0x131cc, 0x131d8, 0x131f2, 0x131f4, 0x1320e, 0x1321c, 0x13270, 0x1327e, 0x132e0, 0x132fc, 0x13308,
          0x1331e, 0x13320, 0x1333c, 0x13340, 0x13378, 0x13386, 0x13398, 0x133b0, 0x133be, 0x133ce, 0x133dc, 0x133e2,
          0x133e4, 0x133e8, 0x133f6, 0x1340e, 0x1341c, 0x13438, 0x13470, 0x1347e, 0x134e0, 0x134fc, 0x135c0, 0x135f8,
          0x13608, 0x13610, 0x1361e, 0x13620, 0x1363c, 0x13640, 0x13678, 0x136f0, 0x1370c, 0x13718, 0x13730, 0x1373e,
          0x13760, 0x1377c, 0x1379c, 0x137b8, 0x137c2, 0x137c4, 0x137c8, 0x137d0, 0x137de, 0x137e6, 0x137ec, 0x13816,
          0x13826, 0x1382c, 0x13846, 0x1384c, 0x13858, 0x1386e, 0x13874, 0x13886, 0x13898, 0x138b0, 0x138be, 0x138ce,
          0x138dc, 0x138e2, 0x138e4, 0x138e8, 0x13906, 0x1390c, 0x13930, 0x1393e, 0x13960, 0x1397c, 0x1398e, 0x1399c,
          0x139b8, 0x139c8, 0x139d0, 0x139de, 0x139e6, 0x139ec, 0x139fa, 0x13a06, 0x13a0c, 0x13a18, 0x13a30, 0x13a3e,
          0x13a60, 0x13a7c, 0x13ac0, 0x13af8, 0x13b0e, 0x13b1c, 0x13b38, 0x13b70, 0x13b7e, 0x13b88, 0x13b90, 0x13b9e,
          0x13ba0, 0x13bbc, 0x13bcc, 0x13bd8, 0x13bee, 0x13bf2, 0x13bf4, 0x13c12, 0x13c14, 0x13c22, 0x13c24, 0x13c28,
          0x13c36, 0x13c42, 0x13c48, 0x13c50, 0x13c5e, 0x13c66, 0x13c6c, 0x13c82, 0x13c84, 0x13c90, 0x13c9e, 0x13ca0,
          0x13cbc, 0x13cc6, 0x13ccc, 0x13cd8, 0x13cee, 0x13d02, 0x13d04, 0x13d08, 0x13d10, 0x13d1e, 0x13d20, 0x13d3c,
          0x13d40, 0x13d78, 0x13d86, 0x13d8c, 0x13d98, 0x13db0, 0x13dbe, 0x13dce, 0x13ddc, 0x13de4, 0x13de8, 0x13df6,
          0x13e1a, 0x13e2e, 0x13e32, 0x13e34, 0x13e4e, 0x13e5c, 0x13e62, 0x13e64, 0x13e68, 0x13e76, 0x13e8e, 0x13e9c,
          0x13eb8, 0x13ec2, 0x13ec4, 0x13ec8, 0x13ed0, 0x13ede, 0x13ee6, 0x13eec, 0x13f26, 0x13f2c, 0x13f3a, 0x13f46,
          0x13f4c, 0x13f58, 0x13f6e, 0x13f72, 0x13f74, 0x14082, 0x1409e, 0x140a0, 0x140bc, 0x14104, 0x14108, 0x14110,
          0x1411e, 0x14120, 0x1413c, 0x14140, 0x14178, 0x1418c, 0x14198, 0x141b0, 0x141be, 0x141e2, 0x141e4, 0x141e8,
          0x14208, 0x14210, 0x1421e, 0x14220, 0x1423c, 0x14240, 0x14278, 0x142f0, 0x14306, 0x1430c, 0x14318, 0x14330,
          0x1433e, 0x14360, 0x1437c, 0x1438e, 0x143c2, 0x143c4, 0x143c8, 0x143d0, 0x143e6, 0x143ec, 0x14408, 0x14410,
          0x1441e, 0x14420, 0x1443c, 0x14440, 0x14478, 0x144f0, 0x145e0, 0x1460c, 0x14618, 0x14630, 0x1463e, 0x14660,
          0x1467c, 0x146c0, 0x146f8, 0x1471c, 0x14738, 0x14770, 0x1477e, 0x14782, 0x14784, 0x14788, 0x14790, 0x147a0,
          0x147bc, 0x147c6, 0x147cc, 0x147d8, 0x147ee, 0x14810, 0x14820, 0x1483c, 0x14840, 0x14878, 0x148f0, 0x149e0,
          0x14bc0, 0x14c30, 0x14c3e, 0x14c60, 0x14c7c, 0x14cc0, 0x14cf8, 0x14df0, 0x14e38, 0x14e70, 0x14e7e, 0x14ee0,
          0x14efc, 0x14f04, 0x14f08, 0x14f10, 0x14f1e, 0x14f20, 0x14f3c, 0x14f40, 0x14f78, 0x14f86, 0x14f8c, 0x14f98,
          0x14fb0, 0x14fce, 0x14fdc, 0x15020, 0x15040, 0x15078, 0x150f0, 0x151e0, 0x153c0, 0x15860, 0x1587c, 0x158c0,
          0x158f8, 0x159f0, 0x15be0, 0x15c70, 0x15c7e, 0x15ce0, 0x15cfc, 0x15dc0, 0x15df8, 0x15e08, 0x15e10, 0x15e20,
          0x15e40, 0x15e78, 0x15ef0, 0x15f0c, 0x15f18, 0x15f30, 0x15f60, 0x15f7c, 0x15f8e, 0x15f9c, 0x15fb8, 0x1604e,
          0x1605c, 0x1608e, 0x1609c, 0x160b8, 0x160c2, 0x160c4, 0x160c8, 0x160de, 0x1610e, 0x1611c, 0x16138, 0x16170,
          0x1617e, 0x16184, 0x16188, 0x16190, 0x1619e, 0x161a0, 0x161bc, 0x161c6, 0x161cc, 0x161d8, 0x161f2, 0x161f4,
          0x1620e, 0x1621c, 0x16238, 0x16270, 0x1627e, 0x162e0, 0x162fc, 0x16304, 0x16308, 0x16310, 0x1631e, 0x16320,
          0x1633c, 0x16340, 0x16378, 0x16386, 0x1638c, 0x16398, 0x163b0, 0x163be, 0x163ce, 0x163dc, 0x163e2, 0x163e4,
          0x163e8, 0x163f6, 0x1640e, 0x1641c, 0x16438, 0x16470, 0x1647e, 0x164e0, 0x164fc, 0x165c0, 0x165f8, 0x16610,
          0x1661e, 0x16620, 0x1663c, 0x16640, 0x16678, 0x166f0, 0x16718, 0x16730, 0x1673e, 0x16760, 0x1677c, 0x1678e,
          0x1679c, 0x167b8, 0x167c2, 0x167c4, 0x167c8, 0x167d0, 0x167de, 0x167e6, 0x167ec, 0x1681c, 0x16838, 0x16870,
          0x168e0, 0x168fc, 0x169c0, 0x169f8, 0x16bf0, 0x16c10, 0x16c1e, 0x16c20, 0x16c3c, 0x16c40, 0x16c78, 0x16cf0,
          0x16de0, 0x16e18, 0x16e30, 0x16e3e, 0x16e60, 0x16e7c, 0x16ec0, 0x16ef8, 0x16f1c, 0x16f38, 0x16f70, 0x16f7e,
          0x16f84, 0x16f88, 0x16f90, 0x16f9e, 0x16fa0, 0x16fbc, 0x16fc6, 0x16fcc, 0x16fd8, 0x17026, 0x1702c, 0x17046,
          0x1704c, 0x17058, 0x1706e, 0x17086, 0x1708c, 0x17098, 0x170b0, 0x170be, 0x170ce, 0x170dc, 0x170e8, 0x17106,
          0x1710c, 0x17118, 0x17130, 0x1713e, 0x17160, 0x1717c, 0x1718e, 0x1719c, 0x171b8, 0x171c2, 0x171c4, 0x171c8,
          0x171d0, 0x171de, 0x171e6, 0x171ec, 0x171fa, 0x17206, 0x1720c, 0x17218, 0x17230, 0x1723e, 0x17260, 0x1727c,
          0x172c0, 0x172f8, 0x1730e, 0x1731c, 0x17338, 0x17370, 0x1737e, 0x17388, 0x17390, 0x1739e, 0x173a0, 0x173bc,
          0x173cc, 0x173d8, 0x173ee, 0x173f2, 0x173f4, 0x1740c, 0x17418, 0x17430, 0x1743e, 0x17460, 0x1747c, 0x174c0,
          0x174f8, 0x175f0, 0x1760e, 0x1761c, 0x17638, 0x17670, 0x1767e, 0x176e0, 0x176fc, 0x17708, 0x17710, 0x1771e,
          0x17720, 0x1773c, 0x17740, 0x17778, 0x17798, 0x177b0, 0x177be, 0x177dc, 0x177e2, 0x177e4, 0x177e8, 0x17822,
          0x17824, 0x17828, 0x17836, 0x17842, 0x17844, 0x17848, 0x17850, 0x1785e, 0x17866, 0x1786c, 0x17882, 0x17884,
          0x17888, 0x17890, 0x1789e, 0x178a0, 0x178bc, 0x178c6, 0x178cc, 0x178d8, 0x178ee, 0x178f2, 0x178f4, 0x17902,
          0x17904, 0x17908, 0x17910, 0x1791e, 0x17920, 0x1793c, 0x17940, 0x17978, 0x17986, 0x1798c, 0x17998, 0x179b0,
          0x179be, 0x179ce, 0x179dc, 0x179e2, 0x179e4, 0x179e8, 0x179f6, 0x17a04, 0x17a08, 0x17a10, 0x17a1e, 0x17a20,
          0x17a3c, 0x17a40, 0x17a78, 0x17af0, 0x17b06, 0x17b0c, 0x17b18, 0x17b30, 0x17b3e, 0x17b60, 0x17b7c, 0x17b8e,
          0x17b9c, 0x17bb8, 0x17bc4, 0x17bc8, 0x17bd0, 0x17bde, 0x17be6, 0x17bec, 0x17c2e, 0x17c32, 0x17c34, 0x17c4e,
          0x17c5c, 0x17c62, 0x17c64, 0x17c68, 0x17c76, 0x17c8e, 0x17c9c, 0x17cb8, 0x17cc2, 0x17cc4, 0x17cc8, 0x17cd0,
          0x17cde, 0x17ce6, 0x17cec, 0x17d0e, 0x17d1c, 0x17d38, 0x17d70, 0x17d82, 0x17d84, 0x17d88, 0x17d90, 0x17d9e,
          0x17da0, 0x17dbc, 0x17dc6, 0x17dcc, 0x17dd8, 0x17dee, 0x17e26, 0x17e2c, 0x17e3a, 0x17e46, 0x17e4c, 0x17e58,
          0x17e6e, 0x17e72, 0x17e74, 0x17e86, 0x17e8c, 0x17e98, 0x17eb0, 0x17ece, 0x17edc, 0x17ee2, 0x17ee4, 0x17ee8,
          0x17ef6, 0x1813a, 0x18172, 0x18174, 0x18216, 0x18226, 0x1823a, 0x1824c, 0x18258, 0x1826e, 0x18272, 0x18274,
          0x18298, 0x182be, 0x182e2, 0x182e4, 0x182e8, 0x182f6, 0x1835e, 0x1837a, 0x183ae, 0x183d6, 0x18416, 0x18426,
          0x1842c, 0x1843a, 0x18446, 0x18458, 0x1846e, 0x18472, 0x18474, 0x18486, 0x184b0, 0x184be, 0x184ce, 0x184dc,
          0x184e2, 0x184e4, 0x184e8, 0x184f6, 0x18506, 0x1850c, 0x18518, 0x18530, 0x1853e, 0x18560, 0x1857c, 0x1858e,
          0x1859c, 0x185b8, 0x185c2, 0x185c4, 0x185c8, 0x185d0, 0x185de, 0x185e6, 0x185ec, 0x185fa, 0x18612, 0x18614,
          0x18622, 0x18628, 0x18636, 0x18642, 0x18650, 0x1865e, 0x1867a, 0x18682, 0x18684, 0x18688, 0x18690, 0x1869e,
          0x186a0, 0x186bc, 0x186c6, 0x186cc, 0x186d8, 0x186ee, 0x186f2, 0x186f4, 0x1872e, 0x1874e, 0x1875c, 0x18796,
          0x187a6, 0x187ac, 0x187d2, 0x187d4, 0x18826, 0x1882c, 0x1883a, 0x18846, 0x1884c, 0x18858, 0x1886e, 0x18872,
          0x18874, 0x18886, 0x18898, 0x188b0, 0x188be, 0x188ce, 0x188dc, 0x188e2, 0x188e4, 0x188e8, 0x188f6, 0x1890c,
          0x18930, 0x1893e, 0x18960, 0x1897c, 0x1898e, 0x189b8, 0x189c2, 0x189c8, 0x189d0, 0x189de, 0x189e6, 0x189ec,
          0x189fa, 0x18a18, 0x18a30, 0x18a3e, 0x18a60, 0x18a7c, 0x18ac0, 0x18af8, 0x18b1c, 0x18b38, 0x18b70, 0x18b7e,
          0x18b82, 0x18b84, 0x18b88, 0x18b90, 0x18b9e, 0x18ba0, 0x18bbc, 0x18bc6, 0x18bcc, 0x18bd8, 0x18bee, 0x18bf2,
          0x18bf4, 0x18c22, 0x18c24, 0x18c28, 0x18c36, 0x18c42, 0x18c48, 0x18c50, 0x18c5e, 0x18c66, 0x18c7a, 0x18c82,
          0x18c84, 0x18c90, 0x18c9e, 0x18ca0, 0x18cbc, 0x18ccc, 0x18cf2, 0x18cf4, 0x18d04, 0x18d08, 0x18d10, 0x18d1e,
          0x18d20, 0x18d3c, 0x18d40, 0x18d78, 0x18d86, 0x18d98, 0x18dce, 0x18de2, 0x18de4, 0x18de8, 0x18e2e, 0x18e32,
          0x18e34, 0x18e4e, 0x18e5c, 0x18e62, 0x18e64, 0x18e68, 0x18e8e, 0x18e9c, 0x18eb8, 0x18ec2, 0x18ec4, 0x18ec8,
          0x18ed0, 0x18efa, 0x18f16, 0x18f26, 0x18f2c, 0x18f46, 0x18f4c, 0x18f58, 0x18f6e, 0x18f8a, 0x18f92, 0x18f94,
          0x18fa2, 0x18fa4, 0x18fa8, 0x18fb6, 0x1902c, 0x1903a, 0x19046, 0x1904c, 0x19058, 0x19072, 0x19074, 0x19086,
          0x19098, 0x190b0, 0x190be, 0x190ce, 0x190dc, 0x190e2, 0x190e8, 0x190f6, 0x19106, 0x1910c, 0x19130, 0x1913e,
          0x19160, 0x1917c, 0x1918e, 0x1919c, 0x191b8, 0x191c2, 0x191c8, 0x191d0, 0x191de, 0x191e6, 0x191ec, 0x191fa,
          0x19218, 0x1923e, 0x19260, 0x1927c, 0x192c0, 0x192f8, 0x19338, 0x19370, 0x1937e, 0x19382, 0x19384, 0x19390,
          0x1939e, 0x193a0, 0x193bc, 0x193c6, 0x193cc, 0x193d8, 0x193ee, 0x193f2, 0x193f4, 0x19430, 0x1943e, 0x19460,
          0x1947c, 0x194c0, 0x194f8, 0x195f0, 0x19638, 0x19670, 0x1967e, 0x196e0, 0x196fc, 0x19702, 0x19704, 0x19708,
          0x19710, 0x19720, 0x1973c, 0x19740, 0x19778, 0x19786, 0x1978c, 0x19798, 0x197b0, 0x197be, 0x197ce, 0x197dc,
          0x197e2, 0x197e4, 0x197e8, 0x19822, 0x19824, 0x19842, 0x19848, 0x19850, 0x1985e, 0x19866, 0x1987a, 0x19882,
          0x19884, 0x19890, 0x1989e, 0x198a0, 0x198bc, 0x198cc, 0x198f2, 0x198f4, 0x19902, 0x19908, 0x1991e, 0x19920,
          0x1993c, 0x19940, 0x19978, 0x19986, 0x19998, 0x199ce, 0x199e2, 0x199e4, 0x199e8, 0x19a08, 0x19a10, 0x19a1e,
          0x19a20, 0x19a3c, 0x19a40, 0x19a78, 0x19af0, 0x19b18, 0x19b3e, 0x19b60, 0x19b9c, 0x19bc2, 0x19bc4, 0x19bc8,
          0x19bd0, 0x19be6, 0x19c2e, 0x19c34, 0x19c4e, 0x19c5c, 0x19c62, 0x19c64, 0x19c68, 0x19c8e, 0x19c9c, 0x19cb8,
          0x19cc2, 0x19cc8, 0x19cd0, 0x19ce6, 0x19cfa, 0x19d0e, 0x19d1c, 0x19d38, 0x19d70, 0x19d7e, 0x19d82, 0x19d84,
          0x19d88, 0x19d90, 0x19da0, 0x19dcc, 0x19df2, 0x19df4, 0x19e16, 0x19e26, 0x19e2c, 0x19e46, 0x19e4c, 0x19e58,
          0x19e74, 0x19e86, 0x19e8c, 0x19e98, 0x19eb0, 0x19ebe, 0x19ece, 0x19ee2, 0x19ee4, 0x19ee8, 0x19f0a, 0x19f12,
          0x19f14, 0x19f22, 0x19f24, 0x19f28, 0x19f42, 0x19f44, 0x19f48, 0x19f50, 0x19f5e, 0x19f6c, 0x19f9a, 0x19fae,
          0x19fb2, 0x19fb4, 0x1a046, 0x1a04c, 0x1a072, 0x1a074, 0x1a086, 0x1a08c, 0x1a098, 0x1a0b0, 0x1a0be, 0x1a0e2,
          0x1a0e4, 0x1a0e8, 0x1a0f6, 0x1a106, 0x1a10c, 0x1a118, 0x1a130, 0x1a13e, 0x1a160, 0x1a17c, 0x1a18e, 0x1a19c,
          0x1a1b8, 0x1a1c2, 0x1a1c4, 0x1a1c8, 0x1a1d0, 0x1a1de, 0x1a1e6, 0x1a1ec, 0x1a218, 0x1a230, 0x1a23e, 0x1a260,
          0x1a27c, 0x1a2c0, 0x1a2f8, 0x1a31c, 0x1a338, 0x1a370, 0x1a37e, 0x1a382, 0x1a384, 0x1a388, 0x1a390, 0x1a39e,
          0x1a3a0, 0x1a3bc, 0x1a3c6, 0x1a3cc, 0x1a3d8, 0x1a3ee, 0x1a3f2, 0x1a3f4, 0x1a418, 0x1a430, 0x1a43e, 0x1a460,
          0x1a47c, 0x1a4c0, 0x1a4f8, 0x1a5f0, 0x1a61c, 0x1a638, 0x1a670, 0x1a67e, 0x1a6e0, 0x1a6fc, 0x1a702, 0x1a704,
          0x1a708, 0x1a710, 0x1a71e, 0x1a720, 0x1a73c, 0x1a740, 0x1a778, 0x1a786, 0x1a78c, 0x1a798, 0x1a7b0, 0x1a7be,
          0x1a7ce, 0x1a7dc, 0x1a7e2, 0x1a7e4, 0x1a7e8, 0x1a830, 0x1a860, 0x1a87c, 0x1a8c0, 0x1a8f8, 0x1a9f0, 0x1abe0,
          0x1ac70, 0x1ac7e, 0x1ace0, 0x1acfc, 0x1adc0, 0x1adf8, 0x1ae04, 0x1ae08, 0x1ae10, 0x1ae20, 0x1ae3c, 0x1ae40,
          0x1ae78, 0x1aef0, 0x1af06, 0x1af0c, 0x1af18, 0x1af30, 0x1af3e, 0x1af60, 0x1af7c, 0x1af8e, 0x1af9c, 0x1afb8,
          0x1afc4, 0x1afc8, 0x1afd0, 0x1afde, 0x1b042, 0x1b05e, 0x1b07a, 0x1b082, 0x1b084, 0x1b088, 0x1b090, 0x1b09e,
          0x1b0a0, 0x1b0bc, 0x1b0cc, 0x1b0f2, 0x1b0f4, 0x1b102, 0x1b104, 0x1b108, 0x1b110, 0x1b11e, 0x1b120, 0x1b13c,
          0x1b140, 0x1b178, 0x1b186, 0x1b198, 0x1b1ce, 0x1b1e2, 0x1b1e4, 0x1b1e8, 0x1b204, 0x1b208, 0x1b210, 0x1b21e,
          0x1b220, 0x1b23c, 0x1b240, 0x1b278, 0x1b2f0, 0x1b30c, 0x1b33e, 0x1b360, 0x1b39c, 0x1b3c2, 0x1b3c4, 0x1b3c8,
          0x1b3d0, 0x1b3e6, 0x1b410, 0x1b41e, 0x1b420, 0x1b43c, 0x1b440, 0x1b478, 0x1b4f0, 0x1b5e0, 0x1b618, 0x1b660,
          0x1b67c, 0x1b6c0, 0x1b738, 0x1b782, 0x1b784, 0x1b788, 0x1b790, 0x1b79e, 0x1b7a0, 0x1b7cc, 0x1b82e, 0x1b84e,
          0x1b85c, 0x1b88e, 0x1b89c, 0x1b8b8, 0x1b8c2, 0x1b8c4, 0x1b8c8, 0x1b8d0, 0x1b8e6, 0x1b8fa, 0x1b90e, 0x1b91c,
          0x1b938, 0x1b970, 0x1b97e, 0x1b982, 0x1b984, 0x1b988, 0x1b990, 0x1b99e, 0x1b9a0, 0x1b9cc, 0x1b9f2, 0x1b9f4,
          0x1ba0e, 0x1ba1c, 0x1ba38, 0x1ba70, 0x1ba7e, 0x1bae0, 0x1bafc, 0x1bb08, 0x1bb10, 0x1bb20, 0x1bb3c, 0x1bb40,
          0x1bb98, 0x1bbce, 0x1bbe2, 0x1bbe4, 0x1bbe8, 0x1bc16, 0x1bc26, 0x1bc2c, 0x1bc46, 0x1bc4c, 0x1bc58, 0x1bc72,
          0x1bc74, 0x1bc86, 0x1bc8c, 0x1bc98, 0x1bcb0, 0x1bcbe, 0x1bcce, 0x1bce2, 0x1bce4, 0x1bce8, 0x1bd06, 0x1bd0c,
          0x1bd18, 0x1bd30, 0x1bd3e, 0x1bd60, 0x1bd7c, 0x1bd9c, 0x1bdc2, 0x1bdc4, 0x1bdc8, 0x1bdd0, 0x1bde6, 0x1bdfa,
          0x1be12, 0x1be14, 0x1be22, 0x1be24, 0x1be28, 0x1be42, 0x1be44, 0x1be48, 0x1be50, 0x1be5e, 0x1be66, 0x1be82,
          0x1be84, 0x1be88, 0x1be90, 0x1be9e, 0x1bea0, 0x1bebc, 0x1becc, 0x1bef4, 0x1bf1a, 0x1bf2e, 0x1bf32, 0x1bf34,
          0x1bf4e, 0x1bf5c, 0x1bf62, 0x1bf64, 0x1bf68, 0x1c09a, 0x1c0b2, 0x1c0b4, 0x1c11a, 0x1c132, 0x1c134, 0x1c162,
          0x1c164, 0x1c168, 0x1c176, 0x1c1ba, 0x1c21a, 0x1c232, 0x1c234, 0x1c24e, 0x1c25c, 0x1c262, 0x1c264, 0x1c268,
          0x1c276, 0x1c28e, 0x1c2c2, 0x1c2c4, 0x1c2c8, 0x1c2d0, 0x1c2de, 0x1c2e6, 0x1c2ec, 0x1c2fa, 0x1c316, 0x1c326,
          0x1c33a, 0x1c346, 0x1c34c, 0x1c372, 0x1c374, 0x1c41a, 0x1c42e, 0x1c432, 0x1c434, 0x1c44e, 0x1c45c, 0x1c462,
          0x1c464, 0x1c468, 0x1c476, 0x1c48e, 0x1c49c, 0x1c4b8, 0x1c4c2, 0x1c4c8, 0x1c4d0, 0x1c4de, 0x1c4e6, 0x1c4ec,
          0x1c4fa, 0x1c51c, 0x1c538, 0x1c570, 0x1c57e, 0x1c582, 0x1c584, 0x1c588, 0x1c590, 0x1c59e, 0x1c5a0, 0x1c5bc,
          0x1c5c6, 0x1c5cc, 0x1c5d8, 0x1c5ee, 0x1c5f2, 0x1c5f4, 0x1c616, 0x1c626, 0x1c62c, 0x1c63a, 0x1c646, 0x1c64c,
          0x1c658, 0x1c66e, 0x1c672, 0x1c674, 0x1c686, 0x1c68c, 0x1c698, 0x1c6b0, 0x1c6be, 0x1c6ce, 0x1c6dc, 0x1c6e2,
          0x1c6e4, 0x1c6e8, 0x1c712, 0x1c714, 0x1c722, 0x1c728, 0x1c736, 0x1c742, 0x1c744, 0x1c748, 0x1c750, 0x1c75e,
          0x1c766, 0x1c76c, 0x1c77a, 0x1c7ae, 0x1c7d6, 0x1c7ea, 0x1c81a, 0x1c82e, 0x1c832, 0x1c834, 0x1c84e, 0x1c85c,
          0x1c862, 0x1c864, 0x1c868, 0x1c876, 0x1c88e, 0x1c89c, 0x1c8b8, 0x1c8c2, 0x1c8c8, 0x1c8d0, 0x1c8de, 0x1c8e6,
          0x1c8ec, 0x1c8fa, 0x1c90e, 0x1c938, 0x1c970, 0x1c97e, 0x1c982, 0x1c984, 0x1c990, 0x1c99e, 0x1c9a0, 0x1c9bc,
          0x1c9c6, 0x1c9cc, 0x1c9d8, 0x1c9ee, 0x1c9f2, 0x1c9f4, 0x1ca38, 0x1ca70, 0x1ca7e, 0x1cae0, 0x1cafc, 0x1cb02,
          0x1cb04, 0x1cb08, 0x1cb10, 0x1cb20, 0x1cb3c, 0x1cb40, 0x1cb78, 0x1cb86, 0x1cb8c, 0x1cb98, 0x1cbb0, 0x1cbbe,
          0x1cbce, 0x1cbdc, 0x1cbe2, 0x1cbe4, 0x1cbe8, 0x1cbf6, 0x1cc16, 0x1cc26, 0x1cc2c, 0x1cc3a, 0x1cc46, 0x1cc58,
          0x1cc72, 0x1cc74, 0x1cc86, 0x1ccb0, 0x1ccbe, 0x1ccce, 0x1cce2, 0x1cce4, 0x1cce8, 0x1cd06, 0x1cd0c, 0x1cd18,
          0x1cd30, 0x1cd3e, 0x1cd60, 0x1cd7c, 0x1cd9c, 0x1cdc2, 0x1cdc4, 0x1cdc8, 0x1cdd0, 0x1cdde, 0x1cde6, 0x1cdfa,
          0x1ce22, 0x1ce28, 0x1ce42, 0x1ce50, 0x1ce5e, 0x1ce66, 0x1ce7a, 0x1ce82, 0x1ce84, 0x1ce88, 0x1ce90, 0x1ce9e,
          0x1cea0, 0x1cebc, 0x1cecc, 0x1cef2, 0x1cef4, 0x1cf2e, 0x1cf32, 0x1cf34, 0x1cf4e, 0x1cf5c, 0x1cf62, 0x1cf64,
          0x1cf68, 0x1cf96, 0x1cfa6, 0x1cfac, 0x1cfca, 0x1cfd2, 0x1cfd4, 0x1d02e, 0x1d032, 0x1d034, 0x1d04e, 0x1d05c,
          0x1d062, 0x1d064, 0x1d068, 0x1d076, 0x1d08e, 0x1d09c, 0x1d0b8, 0x1d0c2, 0x1d0c4, 0x1d0c8, 0x1d0d0, 0x1d0de,
          0x1d0e6, 0x1d0ec, 0x1d0fa, 0x1d11c, 0x1d138, 0x1d170, 0x1d17e, 0x1d182, 0x1d184, 0x1d188, 0x1d190, 0x1d19e,
          0x1d1a0, 0x1d1bc, 0x1d1c6, 0x1d1cc, 0x1d1d8, 0x1d1ee, 0x1d1f2, 0x1d1f4, 0x1d21c, 0x1d238, 0x1d270, 0x1d27e,
          0x1d2e0, 0x1d2fc, 0x1d302, 0x1d304, 0x1d308, 0x1d310, 0x1d31e, 0x1d320, 0x1d33c, 0x1d340, 0x1d378, 0x1d386,
          0x1d38c, 0x1d398, 0x1d3b0, 0x1d3be, 0x1d3ce, 0x1d3dc, 0x1d3e2, 0x1d3e4, 0x1d3e8, 0x1d3f6, 0x1d470, 0x1d47e,
          0x1d4e0, 0x1d4fc, 0x1d5c0, 0x1d5f8, 0x1d604, 0x1d608, 0x1d610, 0x1d620, 0x1d640, 0x1d678, 0x1d6f0, 0x1d706,
          0x1d70c, 0x1d718, 0x1d730, 0x1d73e, 0x1d760, 0x1d77c, 0x1d78e, 0x1d79c, 0x1d7b8, 0x1d7c2, 0x1d7c4, 0x1d7c8,
          0x1d7d0, 0x1d7de, 0x1d7e6, 0x1d7ec, 0x1d826, 0x1d82c, 0x1d83a, 0x1d846, 0x1d84c, 0x1d858, 0x1d872, 0x1d874,
          0x1d886, 0x1d88c, 0x1d898, 0x1d8b0, 0x1d8be, 0x1d8ce, 0x1d8e2, 0x1d8e4, 0x1d8e8, 0x1d8f6, 0x1d90c, 0x1d918,
          0x1d930, 0x1d93e, 0x1d960, 0x1d97c, 0x1d99c, 0x1d9c2, 0x1d9c4, 0x1d9c8, 0x1d9d0, 0x1d9e6, 0x1d9fa, 0x1da0c,
          0x1da18, 0x1da30, 0x1da3e, 0x1da60, 0x1da7c, 0x1dac0, 0x1daf8, 0x1db38, 0x1db82, 0x1db84, 0x1db88, 0x1db90,
          0x1db9e, 0x1dba0, 0x1dbcc, 0x1dbf2, 0x1dbf4, 0x1dc22, 0x1dc42, 0x1dc44, 0x1dc48, 0x1dc50, 0x1dc5e, 0x1dc66,
          0x1dc7a, 0x1dc82, 0x1dc84, 0x1dc88, 0x1dc90, 0x1dc9e, 0x1dca0, 0x1dcbc, 0x1dccc, 0x1dcf2, 0x1dcf4, 0x1dd04,
          0x1dd08, 0x1dd10, 0x1dd1e, 0x1dd20, 0x1dd3c, 0x1dd40, 0x1dd78, 0x1dd86, 0x1dd98, 0x1ddce, 0x1dde2, 0x1dde4,
          0x1dde8, 0x1de2e, 0x1de32, 0x1de34, 0x1de4e, 0x1de5c, 0x1de62, 0x1de64, 0x1de68, 0x1de8e, 0x1de9c, 0x1deb8,
          0x1dec2, 0x1dec4, 0x1dec8, 0x1ded0, 0x1dee6, 0x1defa, 0x1df16, 0x1df26, 0x1df2c, 0x1df46, 0x1df4c, 0x1df58,
          0x1df72, 0x1df74, 0x1df8a, 0x1df92, 0x1df94, 0x1dfa2, 0x1dfa4, 0x1dfa8, 0x1e08a, 0x1e092, 0x1e094, 0x1e0a2,
          0x1e0a4, 0x1e0a8, 0x1e0b6, 0x1e0da, 0x1e10a, 0x1e112, 0x1e114, 0x1e122, 0x1e124, 0x1e128, 0x1e136, 0x1e142,
          0x1e144, 0x1e148, 0x1e150, 0x1e166, 0x1e16c, 0x1e17a, 0x1e19a, 0x1e1b2, 0x1e1b4, 0x1e20a, 0x1e212, 0x1e214,
          0x1e222, 0x1e224, 0x1e228, 0x1e236, 0x1e242, 0x1e248, 0x1e250, 0x1e25e, 0x1e266, 0x1e26c, 0x1e27a, 0x1e282,
          0x1e284, 0x1e288, 0x1e290, 0x1e2a0, 0x1e2bc, 0x1e2c6, 0x1e2cc, 0x1e2d8, 0x1e2ee, 0x1e2f2, 0x1e2f4, 0x1e31a,
          0x1e332, 0x1e334, 0x1e35c, 0x1e362, 0x1e364, 0x1e368, 0x1e3ba, 0x1e40a, 0x1e412, 0x1e414, 0x1e422, 0x1e428,
          0x1e436, 0x1e442, 0x1e448, 0x1e450, 0x1e45e, 0x1e466, 0x1e46c, 0x1e47a, 0x1e482, 0x1e484, 0x1e490, 0x1e49e,
          0x1e4a0, 0x1e4bc, 0x1e4c6, 0x1e4cc, 0x1e4d8, 0x1e4ee, 0x1e4f2, 0x1e4f4, 0x1e502, 0x1e504, 0x1e508, 0x1e510,
          0x1e51e, 0x1e520, 0x1e53c, 0x1e540, 0x1e578, 0x1e586, 0x1e58c, 0x1e598, 0x1e5b0, 0x1e5be, 0x1e5ce, 0x1e5dc,
          0x1e5e2, 0x1e5e4, 0x1e5e8, 0x1e5f6, 0x1e61a, 0x1e62e, 0x1e632, 0x1e634, 0x1e64e, 0x1e65c, 0x1e662, 0x1e668,
          0x1e68e, 0x1e69c, 0x1e6b8, 0x1e6c2, 0x1e6c4, 0x1e6c8, 0x1e6d0, 0x1e6e6, 0x1e6fa, 0x1e716, 0x1e726, 0x1e72c,
          0x1e73a, 0x1e746, 0x1e74c, 0x1e758, 0x1e772, 0x1e774, 0x1e792, 0x1e794, 0x1e7a2, 0x1e7a4, 0x1e7a8, 0x1e7b6,
          0x1e812, 0x1e814, 0x1e822, 0x1e824, 0x1e828, 0x1e836, 0x1e842, 0x1e844, 0x1e848, 0x1e850, 0x1e85e, 0x1e866,
          0x1e86c, 0x1e87a, 0x1e882, 0x1e884, 0x1e888, 0x1e890, 0x1e89e, 0x1e8a0, 0x1e8bc, 0x1e8c6, 0x1e8cc, 0x1e8d8,
          0x1e8ee, 0x1e8f2, 0x1e8f4, 0x1e902, 0x1e904, 0x1e908, 0x1e910, 0x1e920, 0x1e93c, 0x1e940, 0x1e978, 0x1e986,
          0x1e98c, 0x1e998, 0x1e9b0, 0x1e9be, 0x1e9ce, 0x1e9dc, 0x1e9e2, 0x1e9e4, 0x1e9e8, 0x1e9f6, 0x1ea04, 0x1ea08,
          0x1ea10, 0x1ea20, 0x1ea40, 0x1ea78, 0x1eaf0, 0x1eb06, 0x1eb0c, 0x1eb18, 0x1eb30, 0x1eb3e, 0x1eb60, 0x1eb7c,
          0x1eb8e, 0x1eb9c, 0x1ebb8, 0x1ebc2, 0x1ebc4, 0x1ebc8, 0x1ebd0, 0x1ebde, 0x1ebe6, 0x1ebec, 0x1ec1a, 0x1ec2e,
          0x1ec32, 0x1ec34, 0x1ec4e, 0x1ec5c, 0x1ec62, 0x1ec64, 0x1ec68, 0x1ec8e, 0x1ec9c, 0x1ecb8, 0x1ecc2, 0x1ecc4,
          0x1ecc8, 0x1ecd0, 0x1ece6, 0x1ecfa, 0x1ed0e, 0x1ed1c, 0x1ed38, 0x1ed70, 0x1ed7e, 0x1ed82, 0x1ed84, 0x1ed88,
          0x1ed90, 0x1ed9e, 0x1eda0, 0x1edcc, 0x1edf2, 0x1edf4, 0x1ee16, 0x1ee26, 0x1ee2c, 0x1ee3a, 0x1ee46, 0x1ee4c,
          0x1ee58, 0x1ee6e, 0x1ee72, 0x1ee74, 0x1ee86, 0x1ee8c, 0x1ee98, 0x1eeb0, 0x1eebe, 0x1eece, 0x1eedc, 0x1eee2,
          0x1eee4, 0x1eee8, 0x1ef12, 0x1ef22, 0x1ef24, 0x1ef28, 0x1ef36, 0x1ef42, 0x1ef44, 0x1ef48, 0x1ef50, 0x1ef5e,
          0x1ef66, 0x1ef6c, 0x1ef7a, 0x1efae, 0x1efb2, 0x1efb4, 0x1efd6, 0x1f096, 0x1f0a6, 0x1f0ac, 0x1f0ba, 0x1f0ca,
          0x1f0d2, 0x1f0d4, 0x1f116, 0x1f126, 0x1f12c, 0x1f13a, 0x1f146, 0x1f14c, 0x1f158, 0x1f16e, 0x1f172, 0x1f174,
          0x1f18a, 0x1f192, 0x1f194, 0x1f1a2, 0x1f1a4, 0x1f1a8, 0x1f1da, 0x1f216, 0x1f226, 0x1f22c, 0x1f23a, 0x1f246,
          0x1f258, 0x1f26e, 0x1f272, 0x1f274, 0x1f286, 0x1f28c, 0x1f298, 0x1f2b0, 0x1f2be, 0x1f2ce, 0x1f2dc, 0x1f2e2,
          0x1f2e4, 0x1f2e8, 0x1f2f6, 0x1f30a, 0x1f312, 0x1f314, 0x1f322, 0x1f328, 0x1f342, 0x1f344, 0x1f348, 0x1f350,
          0x1f35e, 0x1f366, 0x1f37a, 0x1f39a, 0x1f3ae, 0x1f3b2, 0x1f3b4, 0x1f416, 0x1f426, 0x1f42c, 0x1f43a, 0x1f446,
          0x1f44c, 0x1f458, 0x1f46e, 0x1f472, 0x1f474, 0x1f486, 0x1f48c, 0x1f498, 0x1f4b0, 0x1f4be, 0x1f4ce, 0x1f4dc,
          0x1f4e2, 0x1f4e4, 0x1f4e8, 0x1f4f6, 0x1f506, 0x1f50c, 0x1f518, 0x1f530, 0x1f53e, 0x1f560, 0x1f57c, 0x1f58e,
          0x1f59c, 0x1f5b8, 0x1f5c2, 0x1f5c4, 0x1f5c8, 0x1f5d0, 0x1f5de, 0x1f5e6, 0x1f5ec, 0x1f5fa, 0x1f60a, 0x1f612,
          0x1f614, 0x1f622, 0x1f624, 0x1f628, 0x1f636, 0x1f642, 0x1f644, 0x1f648, 0x1f650, 0x1f65e, 0x1f666, 0x1f67a,
          0x1f682, 0x1f684, 0x1f688, 0x1f690, 0x1f69e, 0x1f6a0, 0x1f6bc, 0x1f6cc, 0x1f6f2, 0x1f6f4, 0x1f71a, 0x1f72e,
          0x1f732, 0x1f734, 0x1f74e, 0x1f75c, 0x1f762, 0x1f764, 0x1f768, 0x1f776, 0x1f796, 0x1f7a6, 0x1f7ac, 0x1f7ba,
          0x1f7d2, 0x1f7d4, 0x1f89a, 0x1f8ae, 0x1f8b2, 0x1f8b4, 0x1f8d6, 0x1f8ea, 0x1f91a, 0x1f92e, 0x1f932, 0x1f934,
          0x1f94e, 0x1f95c, 0x1f962, 0x1f964, 0x1f968, 0x1f976, 0x1f996, 0x1f9a6, 0x1f9ac, 0x1f9ba, 0x1f9ca, 0x1f9d2,
          0x1f9d4, 0x1fa1a, 0x1fa2e, 0x1fa32, 0x1fa34, 0x1fa4e, 0x1fa5c, 0x1fa62, 0x1fa64, 0x1fa68, 0x1fa76, 0x1fa8e,
          0x1fa9c, 0x1fab8, 0x1fac2, 0x1fac4, 0x1fac8, 0x1fad0, 0x1fade, 0x1fae6, 0x1faec, 0x1fb16, 0x1fb26, 0x1fb2c,
          0x1fb3a, 0x1fb46, 0x1fb4c, 0x1fb58, 0x1fb6e, 0x1fb72, 0x1fb74, 0x1fb8a, 0x1fb92, 0x1fb94, 0x1fba2, 0x1fba4,
          0x1fba8, 0x1fbb6, 0x1fbda
      ]);
      PDF417Common.CODEWORD_TABLE = Int32Array.from([
          2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511,
          873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815,
          814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752,
          2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752,
          1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651,
          646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606,
          2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909,
          2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830,
          2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629,
          1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591,
          588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466,
          2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419,
          2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155,
          2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384,
          1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756,
          753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337,
          2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653,
          1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900,
          910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713,
          2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654,
          2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142,
          332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262,
          257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052,
          202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266,
          1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2000, 172, 171,
          169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313,
          2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529,
          2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241,
          493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414,
          412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434,
          1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785,
          2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353,
          1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689,
          2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573,
          2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539,
          906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669,
          2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133,
          131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971,
          1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78,
          1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100,
          1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64,
          1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867,
          1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989,
          987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359,
          343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308,
          305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089,
          2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279,
          277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205,
          2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232,
          1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590,
          2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262,
          2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549,
          1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480,
          477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466,
          2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427,
          2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388,
          2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751,
          748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592,
          2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569,
          2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695,
          2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818,
          2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648,
          602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892,
          886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632,
          2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486,
          483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366,
          363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412,
          1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684,
          1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527,
          894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759,
          2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342,
          1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195,
          2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997,
          150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183,
          1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268,
          508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395,
          2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779,
          776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688,
          1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718,
          2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138,
          134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108,
          1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98,
          1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920,
          1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9,
          1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975,
          33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339,
          1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090,
          239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033,
          2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284,
          2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569,
          1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467,
          2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379,
          1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579,
          1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688,
          2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636,
          1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524,
          1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361,
          358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672,
          669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849,
          848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343,
          255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210,
          1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157,
          1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458,
          447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460,
          2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919,
          2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127,
          109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060,
          87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008,
          51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952,
          949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350,
          349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086,
          233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231,
          1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499,
          2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798,
          797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546,
          2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670,
          1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504,
          1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394,
          1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281,
          1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150,
          1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582,
          510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709,
          662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094,
          1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007,
          1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940,
          938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897,
          1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185,
          181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513,
          1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706,
          2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204,
          1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207,
          1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487,
          1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062,
          1962, 1960, 1005, 1003, 1000, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951,
          948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275,
          1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548,
          440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208,
          2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954,
          1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270,
          2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700
      ]);
      return PDF417Common;
  }());

  var PDF417DetectorResult =  (function () {
      function PDF417DetectorResult(bits, points) {
          this.bits = bits;
          this.points = points;
      }
      PDF417DetectorResult.prototype.getBits = function () {
          return this.bits;
      };
      PDF417DetectorResult.prototype.getPoints = function () {
          return this.points;
      };
      return PDF417DetectorResult;
  }());

  var __values$c = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var Detector =  (function () {
      function Detector() {
      }
      Detector.detectMultiple = function (image, hints, multiple) {
          var bitMatrix = image.getBlackMatrix();
          var barcodeCoordinates = Detector.detect(multiple, bitMatrix);
          if (!barcodeCoordinates.length) {
              bitMatrix = bitMatrix.clone();
              bitMatrix.rotate180();
              barcodeCoordinates = Detector.detect(multiple, bitMatrix);
          }
          return new PDF417DetectorResult(bitMatrix, barcodeCoordinates);
      };
      Detector.detect = function (multiple, bitMatrix) {
          var e_1, _a;
          var barcodeCoordinates = new Array();
          var row = 0;
          var column = 0;
          var foundBarcodeInRow = false;
          while (row < bitMatrix.getHeight()) {
              var vertices = Detector.findVertices(bitMatrix, row, column);
              if (vertices[0] == null && vertices[3] == null) {
                  if (!foundBarcodeInRow) {
                      break;
                  }
                  foundBarcodeInRow = false;
                  column = 0;
                  try {
                      for (var barcodeCoordinates_1 = (e_1 = void 0, __values$c(barcodeCoordinates)), barcodeCoordinates_1_1 = barcodeCoordinates_1.next(); !barcodeCoordinates_1_1.done; barcodeCoordinates_1_1 = barcodeCoordinates_1.next()) {
                          var barcodeCoordinate = barcodeCoordinates_1_1.value;
                          if (barcodeCoordinate[1] != null) {
                              row = Math.trunc(Math.max(row, barcodeCoordinate[1].getY()));
                          }
                          if (barcodeCoordinate[3] != null) {
                              row = Math.max(row, Math.trunc(barcodeCoordinate[3].getY()));
                          }
                      }
                  }
                  catch (e_1_1) { e_1 = { error: e_1_1 }; }
                  finally {
                      try {
                          if (barcodeCoordinates_1_1 && !barcodeCoordinates_1_1.done && (_a = barcodeCoordinates_1.return)) _a.call(barcodeCoordinates_1);
                      }
                      finally { if (e_1) throw e_1.error; }
                  }
                  row += Detector.ROW_STEP;
                  continue;
              }
              foundBarcodeInRow = true;
              barcodeCoordinates.push(vertices);
              if (!multiple) {
                  break;
              }
              if (vertices[2] != null) {
                  column = Math.trunc(vertices[2].getX());
                  row = Math.trunc(vertices[2].getY());
              }
              else {
                  column = Math.trunc(vertices[4].getX());
                  row = Math.trunc(vertices[4].getY());
              }
          }
          return barcodeCoordinates;
      };
      Detector.findVertices = function (matrix, startRow, startColumn) {
          var height = matrix.getHeight();
          var width = matrix.getWidth();
          var result = new Array(8);
          Detector.copyToResult(result, Detector.findRowsWithPattern(matrix, height, width, startRow, startColumn, Detector.START_PATTERN), Detector.INDEXES_START_PATTERN);
          if (result[4] != null) {
              startColumn = Math.trunc(result[4].getX());
              startRow = Math.trunc(result[4].getY());
          }
          Detector.copyToResult(result, Detector.findRowsWithPattern(matrix, height, width, startRow, startColumn, Detector.STOP_PATTERN), Detector.INDEXES_STOP_PATTERN);
          return result;
      };
      Detector.copyToResult = function (result, tmpResult, destinationIndexes) {
          for (var i = 0; i < destinationIndexes.length; i++) {
              result[destinationIndexes[i]] = tmpResult[i];
          }
      };
      Detector.findRowsWithPattern = function (matrix, height, width, startRow, startColumn, pattern) {
          var result = new Array(4);
          var found = false;
          var counters = new Int32Array(pattern.length);
          for (; startRow < height; startRow += Detector.ROW_STEP) {
              var loc = Detector.findGuardPattern(matrix, startColumn, startRow, width, false, pattern, counters);
              if (loc != null) {
                  while (startRow > 0) {
                      var previousRowLoc = Detector.findGuardPattern(matrix, startColumn, --startRow, width, false, pattern, counters);
                      if (previousRowLoc != null) {
                          loc = previousRowLoc;
                      }
                      else {
                          startRow++;
                          break;
                      }
                  }
                  result[0] = new ResultPoint(loc[0], startRow);
                  result[1] = new ResultPoint(loc[1], startRow);
                  found = true;
                  break;
              }
          }
          var stopRow = startRow + 1;
          if (found) {
              var skippedRowCount = 0;
              var previousRowLoc = Int32Array.from([Math.trunc(result[0].getX()), Math.trunc(result[1].getX())]);
              for (; stopRow < height; stopRow++) {
                  var loc = Detector.findGuardPattern(matrix, previousRowLoc[0], stopRow, width, false, pattern, counters);
                  if (loc != null &&
                      Math.abs(previousRowLoc[0] - loc[0]) < Detector.MAX_PATTERN_DRIFT &&
                      Math.abs(previousRowLoc[1] - loc[1]) < Detector.MAX_PATTERN_DRIFT) {
                      previousRowLoc = loc;
                      skippedRowCount = 0;
                  }
                  else {
                      if (skippedRowCount > Detector.SKIPPED_ROW_COUNT_MAX) {
                          break;
                      }
                      else {
                          skippedRowCount++;
                      }
                  }
              }
              stopRow -= skippedRowCount + 1;
              result[2] = new ResultPoint(previousRowLoc[0], stopRow);
              result[3] = new ResultPoint(previousRowLoc[1], stopRow);
          }
          if (stopRow - startRow < Detector.BARCODE_MIN_HEIGHT) {
              Arrays.fill(result, null);
          }
          return result;
      };
      Detector.findGuardPattern = function (matrix, column, row, width, whiteFirst, pattern, counters) {
          Arrays.fillWithin(counters, 0, counters.length, 0);
          var patternStart = column;
          var pixelDrift = 0;
          while (matrix.get(patternStart, row) && patternStart > 0 && pixelDrift++ < Detector.MAX_PIXEL_DRIFT) {
              patternStart--;
          }
          var x = patternStart;
          var counterPosition = 0;
          var patternLength = pattern.length;
          for (var isWhite = whiteFirst; x < width; x++) {
              var pixel = matrix.get(x, row);
              if (pixel !== isWhite) {
                  counters[counterPosition]++;
              }
              else {
                  if (counterPosition === patternLength - 1) {
                      if (Detector.patternMatchVariance(counters, pattern, Detector.MAX_INDIVIDUAL_VARIANCE) < Detector.MAX_AVG_VARIANCE) {
                          return new Int32Array([patternStart, x]);
                      }
                      patternStart += counters[0] + counters[1];
                      System.arraycopy(counters, 2, counters, 0, counterPosition - 1);
                      counters[counterPosition - 1] = 0;
                      counters[counterPosition] = 0;
                      counterPosition--;
                  }
                  else {
                      counterPosition++;
                  }
                  counters[counterPosition] = 1;
                  isWhite = !isWhite;
              }
          }
          if (counterPosition === patternLength - 1 &&
              Detector.patternMatchVariance(counters, pattern, Detector.MAX_INDIVIDUAL_VARIANCE) < Detector.MAX_AVG_VARIANCE) {
              return new Int32Array([patternStart, x - 1]);
          }
          return null;
      };
      Detector.patternMatchVariance = function (counters, pattern, maxIndividualVariance) {
          var numCounters = counters.length;
          var total = 0;
          var patternLength = 0;
          for (var i = 0; i < numCounters; i++) {
              total += counters[i];
              patternLength += pattern[i];
          }
          if (total < patternLength) {
              return  Infinity;
          }
          var unitBarWidth = total / patternLength;
          maxIndividualVariance *= unitBarWidth;
          var totalVariance = 0.0;
          for (var x = 0; x < numCounters; x++) {
              var counter = counters[x];
              var scaledPattern = pattern[x] * unitBarWidth;
              var variance = counter > scaledPattern ? counter - scaledPattern : scaledPattern - counter;
              if (variance > maxIndividualVariance) {
                  return  Infinity;
              }
              totalVariance += variance;
          }
          return totalVariance / total;
      };
      Detector.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]);
      Detector.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]);
      Detector.MAX_AVG_VARIANCE = 0.42;
      Detector.MAX_INDIVIDUAL_VARIANCE = 0.8;
      Detector.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]);
      Detector.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]);
      Detector.MAX_PIXEL_DRIFT = 3;
      Detector.MAX_PATTERN_DRIFT = 5;
      Detector.SKIPPED_ROW_COUNT_MAX = 25;
      Detector.ROW_STEP = 5;
      Detector.BARCODE_MIN_HEIGHT = 10;
      return Detector;
  }());

  var __values$b = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var ModulusPoly =  (function () {
      function ModulusPoly(field, coefficients) {
          if (coefficients.length === 0) {
              throw new IllegalArgumentException();
          }
          this.field = field;
          var coefficientsLength =  coefficients.length;
          if (coefficientsLength > 1 && coefficients[0] === 0) {
              var firstNonZero =  1;
              while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                  firstNonZero++;
              }
              if (firstNonZero === coefficientsLength) {
                  this.coefficients = new Int32Array([0]);
              }
              else {
                  this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
                  System.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
              }
          }
          else {
              this.coefficients = coefficients;
          }
      }
      ModulusPoly.prototype.getCoefficients = function () {
          return this.coefficients;
      };
      ModulusPoly.prototype.getDegree = function () {
          return this.coefficients.length - 1;
      };
      ModulusPoly.prototype.isZero = function () {
          return this.coefficients[0] === 0;
      };
      ModulusPoly.prototype.getCoefficient = function (degree) {
          return this.coefficients[this.coefficients.length - 1 - degree];
      };
      ModulusPoly.prototype.evaluateAt = function (a) {
          var e_1, _a;
          if (a === 0) {
              return this.getCoefficient(0);
          }
          if (a === 1) {
              var sum =  0;
              try {
                  for (var _b = __values$b(this.coefficients), _c = _b.next(); !_c.done; _c = _b.next()) {
                      var coefficient = _c.value ;
                      sum = this.field.add(sum, coefficient);
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
              return sum;
          }
          var result =  this.coefficients[0];
          var size =  this.coefficients.length;
          for (var i  = 1; i < size; i++) {
              result = this.field.add(this.field.multiply(a, result), this.coefficients[i]);
          }
          return result;
      };
      ModulusPoly.prototype.add = function (other) {
          if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException('ModulusPolys do not have same ModulusGF field');
          }
          if (this.isZero()) {
              return other;
          }
          if (other.isZero()) {
              return this;
          }
          var smallerCoefficients = this.coefficients;
          var largerCoefficients = other.coefficients;
          if (smallerCoefficients.length > largerCoefficients.length) {
              var temp = smallerCoefficients;
              smallerCoefficients = largerCoefficients;
              largerCoefficients = temp;
          }
          var sumDiff = new Int32Array(largerCoefficients.length);
          var lengthDiff =  largerCoefficients.length - smallerCoefficients.length;
          System.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
          for (var i  = lengthDiff; i < largerCoefficients.length; i++) {
              sumDiff[i] = this.field.add(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
          }
          return new ModulusPoly(this.field, sumDiff);
      };
      ModulusPoly.prototype.subtract = function (other) {
          if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException('ModulusPolys do not have same ModulusGF field');
          }
          if (other.isZero()) {
              return this;
          }
          return this.add(other.negative());
      };
      ModulusPoly.prototype.multiply = function (other) {
          if (other instanceof ModulusPoly) {
              return this.multiplyOther(other);
          }
          return this.multiplyScalar(other);
      };
      ModulusPoly.prototype.multiplyOther = function (other) {
          if (!this.field.equals(other.field)) {
              throw new IllegalArgumentException('ModulusPolys do not have same ModulusGF field');
          }
          if (this.isZero() || other.isZero()) {
              return new ModulusPoly(this.field, new Int32Array([0]));
          }
          var aCoefficients = this.coefficients;
          var aLength =  aCoefficients.length;
          var bCoefficients = other.coefficients;
          var bLength =  bCoefficients.length;
          var product = new Int32Array(aLength + bLength - 1);
          for (var i  = 0; i < aLength; i++) {
              var aCoeff =  aCoefficients[i];
              for (var j  = 0; j < bLength; j++) {
                  product[i + j] = this.field.add(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
              }
          }
          return new ModulusPoly(this.field, product);
      };
      ModulusPoly.prototype.negative = function () {
          var size =  this.coefficients.length;
          var negativeCoefficients = new Int32Array(size);
          for (var i  = 0; i < size; i++) {
              negativeCoefficients[i] = this.field.subtract(0, this.coefficients[i]);
          }
          return new ModulusPoly(this.field, negativeCoefficients);
      };
      ModulusPoly.prototype.multiplyScalar = function (scalar) {
          if (scalar === 0) {
              return new ModulusPoly(this.field, new Int32Array([0]));
          }
          if (scalar === 1) {
              return this;
          }
          var size =  this.coefficients.length;
          var product = new Int32Array(size);
          for (var i  = 0; i < size; i++) {
              product[i] = this.field.multiply(this.coefficients[i], scalar);
          }
          return new ModulusPoly(this.field, product);
      };
      ModulusPoly.prototype.multiplyByMonomial = function (degree, coefficient) {
          if (degree < 0) {
              throw new IllegalArgumentException();
          }
          if (coefficient === 0) {
              return new ModulusPoly(this.field, new Int32Array([0]));
          }
          var size =  this.coefficients.length;
          var product = new Int32Array(size + degree);
          for (var i  = 0; i < size; i++) {
              product[i] = this.field.multiply(this.coefficients[i], coefficient);
          }
          return new ModulusPoly(this.field, product);
      };
      ModulusPoly.prototype.toString = function () {
          var result = new StringBuilder( );
          for (var degree  = this.getDegree(); degree >= 0; degree--) {
              var coefficient =  this.getCoefficient(degree);
              if (coefficient !== 0) {
                  if (coefficient < 0) {
                      result.append(' - ');
                      coefficient = -coefficient;
                  }
                  else {
                      if (result.length() > 0) {
                          result.append(' + ');
                      }
                  }
                  if (degree === 0 || coefficient !== 1) {
                      result.append(coefficient);
                  }
                  if (degree !== 0) {
                      if (degree === 1) {
                          result.append('x');
                      }
                      else {
                          result.append('x^');
                          result.append(degree);
                      }
                  }
              }
          }
          return result.toString();
      };
      return ModulusPoly;
  }());

  var ModulusBase =  (function () {
      function ModulusBase() {
      }
      ModulusBase.prototype.add = function (a, b) {
          return (a + b) % this.modulus;
      };
      ModulusBase.prototype.subtract = function (a, b) {
          return (this.modulus + a - b) % this.modulus;
      };
      ModulusBase.prototype.exp = function (a) {
          return this.expTable[a];
      };
      ModulusBase.prototype.log = function (a) {
          if (a === 0) {
              throw new IllegalArgumentException();
          }
          return this.logTable[a];
      };
      ModulusBase.prototype.inverse = function (a) {
          if (a === 0) {
              throw new ArithmeticException();
          }
          return this.expTable[this.modulus - this.logTable[a] - 1];
      };
      ModulusBase.prototype.multiply = function (a, b) {
          if (a === 0 || b === 0) {
              return 0;
          }
          return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.modulus - 1)];
      };
      ModulusBase.prototype.getSize = function () {
          return this.modulus;
      };
      ModulusBase.prototype.equals = function (o) {
          return o === this;
      };
      return ModulusBase;
  }());

  var __extends$e = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var ModulusGF =  (function (_super) {
      __extends$e(ModulusGF, _super);
      function ModulusGF(modulus, generator) {
          var _this = _super.call(this) || this;
          _this.modulus = modulus;
          _this.expTable = new Int32Array(modulus);
          _this.logTable = new Int32Array(modulus);
          var x =  1;
          for (var i  = 0; i < modulus; i++) {
              _this.expTable[i] = x;
              x = (x * generator) % modulus;
          }
          for (var i  = 0; i < modulus - 1; i++) {
              _this.logTable[_this.expTable[i]] = i;
          }
          _this.zero = new ModulusPoly(_this, new Int32Array([0]));
          _this.one = new ModulusPoly(_this, new Int32Array([1]));
          return _this;
      }
      ModulusGF.prototype.getZero = function () {
          return this.zero;
      };
      ModulusGF.prototype.getOne = function () {
          return this.one;
      };
      ModulusGF.prototype.buildMonomial = function (degree, coefficient) {
          if (degree < 0) {
              throw new IllegalArgumentException();
          }
          if (coefficient === 0) {
              return this.zero;
          }
          var coefficients = new Int32Array(degree + 1);
          coefficients[0] = coefficient;
          return new ModulusPoly(this, coefficients);
      };
      ModulusGF.PDF417_GF = new ModulusGF(PDF417Common.NUMBER_OF_CODEWORDS, 3);
      return ModulusGF;
  }(ModulusBase));

  var __values$a = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var ErrorCorrection =  (function () {
      function ErrorCorrection() {
          this.field = ModulusGF.PDF417_GF;
      }
      ErrorCorrection.prototype.decode = function (received, numECCodewords, erasures) {
          var e_1, _a;
          var poly = new ModulusPoly(this.field, received);
          var S = new Int32Array(numECCodewords);
          var error = false;
          for (var i  = numECCodewords; i > 0; i--) {
              var evaluation = poly.evaluateAt(this.field.exp(i));
              S[numECCodewords - i] = evaluation;
              if (evaluation !== 0) {
                  error = true;
              }
          }
          if (!error) {
              return 0;
          }
          var knownErrors = this.field.getOne();
          if (erasures != null) {
              try {
                  for (var erasures_1 = __values$a(erasures), erasures_1_1 = erasures_1.next(); !erasures_1_1.done; erasures_1_1 = erasures_1.next()) {
                      var erasure = erasures_1_1.value;
                      var b = this.field.exp(received.length - 1 - erasure);
                      var term = new ModulusPoly(this.field, new Int32Array([this.field.subtract(0, b), 1]));
                      knownErrors = knownErrors.multiply(term);
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (erasures_1_1 && !erasures_1_1.done && (_a = erasures_1.return)) _a.call(erasures_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
          }
          var syndrome = new ModulusPoly(this.field, S);
          var sigmaOmega = this.runEuclideanAlgorithm(this.field.buildMonomial(numECCodewords, 1), syndrome, numECCodewords);
          var sigma = sigmaOmega[0];
          var omega = sigmaOmega[1];
          var errorLocations = this.findErrorLocations(sigma);
          var errorMagnitudes = this.findErrorMagnitudes(omega, sigma, errorLocations);
          for (var i  = 0; i < errorLocations.length; i++) {
              var position = received.length - 1 - this.field.log(errorLocations[i]);
              if (position < 0) {
                  throw ChecksumException.getChecksumInstance();
              }
              received[position] = this.field.subtract(received[position], errorMagnitudes[i]);
          }
          return errorLocations.length;
      };
      ErrorCorrection.prototype.runEuclideanAlgorithm = function (a, b, R) {
          if (a.getDegree() < b.getDegree()) {
              var temp = a;
              a = b;
              b = temp;
          }
          var rLast = a;
          var r = b;
          var tLast = this.field.getZero();
          var t = this.field.getOne();
          while (r.getDegree() >= Math.round(R / 2)) {
              var rLastLast = rLast;
              var tLastLast = tLast;
              rLast = r;
              tLast = t;
              if (rLast.isZero()) {
                  throw ChecksumException.getChecksumInstance();
              }
              r = rLastLast;
              var q = this.field.getZero();
              var denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
              var dltInverse = this.field.inverse(denominatorLeadingTerm);
              while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
                  var degreeDiff = r.getDegree() - rLast.getDegree();
                  var scale = this.field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
                  q = q.add(this.field.buildMonomial(degreeDiff, scale));
                  r = r.subtract(rLast.multiplyByMonomial(degreeDiff, scale));
              }
              t = q.multiply(tLast).subtract(tLastLast).negative();
          }
          var sigmaTildeAtZero = t.getCoefficient(0);
          if (sigmaTildeAtZero === 0) {
              throw ChecksumException.getChecksumInstance();
          }
          var inverse = this.field.inverse(sigmaTildeAtZero);
          var sigma = t.multiply(inverse);
          var omega = r.multiply(inverse);
          return [sigma, omega];
      };
      ErrorCorrection.prototype.findErrorLocations = function (errorLocator) {
          var numErrors = errorLocator.getDegree();
          var result = new Int32Array(numErrors);
          var e = 0;
          for (var i  = 1; i < this.field.getSize() && e < numErrors; i++) {
              if (errorLocator.evaluateAt(i) === 0) {
                  result[e] = this.field.inverse(i);
                  e++;
              }
          }
          if (e !== numErrors) {
              throw ChecksumException.getChecksumInstance();
          }
          return result;
      };
      ErrorCorrection.prototype.findErrorMagnitudes = function (errorEvaluator, errorLocator, errorLocations) {
          var errorLocatorDegree = errorLocator.getDegree();
          var formalDerivativeCoefficients = new Int32Array(errorLocatorDegree);
          for (var i  = 1; i <= errorLocatorDegree; i++) {
              formalDerivativeCoefficients[errorLocatorDegree - i] =
                  this.field.multiply(i, errorLocator.getCoefficient(i));
          }
          var formalDerivative = new ModulusPoly(this.field, formalDerivativeCoefficients);
          var s = errorLocations.length;
          var result = new Int32Array(s);
          for (var i  = 0; i < s; i++) {
              var xiInverse = this.field.inverse(errorLocations[i]);
              var numerator = this.field.subtract(0, errorEvaluator.evaluateAt(xiInverse));
              var denominator = this.field.inverse(formalDerivative.evaluateAt(xiInverse));
              result[i] = this.field.multiply(numerator, denominator);
          }
          return result;
      };
      return ErrorCorrection;
  }());

  var BoundingBox =  (function () {
      function BoundingBox(image, topLeft, bottomLeft, topRight, bottomRight) {
          if (image instanceof BoundingBox) {
              this.constructor_2(image);
          }
          else {
              this.constructor_1(image, topLeft, bottomLeft, topRight, bottomRight);
          }
      }
      BoundingBox.prototype.constructor_1 = function (image, topLeft, bottomLeft, topRight, bottomRight) {
          var leftUnspecified = topLeft == null || bottomLeft == null;
          var rightUnspecified = topRight == null || bottomRight == null;
          if (leftUnspecified && rightUnspecified) {
              throw new NotFoundException();
          }
          if (leftUnspecified) {
              topLeft = new ResultPoint(0, topRight.getY());
              bottomLeft = new ResultPoint(0, bottomRight.getY());
          }
          else if (rightUnspecified) {
              topRight = new ResultPoint(image.getWidth() - 1, topLeft.getY());
              bottomRight = new ResultPoint(image.getWidth() - 1, bottomLeft.getY());
          }
          this.image = image;
          this.topLeft = topLeft;
          this.bottomLeft = bottomLeft;
          this.topRight = topRight;
          this.bottomRight = bottomRight;
          this.minX = Math.trunc(Math.min(topLeft.getX(), bottomLeft.getX()));
          this.maxX = Math.trunc(Math.max(topRight.getX(), bottomRight.getX()));
          this.minY = Math.trunc(Math.min(topLeft.getY(), topRight.getY()));
          this.maxY = Math.trunc(Math.max(bottomLeft.getY(), bottomRight.getY()));
      };
      BoundingBox.prototype.constructor_2 = function (boundingBox) {
          this.image = boundingBox.image;
          this.topLeft = boundingBox.getTopLeft();
          this.bottomLeft = boundingBox.getBottomLeft();
          this.topRight = boundingBox.getTopRight();
          this.bottomRight = boundingBox.getBottomRight();
          this.minX = boundingBox.getMinX();
          this.maxX = boundingBox.getMaxX();
          this.minY = boundingBox.getMinY();
          this.maxY = boundingBox.getMaxY();
      };
      BoundingBox.merge = function (leftBox, rightBox) {
          if (leftBox == null) {
              return rightBox;
          }
          if (rightBox == null) {
              return leftBox;
          }
          return new BoundingBox(leftBox.image, leftBox.topLeft, leftBox.bottomLeft, rightBox.topRight, rightBox.bottomRight);
      };
      BoundingBox.prototype.addMissingRows = function (missingStartRows, missingEndRows, isLeft) {
          var newTopLeft = this.topLeft;
          var newBottomLeft = this.bottomLeft;
          var newTopRight = this.topRight;
          var newBottomRight = this.bottomRight;
          if (missingStartRows > 0) {
              var top_1 = isLeft ? this.topLeft : this.topRight;
              var newMinY = Math.trunc(top_1.getY() - missingStartRows);
              if (newMinY < 0) {
                  newMinY = 0;
              }
              var newTop = new ResultPoint(top_1.getX(), newMinY);
              if (isLeft) {
                  newTopLeft = newTop;
              }
              else {
                  newTopRight = newTop;
              }
          }
          if (missingEndRows > 0) {
              var bottom = isLeft ? this.bottomLeft : this.bottomRight;
              var newMaxY = Math.trunc(bottom.getY() + missingEndRows);
              if (newMaxY >= this.image.getHeight()) {
                  newMaxY = this.image.getHeight() - 1;
              }
              var newBottom = new ResultPoint(bottom.getX(), newMaxY);
              if (isLeft) {
                  newBottomLeft = newBottom;
              }
              else {
                  newBottomRight = newBottom;
              }
          }
          return new BoundingBox(this.image, newTopLeft, newBottomLeft, newTopRight, newBottomRight);
      };
      BoundingBox.prototype.getMinX = function () {
          return this.minX;
      };
      BoundingBox.prototype.getMaxX = function () {
          return this.maxX;
      };
      BoundingBox.prototype.getMinY = function () {
          return this.minY;
      };
      BoundingBox.prototype.getMaxY = function () {
          return this.maxY;
      };
      BoundingBox.prototype.getTopLeft = function () {
          return this.topLeft;
      };
      BoundingBox.prototype.getTopRight = function () {
          return this.topRight;
      };
      BoundingBox.prototype.getBottomLeft = function () {
          return this.bottomLeft;
      };
      BoundingBox.prototype.getBottomRight = function () {
          return this.bottomRight;
      };
      return BoundingBox;
  }());

  var BarcodeMetadata =  (function () {
      function BarcodeMetadata(columnCount, rowCountUpperPart, rowCountLowerPart, errorCorrectionLevel) {
          this.columnCount = columnCount;
          this.errorCorrectionLevel = errorCorrectionLevel;
          this.rowCountUpperPart = rowCountUpperPart;
          this.rowCountLowerPart = rowCountLowerPart;
          this.rowCount = rowCountUpperPart + rowCountLowerPart;
      }
      BarcodeMetadata.prototype.getColumnCount = function () {
          return this.columnCount;
      };
      BarcodeMetadata.prototype.getErrorCorrectionLevel = function () {
          return this.errorCorrectionLevel;
      };
      BarcodeMetadata.prototype.getRowCount = function () {
          return this.rowCount;
      };
      BarcodeMetadata.prototype.getRowCountUpperPart = function () {
          return this.rowCountUpperPart;
      };
      BarcodeMetadata.prototype.getRowCountLowerPart = function () {
          return this.rowCountLowerPart;
      };
      return BarcodeMetadata;
  }());

  var Formatter =  (function () {
      function Formatter() {
          this.buffer = '';
      }
      Formatter.form = function (str, arr) {
          var i = -1;
          function callback(exp, p0, p1, p2, p3, p4) {
              if (exp === '%%')
                  return '%';
              if (arr[++i] === undefined)
                  return undefined;
              exp = p2 ? parseInt(p2.substr(1)) : undefined;
              var base = p3 ? parseInt(p3.substr(1)) : undefined;
              var val;
              switch (p4) {
                  case 's':
                      val = arr[i];
                      break;
                  case 'c':
                      val = arr[i][0];
                      break;
                  case 'f':
                      val = parseFloat(arr[i]).toFixed(exp);
                      break;
                  case 'p':
                      val = parseFloat(arr[i]).toPrecision(exp);
                      break;
                  case 'e':
                      val = parseFloat(arr[i]).toExponential(exp);
                      break;
                  case 'x':
                      val = parseInt(arr[i]).toString(base ? base : 16);
                      break;
                  case 'd':
                      val = parseFloat(parseInt(arr[i], base ? base : 10).toPrecision(exp)).toFixed(0);
                      break;
              }
              val = typeof val === 'object' ? JSON.stringify(val) : (+val).toString(base);
              var size = parseInt(p1);
              var ch = p1 && (p1[0] + '') === '0' ? '0' : ' ';
              while (val.length < size)
                  val = p0 !== undefined ? val + ch : ch + val;
              return val;
          }
          var regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
          return str.replace(regex, callback);
      };
      Formatter.prototype.format = function (append) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              args[_i - 1] = arguments[_i];
          }
          this.buffer += Formatter.form(append, args);
      };
      Formatter.prototype.toString = function () {
          return this.buffer;
      };
      return Formatter;
  }());

  var __values$9 = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var DetectionResultColumn =  (function () {
      function DetectionResultColumn(boundingBox) {
          this.boundingBox = new BoundingBox(boundingBox);
          this.codewords = new Array(boundingBox.getMaxY() - boundingBox.getMinY() + 1);
      }
       DetectionResultColumn.prototype.getCodewordNearby = function (imageRow) {
          var codeword = this.getCodeword(imageRow);
          if (codeword != null) {
              return codeword;
          }
          for (var i = 1; i < DetectionResultColumn.MAX_NEARBY_DISTANCE; i++) {
              var nearImageRow = this.imageRowToCodewordIndex(imageRow) - i;
              if (nearImageRow >= 0) {
                  codeword = this.codewords[nearImageRow];
                  if (codeword != null) {
                      return codeword;
                  }
              }
              nearImageRow = this.imageRowToCodewordIndex(imageRow) + i;
              if (nearImageRow < this.codewords.length) {
                  codeword = this.codewords[nearImageRow];
                  if (codeword != null) {
                      return codeword;
                  }
              }
          }
          return null;
      };
       DetectionResultColumn.prototype.imageRowToCodewordIndex = function (imageRow) {
          return imageRow - this.boundingBox.getMinY();
      };
       DetectionResultColumn.prototype.setCodeword = function (imageRow, codeword) {
          this.codewords[this.imageRowToCodewordIndex(imageRow)] = codeword;
      };
       DetectionResultColumn.prototype.getCodeword = function (imageRow) {
          return this.codewords[this.imageRowToCodewordIndex(imageRow)];
      };
       DetectionResultColumn.prototype.getBoundingBox = function () {
          return this.boundingBox;
      };
       DetectionResultColumn.prototype.getCodewords = function () {
          return this.codewords;
      };
      DetectionResultColumn.prototype.toString = function () {
          var e_1, _a;
          var formatter = new Formatter();
          var row = 0;
          try {
              for (var _b = __values$9(this.codewords), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var codeword = _c.value;
                  if (codeword == null) {
                      formatter.format('%3d:    |   %n', row++);
                      continue;
                  }
                  formatter.format('%3d: %3d|%3d%n', row++, codeword.getRowNumber(), codeword.getValue());
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
          return formatter.toString();
      };
      DetectionResultColumn.MAX_NEARBY_DISTANCE = 5;
      return DetectionResultColumn;
  }());

  var __values$8 = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var __read = (undefined && undefined.__read) || function (o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  };
  var BarcodeValue =  (function () {
      function BarcodeValue() {
          this.values = new Map();
      }
      BarcodeValue.prototype.setValue = function (value) {
          value = Math.trunc(value);
          var confidence = this.values.get(value);
          if (confidence == null) {
              confidence = 0;
          }
          confidence++;
          this.values.set(value, confidence);
      };
      BarcodeValue.prototype.getValue = function () {
          var e_1, _a;
          var maxConfidence = -1;
          var result = new Array();
          var _loop_1 = function (key, value) {
              var entry = {
                  getKey: function () { return key; },
                  getValue: function () { return value; },
              };
              if (entry.getValue() > maxConfidence) {
                  maxConfidence = entry.getValue();
                  result = [];
                  result.push(entry.getKey());
              }
              else if (entry.getValue() === maxConfidence) {
                  result.push(entry.getKey());
              }
          };
          try {
              for (var _b = __values$8(this.values.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                  _loop_1(key, value);
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
          return PDF417Common.toIntArray(result);
      };
      BarcodeValue.prototype.getConfidence = function (value) {
          return this.values.get(value);
      };
      return BarcodeValue;
  }());

  var __extends$d = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var __values$7 = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var DetectionResultRowIndicatorColumn =  (function (_super) {
      __extends$d(DetectionResultRowIndicatorColumn, _super);
      function DetectionResultRowIndicatorColumn(boundingBox, isLeft) {
          var _this = _super.call(this, boundingBox) || this;
          _this._isLeft = isLeft;
          return _this;
      }
      DetectionResultRowIndicatorColumn.prototype.setRowNumbers = function () {
          var e_1, _a;
          try {
              for (var _b = __values$7(this.getCodewords()), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var codeword = _c.value ;
                  if (codeword != null) {
                      codeword.setRowNumberAsRowIndicatorColumn();
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
      };
      DetectionResultRowIndicatorColumn.prototype.adjustCompleteIndicatorColumnRowNumbers = function (barcodeMetadata) {
          var codewords = this.getCodewords();
          this.setRowNumbers();
          this.removeIncorrectCodewords(codewords, barcodeMetadata);
          var boundingBox = this.getBoundingBox();
          var top = this._isLeft ? boundingBox.getTopLeft() : boundingBox.getTopRight();
          var bottom = this._isLeft ? boundingBox.getBottomLeft() : boundingBox.getBottomRight();
          var firstRow = this.imageRowToCodewordIndex(Math.trunc(top.getY()));
          var lastRow = this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));
          var barcodeRow = -1;
          var maxRowHeight = 1;
          var currentRowHeight = 0;
          for (var codewordsRow  = firstRow; codewordsRow < lastRow; codewordsRow++) {
              if (codewords[codewordsRow] == null) {
                  continue;
              }
              var codeword = codewords[codewordsRow];
              var rowDifference = codeword.getRowNumber() - barcodeRow;
              if (rowDifference === 0) {
                  currentRowHeight++;
              }
              else if (rowDifference === 1) {
                  maxRowHeight = Math.max(maxRowHeight, currentRowHeight);
                  currentRowHeight = 1;
                  barcodeRow = codeword.getRowNumber();
              }
              else if (rowDifference < 0 ||
                  codeword.getRowNumber() >= barcodeMetadata.getRowCount() ||
                  rowDifference > codewordsRow) {
                  codewords[codewordsRow] = null;
              }
              else {
                  var checkedRows = void 0;
                  if (maxRowHeight > 2) {
                      checkedRows = (maxRowHeight - 2) * rowDifference;
                  }
                  else {
                      checkedRows = rowDifference;
                  }
                  var closePreviousCodewordFound = checkedRows >= codewordsRow;
                  for (var i  = 1; i <= checkedRows && !closePreviousCodewordFound; i++) {
                      closePreviousCodewordFound = codewords[codewordsRow - i] != null;
                  }
                  if (closePreviousCodewordFound) {
                      codewords[codewordsRow] = null;
                  }
                  else {
                      barcodeRow = codeword.getRowNumber();
                      currentRowHeight = 1;
                  }
              }
          }
      };
      DetectionResultRowIndicatorColumn.prototype.getRowHeights = function () {
          var e_2, _a;
          var barcodeMetadata = this.getBarcodeMetadata();
          if (barcodeMetadata == null) {
              return null;
          }
          this.adjustIncompleteIndicatorColumnRowNumbers(barcodeMetadata);
          var result = new Int32Array(barcodeMetadata.getRowCount());
          try {
              for (var _b = __values$7(this.getCodewords()), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var codeword = _c.value ;
                  if (codeword != null) {
                      var rowNumber = codeword.getRowNumber();
                      if (rowNumber >= result.length) {
                          continue;
                      }
                      result[rowNumber]++;
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_2) throw e_2.error; }
          }
          return result;
      };
      DetectionResultRowIndicatorColumn.prototype.adjustIncompleteIndicatorColumnRowNumbers = function (barcodeMetadata) {
          var boundingBox = this.getBoundingBox();
          var top = this._isLeft ? boundingBox.getTopLeft() : boundingBox.getTopRight();
          var bottom = this._isLeft ? boundingBox.getBottomLeft() : boundingBox.getBottomRight();
          var firstRow = this.imageRowToCodewordIndex(Math.trunc(top.getY()));
          var lastRow = this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));
          var codewords = this.getCodewords();
          var barcodeRow = -1;
          for (var codewordsRow  = firstRow; codewordsRow < lastRow; codewordsRow++) {
              if (codewords[codewordsRow] == null) {
                  continue;
              }
              var codeword = codewords[codewordsRow];
              codeword.setRowNumberAsRowIndicatorColumn();
              var rowDifference = codeword.getRowNumber() - barcodeRow;
              if (rowDifference === 0) ;
              else if (rowDifference === 1) {
                  barcodeRow = codeword.getRowNumber();
              }
              else if (codeword.getRowNumber() >= barcodeMetadata.getRowCount()) {
                  codewords[codewordsRow] = null;
              }
              else {
                  barcodeRow = codeword.getRowNumber();
              }
          }
      };
      DetectionResultRowIndicatorColumn.prototype.getBarcodeMetadata = function () {
          var e_3, _a;
          var codewords = this.getCodewords();
          var barcodeColumnCount = new BarcodeValue();
          var barcodeRowCountUpperPart = new BarcodeValue();
          var barcodeRowCountLowerPart = new BarcodeValue();
          var barcodeECLevel = new BarcodeValue();
          try {
              for (var codewords_1 = __values$7(codewords), codewords_1_1 = codewords_1.next(); !codewords_1_1.done; codewords_1_1 = codewords_1.next()) {
                  var codeword = codewords_1_1.value ;
                  if (codeword == null) {
                      continue;
                  }
                  codeword.setRowNumberAsRowIndicatorColumn();
                  var rowIndicatorValue = codeword.getValue() % 30;
                  var codewordRowNumber = codeword.getRowNumber();
                  if (!this._isLeft) {
                      codewordRowNumber += 2;
                  }
                  switch (codewordRowNumber % 3) {
                      case 0:
                          barcodeRowCountUpperPart.setValue(rowIndicatorValue * 3 + 1);
                          break;
                      case 1:
                          barcodeECLevel.setValue(rowIndicatorValue / 3);
                          barcodeRowCountLowerPart.setValue(rowIndicatorValue % 3);
                          break;
                      case 2:
                          barcodeColumnCount.setValue(rowIndicatorValue + 1);
                          break;
                  }
              }
          }
          catch (e_3_1) { e_3 = { error: e_3_1 }; }
          finally {
              try {
                  if (codewords_1_1 && !codewords_1_1.done && (_a = codewords_1.return)) _a.call(codewords_1);
              }
              finally { if (e_3) throw e_3.error; }
          }
          if ((barcodeColumnCount.getValue().length === 0) ||
              (barcodeRowCountUpperPart.getValue().length === 0) ||
              (barcodeRowCountLowerPart.getValue().length === 0) ||
              (barcodeECLevel.getValue().length === 0) ||
              barcodeColumnCount.getValue()[0] < 1 ||
              barcodeRowCountUpperPart.getValue()[0] + barcodeRowCountLowerPart.getValue()[0] < PDF417Common.MIN_ROWS_IN_BARCODE ||
              barcodeRowCountUpperPart.getValue()[0] + barcodeRowCountLowerPart.getValue()[0] > PDF417Common.MAX_ROWS_IN_BARCODE) {
              return null;
          }
          var barcodeMetadata = new BarcodeMetadata(barcodeColumnCount.getValue()[0], barcodeRowCountUpperPart.getValue()[0], barcodeRowCountLowerPart.getValue()[0], barcodeECLevel.getValue()[0]);
          this.removeIncorrectCodewords(codewords, barcodeMetadata);
          return barcodeMetadata;
      };
      DetectionResultRowIndicatorColumn.prototype.removeIncorrectCodewords = function (codewords, barcodeMetadata) {
          for (var codewordRow  = 0; codewordRow < codewords.length; codewordRow++) {
              var codeword = codewords[codewordRow];
              if (codewords[codewordRow] == null) {
                  continue;
              }
              var rowIndicatorValue = codeword.getValue() % 30;
              var codewordRowNumber = codeword.getRowNumber();
              if (codewordRowNumber > barcodeMetadata.getRowCount()) {
                  codewords[codewordRow] = null;
                  continue;
              }
              if (!this._isLeft) {
                  codewordRowNumber += 2;
              }
              switch (codewordRowNumber % 3) {
                  case 0:
                      if (rowIndicatorValue * 3 + 1 !== barcodeMetadata.getRowCountUpperPart()) {
                          codewords[codewordRow] = null;
                      }
                      break;
                  case 1:
                      if (Math.trunc(rowIndicatorValue / 3) !== barcodeMetadata.getErrorCorrectionLevel() ||
                          rowIndicatorValue % 3 !== barcodeMetadata.getRowCountLowerPart()) {
                          codewords[codewordRow] = null;
                      }
                      break;
                  case 2:
                      if (rowIndicatorValue + 1 !== barcodeMetadata.getColumnCount()) {
                          codewords[codewordRow] = null;
                      }
                      break;
              }
          }
      };
      DetectionResultRowIndicatorColumn.prototype.isLeft = function () {
          return this._isLeft;
      };
      DetectionResultRowIndicatorColumn.prototype.toString = function () {
          return 'IsLeft: ' + this._isLeft + '\n' + _super.prototype.toString.call(this);
      };
      return DetectionResultRowIndicatorColumn;
  }(DetectionResultColumn));

  var __values$6 = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var DetectionResult =  (function () {
      function DetectionResult(barcodeMetadata, boundingBox) {
           this.ADJUST_ROW_NUMBER_SKIP = 2;
          this.barcodeMetadata = barcodeMetadata;
          this.barcodeColumnCount = barcodeMetadata.getColumnCount();
          this.boundingBox = boundingBox;
          this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
      }
      DetectionResult.prototype.getDetectionResultColumns = function () {
          this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]);
          this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
          var unadjustedCodewordCount = PDF417Common.MAX_CODEWORDS_IN_BARCODE;
          var previousUnadjustedCount;
          do {
              previousUnadjustedCount = unadjustedCodewordCount;
              unadjustedCodewordCount = this.adjustRowNumbersAndGetCount();
          } while (unadjustedCodewordCount > 0 && unadjustedCodewordCount < previousUnadjustedCount);
          return this.detectionResultColumns;
      };
      DetectionResult.prototype.adjustIndicatorColumnRowNumbers = function (detectionResultColumn) {
          if (detectionResultColumn != null) {
              detectionResultColumn
                  .adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
          }
      };
      DetectionResult.prototype.adjustRowNumbersAndGetCount = function () {
          var unadjustedCount = this.adjustRowNumbersByRow();
          if (unadjustedCount === 0) {
              return 0;
          }
          for (var barcodeColumn  = 1; barcodeColumn < this.barcodeColumnCount + 1; barcodeColumn++) {
              var codewords = this.detectionResultColumns[barcodeColumn].getCodewords();
              for (var codewordsRow  = 0; codewordsRow < codewords.length; codewordsRow++) {
                  if (codewords[codewordsRow] == null) {
                      continue;
                  }
                  if (!codewords[codewordsRow].hasValidRowNumber()) {
                      this.adjustRowNumbers(barcodeColumn, codewordsRow, codewords);
                  }
              }
          }
          return unadjustedCount;
      };
      DetectionResult.prototype.adjustRowNumbersByRow = function () {
          this.adjustRowNumbersFromBothRI();
          var unadjustedCount = this.adjustRowNumbersFromLRI();
          return unadjustedCount + this.adjustRowNumbersFromRRI();
      };
      DetectionResult.prototype.adjustRowNumbersFromBothRI = function () {
          if (this.detectionResultColumns[0] == null || this.detectionResultColumns[this.barcodeColumnCount + 1] == null) {
              return;
          }
          var LRIcodewords = this.detectionResultColumns[0].getCodewords();
          var RRIcodewords = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
          for (var codewordsRow  = 0; codewordsRow < LRIcodewords.length; codewordsRow++) {
              if (LRIcodewords[codewordsRow] != null &&
                  RRIcodewords[codewordsRow] != null &&
                  LRIcodewords[codewordsRow].getRowNumber() === RRIcodewords[codewordsRow].getRowNumber()) {
                  for (var barcodeColumn  = 1; barcodeColumn <= this.barcodeColumnCount; barcodeColumn++) {
                      var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
                      if (codeword == null) {
                          continue;
                      }
                      codeword.setRowNumber(LRIcodewords[codewordsRow].getRowNumber());
                      if (!codeword.hasValidRowNumber()) {
                          this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow] = null;
                      }
                  }
              }
          }
      };
      DetectionResult.prototype.adjustRowNumbersFromRRI = function () {
          if (this.detectionResultColumns[this.barcodeColumnCount + 1] == null) {
              return 0;
          }
          var unadjustedCount = 0;
          var codewords = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords();
          for (var codewordsRow  = 0; codewordsRow < codewords.length; codewordsRow++) {
              if (codewords[codewordsRow] == null) {
                  continue;
              }
              var rowIndicatorRowNumber = codewords[codewordsRow].getRowNumber();
              var invalidRowCounts = 0;
              for (var barcodeColumn  = this.barcodeColumnCount + 1; barcodeColumn > 0 && invalidRowCounts < this.ADJUST_ROW_NUMBER_SKIP; barcodeColumn--) {
                  var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
                  if (codeword != null) {
                      invalidRowCounts = DetectionResult.adjustRowNumberIfValid(rowIndicatorRowNumber, invalidRowCounts, codeword);
                      if (!codeword.hasValidRowNumber()) {
                          unadjustedCount++;
                      }
                  }
              }
          }
          return unadjustedCount;
      };
      DetectionResult.prototype.adjustRowNumbersFromLRI = function () {
          if (this.detectionResultColumns[0] == null) {
              return 0;
          }
          var unadjustedCount = 0;
          var codewords = this.detectionResultColumns[0].getCodewords();
          for (var codewordsRow  = 0; codewordsRow < codewords.length; codewordsRow++) {
              if (codewords[codewordsRow] == null) {
                  continue;
              }
              var rowIndicatorRowNumber = codewords[codewordsRow].getRowNumber();
              var invalidRowCounts = 0;
              for (var barcodeColumn  = 1; barcodeColumn < this.barcodeColumnCount + 1 && invalidRowCounts < this.ADJUST_ROW_NUMBER_SKIP; barcodeColumn++) {
                  var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
                  if (codeword != null) {
                      invalidRowCounts = DetectionResult.adjustRowNumberIfValid(rowIndicatorRowNumber, invalidRowCounts, codeword);
                      if (!codeword.hasValidRowNumber()) {
                          unadjustedCount++;
                      }
                  }
              }
          }
          return unadjustedCount;
      };
      DetectionResult.adjustRowNumberIfValid = function (rowIndicatorRowNumber, invalidRowCounts, codeword) {
          if (codeword == null) {
              return invalidRowCounts;
          }
          if (!codeword.hasValidRowNumber()) {
              if (codeword.isValidRowNumber(rowIndicatorRowNumber)) {
                  codeword.setRowNumber(rowIndicatorRowNumber);
                  invalidRowCounts = 0;
              }
              else {
                  ++invalidRowCounts;
              }
          }
          return invalidRowCounts;
      };
      DetectionResult.prototype.adjustRowNumbers = function (barcodeColumn, codewordsRow, codewords) {
          var e_1, _a;
          var codeword = codewords[codewordsRow];
          var previousColumnCodewords = this.detectionResultColumns[barcodeColumn - 1].getCodewords();
          var nextColumnCodewords = previousColumnCodewords;
          if (this.detectionResultColumns[barcodeColumn + 1] != null) {
              nextColumnCodewords = this.detectionResultColumns[barcodeColumn + 1].getCodewords();
          }
          var otherCodewords = new Array(14);
          otherCodewords[2] = previousColumnCodewords[codewordsRow];
          otherCodewords[3] = nextColumnCodewords[codewordsRow];
          if (codewordsRow > 0) {
              otherCodewords[0] = codewords[codewordsRow - 1];
              otherCodewords[4] = previousColumnCodewords[codewordsRow - 1];
              otherCodewords[5] = nextColumnCodewords[codewordsRow - 1];
          }
          if (codewordsRow > 1) {
              otherCodewords[8] = codewords[codewordsRow - 2];
              otherCodewords[10] = previousColumnCodewords[codewordsRow - 2];
              otherCodewords[11] = nextColumnCodewords[codewordsRow - 2];
          }
          if (codewordsRow < codewords.length - 1) {
              otherCodewords[1] = codewords[codewordsRow + 1];
              otherCodewords[6] = previousColumnCodewords[codewordsRow + 1];
              otherCodewords[7] = nextColumnCodewords[codewordsRow + 1];
          }
          if (codewordsRow < codewords.length - 2) {
              otherCodewords[9] = codewords[codewordsRow + 2];
              otherCodewords[12] = previousColumnCodewords[codewordsRow + 2];
              otherCodewords[13] = nextColumnCodewords[codewordsRow + 2];
          }
          try {
              for (var otherCodewords_1 = __values$6(otherCodewords), otherCodewords_1_1 = otherCodewords_1.next(); !otherCodewords_1_1.done; otherCodewords_1_1 = otherCodewords_1.next()) {
                  var otherCodeword = otherCodewords_1_1.value;
                  if (DetectionResult.adjustRowNumber(codeword, otherCodeword)) {
                      return;
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (otherCodewords_1_1 && !otherCodewords_1_1.done && (_a = otherCodewords_1.return)) _a.call(otherCodewords_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
      };
      DetectionResult.adjustRowNumber = function (codeword, otherCodeword) {
          if (otherCodeword == null) {
              return false;
          }
          if (otherCodeword.hasValidRowNumber() && otherCodeword.getBucket() === codeword.getBucket()) {
              codeword.setRowNumber(otherCodeword.getRowNumber());
              return true;
          }
          return false;
      };
      DetectionResult.prototype.getBarcodeColumnCount = function () {
          return this.barcodeColumnCount;
      };
      DetectionResult.prototype.getBarcodeRowCount = function () {
          return this.barcodeMetadata.getRowCount();
      };
      DetectionResult.prototype.getBarcodeECLevel = function () {
          return this.barcodeMetadata.getErrorCorrectionLevel();
      };
      DetectionResult.prototype.setBoundingBox = function (boundingBox) {
          this.boundingBox = boundingBox;
      };
      DetectionResult.prototype.getBoundingBox = function () {
          return this.boundingBox;
      };
      DetectionResult.prototype.setDetectionResultColumn = function (barcodeColumn, detectionResultColumn) {
          this.detectionResultColumns[barcodeColumn] = detectionResultColumn;
      };
      DetectionResult.prototype.getDetectionResultColumn = function (barcodeColumn) {
          return this.detectionResultColumns[barcodeColumn];
      };
      DetectionResult.prototype.toString = function () {
          var rowIndicatorColumn = this.detectionResultColumns[0];
          if (rowIndicatorColumn == null) {
              rowIndicatorColumn = this.detectionResultColumns[this.barcodeColumnCount + 1];
          }
          var formatter = new Formatter();
          for (var codewordsRow  = 0; codewordsRow < rowIndicatorColumn.getCodewords().length; codewordsRow++) {
              formatter.format('CW %3d:', codewordsRow);
              for (var barcodeColumn  = 0; barcodeColumn < this.barcodeColumnCount + 2; barcodeColumn++) {
                  if (this.detectionResultColumns[barcodeColumn] == null) {
                      formatter.format('    |   ');
                      continue;
                  }
                  var codeword = this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];
                  if (codeword == null) {
                      formatter.format('    |   ');
                      continue;
                  }
                  formatter.format(' %3d|%3d', codeword.getRowNumber(), codeword.getValue());
              }
              formatter.format('%n');
          }
          return formatter.toString();
      };
      return DetectionResult;
  }());

  var Codeword =  (function () {
      function Codeword(startX, endX, bucket, value) {
          this.rowNumber = Codeword.BARCODE_ROW_UNKNOWN;
          this.startX = Math.trunc(startX);
          this.endX = Math.trunc(endX);
          this.bucket = Math.trunc(bucket);
          this.value = Math.trunc(value);
      }
      Codeword.prototype.hasValidRowNumber = function () {
          return this.isValidRowNumber(this.rowNumber);
      };
      Codeword.prototype.isValidRowNumber = function (rowNumber) {
          return rowNumber !== Codeword.BARCODE_ROW_UNKNOWN && this.bucket === (rowNumber % 3) * 3;
      };
      Codeword.prototype.setRowNumberAsRowIndicatorColumn = function () {
          this.rowNumber = Math.trunc((Math.trunc(this.value / 30)) * 3 + Math.trunc(this.bucket / 3));
      };
      Codeword.prototype.getWidth = function () {
          return this.endX - this.startX;
      };
      Codeword.prototype.getStartX = function () {
          return this.startX;
      };
      Codeword.prototype.getEndX = function () {
          return this.endX;
      };
      Codeword.prototype.getBucket = function () {
          return this.bucket;
      };
      Codeword.prototype.getValue = function () {
          return this.value;
      };
      Codeword.prototype.getRowNumber = function () {
          return this.rowNumber;
      };
      Codeword.prototype.setRowNumber = function (rowNumber) {
          this.rowNumber = rowNumber;
      };
      Codeword.prototype.toString = function () {
          return this.rowNumber + '|' + this.value;
      };
      Codeword.BARCODE_ROW_UNKNOWN = -1;
      return Codeword;
  }());

  var PDF417CodewordDecoder =  (function () {
      function PDF417CodewordDecoder() {
      }
      PDF417CodewordDecoder.initialize = function () {
          for ( var i = 0; i < PDF417Common.SYMBOL_TABLE.length; i++) {
              var currentSymbol = PDF417Common.SYMBOL_TABLE[i];
              var currentBit = currentSymbol & 0x1;
              for ( var j = 0; j < PDF417Common.BARS_IN_MODULE; j++) {
                  var size = 0.0;
                  while ((currentSymbol & 0x1) === currentBit) {
                      size += 1.0;
                      currentSymbol >>= 1;
                  }
                  currentBit = currentSymbol & 0x1;
                  if (!PDF417CodewordDecoder.RATIOS_TABLE[i]) {
                      PDF417CodewordDecoder.RATIOS_TABLE[i] = new Array(PDF417Common.BARS_IN_MODULE);
                  }
                  PDF417CodewordDecoder.RATIOS_TABLE[i][PDF417Common.BARS_IN_MODULE - j - 1] = Math.fround(size / PDF417Common.MODULES_IN_CODEWORD);
              }
          }
          this.bSymbolTableReady = true;
      };
      PDF417CodewordDecoder.getDecodedValue = function (moduleBitCount) {
          var decodedValue = PDF417CodewordDecoder.getDecodedCodewordValue(PDF417CodewordDecoder.sampleBitCounts(moduleBitCount));
          if (decodedValue !== -1) {
              return decodedValue;
          }
          return PDF417CodewordDecoder.getClosestDecodedValue(moduleBitCount);
      };
      PDF417CodewordDecoder.sampleBitCounts = function (moduleBitCount) {
          var bitCountSum = MathUtils.sum(moduleBitCount);
          var result = new Int32Array(PDF417Common.BARS_IN_MODULE);
          var bitCountIndex = 0;
          var sumPreviousBits = 0;
          for ( var i = 0; i < PDF417Common.MODULES_IN_CODEWORD; i++) {
              var sampleIndex = bitCountSum / (2 * PDF417Common.MODULES_IN_CODEWORD) +
                  (i * bitCountSum) / PDF417Common.MODULES_IN_CODEWORD;
              if (sumPreviousBits + moduleBitCount[bitCountIndex] <= sampleIndex) {
                  sumPreviousBits += moduleBitCount[bitCountIndex];
                  bitCountIndex++;
              }
              result[bitCountIndex]++;
          }
          return result;
      };
      PDF417CodewordDecoder.getDecodedCodewordValue = function (moduleBitCount) {
          var decodedValue = PDF417CodewordDecoder.getBitValue(moduleBitCount);
          return PDF417Common.getCodeword(decodedValue) === -1 ? -1 : decodedValue;
      };
      PDF417CodewordDecoder.getBitValue = function (moduleBitCount) {
          var result =  0;
          for (var  i = 0; i < moduleBitCount.length; i++) {
              for ( var bit = 0; bit < moduleBitCount[i]; bit++) {
                  result = (result << 1) | (i % 2 === 0 ? 1 : 0);
              }
          }
          return Math.trunc(result);
      };
      PDF417CodewordDecoder.getClosestDecodedValue = function (moduleBitCount) {
          var bitCountSum = MathUtils.sum(moduleBitCount);
          var bitCountRatios = new Array(PDF417Common.BARS_IN_MODULE);
          if (bitCountSum > 1) {
              for (var  i = 0; i < bitCountRatios.length; i++) {
                  bitCountRatios[i] = Math.fround(moduleBitCount[i] / bitCountSum);
              }
          }
          var bestMatchError = Float.MAX_VALUE;
          var bestMatch = -1;
          if (!this.bSymbolTableReady) {
              PDF417CodewordDecoder.initialize();
          }
          for ( var j = 0; j < PDF417CodewordDecoder.RATIOS_TABLE.length; j++) {
              var error = 0.0;
              var ratioTableRow = PDF417CodewordDecoder.RATIOS_TABLE[j];
              for ( var k = 0; k < PDF417Common.BARS_IN_MODULE; k++) {
                  var diff = Math.fround(ratioTableRow[k] - bitCountRatios[k]);
                  error += Math.fround(diff * diff);
                  if (error >= bestMatchError) {
                      break;
                  }
              }
              if (error < bestMatchError) {
                  bestMatchError = error;
                  bestMatch = PDF417Common.SYMBOL_TABLE[j];
              }
          }
          return bestMatch;
      };
      PDF417CodewordDecoder.bSymbolTableReady = false;
      PDF417CodewordDecoder.RATIOS_TABLE = new Array(PDF417Common.SYMBOL_TABLE.length).map(function (x) { return new Array(PDF417Common.BARS_IN_MODULE); });
      return PDF417CodewordDecoder;
  }());

  var PDF417ResultMetadata =  (function () {
      function PDF417ResultMetadata() {
          this.segmentCount = -1;
          this.fileSize = -1;
          this.timestamp = -1;
          this.checksum = -1;
      }
      PDF417ResultMetadata.prototype.getSegmentIndex = function () {
          return this.segmentIndex;
      };
      PDF417ResultMetadata.prototype.setSegmentIndex = function (segmentIndex) {
          this.segmentIndex = segmentIndex;
      };
      PDF417ResultMetadata.prototype.getFileId = function () {
          return this.fileId;
      };
      PDF417ResultMetadata.prototype.setFileId = function (fileId) {
          this.fileId = fileId;
      };
      PDF417ResultMetadata.prototype.getOptionalData = function () {
          return this.optionalData;
      };
      PDF417ResultMetadata.prototype.setOptionalData = function (optionalData) {
          this.optionalData = optionalData;
      };
      PDF417ResultMetadata.prototype.isLastSegment = function () {
          return this.lastSegment;
      };
      PDF417ResultMetadata.prototype.setLastSegment = function (lastSegment) {
          this.lastSegment = lastSegment;
      };
      PDF417ResultMetadata.prototype.getSegmentCount = function () {
          return this.segmentCount;
      };
      PDF417ResultMetadata.prototype.setSegmentCount = function (segmentCount ) {
          this.segmentCount = segmentCount;
      };
      PDF417ResultMetadata.prototype.getSender = function () {
          return this.sender || null;
      };
      PDF417ResultMetadata.prototype.setSender = function (sender) {
          this.sender = sender;
      };
      PDF417ResultMetadata.prototype.getAddressee = function () {
          return this.addressee || null;
      };
      PDF417ResultMetadata.prototype.setAddressee = function (addressee) {
          this.addressee = addressee;
      };
      PDF417ResultMetadata.prototype.getFileName = function () {
          return this.fileName;
      };
      PDF417ResultMetadata.prototype.setFileName = function (fileName) {
          this.fileName = fileName;
      };
      PDF417ResultMetadata.prototype.getFileSize = function () {
          return this.fileSize;
      };
      PDF417ResultMetadata.prototype.setFileSize = function (fileSize ) {
          this.fileSize = fileSize;
      };
      PDF417ResultMetadata.prototype.getChecksum = function () {
          return this.checksum;
      };
      PDF417ResultMetadata.prototype.setChecksum = function (checksum ) {
          this.checksum = checksum;
      };
      PDF417ResultMetadata.prototype.getTimestamp = function () {
          return this.timestamp;
      };
      PDF417ResultMetadata.prototype.setTimestamp = function (timestamp ) {
          this.timestamp = timestamp;
      };
      return PDF417ResultMetadata;
  }());

  var Long =  (function () {
      function Long() {
      }
      Long.parseLong = function (num, radix) {
          if (radix === void 0) { radix = undefined; }
          return parseInt(num, radix);
      };
      return Long;
  }());

  var __extends$c = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var NullPointerException =  (function (_super) {
      __extends$c(NullPointerException, _super);
      function NullPointerException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      NullPointerException.kind = 'NullPointerException';
      return NullPointerException;
  }(Exception));

  var OutputStream  =  (function () {
      function OutputStream() {
      }
      OutputStream.prototype.writeBytes = function (b) {
          this.writeBytesOffset(b, 0, b.length);
      };
      OutputStream.prototype.writeBytesOffset = function (b, off, len) {
          if (b == null) {
              throw new NullPointerException();
          }
          else if ((off < 0) || (off > b.length) || (len < 0) ||
              ((off + len) > b.length) || ((off + len) < 0)) {
              throw new IndexOutOfBoundsException();
          }
          else if (len === 0) {
              return;
          }
          for (var i = 0; i < len; i++) {
              this.write(b[off + i]);
          }
      };
      OutputStream.prototype.flush = function () {
      };
      OutputStream.prototype.close = function () {
      };
      return OutputStream;
  }());

  var __extends$b = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var OutOfMemoryError =  (function (_super) {
      __extends$b(OutOfMemoryError, _super);
      function OutOfMemoryError() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      return OutOfMemoryError;
  }(Exception));

  var __extends$a = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var ByteArrayOutputStream =  (function (_super) {
      __extends$a(ByteArrayOutputStream, _super);
      function ByteArrayOutputStream(size) {
          if (size === void 0) { size = 32; }
          var _this = _super.call(this) || this;
          _this.count = 0;
          if (size < 0) {
              throw new IllegalArgumentException('Negative initial size: '
                  + size);
          }
          _this.buf = new Uint8Array(size);
          return _this;
      }
      ByteArrayOutputStream.prototype.ensureCapacity = function (minCapacity) {
          if (minCapacity - this.buf.length > 0)
              this.grow(minCapacity);
      };
      ByteArrayOutputStream.prototype.grow = function (minCapacity) {
          var oldCapacity = this.buf.length;
          var newCapacity = oldCapacity << 1;
          if (newCapacity - minCapacity < 0)
              newCapacity = minCapacity;
          if (newCapacity < 0) {
              if (minCapacity < 0)
                  throw new OutOfMemoryError();
              newCapacity = Integer.MAX_VALUE;
          }
          this.buf = Arrays.copyOfUint8Array(this.buf, newCapacity);
      };
      ByteArrayOutputStream.prototype.write = function (b) {
          this.ensureCapacity(this.count + 1);
          this.buf[this.count] =  b;
          this.count += 1;
      };
      ByteArrayOutputStream.prototype.writeBytesOffset = function (b, off, len) {
          if ((off < 0) || (off > b.length) || (len < 0) ||
              ((off + len) - b.length > 0)) {
              throw new IndexOutOfBoundsException();
          }
          this.ensureCapacity(this.count + len);
          System.arraycopy(b, off, this.buf, this.count, len);
          this.count += len;
      };
      ByteArrayOutputStream.prototype.writeTo = function (out) {
          out.writeBytesOffset(this.buf, 0, this.count);
      };
      ByteArrayOutputStream.prototype.reset = function () {
          this.count = 0;
      };
      ByteArrayOutputStream.prototype.toByteArray = function () {
          return Arrays.copyOfUint8Array(this.buf, this.count);
      };
      ByteArrayOutputStream.prototype.size = function () {
          return this.count;
      };
      ByteArrayOutputStream.prototype.toString = function (param) {
          if (!param) {
              return this.toString_void();
          }
          if (typeof param === 'string') {
              return this.toString_string(param);
          }
          return this.toString_number(param);
      };
      ByteArrayOutputStream.prototype.toString_void = function () {
          return new String(this.buf ).toString();
      };
      ByteArrayOutputStream.prototype.toString_string = function (charsetName) {
          return new String(this.buf ).toString();
      };
      ByteArrayOutputStream.prototype.toString_number = function (hibyte) {
          return new String(this.buf ).toString();
      };
      ByteArrayOutputStream.prototype.close = function () {
      };
      return ByteArrayOutputStream;
  }(OutputStream));

  var Mode;
  (function (Mode) {
      Mode[Mode["ALPHA"] = 0] = "ALPHA";
      Mode[Mode["LOWER"] = 1] = "LOWER";
      Mode[Mode["MIXED"] = 2] = "MIXED";
      Mode[Mode["PUNCT"] = 3] = "PUNCT";
      Mode[Mode["ALPHA_SHIFT"] = 4] = "ALPHA_SHIFT";
      Mode[Mode["PUNCT_SHIFT"] = 5] = "PUNCT_SHIFT";
  })(Mode || (Mode = {}));
  function getBigIntConstructor() {
      if (typeof window !== 'undefined') {
          return window['BigInt'] || null;
      }
      if (typeof global !== 'undefined') {
          return global['BigInt'] || null;
      }
      if (typeof self !== 'undefined') {
          return self['BigInt'] || null;
      }
      throw new Error('Can\'t search globals for BigInt!');
  }
  var BigInteger;
  function createBigInt(num) {
      if (typeof BigInteger === 'undefined') {
          BigInteger = getBigIntConstructor();
      }
      if (BigInteger === null) {
          throw new Error('BigInt is not supported!');
      }
      return BigInteger(num);
  }
  function getEXP900() {
      var EXP900 = [];
      EXP900[0] = createBigInt(1);
      var nineHundred = createBigInt(900);
      EXP900[1] = nineHundred;
      for (var i  = 2; i < 16; i++) {
          EXP900[i] = EXP900[i - 1] * nineHundred;
      }
      return EXP900;
  }
  var DecodedBitStreamParser =  (function () {
      function DecodedBitStreamParser() {
      }
      DecodedBitStreamParser.decode = function (codewords, ecLevel) {
          var result = new StringBuilder('');
          var encoding = CharacterSetECI.ISO8859_1;
          result.enableDecoding(encoding);
          var codeIndex = 1;
          var code = codewords[codeIndex++];
          var resultMetadata = new PDF417ResultMetadata();
          while (codeIndex < codewords[0]) {
              switch (code) {
                  case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                      codeIndex = DecodedBitStreamParser.textCompaction(codewords, codeIndex, result);
                      break;
                  case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:
                  case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:
                      codeIndex = DecodedBitStreamParser.byteCompaction(code, codewords, encoding, codeIndex, result);
                      break;
                  case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      result.append( codewords[codeIndex++]);
                      break;
                  case DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH:
                      codeIndex = DecodedBitStreamParser.numericCompaction(codewords, codeIndex, result);
                      break;
                  case DecodedBitStreamParser.ECI_CHARSET:
                      CharacterSetECI.getCharacterSetECIByValue(codewords[codeIndex++]);
                      break;
                  case DecodedBitStreamParser.ECI_GENERAL_PURPOSE:
                      codeIndex += 2;
                      break;
                  case DecodedBitStreamParser.ECI_USER_DEFINED:
                      codeIndex++;
                      break;
                  case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                      codeIndex = DecodedBitStreamParser.decodeMacroBlock(codewords, codeIndex, resultMetadata);
                      break;
                  case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                  case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:
                      throw new FormatException();
                  default:
                      codeIndex--;
                      codeIndex = DecodedBitStreamParser.textCompaction(codewords, codeIndex, result);
                      break;
              }
              if (codeIndex < codewords.length) {
                  code = codewords[codeIndex++];
              }
              else {
                  throw FormatException.getFormatInstance();
              }
          }
          if (result.length() === 0) {
              throw FormatException.getFormatInstance();
          }
          var decoderResult = new DecoderResult(null, result.toString(), null, ecLevel);
          decoderResult.setOther(resultMetadata);
          return decoderResult;
      };
      DecodedBitStreamParser.decodeMacroBlock = function (codewords, codeIndex, resultMetadata) {
          if (codeIndex + DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS > codewords[0]) {
              throw FormatException.getFormatInstance();
          }
          var segmentIndexArray = new Int32Array(DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS);
          for (var i  = 0; i < DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS; i++, codeIndex++) {
              segmentIndexArray[i] = codewords[codeIndex];
          }
          resultMetadata.setSegmentIndex(Integer.parseInt(DecodedBitStreamParser.decodeBase900toBase10(segmentIndexArray, DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS)));
          var fileId = new StringBuilder();
          codeIndex = DecodedBitStreamParser.textCompaction(codewords, codeIndex, fileId);
          resultMetadata.setFileId(fileId.toString());
          var optionalFieldsStart = -1;
          if (codewords[codeIndex] === DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD) {
              optionalFieldsStart = codeIndex + 1;
          }
          while (codeIndex < codewords[0]) {
              switch (codewords[codeIndex]) {
                  case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                      codeIndex++;
                      switch (codewords[codeIndex]) {
                          case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                              var fileName = new StringBuilder();
                              codeIndex = DecodedBitStreamParser.textCompaction(codewords, codeIndex + 1, fileName);
                              resultMetadata.setFileName(fileName.toString());
                              break;
                          case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                              var sender = new StringBuilder();
                              codeIndex = DecodedBitStreamParser.textCompaction(codewords, codeIndex + 1, sender);
                              resultMetadata.setSender(sender.toString());
                              break;
                          case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                              var addressee = new StringBuilder();
                              codeIndex = DecodedBitStreamParser.textCompaction(codewords, codeIndex + 1, addressee);
                              resultMetadata.setAddressee(addressee.toString());
                              break;
                          case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                              var segmentCount = new StringBuilder();
                              codeIndex = DecodedBitStreamParser.numericCompaction(codewords, codeIndex + 1, segmentCount);
                              resultMetadata.setSegmentCount(Integer.parseInt(segmentCount.toString()));
                              break;
                          case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                              var timestamp = new StringBuilder();
                              codeIndex = DecodedBitStreamParser.numericCompaction(codewords, codeIndex + 1, timestamp);
                              resultMetadata.setTimestamp(Long.parseLong(timestamp.toString()));
                              break;
                          case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                              var checksum = new StringBuilder();
                              codeIndex = DecodedBitStreamParser.numericCompaction(codewords, codeIndex + 1, checksum);
                              resultMetadata.setChecksum(Integer.parseInt(checksum.toString()));
                              break;
                          case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                              var fileSize = new StringBuilder();
                              codeIndex = DecodedBitStreamParser.numericCompaction(codewords, codeIndex + 1, fileSize);
                              resultMetadata.setFileSize(Long.parseLong(fileSize.toString()));
                              break;
                          default:
                              throw FormatException.getFormatInstance();
                      }
                      break;
                  case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:
                      codeIndex++;
                      resultMetadata.setLastSegment(true);
                      break;
                  default:
                      throw FormatException.getFormatInstance();
              }
          }
          if (optionalFieldsStart !== -1) {
              var optionalFieldsLength = codeIndex - optionalFieldsStart;
              if (resultMetadata.isLastSegment()) {
                  optionalFieldsLength--;
              }
              resultMetadata.setOptionalData(Arrays.copyOfRange(codewords, optionalFieldsStart, optionalFieldsStart + optionalFieldsLength));
          }
          return codeIndex;
      };
      DecodedBitStreamParser.textCompaction = function (codewords, codeIndex, result) {
          var textCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
          var byteCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
          var index = 0;
          var end = false;
          while ((codeIndex < codewords[0]) && !end) {
              var code = codewords[codeIndex++];
              if (code < DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH) {
                  textCompactionData[index] = code / 30;
                  textCompactionData[index + 1] = code % 30;
                  index += 2;
              }
              else {
                  switch (code) {
                      case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                          textCompactionData[index++] = DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH;
                          break;
                      case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:
                      case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:
                      case DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH:
                      case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                      case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                      case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:
                          codeIndex--;
                          end = true;
                          break;
                      case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                          textCompactionData[index] = DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE;
                          code = codewords[codeIndex++];
                          byteCompactionData[index] = code;
                          index++;
                          break;
                  }
              }
          }
          DecodedBitStreamParser.decodeTextCompaction(textCompactionData, byteCompactionData, index, result);
          return codeIndex;
      };
      DecodedBitStreamParser.decodeTextCompaction = function (textCompactionData, byteCompactionData, length, result) {
          var subMode = Mode.ALPHA;
          var priorToShiftMode = Mode.ALPHA;
          var i = 0;
          while (i < length) {
              var subModeCh = textCompactionData[i];
              var ch =  '';
              switch (subMode) {
                  case Mode.ALPHA:
                      if (subModeCh < 26) {
                          ch =  String.fromCharCode(65 + subModeCh);
                      }
                      else {
                          switch (subModeCh) {
                              case 26:
                                  ch = ' ';
                                  break;
                              case DecodedBitStreamParser.LL:
                                  subMode = Mode.LOWER;
                                  break;
                              case DecodedBitStreamParser.ML:
                                  subMode = Mode.MIXED;
                                  break;
                              case DecodedBitStreamParser.PS:
                                  priorToShiftMode = subMode;
                                  subMode = Mode.PUNCT_SHIFT;
                                  break;
                              case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                  result.append( byteCompactionData[i]);
                                  break;
                              case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                                  subMode = Mode.ALPHA;
                                  break;
                          }
                      }
                      break;
                  case Mode.LOWER:
                      if (subModeCh < 26) {
                          ch =  String.fromCharCode(97 + subModeCh);
                      }
                      else {
                          switch (subModeCh) {
                              case 26:
                                  ch = ' ';
                                  break;
                              case DecodedBitStreamParser.AS:
                                  priorToShiftMode = subMode;
                                  subMode = Mode.ALPHA_SHIFT;
                                  break;
                              case DecodedBitStreamParser.ML:
                                  subMode = Mode.MIXED;
                                  break;
                              case DecodedBitStreamParser.PS:
                                  priorToShiftMode = subMode;
                                  subMode = Mode.PUNCT_SHIFT;
                                  break;
                              case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                  result.append( byteCompactionData[i]);
                                  break;
                              case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                                  subMode = Mode.ALPHA;
                                  break;
                          }
                      }
                      break;
                  case Mode.MIXED:
                      if (subModeCh < DecodedBitStreamParser.PL) {
                          ch = DecodedBitStreamParser.MIXED_CHARS[subModeCh];
                      }
                      else {
                          switch (subModeCh) {
                              case DecodedBitStreamParser.PL:
                                  subMode = Mode.PUNCT;
                                  break;
                              case 26:
                                  ch = ' ';
                                  break;
                              case DecodedBitStreamParser.LL:
                                  subMode = Mode.LOWER;
                                  break;
                              case DecodedBitStreamParser.AL:
                                  subMode = Mode.ALPHA;
                                  break;
                              case DecodedBitStreamParser.PS:
                                  priorToShiftMode = subMode;
                                  subMode = Mode.PUNCT_SHIFT;
                                  break;
                              case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                  result.append( byteCompactionData[i]);
                                  break;
                              case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                                  subMode = Mode.ALPHA;
                                  break;
                          }
                      }
                      break;
                  case Mode.PUNCT:
                      if (subModeCh < DecodedBitStreamParser.PAL) {
                          ch = DecodedBitStreamParser.PUNCT_CHARS[subModeCh];
                      }
                      else {
                          switch (subModeCh) {
                              case DecodedBitStreamParser.PAL:
                                  subMode = Mode.ALPHA;
                                  break;
                              case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                  result.append( byteCompactionData[i]);
                                  break;
                              case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                                  subMode = Mode.ALPHA;
                                  break;
                          }
                      }
                      break;
                  case Mode.ALPHA_SHIFT:
                      subMode = priorToShiftMode;
                      if (subModeCh < 26) {
                          ch =  String.fromCharCode(65 + subModeCh);
                      }
                      else {
                          switch (subModeCh) {
                              case 26:
                                  ch = ' ';
                                  break;
                              case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                                  subMode = Mode.ALPHA;
                                  break;
                          }
                      }
                      break;
                  case Mode.PUNCT_SHIFT:
                      subMode = priorToShiftMode;
                      if (subModeCh < DecodedBitStreamParser.PAL) {
                          ch = DecodedBitStreamParser.PUNCT_CHARS[subModeCh];
                      }
                      else {
                          switch (subModeCh) {
                              case DecodedBitStreamParser.PAL:
                                  subMode = Mode.ALPHA;
                                  break;
                              case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                  result.append( byteCompactionData[i]);
                                  break;
                              case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                                  subMode = Mode.ALPHA;
                                  break;
                          }
                      }
                      break;
              }
              if (ch !== '') {
                  result.append(ch);
              }
              i++;
          }
      };
      DecodedBitStreamParser.byteCompaction = function (mode, codewords, encoding, codeIndex, result) {
          var decodedBytes = new ByteArrayOutputStream();
          var count = 0;
          var value =  0;
          var end = false;
          switch (mode) {
              case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:
                  var byteCompactedCodewords = new Int32Array(6);
                  var nextCode = codewords[codeIndex++];
                  while ((codeIndex < codewords[0]) && !end) {
                      byteCompactedCodewords[count++] = nextCode;
                      value = 900 * value + nextCode;
                      nextCode = codewords[codeIndex++];
                      switch (nextCode) {
                          case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                          case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:
                          case DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH:
                          case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:
                          case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                          case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                          case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:
                              codeIndex--;
                              end = true;
                              break;
                          default:
                              if ((count % 5 === 0) && (count > 0)) {
                                  for (var j  = 0; j < 6; ++j) {
                                      decodedBytes.write( Number(createBigInt(value) >> createBigInt(8 * (5 - j))));
                                  }
                                  value = 0;
                                  count = 0;
                              }
                              break;
                      }
                  }
                  if (codeIndex === codewords[0] && nextCode < DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH) {
                      byteCompactedCodewords[count++] = nextCode;
                  }
                  for (var i  = 0; i < count; i++) {
                      decodedBytes.write( byteCompactedCodewords[i]);
                  }
                  break;
              case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:
                  while (codeIndex < codewords[0] && !end) {
                      var code = codewords[codeIndex++];
                      if (code < DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH) {
                          count++;
                          value = 900 * value + code;
                      }
                      else {
                          switch (code) {
                              case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                              case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:
                              case DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH:
                              case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:
                              case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                              case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                              case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:
                                  codeIndex--;
                                  end = true;
                                  break;
                          }
                      }
                      if ((count % 5 === 0) && (count > 0)) {
                          for (var j  = 0; j < 6; ++j) {
                              decodedBytes.write( Number(createBigInt(value) >> createBigInt(8 * (5 - j))));
                          }
                          value = 0;
                          count = 0;
                      }
                  }
                  break;
          }
          result.append(StringEncoding.decode(decodedBytes.toByteArray(), encoding));
          return codeIndex;
      };
      DecodedBitStreamParser.numericCompaction = function (codewords, codeIndex , result) {
          var count = 0;
          var end = false;
          var numericCodewords = new Int32Array(DecodedBitStreamParser.MAX_NUMERIC_CODEWORDS);
          while (codeIndex < codewords[0] && !end) {
              var code = codewords[codeIndex++];
              if (codeIndex === codewords[0]) {
                  end = true;
              }
              if (code < DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH) {
                  numericCodewords[count] = code;
                  count++;
              }
              else {
                  switch (code) {
                      case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:
                      case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:
                      case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:
                      case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                      case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                      case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:
                          codeIndex--;
                          end = true;
                          break;
                  }
              }
              if ((count % DecodedBitStreamParser.MAX_NUMERIC_CODEWORDS === 0 || code === DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH || end) && count > 0) {
                  result.append(DecodedBitStreamParser.decodeBase900toBase10(numericCodewords, count));
                  count = 0;
              }
          }
          return codeIndex;
      };
      DecodedBitStreamParser.decodeBase900toBase10 = function (codewords, count) {
          var result = createBigInt(0);
          for (var i  = 0; i < count; i++) {
              result += DecodedBitStreamParser.EXP900[count - i - 1] * createBigInt(codewords[i]);
          }
          var resultString = result.toString();
          if (resultString.charAt(0) !== '1') {
              throw new FormatException();
          }
          return resultString.substring(1);
      };
      DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH = 900;
      DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH = 901;
      DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH = 902;
      DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6 = 924;
      DecodedBitStreamParser.ECI_USER_DEFINED = 925;
      DecodedBitStreamParser.ECI_GENERAL_PURPOSE = 926;
      DecodedBitStreamParser.ECI_CHARSET = 927;
      DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928;
      DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923;
      DecodedBitStreamParser.MACRO_PDF417_TERMINATOR = 922;
      DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913;
      DecodedBitStreamParser.MAX_NUMERIC_CODEWORDS = 15;
      DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0;
      DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1;
      DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2;
      DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3;
      DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4;
      DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5;
      DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6;
      DecodedBitStreamParser.PL = 25;
      DecodedBitStreamParser.LL = 27;
      DecodedBitStreamParser.AS = 27;
      DecodedBitStreamParser.ML = 28;
      DecodedBitStreamParser.AL = 28;
      DecodedBitStreamParser.PS = 29;
      DecodedBitStreamParser.PAL = 29;
      DecodedBitStreamParser.PUNCT_CHARS = ';<>@[\\]_`~!\r\t,:\n-.$/"|*()?{}\'';
      DecodedBitStreamParser.MIXED_CHARS = '0123456789&\r\t,:#-.$/+%*=^';
      DecodedBitStreamParser.EXP900 = getBigIntConstructor() ? getEXP900() : [];
      DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS = 2;
      return DecodedBitStreamParser;
  }());

  var __values$5 = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var PDF417ScanningDecoder =  (function () {
      function PDF417ScanningDecoder() {
      }
      PDF417ScanningDecoder.decode = function (image, imageTopLeft, imageBottomLeft, imageTopRight, imageBottomRight, minCodewordWidth, maxCodewordWidth) {
          var boundingBox = new BoundingBox(image, imageTopLeft, imageBottomLeft, imageTopRight, imageBottomRight);
          var leftRowIndicatorColumn = null;
          var rightRowIndicatorColumn = null;
          var detectionResult;
          for (var firstPass  = true;; firstPass = false) {
              if (imageTopLeft != null) {
                  leftRowIndicatorColumn = PDF417ScanningDecoder.getRowIndicatorColumn(image, boundingBox, imageTopLeft, true, minCodewordWidth, maxCodewordWidth);
              }
              if (imageTopRight != null) {
                  rightRowIndicatorColumn = PDF417ScanningDecoder.getRowIndicatorColumn(image, boundingBox, imageTopRight, false, minCodewordWidth, maxCodewordWidth);
              }
              detectionResult = PDF417ScanningDecoder.merge(leftRowIndicatorColumn, rightRowIndicatorColumn);
              if (detectionResult == null) {
                  throw NotFoundException.getNotFoundInstance();
              }
              var resultBox = detectionResult.getBoundingBox();
              if (firstPass && resultBox != null &&
                  (resultBox.getMinY() < boundingBox.getMinY() || resultBox.getMaxY() > boundingBox.getMaxY())) {
                  boundingBox = resultBox;
              }
              else {
                  break;
              }
          }
          detectionResult.setBoundingBox(boundingBox);
          var maxBarcodeColumn = detectionResult.getBarcodeColumnCount() + 1;
          detectionResult.setDetectionResultColumn(0, leftRowIndicatorColumn);
          detectionResult.setDetectionResultColumn(maxBarcodeColumn, rightRowIndicatorColumn);
          var leftToRight = leftRowIndicatorColumn != null;
          for (var barcodeColumnCount  = 1; barcodeColumnCount <= maxBarcodeColumn; barcodeColumnCount++) {
              var barcodeColumn = leftToRight ? barcodeColumnCount : maxBarcodeColumn - barcodeColumnCount;
              if (detectionResult.getDetectionResultColumn(barcodeColumn) !==  undefined) {
                  continue;
              }
              var detectionResultColumn = void 0;
              if (barcodeColumn === 0 || barcodeColumn === maxBarcodeColumn) {
                  detectionResultColumn = new DetectionResultRowIndicatorColumn(boundingBox, barcodeColumn === 0);
              }
              else {
                  detectionResultColumn = new DetectionResultColumn(boundingBox);
              }
              detectionResult.setDetectionResultColumn(barcodeColumn, detectionResultColumn);
              var startColumn = -1;
              var previousStartColumn = startColumn;
              for (var imageRow  = boundingBox.getMinY(); imageRow <= boundingBox.getMaxY(); imageRow++) {
                  startColumn = PDF417ScanningDecoder.getStartColumn(detectionResult, barcodeColumn, imageRow, leftToRight);
                  if (startColumn < 0 || startColumn > boundingBox.getMaxX()) {
                      if (previousStartColumn === -1) {
                          continue;
                      }
                      startColumn = previousStartColumn;
                  }
                  var codeword = PDF417ScanningDecoder.detectCodeword(image, boundingBox.getMinX(), boundingBox.getMaxX(), leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth);
                  if (codeword != null) {
                      detectionResultColumn.setCodeword(imageRow, codeword);
                      previousStartColumn = startColumn;
                      minCodewordWidth = Math.min(minCodewordWidth, codeword.getWidth());
                      maxCodewordWidth = Math.max(maxCodewordWidth, codeword.getWidth());
                  }
              }
          }
          return PDF417ScanningDecoder.createDecoderResult(detectionResult);
      };
      PDF417ScanningDecoder.merge = function (leftRowIndicatorColumn, rightRowIndicatorColumn) {
          if (leftRowIndicatorColumn == null && rightRowIndicatorColumn == null) {
              return null;
          }
          var barcodeMetadata = PDF417ScanningDecoder.getBarcodeMetadata(leftRowIndicatorColumn, rightRowIndicatorColumn);
          if (barcodeMetadata == null) {
              return null;
          }
          var boundingBox = BoundingBox.merge(PDF417ScanningDecoder.adjustBoundingBox(leftRowIndicatorColumn), PDF417ScanningDecoder.adjustBoundingBox(rightRowIndicatorColumn));
          return new DetectionResult(barcodeMetadata, boundingBox);
      };
      PDF417ScanningDecoder.adjustBoundingBox = function (rowIndicatorColumn) {
          var e_1, _a;
          if (rowIndicatorColumn == null) {
              return null;
          }
          var rowHeights = rowIndicatorColumn.getRowHeights();
          if (rowHeights == null) {
              return null;
          }
          var maxRowHeight = PDF417ScanningDecoder.getMax(rowHeights);
          var missingStartRows = 0;
          try {
              for (var rowHeights_1 = __values$5(rowHeights), rowHeights_1_1 = rowHeights_1.next(); !rowHeights_1_1.done; rowHeights_1_1 = rowHeights_1.next()) {
                  var rowHeight = rowHeights_1_1.value ;
                  missingStartRows += maxRowHeight - rowHeight;
                  if (rowHeight > 0) {
                      break;
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (rowHeights_1_1 && !rowHeights_1_1.done && (_a = rowHeights_1.return)) _a.call(rowHeights_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          var codewords = rowIndicatorColumn.getCodewords();
          for (var row  = 0; missingStartRows > 0 && codewords[row] == null; row++) {
              missingStartRows--;
          }
          var missingEndRows = 0;
          for (var row  = rowHeights.length - 1; row >= 0; row--) {
              missingEndRows += maxRowHeight - rowHeights[row];
              if (rowHeights[row] > 0) {
                  break;
              }
          }
          for (var row  = codewords.length - 1; missingEndRows > 0 && codewords[row] == null; row--) {
              missingEndRows--;
          }
          return rowIndicatorColumn.getBoundingBox().addMissingRows(missingStartRows, missingEndRows, rowIndicatorColumn.isLeft());
      };
      PDF417ScanningDecoder.getMax = function (values) {
          var e_2, _a;
          var maxValue = -1;
          try {
              for (var values_1 = __values$5(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                  var value = values_1_1.value ;
                  maxValue = Math.max(maxValue, value);
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
              }
              finally { if (e_2) throw e_2.error; }
          }
          return maxValue;
      };
      PDF417ScanningDecoder.getBarcodeMetadata = function (leftRowIndicatorColumn, rightRowIndicatorColumn) {
          var leftBarcodeMetadata;
          if (leftRowIndicatorColumn == null ||
              (leftBarcodeMetadata = leftRowIndicatorColumn.getBarcodeMetadata()) == null) {
              return rightRowIndicatorColumn == null ? null : rightRowIndicatorColumn.getBarcodeMetadata();
          }
          var rightBarcodeMetadata;
          if (rightRowIndicatorColumn == null ||
              (rightBarcodeMetadata = rightRowIndicatorColumn.getBarcodeMetadata()) == null) {
              return leftBarcodeMetadata;
          }
          if (leftBarcodeMetadata.getColumnCount() !== rightBarcodeMetadata.getColumnCount() &&
              leftBarcodeMetadata.getErrorCorrectionLevel() !== rightBarcodeMetadata.getErrorCorrectionLevel() &&
              leftBarcodeMetadata.getRowCount() !== rightBarcodeMetadata.getRowCount()) {
              return null;
          }
          return leftBarcodeMetadata;
      };
      PDF417ScanningDecoder.getRowIndicatorColumn = function (image, boundingBox, startPoint, leftToRight, minCodewordWidth, maxCodewordWidth) {
          var rowIndicatorColumn = new DetectionResultRowIndicatorColumn(boundingBox, leftToRight);
          for (var i  = 0; i < 2; i++) {
              var increment = i === 0 ? 1 : -1;
              var startColumn = Math.trunc(Math.trunc(startPoint.getX()));
              for (var imageRow  = Math.trunc(Math.trunc(startPoint.getY())); imageRow <= boundingBox.getMaxY() &&
                  imageRow >= boundingBox.getMinY(); imageRow += increment) {
                  var codeword = PDF417ScanningDecoder.detectCodeword(image, 0, image.getWidth(), leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth);
                  if (codeword != null) {
                      rowIndicatorColumn.setCodeword(imageRow, codeword);
                      if (leftToRight) {
                          startColumn = codeword.getStartX();
                      }
                      else {
                          startColumn = codeword.getEndX();
                      }
                  }
              }
          }
          return rowIndicatorColumn;
      };
      PDF417ScanningDecoder.adjustCodewordCount = function (detectionResult, barcodeMatrix) {
          var barcodeMatrix01 = barcodeMatrix[0][1];
          var numberOfCodewords = barcodeMatrix01.getValue();
          var calculatedNumberOfCodewords = detectionResult.getBarcodeColumnCount() *
              detectionResult.getBarcodeRowCount() -
              PDF417ScanningDecoder.getNumberOfECCodeWords(detectionResult.getBarcodeECLevel());
          if (numberOfCodewords.length === 0) {
              if (calculatedNumberOfCodewords < 1 || calculatedNumberOfCodewords > PDF417Common.MAX_CODEWORDS_IN_BARCODE) {
                  throw NotFoundException.getNotFoundInstance();
              }
              barcodeMatrix01.setValue(calculatedNumberOfCodewords);
          }
          else if (numberOfCodewords[0] !== calculatedNumberOfCodewords) {
              barcodeMatrix01.setValue(calculatedNumberOfCodewords);
          }
      };
      PDF417ScanningDecoder.createDecoderResult = function (detectionResult) {
          var barcodeMatrix = PDF417ScanningDecoder.createBarcodeMatrix(detectionResult);
          PDF417ScanningDecoder.adjustCodewordCount(detectionResult, barcodeMatrix);
          var erasures  = new Array();
          var codewords = new Int32Array(detectionResult.getBarcodeRowCount() * detectionResult.getBarcodeColumnCount());
          var ambiguousIndexValuesList =  [];
          var ambiguousIndexesList =  new Array();
          for (var row  = 0; row < detectionResult.getBarcodeRowCount(); row++) {
              for (var column  = 0; column < detectionResult.getBarcodeColumnCount(); column++) {
                  var values = barcodeMatrix[row][column + 1].getValue();
                  var codewordIndex = row * detectionResult.getBarcodeColumnCount() + column;
                  if (values.length === 0) {
                      erasures.push(codewordIndex);
                  }
                  else if (values.length === 1) {
                      codewords[codewordIndex] = values[0];
                  }
                  else {
                      ambiguousIndexesList.push(codewordIndex);
                      ambiguousIndexValuesList.push(values);
                  }
              }
          }
          var ambiguousIndexValues = new Array(ambiguousIndexValuesList.length);
          for (var i  = 0; i < ambiguousIndexValues.length; i++) {
              ambiguousIndexValues[i] = ambiguousIndexValuesList[i];
          }
          return PDF417ScanningDecoder.createDecoderResultFromAmbiguousValues(detectionResult.getBarcodeECLevel(), codewords, PDF417Common.toIntArray(erasures), PDF417Common.toIntArray(ambiguousIndexesList), ambiguousIndexValues);
      };
      PDF417ScanningDecoder.createDecoderResultFromAmbiguousValues = function (ecLevel, codewords, erasureArray, ambiguousIndexes, ambiguousIndexValues) {
          var ambiguousIndexCount = new Int32Array(ambiguousIndexes.length);
          var tries = 100;
          while (tries-- > 0) {
              for (var i  = 0; i < ambiguousIndexCount.length; i++) {
                  codewords[ambiguousIndexes[i]] = ambiguousIndexValues[i][ambiguousIndexCount[i]];
              }
              try {
                  return PDF417ScanningDecoder.decodeCodewords(codewords, ecLevel, erasureArray);
              }
              catch (err) {
                  var ignored = err instanceof ChecksumException;
                  if (!ignored) {
                      throw err;
                  }
              }
              if (ambiguousIndexCount.length === 0) {
                  throw ChecksumException.getChecksumInstance();
              }
              for (var i  = 0; i < ambiguousIndexCount.length; i++) {
                  if (ambiguousIndexCount[i] < ambiguousIndexValues[i].length - 1) {
                      ambiguousIndexCount[i]++;
                      break;
                  }
                  else {
                      ambiguousIndexCount[i] = 0;
                      if (i === ambiguousIndexCount.length - 1) {
                          throw ChecksumException.getChecksumInstance();
                      }
                  }
              }
          }
          throw ChecksumException.getChecksumInstance();
      };
      PDF417ScanningDecoder.createBarcodeMatrix = function (detectionResult) {
          var e_3, _a, e_4, _b;
          var barcodeMatrix = Array.from({ length: detectionResult.getBarcodeRowCount() }, function () { return new Array(detectionResult.getBarcodeColumnCount() + 2); });
          for (var row  = 0; row < barcodeMatrix.length; row++) {
              for (var column_1  = 0; column_1 < barcodeMatrix[row].length; column_1++) {
                  barcodeMatrix[row][column_1] = new BarcodeValue();
              }
          }
          var column = 0;
          try {
              for (var _c = __values$5(detectionResult.getDetectionResultColumns()), _d = _c.next(); !_d.done; _d = _c.next()) {
                  var detectionResultColumn = _d.value ;
                  if (detectionResultColumn != null) {
                      try {
                          for (var _e = (e_4 = void 0, __values$5(detectionResultColumn.getCodewords())), _f = _e.next(); !_f.done; _f = _e.next()) {
                              var codeword = _f.value ;
                              if (codeword != null) {
                                  var rowNumber = codeword.getRowNumber();
                                  if (rowNumber >= 0) {
                                      if (rowNumber >= barcodeMatrix.length) {
                                          continue;
                                      }
                                      barcodeMatrix[rowNumber][column].setValue(codeword.getValue());
                                  }
                              }
                          }
                      }
                      catch (e_4_1) { e_4 = { error: e_4_1 }; }
                      finally {
                          try {
                              if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                          }
                          finally { if (e_4) throw e_4.error; }
                      }
                  }
                  column++;
              }
          }
          catch (e_3_1) { e_3 = { error: e_3_1 }; }
          finally {
              try {
                  if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
              }
              finally { if (e_3) throw e_3.error; }
          }
          return barcodeMatrix;
      };
      PDF417ScanningDecoder.isValidBarcodeColumn = function (detectionResult, barcodeColumn) {
          return barcodeColumn >= 0 && barcodeColumn <= detectionResult.getBarcodeColumnCount() + 1;
      };
      PDF417ScanningDecoder.getStartColumn = function (detectionResult, barcodeColumn, imageRow, leftToRight) {
          var e_5, _a;
          var offset = leftToRight ? 1 : -1;
          var codeword = null;
          if (PDF417ScanningDecoder.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
              codeword = detectionResult.getDetectionResultColumn(barcodeColumn - offset).getCodeword(imageRow);
          }
          if (codeword != null) {
              return leftToRight ? codeword.getEndX() : codeword.getStartX();
          }
          codeword = detectionResult.getDetectionResultColumn(barcodeColumn).getCodewordNearby(imageRow);
          if (codeword != null) {
              return leftToRight ? codeword.getStartX() : codeword.getEndX();
          }
          if (PDF417ScanningDecoder.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
              codeword = detectionResult.getDetectionResultColumn(barcodeColumn - offset).getCodewordNearby(imageRow);
          }
          if (codeword != null) {
              return leftToRight ? codeword.getEndX() : codeword.getStartX();
          }
          var skippedColumns = 0;
          while (PDF417ScanningDecoder.isValidBarcodeColumn(detectionResult, barcodeColumn - offset)) {
              barcodeColumn -= offset;
              try {
                  for (var _b = (e_5 = void 0, __values$5(detectionResult.getDetectionResultColumn(barcodeColumn).getCodewords())), _c = _b.next(); !_c.done; _c = _b.next()) {
                      var previousRowCodeword = _c.value ;
                      if (previousRowCodeword != null) {
                          return (leftToRight ? previousRowCodeword.getEndX() : previousRowCodeword.getStartX()) +
                              offset *
                                  skippedColumns *
                                  (previousRowCodeword.getEndX() - previousRowCodeword.getStartX());
                      }
                  }
              }
              catch (e_5_1) { e_5 = { error: e_5_1 }; }
              finally {
                  try {
                      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                  }
                  finally { if (e_5) throw e_5.error; }
              }
              skippedColumns++;
          }
          return leftToRight ? detectionResult.getBoundingBox().getMinX() : detectionResult.getBoundingBox().getMaxX();
      };
      PDF417ScanningDecoder.detectCodeword = function (image, minColumn, maxColumn, leftToRight, startColumn, imageRow, minCodewordWidth, maxCodewordWidth) {
          startColumn = PDF417ScanningDecoder.adjustCodewordStartColumn(image, minColumn, maxColumn, leftToRight, startColumn, imageRow);
          var moduleBitCount = PDF417ScanningDecoder.getModuleBitCount(image, minColumn, maxColumn, leftToRight, startColumn, imageRow);
          if (moduleBitCount == null) {
              return null;
          }
          var endColumn;
          var codewordBitCount = MathUtils.sum(moduleBitCount);
          if (leftToRight) {
              endColumn = startColumn + codewordBitCount;
          }
          else {
              for (var i  = 0; i < moduleBitCount.length / 2; i++) {
                  var tmpCount = moduleBitCount[i];
                  moduleBitCount[i] = moduleBitCount[moduleBitCount.length - 1 - i];
                  moduleBitCount[moduleBitCount.length - 1 - i] = tmpCount;
              }
              endColumn = startColumn;
              startColumn = endColumn - codewordBitCount;
          }
          if (!PDF417ScanningDecoder.checkCodewordSkew(codewordBitCount, minCodewordWidth, maxCodewordWidth)) {
              return null;
          }
          var decodedValue = PDF417CodewordDecoder.getDecodedValue(moduleBitCount);
          var codeword = PDF417Common.getCodeword(decodedValue);
          if (codeword === -1) {
              return null;
          }
          return new Codeword(startColumn, endColumn, PDF417ScanningDecoder.getCodewordBucketNumber(decodedValue), codeword);
      };
      PDF417ScanningDecoder.getModuleBitCount = function (image, minColumn, maxColumn, leftToRight, startColumn, imageRow) {
          var imageColumn = startColumn;
          var moduleBitCount = new Int32Array(8);
          var moduleNumber = 0;
          var increment = leftToRight ? 1 : -1;
          var previousPixelValue = leftToRight;
          while ((leftToRight ? imageColumn < maxColumn : imageColumn >= minColumn) &&
              moduleNumber < moduleBitCount.length) {
              if (image.get(imageColumn, imageRow) === previousPixelValue) {
                  moduleBitCount[moduleNumber]++;
                  imageColumn += increment;
              }
              else {
                  moduleNumber++;
                  previousPixelValue = !previousPixelValue;
              }
          }
          if (moduleNumber === moduleBitCount.length ||
              ((imageColumn === (leftToRight ? maxColumn : minColumn)) &&
                  moduleNumber === moduleBitCount.length - 1)) {
              return moduleBitCount;
          }
          return null;
      };
      PDF417ScanningDecoder.getNumberOfECCodeWords = function (barcodeECLevel) {
          return 2 << barcodeECLevel;
      };
      PDF417ScanningDecoder.adjustCodewordStartColumn = function (image, minColumn, maxColumn, leftToRight, codewordStartColumn, imageRow) {
          var correctedStartColumn = codewordStartColumn;
          var increment = leftToRight ? -1 : 1;
          for (var i  = 0; i < 2; i++) {
              while ((leftToRight ? correctedStartColumn >= minColumn : correctedStartColumn < maxColumn) &&
                  leftToRight === image.get(correctedStartColumn, imageRow)) {
                  if (Math.abs(codewordStartColumn - correctedStartColumn) > PDF417ScanningDecoder.CODEWORD_SKEW_SIZE) {
                      return codewordStartColumn;
                  }
                  correctedStartColumn += increment;
              }
              increment = -increment;
              leftToRight = !leftToRight;
          }
          return correctedStartColumn;
      };
      PDF417ScanningDecoder.checkCodewordSkew = function (codewordSize, minCodewordWidth, maxCodewordWidth) {
          return minCodewordWidth - PDF417ScanningDecoder.CODEWORD_SKEW_SIZE <= codewordSize &&
              codewordSize <= maxCodewordWidth + PDF417ScanningDecoder.CODEWORD_SKEW_SIZE;
      };
      PDF417ScanningDecoder.decodeCodewords = function (codewords, ecLevel, erasures) {
          if (codewords.length === 0) {
              throw FormatException.getFormatInstance();
          }
          var numECCodewords = 1 << (ecLevel + 1);
          var correctedErrorsCount = PDF417ScanningDecoder.correctErrors(codewords, erasures, numECCodewords);
          PDF417ScanningDecoder.verifyCodewordCount(codewords, numECCodewords);
          var decoderResult = DecodedBitStreamParser.decode(codewords, '' + ecLevel);
          decoderResult.setErrorsCorrected(correctedErrorsCount);
          decoderResult.setErasures(erasures.length);
          return decoderResult;
      };
      PDF417ScanningDecoder.correctErrors = function (codewords, erasures, numECCodewords) {
          if (erasures != null &&
              erasures.length > numECCodewords / 2 + PDF417ScanningDecoder.MAX_ERRORS ||
              numECCodewords < 0 ||
              numECCodewords > PDF417ScanningDecoder.MAX_EC_CODEWORDS) {
              throw ChecksumException.getChecksumInstance();
          }
          return PDF417ScanningDecoder.errorCorrection.decode(codewords, numECCodewords, erasures);
      };
      PDF417ScanningDecoder.verifyCodewordCount = function (codewords, numECCodewords) {
          if (codewords.length < 4) {
              throw FormatException.getFormatInstance();
          }
          var numberOfCodewords = codewords[0];
          if (numberOfCodewords > codewords.length) {
              throw FormatException.getFormatInstance();
          }
          if (numberOfCodewords === 0) {
              if (numECCodewords < codewords.length) {
                  codewords[0] = codewords.length - numECCodewords;
              }
              else {
                  throw FormatException.getFormatInstance();
              }
          }
      };
      PDF417ScanningDecoder.getBitCountForCodeword = function (codeword) {
          var result = new Int32Array(8);
          var previousValue = 0;
          var i = result.length - 1;
          while (true) {
              if ((codeword & 0x1) !== previousValue) {
                  previousValue = codeword & 0x1;
                  i--;
                  if (i < 0) {
                      break;
                  }
              }
              result[i]++;
              codeword >>= 1;
          }
          return result;
      };
      PDF417ScanningDecoder.getCodewordBucketNumber = function (codeword) {
          if (codeword instanceof Int32Array) {
              return this.getCodewordBucketNumber_Int32Array(codeword);
          }
          return this.getCodewordBucketNumber_number(codeword);
      };
      PDF417ScanningDecoder.getCodewordBucketNumber_number = function (codeword) {
          return PDF417ScanningDecoder.getCodewordBucketNumber(PDF417ScanningDecoder.getBitCountForCodeword(codeword));
      };
      PDF417ScanningDecoder.getCodewordBucketNumber_Int32Array = function (moduleBitCount) {
          return (moduleBitCount[0] - moduleBitCount[2] + moduleBitCount[4] - moduleBitCount[6] + 9) % 9;
      };
      PDF417ScanningDecoder.toString = function (barcodeMatrix) {
          var formatter = new Formatter();
          for (var row  = 0; row < barcodeMatrix.length; row++) {
              formatter.format('Row %2d: ', row);
              for (var column  = 0; column < barcodeMatrix[row].length; column++) {
                  var barcodeValue = barcodeMatrix[row][column];
                  if (barcodeValue.getValue().length === 0) {
                      formatter.format('        ', null);
                  }
                  else {
                      formatter.format('%4d(%2d)', barcodeValue.getValue()[0], barcodeValue.getConfidence(barcodeValue.getValue()[0]));
                  }
              }
              formatter.format('%n');
          }
          return formatter.toString();
      };
       PDF417ScanningDecoder.CODEWORD_SKEW_SIZE = 2;
       PDF417ScanningDecoder.MAX_ERRORS = 3;
       PDF417ScanningDecoder.MAX_EC_CODEWORDS = 512;
       PDF417ScanningDecoder.errorCorrection = new ErrorCorrection();
      return PDF417ScanningDecoder;
  }());

  var __values$4 = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var PDF417Reader =  (function () {
      function PDF417Reader() {
      }
      PDF417Reader.prototype.decode = function (image, hints) {
          if (hints === void 0) { hints = null; }
          var result = PDF417Reader.decode(image, hints, false);
          if (result == null || result.length === 0 || result[0] == null) {
              throw NotFoundException.getNotFoundInstance();
          }
          return result[0];
      };
      PDF417Reader.prototype.decodeMultiple = function (image, hints) {
          if (hints === void 0) { hints = null; }
          try {
              return PDF417Reader.decode(image, hints, true);
          }
          catch (ignored) {
              if (ignored instanceof FormatException || ignored instanceof ChecksumException) {
                  throw NotFoundException.getNotFoundInstance();
              }
              throw ignored;
          }
      };
      PDF417Reader.decode = function (image, hints, multiple) {
          var e_1, _a;
          var results = new Array();
          var detectorResult = Detector.detectMultiple(image, hints, multiple);
          try {
              for (var _b = __values$4(detectorResult.getPoints()), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var points = _c.value;
                  var decoderResult = PDF417ScanningDecoder.decode(detectorResult.getBits(), points[4], points[5], points[6], points[7], PDF417Reader.getMinCodewordWidth(points), PDF417Reader.getMaxCodewordWidth(points));
                  var result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), undefined, points, BarcodeFormat$1.PDF_417);
                  result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, decoderResult.getECLevel());
                  var pdf417ResultMetadata = decoderResult.getOther();
                  if (pdf417ResultMetadata != null) {
                      result.putMetadata(ResultMetadataType$1.PDF417_EXTRA_METADATA, pdf417ResultMetadata);
                  }
                  results.push(result);
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
          return results.map(function (x) { return x; });
      };
      PDF417Reader.getMaxWidth = function (p1, p2) {
          if (p1 == null || p2 == null) {
              return 0;
          }
          return Math.trunc(Math.abs(p1.getX() - p2.getX()));
      };
      PDF417Reader.getMinWidth = function (p1, p2) {
          if (p1 == null || p2 == null) {
              return Integer.MAX_VALUE;
          }
          return Math.trunc(Math.abs(p1.getX() - p2.getX()));
      };
      PDF417Reader.getMaxCodewordWidth = function (p) {
          return Math.floor(Math.max(Math.max(PDF417Reader.getMaxWidth(p[0], p[4]), PDF417Reader.getMaxWidth(p[6], p[2]) * PDF417Common.MODULES_IN_CODEWORD /
              PDF417Common.MODULES_IN_STOP_PATTERN), Math.max(PDF417Reader.getMaxWidth(p[1], p[5]), PDF417Reader.getMaxWidth(p[7], p[3]) * PDF417Common.MODULES_IN_CODEWORD /
              PDF417Common.MODULES_IN_STOP_PATTERN)));
      };
      PDF417Reader.getMinCodewordWidth = function (p) {
          return Math.floor(Math.min(Math.min(PDF417Reader.getMinWidth(p[0], p[4]), PDF417Reader.getMinWidth(p[6], p[2]) * PDF417Common.MODULES_IN_CODEWORD /
              PDF417Common.MODULES_IN_STOP_PATTERN), Math.min(PDF417Reader.getMinWidth(p[1], p[5]), PDF417Reader.getMinWidth(p[7], p[3]) * PDF417Common.MODULES_IN_CODEWORD /
              PDF417Common.MODULES_IN_STOP_PATTERN)));
      };
      PDF417Reader.prototype.reset = function () {
      };
      return PDF417Reader;
  }());

  var __extends$9 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var ReaderException =  (function (_super) {
      __extends$9(ReaderException, _super);
      function ReaderException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      ReaderException.kind = 'ReaderException';
      return ReaderException;
  }(Exception));

  var __values$3 = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var MultiFormatReader =  (function () {
      function MultiFormatReader() {
      }
      MultiFormatReader.prototype.decode = function (image, hints) {
          this.setHints(hints);
          return this.decodeInternal(image);
      };
      MultiFormatReader.prototype.decodeWithState = function (image) {
          if (this.readers === null || this.readers === undefined) {
              this.setHints(null);
          }
          return this.decodeInternal(image);
      };
      MultiFormatReader.prototype.setHints = function (hints) {
          this.hints = hints;
          var tryHarder = hints !== null && hints !== undefined && undefined !== hints.get(DecodeHintType$1.TRY_HARDER);
          var formats = hints === null || hints === undefined ? null : hints.get(DecodeHintType$1.POSSIBLE_FORMATS);
          var readers = new Array();
          if (formats !== null && formats !== undefined) {
              var addOneDReader = formats.some(function (f) {
                  return f === BarcodeFormat$1.UPC_A ||
                      f === BarcodeFormat$1.UPC_E ||
                      f === BarcodeFormat$1.EAN_13 ||
                      f === BarcodeFormat$1.EAN_8 ||
                      f === BarcodeFormat$1.CODABAR ||
                      f === BarcodeFormat$1.CODE_39 ||
                      f === BarcodeFormat$1.CODE_93 ||
                      f === BarcodeFormat$1.CODE_128 ||
                      f === BarcodeFormat$1.ITF ||
                      f === BarcodeFormat$1.RSS_14 ||
                      f === BarcodeFormat$1.RSS_EXPANDED;
              });
              if (addOneDReader && !tryHarder) {
                  readers.push(new MultiFormatOneDReader(hints));
              }
              if (formats.includes(BarcodeFormat$1.QR_CODE)) {
                  readers.push(new QRCodeReader());
              }
              if (formats.includes(BarcodeFormat$1.DATA_MATRIX)) {
                  readers.push(new DataMatrixReader());
              }
              if (formats.includes(BarcodeFormat$1.AZTEC)) {
                  readers.push(new AztecReader());
              }
              if (formats.includes(BarcodeFormat$1.PDF_417)) {
                  readers.push(new PDF417Reader());
              }
              if (addOneDReader && tryHarder) {
                  readers.push(new MultiFormatOneDReader(hints));
              }
          }
          if (readers.length === 0) {
              if (!tryHarder) {
                  readers.push(new MultiFormatOneDReader(hints));
              }
              readers.push(new QRCodeReader());
              readers.push(new DataMatrixReader());
              readers.push(new AztecReader());
              readers.push(new PDF417Reader());
              if (tryHarder) {
                  readers.push(new MultiFormatOneDReader(hints));
              }
          }
          this.readers = readers;
      };
      MultiFormatReader.prototype.reset = function () {
          var e_1, _a;
          if (this.readers !== null) {
              try {
                  for (var _b = __values$3(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
                      var reader = _c.value;
                      reader.reset();
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
          }
      };
      MultiFormatReader.prototype.decodeInternal = function (image) {
          var e_2, _a;
          if (this.readers === null) {
              throw new ReaderException('No readers where selected, nothing can be read.');
          }
          try {
              for (var _b = __values$3(this.readers), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var reader = _c.value;
                  try {
                      return reader.decode(image, this.hints);
                  }
                  catch (ex) {
                      if (ex instanceof ReaderException) {
                          continue;
                      }
                  }
              }
          }
          catch (e_2_1) { e_2 = { error: e_2_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_2) throw e_2.error; }
          }
          throw new NotFoundException('No MultiFormat Readers were able to detect the code.');
      };
      return MultiFormatReader;
  }());

  var __extends$8 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var BrowserMultiFormatReader =  (function (_super) {
      __extends$8(BrowserMultiFormatReader, _super);
      function BrowserMultiFormatReader(hints, timeBetweenScansMillis) {
          if (hints === void 0) { hints = null; }
          if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
          var _this = this;
          var reader = new MultiFormatReader();
          reader.setHints(hints);
          _this = _super.call(this, reader, timeBetweenScansMillis) || this;
          return _this;
      }
      BrowserMultiFormatReader.prototype.decodeBitmap = function (binaryBitmap) {
          return this.reader.decodeWithState(binaryBitmap);
      };
      return BrowserMultiFormatReader;
  }(BrowserCodeReader));

  var __extends$7 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  ((function (_super) {
      __extends$7(BrowserPDF417Reader, _super);
      function BrowserPDF417Reader(timeBetweenScansMillis) {
          if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
          return _super.call(this, new PDF417Reader(), timeBetweenScansMillis) || this;
      }
      return BrowserPDF417Reader;
  })(BrowserCodeReader));

  var __extends$6 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  ((function (_super) {
      __extends$6(BrowserQRCodeReader, _super);
      function BrowserQRCodeReader(timeBetweenScansMillis) {
          if (timeBetweenScansMillis === void 0) { timeBetweenScansMillis = 500; }
          return _super.call(this, new QRCodeReader(), timeBetweenScansMillis) || this;
      }
      return BrowserQRCodeReader;
  })(BrowserCodeReader));

  var EncodeHintType;
  (function (EncodeHintType) {
      EncodeHintType[EncodeHintType["ERROR_CORRECTION"] = 0] = "ERROR_CORRECTION";
      EncodeHintType[EncodeHintType["CHARACTER_SET"] = 1] = "CHARACTER_SET";
      EncodeHintType[EncodeHintType["DATA_MATRIX_SHAPE"] = 2] = "DATA_MATRIX_SHAPE";
      EncodeHintType[EncodeHintType["MIN_SIZE"] = 3] = "MIN_SIZE";
      EncodeHintType[EncodeHintType["MAX_SIZE"] = 4] = "MAX_SIZE";
      EncodeHintType[EncodeHintType["MARGIN"] = 5] = "MARGIN";
      EncodeHintType[EncodeHintType["PDF417_COMPACT"] = 6] = "PDF417_COMPACT";
      EncodeHintType[EncodeHintType["PDF417_COMPACTION"] = 7] = "PDF417_COMPACTION";
      EncodeHintType[EncodeHintType["PDF417_DIMENSIONS"] = 8] = "PDF417_DIMENSIONS";
      EncodeHintType[EncodeHintType["AZTEC_LAYERS"] = 9] = "AZTEC_LAYERS";
      EncodeHintType[EncodeHintType["QR_VERSION"] = 10] = "QR_VERSION";
  })(EncodeHintType || (EncodeHintType = {}));
  var EncodeHintType$1 = EncodeHintType;

  var ReedSolomonEncoder =  (function () {
      function ReedSolomonEncoder(field) {
          this.field = field;
          this.cachedGenerators = [];
          this.cachedGenerators.push(new GenericGFPoly(field, Int32Array.from([1])));
      }
      ReedSolomonEncoder.prototype.buildGenerator = function (degree ) {
          var cachedGenerators = this.cachedGenerators;
          if (degree >= cachedGenerators.length) {
              var lastGenerator = cachedGenerators[cachedGenerators.length - 1];
              var field = this.field;
              for (var d = cachedGenerators.length; d <= degree; d++) {
                  var nextGenerator = lastGenerator.multiply(new GenericGFPoly(field, Int32Array.from([1, field.exp(d - 1 + field.getGeneratorBase())])));
                  cachedGenerators.push(nextGenerator);
                  lastGenerator = nextGenerator;
              }
          }
          return cachedGenerators[degree];
      };
      ReedSolomonEncoder.prototype.encode = function (toEncode, ecBytes ) {
          if (ecBytes === 0) {
              throw new IllegalArgumentException('No error correction bytes');
          }
          var dataBytes = toEncode.length - ecBytes;
          if (dataBytes <= 0) {
              throw new IllegalArgumentException('No data bytes provided');
          }
          var generator = this.buildGenerator(ecBytes);
          var infoCoefficients = new Int32Array(dataBytes);
          System.arraycopy(toEncode, 0, infoCoefficients, 0, dataBytes);
          var info = new GenericGFPoly(this.field, infoCoefficients);
          info = info.multiplyByMonomial(ecBytes, 1);
          var remainder = info.divide(generator)[1];
          var coefficients = remainder.getCoefficients();
          var numZeroCoefficients = ecBytes - coefficients.length;
          for (var i = 0; i < numZeroCoefficients; i++) {
              toEncode[dataBytes + i] = 0;
          }
          System.arraycopy(coefficients, 0, toEncode, dataBytes + numZeroCoefficients, coefficients.length);
      };
      return ReedSolomonEncoder;
  }());

  var MaskUtil =  (function () {
      function MaskUtil() {
      }
      MaskUtil.applyMaskPenaltyRule1 = function (matrix) {
          return MaskUtil.applyMaskPenaltyRule1Internal(matrix, true) + MaskUtil.applyMaskPenaltyRule1Internal(matrix, false);
      };
      MaskUtil.applyMaskPenaltyRule2 = function (matrix) {
          var penalty = 0;
          var array = matrix.getArray();
          var width = matrix.getWidth();
          var height = matrix.getHeight();
          for (var y = 0; y < height - 1; y++) {
              var arrayY = array[y];
              for (var x = 0; x < width - 1; x++) {
                  var value = arrayY[x];
                  if (value === arrayY[x + 1] && value === array[y + 1][x] && value === array[y + 1][x + 1]) {
                      penalty++;
                  }
              }
          }
          return MaskUtil.N2 * penalty;
      };
      MaskUtil.applyMaskPenaltyRule3 = function (matrix) {
          var numPenalties = 0;
          var array = matrix.getArray();
          var width = matrix.getWidth();
          var height = matrix.getHeight();
          for (var y = 0; y < height; y++) {
              for (var x = 0; x < width; x++) {
                  var arrayY = array[y];
                  if (x + 6 < width &&
                      arrayY[x] === 1 &&
                      arrayY[x + 1] === 0 &&
                      arrayY[x + 2] === 1 &&
                      arrayY[x + 3] === 1 &&
                      arrayY[x + 4] === 1 &&
                      arrayY[x + 5] === 0 &&
                      arrayY[x + 6] === 1 &&
                      (MaskUtil.isWhiteHorizontal(arrayY, x - 4, x) || MaskUtil.isWhiteHorizontal(arrayY, x + 7, x + 11))) {
                      numPenalties++;
                  }
                  if (y + 6 < height &&
                      array[y][x] === 1 &&
                      array[y + 1][x] === 0 &&
                      array[y + 2][x] === 1 &&
                      array[y + 3][x] === 1 &&
                      array[y + 4][x] === 1 &&
                      array[y + 5][x] === 0 &&
                      array[y + 6][x] === 1 &&
                      (MaskUtil.isWhiteVertical(array, x, y - 4, y) || MaskUtil.isWhiteVertical(array, x, y + 7, y + 11))) {
                      numPenalties++;
                  }
              }
          }
          return numPenalties * MaskUtil.N3;
      };
      MaskUtil.isWhiteHorizontal = function (rowArray, from , to ) {
          from = Math.max(from, 0);
          to = Math.min(to, rowArray.length);
          for (var i = from; i < to; i++) {
              if (rowArray[i] === 1) {
                  return false;
              }
          }
          return true;
      };
      MaskUtil.isWhiteVertical = function (array, col , from , to ) {
          from = Math.max(from, 0);
          to = Math.min(to, array.length);
          for (var i = from; i < to; i++) {
              if (array[i][col] === 1) {
                  return false;
              }
          }
          return true;
      };
      MaskUtil.applyMaskPenaltyRule4 = function (matrix) {
          var numDarkCells = 0;
          var array = matrix.getArray();
          var width = matrix.getWidth();
          var height = matrix.getHeight();
          for (var y = 0; y < height; y++) {
              var arrayY = array[y];
              for (var x = 0; x < width; x++) {
                  if (arrayY[x] === 1) {
                      numDarkCells++;
                  }
              }
          }
          var numTotalCells = matrix.getHeight() * matrix.getWidth();
          var fivePercentVariances = Math.floor(Math.abs(numDarkCells * 2 - numTotalCells) * 10 / numTotalCells);
          return fivePercentVariances * MaskUtil.N4;
      };
      MaskUtil.getDataMaskBit = function (maskPattern , x , y ) {
          var intermediate;
          var temp;
          switch (maskPattern) {
              case 0:
                  intermediate = (y + x) & 0x1;
                  break;
              case 1:
                  intermediate = y & 0x1;
                  break;
              case 2:
                  intermediate = x % 3;
                  break;
              case 3:
                  intermediate = (y + x) % 3;
                  break;
              case 4:
                  intermediate = (Math.floor(y / 2) + Math.floor(x / 3)) & 0x1;
                  break;
              case 5:
                  temp = y * x;
                  intermediate = (temp & 0x1) + (temp % 3);
                  break;
              case 6:
                  temp = y * x;
                  intermediate = ((temp & 0x1) + (temp % 3)) & 0x1;
                  break;
              case 7:
                  temp = y * x;
                  intermediate = ((temp % 3) + ((y + x) & 0x1)) & 0x1;
                  break;
              default:
                  throw new IllegalArgumentException('Invalid mask pattern: ' + maskPattern);
          }
          return intermediate === 0;
      };
      MaskUtil.applyMaskPenaltyRule1Internal = function (matrix, isHorizontal) {
          var penalty = 0;
          var iLimit = isHorizontal ? matrix.getHeight() : matrix.getWidth();
          var jLimit = isHorizontal ? matrix.getWidth() : matrix.getHeight();
          var array = matrix.getArray();
          for (var i = 0; i < iLimit; i++) {
              var numSameBitCells = 0;
              var prevBit = -1;
              for (var j = 0; j < jLimit; j++) {
                  var bit = isHorizontal ? array[i][j] : array[j][i];
                  if (bit === prevBit) {
                      numSameBitCells++;
                  }
                  else {
                      if (numSameBitCells >= 5) {
                          penalty += MaskUtil.N1 + (numSameBitCells - 5);
                      }
                      numSameBitCells = 1;
                      prevBit = bit;
                  }
              }
              if (numSameBitCells >= 5) {
                  penalty += MaskUtil.N1 + (numSameBitCells - 5);
              }
          }
          return penalty;
      };
      MaskUtil.N1 = 3;
      MaskUtil.N2 = 3;
      MaskUtil.N3 = 40;
      MaskUtil.N4 = 10;
      return MaskUtil;
  }());

  var __values$2 = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var ByteMatrix =  (function () {
      function ByteMatrix(width , height ) {
          this.width = width;
          this.height = height;
          var bytes = new Array(height);
          for (var i = 0; i !== height; i++) {
              bytes[i] = new Uint8Array(width);
          }
          this.bytes = bytes;
      }
      ByteMatrix.prototype.getHeight = function () {
          return this.height;
      };
      ByteMatrix.prototype.getWidth = function () {
          return this.width;
      };
      ByteMatrix.prototype.get = function (x , y ) {
          return this.bytes[y][x];
      };
      ByteMatrix.prototype.getArray = function () {
          return this.bytes;
      };
      ByteMatrix.prototype.setNumber = function (x , y , value ) {
          this.bytes[y][x] = value;
      };
      ByteMatrix.prototype.setBoolean = function (x , y , value) {
          this.bytes[y][x] =  (value ? 1 : 0);
      };
      ByteMatrix.prototype.clear = function (value ) {
          var e_1, _a;
          try {
              for (var _b = __values$2(this.bytes), _c = _b.next(); !_c.done; _c = _b.next()) {
                  var aByte = _c.value;
                  Arrays.fill(aByte, value);
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              }
              finally { if (e_1) throw e_1.error; }
          }
      };
      ByteMatrix.prototype.equals = function (o) {
          if (!(o instanceof ByteMatrix)) {
              return false;
          }
          var other = o;
          if (this.width !== other.width) {
              return false;
          }
          if (this.height !== other.height) {
              return false;
          }
          for (var y = 0, height = this.height; y < height; ++y) {
              var bytesY = this.bytes[y];
              var otherBytesY = other.bytes[y];
              for (var x = 0, width = this.width; x < width; ++x) {
                  if (bytesY[x] !== otherBytesY[x]) {
                      return false;
                  }
              }
          }
          return true;
      };
      ByteMatrix.prototype.toString = function () {
          var result = new StringBuilder();
          for (var y = 0, height = this.height; y < height; ++y) {
              var bytesY = this.bytes[y];
              for (var x = 0, width = this.width; x < width; ++x) {
                  switch (bytesY[x]) {
                      case 0:
                          result.append(' 0');
                          break;
                      case 1:
                          result.append(' 1');
                          break;
                      default:
                          result.append('  ');
                          break;
                  }
              }
              result.append('\n');
          }
          return result.toString();
      };
      return ByteMatrix;
  }());

  var QRCode =  (function () {
      function QRCode() {
          this.maskPattern = -1;
      }
      QRCode.prototype.getMode = function () {
          return this.mode;
      };
      QRCode.prototype.getECLevel = function () {
          return this.ecLevel;
      };
      QRCode.prototype.getVersion = function () {
          return this.version;
      };
      QRCode.prototype.getMaskPattern = function () {
          return this.maskPattern;
      };
      QRCode.prototype.getMatrix = function () {
          return this.matrix;
      };
      QRCode.prototype.toString = function () {
          var result = new StringBuilder();
          result.append('<<\n');
          result.append(' mode: ');
          result.append(this.mode ? this.mode.toString() : 'null');
          result.append('\n ecLevel: ');
          result.append(this.ecLevel ? this.ecLevel.toString() : 'null');
          result.append('\n version: ');
          result.append(this.version ? this.version.toString() : 'null');
          result.append('\n maskPattern: ');
          result.append(this.maskPattern.toString());
          if (this.matrix) {
              result.append('\n matrix:\n');
              result.append(this.matrix.toString());
          }
          else {
              result.append('\n matrix: null\n');
          }
          result.append('>>\n');
          return result.toString();
      };
      QRCode.prototype.setMode = function (value) {
          this.mode = value;
      };
      QRCode.prototype.setECLevel = function (value) {
          this.ecLevel = value;
      };
      QRCode.prototype.setVersion = function (version) {
          this.version = version;
      };
      QRCode.prototype.setMaskPattern = function (value ) {
          this.maskPattern = value;
      };
      QRCode.prototype.setMatrix = function (value) {
          this.matrix = value;
      };
      QRCode.isValidMaskPattern = function (maskPattern ) {
          return maskPattern >= 0 && maskPattern < QRCode.NUM_MASK_PATTERNS;
      };
      QRCode.NUM_MASK_PATTERNS = 8;
      return QRCode;
  }());

  var __extends$5 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var WriterException =  (function (_super) {
      __extends$5(WriterException, _super);
      function WriterException() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      WriterException.kind = 'WriterException';
      return WriterException;
  }(Exception));

  var MatrixUtil =  (function () {
      function MatrixUtil() {
      }
      MatrixUtil.clearMatrix = function (matrix) {
          matrix.clear(  255);
      };
      MatrixUtil.buildMatrix = function (dataBits, ecLevel, version, maskPattern , matrix) {
          MatrixUtil.clearMatrix(matrix);
          MatrixUtil.embedBasicPatterns(version, matrix);
          MatrixUtil.embedTypeInfo(ecLevel, maskPattern, matrix);
          MatrixUtil.maybeEmbedVersionInfo(version, matrix);
          MatrixUtil.embedDataBits(dataBits, maskPattern, matrix);
      };
      MatrixUtil.embedBasicPatterns = function (version, matrix) {
          MatrixUtil.embedPositionDetectionPatternsAndSeparators(matrix);
          MatrixUtil.embedDarkDotAtLeftBottomCorner(matrix);
          MatrixUtil.maybeEmbedPositionAdjustmentPatterns(version, matrix);
          MatrixUtil.embedTimingPatterns(matrix);
      };
      MatrixUtil.embedTypeInfo = function (ecLevel, maskPattern , matrix) {
          var typeInfoBits = new BitArray();
          MatrixUtil.makeTypeInfoBits(ecLevel, maskPattern, typeInfoBits);
          for (var i = 0, size = typeInfoBits.getSize(); i < size; ++i) {
              var bit = typeInfoBits.get(typeInfoBits.getSize() - 1 - i);
              var coordinates = MatrixUtil.TYPE_INFO_COORDINATES[i];
              var x1 = coordinates[0];
              var y1 = coordinates[1];
              matrix.setBoolean(x1, y1, bit);
              if (i < 8) {
                  var x2 = matrix.getWidth() - i - 1;
                  var y2 = 8;
                  matrix.setBoolean(x2, y2, bit);
              }
              else {
                  var x2 = 8;
                  var y2 = matrix.getHeight() - 7 + (i - 8);
                  matrix.setBoolean(x2, y2, bit);
              }
          }
      };
      MatrixUtil.maybeEmbedVersionInfo = function (version, matrix) {
          if (version.getVersionNumber() < 7) {
              return;
          }
          var versionInfoBits = new BitArray();
          MatrixUtil.makeVersionInfoBits(version, versionInfoBits);
          var bitIndex = 6 * 3 - 1;
          for (var i = 0; i < 6; ++i) {
              for (var j = 0; j < 3; ++j) {
                  var bit = versionInfoBits.get(bitIndex);
                  bitIndex--;
                  matrix.setBoolean(i, matrix.getHeight() - 11 + j, bit);
                  matrix.setBoolean(matrix.getHeight() - 11 + j, i, bit);
              }
          }
      };
      MatrixUtil.embedDataBits = function (dataBits, maskPattern , matrix) {
          var bitIndex = 0;
          var direction = -1;
          var x = matrix.getWidth() - 1;
          var y = matrix.getHeight() - 1;
          while (x > 0) {
              if (x === 6) {
                  x -= 1;
              }
              while (y >= 0 && y < matrix.getHeight()) {
                  for (var i = 0; i < 2; ++i) {
                      var xx = x - i;
                      if (!MatrixUtil.isEmpty(matrix.get(xx, y))) {
                          continue;
                      }
                      var bit = void 0;
                      if (bitIndex < dataBits.getSize()) {
                          bit = dataBits.get(bitIndex);
                          ++bitIndex;
                      }
                      else {
                          bit = false;
                      }
                      if (maskPattern !== 255 && MaskUtil.getDataMaskBit(maskPattern, xx, y)) {
                          bit = !bit;
                      }
                      matrix.setBoolean(xx, y, bit);
                  }
                  y += direction;
              }
              direction = -direction;
              y += direction;
              x -= 2;
          }
          if (bitIndex !== dataBits.getSize()) {
              throw new WriterException('Not all bits consumed: ' + bitIndex + '/' + dataBits.getSize());
          }
      };
      MatrixUtil.findMSBSet = function (value ) {
          return 32 - Integer.numberOfLeadingZeros(value);
      };
      MatrixUtil.calculateBCHCode = function (value , poly ) {
          if (poly === 0) {
              throw new IllegalArgumentException('0 polynomial');
          }
          var msbSetInPoly = MatrixUtil.findMSBSet(poly);
          value <<= msbSetInPoly - 1;
          while (MatrixUtil.findMSBSet(value) >= msbSetInPoly) {
              value ^= poly << (MatrixUtil.findMSBSet(value) - msbSetInPoly);
          }
          return value;
      };
      MatrixUtil.makeTypeInfoBits = function (ecLevel, maskPattern , bits) {
          if (!QRCode.isValidMaskPattern(maskPattern)) {
              throw new WriterException('Invalid mask pattern');
          }
          var typeInfo = (ecLevel.getBits() << 3) | maskPattern;
          bits.appendBits(typeInfo, 5);
          var bchCode = MatrixUtil.calculateBCHCode(typeInfo, MatrixUtil.TYPE_INFO_POLY);
          bits.appendBits(bchCode, 10);
          var maskBits = new BitArray();
          maskBits.appendBits(MatrixUtil.TYPE_INFO_MASK_PATTERN, 15);
          bits.xor(maskBits);
          if (bits.getSize() !== 15) {
              throw new WriterException('should not happen but we got: ' + bits.getSize());
          }
      };
      MatrixUtil.makeVersionInfoBits = function (version, bits) {
          bits.appendBits(version.getVersionNumber(), 6);
          var bchCode = MatrixUtil.calculateBCHCode(version.getVersionNumber(), MatrixUtil.VERSION_INFO_POLY);
          bits.appendBits(bchCode, 12);
          if (bits.getSize() !== 18) {
              throw new WriterException('should not happen but we got: ' + bits.getSize());
          }
      };
      MatrixUtil.isEmpty = function (value ) {
          return value === 255;
      };
      MatrixUtil.embedTimingPatterns = function (matrix) {
          for (var i = 8; i < matrix.getWidth() - 8; ++i) {
              var bit = (i + 1) % 2;
              if (MatrixUtil.isEmpty(matrix.get(i, 6))) {
                  matrix.setNumber(i, 6, bit);
              }
              if (MatrixUtil.isEmpty(matrix.get(6, i))) {
                  matrix.setNumber(6, i, bit);
              }
          }
      };
      MatrixUtil.embedDarkDotAtLeftBottomCorner = function (matrix) {
          if (matrix.get(8, matrix.getHeight() - 8) === 0) {
              throw new WriterException();
          }
          matrix.setNumber(8, matrix.getHeight() - 8, 1);
      };
      MatrixUtil.embedHorizontalSeparationPattern = function (xStart , yStart , matrix) {
          for (var x = 0; x < 8; ++x) {
              if (!MatrixUtil.isEmpty(matrix.get(xStart + x, yStart))) {
                  throw new WriterException();
              }
              matrix.setNumber(xStart + x, yStart, 0);
          }
      };
      MatrixUtil.embedVerticalSeparationPattern = function (xStart , yStart , matrix) {
          for (var y = 0; y < 7; ++y) {
              if (!MatrixUtil.isEmpty(matrix.get(xStart, yStart + y))) {
                  throw new WriterException();
              }
              matrix.setNumber(xStart, yStart + y, 0);
          }
      };
      MatrixUtil.embedPositionAdjustmentPattern = function (xStart , yStart , matrix) {
          for (var y = 0; y < 5; ++y) {
              var patternY = MatrixUtil.POSITION_ADJUSTMENT_PATTERN[y];
              for (var x = 0; x < 5; ++x) {
                  matrix.setNumber(xStart + x, yStart + y, patternY[x]);
              }
          }
      };
      MatrixUtil.embedPositionDetectionPattern = function (xStart , yStart , matrix) {
          for (var y = 0; y < 7; ++y) {
              var patternY = MatrixUtil.POSITION_DETECTION_PATTERN[y];
              for (var x = 0; x < 7; ++x) {
                  matrix.setNumber(xStart + x, yStart + y, patternY[x]);
              }
          }
      };
      MatrixUtil.embedPositionDetectionPatternsAndSeparators = function (matrix) {
          var pdpWidth = MatrixUtil.POSITION_DETECTION_PATTERN[0].length;
          MatrixUtil.embedPositionDetectionPattern(0, 0, matrix);
          MatrixUtil.embedPositionDetectionPattern(matrix.getWidth() - pdpWidth, 0, matrix);
          MatrixUtil.embedPositionDetectionPattern(0, matrix.getWidth() - pdpWidth, matrix);
          var hspWidth = 8;
          MatrixUtil.embedHorizontalSeparationPattern(0, hspWidth - 1, matrix);
          MatrixUtil.embedHorizontalSeparationPattern(matrix.getWidth() - hspWidth, hspWidth - 1, matrix);
          MatrixUtil.embedHorizontalSeparationPattern(0, matrix.getWidth() - hspWidth, matrix);
          var vspSize = 7;
          MatrixUtil.embedVerticalSeparationPattern(vspSize, 0, matrix);
          MatrixUtil.embedVerticalSeparationPattern(matrix.getHeight() - vspSize - 1, 0, matrix);
          MatrixUtil.embedVerticalSeparationPattern(vspSize, matrix.getHeight() - vspSize, matrix);
      };
      MatrixUtil.maybeEmbedPositionAdjustmentPatterns = function (version, matrix) {
          if (version.getVersionNumber() < 2) {
              return;
          }
          var index = version.getVersionNumber() - 1;
          var coordinates = MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index];
          for (var i = 0, length_1 = coordinates.length; i !== length_1; i++) {
              var y = coordinates[i];
              if (y >= 0) {
                  for (var j = 0; j !== length_1; j++) {
                      var x = coordinates[j];
                      if (x >= 0 && MatrixUtil.isEmpty(matrix.get(x, y))) {
                          MatrixUtil.embedPositionAdjustmentPattern(x - 2, y - 2, matrix);
                      }
                  }
              }
          }
      };
      MatrixUtil.POSITION_DETECTION_PATTERN = Array.from([
          Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
          Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
          Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
          Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
      ]);
      MatrixUtil.POSITION_ADJUSTMENT_PATTERN = Array.from([
          Int32Array.from([1, 1, 1, 1, 1]),
          Int32Array.from([1, 0, 0, 0, 1]),
          Int32Array.from([1, 0, 1, 0, 1]),
          Int32Array.from([1, 0, 0, 0, 1]),
          Int32Array.from([1, 1, 1, 1, 1]),
      ]);
      MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
          Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
          Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
          Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
          Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
          Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
          Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
          Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
          Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
          Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
          Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
          Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
          Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
          Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
          Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
          Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
          Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
          Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
          Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
          Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
          Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
          Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
          Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
          Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
          Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
          Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
          Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
          Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
          Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
          Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
          Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
          Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
          Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
          Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
          Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
          Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
      ]);
      MatrixUtil.TYPE_INFO_COORDINATES = Array.from([
          Int32Array.from([8, 0]),
          Int32Array.from([8, 1]),
          Int32Array.from([8, 2]),
          Int32Array.from([8, 3]),
          Int32Array.from([8, 4]),
          Int32Array.from([8, 5]),
          Int32Array.from([8, 7]),
          Int32Array.from([8, 8]),
          Int32Array.from([7, 8]),
          Int32Array.from([5, 8]),
          Int32Array.from([4, 8]),
          Int32Array.from([3, 8]),
          Int32Array.from([2, 8]),
          Int32Array.from([1, 8]),
          Int32Array.from([0, 8]),
      ]);
      MatrixUtil.VERSION_INFO_POLY = 0x1f25;
      MatrixUtil.TYPE_INFO_POLY = 0x537;
      MatrixUtil.TYPE_INFO_MASK_PATTERN = 0x5412;
      return MatrixUtil;
  }());

  var BlockPair =  (function () {
      function BlockPair(dataBytes, errorCorrectionBytes) {
          this.dataBytes = dataBytes;
          this.errorCorrectionBytes = errorCorrectionBytes;
      }
      BlockPair.prototype.getDataBytes = function () {
          return this.dataBytes;
      };
      BlockPair.prototype.getErrorCorrectionBytes = function () {
          return this.errorCorrectionBytes;
      };
      return BlockPair;
  }());

  var __values$1 = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  ((function () {
      function Encoder() {
      }
      Encoder.calculateMaskPenalty = function (matrix) {
          return MaskUtil.applyMaskPenaltyRule1(matrix)
              + MaskUtil.applyMaskPenaltyRule2(matrix)
              + MaskUtil.applyMaskPenaltyRule3(matrix)
              + MaskUtil.applyMaskPenaltyRule4(matrix);
      };
      Encoder.encode = function (content, ecLevel, hints) {
          if (hints === void 0) { hints = null; }
          var encoding = Encoder.DEFAULT_BYTE_MODE_ENCODING;
          var hasEncodingHint = hints !== null && undefined !== hints.get(EncodeHintType$1.CHARACTER_SET);
          if (hasEncodingHint) {
              encoding = hints.get(EncodeHintType$1.CHARACTER_SET).toString();
          }
          var mode = this.chooseMode(content, encoding);
          var headerBits = new BitArray();
          if (mode === Mode$1.BYTE && (hasEncodingHint || Encoder.DEFAULT_BYTE_MODE_ENCODING !== encoding)) {
              var eci = CharacterSetECI.getCharacterSetECIByName(encoding);
              if (eci !== undefined) {
                  this.appendECI(eci, headerBits);
              }
          }
          this.appendModeInfo(mode, headerBits);
          var dataBits = new BitArray();
          this.appendBytes(content, mode, dataBits, encoding);
          var version;
          if (hints !== null && undefined !== hints.get(EncodeHintType$1.QR_VERSION)) {
              var versionNumber = Number.parseInt(hints.get(EncodeHintType$1.QR_VERSION).toString(), 10);
              version = Version.getVersionForNumber(versionNumber);
              var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, version);
              if (!this.willFit(bitsNeeded, version, ecLevel)) {
                  throw new WriterException('Data too big for requested version');
              }
          }
          else {
              version = this.recommendVersion(ecLevel, mode, headerBits, dataBits);
          }
          var headerAndDataBits = new BitArray();
          headerAndDataBits.appendBitArray(headerBits);
          var numLetters = mode === Mode$1.BYTE ? dataBits.getSizeInBytes() : content.length;
          this.appendLengthInfo(numLetters, version, mode, headerAndDataBits);
          headerAndDataBits.appendBitArray(dataBits);
          var ecBlocks = version.getECBlocksForLevel(ecLevel);
          var numDataBytes = version.getTotalCodewords() - ecBlocks.getTotalECCodewords();
          this.terminateBits(numDataBytes, headerAndDataBits);
          var finalBits = this.interleaveWithECBytes(headerAndDataBits, version.getTotalCodewords(), numDataBytes, ecBlocks.getNumBlocks());
          var qrCode = new QRCode();
          qrCode.setECLevel(ecLevel);
          qrCode.setMode(mode);
          qrCode.setVersion(version);
          var dimension = version.getDimensionForVersion();
          var matrix = new ByteMatrix(dimension, dimension);
          var maskPattern = this.chooseMaskPattern(finalBits, ecLevel, version, matrix);
          qrCode.setMaskPattern(maskPattern);
          MatrixUtil.buildMatrix(finalBits, ecLevel, version, maskPattern, matrix);
          qrCode.setMatrix(matrix);
          return qrCode;
      };
      Encoder.recommendVersion = function (ecLevel, mode, headerBits, dataBits) {
          var provisionalBitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, Version.getVersionForNumber(1));
          var provisionalVersion = this.chooseVersion(provisionalBitsNeeded, ecLevel);
          var bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, provisionalVersion);
          return this.chooseVersion(bitsNeeded, ecLevel);
      };
      Encoder.calculateBitsNeeded = function (mode, headerBits, dataBits, version) {
          return headerBits.getSize() + mode.getCharacterCountBits(version) + dataBits.getSize();
      };
      Encoder.getAlphanumericCode = function (code ) {
          if (code < Encoder.ALPHANUMERIC_TABLE.length) {
              return Encoder.ALPHANUMERIC_TABLE[code];
          }
          return -1;
      };
      Encoder.chooseMode = function (content, encoding) {
          if (encoding === void 0) { encoding = null; }
          if (CharacterSetECI.SJIS.getName() === encoding && this.isOnlyDoubleByteKanji(content)) {
              return Mode$1.KANJI;
          }
          var hasNumeric = false;
          var hasAlphanumeric = false;
          for (var i = 0, length_1 = content.length; i < length_1; ++i) {
              var c = content.charAt(i);
              if (Encoder.isDigit(c)) {
                  hasNumeric = true;
              }
              else if (this.getAlphanumericCode(c.charCodeAt(0)) !== -1) {
                  hasAlphanumeric = true;
              }
              else {
                  return Mode$1.BYTE;
              }
          }
          if (hasAlphanumeric) {
              return Mode$1.ALPHANUMERIC;
          }
          if (hasNumeric) {
              return Mode$1.NUMERIC;
          }
          return Mode$1.BYTE;
      };
      Encoder.isOnlyDoubleByteKanji = function (content) {
          var bytes;
          try {
              bytes = StringEncoding.encode(content, CharacterSetECI.SJIS);
          }
          catch (ignored ) {
              return false;
          }
          var length = bytes.length;
          if (length % 2 !== 0) {
              return false;
          }
          for (var i = 0; i < length; i += 2) {
              var byte1 = bytes[i] & 0xFF;
              if ((byte1 < 0x81 || byte1 > 0x9F) && (byte1 < 0xE0 || byte1 > 0xEB)) {
                  return false;
              }
          }
          return true;
      };
      Encoder.chooseMaskPattern = function (bits, ecLevel, version, matrix) {
          var minPenalty = Number.MAX_SAFE_INTEGER;
          var bestMaskPattern = -1;
          for (var maskPattern = 0; maskPattern < QRCode.NUM_MASK_PATTERNS; maskPattern++) {
              MatrixUtil.buildMatrix(bits, ecLevel, version, maskPattern, matrix);
              var penalty = this.calculateMaskPenalty(matrix);
              if (penalty < minPenalty) {
                  minPenalty = penalty;
                  bestMaskPattern = maskPattern;
              }
          }
          return bestMaskPattern;
      };
      Encoder.chooseVersion = function (numInputBits , ecLevel) {
          for (var versionNum = 1; versionNum <= 40; versionNum++) {
              var version = Version.getVersionForNumber(versionNum);
              if (Encoder.willFit(numInputBits, version, ecLevel)) {
                  return version;
              }
          }
          throw new WriterException('Data too big');
      };
      Encoder.willFit = function (numInputBits , version, ecLevel) {
          var numBytes = version.getTotalCodewords();
          var ecBlocks = version.getECBlocksForLevel(ecLevel);
          var numEcBytes = ecBlocks.getTotalECCodewords();
          var numDataBytes = numBytes - numEcBytes;
          var totalInputBytes = (numInputBits + 7) / 8;
          return numDataBytes >= totalInputBytes;
      };
      Encoder.terminateBits = function (numDataBytes , bits) {
          var capacity = numDataBytes * 8;
          if (bits.getSize() > capacity) {
              throw new WriterException('data bits cannot fit in the QR Code' + bits.getSize() + ' > ' +
                  capacity);
          }
          for (var i = 0; i < 4 && bits.getSize() < capacity; ++i) {
              bits.appendBit(false);
          }
          var numBitsInLastByte = bits.getSize() & 0x07;
          if (numBitsInLastByte > 0) {
              for (var i = numBitsInLastByte; i < 8; i++) {
                  bits.appendBit(false);
              }
          }
          var numPaddingBytes = numDataBytes - bits.getSizeInBytes();
          for (var i = 0; i < numPaddingBytes; ++i) {
              bits.appendBits((i & 0x01) === 0 ? 0xEC : 0x11, 8);
          }
          if (bits.getSize() !== capacity) {
              throw new WriterException('Bits size does not equal capacity');
          }
      };
      Encoder.getNumDataBytesAndNumECBytesForBlockID = function (numTotalBytes , numDataBytes , numRSBlocks , blockID , numDataBytesInBlock, numECBytesInBlock) {
          if (blockID >= numRSBlocks) {
              throw new WriterException('Block ID too large');
          }
          var numRsBlocksInGroup2 = numTotalBytes % numRSBlocks;
          var numRsBlocksInGroup1 = numRSBlocks - numRsBlocksInGroup2;
          var numTotalBytesInGroup1 = Math.floor(numTotalBytes / numRSBlocks);
          var numTotalBytesInGroup2 = numTotalBytesInGroup1 + 1;
          var numDataBytesInGroup1 = Math.floor(numDataBytes / numRSBlocks);
          var numDataBytesInGroup2 = numDataBytesInGroup1 + 1;
          var numEcBytesInGroup1 = numTotalBytesInGroup1 - numDataBytesInGroup1;
          var numEcBytesInGroup2 = numTotalBytesInGroup2 - numDataBytesInGroup2;
          if (numEcBytesInGroup1 !== numEcBytesInGroup2) {
              throw new WriterException('EC bytes mismatch');
          }
          if (numRSBlocks !== numRsBlocksInGroup1 + numRsBlocksInGroup2) {
              throw new WriterException('RS blocks mismatch');
          }
          if (numTotalBytes !==
              ((numDataBytesInGroup1 + numEcBytesInGroup1) *
                  numRsBlocksInGroup1) +
                  ((numDataBytesInGroup2 + numEcBytesInGroup2) *
                      numRsBlocksInGroup2)) {
              throw new WriterException('Total bytes mismatch');
          }
          if (blockID < numRsBlocksInGroup1) {
              numDataBytesInBlock[0] = numDataBytesInGroup1;
              numECBytesInBlock[0] = numEcBytesInGroup1;
          }
          else {
              numDataBytesInBlock[0] = numDataBytesInGroup2;
              numECBytesInBlock[0] = numEcBytesInGroup2;
          }
      };
      Encoder.interleaveWithECBytes = function (bits, numTotalBytes , numDataBytes , numRSBlocks ) {
          var e_1, _a, e_2, _b;
          if (bits.getSizeInBytes() !== numDataBytes) {
              throw new WriterException('Number of bits and data bytes does not match');
          }
          var dataBytesOffset = 0;
          var maxNumDataBytes = 0;
          var maxNumEcBytes = 0;
          var blocks = new Array();
          for (var i = 0; i < numRSBlocks; ++i) {
              var numDataBytesInBlock = new Int32Array(1);
              var numEcBytesInBlock = new Int32Array(1);
              Encoder.getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, i, numDataBytesInBlock, numEcBytesInBlock);
              var size = numDataBytesInBlock[0];
              var dataBytes = new Uint8Array(size);
              bits.toBytes(8 * dataBytesOffset, dataBytes, 0, size);
              var ecBytes = Encoder.generateECBytes(dataBytes, numEcBytesInBlock[0]);
              blocks.push(new BlockPair(dataBytes, ecBytes));
              maxNumDataBytes = Math.max(maxNumDataBytes, size);
              maxNumEcBytes = Math.max(maxNumEcBytes, ecBytes.length);
              dataBytesOffset += numDataBytesInBlock[0];
          }
          if (numDataBytes !== dataBytesOffset) {
              throw new WriterException('Data bytes does not match offset');
          }
          var result = new BitArray();
          for (var i = 0; i < maxNumDataBytes; ++i) {
              try {
                  for (var blocks_1 = (e_1 = void 0, __values$1(blocks)), blocks_1_1 = blocks_1.next(); !blocks_1_1.done; blocks_1_1 = blocks_1.next()) {
                      var block = blocks_1_1.value;
                      var dataBytes = block.getDataBytes();
                      if (i < dataBytes.length) {
                          result.appendBits(dataBytes[i], 8);
                      }
                  }
              }
              catch (e_1_1) { e_1 = { error: e_1_1 }; }
              finally {
                  try {
                      if (blocks_1_1 && !blocks_1_1.done && (_a = blocks_1.return)) _a.call(blocks_1);
                  }
                  finally { if (e_1) throw e_1.error; }
              }
          }
          for (var i = 0; i < maxNumEcBytes; ++i) {
              try {
                  for (var blocks_2 = (e_2 = void 0, __values$1(blocks)), blocks_2_1 = blocks_2.next(); !blocks_2_1.done; blocks_2_1 = blocks_2.next()) {
                      var block = blocks_2_1.value;
                      var ecBytes = block.getErrorCorrectionBytes();
                      if (i < ecBytes.length) {
                          result.appendBits(ecBytes[i], 8);
                      }
                  }
              }
              catch (e_2_1) { e_2 = { error: e_2_1 }; }
              finally {
                  try {
                      if (blocks_2_1 && !blocks_2_1.done && (_b = blocks_2.return)) _b.call(blocks_2);
                  }
                  finally { if (e_2) throw e_2.error; }
              }
          }
          if (numTotalBytes !== result.getSizeInBytes()) {
              throw new WriterException('Interleaving error: ' + numTotalBytes + ' and ' +
                  result.getSizeInBytes() + ' differ.');
          }
          return result;
      };
      Encoder.generateECBytes = function (dataBytes, numEcBytesInBlock ) {
          var numDataBytes = dataBytes.length;
          var toEncode = new Int32Array(numDataBytes + numEcBytesInBlock);
          for (var i = 0; i < numDataBytes; i++) {
              toEncode[i] = dataBytes[i] & 0xFF;
          }
          new ReedSolomonEncoder(GenericGF.QR_CODE_FIELD_256).encode(toEncode, numEcBytesInBlock);
          var ecBytes = new Uint8Array(numEcBytesInBlock);
          for (var i = 0; i < numEcBytesInBlock; i++) {
              ecBytes[i] =  toEncode[numDataBytes + i];
          }
          return ecBytes;
      };
      Encoder.appendModeInfo = function (mode, bits) {
          bits.appendBits(mode.getBits(), 4);
      };
      Encoder.appendLengthInfo = function (numLetters , version, mode, bits) {
          var numBits = mode.getCharacterCountBits(version);
          if (numLetters >= (1 << numBits)) {
              throw new WriterException(numLetters + ' is bigger than ' + ((1 << numBits) - 1));
          }
          bits.appendBits(numLetters, numBits);
      };
      Encoder.appendBytes = function (content, mode, bits, encoding) {
          switch (mode) {
              case Mode$1.NUMERIC:
                  Encoder.appendNumericBytes(content, bits);
                  break;
              case Mode$1.ALPHANUMERIC:
                  Encoder.appendAlphanumericBytes(content, bits);
                  break;
              case Mode$1.BYTE:
                  Encoder.append8BitBytes(content, bits, encoding);
                  break;
              case Mode$1.KANJI:
                  Encoder.appendKanjiBytes(content, bits);
                  break;
              default:
                  throw new WriterException('Invalid mode: ' + mode);
          }
      };
      Encoder.getDigit = function (singleCharacter) {
          return singleCharacter.charCodeAt(0) - 48;
      };
      Encoder.isDigit = function (singleCharacter) {
          var cn = Encoder.getDigit(singleCharacter);
          return cn >= 0 && cn <= 9;
      };
      Encoder.appendNumericBytes = function (content, bits) {
          var length = content.length;
          var i = 0;
          while (i < length) {
              var num1 = Encoder.getDigit(content.charAt(i));
              if (i + 2 < length) {
                  var num2 = Encoder.getDigit(content.charAt(i + 1));
                  var num3 = Encoder.getDigit(content.charAt(i + 2));
                  bits.appendBits(num1 * 100 + num2 * 10 + num3, 10);
                  i += 3;
              }
              else if (i + 1 < length) {
                  var num2 = Encoder.getDigit(content.charAt(i + 1));
                  bits.appendBits(num1 * 10 + num2, 7);
                  i += 2;
              }
              else {
                  bits.appendBits(num1, 4);
                  i++;
              }
          }
      };
      Encoder.appendAlphanumericBytes = function (content, bits) {
          var length = content.length;
          var i = 0;
          while (i < length) {
              var code1 = Encoder.getAlphanumericCode(content.charCodeAt(i));
              if (code1 === -1) {
                  throw new WriterException();
              }
              if (i + 1 < length) {
                  var code2 = Encoder.getAlphanumericCode(content.charCodeAt(i + 1));
                  if (code2 === -1) {
                      throw new WriterException();
                  }
                  bits.appendBits(code1 * 45 + code2, 11);
                  i += 2;
              }
              else {
                  bits.appendBits(code1, 6);
                  i++;
              }
          }
      };
      Encoder.append8BitBytes = function (content, bits, encoding) {
          var bytes;
          try {
              bytes = StringEncoding.encode(content, encoding);
          }
          catch (uee ) {
              throw new WriterException(uee);
          }
          for (var i = 0, length_2 = bytes.length; i !== length_2; i++) {
              var b = bytes[i];
              bits.appendBits(b, 8);
          }
      };
      Encoder.appendKanjiBytes = function (content, bits) {
          var bytes;
          try {
              bytes = StringEncoding.encode(content, CharacterSetECI.SJIS);
          }
          catch (uee ) {
              throw new WriterException(uee);
          }
          var length = bytes.length;
          for (var i = 0; i < length; i += 2) {
              var byte1 = bytes[i] & 0xFF;
              var byte2 = bytes[i + 1] & 0xFF;
              var code = ((byte1 << 8) & 0xFFFFFFFF) | byte2;
              var subtracted = -1;
              if (code >= 0x8140 && code <= 0x9ffc) {
                  subtracted = code - 0x8140;
              }
              else if (code >= 0xe040 && code <= 0xebbf) {
                  subtracted = code - 0xc140;
              }
              if (subtracted === -1) {
                  throw new WriterException('Invalid byte sequence');
              }
              var encoded = ((subtracted >> 8) * 0xc0) + (subtracted & 0xff);
              bits.appendBits(encoded, 13);
          }
      };
      Encoder.appendECI = function (eci, bits) {
          bits.appendBits(Mode$1.ECI.getBits(), 4);
          bits.appendBits(eci.getValue(), 8);
      };
      Encoder.ALPHANUMERIC_TABLE = Int32Array.from([
          -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
          -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
          36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43,
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1,
          -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1,
      ]);
      Encoder.DEFAULT_BYTE_MODE_ENCODING = CharacterSetECI.UTF8.getName();
      return Encoder;
  })());

  var __extends$4 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  ((function (_super) {
      __extends$4(PlanarYUVLuminanceSource, _super);
      function PlanarYUVLuminanceSource(yuvData, dataWidth , dataHeight , left , top , width , height , reverseHorizontal) {
          var _this = _super.call(this, width, height) || this;
          _this.yuvData = yuvData;
          _this.dataWidth = dataWidth;
          _this.dataHeight = dataHeight;
          _this.left = left;
          _this.top = top;
          if (left + width > dataWidth || top + height > dataHeight) {
              throw new IllegalArgumentException('Crop rectangle does not fit within image data.');
          }
          if (reverseHorizontal) {
              _this.reverseHorizontal(width, height);
          }
          return _this;
      }
      PlanarYUVLuminanceSource.prototype.getRow = function (y , row) {
          if (y < 0 || y >= this.getHeight()) {
              throw new IllegalArgumentException('Requested row is outside the image: ' + y);
          }
          var width = this.getWidth();
          if (row === null || row === undefined || row.length < width) {
              row = new Uint8ClampedArray(width);
          }
          var offset = (y + this.top) * this.dataWidth + this.left;
          System.arraycopy(this.yuvData, offset, row, 0, width);
          return row;
      };
      PlanarYUVLuminanceSource.prototype.getMatrix = function () {
          var width = this.getWidth();
          var height = this.getHeight();
          if (width === this.dataWidth && height === this.dataHeight) {
              return this.yuvData;
          }
          var area = width * height;
          var matrix = new Uint8ClampedArray(area);
          var inputOffset = this.top * this.dataWidth + this.left;
          if (width === this.dataWidth) {
              System.arraycopy(this.yuvData, inputOffset, matrix, 0, area);
              return matrix;
          }
          for (var y = 0; y < height; y++) {
              var outputOffset = y * width;
              System.arraycopy(this.yuvData, inputOffset, matrix, outputOffset, width);
              inputOffset += this.dataWidth;
          }
          return matrix;
      };
      PlanarYUVLuminanceSource.prototype.isCropSupported = function () {
          return true;
      };
      PlanarYUVLuminanceSource.prototype.crop = function (left , top , width , height ) {
          return new PlanarYUVLuminanceSource(this.yuvData, this.dataWidth, this.dataHeight, this.left + left, this.top + top, width, height, false);
      };
      PlanarYUVLuminanceSource.prototype.renderThumbnail = function () {
          var width = this.getWidth() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
          var height = this.getHeight() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
          var pixels = new Int32Array(width * height);
          var yuv = this.yuvData;
          var inputOffset = this.top * this.dataWidth + this.left;
          for (var y = 0; y < height; y++) {
              var outputOffset = y * width;
              for (var x = 0; x < width; x++) {
                  var grey = yuv[inputOffset + x * PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR] & 0xff;
                  pixels[outputOffset + x] = 0xFF000000 | (grey * 0x00010101);
              }
              inputOffset += this.dataWidth * PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
          }
          return pixels;
      };
      PlanarYUVLuminanceSource.prototype.getThumbnailWidth = function () {
          return this.getWidth() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
      };
      PlanarYUVLuminanceSource.prototype.getThumbnailHeight = function () {
          return this.getHeight() / PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;
      };
      PlanarYUVLuminanceSource.prototype.reverseHorizontal = function (width , height ) {
          var yuvData = this.yuvData;
          for (var y = 0, rowStart = this.top * this.dataWidth + this.left; y < height; y++, rowStart += this.dataWidth) {
              var middle = rowStart + width / 2;
              for (var x1 = rowStart, x2 = rowStart + width - 1; x1 < middle; x1++, x2--) {
                  var temp = yuvData[x1];
                  yuvData[x1] = yuvData[x2];
                  yuvData[x2] = temp;
              }
          }
      };
      PlanarYUVLuminanceSource.prototype.invert = function () {
          return new InvertedLuminanceSource(this);
      };
      PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR = 2;
      return PlanarYUVLuminanceSource;
  })(LuminanceSource));

  var __extends$3 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  ((function (_super) {
      __extends$3(RGBLuminanceSource, _super);
      function RGBLuminanceSource(luminances, width , height , dataWidth , dataHeight , left , top ) {
          var _this = _super.call(this, width, height) || this;
          _this.dataWidth = dataWidth;
          _this.dataHeight = dataHeight;
          _this.left = left;
          _this.top = top;
          if (luminances.BYTES_PER_ELEMENT === 4) {
              var size = width * height;
              var luminancesUint8Array = new Uint8ClampedArray(size);
              for (var offset = 0; offset < size; offset++) {
                  var pixel = luminances[offset];
                  var r = (pixel >> 16) & 0xff;
                  var g2 = (pixel >> 7) & 0x1fe;
                  var b = pixel & 0xff;
                  luminancesUint8Array[offset] =  ((r + g2 + b) / 4) & 0xFF;
              }
              _this.luminances = luminancesUint8Array;
          }
          else {
              _this.luminances = luminances;
          }
          if (undefined === dataWidth) {
              _this.dataWidth = width;
          }
          if (undefined === dataHeight) {
              _this.dataHeight = height;
          }
          if (undefined === left) {
              _this.left = 0;
          }
          if (undefined === top) {
              _this.top = 0;
          }
          if (_this.left + width > _this.dataWidth || _this.top + height > _this.dataHeight) {
              throw new IllegalArgumentException('Crop rectangle does not fit within image data.');
          }
          return _this;
      }
      RGBLuminanceSource.prototype.getRow = function (y , row) {
          if (y < 0 || y >= this.getHeight()) {
              throw new IllegalArgumentException('Requested row is outside the image: ' + y);
          }
          var width = this.getWidth();
          if (row === null || row === undefined || row.length < width) {
              row = new Uint8ClampedArray(width);
          }
          var offset = (y + this.top) * this.dataWidth + this.left;
          System.arraycopy(this.luminances, offset, row, 0, width);
          return row;
      };
      RGBLuminanceSource.prototype.getMatrix = function () {
          var width = this.getWidth();
          var height = this.getHeight();
          if (width === this.dataWidth && height === this.dataHeight) {
              return this.luminances;
          }
          var area = width * height;
          var matrix = new Uint8ClampedArray(area);
          var inputOffset = this.top * this.dataWidth + this.left;
          if (width === this.dataWidth) {
              System.arraycopy(this.luminances, inputOffset, matrix, 0, area);
              return matrix;
          }
          for (var y = 0; y < height; y++) {
              var outputOffset = y * width;
              System.arraycopy(this.luminances, inputOffset, matrix, outputOffset, width);
              inputOffset += this.dataWidth;
          }
          return matrix;
      };
      RGBLuminanceSource.prototype.isCropSupported = function () {
          return true;
      };
      RGBLuminanceSource.prototype.crop = function (left , top , width , height ) {
          return new RGBLuminanceSource(this.luminances, width, height, this.dataWidth, this.dataHeight, this.left + left, this.top + top);
      };
      RGBLuminanceSource.prototype.invert = function () {
          return new InvertedLuminanceSource(this);
      };
      return RGBLuminanceSource;
  })(LuminanceSource));

  var __extends$2 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  ((function (_super) {
      __extends$2(Charset, _super);
      function Charset() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      Charset.forName = function (name) {
          return this.getCharacterSetECIByName(name);
      };
      return Charset;
  })(CharacterSetECI));

  var Token =  (function () {
      function Token(previous) {
          this.previous = previous;
      }
      Token.prototype.getPrevious = function () {
          return this.previous;
      };
      return Token;
  }());

  var __extends$1 = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var SimpleToken =  (function (_super) {
      __extends$1(SimpleToken, _super);
      function SimpleToken(previous, value, bitCount) {
          var _this = _super.call(this, previous) || this;
          _this.value = value;
          _this.bitCount = bitCount;
          return _this;
      }
      SimpleToken.prototype.appendTo = function (bitArray, text) {
          bitArray.appendBits(this.value, this.bitCount);
      };
      SimpleToken.prototype.add = function (value, bitCount) {
          return new SimpleToken(this, value, bitCount);
      };
      SimpleToken.prototype.addBinaryShift = function (start, byteCount) {
          console.warn('addBinaryShift on SimpleToken, this simply returns a copy of this token');
          return new SimpleToken(this, start, byteCount);
      };
      SimpleToken.prototype.toString = function () {
          var value = this.value & ((1 << this.bitCount) - 1);
          value |= 1 << this.bitCount;
          return '<' + Integer.toBinaryString(value | (1 << this.bitCount)).substring(1) + '>';
      };
      return SimpleToken;
  }(Token));

  var __extends = (undefined && undefined.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  ((function (_super) {
      __extends(BinaryShiftToken, _super);
      function BinaryShiftToken(previous, binaryShiftStart, binaryShiftByteCount) {
          var _this = _super.call(this, previous, 0, 0) || this;
          _this.binaryShiftStart = binaryShiftStart;
          _this.binaryShiftByteCount = binaryShiftByteCount;
          return _this;
      }
      BinaryShiftToken.prototype.appendTo = function (bitArray, text) {
          for (var i = 0; i < this.binaryShiftByteCount; i++) {
              if (i === 0 || (i === 31 && this.binaryShiftByteCount <= 62)) {
                  bitArray.appendBits(31, 5);
                  if (this.binaryShiftByteCount > 62) {
                      bitArray.appendBits(this.binaryShiftByteCount - 31, 16);
                  }
                  else if (i === 0) {
                      bitArray.appendBits(Math.min(this.binaryShiftByteCount, 31), 5);
                  }
                  else {
                      bitArray.appendBits(this.binaryShiftByteCount - 31, 5);
                  }
              }
              bitArray.appendBits(text[this.binaryShiftStart + i], 8);
          }
      };
      BinaryShiftToken.prototype.addBinaryShift = function (start, byteCount) {
          return new BinaryShiftToken(this, start, byteCount);
      };
      BinaryShiftToken.prototype.toString = function () {
          return '<' + this.binaryShiftStart + '::' + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + '>';
      };
      return BinaryShiftToken;
  })(SimpleToken));

  var  MODE_UPPER = 0;
  var  MODE_LOWER = 1;
  var  MODE_DIGIT = 2;
  var  MODE_MIXED = 3;
  var  MODE_PUNCT = 4;
  new SimpleToken(null, 0, 0);

  var __values = (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  function static_SHIFT_TABLE(SHIFT_TABLE) {
      var e_1, _a;
      try {
          for (var SHIFT_TABLE_1 = __values(SHIFT_TABLE), SHIFT_TABLE_1_1 = SHIFT_TABLE_1.next(); !SHIFT_TABLE_1_1.done; SHIFT_TABLE_1_1 = SHIFT_TABLE_1.next()) {
              var table = SHIFT_TABLE_1_1.value ;
              Arrays.fill(table, -1);
          }
      }
      catch (e_1_1) { e_1 = { error: e_1_1 }; }
      finally {
          try {
              if (SHIFT_TABLE_1_1 && !SHIFT_TABLE_1_1.done && (_a = SHIFT_TABLE_1.return)) _a.call(SHIFT_TABLE_1);
          }
          finally { if (e_1) throw e_1.error; }
      }
      SHIFT_TABLE[MODE_UPPER][MODE_PUNCT] = 0;
      SHIFT_TABLE[MODE_LOWER][MODE_PUNCT] = 0;
      SHIFT_TABLE[MODE_LOWER][MODE_UPPER] = 28;
      SHIFT_TABLE[MODE_MIXED][MODE_PUNCT] = 0;
      SHIFT_TABLE[MODE_DIGIT][MODE_PUNCT] = 0;
      SHIFT_TABLE[MODE_DIGIT][MODE_UPPER] = 15;
      return SHIFT_TABLE;
  }
  static_SHIFT_TABLE(Arrays.createInt32Array(6, 6));

  (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };

  function static_CHAR_MAP(CHAR_MAP) {
      var spaceCharCode = StringUtils.getCharCode(' ');
      var pointCharCode = StringUtils.getCharCode('.');
      var commaCharCode = StringUtils.getCharCode(',');
      CHAR_MAP[MODE_UPPER][spaceCharCode] = 1;
      var zUpperCharCode = StringUtils.getCharCode('Z');
      var aUpperCharCode = StringUtils.getCharCode('A');
      for (var c = aUpperCharCode; c <= zUpperCharCode; c++) {
          CHAR_MAP[MODE_UPPER][c] = c - aUpperCharCode + 2;
      }
      CHAR_MAP[MODE_LOWER][spaceCharCode] = 1;
      var zLowerCharCode = StringUtils.getCharCode('z');
      var aLowerCharCode = StringUtils.getCharCode('a');
      for (var c = aLowerCharCode; c <= zLowerCharCode; c++) {
          CHAR_MAP[MODE_LOWER][c] = c - aLowerCharCode + 2;
      }
      CHAR_MAP[MODE_DIGIT][spaceCharCode] = 1;
      var nineCharCode = StringUtils.getCharCode('9');
      var zeroCharCode = StringUtils.getCharCode('0');
      for (var c = zeroCharCode; c <= nineCharCode; c++) {
          CHAR_MAP[MODE_DIGIT][c] = c - zeroCharCode + 2;
      }
      CHAR_MAP[MODE_DIGIT][commaCharCode] = 12;
      CHAR_MAP[MODE_DIGIT][pointCharCode] = 13;
      var mixedTable = [
          '\x00',
          ' ',
          '\x01',
          '\x02',
          '\x03',
          '\x04',
          '\x05',
          '\x06',
          '\x07',
          '\b',
          '\t',
          '\n',
          '\x0b',
          '\f',
          '\r',
          '\x1b',
          '\x1c',
          '\x1d',
          '\x1e',
          '\x1f',
          '@',
          '\\',
          '^',
          '_',
          '`',
          '|',
          '~',
          '\x7f'
      ];
      for (var i = 0; i < mixedTable.length; i++) {
          CHAR_MAP[MODE_MIXED][StringUtils.getCharCode(mixedTable[i])] = i;
      }
      var punctTable = [
          '\x00',
          '\r',
          '\x00',
          '\x00',
          '\x00',
          '\x00',
          '!',
          '\'',
          '#',
          '$',
          '%',
          '&',
          '\'',
          '(',
          ')',
          '*',
          '+',
          ',',
          '-',
          '.',
          '/',
          ':',
          ';',
          '<',
          '=',
          '>',
          '?',
          '[',
          ']',
          '{',
          '}'
      ];
      for (var i = 0; i < punctTable.length; i++) {
          if (StringUtils.getCharCode(punctTable[i]) > 0) {
              CHAR_MAP[MODE_PUNCT][StringUtils.getCharCode(punctTable[i])] = i;
          }
      }
      return CHAR_MAP;
  }
  static_CHAR_MAP(Arrays.createInt32Array(5, 256));

  (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };

  (undefined && undefined.__values) || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };

  const defaultMediaConstraints = {
  	audio: false,
  	video: {
  		height: {
  			min: 480,
  			ideal: 960,
  			max: 1440,
  		},
  		aspectRatio: 1.333333333,
  		facingMode: "environment",
  	},
  };
  const metadata = {
  	tag: "ui5-barcode-scanner-dialog",
  	languageAware: true,
  	slots:  {
  	},
  	properties:  {
  		loading: {
  			type: Boolean,
  		},
  	},
  	events:  {
  		 "scan-success": {
  			detail: {
  				text: { type: String },
  				rawBytes: { type: Object },
  			},
  		},
  		 "scan-error": {
  			detail: {
  				message: { type: String },
  			},
  		},
  	},
  };
  class BarcodeScannerDialog extends UI5Element__default {
  	constructor() {
  		super();
  		this._codeReader = new BrowserMultiFormatReader();
  	}
  	static get metadata() {
  		return metadata;
  	}
  	static get render() {
  		return litRender__default;
  	}
  	static get template() {
  		return null;
  	}
  	static get staticAreaTemplate() {
  		return BarcodeScannerDialogTemplate_lit;
  	}
  	static get styles() {
  		return null;
  	}
  	static get staticAreaStyles() {
  		return [BarcodeScannerDialog_css];
  	}
  	static async onDefine() {
  		BarcodeScannerDialog.i18nBundle = await i18nBundle.getI18nBundle("@ui5/webcomponents-fiori");
  	}
  	show() {
  		if (this.loading) {
  			console.warn("Barcode scanning is already in progress.");
  			return;
  		}
  		if (!this._hasGetUserMedia()) {
  			this.fireEvent("scan-error", { message: "getUserMedia() is not supported by your browser" });
  			return;
  		}
  		this.loading = true;
  		this._getUserPermission()
  			.then(() => this._showDialog())
  			.catch(err => {
  				this.fireEvent("scan-error", { message: err });
  				this.loading = false;
  			});
  	}
  	close() {
  		this._closeDialog();
  		this.loading = false;
  	}
  	_hasGetUserMedia() {
  		return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  	}
  	_getUserPermission() {
  		return navigator.mediaDevices.getUserMedia(defaultMediaConstraints);
  	}
  	async _getDialog() {
  		const staticAreaItem = await this.getStaticAreaItemDomRef();
  		return staticAreaItem.querySelector("[ui5-dialog]");
  	}
  	async _getVideoElement() {
  		const staticAreaItem = await this.getStaticAreaItemDomRef();
  		return staticAreaItem.querySelector(".ui5-barcode-scanner-dialog-video");
  	}
  	async _showDialog() {
  		this.dialog = await this._getDialog();
  		this.dialog.show();
  	}
  	_closeDialog() {
  		if (this._isOpen) {
  			this.dialog.close();
  		}
  	}
  	_startReader() {
  		this._decodeFromCamera(null);
  	}
  	async _resetReader() {
  		const videoElement = await this._getVideoElement();
  		videoElement.pause();
  		this._codeReader.reset();
  	}
  	async _decodeFromCamera(cameraId) {
  		const videoElement = await this._getVideoElement();
  		this._codeReader.decodeFromVideoDevice(cameraId, videoElement, (result, err) => {
  			this.loading = false;
  			if (result) {
  				this.fireEvent("scan-success",
  					{
  						text: result.getText(),
  						rawBytes: result.getRawBytes(),
  					});
  			}
  			if (err && !(err instanceof NotFoundException)) {
  				this.fireEvent("scan-error", { message: err });
  			}
  		}).catch(err => this.fireEvent("scan-error", { message: err }));
  	}
  	get _isOpen() {
  		return !!this.dialog && this.dialog.opened;
  	}
  	get _cancelButtonText() {
  		return BarcodeScannerDialog.i18nBundle.getText(i18nDefaults.BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT);
  	}
  	get _busyIndicatorText() {
  		return BarcodeScannerDialog.i18nBundle.getText(i18nDefaults.BARCODE_SCANNER_DIALOG_LOADING_TXT);
  	}
  	static get dependencies() {
  		return [
  			Dialog__default,
  			BusyIndicator__default,
  			Button__default,
  		];
  	}
  }
  BarcodeScannerDialog.define();

  return BarcodeScannerDialog;

});
