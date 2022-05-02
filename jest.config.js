module.exports = {
  preset: "jest-expo",

  transformIgnorePatterns: [
    "/node_modules/(?!react-native|native-base-shoutem-theme|react-navigation-stack|@react-navigation|react-navigation-fluid-transitions)"
  ],

  testPathIgnorePatterns: [
    "/node_modules/",
    "/android/",
    "/ios/"
  ],

  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components"
  ],

  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx", 
    "!src/**/*.spec.tsx"
  ],
  coverageReporters: [
    "lcov"    
  ]
}