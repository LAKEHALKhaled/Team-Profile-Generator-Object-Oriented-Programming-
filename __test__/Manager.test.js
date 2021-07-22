const Manager = require("../lib/Manager");
test("new Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object")
})

test("getName method", () => {
    const e = new Manager("Joe");
    expect(e.getName()).toBe("Joe")
})

test("getId method", () => {
    const e = new Manager("Joe","123");
    expect(e.getId()).toBe("123")
})

test("getEmail method", () => {
    const e = new Manager("Joe","123","gmail");
    expect(e.getEmail()).toBe("gmail")
})
test("getOfficeNumber method", () => {
    const e = new Manager("Joe","123","gmail","+1407");
    expect(e.getOfficeNumber()).toBe("+1407")
})

test("getRole method", () => {
    const e = new Manager();
    expect(e.getRole()).toBe('Manager')
})