var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// .wrangler/tmp/bundle-eKzQT6/strip-cf-connecting-ip-header.js
function stripCfConnectingIPHeader(input, init) {
  const request = new Request(input, init);
  request.headers.delete("CF-Connecting-IP");
  return request;
}
var init_strip_cf_connecting_ip_header = __esm({
  ".wrangler/tmp/bundle-eKzQT6/strip-cf-connecting-ip-header.js"() {
    "use strict";
    __name(stripCfConnectingIPHeader, "stripCfConnectingIPHeader");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        return Reflect.apply(target, thisArg, [
          stripCfConnectingIPHeader.apply(null, argArray)
        ]);
      }
    });
  }
});

// node_modules/unenv/dist/runtime/_internal/utils.mjs
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    __name(PerformanceEntry, "PerformanceEntry");
    PerformanceMark = /* @__PURE__ */ __name(class PerformanceMark2 extends PerformanceEntry {
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    }, "PerformanceMark");
    PerformanceMeasure = class extends PerformanceEntry {
      entryType = "measure";
    };
    __name(PerformanceMeasure, "PerformanceMeasure");
    PerformanceResourceTiming = class extends PerformanceEntry {
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    __name(PerformanceResourceTiming, "PerformanceResourceTiming");
    PerformanceObserverEntryList = class {
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    __name(PerformanceObserverEntryList, "PerformanceObserverEntryList");
    Performance = class {
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    __name(Performance, "Performance");
    PerformanceObserver = class {
      __unenv__ = true;
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    __name(PerformanceObserver, "PerformanceObserver");
    __publicField(PerformanceObserver, "supportedEntryTypes", []);
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
import { Socket } from "node:net";
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class extends Socket {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      isRaw = false;
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
      isTTY = false;
    };
    __name(ReadStream, "ReadStream");
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
import { Socket as Socket2 } from "node:net";
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class extends Socket2 {
      fd;
      constructor(fd) {
        super();
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      columns = 80;
      rows = 24;
      isTTY = false;
    };
    __name(WriteStream, "WriteStream");
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    Process = class extends EventEmitter {
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return "";
      }
      get versions() {
        return {};
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: () => 0 });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    __name(Process, "Process");
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/unenv/dist/runtime/node/internal/crypto/web.mjs
var subtle;
var init_web = __esm({
  "node_modules/unenv/dist/runtime/node/internal/crypto/web.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    subtle = globalThis.crypto?.subtle;
  }
});

// node_modules/unenv/dist/runtime/node/internal/crypto/node.mjs
var webcrypto, createCipher, createDecipher, pseudoRandomBytes, createCipheriv, createDecipheriv, createECDH, createSign, createVerify, diffieHellman, getCipherInfo, privateDecrypt, privateEncrypt, publicDecrypt, publicEncrypt, sign, verify, hash, Cipher, Cipheriv, Decipher, Decipheriv, ECDH, Sign, Verify;
var init_node = __esm({
  "node_modules/unenv/dist/runtime/node/internal/crypto/node.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    webcrypto = new Proxy(globalThis.crypto, { get(_, key) {
      if (key === "CryptoKey") {
        return globalThis.CryptoKey;
      }
      if (typeof globalThis.crypto[key] === "function") {
        return globalThis.crypto[key].bind(globalThis.crypto);
      }
      return globalThis.crypto[key];
    } });
    createCipher = /* @__PURE__ */ notImplemented("crypto.createCipher");
    createDecipher = /* @__PURE__ */ notImplemented("crypto.createDecipher");
    pseudoRandomBytes = /* @__PURE__ */ notImplemented("crypto.pseudoRandomBytes");
    createCipheriv = /* @__PURE__ */ notImplemented("crypto.createCipheriv");
    createDecipheriv = /* @__PURE__ */ notImplemented("crypto.createDecipheriv");
    createECDH = /* @__PURE__ */ notImplemented("crypto.createECDH");
    createSign = /* @__PURE__ */ notImplemented("crypto.createSign");
    createVerify = /* @__PURE__ */ notImplemented("crypto.createVerify");
    diffieHellman = /* @__PURE__ */ notImplemented("crypto.diffieHellman");
    getCipherInfo = /* @__PURE__ */ notImplemented("crypto.getCipherInfo");
    privateDecrypt = /* @__PURE__ */ notImplemented("crypto.privateDecrypt");
    privateEncrypt = /* @__PURE__ */ notImplemented("crypto.privateEncrypt");
    publicDecrypt = /* @__PURE__ */ notImplemented("crypto.publicDecrypt");
    publicEncrypt = /* @__PURE__ */ notImplemented("crypto.publicEncrypt");
    sign = /* @__PURE__ */ notImplemented("crypto.sign");
    verify = /* @__PURE__ */ notImplemented("crypto.verify");
    hash = /* @__PURE__ */ notImplemented("crypto.hash");
    Cipher = /* @__PURE__ */ notImplementedClass("crypto.Cipher");
    Cipheriv = /* @__PURE__ */ notImplementedClass(
      "crypto.Cipheriv"
      // @ts-expect-error not typed yet
    );
    Decipher = /* @__PURE__ */ notImplementedClass("crypto.Decipher");
    Decipheriv = /* @__PURE__ */ notImplementedClass(
      "crypto.Decipheriv"
      // @ts-expect-error not typed yet
    );
    ECDH = /* @__PURE__ */ notImplementedClass("crypto.ECDH");
    Sign = /* @__PURE__ */ notImplementedClass("crypto.Sign");
    Verify = /* @__PURE__ */ notImplementedClass("crypto.Verify");
  }
});

// node_modules/unenv/dist/runtime/node/internal/crypto/constants.mjs
var SSL_OP_ALL, SSL_OP_ALLOW_NO_DHE_KEX, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, SSL_OP_CIPHER_SERVER_PREFERENCE, SSL_OP_CISCO_ANYCONNECT, SSL_OP_COOKIE_EXCHANGE, SSL_OP_CRYPTOPRO_TLSEXT_BUG, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS, SSL_OP_LEGACY_SERVER_CONNECT, SSL_OP_NO_COMPRESSION, SSL_OP_NO_ENCRYPT_THEN_MAC, SSL_OP_NO_QUERY_MTU, SSL_OP_NO_RENEGOTIATION, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_NO_SSLv2, SSL_OP_NO_SSLv3, SSL_OP_NO_TICKET, SSL_OP_NO_TLSv1, SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2, SSL_OP_NO_TLSv1_3, SSL_OP_PRIORITIZE_CHACHA, SSL_OP_TLS_ROLLBACK_BUG, ENGINE_METHOD_RSA, ENGINE_METHOD_DSA, ENGINE_METHOD_DH, ENGINE_METHOD_RAND, ENGINE_METHOD_EC, ENGINE_METHOD_CIPHERS, ENGINE_METHOD_DIGESTS, ENGINE_METHOD_PKEY_METHS, ENGINE_METHOD_PKEY_ASN1_METHS, ENGINE_METHOD_ALL, ENGINE_METHOD_NONE, DH_CHECK_P_NOT_SAFE_PRIME, DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR, DH_NOT_SUITABLE_GENERATOR, RSA_PKCS1_PADDING, RSA_NO_PADDING, RSA_PKCS1_OAEP_PADDING, RSA_X931_PADDING, RSA_PKCS1_PSS_PADDING, RSA_PSS_SALTLEN_DIGEST, RSA_PSS_SALTLEN_MAX_SIGN, RSA_PSS_SALTLEN_AUTO, POINT_CONVERSION_COMPRESSED, POINT_CONVERSION_UNCOMPRESSED, POINT_CONVERSION_HYBRID, defaultCoreCipherList, defaultCipherList, OPENSSL_VERSION_NUMBER, TLS1_VERSION, TLS1_1_VERSION, TLS1_2_VERSION, TLS1_3_VERSION;
var init_constants = __esm({
  "node_modules/unenv/dist/runtime/node/internal/crypto/constants.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    SSL_OP_ALL = 2147485776;
    SSL_OP_ALLOW_NO_DHE_KEX = 1024;
    SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION = 262144;
    SSL_OP_CIPHER_SERVER_PREFERENCE = 4194304;
    SSL_OP_CISCO_ANYCONNECT = 32768;
    SSL_OP_COOKIE_EXCHANGE = 8192;
    SSL_OP_CRYPTOPRO_TLSEXT_BUG = 2147483648;
    SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS = 2048;
    SSL_OP_LEGACY_SERVER_CONNECT = 4;
    SSL_OP_NO_COMPRESSION = 131072;
    SSL_OP_NO_ENCRYPT_THEN_MAC = 524288;
    SSL_OP_NO_QUERY_MTU = 4096;
    SSL_OP_NO_RENEGOTIATION = 1073741824;
    SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION = 65536;
    SSL_OP_NO_SSLv2 = 0;
    SSL_OP_NO_SSLv3 = 33554432;
    SSL_OP_NO_TICKET = 16384;
    SSL_OP_NO_TLSv1 = 67108864;
    SSL_OP_NO_TLSv1_1 = 268435456;
    SSL_OP_NO_TLSv1_2 = 134217728;
    SSL_OP_NO_TLSv1_3 = 536870912;
    SSL_OP_PRIORITIZE_CHACHA = 2097152;
    SSL_OP_TLS_ROLLBACK_BUG = 8388608;
    ENGINE_METHOD_RSA = 1;
    ENGINE_METHOD_DSA = 2;
    ENGINE_METHOD_DH = 4;
    ENGINE_METHOD_RAND = 8;
    ENGINE_METHOD_EC = 2048;
    ENGINE_METHOD_CIPHERS = 64;
    ENGINE_METHOD_DIGESTS = 128;
    ENGINE_METHOD_PKEY_METHS = 512;
    ENGINE_METHOD_PKEY_ASN1_METHS = 1024;
    ENGINE_METHOD_ALL = 65535;
    ENGINE_METHOD_NONE = 0;
    DH_CHECK_P_NOT_SAFE_PRIME = 2;
    DH_CHECK_P_NOT_PRIME = 1;
    DH_UNABLE_TO_CHECK_GENERATOR = 4;
    DH_NOT_SUITABLE_GENERATOR = 8;
    RSA_PKCS1_PADDING = 1;
    RSA_NO_PADDING = 3;
    RSA_PKCS1_OAEP_PADDING = 4;
    RSA_X931_PADDING = 5;
    RSA_PKCS1_PSS_PADDING = 6;
    RSA_PSS_SALTLEN_DIGEST = -1;
    RSA_PSS_SALTLEN_MAX_SIGN = -2;
    RSA_PSS_SALTLEN_AUTO = -2;
    POINT_CONVERSION_COMPRESSED = 2;
    POINT_CONVERSION_UNCOMPRESSED = 4;
    POINT_CONVERSION_HYBRID = 6;
    defaultCoreCipherList = "";
    defaultCipherList = "";
    OPENSSL_VERSION_NUMBER = 0;
    TLS1_VERSION = 0;
    TLS1_1_VERSION = 0;
    TLS1_2_VERSION = 0;
    TLS1_3_VERSION = 0;
  }
});

// node_modules/unenv/dist/runtime/node/crypto.mjs
var constants;
var init_crypto = __esm({
  "node_modules/unenv/dist/runtime/node/crypto.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_constants();
    init_web();
    init_node();
    constants = {
      OPENSSL_VERSION_NUMBER,
      SSL_OP_ALL,
      SSL_OP_ALLOW_NO_DHE_KEX,
      SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION,
      SSL_OP_CIPHER_SERVER_PREFERENCE,
      SSL_OP_CISCO_ANYCONNECT,
      SSL_OP_COOKIE_EXCHANGE,
      SSL_OP_CRYPTOPRO_TLSEXT_BUG,
      SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS,
      SSL_OP_LEGACY_SERVER_CONNECT,
      SSL_OP_NO_COMPRESSION,
      SSL_OP_NO_ENCRYPT_THEN_MAC,
      SSL_OP_NO_QUERY_MTU,
      SSL_OP_NO_RENEGOTIATION,
      SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION,
      SSL_OP_NO_SSLv2,
      SSL_OP_NO_SSLv3,
      SSL_OP_NO_TICKET,
      SSL_OP_NO_TLSv1,
      SSL_OP_NO_TLSv1_1,
      SSL_OP_NO_TLSv1_2,
      SSL_OP_NO_TLSv1_3,
      SSL_OP_PRIORITIZE_CHACHA,
      SSL_OP_TLS_ROLLBACK_BUG,
      ENGINE_METHOD_RSA,
      ENGINE_METHOD_DSA,
      ENGINE_METHOD_DH,
      ENGINE_METHOD_RAND,
      ENGINE_METHOD_EC,
      ENGINE_METHOD_CIPHERS,
      ENGINE_METHOD_DIGESTS,
      ENGINE_METHOD_PKEY_METHS,
      ENGINE_METHOD_PKEY_ASN1_METHS,
      ENGINE_METHOD_ALL,
      ENGINE_METHOD_NONE,
      DH_CHECK_P_NOT_SAFE_PRIME,
      DH_CHECK_P_NOT_PRIME,
      DH_UNABLE_TO_CHECK_GENERATOR,
      DH_NOT_SUITABLE_GENERATOR,
      RSA_PKCS1_PADDING,
      RSA_NO_PADDING,
      RSA_PKCS1_OAEP_PADDING,
      RSA_X931_PADDING,
      RSA_PKCS1_PSS_PADDING,
      RSA_PSS_SALTLEN_DIGEST,
      RSA_PSS_SALTLEN_MAX_SIGN,
      RSA_PSS_SALTLEN_AUTO,
      defaultCoreCipherList,
      TLS1_VERSION,
      TLS1_1_VERSION,
      TLS1_2_VERSION,
      TLS1_3_VERSION,
      POINT_CONVERSION_COMPRESSED,
      POINT_CONVERSION_UNCOMPRESSED,
      POINT_CONVERSION_HYBRID,
      defaultCipherList
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/crypto.mjs
var workerdCrypto, Certificate, DiffieHellman, DiffieHellmanGroup, Hash, Hmac, KeyObject, X509Certificate, checkPrime, checkPrimeSync, createDiffieHellman, createDiffieHellmanGroup, createHash, createHmac, createPrivateKey, createPublicKey, createSecretKey, generateKey, generateKeyPair, generateKeyPairSync, generateKeySync, generatePrime, generatePrimeSync, getCiphers, getCurves, getDiffieHellman, getFips, getHashes, hkdf, hkdfSync, pbkdf2, pbkdf2Sync, randomBytes, randomFill, randomFillSync, randomInt, randomUUID, scrypt, scryptSync, secureHeapUsed, setEngine, setFips, subtle2, timingSafeEqual, getRandomValues, webcrypto2, fips, crypto_default;
var init_crypto2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/crypto.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_crypto();
    workerdCrypto = process.getBuiltinModule("node:crypto");
    ({
      Certificate,
      DiffieHellman,
      DiffieHellmanGroup,
      Hash,
      Hmac,
      KeyObject,
      X509Certificate,
      checkPrime,
      checkPrimeSync,
      createDiffieHellman,
      createDiffieHellmanGroup,
      createHash,
      createHmac,
      createPrivateKey,
      createPublicKey,
      createSecretKey,
      generateKey,
      generateKeyPair,
      generateKeyPairSync,
      generateKeySync,
      generatePrime,
      generatePrimeSync,
      getCiphers,
      getCurves,
      getDiffieHellman,
      getFips,
      getHashes,
      hkdf,
      hkdfSync,
      pbkdf2,
      pbkdf2Sync,
      randomBytes,
      randomFill,
      randomFillSync,
      randomInt,
      randomUUID,
      scrypt,
      scryptSync,
      secureHeapUsed,
      setEngine,
      setFips,
      subtle: subtle2,
      timingSafeEqual
    } = workerdCrypto);
    getRandomValues = workerdCrypto.getRandomValues.bind(
      workerdCrypto.webcrypto
    );
    webcrypto2 = {
      // @ts-expect-error unenv has unknown type
      CryptoKey: webcrypto.CryptoKey,
      getRandomValues,
      randomUUID,
      subtle: subtle2
    };
    fips = workerdCrypto.fips;
    crypto_default = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      Certificate,
      Cipher,
      Cipheriv,
      Decipher,
      Decipheriv,
      ECDH,
      Sign,
      Verify,
      X509Certificate,
      // @ts-expect-error @types/node is out of date - this is a bug in typings
      constants,
      // @ts-expect-error unenv has unknown type
      createCipheriv,
      // @ts-expect-error unenv has unknown type
      createDecipheriv,
      // @ts-expect-error unenv has unknown type
      createECDH,
      // @ts-expect-error unenv has unknown type
      createSign,
      // @ts-expect-error unenv has unknown type
      createVerify,
      // @ts-expect-error unenv has unknown type
      diffieHellman,
      // @ts-expect-error unenv has unknown type
      getCipherInfo,
      // @ts-expect-error unenv has unknown type
      hash,
      // @ts-expect-error unenv has unknown type
      privateDecrypt,
      // @ts-expect-error unenv has unknown type
      privateEncrypt,
      // @ts-expect-error unenv has unknown type
      publicDecrypt,
      // @ts-expect-error unenv has unknown type
      publicEncrypt,
      scrypt,
      scryptSync,
      // @ts-expect-error unenv has unknown type
      sign,
      // @ts-expect-error unenv has unknown type
      verify,
      // default-only export from unenv
      // @ts-expect-error unenv has unknown type
      createCipher,
      // @ts-expect-error unenv has unknown type
      createDecipher,
      // @ts-expect-error unenv has unknown type
      pseudoRandomBytes,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      DiffieHellman,
      DiffieHellmanGroup,
      Hash,
      Hmac,
      KeyObject,
      checkPrime,
      checkPrimeSync,
      createDiffieHellman,
      createDiffieHellmanGroup,
      createHash,
      createHmac,
      createPrivateKey,
      createPublicKey,
      createSecretKey,
      generateKey,
      generateKeyPair,
      generateKeyPairSync,
      generateKeySync,
      generatePrime,
      generatePrimeSync,
      getCiphers,
      getCurves,
      getDiffieHellman,
      getFips,
      getHashes,
      getRandomValues,
      hkdf,
      hkdfSync,
      pbkdf2,
      pbkdf2Sync,
      randomBytes,
      randomFill,
      randomFillSync,
      randomInt,
      randomUUID,
      secureHeapUsed,
      setEngine,
      setFips,
      subtle: subtle2,
      timingSafeEqual,
      // default-only export from workerd
      fips,
      // special-cased deep merged symbols
      webcrypto: webcrypto2
    };
  }
});

// node-built-in-modules:crypto
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_crypto2();
    module.exports = crypto_default;
  }
});

// node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS({
  "node_modules/pako/lib/zlib/trees.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Z_FIXED = 4;
    var Z_BINARY = 0;
    var Z_TEXT = 1;
    var Z_UNKNOWN = 2;
    function zero(buf) {
      let len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    __name(zero, "zero");
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES = 2;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var Buf_size = 16;
    var MAX_BL_BITS = 7;
    var END_BLOCK = 256;
    var REP_3_6 = 16;
    var REPZ_3_10 = 17;
    var REPZ_11_138 = 18;
    var extra_lbits = (
      /* extra bits for each length code */
      new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
    );
    var extra_dbits = (
      /* extra bits for each distance code */
      new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
    );
    var extra_blbits = (
      /* extra bits for each bit length code */
      new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
    );
    var bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    var DIST_CODE_LEN = 512;
    var static_ltree = new Array((L_CODES + 2) * 2);
    zero(static_ltree);
    var static_dtree = new Array(D_CODES * 2);
    zero(static_dtree);
    var _dist_code = new Array(DIST_CODE_LEN);
    zero(_dist_code);
    var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
    zero(_length_code);
    var base_length = new Array(LENGTH_CODES);
    zero(base_length);
    var base_dist = new Array(D_CODES);
    zero(base_dist);
    function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
      this.static_tree = static_tree;
      this.extra_bits = extra_bits;
      this.extra_base = extra_base;
      this.elems = elems;
      this.max_length = max_length;
      this.has_stree = static_tree && static_tree.length;
    }
    __name(StaticTreeDesc, "StaticTreeDesc");
    var static_l_desc;
    var static_d_desc;
    var static_bl_desc;
    function TreeDesc(dyn_tree, stat_desc) {
      this.dyn_tree = dyn_tree;
      this.max_code = 0;
      this.stat_desc = stat_desc;
    }
    __name(TreeDesc, "TreeDesc");
    var d_code = /* @__PURE__ */ __name((dist) => {
      return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
    }, "d_code");
    var put_short = /* @__PURE__ */ __name((s, w) => {
      s.pending_buf[s.pending++] = w & 255;
      s.pending_buf[s.pending++] = w >>> 8 & 255;
    }, "put_short");
    var send_bits = /* @__PURE__ */ __name((s, value, length) => {
      if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 65535;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
      } else {
        s.bi_buf |= value << s.bi_valid & 65535;
        s.bi_valid += length;
      }
    }, "send_bits");
    var send_code = /* @__PURE__ */ __name((s, c, tree) => {
      send_bits(
        s,
        tree[c * 2],
        tree[c * 2 + 1]
        /*.Len*/
      );
    }, "send_code");
    var bi_reverse = /* @__PURE__ */ __name((code, len) => {
      let res = 0;
      do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
      } while (--len > 0);
      return res >>> 1;
    }, "bi_reverse");
    var bi_flush = /* @__PURE__ */ __name((s) => {
      if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
      } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 255;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
      }
    }, "bi_flush");
    var gen_bitlen = /* @__PURE__ */ __name((s, desc) => {
      const tree = desc.dyn_tree;
      const max_code = desc.max_code;
      const stree = desc.stat_desc.static_tree;
      const has_stree = desc.stat_desc.has_stree;
      const extra = desc.stat_desc.extra_bits;
      const base = desc.stat_desc.extra_base;
      const max_length = desc.stat_desc.max_length;
      let h;
      let n, m;
      let bits;
      let xbits;
      let f;
      let overflow = 0;
      for (bits = 0; bits <= MAX_BITS; bits++) {
        s.bl_count[bits] = 0;
      }
      tree[s.heap[s.heap_max] * 2 + 1] = 0;
      for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
          bits = max_length;
          overflow++;
        }
        tree[n * 2 + 1] = bits;
        if (n > max_code) {
          continue;
        }
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) {
          xbits = extra[n - base];
        }
        f = tree[n * 2];
        s.opt_len += f * (bits + xbits);
        if (has_stree) {
          s.static_len += f * (stree[n * 2 + 1] + xbits);
        }
      }
      if (overflow === 0) {
        return;
      }
      do {
        bits = max_length - 1;
        while (s.bl_count[bits] === 0) {
          bits--;
        }
        s.bl_count[bits]--;
        s.bl_count[bits + 1] += 2;
        s.bl_count[max_length]--;
        overflow -= 2;
      } while (overflow > 0);
      for (bits = max_length; bits !== 0; bits--) {
        n = s.bl_count[bits];
        while (n !== 0) {
          m = s.heap[--h];
          if (m > max_code) {
            continue;
          }
          if (tree[m * 2 + 1] !== bits) {
            s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
            tree[m * 2 + 1] = bits;
          }
          n--;
        }
      }
    }, "gen_bitlen");
    var gen_codes = /* @__PURE__ */ __name((tree, max_code, bl_count) => {
      const next_code = new Array(MAX_BITS + 1);
      let code = 0;
      let bits;
      let n;
      for (bits = 1; bits <= MAX_BITS; bits++) {
        code = code + bl_count[bits - 1] << 1;
        next_code[bits] = code;
      }
      for (n = 0; n <= max_code; n++) {
        let len = tree[n * 2 + 1];
        if (len === 0) {
          continue;
        }
        tree[n * 2] = bi_reverse(next_code[len]++, len);
      }
    }, "gen_codes");
    var tr_static_init = /* @__PURE__ */ __name(() => {
      let n;
      let bits;
      let length;
      let code;
      let dist;
      const bl_count = new Array(MAX_BITS + 1);
      length = 0;
      for (code = 0; code < LENGTH_CODES - 1; code++) {
        base_length[code] = length;
        for (n = 0; n < 1 << extra_lbits[code]; n++) {
          _length_code[length++] = code;
        }
      }
      _length_code[length - 1] = code;
      dist = 0;
      for (code = 0; code < 16; code++) {
        base_dist[code] = dist;
        for (n = 0; n < 1 << extra_dbits[code]; n++) {
          _dist_code[dist++] = code;
        }
      }
      dist >>= 7;
      for (; code < D_CODES; code++) {
        base_dist[code] = dist << 7;
        for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
          _dist_code[256 + dist++] = code;
        }
      }
      for (bits = 0; bits <= MAX_BITS; bits++) {
        bl_count[bits] = 0;
      }
      n = 0;
      while (n <= 143) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      while (n <= 255) {
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
      }
      while (n <= 279) {
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
      }
      while (n <= 287) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      gen_codes(static_ltree, L_CODES + 1, bl_count);
      for (n = 0; n < D_CODES; n++) {
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
      }
      static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
      static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
      static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
    }, "tr_static_init");
    var init_block = /* @__PURE__ */ __name((s) => {
      let n;
      for (n = 0; n < L_CODES; n++) {
        s.dyn_ltree[n * 2] = 0;
      }
      for (n = 0; n < D_CODES; n++) {
        s.dyn_dtree[n * 2] = 0;
      }
      for (n = 0; n < BL_CODES; n++) {
        s.bl_tree[n * 2] = 0;
      }
      s.dyn_ltree[END_BLOCK * 2] = 1;
      s.opt_len = s.static_len = 0;
      s.sym_next = s.matches = 0;
    }, "init_block");
    var bi_windup = /* @__PURE__ */ __name((s) => {
      if (s.bi_valid > 8) {
        put_short(s, s.bi_buf);
      } else if (s.bi_valid > 0) {
        s.pending_buf[s.pending++] = s.bi_buf;
      }
      s.bi_buf = 0;
      s.bi_valid = 0;
    }, "bi_windup");
    var smaller = /* @__PURE__ */ __name((tree, n, m, depth) => {
      const _n2 = n * 2;
      const _m2 = m * 2;
      return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
    }, "smaller");
    var pqdownheap = /* @__PURE__ */ __name((s, tree, k) => {
      const v = s.heap[k];
      let j = k << 1;
      while (j <= s.heap_len) {
        if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
          j++;
        }
        if (smaller(tree, v, s.heap[j], s.depth)) {
          break;
        }
        s.heap[k] = s.heap[j];
        k = j;
        j <<= 1;
      }
      s.heap[k] = v;
    }, "pqdownheap");
    var compress_block = /* @__PURE__ */ __name((s, ltree, dtree) => {
      let dist;
      let lc;
      let sx = 0;
      let code;
      let extra;
      if (s.sym_next !== 0) {
        do {
          dist = s.pending_buf[s.sym_buf + sx++] & 255;
          dist += (s.pending_buf[s.sym_buf + sx++] & 255) << 8;
          lc = s.pending_buf[s.sym_buf + sx++];
          if (dist === 0) {
            send_code(s, lc, ltree);
          } else {
            code = _length_code[lc];
            send_code(s, code + LITERALS + 1, ltree);
            extra = extra_lbits[code];
            if (extra !== 0) {
              lc -= base_length[code];
              send_bits(s, lc, extra);
            }
            dist--;
            code = d_code(dist);
            send_code(s, code, dtree);
            extra = extra_dbits[code];
            if (extra !== 0) {
              dist -= base_dist[code];
              send_bits(s, dist, extra);
            }
          }
        } while (sx < s.sym_next);
      }
      send_code(s, END_BLOCK, ltree);
    }, "compress_block");
    var build_tree = /* @__PURE__ */ __name((s, desc) => {
      const tree = desc.dyn_tree;
      const stree = desc.stat_desc.static_tree;
      const has_stree = desc.stat_desc.has_stree;
      const elems = desc.stat_desc.elems;
      let n, m;
      let max_code = -1;
      let node;
      s.heap_len = 0;
      s.heap_max = HEAP_SIZE;
      for (n = 0; n < elems; n++) {
        if (tree[n * 2] !== 0) {
          s.heap[++s.heap_len] = max_code = n;
          s.depth[n] = 0;
        } else {
          tree[n * 2 + 1] = 0;
        }
      }
      while (s.heap_len < 2) {
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) {
          s.static_len -= stree[node * 2 + 1];
        }
      }
      desc.max_code = max_code;
      for (n = s.heap_len >> 1; n >= 1; n--) {
        pqdownheap(s, tree, n);
      }
      node = elems;
      do {
        n = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[
          1
          /*SMALLEST*/
        ] = s.heap[s.heap_len--];
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
        m = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[--s.heap_max] = n;
        s.heap[--s.heap_max] = m;
        tree[node * 2] = tree[n * 2] + tree[m * 2];
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        s.heap[
          1
          /*SMALLEST*/
        ] = node++;
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
      } while (s.heap_len >= 2);
      s.heap[--s.heap_max] = s.heap[
        1
        /*SMALLEST*/
      ];
      gen_bitlen(s, desc);
      gen_codes(tree, max_code, s.bl_count);
    }, "build_tree");
    var scan_tree = /* @__PURE__ */ __name((s, tree, max_code) => {
      let n;
      let prevlen = -1;
      let curlen;
      let nextlen = tree[0 * 2 + 1];
      let count3 = 0;
      let max_count = 7;
      let min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      tree[(max_code + 1) * 2 + 1] = 65535;
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count3 < max_count && curlen === nextlen) {
          continue;
        } else if (count3 < min_count) {
          s.bl_tree[curlen * 2] += count3;
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            s.bl_tree[curlen * 2]++;
          }
          s.bl_tree[REP_3_6 * 2]++;
        } else if (count3 <= 10) {
          s.bl_tree[REPZ_3_10 * 2]++;
        } else {
          s.bl_tree[REPZ_11_138 * 2]++;
        }
        count3 = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }, "scan_tree");
    var send_tree = /* @__PURE__ */ __name((s, tree, max_code) => {
      let n;
      let prevlen = -1;
      let curlen;
      let nextlen = tree[0 * 2 + 1];
      let count3 = 0;
      let max_count = 7;
      let min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count3 < max_count && curlen === nextlen) {
          continue;
        } else if (count3 < min_count) {
          do {
            send_code(s, curlen, s.bl_tree);
          } while (--count3 !== 0);
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            send_code(s, curlen, s.bl_tree);
            count3--;
          }
          send_code(s, REP_3_6, s.bl_tree);
          send_bits(s, count3 - 3, 2);
        } else if (count3 <= 10) {
          send_code(s, REPZ_3_10, s.bl_tree);
          send_bits(s, count3 - 3, 3);
        } else {
          send_code(s, REPZ_11_138, s.bl_tree);
          send_bits(s, count3 - 11, 7);
        }
        count3 = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }, "send_tree");
    var build_bl_tree = /* @__PURE__ */ __name((s) => {
      let max_blindex;
      scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
      scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
      build_tree(s, s.bl_desc);
      for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
          break;
        }
      }
      s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
      return max_blindex;
    }, "build_bl_tree");
    var send_all_trees = /* @__PURE__ */ __name((s, lcodes, dcodes, blcodes) => {
      let rank;
      send_bits(s, lcodes - 257, 5);
      send_bits(s, dcodes - 1, 5);
      send_bits(s, blcodes - 4, 4);
      for (rank = 0; rank < blcodes; rank++) {
        send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
      }
      send_tree(s, s.dyn_ltree, lcodes - 1);
      send_tree(s, s.dyn_dtree, dcodes - 1);
    }, "send_all_trees");
    var detect_data_type = /* @__PURE__ */ __name((s) => {
      let block_mask = 4093624447;
      let n;
      for (n = 0; n <= 31; n++, block_mask >>>= 1) {
        if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
          return Z_BINARY;
        }
      }
      if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
        return Z_TEXT;
      }
      for (n = 32; n < LITERALS; n++) {
        if (s.dyn_ltree[n * 2] !== 0) {
          return Z_TEXT;
        }
      }
      return Z_BINARY;
    }, "detect_data_type");
    var static_init_done = false;
    var _tr_init = /* @__PURE__ */ __name((s) => {
      if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
      }
      s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
      s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
      s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
      s.bi_buf = 0;
      s.bi_valid = 0;
      init_block(s);
    }, "_tr_init");
    var _tr_stored_block = /* @__PURE__ */ __name((s, buf, stored_len, last) => {
      send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
      bi_windup(s);
      put_short(s, stored_len);
      put_short(s, ~stored_len);
      if (stored_len) {
        s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
      }
      s.pending += stored_len;
    }, "_tr_stored_block");
    var _tr_align = /* @__PURE__ */ __name((s) => {
      send_bits(s, STATIC_TREES << 1, 3);
      send_code(s, END_BLOCK, static_ltree);
      bi_flush(s);
    }, "_tr_align");
    var _tr_flush_block = /* @__PURE__ */ __name((s, buf, stored_len, last) => {
      let opt_lenb, static_lenb;
      let max_blindex = 0;
      if (s.level > 0) {
        if (s.strm.data_type === Z_UNKNOWN) {
          s.strm.data_type = detect_data_type(s);
        }
        build_tree(s, s.l_desc);
        build_tree(s, s.d_desc);
        max_blindex = build_bl_tree(s);
        opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        if (static_lenb <= opt_lenb) {
          opt_lenb = static_lenb;
        }
      } else {
        opt_lenb = static_lenb = stored_len + 5;
      }
      if (stored_len + 4 <= opt_lenb && buf !== -1) {
        _tr_stored_block(s, buf, stored_len, last);
      } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
      } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
      }
      init_block(s);
      if (last) {
        bi_windup(s);
      }
    }, "_tr_flush_block");
    var _tr_tally = /* @__PURE__ */ __name((s, dist, lc) => {
      s.pending_buf[s.sym_buf + s.sym_next++] = dist;
      s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
      s.pending_buf[s.sym_buf + s.sym_next++] = lc;
      if (dist === 0) {
        s.dyn_ltree[lc * 2]++;
      } else {
        s.matches++;
        dist--;
        s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
      }
      return s.sym_next === s.sym_end;
    }, "_tr_tally");
    module.exports._tr_init = _tr_init;
    module.exports._tr_stored_block = _tr_stored_block;
    module.exports._tr_flush_block = _tr_flush_block;
    module.exports._tr_tally = _tr_tally;
    module.exports._tr_align = _tr_align;
  }
});

// node_modules/pako/lib/zlib/adler32.js
var require_adler32 = __commonJS({
  "node_modules/pako/lib/zlib/adler32.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var adler32 = /* @__PURE__ */ __name((adler, buf, len, pos) => {
      let s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
      while (len !== 0) {
        n = len > 2e3 ? 2e3 : len;
        len -= n;
        do {
          s1 = s1 + buf[pos++] | 0;
          s2 = s2 + s1 | 0;
        } while (--n);
        s1 %= 65521;
        s2 %= 65521;
      }
      return s1 | s2 << 16 | 0;
    }, "adler32");
    module.exports = adler32;
  }
});

// node_modules/pako/lib/zlib/crc32.js
var require_crc32 = __commonJS({
  "node_modules/pako/lib/zlib/crc32.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var makeTable = /* @__PURE__ */ __name(() => {
      let c, table3 = [];
      for (var n = 0; n < 256; n++) {
        c = n;
        for (var k = 0; k < 8; k++) {
          c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        }
        table3[n] = c;
      }
      return table3;
    }, "makeTable");
    var crcTable = new Uint32Array(makeTable());
    var crc32 = /* @__PURE__ */ __name((crc, buf, len, pos) => {
      const t = crcTable;
      const end = pos + len;
      crc ^= -1;
      for (let i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
      }
      return crc ^ -1;
    }, "crc32");
    module.exports = crc32;
  }
});

// node_modules/pako/lib/zlib/messages.js
var require_messages = __commonJS({
  "node_modules/pako/lib/zlib/messages.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = {
      2: "need dictionary",
      /* Z_NEED_DICT       2  */
      1: "stream end",
      /* Z_STREAM_END      1  */
      0: "",
      /* Z_OK              0  */
      "-1": "file error",
      /* Z_ERRNO         (-1) */
      "-2": "stream error",
      /* Z_STREAM_ERROR  (-2) */
      "-3": "data error",
      /* Z_DATA_ERROR    (-3) */
      "-4": "insufficient memory",
      /* Z_MEM_ERROR     (-4) */
      "-5": "buffer error",
      /* Z_BUF_ERROR     (-5) */
      "-6": "incompatible version"
      /* Z_VERSION_ERROR (-6) */
    };
  }
});

// node_modules/pako/lib/zlib/constants.js
var require_constants = __commonJS({
  "node_modules/pako/lib/zlib/constants.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = {
      /* Allowed flush values; see deflate() and inflate() below for details */
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      /* Return codes for the compression/decompression functions. Negative values
      * are errors, positive values are used for special but normal events.
      */
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      //Z_VERSION_ERROR: -6,
      /* compression levels */
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      /* Possible values of the data_type field (though see inflate()) */
      Z_BINARY: 0,
      Z_TEXT: 1,
      //Z_ASCII:                1, // = Z_TEXT (deprecated)
      Z_UNKNOWN: 2,
      /* The deflate compression method */
      Z_DEFLATED: 8
      //Z_NULL:                 null // Use -1 or null inline, depending on var type
    };
  }
});

// node_modules/pako/lib/zlib/deflate.js
var require_deflate = __commonJS({
  "node_modules/pako/lib/zlib/deflate.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = require_trees();
    var adler32 = require_adler32();
    var crc32 = require_crc32();
    var msg = require_messages();
    var {
      Z_NO_FLUSH,
      Z_PARTIAL_FLUSH,
      Z_FULL_FLUSH,
      Z_FINISH,
      Z_BLOCK,
      Z_OK,
      Z_STREAM_END,
      Z_STREAM_ERROR,
      Z_DATA_ERROR,
      Z_BUF_ERROR,
      Z_DEFAULT_COMPRESSION,
      Z_FILTERED,
      Z_HUFFMAN_ONLY,
      Z_RLE,
      Z_FIXED,
      Z_DEFAULT_STRATEGY,
      Z_UNKNOWN,
      Z_DEFLATED
    } = require_constants();
    var MAX_MEM_LEVEL = 9;
    var MAX_WBITS = 15;
    var DEF_MEM_LEVEL = 8;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
    var PRESET_DICT = 32;
    var INIT_STATE = 42;
    var GZIP_STATE = 57;
    var EXTRA_STATE = 69;
    var NAME_STATE = 73;
    var COMMENT_STATE = 91;
    var HCRC_STATE = 103;
    var BUSY_STATE = 113;
    var FINISH_STATE = 666;
    var BS_NEED_MORE = 1;
    var BS_BLOCK_DONE = 2;
    var BS_FINISH_STARTED = 3;
    var BS_FINISH_DONE = 4;
    var OS_CODE = 3;
    var err = /* @__PURE__ */ __name((strm, errorCode) => {
      strm.msg = msg[errorCode];
      return errorCode;
    }, "err");
    var rank = /* @__PURE__ */ __name((f) => {
      return f * 2 - (f > 4 ? 9 : 0);
    }, "rank");
    var zero = /* @__PURE__ */ __name((buf) => {
      let len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }, "zero");
    var slide_hash = /* @__PURE__ */ __name((s) => {
      let n, m;
      let p;
      let wsize = s.w_size;
      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = m >= wsize ? m - wsize : 0;
      } while (--n);
      n = wsize;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = m >= wsize ? m - wsize : 0;
      } while (--n);
    }, "slide_hash");
    var HASH_ZLIB = /* @__PURE__ */ __name((s, prev, data) => (prev << s.hash_shift ^ data) & s.hash_mask, "HASH_ZLIB");
    var HASH = HASH_ZLIB;
    var flush_pending = /* @__PURE__ */ __name((strm) => {
      const s = strm.state;
      let len = s.pending;
      if (len > strm.avail_out) {
        len = strm.avail_out;
      }
      if (len === 0) {
        return;
      }
      strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
      strm.next_out += len;
      s.pending_out += len;
      strm.total_out += len;
      strm.avail_out -= len;
      s.pending -= len;
      if (s.pending === 0) {
        s.pending_out = 0;
      }
    }, "flush_pending");
    var flush_block_only = /* @__PURE__ */ __name((s, last) => {
      _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
      s.block_start = s.strstart;
      flush_pending(s.strm);
    }, "flush_block_only");
    var put_byte = /* @__PURE__ */ __name((s, b) => {
      s.pending_buf[s.pending++] = b;
    }, "put_byte");
    var putShortMSB = /* @__PURE__ */ __name((s, b) => {
      s.pending_buf[s.pending++] = b >>> 8 & 255;
      s.pending_buf[s.pending++] = b & 255;
    }, "putShortMSB");
    var read_buf = /* @__PURE__ */ __name((strm, buf, start, size) => {
      let len = strm.avail_in;
      if (len > size) {
        len = size;
      }
      if (len === 0) {
        return 0;
      }
      strm.avail_in -= len;
      buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
      if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start);
      } else if (strm.state.wrap === 2) {
        strm.adler = crc32(strm.adler, buf, len, start);
      }
      strm.next_in += len;
      strm.total_in += len;
      return len;
    }, "read_buf");
    var longest_match = /* @__PURE__ */ __name((s, cur_match) => {
      let chain_length = s.max_chain_length;
      let scan = s.strstart;
      let match2;
      let len;
      let best_len = s.prev_length;
      let nice_match = s.nice_match;
      const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
      const _win = s.window;
      const wmask = s.w_mask;
      const prev = s.prev;
      const strend = s.strstart + MAX_MATCH;
      let scan_end1 = _win[scan + best_len - 1];
      let scan_end = _win[scan + best_len];
      if (s.prev_length >= s.good_match) {
        chain_length >>= 2;
      }
      if (nice_match > s.lookahead) {
        nice_match = s.lookahead;
      }
      do {
        match2 = cur_match;
        if (_win[match2 + best_len] !== scan_end || _win[match2 + best_len - 1] !== scan_end1 || _win[match2] !== _win[scan] || _win[++match2] !== _win[scan + 1]) {
          continue;
        }
        scan += 2;
        match2++;
        do {
        } while (_win[++scan] === _win[++match2] && _win[++scan] === _win[++match2] && _win[++scan] === _win[++match2] && _win[++scan] === _win[++match2] && _win[++scan] === _win[++match2] && _win[++scan] === _win[++match2] && _win[++scan] === _win[++match2] && _win[++scan] === _win[++match2] && scan < strend);
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
          s.match_start = cur_match;
          best_len = len;
          if (len >= nice_match) {
            break;
          }
          scan_end1 = _win[scan + best_len - 1];
          scan_end = _win[scan + best_len];
        }
      } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
      if (best_len <= s.lookahead) {
        return best_len;
      }
      return s.lookahead;
    }, "longest_match");
    var fill_window = /* @__PURE__ */ __name((s) => {
      const _w_size = s.w_size;
      let n, more, str;
      do {
        more = s.window_size - s.lookahead - s.strstart;
        if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
          s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
          s.match_start -= _w_size;
          s.strstart -= _w_size;
          s.block_start -= _w_size;
          if (s.insert > s.strstart) {
            s.insert = s.strstart;
          }
          slide_hash(s);
          more += _w_size;
        }
        if (s.strm.avail_in === 0) {
          break;
        }
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        if (s.lookahead + s.insert >= MIN_MATCH) {
          str = s.strstart - s.insert;
          s.ins_h = s.window[str];
          s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
          while (s.insert) {
            s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
            s.insert--;
            if (s.lookahead + s.insert < MIN_MATCH) {
              break;
            }
          }
        }
      } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    }, "fill_window");
    var deflate_stored = /* @__PURE__ */ __name((s, flush) => {
      let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
      let len, left, have, last = 0;
      let used = s.strm.avail_in;
      do {
        len = 65535;
        have = s.bi_valid + 42 >> 3;
        if (s.strm.avail_out < have) {
          break;
        }
        have = s.strm.avail_out - have;
        left = s.strstart - s.block_start;
        if (len > left + s.strm.avail_in) {
          len = left + s.strm.avail_in;
        }
        if (len > have) {
          len = have;
        }
        if (len < min_block && (len === 0 && flush !== Z_FINISH || flush === Z_NO_FLUSH || len !== left + s.strm.avail_in)) {
          break;
        }
        last = flush === Z_FINISH && len === left + s.strm.avail_in ? 1 : 0;
        _tr_stored_block(s, 0, 0, last);
        s.pending_buf[s.pending - 4] = len;
        s.pending_buf[s.pending - 3] = len >> 8;
        s.pending_buf[s.pending - 2] = ~len;
        s.pending_buf[s.pending - 1] = ~len >> 8;
        flush_pending(s.strm);
        if (left) {
          if (left > len) {
            left = len;
          }
          s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
          s.strm.next_out += left;
          s.strm.avail_out -= left;
          s.strm.total_out += left;
          s.block_start += left;
          len -= left;
        }
        if (len) {
          read_buf(s.strm, s.strm.output, s.strm.next_out, len);
          s.strm.next_out += len;
          s.strm.avail_out -= len;
          s.strm.total_out += len;
        }
      } while (last === 0);
      used -= s.strm.avail_in;
      if (used) {
        if (used >= s.w_size) {
          s.matches = 2;
          s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
          s.strstart = s.w_size;
          s.insert = s.strstart;
        } else {
          if (s.window_size - s.strstart <= used) {
            s.strstart -= s.w_size;
            s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
            if (s.matches < 2) {
              s.matches++;
            }
            if (s.insert > s.strstart) {
              s.insert = s.strstart;
            }
          }
          s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
          s.strstart += used;
          s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
        }
        s.block_start = s.strstart;
      }
      if (s.high_water < s.strstart) {
        s.high_water = s.strstart;
      }
      if (last) {
        return BS_FINISH_DONE;
      }
      if (flush !== Z_NO_FLUSH && flush !== Z_FINISH && s.strm.avail_in === 0 && s.strstart === s.block_start) {
        return BS_BLOCK_DONE;
      }
      have = s.window_size - s.strstart;
      if (s.strm.avail_in > have && s.block_start >= s.w_size) {
        s.block_start -= s.w_size;
        s.strstart -= s.w_size;
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) {
          s.matches++;
        }
        have += s.w_size;
        if (s.insert > s.strstart) {
          s.insert = s.strstart;
        }
      }
      if (have > s.strm.avail_in) {
        have = s.strm.avail_in;
      }
      if (have) {
        read_buf(s.strm, s.window, s.strstart, have);
        s.strstart += have;
        s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
      }
      if (s.high_water < s.strstart) {
        s.high_water = s.strstart;
      }
      have = s.bi_valid + 42 >> 3;
      have = s.pending_buf_size - have > 65535 ? 65535 : s.pending_buf_size - have;
      min_block = have > s.w_size ? s.w_size : have;
      left = s.strstart - s.block_start;
      if (left >= min_block || (left || flush === Z_FINISH) && flush !== Z_NO_FLUSH && s.strm.avail_in === 0 && left <= have) {
        len = left > have ? have : left;
        last = flush === Z_FINISH && s.strm.avail_in === 0 && len === left ? 1 : 0;
        _tr_stored_block(s, s.block_start, len, last);
        s.block_start += len;
        flush_pending(s.strm);
      }
      return last ? BS_FINISH_STARTED : BS_NEED_MORE;
    }, "deflate_stored");
    var deflate_fast = /* @__PURE__ */ __name((s, flush) => {
      let hash_head;
      let bflush;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
            s.match_length--;
            do {
              s.strstart++;
              s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            } while (--s.match_length !== 0);
            s.strstart++;
          } else {
            s.strstart += s.match_length;
            s.match_length = 0;
            s.ins_h = s.window[s.strstart];
            s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
          }
        } else {
          bflush = _tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.sym_next) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }, "deflate_fast");
    var deflate_slow = /* @__PURE__ */ __name((s, flush) => {
      let hash_head;
      let bflush;
      let max_insert;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
          if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
            s.match_length = MIN_MATCH - 1;
          }
        }
        if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
          max_insert = s.strstart + s.lookahead - MIN_MATCH;
          bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
          s.lookahead -= s.prev_length - 1;
          s.prev_length -= 2;
          do {
            if (++s.strstart <= max_insert) {
              s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            }
          } while (--s.prev_length !== 0);
          s.match_available = 0;
          s.match_length = MIN_MATCH - 1;
          s.strstart++;
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        } else if (s.match_available) {
          bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
          if (bflush) {
            flush_block_only(s, false);
          }
          s.strstart++;
          s.lookahead--;
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        } else {
          s.match_available = 1;
          s.strstart++;
          s.lookahead--;
        }
      }
      if (s.match_available) {
        bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.sym_next) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }, "deflate_slow");
    var deflate_rle = /* @__PURE__ */ __name((s, flush) => {
      let bflush;
      let prev;
      let scan, strend;
      const _win = s.window;
      for (; ; ) {
        if (s.lookahead <= MAX_MATCH) {
          fill_window(s);
          if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
          scan = s.strstart - 1;
          prev = _win[scan];
          if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
            strend = s.strstart + MAX_MATCH;
            do {
            } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
            s.match_length = MAX_MATCH - (strend - scan);
            if (s.match_length > s.lookahead) {
              s.match_length = s.lookahead;
            }
          }
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          s.strstart += s.match_length;
          s.match_length = 0;
        } else {
          bflush = _tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.sym_next) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }, "deflate_rle");
    var deflate_huff = /* @__PURE__ */ __name((s, flush) => {
      let bflush;
      for (; ; ) {
        if (s.lookahead === 0) {
          fill_window(s);
          if (s.lookahead === 0) {
            if (flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            break;
          }
        }
        s.match_length = 0;
        bflush = _tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.sym_next) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }, "deflate_huff");
    function Config(good_length, max_lazy, nice_length, max_chain, func) {
      this.good_length = good_length;
      this.max_lazy = max_lazy;
      this.nice_length = nice_length;
      this.max_chain = max_chain;
      this.func = func;
    }
    __name(Config, "Config");
    var configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored),
      /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast),
      /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast),
      /* 2 */
      new Config(4, 6, 32, 32, deflate_fast),
      /* 3 */
      new Config(4, 4, 16, 16, deflate_slow),
      /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow),
      /* 5 */
      new Config(8, 16, 128, 128, deflate_slow),
      /* 6 */
      new Config(8, 32, 128, 256, deflate_slow),
      /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow),
      /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow)
      /* 9 max compression */
    ];
    var lm_init = /* @__PURE__ */ __name((s) => {
      s.window_size = 2 * s.w_size;
      zero(s.head);
      s.max_lazy_match = configuration_table[s.level].max_lazy;
      s.good_match = configuration_table[s.level].good_length;
      s.nice_match = configuration_table[s.level].nice_length;
      s.max_chain_length = configuration_table[s.level].max_chain;
      s.strstart = 0;
      s.block_start = 0;
      s.lookahead = 0;
      s.insert = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      s.ins_h = 0;
    }, "lm_init");
    function DeflateState() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Z_DEFLATED;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
      this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
      this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
      zero(this.dyn_ltree);
      zero(this.dyn_dtree);
      zero(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(MAX_BITS + 1);
      this.heap = new Uint16Array(2 * L_CODES + 1);
      zero(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(2 * L_CODES + 1);
      zero(this.depth);
      this.sym_buf = 0;
      this.lit_bufsize = 0;
      this.sym_next = 0;
      this.sym_end = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    __name(DeflateState, "DeflateState");
    var deflateStateCheck = /* @__PURE__ */ __name((strm) => {
      if (!strm) {
        return 1;
      }
      const s = strm.state;
      if (!s || s.strm !== strm || s.status !== INIT_STATE && //#ifdef GZIP
      s.status !== GZIP_STATE && //#endif
      s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) {
        return 1;
      }
      return 0;
    }, "deflateStateCheck");
    var deflateResetKeep = /* @__PURE__ */ __name((strm) => {
      if (deflateStateCheck(strm)) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.total_in = strm.total_out = 0;
      strm.data_type = Z_UNKNOWN;
      const s = strm.state;
      s.pending = 0;
      s.pending_out = 0;
      if (s.wrap < 0) {
        s.wrap = -s.wrap;
      }
      s.status = //#ifdef GZIP
      s.wrap === 2 ? GZIP_STATE : (
        //#endif
        s.wrap ? INIT_STATE : BUSY_STATE
      );
      strm.adler = s.wrap === 2 ? 0 : 1;
      s.last_flush = -2;
      _tr_init(s);
      return Z_OK;
    }, "deflateResetKeep");
    var deflateReset = /* @__PURE__ */ __name((strm) => {
      const ret = deflateResetKeep(strm);
      if (ret === Z_OK) {
        lm_init(strm.state);
      }
      return ret;
    }, "deflateReset");
    var deflateSetHeader = /* @__PURE__ */ __name((strm, head) => {
      if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
        return Z_STREAM_ERROR;
      }
      strm.state.gzhead = head;
      return Z_OK;
    }, "deflateSetHeader");
    var deflateInit2 = /* @__PURE__ */ __name((strm, level, method, windowBits, memLevel, strategy) => {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      let wrap = 1;
      if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
      }
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else if (windowBits > 15) {
        wrap = 2;
        windowBits -= 16;
      }
      if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) {
        return err(strm, Z_STREAM_ERROR);
      }
      if (windowBits === 8) {
        windowBits = 9;
      }
      const s = new DeflateState();
      strm.state = s;
      s.strm = strm;
      s.status = INIT_STATE;
      s.wrap = wrap;
      s.gzhead = null;
      s.w_bits = windowBits;
      s.w_size = 1 << s.w_bits;
      s.w_mask = s.w_size - 1;
      s.hash_bits = memLevel + 7;
      s.hash_size = 1 << s.hash_bits;
      s.hash_mask = s.hash_size - 1;
      s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
      s.window = new Uint8Array(s.w_size * 2);
      s.head = new Uint16Array(s.hash_size);
      s.prev = new Uint16Array(s.w_size);
      s.lit_bufsize = 1 << memLevel + 6;
      s.pending_buf_size = s.lit_bufsize * 4;
      s.pending_buf = new Uint8Array(s.pending_buf_size);
      s.sym_buf = s.lit_bufsize;
      s.sym_end = (s.lit_bufsize - 1) * 3;
      s.level = level;
      s.strategy = strategy;
      s.method = method;
      return deflateReset(strm);
    }, "deflateInit2");
    var deflateInit = /* @__PURE__ */ __name((strm, level) => {
      return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
    }, "deflateInit");
    var deflate = /* @__PURE__ */ __name((strm, flush) => {
      if (deflateStateCheck(strm) || flush > Z_BLOCK || flush < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
      }
      const s = strm.state;
      if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH) {
        return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
      }
      const old_flush = s.last_flush;
      s.last_flush = flush;
      if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
      }
      if (s.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
      }
      if (s.status === INIT_STATE && s.wrap === 0) {
        s.status = BUSY_STATE;
      }
      if (s.status === INIT_STATE) {
        let header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
        let level_flags = -1;
        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
          level_flags = 0;
        } else if (s.level < 6) {
          level_flags = 1;
        } else if (s.level === 6) {
          level_flags = 2;
        } else {
          level_flags = 3;
        }
        header |= level_flags << 6;
        if (s.strstart !== 0) {
          header |= PRESET_DICT;
        }
        header += 31 - header % 31;
        putShortMSB(s, header);
        if (s.strstart !== 0) {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 65535);
        }
        strm.adler = 1;
        s.status = BUSY_STATE;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      }
      if (s.status === GZIP_STATE) {
        strm.adler = 0;
        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);
        if (!s.gzhead) {
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, 0);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, OS_CODE);
          s.status = BUSY_STATE;
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        } else {
          put_byte(
            s,
            (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
          );
          put_byte(s, s.gzhead.time & 255);
          put_byte(s, s.gzhead.time >> 8 & 255);
          put_byte(s, s.gzhead.time >> 16 & 255);
          put_byte(s, s.gzhead.time >> 24 & 255);
          put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
          put_byte(s, s.gzhead.os & 255);
          if (s.gzhead.extra && s.gzhead.extra.length) {
            put_byte(s, s.gzhead.extra.length & 255);
            put_byte(s, s.gzhead.extra.length >> 8 & 255);
          }
          if (s.gzhead.hcrc) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
          }
          s.gzindex = 0;
          s.status = EXTRA_STATE;
        }
      }
      if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra) {
          let beg = s.pending;
          let left = (s.gzhead.extra.length & 65535) - s.gzindex;
          while (s.pending + left > s.pending_buf_size) {
            let copy = s.pending_buf_size - s.pending;
            s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
            s.pending = s.pending_buf_size;
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
            }
            s.gzindex += copy;
            flush_pending(strm);
            if (s.pending !== 0) {
              s.last_flush = -1;
              return Z_OK;
            }
            beg = 0;
            left -= copy;
          }
          let gzhead_extra = new Uint8Array(s.gzhead.extra);
          s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
          s.pending += left;
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          s.gzindex = 0;
        }
        s.status = NAME_STATE;
      }
      if (s.status === NAME_STATE) {
        if (s.gzhead.name) {
          let beg = s.pending;
          let val;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              if (s.pending !== 0) {
                s.last_flush = -1;
                return Z_OK;
              }
              beg = 0;
            }
            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          s.gzindex = 0;
        }
        s.status = COMMENT_STATE;
      }
      if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment) {
          let beg = s.pending;
          let val;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              if (s.pending !== 0) {
                s.last_flush = -1;
                return Z_OK;
              }
              beg = 0;
            }
            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
        }
        s.status = HCRC_STATE;
      }
      if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
          if (s.pending + 2 > s.pending_buf_size) {
            flush_pending(strm);
            if (s.pending !== 0) {
              s.last_flush = -1;
              return Z_OK;
            }
          }
          put_byte(s, strm.adler & 255);
          put_byte(s, strm.adler >> 8 & 255);
          strm.adler = 0;
        }
        s.status = BUSY_STATE;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      }
      if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
        let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
          s.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
          if (strm.avail_out === 0) {
            s.last_flush = -1;
          }
          return Z_OK;
        }
        if (bstate === BS_BLOCK_DONE) {
          if (flush === Z_PARTIAL_FLUSH) {
            _tr_align(s);
          } else if (flush !== Z_BLOCK) {
            _tr_stored_block(s, 0, 0, false);
            if (flush === Z_FULL_FLUSH) {
              zero(s.head);
              if (s.lookahead === 0) {
                s.strstart = 0;
                s.block_start = 0;
                s.insert = 0;
              }
            }
          }
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        }
      }
      if (flush !== Z_FINISH) {
        return Z_OK;
      }
      if (s.wrap <= 0) {
        return Z_STREAM_END;
      }
      if (s.wrap === 2) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        put_byte(s, strm.adler >> 16 & 255);
        put_byte(s, strm.adler >> 24 & 255);
        put_byte(s, strm.total_in & 255);
        put_byte(s, strm.total_in >> 8 & 255);
        put_byte(s, strm.total_in >> 16 & 255);
        put_byte(s, strm.total_in >> 24 & 255);
      } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
      }
      flush_pending(strm);
      if (s.wrap > 0) {
        s.wrap = -s.wrap;
      }
      return s.pending !== 0 ? Z_OK : Z_STREAM_END;
    }, "deflate");
    var deflateEnd = /* @__PURE__ */ __name((strm) => {
      if (deflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const status = strm.state.status;
      strm.state = null;
      return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
    }, "deflateEnd");
    var deflateSetDictionary = /* @__PURE__ */ __name((strm, dictionary) => {
      let dictLength = dictionary.length;
      if (deflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const s = strm.state;
      const wrap = s.wrap;
      if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
        return Z_STREAM_ERROR;
      }
      if (wrap === 1) {
        strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
      }
      s.wrap = 0;
      if (dictLength >= s.w_size) {
        if (wrap === 0) {
          zero(s.head);
          s.strstart = 0;
          s.block_start = 0;
          s.insert = 0;
        }
        let tmpDict = new Uint8Array(s.w_size);
        tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
      }
      const avail = strm.avail_in;
      const next = strm.next_in;
      const input = strm.input;
      strm.avail_in = dictLength;
      strm.next_in = 0;
      strm.input = dictionary;
      fill_window(s);
      while (s.lookahead >= MIN_MATCH) {
        let str = s.strstart;
        let n = s.lookahead - (MIN_MATCH - 1);
        do {
          s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
        } while (--n);
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
      }
      s.strstart += s.lookahead;
      s.block_start = s.strstart;
      s.insert = s.lookahead;
      s.lookahead = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      strm.next_in = next;
      strm.input = input;
      strm.avail_in = avail;
      s.wrap = wrap;
      return Z_OK;
    }, "deflateSetDictionary");
    module.exports.deflateInit = deflateInit;
    module.exports.deflateInit2 = deflateInit2;
    module.exports.deflateReset = deflateReset;
    module.exports.deflateResetKeep = deflateResetKeep;
    module.exports.deflateSetHeader = deflateSetHeader;
    module.exports.deflate = deflate;
    module.exports.deflateEnd = deflateEnd;
    module.exports.deflateSetDictionary = deflateSetDictionary;
    module.exports.deflateInfo = "pako deflate (from Nodeca project)";
  }
});

// node_modules/pako/lib/utils/common.js
var require_common = __commonJS({
  "node_modules/pako/lib/utils/common.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var _has = /* @__PURE__ */ __name((obj, key) => {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }, "_has");
    module.exports.assign = function(obj) {
      const sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        const source = sources.shift();
        if (!source) {
          continue;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be non-object");
        }
        for (const p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }
      return obj;
    };
    module.exports.flattenChunks = (chunks) => {
      let len = 0;
      for (let i = 0, l = chunks.length; i < l; i++) {
        len += chunks[i].length;
      }
      const result = new Uint8Array(len);
      for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
        let chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
      }
      return result;
    };
  }
});

// node_modules/pako/lib/utils/strings.js
var require_strings = __commonJS({
  "node_modules/pako/lib/utils/strings.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var STR_APPLY_UIA_OK = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (__) {
      STR_APPLY_UIA_OK = false;
    }
    var _utf8len = new Uint8Array(256);
    for (let q = 0; q < 256; q++) {
      _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
    }
    _utf8len[254] = _utf8len[254] = 1;
    module.exports.string2buf = (str) => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(str);
      }
      let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      buf = new Uint8Array(buf_len);
      for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        if (c < 128) {
          buf[i++] = c;
        } else if (c < 2048) {
          buf[i++] = 192 | c >>> 6;
          buf[i++] = 128 | c & 63;
        } else if (c < 65536) {
          buf[i++] = 224 | c >>> 12;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        } else {
          buf[i++] = 240 | c >>> 18;
          buf[i++] = 128 | c >>> 12 & 63;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        }
      }
      return buf;
    };
    var buf2binstring = /* @__PURE__ */ __name((buf, len) => {
      if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK) {
          return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
        }
      }
      let result = "";
      for (let i = 0; i < len; i++) {
        result += String.fromCharCode(buf[i]);
      }
      return result;
    }, "buf2binstring");
    module.exports.buf2string = (buf, max) => {
      const len = max || buf.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(buf.subarray(0, max));
      }
      let i, out;
      const utf16buf = new Array(len * 2);
      for (out = 0, i = 0; i < len; ) {
        let c = buf[i++];
        if (c < 128) {
          utf16buf[out++] = c;
          continue;
        }
        let c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 65533;
          i += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while (c_len > 1 && i < len) {
          c = c << 6 | buf[i++] & 63;
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 65533;
          continue;
        }
        if (c < 65536) {
          utf16buf[out++] = c;
        } else {
          c -= 65536;
          utf16buf[out++] = 55296 | c >> 10 & 1023;
          utf16buf[out++] = 56320 | c & 1023;
        }
      }
      return buf2binstring(utf16buf, out);
    };
    module.exports.utf8border = (buf, max) => {
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      let pos = max - 1;
      while (pos >= 0 && (buf[pos] & 192) === 128) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return pos + _utf8len[buf[pos]] > max ? pos : max;
    };
  }
});

// node_modules/pako/lib/zlib/zstream.js
var require_zstream = __commonJS({
  "node_modules/pako/lib/zlib/zstream.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function ZStream() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    __name(ZStream, "ZStream");
    module.exports = ZStream;
  }
});

// node_modules/pako/lib/deflate.js
var require_deflate2 = __commonJS({
  "node_modules/pako/lib/deflate.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var zlib_deflate = require_deflate();
    var utils = require_common();
    var strings = require_strings();
    var msg = require_messages();
    var ZStream = require_zstream();
    var toString = Object.prototype.toString;
    var {
      Z_NO_FLUSH,
      Z_SYNC_FLUSH,
      Z_FULL_FLUSH,
      Z_FINISH,
      Z_OK,
      Z_STREAM_END,
      Z_DEFAULT_COMPRESSION,
      Z_DEFAULT_STRATEGY,
      Z_DEFLATED
    } = require_constants();
    function Deflate(options) {
      this.options = utils.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY
      }, options || {});
      let opt = this.options;
      if (opt.raw && opt.windowBits > 0) {
        opt.windowBits = -opt.windowBits;
      } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
        opt.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      let status = zlib_deflate.deflateInit2(
        this.strm,
        opt.level,
        opt.method,
        opt.windowBits,
        opt.memLevel,
        opt.strategy
      );
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      if (opt.header) {
        zlib_deflate.deflateSetHeader(this.strm, opt.header);
      }
      if (opt.dictionary) {
        let dict;
        if (typeof opt.dictionary === "string") {
          dict = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          dict = new Uint8Array(opt.dictionary);
        } else {
          dict = opt.dictionary;
        }
        status = zlib_deflate.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }
        this._dict_set = true;
      }
    }
    __name(Deflate, "Deflate");
    Deflate.prototype.push = function(data, flush_mode) {
      const strm = this.strm;
      const chunkSize = this.options.chunkSize;
      let status, _flush_mode;
      if (this.ended) {
        return false;
      }
      if (flush_mode === ~~flush_mode)
        _flush_mode = flush_mode;
      else
        _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.string2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      for (; ; ) {
        if (strm.avail_out === 0) {
          strm.output = new Uint8Array(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
          this.onData(strm.output.subarray(0, strm.next_out));
          strm.avail_out = 0;
          continue;
        }
        status = zlib_deflate.deflate(strm, _flush_mode);
        if (status === Z_STREAM_END) {
          if (strm.next_out > 0) {
            this.onData(strm.output.subarray(0, strm.next_out));
          }
          status = zlib_deflate.deflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === Z_OK;
        }
        if (strm.avail_out === 0) {
          this.onData(strm.output);
          continue;
        }
        if (_flush_mode > 0 && strm.next_out > 0) {
          this.onData(strm.output.subarray(0, strm.next_out));
          strm.avail_out = 0;
          continue;
        }
        if (strm.avail_in === 0)
          break;
      }
      return true;
    };
    Deflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Deflate.prototype.onEnd = function(status) {
      if (status === Z_OK) {
        this.result = utils.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function deflate(input, options) {
      const deflator = new Deflate(options);
      deflator.push(input, true);
      if (deflator.err) {
        throw deflator.msg || msg[deflator.err];
      }
      return deflator.result;
    }
    __name(deflate, "deflate");
    function deflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return deflate(input, options);
    }
    __name(deflateRaw, "deflateRaw");
    function gzip(input, options) {
      options = options || {};
      options.gzip = true;
      return deflate(input, options);
    }
    __name(gzip, "gzip");
    module.exports.Deflate = Deflate;
    module.exports.deflate = deflate;
    module.exports.deflateRaw = deflateRaw;
    module.exports.gzip = gzip;
    module.exports.constants = require_constants();
  }
});

// node_modules/pako/lib/zlib/inffast.js
var require_inffast = __commonJS({
  "node_modules/pako/lib/zlib/inffast.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var BAD = 16209;
    var TYPE = 16191;
    module.exports = /* @__PURE__ */ __name(function inflate_fast(strm, start) {
      let _in;
      let last;
      let _out;
      let beg;
      let end;
      let dmax;
      let wsize;
      let whave;
      let wnext;
      let s_window;
      let hold;
      let bits;
      let lcode;
      let dcode;
      let lmask;
      let dmask;
      let here;
      let op;
      let len;
      let dist;
      let from;
      let from_source;
      let input, output;
      const state = strm.state;
      _in = strm.next_in;
      input = strm.input;
      last = _in + (strm.avail_in - 5);
      _out = strm.next_out;
      output = strm.output;
      beg = _out - (start - strm.avail_out);
      end = _out + (strm.avail_out - 257);
      dmax = state.dmax;
      wsize = state.wsize;
      whave = state.whave;
      wnext = state.wnext;
      s_window = state.window;
      hold = state.hold;
      bits = state.bits;
      lcode = state.lencode;
      dcode = state.distcode;
      lmask = (1 << state.lenbits) - 1;
      dmask = (1 << state.distbits) - 1;
      top:
        do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }
          here = lcode[hold & lmask];
          dolen:
            for (; ; ) {
              op = here >>> 24;
              hold >>>= op;
              bits -= op;
              op = here >>> 16 & 255;
              if (op === 0) {
                output[_out++] = here & 65535;
              } else if (op & 16) {
                len = here & 65535;
                op &= 15;
                if (op) {
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                  len += hold & (1 << op) - 1;
                  hold >>>= op;
                  bits -= op;
                }
                if (bits < 15) {
                  hold += input[_in++] << bits;
                  bits += 8;
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                here = dcode[hold & dmask];
                dodist:
                  for (; ; ) {
                    op = here >>> 24;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 255;
                    if (op & 16) {
                      dist = here & 65535;
                      op &= 15;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        if (bits < op) {
                          hold += input[_in++] << bits;
                          bits += 8;
                        }
                      }
                      dist += hold & (1 << op) - 1;
                      if (dist > dmax) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break top;
                      }
                      hold >>>= op;
                      bits -= op;
                      op = _out - beg;
                      if (dist > op) {
                        op = dist - op;
                        if (op > whave) {
                          if (state.sane) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD;
                            break top;
                          }
                        }
                        from = 0;
                        from_source = s_window;
                        if (wnext === 0) {
                          from += wsize - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        } else if (wnext < op) {
                          from += wsize + wnext - op;
                          op -= wnext;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = 0;
                            if (wnext < len) {
                              op = wnext;
                              len -= op;
                              do {
                                output[_out++] = s_window[from++];
                              } while (--op);
                              from = _out - dist;
                              from_source = output;
                            }
                          }
                        } else {
                          from += wnext - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                        while (len > 2) {
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          len -= 3;
                        }
                        if (len) {
                          output[_out++] = from_source[from++];
                          if (len > 1) {
                            output[_out++] = from_source[from++];
                          }
                        }
                      } else {
                        from = _out - dist;
                        do {
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          len -= 3;
                        } while (len > 2);
                        if (len) {
                          output[_out++] = output[from++];
                          if (len > 1) {
                            output[_out++] = output[from++];
                          }
                        }
                      }
                    } else if ((op & 64) === 0) {
                      here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                      continue dodist;
                    } else {
                      strm.msg = "invalid distance code";
                      state.mode = BAD;
                      break top;
                    }
                    break;
                  }
              } else if ((op & 64) === 0) {
                here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                continue dolen;
              } else if (op & 32) {
                state.mode = TYPE;
                break top;
              } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break top;
              }
              break;
            }
        } while (_in < last && _out < end);
      len = bits >> 3;
      _in -= len;
      bits -= len << 3;
      hold &= (1 << bits) - 1;
      strm.next_in = _in;
      strm.next_out = _out;
      strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
      strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
      state.hold = hold;
      state.bits = bits;
      return;
    }, "inflate_fast");
  }
});

// node_modules/pako/lib/zlib/inftrees.js
var require_inftrees = __commonJS({
  "node_modules/pako/lib/zlib/inftrees.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var lbase = new Uint16Array([
      /* Length codes 257..285 base */
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ]);
    var lext = new Uint8Array([
      /* Length codes 257..285 extra */
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ]);
    var dbase = new Uint16Array([
      /* Distance codes 0..29 base */
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ]);
    var dext = new Uint8Array([
      /* Distance codes 0..29 extra */
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ]);
    var inflate_table = /* @__PURE__ */ __name((type, lens, lens_index, codes, table3, table_index, work, opts) => {
      const bits = opts.bits;
      let len = 0;
      let sym = 0;
      let min = 0, max = 0;
      let root = 0;
      let curr = 0;
      let drop = 0;
      let left = 0;
      let used = 0;
      let huff = 0;
      let incr;
      let fill;
      let low;
      let mask;
      let next;
      let base = null;
      let match2;
      const count3 = new Uint16Array(MAXBITS + 1);
      const offs = new Uint16Array(MAXBITS + 1);
      let extra = null;
      let here_bits, here_op, here_val;
      for (len = 0; len <= MAXBITS; len++) {
        count3[len] = 0;
      }
      for (sym = 0; sym < codes; sym++) {
        count3[lens[lens_index + sym]]++;
      }
      root = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count3[max] !== 0) {
          break;
        }
      }
      if (root > max) {
        root = max;
      }
      if (max === 0) {
        table3[table_index++] = 1 << 24 | 64 << 16 | 0;
        table3[table_index++] = 1 << 24 | 64 << 16 | 0;
        opts.bits = 1;
        return 0;
      }
      for (min = 1; min < max; min++) {
        if (count3[min] !== 0) {
          break;
        }
      }
      if (root < min) {
        root = min;
      }
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count3[len];
        if (left < 0) {
          return -1;
        }
      }
      if (left > 0 && (type === CODES || max !== 1)) {
        return -1;
      }
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count3[len];
      }
      for (sym = 0; sym < codes; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
        }
      }
      if (type === CODES) {
        base = extra = work;
        match2 = 20;
      } else if (type === LENS) {
        base = lbase;
        extra = lext;
        match2 = 257;
      } else {
        base = dbase;
        extra = dext;
        match2 = 0;
      }
      huff = 0;
      sym = 0;
      len = min;
      next = table_index;
      curr = root;
      drop = 0;
      low = -1;
      used = 1 << root;
      mask = used - 1;
      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      for (; ; ) {
        here_bits = len - drop;
        if (work[sym] + 1 < match2) {
          here_op = 0;
          here_val = work[sym];
        } else if (work[sym] >= match2) {
          here_op = extra[work[sym] - match2];
          here_val = base[work[sym] - match2];
        } else {
          here_op = 32 + 64;
          here_val = 0;
        }
        incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill;
        do {
          fill -= incr;
          table3[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        } while (fill !== 0);
        incr = 1 << len - 1;
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }
        sym++;
        if (--count3[len] === 0) {
          if (len === max) {
            break;
          }
          len = lens[lens_index + work[sym]];
        }
        if (len > root && (huff & mask) !== low) {
          if (drop === 0) {
            drop = root;
          }
          next += min;
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count3[curr + drop];
            if (left <= 0) {
              break;
            }
            curr++;
            left <<= 1;
          }
          used += 1 << curr;
          if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
            return 1;
          }
          low = huff & mask;
          table3[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
      }
      if (huff !== 0) {
        table3[next + huff] = len - drop << 24 | 64 << 16 | 0;
      }
      opts.bits = root;
      return 0;
    }, "inflate_table");
    module.exports = inflate_table;
  }
});

// node_modules/pako/lib/zlib/inflate.js
var require_inflate = __commonJS({
  "node_modules/pako/lib/zlib/inflate.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var adler32 = require_adler32();
    var crc32 = require_crc32();
    var inflate_fast = require_inffast();
    var inflate_table = require_inftrees();
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var {
      Z_FINISH,
      Z_BLOCK,
      Z_TREES,
      Z_OK,
      Z_STREAM_END,
      Z_NEED_DICT,
      Z_STREAM_ERROR,
      Z_DATA_ERROR,
      Z_MEM_ERROR,
      Z_BUF_ERROR,
      Z_DEFLATED
    } = require_constants();
    var HEAD = 16180;
    var FLAGS = 16181;
    var TIME = 16182;
    var OS = 16183;
    var EXLEN = 16184;
    var EXTRA = 16185;
    var NAME = 16186;
    var COMMENT = 16187;
    var HCRC = 16188;
    var DICTID = 16189;
    var DICT = 16190;
    var TYPE = 16191;
    var TYPEDO = 16192;
    var STORED = 16193;
    var COPY_ = 16194;
    var COPY = 16195;
    var TABLE = 16196;
    var LENLENS = 16197;
    var CODELENS = 16198;
    var LEN_ = 16199;
    var LEN = 16200;
    var LENEXT = 16201;
    var DIST = 16202;
    var DISTEXT = 16203;
    var MATCH = 16204;
    var LIT = 16205;
    var CHECK = 16206;
    var LENGTH = 16207;
    var DONE = 16208;
    var BAD = 16209;
    var MEM = 16210;
    var SYNC = 16211;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var MAX_WBITS = 15;
    var DEF_WBITS = MAX_WBITS;
    var zswap32 = /* @__PURE__ */ __name((q) => {
      return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
    }, "zswap32");
    function InflateState() {
      this.strm = null;
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new Uint16Array(320);
      this.work = new Uint16Array(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    __name(InflateState, "InflateState");
    var inflateStateCheck = /* @__PURE__ */ __name((strm) => {
      if (!strm) {
        return 1;
      }
      const state = strm.state;
      if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) {
        return 1;
      }
      return 0;
    }, "inflateStateCheck");
    var inflateResetKeep = /* @__PURE__ */ __name((strm) => {
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const state = strm.state;
      strm.total_in = strm.total_out = state.total = 0;
      strm.msg = "";
      if (state.wrap) {
        strm.adler = state.wrap & 1;
      }
      state.mode = HEAD;
      state.last = 0;
      state.havedict = 0;
      state.flags = -1;
      state.dmax = 32768;
      state.head = null;
      state.hold = 0;
      state.bits = 0;
      state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
      state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
      state.sane = 1;
      state.back = -1;
      return Z_OK;
    }, "inflateResetKeep");
    var inflateReset = /* @__PURE__ */ __name((strm) => {
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const state = strm.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      return inflateResetKeep(strm);
    }, "inflateReset");
    var inflateReset2 = /* @__PURE__ */ __name((strm, windowBits) => {
      let wrap;
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const state = strm.state;
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else {
        wrap = (windowBits >> 4) + 5;
        if (windowBits < 48) {
          windowBits &= 15;
        }
      }
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      }
      if (state.window !== null && state.wbits !== windowBits) {
        state.window = null;
      }
      state.wrap = wrap;
      state.wbits = windowBits;
      return inflateReset(strm);
    }, "inflateReset2");
    var inflateInit2 = /* @__PURE__ */ __name((strm, windowBits) => {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      const state = new InflateState();
      strm.state = state;
      state.strm = strm;
      state.window = null;
      state.mode = HEAD;
      const ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null;
      }
      return ret;
    }, "inflateInit2");
    var inflateInit = /* @__PURE__ */ __name((strm) => {
      return inflateInit2(strm, DEF_WBITS);
    }, "inflateInit");
    var virgin = true;
    var lenfix;
    var distfix;
    var fixedtables = /* @__PURE__ */ __name((state) => {
      if (virgin) {
        lenfix = new Int32Array(512);
        distfix = new Int32Array(32);
        let sym = 0;
        while (sym < 144) {
          state.lens[sym++] = 8;
        }
        while (sym < 256) {
          state.lens[sym++] = 9;
        }
        while (sym < 280) {
          state.lens[sym++] = 7;
        }
        while (sym < 288) {
          state.lens[sym++] = 8;
        }
        inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
        sym = 0;
        while (sym < 32) {
          state.lens[sym++] = 5;
        }
        inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
        virgin = false;
      }
      state.lencode = lenfix;
      state.lenbits = 9;
      state.distcode = distfix;
      state.distbits = 5;
    }, "fixedtables");
    var updatewindow = /* @__PURE__ */ __name((strm, src, end, copy) => {
      let dist;
      const state = strm.state;
      if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new Uint8Array(state.wsize);
      }
      if (copy >= state.wsize) {
        state.window.set(src.subarray(end - state.wsize, end), 0);
        state.wnext = 0;
        state.whave = state.wsize;
      } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) {
          dist = copy;
        }
        state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
        copy -= dist;
        if (copy) {
          state.window.set(src.subarray(end - copy, end), 0);
          state.wnext = copy;
          state.whave = state.wsize;
        } else {
          state.wnext += dist;
          if (state.wnext === state.wsize) {
            state.wnext = 0;
          }
          if (state.whave < state.wsize) {
            state.whave += dist;
          }
        }
      }
      return 0;
    }, "updatewindow");
    var inflate = /* @__PURE__ */ __name((strm, flush) => {
      let state;
      let input, output;
      let next;
      let put;
      let have, left;
      let hold;
      let bits;
      let _in, _out;
      let copy;
      let from;
      let from_source;
      let here = 0;
      let here_bits, here_op, here_val;
      let last_bits, last_op, last_val;
      let len;
      let ret;
      const hbuf = new Uint8Array(4);
      let opts;
      let n;
      const order = (
        /* permutation of code lengths */
        new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
      );
      if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.mode === TYPE) {
        state.mode = TYPEDO;
      }
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state.hold;
      bits = state.bits;
      _in = have;
      _out = left;
      ret = Z_OK;
      inf_leave:
        for (; ; ) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              }
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.wrap & 2 && hold === 35615) {
                if (state.wbits === 0) {
                  state.wbits = 15;
                }
                state.check = 0;
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
                hold = 0;
                bits = 0;
                state.mode = FLAGS;
                break;
              }
              if (state.head) {
                state.head.done = false;
              }
              if (!(state.wrap & 1) || /* check if zlib header allowed */
              (((hold & 255) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
              }
              if ((hold & 15) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              hold >>>= 4;
              bits -= 4;
              len = (hold & 15) + 8;
              if (state.wbits === 0) {
                state.wbits = len;
              }
              if (len > 15 || len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
              }
              state.dmax = 1 << state.wbits;
              state.flags = 0;
              strm.adler = state.check = 1;
              state.mode = hold & 512 ? DICTID : TYPE;
              hold = 0;
              bits = 0;
              break;
            case FLAGS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.flags = hold;
              if ((state.flags & 255) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              if (state.flags & 57344) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
              }
              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }
              if (state.flags & 512 && state.wrap & 4) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = TIME;
            case TIME:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.time = hold;
              }
              if (state.flags & 512 && state.wrap & 4) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                hbuf[2] = hold >>> 16 & 255;
                hbuf[3] = hold >>> 24 & 255;
                state.check = crc32(state.check, hbuf, 4, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = OS;
            case OS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.xflags = hold & 255;
                state.head.os = hold >> 8;
              }
              if (state.flags & 512 && state.wrap & 4) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc32(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = EXLEN;
            case EXLEN:
              if (state.flags & 1024) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length = hold;
                if (state.head) {
                  state.head.extra_len = hold;
                }
                if (state.flags & 512 && state.wrap & 4) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state.check = crc32(state.check, hbuf, 2, 0);
                }
                hold = 0;
                bits = 0;
              } else if (state.head) {
                state.head.extra = null;
              }
              state.mode = EXTRA;
            case EXTRA:
              if (state.flags & 1024) {
                copy = state.length;
                if (copy > have) {
                  copy = have;
                }
                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;
                    if (!state.head.extra) {
                      state.head.extra = new Uint8Array(state.head.extra_len);
                    }
                    state.head.extra.set(
                      input.subarray(
                        next,
                        // extra field is limited to 65536 bytes
                        // - no need for additional size check
                        next + copy
                      ),
                      /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                      len
                    );
                  }
                  if (state.flags & 512 && state.wrap & 4) {
                    state.check = crc32(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }
                if (state.length) {
                  break inf_leave;
                }
              }
              state.length = 0;
              state.mode = NAME;
            case NAME:
              if (state.flags & 2048) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512 && state.wrap & 4) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.name = null;
              }
              state.length = 0;
              state.mode = COMMENT;
            case COMMENT:
              if (state.flags & 4096) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state.head && len && state.length < 65536) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 512 && state.wrap & 4) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              }
              state.mode = HCRC;
            case HCRC:
              if (state.flags & 512) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (state.wrap & 4 && hold !== (state.check & 65535)) {
                  strm.msg = "header crc mismatch";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }
              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;
            case DICTID:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              strm.adler = state.check = zswap32(hold);
              hold = 0;
              bits = 0;
              state.mode = DICT;
            case DICT:
              if (state.havedict === 0) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                return Z_NEED_DICT;
              }
              strm.adler = state.check = 1;
              state.mode = TYPE;
            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }
            case TYPEDO:
              if (state.last) {
                hold >>>= bits & 7;
                bits -= bits & 7;
                state.mode = CHECK;
                break;
              }
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.last = hold & 1;
              hold >>>= 1;
              bits -= 1;
              switch (hold & 3) {
                case 0:
                  state.mode = STORED;
                  break;
                case 1:
                  fixedtables(state);
                  state.mode = LEN_;
                  if (flush === Z_TREES) {
                    hold >>>= 2;
                    bits -= 2;
                    break inf_leave;
                  }
                  break;
                case 2:
                  state.mode = TABLE;
                  break;
                case 3:
                  strm.msg = "invalid block type";
                  state.mode = BAD;
              }
              hold >>>= 2;
              bits -= 2;
              break;
            case STORED:
              hold >>>= bits & 7;
              bits -= bits & 7;
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
              }
              state.length = hold & 65535;
              hold = 0;
              bits = 0;
              state.mode = COPY_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            case COPY_:
              state.mode = COPY;
            case COPY:
              copy = state.length;
              if (copy) {
                if (copy > have) {
                  copy = have;
                }
                if (copy > left) {
                  copy = left;
                }
                if (copy === 0) {
                  break inf_leave;
                }
                output.set(input.subarray(next, next + copy), put);
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              }
              state.mode = TYPE;
              break;
            case TABLE:
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.nlen = (hold & 31) + 257;
              hold >>>= 5;
              bits -= 5;
              state.ndist = (hold & 31) + 1;
              hold >>>= 5;
              bits -= 5;
              state.ncode = (hold & 15) + 4;
              hold >>>= 4;
              bits -= 4;
              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = LENLENS;
            case LENLENS:
              while (state.have < state.ncode) {
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.lens[order[state.have++]] = hold & 7;
                hold >>>= 3;
                bits -= 3;
              }
              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              }
              state.lencode = state.lendyn;
              state.lenbits = 7;
              opts = { bits: state.lenbits };
              ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
              }
              state.have = 0;
              state.mode = CODELENS;
            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (; ; ) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (here_val < 16) {
                  hold >>>= here_bits;
                  bits -= here_bits;
                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    n = here_bits + 2;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    if (state.have === 0) {
                      strm.msg = "invalid bit length repeat";
                      state.mode = BAD;
                      break;
                    }
                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 3);
                    hold >>>= 2;
                    bits -= 2;
                  } else if (here_val === 17) {
                    n = here_bits + 3;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 3 + (hold & 7);
                    hold >>>= 3;
                    bits -= 3;
                  } else {
                    n = here_bits + 7;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 11 + (hold & 127);
                    hold >>>= 7;
                    bits -= 7;
                  }
                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }
              if (state.mode === BAD) {
                break;
              }
              if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
              }
              state.lenbits = 9;
              opts = { bits: state.lenbits };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
              }
              state.distbits = 6;
              state.distcode = state.distdyn;
              opts = { bits: state.distbits };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
              state.distbits = opts.bits;
              if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
              }
              state.mode = LEN_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            case LEN_:
              state.mode = LEN;
            case LEN:
              if (have >= 6 && left >= 258) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                inflate_fast(strm, _out);
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                if (state.mode === TYPE) {
                  state.back = -1;
                }
                break;
              }
              state.back = 0;
              for (; ; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_op && (here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              state.length = here_val;
              if (here_op === 0) {
                state.mode = LIT;
                break;
              }
              if (here_op & 32) {
                state.back = -1;
                state.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
              }
              state.extra = here_op & 15;
              state.mode = LENEXT;
            case LENEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              state.was = state.length;
              state.mode = DIST;
            case DIST:
              for (; ; ) {
                here = state.distcode[hold & (1 << state.distbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
              }
              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;
            case DISTEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.offset += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
              }
              state.mode = MATCH;
            case MATCH:
              if (left === 0) {
                break inf_leave;
              }
              copy = _out - left;
              if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD;
                    break;
                  }
                }
                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from = state.wsize - copy;
                } else {
                  from = state.wnext - copy;
                }
                if (copy > state.length) {
                  copy = state.length;
                }
                from_source = state.window;
              } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
              }
              if (copy > left) {
                copy = left;
              }
              left -= copy;
              state.length -= copy;
              do {
                output[put++] = from_source[from++];
              } while (--copy);
              if (state.length === 0) {
                state.mode = LEN;
              }
              break;
            case LIT:
              if (left === 0) {
                break inf_leave;
              }
              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;
            case CHECK:
              if (state.wrap) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (state.wrap & 4 && _out) {
                  strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
                  state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                }
                _out = left;
                if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = "incorrect data check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = LENGTH;
            case LENGTH:
              if (state.wrap && state.flags) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (state.wrap & 4 && hold !== (state.total & 4294967295)) {
                  strm.msg = "incorrect length check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = DONE;
            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR;
            case SYNC:
            default:
              return Z_STREAM_ERROR;
          }
        }
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state.hold = hold;
      state.bits = bits;
      if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state.total += _out;
      if (state.wrap & 4 && _out) {
        strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
        state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
      }
      strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
      if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    }, "inflate");
    var inflateEnd = /* @__PURE__ */ __name((strm) => {
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      let state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return Z_OK;
    }, "inflateEnd");
    var inflateGetHeader = /* @__PURE__ */ __name((strm, head) => {
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      const state = strm.state;
      if ((state.wrap & 2) === 0) {
        return Z_STREAM_ERROR;
      }
      state.head = head;
      head.done = false;
      return Z_OK;
    }, "inflateGetHeader");
    var inflateSetDictionary = /* @__PURE__ */ __name((strm, dictionary) => {
      const dictLength = dictionary.length;
      let state;
      let dictid;
      let ret;
      if (inflateStateCheck(strm)) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.wrap !== 0 && state.mode !== DICT) {
        return Z_STREAM_ERROR;
      }
      if (state.mode === DICT) {
        dictid = 1;
        dictid = adler32(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) {
          return Z_DATA_ERROR;
        }
      }
      ret = updatewindow(strm, dictionary, dictLength, dictLength);
      if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR;
      }
      state.havedict = 1;
      return Z_OK;
    }, "inflateSetDictionary");
    module.exports.inflateReset = inflateReset;
    module.exports.inflateReset2 = inflateReset2;
    module.exports.inflateResetKeep = inflateResetKeep;
    module.exports.inflateInit = inflateInit;
    module.exports.inflateInit2 = inflateInit2;
    module.exports.inflate = inflate;
    module.exports.inflateEnd = inflateEnd;
    module.exports.inflateGetHeader = inflateGetHeader;
    module.exports.inflateSetDictionary = inflateSetDictionary;
    module.exports.inflateInfo = "pako inflate (from Nodeca project)";
  }
});

// node_modules/pako/lib/zlib/gzheader.js
var require_gzheader = __commonJS({
  "node_modules/pako/lib/zlib/gzheader.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function GZheader() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    __name(GZheader, "GZheader");
    module.exports = GZheader;
  }
});

// node_modules/pako/lib/inflate.js
var require_inflate2 = __commonJS({
  "node_modules/pako/lib/inflate.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var zlib_inflate = require_inflate();
    var utils = require_common();
    var strings = require_strings();
    var msg = require_messages();
    var ZStream = require_zstream();
    var GZheader = require_gzheader();
    var toString = Object.prototype.toString;
    var {
      Z_NO_FLUSH,
      Z_FINISH,
      Z_OK,
      Z_STREAM_END,
      Z_NEED_DICT,
      Z_STREAM_ERROR,
      Z_DATA_ERROR,
      Z_MEM_ERROR
    } = require_constants();
    function Inflate(options) {
      this.options = utils.assign({
        chunkSize: 1024 * 64,
        windowBits: 15,
        to: ""
      }, options || {});
      const opt = this.options;
      if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) {
          opt.windowBits = -15;
        }
      }
      if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
        opt.windowBits += 32;
      }
      if (opt.windowBits > 15 && opt.windowBits < 48) {
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      let status = zlib_inflate.inflateInit2(
        this.strm,
        opt.windowBits
      );
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      this.header = new GZheader();
      zlib_inflate.inflateGetHeader(this.strm, this.header);
      if (opt.dictionary) {
        if (typeof opt.dictionary === "string") {
          opt.dictionary = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          opt.dictionary = new Uint8Array(opt.dictionary);
        }
        if (opt.raw) {
          status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
          if (status !== Z_OK) {
            throw new Error(msg[status]);
          }
        }
      }
    }
    __name(Inflate, "Inflate");
    Inflate.prototype.push = function(data, flush_mode) {
      const strm = this.strm;
      const chunkSize = this.options.chunkSize;
      const dictionary = this.options.dictionary;
      let status, _flush_mode, last_avail_out;
      if (this.ended)
        return false;
      if (flush_mode === ~~flush_mode)
        _flush_mode = flush_mode;
      else
        _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
      if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      for (; ; ) {
        if (strm.avail_out === 0) {
          strm.output = new Uint8Array(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_inflate.inflate(strm, _flush_mode);
        if (status === Z_NEED_DICT && dictionary) {
          status = zlib_inflate.inflateSetDictionary(strm, dictionary);
          if (status === Z_OK) {
            status = zlib_inflate.inflate(strm, _flush_mode);
          } else if (status === Z_DATA_ERROR) {
            status = Z_NEED_DICT;
          }
        }
        while (strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0) {
          zlib_inflate.inflateReset(strm);
          status = zlib_inflate.inflate(strm, _flush_mode);
        }
        switch (status) {
          case Z_STREAM_ERROR:
          case Z_DATA_ERROR:
          case Z_NEED_DICT:
          case Z_MEM_ERROR:
            this.onEnd(status);
            this.ended = true;
            return false;
        }
        last_avail_out = strm.avail_out;
        if (strm.next_out) {
          if (strm.avail_out === 0 || status === Z_STREAM_END) {
            if (this.options.to === "string") {
              let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
              let tail = strm.next_out - next_out_utf8;
              let utf8str = strings.buf2string(strm.output, next_out_utf8);
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail)
                strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
              this.onData(utf8str);
            } else {
              this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
            }
          }
        }
        if (status === Z_OK && last_avail_out === 0)
          continue;
        if (status === Z_STREAM_END) {
          status = zlib_inflate.inflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return true;
        }
        if (strm.avail_in === 0)
          break;
      }
      return true;
    };
    Inflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Inflate.prototype.onEnd = function(status) {
      if (status === Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function inflate(input, options) {
      const inflator = new Inflate(options);
      inflator.push(input);
      if (inflator.err)
        throw inflator.msg || msg[inflator.err];
      return inflator.result;
    }
    __name(inflate, "inflate");
    function inflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return inflate(input, options);
    }
    __name(inflateRaw, "inflateRaw");
    module.exports.Inflate = Inflate;
    module.exports.inflate = inflate;
    module.exports.inflateRaw = inflateRaw;
    module.exports.ungzip = inflate;
    module.exports.constants = require_constants();
  }
});

// node_modules/pako/index.js
var require_pako = __commonJS({
  "node_modules/pako/index.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { Deflate, deflate, deflateRaw, gzip } = require_deflate2();
    var { Inflate, inflate, inflateRaw, ungzip } = require_inflate2();
    var constants2 = require_constants();
    module.exports.Deflate = Deflate;
    module.exports.deflate = deflate;
    module.exports.deflateRaw = deflateRaw;
    module.exports.gzip = gzip;
    module.exports.Inflate = Inflate;
    module.exports.inflate = inflate;
    module.exports.inflateRaw = inflateRaw;
    module.exports.ungzip = ungzip;
    module.exports.constants = constants2;
  }
});

// util/util.js
var require_util = __commonJS({
  "util/util.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var pako = require_pako();
    var randomString = /* @__PURE__ */ __name((len = 16) => {
      const keyString = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const _key = [];
      const keyStringArr = keyString.split("");
      for (let i = 0; i < len; i += 1) {
        const ceil = Math.ceil((keyStringArr.length - 1) * Math.random());
        const _tmp = keyStringArr[ceil];
        _key.push(_tmp);
      }
      return _key.join("");
    }, "randomString");
    var parseCookieString = /* @__PURE__ */ __name((cookie) => {
      const t = cookie.replace(/\s*(Domain|domain|path|expires)=[^(;|$)]+;*/g, "");
      return t.replace(/;HttpOnly/g, "");
    }, "parseCookieString");
    var cookieToJson = /* @__PURE__ */ __name((cookie) => {
      if (!cookie)
        return {};
      let cookieArr = cookie.split(";");
      let obj = {};
      cookieArr.forEach((i) => {
        let arr = i.split("=");
        obj[arr[0]] = arr[1];
      });
      return obj;
    }, "cookieToJson");
    var decodeLyrics = /* @__PURE__ */ __name((val) => {
      let bytes = null;
      if (val instanceof Uint8Array)
        bytes = val;
      if (Buffer.isBuffer(val))
        bytes = new Uint8Array(val);
      if (typeof val === "string")
        bytes = new Uint8Array(Buffer.from(val, "base64"));
      if (bytes === null)
        return "";
      const enKey = [64, 71, 97, 119, 94, 50, 116, 71, 81, 54, 49, 45, 206, 210, 110, 105];
      const krcBytes = bytes.slice(4);
      const len = krcBytes.byteLength;
      for (let index = 0; index < len; index += 1) {
        krcBytes[index] = krcBytes[index] ^ enKey[index % enKey.length];
      }
      try {
        const inflate = pako.inflate(krcBytes);
        return Buffer.from(inflate).toString("utf8");
      } catch {
        return "";
      }
    }, "decodeLyrics");
    module.exports = {
      decodeLyrics,
      cookieToJson,
      parseCookieString,
      randomString
    };
  }
});

// util/crypto.js
var require_crypto2 = __commonJS({
  "util/crypto.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var crypto = require_crypto();
    var { randomString } = require_util();
    var publicRasKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIAG7QOELSYoIJvTFJhMpe1s/gbjDJX51HBNnEl5HXqTW6lQ7LC8jr9fWZTwusknp+sVGzwd40MwP6U5yDE27M/X1+UR4tvOGOqp94TJtQ1EPnWGWXngpeIW5GxoQGao1rmYWAu6oi1z9XkChrsUdC6DJE5E221wf/4WLFxwAtRQIDAQAB
-----END PUBLIC KEY-----`;
    var publicLiteRasKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDECi0Np2UR87scwrvTr72L6oO01rBbbBPriSDFPxr3Z5syug0O24QyQO8bg27+0+4kBzTBTBOZ/WWU0WryL1JSXRTXLgFVxtzIY41Pe7lPOgsfTCn5kZcvKhYKJesKnnJDNr5/abvTGf+rHG3YRwsCHcQ08/q6ifSioBszvb3QiwIDAQAB
-----END PUBLIC KEY-----`;
    function cryptoMd52(data) {
      const buffer = typeof data === "object" ? JSON.stringify(data) : data;
      return crypto.createHash("md5").update(buffer).digest("hex");
    }
    __name(cryptoMd52, "cryptoMd5");
    function cryptoSha1(data) {
      const buffer = typeof data === "object" ? JSON.stringify(data) : data;
      return crypto.createHash("sha1").update(buffer).digest("hex");
    }
    __name(cryptoSha1, "cryptoSha1");
    function cryptoAesEncrypt2(data, opt) {
      if (typeof data === "object")
        data = JSON.stringify(data);
      const buffer = Buffer.isBuffer(data) ? data : Buffer.from(data);
      let key, iv, tempKey = "";
      if (opt?.key && opt?.iv) {
        key = opt.key;
        iv = opt.iv;
      } else {
        tempKey = opt?.key || randomString(16).toLowerCase();
        key = cryptoMd52(tempKey).substring(0, 32);
        iv = key.substring(key.length - 16, key.length);
      }
      const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
      const dest = Buffer.concat([cipher.update(buffer), cipher.final()]);
      if (opt?.key && opt?.key)
        return dest.toString("hex");
      return { str: dest.toString("hex"), key: tempKey };
    }
    __name(cryptoAesEncrypt2, "cryptoAesEncrypt");
    function cryptoAesDecrypt2(data, key, iv) {
      if (!iv)
        key = cryptoMd52(key).substring(0, 32);
      iv = iv || key.substring(key.length - 16, key.length);
      const cipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
      const dest = Buffer.concat([cipher.update(data, "hex"), cipher.final()]);
      try {
        return JSON.parse(dest.toString());
      } catch (e) {
        return dest.toString();
      }
    }
    __name(cryptoAesDecrypt2, "cryptoAesDecrypt");
    function cryptoRSAEncrypt2(data, publicKey) {
      const isLite = false;
      if (typeof data === "object")
        data = JSON.stringify(data);
      const buffer = Buffer.isBuffer(data) ? data : Buffer.from(data);
      const _buffer = Buffer.concat([buffer, Buffer.alloc(128 - buffer.length)]);
      publicKey = publicKey || (isLite ? publicLiteRasKey : publicRasKey);
      return crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_NO_PADDING }, _buffer).toString("hex");
    }
    __name(cryptoRSAEncrypt2, "cryptoRSAEncrypt");
    function rsaEncrypt22(data) {
      const isLite = false;
      const useData = typeof data === "object" ? Buffer.from(JSON.stringify(data)) : Buffer.from(data);
      const buffer = Buffer.concat([useData]);
      return crypto.publicEncrypt({ key: isLite ? publicLiteRasKey : publicRasKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer).toString("hex");
    }
    __name(rsaEncrypt22, "rsaEncrypt2");
    function playlistAesEncrypt2(data) {
      const useData = typeof data === "object" ? JSON.stringify(data) : data;
      const key = randomString(6).toLocaleLowerCase();
      const encryptKey = cryptoMd52(key).substring(0, 16);
      const iv = cryptoMd52(key).substring(16, 32);
      const cipher = crypto.createCipheriv("aes-128-cbc", encryptKey, iv);
      const dest = Buffer.concat([cipher.update(useData), cipher.final()]);
      return { key, str: dest.toString("base64") };
    }
    __name(playlistAesEncrypt2, "playlistAesEncrypt");
    function playlistAesDecrypt2(data) {
      const encryptKey = cryptoMd52(data.key).substring(0, 16);
      const iv = cryptoMd52(data.key).substring(16, 32);
      const cipher = crypto.createDecipheriv("aes-128-cbc", encryptKey, iv);
      const dest = Buffer.concat([cipher.update(data.str, "base64"), cipher.final()]);
      const t = dest.toString();
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    }
    __name(playlistAesDecrypt2, "playlistAesDecrypt");
    module.exports = {
      cryptoAesDecrypt: cryptoAesDecrypt2,
      cryptoAesEncrypt: cryptoAesEncrypt2,
      cryptoMd5: cryptoMd52,
      cryptoRSAEncrypt: cryptoRSAEncrypt2,
      rsaEncrypt2: rsaEncrypt22,
      cryptoSha1,
      playlistAesEncrypt: playlistAesEncrypt2,
      playlistAesDecrypt: playlistAesDecrypt2,
      publicLiteRasKey,
      publicRasKey
    };
  }
});

// util/config.json
var require_config = __commonJS({
  "util/config.json"(exports, module) {
    module.exports = {
      wx_appid: "wx79f2c4418704b4f8",
      wx_lite_appid: "wx72b795aca60ad321",
      wx_secret: "4efcab88b700769e376e3f6087b8abc9",
      wx_lite_secret: "33e486041e5e25729a4e3d2da7502f9a",
      srcappid: 2919,
      appid: 1005,
      apiver: 20,
      clientver: 12569,
      liteAppid: 3116,
      liteClientver: 11040
    };
  }
});

// util/helper.js
var require_helper = __commonJS({
  "util/helper.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoMd5: cryptoMd52 } = require_crypto2();
    var { appid: useAppid, liteAppid: liteAppid2, clientver: useClientver, liteClientver: liteClientver2 } = require_config();
    var signatureWebParams2 = /* @__PURE__ */ __name((params) => {
      const str = "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt";
      const paramsString = Object.keys(params).map((key) => `${key}=${params[key]}`).sort().join("");
      return cryptoMd52(`${str}${paramsString}${str}`);
    }, "signatureWebParams");
    var signatureAndroidParams2 = /* @__PURE__ */ __name((params, data) => {
      const isLite = false;
      const str = isLite ? "LnT6xpN3khm36zse0QzvmgTZ3waWdRSA" : `OIlwieks28dk2k092lksi2UIkp`;
      const paramsString = Object.keys(params).sort().map((key) => `${key}=${typeof params[key] === "object" ? JSON.stringify(params[key]) : params[key]}`).join("");
      return cryptoMd52(`${str}${paramsString}${data || ""}${str}`);
    }, "signatureAndroidParams");
    var signatureRegisterParams2 = /* @__PURE__ */ __name((params) => {
      const paramsString = Object.keys(params).map((key) => params[key]).sort().join("");
      return cryptoMd52(`1014${paramsString}1014`);
    }, "signatureRegisterParams");
    var signParams = /* @__PURE__ */ __name((params, data) => {
      const str = "R6snCXJgbCaj9WFRJKefTMIFp0ey6Gza";
      const paramsString = Object.keys(params).sort().map((key) => `${key}${params[key]}`).join("");
      return cryptoMd52(`${paramsString}${data || ""}${str}`);
    }, "signParams");
    var signKey2 = /* @__PURE__ */ __name((hash2, mid, userid, appid2) => {
      const isLite = false;
      const str = isLite ? "185672dd44712f60bb1736df5a377e82" : "57ae12eb6890223e355ccfcb74edf70d";
      return cryptoMd52(`${hash2}${str}${appid2 || useAppid}${mid}${userid || 0}`);
    }, "signKey");
    var signCloudKey = /* @__PURE__ */ __name((hash2, pid2) => {
      const str = "ebd1ac3134c880bda6a2194537843caa0162e2e7";
      return cryptoMd52(`musicclound${hash2}${pid2}${str}`);
    }, "signCloudKey");
    var signParamsKey = /* @__PURE__ */ __name((data, appid2, clientver2) => {
      const isLite = false;
      const str = isLite ? "LnT6xpN3khm36zse0QzvmgTZ3waWdRSA" : "OIlwieks28dk2k092lksi2UIkp";
      appid2 = appid2 || (isLite ? liteAppid2 : useAppid);
      clientver2 = clientver2 || (isLite ? liteClientver2 : useClientver);
      return cryptoMd52(`${appid2}${str}${clientver2}${data}`);
    }, "signParamsKey");
    module.exports = {
      signKey: signKey2,
      signParams,
      signParamsKey,
      signCloudKey,
      signatureAndroidParams: signatureAndroidParams2,
      signatureRegisterParams: signatureRegisterParams2,
      signatureWebParams: signatureWebParams2
    };
  }
});

// node_modules/axios/dist/browser/axios.cjs
var require_axios = __commonJS({
  "node_modules/axios/dist/browser/axios.cjs"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function bind(fn, thisArg) {
      return /* @__PURE__ */ __name(function wrap() {
        return fn.apply(thisArg, arguments);
      }, "wrap");
    }
    __name(bind, "bind");
    var { toString } = Object.prototype;
    var { getPrototypeOf } = Object;
    var { iterator, toStringTag } = Symbol;
    var kindOf = ((cache) => (thing) => {
      const str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(/* @__PURE__ */ Object.create(null));
    var kindOfTest = /* @__PURE__ */ __name((type) => {
      type = type.toLowerCase();
      return (thing) => kindOf(thing) === type;
    }, "kindOfTest");
    var typeOfTest = /* @__PURE__ */ __name((type) => (thing) => typeof thing === type, "typeOfTest");
    var { isArray } = Array;
    var isUndefined = typeOfTest("undefined");
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
    }
    __name(isBuffer, "isBuffer");
    var isArrayBuffer = kindOfTest("ArrayBuffer");
    function isArrayBufferView(val) {
      let result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
      }
      return result;
    }
    __name(isArrayBufferView, "isArrayBufferView");
    var isString = typeOfTest("string");
    var isFunction$1 = typeOfTest("function");
    var isNumber = typeOfTest("number");
    var isObject = /* @__PURE__ */ __name((thing) => thing !== null && typeof thing === "object", "isObject");
    var isBoolean = /* @__PURE__ */ __name((thing) => thing === true || thing === false, "isBoolean");
    var isPlainObject = /* @__PURE__ */ __name((val) => {
      if (kindOf(val) !== "object") {
        return false;
      }
      const prototype2 = getPrototypeOf(val);
      return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(toStringTag in val) && !(iterator in val);
    }, "isPlainObject");
    var isEmptyObject = /* @__PURE__ */ __name((val) => {
      if (!isObject(val) || isBuffer(val)) {
        return false;
      }
      try {
        return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
      } catch (e) {
        return false;
      }
    }, "isEmptyObject");
    var isDate = kindOfTest("Date");
    var isFile = kindOfTest("File");
    var isBlob = kindOfTest("Blob");
    var isFileList = kindOfTest("FileList");
    var isStream = /* @__PURE__ */ __name((val) => isObject(val) && isFunction$1(val.pipe), "isStream");
    var isFormData = /* @__PURE__ */ __name((thing) => {
      let kind;
      return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction$1(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
      kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]"));
    }, "isFormData");
    var isURLSearchParams = kindOfTest("URLSearchParams");
    var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
    var trim = /* @__PURE__ */ __name((str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), "trim");
    function forEach(obj, fn, { allOwnKeys = false } = {}) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      let i;
      let l;
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        if (isBuffer(obj)) {
          return;
        }
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for (i = 0; i < len; i++) {
          key = keys[i];
          fn.call(null, obj[key], key, obj);
        }
      }
    }
    __name(forEach, "forEach");
    function findKey(obj, key) {
      if (isBuffer(obj)) {
        return null;
      }
      key = key.toLowerCase();
      const keys = Object.keys(obj);
      let i = keys.length;
      let _key;
      while (i-- > 0) {
        _key = keys[i];
        if (key === _key.toLowerCase()) {
          return _key;
        }
      }
      return null;
    }
    __name(findKey, "findKey");
    var _global = (() => {
      if (typeof globalThis !== "undefined")
        return globalThis;
      return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
    })();
    var isContextDefined = /* @__PURE__ */ __name((context2) => !isUndefined(context2) && context2 !== _global, "isContextDefined");
    function merge() {
      const { caseless, skipUndefined } = isContextDefined(this) && this || {};
      const result = {};
      const assignValue = /* @__PURE__ */ __name((val, key) => {
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
          result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
          result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
          result[targetKey] = val.slice();
        } else if (!skipUndefined || !isUndefined(val)) {
          result[targetKey] = val;
        }
      }, "assignValue");
      for (let i = 0, l = arguments.length; i < l; i++) {
        arguments[i] && forEach(arguments[i], assignValue);
      }
      return result;
    }
    __name(merge, "merge");
    var extend = /* @__PURE__ */ __name((a, b, thisArg, { allOwnKeys } = {}) => {
      forEach(b, (val, key) => {
        if (thisArg && isFunction$1(val)) {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      }, { allOwnKeys });
      return a;
    }, "extend");
    var stripBOM = /* @__PURE__ */ __name((content) => {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }, "stripBOM");
    var inherits = /* @__PURE__ */ __name((constructor, superConstructor, props, descriptors2) => {
      constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
      constructor.prototype.constructor = constructor;
      Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
      });
      props && Object.assign(constructor.prototype, props);
    }, "inherits");
    var toFlatObject = /* @__PURE__ */ __name((sourceObj, destObj, filter, propFilter) => {
      let props;
      let i;
      let prop;
      const merged = {};
      destObj = destObj || {};
      if (sourceObj == null)
        return destObj;
      do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while (i-- > 0) {
          prop = props[i];
          if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
            destObj[prop] = sourceObj[prop];
            merged[prop] = true;
          }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
      } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
      return destObj;
    }, "toFlatObject");
    var endsWith = /* @__PURE__ */ __name((str, searchString, position) => {
      str = String(str);
      if (position === void 0 || position > str.length) {
        position = str.length;
      }
      position -= searchString.length;
      const lastIndex = str.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }, "endsWith");
    var toArray = /* @__PURE__ */ __name((thing) => {
      if (!thing)
        return null;
      if (isArray(thing))
        return thing;
      let i = thing.length;
      if (!isNumber(i))
        return null;
      const arr = new Array(i);
      while (i-- > 0) {
        arr[i] = thing[i];
      }
      return arr;
    }, "toArray");
    var isTypedArray = ((TypedArray) => {
      return (thing) => {
        return TypedArray && thing instanceof TypedArray;
      };
    })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
    var forEachEntry = /* @__PURE__ */ __name((obj, fn) => {
      const generator = obj && obj[iterator];
      const _iterator = generator.call(obj);
      let result;
      while ((result = _iterator.next()) && !result.done) {
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
      }
    }, "forEachEntry");
    var matchAll = /* @__PURE__ */ __name((regExp, str) => {
      let matches;
      const arr = [];
      while ((matches = regExp.exec(str)) !== null) {
        arr.push(matches);
      }
      return arr;
    }, "matchAll");
    var isHTMLForm = kindOfTest("HTMLFormElement");
    var toCamelCase = /* @__PURE__ */ __name((str) => {
      return str.toLowerCase().replace(
        /[-_\s]([a-z\d])(\w*)/g,
        /* @__PURE__ */ __name(function replacer(m, p1, p2) {
          return p1.toUpperCase() + p2;
        }, "replacer")
      );
    }, "toCamelCase");
    var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
    var isRegExp = kindOfTest("RegExp");
    var reduceDescriptors = /* @__PURE__ */ __name((obj, reducer) => {
      const descriptors2 = Object.getOwnPropertyDescriptors(obj);
      const reducedDescriptors = {};
      forEach(descriptors2, (descriptor, name) => {
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
          reducedDescriptors[name] = ret || descriptor;
        }
      });
      Object.defineProperties(obj, reducedDescriptors);
    }, "reduceDescriptors");
    var freezeMethods = /* @__PURE__ */ __name((obj) => {
      reduceDescriptors(obj, (descriptor, name) => {
        if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
          return false;
        }
        const value = obj[name];
        if (!isFunction$1(value))
          return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
          descriptor.writable = false;
          return;
        }
        if (!descriptor.set) {
          descriptor.set = () => {
            throw Error("Can not rewrite read-only method '" + name + "'");
          };
        }
      });
    }, "freezeMethods");
    var toObjectSet = /* @__PURE__ */ __name((arrayOrString, delimiter) => {
      const obj = {};
      const define = /* @__PURE__ */ __name((arr) => {
        arr.forEach((value) => {
          obj[value] = true;
        });
      }, "define");
      isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
      return obj;
    }, "toObjectSet");
    var noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    var toFiniteNumber = /* @__PURE__ */ __name((value, defaultValue) => {
      return value != null && Number.isFinite(value = +value) ? value : defaultValue;
    }, "toFiniteNumber");
    function isSpecCompliantForm(thing) {
      return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
    }
    __name(isSpecCompliantForm, "isSpecCompliantForm");
    var toJSONObject = /* @__PURE__ */ __name((obj) => {
      const stack = new Array(10);
      const visit = /* @__PURE__ */ __name((source, i) => {
        if (isObject(source)) {
          if (stack.indexOf(source) >= 0) {
            return;
          }
          if (isBuffer(source)) {
            return source;
          }
          if (!("toJSON" in source)) {
            stack[i] = source;
            const target = isArray(source) ? [] : {};
            forEach(source, (value, key) => {
              const reducedValue = visit(value, i + 1);
              !isUndefined(reducedValue) && (target[key] = reducedValue);
            });
            stack[i] = void 0;
            return target;
          }
        }
        return source;
      }, "visit");
      return visit(obj, 0);
    }, "toJSONObject");
    var isAsyncFn = kindOfTest("AsyncFunction");
    var isThenable = /* @__PURE__ */ __name((thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch), "isThenable");
    var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
      if (setImmediateSupported) {
        return setImmediate;
      }
      return postMessageSupported ? ((token, callbacks) => {
        _global.addEventListener("message", ({ source, data }) => {
          if (source === _global && data === token) {
            callbacks.length && callbacks.shift()();
          }
        }, false);
        return (cb) => {
          callbacks.push(cb);
          _global.postMessage(token, "*");
        };
      })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
    })(
      typeof setImmediate === "function",
      isFunction$1(_global.postMessage)
    );
    var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
    var isIterable = /* @__PURE__ */ __name((thing) => thing != null && isFunction$1(thing[iterator]), "isIterable");
    var utils$1 = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isBoolean,
      isObject,
      isPlainObject,
      isEmptyObject,
      isReadableStream,
      isRequest,
      isResponse,
      isHeaders,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isRegExp,
      isFunction: isFunction$1,
      isStream,
      isURLSearchParams,
      isTypedArray,
      isFileList,
      forEach,
      merge,
      extend,
      trim,
      stripBOM,
      inherits,
      toFlatObject,
      kindOf,
      kindOfTest,
      endsWith,
      toArray,
      forEachEntry,
      matchAll,
      isHTMLForm,
      hasOwnProperty,
      hasOwnProp: hasOwnProperty,
      // an alias to avoid ESLint no-prototype-builtins detection
      reduceDescriptors,
      freezeMethods,
      toObjectSet,
      toCamelCase,
      noop,
      toFiniteNumber,
      findKey,
      global: _global,
      isContextDefined,
      isSpecCompliantForm,
      toJSONObject,
      isAsyncFn,
      isThenable,
      setImmediate: _setImmediate,
      asap,
      isIterable
    };
    function AxiosError(message, code, config3, request, response) {
      Error.call(this);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack;
      }
      this.message = message;
      this.name = "AxiosError";
      code && (this.code = code);
      config3 && (this.config = config3);
      request && (this.request = request);
      if (response) {
        this.response = response;
        this.status = response.status ? response.status : null;
      }
    }
    __name(AxiosError, "AxiosError");
    utils$1.inherits(AxiosError, Error, {
      toJSON: /* @__PURE__ */ __name(function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: utils$1.toJSONObject(this.config),
          code: this.code,
          status: this.status
        };
      }, "toJSON")
    });
    var prototype$1 = AxiosError.prototype;
    var descriptors = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED",
      "ERR_NOT_SUPPORT",
      "ERR_INVALID_URL"
      // eslint-disable-next-line func-names
    ].forEach((code) => {
      descriptors[code] = { value: code };
    });
    Object.defineProperties(AxiosError, descriptors);
    Object.defineProperty(prototype$1, "isAxiosError", { value: true });
    AxiosError.from = (error3, code, config3, request, response, customProps) => {
      const axiosError = Object.create(prototype$1);
      utils$1.toFlatObject(error3, axiosError, /* @__PURE__ */ __name(function filter(obj) {
        return obj !== Error.prototype;
      }, "filter"), (prop) => {
        return prop !== "isAxiosError";
      });
      const msg = error3 && error3.message ? error3.message : "Error";
      const errCode = code == null && error3 ? error3.code : code;
      AxiosError.call(axiosError, msg, errCode, config3, request, response);
      if (error3 && axiosError.cause == null) {
        Object.defineProperty(axiosError, "cause", { value: error3, configurable: true });
      }
      axiosError.name = error3 && error3.name || "Error";
      customProps && Object.assign(axiosError, customProps);
      return axiosError;
    };
    var httpAdapter = null;
    function isVisitable(thing) {
      return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
    }
    __name(isVisitable, "isVisitable");
    function removeBrackets(key) {
      return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
    }
    __name(removeBrackets, "removeBrackets");
    function renderKey(path, key, dots) {
      if (!path)
        return key;
      return path.concat(key).map(/* @__PURE__ */ __name(function each(token, i) {
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
      }, "each")).join(dots ? "." : "");
    }
    __name(renderKey, "renderKey");
    function isFlatArray(arr) {
      return utils$1.isArray(arr) && !arr.some(isVisitable);
    }
    __name(isFlatArray, "isFlatArray");
    var predicates = utils$1.toFlatObject(utils$1, {}, null, /* @__PURE__ */ __name(function filter(prop) {
      return /^is[A-Z]/.test(prop);
    }, "filter"));
    function toFormData(obj, formData, options) {
      if (!utils$1.isObject(obj)) {
        throw new TypeError("target must be an object");
      }
      formData = formData || new FormData();
      options = utils$1.toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
      }, false, /* @__PURE__ */ __name(function defined(option, source) {
        return !utils$1.isUndefined(source[option]);
      }, "defined"));
      const metaTokens = options.metaTokens;
      const visitor = options.visitor || defaultVisitor;
      const dots = options.dots;
      const indexes = options.indexes;
      const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
      const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
      if (!utils$1.isFunction(visitor)) {
        throw new TypeError("visitor must be a function");
      }
      function convertValue(value) {
        if (value === null)
          return "";
        if (utils$1.isDate(value)) {
          return value.toISOString();
        }
        if (utils$1.isBoolean(value)) {
          return value.toString();
        }
        if (!useBlob && utils$1.isBlob(value)) {
          throw new AxiosError("Blob is not supported. Use a Buffer instead.");
        }
        if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
          return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
        }
        return value;
      }
      __name(convertValue, "convertValue");
      function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
          if (utils$1.endsWith(key, "{}")) {
            key = metaTokens ? key : key.slice(0, -2);
            value = JSON.stringify(value);
          } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
            key = removeBrackets(key);
            arr.forEach(/* @__PURE__ */ __name(function each(el, index) {
              !(utils$1.isUndefined(el) || el === null) && formData.append(
                // eslint-disable-next-line no-nested-ternary
                indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
                convertValue(el)
              );
            }, "each"));
            return false;
          }
        }
        if (isVisitable(value)) {
          return true;
        }
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
      }
      __name(defaultVisitor, "defaultVisitor");
      const stack = [];
      const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
      });
      function build(value, path) {
        if (utils$1.isUndefined(value))
          return;
        if (stack.indexOf(value) !== -1) {
          throw Error("Circular reference detected in " + path.join("."));
        }
        stack.push(value);
        utils$1.forEach(value, /* @__PURE__ */ __name(function each(el, key) {
          const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
            formData,
            el,
            utils$1.isString(key) ? key.trim() : key,
            path,
            exposedHelpers
          );
          if (result === true) {
            build(el, path ? path.concat(key) : [key]);
          }
        }, "each"));
        stack.pop();
      }
      __name(build, "build");
      if (!utils$1.isObject(obj)) {
        throw new TypeError("data must be an object");
      }
      build(obj);
      return formData;
    }
    __name(toFormData, "toFormData");
    function encode$1(str) {
      const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
      };
      return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, /* @__PURE__ */ __name(function replacer(match2) {
        return charMap[match2];
      }, "replacer"));
    }
    __name(encode$1, "encode$1");
    function AxiosURLSearchParams(params, options) {
      this._pairs = [];
      params && toFormData(params, this, options);
    }
    __name(AxiosURLSearchParams, "AxiosURLSearchParams");
    var prototype = AxiosURLSearchParams.prototype;
    prototype.append = /* @__PURE__ */ __name(function append(name, value) {
      this._pairs.push([name, value]);
    }, "append");
    prototype.toString = /* @__PURE__ */ __name(function toString2(encoder) {
      const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode$1);
      } : encode$1;
      return this._pairs.map(/* @__PURE__ */ __name(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
      }, "each"), "").join("&");
    }, "toString");
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
    }
    __name(encode, "encode");
    function buildURL(url, params, options) {
      if (!params) {
        return url;
      }
      const _encode = options && options.encode || encode;
      if (utils$1.isFunction(options)) {
        options = {
          serialize: options
        };
      }
      const serializeFn = options && options.serialize;
      let serializedParams;
      if (serializeFn) {
        serializedParams = serializeFn(params, options);
      } else {
        serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
      }
      if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    }
    __name(buildURL, "buildURL");
    var InterceptorManager = class {
      constructor() {
        this.handlers = [];
      }
      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      }
      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       *
       * @returns {void}
       */
      eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      }
      /**
       * Clear all interceptors from the stack
       *
       * @returns {void}
       */
      clear() {
        if (this.handlers) {
          this.handlers = [];
        }
      }
      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       *
       * @returns {void}
       */
      forEach(fn) {
        utils$1.forEach(this.handlers, /* @__PURE__ */ __name(function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        }, "forEachHandler"));
      }
    };
    __name(InterceptorManager, "InterceptorManager");
    var InterceptorManager$1 = InterceptorManager;
    var transitionalDefaults = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };
    var URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
    var FormData$1 = typeof FormData !== "undefined" ? FormData : null;
    var Blob$1 = typeof Blob !== "undefined" ? Blob : null;
    var platform$1 = {
      isBrowser: true,
      classes: {
        URLSearchParams: URLSearchParams$1,
        FormData: FormData$1,
        Blob: Blob$1
      },
      protocols: ["http", "https", "file", "blob", "url", "data"]
    };
    var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
    var _navigator = typeof navigator === "object" && navigator || void 0;
    var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
    var hasStandardBrowserWebWorkerEnv = (() => {
      return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
      self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
    })();
    var origin = hasBrowserEnv && window.location.href || "http://localhost";
    var utils = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      hasBrowserEnv,
      hasStandardBrowserWebWorkerEnv,
      hasStandardBrowserEnv,
      navigator: _navigator,
      origin
    });
    var platform2 = {
      ...utils,
      ...platform$1
    };
    function toURLEncodedForm(data, options) {
      return toFormData(data, new platform2.classes.URLSearchParams(), {
        visitor: function(value, key, path, helpers) {
          if (platform2.isNode && utils$1.isBuffer(value)) {
            this.append(key, value.toString("base64"));
            return false;
          }
          return helpers.defaultVisitor.apply(this, arguments);
        },
        ...options
      });
    }
    __name(toURLEncodedForm, "toURLEncodedForm");
    function parsePropPath(name) {
      return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match2) => {
        return match2[0] === "[]" ? "" : match2[1] || match2[0];
      });
    }
    __name(parsePropPath, "parsePropPath");
    function arrayToObject(arr) {
      const obj = {};
      const keys = Object.keys(arr);
      let i;
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        obj[key] = arr[key];
      }
      return obj;
    }
    __name(arrayToObject, "arrayToObject");
    function formDataToJSON(formData) {
      function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === "__proto__")
          return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && utils$1.isArray(target) ? target.length : name;
        if (isLast) {
          if (utils$1.hasOwnProp(target, name)) {
            target[name] = [target[name], value];
          } else {
            target[name] = value;
          }
          return !isNumericKey;
        }
        if (!target[name] || !utils$1.isObject(target[name])) {
          target[name] = [];
        }
        const result = buildPath(path, value, target[name], index);
        if (result && utils$1.isArray(target[name])) {
          target[name] = arrayToObject(target[name]);
        }
        return !isNumericKey;
      }
      __name(buildPath, "buildPath");
      if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
        const obj = {};
        utils$1.forEachEntry(formData, (name, value) => {
          buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
      }
      return null;
    }
    __name(formDataToJSON, "formDataToJSON");
    function stringifySafely(rawValue, parser, encoder) {
      if (utils$1.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils$1.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    __name(stringifySafely, "stringifySafely");
    var defaults = {
      transitional: transitionalDefaults,
      adapter: ["xhr", "http", "fetch"],
      transformRequest: [/* @__PURE__ */ __name(function transformRequest(data, headers) {
        const contentType = headers.getContentType() || "";
        const hasJSONContentType = contentType.indexOf("application/json") > -1;
        const isObjectPayload = utils$1.isObject(data);
        if (isObjectPayload && utils$1.isHTMLForm(data)) {
          data = new FormData(data);
        }
        const isFormData2 = utils$1.isFormData(data);
        if (isFormData2) {
          return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
        }
        if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
          return data;
        }
        if (utils$1.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils$1.isURLSearchParams(data)) {
          headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
          return data.toString();
        }
        let isFileList2;
        if (isObjectPayload) {
          if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
            return toURLEncodedForm(data, this.formSerializer).toString();
          }
          if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
            const _FormData = this.env && this.env.FormData;
            return toFormData(
              isFileList2 ? { "files[]": data } : data,
              _FormData && new _FormData(),
              this.formSerializer
            );
          }
        }
        if (isObjectPayload || hasJSONContentType) {
          headers.setContentType("application/json", false);
          return stringifySafely(data);
        }
        return data;
      }, "transformRequest")],
      transformResponse: [/* @__PURE__ */ __name(function transformResponse(data) {
        const transitional = this.transitional || defaults.transitional;
        const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        const JSONRequested = this.responseType === "json";
        if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
          return data;
        }
        if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
          const silentJSONParsing = transitional && transitional.silentJSONParsing;
          const strictJSONParsing = !silentJSONParsing && JSONRequested;
          try {
            return JSON.parse(data, this.parseReviver);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
              }
              throw e;
            }
          }
        }
        return data;
      }, "transformResponse")],
      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: platform2.classes.FormData,
        Blob: platform2.classes.Blob
      },
      validateStatus: /* @__PURE__ */ __name(function validateStatus(status) {
        return status >= 200 && status < 300;
      }, "validateStatus"),
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": void 0
        }
      }
    };
    utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
      defaults.headers[method] = {};
    });
    var defaults$1 = defaults;
    var ignoreDuplicateOf = utils$1.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ]);
    var parseHeaders = /* @__PURE__ */ __name((rawHeaders) => {
      const parsed = {};
      let key;
      let val;
      let i;
      rawHeaders && rawHeaders.split("\n").forEach(/* @__PURE__ */ __name(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
          return;
        }
        if (key === "set-cookie") {
          if (parsed[key]) {
            parsed[key].push(val);
          } else {
            parsed[key] = [val];
          }
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      }, "parser"));
      return parsed;
    }, "parseHeaders");
    var $internals = Symbol("internals");
    function normalizeHeader(header) {
      return header && String(header).trim().toLowerCase();
    }
    __name(normalizeHeader, "normalizeHeader");
    function normalizeValue(value) {
      if (value === false || value == null) {
        return value;
      }
      return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
    }
    __name(normalizeValue, "normalizeValue");
    function parseTokens(str) {
      const tokens = /* @__PURE__ */ Object.create(null);
      const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
      let match2;
      while (match2 = tokensRE.exec(str)) {
        tokens[match2[1]] = match2[2];
      }
      return tokens;
    }
    __name(parseTokens, "parseTokens");
    var isValidHeaderName = /* @__PURE__ */ __name((str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim()), "isValidHeaderName");
    function matchHeaderValue(context2, value, header, filter, isHeaderNameFilter) {
      if (utils$1.isFunction(filter)) {
        return filter.call(this, value, header);
      }
      if (isHeaderNameFilter) {
        value = header;
      }
      if (!utils$1.isString(value))
        return;
      if (utils$1.isString(filter)) {
        return value.indexOf(filter) !== -1;
      }
      if (utils$1.isRegExp(filter)) {
        return filter.test(value);
      }
    }
    __name(matchHeaderValue, "matchHeaderValue");
    function formatHeader(header) {
      return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
        return char.toUpperCase() + str;
      });
    }
    __name(formatHeader, "formatHeader");
    function buildAccessors(obj, header) {
      const accessorName = utils$1.toCamelCase(" " + header);
      ["get", "set", "has"].forEach((methodName) => {
        Object.defineProperty(obj, methodName + accessorName, {
          value: function(arg1, arg2, arg3) {
            return this[methodName].call(this, header, arg1, arg2, arg3);
          },
          configurable: true
        });
      });
    }
    __name(buildAccessors, "buildAccessors");
    var AxiosHeaders = class {
      constructor(headers) {
        headers && this.set(headers);
      }
      set(header, valueOrRewrite, rewrite) {
        const self2 = this;
        function setHeader(_value, _header, _rewrite) {
          const lHeader = normalizeHeader(_header);
          if (!lHeader) {
            throw new Error("header name must be a non-empty string");
          }
          const key = utils$1.findKey(self2, lHeader);
          if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
            self2[key || _header] = normalizeValue(_value);
          }
        }
        __name(setHeader, "setHeader");
        const setHeaders = /* @__PURE__ */ __name((headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite)), "setHeaders");
        if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
          setHeaders(header, valueOrRewrite);
        } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
          setHeaders(parseHeaders(header), valueOrRewrite);
        } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
          let obj = {}, dest, key;
          for (const entry of header) {
            if (!utils$1.isArray(entry)) {
              throw TypeError("Object iterator must return a key-value pair");
            }
            obj[key = entry[0]] = (dest = obj[key]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
          }
          setHeaders(obj, valueOrRewrite);
        } else {
          header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
      }
      get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
          const key = utils$1.findKey(this, header);
          if (key) {
            const value = this[key];
            if (!parser) {
              return value;
            }
            if (parser === true) {
              return parseTokens(value);
            }
            if (utils$1.isFunction(parser)) {
              return parser.call(this, value, key);
            }
            if (utils$1.isRegExp(parser)) {
              return parser.exec(value);
            }
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
          const key = utils$1.findKey(this, header);
          return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
      }
      delete(header, matcher) {
        const self2 = this;
        let deleted = false;
        function deleteHeader(_header) {
          _header = normalizeHeader(_header);
          if (_header) {
            const key = utils$1.findKey(self2, _header);
            if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
              delete self2[key];
              deleted = true;
            }
          }
        }
        __name(deleteHeader, "deleteHeader");
        if (utils$1.isArray(header)) {
          header.forEach(deleteHeader);
        } else {
          deleteHeader(header);
        }
        return deleted;
      }
      clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while (i--) {
          const key = keys[i];
          if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
            delete this[key];
            deleted = true;
          }
        }
        return deleted;
      }
      normalize(format) {
        const self2 = this;
        const headers = {};
        utils$1.forEach(this, (value, header) => {
          const key = utils$1.findKey(headers, header);
          if (key) {
            self2[key] = normalizeValue(value);
            delete self2[header];
            return;
          }
          const normalized = format ? formatHeader(header) : String(header).trim();
          if (normalized !== header) {
            delete self2[header];
          }
          self2[normalized] = normalizeValue(value);
          headers[normalized] = true;
        });
        return this;
      }
      concat(...targets) {
        return this.constructor.concat(this, ...targets);
      }
      toJSON(asStrings) {
        const obj = /* @__PURE__ */ Object.create(null);
        utils$1.forEach(this, (value, header) => {
          value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
        });
        return obj;
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
      }
      getSetCookie() {
        return this.get("set-cookie") || [];
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(thing) {
        return thing instanceof this ? thing : new this(thing);
      }
      static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target) => computed.set(target));
        return computed;
      }
      static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
          accessors: {}
        };
        const accessors = internals.accessors;
        const prototype2 = this.prototype;
        function defineAccessor(_header) {
          const lHeader = normalizeHeader(_header);
          if (!accessors[lHeader]) {
            buildAccessors(prototype2, _header);
            accessors[lHeader] = true;
          }
        }
        __name(defineAccessor, "defineAccessor");
        utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
      }
    };
    __name(AxiosHeaders, "AxiosHeaders");
    AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
      let mapped = key[0].toUpperCase() + key.slice(1);
      return {
        get: () => value,
        set(headerValue) {
          this[mapped] = headerValue;
        }
      };
    });
    utils$1.freezeMethods(AxiosHeaders);
    var AxiosHeaders$1 = AxiosHeaders;
    function transformData(fns, response) {
      const config3 = this || defaults$1;
      const context2 = response || config3;
      const headers = AxiosHeaders$1.from(context2.headers);
      let data = context2.data;
      utils$1.forEach(fns, /* @__PURE__ */ __name(function transform(fn) {
        data = fn.call(config3, data, headers.normalize(), response ? response.status : void 0);
      }, "transform"));
      headers.normalize();
      return data;
    }
    __name(transformData, "transformData");
    function isCancel(value) {
      return !!(value && value.__CANCEL__);
    }
    __name(isCancel, "isCancel");
    function CanceledError(message, config3, request) {
      AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config3, request);
      this.name = "CanceledError";
    }
    __name(CanceledError, "CanceledError");
    utils$1.inherits(CanceledError, AxiosError, {
      __CANCEL__: true
    });
    function settle(resolve, reject, response) {
      const validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(new AxiosError(
          "Request failed with status code " + response.status,
          [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
          response.config,
          response.request,
          response
        ));
      }
    }
    __name(settle, "settle");
    function parseProtocol(url) {
      const match2 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
      return match2 && match2[1] || "";
    }
    __name(parseProtocol, "parseProtocol");
    function speedometer(samplesCount, min) {
      samplesCount = samplesCount || 10;
      const bytes = new Array(samplesCount);
      const timestamps = new Array(samplesCount);
      let head = 0;
      let tail = 0;
      let firstSampleTS;
      min = min !== void 0 ? min : 1e3;
      return /* @__PURE__ */ __name(function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) {
          firstSampleTS = now;
        }
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while (i !== head) {
          bytesCount += bytes[i++];
          i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) {
          tail = (tail + 1) % samplesCount;
        }
        if (now - firstSampleTS < min) {
          return;
        }
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
      }, "push");
    }
    __name(speedometer, "speedometer");
    function throttle(fn, freq) {
      let timestamp = 0;
      let threshold = 1e3 / freq;
      let lastArgs;
      let timer;
      const invoke = /* @__PURE__ */ __name((args, now = Date.now()) => {
        timestamp = now;
        lastArgs = null;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        fn(...args);
      }, "invoke");
      const throttled = /* @__PURE__ */ __name((...args) => {
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) {
          invoke(args, now);
        } else {
          lastArgs = args;
          if (!timer) {
            timer = setTimeout(() => {
              timer = null;
              invoke(lastArgs);
            }, threshold - passed);
          }
        }
      }, "throttled");
      const flush = /* @__PURE__ */ __name(() => lastArgs && invoke(lastArgs), "flush");
      return [throttled, flush];
    }
    __name(throttle, "throttle");
    var progressEventReducer = /* @__PURE__ */ __name((listener, isDownloadStream, freq = 3) => {
      let bytesNotified = 0;
      const _speedometer = speedometer(50, 250);
      return throttle((e) => {
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : void 0;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
          loaded,
          total,
          progress: total ? loaded / total : void 0,
          bytes: progressBytes,
          rate: rate ? rate : void 0,
          estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
          event: e,
          lengthComputable: total != null,
          [isDownloadStream ? "download" : "upload"]: true
        };
        listener(data);
      }, freq);
    }, "progressEventReducer");
    var progressEventDecorator = /* @__PURE__ */ __name((total, throttled) => {
      const lengthComputable = total != null;
      return [(loaded) => throttled[0]({
        lengthComputable,
        total,
        loaded
      }), throttled[1]];
    }, "progressEventDecorator");
    var asyncDecorator = /* @__PURE__ */ __name((fn) => (...args) => utils$1.asap(() => fn(...args)), "asyncDecorator");
    var isURLSameOrigin = platform2.hasStandardBrowserEnv ? ((origin2, isMSIE) => (url) => {
      url = new URL(url, platform2.origin);
      return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
    })(
      new URL(platform2.origin),
      platform2.navigator && /(msie|trident)/i.test(platform2.navigator.userAgent)
    ) : () => true;
    var cookies = platform2.hasStandardBrowserEnv ? (
      // Standard browser envs support document.cookie
      {
        write(name, value, expires, path, domain2, secure, sameSite) {
          if (typeof document === "undefined")
            return;
          const cookie = [`${name}=${encodeURIComponent(value)}`];
          if (utils$1.isNumber(expires)) {
            cookie.push(`expires=${new Date(expires).toUTCString()}`);
          }
          if (utils$1.isString(path)) {
            cookie.push(`path=${path}`);
          }
          if (utils$1.isString(domain2)) {
            cookie.push(`domain=${domain2}`);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          if (utils$1.isString(sameSite)) {
            cookie.push(`SameSite=${sameSite}`);
          }
          document.cookie = cookie.join("; ");
        },
        read(name) {
          if (typeof document === "undefined")
            return null;
          const match2 = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
          return match2 ? decodeURIComponent(match2[1]) : null;
        },
        remove(name) {
          this.write(name, "", Date.now() - 864e5, "/");
        }
      }
    ) : (
      // Non-standard browser env (web workers, react-native) lack needed support.
      {
        write() {
        },
        read() {
          return null;
        },
        remove() {
        }
      }
    );
    function isAbsoluteURL(url) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    }
    __name(isAbsoluteURL, "isAbsoluteURL");
    function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    }
    __name(combineURLs, "combineURLs");
    function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
      let isRelativeUrl = !isAbsoluteURL(requestedURL);
      if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    }
    __name(buildFullPath, "buildFullPath");
    var headersToObject = /* @__PURE__ */ __name((thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing, "headersToObject");
    function mergeConfig(config1, config22) {
      config22 = config22 || {};
      const config3 = {};
      function getMergedValue(target, source, prop, caseless) {
        if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
          return utils$1.merge.call({ caseless }, target, source);
        } else if (utils$1.isPlainObject(source)) {
          return utils$1.merge({}, source);
        } else if (utils$1.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      __name(getMergedValue, "getMergedValue");
      function mergeDeepProperties(a, b, prop, caseless) {
        if (!utils$1.isUndefined(b)) {
          return getMergedValue(a, b, prop, caseless);
        } else if (!utils$1.isUndefined(a)) {
          return getMergedValue(void 0, a, prop, caseless);
        }
      }
      __name(mergeDeepProperties, "mergeDeepProperties");
      function valueFromConfig2(a, b) {
        if (!utils$1.isUndefined(b)) {
          return getMergedValue(void 0, b);
        }
      }
      __name(valueFromConfig2, "valueFromConfig2");
      function defaultToConfig2(a, b) {
        if (!utils$1.isUndefined(b)) {
          return getMergedValue(void 0, b);
        } else if (!utils$1.isUndefined(a)) {
          return getMergedValue(void 0, a);
        }
      }
      __name(defaultToConfig2, "defaultToConfig2");
      function mergeDirectKeys(a, b, prop) {
        if (prop in config22) {
          return getMergedValue(a, b);
        } else if (prop in config1) {
          return getMergedValue(void 0, a);
        }
      }
      __name(mergeDirectKeys, "mergeDirectKeys");
      const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
      };
      utils$1.forEach(Object.keys({ ...config1, ...config22 }), /* @__PURE__ */ __name(function computeConfigValue(prop) {
        const merge2 = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge2(config1[prop], config22[prop], prop);
        utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
      }, "computeConfigValue"));
      return config3;
    }
    __name(mergeConfig, "mergeConfig");
    var resolveConfig = /* @__PURE__ */ __name((config3) => {
      const newConfig = mergeConfig({}, config3);
      let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
      newConfig.headers = headers = AxiosHeaders$1.from(headers);
      newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config3.params, config3.paramsSerializer);
      if (auth) {
        headers.set(
          "Authorization",
          "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
        );
      }
      if (utils$1.isFormData(data)) {
        if (platform2.hasStandardBrowserEnv || platform2.hasStandardBrowserWebWorkerEnv) {
          headers.setContentType(void 0);
        } else if (utils$1.isFunction(data.getHeaders)) {
          const formHeaders = data.getHeaders();
          const allowedHeaders = ["content-type", "content-length"];
          Object.entries(formHeaders).forEach(([key, val]) => {
            if (allowedHeaders.includes(key.toLowerCase())) {
              headers.set(key, val);
            }
          });
        }
      }
      if (platform2.hasStandardBrowserEnv) {
        withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
          const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
          if (xsrfValue) {
            headers.set(xsrfHeaderName, xsrfValue);
          }
        }
      }
      return newConfig;
    }, "resolveConfig");
    var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
    var xhrAdapter = isXHRAdapterSupported && function(config3) {
      return new Promise(/* @__PURE__ */ __name(function dispatchXhrRequest(resolve, reject) {
        const _config = resolveConfig(config3);
        let requestData = _config.data;
        const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
          flushUpload && flushUpload();
          flushDownload && flushDownload();
          _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
          _config.signal && _config.signal.removeEventListener("abort", onCanceled);
        }
        __name(done, "done");
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        request.timeout = _config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          const responseHeaders = AxiosHeaders$1.from(
            "getAllResponseHeaders" in request && request.getAllResponseHeaders()
          );
          const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          const response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config3,
            request
          };
          settle(/* @__PURE__ */ __name(function _resolve(value) {
            resolve(value);
            done();
          }, "_resolve"), /* @__PURE__ */ __name(function _reject(err) {
            reject(err);
            done();
          }, "_reject"), response);
          request = null;
        }
        __name(onloadend, "onloadend");
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = /* @__PURE__ */ __name(function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          }, "handleLoad");
        }
        request.onabort = /* @__PURE__ */ __name(function handleAbort() {
          if (!request) {
            return;
          }
          reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config3, request));
          request = null;
        }, "handleAbort");
        request.onerror = /* @__PURE__ */ __name(function handleError(event) {
          const msg = event && event.message ? event.message : "Network Error";
          const err = new AxiosError(msg, AxiosError.ERR_NETWORK, config3, request);
          err.event = event || null;
          reject(err);
          request = null;
        }, "handleError");
        request.ontimeout = /* @__PURE__ */ __name(function handleTimeout() {
          let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
          const transitional = _config.transitional || transitionalDefaults;
          if (_config.timeoutErrorMessage) {
            timeoutErrorMessage = _config.timeoutErrorMessage;
          }
          reject(new AxiosError(
            timeoutErrorMessage,
            transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
            config3,
            request
          ));
          request = null;
        }, "handleTimeout");
        requestData === void 0 && requestHeaders.setContentType(null);
        if ("setRequestHeader" in request) {
          utils$1.forEach(requestHeaders.toJSON(), /* @__PURE__ */ __name(function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
          }, "setRequestHeader"));
        }
        if (!utils$1.isUndefined(_config.withCredentials)) {
          request.withCredentials = !!_config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = _config.responseType;
        }
        if (onDownloadProgress) {
          [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
          request.addEventListener("progress", downloadThrottled);
        }
        if (onUploadProgress && request.upload) {
          [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
          request.upload.addEventListener("progress", uploadThrottled);
          request.upload.addEventListener("loadend", flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
          onCanceled = /* @__PURE__ */ __name((cancel) => {
            if (!request) {
              return;
            }
            reject(!cancel || cancel.type ? new CanceledError(null, config3, request) : cancel);
            request.abort();
            request = null;
          }, "onCanceled");
          _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
          if (_config.signal) {
            _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
          }
        }
        const protocol = parseProtocol(_config.url);
        if (protocol && platform2.protocols.indexOf(protocol) === -1) {
          reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config3));
          return;
        }
        request.send(requestData || null);
      }, "dispatchXhrRequest"));
    };
    var composeSignals = /* @__PURE__ */ __name((signals, timeout) => {
      const { length } = signals = signals ? signals.filter(Boolean) : [];
      if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = /* @__PURE__ */ __name(function(reason) {
          if (!aborted) {
            aborted = true;
            unsubscribe();
            const err = reason instanceof Error ? reason : this.reason;
            controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
          }
        }, "onabort");
        let timer = timeout && setTimeout(() => {
          timer = null;
          onabort(new AxiosError(`timeout ${timeout} of ms exceeded`, AxiosError.ETIMEDOUT));
        }, timeout);
        const unsubscribe = /* @__PURE__ */ __name(() => {
          if (signals) {
            timer && clearTimeout(timer);
            timer = null;
            signals.forEach((signal2) => {
              signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
            });
            signals = null;
          }
        }, "unsubscribe");
        signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
        const { signal } = controller;
        signal.unsubscribe = () => utils$1.asap(unsubscribe);
        return signal;
      }
    }, "composeSignals");
    var composeSignals$1 = composeSignals;
    var streamChunk = /* @__PURE__ */ __name(function* (chunk, chunkSize) {
      let len = chunk.byteLength;
      if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
      }
      let pos = 0;
      let end;
      while (pos < len) {
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
      }
    }, "streamChunk");
    var readBytes = /* @__PURE__ */ __name(async function* (iterable, chunkSize) {
      for await (const chunk of readStream(iterable)) {
        yield* streamChunk(chunk, chunkSize);
      }
    }, "readBytes");
    var readStream = /* @__PURE__ */ __name(async function* (stream) {
      if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
      }
      const reader = stream.getReader();
      try {
        for (; ; ) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          yield value;
        }
      } finally {
        await reader.cancel();
      }
    }, "readStream");
    var trackStream = /* @__PURE__ */ __name((stream, chunkSize, onProgress, onFinish) => {
      const iterator2 = readBytes(stream, chunkSize);
      let bytes = 0;
      let done;
      let _onFinish = /* @__PURE__ */ __name((e) => {
        if (!done) {
          done = true;
          onFinish && onFinish(e);
        }
      }, "_onFinish");
      return new ReadableStream({
        async pull(controller) {
          try {
            const { done: done2, value } = await iterator2.next();
            if (done2) {
              _onFinish();
              controller.close();
              return;
            }
            let len = value.byteLength;
            if (onProgress) {
              let loadedBytes = bytes += len;
              onProgress(loadedBytes);
            }
            controller.enqueue(new Uint8Array(value));
          } catch (err) {
            _onFinish(err);
            throw err;
          }
        },
        cancel(reason) {
          _onFinish(reason);
          return iterator2.return();
        }
      }, {
        highWaterMark: 2
      });
    }, "trackStream");
    var DEFAULT_CHUNK_SIZE = 64 * 1024;
    var { isFunction } = utils$1;
    var globalFetchAPI = (({ Request: Request2, Response: Response2 }) => ({
      Request: Request2,
      Response: Response2
    }))(utils$1.global);
    var {
      ReadableStream: ReadableStream$1,
      TextEncoder: TextEncoder2
    } = utils$1.global;
    var test = /* @__PURE__ */ __name((fn, ...args) => {
      try {
        return !!fn(...args);
      } catch (e) {
        return false;
      }
    }, "test");
    var factory = /* @__PURE__ */ __name((env2) => {
      env2 = utils$1.merge.call({
        skipUndefined: true
      }, globalFetchAPI, env2);
      const { fetch: envFetch, Request: Request2, Response: Response2 } = env2;
      const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
      const isRequestSupported = isFunction(Request2);
      const isResponseSupported = isFunction(Response2);
      if (!isFetchSupported) {
        return false;
      }
      const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);
      const encodeText = isFetchSupported && (typeof TextEncoder2 === "function" ? ((encoder) => (str) => encoder.encode(str))(new TextEncoder2()) : async (str) => new Uint8Array(await new Request2(str).arrayBuffer()));
      const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
        let duplexAccessed = false;
        const hasContentType = new Request2(platform2.origin, {
          body: new ReadableStream$1(),
          method: "POST",
          get duplex() {
            duplexAccessed = true;
            return "half";
          }
        }).headers.has("Content-Type");
        return duplexAccessed && !hasContentType;
      });
      const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response2("").body));
      const resolvers = {
        stream: supportsResponseStream && ((res) => res.body)
      };
      isFetchSupported && (() => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
          !resolvers[type] && (resolvers[type] = (res, config3) => {
            let method = res && res[type];
            if (method) {
              return method.call(res);
            }
            throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config3);
          });
        });
      })();
      const getBodyLength = /* @__PURE__ */ __name(async (body) => {
        if (body == null) {
          return 0;
        }
        if (utils$1.isBlob(body)) {
          return body.size;
        }
        if (utils$1.isSpecCompliantForm(body)) {
          const _request = new Request2(platform2.origin, {
            method: "POST",
            body
          });
          return (await _request.arrayBuffer()).byteLength;
        }
        if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
          return body.byteLength;
        }
        if (utils$1.isURLSearchParams(body)) {
          body = body + "";
        }
        if (utils$1.isString(body)) {
          return (await encodeText(body)).byteLength;
        }
      }, "getBodyLength");
      const resolveBodyLength = /* @__PURE__ */ __name(async (headers, body) => {
        const length = utils$1.toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
      }, "resolveBodyLength");
      return async (config3) => {
        let {
          url,
          method,
          data,
          signal,
          cancelToken,
          timeout,
          onDownloadProgress,
          onUploadProgress,
          responseType,
          headers,
          withCredentials = "same-origin",
          fetchOptions
        } = resolveConfig(config3);
        let _fetch = envFetch || fetch;
        responseType = responseType ? (responseType + "").toLowerCase() : "text";
        let composedSignal = composeSignals$1([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
        let request = null;
        const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
          composedSignal.unsubscribe();
        });
        let requestContentLength;
        try {
          if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
            let _request = new Request2(url, {
              method: "POST",
              body: data,
              duplex: "half"
            });
            let contentTypeHeader;
            if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
              headers.setContentType(contentTypeHeader);
            }
            if (_request.body) {
              const [onProgress, flush] = progressEventDecorator(
                requestContentLength,
                progressEventReducer(asyncDecorator(onUploadProgress))
              );
              data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
            }
          }
          if (!utils$1.isString(withCredentials)) {
            withCredentials = withCredentials ? "include" : "omit";
          }
          const isCredentialsSupported = isRequestSupported && "credentials" in Request2.prototype;
          const resolvedOptions = {
            ...fetchOptions,
            signal: composedSignal,
            method: method.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: isCredentialsSupported ? withCredentials : void 0
          };
          request = isRequestSupported && new Request2(url, resolvedOptions);
          let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
          const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
          if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
            const options = {};
            ["status", "statusText", "headers"].forEach((prop) => {
              options[prop] = response[prop];
            });
            const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
            const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
              responseContentLength,
              progressEventReducer(asyncDecorator(onDownloadProgress), true)
            ) || [];
            response = new Response2(
              trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
                flush && flush();
                unsubscribe && unsubscribe();
              }),
              options
            );
          }
          responseType = responseType || "text";
          let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config3);
          !isStreamResponse && unsubscribe && unsubscribe();
          return await new Promise((resolve, reject) => {
            settle(resolve, reject, {
              data: responseData,
              headers: AxiosHeaders$1.from(response.headers),
              status: response.status,
              statusText: response.statusText,
              config: config3,
              request
            });
          });
        } catch (err) {
          unsubscribe && unsubscribe();
          if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
            throw Object.assign(
              new AxiosError("Network Error", AxiosError.ERR_NETWORK, config3, request),
              {
                cause: err.cause || err
              }
            );
          }
          throw AxiosError.from(err, err && err.code, config3, request);
        }
      };
    }, "factory");
    var seedCache = /* @__PURE__ */ new Map();
    var getFetch = /* @__PURE__ */ __name((config3) => {
      let env2 = config3 && config3.env || {};
      const { fetch: fetch2, Request: Request2, Response: Response2 } = env2;
      const seeds = [
        Request2,
        Response2,
        fetch2
      ];
      let len = seeds.length, i = len, seed, target, map = seedCache;
      while (i--) {
        seed = seeds[i];
        target = map.get(seed);
        target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env2));
        map = target;
      }
      return target;
    }, "getFetch");
    getFetch();
    var knownAdapters = {
      http: httpAdapter,
      xhr: xhrAdapter,
      fetch: {
        get: getFetch
      }
    };
    utils$1.forEach(knownAdapters, (fn, value) => {
      if (fn) {
        try {
          Object.defineProperty(fn, "name", { value });
        } catch (e) {
        }
        Object.defineProperty(fn, "adapterName", { value });
      }
    });
    var renderReason = /* @__PURE__ */ __name((reason) => `- ${reason}`, "renderReason");
    var isResolvedHandle = /* @__PURE__ */ __name((adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false, "isResolvedHandle");
    function getAdapter(adapters2, config3) {
      adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
      const { length } = adapters2;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters2[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError(`Unknown adapter '${id}'`);
          }
        }
        if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config3)))) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    }
    __name(getAdapter, "getAdapter");
    var adapters = {
      /**
       * Resolve an adapter from a list of adapter names or functions.
       * @type {Function}
       */
      getAdapter,
      /**
       * Exposes all known adapters
       * @type {Object<string, Function|Object>}
       */
      adapters: knownAdapters
    };
    function throwIfCancellationRequested(config3) {
      if (config3.cancelToken) {
        config3.cancelToken.throwIfRequested();
      }
      if (config3.signal && config3.signal.aborted) {
        throw new CanceledError(null, config3);
      }
    }
    __name(throwIfCancellationRequested, "throwIfCancellationRequested");
    function dispatchRequest(config3) {
      throwIfCancellationRequested(config3);
      config3.headers = AxiosHeaders$1.from(config3.headers);
      config3.data = transformData.call(
        config3,
        config3.transformRequest
      );
      if (["post", "put", "patch"].indexOf(config3.method) !== -1) {
        config3.headers.setContentType("application/x-www-form-urlencoded", false);
      }
      const adapter = adapters.getAdapter(config3.adapter || defaults$1.adapter, config3);
      return adapter(config3).then(/* @__PURE__ */ __name(function onAdapterResolution(response) {
        throwIfCancellationRequested(config3);
        response.data = transformData.call(
          config3,
          config3.transformResponse,
          response
        );
        response.headers = AxiosHeaders$1.from(response.headers);
        return response;
      }, "onAdapterResolution"), /* @__PURE__ */ __name(function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config3);
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config3,
              config3.transformResponse,
              reason.response
            );
            reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
          }
        }
        return Promise.reject(reason);
      }, "onAdapterRejection"));
    }
    __name(dispatchRequest, "dispatchRequest");
    var VERSION = "1.13.2";
    var validators$1 = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
      validators$1[type] = /* @__PURE__ */ __name(function validator2(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      }, "validator");
    });
    var deprecatedWarnings = {};
    validators$1.transitional = /* @__PURE__ */ __name(function transitional(validator2, version2, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      __name(formatMessage, "formatMessage");
      return (value, opt, opts) => {
        if (validator2 === false) {
          throw new AxiosError(
            formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
            AxiosError.ERR_DEPRECATED
          );
        }
        if (version2 && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" + version2 + " and will be removed in the near future"
            )
          );
        }
        return validator2 ? validator2(value, opt, opts) : true;
      };
    }, "transitional");
    validators$1.spelling = /* @__PURE__ */ __name(function spelling(correctSpelling) {
      return (value, opt) => {
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
      };
    }, "spelling");
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
      }
      const keys = Object.keys(options);
      let i = keys.length;
      while (i-- > 0) {
        const opt = keys[i];
        const validator2 = schema[opt];
        if (validator2) {
          const value = options[opt];
          const result = value === void 0 || validator2(value, opt, options);
          if (result !== true) {
            throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
        }
      }
    }
    __name(assertOptions, "assertOptions");
    var validator = {
      assertOptions,
      validators: validators$1
    };
    var validators = validator.validators;
    var Axios = class {
      constructor(instanceConfig) {
        this.defaults = instanceConfig || {};
        this.interceptors = {
          request: new InterceptorManager$1(),
          response: new InterceptorManager$1()
        };
      }
      /**
       * Dispatch a request
       *
       * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
       * @param {?Object} config
       *
       * @returns {Promise} The Promise to be fulfilled
       */
      async request(configOrUrl, config3) {
        try {
          return await this._request(configOrUrl, config3);
        } catch (err) {
          if (err instanceof Error) {
            let dummy = {};
            Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
            const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
            try {
              if (!err.stack) {
                err.stack = stack;
              } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
                err.stack += "\n" + stack;
              }
            } catch (e) {
            }
          }
          throw err;
        }
      }
      _request(configOrUrl, config3) {
        if (typeof configOrUrl === "string") {
          config3 = config3 || {};
          config3.url = configOrUrl;
        } else {
          config3 = configOrUrl || {};
        }
        config3 = mergeConfig(this.defaults, config3);
        const { transitional, paramsSerializer, headers } = config3;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        if (paramsSerializer != null) {
          if (utils$1.isFunction(paramsSerializer)) {
            config3.paramsSerializer = {
              serialize: paramsSerializer
            };
          } else {
            validator.assertOptions(paramsSerializer, {
              encode: validators.function,
              serialize: validators.function
            }, true);
          }
        }
        if (config3.allowAbsoluteUrls !== void 0)
          ;
        else if (this.defaults.allowAbsoluteUrls !== void 0) {
          config3.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        } else {
          config3.allowAbsoluteUrls = true;
        }
        validator.assertOptions(config3, {
          baseUrl: validators.spelling("baseURL"),
          withXsrfToken: validators.spelling("withXSRFToken")
        }, true);
        config3.method = (config3.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders = headers && utils$1.merge(
          headers.common,
          headers[config3.method]
        );
        headers && utils$1.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (method) => {
            delete headers[method];
          }
        );
        config3.headers = AxiosHeaders$1.concat(contextHeaders, headers);
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(/* @__PURE__ */ __name(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config3) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        }, "unshiftRequestInterceptors"));
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(/* @__PURE__ */ __name(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        }, "pushResponseInterceptors"));
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
          const chain = [dispatchRequest.bind(this), void 0];
          chain.unshift(...requestInterceptorChain);
          chain.push(...responseInterceptorChain);
          len = chain.length;
          promise = Promise.resolve(config3);
          while (i < len) {
            promise = promise.then(chain[i++], chain[i++]);
          }
          return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config3;
        while (i < len) {
          const onFulfilled = requestInterceptorChain[i++];
          const onRejected = requestInterceptorChain[i++];
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error3) {
            onRejected.call(this, error3);
            break;
          }
        }
        try {
          promise = dispatchRequest.call(this, newConfig);
        } catch (error3) {
          return Promise.reject(error3);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while (i < len) {
          promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
      }
      getUri(config3) {
        config3 = mergeConfig(this.defaults, config3);
        const fullPath = buildFullPath(config3.baseURL, config3.url, config3.allowAbsoluteUrls);
        return buildURL(fullPath, config3.params, config3.paramsSerializer);
      }
    };
    __name(Axios, "Axios");
    utils$1.forEach(["delete", "get", "head", "options"], /* @__PURE__ */ __name(function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config3) {
        return this.request(mergeConfig(config3 || {}, {
          method,
          url,
          data: (config3 || {}).data
        }));
      };
    }, "forEachMethodNoData"));
    utils$1.forEach(["post", "put", "patch"], /* @__PURE__ */ __name(function forEachMethodWithData(method) {
      function generateHTTPMethod(isForm) {
        return /* @__PURE__ */ __name(function httpMethod(url, data, config3) {
          return this.request(mergeConfig(config3 || {}, {
            method,
            headers: isForm ? {
              "Content-Type": "multipart/form-data"
            } : {},
            url,
            data
          }));
        }, "httpMethod");
      }
      __name(generateHTTPMethod, "generateHTTPMethod");
      Axios.prototype[method] = generateHTTPMethod();
      Axios.prototype[method + "Form"] = generateHTTPMethod(true);
    }, "forEachMethodWithData"));
    var Axios$1 = Axios;
    var CancelToken = class {
      constructor(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        let resolvePromise;
        this.promise = new Promise(/* @__PURE__ */ __name(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        }, "promiseExecutor"));
        const token = this;
        this.promise.then((cancel) => {
          if (!token._listeners)
            return;
          let i = token._listeners.length;
          while (i-- > 0) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = (onfulfilled) => {
          let _resolve;
          const promise = new Promise((resolve) => {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = /* @__PURE__ */ __name(function reject() {
            token.unsubscribe(_resolve);
          }, "reject");
          return promise;
        };
        executor(/* @__PURE__ */ __name(function cancel(message, config3, request) {
          if (token.reason) {
            return;
          }
          token.reason = new CanceledError(message, config3, request);
          resolvePromise(token.reason);
        }, "cancel"));
      }
      /**
       * Throws a `CanceledError` if cancellation has been requested.
       */
      throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      }
      /**
       * Subscribe to the cancel signal
       */
      subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      }
      /**
       * Unsubscribe from the cancel signal
       */
      unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      }
      toAbortSignal() {
        const controller = new AbortController();
        const abort2 = /* @__PURE__ */ __name((err) => {
          controller.abort(err);
        }, "abort");
        this.subscribe(abort2);
        controller.signal.unsubscribe = () => this.unsubscribe(abort2);
        return controller.signal;
      }
      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      static source() {
        let cancel;
        const token = new CancelToken(/* @__PURE__ */ __name(function executor(c) {
          cancel = c;
        }, "executor"));
        return {
          token,
          cancel
        };
      }
    };
    __name(CancelToken, "CancelToken");
    var CancelToken$1 = CancelToken;
    function spread(callback) {
      return /* @__PURE__ */ __name(function wrap(arr) {
        return callback.apply(null, arr);
      }, "wrap");
    }
    __name(spread, "spread");
    function isAxiosError(payload) {
      return utils$1.isObject(payload) && payload.isAxiosError === true;
    }
    __name(isAxiosError, "isAxiosError");
    var HttpStatusCode = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
      WebServerIsDown: 521,
      ConnectionTimedOut: 522,
      OriginIsUnreachable: 523,
      TimeoutOccurred: 524,
      SslHandshakeFailed: 525,
      InvalidSslCertificate: 526
    };
    Object.entries(HttpStatusCode).forEach(([key, value]) => {
      HttpStatusCode[value] = key;
    });
    var HttpStatusCode$1 = HttpStatusCode;
    function createInstance(defaultConfig) {
      const context2 = new Axios$1(defaultConfig);
      const instance = bind(Axios$1.prototype.request, context2);
      utils$1.extend(instance, Axios$1.prototype, context2, { allOwnKeys: true });
      utils$1.extend(instance, context2, null, { allOwnKeys: true });
      instance.create = /* @__PURE__ */ __name(function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      }, "create");
      return instance;
    }
    __name(createInstance, "createInstance");
    var axios = createInstance(defaults$1);
    axios.Axios = Axios$1;
    axios.CanceledError = CanceledError;
    axios.CancelToken = CancelToken$1;
    axios.isCancel = isCancel;
    axios.VERSION = VERSION;
    axios.toFormData = toFormData;
    axios.AxiosError = AxiosError;
    axios.Cancel = axios.CanceledError;
    axios.all = /* @__PURE__ */ __name(function all(promises) {
      return Promise.all(promises);
    }, "all");
    axios.spread = spread;
    axios.isAxiosError = isAxiosError;
    axios.mergeConfig = mergeConfig;
    axios.AxiosHeaders = AxiosHeaders$1;
    axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
    axios.getAdapter = adapters.getAdapter;
    axios.HttpStatusCode = HttpStatusCode$1;
    axios.default = axios;
    module.exports = axios;
  }
});

// node-built-in-modules:node:url
import libDefault from "node:url";
var require_node_url = __commonJS({
  "node-built-in-modules:node:url"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault;
  }
});

// util/runtime.js
var require_runtime = __commonJS({
  "util/runtime.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { URL: URL2 } = require_node_url();
    var cachedProxyRaw;
    var cachedProxy;
    function parseCliArgs(args) {
      const source = Array.isArray(args) ? args : process.argv.slice(2);
      return source.reduce((acc, rawArg) => {
        if (typeof rawArg !== "string") {
          return acc;
        }
        const arg = rawArg.trim();
        if (!arg.startsWith("--")) {
          return acc;
        }
        const eqIndex = arg.indexOf("=");
        if (eqIndex <= 2 || eqIndex === arg.length - 1) {
          return acc;
        }
        const key = arg.slice(2, eqIndex).trim();
        const value = arg.slice(eqIndex + 1).trim();
        if (!key || !value)
          return acc;
        acc[key] = value;
        return acc;
      }, {});
    }
    __name(parseCliArgs, "parseCliArgs");
    function applyCliOverrides(args) {
      const parsed = parseCliArgs(args);
      if (parsed.proxy) {
        process.env.KUGOU_API_PROXY = parsed.proxy;
      }
      if (parsed.platform) {
        process.env.platform = parsed.platform;
      }
      if (parsed.port) {
        const port = Number(parsed.port);
        if (!Number.isNaN(port) && port > 0) {
          process.env.PORT = String(port);
        } else {
          console.warn(`[cli] Invalid port value "${parsed.port}", fallback to default.`);
        }
      }
    }
    __name(applyCliOverrides, "applyCliOverrides");
    function resolveProxy() {
      const rawProxyEnv = typeof process.env.KUGOU_API_PROXY === "string" ? process.env.KUGOU_API_PROXY.trim() : void 0;
      const rawProxy = rawProxyEnv && rawProxyEnv.length > 0 ? rawProxyEnv : void 0;
      if (!rawProxy) {
        cachedProxyRaw = void 0;
        cachedProxy = null;
        return null;
      }
      if (cachedProxyRaw === rawProxy) {
        return cachedProxy;
      }
      cachedProxyRaw = rawProxy;
      try {
        const parsed = new URL2(rawProxy);
        if (!/^https?:$/.test(parsed.protocol)) {
          console.warn(`[proxy] Unsupported proxy protocol: ${parsed.protocol}`);
          cachedProxy = null;
          return null;
        }
        const proxyConfig = {
          protocol: parsed.protocol.replace(":", ""),
          host: parsed.hostname,
          port: parsed.port ? Number(parsed.port) : parsed.protocol === "https:" ? 443 : 80
        };
        if (parsed.username || parsed.password) {
          proxyConfig.auth = {
            username: parsed.username,
            password: parsed.password
          };
        }
        cachedProxy = proxyConfig;
        console.info(`[proxy] Using proxy ${parsed.protocol}//${parsed.host}`);
      } catch (error3) {
        console.warn(`[proxy] Failed to parse proxy address "${rawProxy}": ${error3.message}`);
        cachedProxy = null;
      }
      return cachedProxy;
    }
    __name(resolveProxy, "resolveProxy");
    module.exports = { applyCliOverrides, parseCliArgs, resolveProxy };
  }
});

// util/request.js
var require_request = __commonJS({
  "util/request.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var axios = require_axios();
    var { cryptoMd5: cryptoMd52 } = require_crypto2();
    var { signKey: signKey2, signatureAndroidParams: signatureAndroidParams2, signatureRegisterParams: signatureRegisterParams2, signatureWebParams: signatureWebParams2 } = require_helper();
    var { parseCookieString } = require_util();
    var { appid: appid2, clientver: clientver2, liteAppid: liteAppid2, liteClientver: liteClientver2 } = require_config();
    var { resolveProxy } = require_runtime();
    var createRequest2 = /* @__PURE__ */ __name((options) => {
      return new Promise(async (resolve, reject) => {
        const isLite = false;
        const dfid = options?.cookie?.dfid || "-";
        const mid = cryptoMd52(dfid);
        const uuid = cryptoMd52(`${dfid}${mid}`);
        const token = options?.cookie?.token || "";
        const userid = options?.cookie?.userid || 0;
        const clienttime = Math.floor(Date.now() / 1e3);
        const ip = options?.realIP || options?.ip || "";
        const headers = { dfid, clienttime, mid };
        if (ip) {
          headers["X-Real-IP"] = ip;
          headers["X-Forwarded-For"] = ip;
        }
        const defaultParams = {
          dfid,
          mid,
          uuid,
          appid: isLite ? liteAppid2 : appid2,
          // apiver: apiver,
          clientver: isLite ? liteClientver2 : clientver2,
          userid,
          clienttime
        };
        if (token)
          defaultParams["token"] = token;
        const params = options?.clearDefaultParams ? options?.params || {} : Object.assign({}, defaultParams, options?.params || {});
        headers["clienttime"] = params.clienttime;
        if (options?.encryptKey) {
          params["key"] = signKey2(params["hash"], params["mid"], params["userid"], params["appid"]);
        }
        const data = typeof options?.data === "object" ? JSON.stringify(options.data) : options?.data || "";
        if (!params["signature"] && !options.notSignature) {
          switch (options?.encryptType) {
            case "register":
              params["signature"] = signatureRegisterParams2(params);
              break;
            case "web":
              params["signature"] = signatureWebParams2(params);
              break;
            case "android":
            default:
              params["signature"] = signatureAndroidParams2(params, data);
              break;
          }
        }
        options["params"] = params;
        options["baseURL"] = options?.baseURL || "https://gateway.kugou.com";
        options["headers"] = Object.assign({ "User-Agent": "Android15-1070-11083-46-0-DiscoveryDRADProtocol-wifi" }, options?.headers || {}, { dfid, clienttime: params.clienttime, mid });
        const requestOptions = {
          params,
          data: options?.data,
          method: options.method,
          baseURL: options?.baseURL,
          url: options.url,
          headers: Object.assign({}, options?.headers || {}, headers),
          withCredentials: true,
          responseType: options.responseType
        };
        const proxyConfig = resolveProxy();
        if (proxyConfig) {
          requestOptions.proxy = proxyConfig;
        }
        if (options.data)
          requestOptions.data = options.data;
        if (params)
          requestOptions.params = params;
        if (options.baseURL?.includes("openapicdn")) {
          const url = requestOptions.url;
          const _params = Object.keys(params).map((key) => `${key}=${params[key]}`).join("&");
          requestOptions.url = `${url}?${_params}`;
          requestOptions.params = {};
        }
        const answer = { status: 500, body: {}, cookie: [], headers: {} };
        try {
          const response = await axios(requestOptions);
          const body = response.data;
          answer.cookie = (response.headers["set-cookie"] || []).map((x) => parseCookieString(x));
          if (response.headers["ssa-code"]) {
            answer.headers["ssa-code"] = response.headers["ssa-code"];
          }
          try {
            answer.body = JSON.parse(body.toString());
          } catch (error3) {
            answer.body = body;
          }
          if (response.data.status === 0 || response.data?.error_code && response.data.error_code !== 0) {
            answer.status = 502;
            reject(answer);
          } else {
            answer.status = 200;
            resolve(answer);
          }
        } catch (e) {
          answer.status = 502;
          answer.body = { status: 0, msg: e };
          reject(answer);
        }
      });
    }, "createRequest");
    module.exports = { createRequest: createRequest2 };
  }
});

// util/index.js
var require_util2 = __commonJS({
  "util/index.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { apiver, appid: appid2, wx_appid, wx_lite_appid, wx_secret, wx_lite_secret, srcappid, clientver: clientver2, liteAppid: liteAppid2, liteClientver: liteClientver2 } = require_config();
    var {
      cryptoAesDecrypt: cryptoAesDecrypt2,
      cryptoAesEncrypt: cryptoAesEncrypt2,
      cryptoMd5: cryptoMd52,
      cryptoRSAEncrypt: cryptoRSAEncrypt2,
      cryptoSha1,
      rsaEncrypt2: rsaEncrypt22,
      playlistAesEncrypt: playlistAesEncrypt2,
      playlistAesDecrypt: playlistAesDecrypt2,
      publicLiteRasKey,
      publicRasKey
    } = require_crypto2();
    var { createRequest: createRequest2 } = require_request();
    var { signKey: signKey2, signParams, signParamsKey, signCloudKey, signatureAndroidParams: signatureAndroidParams2, signatureRegisterParams: signatureRegisterParams2, signatureWebParams: signatureWebParams2 } = require_helper();
    var { randomString, decodeLyrics, parseCookieString, cookieToJson } = require_util();
    var isLite = false;
    var useAppid = isLite ? liteAppid2 : appid2;
    var useClientver = isLite ? liteClientver2 : clientver2;
    module.exports = {
      apiver,
      appid: useAppid,
      // liteAppid,
      // liteClientver,
      wx_appid,
      wx_lite_appid,
      wx_secret,
      wx_lite_secret,
      srcappid,
      clientver: useClientver,
      isLite,
      cryptoAesDecrypt: cryptoAesDecrypt2,
      cryptoAesEncrypt: cryptoAesEncrypt2,
      cryptoMd5: cryptoMd52,
      cryptoRSAEncrypt: cryptoRSAEncrypt2,
      cryptoSha1,
      rsaEncrypt2: rsaEncrypt22,
      playlistAesEncrypt: playlistAesEncrypt2,
      playlistAesDecrypt: playlistAesDecrypt2,
      createRequest: createRequest2,
      signKey: signKey2,
      signParams,
      signParamsKey,
      signCloudKey,
      signatureAndroidParams: signatureAndroidParams2,
      signatureRegisterParams: signatureRegisterParams2,
      signatureWebParams: signatureWebParams2,
      randomString,
      decodeLyrics,
      parseCookieString,
      cookieToJson,
      publicLiteRasKey,
      publicRasKey
    };
  }
});

// module/ai_recommend.js
var require_ai_recommend = __commonJS({
  "module/ai_recommend.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, signParamsKey, cryptoMd5: cryptoMd52 } = require_util2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const dfid = params?.dfid || params?.cookie?.dfid || "-";
      const mid = cryptoMd52(dfid);
      const clienttime = Date.now();
      const recommend_source = (params?.album_audio_id || "").split(",").map((s) => ({ ID: Number(s) }));
      const dataMap = {
        platform: "ios",
        clientver: clientver2,
        clienttime,
        userid,
        client_playlist: [],
        source_type: 2,
        playlist_ver: 2,
        area_code: 1,
        appid: appid2,
        key: signParamsKey(clienttime.toString()),
        mid,
        recommend_source
      };
      return useAxios({
        url: "/recommend",
        data: dataMap,
        method: "post",
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "songlistairec.kugou.com" },
        clearDefaultParams: true
      });
    };
  }
});

// module/album.js
var require_album = __commonJS({
  "module/album.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { clientver: clientver2, appid: appid2, cryptoMd5: cryptoMd52, signParamsKey } = require_util2();
    module.exports = (params, useAxios) => {
      const dateTime = Date.now();
      const data = (params?.album_id || "").split(",").map((s) => ({ album_id: s, album_name: "", author_name: "" }));
      const dfid = params?.cookie?.dfid || params?.dfid || "-";
      const userid = params?.cookie?.userid || params?.userid || 0;
      const token = params?.cookie?.token || params?.token || 0;
      const dataMap = {
        appid: appid2,
        clienttime: dateTime,
        clientver: clientver2,
        data,
        dfid,
        fields: params?.fields || "",
        key: signParamsKey(dateTime),
        mid: cryptoMd52(dfid)
      };
      if (token)
        dataMap["token"] = token;
      if (userid)
        dataMap["userid"] = userid;
      return useAxios({
        baseURL: "http://kmr.service.kugou.com",
        url: "/v1/album",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "kmr.service.kugou.com", "Content-Type": "application/json" }
      });
    };
  }
});

// module/album_detail.js
var require_album_detail = __commonJS({
  "module/album_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const data = {
        data: [{ album_id: params.id }],
        is_buy: params?.is_buy || 0,
        fields: "album_id,album_name,publish_date,sizable_cover,intro,language,is_publish,heat,type,quality,authors,exclusive,author_name,trans_param"
      };
      return useAxios({
        url: "/kmr/v2/albums",
        method: "POST",
        data,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "openapi.kugou.com", "kg-tid": "255" }
      });
    };
  }
});

// module/album_shop.js
var require_album_shop = __commonJS({
  "module/album_shop.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/zhuanjidata/v3/album_shop_v2/get_classify_data",
        method: "GET",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/album_songs.js
var require_album_songs = __commonJS({
  "module/album_songs.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        album_id: params.id,
        is_buy: params?.is_buy || "",
        page: params?.page || 1,
        pagesize: params?.pagesize || 30
      };
      return useAxios({
        url: "/v1/album_audio/lite",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "openapi.kugou.com", "kg-tid": "255" }
      });
    };
  }
});

// module/artist_albums.js
var require_artist_albums = __commonJS({
  "module/artist_albums.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        author_id: params.id,
        pagesize: params?.pagesize || 30,
        page: params?.page || 1,
        sort: params?.sort === "hot" ? 3 : 1,
        // 3：最热，1：最新
        category: 1,
        area_code: "all"
      };
      return useAxios({
        url: "/kmr/v1/author/albums",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "openapi.kugou.com", "kg-tid": 36 }
      });
    };
  }
});

// module/artist_audios.js
var require_artist_audios = __commonJS({
  "module/artist_audios.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoMd5: cryptoMd52, signParamsKey, clientver: clientver2, appid: appid2 } = require_util2();
    module.exports = (params, useAxios) => {
      const clienttime = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
      const mid = cryptoMd52(params?.cookie?.dfid || "-");
      const dataMap = {
        appid: appid2,
        clientver: clientver2,
        mid,
        clienttime,
        key: signParamsKey(clienttime),
        author_id: params.id,
        pagesize: params?.pagesize || 30,
        page: params?.page || 1,
        sort: params?.sort === "hot" ? 1 : 2,
        // 1：最热，2：最新
        area_code: "all"
      };
      return useAxios({
        baseURL: "https://openapi.kugou.com",
        url: "/kmr/v1/audio_group/author",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "openapi.kugou.com", "kg-tid": 220 }
      });
    };
  }
});

// module/artist_detail.js
var require_artist_detail = __commonJS({
  "module/artist_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/kmr/v3/author",
        method: "POST",
        data: { author_id: params.id },
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "openapi.kugou.com", "kg-tid": 36 }
      });
    };
  }
});

// module/artist_follow.js
var require_artist_follow = __commonJS({
  "module/artist_follow.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoAesEncrypt: cryptoAesEncrypt2, rsaEncrypt2: rsaEncrypt22 } = require_util2();
    module.exports = (params, useAxios) => {
      const singerid = Number(params.id);
      const token = params?.token || params.cookie?.token || "";
      const userid = Number(params?.userid || params?.cookie?.userid || 0);
      const clienttime = Math.floor(Date.now() / 1e3);
      const encrypt = cryptoAesEncrypt2({ singerid, token });
      const paramsMap = {
        plat: 0,
        userid,
        singerid,
        source: 7,
        p: rsaEncrypt22({ clienttime, key: encrypt.key }),
        params: encrypt.str
      };
      return useAxios({
        url: "/followservice/v3/follow_singer",
        method: "post",
        data: paramsMap,
        params: { clienttime },
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/artist_follow_newsongs.js
var require_artist_follow_newsongs = __commonJS({
  "module/artist_follow_newsongs.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const last_album_id = params.last_album_id || 0;
      const page_size = params.pagesize || 30;
      const opt_sort = params.opt_sort === 2 ? 2 : 1;
      const paramsMap = {
        last_album_id,
        page_size,
        opt_sort
      };
      return useAxios({
        url: "/feed/v1/follow/newsong_album_list",
        method: "post",
        data: { last_album_id },
        params: paramsMap,
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/artist_honour.js
var require_artist_honour = __commonJS({
  "module/artist_honour.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        baseURL: "http://h5activity.kugou.com",
        url: "/v1/query_singer_honour_detail",
        method: "POST",
        params: { singer_id: params.id, pagesize: params?.pagesize || 30, page: params?.page || 1 },
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/artist_lists.js
var require_artist_lists = __commonJS({
  "module/artist_lists.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        musician: Number(params.musician || 0),
        sextype: params.sextypes || 0,
        showtype: 2,
        type: params.type || 0,
        hotsize: Number(params.hotsize || 30)
      };
      return useAxios({
        url: "/ocean/v6/singer/list",
        method: "GET",
        params: paramsMap,
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/artist_unfollow.js
var require_artist_unfollow = __commonJS({
  "module/artist_unfollow.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoAesEncrypt: cryptoAesEncrypt2, rsaEncrypt2: rsaEncrypt22 } = require_util2();
    module.exports = (params, useAxios) => {
      const singerid = params.id;
      const token = params?.token || params.cookie?.token || "";
      const userid = params?.userid || params?.cookie?.userid || 0;
      const clienttime = Math.floor(Date.now() / 1e3);
      const encrypt = cryptoAesEncrypt2({ singerid, token });
      const paramsMap = {
        plat: 0,
        userid,
        singerid,
        source: 7,
        p: rsaEncrypt22({ clienttime, key: encrypt.key }),
        params: encrypt.str
      };
      return useAxios({
        url: "/followservice/v3/unfollow_singer",
        method: "post",
        data: paramsMap,
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/artist_videos.js
var require_artist_videos = __commonJS({
  "module/artist_videos.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var tag_idx = { official: 18, live: 20, fan: 23, artist: 42419, all: "" };
    module.exports = (params, useAxios) => {
      const paramsMap = {
        author_id: params.id,
        is_fanmade: "",
        tag_idx: tag_idx[params?.tag || "all"] || "",
        // 18:官方版本，20：现场版本，23：饭制版本，42419：歌手发布
        pagesize: params.pagesize || 30,
        page: params.page || 1
      };
      return useAxios({
        baseURL: "https://openapicdn.kugou.com",
        url: "/kmr/v1/author/videos",
        method: "GET",
        params: paramsMap,
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/audio.js
var require_audio = __commonJS({
  "module/audio.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoMd5: cryptoMd52, signParamsKey, appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const dateTime = Date.now();
      const data = (params?.hash || "").split(",").map((s) => ({ hash: s, audio_id: 0 }));
      const dfid = params?.cookie?.dfid || params?.dfid || "-";
      const userid = params?.cookie?.userid || params?.userid || 0;
      const token = params?.cookie?.token || params?.token || 0;
      const dataMap = {
        appid: appid2,
        clienttime: dateTime,
        clientver: clientver2,
        data,
        dfid,
        key: signParamsKey(dateTime),
        mid: cryptoMd52(dfid)
      };
      if (token)
        dataMap["token"] = token;
      if (userid)
        dataMap["userid"] = userid;
      return useAxios({
        baseURL: "http://kmr.service.kugou.com",
        url: "/v1/audio/audio",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "kmr.service.kugou.com", "Content-Type": "application/json" }
      });
    };
  }
});

// module/audio_accompany_matching.js
var require_audio_accompany_matching = __commonJS({
  "module/audio_accompany_matching.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoMd5: cryptoMd52, appid: appid2 } = require_util2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        isteen: 0,
        mixId: Number(params.mixId) || 0,
        usemkv: 1,
        platform: 2,
        fileName: params.fileName || "",
        hash: params.hash,
        version: 12375,
        appid: appid2
      };
      const str = "*s&iN#G70*";
      const paramsString = Object.keys(dataMap).sort().map((key) => `${key}=${typeof dataMap[key] === "object" ? JSON.stringify(dataMap[key]) : dataMap[key]}`).join("&");
      dataMap["sign"] = cryptoMd52(`${paramsString}${str}`).substring(8, 24);
      return useAxios({
        baseURL: "https://nsongacsing.kugou.com",
        url: "/sing7/accompanywan/json/v2/cdn/optimal_matching_accompany_2_listen.do",
        params: dataMap,
        method: "get",
        encryptType: "android",
        cookie: params?.cookie || {},
        clearDefaultParams: true,
        notSignature: true
      });
    };
  }
});

// module/audio_ktv_total.js
var require_audio_ktv_total = __commonJS({
  "module/audio_ktv_total.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoMd5: cryptoMd52, appid: appid2 } = require_util2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        isteen: 0,
        songId: Number(params.songId),
        usemkv: 1,
        platform: 2,
        singerName: params.singerName,
        songHash: params.songHash,
        version: 12375,
        appid: appid2
      };
      const str = "*s&iN#G70*";
      const paramsString = Object.keys(dataMap).sort().map((key) => `${key}=${typeof dataMap[key] === "object" ? JSON.stringify(dataMap[key]) : dataMap[key]}`).join("&");
      dataMap["sign"] = cryptoMd52(`${paramsString}${str}`).substring(8, 24);
      return useAxios({
        baseURL: "https://acsing.service.kugou.com",
        url: "/sing7/listenguide/json/v2/cdn/listenguide/get_total_opus_num_v02.do",
        params: dataMap,
        method: "get",
        encryptType: "android",
        cookie: params?.cookie || {},
        clearDefaultParams: true,
        notSignature: true
      });
    };
  }
});

// module/audio_related.js
var require_audio_related = __commonJS({
  "module/audio_related.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoMd5: cryptoMd52 } = require_util2();
    var sortType = { all: 1, hot: 2, new: 3 };
    module.exports = (params, useAxios) => {
      const show_detail = Number(params.show_detail) === 0;
      let dataMap = {
        album_audio_id: Number(params.album_audio_id),
        appid: 1005,
        area_code: 1,
        clientver: 12329
      };
      if (!show_detail) {
        dataMap = {
          ...dataMap,
          page: params.page || 1,
          pagesize: params.pagesize || 30,
          show_input: 1,
          show_type: params.show_type || 0,
          sort: sortType[params.sort] || 1,
          type: params.type || 0
        };
      }
      dataMap["version"] = 1;
      const str = "OIlwieks28dk2k092lksi2UIkp";
      const paramsString = Object.keys(dataMap).sort().map((key) => `${key}=${typeof dataMap[key] === "object" ? JSON.stringify(dataMap[key]) : dataMap[key]}`).join("");
      dataMap["signature"] = cryptoMd52(`${str}${paramsString}${str}`);
      return useAxios({
        baseURL: "https://listkmrp3cdnretry.kugou.com",
        url: !show_detail ? "/v3/album_audio/related" : "/v2/audio_related/total",
        params: dataMap,
        method: "get",
        encryptType: "android",
        cookie: params?.cookie || {},
        clearDefaultParams: true
      });
    };
  }
});

// module/brush.js
var require_brush = __commonJS({
  "module/brush.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, signParamsKey } = require_util2();
    module.exports = (params, useAxios) => {
      const userid = params?.cookie?.userid || params?.userid || 0;
      const vip_type = params?.cookie?.vip_type || params?.vipType || 0;
      const dateTime = Date.now();
      const personal_recommend = {
        userid,
        appid: appid2,
        playlist_ver: 2,
        clienttime: dateTime,
        mid: "",
        new_sync_point: dateTime,
        module_id: 1,
        action: "login",
        vip_type,
        vip_flags: 3,
        recommend_source_locked: 0,
        song_pool_id: Number(params?.song_pool_id || 0),
        callerid: 0,
        m_type: 1,
        kguid: userid,
        platform: "ios",
        area_code: 1,
        fakem: "ca981cfc583a4c37f28d2d49000013c16a0a",
        clientver: 11850,
        mode: params?.mode || "normal",
        active_swtich: "on",
        key: signParamsKey(dateTime)
      };
      const dataMap = {
        behaviors: [],
        abtest: {
          abtest: { shuashua: { commentcard: 2 } }
        },
        personal_recommend_params: personal_recommend
      };
      return useAxios({
        url: "/genesisapi/v1/newepoch_song_rec/feed",
        data: dataMap,
        params: { sort_type: 1, platform: "ios", page: 1, content_ver: 4, clientver: 11850 },
        method: "post",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/captcha_sent.js
var require_captcha_sent = __commonJS({
  "module/captcha_sent.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        businessid: 5,
        mobile: `${params?.mobile}`,
        plat: 3
      };
      return useAxios({
        baseURL: "http://login.user.kugou.com",
        url: "/v7/send_mobile_code",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: {}
        // headers: { 'x-router': 'loginservice.kugou.com' },
      });
    };
  }
});

// module/comment_album.js
var require_comment_album = __commonJS({
  "module/comment_album.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        childrenid: params.id,
        need_show_image: 1,
        p: params.page || 1,
        pagesize: params.pagesize || 30,
        show_classify: params.show_classify || 1,
        show_hotword_list: params.show_hotword_list || 1,
        code: "94f1792ced1df89aa68a7939eaf2efca"
      };
      return useAxios({
        url: "/m.comment.service/v1/cmtlist",
        encryptType: "android",
        method: "POST",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/comment_count.js
var require_comment_count = __commonJS({
  "module/comment_count.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        r: "comments/getcommentsnum",
        code: "fc4be23b4e972707f36b8a828a93ba8a"
      };
      if (params && params.hash) {
        paramsMap.hash = params.hash;
      } else if (params && params.special_id) {
        paramsMap.childrenid = params.special_id;
      }
      return useAxios({
        url: "/index.php",
        encryptType: "web",
        method: "GET",
        params: paramsMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "sum.comment.service.kugou.com" }
      });
    };
  }
});

// module/comment_floor.js
var require_comment_floor = __commonJS({
  "module/comment_floor.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        childrenid: params.special_id,
        mixsongid: params.mixsongid,
        need_show_image: 1,
        p: params.page || 1,
        pagesize: params.pagesize || 30,
        show_classify: params.show_classify || 1,
        show_hotword_list: params.show_hotword_list || 1,
        code: "fc4be23b4e972707f36b8a828a93ba8a",
        tid: params.tid
      };
      return useAxios({
        url: "/mcomment/v1/hot_replylist",
        encryptType: "android",
        method: "POST",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/comment_music.js
var require_comment_music = __commonJS({
  "module/comment_music.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        mixsongid: params.mixsongid,
        need_show_image: 1,
        p: params.page || 1,
        pagesize: params.pagesize || 30,
        show_classify: params.show_classify || 1,
        show_hotword_list: params.show_hotword_list || 1,
        extdata: "0",
        code: "fc4be23b4e972707f36b8a828a93ba8a"
      };
      return useAxios({
        url: "/mcomment/v1/cmtlist",
        encryptType: "android",
        method: "POST",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/comment_music_classify.js
var require_comment_music_classify = __commonJS({
  "module/comment_music_classify.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        mixsongid: params.mixsongid,
        need_show_image: 1,
        page: params.page || 1,
        pagesize: params.pagesize || 30,
        type_id: params.type_id,
        extdata: "0",
        code: "fc4be23b4e972707f36b8a828a93ba8a",
        sort_method: Number(params.sort) === 2 ? params.sort : 1
      };
      return useAxios({
        url: "/mcomment/v1/cmt_classify_list",
        encryptType: "android",
        method: "POST",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/comment_music_hotword.js
var require_comment_music_hotword = __commonJS({
  "module/comment_music_hotword.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        mixsongid: params.mixsongid,
        need_show_image: 1,
        p: params.page || 1,
        pagesize: params.pagesize || 30,
        hot_word: params.hot_word,
        extdata: "0",
        code: "fc4be23b4e972707f36b8a828a93ba8a"
      };
      return useAxios({
        url: "/mcomment/v1/get_hot_word",
        encryptType: "android",
        method: "POST",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/comment_playlist.js
var require_comment_playlist = __commonJS({
  "module/comment_playlist.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        childrenid: params.id,
        need_show_image: 1,
        p: params.page || 1,
        pagesize: params.pagesize || 30,
        show_classify: params.show_classify || 1,
        show_hotword_list: params.show_hotword_list || 1,
        code: "ca53b96fe5a1d9c22d71c8f522ef7c4f",
        content_type: 0,
        tag: 5
      };
      return useAxios({
        url: "/m.comment.service/v1/cmtlist",
        encryptType: "android",
        method: "POST",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/everyday_friend.js
var require_everyday_friend = __commonJS({
  "module/everyday_friend.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        baseURL: "https://acsing.service.kugou.com",
        url: "/sing7/relation/json/v3/friend_rec_by_using_song_list",
        encryptType: "android",
        method: "POST",
        data: { list: [{ user_id: 853927886, mixsong_ids: [290083753, 251724346, 571554587, 250126644, 208831644, 40328518, 250504076, 581706850, 318347675, 585258401, 288481998, 407414475, 28239430, 280584633, 291957521, 64556644, 243149863, 488725103, 32114153, 39951172, 29019580, 40397606, 327507651, 32029382, 32218359, 340353127, 276448762, 177071956, 100031397, 249251602] }] },
        params: { channel: 130, isteen: 0, platform: 2, usemkv: 1 },
        cookie: params?.cookie || {},
        headers: { pid: 126556797 }
      });
    };
  }
});

// module/everyday_history.js
var require_everyday_history = __commonJS({
  "module/everyday_history.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        mode: params.mode || "list",
        platform: params.platform || "ios"
      };
      if (params.history_name)
        paramsMap["history_name"] = params.history_name;
      if (params.date)
        paramsMap["date"] = params.date;
      return useAxios({
        url: "/everyday/api/v1/get_history",
        encryptType: "android",
        method: "POST",
        params: paramsMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "everydayrec.service.kugou.com" }
      });
    };
  }
});

// module/everyday_recommend.js
var require_everyday_recommend = __commonJS({
  "module/everyday_recommend.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/everyday_song_recommend",
        encryptType: "android",
        method: "POST",
        params: { platform: params.platform || "ios" },
        cookie: params?.cookie || {},
        headers: { "x-router": "everydayrec.service.kugou.com" }
      });
    };
  }
});

// module/everyday_style_recommend.js
var require_everyday_style_recommend = __commonJS({
  "module/everyday_style_recommend.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        platform: params.platform || "ios"
      };
      return useAxios({
        url: "/everydayrec.service/everyday_style_recommend",
        encryptType: "android",
        method: "POST",
        data: {},
        params: { tagids: params.tagids ?? "" },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/favorite_count.js
var require_favorite_count = __commonJS({
  "module/favorite_count.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: `/count/v1/audio/mget_collect`,
        method: "GET",
        encryptType: "android",
        cookie: params?.cookie || {},
        params: { mixsongids: params.mixsongids }
      });
    };
  }
});

// module/fm_class.js
var require_fm_class = __commonJS({
  "module/fm_class.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, cryptoMd5: cryptoMd52, signParamsKey } = require_util2();
    module.exports = (params, useAxios) => {
      const dateTime = Date.now();
      const dfid = params?.cookie?.dfid || params?.dfid || "-";
      const userid = params?.cookie?.userid || params?.userid || 0;
      const dataMap = {
        kguid: userid,
        clienttime: dateTime,
        mid: cryptoMd52(dfid),
        platform: "android",
        clientver: clientver2,
        uid: userid,
        get_tracker: 1,
        key: signParamsKey(dateTime),
        appid: appid2
      };
      return useAxios({
        url: "/v1/class_fm_song",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "fm.service.kugou.com" }
      });
    };
  }
});

// module/fm_image.js
var require_fm_image = __commonJS({
  "module/fm_image.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, cryptoMd5: cryptoMd52, signParamsKey } = require_util2();
    module.exports = (params, useAxios) => {
      const dateTime = Date.now();
      const dfid = params?.cookie?.dfid || params?.dfid || "-";
      const userid = params?.cookie?.userid || params?.userid;
      const token = params?.cookie?.token || params?.token;
      const fmData = (params?.fmid || "").split(",").map((s) => ({ fields: "imgUrl100,imgUrl50", fmid: s, fmtype: 2 }));
      const dataMap = {
        appid: appid2,
        clienttime: dateTime,
        clientver: clientver2,
        data: fmData,
        dfid,
        key: signParamsKey(dateTime),
        mid: cryptoMd52(dfid)
      };
      if (userid)
        dataMap["userid"] = userid;
      if (token)
        dataMap["token"] = token;
      return useAxios({
        url: "/v1/fm_info",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "fm.service.kugou.com", "Content-Type": "application/json" }
      });
    };
  }
});

// module/fm_recommend.js
var require_fm_recommend = __commonJS({
  "module/fm_recommend.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, cryptoMd5: cryptoMd52, signParamsKey } = require_util2();
    module.exports = (params, useAxios) => {
      const dateTime = Date.now();
      const dfid = params?.cookie?.dfid || params?.dfid || "-";
      const dataMap = {
        appid: appid2,
        clientver: clientver2,
        clienttime: dateTime,
        mid: cryptoMd52(dfid),
        key: signParamsKey(dateTime),
        rcmdsongcount: 1,
        level: 0,
        area_code: 1,
        get_tracker: 1,
        uid: 0
      };
      return useAxios({
        url: "/v1/rcmd_list",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "fm.service.kugou.com" }
      });
    };
  }
});

// module/fm_songs.js
var require_fm_songs = __commonJS({
  "module/fm_songs.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, cryptoMd5: cryptoMd52, signParamsKey } = require_util2();
    module.exports = (params, useAxios) => {
      const dateTime = Date.now();
      const dfid = params?.cookie?.dfid || params?.dfid || "-";
      const userid = params?.cookie?.userid || params?.userid;
      const fmData = (params?.fmid || "").split(",").map((s) => ({
        fmid: s,
        fmtype: params?.type || 2,
        offset: params?.offset || -1,
        size: params?.size || 20,
        singername: s.singername || ""
      }));
      (params?.fmtype || "").split(",").forEach((s, l) => fmData[l].fmtype = s || fmData[l].fmtype);
      (params?.fmoffset || "").split(",").forEach((s, l) => fmData[l].offset = s || fmData[l].offset);
      (params?.fmsize || "").split(",").forEach((s, l) => fmData[l].size = s || fmData[l].size);
      const dataMap = {
        appid: appid2,
        area_code: 1,
        clienttime: dateTime,
        clientver: clientver2,
        data: fmData,
        get_tracker: 1,
        key: signParamsKey(dateTime),
        mid: cryptoMd52(dfid),
        uid: userid
      };
      return useAxios({
        url: "/v1/app_song_list_offset",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "fm.service.kugou.com", "Content-Type": "application/json" }
      });
    };
  }
});

// module/images.js
var require_images = __commonJS({
  "module/images.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { signatureAndroidParams: signatureAndroidParams2, appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const data = (params?.hash || "").split(",").map((s) => ({ album_id: 0, hash: s, album_audio_id: 0 }));
      (params?.album_id || "").split(",").forEach((s, index) => {
        if (index <= data.length - 1) {
          data[index]["album_id"] = s || 0;
        }
      });
      (params?.album_audio_id || "").split(",").forEach((s, index) => {
        if (index <= data.length - 1) {
          data[index]["album_audio_id"] = s || 0;
        }
      });
      const paramsMap = {
        album_image_type: "-3",
        appid: appid2,
        clientver: clientver2,
        author_image_type: "3,4,5",
        count: params?.count || 5,
        data,
        isCdn: 1,
        publish_time: 1
      };
      const query = Object.keys(paramsMap).sort().map((s) => `${s}=${encodeURIComponent(typeof paramsMap[s] === "object" ? JSON.stringify(paramsMap[s]) : paramsMap[s])}`);
      const signature = signatureAndroidParams2(paramsMap);
      return useAxios({
        baseURL: "https://expendablekmr.kugou.com",
        url: `/container/v2/image?${query.join("&")}`,
        method: "GET",
        encryptType: "android",
        params: { signature },
        cookie: params?.cookie || {},
        notSign: true,
        clearDefaultParams: true
      });
    };
  }
});

// module/images_audio.js
var require_images_audio = __commonJS({
  "module/images_audio.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { signatureAndroidParams: signatureAndroidParams2, appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const data = (params?.hash || "").split(",").map((s) => ({ audio_id: 0, hash: s, album_audio_id: 0, filename: "" }));
      (params?.audio_id || "").split(",").forEach((s, index) => {
        if (index <= data.length - 1) {
          data[index]["audio_id"] = s || 0;
        }
      });
      (params?.album_audio_id || "").split(",").forEach((s, index) => {
        if (index <= data.length - 1) {
          data[index]["album_audio_id"] = s || 0;
        }
      });
      (params?.filename || "").split(",").forEach((s, index) => {
        if (index <= data.length - 1) {
          data[index]["filename"] = s;
        }
      });
      const paramsMap = {
        appid: appid2,
        clientver: clientver2,
        count: params?.count || 5,
        data,
        isCdn: 1,
        publish_time: 1,
        show_authors: 1
      };
      const query = Object.keys(paramsMap).sort().map((s) => `${s}=${encodeURIComponent(typeof paramsMap[s] === "object" ? JSON.stringify(paramsMap[s]) : paramsMap[s])}`);
      const signature = signatureAndroidParams2(paramsMap);
      return useAxios({
        baseURL: "https://expendablekmr.kugou.com",
        url: `/v2/author_image/audio?${query.join("&")}`,
        method: "GET",
        encryptType: "android",
        params: { signature },
        cookie: params?.cookie || {},
        notSign: true,
        clearDefaultParams: true
      });
    };
  }
});

// module/ip.js
var require_ip = __commonJS({
  "module/ip.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        is_publish: 1,
        ip_id: params?.id,
        sort: 3,
        page: params?.page || 1,
        pagesize: params?.pagesize || 30,
        query: 1
      };
      const type = ["audios", "albums", "videos", "author_list"].includes(params?.type) ? params.type : "audios";
      return useAxios({
        url: `/openapi/v1/ip/${type}`,
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/ip_dateil.js
var require_ip_dateil = __commonJS({
  "module/ip_dateil.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const data = (params?.id || "").split(",").map((s) => ({ ip_id: s }));
      const dataMap = {
        data,
        is_publish: 1
      };
      return useAxios({
        url: "/openapi/v1/ip",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/ip_playlist.js
var require_ip_playlist = __commonJS({
  "module/ip_playlist.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        ip: params?.id,
        page: params?.page || 1,
        pagesize: params?.pagesize || 30
      };
      return useAxios({
        url: "/ocean/v6/pubsongs/list_info_for_ip",
        encryptType: "android",
        method: "POST",
        params: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/ip_zone.js
var require_ip_zone = __commonJS({
  "module/ip_zone.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return new Promise((resolve, reject) => {
        useAxios({
          url: `/v1/zone/index`,
          encryptType: "android",
          method: "GET",
          cookie: params?.cookie || {},
          headers: { "x-router": "yuekucategory.kugou.com" }
        }).then((resp) => {
          if (resp.body.status == 1) {
            if (resp.body.data?.list) {
              const list = Array.isArray(resp.body.data.list) ? resp.body.data?.list : [];
              for (let index = 0; index < list.length; index += 1) {
                if (list[index].special_link) {
                  const urls = new URLSearchParams(list[index].special_link);
                  if (urls.has("path")) {
                    const pathUrls = new URLSearchParams(urls.get("path") || "");
                    list[index]["ip_id"] = Number(pathUrls.get("ip_id") || "");
                  }
                }
              }
              resp.body.data.list = list;
            }
          }
          resolve(resp);
        }).catch((e) => reject(e));
      });
    };
  }
});

// module/ip_zone_home.js
var require_ip_zone_home = __commonJS({
  "module/ip_zone_home.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        id: params?.id,
        share: 0
      };
      return useAxios({
        url: "/v1/zone/home",
        encryptType: "android",
        method: "GET",
        params: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "yuekucategory.kugou.com" }
      });
    };
  }
});

// module/kmr_audio_mv.js
var require_kmr_audio_mv = __commonJS({
  "module/kmr_audio_mv.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const resource = (params?.album_audio_id || "").split(",").map((s) => ({ album_audio_id: s }));
      const paramsMap = {
        data: resource,
        fields: params.fields || ""
      };
      return useAxios({
        url: "/kmr/v1/audio/mv",
        method: "POST",
        data: paramsMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "openapi.kugou.com", "KG-TID": 38 }
      });
    };
  }
});

// module/krm_audio.js
var require_krm_audio = __commonJS({
  "module/krm_audio.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const resource = (params?.album_audio_id || "").split(",").map((s) => ({ entity_id: Number(s) }));
      const paramsMap = {
        data: resource,
        fields: params.fields || "base"
      };
      return useAxios({
        url: "/kmr/v2/audio",
        method: "POST",
        data: paramsMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "openapi.kugou.com", "KG-TID": 238 }
      });
    };
  }
});

// module/lastest_songs_listen.js
var require_lastest_songs_listen = __commonJS({
  "module/lastest_songs_listen.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const token = params?.token || params.cookie?.token || "";
      const userid = Number(params?.userid || params?.cookie?.userid || 0);
      const paramsMap = {
        area_code: "1",
        sources: ["pc", "mobile", "tv", "car"],
        userid,
        ret_info: 1,
        token,
        pagesize: Number(params.pagesize || 30)
      };
      return useAxios({
        url: "/playque/devque/v1/get_latest_songs",
        encryptType: "android",
        method: "POST",
        data: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/login.js
var require_login = __commonJS({
  "module/login.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoAesDecrypt: cryptoAesDecrypt2, cryptoAesEncrypt: cryptoAesEncrypt2, cryptoRSAEncrypt: cryptoRSAEncrypt2 } = require_util2();
    module.exports = (params, useAxios) => {
      const dateNow = Date.now();
      const encrypt = cryptoAesEncrypt2({ pwd: params?.password || "", code: "", clienttime_ms: dateNow });
      const dataMap = {
        plat: 1,
        support_multi: 1,
        clienttime_ms: dateNow,
        t1: 0,
        t2: 0,
        t3: "MCwwLDAsMCwwLDAsMCwwLDA=",
        username: params?.username,
        params: encrypt.str,
        pk: cryptoRSAEncrypt2({ "clienttime_ms": dateNow, key: encrypt.key }).toUpperCase()
      };
      return new Promise((resolve, reject) => {
        useAxios({
          url: "/v9/login_by_pwd",
          method: "POST",
          data: dataMap,
          encryptType: "android",
          cookie: params?.cookie || {},
          headers: { "x-router": "login.user.kugou.com" }
        }).then((res) => {
          const { body } = res;
          if (body?.status && body?.status === 1) {
            if (body?.data?.secu_params) {
              const getToken = cryptoAesDecrypt2(body.data.secu_params, encrypt.key);
              if (typeof getToken === "object") {
                res.body.data = { ...body.data, ...getToken };
                Object.keys(getToken).forEach((key) => res.cookie.push(`${key}=${getToken[key]}`));
              } else {
                res.body.data["token"] = getToken;
                res.cookie.push(`token=${getToken}`);
              }
              res.cookie.push(`userid=${res.body.data?.userid || 0}`);
              res.cookie.push(`vip_type=${res.body.data?.vip_type || 0}`);
              res.cookie.push(`vip_token=${res.body.data?.vip_token || ""}`);
              resolve(res);
              return;
            }
          }
          resolve(res);
        }).catch((e) => reject(e));
      });
    };
  }
});

// module/login_cellphone.js
var require_login_cellphone = __commonJS({
  "module/login_cellphone.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoAesDecrypt: cryptoAesDecrypt2, cryptoAesEncrypt: cryptoAesEncrypt2, cryptoRSAEncrypt: cryptoRSAEncrypt2, signParamsKey, isLite } = require_util2();
    module.exports = (params, useAxios) => {
      const dateTime = Date.now();
      const encrypt = cryptoAesEncrypt2({ mobile: params?.mobile || "", code: params?.code || "" });
      let dataMap = {
        plat: 1,
        support_multi: 1,
        t1: 0,
        t2: 0,
        clienttime_ms: dateTime,
        mobile: params.mobile,
        key: signParamsKey(dateTime)
      };
      if (params?.userid)
        dataMap["userid"] = params.userid;
      if (isLite) {
        dataMap["p2"] = cryptoRSAEncrypt2({ "clienttime_ms": dateTime, code: params.code, mobile: params.mobile }).toUpperCase();
      } else {
        const mobile = params?.mobile && `${params.mobile.toString().substring(0, 2)}*****${params.mobile.toString().substring(10, 11)}`;
        dataMap["mobile"] = mobile;
        dataMap["t3"] = "MCwwLDAsMCwwLDAsMCwwLDA=";
        dataMap["params"] = encrypt.str;
        dataMap["pk"] = cryptoRSAEncrypt2({ "clienttime_ms": dateTime, key: encrypt.key }).toUpperCase();
      }
      return new Promise((resolve, reject) => {
        useAxios({
          url: `/${isLite ? "v6" : "v7"}/login_by_verifycode`,
          method: "POST",
          data: dataMap,
          encryptType: "android",
          cookie: params?.cookie || {},
          headers: { "x-router": "login.user.kugou.com" }
        }).then((res) => {
          const { body } = res;
          if (body?.status && body?.status === 1) {
            if (body?.data?.secu_params) {
              const getToken = cryptoAesDecrypt2(body.data.secu_params, encrypt.key);
              if (typeof getToken === "object") {
                res.body.data = { ...body.data, ...getToken };
                Object.keys(getToken).forEach((key) => res.cookie.push(`${key}=${getToken[key]}`));
              } else {
                res.body.data["token"] = getToken;
              }
            }
            res.cookie.push(`token=${res.body.data["token"]}`);
            res.cookie.push(`userid=${res.body.data?.userid || 0}`);
            res.cookie.push(`vip_type=${res.body.data?.vip_type || 0}`);
            res.cookie.push(`vip_token=${res.body.data?.vip_token || ""}`);
          }
          resolve(res);
        }).catch((e) => reject(e));
      });
    };
  }
});

// module/login_openplat.js
var require_login_openplat = __commonJS({
  "module/login_openplat.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var axios = require_axios();
    var {
      wx_appid,
      wx_secret,
      cryptoAesDecrypt: cryptoAesDecrypt2,
      cryptoAesEncrypt: cryptoAesEncrypt2,
      cryptoRSAEncrypt: cryptoRSAEncrypt2,
      wx_lite_appid,
      wx_lite_secret,
      isLite
    } = require_util2();
    var appid2 = isLite ? wx_lite_appid : wx_appid;
    var secret = isLite ? wx_lite_secret : wx_secret;
    var assetsToken = /* @__PURE__ */ __name((code) => {
      return axios({
        url: "https://api.weixin.qq.com/sns/oauth2/access_token",
        method: "POST",
        params: { secret, appid: appid2, code, grant_type: "authorization_code" }
      });
    }, "assetsToken");
    module.exports = (params, useAxios) => {
      const answer = { status: 500, body: {}, cookie: [] };
      return new Promise(async (resolve, reject) => {
        try {
          const assetsTokenResp = await assetsToken(params?.code || "");
          if (assetsTokenResp.data?.access_token && assetsTokenResp.data?.openid) {
            const dateNow = Date.now();
            const encrypt = cryptoAesEncrypt2({ access_token: assetsTokenResp.data.access_token });
            const pk = cryptoRSAEncrypt2({ "clienttime_ms": dateNow, key: encrypt.key }).toUpperCase();
            const dataMap = {
              force_login: 1,
              partnerid: 36,
              clienttime_ms: dateNow,
              t1: 0,
              t2: 0,
              t3: "MCwwLDAsMCwwLDAsMCwwLDA=",
              openid: assetsTokenResp.data.openid,
              params: encrypt.str,
              pk
            };
            const response = await useAxios({
              url: `/v6/login_by_openplat`,
              method: "POST",
              data: dataMap,
              cookie: params?.cookie,
              encryptType: "android",
              headers: { "x-router": "login.user.kugou.com" }
            });
            if (response.body?.status === 1) {
              const getToken = cryptoAesDecrypt2(response.body.data?.secu_params, encrypt.key);
              if (typeof getToken === "object") {
                response.body.data = { ...response.body.data, ...getToken };
                Object.keys(getToken).forEach((key) => response.cookie.push(`${key}=${getToken[key]}`));
              } else {
                response.body.data["token"] = getToken;
                response.cookie.push(`token=${getToken}`);
              }
              response.cookie.push(`userid=${response.body.data?.userid || 0}`);
              response.cookie.push(`vip_type=${response.body.data?.vip_type || 0}`);
              response.cookie.push(`vip_token=${response.body.data?.vip_token || ""}`);
            }
            resolve(response);
          } else {
            answer.status = 502;
            answer.body = { status: 0, msg: assetsTokenResp.data };
            reject(answer);
          }
        } catch (error3) {
          answer.status = 502;
          answer.body = { status: 0, msg: error3 };
          reject(answer);
        }
      });
    };
  }
});

// module/login_qr_check.js
var require_login_qr_check = __commonJS({
  "module/login_qr_check.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { srcappid, appid: appid2 } = require_util2();
    module.exports = (params, useAxios) => {
      return new Promise((resolve, reject) => {
        useAxios({
          baseURL: "https://login-user.kugou.com",
          url: "/v2/get_userinfo_qrcode",
          method: "GET",
          params: { plat: 4, appid: appid2, srcappid, qrcode: params?.key },
          encryptType: "web",
          cookie: params?.cookie || {}
        }).then((resp) => {
          if (resp.body?.data?.status == 4) {
            resp.cookie.push(`token=${resp.body?.data?.token}`);
            resp.cookie.push(`userid=${resp.body?.data?.userid}`);
          }
          resolve(resp);
        }).catch((e) => reject(e));
      });
    };
  }
});

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = /* @__PURE__ */ __name(function getSymbolSize(version2) {
      if (!version2)
        throw new Error('"version" cannot be null or undefined');
      if (version2 < 1 || version2 > 40)
        throw new Error('"version" should be in range from 1 to 40');
      return version2 * 4 + 17;
    }, "getSymbolSize");
    exports.getSymbolTotalCodewords = /* @__PURE__ */ __name(function getSymbolTotalCodewords(version2) {
      return CODEWORDS_COUNT[version2];
    }, "getSymbolTotalCodewords");
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = /* @__PURE__ */ __name(function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    }, "setToSJISFunction");
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = /* @__PURE__ */ __name(function toSJIS(kanji) {
      return toSJISFunction(kanji);
    }, "toSJIS");
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    __name(fromString, "fromString");
    exports.isValid = /* @__PURE__ */ __name(function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    }, "isValid");
    exports.from = /* @__PURE__ */ __name(function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    }, "from");
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    __name(BitBuffer, "BitBuffer");
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    __name(BitMatrix, "BitMatrix");
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved)
        this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = /* @__PURE__ */ __name(function getRowColCoords(version2) {
      if (version2 === 1)
        return [];
      const posCount = Math.floor(version2 / 7) + 2;
      const size = getSymbolSize(version2);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    }, "getRowColCoords");
    exports.getPositions = /* @__PURE__ */ __name(function getPositions(version2) {
      const coords = [];
      const pos = exports.getRowColCoords(version2);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    }, "getPositions");
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = /* @__PURE__ */ __name(function getPositions(version2) {
      const size = getSymbolSize(version2);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    }, "getPositions");
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = /* @__PURE__ */ __name(function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    }, "isValid");
    exports.from = /* @__PURE__ */ __name(function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    }, "from");
    exports.getPenaltyN1 = /* @__PURE__ */ __name(function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5)
              points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5)
              points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5)
          points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5)
          points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    }, "getPenaltyN1");
    exports.getPenaltyN2 = /* @__PURE__ */ __name(function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0)
            points++;
        }
      }
      return points * PenaltyScores.N2;
    }, "getPenaltyN2");
    exports.getPenaltyN3 = /* @__PURE__ */ __name(function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
            points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
            points++;
        }
      }
      return points * PenaltyScores.N3;
    }, "getPenaltyN3");
    exports.getPenaltyN4 = /* @__PURE__ */ __name(function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++)
        darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    }, "getPenaltyN4");
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    __name(getMaskAt, "getMaskAt");
    exports.applyMask = /* @__PURE__ */ __name(function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col))
            continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    }, "applyMask");
    exports.getBestMask = /* @__PURE__ */ __name(function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    }, "getBestMask");
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = /* @__PURE__ */ __name(function getBlocksCount(version2, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
        default:
          return void 0;
      }
    }, "getBlocksCount");
    exports.getTotalCodewordsCount = /* @__PURE__ */ __name(function getTotalCodewordsCount(version2, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
        default:
          return void 0;
      }
    }, "getTotalCodewordsCount");
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (/* @__PURE__ */ __name(function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    }, "initTables"))();
    exports.log = /* @__PURE__ */ __name(function log3(n) {
      if (n < 1)
        throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    }, "log");
    exports.exp = /* @__PURE__ */ __name(function exp(n) {
      return EXP_TABLE[n];
    }, "exp");
    exports.mul = /* @__PURE__ */ __name(function mul(x, y) {
      if (x === 0 || y === 0)
        return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    }, "mul");
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var GF = require_galois_field();
    exports.mul = /* @__PURE__ */ __name(function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    }, "mul");
    exports.mod = /* @__PURE__ */ __name(function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0)
          offset++;
        result = result.slice(offset);
      }
      return result;
    }, "mod");
    exports.generateECPolynomial = /* @__PURE__ */ __name(function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    }, "generateECPolynomial");
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree)
        this.initialize(this.degree);
    }
    __name(ReedSolomonEncoder, "ReedSolomonEncoder");
    ReedSolomonEncoder.prototype.initialize = /* @__PURE__ */ __name(function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    }, "initialize");
    ReedSolomonEncoder.prototype.encode = /* @__PURE__ */ __name(function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    }, "encode");
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    exports.isValid = /* @__PURE__ */ __name(function isValid(version2) {
      return !isNaN(version2) && version2 >= 1 && version2 <= 40;
    }, "isValid");
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = /* @__PURE__ */ __name(function testKanji(str) {
      return TEST_KANJI.test(str);
    }, "testKanji");
    exports.testNumeric = /* @__PURE__ */ __name(function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    }, "testNumeric");
    exports.testAlphanumeric = /* @__PURE__ */ __name(function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    }, "testAlphanumeric");
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = /* @__PURE__ */ __name(function getCharCountIndicator(mode, version2) {
      if (!mode.ccBits)
        throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid version: " + version2);
      }
      if (version2 >= 1 && version2 < 10)
        return mode.ccBits[0];
      else if (version2 < 27)
        return mode.ccBits[1];
      return mode.ccBits[2];
    }, "getCharCountIndicator");
    exports.getBestModeForData = /* @__PURE__ */ __name(function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr))
        return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr))
        return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr))
        return exports.KANJI;
      else
        return exports.BYTE;
    }, "getBestModeForData");
    exports.toString = /* @__PURE__ */ __name(function toString(mode) {
      if (mode && mode.id)
        return mode.id;
      throw new Error("Invalid mode");
    }, "toString");
    exports.isValid = /* @__PURE__ */ __name(function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    }, "isValid");
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    __name(fromString, "fromString");
    exports.from = /* @__PURE__ */ __name(function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    }, "from");
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    __name(getBestVersionForDataLength, "getBestVersionForDataLength");
    function getReservedBitsCount(mode, version2) {
      return Mode.getCharCountIndicator(mode, version2) + 4;
    }
    __name(getReservedBitsCount, "getReservedBitsCount");
    function getTotalBitsFromDataArray(segments, version2) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version2);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    __name(getTotalBitsFromDataArray, "getTotalBitsFromDataArray");
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    __name(getBestVersionForMixedData, "getBestVersionForMixedData");
    exports.from = /* @__PURE__ */ __name(function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    }, "from");
    exports.getCapacity = /* @__PURE__ */ __name(function getCapacity(version2, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version2)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined")
        mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version2);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED)
        return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version2);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    }, "getCapacity");
    exports.getBestVersionForData = /* @__PURE__ */ __name(function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    }, "getBestVersionForData");
    exports.getEncodedBits = /* @__PURE__ */ __name(function getEncodedBits(version2) {
      if (!VersionCheck.isValid(version2) || version2 < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version2 << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version2 << 12 | d;
    }, "getEncodedBits");
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = /* @__PURE__ */ __name(function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    }, "getEncodedBits");
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    __name(NumericData, "NumericData");
    NumericData.getBitsLength = /* @__PURE__ */ __name(function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    }, "getBitsLength");
    NumericData.prototype.getLength = /* @__PURE__ */ __name(function getLength() {
      return this.data.length;
    }, "getLength");
    NumericData.prototype.getBitsLength = /* @__PURE__ */ __name(function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    }, "getBitsLength");
    NumericData.prototype.write = /* @__PURE__ */ __name(function write(bitBuffer) {
      let i, group3, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group3 = this.data.substr(i, 3);
        value = parseInt(group3, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group3 = this.data.substr(i);
        value = parseInt(group3, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    }, "write");
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    __name(AlphanumericData, "AlphanumericData");
    AlphanumericData.getBitsLength = /* @__PURE__ */ __name(function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    }, "getBitsLength");
    AlphanumericData.prototype.getLength = /* @__PURE__ */ __name(function getLength() {
      return this.data.length;
    }, "getLength");
    AlphanumericData.prototype.getBitsLength = /* @__PURE__ */ __name(function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    }, "getBitsLength");
    AlphanumericData.prototype.write = /* @__PURE__ */ __name(function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    }, "write");
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    __name(ByteData, "ByteData");
    ByteData.getBitsLength = /* @__PURE__ */ __name(function getBitsLength(length) {
      return length * 8;
    }, "getBitsLength");
    ByteData.prototype.getLength = /* @__PURE__ */ __name(function getLength() {
      return this.data.length;
    }, "getLength");
    ByteData.prototype.getBitsLength = /* @__PURE__ */ __name(function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    }, "getBitsLength");
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    __name(KanjiData, "KanjiData");
    KanjiData.getBitsLength = /* @__PURE__ */ __name(function getBitsLength(length) {
      return length * 13;
    }, "getBitsLength");
    KanjiData.prototype.getLength = /* @__PURE__ */ __name(function getLength() {
      return this.data.length;
    }, "getLength");
    KanjiData.prototype.getBitsLength = /* @__PURE__ */ __name(function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    }, "getBitsLength");
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while (u) {
          nodes.push(u);
          predecessor = predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t[key] = T[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T.default_sorter;
          return t;
        },
        default_sorter: function(a, b) {
          return a.cost - b.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    __name(getStringByteLength, "getStringByteLength");
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    __name(getSegments, "getSegments");
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    __name(getSegmentsFromString, "getSegmentsFromString");
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    __name(getSegmentBitsLength, "getSegmentBitsLength");
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    __name(mergeSegments, "mergeSegments");
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    __name(buildNodes, "buildNodes");
    function buildGraph(nodes, version2) {
      const table3 = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table3[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table3[prevNodeId] && table3[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table3[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table3[prevNodeId].lastCount, node.mode);
              table3[prevNodeId].lastCount += node.length;
            } else {
              if (table3[prevNodeId])
                table3[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version2);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return { map: graph, table: table3 };
    }
    __name(buildGraph, "buildGraph");
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    __name(buildSingleSegment, "buildSingleSegment");
    exports.fromArray = /* @__PURE__ */ __name(function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    }, "fromArray");
    exports.fromString = /* @__PURE__ */ __name(function fromString(data, version2) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version2);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    }, "fromString");
    exports.rawSplit = /* @__PURE__ */ __name(function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    }, "rawSplit");
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version2) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version2);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r)
            continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c)
              continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    __name(setupFinderPattern, "setupFinderPattern");
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    __name(setupTimingPattern, "setupTimingPattern");
    function setupAlignmentPattern(matrix, version2) {
      const pos = AlignmentPattern.getPositions(version2);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    __name(setupAlignmentPattern, "setupAlignmentPattern");
    function setupVersionInfo(matrix, version2) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version2);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    __name(setupVersionInfo, "setupVersionInfo");
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    __name(setupFormatInfo, "setupFormatInfo");
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6)
          col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    __name(setupData, "setupData");
    function createData(version2, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version2));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version2);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version2, errorCorrectionLevel);
    }
    __name(createData, "createData");
    function createCodewords(bitBuffer, version2, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version2);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    __name(createCodewords, "createCodewords");
    function createSymbol(data, version2, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version2;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version2) {
        version2 = bestVersion;
      } else if (version2 < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version2, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version2);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version2);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version2);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version2 >= 7) {
        setupVersionInfo(modules, version2);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version: version2,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    __name(createSymbol, "createSymbol");
    exports.create = /* @__PURE__ */ __name(function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version2;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version2 = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version2, errorCorrectionLevel, mask);
    }, "create");
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6)
        hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    __name(hex2rgba, "hex2rgba");
    exports.getOptions = /* @__PURE__ */ __name(function getOptions(options) {
      if (!options)
        options = {};
      if (!options.color)
        options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    }, "getOptions");
    exports.getScale = /* @__PURE__ */ __name(function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    }, "getScale");
    exports.getImageWidth = /* @__PURE__ */ __name(function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    }, "getImageWidth");
    exports.qrToImageData = /* @__PURE__ */ __name(function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    }, "qrToImageData");
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style)
        canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    __name(clearCanvas, "clearCanvas");
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    __name(getCanvasElement, "getCanvasElement");
    exports.render = /* @__PURE__ */ __name(function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    }, "render");
    exports.renderToDataURL = /* @__PURE__ */ __name(function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts)
        opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    }, "renderToDataURL");
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    __name(getColorAttrib, "getColorAttrib");
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined")
        str += " " + y;
      return str;
    }
    __name(svgCmd, "svgCmd");
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow)
          newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    __name(qrToPath, "qrToPath");
    exports.render = /* @__PURE__ */ __name(function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    }, "render");
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var canPromise = require_can_promise();
    var QRCode = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    __name(renderCanvas, "renderCanvas");
    exports.create = QRCode.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// module/login_qr_create.js
var require_login_qr_create = __commonJS({
  "module/login_qr_create.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var qrcode = require_browser();
    module.exports = (params, useAxios) => {
      return new Promise(async (resolve) => {
        const url = `https://h5.kugou.com/apps/loginQRCode/html/index.html?qrcode=${params.key}`;
        return resolve({
          code: 200,
          status: 200,
          body: {
            code: 200,
            data: {
              url,
              base64: params?.qrimg ? await qrcode.toDataURL(url) : ""
            }
          }
        });
      });
    };
  }
});

// module/login_qr_key.js
var require_login_qr_key = __commonJS({
  "module/login_qr_key.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { srcappid, appid: appid2 } = require_util2();
    module.exports = (params, useAxios) => {
      return useAxios({
        baseURL: "https://login-user.kugou.com",
        url: "/v2/qrcode",
        method: "GET",
        params: {
          appid: params?.type === "web" ? 1014 : 1001,
          type: 1,
          plat: 4,
          qrcode_txt: `https://h5.kugou.com/apps/loginQRCode/html/index.html?appid=${appid2}&`,
          srcappid
        },
        encryptType: "web",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/login_token.js
var require_login_token = __commonJS({
  "module/login_token.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoAesDecrypt: cryptoAesDecrypt2, cryptoAesEncrypt: cryptoAesEncrypt2, cryptoRSAEncrypt: cryptoRSAEncrypt2, isLite } = require_util2();
    var key = "90b8382a1bb4ccdcf063102053fd75b8";
    var iv = "f063102053fd75b8";
    var liteKey = "c24f74ca2820225badc01946dba4fdf7";
    var liteIv = "adc01946dba4fdf7";
    module.exports = (params, useAxios) => {
      const dateNow = Date.now();
      const token = params?.token || params?.cookie?.token || "";
      const userid = params?.userid || params?.cookie?.userid || "0";
      const encrypt = cryptoAesEncrypt2({ clienttime: Math.floor(dateNow / 1e3), token }, { key: isLite ? liteKey : key, iv: isLite ? liteIv : iv });
      const encryptParams = cryptoAesEncrypt2({});
      const pk = cryptoRSAEncrypt2({ clienttime_ms: dateNow, key: encryptParams.key });
      const dataMap = {
        dfid: params?.cookie?.dfid || "-",
        p3: encrypt,
        plat: 1,
        t1: 0,
        t2: 0,
        t3: "MCwwLDAsMCwwLDAsMCwwLDA=",
        pk,
        params: encryptParams.str,
        userid,
        clienttime_ms: dateNow
      };
      return new Promise((resolve, reject) => {
        useAxios({
          baseURL: "http://login.user.kugou.com",
          url: `/${isLite ? "v4" : "v5"}/login_by_token`,
          method: "POST",
          data: dataMap,
          cookie: params?.cookie,
          encryptType: "android",
          headers: { "x-router": "login.user.kugou.com" }
        }).then((res) => {
          const { body } = res;
          if (body?.status && body?.status === 1) {
            if (body?.data?.secu_params) {
              const getToken = cryptoAesDecrypt2(body.data.secu_params, encryptParams.key);
              if (typeof getToken === "object") {
                res.body.data = { ...body.data, ...getToken };
                Object.keys(getToken).forEach((key2) => res.cookie.push(`${key2}=${getToken[key2]}`));
              } else {
                res.body.data["token"] = getToken;
              }
            }
            res.cookie.push(`token=${res.body.data["token"]}`);
            res.cookie.push(`userid=${res.body.data?.userid || 0}`);
            res.cookie.push(`vip_type=${res.body.data?.vip_type || 0}`);
            res.cookie.push(`vip_token=${res.body.data?.vip_token || ""}`);
          }
          resolve(res);
        }).catch((e) => reject(e));
      });
    };
  }
});

// module/login_wx_check.js
var require_login_wx_check = __commonJS({
  "module/login_wx_check.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var axios = require_axios();
    module.exports = (params, useAxios) => {
      const answer = { status: 500, body: {}, cookie: [] };
      return new Promise(async (resolve, reject) => {
        try {
          const resp = await axios({ url: `https://long.open.weixin.qq.com/connect/l/qrconnect?f=json&uuid=${params?.uuid || ""}` });
          answer.status = 200;
          answer.body = resp.data;
          resolve(answer);
        } catch (err) {
          answer.status = 502;
          answer.body = { status: 0, msg: err };
          reject(answer);
        }
      });
    };
  }
});

// module/login_wx_create.js
var require_login_wx_create = __commonJS({
  "module/login_wx_create.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var axios = require_axios();
    var { wx_appid, wx_secret, cryptoMd5: cryptoMd52, cryptoSha1, randomString, wx_lite_appid, wx_lite_secret, isLite } = require_util2();
    var appid2 = isLite ? wx_lite_appid : wx_appid;
    var secret = isLite ? wx_lite_secret : wx_secret;
    var accessToken = /* @__PURE__ */ __name(() => {
      return axios({ url: "https://api.weixin.qq.com/cgi-bin/token", params: { appid: appid2, secret, grant_type: "client_credential" } });
    }, "accessToken");
    var ticket = /* @__PURE__ */ __name((accessToken2) => axios({ url: "https://api.weixin.qq.com/cgi-bin/ticket/getticket", params: { access_token: accessToken2, type: 2 } }), "ticket");
    module.exports = (params, useAxios) => {
      const answer = { status: 500, body: {}, cookie: [] };
      return new Promise(async (resolve, reject) => {
        try {
          const accessTokenResp = await accessToken();
          if (accessTokenResp.data?.access_token) {
            const ticketResp = await ticket(accessTokenResp.data.access_token);
            if (ticketResp.data?.errcode === 0) {
              const ticket2 = ticketResp.data.ticket;
              const timestamp = Date.now();
              const noncestr = cryptoMd52(randomString());
              const signaturePrams = `appid=${appid2}&noncestr=${noncestr}&sdk_ticket=${ticket2}&timestamp=${timestamp}`;
              const signature = cryptoSha1(signaturePrams);
              const params2 = { appid: appid2, noncestr, timestamp, scope: "snsapi_userinfo", signature };
              const connect = await axios({ url: "https://open.weixin.qq.com/connect/sdk/qrconnect", params: params2 });
              if (connect.data?.errcode === 0) {
                answer.status = 200;
                connect.data.qrcode["qrcodeurl"] = `https://open.weixin.qq.com/connect/confirm?uuid=${connect.data.uuid}`;
                answer.body = connect.data;
                resolve(answer);
              } else {
                answer.status = 502;
                answer.body = { status: 0, msg: connect.data };
                reject(answer);
              }
            } else {
              answer.status = 502;
              answer.body = { status: 0, msg: ticketResp.data };
              reject(answer);
            }
          } else {
            answer.status = 502;
            answer.body = { status: 0, msg: accessTokenResp.data };
            reject(answer);
          }
        } catch (e) {
          answer.status = 502;
          answer.body = { status: 0, msg: e };
          reject(answer);
        }
      });
    };
  }
});

// module/longaudio_album_audios.js
var require_longaudio_album_audios = __commonJS({
  "module/longaudio_album_audios.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: `/longaudio/v2/album_audios`,
        method: "post",
        encryptType: "android",
        data: {
          album_id: params.album_id,
          area_code: 1,
          tagid: 0,
          page: params.page || 1,
          pagesize: params.pagesize || 30
        },
        cookie: params?.cookie || {},
        headers: { "x-router": "openapi.kugou.com", "KG-TID": "78" }
      });
    };
  }
});

// module/longaudio_album_detail.js
var require_longaudio_album_detail = __commonJS({
  "module/longaudio_album_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const data = (params.album_id || "").split(",").map((s) => ({ album_id: s }));
      return useAxios({
        url: `/openapi/v2/broadcast`,
        method: "post",
        encryptType: "android",
        data: {
          data,
          show_album_tag: 1,
          fields: "album_name,album_id,category,authors,sizable_cover,intro,author_name,trans_param,album_tag,mix_intro,full_intro,is_publish"
        },
        cookie: params?.cookie || {},
        headers: { "KG-TID": "78" }
      });
    };
  }
});

// module/longaudio_daily_recommend.js
var require_longaudio_daily_recommend = __commonJS({
  "module/longaudio_daily_recommend.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: `/longaudio/v1/home_new/daily_recommend`,
        method: "post",
        encryptType: "android",
        params: { module_id: 1, size: params.pagesize || 30, page: params.page || 1 },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/longaudio_rank_recommend.js
var require_longaudio_rank_recommend = __commonJS({
  "module/longaudio_rank_recommend.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: `/longaudio/v1/home_new/rank_card_recommend`,
        method: "get",
        encryptType: "android",
        params: { platform: "ios" },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/longaudio_vip_recommend.js
var require_longaudio_vip_recommend = __commonJS({
  "module/longaudio_vip_recommend.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: `/longaudio/v1/home_new/vip_select_recommend`,
        method: "post",
        encryptType: "android",
        data: { album_playlist: [] },
        params: { position: "2", clientver: 12329 },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/longaudio_week_recommend.js
var require_longaudio_week_recommend = __commonJS({
  "module/longaudio_week_recommend.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: `/longaudio/v1/home_new/week_new_albums_recommend`,
        method: "post",
        encryptType: "android",
        data: { album_playlist: [] },
        params: { clientver: 12329 },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/lyric.js
var require_lyric = __commonJS({
  "module/lyric.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { decodeLyrics } = require_util2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        ver: 1,
        client: params?.client || "android",
        id: params?.id,
        accesskey: params?.accesskey,
        fmt: params.fmt || "krc",
        charset: "utf8"
      };
      return new Promise((resolve, reject) => {
        useAxios({
          baseURL: "https://lyrics.kugou.com",
          url: "/download",
          method: "GET",
          params: dataMap,
          cookie: params?.cookie || {},
          encryptType: "android"
        }).then((res) => {
          if (params?.decode) {
            if (res.body?.content) {
              res.body["decodeContent"] = params?.fmt == "lrc" || Number(res.body?.contenttype) !== 0 ? Buffer.from(res.body?.content, "base64").toString() : decodeLyrics(res.body.content);
              resolve(res);
              return;
            }
          }
          resolve(res);
        }).catch((e) => reject(e));
      });
    };
  }
});

// module/pc_diantai.js
var require_pc_diantai = __commonJS({
  "module/pc_diantai.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.cookie?.userid || params?.userid || 0;
      const dataMap = {
        isvip: 0,
        userid,
        vipType: 0
      };
      return useAxios({
        baseURL: "https://adservice.kugou.com",
        url: "/v3/pc_diantai",
        data: dataMap,
        method: "post",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/personal_fm.js
var require_personal_fm = __commonJS({
  "module/personal_fm.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { signParamsKey, appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const userid = params?.cookie?.userid || params?.userid || 0;
      const token = params?.cookie?.token || params?.token || 0;
      const vip_type = params?.cookie?.vip_type || params?.vipType || 0;
      const dateTime = Date.now();
      const dataMap = {
        appid: appid2,
        clienttime: dateTime,
        mid: "",
        action: params?.action || "play",
        recommend_source_locked: 0,
        song_pool_id: Number(params?.song_pool_id || 0),
        callerid: 0,
        m_type: 1,
        platform: params?.platform || "ios",
        area_code: 1,
        remain_songcnt: Number(params?.remain_songcnt || 0),
        clientver: clientver2,
        is_overplay: params?.is_overplay ? 1 : 0,
        mode: params?.mode || "normal",
        fakem: "ca981cfc583a4c37f28d2d49000013c16a0a",
        key: signParamsKey(dateTime)
      };
      if (userid) {
        dataMap["userid"] = userid;
        dataMap["kguid"] = userid;
      }
      if (token)
        dataMap["token"] = token;
      if (vip_type)
        dataMap["vip_type"] = vip_type;
      if (params?.hash)
        dataMap["hash"] = params.hash;
      if (params?.songid)
        dataMap["songid"] = params.songid;
      if (params?.playtime)
        dataMap["playtime"] = params.playtime;
      return useAxios({
        url: "/v2/personal_recommend",
        data: dataMap,
        method: "post",
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "persnfm.service.kugou.com" }
      });
    };
  }
});

// module/playhistory_upload.js
var require_playhistory_upload = __commonJS({
  "module/playhistory_upload.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const token = params?.token || params?.cookie?.token || "";
      const songs = [{ mxid: Number(params.mxid), op: 1, ot: Number(params.time || Math.floor(Date.now() / 1e3)), pc: Number(params.pc || 1) }];
      const dataMap = { songs, token, userid };
      return useAxios({
        url: "/playhistory/v1/upload_songs",
        data: dataMap,
        encryptType: "android",
        method: "POST",
        params: { plat: 3 },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/playlist_add.js
var require_playlist_add = __commonJS({
  "module/playlist_add.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const token = params?.token || params.cookie?.token || "";
      const clienttime = Math.floor(Date.now() / 1e3);
      const dataMap = {
        userid,
        token,
        total_ver: 0,
        name: params.name,
        type: params.type || 0,
        source: params.source === 0 ? 0 : params.source || 1,
        is_pri: 0,
        list_create_userid: params.list_create_userid,
        list_create_listid: params.list_create_listid,
        list_create_gid: params.list_create_gid || "",
        from_shupinmv: 0
      };
      if (params.type === 0) {
        dataMap["is_pri"] = params.is_pri || 0;
      }
      return useAxios({
        url: "/cloudlist.service/v5/add_list",
        data: dataMap,
        params: params.type === 0 ? { last_time: clienttime, last_area: "gztx", userid, token } : {},
        method: "post",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/playlist_del.js
var require_playlist_del = __commonJS({
  "module/playlist_del.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { playlistAesEncrypt: playlistAesEncrypt2, playlistAesDecrypt: playlistAesDecrypt2, rsaEncrypt2: rsaEncrypt22, signParamsKey, clientver: clientver2, appid: appid2 } = require_util2();
    module.exports = (params, useAxios) => {
      const answer = { status: 500, body: {}, cookie: [] };
      return new Promise(async (resolve) => {
        try {
          const userid = params?.userid || params?.cookie?.userid || 0;
          const token = params?.token || params.cookie?.token || "";
          const clienttime = Math.floor(Date.now() / 1e3);
          const dataMap = {
            listid: Number(params.listid),
            total_ver: 0,
            type: 1
          };
          const aesEncrypt = playlistAesEncrypt2(dataMap);
          const p = rsaEncrypt22({ aes: aesEncrypt.key, uid: userid, token }).toUpperCase();
          const paramsMap = {
            clienttime,
            key: signParamsKey(clienttime.toString()),
            last_area: "gztx",
            clientver: clientver2,
            appid: appid2,
            last_time: clienttime,
            p
          };
          const respone = await useAxios({
            url: "/v2/delete_list",
            params: paramsMap,
            data: aesEncrypt.str,
            method: "post",
            encryptType: "android",
            headers: { "x-router": "cloudlist.service.kugou.com" },
            responseType: "arraybuffer",
            cookie: params?.cookie || {}
          });
          respone.body = playlistAesDecrypt2({ str: respone.body.toString("base64"), key: aesEncrypt.key });
          resolve(respone);
        } catch (error3) {
          console.log(error3);
          answer.body = error3;
          resolve(answer);
        }
      });
    };
  }
});

// module/playlist_detail.js
var require_playlist_detail = __commonJS({
  "module/playlist_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const data = (params?.ids || "").split(",").map((s) => ({ "global_collection_id": s }));
      const dataMap = {
        data,
        userid: params?.userid || params?.cookie?.userid || 0,
        token: params?.token || params?.cookie?.token || ""
      };
      return useAxios({
        url: "/v3/get_list_info",
        method: "POST",
        encryptType: "android",
        data: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "pubsongs.kugou.com" }
      });
    };
  }
});

// module/playlist_effect.js
var require_playlist_effect = __commonJS({
  "module/playlist_effect.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        page: params?.page || 1,
        pagesize: params?.pagesize || 30
      };
      return useAxios({
        url: "/pubsongs/v1/get_sound_effect_list",
        method: "POST",
        encryptType: "android",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/playlist_similar.js
var require_playlist_similar = __commonJS({
  "module/playlist_similar.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, signParamsKey } = require_util2();
    module.exports = (params, useAxios) => {
      const data = (params?.ids || "").split(",").map((s) => ({ "global_collection_id": s }));
      const clienttime = Date.now();
      const dataMap = {
        appid: appid2,
        clientver: clientver2,
        clienttime,
        key: signParamsKey(clienttime),
        userid: params?.userid || params?.cookie?.userid || 0,
        ugc: 1,
        show_list: 1,
        need_songs: 1,
        data
      };
      return useAxios({
        url: "/pubsongs/v1/kmr_get_similar_lists",
        method: "POST",
        encryptType: "android",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/playlist_tags.js
var require_playlist_tags = __commonJS({
  "module/playlist_tags.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        tag_type: "collection",
        tag_id: 0,
        source: 3
      };
      return useAxios({
        url: "/pubsongs/v1/get_tags_by_type",
        method: "POST",
        encryptType: "android",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/playlist_tracks_add.js
var require_playlist_tracks_add = __commonJS({
  "module/playlist_tracks_add.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const token = params?.token || params.cookie?.token || "";
      const clienttime = Math.floor(Date.now() / 1e3);
      const resource = (params.data || "").split(",").map((s) => {
        const data = s.split("|");
        return {
          number: 1,
          name: data[0] || "",
          hash: data[1] || "",
          size: 0,
          sort: 0,
          timelen: 0,
          bitrate: 0,
          album_id: Number(data[2] || 0),
          mixsongid: Number(data[3] || 0)
        };
      });
      const dataMap = {
        userid,
        token,
        listid: params.listid,
        list_ver: 0,
        type: 0,
        slow_upload: 1,
        scene: "false;null",
        data: resource
      };
      return useAxios({
        url: "/cloudlist.service/v6/add_song",
        data: dataMap,
        params: { last_time: clienttime, last_area: "gztx", userid, token },
        method: "post",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/playlist_tracks_del.js
var require_playlist_tracks_del = __commonJS({
  "module/playlist_tracks_del.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const token = params?.token || params.cookie?.token || "";
      const resource = (params.fileids || "").split(",").map((s) => ({ fileid: Number(s) }));
      const dataMap = {
        listid: params.listid,
        userid,
        data: resource,
        type: 0,
        token,
        list_ver: 0
      };
      return useAxios({
        url: "/v4/delete_songs",
        data: dataMap,
        method: "post",
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "cloudlist.service.kugou.com" }
      });
    };
  }
});

// module/playlist_track_all.js
var require_playlist_track_all = __commonJS({
  "module/playlist_track_all.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const pagesize = params?.pagesize || 30;
      const paramsMap = {
        area_code: 1,
        begin_idx: (Number(params.page || 1) - 1) * pagesize,
        plat: 1,
        type: 1,
        // module: 'NONE',
        mode: 1,
        personal_switch: 1,
        extend_fields: "abtags,hot_cmt,popularization",
        // page: params?.page || 1,
        pagesize,
        global_collection_id: params?.id
      };
      return useAxios({
        url: "/pubsongs/v2/get_other_list_file_nofilt",
        method: "GET",
        encryptType: "android",
        params: paramsMap,
        cookie: params?.cookie || {}
        // headers: { 'x-router': 'pubsongscdn.kugou.com' },
      });
    };
  }
});

// module/playlist_track_all_new.js
var require_playlist_track_all_new = __commonJS({
  "module/playlist_track_all_new.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || "0";
      const token = params?.token || params?.cookie?.token || "0";
      const dataMap = {
        listid: params.listid,
        userid,
        area_code: 1,
        show_relate_goods: 0,
        pagesize: params.pagesize || 30,
        allplatform: 1,
        show_cover: 1,
        type: 0,
        token,
        page: params.page || 1
      };
      return useAxios({
        url: "/v4/get_list_all_file",
        method: "post",
        encryptType: "android",
        data: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "cloudlist.service.kugou.com" }
      });
    };
  }
});

// module/privilege_lite.js
var require_privilege_lite = __commonJS({
  "module/privilege_lite.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const resource = (params?.hash || "").split(",").map((s) => ({ type: "audio", page_id: 0, hash: s, album_id: 0 }));
      (params?.album_id || "").split(",").forEach((s, l) => resource[l]["album_id"] = s);
      const dataMap = {
        appid: appid2,
        area_code: 1,
        behavior: "play",
        clientver: clientver2,
        need_hash_offset: 1,
        relate: 1,
        support_verify: 1,
        resource,
        qualities: ["128", "320", "flac", "high", "viper_atmos", "viper_tape", "viper_clear"]
      };
      return useAxios({
        url: "/v2/get_res_privilege/lite",
        data: dataMap,
        method: "post",
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "media.store.kugou.com", "Content-Type": "application/json" }
      });
    };
  }
});

// module/rank_audio.js
var require_rank_audio = __commonJS({
  "module/rank_audio.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        show_portrait_mv: 1,
        show_type_total: 1,
        filter_original_remarks: 1,
        area_code: 1,
        pagesize: params.pagesize || 30,
        rank_cid: params.rank_cid || 0,
        type: 1,
        page: params.page || 1,
        rank_id: params.rankid
      };
      return useAxios({
        url: "/openapi/kmr/v2/rank/audio",
        method: "post",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "kg-tid": "369" }
      });
    };
  }
});

// module/rank_info.js
var require_rank_info = __commonJS({
  "module/rank_info.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const parmasMap = {
        rank_cid: params.rank_cid || 0,
        rankid: params.rankid,
        with_album_img: params.album_img || 1,
        zone: params.zone || ""
      };
      return useAxios({
        url: "/ocean/v6/rank/info",
        method: "get",
        encryptType: "android",
        params: parmasMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/rank_list.js
var require_rank_list = __commonJS({
  "module/rank_list.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const parmasMap = {
        plat: 2,
        withsong: params.withsong || 1,
        parentid: 0
      };
      return useAxios({
        url: "/ocean/v6/rank/list",
        method: "get",
        encryptType: "android",
        params: parmasMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/rank_top.js
var require_rank_top = __commonJS({
  "module/rank_top.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/mobileservice/api/v5/rank/rec_rank_list",
        method: "get",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/rank_vol.js
var require_rank_vol = __commonJS({
  "module/rank_vol.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const parmasMap = {
        rank_cid: params.rank_cid || 0,
        rankid: params.rankid,
        ranktype: 1,
        type: 0,
        plat: 2
      };
      return useAxios({
        url: "/ocean/v6/rank/vol",
        method: "get",
        encryptType: "android",
        params: parmasMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/recommend_songs.js
var require_recommend_songs = __commonJS({
  "module/recommend_songs.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        platform: params?.platform || "android",
        userid: params?.userid || params?.cookie?.userid || "0"
      };
      return useAxios({
        url: "/everyday_song_recommend",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "everydayrec.service.kugou.com" }
      });
    };
  }
});

// module/register_dev.js
var require_register_dev = __commonJS({
  "module/register_dev.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        mid: params?.mid || "",
        uuid: params?.uuid || "",
        appid: "1014",
        userid: params?.userid || "0"
      };
      return useAxios({
        baseURL: "https://userservice.kugou.com",
        url: "/risk/v1/r_register_dev",
        method: "POST",
        data: Buffer.from(JSON.stringify(dataMap)).toString("base64"),
        params: { ...dataMap, "p.token": "", platid: 4 },
        encryptType: "register",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/scene_audio_list.js
var require_scene_audio_list = __commonJS({
  "module/scene_audio_list.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const token = params?.token || params.cookie?.token || "";
      const dataMap = {
        appid: appid2,
        clientver: clientver2,
        token,
        userid
      };
      return useAxios({
        url: "/scene/v1/scene/audio_list",
        method: "POST",
        encryptType: "android",
        params: { scene_id: params.id, module_id: params.module_id, tag: params.tag, page: params.page || 1, page_size: params.pagesize || 30 },
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/scene_collection_list.js
var require_scene_collection_list = __commonJS({
  "module/scene_collection_list.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const token = params?.token || params.cookie?.token || "";
      const dataMap = {
        appid: appid2,
        clientver: clientver2,
        token,
        userid,
        tag_id: params.tag_id,
        page: params.page || 1,
        page_size: params.pagesize || 30,
        exposed_data: []
      };
      return useAxios({
        url: "/scene/v1/distribution/collection_list",
        method: "POST",
        encryptType: "android",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/scene_lists.js
var require_scene_lists = __commonJS({
  "module/scene_lists.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/scene/v1/scene/list",
        method: "GET",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/scene_lists_v2.js
var require_scene_lists_v2 = __commonJS({
  "module/scene_lists_v2.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || "0";
      const sortType = { rec: 1, hot: 2, new: 3 };
      return useAxios({
        url: "/scene/v1/scene/list_v2",
        params: {
          scene_id: params.id,
          page: params.page || 1,
          pagesize: params.pagesize || 30,
          sort_type: sortType[params.sort || "rec"] || 1,
          kugouid: userid
        },
        data: { exposure: [] },
        method: "POST",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/scene_module.js
var require_scene_module = __commonJS({
  "module/scene_module.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/scene/v1/scene/module",
        params: { scene_id: params.id },
        method: "POST",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/scene_module_info.js
var require_scene_module_info = __commonJS({
  "module/scene_module_info.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/scene/v1/scene/module_info",
        params: { scene_id: params.id, module_id: params.module_id },
        method: "GET",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/scene_music.js
var require_scene_music = __commonJS({
  "module/scene_music.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/genesisapi/v1/scene_music/rec_music",
        params: { scene_id: params.id, page: params.page || 1, pagesize: params.pagesize || 30 },
        data: { exposure: [] },
        method: "POST",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/scene_video_list.js
var require_scene_video_list = __commonJS({
  "module/scene_video_list.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const token = params?.token || params.cookie?.token || "";
      const dataMap = {
        appid: appid2,
        clientver: clientver2,
        token,
        userid,
        tag_id: params.tag_id,
        page: params.page || 1,
        page_size: params.pagesize || 30,
        exposed_data: []
      };
      return useAxios({
        url: "/scene/v1/distribution/video_list",
        method: "POST",
        encryptType: "android",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/search.js
var require_search = __commonJS({
  "module/search.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        // token: '',
        albumhide: 0,
        iscorrection: 1,
        keyword: params?.keywords || "",
        nocollect: 0,
        page: params?.page || 1,
        pagesize: params?.pagesize || 30,
        platform: "AndroidFilter"
      };
      const type = ["special", "lyric", "song", "album", "author", "mv"].includes(params.type) ? params.type : "song";
      return useAxios({
        url: `/${type === "song" ? "v3" : "v1"}/search/${type}`,
        method: "GET",
        params: dataMap,
        encryptType: "android",
        headers: { "x-router": "complexsearch.kugou.com" },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/search_complex.js
var require_search_complex = __commonJS({
  "module/search_complex.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        platform: "AndroidFilter",
        keyword: params.keywords,
        page: params?.page || 1,
        pagesize: params?.pagesize || 30,
        cursor: 0
      };
      return useAxios({
        baseURL: "https://complexsearch.kugou.com",
        url: "/v6/search/complex",
        method: "GET",
        params: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/search_default.js
var require_search_default = __commonJS({
  "module/search_default.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const vip_type = params?.vip_type || params?.cookie?.vip_type || 65530;
      const dataMap = {
        "plat": 0,
        "userid": Number(userid),
        "tags": "{}",
        "vip_type": vip_type,
        "m_type": 0,
        "own_ads": {},
        "ability": "3",
        "sources": [],
        "bitmap": 2,
        "mode": "normal"
      };
      return useAxios({
        url: "/searchnofocus/v1/search_no_focus_word",
        method: "POST",
        data: dataMap,
        params: { clientver: 12329 },
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/search_hot.js
var require_search_hot = __commonJS({
  "module/search_hot.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        navid: 1,
        plat: 2
      };
      return useAxios({
        url: "/api/v3/search/hot_tab",
        method: "GET",
        params: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "msearch.kugou.com" }
      });
    };
  }
});

// module/search_lyric.js
var require_search_lyric = __commonJS({
  "module/search_lyric.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        album_audio_id: params?.album_audio_id || 0,
        appid: appid2,
        clientver: clientver2,
        duration: 0,
        hash: params?.hash || "",
        keyword: params?.keywords || "",
        lrctxt: 1,
        man: params.man ?? "no"
      };
      return useAxios({
        baseURL: "https://lyrics.kugou.com",
        url: "/v1/search",
        method: "GET",
        params: dataMap,
        cookie: params?.cookie || {},
        encryptType: "android",
        clearDefaultParams: true,
        notSign: true
      });
    };
  }
});

// module/search_mixed.js
var require_search_mixed = __commonJS({
  "module/search_mixed.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoMd5: cryptoMd52 } = require_util2();
    module.exports = (params, useAxios) => {
      const time3 = Date.now();
      const dataMap = {
        ab_tag: 0,
        ability: 511,
        albumhide: 0,
        apiver: 22,
        area_code: 1,
        clientver: 20125,
        cursor: 0,
        is_gpay: 0,
        iscorrection: 1,
        keyword: params.keyword,
        nocollect: 0,
        osversion: 16.5,
        platform: "IOSFilter",
        recver: 2,
        req_ai: 1,
        requestid: `${cryptoMd52(`bdaa53d04e7475feb9024164a47032f9${time3}`)}_0`,
        search_ability: 3,
        sec_aggre: 1,
        sec_aggre_bitmap: 0,
        style_type: 3,
        tag: "em"
      };
      return useAxios({
        url: "/v3/search/mixed",
        method: "GET",
        params: dataMap,
        encryptType: "android",
        headers: { "x-router": "complexsearch.kugou.com", "kg-clienttimems": time3.toString() },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/search_suggest.js
var require_search_suggest = __commonJS({
  "module/search_suggest.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/v2/getSearchTip",
        method: "GET",
        params: {
          keyword: params.keywords,
          AlbumTipCount: params.albumTipCount || 10,
          CorrectTipCount: params.correctTipCount || 10,
          MVTipCount: params.mvTipCount || 10,
          MusicTipCount: params.musicTipCount || 10,
          radiotip: 1
        },
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "searchtip.kugou.com" }
      });
    };
  }
});

// module/server_now.js
var require_server_now = __commonJS({
  "module/server_now.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const token = params?.token || params?.cookie?.token || "";
      return useAxios({
        url: "/v1/server_now",
        data: { token, userid },
        encryptType: "android",
        method: "POST",
        params: { plat: 3 },
        cookie: params?.cookie || {},
        headers: { "x-router": "usercenter.kugou.com" }
      });
    };
  }
});

// module/sheet_collection.js
var require_sheet_collection = __commonJS({
  "module/sheet_collection.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { srcappid } = require_util2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        srcappid,
        position: params.position ?? 2
      };
      return useAxios({
        url: "/miniyueku/v1/opern_square/get_home_module_config",
        encryptType: "web",
        method: "GET",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/sheet_collection_detail.js
var require_sheet_collection_detail = __commonJS({
  "module/sheet_collection_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { srcappid } = require_util2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        srcappid,
        page: params.page ?? 1,
        collection_id: params.collection_id
      };
      return useAxios({
        url: "/miniyueku/v1/opern_square/collection_detail",
        encryptType: "web",
        method: "GET",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/sheet_detail.js
var require_sheet_detail = __commonJS({
  "module/sheet_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        id: params.id,
        source: params.source
      };
      return useAxios({
        baseURL: "https://miniyueku.kugou.com",
        url: "/v1/opern/detail",
        encryptType: "android",
        method: "GET",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/sheet_hot.js
var require_sheet_hot = __commonJS({
  "module/sheet_hot.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { srcappid } = require_util2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        srcappid,
        opern_type: params.opern_type ?? 1
      };
      return useAxios({
        url: "/miniyueku/v1/opern_square/get_home_hot_opern",
        encryptType: "web",
        method: "GET",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/sheet_list.js
var require_sheet_list = __commonJS({
  "module/sheet_list.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        album_audio_id: params.album_audio_id,
        opern_type: params.opern_type ?? 0,
        page: params.page ?? 1,
        pagesize: params.pagesize ?? 30
      };
      return useAxios({
        url: "/miniyueku/v1/opern/list",
        encryptType: "android",
        method: "GET",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/singer_list.js
var require_singer_list = __commonJS({
  "module/singer_list.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/ocean/v6/singer/list",
        encryptType: "android",
        method: "GET",
        params: {
          hotsize: params?.hotsize ?? 200,
          musician: 0,
          sextype: params?.sextype ?? 0,
          showtype: 2,
          type: params?.type ?? 0
        },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/song_climax.js
var require_song_climax = __commonJS({
  "module/song_climax.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const data = (params?.hash || "").split(",").map((s) => ({ hash: s }));
      return useAxios({
        baseURL: "https://expendablekmrcdn.kugou.com",
        url: "/v1/audio_climax/audio",
        method: "GET",
        params: { data: JSON.stringify(data) },
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/song_ranking.js
var require_song_ranking = __commonJS({
  "module/song_ranking.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/grow/v1/song_ranking/play_page/ranking_info",
        method: "GET",
        params: { album_audio_id: params.album_audio_id },
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/song_ranking_filter.js
var require_song_ranking_filter = __commonJS({
  "module/song_ranking_filter.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/grow/v1/song_ranking/unlock/v2/ranking_filter",
        method: "GET",
        params: { album_audio_id: params.album_audio_id, page: params.page || 1, pagesize: params.pagesize || 30 },
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/song_url.js
var require_song_url = __commonJS({
  "module/song_url.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const quality = ["piano", "acappella", "subwoofer", "ancient", "dj", "surnay"].includes(params.quality) ? `magic_${params?.quality}` : params.quality;
      const isLite = false;
      const page_id = isLite ? 967177915 : 151369488;
      const ppage_id = isLite ? "356753938,823673182,967485191" : "463467626,350369493,788954147";
      const dataMap = {
        album_id: Number(params.album_id ?? 0),
        area_code: 1,
        hash: (params?.hash || "").toLowerCase(),
        ssa_flag: "is_fromtrack",
        version: 11040,
        page_id,
        quality: quality || 128,
        album_audio_id: Number(params.album_audio_id ?? 0),
        behavior: "play",
        pid: isLite ? 411 : 2,
        cmd: 26,
        pidversion: 3001,
        IsFreePart: params?.free_part ? 1 : 0,
        //是否返回试听部分（仅部分歌曲）
        ppage_id,
        cdnBackup: 1,
        kcard: 0,
        module: ""
      };
      return useAxios({
        url: "/v5/url",
        method: "GET",
        params: dataMap,
        encryptType: "android",
        headers: { "x-router": "trackercdn.kugou.com" },
        encryptKey: true,
        notSign: true,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/song_url_new.js
var require_song_url_new = __commonJS({
  "module/song_url_new.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { signKey: signKey2, appid: appid2, cryptoMd5: cryptoMd52 } = require_util2();
    module.exports = (params, useAxios) => {
      const quality = ["piano", "acappella", "subwoofer", "ancient", "dj", "surnay"].includes(params.quality) ? `magic_${params?.quality}` : params.quality;
      const vip_token = params?.vip_token || params?.cookie?.vip_token || "";
      const token = params?.token || params?.cookie?.token || "";
      const clienttime_ms = Date.now();
      const userid = Number(params?.userid || params?.cookie?.userid || "0");
      const dfid = params?.dfid || params?.cookie?.dfid || "-";
      const vip_type = params?.cookie?.vip_type || params?.vipType || 0;
      const dataMap = {
        area_code: "1",
        behavior: "play",
        qualities: ["128", "320", "flac", "high", "multitrack", "viper_atmos", "viper_tape", "viper_clear"],
        "resource": {
          "album_audio_id": params.album_audio_id,
          "collect_list_id": "3",
          "collect_time": clienttime_ms,
          "hash": params.hash,
          "id": 0,
          "page_id": 1,
          "type": "audio"
        },
        token,
        // tracker_param,
        "tracker_param": {
          all_m: 1,
          auth: "",
          is_free_part: params?.free_part ? 1 : 0,
          // key: signKey(params.hash, cryptoMd5(dfid), userid, appid),
          key: cryptoMd52(`${params.hash}185672dd44712f60bb1736df5a377e82${appid2}${cryptoMd52(dfid)}${userid}`),
          module_id: 0,
          need_climax: 1,
          need_xcdn: 1,
          open_time: "",
          pid: "411",
          pidversion: "3001",
          priv_vip_type: "6",
          viptoken: vip_token
        },
        userid: `${userid}`,
        "vip": vip_type
      };
      return useAxios({
        baseURL: "http://tracker.kugou.com",
        url: "/v6/priv_url",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/theme_music.js
var require_theme_music = __commonJS({
  "module/theme_music.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        platform: "android",
        clienttime: Math.floor(Date.now() / 1e3),
        show_theme_category_ids: params?.ids,
        userid: params?.userid || params?.cookie?.userid || 0,
        module_id: 508
      };
      return useAxios({
        url: "/everydayrec.service/v1/mul_theme_category_recommend",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/theme_music_detail.js
var require_theme_music_detail = __commonJS({
  "module/theme_music_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        platform: "android",
        clienttime: Math.floor(Date.now() / 1e3),
        theme_category_id: params?.id,
        show_theme_category_id: 0,
        userid: params?.userid || params?.cookie?.userid || 0,
        module_id: 508
      };
      return useAxios({
        url: "/everydayrec.service/v1/theme_category_recommend",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/theme_playlist.js
var require_theme_playlist = __commonJS({
  "module/theme_playlist.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        platform: "android",
        clientver: clientver2,
        clienttime: Date.now(),
        area_code: 1,
        module_id: 1,
        userid: params?.userid || params?.cookie?.userid || 0
      };
      return useAxios({
        url: "/v2/getthemelist",
        method: "POST",
        encryptType: "android",
        data: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "everydayrec.service.kugou.com" }
      });
    };
  }
});

// module/theme_playlist_track.js
var require_theme_playlist_track = __commonJS({
  "module/theme_playlist_track.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { clientver: clientver2 } = require_util2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        platform: "android",
        clientver: clientver2,
        clienttime: Date.now(),
        area_code: 1,
        module_id: 1,
        userid: params?.userid || params?.cookie?.userid || 0,
        theme_id: params?.theme_id
      };
      return useAxios({
        url: "/v2/gettheme_songidlist",
        method: "POST",
        encryptType: "android",
        data: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "everydayrec.service.kugou.com" }
      });
    };
  }
});

// module/top_album.js
var require_top_album = __commonJS({
  "module/top_album.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { apiver } = require_util2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        apiver,
        token: params?.token || params?.cookie?.token || "",
        page: params?.page || 1,
        pagesize: params?.pagesize || 30,
        withpriv: 1
      };
      return useAxios({
        url: "/musicadservice/v1/mobile_newalbum_sp",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/top_card.js
var require_top_card = __commonJS({
  "module/top_card.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, cryptoMd5: cryptoMd52, signParamsKey } = require_util2();
    module.exports = (params, useAxios) => {
      const dfid = params?.dfid || params?.cookie?.dfid || "-";
      const fakem = "60f7ebf1f812edbac3c63a7310001701760f";
      const mid = cryptoMd52(dfid);
      const dateTime = Date.now();
      const dataMap = {
        appid: appid2,
        clientver: clientver2,
        platform: "android",
        clienttime: dateTime,
        userid: params?.userid || params?.cookie?.userid || 0,
        key: signParamsKey(dateTime),
        fakem,
        area_code: 1,
        mid,
        uuid: cryptoMd52(`${dfid}${mid}`),
        client_playlist: [],
        u_info: "a0c35cd40af564444b5584c2754dedec"
      };
      return useAxios({
        url: "/singlecardrec.service/v1/single_card_recommend",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        params: { "card_id": params?.card_id || 1, fakem, area_code: 1, platform: "ios" },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/top_card_youth.js
var require_top_card_youth = __commonJS({
  "module/top_card_youth.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        tagid: ""
      };
      return useAxios({
        url: "youth/v1/song/single_card_recommend",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        params: { "card_id": params?.card_id || 3005, area_code: 1, platform: "ops", module_id: 1, ver: "v2", pagesize: params.pagesize ?? 30 },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/top_ip.js
var require_top_ip = __commonJS({
  "module/top_ip.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = { tags: {} };
      return new Promise((resolve, reject) => {
        useAxios({
          baseURL: "http://musicadservice.kugou.com",
          url: "/v1/daily_recommend",
          encryptType: "android",
          method: "POST",
          data: dataMap,
          params: {
            clientver: 12349,
            area_code: 1
          },
          cookie: params?.cookie || {}
        }).then((resp) => {
          if (resp.body.status == 1) {
            const list = Array.isArray(resp.body.data.list) ? [...resp.body.data.list] : [];
            list.forEach((s, index) => {
              const inner_url = s?.extra?.inner_url;
              if (inner_url) {
                const findIndex = inner_url.lastIndexOf("ip_id");
                if (findIndex !== -1) {
                  list[index]["extra"]["ip_id"] = Number(inner_url.substring(findIndex + 6));
                }
              }
            });
            resp.body.data.list = list;
          }
          resolve(resp);
        }).catch((e) => reject(e));
      });
    };
  }
});

// module/top_playlist.js
var require_top_playlist = __commonJS({
  "module/top_playlist.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, signParamsKey, cryptoMd5: cryptoMd52 } = require_util2();
    module.exports = (params, useAxios) => {
      const dateTime = (Date.now() / 1e3).toFixed(0);
      const specialRecommend = {
        withtag: params?.withtag || 1,
        withsong: params?.withsong || 1,
        sort: params?.sort || 1,
        ugc: 1,
        is_selected: 0,
        withrecommend: 1,
        area_code: 1,
        categoryid: params?.category_id || 0
      };
      const dataMap = {
        appid: appid2,
        mid: cryptoMd52(params?.dfid || params?.cookie?.dfid || "-"),
        clientver: clientver2,
        platform: "android",
        clienttime: dateTime,
        userid: params?.userid || params?.cookie?.userid || 0,
        module_id: params?.module_id || 1,
        page: params?.page || 1,
        pagesize: params?.pagesize || 30,
        key: signParamsKey(dateTime.toString()),
        special_recommend: specialRecommend,
        req_multi: 1,
        retrun_min: 5,
        return_special_falg: 1
      };
      return useAxios({
        url: "/v2/special_recommend",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {},
        headers: { "x-router": "specialrec.service.kugou.com" }
      });
    };
  }
});

// module/top_song.js
var require_top_song = __commonJS({
  "module/top_song.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        rank_id: params?.type || 21608,
        userid: params?.userid || params?.cookie?.userid || 0,
        page: params?.page || 1,
        pagesize: params?.pagesize || 30,
        tags: []
      };
      return useAxios({
        url: "/musicadservice/container/v1/newsong_publish",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/user_cloud.js
var require_user_cloud = __commonJS({
  "module/user_cloud.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { playlistAesEncrypt: playlistAesEncrypt2, playlistAesDecrypt: playlistAesDecrypt2, rsaEncrypt2: rsaEncrypt22, signParamsKey, clientver: clientver2, appid: appid2, cryptoMd5: cryptoMd52 } = require_util2();
    module.exports = (params, useAxios) => {
      const answer = { status: 500, body: {}, cookie: [] };
      return new Promise(async (resolve) => {
        try {
          const userid = params?.userid || params?.cookie?.userid || 0;
          const token = params?.token || params.cookie?.token || "";
          const dfid = params?.cookie?.dfid || "-";
          const mid = cryptoMd52(dfid.toString());
          const clienttime = Math.floor(Date.now() / 1e3);
          const dataMap = {
            page: params.page ?? 1,
            pagesize: params.pagesize ?? 30,
            getkmr: 1
          };
          const aesEncrypt = playlistAesEncrypt2(dataMap);
          const p = rsaEncrypt22({ aes: aesEncrypt.key, uid: userid, token }).toUpperCase();
          const paramsMap = {
            clienttime,
            mid,
            key: signParamsKey(clienttime.toString(), appid2),
            clientver: clientver2,
            appid: appid2,
            p
          };
          const respone = await useAxios({
            baseURL: "https://mcloudservice.kugou.com",
            url: "/v1/get_list",
            params: paramsMap,
            data: Buffer.from(aesEncrypt.str, "base64"),
            method: "post",
            encryptType: "android",
            responseType: "arraybuffer",
            cookie: params?.cookie || {},
            clearDefaultParams: true,
            notSignature: true
          });
          respone.body = playlistAesDecrypt2({ str: respone.body.toString("base64"), key: aesEncrypt.key });
          resolve(respone);
        } catch (error3) {
          console.log(error3);
          answer.body = error3;
          resolve(answer);
        }
      });
    };
  }
});

// module/user_cloud_url.js
var require_user_cloud_url = __commonJS({
  "module/user_cloud_url.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { signCloudKey } = require_util2();
    module.exports = (params, useAxios) => {
      const hash2 = String(params.hash).toLocaleLowerCase();
      const paramsMap = {
        hash: hash2,
        ssa_flag: "is_fromtrack",
        version: "20102",
        ssl: 0,
        album_audio_id: params.album_audio_id ?? 0,
        pid: 20026,
        audio_id: params.audio_id ?? 0,
        kv_id: 2,
        key: signCloudKey(hash2, 20026),
        bucket: "musicclound",
        name: params.name ?? "",
        with_res_tag: 0
      };
      return useAxios({
        url: "/bsstrackercdngz/v2/query_musicclound_url",
        encryptType: "android",
        method: "get",
        params: paramsMap,
        cookie: params?.cookie
      });
    };
  }
});

// module/user_detail.js
var require_user_detail = __commonJS({
  "module/user_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoAesEncrypt: cryptoAesEncrypt2, cryptoRSAEncrypt: cryptoRSAEncrypt2 } = require_util2();
    module.exports = (params, useAxios) => {
      const token = params?.token || params?.cookie?.token || "";
      const userid = Number(params?.userid || params?.cookie?.userid || "0");
      const clienttime_ms = Math.floor(Date.now() / 1e3);
      const pk = cryptoRSAEncrypt2({ token, clienttime: clienttime_ms }).toUpperCase();
      const dataMap = {
        visit_time: clienttime_ms,
        usertype: 1,
        p: pk,
        userid
      };
      return useAxios({
        url: "/v3/get_my_info",
        method: "POST",
        data: dataMap,
        params: { plat: 1 },
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "usercenter.kugou.com" }
      });
    };
  }
});

// module/user_follow.js
var require_user_follow = __commonJS({
  "module/user_follow.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoRSAEncrypt: cryptoRSAEncrypt2 } = require_util2();
    module.exports = (params, useAxios) => {
      const token = params?.token || params?.cookie?.token || "";
      const userid = params?.userid || params?.cookie?.userid || "0";
      const dateTime = Math.floor(Date.now() / 1e3);
      const dataMap = {
        merge: 2,
        need_iden_type: 1,
        ext_params: "k_pic,jumptype,singerid,score",
        userid,
        type: 0,
        id_type: 0,
        p: cryptoRSAEncrypt2({ clienttime: dateTime, token }).toUpperCase()
      };
      return useAxios({
        url: "/v4/follow_list",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        params: { plat: 1 },
        cookie: params?.cookie || {},
        headers: { "x-router": "relationuser.kugou.com" }
      });
    };
  }
});

// module/user_history.js
var require_user_history = __commonJS({
  "module/user_history.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || 0;
      const token = params?.token || params?.cookie?.token || "";
      const dataMap = { token, userid, source_classify: "app", to_subdivide_sr: 1 };
      if (params.bp)
        dataMap["bp"] = params.bp;
      return useAxios({
        url: "/playhistory/v1/get_songs",
        data: dataMap,
        encryptType: "android",
        method: "POST",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/user_listen.js
var require_user_listen = __commonJS({
  "module/user_listen.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoRSAEncrypt: cryptoRSAEncrypt2 } = require_util2();
    module.exports = (params, useAxios) => {
      const token = params?.token || params?.cookie?.token || "";
      const userid = params?.userid || params?.cookie?.userid || "0";
      const clienttime = Math.floor(Date.now() / 1e3);
      const p = cryptoRSAEncrypt2({ clienttime, token }).toUpperCase();
      const dataMap = {
        t_userid: userid,
        userid,
        list_type: params.type || 0,
        area_code: 1,
        cover: 2,
        p
      };
      return useAxios({
        baseURL: "https://listenservice.kugou.com",
        url: "/v2/get_list",
        data: dataMap,
        params: { clienttime, plat: 0 },
        method: "POST",
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/user_playlist.js
var require_user_playlist = __commonJS({
  "module/user_playlist.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const userid = params?.cookie?.userid || params?.userid || 0;
      const token = params?.cookie?.token || params?.token || "";
      const dataMap = {
        userid,
        token,
        total_ver: 979,
        type: 2,
        page: params?.page || 1,
        pagesize: params?.pagesize || 30
      };
      return useAxios({
        url: "/v7/get_all_list",
        encryptType: "android",
        method: "post",
        data: dataMap,
        params: { plat: 1, userid: Number(userid), token },
        cookie: params?.cookie,
        headers: { "x-router": "cloudlist.service.kugou.com" }
      });
    };
  }
});

// module/user_video_collect.js
var require_user_video_collect = __commonJS({
  "module/user_video_collect.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoRSAEncrypt: cryptoRSAEncrypt2 } = require_util2();
    module.exports = (params, useAxios) => {
      const token = params?.token || params?.cookie?.token || "";
      const userid = params?.userid || params?.cookie?.userid || "0";
      const dataMap = {
        userid,
        token,
        page: params?.page ?? 1,
        pagesize: params?.pagesize ?? 30
      };
      return useAxios({
        url: "/collectservice/v2/collect_list_mixvideo",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        params: { plat: 1 },
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/user_video_love.js
var require_user_video_love = __commonJS({
  "module/user_video_love.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoRSAEncrypt: cryptoRSAEncrypt2 } = require_util2();
    module.exports = (params, useAxios) => {
      const userid = params?.userid || params?.cookie?.userid || "0";
      const paramsMap = {
        kugouid: userid,
        pagesize: params?.pagesize ?? 30,
        load_video_info: 1,
        p: 1,
        plat: 1
      };
      return useAxios({
        url: "/m.comment.service/v1/get_user_like_video",
        encryptType: "android",
        method: "get",
        params: paramsMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/user_vip_detail.js
var require_user_vip_detail = __commonJS({
  "module/user_vip_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        baseURL: "https://kugouvip.kugou.com",
        url: "/v1/get_union_vip",
        method: "GET",
        params: { busi_type: "concept" },
        encryptType: "android",
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/video_detail.js
var require_video_detail = __commonJS({
  "module/video_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { appid: appid2, clientver: clientver2, signParamsKey, cryptoMd5: cryptoMd52 } = require_util2();
    module.exports = (params, useAxios) => {
      const dfid = params?.cookie?.dfid || "-";
      const mid = cryptoMd52(dfid.toString());
      const uuid = cryptoMd52(`${dfid}${mid}`);
      const token = params?.token || params?.cookie?.token || "";
      const clienttime = Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
      const resource = (params.id || "").split(",").map((s) => ({ video_id: s }));
      const dataMap = {
        appid: appid2,
        clientver: clientver2,
        clienttime,
        mid,
        uuid,
        dfid,
        token: token || "",
        key: signParamsKey(clienttime.toString()),
        show_resolution: 1,
        data: resource
      };
      return useAxios({
        url: "/v1/video",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        clearDefaultParams: true,
        headers: { "x-router": "kmr.service.kugou.com" }
      });
    };
  }
});

// module/video_privilege.js
var require_video_privilege = __commonJS({
  "module/video_privilege.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { cryptoMd5: cryptoMd52, signParamsKey, clientver: clientver2, appid: appid2 } = require_util2();
    module.exports = (params, useAxios) => {
      const dfid = params?.cookie?.dfid || "-";
      const mid = cryptoMd52(dfid);
      const resource = (params?.hash || "").split(",").map((s) => ({ hash: s, id: 0, name: "" }));
      const dataMap = {
        appid: appid2,
        area_code: 1,
        behavior: "play",
        clientver: clientver2,
        dfid,
        mid,
        resource,
        token: params?.cookie?.token || "",
        userid: params?.cookie?.userid || 0,
        vip: params?.cookie?.vip_type || 0
      };
      return useAxios({
        url: "/v1/get_video_privilege",
        method: "POST",
        data: dataMap,
        encryptType: "android",
        cookie: params?.cookie || {},
        headers: { "x-router": "media.store.kugou.com" }
      });
    };
  }
});

// module/video_url.js
var require_video_url = __commonJS({
  "module/video_url.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        backupdomain: 1,
        cmd: 123,
        ext: "mp4",
        ismp3: 0,
        hash: params.hash,
        pid: 1,
        type: 1
      };
      return useAxios({
        url: "/v2/interface/index",
        method: "GET",
        params: paramsMap,
        encryptType: "android",
        encryptKey: true,
        headers: { "x-router": "trackermv.kugou.com" }
      });
    };
  }
});

// module/youth_channel_all.js
var require_youth_channel_all = __commonJS({
  "module/youth_channel_all.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/youth/v2/channel/channel_all_list",
        encryptType: "android",
        method: "get",
        params: { page: params.page || 1, pagesize: params.pagesize || 30, type: 1 },
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_channel_amway.js
var require_youth_channel_amway = __commonJS({
  "module/youth_channel_amway.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/youth/api/amway/v2/index",
        encryptType: "android",
        method: "get",
        params: { global_collection_id: params.global_collection_id },
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_channel_detail.js
var require_youth_channel_detail = __commonJS({
  "module/youth_channel_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const data = (params.global_collection_id || "").split(",").map((s) => ({ global_collection_id: s }));
      return useAxios({
        url: "/youth/api/channel/v1/channel_list_by_id",
        encryptType: "android",
        method: "post",
        data: { data },
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_channel_similar.js
var require_youth_channel_similar = __commonJS({
  "module/youth_channel_similar.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/youth/v1/channel/get_friendly_channel",
        encryptType: "android",
        method: "post",
        data: {
          area_code: 1,
          playlist_ver: 2,
          vip_type: params?.vip_type || params?.cookie?.vip_type || 0,
          platform: "ios"
        },
        params: { channel_id: params.channel_id },
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_channel_song.js
var require_youth_channel_song = __commonJS({
  "module/youth_channel_song.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        global_collection_id: params.global_collection_id,
        pagesize: params.pagesize || 30,
        page: params.page || 1,
        is_filter: 0
      };
      return useAxios({
        url: "/youth/api/channel/v1/channel_get_song_audit_passed",
        encryptType: "android",
        method: "get",
        params: dataMap,
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_channel_song_detail.js
var require_youth_channel_song_detail = __commonJS({
  "module/youth_channel_song_detail.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        global_collection_id: params.global_collection_id,
        fileid: params.fileid
      };
      return useAxios({
        url: "/youth/v2/post/get_song_detail",
        encryptType: "android",
        method: "get",
        params: dataMap,
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_channel_sub.js
var require_youth_channel_sub = __commonJS({
  "module/youth_channel_sub.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const t = Number(params.t) === 0 ? 0 : 1;
      return useAxios({
        url: `/youth/v1/channel${t === 0 ? "_un" : ""}_subscribe`,
        encryptType: "android",
        method: t === 0 ? "delete" : "post",
        params: { global_collection_id: params.global_collection_id, source: 1 },
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_day_vip.js
var require_youth_day_vip = __commonJS({
  "module/youth_day_vip.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/youth/v1/recharge/receive_vip_listen_song",
        encryptType: "android",
        method: "post",
        params: { source_id: 90137 },
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_day_vip_upgrade.js
var require_youth_day_vip_upgrade = __commonJS({
  "module/youth_day_vip_upgrade.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        kugouid: Number(params?.userid || params?.cookie?.userid || 0),
        ad_type: "1"
      };
      return useAxios({
        url: "/youth/v1/listen_song/upgrade_vip_reward",
        encryptType: "android",
        method: "post",
        params: paramsMap,
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_dynamic.js
var require_youth_dynamic = __commonJS({
  "module/youth_dynamic.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/youth/v3/user/get_dynamic",
        encryptType: "android",
        method: "get",
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_dynamic_recent.js
var require_youth_dynamic_recent = __commonJS({
  "module/youth_dynamic_recent.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/youth/v3/user/recent_dynamic",
        encryptType: "android",
        method: "get",
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_listen_song.js
var require_youth_listen_song = __commonJS({
  "module/youth_listen_song.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        mixsongid: params?.mixsongid || 666075191
      };
      return useAxios({
        url: "/youth/v2/report/listen_song",
        data: dataMap,
        method: "POST",
        encryptTyPe: "android",
        params: { clientver: 10566 },
        cookie: params?.cookie,
        headers: {
          "user-agent": "Android13-1070-10566-201-0-ReportPlaySongToServerProtocol-wifi",
          "content-type": "application/json; charset=utf-8"
        }
      });
    };
  }
});

// module/youth_month_vip_record.js
var require_youth_month_vip_record = __commonJS({
  "module/youth_month_vip_record.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/youth/v1/activity/get_month_vip_record",
        encryptType: "android",
        method: "get",
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_union_vip.js
var require_youth_union_vip = __commonJS({
  "module/youth_union_vip.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const paramsMap = {
        busi_type: "concept",
        opt_product_types: "dvip,qvip",
        product_type: "svip"
      };
      return useAxios({
        baseURL: "https://kugouvip.kugou.com",
        url: "/v1/get_union_vip",
        encryptType: "android",
        method: "get",
        params: paramsMap,
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_user_song.js
var require_youth_user_song = __commonJS({
  "module/youth_user_song.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        filter_video: 0,
        type: params?.type || 0,
        userid: params.userid,
        pagesize: params.pagesize || 30,
        page: params.page || 1,
        is_filter: 0
      };
      return useAxios({
        url: "/youth/v1/get_user_song_public",
        encryptType: "android",
        method: "get",
        params: dataMap,
        cookie: params?.cookie
      });
    };
  }
});

// module/youth_vip.js
var require_youth_vip = __commonJS({
  "module/youth_vip.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const time3 = Date.now();
      const dataMap = {
        ad_id: 12307537187,
        play_end: time3,
        play_start: time3 - 3e4
      };
      return useAxios({
        url: "/youth/v1/ad/play_report",
        encryptType: "android",
        method: "post",
        data: dataMap,
        cookie: params?.cookie
      });
    };
  }
});

// module/yueku.js
var require_yueku = __commonJS({
  "module/yueku.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/v1/yueku/recommend_v2",
        encryptType: "android",
        method: "GET",
        params: { operator: 7, plat: 0, type: 11, area_code: 1, req_multi: 1 },
        cookie: params?.cookie || {},
        headers: { "x-router": "service.mobile.kugou.com" }
      });
    };
  }
});

// module/yueku_banner.js
var require_yueku_banner = __commonJS({
  "module/yueku_banner.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      const dataMap = {
        plat: 0,
        channel: 201,
        operator: 7,
        networktype: 2,
        userid: params?.userid || params?.cookie?.userid || 0,
        vip_type: 0,
        m_type: 0,
        tags: [],
        apiver: 5,
        ability: 2,
        mode: "normal"
      };
      return useAxios({
        url: "/ads.gateway/v3/listen_banner",
        encryptType: "android",
        method: "POST",
        data: dataMap,
        cookie: params?.cookie || {}
      });
    };
  }
});

// module/yueku_fm.js
var require_yueku_fm = __commonJS({
  "module/yueku_fm.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = (params, useAxios) => {
      return useAxios({
        url: "/v1/time_fm_info",
        encryptType: "android",
        method: "GET",
        params: { operator: 7, plat: 0, type: 11, area_code: 1, req_multi: 1 },
        cookie: params?.cookie || {},
        headers: { "x-router": "fm.service.kugou.com" }
      });
    };
  }
});

// .wrangler/tmp/bundle-eKzQT6/middleware-loader.entry.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-eKzQT6/middleware-insertion-facade.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// worker/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/hono.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/hono-base.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/compose.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context2.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context2, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/context.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/request.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/http-exception.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/request/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// node_modules/hono/dist/utils/body.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match2[1], new RegExp(`^${match2[2]}(?=/${next})`)] : [label, match2[1], new RegExp(`^${match2[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match2[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder(match2);
      } catch {
        return match2;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = /* @__PURE__ */ __name(class {
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
}, "HonoRequest");

// node_modules/hono/dist/utils/html.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context2, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context: context2 }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context2, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var Context = /* @__PURE__ */ __name(class {
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = false;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= new Response(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = new Response(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = (layout) => this.#layout = layout;
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = () => this.#layout;
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = (name, value, options) => {
    if (this.finalized) {
      this.#res = new Response(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  };
  status = (status) => {
    this.#status = status;
  };
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          responseHeaders.set(k, v);
        } else {
          responseHeaders.delete(k);
          for (const v2 of v) {
            responseHeaders.append(k, v2);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return new Response(data, { status, headers: responseHeaders });
  }
  newResponse = (...args) => this.#newResponse(...args);
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = (text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  };
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = (object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  };
  html = (html, arg, headers) => {
    const res = /* @__PURE__ */ __name((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  };
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = (location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  };
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
}, "Context");

// node_modules/hono/dist/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = /* @__PURE__ */ __name(class extends Error {
}, "UnsupportedPathError");

// node_modules/hono/dist/utils/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = /* @__PURE__ */ __name(class _Hono {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { basePath: this._basePath, path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env2, "GET")))();
    }
    const path = this.getPath(request, { env: env2 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env2,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context2 = await composed(c);
        if (!context2.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context2.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  };
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
}, "_Hono");

// node_modules/hono/dist/router/reg-exp-router/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/reg-exp-router/matcher.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = /* @__PURE__ */ __name((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  }, "match2");
  this.match = match2;
  return match2(method, path);
}
__name(match, "match");

// node_modules/hono/dist/router/reg-exp-router/node.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = /* @__PURE__ */ __name(class _Node {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context2, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new _Node();
        if (name !== "") {
          node.#varIndex = context2.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new _Node();
      }
    }
    node.insert(restTokens, index, paramMap, context2, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
}, "_Node");

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Trie = /* @__PURE__ */ __name(class {
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
}, "Trie");

// node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = /* @__PURE__ */ __name(class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
}, "RegExpRouter");

// node_modules/hono/dist/router/reg-exp-router/prepared-router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/smart-router/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/smart-router/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SmartRouter = /* @__PURE__ */ __name(class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
}, "SmartRouter");

// node_modules/hono/dist/router/trie-router/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/trie-router/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/trie-router/node.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = /* @__PURE__ */ __name(class _Node2 {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new _Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
}, "_Node");

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = /* @__PURE__ */ __name(class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
}, "TrieRouter");

// node_modules/hono/dist/hono.js
var Hono2 = /* @__PURE__ */ __name(class extends Hono {
  /**
   * Creates an instance of the Hono class.
   *
   * @param options - Optional configuration options for the Hono instance.
   */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
}, "Hono");

// worker/adapter.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_crypto2 = __toESM(require_crypto2());
var import_helper = __toESM(require_helper());
var import_config = __toESM(require_config());
var { appid, clientver, liteAppid, liteClientver } = import_config.default;
var createRequest = /* @__PURE__ */ __name(async (options) => {
  const baseURL = options.baseURL || "https://gateway.kugou.com";
  let url = options.url.startsWith("http") ? options.url : `${baseURL}${options.url}`;
  const params = options.params || {};
  const platform2 = "android";
  const isLite = platform2 === "lite";
  const dfid = options?.cookie?.dfid || "-";
  const mid = (0, import_crypto2.cryptoMd5)(dfid);
  const uuid = (0, import_crypto2.cryptoMd5)(`${dfid}${mid}`);
  const token = options?.cookie?.token || "";
  const userid = options?.cookie?.userid || 0;
  const clienttime = Math.floor(Date.now() / 1e3);
  const ip = options?.realIP || options?.ip || "";
  const headers = { dfid, clienttime, mid };
  if (ip) {
    headers["X-Real-IP"] = ip;
    headers["X-Forwarded-For"] = ip;
  }
  const defaultParams = {
    dfid,
    mid,
    uuid,
    appid: isLite ? liteAppid : appid,
    clientver: isLite ? liteClientver : clientver,
    userid,
    clienttime
  };
  if (token)
    defaultParams["token"] = token;
  const rawParams = options?.clearDefaultParams ? options?.params || {} : Object.assign({}, defaultParams, options?.params || {});
  const paramsMap = { ...rawParams };
  headers["clienttime"] = paramsMap.clienttime;
  if (options?.encryptKey) {
    paramsMap["key"] = (0, import_helper.signKey)(paramsMap["hash"], paramsMap["mid"], paramsMap["userid"], paramsMap["appid"]);
  }
  const dataBody = typeof options?.data === "object" ? JSON.stringify(options.data) : options?.data || "";
  if (!paramsMap["signature"] && !options.notSignature) {
    switch (options?.encryptType) {
      case "register":
        paramsMap["signature"] = (0, import_helper.signatureRegisterParams)(paramsMap);
        break;
      case "web":
        paramsMap["signature"] = (0, import_helper.signatureWebParams)(paramsMap);
        break;
      case "android":
      default:
        paramsMap["signature"] = (0, import_helper.signatureAndroidParams)(paramsMap, dataBody);
        break;
    }
  }
  const method = (options.method || "GET").toUpperCase();
  const queryString = new URLSearchParams();
  Object.keys(paramsMap).forEach((key) => {
    queryString.append(key, paramsMap[key]);
  });
  if (options.baseURL?.includes("openapicdn")) {
    url = `${url}?${queryString.toString()}`;
  } else {
    if (url.includes("?")) {
      url += "&" + queryString.toString();
    } else {
      url += "?" + queryString.toString();
    }
  }
  const requestHeaders = Object.assign(
    {
      "User-Agent": "Android15-1070-11083-46-0-DiscoveryDRADProtocol-wifi"
    },
    options?.headers || {},
    headers
  );
  if (options.cookie) {
    const cookieStr = Object.entries(options.cookie).map(([k, v]) => `${k}=${v}`).join("; ");
    requestHeaders["Cookie"] = cookieStr;
  }
  const fetchOptions = {
    method,
    headers: requestHeaders
  };
  if (method !== "GET" && method !== "HEAD") {
    fetchOptions.body = dataBody;
    if (typeof dataBody === "string" && !requestHeaders["Content-Type"]) {
      try {
        JSON.parse(dataBody);
        requestHeaders["Content-Type"] = "application/json";
      } catch (e) {
        requestHeaders["Content-Type"] = "application/x-www-form-urlencoded";
      }
    }
  }
  const answer = { status: 500, body: {}, cookie: [], headers: {} };
  try {
    const response = await fetch(url, fetchOptions);
    answer.status = response.status;
    response.headers.forEach((value, key) => {
      answer.headers[key.toLowerCase()] = value;
    });
    const setCookieHeader = response.headers.get("Set-Cookie");
    if (setCookieHeader) {
      answer.cookie = [setCookieHeader];
    }
    const bodyText = await response.text();
    try {
      answer.body = JSON.parse(bodyText);
    } catch (e) {
      answer.body = bodyText;
    }
    if (answer.body && (answer.body.status === 0 || answer.body.error_code && answer.body.error_code !== 0)) {
      answer.status = 502;
    } else {
      answer.status = 200;
    }
  } catch (e) {
    answer.status = 502;
    answer.body = { status: 0, msg: e.message || "Fetch Error" };
  }
  if (answer.status !== 200) {
    throw answer;
  }
  return answer;
}, "createRequest");

// worker/index.js
var import_ai_recommend = __toESM(require_ai_recommend());
var import_album = __toESM(require_album());
var import_album_detail = __toESM(require_album_detail());
var import_album_shop = __toESM(require_album_shop());
var import_album_songs = __toESM(require_album_songs());
var import_artist_albums = __toESM(require_artist_albums());
var import_artist_audios = __toESM(require_artist_audios());
var import_artist_detail = __toESM(require_artist_detail());
var import_artist_follow = __toESM(require_artist_follow());
var import_artist_follow_newsongs = __toESM(require_artist_follow_newsongs());
var import_artist_honour = __toESM(require_artist_honour());
var import_artist_lists = __toESM(require_artist_lists());
var import_artist_unfollow = __toESM(require_artist_unfollow());
var import_artist_videos = __toESM(require_artist_videos());
var import_audio = __toESM(require_audio());
var import_audio_accompany_matching = __toESM(require_audio_accompany_matching());
var import_audio_ktv_total = __toESM(require_audio_ktv_total());
var import_audio_related = __toESM(require_audio_related());
var import_brush = __toESM(require_brush());
var import_captcha_sent = __toESM(require_captcha_sent());
var import_comment_album = __toESM(require_comment_album());
var import_comment_count = __toESM(require_comment_count());
var import_comment_floor = __toESM(require_comment_floor());
var import_comment_music = __toESM(require_comment_music());
var import_comment_music_classify = __toESM(require_comment_music_classify());
var import_comment_music_hotword = __toESM(require_comment_music_hotword());
var import_comment_playlist = __toESM(require_comment_playlist());
var import_everyday_friend = __toESM(require_everyday_friend());
var import_everyday_history = __toESM(require_everyday_history());
var import_everyday_recommend = __toESM(require_everyday_recommend());
var import_everyday_style_recommend = __toESM(require_everyday_style_recommend());
var import_favorite_count = __toESM(require_favorite_count());
var import_fm_class = __toESM(require_fm_class());
var import_fm_image = __toESM(require_fm_image());
var import_fm_recommend = __toESM(require_fm_recommend());
var import_fm_songs = __toESM(require_fm_songs());
var import_images = __toESM(require_images());
var import_images_audio = __toESM(require_images_audio());
var import_ip = __toESM(require_ip());
var import_ip_dateil = __toESM(require_ip_dateil());
var import_ip_playlist = __toESM(require_ip_playlist());
var import_ip_zone = __toESM(require_ip_zone());
var import_ip_zone_home = __toESM(require_ip_zone_home());
var import_kmr_audio_mv = __toESM(require_kmr_audio_mv());
var import_krm_audio = __toESM(require_krm_audio());
var import_lastest_songs_listen = __toESM(require_lastest_songs_listen());
var import_login = __toESM(require_login());
var import_login_cellphone = __toESM(require_login_cellphone());
var import_login_openplat = __toESM(require_login_openplat());
var import_login_qr_check = __toESM(require_login_qr_check());
var import_login_qr_create = __toESM(require_login_qr_create());
var import_login_qr_key = __toESM(require_login_qr_key());
var import_login_token = __toESM(require_login_token());
var import_login_wx_check = __toESM(require_login_wx_check());
var import_login_wx_create = __toESM(require_login_wx_create());
var import_longaudio_album_audios = __toESM(require_longaudio_album_audios());
var import_longaudio_album_detail = __toESM(require_longaudio_album_detail());
var import_longaudio_daily_recommend = __toESM(require_longaudio_daily_recommend());
var import_longaudio_rank_recommend = __toESM(require_longaudio_rank_recommend());
var import_longaudio_vip_recommend = __toESM(require_longaudio_vip_recommend());
var import_longaudio_week_recommend = __toESM(require_longaudio_week_recommend());
var import_lyric = __toESM(require_lyric());
var import_pc_diantai = __toESM(require_pc_diantai());
var import_personal_fm = __toESM(require_personal_fm());
var import_playhistory_upload = __toESM(require_playhistory_upload());
var import_playlist_add = __toESM(require_playlist_add());
var import_playlist_del = __toESM(require_playlist_del());
var import_playlist_detail = __toESM(require_playlist_detail());
var import_playlist_effect = __toESM(require_playlist_effect());
var import_playlist_similar = __toESM(require_playlist_similar());
var import_playlist_tags = __toESM(require_playlist_tags());
var import_playlist_tracks_add = __toESM(require_playlist_tracks_add());
var import_playlist_tracks_del = __toESM(require_playlist_tracks_del());
var import_playlist_track_all = __toESM(require_playlist_track_all());
var import_playlist_track_all_new = __toESM(require_playlist_track_all_new());
var import_privilege_lite = __toESM(require_privilege_lite());
var import_rank_audio = __toESM(require_rank_audio());
var import_rank_info = __toESM(require_rank_info());
var import_rank_list = __toESM(require_rank_list());
var import_rank_top = __toESM(require_rank_top());
var import_rank_vol = __toESM(require_rank_vol());
var import_recommend_songs = __toESM(require_recommend_songs());
var import_register_dev = __toESM(require_register_dev());
var import_scene_audio_list = __toESM(require_scene_audio_list());
var import_scene_collection_list = __toESM(require_scene_collection_list());
var import_scene_lists = __toESM(require_scene_lists());
var import_scene_lists_v2 = __toESM(require_scene_lists_v2());
var import_scene_module = __toESM(require_scene_module());
var import_scene_module_info = __toESM(require_scene_module_info());
var import_scene_music = __toESM(require_scene_music());
var import_scene_video_list = __toESM(require_scene_video_list());
var import_search = __toESM(require_search());
var import_search_complex = __toESM(require_search_complex());
var import_search_default = __toESM(require_search_default());
var import_search_hot = __toESM(require_search_hot());
var import_search_lyric = __toESM(require_search_lyric());
var import_search_mixed = __toESM(require_search_mixed());
var import_search_suggest = __toESM(require_search_suggest());
var import_server_now = __toESM(require_server_now());
var import_sheet_collection = __toESM(require_sheet_collection());
var import_sheet_collection_detail = __toESM(require_sheet_collection_detail());
var import_sheet_detail = __toESM(require_sheet_detail());
var import_sheet_hot = __toESM(require_sheet_hot());
var import_sheet_list = __toESM(require_sheet_list());
var import_singer_list = __toESM(require_singer_list());
var import_song_climax = __toESM(require_song_climax());
var import_song_ranking = __toESM(require_song_ranking());
var import_song_ranking_filter = __toESM(require_song_ranking_filter());
var import_song_url = __toESM(require_song_url());
var import_song_url_new = __toESM(require_song_url_new());
var import_theme_music = __toESM(require_theme_music());
var import_theme_music_detail = __toESM(require_theme_music_detail());
var import_theme_playlist = __toESM(require_theme_playlist());
var import_theme_playlist_track = __toESM(require_theme_playlist_track());
var import_top_album = __toESM(require_top_album());
var import_top_card = __toESM(require_top_card());
var import_top_card_youth = __toESM(require_top_card_youth());
var import_top_ip = __toESM(require_top_ip());
var import_top_playlist = __toESM(require_top_playlist());
var import_top_song = __toESM(require_top_song());
var import_user_cloud = __toESM(require_user_cloud());
var import_user_cloud_url = __toESM(require_user_cloud_url());
var import_user_detail = __toESM(require_user_detail());
var import_user_follow = __toESM(require_user_follow());
var import_user_history = __toESM(require_user_history());
var import_user_listen = __toESM(require_user_listen());
var import_user_playlist = __toESM(require_user_playlist());
var import_user_video_collect = __toESM(require_user_video_collect());
var import_user_video_love = __toESM(require_user_video_love());
var import_user_vip_detail = __toESM(require_user_vip_detail());
var import_video_detail = __toESM(require_video_detail());
var import_video_privilege = __toESM(require_video_privilege());
var import_video_url = __toESM(require_video_url());
var import_youth_channel_all = __toESM(require_youth_channel_all());
var import_youth_channel_amway = __toESM(require_youth_channel_amway());
var import_youth_channel_detail = __toESM(require_youth_channel_detail());
var import_youth_channel_similar = __toESM(require_youth_channel_similar());
var import_youth_channel_song = __toESM(require_youth_channel_song());
var import_youth_channel_song_detail = __toESM(require_youth_channel_song_detail());
var import_youth_channel_sub = __toESM(require_youth_channel_sub());
var import_youth_day_vip = __toESM(require_youth_day_vip());
var import_youth_day_vip_upgrade = __toESM(require_youth_day_vip_upgrade());
var import_youth_dynamic = __toESM(require_youth_dynamic());
var import_youth_dynamic_recent = __toESM(require_youth_dynamic_recent());
var import_youth_listen_song = __toESM(require_youth_listen_song());
var import_youth_month_vip_record = __toESM(require_youth_month_vip_record());
var import_youth_union_vip = __toESM(require_youth_union_vip());
var import_youth_user_song = __toESM(require_youth_user_song());
var import_youth_vip = __toESM(require_youth_vip());
var import_yueku = __toESM(require_yueku());
var import_yueku_banner = __toESM(require_yueku_banner());
var import_yueku_fm = __toESM(require_yueku_fm());
var app = new Hono2();
var parseCookie = /* @__PURE__ */ __name((str) => {
  if (!str)
    return {};
  return str.split(";").map((v) => v.split("=")).reduce((acc, v) => {
    if (v.length < 2)
      return acc;
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});
}, "parseCookie");
app.all("/ai_recommend", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_ai_recommend.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/album", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_album.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/album_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_album_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/album_shop", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_album_shop.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/album_songs", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_album_songs.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/artist_albums", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_artist_albums.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/artist_audios", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_artist_audios.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/artist_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_artist_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/artist_follow", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_artist_follow.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/artist_follow_newsongs", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_artist_follow_newsongs.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/artist_honour", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_artist_honour.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/artist_lists", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_artist_lists.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/artist_unfollow", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_artist_unfollow.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/artist_videos", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_artist_videos.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/audio", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_audio.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/audio_accompany_matching", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_audio_accompany_matching.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/audio_ktv_total", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_audio_ktv_total.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/audio_related", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_audio_related.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/brush", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_brush.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/captcha_sent", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_captcha_sent.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/comment_album", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_comment_album.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/comment_count", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_comment_count.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/comment_floor", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_comment_floor.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/comment_music", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_comment_music.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/comment_music_classify", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_comment_music_classify.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/comment_music_hotword", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_comment_music_hotword.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/comment_playlist", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_comment_playlist.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/everyday_friend", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_everyday_friend.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/everyday_history", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_everyday_history.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/everyday_recommend", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_everyday_recommend.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/everyday_style_recommend", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_everyday_style_recommend.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/favorite_count", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_favorite_count.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/fm_class", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_fm_class.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/fm_image", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_fm_image.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/fm_recommend", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_fm_recommend.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/fm_songs", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_fm_songs.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/images", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_images.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/images_audio", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_images_audio.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/ip", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_ip.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/ip_dateil", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_ip_dateil.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/ip_playlist", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_ip_playlist.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/ip_zone", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_ip_zone.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/ip_zone_home", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_ip_zone_home.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/kmr_audio_mv", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_kmr_audio_mv.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/krm_audio", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_krm_audio.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/lastest_songs_listen", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_lastest_songs_listen.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/login", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_login.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/login_cellphone", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_login_cellphone.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/login_openplat", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_login_openplat.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/login_qr_check", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_login_qr_check.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/login_qr_create", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_login_qr_create.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/login_qr_key", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_login_qr_key.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/login_token", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_login_token.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/login_wx_check", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_login_wx_check.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/login_wx_create", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_login_wx_create.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/longaudio_album_audios", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_longaudio_album_audios.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/longaudio_album_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_longaudio_album_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/longaudio_daily_recommend", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_longaudio_daily_recommend.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/longaudio_rank_recommend", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_longaudio_rank_recommend.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/longaudio_vip_recommend", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_longaudio_vip_recommend.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/longaudio_week_recommend", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_longaudio_week_recommend.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/lyric", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_lyric.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/pc_diantai", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_pc_diantai.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/personal_fm", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_personal_fm.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playhistory_upload", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playhistory_upload.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_add", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_add.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_del", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_del.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_effect", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_effect.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_similar", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_similar.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_tags", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_tags.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_tracks_add", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_tracks_add.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_tracks_del", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_tracks_del.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_track_all", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_track_all.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/playlist_track_all_new", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_playlist_track_all_new.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/privilege_lite", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_privilege_lite.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/rank_audio", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_rank_audio.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/rank_info", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_rank_info.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/rank_list", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_rank_list.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/rank_top", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_rank_top.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/rank_vol", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_rank_vol.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/recommend_songs", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_recommend_songs.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/register_dev", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_register_dev.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/scene_audio_list", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_scene_audio_list.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/scene_collection_list", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_scene_collection_list.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/scene_lists", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_scene_lists.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/scene_lists_v2", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_scene_lists_v2.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/scene_module", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_scene_module.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/scene_module_info", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_scene_module_info.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/scene_music", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_scene_music.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/scene_video_list", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_scene_video_list.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/search", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_search.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/search_complex", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_search_complex.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/search_default", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_search_default.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/search_hot", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_search_hot.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/search_lyric", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_search_lyric.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/search_mixed", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_search_mixed.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/search_suggest", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_search_suggest.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/server_now", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_server_now.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/sheet_collection", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_sheet_collection.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/sheet_collection_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_sheet_collection_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/sheet_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_sheet_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/sheet_hot", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_sheet_hot.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/sheet_list", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_sheet_list.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/singer_list", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_singer_list.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/song_climax", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_song_climax.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/song_ranking", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_song_ranking.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/song_ranking_filter", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_song_ranking_filter.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/song_url", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_song_url.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/song_url_new", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_song_url_new.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/theme_music", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_theme_music.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/theme_music_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_theme_music_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/theme_playlist", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_theme_playlist.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/theme_playlist_track", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_theme_playlist_track.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/top_album", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_top_album.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/top_card", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_top_card.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/top_card_youth", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_top_card_youth.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/top_ip", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_top_ip.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/top_playlist", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_top_playlist.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/top_song", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_top_song.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_cloud", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_cloud.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_cloud_url", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_cloud_url.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_follow", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_follow.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_history", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_history.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_listen", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_listen.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_playlist", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_playlist.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_video_collect", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_video_collect.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_video_love", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_video_love.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/user_vip_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_user_vip_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/video_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_video_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/video_privilege", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_video_privilege.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/video_url", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_video_url.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_channel_all", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_channel_all.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_channel_amway", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_channel_amway.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_channel_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_channel_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_channel_similar", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_channel_similar.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_channel_song", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_channel_song.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_channel_song_detail", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_channel_song_detail.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_channel_sub", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_channel_sub.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_day_vip", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_day_vip.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_day_vip_upgrade", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_day_vip_upgrade.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_dynamic", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_dynamic.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_dynamic_recent", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_dynamic_recent.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_listen_song", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_listen_song.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_month_vip_record", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_month_vip_record.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_union_vip", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_union_vip.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_user_song", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_user_song.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/youth_vip", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_youth_vip.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/yueku", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_yueku.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/yueku_banner", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_yueku_banner.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
app.all("/yueku_fm", async (c) => {
  const query = c.req.query();
  let body = {};
  if (c.req.method !== "GET") {
    try {
      const contentType = c.req.header("Content-Type") || "";
      if (contentType.includes("application/json")) {
        body = await c.req.json();
      } else if (contentType.includes("form") || contentType.includes("multipart")) {
        body = await c.req.parseBody();
      }
    } catch (e) {
    }
  }
  const params = { ...query, ...body };
  const cookieHeader = c.req.header("Cookie");
  if (cookieHeader) {
    params.cookie = parseCookie(cookieHeader);
  } else {
    params.cookie = {};
  }
  try {
    const result = await (0, import_yueku_fm.default)(params, createRequest);
    if (result.cookie && Array.isArray(result.cookie)) {
      result.cookie.forEach((cStr) => {
        c.header("Set-Cookie", cStr, { append: true });
      });
    }
    return c.json(result.body, result.status);
  } catch (error3) {
    return c.json(error3.body || { msg: error3.message }, error3.status || 500);
  }
});
var worker_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-eKzQT6/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-eKzQT6/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

axios/dist/browser/axios.cjs:
  (*! Axios v1.13.2 Copyright (c) 2025 Matt Zabriskie and contributors *)
*/
//# sourceMappingURL=index.js.map
