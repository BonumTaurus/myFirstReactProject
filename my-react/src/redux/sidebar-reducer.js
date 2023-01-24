

const initialState = {
	myFriends: [
		{ id: 1, name: 'Nikolya', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteHWeErjcnZpd_zo_KLQUdeKTFxXe-h86GQ&usqp=CAU' },
		{ id: 2, name: 'Lilu', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhBUqLnxEn_2FhDdd3CE0uAimOiEuVseqZg&usqp=CAU' },
		{ id: 3, name: 'Nikita', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sVcc8hTXXSR0iL2nn_BQRSan_x5vlVSWLQ&usqp=CAU' },
		{ id: 4, name: 'Misha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJ9tnaKCMPL4JNiIh-yVX4rN8lhEQXTkuoQ&usqp=CAU' },
		{ id: 5, name: 'Dasha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbsMEFO-izKuFoNmwhh3tZuS-2l1quAPJ_Q&usqp=CAU' },
		{ id: 6, name: 'Ksusha', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU' }
	]
}

const sidebarReducer = (state = initialState, action) => {
	return state
}

export { sidebarReducer };