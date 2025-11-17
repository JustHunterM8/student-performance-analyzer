const { analyzePerformance } = require("./main");

describe("Student Performance Analyzer", () => {
  
  // Valid Test 1: High scores averaging to A
  test("Valid: [80, 90, 100] should return average 90 and grade A", () => {
    const result = analyzePerformance([80, 90, 100]);
    expect(result.average).toBe(90);
    expect(result.grade).toBe("A");
  });

  // Valid Test 2: Different high scores also averaging to A
  test("Valid: [92, 95, 88] should return grade A", () => {
    const result = analyzePerformance([92, 95, 88]);
    expect(result.average).toBe(91.67);
    expect(result.grade).toBe("A");
  });

  // Invalid Test 1: Empty array
  test("Invalid: empty scores array should throw error", () => {
    expect(() => analyzePerformance([])).toThrow(
      "Scores must be a non-empty array"
    );
  });

  // Invalid Test 2: Non-numeric values
  test("Invalid: non-numeric scores should throw error", () => {
    expect(() => analyzePerformance([80, "90", 100])).toThrow(
      "All scores must be numbers"
    );
  });

  // Intentional Break Test: expect grade A for average 50 (WILL FAIL)
  // test("Break: average 50 should be grade A (intentional fail)", () => {
  //   const result = analyzePerformance([50, 50, 50]);
  //   expect(result.average).toBe(50);
  //   expect(result.grade).toBe("A");
  // });
});