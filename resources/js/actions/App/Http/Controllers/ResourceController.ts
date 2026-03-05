import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ResourceController::index
* @see app/Http/Controllers/ResourceController.php:12
* @route '/api/resources'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResourceController::index
* @see app/Http/Controllers/ResourceController.php:12
* @route '/api/resources'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::index
* @see app/Http/Controllers/ResourceController.php:12
* @route '/api/resources'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ResourceController::index
* @see app/Http/Controllers/ResourceController.php:12
* @route '/api/resources'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ResourceController::index
* @see app/Http/Controllers/ResourceController.php:12
* @route '/api/resources'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ResourceController::index
* @see app/Http/Controllers/ResourceController.php:12
* @route '/api/resources'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ResourceController::index
* @see app/Http/Controllers/ResourceController.php:12
* @route '/api/resources'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\ResourceController::show
* @see app/Http/Controllers/ResourceController.php:105
* @route '/api/resources/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/resources/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResourceController::show
* @see app/Http/Controllers/ResourceController.php:105
* @route '/api/resources/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::show
* @see app/Http/Controllers/ResourceController.php:105
* @route '/api/resources/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ResourceController::show
* @see app/Http/Controllers/ResourceController.php:105
* @route '/api/resources/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ResourceController::show
* @see app/Http/Controllers/ResourceController.php:105
* @route '/api/resources/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ResourceController::show
* @see app/Http/Controllers/ResourceController.php:105
* @route '/api/resources/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ResourceController::show
* @see app/Http/Controllers/ResourceController.php:105
* @route '/api/resources/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\ResourceController::store
* @see app/Http/Controllers/ResourceController.php:59
* @route '/api/resources'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/resources',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ResourceController::store
* @see app/Http/Controllers/ResourceController.php:59
* @route '/api/resources'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::store
* @see app/Http/Controllers/ResourceController.php:59
* @route '/api/resources'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ResourceController::store
* @see app/Http/Controllers/ResourceController.php:59
* @route '/api/resources'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ResourceController::store
* @see app/Http/Controllers/ResourceController.php:59
* @route '/api/resources'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
const update46db8e44bcbedff5f9762c14b2c7d13c = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update46db8e44bcbedff5f9762c14b2c7d13c.url(args, options),
    method: 'put',
})

update46db8e44bcbedff5f9762c14b2c7d13c.definition = {
    methods: ["put"],
    url: '/api/resources/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
update46db8e44bcbedff5f9762c14b2c7d13c.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update46db8e44bcbedff5f9762c14b2c7d13c.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
update46db8e44bcbedff5f9762c14b2c7d13c.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update46db8e44bcbedff5f9762c14b2c7d13c.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
const update46db8e44bcbedff5f9762c14b2c7d13cForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update46db8e44bcbedff5f9762c14b2c7d13c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
update46db8e44bcbedff5f9762c14b2c7d13cForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update46db8e44bcbedff5f9762c14b2c7d13c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update46db8e44bcbedff5f9762c14b2c7d13c.form = update46db8e44bcbedff5f9762c14b2c7d13cForm
/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
const update46db8e44bcbedff5f9762c14b2c7d13c = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update46db8e44bcbedff5f9762c14b2c7d13c.url(args, options),
    method: 'patch',
})

update46db8e44bcbedff5f9762c14b2c7d13c.definition = {
    methods: ["patch"],
    url: '/api/resources/{id}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
update46db8e44bcbedff5f9762c14b2c7d13c.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update46db8e44bcbedff5f9762c14b2c7d13c.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
update46db8e44bcbedff5f9762c14b2c7d13c.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update46db8e44bcbedff5f9762c14b2c7d13c.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
const update46db8e44bcbedff5f9762c14b2c7d13cForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update46db8e44bcbedff5f9762c14b2c7d13c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ResourceController::update
* @see app/Http/Controllers/ResourceController.php:132
* @route '/api/resources/{id}'
*/
update46db8e44bcbedff5f9762c14b2c7d13cForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update46db8e44bcbedff5f9762c14b2c7d13c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update46db8e44bcbedff5f9762c14b2c7d13c.form = update46db8e44bcbedff5f9762c14b2c7d13cForm

export const update = {
    '/api/resources/{id}': update46db8e44bcbedff5f9762c14b2c7d13c,
    '/api/resources/{id}': update46db8e44bcbedff5f9762c14b2c7d13c,
}

/**
* @see \App\Http\Controllers\ResourceController::checkOut
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkout'
*/
export const checkOut = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkOut.url(args, options),
    method: 'post',
})

checkOut.definition = {
    methods: ["post"],
    url: '/api/resources/{id}/checkout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ResourceController::checkOut
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkout'
*/
checkOut.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return checkOut.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::checkOut
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkout'
*/
checkOut.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkOut.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ResourceController::checkOut
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkout'
*/
const checkOutForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkOut.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ResourceController::checkOut
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkout'
*/
checkOutForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkOut.url(args, options),
    method: 'post',
})

checkOut.form = checkOutForm

/**
* @see \App\Http\Controllers\ResourceController::checkIn
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkin'
*/
export const checkIn = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkIn.url(args, options),
    method: 'post',
})

checkIn.definition = {
    methods: ["post"],
    url: '/api/resources/{id}/checkin',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ResourceController::checkIn
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkin'
*/
checkIn.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return checkIn.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::checkIn
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkin'
*/
checkIn.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkIn.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ResourceController::checkIn
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkin'
*/
const checkInForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkIn.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ResourceController::checkIn
* @see app/Http/Controllers/ResourceController.php:0
* @route '/api/resources/{id}/checkin'
*/
checkInForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkIn.url(args, options),
    method: 'post',
})

checkIn.form = checkInForm

/**
* @see \App\Http\Controllers\ResourceController::destroy
* @see app/Http/Controllers/ResourceController.php:171
* @route '/api/resources/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/resources/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ResourceController::destroy
* @see app/Http/Controllers/ResourceController.php:171
* @route '/api/resources/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::destroy
* @see app/Http/Controllers/ResourceController.php:171
* @route '/api/resources/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ResourceController::destroy
* @see app/Http/Controllers/ResourceController.php:171
* @route '/api/resources/{id}'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ResourceController::destroy
* @see app/Http/Controllers/ResourceController.php:171
* @route '/api/resources/{id}'
*/
destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ResourceController = { index, show, store, update, checkOut, checkIn, destroy }

export default ResourceController