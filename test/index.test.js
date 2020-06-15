require("jest");
const MuteApp = require("../src/index");

test("Internal value", () => {
  expect(MuteApp.mutate(1)).toBe(1);
});

test("External value", () => {
  MuteApp.mutate(1);
  expect(MuteApp.get(0)).toStrictEqual({ value: 1 });
});
