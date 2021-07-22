const Intern = require("../lib/Intern");
test("new Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object")
})

test("getName method", () => {
    const e = new Intern("Joe");
    expect(e.getName()).toBe("Joe")
})

test("getId method", () => {
    const e = new Intern("Joe","123");
    expect(e.getId()).toBe("123")
})

test("getEmail method", () => {
    const e = new Intern("Joe","123","gmail");
    expect(e.getEmail()).toBe("gmail")
})
test("getSchool method", () => {
    const e = new Intern("Joe","123","gmail","School");
    expect(e.getSchool()).toBe("School")
})

test("getRole method", () => {
    const e = new Intern();
    expect(e.getRole()).toBe('Intern')
})