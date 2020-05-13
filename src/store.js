export const saveState =()=> {
    let stateAsString = JSON.stringify(this.state);
    localStorage.setItem('state', stateAsString)
}
export const restoreState = () => {
    let state = {
        tasks:[],
        filterValue: "All"
    }
    let stateAsString = localStorage.getItem('state');
    if(stateAsString){
        state = JSON.parse(stateAsString);
    }
    this.setState(state, ()=>{
        this.state.tasks.forEach(t=>{
            if(t.id >= this.nextTaskId) {
                this.nextTaskId = t.id + 1
            }
        })
    });
}
export const componentDidMount() {
    this.restoreState();
}