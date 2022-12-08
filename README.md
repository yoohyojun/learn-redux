# 리액트 연습용 프로젝트

## 6장 리덕스

프로젝트 생성
$ npx create-react-app learn-redux

리덕스 라이브러리 설치
$ cd learn-redux
$ yarn add redux

리액트에 리덕스 적용하기 위한 라이브러리 설치
$ yarn add react-redux


  ● 1. 리덕스에서 사용되는 키워드 (https://react.vlpt.us/redux/01-keywords.html)  
      액션 (Action)
      상태에 변화가 필요할 때 발생시킴, 아래처럼 객체로 표현됨
      {
        type:"TOGGLE_VALUE"
        data: {
          id: 0
        }
      }
      type을 필수로 그외의 값들은 개발자 마음대로 생성

      액션 생성함수 (Action Creator)
      아래 함수처럼 액션을 생성해주는 함수
      export function addTodo(data) {
        return {
          type: "ADD_TODO",
          data
        };
      }
      필수 사항은 아님

      리듀서 (Reducer)
      변화를 일으키는 함수
      현재의 상태와 액션을 참조하여 새로운 상태를 반환
      function reducer(state, action) {
        // 상태 업데이트 로직
        return alteredState;
      }

      스토어 (Store)
      한 애플리케이션당 하나의 스토어
      현재의 앱 상태와, 리듀서가 있고 추가적으로 몇 가지 내장 함수들이 있음

      디스패치 (dispatch)
      스토어의 내장함수 중 하나로 액션을 발생 시키는 것

      구독 (subscribe)
      스토어의 내장함수 중 하나로 subscribe 함수에 특정 함수를 전달해주면, 
      액션이 디스패치 되었을 때 마다 전달해준 함수가 호출된다
      (리덕스를 사용하게 될 때 보통 이 함수를 사용하는 일은 별로 없고 react-redux라는 라이브러리에서 제공하는 connect 함수 또는 useSelector Hook을 사용하여 리덕스 스토어의 상태       에 구독한다)
      
  ● 2. 리덕스의 3가지 규칙 (https://react.vlpt.us/redux/02-rules.html)  
      1. 하나의 어플리케이션 안에는 하나의 스토어가 있다.
        여러 개의 스토어를 사용할 수도 있지만 권장되지 않음(개발 도구 활용하지 못하게됨)
      2. 상태는 읽기 전용이다.
        기존의 상태는 건들이지 않고 새로운 상태를 생성하여 업데이트 해주는 방식으로 개발해야
        나중에 개발자 도구를 통해서 뒤로 돌릴 수도 다시 앞으로 돌릴 수도 있다.
        불변성을 꼭 지켜주어야 하며, 이유는 shallow equality 검사를 하기 때문
      3. 변화를 일으키는 함수 리듀서는 순수함수여야 한다.
        똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야한다.

  ● 3. 리덕스 사용 할 준비하기 (https://react.vlpt.us/redux/03-prepare.html)  
  ● 4. 리덕스 모듈 만들기 (https://react.vlpt.us/redux/04-make-modules.html)  
  ● 5. 카운터 구현하기 (https://react.vlpt.us/redux/05-counter.html)  
  ● 6. 리덕스 개발자도구 적용하기 (https://react.vlpt.us/redux/06-redux-devtools.html)  
  ● 7. 할 일 목록 구현하기 (https://react.vlpt.us/redux/07-implement-todos.html)  
  ● 8. useSelector 최적화 (https://react.vlpt.us/redux/08-optimize-useSelector.html)  
  ● 9. connect 함수 (https://react.vlpt.us/redux/09-connect.html)  

