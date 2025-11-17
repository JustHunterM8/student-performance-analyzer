/**
 * Student Performance Analyzer
 * Analyzes student scores and assigns grades
 */

function analyzePerformance(scores) {
  // Validate input
  if (!Array.isArray(scores) || scores.length === 0) {
    throw new Error("Scores must be a non-empty array");
  }

  // Validate all scores are numbers
  if (!scores.every(score => typeof score === "number")) {
    throw new Error("All scores must be numbers");
  }

  // Validate scores are in range 0-100
  if (!scores.every(score => score >= 0 && score <= 100)) {
    throw new Error("Scores must be between 0 and 100");
  }

  // Calculate average
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

  // Assign grade based on average
  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  return {
    scores,
    average: Math.round(average * 100) / 100,
    grade
  };
}

module.exports = { analyzePerformance };