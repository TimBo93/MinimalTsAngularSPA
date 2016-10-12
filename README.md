# MinimalTsAngularSPA
A minimal Single Page Application using TypeScript 2.0 and Angular 1.x

## How To Run
1. npm install
2. gulp install:all
  (loads typings and bower dependencies)
3. gulp copy:all
  (wwwroot appears with some files)
4. gulp inject:all
  (index.html in wwwroot should have some injected dependencies)
5. (in main folder) webpack-dev-server
  http://localhost:8080/bundle.js should be available
6. (in wwwroot folder) http-server -p 12345
7. (in main folder) Open VS-Code
8. Start debugging set/unset some breakpoints