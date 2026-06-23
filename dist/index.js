(function (root, factory) {
	if (typeof define === 'function' && define.amd) { define([], factory); }
	else if (typeof module === 'object' && module.exports) { module.exports = factory(); }
	else { root.FastestValidator = factory(); }
}(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : this, function () {
var FastestValidator = (() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // lib/helpers/deep-extend.js
  var require_deep_extend = __commonJS({
    "lib/helpers/deep-extend.js"(exports, module) {
      "use strict";
      function isObjectHasKeys(v) {
        if (typeof v !== "object" || Array.isArray(v) || v == null) return false;
        return Object.keys(v).length > 0;
      }
      function deepExtend(destination, source, options = {}) {
        for (let property in source) {
          if (isObjectHasKeys(source[property])) {
            destination[property] = destination[property] || {};
            deepExtend(destination[property], source[property], options);
          } else {
            if (options.skipIfExist === true && destination[property] !== void 0) continue;
            destination[property] = source[property];
          }
        }
        return destination;
      }
      module.exports = deepExtend;
    }
  });

  // lib/helpers/replace.js
  var require_replace = __commonJS({
    "lib/helpers/replace.js"(exports, module) {
      function convertible(value) {
        if (value === void 0) return "";
        if (value === null) return "";
        if (typeof value.toString === "function") return value;
        return typeof value;
      }
      module.exports = (string, searchValue, newValue) => string.replace(searchValue, convertible(newValue));
    }
  });

  // lib/messages.js
  var require_messages = __commonJS({
    "lib/messages.js"(exports, module) {
      "use strict";
      module.exports = {
        required: "The '{field}' field is required.",
        string: "The '{field}' field must be a string.",
        stringEmpty: "The '{field}' field must not be empty.",
        stringMin: "The '{field}' field length must be greater than or equal to {expected} characters long.",
        stringMax: "The '{field}' field length must be less than or equal to {expected} characters long.",
        stringLength: "The '{field}' field length must be {expected} characters long.",
        stringPattern: "The '{field}' field fails to match the required pattern.",
        stringContains: "The '{field}' field must contain the '{expected}' text.",
        stringEnum: "The '{field}' field does not match any of the allowed values.",
        stringNumeric: "The '{field}' field must be a numeric string.",
        stringAlpha: "The '{field}' field must be an alphabetic string.",
        stringAlphanum: "The '{field}' field must be an alphanumeric string.",
        stringAlphadash: "The '{field}' field must be an alphadash string.",
        stringHex: "The '{field}' field must be a hex string.",
        stringSingleLine: "The '{field}' field must be a single line string.",
        stringBase64: "The '{field}' field must be a base64 string.",
        number: "The '{field}' field must be a number.",
        numberMin: "The '{field}' field must be greater than or equal to {expected}.",
        numberMax: "The '{field}' field must be less than or equal to {expected}.",
        numberEqual: "The '{field}' field must be equal to {expected}.",
        numberNotEqual: "The '{field}' field can't be equal to {expected}.",
        numberInteger: "The '{field}' field must be an integer.",
        numberStep: "The '{field}' field must be a multiple of {expected}.",
        numberPositive: "The '{field}' field must be a positive number.",
        numberNegative: "The '{field}' field must be a negative number.",
        array: "The '{field}' field must be an array.",
        arrayEmpty: "The '{field}' field must not be an empty array.",
        arrayMin: "The '{field}' field must contain at least {expected} items.",
        arrayMax: "The '{field}' field must contain less than or equal to {expected} items.",
        arrayLength: "The '{field}' field must contain {expected} items.",
        arrayContains: "The '{field}' field must contain the '{expected}' item.",
        arrayUnique: "The '{actual}' value in '{field}' field does not unique the '{expected}' values.",
        arrayEnum: "The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",
        tuple: "The '{field}' field must be an array.",
        tupleEmpty: "The '{field}' field must not be an empty array.",
        tupleLength: "The '{field}' field must contain {expected} items.",
        boolean: "The '{field}' field must be a boolean.",
        currency: "The '{field}' must be a valid currency format",
        date: "The '{field}' field must be a Date.",
        dateMin: "The '{field}' field must be greater than or equal to {expected}.",
        dateMax: "The '{field}' field must be less than or equal to {expected}.",
        enumValue: "The '{field}' field value '{expected}' does not match any of the allowed values.",
        equalValue: "The '{field}' field value must be equal to '{expected}'.",
        equalField: "The '{field}' field value must be equal to '{expected}' field value.",
        forbidden: "The '{field}' field is forbidden.",
        function: "The '{field}' field must be a function.",
        email: "The '{field}' field must be a valid e-mail.",
        emailEmpty: "The '{field}' field must not be empty.",
        emailMin: "The '{field}' field length must be greater than or equal to {expected} characters long.",
        emailMax: "The '{field}' field length must be less than or equal to {expected} characters long.",
        luhn: "The '{field}' field must be a valid checksum luhn.",
        mac: "The '{field}' field must be a valid MAC address.",
        object: "The '{field}' must be an Object.",
        objectStrict: "The object '{field}' contains forbidden keys: '{actual}'.",
        objectMinProps: "The object '{field}' must contain at least {expected} properties.",
        objectMaxProps: "The object '{field}' must contain {expected} properties at most.",
        url: "The '{field}' field must be a valid URL.",
        urlEmpty: "The '{field}' field must not be empty.",
        uuid: "The '{field}' field must be a valid UUID.",
        uuidVersion: "The '{field}' field must be a valid UUID version provided.",
        classInstanceOf: "The '{field}' field must be an instance of the '{expected}' class.",
        objectID: "The '{field}' field must be an valid ObjectID",
        record: "The '{field}' must be an Object."
      };
    }
  });

  // lib/rules/any.js
  var require_any = __commonJS({
    "lib/rules/any.js"(exports, module) {
      "use strict";
      module.exports = function() {
        const src = [];
        src.push(`
		return value;
	`);
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/array.js
  var require_array = __commonJS({
    "lib/rules/array.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        const src = [];
        let sanitized = false;
        if (schema.convert === true) {
          sanitized = true;
          src.push(`
			if (!Array.isArray(value) && value != null) {
				value = [value];
			}
		`);
        }
        src.push(`
		if (!Array.isArray(value)) {
			${this.makeError({ type: "array", actual: "value", messages })}
			return value;
		}

		var len = value.length;
	`);
        if (schema.empty === false) {
          src.push(`
			if (len === 0) {
				${this.makeError({ type: "arrayEmpty", actual: "value", messages })}
			}
		`);
        }
        if (schema.min != null) {
          src.push(`
			if (len < ${schema.min}) {
				${this.makeError({ type: "arrayMin", expected: schema.min, actual: "len", messages })}
			}
		`);
        }
        if (schema.max != null) {
          src.push(`
			if (len > ${schema.max}) {
				${this.makeError({ type: "arrayMax", expected: schema.max, actual: "len", messages })}
			}
		`);
        }
        if (schema.length != null) {
          src.push(`
			if (len !== ${schema.length}) {
				${this.makeError({ type: "arrayLength", expected: schema.length, actual: "len", messages })}
			}
		`);
        }
        if (schema.contains != null) {
          src.push(`
			if (value.indexOf(${JSON.stringify(schema.contains)}) === -1) {
				${this.makeError({ type: "arrayContains", expected: JSON.stringify(schema.contains), actual: "value", messages })}
			}
		`);
        }
        if (schema.unique === true) {
          src.push(`
			if(len > (new Set(value)).size) {
				${this.makeError({ type: "arrayUnique", expected: "Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))", actual: "value", messages })}
			}
		`);
        }
        if (schema.enum != null) {
          const enumStr = JSON.stringify(schema.enum);
          src.push(`
			for (var i = 0; i < value.length; i++) {
				if (${enumStr}.indexOf(value[i]) === -1) {
					${this.makeError({ type: "arrayEnum", expected: '"' + schema.enum.join(", ") + '"', actual: "value[i]", messages })}
				}
			}
		`);
        }
        if (schema.items != null) {
          src.push(`
			var arr = value;
			var parentField = field;
			for (var i = 0; i < arr.length; i++) {
				value = arr[i];
		`);
          const itemPath = path + "[]";
          const rule = this.getRuleFromSchema(schema.items);
          const innerSource = `arr[i] = ${context.async ? "await " : ""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;
          src.push(this.compileRule(rule, context, itemPath, innerSource, "arr[i]"));
          src.push(`
			}
		`);
          src.push(`
		return arr;
	`);
        } else {
          src.push(`
		return value;
	`);
        }
        return {
          sanitized,
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/boolean.js
  var require_boolean = __commonJS({
    "lib/rules/boolean.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        const src = [];
        let sanitized = false;
        src.push(`
		var origValue = value;
	`);
        if (schema.convert === true) {
          sanitized = true;
          src.push(`
			if (typeof value !== "boolean") {
				if (
				value === 1
				|| value === "true"
				|| value === "1"
				|| value === "on"
				) {
					value = true;
				} else if (
				value === 0
				|| value === "false"
				|| value === "0"
				|| value === "off"
				) {
					value = false;
				}
			}
		`);
        }
        src.push(`
		if (typeof value !== "boolean") {
			${this.makeError({ type: "boolean", actual: "origValue", messages })}
		}
		
		return value;
	`);
        return {
          sanitized,
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/class.js
  var require_class = __commonJS({
    "lib/rules/class.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages, index }, path, context) {
        const src = [];
        const className = schema.instanceOf.name ? schema.instanceOf.name : "<UnknowClass>";
        if (!context.customs[index]) context.customs[index] = { schema };
        else context.customs[index].schema = schema;
        src.push(`
		if (!(value instanceof context.customs[${index}].schema.instanceOf))
			${this.makeError({ type: "classInstanceOf", actual: "value", expected: "'" + className + "'", messages })}
	`);
        src.push(`
		return value;
	`);
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/custom.js
  var require_custom = __commonJS({
    "lib/rules/custom.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages, index }, path, context) {
        const src = [];
        src.push(`
		${this.makeCustomValidator({ fnName: "check", path, schema, messages, context, ruleIndex: index })}
		return value;
	`);
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/currency.js
  var require_currency = __commonJS({
    "lib/rules/currency.js"(exports, module) {
      "use strict";
      var CURRENCY_REGEX = "(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$";
      module.exports = function({ schema, messages }, path, context) {
        const currencySymbol = schema.currencySymbol || null;
        const thousandSeparator = schema.thousandSeparator || ",";
        const decimalSeparator = schema.decimalSeparator || ".";
        const customRegex = schema.customRegex;
        let isCurrencySymbolMandatory = !schema.symbolOptional;
        let finalRegex = CURRENCY_REGEX.replace(/~1/g, currencySymbol ? `\\${currencySymbol}${isCurrencySymbolMandatory ? "" : "?"}` : "").replace("~2", thousandSeparator).replace("~3", decimalSeparator);
        const src = [];
        src.push(`
		if (!value.match(${customRegex || new RegExp(finalRegex)})) {
			${this.makeError({ type: "currency", actual: "value", messages })}
			return value;
		}

		return value;
	`);
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/date.js
  var require_date = __commonJS({
    "lib/rules/date.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        const src = [];
        let sanitized = false;
        src.push(`
		var origValue = value;
	`);
        if (schema.convert === true) {
          sanitized = true;
          src.push(`
			if (!(value instanceof Date)) {
				value = new Date(value.length && !isNaN(+value) ? +value : value);
			}
		`);
        }
        src.push(`
		if (!(value instanceof Date) || isNaN(value.getTime()))
			${this.makeError({ type: "date", actual: "origValue", messages })}

		return value;
	`);
        return {
          sanitized,
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/email.js
  var require_email = __commonJS({
    "lib/rules/email.js"(exports, module) {
      "use strict";
      var PRECISE_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var BASIC_PATTERN = /^\S+@\S+\.\S+$/;
      module.exports = function({ schema, messages }, path, context) {
        const src = [];
        const pattern = schema.mode == "precise" ? PRECISE_PATTERN : BASIC_PATTERN;
        let sanitized = false;
        src.push(`
		if (typeof value !== "string") {
			${this.makeError({ type: "string", actual: "value", messages })}
			return value;
		}
	`);
        if (!schema.empty) {
          src.push(`
			if (value.length === 0) {
				${this.makeError({ type: "emailEmpty", actual: "value", messages })}
				return value;
			}
		`);
        } else {
          src.push(`
			if (value.length === 0) return value;
		`);
        }
        if (schema.normalize) {
          sanitized = true;
          src.push(`
			value = value.trim().toLowerCase();
		`);
        }
        if (schema.min != null) {
          src.push(`
			if (value.length < ${schema.min}) {
				${this.makeError({ type: "emailMin", expected: schema.min, actual: "value.length", messages })}
			}
		`);
        }
        if (schema.max != null) {
          src.push(`
			if (value.length > ${schema.max}) {
				${this.makeError({ type: "emailMax", expected: schema.max, actual: "value.length", messages })}
			}
		`);
        }
        src.push(`
		if (!${pattern.toString()}.test(value)) {
			${this.makeError({ type: "email", actual: "value", messages })}
		}

		return value;
	`);
        return {
          sanitized,
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/enum.js
  var require_enum = __commonJS({
    "lib/rules/enum.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        const values = schema.values || [];
        const enumStr = JSON.stringify(values);
        return {
          source: `
			if (${enumStr}.indexOf(value) === -1)
				${this.makeError({ type: "enumValue", expected: JSON.stringify(values.join(", ")), actual: "value", messages })}
			
			return value;
		`
        };
      };
    }
  });

  // lib/rules/equal.js
  var require_equal = __commonJS({
    "lib/rules/equal.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        const src = [];
        if (schema.field) {
          if (schema.strict) {
            src.push(`
				if (value !== parent["${schema.field}"])
			`);
          } else {
            src.push(`
				if (value != parent["${schema.field}"])
			`);
          }
          src.push(`
				${this.makeError({ type: "equalField", actual: "value", expected: JSON.stringify(schema.field), messages })}
		`);
        } else {
          if (schema.strict) {
            src.push(`
				if (value !== ${JSON.stringify(schema.value)})
			`);
          } else {
            src.push(`
				if (value != ${JSON.stringify(schema.value)})
			`);
          }
          src.push(`
				${this.makeError({ type: "equalValue", actual: "value", expected: JSON.stringify(schema.value), messages })}
		`);
        }
        src.push(`
		return value;
	`);
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/forbidden.js
  var require_forbidden = __commonJS({
    "lib/rules/forbidden.js"(exports, module) {
      "use strict";
      module.exports = function checkForbidden({ schema, messages }, path, context) {
        const src = [];
        src.push(`
		if (value !== null && value !== undefined) {
	`);
        if (schema.remove) {
          src.push(`
			return undefined;
		`);
        } else {
          src.push(`
			${this.makeError({ type: "forbidden", actual: "value", messages })}
		`);
        }
        src.push(`
		}

		return value;
	`);
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/function.js
  var require_function = __commonJS({
    "lib/rules/function.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        return {
          source: `
			if (typeof value !== "function")
				${this.makeError({ type: "function", actual: "value", messages })}

			return value;
		`
        };
      };
    }
  });

  // lib/rules/multi.js
  var require_multi = __commonJS({
    "lib/rules/multi.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        const src = [];
        src.push(`
		var hasValid = false;
		var newVal = value;
		var checkErrors = [];
		var errorsSize = errors.length;
	`);
        for (let i = 0; i < schema.rules.length; i++) {
          src.push(`
			if (!hasValid) {
				var _errors = [];
		`);
          const rule = this.getRuleFromSchema(schema.rules[i]);
          src.push(this.compileRule(rule, context, path, `var tmpVal = ${context.async ? "await " : ""}context.fn[%%INDEX%%](value, field, parent, _errors, context);`, "tmpVal"));
          src.push(`
				if (errors.length == errorsSize && _errors.length == 0) {
					hasValid = true;
					newVal = tmpVal;
				} else {
					Array.prototype.push.apply(checkErrors, [].concat(_errors, errors.splice(errorsSize)));
				}
			}
		`);
        }
        src.push(`
		if (!hasValid) {
			Array.prototype.push.apply(errors, checkErrors);
		}

		return newVal;
	`);
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/pipe.js
  var require_pipe = __commonJS({
    "lib/rules/pipe.js"(exports, module) {
      "use strict";
      module.exports = function({ schema }, path, context) {
        const steps = Array.isArray(schema && schema.steps) ? schema.steps : [];
        const stepFns = [];
        for (let i = 0; i < steps.length; i++) {
          const rule = this.getRuleFromSchema(steps[i]);
          const innerSrc = `
			current = ${context.async ? "await " : ""}context.fn[%%INDEX%%](current, field, parent, errors, context, label);
		`;
          const body = this.compileRule(rule, context, path, innerSrc, "current");
          stepFns.push(`
			${context.async ? "async " : ""}function step_${i}(current, field, parent, errors, context, label) { ${body} return current; }
		`);
        }
        const src = [];
        src.push(...stepFns);
        src.push(`const fns = [${stepFns.map((_, idx) => `step_${idx}`).join(",")}];`);
        src.push("var current = value;");
        src.push("for (var i = 0; i < fns.length; i++) {");
        src.push("  var before = errors.length;");
        src.push(`  current = ${context.async ? "await " : ""}fns[i](current, field, parent, errors, context, label);`);
        src.push("  if (errors.length > before) { break; }");
        src.push("}");
        src.push("return current;");
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/number.js
  var require_number = __commonJS({
    "lib/rules/number.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        const src = [];
        src.push(`
		var origValue = value;
	`);
        let sanitized = false;
        if (schema.convert === true) {
          sanitized = true;
          src.push(`
			if (typeof value !== "number") {
				value = Number(value);
			}
		`);
        }
        src.push(`
		if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
			${this.makeError({ type: "number", actual: "origValue", messages })}
			return value;
		}
	`);
        if (schema.min != null) {
          src.push(`
			if (value < ${schema.min}) {
				${this.makeError({ type: "numberMin", expected: schema.min, actual: "origValue", messages })}
			}
		`);
        }
        if (schema.max != null) {
          src.push(`
			if (value > ${schema.max}) {
				${this.makeError({ type: "numberMax", expected: schema.max, actual: "origValue", messages })}
			}
		`);
        }
        if (schema.equal != null) {
          src.push(`
			if (value !== ${schema.equal}) {
				${this.makeError({ type: "numberEqual", expected: schema.equal, actual: "origValue", messages })}
			}
		`);
        }
        if (schema.notEqual != null) {
          src.push(`
			if (value === ${schema.notEqual}) {
				${this.makeError({ type: "numberNotEqual", expected: schema.notEqual, actual: "origValue", messages })}
			}
		`);
        }
        if (schema.integer === true) {
          src.push(`
			if (value % 1 !== 0) {
				${this.makeError({ type: "numberInteger", actual: "origValue", messages })}
			}
		`);
        }
        if (schema.step != null) {
          if (schema.step <= 0 || !Number.isFinite(schema.step))
            throw new Error(`Invalid '${schema.type}' schema. The 'step' field must be a positive number.`);
          const errorSrc = this.makeError({ type: "numberStep", expected: schema.step, actual: "origValue", messages });
          if (Number.isInteger(schema.step))
            src.push(`
				if (value % ${schema.step} !== 0) {
					${errorSrc}
				}
			`);
          else {
            const stepDecimals = schema.step.toString().split(".")[1].length;
            const multiplier = Math.pow(10, stepDecimals);
            const stepInt = Math.round(schema.step * multiplier);
            src.push(`
				if (!Number.isFinite(value)) {
					${errorSrc}
				} else {
					const valStr = value.toString();
					const valDotIdx = valStr.indexOf('.');
					const valDecimals = valDotIdx !== -1 ? valStr.length - valDotIdx - 1 : 0;

					if (valDecimals > ${stepDecimals}) {
						${errorSrc}
					} else {
						const valInt = Math.round(value * ${multiplier});
	
						if (valInt % ${stepInt} !== 0) {
							${errorSrc}
						}
					}
				}
			`);
          }
        }
        if (schema.positive === true) {
          src.push(`
			if (value <= 0) {
				${this.makeError({ type: "numberPositive", actual: "origValue", messages })}
			}
		`);
        }
        if (schema.negative === true) {
          src.push(`
			if (value >= 0) {
				${this.makeError({ type: "numberNegative", actual: "origValue", messages })}
			}
		`);
        }
        src.push(`
		return value;
	`);
        return {
          sanitized,
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/object.js
  var require_object = __commonJS({
    "lib/rules/object.js"(exports, module) {
      "use strict";
      var identifierRegex = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
      var escapeEvalRegex = /["'\\\n\r\u2028\u2029]/g;
      function escapeEvalString(str) {
        return str.replace(escapeEvalRegex, function(character) {
          switch (character) {
            case '"':
            case "'":
            case "\\":
              return "\\" + character;
            // Four possible LineTerminator characters need to be escaped:
            case "\n":
              return "\\n";
            case "\r":
              return "\\r";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
          }
        });
      }
      module.exports = function({ schema, messages }, path, context) {
        const sourceCode = [];
        sourceCode.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({ type: "object", actual: "value", messages })}
			return value;
		}
	`);
        const subSchema = schema.properties || schema.props;
        if (subSchema) {
          sourceCode.push("var parentObj = value;");
          sourceCode.push("var parentField = field;");
          const keys = Object.keys(subSchema).filter((key) => !this.isMetaKey(key));
          for (let i = 0; i < keys.length; i++) {
            const property = keys[i];
            const rule = this.getRuleFromSchema(subSchema[property]);
            const name = escapeEvalString(property);
            const safeSubName = identifierRegex.test(name) ? `.${name}` : `['${name}']`;
            const safePropName = `parentObj${safeSubName}`;
            const newPath = (path ? path + "." : "") + property;
            const labelName = rule.schema.label;
            const label = labelName ? `'${escapeEvalString(labelName)}'` : void 0;
            sourceCode.push(`
// Field: ${escapeEvalString(newPath)}`);
            sourceCode.push(`field = parentField ? parentField + "${safeSubName}" : "${name}";`);
            sourceCode.push(`value = ${safePropName};`);
            sourceCode.push(`label = ${label}`);
            const innerSource = `
				${safePropName} = ${context.async ? "await " : ""}context.fn[%%INDEX%%](value, field, parentObj, errors, context, label);
			`;
            sourceCode.push(this.compileRule(rule, context, newPath, innerSource, safePropName));
            if (this.opts.haltOnFirstError === true) {
              sourceCode.push("if (errors.length) return parentObj;");
            }
          }
          if (schema.strict) {
            const allowedProps = Object.keys(subSchema);
            sourceCode.push(`
				field = parentField;
				var invalidProps = [];
				var props = Object.keys(parentObj);

				for (let i = 0; i < props.length; i++) {
					if (${JSON.stringify(allowedProps)}.indexOf(props[i]) === -1) {
						invalidProps.push(props[i]);
					}
				}
				if (invalidProps.length) {
			`);
            if (schema.strict === "remove") {
              sourceCode.push(`
					if (errors.length === 0) {
				`);
              sourceCode.push(`
						invalidProps.forEach(function(field) {
							delete parentObj[field];
						});
				`);
              sourceCode.push(`
					}
				`);
            } else {
              sourceCode.push(`
					${this.makeError({ type: "objectStrict", expected: '"' + allowedProps.join(", ") + '"', actual: "invalidProps.join(', ')", messages })}
				`);
            }
            sourceCode.push(`
				}
			`);
          }
        }
        if (schema.minProps != null || schema.maxProps != null) {
          if (schema.strict) {
            sourceCode.push(`
				props = Object.keys(${subSchema ? "parentObj" : "value"});
			`);
          } else {
            sourceCode.push(`
				var props = Object.keys(${subSchema ? "parentObj" : "value"});
				${subSchema ? "field = parentField;" : ""}
			`);
          }
        }
        if (schema.minProps != null) {
          sourceCode.push(`
			if (props.length < ${schema.minProps}) {
				${this.makeError({ type: "objectMinProps", expected: schema.minProps, actual: "props.length", messages })}
			}
		`);
        }
        if (schema.maxProps != null) {
          sourceCode.push(`
			if (props.length > ${schema.maxProps}) {
				${this.makeError({ type: "objectMaxProps", expected: schema.maxProps, actual: "props.length", messages })}
			}
		`);
        }
        if (subSchema) {
          sourceCode.push(`
			return parentObj;
		`);
        } else {
          sourceCode.push(`
			return value;
		`);
        }
        return {
          source: sourceCode.join("\n")
        };
      };
    }
  });

  // lib/rules/objectID.js
  var require_objectID = __commonJS({
    "lib/rules/objectID.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages, index }, path, context) {
        const src = [];
        if (!context.customs[index]) context.customs[index] = { schema };
        else context.customs[index].schema = schema;
        src.push(`
		const ObjectID = context.customs[${index}].schema.ObjectID;
		if (!ObjectID.isValid(value)) {
			${this.makeError({ type: "objectID", actual: "value", messages })}
			return;
		}
	`);
        if (schema.convert === true) src.push("return new ObjectID(value)");
        else if (schema.convert === "hexString") src.push("return value.toString()");
        else src.push("return value");
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/record.js
  var require_record = __commonJS({
    "lib/rules/record.js"(exports, module) {
      function patchKeyRuleMessages(rule) {
        for (const type in rule.messages) {
          if (type.startsWith("string")) {
            rule.messages[type] = rule.messages[type].replace(" field ", " key ");
          }
        }
      }
      module.exports = function compileRecordRule({ schema, messages }, path, context) {
        const sourceCode = [];
        sourceCode.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({ type: "record", actual: "value", messages })}
			return value;
		}
	`);
        const keyRuleName = schema.key || "string";
        const valueRuleName = schema.value || "any";
        sourceCode.push(`
		const record = value;
		let sanitizedKey, sanitizedValue;
		const result = {};
		for (let key in value) {
	`);
        sourceCode.push("sanitizedKey = value = key;");
        const keyRule = this.getRuleFromSchema(keyRuleName);
        patchKeyRuleMessages(keyRule);
        const keyInnerSource = `
		sanitizedKey = ${context.async ? "await " : ""}context.fn[%%INDEX%%](key, field ? field + "." + key : key, record, errors, context);
	`;
        sourceCode.push(this.compileRule(keyRule, context, null, keyInnerSource, "sanitizedKey"));
        sourceCode.push("sanitizedValue = value = record[key];");
        const valueRule = this.getRuleFromSchema(valueRuleName);
        const valueInnerSource = `
		sanitizedValue = ${context.async ? "await " : ""}context.fn[%%INDEX%%](value, field ? field + "." + key : key, record, errors, context);
	`;
        sourceCode.push(this.compileRule(valueRule, context, `${path}[key]`, valueInnerSource, "sanitizedValue"));
        sourceCode.push("result[sanitizedKey] = sanitizedValue;");
        sourceCode.push(`
		}
	`);
        sourceCode.push("return result;");
        return {
          source: sourceCode.join("\n")
        };
      };
    }
  });

  // lib/rules/string.js
  var require_string = __commonJS({
    "lib/rules/string.js"(exports, module) {
      "use strict";
      var NUMERIC_PATTERN = /^-?[0-9]\d*(\.\d+)?$/;
      var ALPHA_PATTERN = /^[a-zA-Z]+$/;
      var ALPHANUM_PATTERN = /^[a-zA-Z0-9]+$/;
      var ALPHADASH_PATTERN = /^[a-zA-Z0-9_-]+$/;
      var HEX_PATTERN = /^[0-9a-fA-F]+$/;
      var BASE64_PATTERN = /^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
      module.exports = function checkString({ schema, messages }, path, context) {
        const src = [];
        let sanitized = false;
        if (schema.convert === true) {
          sanitized = true;
          src.push(`
			if (typeof value !== "string") {
				value = String(value);
			}
		`);
        }
        src.push(`
		if (typeof value !== "string") {
			${this.makeError({ type: "string", actual: "value", messages })}
			return value;
		}

		var origValue = value;
	`);
        if (schema.trim) {
          sanitized = true;
          src.push(`
			value = value.trim();
		`);
        }
        if (schema.trimLeft) {
          sanitized = true;
          src.push(`
			value = value.trimLeft();
		`);
        }
        if (schema.trimRight) {
          sanitized = true;
          src.push(`
			value = value.trimRight();
		`);
        }
        if (schema.padStart) {
          sanitized = true;
          const padChar = schema.padChar != null ? schema.padChar : " ";
          src.push(`
			value = value.padStart(${schema.padStart}, ${JSON.stringify(padChar)});
		`);
        }
        if (schema.padEnd) {
          sanitized = true;
          const padChar = schema.padChar != null ? schema.padChar : " ";
          src.push(`
			value = value.padEnd(${schema.padEnd}, ${JSON.stringify(padChar)});
		`);
        }
        if (schema.lowercase) {
          sanitized = true;
          src.push(`
			value = value.toLowerCase();
		`);
        }
        if (schema.uppercase) {
          sanitized = true;
          src.push(`
			value = value.toUpperCase();
		`);
        }
        if (schema.localeLowercase) {
          sanitized = true;
          src.push(`
			value = value.toLocaleLowerCase();
		`);
        }
        if (schema.localeUppercase) {
          sanitized = true;
          src.push(`
			value = value.toLocaleUpperCase();
		`);
        }
        src.push(`
			var len = value.length;
	`);
        if (schema.empty === false) {
          src.push(`
			if (len === 0) {
				${this.makeError({ type: "stringEmpty", actual: "value", messages })}
			}
		`);
        } else if (schema.empty === true) {
          src.push(`
			if (len === 0) {
				return value;
			}
		`);
        }
        if (schema.min != null) {
          src.push(`
			if (len < ${schema.min}) {
				${this.makeError({ type: "stringMin", expected: schema.min, actual: "len", messages })}
			}
		`);
        }
        if (schema.max != null) {
          src.push(`
			if (len > ${schema.max}) {
				${this.makeError({ type: "stringMax", expected: schema.max, actual: "len", messages })}
			}
		`);
        }
        if (schema.length != null) {
          src.push(`
			if (len !== ${schema.length}) {
				${this.makeError({ type: "stringLength", expected: schema.length, actual: "len", messages })}
			}
		`);
        }
        if (schema.pattern != null) {
          let pattern = schema.pattern;
          if (typeof schema.pattern == "string")
            pattern = new RegExp(schema.pattern, schema.patternFlags);
          src.push(`
			if (!${pattern.toString()}.test(value)) {
				${this.makeError({ type: "stringPattern", expected: `"${pattern.toString().replace(/"/g, "\\$&")}"`, actual: "origValue", messages })}
			}
		`);
        }
        if (schema.contains != null) {
          src.push(`
			if (value.indexOf("${schema.contains}") === -1) {
				${this.makeError({ type: "stringContains", expected: '"' + schema.contains + '"', actual: "origValue", messages })}
			}
		`);
        }
        if (schema.enum != null) {
          const enumStr = JSON.stringify(schema.enum);
          src.push(`
			if (${enumStr}.indexOf(value) === -1) {
				${this.makeError({ type: "stringEnum", expected: '"' + schema.enum.join(", ") + '"', actual: "origValue", messages })}
			}
		`);
        }
        if (schema.numeric === true) {
          src.push(`
			if (!${NUMERIC_PATTERN.toString()}.test(value) ) {
				${this.makeError({ type: "stringNumeric", actual: "origValue", messages })}
			}
		`);
        }
        if (schema.alpha === true) {
          src.push(`
			if(!${ALPHA_PATTERN.toString()}.test(value)) {
				${this.makeError({ type: "stringAlpha", actual: "origValue", messages })}
			}
		`);
        }
        if (schema.alphanum === true) {
          src.push(`
			if(!${ALPHANUM_PATTERN.toString()}.test(value)) {
				${this.makeError({ type: "stringAlphanum", actual: "origValue", messages })}
			}
		`);
        }
        if (schema.alphadash === true) {
          src.push(`
			if(!${ALPHADASH_PATTERN.toString()}.test(value)) {
				${this.makeError({ type: "stringAlphadash", actual: "origValue", messages })}
			}
		`);
        }
        if (schema.hex === true) {
          src.push(`
			if(value.length % 2 !== 0 || !${HEX_PATTERN.toString()}.test(value)) {
				${this.makeError({ type: "stringHex", actual: "origValue", messages })}
			}
		`);
        }
        if (schema.singleLine === true) {
          src.push(`
			if(value.includes("\\n")) {
				${this.makeError({ type: "stringSingleLine", messages })}
			}
		`);
        }
        if (schema.base64 === true) {
          src.push(`
			if(!${BASE64_PATTERN.toString()}.test(value)) {
				${this.makeError({ type: "stringBase64", actual: "origValue", messages })}
			}
		`);
        }
        src.push(`
		return value;
	`);
        return {
          sanitized,
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/tuple.js
  var require_tuple = __commonJS({
    "lib/rules/tuple.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        const src = [];
        if (schema.items != null) {
          if (!Array.isArray(schema.items)) {
            throw new Error(`Invalid '${schema.type}' schema. The 'items' field must be an array.`);
          }
          if (schema.items.length === 0) {
            throw new Error(`Invalid '${schema.type}' schema. The 'items' field must not be an empty array.`);
          }
        }
        src.push(`
		if (!Array.isArray(value)) {
			${this.makeError({ type: "tuple", actual: "value", messages })}
			return value;
		}

		var len = value.length;
	`);
        if (schema.empty === false) {
          src.push(`
			if (len === 0) {
				${this.makeError({ type: "tupleEmpty", actual: "value", messages })}
				return value;
			}
		`);
        }
        if (schema.items != null) {
          src.push(`
			if (${schema.empty} !== false && len === 0) {
				return value;
			}

			if (len !== ${schema.items.length}) {
				${this.makeError({ type: "tupleLength", expected: schema.items.length, actual: "len", messages })}
				return value;
			}
		`);
          src.push(`
			var arr = value;
			var parentField = field;
		`);
          for (let i = 0; i < schema.items.length; i++) {
            src.push(`
			value = arr[${i}];
		`);
            const itemPath = `${path}[${i}]`;
            const rule = this.getRuleFromSchema(schema.items[i]);
            const innerSource = `
			arr[${i}] = ${context.async ? "await " : ""}context.fn[%%INDEX%%](arr[${i}], (parentField ? parentField : "") + "[" + ${i} + "]", parent, errors, context);
		`;
            src.push(this.compileRule(rule, context, itemPath, innerSource, `arr[${i}]`));
          }
          src.push(`
		return arr;
	`);
        } else {
          src.push(`
		return value;
	`);
        }
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/url.js
  var require_url = __commonJS({
    "lib/rules/url.js"(exports, module) {
      "use strict";
      var PATTERN = /^https?:\/\/\S+/;
      module.exports = function({ schema, messages }, path, context) {
        const src = [];
        src.push(`
		if (typeof value !== "string") {
			${this.makeError({ type: "string", actual: "value", messages })}
			return value;
		}
	`);
        if (!schema.empty) {
          src.push(`
			if (value.length === 0) {
				${this.makeError({ type: "urlEmpty", actual: "value", messages })}
				return value;
			}
		`);
        } else {
          src.push(`
			if (value.length === 0) return value;
		`);
        }
        src.push(`
		if (!${PATTERN.toString()}.test(value)) {
			${this.makeError({ type: "url", actual: "value", messages })}
		}

		return value;
	`);
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/uuid.js
  var require_uuid = __commonJS({
    "lib/rules/uuid.js"(exports, module) {
      "use strict";
      var PATTERN = /^([0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;
      module.exports = function({ schema, messages }, path) {
        const src = [];
        src.push(`
		if (typeof value !== "string") {
			${this.makeError({ type: "string", actual: "value", messages })}
			return value;
		}

		var val = value.toLowerCase();
		if (!${PATTERN.toString()}.test(val)) {
			${this.makeError({ type: "uuid", actual: "value", messages })}
			return value;
		}

		const version = val.charAt(14) | 0;
	`);
        if (parseInt(schema.version) < 9) {
          src.push(`
			if (${schema.version} !== version) {
				${this.makeError({ type: "uuidVersion", expected: schema.version, actual: "version", messages })}
				return value;
			}
		`);
        }
        src.push(`
		switch (version) {
		case 0:
		case 1:
		case 2:
		case 6:
			break;
		case 3:
		case 4:
		case 5:
  		case 7:
		case 8:
			if (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {
				${this.makeError({ type: "uuid", actual: "value", messages })}
			}
		}

		return value;
	`);
        return {
          source: src.join("\n")
        };
      };
    }
  });

  // lib/rules/mac.js
  var require_mac = __commonJS({
    "lib/rules/mac.js"(exports, module) {
      "use strict";
      var PATTERN = /^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;
      module.exports = function({ schema, messages }, path, context) {
        return {
          source: `
			if (typeof value !== "string") {
				${this.makeError({ type: "string", actual: "value", messages })}
				return value;
			}

			var v = value.toLowerCase();
			if (!${PATTERN.toString()}.test(v)) {
				${this.makeError({ type: "mac", actual: "value", messages })}
			}
			
			return value;
		`
        };
      };
    }
  });

  // lib/rules/luhn.js
  var require_luhn = __commonJS({
    "lib/rules/luhn.js"(exports, module) {
      "use strict";
      module.exports = function({ schema, messages }, path, context) {
        return {
          source: `
			if (typeof value !== "string") {
				${this.makeError({ type: "string", actual: "value", messages })}
				return value;
			}

			if (typeof value !== "string")
				value = String(value);

			val = value.replace(/\\D+/g, "");

			var array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
			var len = val ? val.length : 0,
				bit = 1,
				sum = 0;
			while (len--) {
				sum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];
			}

			if (!(sum % 10 === 0 && sum > 0)) {
				${this.makeError({ type: "luhn", actual: "value", messages })}
			}

			return value;
		`
        };
      };
    }
  });

  // lib/helpers/prettier.js
  var require_prettier = __commonJS({
    "lib/helpers/prettier.js"(exports, module) {
      var prettier;
      var prettierOpts;
      var hljs;
      var hljsOpts;
      var mod1 = "prettier";
      var mod2 = "cli-highlight";
      module.exports = function(source) {
        if (!prettier) {
          prettier = __require(mod1);
          prettierOpts = {
            parser: "babel",
            useTabs: false,
            printWidth: 120,
            trailingComma: "none",
            tabWidth: 4,
            singleQuote: false,
            semi: true,
            bracketSpacing: true
          };
          hljs = __require(mod2);
          hljsOpts = {
            language: "js",
            theme: hljs.fromJson({
              keyword: ["white", "bold"],
              built_in: "magenta",
              literal: "cyan",
              number: "magenta",
              regexp: "red",
              string: ["yellow", "bold"],
              symbol: "plain",
              class: "blue",
              attr: "plain",
              function: ["white", "bold"],
              title: "plain",
              params: "green",
              comment: "grey"
            })
          };
        }
        const res = prettier.format(source, prettierOpts);
        return hljs.highlight(res, hljsOpts);
      };
    }
  });

  // lib/validator.js
  var require_validator = __commonJS({
    "lib/validator.js"(exports, module) {
      "use strict";
      var AsyncFunction;
      try {
        AsyncFunction = new Function("return Object.getPrototypeOf(async function(){}).constructor")();
      } catch (err) {
      }
      var deepExtend = require_deep_extend();
      var replace = require_replace();
      function loadMessages() {
        return Object.assign({}, require_messages());
      }
      function loadRules() {
        return {
          any: require_any(),
          array: require_array(),
          boolean: require_boolean(),
          class: require_class(),
          custom: require_custom(),
          currency: require_currency(),
          date: require_date(),
          email: require_email(),
          enum: require_enum(),
          equal: require_equal(),
          forbidden: require_forbidden(),
          function: require_function(),
          multi: require_multi(),
          pipe: require_pipe(),
          number: require_number(),
          object: require_object(),
          objectID: require_objectID(),
          record: require_record(),
          string: require_string(),
          tuple: require_tuple(),
          url: require_url(),
          uuid: require_uuid(),
          mac: require_mac(),
          luhn: require_luhn()
        };
      }
      var Validator = class {
        /**
         * Validator class constructor
         *
         * @param {Object} opts
         */
        constructor(opts) {
          this.opts = {};
          this.defaults = {};
          this.messages = loadMessages();
          this.rules = loadRules();
          this.aliases = {};
          this.cache = /* @__PURE__ */ new Map();
          this.customFunctions = {};
          if (opts) {
            deepExtend(this.opts, opts);
            if (opts.defaults) deepExtend(this.defaults, opts.defaults);
            if (opts.messages) {
              for (const messageName in opts.messages) this.addMessage(messageName, opts.messages[messageName]);
            }
            if (opts.aliases) {
              for (const aliasName in opts.aliases) this.alias(aliasName, opts.aliases[aliasName]);
            }
            if (opts.customRules) {
              for (const ruleName in opts.customRules) this.add(ruleName, opts.customRules[ruleName]);
            }
            if (opts.customFunctions) {
              for (const customName in opts.customFunctions) this.addCustomFunction(customName, opts.customFunctions[customName]);
            }
            if (opts.plugins) {
              const plugins = opts.plugins;
              if (!Array.isArray(plugins)) throw new Error("Plugins type must be array");
              plugins.forEach(this.plugin.bind(this));
            }
            if (this.opts.debug) {
              let formatter = function(code) {
                return code;
              };
              if (typeof window === "undefined") {
                formatter = require_prettier();
              }
              this._formatter = formatter;
            }
          }
        }
        /**
         * Validate an object by schema
         *
         * @param {Object} obj
         * @param {Object} schema
         * @returns {Array<Object>|boolean}
         */
        validate(obj, schema) {
          const check = this.compile(schema);
          return check(obj);
        }
        /**
         * Wrap a source code with `required` & `optional` checker codes.
         * @param {Object} rule
         * @param {String} innerSrc
         * @param {String?} resVar
         * @returns {String}
         */
        wrapRequiredCheckSourceCode(rule, innerSrc, context, resVar) {
          const src = [];
          const { considerNullAsAValue = false } = this.opts;
          let handleNoValue;
          let skipUndefinedValue = rule.schema.optional === true || rule.schema.type === "forbidden";
          let skipNullValue = considerNullAsAValue ? rule.schema.nullable !== false || rule.schema.type === "forbidden" : rule.schema.optional === true || rule.schema.nullable === true || rule.schema.type === "forbidden";
          const ruleHasDefault = considerNullAsAValue ? rule.schema.default != void 0 && rule.schema.default != null : rule.schema.default != void 0;
          if (ruleHasDefault) {
            skipUndefinedValue = false;
            if (considerNullAsAValue) {
              if (rule.schema.nullable === false) skipNullValue = false;
            } else {
              if (rule.schema.nullable !== true) skipNullValue = false;
            }
            let defaultValue;
            if (typeof rule.schema.default === "function") {
              if (!context.customs[rule.index]) context.customs[rule.index] = {};
              context.customs[rule.index].defaultFn = rule.schema.default;
              defaultValue = `context.customs[${rule.index}].defaultFn.call(this, context.rules[${rule.index}].schema, field, parent, context)`;
            } else {
              defaultValue = JSON.stringify(rule.schema.default);
            }
            handleNoValue = `
				value = ${defaultValue};
				${resVar} = value;
			`;
          } else {
            handleNoValue = this.makeError({ type: "required", actual: "value", messages: rule.messages });
          }
          src.push(`
			${`if (value === undefined) { ${skipUndefinedValue ? "\n// allow undefined\n" : handleNoValue} }`}
			${`else if (value === null) { ${skipNullValue ? "\n// allow null\n" : handleNoValue} }`}
			${innerSrc ? `else { ${innerSrc} }` : ""}
		`);
          return src.join("\n");
        }
        /**
         * check if the key is a meta key
         *
         * @param key
         * @return {boolean}
         */
        isMetaKey(key) {
          return key.startsWith("$$");
        }
        /**
         * will remove all "metas" keys (keys starting with $$)
         *
         * @param obj
         */
        removeMetasKeys(obj) {
          Object.keys(obj).forEach((key) => {
            if (!this.isMetaKey(key)) {
              return;
            }
            delete obj[key];
          });
        }
        /**
         * Compile a schema
         *
         * @param {Object} schema
         * @throws {Error} Invalid schema
         * @returns {Function}
         */
        compile(schema) {
          if (schema === null || typeof schema !== "object") {
            throw new Error("Invalid schema.");
          }
          const self = this;
          const context = {
            index: 0,
            async: schema.$$async === true,
            rules: [],
            fn: [],
            customs: {},
            customFunctions: this.customFunctions,
            utils: {
              replace
            }
          };
          this.cache.clear();
          delete schema.$$async;
          if (context.async && !AsyncFunction) {
            throw new Error("Asynchronous mode is not supported.");
          }
          if (schema.$$root !== true) {
            if (Array.isArray(schema)) {
              const rule2 = this.getRuleFromSchema(schema);
              schema = rule2.schema;
            } else {
              const prevSchema = Object.assign({}, schema);
              schema = {
                type: "object",
                strict: prevSchema.$$strict,
                properties: prevSchema
              };
              this.removeMetasKeys(prevSchema);
            }
          }
          const sourceCode = [
            "var errors = [];",
            "var field;",
            "var parent = null;",
            `var label = ${schema.label ? '"' + schema.label + '"' : "null"};`
          ];
          const rule = this.getRuleFromSchema(schema);
          sourceCode.push(this.compileRule(rule, context, null, `${context.async ? "await " : ""}context.fn[%%INDEX%%](value, field, null, errors, context, label);`, "value"));
          sourceCode.push("if (errors.length) {");
          sourceCode.push(`
			return errors.map(err => {
				if (err.message) {
					err.message = context.utils.replace(err.message, /\\{field\\}/g, err.label || err.field);
					err.message = context.utils.replace(err.message, /\\{expected\\}/g, err.expected);
					err.message = context.utils.replace(err.message, /\\{actual\\}/g, err.actual);
				}
				if(!err.label) delete err.label
				return err;
			});
		`);
          sourceCode.push("}");
          sourceCode.push("return true;");
          const src = sourceCode.join("\n");
          const FnClass = context.async ? AsyncFunction : Function;
          const checkFn = new FnClass("value", "context", src);
          if (this.opts.debug) {
            console.log(this._formatter("// Main check function\n" + checkFn.toString()));
          }
          this.cache.clear();
          const resFn = function(data, opts) {
            context.data = data;
            if (opts && opts.meta)
              context.meta = opts.meta;
            return checkFn.call(self, data, context);
          };
          resFn.async = context.async;
          return resFn;
        }
        /**
         * Compile a rule to source code.
         * @param {Object} rule
         * @param {Object} context
         * @param {String} path
         * @param {String} innerSrc
         * @param {String} resVar
         * @returns {String}
         */
        compileRule(rule, context, path, innerSrc, resVar) {
          const sourceCode = [];
          const item = this.cache.get(rule.schema);
          if (item) {
            rule = item;
            rule.cycle = true;
            rule.cycleStack = [];
            sourceCode.push(this.wrapRequiredCheckSourceCode(rule, `
				var rule = context.rules[${rule.index}];
				if (rule.cycleStack.indexOf(value) === -1) {
					rule.cycleStack.push(value);
					${innerSrc.replace(/%%INDEX%%/g, rule.index)}
					rule.cycleStack.pop(value);
				}
			`, context, resVar));
          } else {
            this.cache.set(rule.schema, rule);
            rule.index = context.index;
            context.rules[context.index] = rule;
            const customPath = path != null ? path : "$$root";
            context.index++;
            const res = rule.ruleFunction.call(this, rule, path, context);
            res.source = res.source.replace(/%%INDEX%%/g, rule.index);
            const FnClass = context.async ? AsyncFunction : Function;
            const fn = new FnClass("value", "field", "parent", "errors", "context", "label", res.source);
            context.fn[rule.index] = fn.bind(this);
            sourceCode.push(this.wrapRequiredCheckSourceCode(rule, innerSrc.replace(/%%INDEX%%/g, rule.index), context, resVar));
            sourceCode.push(this.makeCustomValidator({ vName: resVar, path: customPath, schema: rule.schema, context, messages: rule.messages, ruleIndex: rule.index }));
            if (this.opts.debug) {
              console.log(this._formatter(`// Context.fn[${rule.index}]
` + fn.toString()));
            }
          }
          return sourceCode.join("\n");
        }
        /**
         * Create a rule instance from schema definition.
         * @param {Object} schema
         * @returns {Object} rule
         */
        getRuleFromSchema(schema) {
          schema = this.resolveType(schema);
          const alias = this.aliases[schema.type];
          if (alias) {
            delete schema.type;
            schema = deepExtend(schema, alias, { skipIfExist: true });
          }
          const ruleFunction = this.rules[schema.type];
          if (!ruleFunction)
            throw new Error("Invalid '" + schema.type + "' type in validator schema.");
          const rule = {
            messages: Object.assign({}, this.messages, schema.messages),
            schema: deepExtend(schema, this.defaults[schema.type], { skipIfExist: true }),
            ruleFunction
          };
          return rule;
        }
        /**
         * Parse rule from shorthand string
         * @param {String} str shorthand string
         * @param {Object} schema schema reference
         */
        parseShortHand(str) {
          const p = str.split("|").map((s) => s.trim());
          let type = p[0];
          let schema;
          if (type.endsWith("[]")) {
            schema = this.getRuleFromSchema({ type: "array", items: type.slice(0, -2) }).schema;
          } else {
            schema = {
              type: p[0]
            };
          }
          p.slice(1).forEach((s) => {
            const idx = s.indexOf(":");
            if (idx !== -1) {
              const key = s.substring(0, idx).trim();
              let value = s.substring(idx + 1).trim();
              if (value === "true" || value === "false")
                value = value === "true";
              else if (!Number.isNaN(Number(value))) {
                value = Number(value);
              }
              schema[key] = value;
            } else {
              if (s.startsWith("no-")) schema[s.slice(3)] = false;
              else schema[s] = true;
            }
          });
          return schema;
        }
        /**
         * Generate error source code.
         * @param {Object} opts
         * @param {String} opts.type
         * @param {String} opts.field
         * @param {any} opts.expected
         * @param {any} opts.actual
         * @param {Object} opts.messages
         */
        makeError({ type, field, expected, actual, messages }) {
          const o = {
            type: `"${type}"`,
            message: `"${messages[type]}"`
          };
          if (field) o.field = `"${field}"`;
          else o.field = "field";
          if (expected != null) o.expected = expected;
          if (actual != null) o.actual = actual;
          o.label = "label";
          const s = Object.keys(o).map((key) => `${key}: ${o[key]}`).join(", ");
          return `errors.push({ ${s} });`;
        }
        /**
         * Generate custom validator function source code.
         * @param {Object} opts
         * @param {String} opts.vName
         * @param {String} opts.fnName
         * @param {String} opts.ruleIndex
         * @param {String} opts.path
         * @param {Object} opts.schema
         * @param {Object} opts.context
        	 * @param {Object} opts.messages
         */
        makeCustomValidator({ vName = "value", fnName = "custom", ruleIndex, path, schema, context, messages }) {
          const ruleVName = "rule" + ruleIndex;
          const fnCustomErrorsVName = "fnCustomErrors" + ruleIndex;
          if (typeof schema[fnName] == "function" || Array.isArray(schema[fnName])) {
            if (context.customs[ruleIndex]) {
              context.customs[ruleIndex].messages = messages;
              context.customs[ruleIndex].schema = schema;
            } else {
              context.customs[ruleIndex] = { messages, schema };
            }
            const ret = [];
            if (this.opts.useNewCustomCheckerFunction) {
              ret.push(`
               		const ${ruleVName} = context.customs[${ruleIndex}];
					const ${fnCustomErrorsVName} = [];
				`);
              if (Array.isArray(schema[fnName])) {
                for (let i = 0; i < schema[fnName].length; i++) {
                  let custom = schema[fnName][i];
                  if (typeof custom === "string") {
                    custom = this.parseShortHand(custom);
                    schema[fnName][i] = custom;
                  }
                  const customIndex = ruleIndex * 1e3 + i;
                  context.customs[customIndex] = { messages, schema: Object.assign({}, schema, { custom, index: i }) };
                  ret.push(`
							const ${ruleVName}_${i} = context.customs[${customIndex}];

					 	`);
                  if (custom.type) {
                    ret.push(`
							 ${vName} = ${context.async ? "await " : ""}context.customFunctions[${ruleVName}.schema.${fnName}[${i}].type].call(this, ${vName}, ${fnCustomErrorsVName} , ${ruleVName}_${i}.schema, "${path}", parent, context);
							`);
                  }
                  if (typeof custom === "function") {
                    ret.push(`
							${vName} = ${context.async ? "await " : ""}${ruleVName}.schema.${fnName}[${i}].call(this, ${vName}, ${fnCustomErrorsVName} , ${ruleVName}.schema, "${path}", parent, context);
							`);
                  }
                }
              } else {
                ret.push(`
					${vName} = ${context.async ? "await " : ""}${ruleVName}.schema.${fnName}.call(this, ${vName}, ${fnCustomErrorsVName} , ${ruleVName}.schema, "${path}", parent, context);
					`);
              }
              ret.push(`
					if (Array.isArray(${fnCustomErrorsVName} )) {
                  		${fnCustomErrorsVName} .forEach(err => errors.push(Object.assign({ message: ${ruleVName}.messages[err.type], field }, err)));
					}
				`);
            } else {
              const result = "res_" + ruleVName;
              ret.push(`
					const ${ruleVName} = context.customs[${ruleIndex}];
					const ${result} = ${context.async ? "await " : ""}${ruleVName}.schema.${fnName}.call(this, ${vName}, ${ruleVName}.schema, "${path}", parent, context);
					if (Array.isArray(${result})) {
						${result}.forEach(err => errors.push(Object.assign({ message: ${ruleVName}.messages[err.type], field }, err)));
					}
			`);
            }
            return ret.join("\n");
          }
          return "";
        }
        /**
         * Add a custom rule
         *
         * @param {String} type
         * @param {Function} fn
         */
        add(type, fn) {
          this.rules[type] = fn;
        }
        /**
         * Add a custom function
         *
         * @param {String} type
         * @param {Function} fn
         */
        addCustomFunction(name, fn) {
          this.customFunctions[name] = fn;
        }
        /**
         * Add a message
         *
         * @param {String} name
         * @param {String} message
         */
        addMessage(name, message) {
          this.messages[name] = message;
        }
        /**
         * create alias name for a rule
         *
         * @param {String} name
         * @param validationRule
         */
        alias(name, validationRule) {
          if (this.rules[name]) throw new Error("Alias name must not be a rule name");
          this.aliases[name] = validationRule;
        }
        /**
         * Add a plugin
         *
         * @param {Function} fn
         */
        plugin(fn) {
          if (typeof fn !== "function") throw new Error("Plugin fn type must be function");
          return fn(this);
        }
        /**
         * Resolve the schema 'type' by:
         * - parsing short hands into full type definitions
         * - expanding arrays into 'multi' types with a rules property
         * - objects which have a root $$type property into a schema which
         *   explicitly has a 'type' property and a 'props' property.
         *
         * @param schema The schema to resolve the type of
         */
        resolveType(schema) {
          if (typeof schema === "string") {
            schema = this.parseShortHand(schema);
          } else if (Array.isArray(schema)) {
            if (schema.length === 0)
              throw new Error("Invalid schema.");
            schema = {
              type: "multi",
              rules: schema
            };
            const isOptional = schema.rules.map((s) => this.getRuleFromSchema(s)).every((rule) => rule.schema.optional === true);
            if (isOptional)
              schema.optional = true;
            const nullCheck = this.opts.considerNullAsAValue ? false : true;
            const setNullable = schema.rules.map((s) => this.getRuleFromSchema(s)).every((rule) => rule.schema.nullable === nullCheck);
            if (setNullable)
              schema.nullable = nullCheck;
          }
          if (schema.$$type) {
            const type = schema.$$type;
            const otherShorthandProps = this.getRuleFromSchema(type).schema;
            delete schema.$$type;
            const props = Object.assign({}, schema);
            for (const key in schema) {
              delete schema[key];
            }
            deepExtend(schema, otherShorthandProps, { skipIfExist: true });
            schema.props = props;
          }
          return schema;
        }
        /**
         * Normalize a schema, type or short hand definition by expanding it to a full form. The 'normalized'
         * form is the equivalent schema with any short hands undone. This ensure that each rule; always includes
         * a 'type' key, arrays always have an 'items' key, 'multi' always have a 'rules' key and objects always
         * have their properties defined in a 'props' key
         *
         * @param {Object|String} value The value to normalize
         * @returns {Object} The normalized form of the given rule or schema
         */
        normalize(value) {
          let result = this.resolveType(value);
          if (this.aliases[result.type])
            result = deepExtend(result, this.normalize(this.aliases[result.type]), { skipIfExists: true });
          result = deepExtend(result, this.defaults[result.type], { skipIfExist: true });
          if (result.type === "multi") {
            result.rules = result.rules.map((r) => this.normalize(r));
            result.optional = result.rules.every((r) => r.optional === true);
            return result;
          }
          if (result.type === "array") {
            result.items = this.normalize(result.items);
            return result;
          }
          if (result.type === "object") {
            if (result.props) {
              Object.entries(result.props).forEach(([k, v]) => result.props[k] = this.normalize(v));
            }
          }
          if (typeof value === "object") {
            if (value.type) {
              const config = this.normalize(value.type);
              deepExtend(result, config, { skipIfExists: true });
            } else {
              Object.entries(value).forEach(([k, v]) => result[k] = this.normalize(v));
            }
          }
          return result;
        }
      };
      module.exports = Validator;
    }
  });

  // index.js
  var require_index = __commonJS({
    "index.js"(exports, module) {
      module.exports = require_validator();
    }
  });
  return require_index();
})();
return FastestValidator;
}));
//# sourceMappingURL=index.js.map
