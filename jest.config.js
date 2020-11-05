module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  modulePaths: ["<rootDir>/src/"],
  modulePathIgnorePatterns: ["<rootDir>/e2e/"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
};
