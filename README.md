# 리액트 디자인 패턴

리액트 디자인 패턴 연습을 위한 레포지토리입니다.

## Presenter and Container

로직과 UI를 Container와 Presenter로 나누어 작성하는 패턴이다.

### Presenter 컴포넌트의 특징

1. 어떻게 보일지 UI를 작성한다. 즉 DOM 마크업과 스타일을 작성한다.
2. Flux 와 store와 같은 종속성이 없다.
3. prop을 통해서만 data와 callback을 받는다.
4. 자체 상태를 가지지 않는다.(modal Open과 같은 UI 상태만을 가진다)
5. 상태, 생명주기, 성능최적화가 필요하지 않는 한 함수형 컴포넌트로 작성된다.

예시: Page, Sidebar, Story, UserInfo, List.

### Container 컴포넌트의 특징

1.  로직을 작성한다.
2.  일반적으로 랩핑을 위한 div를 제외하곤 자체 DOM 마크업이나 스타일이 존재하지 않는다.
3.  Flux 액션을 포함한 로직을 작성하여 Presenter에게 전달한다.
4.  자체 상태를 가진다.

예시: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

## 장점

1. 관심사를 분리할 수 있다.
2. 더 나은 재사용성을 가진다.
3. 디자이너와 협업할 때 로직을 건드리지 않고 UI를 변형할 수 있다.
4. children을 통해 레이아웃 복제 없이 레이아웃을 재사용 할 수 있다.

## 한계

위에서 언급한 것들은 Hooks를 사용하여 분리없이 대체할 수 있다. Custom Hook을 사용하여 로직을 분리하고 로직또한 재사용 할 수 있다.

### Ref

[프레젠테이션 및 컨테이너 구성 요소](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Hooks Pattern

React 16.8에 도입된 Hooks를 이용하여 재사용 가능한 로직을 작성하여 사용하는 방법이다.

내가 작성한 예제는 `Presenter and Container` 패턴 또한 내부에서 hooks를 사용하였는데, 사실 hooks를 사용하지 않을 경우 클래스형 컴포넌트로 작성해야 한다.

이는 Container 컴포넌트의 크기가 커질 수 있음을 의미한다.

또한 클래스의 특징인 this 자동 바인딩으로 인한 문제에 직면할 수 있다.

Hooks 패턴은 내부 상태를 추적하고 순수함수로 작성되어 위에서 언급한 클래스형 컴포넌트를 사용함으로 발생하는 `Presenter and Container`의 문제를 해결할 수 있다.

### Ref

[React component design patterns for 2022](https://blog.logrocket.com/react-component-design-patterns-2022/)

## Control Props Pattern

`Control Props Pattern`은 컴포넌트를 [제어 컴포넌트](https://ko.reactjs.org/docs/forms.html#controlled-components)로 작성한다.

또한 외부 state는 사용자가 컴포넌트의 기본 동작을 변경한 `사용자 지정 로직`을 삽입할 수 있도록 하는 SSOT(single source of truth)로 사용된다.

SSOT는 모든 데이터와 컴포넌트의 동작을 한 곳에서만 제어할 수 있도록 하는 것이다.

제어 컴포넌트는 사용자 입력을 기반으로 자신의 state를 관리하고 업데이트 하는 컴포넌트이다.

### 장점

컴포넌트 외부에 state가 노출되기 때문에 컴포넌트를 제어할 수 있다. 또한 다양한 커스텀 로직을 작성하여 컴포넌트를 재사용할 수 있다.

### 한계

JSX에서만 구현해도 되었지만 이 패턴은 JSX/useState/handleChange와 같이 다른 위치에서의 구현이 필요하다. 즉 구현이 복잡하다.

### Ref

[5 Advanced React Patterns](https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6)
[제어 컴포넌트 (Controlled Component)](https://ko.reactjs.org/docs/forms.html#controlled-components)
[비제어 컴포넌트](https://ko.reactjs.org/docs/uncontrolled-components.html)

## Ref(할 예정)

[advanced-react-patterns](https://github.com/alexis-regnaud/advanced-react-patterns)

[5 Advanced React Patterns](https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6)

[“잘” 사용할 수 있는 디자인 시스템 컴포넌트 만들기](https://team.modusign.co.kr/%EC%9E%98-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-7387b40f547a)

[React Design Pattern](https://www.youtube.com/playlist?list=PLEtjGa9VEukOfsH6OSC0VBNbOPiyfOsw0)

[\[번역\] React에서 BLoC 패턴 사용하기](https://github.com/sbyeol3/articles/issues/15)

[3 React Component Design Patterns You Should Know About](https://blog.openreplay.com/3-react-component-design-patterns-you-should-know-about)

[React component design patterns for 2022](https://blog.logrocket.com/react-component-design-patterns-2022/)
