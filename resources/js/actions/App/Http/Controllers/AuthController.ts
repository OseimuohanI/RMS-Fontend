import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:43
* @route '/api/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:43
* @route '/api/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:43
* @route '/api/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:43
* @route '/api/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::login
* @see app/Http/Controllers/AuthController.php:43
* @route '/api/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:12
* @route '/api/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/api/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:12
* @route '/api/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:12
* @route '/api/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:12
* @route '/api/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::register
* @see app/Http/Controllers/AuthController.php:12
* @route '/api/register'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:75
* @route '/api/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/api/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:75
* @route '/api/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:75
* @route '/api/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:75
* @route '/api/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::logout
* @see app/Http/Controllers/AuthController.php:75
* @route '/api/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/api/company/users'
*/
const listCompanyUserse8d78cdf99016a8b1a503644603926bd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listCompanyUserse8d78cdf99016a8b1a503644603926bd.url(options),
    method: 'get',
})

listCompanyUserse8d78cdf99016a8b1a503644603926bd.definition = {
    methods: ["get","head"],
    url: '/api/company/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/api/company/users'
*/
listCompanyUserse8d78cdf99016a8b1a503644603926bd.url = (options?: RouteQueryOptions) => {
    return listCompanyUserse8d78cdf99016a8b1a503644603926bd.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/api/company/users'
*/
listCompanyUserse8d78cdf99016a8b1a503644603926bd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listCompanyUserse8d78cdf99016a8b1a503644603926bd.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/api/company/users'
*/
listCompanyUserse8d78cdf99016a8b1a503644603926bd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: listCompanyUserse8d78cdf99016a8b1a503644603926bd.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/api/company/users'
*/
const listCompanyUserse8d78cdf99016a8b1a503644603926bdForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listCompanyUserse8d78cdf99016a8b1a503644603926bd.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/api/company/users'
*/
listCompanyUserse8d78cdf99016a8b1a503644603926bdForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listCompanyUserse8d78cdf99016a8b1a503644603926bd.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/api/company/users'
*/
listCompanyUserse8d78cdf99016a8b1a503644603926bdForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listCompanyUserse8d78cdf99016a8b1a503644603926bd.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

listCompanyUserse8d78cdf99016a8b1a503644603926bd.form = listCompanyUserse8d78cdf99016a8b1a503644603926bdForm
/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/company/users'
*/
const listCompanyUsersbfef75d0c490e28bb037e160e8d0633b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.url(options),
    method: 'get',
})

listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.definition = {
    methods: ["get","head"],
    url: '/company/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/company/users'
*/
listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.url = (options?: RouteQueryOptions) => {
    return listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/company/users'
*/
listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/company/users'
*/
listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/company/users'
*/
const listCompanyUsersbfef75d0c490e28bb037e160e8d0633bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/company/users'
*/
listCompanyUsersbfef75d0c490e28bb037e160e8d0633bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AuthController::listCompanyUsers
* @see app/Http/Controllers/AuthController.php:86
* @route '/company/users'
*/
listCompanyUsersbfef75d0c490e28bb037e160e8d0633bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

listCompanyUsersbfef75d0c490e28bb037e160e8d0633b.form = listCompanyUsersbfef75d0c490e28bb037e160e8d0633bForm

export const listCompanyUsers = {
    '/api/company/users': listCompanyUserse8d78cdf99016a8b1a503644603926bd,
    '/company/users': listCompanyUsersbfef75d0c490e28bb037e160e8d0633b,
}

/**
* @see \App\Http\Controllers\AuthController::registerCompanyUser
* @see app/Http/Controllers/AuthController.php:134
* @route '/api/company/users'
*/
export const registerCompanyUser = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerCompanyUser.url(options),
    method: 'post',
})

registerCompanyUser.definition = {
    methods: ["post"],
    url: '/api/company/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::registerCompanyUser
* @see app/Http/Controllers/AuthController.php:134
* @route '/api/company/users'
*/
registerCompanyUser.url = (options?: RouteQueryOptions) => {
    return registerCompanyUser.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::registerCompanyUser
* @see app/Http/Controllers/AuthController.php:134
* @route '/api/company/users'
*/
registerCompanyUser.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registerCompanyUser.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::registerCompanyUser
* @see app/Http/Controllers/AuthController.php:134
* @route '/api/company/users'
*/
const registerCompanyUserForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registerCompanyUser.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::registerCompanyUser
* @see app/Http/Controllers/AuthController.php:134
* @route '/api/company/users'
*/
registerCompanyUserForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: registerCompanyUser.url(options),
    method: 'post',
})

registerCompanyUser.form = registerCompanyUserForm

/**
* @see \App\Http\Controllers\AuthController::deleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}'
*/
export const deleteCompanyUser = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteCompanyUser.url(args, options),
    method: 'delete',
})

deleteCompanyUser.definition = {
    methods: ["delete"],
    url: '/api/company/users/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuthController::deleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}'
*/
deleteCompanyUser.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return deleteCompanyUser.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::deleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}'
*/
deleteCompanyUser.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteCompanyUser.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AuthController::deleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}'
*/
const deleteCompanyUserForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteCompanyUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::deleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}'
*/
deleteCompanyUserForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteCompanyUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteCompanyUser.form = deleteCompanyUserForm

/**
* @see \App\Http\Controllers\AuthController::restoreCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/restore'
*/
export const restoreCompanyUser = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restoreCompanyUser.url(args, options),
    method: 'post',
})

restoreCompanyUser.definition = {
    methods: ["post"],
    url: '/api/company/users/{id}/restore',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::restoreCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/restore'
*/
restoreCompanyUser.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return restoreCompanyUser.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::restoreCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/restore'
*/
restoreCompanyUser.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restoreCompanyUser.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::restoreCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/restore'
*/
const restoreCompanyUserForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restoreCompanyUser.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::restoreCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/restore'
*/
restoreCompanyUserForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restoreCompanyUser.url(args, options),
    method: 'post',
})

restoreCompanyUser.form = restoreCompanyUserForm

/**
* @see \App\Http\Controllers\AuthController::forceDeleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/force'
*/
export const forceDeleteCompanyUser = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDeleteCompanyUser.url(args, options),
    method: 'delete',
})

forceDeleteCompanyUser.definition = {
    methods: ["delete"],
    url: '/api/company/users/{id}/force',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AuthController::forceDeleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/force'
*/
forceDeleteCompanyUser.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return forceDeleteCompanyUser.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::forceDeleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/force'
*/
forceDeleteCompanyUser.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDeleteCompanyUser.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AuthController::forceDeleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/force'
*/
const forceDeleteCompanyUserForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDeleteCompanyUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AuthController::forceDeleteCompanyUser
* @see app/Http/Controllers/AuthController.php:0
* @route '/api/company/users/{id}/force'
*/
forceDeleteCompanyUserForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDeleteCompanyUser.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forceDeleteCompanyUser.form = forceDeleteCompanyUserForm

const AuthController = { login, register, logout, listCompanyUsers, registerCompanyUser, deleteCompanyUser, restoreCompanyUser, forceDeleteCompanyUser }

export default AuthController