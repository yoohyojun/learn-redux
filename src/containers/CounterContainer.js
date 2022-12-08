import React from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {decrease, increase, setDiff} from "../modules/counter";
import Counter from  "../components/Counter";

function CounterContainer() {

    // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }), shallowEqual);
    // shallowEqual 을 두번째 인자로 전달해주면
    // 이전 값과 다음 값을 비교하여 true인 경우 렌더링을 하지 않고 false인 경우 렌더링을 한다.
    // shallowEqual 은 react - redux에 내장되어있는 함수로써, 객체 안의 가장 겉에 있는 값들을 모두 비교해준다.

    //불필요한 렌더링 방지 방법2
    // const number = useSelector(state => state.counter.number);
    // const diff = useSelector(state => state.counter.diff);

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = number => dispatch(setDiff(number));

    return (
        <Counter
            //상태와
            number={number}
            diff={diff}
            //액션을 디스패치 하는 함수들을 props로 넣어줍니다.
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )

}

export default CounterContainer;