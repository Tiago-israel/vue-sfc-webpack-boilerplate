module.exports = {
  snapshotSerializers: ["jest-serializer-vue"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  transformIgnorePatterns: ["/node_modules/"]
};
