/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'AuthController.index').as('auth')

Route.get('/auth', 'AuthController.find').as('findUser')

Route.get('/register', 'RegisterController.index').as('register')

Route.post('/', 'RegisterController.store').as('create')

Route.get('/dashboard','DashboardController.index').as('dashboard').middleware('auth')

Route.post('/login', 'AuthController.login').as('login')

Route.get('/logout', 'AuthController.logout').as('logout')