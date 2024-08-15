import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the current year for a person born in year 0", () => {
    // Arrange
    const birthYear = 0;
  
    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);
  
    // Assert
    expect(ageOfPerson).toBe(2022);
  });
  // it("returns the age of a person based on the year of birth", () => {
  //   const birthYear = 1984;
  //   const ageOfPerson = currentAgeForBirthYear(birthYear);
  //   expect(ageOfPerson).toBe(38);
  // });
});
