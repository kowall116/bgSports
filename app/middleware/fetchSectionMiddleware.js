function callSection(endpoint) {
	return fetch(endpoint, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
		.then(response => {
      console.log('TEST')
			response.json().then(json => ({ json, response }))
    })
    .then(({ json, response }) => {
	      if (!response.ok) {
	        return Promise.reject(json)
	      }
	      return json
	    })
}

export const CALL_API = Symbol('CALL_API')

// API Middleware courtesy of Dan Abramov in Redux real-world Example
export default store => next => action => {

  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const { types, endpoint } = callAPI
  const [ requestType, successType, failureType ] = types

  next(actionWith({ type: requestType }))

	return callSection(endpoint).then(
    articles => next(actionWith({
      articles,
      type: successType
    })),
    error => {
      next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))}
  )
}