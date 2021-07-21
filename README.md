# User Management Angular App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Steps Involved

1. ng new <project_name>
2. Add image to assets folder
3. Clear the app.component.html file
4. Add the base code to app.component.html
5. Add CDN of BootStrap in index.html OR Install BootStrap & add styles and scripts to Angular.json
6. Make components (home, login, list-user, edit-user, add-user)
7. Add routes in app-routing.module.ts
8. Add code to home.component.html
9. Add json commands - npm install json-server || json-server --watch db.json
10. Add data to db.json
11. Create a User.ts File. Create a User class in User.ts and add fields.
12. Create a user service -> ng g s user
13. Do mandatory steps for forms and HttpClient in app.module.ts
14. In tsconfig.json add -> "strictPropertyInitialization": false,
15. Add methods to user.service.ts (Also add HttpClient import)
16. Add code to login.component.html and login.component.ts files.
17. Add code to list-user.component.html and list-user.component.ts files.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
