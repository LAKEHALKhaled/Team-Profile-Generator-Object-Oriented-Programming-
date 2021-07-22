const Engineer = require("../lib/Engineer");
test("new Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object")
})

test("getName method", () => {
    const e = new Engineer("Joe");
    expect(e.getName()).toBe("Joe")
})

test("getId method", () => {
    const e = new Engineer("Joe","123");
    expect(e.getId()).toBe("123")
})

test("getEmail method", () => {
    const e = new Engineer("Joe","123","gmail");
    expect(e.getEmail()).toBe("gmail")
})
test("getGithub method", () => {
    const e = new Engineer("Joe","123","gmail","githubUser");
    expect(e.getGithub()).toBe("githubUser")
})

test("getRole method", () => {
    const e = new Engineer();
    expect(e.getRole()).toBe('Engineer')
})