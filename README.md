# RegistrationFormApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Get the code

1. git clone https://github.com/anushka-panagar/registration-form-app.git
2. cd registration-form-app
3. npm install
4. ng serve

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## To test the the URL for /profile page

1. Initially the token is not set, you can test the `/profile` url, it will rediret to `/register` page.
2. Once it is authenticated, JWT token is set for the user
3. For retesting the /profile URL, clearing the token from local storage will give the same behavior

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
