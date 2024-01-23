# React로 만든 Todo-list

## 🖥️ 프로젝트 소개

React State Hook을 공부하고 만든 미니프로젝트 입니다.

![Alt text](public/Todo-list.gif)

<br>

## 🗓️ 프로젝트 제작 및 리팩토링

### 1차 : 2024.01.21 ~ 2024.01.22(1일)

#### ✅ 주요 기능

1. 할 일 추가: 입력 필드에 할 일을 입력하고 "추가" 버튼을 클릭하여 목록에 새로운 할 일을 추가합니다.

2. 할 일 완료: 할 일 옆의 체크 박스를 클릭하여 해당 할 일을 완료 상태로 토글합니다.

3. 할 일 삭제: 할 일 옆의 "삭제" 버튼을 클릭하여 목록에서 할 일을 제거합니다.

4. 할 일 정렬: 완료된 할 일은 목록의 하단으로 이동하여 정렬됩니다.

#### 🧩 컴포넌트

> App Component

- useState 훅을 사용하여 todos (할 일 목록)와 newTask (새로운 할 일의 입력 값) 상태를 관리합니다.
- 사용자의 입력을 받아 새로운 할 일을 추가하기위해 `addClickBtnHandler` 함수를 사용합니다.
- 현재 날짜를 표시하기 위해 currentDate를 설정하고 렌더링합니다.

> TodoItems Component

- props로 받은 todos와 setTodos를 사용하여 할 일 리스트를 렌더링합니다.
  각 할 일에 대한 완료 및 삭제 기능을 수행하기위해 `toggleIsDoneHandler`와 `clickRemoveBtnHandler` 함수를 사용합니다.
- 할 일 리스트는 완료 여부에 따라 정렬되어 표시됩니다.

> TodoInput Component

- 사용자로부터 할 일을 입력받고, "Add" 버튼을 클릭하면 새로운 할 일을 목록에 추가합니다. - ` alueChangeHandler` 함수는 입력 값의 변화를 감지하여 newTask 상태를 업데이트하며, `addClickBtnHandler` 함수는 입력 값이 비어 있지 않은 경우에만 새로운 할 일을 생성하여 목록에 추가하고 입력 값을 초기화합니다.

<br>

## 🎬 시작 가이드

1. git clone repository

```
$ git clone https://github.com/MyNameSieun/Todo-List.git
```

2. Install dependencies

```
$ npm install
```

3. Start the development server

```
$ npm start
```

4. Open the project in your browser

```
$ http://localhost:3000
```
