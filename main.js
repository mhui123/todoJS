init();

function init(){
    //초기 구동시 실행되는 fuction;
    /*
    Document.querySelector('선택자' 또는 '선택자 array')는 
    제공한 선택자 또는 선택자 array와 일치하는 문서 내 첫 번째 Element를 반환합니다. 일치하는 요소가 없으면 null을 반환합니다.
    getElementById: id값으로 element에 접근
    */
        document.querySelector('form').addEventListener('submit', addToDo);// form태그에 submit 시 addToDo 이벤트 추가
        document.getElementById('clear').addEventListener('click', clearTodoList); //clear태그에 click 시 - clearTodoList이벤트 추가
        document.querySelector('ul').addEventListener('click', deleteOrCheck); //ul click시 deleteOrCheck이벤트 추가
}

function addToDo(e) {
    e.preventDefault(); //이벤트를 취소할 수 있는 경우, 이벤트의 진행하지 않고 취소
    let todo = document.querySelector('input'); //input 태그에 입력된 값 받기
    if(todo !== '') {
        addTask(todo.value); //할일 추가
        todo.value = ''; //todo값 초기화
    }
}

function addTask(value) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li'); // li 태그 새로 만들기

    //innerHTML 은 element 내에 포함 된 HTML 또는 XML 마크업을 가져오거나 설정합니다.
    li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${value}</label>`
    ul.appendChild(li); //ul에 생성한 li 붙여넣기
    document.querySelector('.todolist').getElementsByClassName.display = 'block';
    //html에서 설정한 div todolist 에 블록스타일 입히기.
}

function clearTodoList(e) {
    let ul = document.querySelector('ul').innerHTML = ''; //ul내부 li 전부 삭제
}

function deleteOrCheck(e) {
    if(e.target.className == 'delete') {
        deleteTodo(e); //클릭한 element class가 delete일 경우 삭제이벤트
    } else {
        checkTodo(e); // 그 외일경우 체크박스이벤트
    }
}

function deleteTodo(e) {
    let childNode = e.target.parentNode; //element의 부모node를 지정
    let parentNode = childNode.parentNode; //obj 객체의 부모node를 지정
    parentNode.removeChild(childNode); //removeChild: DOM에서 자식노드를 삭제한 node를 반환
}

function checkTodo(e) {
    const todo = e.target.nextSibling;
    if(e.target.checked) {
        todo.style.color = "#dddddd";
    } else {
        todo.style.color = "#000000";
    }
}