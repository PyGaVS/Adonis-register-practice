import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class RegisterController {
    public async index ({view}:HttpContextContract){
        return view.render('register')
    }

    public async store ({request, response}: HttpContextContract){
        // const data = request.only(['name', 'email', 'password'])

        const data = await request.validate({
            schema: schema.create({
                name: schema.string({ trim: true }, [
                    rules.minLength(3),
                    rules.maxLength(255),
                ]),
                email: schema.string({ trim: true }, [
                    rules.minLength(3),
                    rules.maxLength(255),
                    rules.email(),
                    rules.unique({
                        table: 'users', 
                        column: 'email'
                    })
                ]),
                password: schema.string({ trim: true }, [
                    rules.minLength(8),
                    rules.maxLength(255),
                    rules.confirmed()
                ])
            })
        })


        await User.create(data)

        response.redirect().toRoute('auth')
    }
}
