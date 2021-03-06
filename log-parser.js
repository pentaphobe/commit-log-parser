/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$DefaultTracer() {
  this.indentLevel = 0;
}

peg$DefaultTracer.prototype.trace = function(event) {
  var that = this;

  function log(event) {
    function repeat(string, n) {
       var result = "", i;

       for (i = 0; i < n; i++) {
         result += string;
       }

       return result;
    }

    function pad(string, length) {
      return string + repeat(" ", length - string.length);
    }

    if (typeof console === "object") {
      console.log(
        event.location.start.line + ":" + event.location.start.column + "-"
          + event.location.end.line + ":" + event.location.end.column + " "
          + pad(event.type, 10) + " "
          + repeat("  ", that.indentLevel) + event.rule
      );
    }
  }

  switch (event.type) {
    case "rule.enter":
      log(event);
      this.indentLevel++;
      break;

    case "rule.match":
      this.indentLevel--;
      log(event);
      break;

    case "rule.fail":
      this.indentLevel--;
      log(event);
      break;

    default:
      throw new Error("Invalid event type: " + event.type + ".");
  }
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { Log: peg$parseLog },
      peg$startRuleFunction  = peg$parseLog,

      peg$c0 = peg$otherExpectation("log"),
      peg$c1 = ":",
      peg$c2 = peg$literalExpectation(":", false),
      peg$c3 = function(type, scope, issues, tag, title, body) {
          	return {
            	type,
              scope,
              issues,
              tag,
              title,
              body
            }
          },
      peg$c4 = peg$otherExpectation("scope"),
      peg$c5 = "(",
      peg$c6 = peg$literalExpectation("(", false),
      peg$c7 = ")",
      peg$c8 = peg$literalExpectation(")", false),
      peg$c9 = function(scope) {
          	return scope
          },
      peg$c10 = peg$otherExpectation("type"),
      peg$c11 = function(type) {
          	return text()
          },
      peg$c12 = peg$otherExpectation("issues"),
      peg$c13 = function(issue, rest) {
          	return text()
          },
      peg$c14 = peg$otherExpectation("issue"),
      peg$c15 = "[#",
      peg$c16 = peg$literalExpectation("[#", false),
      peg$c17 = "]",
      peg$c18 = peg$literalExpectation("]", false),
      peg$c19 = function(id) {
          	return id
          },
      peg$c20 = peg$otherExpectation("typeName"),
      peg$c21 = /^[a-z]/,
      peg$c22 = peg$classExpectation([["a", "z"]], false, false),
      peg$c23 = function() {
      	  	return text()
      	  },
      peg$c24 = peg$otherExpectation("tag"),
      peg$c25 = /^[A-Z]/,
      peg$c26 = peg$classExpectation([["A", "Z"]], false, false),
      peg$c27 = function() { return text() },
      peg$c28 = peg$otherExpectation("title"),
      peg$c29 = /^[^\n]/,
      peg$c30 = peg$classExpectation(["\n"], true, false),
      peg$c31 = peg$otherExpectation("alphanumeric"),
      peg$c32 = /^[A-Za-z0-9]/,
      peg$c33 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"]], false, false),
      peg$c34 = peg$otherExpectation("newline"),
      peg$c35 = /^[\n\r]/,
      peg$c36 = peg$classExpectation(["\n", "\r"], false, false),
      peg$c37 = peg$otherExpectation("body"),
      peg$c38 = peg$anyExpectation(),
      peg$c39 = function() {
          	return text()
          },
      peg$c40 = peg$otherExpectation("whitespace"),
      peg$c41 = /^[ \ts\n\r]/,
      peg$c42 = peg$classExpectation([" ", "\t", "s", "\n", "\r"], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$tracer = "tracer" in options ? options.tracer : new peg$DefaultTracer(),

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseLog() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Log",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseType();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseScope();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseIssues();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parseTag();
                if (s7 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 58) {
                    s8 = peg$c1;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c2); }
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseTitle();
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parseNewline();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$parseNewline();
                        if (s11 === peg$FAILED) {
                          s11 = null;
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parseBody();
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c3(s1, s3, s5, s7, s9, s12);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c0); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Log",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Log",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseScope() {
    var s0, s1, s2, s3,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Scope",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c5;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c6); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseAlphaNumeric();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 41) {
          s3 = peg$c7;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c9(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Scope",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Scope",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseType() {
    var s0, s1,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Type",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseTypeName();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c11(s1);
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c10); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Type",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Type",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseIssues() {
    var s0, s1, s2,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Issues",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$parseIssue();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseIssue();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseIssues();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c13(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c12); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Issues",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Issues",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseIssue() {
    var s0, s1, s2, s3,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Issue",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c15) {
      s1 = peg$c15;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c16); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseAlphaNumeric();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 93) {
          s3 = peg$c17;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c19(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c14); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Issue",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Issue",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseTypeName() {
    var s0, s1, s2,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "TypeName",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c21.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c22); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c21.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c22); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c23();
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c20); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "TypeName",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "TypeName",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseTag() {
    var s0, s1, s2,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Tag",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c25.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c26); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c25.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c26); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c27();
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c24); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Tag",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Tag",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseTitle() {
    var s0, s1, s2,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Title",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c29.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c30); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c29.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c30); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c27();
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c28); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Title",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Title",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseAlphaNumeric() {
    var s0, s1, s2,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "AlphaNumeric",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (peg$c32.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c33); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c32.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c33); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c27();
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c31); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "AlphaNumeric",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "AlphaNumeric",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseNewline() {
    var s0, s1,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Newline",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    if (peg$c35.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c36); }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c34); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Newline",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Newline",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parseBody() {
    var s0, s1, s2,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "Body",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (input.length > peg$currPos) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c38); }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      if (input.length > peg$currPos) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c39();
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c37); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "Body",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "Body",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1,
        startPos = peg$currPos;

    peg$tracer.trace({
      type:     "rule.enter",
      rule:     "_",
      location: peg$computeLocation(startPos, startPos)
    });

    peg$silentFails++;
    if (peg$c41.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c42); }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c40); }
    }

    if (s0 !== peg$FAILED) {
      peg$tracer.trace({
        type:   "rule.match",
        rule:   "_",
        result: s0,
        location: peg$computeLocation(startPos, peg$currPos)
      });
    } else {
      peg$tracer.trace({
        type: "rule.fail",
        rule: "_",
        location: peg$computeLocation(startPos, startPos)
      });
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError:   peg$SyntaxError,
  DefaultTracer: peg$DefaultTracer,
  parse:         peg$parse
};
