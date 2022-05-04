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

## Ref(할 예정)

[advanced-react-patterns](https://github.com/alexis-regnaud/advanced-react-patterns)

[5 Advanced React Patterns](https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6)

[“잘” 사용할 수 있는 디자인 시스템 컴포넌트 만들기](https://team.modusign.co.kr/%EC%9E%98-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-7387b40f547a)

[React Design Pattern](https://www.youtube.com/playlist?list=PLEtjGa9VEukOfsH6OSC0VBNbOPiyfOsw0)

[\[번역\] React에서 BLoC 패턴 사용하기](https://github.com/sbyeol3/articles/issues/15)
