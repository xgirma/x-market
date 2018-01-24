# Jest

issue
<img width="1625" alt="css error" src="https://user-images.githubusercontent.com/5876481/35323419-47589e26-00a2-11e8-9026-94264535cbd3.png">

[Handling Static Assets](https://facebook.github.io/jest/docs/en/webpack.html#handling-static-assets)

jest.config.js
```javascript
module.exports = {
  bail: true,
  collectCoverage: true,
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
```

styleMock.js
```javascript
module.exports = {};
```

<img width="1627" alt="pass" src="https://user-images.githubusercontent.com/5876481/35323516-a0a00d48-00a2-11e8-8e5a-3a7090ca5669.png">