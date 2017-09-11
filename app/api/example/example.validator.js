class ExampleValidator {

    fillable () {
        return [
            'name', 'year'
        ]
    }

    store () {
        return {
            name: 'required|min:5',
            year: 'required'
        }
    }

    messages () {
        return {
            'name.required': 'O campo name é obrigatório',
            'name.min': 'O campo name deve ter no mínino {{argument.0}} caracteres',
            'year.required': 'O campo year é obrigatório'
        }
    }

}

module.exports = ExampleValidator