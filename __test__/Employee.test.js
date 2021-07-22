const Employee = require("../lib/Employee");
test("new Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
})

test("getName method", () => {
    const e = new Employee("Joe");
    expect(e.getName()).toBe("Joe")
})

test("getId method", () => {
    const e = new Employee("Joe","123");
    expect(e.getId()).toBe("123")
})

test("getEmail method", () => {
    const e = new Employee("Joe","123","gmail");
    expect(e.getEmail()).toBe("gmail")
})

test("getRole method", () => {
    const e = new Employee();
    expect(e.getRole()).toBe('Employee')
})