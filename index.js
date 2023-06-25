
import redux from 'redux';
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

console.log("Hello babee");

const Cake = ["CreetCake", "Normal", "chocolate cake"];
const IceScream = ['milk', 'vanilla', 'choco'];
function buyCake() {
    return {
        type: Cake,

        info: 'First redux action'
    }
}
function buyIceScream() {
    return {
        type: IceScream,

        info: 'First redux action'
    }
}

const initialCakeState = {
    numberOfCakes: 10
}
const initialIceScreamState = {
    numberOfIceCream: 20
}

const reducerCakeStore = (state = initialCakeState, action) => {
    switch (action.type) {
        case Cake: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        //this is initial state
        default: return state;
    }
}
const reducerIceScreamStore = (state = initialIceScreamState, action) => {
    switch (action.type) {
        case IceScream: return {
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1
        }

        //this is initial state
        default: return state;
    }
}
//this is cake names
console.log(buyCake().type);
console.log(buyIceScream().type);

const rootReducer = combineReducers({
    cake: reducerCakeStore,
    iceScream: reducerIceScreamStore
})

//store function
// const store = createStore(reducer)
const cakeStore = createStore(reducerCakeStore)
const icescreamStore = createStore(reducerIceScreamStore)

//this is both reducers
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log('updated Cake state', store.getState());
})

console.log("initial Cake Store", cakeStore.getState())
console.log("initial IceScream Store", icescreamStore.getState())

const unsubscribe = cakeStore.subscribe(() => {
    console.log('updated Cake state', cakeStore.getState());
})
const un = icescreamStore.subscribe(() => {
    console.log('updated IceScream state', icescreamStore.getState());
})
cakeStore.dispatch(buyCake());
cakeStore.dispatch(buyCake());
cakeStore.dispatch(buyCake());

icescreamStore.dispatch(buyIceScream());
icescreamStore.dispatch(buyIceScream());
icescreamStore.dispatch(buyIceScream());


unsubscribe();
un();