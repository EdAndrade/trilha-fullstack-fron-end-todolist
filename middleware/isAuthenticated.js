export default ({ store, redirect }) => {

	if(store.state.isLogged === false){
		return redirect('/login')
	}
}
