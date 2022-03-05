/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP bailout-no-raison.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout-no-raison.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out!

`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out!

`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out!

`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out!

`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out!

`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out!

`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out!

`

exports[`test/parser.js TAP bailout-no-raison.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out!

`

exports[`test/parser.js TAP bailout.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "Bail out! GERONIMMMOOOOOO!!!\\n",
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "GERONIMMMOOOOOO!!!",
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "Bail out! GERONIMMMOOOOOO!!!\\n",
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "GERONIMMMOOOOOO!!!",
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "GERONIMMMOOOOOO!!!",
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out! GERONIMMMOOOOOO!!!

`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out! GERONIMMMOOOOOO!!!

`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "GERONIMMMOOOOOO!!!",
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out! GERONIMMMOOOOOO!!!

`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out! GERONIMMMOOOOOO!!!

`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "GERONIMMMOOOOOO!!!",
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out! GERONIMMMOOOOOO!!!

`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out! GERONIMMMOOOOOO!!!

`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "bailout",
    "GERONIMMMOOOOOO!!!",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "GERONIMMMOOOOOO!!!",
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out! GERONIMMMOOOOOO!!!

`

exports[`test/parser.js TAP bailout.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..5
ok 1
ok 2
ok 3
Bail out! GERONIMMMOOOOOO!!!

`

exports[`test/parser.js TAP basic.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..6
not ok 1
Bail out!

`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..6
not ok 1
Bail out!

`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..6
not ok 1
ok 2
not ok 3
ok 4
ok 5
# test count(5) != plan(6)
# failed 2 of 5 tests

`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..6
not ok 1
ok 2
not ok 3
ok 4
ok 5
# test count(5) != plan(6)
# failed 2 of 5 tests

`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(5) != plan(6)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..6
not ok 1
ok 2
not ok 3
ok 4
ok 5
# test count(5) != plan(6)
# failed 2 of 5 tests

`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..6
not ok 1
ok 2
not ok 3
ok 4
ok 5
# test count(5) != plan(6)
# failed 2 of 5 tests

`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..6
not ok 1
Bail out!

`

exports[`test/parser.js TAP basic.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..6
not ok 1
Bail out!

`

exports[`test/parser.js TAP big-last.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
      "plan": Object {
        "end": 5,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 6,
          "ok": true,
          "plan": Object {
            "end": 5,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser.js TAP big-last.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..5
ok 1
ok 2
ok 3
ok 4
ok 6
# failed 1 of 5 tests

`

exports[`test/parser.js TAP bignum.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 136211425\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 136211426\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 136211425\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 136211426\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211425,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 136211426,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 136211425,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 136211426,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser.js TAP bignum.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)
# failed 2 of 4 tests

`

exports[`test/parser.js TAP bignum_many.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 99997\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 99998\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 99999\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100000\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100001\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100002\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100003\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100004\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100005\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 9,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 99997,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99998,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99999,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100000,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100001,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100002,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100003,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100004,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100005,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 99997\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 99998\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 99999\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100000\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100001\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100002\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100003\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100004\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "ok 100005\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "line",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 9,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 99997,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99998,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99999,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100000,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100001,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100002,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100003,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100004,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100005,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 9,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 99997,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99998,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99999,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100000,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100001,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100002,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100003,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100004,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100005,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..2
ok 1
ok 2
ok 99997
ok 99998
ok 99999
ok 100000
ok 100001
ok 100002
ok 100003
ok 100004
ok 100005
# test count(11) != plan(2)
# failed 9 of 11 tests

`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 99997
ok 99998
ok 99999
ok 100000
ok 100001
ok 100002
ok 100003
ok 100004
ok 100005
# test count(11) != plan(2)
# failed 9 of 11 tests

`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 9,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 99997,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99998,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99999,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100000,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100001,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100002,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100003,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100004,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100005,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..2
ok 1
ok 2
ok 99997
ok 99998
ok 99999
ok 100000
ok 100001
ok 100002
ok 100003
ok 100004
ok 100005
# test count(11) != plan(2)
# failed 9 of 11 tests

`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 99997
ok 99998
ok 99999
ok 100000
ok 100001
ok 100002
ok 100003
ok 100004
ok 100005
# test count(11) != plan(2)
# failed 9 of 11 tests

`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 9,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 99997,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99998,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99999,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100000,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100001,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100002,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100003,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100004,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100005,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..2
ok 1
ok 2
ok 99997
ok 99998
ok 99999
ok 100000
ok 100001
ok 100002
ok 100003
ok 100004
ok 100005
# test count(11) != plan(2)
# failed 9 of 11 tests

`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 99997
ok 99998
ok 99999
ok 100000
ok 100001
ok 100002
ok 100003
ok 100004
ok 100005
# test count(11) != plan(2)
# failed 9 of 11 tests

`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99997,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99998,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 99999,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100000,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100001,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100002,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100003,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100004,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 100005,
      "ok": true,
      "plan": Object {
        "end": 2,
        "start": 1,
      },
      "tapError": "id greater than plan end",
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(2)\\n",
  ],
  Array [
    "comment",
    "# failed 9 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 9,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 99997,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99998,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 99999,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100000,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100001,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100002,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100003,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100004,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
        Result {
          "fullname": "",
          "id": 100005,
          "ok": true,
          "plan": Object {
            "end": 2,
            "start": 1,
          },
          "tapError": "id greater than plan end",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..2
ok 1
ok 2
ok 99997
ok 99998
ok 99999
ok 100000
ok 100001
ok 100002
ok 100003
ok 100004
ok 100005
# test count(11) != plan(2)
# failed 9 of 11 tests

`

exports[`test/parser.js TAP bignum_many.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..2
ok 1
ok 2
ok 99997
ok 99998
ok 99999
ok 100000
ok 100001
ok 100002
ok 100003
ok 100004
ok 100005
# test count(11) != plan(2)
# failed 9 of 11 tests

`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..3
ok 1 - callback happened
  ok:
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ok:
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..3
ok 1 - callback happened
  ok:
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ok:
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 4 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 4,
      "failures": Array [
        Object {
          "data": "  ok:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - I wished for a bailout!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - lots of other shapes here can look like valid tap\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": " ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..3
ok 1 - callback happened
  ok:
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ok:
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 4 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 4,
      "failures": Array [
        Object {
          "data": "  ok:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - I wished for a bailout!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - lots of other shapes here can look like valid tap\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": " ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..3
ok 1 - callback happened
  ok:
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser.js TAP broken-yamlish-looks-like-child.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ok:
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "line",
    " ---\\n",
  ],
  Array [
    "line",
    " # also this is a comment\\n",
  ],
  Array [
    "line",
    " ok: this time I mean it\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 -  callback happened\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "line",
    " ---\\n",
  ],
  Array [
    "line",
    " # also this is a comment\\n",
  ],
  Array [
    "line",
    " ok: this time I mean it\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "line",
    "  ok:\\n",
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "line",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "line",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "line",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "line",
    " ...\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "line",
    "ok 2 -  child test\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 -  should come last\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 4 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 4,
      "failures": Array [
        Object {
          "data": "  ok:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - I wished for a bailout!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - lots of other shapes here can look like valid tap\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": " ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 4 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 4,
      "failures": Array [
        Object {
          "data": "  ok:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - I wished for a bailout!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - lots of other shapes here can look like valid tap\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": " ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser.js TAP broken-yamlish-with-nonbroken-yamlish.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "name": "no they aren't",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "name": "no they aren't",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "line",
        "Bail out! no they aren't\\n",
      ],
      Array [
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "name": "no they aren't",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "name": "no they aren't",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    Bail out! no they aren't\\n",
  ],
  Array [
    "bailout",
    "no they aren't",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out! no they aren't\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "no they aren't",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    # failed 1 test
ok 1 - my kids are fine
  ---
  some: diag
  ...

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    # failed 1 test
ok 1 - my kids are fine
  ---
  some: diag
  ...

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    # failed 1 test
ok 1 - my kids are fine
  ---
  some: diag
  ...

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    # failed 1 test
ok 1 - my kids are fine
  ---
  some: diag
  ...

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "no they aren't",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-diag.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "not ok\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "ok": false,
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "not ok\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "ok": false,
        },
      ],
      Array [
        "line",
        "Bail out!\\n",
      ],
      Array [
        "bailout",
        "",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": true,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "    Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": true,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1
    Bail out!
Bail out!

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1
    Bail out!
Bail out!

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": true,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1
    Bail out!
Bail out!

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok-no-msg.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1
    Bail out!
Bail out!

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "name": "no they aren't",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "name": "no they aren't",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - my kids are fine {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "not ok - no they aren't\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "line",
        "Bail out! no they aren't\\n",
      ],
      Array [
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    not ok - no they aren't\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "name": "no they aren't",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "my kids are fine",
      "id": 1,
      "name": "no they aren't",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    Bail out! no they aren't\\n",
  ],
  Array [
    "bailout",
    "no they aren't",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "line",
    "Bail out! no they aren't\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "no they aren't",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "my kids are fine",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    # failed 1 test
ok 1 - my kids are fine

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: my kids are fine\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "my kids are fine",
          "id": 1,
          "name": "no they aren't",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "no they aren't",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "no they aren't",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "fullname": "my kids are fine",
              "id": 1,
              "name": "no they aren't",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "no they aren't",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "no they aren't",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser.js TAP buffered-nested-failure-top-ok.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: my kids are fine
    1..1
    not ok 1 - no they aren't
    Bail out! no they aren't
Bail out! no they aren't

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diag\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! please sir, my son, he is sick\\n",
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
Bail out! please sir, my son, he is sick

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
Bail out! please sir, my son, he is sick

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
# failed 1 test

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
# failed 1 test

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
# failed 1 test

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
# failed 1 test

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diag",
      },
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diag",
          },
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
Bail out! please sir, my son, he is sick

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure-diag.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
  ---
  some: diag
  ...
Bail out! please sir, my son, he is sick

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - please sir, my son, he is sick {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok - i got better\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok - i got better\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "please sir, my son, he is sick",
      "id": 1,
      "name": "i got better",
      "ok": true,
    },
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! please sir, my son, he is sick\\n",
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
Bail out! please sir, my son, he is sick

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
Bail out! please sir, my son, he is sick

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
# failed 1 test

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
# failed 1 test

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
# failed 1 test

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
# failed 1 test

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: please sir, my son, he is sick\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "please sir, my son, he is sick",
          "id": 1,
          "name": "i got better",
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "please sir, my son, he is sick",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "please sir, my son, he is sick",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please sir, my son, he is sick",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "fullname": "",
          "id": 1,
          "name": "please sir, my son, he is sick",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
Bail out! please sir, my son, he is sick

`

exports[`test/parser.js TAP buffered-nested-ok-top-failure.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..1
# Subtest: please sir, my son, he is sick
    1..1
    ok 1 - i got better
not ok 1 - please sir, my son, he is sick
Bail out! please sir, my son, he is sick

`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "not ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
          "fullname": "",
          "id": 1,
          "name": "child",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "not ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! child\\n",
  ],
  Array [
    "bailout",
    "child",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "child",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
          "fullname": "",
          "id": 1,
          "name": "child",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "child",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "child",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
          "fullname": "",
          "id": 1,
          "name": "child",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods bail > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
Bail out! child

`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
Bail out! child

`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
          "fullname": "",
          "id": 1,
          "name": "child",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods default settings > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
1..1
# failed 1 test

`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
1..1
# failed 1 test

`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
          "fullname": "",
          "id": 1,
          "name": "child",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods strict > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
1..1
# failed 1 test

`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
1..1
# failed 1 test

`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "child",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "child",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": true,
          "diag": Object {
            "some": "diagnostics",
          },
          "fullname": "",
          "id": 1,
          "name": "child",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
Bail out! child

`

exports[`test/parser.js TAP buffered-with-diag-not-ok.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
not ok 1 - child
  ---
  some: diagnostics
  ...
Bail out! child

`

exports[`test/parser.js TAP buffered-with-diag-ok.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1 - child\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  some: diagnostics\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "{\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods bail > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
ok 1 - child
  ---
  some: diagnostics
  ...
1..1

`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
ok 1 - child
  ---
  some: diagnostics
  ...
1..1

`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods default settings > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
ok 1 - child
  ---
  some: diagnostics
  ...
1..1

`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
ok 1 - child
  ---
  some: diagnostics
  ...
1..1

`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods strict > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
ok 1 - child
  ---
  some: diagnostics
  ...
1..1

`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
ok 1 - child
  ---
  some: diagnostics
  ...
1..1

`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": Object {
        "some": "diagnostics",
      },
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
# Subtest: child
    ok 1
    1..1
ok 1 - child
  ---
  some: diagnostics
  ...
1..1

`

exports[`test/parser.js TAP buffered-with-diag-ok.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
# Subtest: child
    ok 1
    1..1
ok 1 - child
  ---
  some: diagnostics
  ...
1..1

`

exports[`test/parser.js TAP child-after-failure.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "not ok - 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "line",
    "# Subtest: child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "ok 2 - child\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "1",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "not ok - 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! 1\\n",
  ],
  Array [
    "bailout",
    "1",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "1",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "1",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "1",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "1",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "1",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods bail > stringified 1`] = `
not ok 1 - 1
Bail out! 1

`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
not ok 1 - 1
Bail out! 1

`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "1",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods default settings > stringified 1`] = `
not ok 1 - 1
# Subtest: child
    ok 1
    1..1
ok 2 - child
1..2
# failed 1 of 2 tests

`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
not ok 1 - 1
# Subtest: child
    ok 1
    1..1
ok 2 - child
1..2
# failed 1 of 2 tests

`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "1",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods strict > stringified 1`] = `
not ok 1 - 1
# Subtest: child
    ok 1
    1..1
ok 2 - child
1..2
# failed 1 of 2 tests

`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
not ok 1 - 1
# Subtest: child
    ok 1
    1..1
ok 2 - child
1..2
# failed 1 of 2 tests

`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "1",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "1",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "1",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "1",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
not ok 1 - 1
Bail out! 1

`

exports[`test/parser.js TAP child-after-failure.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
not ok 1 - 1
Bail out! 1

`

exports[`test/parser.js TAP child-extra.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/debug-test.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "line",
        "# debug test\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "line",
        "ok 1 Should output debugger message\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/debug-test.js",
          "id": 1,
          "name": "Should output debugger message",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "line",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "line",
        "# ok\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 537.383,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "debug test\\n",
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "line",
    "    # debug test\\n",
  ],
  Array [
    "line",
    "    ok 1 Should output debugger message\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "test/debug-test.js",
      "id": 1,
      "name": "Should output debugger message",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "test/debug-test.js",
      "id": 1,
      "name": "Should output debugger message",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # tests 1\\n",
  ],
  Array [
    "line",
    "    # pass  1\\n",
  ],
  Array [
    "line",
    "    # ok\\n",
  ],
  Array [
    "line",
    "ok 1 - test/debug-test.js # time=537.383ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "time": 537.383,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=543.783ms\\n",
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 543.783,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/debug-test.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "line",
        "# debug test\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "line",
        "ok 1 Should output debugger message\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/debug-test.js",
          "id": 1,
          "name": "Should output debugger message",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "line",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "line",
        "# ok\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 537.383,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "debug test\\n",
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "line",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "line",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "line",
    "    # debug test\\n",
  ],
  Array [
    "line",
    "    ok 1 Should output debugger message\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "test/debug-test.js",
      "id": 1,
      "name": "Should output debugger message",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "test/debug-test.js",
      "id": 1,
      "name": "Should output debugger message",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # tests 1\\n",
  ],
  Array [
    "line",
    "    # pass  1\\n",
  ],
  Array [
    "line",
    "    # ok\\n",
  ],
  Array [
    "line",
    "ok 1 - test/debug-test.js # time=537.383ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "time": 537.383,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=543.783ms\\n",
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 543.783,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/debug-test.js",
          "id": 1,
          "name": "Should output debugger message",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 537.383,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "time": 537.383,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 543.783,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms

`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms

`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/debug-test.js",
          "id": 1,
          "name": "Should output debugger message",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 537.383,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "time": 537.383,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 543.783,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms

`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms

`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/debug-test.js",
          "id": 1,
          "name": "Should output debugger message",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 537.383,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "time": 537.383,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "comment",
    "# failed 3 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "debug test\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "t.plan=1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "'Debugger listening on port 5858\\\\n'\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 543.783,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms
# failed 3 test

`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms
# failed 3 test

`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/debug-test.js\\n",
      ],
      Array [
        "comment",
        "# debug test\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/debug-test.js",
          "id": 1,
          "name": "Should output debugger message",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# tests 1\\n",
      ],
      Array [
        "comment",
        "# pass  1\\n",
      ],
      Array [
        "comment",
        "# ok\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 537.383,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "debug test\\n",
  ],
  Array [
    "extra",
    "t.plan=1\\n",
  ],
  Array [
    "extra",
    "'Debugger listening on port 5858\\\\n'\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/debug-test.js",
      "ok": true,
      "time": 537.383,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=543.783ms\\n",
  ],
  Array [
    "comment",
    "# failed 3 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "debug test\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "t.plan=1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "'Debugger listening on port 5858\\\\n'\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 543.783,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms
# failed 3 test

`

exports[`test/parser.js TAP child-extra.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: test/debug-test.js
    # debug test
    ok 1 - Should output debugger message
    1..1
    # tests 1
    # pass  1
    # ok
debug test
t.plan=1
'Debugger listening on port 5858\\n'
ok 1 - test/debug-test.js # time=537.383ms
1..1
# time=543.783ms
# failed 3 test

`

exports[`test/parser.js TAP combined.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke loose\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "line",
    "not ok 4  # TODO if I heard a voice from heaven ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "todo": "if I heard a voice from heaven ...",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "todo": "if I heard a voice from heaven ...",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "todo": "if I heard a voice from heaven ...",
    },
  ],
  Array [
    "line",
    "ok say \\"live without loving\\",\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "say \\"live without loving\\",",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "say \\"live without loving\\",",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "say \\"live without loving\\",",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 6 I'd beg off.\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "I'd beg off.",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "name": "I'd beg off.",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "name": "I'd beg off.",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 7            # Skip contract negotiations\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negotiations",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negotiations",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negotiations",
    },
  ],
  Array [
    "line",
    "ok 8 Girls are such exquisite hell\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Girls are such exquisite hell",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Girls are such exquisite hell",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Girls are such exquisite hell",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 9 Elegy 9B           # TOdO\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Elegy 9B",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Elegy 9B",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Elegy 9B",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "line",
    "not ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "line",
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "line",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 3,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 10,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 7,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke loose\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! all hell broke loose\\n",
  ],
  Array [
    "bailout",
    "all hell broke loose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke loose",
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "all hell broke loose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke loose",
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
Bail out! all hell broke loose

`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
Bail out! all hell broke loose

`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "todo": "if I heard a voice from heaven ...",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "say \\"live without loving\\",",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "I'd beg off.",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negotiations",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Girls are such exquisite hell",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Elegy 9B",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 3,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 10,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 7,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
not ok 4 # TODO if I heard a voice from heaven ...
ok 5 - say "live without loving",
ok 6 - I'd beg off.
ok 7 # SKIP contract negotiations
ok 8 - Girls are such exquisite hell
ok 9 - Elegy 9B # TODO
not ok 10
# failed 3 of 10 tests
# todo: 2
# skip: 1

`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
not ok 4 # TODO if I heard a voice from heaven ...
ok 5 - say "live without loving",
ok 6 - I'd beg off.
ok 7 # SKIP contract negotiations
ok 8 - Girls are such exquisite hell
ok 9 - Elegy 9B # TODO
not ok 10
# failed 3 of 10 tests
# todo: 2
# skip: 1

`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": false,
      "todo": "if I heard a voice from heaven ...",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "say \\"live without loving\\",",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "I'd beg off.",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negotiations",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "name": "Girls are such exquisite hell",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "Elegy 9B",
      "ok": true,
      "todo": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# failed 3 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 3,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 10,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 7,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 1,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
not ok 4 # TODO if I heard a voice from heaven ...
ok 5 - say "live without loving",
ok 6 - I'd beg off.
ok 7 # SKIP contract negotiations
ok 8 - Girls are such exquisite hell
ok 9 - Elegy 9B # TODO
not ok 10
# failed 3 of 10 tests
# todo: 2
# skip: 1

`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
not ok 4 # TODO if I heard a voice from heaven ...
ok 5 - say "live without loving",
ok 6 - I'd beg off.
ok 7 # SKIP contract negotiations
ok 8 - Girls are such exquisite hell
ok 9 - Elegy 9B # TODO
not ok 10
# failed 3 of 10 tests
# todo: 2
# skip: 1

`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke loose",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "all hell broke loose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke loose",
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke loose",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
Bail out! all hell broke loose

`

exports[`test/parser.js TAP combined.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke loose
Bail out! all hell broke loose

`

exports[`test/parser.js TAP combined_compat.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke lose\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 7            # Skip contract negociations\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negociations",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negociations",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negociations",
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 9,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 9,
      "ok": false,
    },
  ],
  Array [
    "line",
    "not ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "line",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 4 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 10 tests\\n",
  ],
  Array [
    "line",
    "# skip: 1\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 9,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 10,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 7,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 basset hounds got long ears\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3        all hell broke lose\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! all hell broke lose\\n",
  ],
  Array [
    "bailout",
    "all hell broke lose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke lose",
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "all hell broke lose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke lose",
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negociations",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 4 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 4,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 9,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 10,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 7,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok 5
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)
# failed 4 of 10 tests
# skip: 1

`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok 5
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)
# failed 4 of 10 tests
# skip: 1

`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "name": "",
      "ok": true,
      "skip": "contract negociations",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": false,
    },
  ],
  Array [
    "comment",
    "# test count(10) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 5 of 10 tests\\n",
  ],
  Array [
    "comment",
    "# skip: 1\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 10,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "1..10 todo 4 10\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 9,
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 10,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 7,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 1,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok 5
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)
# failed 5 of 10 tests
# skip: 1

`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
ok 4
ok 5
ok 6
ok 7 # SKIP contract negociations
ok 8
not ok 9
not ok 10
# test count(10) != plan(null)
# failed 5 of 10 tests
# skip: 1

`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "extra",
    "1..10 todo 4 10\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "basset hounds got long ears",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "all hell broke lose",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "all hell broke lose",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "all hell broke lose",
      "count": 3,
      "fail": 2,
      "failures": Array [
        Object {
          "data": "1..10 todo 4 10\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "fullname": "",
          "id": 3,
          "name": "all hell broke lose",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parser.js TAP combined_compat.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..10 todo 4 10
ok 1
ok 2 - basset hounds got long ears
not ok 3 - all hell broke lose
Bail out! all hell broke lose

`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before result\\n",
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# Subtest: child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# before 1\\n",
      ],
      Array [
        "comment",
        "# before 1\\n",
      ],
      Array [
        "line",
        "ok 1\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "line",
        "# before 2\\n",
      ],
      Array [
        "comment",
        "# before 2\\n",
      ],
      Array [
        "line",
        "ok 2\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 2,
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # before 1\\n",
  ],
  Array [
    "line",
    "    ok 1\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "    # before 2\\n",
  ],
  Array [
    "line",
    "    ok 2\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "child",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "child",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - child\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# after 2, brefore plan\\n",
  ],
  Array [
    "comment",
    "# after 2, brefore plan\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# after plan\\n",
  ],
  Array [
    "comment",
    "# after plan\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before result\\n",
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "Bail out! please keep my diags\\n",
  ],
  Array [
    "bailout",
    "please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please keep my diags",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "bailout",
    "please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please keep my diags",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods bail > stringified 1`] = `
# before version
TAP version 13
# after version, before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
Bail out! please keep my diags

`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
# before version
TAP version 13
# after version, before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
Bail out! please keep my diags

`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# before 1\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "comment",
        "# before 2\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 2,
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 2, brefore plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# after plan\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods default settings > stringified 1`] = `
# before version
TAP version 13
# after version, before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# Subtest: child
    1..2
    # before 1
    ok 1
    # before 2
    ok 2
# before 2
ok 2 - child
# after 2, brefore plan
1..2
# after plan
# failed 1 of 2 tests

`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
# before version
TAP version 13
# after version, before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# Subtest: child
    1..2
    # before 1
    ok 1
    # before 2
    ok 2
# before 2
ok 2 - child
# after 2, brefore plan
1..2
# after plan
# failed 1 of 2 tests

`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# before 1\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "comment",
        "# before 2\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "child",
          "id": 2,
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 2, brefore plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# after plan\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods strict > stringified 1`] = `
# before version
TAP version 13
# after version, before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# Subtest: child
    1..2
    # before 1
    ok 1
    # before 2
    ok 2
# before 2
ok 2 - child
# after 2, brefore plan
1..2
# after plan
# failed 1 of 2 tests

`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
# before version
TAP version 13
# after version, before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# Subtest: child
    1..2
    # before 1
    ok 1
    # before 2
    ok 2
# before 2
ok 2 - child
# after 2, brefore plan
1..2
# after plan
# failed 1 of 2 tests

`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "bailout",
    "please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please keep my diags",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
# before version
TAP version 13
# after version, before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
Bail out! please keep my diags

`

exports[`test/parser.js TAP comment-mid-diag-postplan.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
# before version
TAP version 13
# after version, before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
Bail out! please keep my diags

`

exports[`test/parser.js TAP comment-mid-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before plan\\n",
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# before result\\n",
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# after 2\\n",
  ],
  Array [
    "comment",
    "# after 2\\n",
  ],
  Array [
    "line",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# before version\\n",
  ],
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# after version, before plan\\n",
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# before result\\n",
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "line",
    "not ok 1 - please keep my diags\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  # mid diag indent\\n",
  ],
  Array [
    "line",
    "  after: comment\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "line",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "line",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "line",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "line",
    "# before 2\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "line",
    "Bail out! please keep my diags\\n",
  ],
  Array [
    "bailout",
    "please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please keep my diags",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "bailout",
    "please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please keep my diags",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods bail > stringified 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
Bail out! please keep my diags

`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
Bail out! please keep my diags

`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 2\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods default settings > stringified 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
ok 2
# after 2
# failed 1 of 2 tests

`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
ok 2
# after 2
# failed 1 of 2 tests

`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 2\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods strict > stringified 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
ok 2
# after 2
# failed 1 of 2 tests

`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
ok 2
# after 2
# failed 1 of 2 tests

`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "bailout",
    "please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please keep my diags",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
Bail out! please keep my diags

`

exports[`test/parser.js TAP comment-mid-diag.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
Bail out! please keep my diags

`

exports[`test/parser.js TAP common-with-explanation.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "line",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "ok 1 - The object isa Board\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - Board size is zero\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 - The object isa Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4 - Get possible places to put the Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5 - Placing the tile produces no error\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 6 - Board size is 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "line",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "line",
    "#\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "line",
    "ok 1 - The object isa Board\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - Board size is zero\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3 - The object isa Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4 - Get possible places to put the Tile\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5 - Placing the tile produces no error\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 6 - Board size is 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser.js TAP common-with-explanation.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser.js TAP confusing-json.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: Test newlines in tap and console.log\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "line",
        "ok 1 - Before console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 1,
          "name": "Before console.log",
          "ok": true,
        },
      ],
      Array [
        "line",
        "{\\n",
      ],
      Array [
        "line",
        "  \\"x\\": 1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "line",
        "\\"y\\": 2,\\n",
      ],
      Array [
        "line",
        "\\"steps\\": [\\n",
      ],
      Array [
        "line",
        "  {\\n",
      ],
      Array [
        "line",
        "    \\"z\\": 3\\n",
      ],
      Array [
        "line",
        "  }\\n",
      ],
      Array [
        "line",
        "]\\n",
      ],
      Array [
        "line",
        "ok 2 - After console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - Before console.log\\n",
  ],
  Array [
    "line",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "line",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "line",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "line",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "line",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "line",
    "  },\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "line",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 1,
      "name": "Before console.log",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 1,
      "name": "Before console.log",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    {\\n",
  ],
  Array [
    "line",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "line",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "line",
    "      {\\n",
  ],
  Array [
    "line",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "line",
    "      }\\n",
  ],
  Array [
    "line",
    "    ]\\n",
  ],
  Array [
    "line",
    "    ok 2 - After console.log\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 2,
      "name": "After console.log",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 2,
      "name": "After console.log",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Test newlines in tap and console.log # time=4.137ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Test newlines in tap and console.log",
      "ok": true,
      "time": 4.137,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: Test newlines in tap and console.log\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "line",
        "ok 1 - Before console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 1,
          "name": "Before console.log",
          "ok": true,
        },
      ],
      Array [
        "line",
        "{\\n",
      ],
      Array [
        "line",
        "  \\"x\\": 1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "line",
        "\\"y\\": 2,\\n",
      ],
      Array [
        "line",
        "\\"steps\\": [\\n",
      ],
      Array [
        "line",
        "  {\\n",
      ],
      Array [
        "line",
        "    \\"z\\": 3\\n",
      ],
      Array [
        "line",
        "  }\\n",
      ],
      Array [
        "line",
        "]\\n",
      ],
      Array [
        "line",
        "ok 2 - After console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - Before console.log\\n",
  ],
  Array [
    "line",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "line",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "line",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "line",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "line",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "line",
    "  },\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "line",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 1,
      "name": "Before console.log",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 1,
      "name": "Before console.log",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    {\\n",
  ],
  Array [
    "line",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "line",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "line",
    "      {\\n",
  ],
  Array [
    "line",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "line",
    "      }\\n",
  ],
  Array [
    "line",
    "    ]\\n",
  ],
  Array [
    "line",
    "    ok 2 - After console.log\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 2,
      "name": "After console.log",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 2,
      "name": "After console.log",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Test newlines in tap and console.log # time=4.137ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Test newlines in tap and console.log",
      "ok": true,
      "time": 4.137,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 1,
          "name": "Before console.log",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Test newlines in tap and console.log",
      "ok": true,
      "time": 4.137,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms

`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms

`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 1,
          "name": "Before console.log",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Test newlines in tap and console.log",
      "ok": true,
      "time": 4.137,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms

`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms

`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 1,
          "name": "Before console.log",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 9 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 9,
          "failures": Array [
            Object {
              "data": "{\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  \\"x\\": 1\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "}\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "\\"y\\": 2,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "\\"steps\\": [\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  {\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "    \\"z\\": 3\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "]\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Test newlines in tap and console.log",
      "ok": true,
      "time": 4.137,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# failed 17 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 17,
      "failures": Array [
        Object {
          "data": "createdMultipleStepsWithWeightAndCapacity={\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"usedByModels\\": [\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "{\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"x\\": 1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "}\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"stepsOrdered\\": {\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "\\"y\\": 2,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "\\"steps\\": [\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  {\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    \\"z\\": 3\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "]\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  },\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"a\\": \\"bc\\"\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "}\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
    # failed 9 of 2 tests
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms
# failed 17 test

`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
    # failed 9 of 2 tests
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms
# failed 17 test

`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 1,
          "name": "Before console.log",
          "ok": true,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 9 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 9,
          "failures": Array [
            Object {
              "data": "{\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  \\"x\\": 1\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "}\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "\\"y\\": 2,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "\\"steps\\": [\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  {\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "    \\"z\\": 3\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "]\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Test newlines in tap and console.log",
      "ok": true,
      "time": 4.137,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# failed 17 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 17,
      "failures": Array [
        Object {
          "data": "createdMultipleStepsWithWeightAndCapacity={\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"usedByModels\\": [\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "{\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"x\\": 1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "}\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"stepsOrdered\\": {\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "\\"y\\": 2,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "\\"steps\\": [\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  {\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    \\"z\\": 3\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "]\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  },\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"a\\": \\"bc\\"\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "}\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
    # failed 9 of 2 tests
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms
# failed 17 test

`

exports[`test/parser.js TAP confusing-json.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
    # failed 9 of 2 tests
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms
# failed 17 test

`

exports[`test/parser.js TAP creative-liberties.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok - created Board\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Board layout\\"\\n",
  ],
  Array [
    "line",
    "  severity: comment\\n",
  ],
  Array [
    "line",
    "  dump:\\n",
  ],
  Array [
    "line",
    "     board:\\n",
  ],
  Array [
    "line",
    "       - '      16G         05C        '\\n",
  ],
  Array [
    "line",
    "       - '      G N C       C C G      '\\n",
  ],
  Array [
    "line",
    "       - '        G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '10C   01G         03C        '\\n",
  ],
  Array [
    "line",
    "       - 'R N G G A G       C C C      '\\n",
  ],
  Array [
    "line",
    "       - '  R     G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '      01G   17C   00C        '\\n",
  ],
  Array [
    "line",
    "       - '      G A G G N R R N R      '\\n",
  ],
  Array [
    "line",
    "       - '        G     R     G        '\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok - board has 7 tiles + starter tile\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok - created Board\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Board layout\\"\\n",
  ],
  Array [
    "line",
    "  severity: comment\\n",
  ],
  Array [
    "line",
    "  dump:\\n",
  ],
  Array [
    "line",
    "     board:\\n",
  ],
  Array [
    "line",
    "       - '      16G         05C        '\\n",
  ],
  Array [
    "line",
    "       - '      G N C       C C G      '\\n",
  ],
  Array [
    "line",
    "       - '        G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '10C   01G         03C        '\\n",
  ],
  Array [
    "line",
    "       - 'R N G G A G       C C C      '\\n",
  ],
  Array [
    "line",
    "       - '  R     G           C  +     '\\n",
  ],
  Array [
    "line",
    "       - '      01G   17C   00C        '\\n",
  ],
  Array [
    "line",
    "       - '      G A G G N R R N R      '\\n",
  ],
  Array [
    "line",
    "       - '        G     R     G        '\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok - board has 7 tiles + starter tile\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..9\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
ok 1 - created Board
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
ok 8
  ---
  message: Board layout
  severity: comment
  dump:
    board:
      - "      16G         05C        "
      - "      G N C       C C G      "
      - "        G           C  +     "
      - "10C   01G         03C        "
      - "R N G G A G       C C C      "
      - "  R     G           C  +     "
      - "      01G   17C   00C        "
      - "      G A G G N R R N R      "
      - "        G     R     G        "
  ...
ok 9 - board has 7 tiles + starter tile
1..9

`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
ok 1 - created Board
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
ok 8
  ---
  message: Board layout
  severity: comment
  dump:
    board:
      - "      16G         05C        "
      - "      G N C       C C G      "
      - "        G           C  +     "
      - "10C   01G         03C        "
      - "R N G G A G       C C C      "
      - "  R     G           C  +     "
      - "      01G   17C   00C        "
      - "      G A G G N R R N R      "
      - "        G     R     G        "
  ...
ok 9 - board has 7 tiles + starter tile
1..9

`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
ok 1 - created Board
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
ok 8
  ---
  message: Board layout
  severity: comment
  dump:
    board:
      - "      16G         05C        "
      - "      G N C       C C G      "
      - "        G           C  +     "
      - "10C   01G         03C        "
      - "R N G G A G       C C C      "
      - "  R     G           C  +     "
      - "      01G   17C   00C        "
      - "      G A G G N R R N R      "
      - "        G     R     G        "
  ...
ok 9 - board has 7 tiles + starter tile
1..9

`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
ok 1 - created Board
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
ok 8
  ---
  message: Board layout
  severity: comment
  dump:
    board:
      - "      16G         05C        "
      - "      G N C       C C G      "
      - "        G           C  +     "
      - "10C   01G         03C        "
      - "R N G G A G       C C C      "
      - "  R     G           C  +     "
      - "      01G   17C   00C        "
      - "      G A G G N R R N R      "
      - "        G     R     G        "
  ...
ok 9 - board has 7 tiles + starter tile
1..9

`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
ok 1 - created Board
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
ok 8
  ---
  message: Board layout
  severity: comment
  dump:
    board:
      - "      16G         05C        "
      - "      G N C       C C G      "
      - "        G           C  +     "
      - "10C   01G         03C        "
      - "R N G G A G       C C C      "
      - "  R     G           C  +     "
      - "      01G   17C   00C        "
      - "      G A G G N R R N R      "
      - "        G     R     G        "
  ...
ok 9 - board has 7 tiles + starter tile
1..9

`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
ok 1 - created Board
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
ok 8
  ---
  message: Board layout
  severity: comment
  dump:
    board:
      - "      16G         05C        "
      - "      G N C       C C G      "
      - "        G           C  +     "
      - "10C   01G         03C        "
      - "R N G G A G       C C C      "
      - "  R     G           C  +     "
      - "      01G   17C   00C        "
      - "      G A G G N R R N R      "
      - "        G     R     G        "
  ...
ok 9 - board has 7 tiles + starter tile
1..9

`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "created Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "dump": Object {
          "board": Array [
            "      16G         05C        ",
            "      G N C       C C G      ",
            "        G           C  +     ",
            "10C   01G         03C        ",
            "R N G G A G       C C C      ",
            "  R     G           C  +     ",
            "      01G   17C   00C        ",
            "      G A G G N R R N R      ",
            "        G     R     G        ",
          ],
        },
        "message": "Board layout",
        "severity": "comment",
      },
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "name": "board has 7 tiles + starter tile",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 9,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 9,
      "plan": FinalPlan {
        "comment": "",
        "end": 9,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
ok 1 - created Board
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
ok 8
  ---
  message: Board layout
  severity: comment
  dump:
    board:
      - "      16G         05C        "
      - "      G N C       C C G      "
      - "        G           C  +     "
      - "10C   01G         03C        "
      - "R N G G A G       C C C      "
      - "  R     G           C  +     "
      - "      01G   17C   00C        "
      - "      G A G G N R R N R      "
      - "        G     R     G        "
  ...
ok 9 - board has 7 tiles + starter tile
1..9

`

exports[`test/parser.js TAP creative-liberties.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
ok 1 - created Board
ok 2
ok 3
ok 4
ok 5
ok 6
ok 7
ok 8
  ---
  message: Board layout
  severity: comment
  dump:
    board:
      - "      16G         05C        "
      - "      G N C       C C G      "
      - "        G           C  +     "
      - "10C   01G         03C        "
      - "R N G G A G       C C C      "
      - "  R     G           C  +     "
      - "      01G   17C   00C        "
      - "      G A G G N R R N R      "
      - "        G     R     G        "
  ...
ok 9 - board has 7 tiles + starter tile
1..9

`

exports[`test/parser.js TAP delayed.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 00000\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5 00000\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 00000\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
Bail out!

`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
Bail out!

`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
ok 4
ok 5 - 00000
# failed 1 of 5 tests

`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
ok 4
ok 5 - 00000
# failed 1 of 5 tests

`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 5 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
ok 4
ok 5 - 00000
# failed 1 of 5 tests

`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
ok 4
ok 5 - 00000
# failed 1 of 5 tests

`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "00000",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 3,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
Bail out!

`

exports[`test/parser.js TAP delayed.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..5
ok 1 - 00000
ok 2
not ok 3
Bail out!

`

exports[`test/parser.js TAP descriptive.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..5
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed

`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..5
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed

`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..5
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed

`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..5
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed

`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..5
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed

`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..5
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed

`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..5
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed

`

exports[`test/parser.js TAP descriptive.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..5
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed

`

exports[`test/parser.js TAP descriptive_trailing.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1    Interlock activated\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Megathrusters are go\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3    Head formed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4    Blazing sword formed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5    Robeast destroyed\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods bail > stringified 1`] = `
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed
1..5

`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed
1..5

`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods default settings > stringified 1`] = `
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed
1..5

`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed
1..5

`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods strict > stringified 1`] = `
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed
1..5

`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed
1..5

`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Interlock activated",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Megathrusters are go",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Head formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Blazing sword formed",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Robeast destroyed",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed
1..5

`

exports[`test/parser.js TAP descriptive_trailing.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
ok 1 - Interlock activated
ok 2 - Megathrusters are go
ok 3 - Head formed
ok 4 - Blazing sword formed
ok 5 - Robeast destroyed
1..5

`

exports[`test/parser.js TAP diag-looks-like-comment.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: -t 0.2\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "line",
        "not ok 1 - should match pattern provided\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found: >\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    # Subtest: nope\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        not ok 1 - nope\\n",
      ],
      Array [
        "line",
        "          ---\\n",
      ],
      Array [
        "line",
        "          still: the string\\n",
      ],
      Array [
        "line",
        "          ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        1..1 # nope\\n",
      ],
      Array [
        "line",
        "    not ok 1 - nope #\\n",
      ],
      Array [
        "line",
        "    time=123\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      this: is fine\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "  pattern: '/SIGTERM/'\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should match pattern provided\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found: >\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        # Subtest: nope\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            not ok 1 - nope\\n",
  ],
  Array [
    "line",
    "              ---\\n",
  ],
  Array [
    "line",
    "              still: the string\\n",
  ],
  Array [
    "line",
    "              ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            1..1 # nope\\n",
  ],
  Array [
    "line",
    "        not ok 1 - nope #\\n",
  ],
  Array [
    "line",
    "        time=123\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          this: is fine\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "      pattern: '/SIGTERM/'\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "found": String(
          
          # Subtest: nope
          
              not ok 1 - nope
                ---
                still: the string
                ...
          
              1..1 # nope
          not ok 1 - nope # time=123
            ---
            this: is fine
            ...
          
          1..1
          
        ),
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
      "id": 1,
      "name": "should match pattern provided",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "found": String(
          
          # Subtest: nope
          
              not ok 1 - nope
                ---
                still: the string
                ...
          
              1..1 # nope
          not ok 1 - nope # time=123
            ---
            this: is fine
            ...
          
          1..1
          
        ),
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
      "id": 1,
      "name": "should match pattern provided",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "not ok 1 - -t 0.2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "-t 0.2",
      "ok": false,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "-t 0.2",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: -t 0.2\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "line",
        "not ok 1 - should match pattern provided\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found: >\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    # Subtest: nope\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        not ok 1 - nope\\n",
      ],
      Array [
        "line",
        "          ---\\n",
      ],
      Array [
        "line",
        "          still: the string\\n",
      ],
      Array [
        "line",
        "          ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "        1..1 # nope\\n",
      ],
      Array [
        "line",
        "    not ok 1 - nope #\\n",
      ],
      Array [
        "line",
        "    time=123\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      this: is fine\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "  pattern: '/SIGTERM/'\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
        },
      ],
      Array [
        "line",
        "Bail out! should match pattern provided\\n",
      ],
      Array [
        "bailout",
        "should match pattern provided",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should match pattern provided",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should match pattern provided\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found: >\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        # Subtest: nope\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            not ok 1 - nope\\n",
  ],
  Array [
    "line",
    "              ---\\n",
  ],
  Array [
    "line",
    "              still: the string\\n",
  ],
  Array [
    "line",
    "              ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "            1..1 # nope\\n",
  ],
  Array [
    "line",
    "        not ok 1 - nope #\\n",
  ],
  Array [
    "line",
    "        time=123\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          this: is fine\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "      pattern: '/SIGTERM/'\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "found": String(
          
          # Subtest: nope
          
              not ok 1 - nope
                ---
                still: the string
                ...
          
              1..1 # nope
          not ok 1 - nope # time=123
            ---
            this: is fine
            ...
          
          1..1
          
        ),
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
      "id": 1,
      "name": "should match pattern provided",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "found": String(
          
          # Subtest: nope
          
              not ok 1 - nope
                ---
                still: the string
                ...
          
              1..1 # nope
          not ok 1 - nope # time=123
            ---
            this: is fine
            ...
          
          1..1
          
        ),
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2",
      "id": 1,
      "name": "should match pattern provided",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    Bail out! should match pattern provided\\n",
  ],
  Array [
    "bailout",
    "should match pattern provided",
  ],
  Array [
    "line",
    "Bail out! should match pattern provided\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should match pattern provided",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "should match pattern provided",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should match pattern provided",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "should match pattern provided",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should match pattern provided",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    Bail out! should match pattern provided
Bail out! should match pattern provided

`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    Bail out! should match pattern provided
Bail out! should match pattern provided

`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "-t 0.2",
      "ok": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "-t 0.2",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    1..1
    # failed 1 test
not ok 1 - -t 0.2
1..1
# failed 1 test

`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    1..1
    # failed 1 test
not ok 1 - -t 0.2
1..1
# failed 1 test

`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "-t 0.2",
      "ok": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "-t 0.2",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    1..1
    # failed 1 test
not ok 1 - -t 0.2
1..1
# failed 1 test

`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    1..1
    # failed 1 test
not ok 1 - -t 0.2
1..1
# failed 1 test

`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "should match pattern provided",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should match pattern provided",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "should match pattern provided",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should match pattern provided",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    Bail out! should match pattern provided
Bail out! should match pattern provided

`

exports[`test/parser.js TAP diag-looks-like-comment.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    Bail out! should match pattern provided
Bail out! should match pattern provided

`

exports[`test/parser.js TAP die.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP die.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP die_head_end.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods bail > stringified 1`] = `
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(null)
# failed 1 of 4 tests

`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(null)
# failed 1 of 4 tests

`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods default settings > stringified 1`] = `
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(null)
# failed 1 of 4 tests

`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(null)
# failed 1 of 4 tests

`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods strict > stringified 1`] = `
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(null)
# failed 1 of 4 tests

`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(null)
# failed 1 of 4 tests

`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(null)
# failed 1 of 4 tests

`

exports[`test/parser.js TAP die_head_end.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(null)
# failed 1 of 4 tests

`

exports[`test/parser.js TAP die_last_minute.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods bail > stringified 1`] = `
ok 1
ok 2
ok 3
ok 4
1..4

`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
ok 1
ok 2
ok 3
ok 4
1..4

`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods default settings > stringified 1`] = `
ok 1
ok 2
ok 3
ok 4
1..4

`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
ok 1
ok 2
ok 3
ok 4
1..4

`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods strict > stringified 1`] = `
ok 1
ok 2
ok 3
ok 4
1..4

`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
ok 1
ok 2
ok 3
ok 4
1..4

`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
ok 1
ok 2
ok 3
ok 4
1..4

`

exports[`test/parser.js TAP die_last_minute.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
ok 1
ok 2
ok 3
ok 4
1..4

`

exports[`test/parser.js TAP die_unfinished.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)
# failed 1 of 3 tests

`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)
# failed 1 of 3 tests

`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)
# failed 1 of 3 tests

`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)
# failed 1 of 3 tests

`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)
# failed 1 of 3 tests

`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)
# failed 1 of 3 tests

`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(3) != plan(4)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)
# failed 1 of 3 tests

`

exports[`test/parser.js TAP die_unfinished.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..4
ok 1
ok 2
ok 3
# test count(3) != plan(4)
# failed 1 of 3 tests

`

exports[`test/parser.js TAP duplicates.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 7\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..10\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 6\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 7\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 8\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 9\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 10\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "line",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 10,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 7,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 8,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 9,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 10,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(11) != plan(10)\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 11 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 11,
      "fail": 1,
      "failures": Array [
        Object {
          "tapError": "incorrect number of tests",
        },
      ],
      "ok": false,
      "pass": 11,
      "plan": FinalPlan {
        "comment": "",
        "end": 10,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser.js TAP duplicates.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..10
ok 1
ok 2
ok 3
ok 4
ok 4
ok 5
ok 6
ok 7
ok 8
ok 9
ok 10
# test count(11) != plan(10)
# failed 1 of 11 tests

`

exports[`test/parser.js TAP echo.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..0

`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..0

`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..0

`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..0

`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..0

`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..0

`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 0,
        "skipAll": true,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..0

`

exports[`test/parser.js TAP echo.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..0

`

exports[`test/parser.js TAP empty-buffered-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok child {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 0,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok child {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 0,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 0,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
# Subtest: child
    
ok 1 - child
1..1

`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
# Subtest: child
    
ok 1 - child
1..1

`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 0,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
# Subtest: child
    
ok 1 - child
1..1

`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
# Subtest: child
    
ok 1 - child
1..1

`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 0,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
# Subtest: child
    
ok 1 - child
1..1

`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
# Subtest: child
    
ok 1 - child
1..1

`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: child\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 0,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 0,
            "skipAll": true,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "fullname": "",
      "id": 1,
      "name": "child",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
# Subtest: child
    
ok 1 - child
1..1

`

exports[`test/parser.js TAP empty-buffered-child.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: child
    
ok 1 - child
1..1

`

exports[`test/parser.js TAP empty-failures.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..2
ok 1
ok 2

`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..2
ok 1
ok 2

`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..2
ok 1
ok 2

`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..2
ok 1
ok 2

`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..2
ok 1
ok 2

`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..2
ok 1
ok 2

`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..2
ok 1
ok 2

`

exports[`test/parser.js TAP empty-failures.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..2
ok 1
ok 2

`

exports[`test/parser.js TAP empty.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..0 # no tests found\\n",
  ],
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "comment": "no tests found",
      "end": 0,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "no tests found",
        "end": 0,
        "skipAll": true,
        "skipReason": "no tests found",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP empty.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..0 # no tests found

`

exports[`test/parser.js TAP escape_eol.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1    Should parse as literal backslash --> \\\\\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Not a continuation line\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1    Should parse as literal backslash --> \\\\\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Not a continuation line\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..2
ok 1 - Should parse as literal backslash --> \\\\
ok 2 - Not a continuation line

`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..2
ok 1 - Should parse as literal backslash --> \\\\
ok 2 - Not a continuation line

`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..2
ok 1 - Should parse as literal backslash --> \\\\
ok 2 - Not a continuation line

`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..2
ok 1 - Should parse as literal backslash --> \\\\
ok 2 - Not a continuation line

`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..2
ok 1 - Should parse as literal backslash --> \\\\
ok 2 - Not a continuation line

`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..2
ok 1 - Should parse as literal backslash --> \\\\
ok 2 - Not a continuation line

`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Should parse as literal backslash --> \\\\",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a continuation line",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..2
ok 1 - Should parse as literal backslash --> \\\\
ok 2 - Not a continuation line

`

exports[`test/parser.js TAP escape_eol.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..2
ok 1 - Should parse as literal backslash --> \\\\
ok 2 - Not a continuation line

`

exports[`test/parser.js TAP escape_hash.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1    Not a \\\\# TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Not a \\\\# SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3    Escaped \\\\\\\\\\\\#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "1..3\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1    Not a \\\\# TODO\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2    Not a \\\\# SKIP\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3    Escaped \\\\\\\\\\\\#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods bail > stringified 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods default settings > stringified 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods strict > stringified 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Not a # TODO",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Not a # SKIP",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "Escaped \\\\#",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser.js TAP escape_hash.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
1..3
ok 1 - Not a \\# TODO
ok 2 - Not a \\# SKIP
ok 3 - Escaped \\\\\\#

`

exports[`test/parser.js TAP extra-in-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/01c-user-updates.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "line",
        "# Subtest: update profile\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "line",
            "ok 2 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 2,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 43.094,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    ok 2 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - update profile # time=43.094ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 1,
          "name": "update profile",
          "ok": true,
          "time": 43.094,
        },
      ],
      Array [
        "line",
        "# Subtest: update email\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update email",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 1,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 1,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 24.16,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "line",
        "null { _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "{ _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - update email # time=24.16ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 2,
          "name": "update email",
          "ok": true,
          "time": 24.16,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 339.14,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: update profile\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "test/01c-user-updates.js update profile",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "test/01c-user-updates.js update profile",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 2 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "test/01c-user-updates.js update profile",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "test/01c-user-updates.js update profile",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - update profile # time=43.094ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: update email\\n",
  ],
  Array [
    "line",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "test/01c-user-updates.js update email",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "test/01c-user-updates.js update email",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - update email # time=24.16ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=174.236ms\\n",
  ],
  Array [
    "line",
    "ok 1 - test/01c-user-updates.js # time=339.14ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/01c-user-updates.js",
      "ok": true,
      "time": 339.14,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 343.487,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: test/01c-user-updates.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "line",
        "# Subtest: update profile\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "line",
            "ok 2 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 2,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "line",
            "1..2\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 43.094,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    ok 2 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..2\\n",
      ],
      Array [
        "line",
        "ok 1 - update profile # time=43.094ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 1,
          "name": "update profile",
          "ok": true,
          "time": 43.094,
        },
      ],
      Array [
        "line",
        "# Subtest: update email\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "line",
            "ok 1 - should be equivalent\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update email",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 1,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 1,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 24.16,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "line",
        "null { _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "{ _id: 'org.couchdb.user:user',\\n",
      ],
      Array [
        "line",
        "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
      ],
      Array [
        "line",
        "  password_scheme: 'pbkdf2',\\n",
      ],
      Array [
        "line",
        "  iterations: 10,\\n",
      ],
      Array [
        "line",
        "  name: 'user',\\n",
      ],
      Array [
        "line",
        "  email: 'new@email.com',\\n",
      ],
      Array [
        "line",
        "  type: 'user',\\n",
      ],
      Array [
        "line",
        "  roles: [],\\n",
      ],
      Array [
        "line",
        "  date: '2015-05-07T18:04:07.589Z',\\n",
      ],
      Array [
        "line",
        "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
      ],
      Array [
        "line",
        "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
      ],
      Array [
        "line",
        "  github: 'user',\\n",
      ],
      Array [
        "line",
        "  homepage: 'http://www.user.com' }\\n",
      ],
      Array [
        "line",
        "    ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 2 - update email # time=24.16ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 2,
          "name": "update email",
          "ok": true,
          "time": 24.16,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 339.14,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: update profile\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "test/01c-user-updates.js update profile",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "test/01c-user-updates.js update profile",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        ok 2 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "test/01c-user-updates.js update profile",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "test/01c-user-updates.js update profile",
      "id": 2,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - update profile # time=43.094ms\\n",
  ],
  Array [
    "line",
    "    # Subtest: update email\\n",
  ],
  Array [
    "line",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "line",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "line",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "line",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "line",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "line",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "line",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "line",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "line",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "line",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "line",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "line",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "line",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "line",
    "        ok 1 - should be equivalent\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "test/01c-user-updates.js update email",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "test/01c-user-updates.js update email",
      "id": 1,
      "name": "should be equivalent",
      "ok": true,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 2 - update email # time=24.16ms\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    # time=174.236ms\\n",
  ],
  Array [
    "line",
    "ok 1 - test/01c-user-updates.js # time=339.14ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/01c-user-updates.js",
      "ok": true,
      "time": 339.14,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 343.487,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 2,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 43.094,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 1,
          "name": "update profile",
          "ok": true,
          "time": 43.094,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update email",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 1,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 24.16,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 2,
          "name": "update email",
          "ok": true,
          "time": 24.16,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 339.14,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/01c-user-updates.js",
      "ok": true,
      "time": 339.14,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 343.487,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms

`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms

`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 2,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 43.094,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 1,
          "name": "update profile",
          "ok": true,
          "time": 43.094,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update email",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 1,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 24.16,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 2,
          "name": "update email",
          "ok": true,
          "time": 24.16,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 339.14,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/01c-user-updates.js",
      "ok": true,
      "time": 339.14,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 343.487,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms

`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms

`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 2,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 43.094,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 1,
          "name": "update profile",
          "ok": true,
          "time": 43.094,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update email",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 1,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 24.16,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 2,
          "name": "update email",
          "ok": true,
          "time": 24.16,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# failed 26 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 26,
          "failures": Array [
            Object {
              "data": "null { _id: 'org.couchdb.user:user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  password_scheme: 'pbkdf2',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  iterations: 10,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  name: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  email: 'new@email.com',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  type: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  roles: [],\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  github: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  homepage: 'http://www.user.com' }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "{ _id: 'org.couchdb.user:user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  password_scheme: 'pbkdf2',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  iterations: 10,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  name: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  email: 'new@email.com',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  type: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  roles: [],\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  github: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  homepage: 'http://www.user.com' }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 339.14,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/01c-user-updates.js",
      "ok": true,
      "time": 339.14,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# failed 26 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 26,
      "failures": Array [
        Object {
          "data": "null { _id: 'org.couchdb.user:user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  password_scheme: 'pbkdf2',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  iterations: 10,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  email: 'new@email.com',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  type: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  roles: [],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  github: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  homepage: 'http://www.user.com' }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "{ _id: 'org.couchdb.user:user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  password_scheme: 'pbkdf2',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  iterations: 10,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  email: 'new@email.com',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  type: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  roles: [],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  github: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  homepage: 'http://www.user.com' }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 343.487,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    # failed 26 of 2 tests
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms
# failed 26 test

`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    # failed 26 of 2 tests
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms
# failed 26 test

`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: test/01c-user-updates.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update profile\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update profile",
              "id": 2,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
              "plan": FinalPlan {
                "comment": "",
                "end": 2,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 43.094,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 1,
          "name": "update profile",
          "ok": true,
          "time": 43.094,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: update email\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "test/01c-user-updates.js update email",
              "id": 1,
              "name": "should be equivalent",
              "ok": true,
            },
          ],
          Array [
            "plan",
            Object {
              "end": 1,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 1,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": 24.16,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "test/01c-user-updates.js",
          "id": 2,
          "name": "update email",
          "ok": true,
          "time": 24.16,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=174.236ms\\n",
      ],
      Array [
        "comment",
        "# failed 26 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 26,
          "failures": Array [
            Object {
              "data": "null { _id: 'org.couchdb.user:user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  password_scheme: 'pbkdf2',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  iterations: 10,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  name: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  email: 'new@email.com',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  type: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  roles: [],\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  github: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  homepage: 'http://www.user.com' }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "{ _id: 'org.couchdb.user:user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  password_scheme: 'pbkdf2',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  iterations: 10,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  name: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  email: 'new@email.com',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  type: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  roles: [],\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  github: 'user',\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  homepage: 'http://www.user.com' }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 339.14,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "    null { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "extra",
    "    { _id: 'org.couchdb.user:user',\\n",
  ],
  Array [
    "extra",
    "      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
  ],
  Array [
    "extra",
    "      password_scheme: 'pbkdf2',\\n",
  ],
  Array [
    "extra",
    "      iterations: 10,\\n",
  ],
  Array [
    "extra",
    "      name: 'user',\\n",
  ],
  Array [
    "extra",
    "      email: 'new@email.com',\\n",
  ],
  Array [
    "extra",
    "      type: 'user',\\n",
  ],
  Array [
    "extra",
    "      roles: [],\\n",
  ],
  Array [
    "extra",
    "      date: '2015-05-07T18:04:07.589Z',\\n",
  ],
  Array [
    "extra",
    "      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
  ],
  Array [
    "extra",
    "      salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
  ],
  Array [
    "extra",
    "      github: 'user',\\n",
  ],
  Array [
    "extra",
    "      homepage: 'http://www.user.com' }\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "test/01c-user-updates.js",
      "ok": true,
      "time": 339.14,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=343.487ms\\n",
  ],
  Array [
    "comment",
    "# failed 26 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 26,
      "failures": Array [
        Object {
          "data": "null { _id: 'org.couchdb.user:user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  _rev: '21-3d786fbf7428194ca288abe40c50cd0c',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  password_scheme: 'pbkdf2',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  iterations: 10,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  email: 'new@email.com',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  type: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  roles: [],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  github: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  homepage: 'http://www.user.com' }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "{ _id: 'org.couchdb.user:user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  password_scheme: 'pbkdf2',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  iterations: 10,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  name: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  email: 'new@email.com',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  type: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  roles: [],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  date: '2015-05-07T18:04:07.589Z',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  salt: '74e7dea17bfe520bb84dd9642f072549',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  github: 'user',\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  homepage: 'http://www.user.com' }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 343.487,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    # failed 26 of 2 tests
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms
# failed 26 test

`

exports[`test/parser.js TAP extra-in-child.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: test/01c-user-updates.js
    # Subtest: update profile
        ok 1 - should be equivalent
        ok 2 - should be equivalent
        1..2
    ok 1 - update profile # time=43.094ms
    # Subtest: update email
        ok 1 - should be equivalent
        1..1
    ok 2 - update email # time=24.16ms
    1..2
    # time=174.236ms
    # failed 26 of 2 tests
    null { _id: 'org.couchdb.user:user',
      _rev: '21-3d786fbf7428194ca288abe40c50cd0c',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
    { _id: 'org.couchdb.user:user',
      _rev: '22-97703c62ab1f01ea691d40aa8a756cbf',
      password_scheme: 'pbkdf2',
      iterations: 10,
      name: 'user',
      email: 'new@email.com',
      type: 'user',
      roles: [],
      date: '2015-05-07T18:04:07.589Z',
      derived_key: 'efcfbc73438a9d122290e5d0c82d1ca7d0a9ba1f',
      salt: '74e7dea17bfe520bb84dd9642f072549',
      github: 'user',
      homepage: 'http://www.user.com' }
ok 1 - test/01c-user-updates.js # time=339.14ms
1..1
# time=343.487ms
# failed 26 test

`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "line",
    "# Subtest: maybe a child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "maybe a child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "maybe a child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "maybe a child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok maybe a child\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "line",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
Bail out!

`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
Bail out!

`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "maybe a child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok 1
ok 2 - maybe a child
# test count(2) != plan(null)
# failed 2 of 2 tests

`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok 1
ok 2 - maybe a child
# test count(2) != plan(null)
# failed 2 of 2 tests

`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "maybe a child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 5 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 5,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  some: diags\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Object {
          "data": "  ---\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok 1
ok 2 - maybe a child
# test count(2) != plan(null)
# failed 5 of 2 tests

`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
  ---
# Subtest: maybe a child
    1..1
    ok 1
ok 2 - maybe a child
# test count(2) != plan(null)
# failed 5 of 2 tests

`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "extra",
    "  some: diags\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 3,
      "failures": Array [
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  some: diags\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
Bail out!

`

exports[`test/parser.js TAP fail-right-before-indented-child-diag.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
not ok 1
  ...
  some: diags
Bail out!

`

exports[`test/parser.js TAP fail-right-before-indented-child.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "# Subtest: maybe a child\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "maybe a child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    ok\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "maybe a child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "maybe a child",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok maybe a child\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "line",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
not ok 1
Bail out!

`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
not ok 1
Bail out!

`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "maybe a child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
not ok 1
# Subtest: maybe a child
    1..1
    ok 1
ok 2 - maybe a child
# test count(2) != plan(null)
# failed 2 of 2 tests

`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
not ok 1
# Subtest: maybe a child
    1..1
    ok 1
ok 2 - maybe a child
# test count(2) != plan(null)
# failed 2 of 2 tests

`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: maybe a child\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "maybe a child",
          "id": 1,
          "ok": true,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "maybe a child",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# test count(2) != plan(null)\\n",
  ],
  Array [
    "comment",
    "# failed 2 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
        Object {
          "tapError": "no plan",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
not ok 1
# Subtest: maybe a child
    1..1
    ok 1
ok 2 - maybe a child
# test count(2) != plan(null)
# failed 2 of 2 tests

`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
not ok 1
# Subtest: maybe a child
    1..1
    ok 1
ok 2 - maybe a child
# test count(2) != plan(null)
# failed 2 of 2 tests

`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
not ok 1
Bail out!

`

exports[`test/parser.js TAP fail-right-before-indented-child.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
not ok 1
Bail out!

`

exports[`test/parser.js TAP garbage-yamlish.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "extra",
    String(
        ---
        message: "Failed with error 'hostname peebles.example.com not found'"
        severity: fail
      
    ),
  ],
  Array [
    "line",
    " this is not valid yamlish\\n",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "line",
    "ok 2 But this is not garbage\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "But this is not garbage",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "But this is not garbage",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "But this is not garbage",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3 truncating the yamlish\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  here: is some yaml\\n",
  ],
  Array [
    "line",
    "  i: guess\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "truncating the yamlish",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "truncating the yamlish",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 3,
      "name": "truncating the yamlish",
      "ok": false,
    },
  ],
  Array [
    "extra",
    String(
        ---
        here: is some yaml
        i: guess
      
    ),
  ],
  Array [
    "line",
    "not ok 4 this is truncated weirdly\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "this is truncated weirdly",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "this is truncated weirdly",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 4,
      "name": "this is truncated weirdly",
      "ok": false,
    },
  ],
  Array [
    "line",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "extra",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 3 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 3 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 3,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 3,
          "name": "truncating the yamlish",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 4,
          "name": "this is truncated weirdly",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  message: \\"Failed with error 'hostname peebles.example.com not found'\\"\\n",
  ],
  Array [
    "line",
    "  severity: fail\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! de-indenting the yamlish wrongly.\\n",
  ],
  Array [
    "bailout",
    "de-indenting the yamlish wrongly.",
  ],
  Array [
    "line",
    " this is not valid yamlish\\n",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "de-indenting the yamlish wrongly.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "de-indenting the yamlish wrongly.",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "de-indenting the yamlish wrongly.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
Bail out! de-indenting the yamlish wrongly.
 this is not valid yamlish

`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
Bail out! de-indenting the yamlish wrongly.
 this is not valid yamlish

`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "extra",
    String(
        ---
        message: "Failed with error 'hostname peebles.example.com not found'"
        severity: fail
      
    ),
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "But this is not garbage",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "truncating the yamlish",
      "ok": false,
    },
  ],
  Array [
    "extra",
    String(
        ---
        here: is some yaml
        i: guess
      
    ),
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "this is truncated weirdly",
      "ok": false,
    },
  ],
  Array [
    "extra",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 3 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 3,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 3,
          "name": "truncating the yamlish",
          "ok": false,
        },
        Result {
          "fullname": "",
          "id": 4,
          "name": "this is truncated weirdly",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
  ---
  message: "Failed with error 'hostname peebles.example.com not found'"
  severity: fail
 this is not valid yamlish
ok 2 - But this is not garbage
not ok 3 - truncating the yamlish
  ---
  here: is some yaml
  i: guess
not ok 4 - this is truncated weirdly
     not ok 99 this is not a child test
1..4
# failed 3 of 4 tests

`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
  ---
  message: "Failed with error 'hostname peebles.example.com not found'"
  severity: fail
 this is not valid yamlish
ok 2 - But this is not garbage
not ok 3 - truncating the yamlish
  ---
  here: is some yaml
  i: guess
not ok 4 - this is truncated weirdly
     not ok 99 this is not a child test
1..4
# failed 3 of 4 tests

`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "extra",
    String(
        ---
        message: "Failed with error 'hostname peebles.example.com not found'"
        severity: fail
      
    ),
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "But this is not garbage",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "truncating the yamlish",
      "ok": false,
    },
  ],
  Array [
    "extra",
    String(
        ---
        here: is some yaml
        i: guess
      
    ),
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "this is truncated weirdly",
      "ok": false,
    },
  ],
  Array [
    "extra",
    "     not ok 99 this is not a child test\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 7 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 7,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "ok": false,
        },
        Object {
          "data": String(
              ---
              message: "Failed with error 'hostname peebles.example.com not found'"
              severity: fail
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": " this is not valid yamlish\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "fullname": "",
          "id": 3,
          "name": "truncating the yamlish",
          "ok": false,
        },
        Object {
          "data": String(
              ---
              here: is some yaml
              i: guess
            
          ),
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "     not ok 99 this is not a child test\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "fullname": "",
          "id": 4,
          "name": "this is truncated weirdly",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
  ---
  message: "Failed with error 'hostname peebles.example.com not found'"
  severity: fail
 this is not valid yamlish
ok 2 - But this is not garbage
not ok 3 - truncating the yamlish
  ---
  here: is some yaml
  i: guess
not ok 4 - this is truncated weirdly
     not ok 99 this is not a child test
1..4
# failed 7 of 4 tests

`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
  ---
  message: "Failed with error 'hostname peebles.example.com not found'"
  severity: fail
 this is not valid yamlish
ok 2 - But this is not garbage
not ok 3 - truncating the yamlish
  ---
  here: is some yaml
  i: guess
not ok 4 - this is truncated weirdly
     not ok 99 this is not a child test
1..4
# failed 7 of 4 tests

`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "de-indenting the yamlish wrongly.",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "de-indenting the yamlish wrongly.",
  ],
  Array [
    "extra",
    " this is not valid yamlish\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "de-indenting the yamlish wrongly.",
      "count": 1,
      "fail": 2,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "de-indenting the yamlish wrongly.",
          "ok": false,
        },
        Object {
          "data": " this is not valid yamlish\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
Bail out! de-indenting the yamlish wrongly.
 this is not valid yamlish

`

exports[`test/parser.js TAP garbage-yamlish.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
not ok 1 - de-indenting the yamlish wrongly.
Bail out! de-indenting the yamlish wrongly.
 this is not valid yamlish

`

exports[`test/parser.js TAP giving-up.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..573\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "database handle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..573\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "line",
    "not ok 1 - database handle\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out! Couldn't connect to database.\\n",
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "database handle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "database handle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..573
not ok 1 - database handle
Bail out! Couldn't connect to database.

`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..573
not ok 1 - database handle
Bail out! Couldn't connect to database.

`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "database handle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..573
not ok 1 - database handle
Bail out! Couldn't connect to database.

`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..573
not ok 1 - database handle
Bail out! Couldn't connect to database.

`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "database handle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..573
not ok 1 - database handle
Bail out! Couldn't connect to database.

`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..573
not ok 1 - database handle
Bail out! Couldn't connect to database.

`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 573,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "database handle",
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "Couldn't connect to database.",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "Couldn't connect to database.",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 1,
          "name": "database handle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 573,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..573
not ok 1 - database handle
Bail out! Couldn't connect to database.

`

exports[`test/parser.js TAP giving-up.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..573
not ok 1 - database handle
Bail out! Couldn't connect to database.

`

exports[`test/parser.js TAP got-spare-tuits.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - Creating test program\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - Test program runs, no error\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3 - infinite loop # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "line",
    "not ok 4 - infinite loop 2 # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "line",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1 - Creating test program\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - Test program runs, no error\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 3 - infinite loop # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "line",
    "not ok 4 - infinite loop 2 # TODO halting problem unsolved\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "line",
    "# todo: 2\\n",
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..4
ok 1 - Creating test program
ok 2 - Test program runs, no error
not ok 3 - infinite loop # TODO halting problem unsolved
not ok 4 - infinite loop 2 # TODO halting problem unsolved
# todo: 2

`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..4
ok 1 - Creating test program
ok 2 - Test program runs, no error
not ok 3 - infinite loop # TODO halting problem unsolved
not ok 4 - infinite loop 2 # TODO halting problem unsolved
# todo: 2

`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..4
ok 1 - Creating test program
ok 2 - Test program runs, no error
not ok 3 - infinite loop # TODO halting problem unsolved
not ok 4 - infinite loop 2 # TODO halting problem unsolved
# todo: 2

`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..4
ok 1 - Creating test program
ok 2 - Test program runs, no error
not ok 3 - infinite loop # TODO halting problem unsolved
not ok 4 - infinite loop 2 # TODO halting problem unsolved
# todo: 2

`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..4
ok 1 - Creating test program
ok 2 - Test program runs, no error
not ok 3 - infinite loop # TODO halting problem unsolved
not ok 4 - infinite loop 2 # TODO halting problem unsolved
# todo: 2

`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..4
ok 1 - Creating test program
ok 2 - Test program runs, no error
not ok 3 - infinite loop # TODO halting problem unsolved
not ok 4 - infinite loop 2 # TODO halting problem unsolved
# todo: 2

`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Creating test program",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Test program runs, no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "infinite loop",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "infinite loop 2",
      "ok": false,
      "todo": "halting problem unsolved",
    },
  ],
  Array [
    "comment",
    "# todo: 2\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 2,
    },
  ],
]
`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..4
ok 1 - Creating test program
ok 2 - Test program runs, no error
not ok 3 - infinite loop # TODO halting problem unsolved
not ok 4 - infinite loop 2 # TODO halting problem unsolved
# todo: 2

`

exports[`test/parser.js TAP got-spare-tuits.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..4
ok 1 - Creating test program
ok 2 - Test program runs, no error
not ok 3 - infinite loop # TODO halting problem unsolved
not ok 4 - infinite loop 2 # TODO halting problem unsolved
# todo: 2

`

exports[`test/parser.js TAP hashes.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - contains \\\\# hash\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - directive # todo \\\\# x # y\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "line",
    "ok 3 - escaped \\\\\\\\ slash \\\\\\\\# todo true\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "line",
    "ok 4 - not todo # hash # todo\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5 - yes todo # todo # hash\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "line",
    "ok 6 - not todo \\\\# hash \\\\# todo\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# todo: 3\\n",
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser.js TAP hashes.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - contains \\\\# hash\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2 - directive # todo \\\\# x # y\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "line",
    "ok 3 - escaped \\\\\\\\ slash \\\\\\\\# todo true\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "line",
    "ok 4 - not todo # hash # todo\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5 - yes todo # todo # hash\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "line",
    "ok 6 - not todo \\\\# hash \\\\# todo\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "line",
    "1..6\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# todo: 3\\n",
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser.js TAP hashes.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser.js TAP head_end.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# comment\\n",
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "line",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# comment\\n",
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "line",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods bail > stringified 1`] = `
# comments
ok 1
ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more

`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
# comments
ok 1
ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more

`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods default settings > stringified 1`] = `
# comments
ok 1
ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more

`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
# comments
ok 1
ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more

`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods strict > stringified 1`] = `
# comments
ok 1
ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more

`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
# comments
ok 1
ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more

`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
# comments
ok 1
ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more

`

exports[`test/parser.js TAP head_end.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
# comments
ok 1
ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more

`

exports[`test/parser.js TAP head_fail.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "# comment\\n",
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "line",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "line",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "# comments\\n",
  ],
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "not ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "line",
    "Bail out!\\n",
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods bail > stringified 1`] = `
# comments
ok 1
not ok 2
Bail out!

`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
# comments
ok 1
not ok 2
Bail out!

`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods default settings > stringified 1`] = `
# comments
ok 1
not ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more
# failed 1 of 4 tests

`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
# comments
ok 1
not ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more
# failed 1 of 4 tests

`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# more ignored stuff\\n",
  ],
  Array [
    "comment",
    "# and yet more\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 4 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods strict > stringified 1`] = `
# comments
ok 1
not ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more
# failed 1 of 4 tests

`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
# comments
ok 1
not ok 2
ok 3
ok 4
# comment
1..4
# more ignored stuff
# and yet more
# failed 1 of 4 tests

`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# comments\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": false,
    },
  ],
  Array [
    "bailout",
    "",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": true,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Result {
          "fullname": "",
          "id": 2,
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
# comments
ok 1
not ok 2
Bail out!

`

exports[`test/parser.js TAP head_fail.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
# comments
ok 1
not ok 2
Bail out!

`

exports[`test/parser.js TAP implicit-counter.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok one\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok two\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok three\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok four\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# after 4\\n",
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# before 1\\n",
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "line",
    "ok one\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok two\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# before 3\\n",
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "line",
    "ok three\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok four\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "line",
    "# after 4\\n",
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "line",
    "1..4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "line",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "line",
    "# ok\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
# before 1
ok 1 - one
ok 2 - two
# before 3
ok 3 - three
ok 4 - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
# before 1
ok 1 - one
ok 2 - two
# before 3
ok 3 - three
ok 4 - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
# before 1
ok 1 - one
ok 2 - two
# before 3
ok 3 - three
ok 4 - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
# before 1
ok 1 - one
ok 2 - two
# before 3
ok 3 - three
ok 4 - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
# before 1
ok 1 - one
ok 2 - two
# before 3
ok 3 - three
ok 4 - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
# before 1
ok 1 - one
ok 2 - two
# before 3
ok 3 - three
ok 4 - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# before 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "one",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "two",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# before 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "three",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "four",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# after 4\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# tests 4\\n",
  ],
  Array [
    "comment",
    "# pass  4\\n",
  ],
  Array [
    "comment",
    "# ok\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 4,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
# before 1
ok 1 - one
ok 2 - two
# before 3
ok 3 - three
ok 4 - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser.js TAP implicit-counter.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
# before 1
ok 1 - one
ok 2 - two
# before 3
ok 3 - three
ok 4 - four
# after 4
1..4
# tests 4
# pass  4
# ok

`

exports[`test/parser.js TAP indent.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# nesting\\n",
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "line",
    "# Subtest: first\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - true is ok # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
    },
  ],
  Array [
    "line",
    "# Subtest: second\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok 1 - no plan # time=1.001ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
        },
      ],
      Array [
        "line",
        "# Subtest: this passes\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 1,
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "line",
            "ok grandson # time=1.001s\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap\\n",
          ],
          Array [
            "line",
            "  it: is yaml\\n",
          ],
          Array [
            "line",
            "  ...\\n",
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "id": 2,
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "line",
            "not ok grandchild # TODO\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap or yaml\\n",
          ],
          Array [
            "line",
            "  it: is garbage\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 3,
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "line",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "line",
            "# skip: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 2,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    not ok granddaughter # SKIP for no raisin\\n",
      ],
      Array [
        "line",
        "    ok grandson # time=1.001s\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap\\n",
      ],
      Array [
        "line",
        "      it: is yaml\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "    not ok grandchild # TODO\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap or yaml\\n",
      ],
      Array [
        "line",
        "      it: is garbage\\n",
      ],
      Array [
        "line",
        "    # todo: 1\\n",
      ],
      Array [
        "line",
        "    # skip: 1\\n",
      ],
      Array [
        "line",
        "ok 2 - this passes # time=1.200s\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 1.2,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "time": 1.001,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "second",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "time": 1.001,
    },
  ],
  Array [
    "line",
    "    # Subtest: this passes\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        not ok granddaughter # SKIP for no raisin\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second this passes",
      "id": 1,
      "name": "granddaughter",
      "ok": false,
      "skip": "for no raisin",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "second this passes",
      "id": 1,
      "name": "granddaughter",
      "ok": false,
      "skip": "for no raisin",
    },
  ],
  Array [
    "line",
    "        ok grandson # time=1.001s\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap\\n",
  ],
  Array [
    "line",
    "          it: is yaml\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "it": "is yaml",
        "ok": 1,
        "this": "is not tap",
      },
      "fullname": "second this passes",
      "id": 2,
      "name": "grandson",
      "ok": true,
      "time": 1001,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Object {
        "it": "is yaml",
        "ok": 1,
        "this": "is not tap",
      },
      "fullname": "second this passes",
      "id": 2,
      "name": "grandson",
      "ok": true,
      "time": 1001,
    },
  ],
  Array [
    "line",
    "        not ok grandchild # TODO\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap or yaml\\n",
  ],
  Array [
    "line",
    "          it: is garbage\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second this passes",
      "id": 3,
      "name": "grandchild",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "second this passes",
      "id": 3,
      "name": "grandchild",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "line",
    "        # todo: 1\\n",
  ],
  Array [
    "line",
    "        # skip: 1\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes # time=1.200s\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 2 - second # time=1.200ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indent.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# nesting\\n",
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "line",
    "# Subtest: first\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "line",
        "ok 1 - true is ok # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "line",
        "ok 2 - doag is also okay # time=1.234ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "    ok 1 - true is ok # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 1,
      "name": "true is ok",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "line",
    "    ok 2 - doag is also okay # time=1.234ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "first",
      "id": 2,
      "name": "doag is also okay",
      "ok": true,
      "time": 1.234,
    },
  ],
  Array [
    "line",
    "ok 1 - first # time=2.589ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
    },
  ],
  Array [
    "line",
    "# Subtest: second\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "line",
        "ok 1 - no plan # time=1.001ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
        },
      ],
      Array [
        "line",
        "# Subtest: this passes\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "line",
            "1..3\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "line",
            "not ok granddaughter # SKIP for no raisin\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 1,
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "line",
            "ok grandson # time=1.001s\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap\\n",
          ],
          Array [
            "line",
            "  it: is yaml\\n",
          ],
          Array [
            "line",
            "  ...\\n",
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "id": 2,
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "line",
            "not ok grandchild # TODO\\n",
          ],
          Array [
            "line",
            "  ---\\n",
          ],
          Array [
            "line",
            "  ok: 1\\n",
          ],
          Array [
            "line",
            "  this: is not tap or yaml\\n",
          ],
          Array [
            "line",
            "  it: is garbage\\n",
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 3,
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "line",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "line",
            "# skip: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 2,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "line",
        "    1..3\\n",
      ],
      Array [
        "line",
        "    not ok granddaughter # SKIP for no raisin\\n",
      ],
      Array [
        "line",
        "    ok grandson # time=1.001s\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap\\n",
      ],
      Array [
        "line",
        "      it: is yaml\\n",
      ],
      Array [
        "line",
        "      ...\\n",
      ],
      Array [
        "line",
        "    not ok grandchild # TODO\\n",
      ],
      Array [
        "line",
        "      ---\\n",
      ],
      Array [
        "line",
        "      ok: 1\\n",
      ],
      Array [
        "line",
        "      this: is not tap or yaml\\n",
      ],
      Array [
        "line",
        "      it: is garbage\\n",
      ],
      Array [
        "line",
        "    # todo: 1\\n",
      ],
      Array [
        "line",
        "    # skip: 1\\n",
      ],
      Array [
        "line",
        "ok 2 - this passes # time=1.200s\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 1.2,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - no plan # time=1.001ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "time": 1.001,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "second",
      "id": 1,
      "name": "no plan",
      "ok": true,
      "time": 1.001,
    },
  ],
  Array [
    "line",
    "    # Subtest: this passes\\n",
  ],
  Array [
    "line",
    "        1..3\\n",
  ],
  Array [
    "line",
    "        not ok granddaughter # SKIP for no raisin\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second this passes",
      "id": 1,
      "name": "granddaughter",
      "ok": false,
      "skip": "for no raisin",
    },
  ],
  Array [
    "skip",
    Result {
      "fullname": "second this passes",
      "id": 1,
      "name": "granddaughter",
      "ok": false,
      "skip": "for no raisin",
    },
  ],
  Array [
    "line",
    "        ok grandson # time=1.001s\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap\\n",
  ],
  Array [
    "line",
    "          it: is yaml\\n",
  ],
  Array [
    "line",
    "          ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "it": "is yaml",
        "ok": 1,
        "this": "is not tap",
      },
      "fullname": "second this passes",
      "id": 2,
      "name": "grandson",
      "ok": true,
      "time": 1001,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Object {
        "it": "is yaml",
        "ok": 1,
        "this": "is not tap",
      },
      "fullname": "second this passes",
      "id": 2,
      "name": "grandson",
      "ok": true,
      "time": 1001,
    },
  ],
  Array [
    "line",
    "        not ok grandchild # TODO\\n",
  ],
  Array [
    "line",
    "          ---\\n",
  ],
  Array [
    "line",
    "          ok: 1\\n",
  ],
  Array [
    "line",
    "          this: is not tap or yaml\\n",
  ],
  Array [
    "line",
    "          it: is garbage\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "second this passes",
      "id": 3,
      "name": "grandchild",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "todo",
    Result {
      "fullname": "second this passes",
      "id": 3,
      "name": "grandchild",
      "ok": false,
      "todo": true,
    },
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "line",
    "        # todo: 1\\n",
  ],
  Array [
    "line",
    "        # skip: 1\\n",
  ],
  Array [
    "line",
    "    ok 2 - this passes # time=1.200s\\n",
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 2 - second # time=1.200ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 1,
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "id": 2,
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 3,
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 2,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 1.2,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok 1 - granddaughter # SKIP for no raisin
        ok 2 - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok 3 - grandchild # TODO
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok 1 - granddaughter # SKIP for no raisin
        ok 2 - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok 3 - grandchild # TODO
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 1,
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "id": 2,
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 3,
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 2,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 1.2,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok 1 - granddaughter # SKIP for no raisin
        ok 2 - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok 3 - grandchild # TODO
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok 1 - granddaughter # SKIP for no raisin
        ok 2 - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok 3 - grandchild # TODO
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 1,
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "id": 2,
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 3,
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "comment",
            "# failed 3 of 3 tests\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 3,
              "failures": Array [
                Object {
                  "data": String(
                      ---
                      ok: 1
                      this: is not tap or yaml
                      it: is garbage
                    
                  ),
                  "tapError": "Non-TAP data encountered in strict mode",
                },
              ],
              "ok": false,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 1,
          "failures": Array [
            Object {
              "data": String(
                  ---
                  ok: 1
                  this: is not tap or yaml
                  it: is garbage
                
              ),
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 1.2,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok 1 - granddaughter # SKIP for no raisin
        ok 2 - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok 3 - grandchild # TODO
        # failed 3 of 3 tests
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
    # failed 1 of 2 tests
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok 1 - granddaughter # SKIP for no raisin
        ok 2 - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok 3 - grandchild # TODO
        # failed 3 of 3 tests
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
    # failed 1 of 2 tests
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# nesting\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: first\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 1,
          "name": "true is ok",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "assert",
        Result {
          "fullname": "first",
          "id": 2,
          "name": "doag is also okay",
          "ok": true,
          "time": 1.234,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 2.589,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "first",
      "ok": true,
      "time": 2.589,
    },
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: second\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 1,
          "name": "no plan",
          "ok": true,
          "time": 1.001,
        },
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: this passes\\n",
          ],
          Array [
            "plan",
            Object {
              "end": 3,
              "start": 1,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 1,
              "name": "granddaughter",
              "ok": false,
              "skip": "for no raisin",
            },
          ],
          Array [
            "assert",
            Result {
              "diag": Object {
                "it": "is yaml",
                "ok": 1,
                "this": "is not tap",
              },
              "fullname": "second this passes",
              "id": 2,
              "name": "grandson",
              "ok": true,
              "time": 1001,
            },
          ],
          Array [
            "assert",
            Result {
              "fullname": "second this passes",
              "id": 3,
              "name": "grandchild",
              "ok": false,
              "todo": true,
            },
          ],
          Array [
            "comment",
            "# failed 3 of 3 tests\\n",
          ],
          Array [
            "comment",
            "# todo: 1\\n",
          ],
          Array [
            "comment",
            "# skip: 1\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 3,
              "fail": 3,
              "failures": Array [
                Object {
                  "data": String(
                      ---
                      ok: 1
                      this: is not tap or yaml
                      it: is garbage
                    
                  ),
                  "tapError": "Non-TAP data encountered in strict mode",
                },
              ],
              "ok": false,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 3,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 1,
              "time": 1200,
              "todo": 1,
            },
          ],
        ],
      ],
      Array [
        "assert",
        Result {
          "fullname": "second",
          "id": 2,
          "name": "this passes",
          "ok": true,
          "time": 1200,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 1,
          "failures": Array [
            Object {
              "data": String(
                  ---
                  ok: 1
                  this: is not tap or yaml
                  it: is garbage
                
              ),
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 2,
          "plan": FinalPlan {
            "comment": "",
            "end": 2,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 1.2,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    String(
                ---
                ok: 1
                this: is not tap or yaml
                it: is garbage
      
    ),
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "second",
      "ok": true,
      "time": 1.2,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok 1 - granddaughter # SKIP for no raisin
        ok 2 - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok 3 - grandchild # TODO
        # failed 3 of 3 tests
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
    # failed 1 of 2 tests
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser.js TAP indent.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
1..2
# nesting
# Subtest: first
    1..2
    ok 1 - true is ok # time=1.234ms
    ok 2 - doag is also okay # time=1.234ms
ok 1 - first # time=2.589ms
# Subtest: second
    ok 1 - no plan # time=1.001ms
    # Subtest: this passes
        1..3
        not ok 1 - granddaughter # SKIP for no raisin
        ok 2 - grandson # time=1001ms
          ---
          ok: 1
          this: is not tap
          it: is yaml
          ...
        not ok 3 - grandchild # TODO
        # failed 3 of 3 tests
        # todo: 1
        # skip: 1
    ok 2 - this passes # time=1200ms
    1..2
    # failed 1 of 2 tests
          ---
          ok: 1
          this: is not tap or yaml
          it: is garbage
ok 2 - second # time=1.2ms

`

exports[`test/parser.js TAP indented-stdout-noise.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: index.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "line",
        "# Subtest: boom\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "line",
            "# Subtest: npm install package line\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "line",
                "$ npm install package\\n",
              ],
              Array [
                "line",
                "var package = require('package')(); // contains package.json data.\\n",
              ],
              Array [
                "line",
                "var yourAwesomeModule = {};\\n",
              ],
              Array [
                "line",
                "yourAwesomeModule.version = package.version;\\n",
              ],
              Array [
                "line",
                "1..0 # no tests found\\n",
              ],
              Array [
                "plan",
                Object {
                  "comment": "no tests found",
                  "end": 0,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 0,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
            ],
          ],
          Array [
            "line",
            "    $ npm install package\\n",
          ],
          Array [
            "line",
            "    var package = require('package')(); // contains package.json data.\\n",
          ],
          Array [
            "line",
            "    var yourAwesomeModule = {};\\n",
          ],
          Array [
            "line",
            "    yourAwesomeModule.version = package.version;\\n",
          ],
          Array [
            "line",
            "1..0\\n",
          ],
          Array [
            "line",
            "    1..0 # no tests found\\n",
          ],
          Array [
            "line",
            "1..0 # no tests found\\n",
          ],
          Array [
            "plan",
            Object {
              "comment": "no tests found",
              "end": 0,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 0,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "line",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "line",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "line",
        "This module provides an easy way to export package.json data.\\n",
      ],
      Array [
        "line",
        "It contains auto-discovery functionality, which means that it will\\n",
      ],
      Array [
        "line",
        "find your package.json file automatically. Cool, ugh?\\n",
      ],
      Array [
        "line",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "line",
        "    # Subtest: npm install package line\\n",
      ],
      Array [
        "line",
        "        $ npm install package\\n",
      ],
      Array [
        "line",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "line",
        "        var package = require('package')(); // contains package.json data.\\n",
      ],
      Array [
        "line",
        "        var yourAwesomeModule = {};\\n",
      ],
      Array [
        "line",
        "        yourAwesomeModule.version = package.version;\\n",
      ],
      Array [
        "line",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "line",
        "Bug fixes and features are welcomed.\\n",
      ],
      Array [
        "line",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "line",
        "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
      ],
      Array [
        "line",
        "- JSON.parse + fs.readFile\\n",
      ],
      Array [
        "line",
        "## License\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "line",
        "MIT License\\n",
      ],
      Array [
        "line",
        "Copyright (C) 2011 Veselin Todorov\\n",
      ],
      Array [
        "line",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
      ],
      Array [
        "line",
        "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
      ],
      Array [
        "line",
        "the Software without restriction, including without limitation the rights to\\n",
      ],
      Array [
        "line",
        "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
      ],
      Array [
        "line",
        "of the Software, and to permit persons to whom the Software is furnished to do\\n",
      ],
      Array [
        "line",
        "so, subject to the following conditions:\\n",
      ],
      Array [
        "line",
        "The above copyright notice and this permission notice shall be included in all\\n",
      ],
      Array [
        "line",
        "copies or substantial portions of the Software.\\n",
      ],
      Array [
        "line",
        "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
      ],
      Array [
        "line",
        "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
      ],
      Array [
        "line",
        "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
      ],
      Array [
        "line",
        "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
      ],
      Array [
        "line",
        "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
      ],
      Array [
        "line",
        "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
      ],
      Array [
        "line",
        "SOFTWARE.\\n",
      ],
      Array [
        "line",
        "    1..0\\n",
      ],
      Array [
        "line",
        "        1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "    1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "ok 1 - boom # time=5.26ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "index.js",
          "id": 1,
          "name": "boom",
          "ok": true,
          "time": 5.26,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: boom\\n",
  ],
  Array [
    "line",
    "    # package - Easy package.json exports.\\n",
  ],
  Array [
    "line",
    "    ## Intro\\n",
  ],
  Array [
    "line",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "line",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "line",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "line",
    "    ## Installation\\n",
  ],
  Array [
    "line",
    "        # Subtest: npm install package line\\n",
  ],
  Array [
    "line",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "line",
    "    ## Usage\\n",
  ],
  Array [
    "line",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "line",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "line",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "line",
    "    ## Contribution\\n",
  ],
  Array [
    "line",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "line",
    "    ## Other similar modules\\n",
  ],
  Array [
    "line",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "line",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "line",
    "    ## License\\n",
  ],
  Array [
    "line",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "line",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "line",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "line",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "line",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "line",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "line",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "line",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "line",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "line",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "line",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "line",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "line",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "line",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "line",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "line",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "line",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "line",
    "        1..0\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "line",
    "            1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "        1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "    ok 1 - boom # time=5.26ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "index.js",
      "id": 1,
      "name": "boom",
      "ok": true,
      "time": 5.26,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "index.js",
      "id": 1,
      "name": "boom",
      "ok": true,
      "time": 5.26,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # time=12.555ms\\n",
  ],
  Array [
    "line",
    "not ok 1 - index.js # time=201.609ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  arguments:\\n",
  ],
  Array [
    "line",
    "    - index.js\\n",
  ],
  Array [
    "line",
    "  timeout: 30000\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 1\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "  command: /usr/local/bin/iojs\\n",
  ],
  Array [
    "line",
    "  file: index.js\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "# time=209.666ms\\n",
  ],
  Array [
    "comment",
    "# time=209.666ms\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
            "results": Object {
              "count": 1,
              "ok": false,
              "pass": 1,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
            },
            "timeout": 30000,
          },
          "fullname": "",
          "id": 1,
          "name": "index.js",
          "ok": false,
          "time": 201.609,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 209.666,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: index.js\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "line",
        "# Subtest: boom\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "line",
            "# Subtest: npm install package line\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "line",
                "$ npm install package\\n",
              ],
              Array [
                "line",
                "var package = require('package')(); // contains package.json data.\\n",
              ],
              Array [
                "line",
                "var yourAwesomeModule = {};\\n",
              ],
              Array [
                "line",
                "yourAwesomeModule.version = package.version;\\n",
              ],
              Array [
                "line",
                "1..0 # no tests found\\n",
              ],
              Array [
                "plan",
                Object {
                  "comment": "no tests found",
                  "end": 0,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 0,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
            ],
          ],
          Array [
            "line",
            "    $ npm install package\\n",
          ],
          Array [
            "line",
            "    var package = require('package')(); // contains package.json data.\\n",
          ],
          Array [
            "line",
            "    var yourAwesomeModule = {};\\n",
          ],
          Array [
            "line",
            "    yourAwesomeModule.version = package.version;\\n",
          ],
          Array [
            "line",
            "1..0\\n",
          ],
          Array [
            "line",
            "    1..0 # no tests found\\n",
          ],
          Array [
            "line",
            "1..0 # no tests found\\n",
          ],
          Array [
            "plan",
            Object {
              "comment": "no tests found",
              "end": 0,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 0,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "line",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "line",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "line",
        "This module provides an easy way to export package.json data.\\n",
      ],
      Array [
        "line",
        "It contains auto-discovery functionality, which means that it will\\n",
      ],
      Array [
        "line",
        "find your package.json file automatically. Cool, ugh?\\n",
      ],
      Array [
        "line",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "line",
        "    # Subtest: npm install package line\\n",
      ],
      Array [
        "line",
        "        $ npm install package\\n",
      ],
      Array [
        "line",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "line",
        "        var package = require('package')(); // contains package.json data.\\n",
      ],
      Array [
        "line",
        "        var yourAwesomeModule = {};\\n",
      ],
      Array [
        "line",
        "        yourAwesomeModule.version = package.version;\\n",
      ],
      Array [
        "line",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "line",
        "Bug fixes and features are welcomed.\\n",
      ],
      Array [
        "line",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "line",
        "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
      ],
      Array [
        "line",
        "- JSON.parse + fs.readFile\\n",
      ],
      Array [
        "line",
        "## License\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "line",
        "MIT License\\n",
      ],
      Array [
        "line",
        "Copyright (C) 2011 Veselin Todorov\\n",
      ],
      Array [
        "line",
        "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
      ],
      Array [
        "line",
        "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
      ],
      Array [
        "line",
        "the Software without restriction, including without limitation the rights to\\n",
      ],
      Array [
        "line",
        "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
      ],
      Array [
        "line",
        "of the Software, and to permit persons to whom the Software is furnished to do\\n",
      ],
      Array [
        "line",
        "so, subject to the following conditions:\\n",
      ],
      Array [
        "line",
        "The above copyright notice and this permission notice shall be included in all\\n",
      ],
      Array [
        "line",
        "copies or substantial portions of the Software.\\n",
      ],
      Array [
        "line",
        "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
      ],
      Array [
        "line",
        "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
      ],
      Array [
        "line",
        "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
      ],
      Array [
        "line",
        "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
      ],
      Array [
        "line",
        "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
      ],
      Array [
        "line",
        "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
      ],
      Array [
        "line",
        "SOFTWARE.\\n",
      ],
      Array [
        "line",
        "    1..0\\n",
      ],
      Array [
        "line",
        "        1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "    1..0 # no tests found\\n",
      ],
      Array [
        "line",
        "ok 1 - boom # time=5.26ms\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "index.js",
          "id": 1,
          "name": "boom",
          "ok": true,
          "time": 5.26,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: boom\\n",
  ],
  Array [
    "line",
    "    # package - Easy package.json exports.\\n",
  ],
  Array [
    "line",
    "    ## Intro\\n",
  ],
  Array [
    "line",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "line",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "line",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "line",
    "    ## Installation\\n",
  ],
  Array [
    "line",
    "        # Subtest: npm install package line\\n",
  ],
  Array [
    "line",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "line",
    "    ## Usage\\n",
  ],
  Array [
    "line",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "line",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "line",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "line",
    "    ## Contribution\\n",
  ],
  Array [
    "line",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "line",
    "    ## Other similar modules\\n",
  ],
  Array [
    "line",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "line",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "line",
    "    ## License\\n",
  ],
  Array [
    "line",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "line",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "line",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "line",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "line",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "line",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "line",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "line",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "line",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "line",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "line",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "line",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "line",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "line",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "line",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "line",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "line",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "line",
    "        1..0\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "line",
    "            1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "        1..0 # no tests found\\n",
  ],
  Array [
    "line",
    "    ok 1 - boom # time=5.26ms\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "index.js",
      "id": 1,
      "name": "boom",
      "ok": true,
      "time": 5.26,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "index.js",
      "id": 1,
      "name": "boom",
      "ok": true,
      "time": 5.26,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # time=12.555ms\\n",
  ],
  Array [
    "line",
    "not ok 1 - index.js # time=201.609ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  arguments:\\n",
  ],
  Array [
    "line",
    "    - index.js\\n",
  ],
  Array [
    "line",
    "  timeout: 30000\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 1\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "  command: /usr/local/bin/iojs\\n",
  ],
  Array [
    "line",
    "  file: index.js\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "line",
    "Bail out! index.js\\n",
  ],
  Array [
    "bailout",
    "index.js",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "index.js",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
            "results": Object {
              "count": 1,
              "ok": false,
              "pass": 1,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
            },
            "timeout": 30000,
          },
          "fullname": "",
          "id": 1,
          "name": "index.js",
          "ok": false,
          "time": 201.609,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "plan",
                Object {
                  "comment": "no tests found",
                  "end": 0,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 0,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
            ],
          ],
          Array [
            "plan",
            Object {
              "comment": "no tests found",
              "end": 0,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 0,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "index.js",
          "id": 1,
          "name": "boom",
          "ok": true,
          "time": 5.26,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "bailout",
    "index.js",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "index.js",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
            "results": Object {
              "count": 1,
              "ok": false,
              "pass": 1,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
            },
            "timeout": 30000,
          },
          "fullname": "",
          "id": 1,
          "name": "index.js",
          "ok": false,
          "time": 201.609,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
        1..0 # no tests found
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
Bail out! index.js

`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
        1..0 # no tests found
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
Bail out! index.js

`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "plan",
                Object {
                  "comment": "no tests found",
                  "end": 0,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 0,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
            ],
          ],
          Array [
            "plan",
            Object {
              "comment": "no tests found",
              "end": 0,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 0,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "index.js",
          "id": 1,
          "name": "boom",
          "ok": true,
          "time": 5.26,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=209.666ms\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
            "results": Object {
              "count": 1,
              "ok": false,
              "pass": 1,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
            },
            "timeout": 30000,
          },
          "fullname": "",
          "id": 1,
          "name": "index.js",
          "ok": false,
          "time": 201.609,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 209.666,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
        1..0 # no tests found
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
1..1
# failed 1 of 1 tests
# time=209.666ms
# failed 1 test

`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
        1..0 # no tests found
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
1..1
# failed 1 of 1 tests
# time=209.666ms
# failed 1 test

`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "plan",
                Object {
                  "comment": "no tests found",
                  "end": 0,
                  "start": 1,
                },
              ],
              Array [
                "comment",
                "# failed 4 test\\n",
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 4,
                  "failures": Array [
                    Object {
                      "data": "$ npm install package\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "var package = require('package')(); // contains package.json data.\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "var yourAwesomeModule = {};\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "yourAwesomeModule.version = package.version;\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                  ],
                  "ok": false,
                  "pass": 0,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
            ],
          ],
          Array [
            "plan",
            Object {
              "comment": "no tests found",
              "end": 0,
              "start": 1,
            },
          ],
          Array [
            "comment",
            "# failed 5 test\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 5,
              "failures": Array [
                Object {
                  "data": "$ npm install package\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "var package = require('package')(); // contains package.json data.\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "var yourAwesomeModule = {};\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "yourAwesomeModule.version = package.version;\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "1..0\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
              ],
              "ok": false,
              "pass": 0,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "index.js",
          "id": 1,
          "name": "boom",
          "ok": true,
          "time": 5.26,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# failed 24 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 24,
          "failures": Array [
            Object {
              "data": "This module provides an easy way to export package.json data.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "It contains auto-discovery functionality, which means that it will\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "find your package.json file automatically. Cool, ugh?\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Bug fixes and features are welcomed.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "- JSON.parse + fs.readFile\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "MIT License\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Copyright (C) 2011 Veselin Todorov\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "the Software without restriction, including without limitation the rights to\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "of the Software, and to permit persons to whom the Software is furnished to do\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "so, subject to the following conditions:\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "The above copyright notice and this permission notice shall be included in all\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "copies or substantial portions of the Software.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "SOFTWARE.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "1..0\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=209.666ms\\n",
  ],
  Array [
    "comment",
    "# failed 24 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 24,
      "failures": Array [
        Object {
          "data": "This module provides an easy way to export package.json data.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "It contains auto-discovery functionality, which means that it will\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "find your package.json file automatically. Cool, ugh?\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Bug fixes and features are welcomed.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "- JSON.parse + fs.readFile\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "MIT License\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Copyright (C) 2011 Veselin Todorov\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "the Software without restriction, including without limitation the rights to\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "of the Software, and to permit persons to whom the Software is furnished to do\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "so, subject to the following conditions:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "The above copyright notice and this permission notice shall be included in all\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "copies or substantial portions of the Software.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "SOFTWARE.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
            "results": Object {
              "count": 1,
              "ok": false,
              "pass": 1,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
            },
            "timeout": 30000,
          },
          "fullname": "",
          "id": 1,
          "name": "index.js",
          "ok": false,
          "time": 201.609,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 209.666,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
            # failed 4 test
        1..0 # no tests found
        # failed 5 test
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    # failed 24 test
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
1..1
# failed 1 of 1 tests
# time=209.666ms
# failed 24 test

`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
            # failed 4 test
        1..0 # no tests found
        # failed 5 test
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    # failed 24 test
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
1..1
# failed 1 of 1 tests
# time=209.666ms
# failed 24 test

`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: index.js\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: boom\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest: npm install package line\\n",
              ],
              Array [
                "plan",
                Object {
                  "comment": "no tests found",
                  "end": 0,
                  "start": 1,
                },
              ],
              Array [
                "comment",
                "# failed 4 test\\n",
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 0,
                  "fail": 4,
                  "failures": Array [
                    Object {
                      "data": "$ npm install package\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "var package = require('package')(); // contains package.json data.\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "var yourAwesomeModule = {};\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                    Object {
                      "data": "yourAwesomeModule.version = package.version;\\n",
                      "tapError": "Non-TAP data encountered in strict mode",
                    },
                  ],
                  "ok": false,
                  "pass": 0,
                  "plan": FinalPlan {
                    "comment": "no tests found",
                    "end": 0,
                    "skipAll": true,
                    "skipReason": "no tests found",
                    "start": 1,
                  },
                  "skip": 0,
                  "time": null,
                  "todo": 0,
                },
              ],
            ],
          ],
          Array [
            "plan",
            Object {
              "comment": "no tests found",
              "end": 0,
              "start": 1,
            },
          ],
          Array [
            "comment",
            "# failed 5 test\\n",
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 0,
              "fail": 5,
              "failures": Array [
                Object {
                  "data": "$ npm install package\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "var package = require('package')(); // contains package.json data.\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "var yourAwesomeModule = {};\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "yourAwesomeModule.version = package.version;\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
                Object {
                  "data": "1..0\\n",
                  "tapError": "Non-TAP data encountered in strict mode",
                },
              ],
              "ok": false,
              "pass": 0,
              "plan": FinalPlan {
                "comment": "no tests found",
                "end": 0,
                "skipAll": true,
                "skipReason": "no tests found",
                "start": 1,
              },
              "skip": 0,
              "time": 5.26,
              "todo": 0,
            },
          ],
        ],
      ],
      Array [
        "comment",
        "# package - Easy package.json exports.\\n",
      ],
      Array [
        "comment",
        "## Intro\\n",
      ],
      Array [
        "comment",
        "## Installation\\n",
      ],
      Array [
        "comment",
        "## Usage\\n",
      ],
      Array [
        "comment",
        "## Contribution\\n",
      ],
      Array [
        "comment",
        "## Other similar modules\\n",
      ],
      Array [
        "comment",
        "## License\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "index.js",
          "id": 1,
          "name": "boom",
          "ok": true,
          "time": 5.26,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# time=12.555ms\\n",
      ],
      Array [
        "comment",
        "# failed 24 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 24,
          "failures": Array [
            Object {
              "data": "This module provides an easy way to export package.json data.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "It contains auto-discovery functionality, which means that it will\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "find your package.json file automatically. Cool, ugh?\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Bug fixes and features are welcomed.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "- JSON.parse + fs.readFile\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "MIT License\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Copyright (C) 2011 Veselin Todorov\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "the Software without restriction, including without limitation the rights to\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "of the Software, and to permit persons to whom the Software is furnished to do\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "so, subject to the following conditions:\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "The above copyright notice and this permission notice shall be included in all\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "copies or substantial portions of the Software.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "SOFTWARE.\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "1..0\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
          ],
          "ok": false,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 201.609,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "    This module provides an easy way to export package.json data.\\n",
  ],
  Array [
    "extra",
    "    It contains auto-discovery functionality, which means that it will\\n",
  ],
  Array [
    "extra",
    "    find your package.json file automatically. Cool, ugh?\\n",
  ],
  Array [
    "extra",
    "            $ npm install package\\n",
  ],
  Array [
    "extra",
    "            var package = require('package')(); // contains package.json data.\\n",
  ],
  Array [
    "extra",
    "            var yourAwesomeModule = {};\\n",
  ],
  Array [
    "extra",
    "            yourAwesomeModule.version = package.version;\\n",
  ],
  Array [
    "extra",
    "    Bug fixes and features are welcomed.\\n",
  ],
  Array [
    "extra",
    "    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
  ],
  Array [
    "extra",
    "    - JSON.parse + fs.readFile\\n",
  ],
  Array [
    "extra",
    "    MIT License\\n",
  ],
  Array [
    "extra",
    "    Copyright (C) 2011 Veselin Todorov\\n",
  ],
  Array [
    "extra",
    "    Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
  ],
  Array [
    "extra",
    "    this software and associated documentation files (the \\"Software\\"), to deal in\\n",
  ],
  Array [
    "extra",
    "    the Software without restriction, including without limitation the rights to\\n",
  ],
  Array [
    "extra",
    "    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
  ],
  Array [
    "extra",
    "    of the Software, and to permit persons to whom the Software is furnished to do\\n",
  ],
  Array [
    "extra",
    "    so, subject to the following conditions:\\n",
  ],
  Array [
    "extra",
    "    The above copyright notice and this permission notice shall be included in all\\n",
  ],
  Array [
    "extra",
    "    copies or substantial portions of the Software.\\n",
  ],
  Array [
    "extra",
    "    THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
  ],
  Array [
    "extra",
    "    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
  ],
  Array [
    "extra",
    "    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
  ],
  Array [
    "extra",
    "    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
  ],
  Array [
    "extra",
    "    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
  ],
  Array [
    "extra",
    "    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
  ],
  Array [
    "extra",
    "    SOFTWARE.\\n",
  ],
  Array [
    "extra",
    "        1..0\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "arguments": Array [
          "index.js",
        ],
        "command": "/usr/local/bin/iojs",
        "file": "index.js",
        "results": Object {
          "count": 1,
          "ok": false,
          "pass": 1,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
        },
        "timeout": 30000,
      },
      "fullname": "",
      "id": 1,
      "name": "index.js",
      "ok": false,
      "time": 201.609,
    },
  ],
  Array [
    "bailout",
    "index.js",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "index.js",
      "count": 1,
      "fail": 24,
      "failures": Array [
        Object {
          "data": "This module provides an easy way to export package.json data.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "It contains auto-discovery functionality, which means that it will\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "find your package.json file automatically. Cool, ugh?\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Bug fixes and features are welcomed.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "- pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "- JSON.parse + fs.readFile\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "MIT License\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Copyright (C) 2011 Veselin Todorov\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "Permission is hereby granted, free of charge, to any person obtaining a copy of\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "this software and associated documentation files (the \\"Software\\"), to deal in\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "the Software without restriction, including without limitation the rights to\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "of the Software, and to permit persons to whom the Software is furnished to do\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "so, subject to the following conditions:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "The above copyright notice and this permission notice shall be included in all\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "copies or substantial portions of the Software.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "THE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "SOFTWARE.\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Result {
          "diag": Object {
            "arguments": Array [
              "index.js",
            ],
            "command": "/usr/local/bin/iojs",
            "file": "index.js",
            "results": Object {
              "count": 1,
              "ok": false,
              "pass": 1,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
            },
            "timeout": 30000,
          },
          "fullname": "",
          "id": 1,
          "name": "index.js",
          "ok": false,
          "time": 201.609,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
            # failed 4 test
        1..0 # no tests found
        # failed 5 test
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    # failed 24 test
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
Bail out! index.js

`

exports[`test/parser.js TAP indented-stdout-noise.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: index.js
    # Subtest: boom
        # Subtest: npm install package line
            1..0 # no tests found
            # failed 4 test
        1..0 # no tests found
        # failed 5 test
    # package - Easy package.json exports.
    ## Intro
    ## Installation
    ## Usage
    ## Contribution
    ## Other similar modules
    ## License
    ok 1 - boom # time=5.26ms
    1..1
    # time=12.555ms
    # failed 24 test
    This module provides an easy way to export package.json data.
    It contains auto-discovery functionality, which means that it will
    find your package.json file automatically. Cool, ugh?
            $ npm install package
            var package = require('package')(); // contains package.json data.
            var yourAwesomeModule = {};
            yourAwesomeModule.version = package.version;
    Bug fixes and features are welcomed.
    - pkginfo (https://github.com/indexzero/node-pkginfo) by indexzero.
    - JSON.parse + fs.readFile
    MIT License
    Copyright (C) 2011 Veselin Todorov
    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        1..0
not ok 1 - index.js # time=201.609ms
  ---
  arguments:
    - index.js
  timeout: 30000
  results:
    ok: false
    count: 1
    pass: 1
    plan:
      start: 1
      end: 1
  command: /usr/local/bin/iojs
  file: index.js
  ...
Bail out! index.js

`

exports[`test/parser.js TAP junk_before_plan.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "this is junk\\n",
  ],
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "line",
    "# this is a comment\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "this is junk\\n",
  ],
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "line",
    "# this is a comment\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods bail > stringified 1`] = `
this is junk
# this is a comment
1..1
ok 1

`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
this is junk
# this is a comment
1..1
ok 1

`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods default settings > stringified 1`] = `
this is junk
# this is a comment
1..1
ok 1

`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
this is junk
# this is a comment
1..1
ok 1

`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "this is junk\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods strict > stringified 1`] = `
this is junk
# this is a comment
1..1
ok 1
# failed 1 test

`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
this is junk
# this is a comment
1..1
ok 1
# failed 1 test

`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "extra",
    "this is junk\\n",
  ],
  Array [
    "comment",
    "# this is a comment\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "this is junk\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
this is junk
# this is a comment
1..1
ok 1
# failed 1 test

`

exports[`test/parser.js TAP junk_before_plan.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
this is junk
# this is a comment
1..1
ok 1
# failed 1 test

`

exports[`test/parser.js TAP line-break.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: foo\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "line",
        "not ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found:\\n",
      ],
      Array [
        "line",
        "    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  wanted:\\n",
      ],
      Array [
        "line",
        "    - >-\\n",
      ],
      Array [
        "line",
        "      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "line",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "comment",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "line",
        "# failed 1 test\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 13.457,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found:\\n",
  ],
  Array [
    "line",
    "        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      wanted:\\n",
  ],
  Array [
    "line",
    "        - >-\\n",
  ],
  Array [
    "line",
    "          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "found": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
        "wanted": Array [
          String(
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          ),
        ],
      },
      "fullname": "foo",
      "id": 1,
      "name": "should be equivalent",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "found": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
        "wanted": Array [
          String(
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          ),
        ],
      },
      "fullname": "foo",
      "id": 1,
      "name": "should be equivalent",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "line",
    "    # failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "    # failed 1 test\\n",
  ],
  Array [
    "line",
    "not ok 1 - foo # time=13.457ms\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  results:\\n",
  ],
  Array [
    "line",
    "    plan:\\n",
  ],
  Array [
    "line",
    "      start: 1\\n",
  ],
  Array [
    "line",
    "      end: 1\\n",
  ],
  Array [
    "line",
    "    count: 1\\n",
  ],
  Array [
    "line",
    "    pass: 0\\n",
  ],
  Array [
    "line",
    "    ok: false\\n",
  ],
  Array [
    "line",
    "    fail: 1\\n",
  ],
  Array [
    "line",
    "    time: 13.457\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "results": Object {
          "count": 1,
          "fail": 1,
          "ok": false,
          "pass": 0,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
          "time": 13.457,
        },
      },
      "fullname": "",
      "id": 1,
      "name": "foo",
      "ok": false,
      "time": 13.457,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "line",
    "# time=22.566ms\\n",
  ],
  Array [
    "comment",
    "# time=22.566ms\\n",
  ],
  Array [
    "line",
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "results": Object {
              "count": 1,
              "fail": 1,
              "ok": false,
              "pass": 0,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
              "time": 13.457,
            },
          },
          "fullname": "",
          "id": 1,
          "name": "foo",
          "ok": false,
          "time": 13.457,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 22.566,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "# Subtest: foo\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "line",
        "not ok 1 - should be equivalent\\n",
      ],
      Array [
        "line",
        "  ---\\n",
      ],
      Array [
        "line",
        "  found:\\n",
      ],
      Array [
        "line",
        "    - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  wanted:\\n",
      ],
      Array [
        "line",
        "    - >-\\n",
      ],
      Array [
        "line",
        "      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
      ],
      Array [
        "line",
        "  \\n",
      ],
      Array [
        "line",
        "      yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
      ],
      Array [
        "line",
        "  ...\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      Array [
        "line",
        "Bail out! should be equivalent\\n",
      ],
      Array [
        "bailout",
        "should be equivalent",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should be equivalent",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    not ok 1 - should be equivalent\\n",
  ],
  Array [
    "line",
    "      ---\\n",
  ],
  Array [
    "line",
    "      found:\\n",
  ],
  Array [
    "line",
    "        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      wanted:\\n",
  ],
  Array [
    "line",
    "        - >-\\n",
  ],
  Array [
    "line",
    "          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\\n",
  ],
  Array [
    "line",
    "  \\n",
  ],
  Array [
    "line",
    "          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\\n",
  ],
  Array [
    "line",
    "      ...\\n",
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "found": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
        "wanted": Array [
          String(
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          ),
        ],
      },
      "fullname": "foo",
      "id": 1,
      "name": "should be equivalent",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "found": Array [
          "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        ],
        "wanted": Array [
          String(
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
          ),
        ],
      },
      "fullname": "foo",
      "id": 1,
      "name": "should be equivalent",
      "ok": false,
    },
  ],
  Array [
    "line",
    "    Bail out! should be equivalent\\n",
  ],
  Array [
    "bailout",
    "should be equivalent",
  ],
  Array [
    "line",
    "Bail out! should be equivalent\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should be equivalent",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "should be equivalent",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should be equivalent",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should be equivalent",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods bail > stringified 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    Bail out! should be equivalent
Bail out! should be equivalent

`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods bail > stringified flat 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    Bail out! should be equivalent
Bail out! should be equivalent

`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 13.457,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "results": Object {
          "count": 1,
          "fail": 1,
          "ok": false,
          "pass": 0,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
          "time": 13.457,
        },
      },
      "fullname": "",
      "id": 1,
      "name": "foo",
      "ok": false,
      "time": 13.457,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=22.566ms\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "results": Object {
              "count": 1,
              "fail": 1,
              "ok": false,
              "pass": 0,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
              "time": 13.457,
            },
          },
          "fullname": "",
          "id": 1,
          "name": "foo",
          "ok": false,
          "time": 13.457,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 22.566,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods default settings > stringified 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    1..1
    # failed 1 of 1 tests
    # failed 1 test
not ok 1 - foo # time=13.457ms
  ---
  results:
    plan:
      start: 1
      end: 1
    count: 1
    pass: 0
    ok: false
    fail: 1
    time: 13.457
  ...
1..1
# failed 1 of 1 tests
# time=22.566ms
# failed 1 test

`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods default settings > stringified flat 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    1..1
    # failed 1 of 1 tests
    # failed 1 test
not ok 1 - foo # time=13.457ms
  ---
  results:
    plan:
      start: 1
      end: 1
    count: 1
    pass: 0
    ok: false
    fail: 1
    time: 13.457
  ...
1..1
# failed 1 of 1 tests
# time=22.566ms
# failed 1 test

`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      Array [
        "plan",
        Object {
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "comment",
        "# failed 1 of 1 tests\\n",
      ],
      Array [
        "comment",
        "# failed 1 test\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": 13.457,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "results": Object {
          "count": 1,
          "fail": 1,
          "ok": false,
          "pass": 0,
          "plan": Object {
            "end": 1,
            "start": 1,
          },
          "time": 13.457,
        },
      },
      "fullname": "",
      "id": 1,
      "name": "foo",
      "ok": false,
      "time": 13.457,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 1 tests\\n",
  ],
  Array [
    "comment",
    "# time=22.566ms\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "results": Object {
              "count": 1,
              "fail": 1,
              "ok": false,
              "pass": 0,
              "plan": Object {
                "end": 1,
                "start": 1,
              },
              "time": 13.457,
            },
          },
          "fullname": "",
          "id": 1,
          "name": "foo",
          "ok": false,
          "time": 13.457,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": 22.566,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods strict > stringified 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    1..1
    # failed 1 of 1 tests
    # failed 1 test
not ok 1 - foo # time=13.457ms
  ---
  results:
    plan:
      start: 1
      end: 1
    count: 1
    pass: 0
    ok: false
    fail: 1
    time: 13.457
  ...
1..1
# failed 1 of 1 tests
# time=22.566ms
# failed 1 test

`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods strict > stringified flat 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    1..1
    # failed 1 of 1 tests
    # failed 1 test
not ok 1 - foo # time=13.457ms
  ---
  results:
    plan:
      start: 1
      end: 1
    count: 1
    pass: 0
    ok: false
    fail: 1
    time: 13.457
  ...
1..1
# failed 1 of 1 tests
# time=22.566ms
# failed 1 test

`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: foo\\n",
      ],
      Array [
        "assert",
        Result {
          "diag": Object {
            "found": Array [
              "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            ],
            "wanted": Array [
              String(
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
              ),
            ],
          },
          "fullname": "foo",
          "id": 1,
          "name": "should be equivalent",
          "ok": false,
        },
      ],
      Array [
        "bailout",
        "should be equivalent",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should be equivalent",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "diag": Object {
                "found": Array [
                  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
                ],
                "wanted": Array [
                  String(
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
                  ),
                ],
              },
              "fullname": "foo",
              "id": 1,
              "name": "should be equivalent",
              "ok": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "bailout",
    "should be equivalent",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should be equivalent",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods strictBail > stringified 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    Bail out! should be equivalent
Bail out! should be equivalent

`

exports[`test/parser.js TAP line-break.tap Parser.parse/stringify methods strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: foo
    not ok 1 - should be equivalent
      ---
      found:
        - xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      wanted:
        - >-
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      
          yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
      ...
    Bail out! should be equivalent
Bail out! should be equivalent

`

exports[`test/parser.js TAP lone_not_bug.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "ok 1\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "ok": true,
    },