function initState() {
	return {
		count: 0,
        message: "",
	};
}

const practice = {
	//  state: 상태를 의미하는 객체로서 initState를 통해 상태 초기화
	state: initState,

	//  mutations는 상태를 변경하기 위한 함수들의 집합
	//  actions를 통해 mutations가 호출
	//  mutations을 연속적으로 호출하기 위해
	mutations: {
		increment(state) {
			state.count++;
		},
		update(state, newMessage) {
			state.message = newMessage;
		},
	},

	actions: {
		//  아래와 같이 actions의 함수를 통해 mutations의 함수를 호출
		//  그러면 결국, 컴포넌트에서는 actions의 함수를 호출
		incrementCount(context) {
			context.commit("increment");
		},
        updateMessage(context, newMessage) {
            context.commit("update", newMessage)
        }
	},

	//  상태(변수)를 get하기 위한 함수들의 집합
	getters: {
		getCount: (state) => state.count,
        getMessage: (state) => state.message,
	},
};

export default practice;