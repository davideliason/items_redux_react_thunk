export itemsHasErrored = (state=false,action) => {
	switch(action.type){
		case 'ITEMS_HAS_ERRORED':
			return action.hasErrored;
		default:
			return state;
	}
}

export itemsIsLoading = (state=false,action) => {
	switch(action.type){
		case 'ITEMS_IS_LOADING':
			return action.isLoading;
		default:
			return state;
	}
}

