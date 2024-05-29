import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async index ({view}:HttpContextContract){
        return view.render('auth')
    }

    public async login ({auth, request, response, view}:HttpContextContract){
            const email = request.input('email')
            const password = request.input('password')
        try {
            //const token = await auth.use('web').attempt(email, password)
            await auth.use('web').attempt(email, password)
            return view.render('dashboard')
        } catch {
            return response.unauthorized('Invalid credentials')
    }
    }

    public async logout ({auth, response, view}:HttpContextContract) {
        await auth.use('web').logout()
        return view.render('auth')
    }
}
