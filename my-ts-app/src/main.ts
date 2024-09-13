// 当 DOM 内容加载完毕时，执行以下代码
document.addEventListener('DOMContentLoaded', () => {
    // 获取输入新待办事项的输入框元素，并断言其类型为 HTMLInputElement
    const newTodoInput = document.querySelector('#newTodo') as HTMLInputElement;
    // 获取展示待办事项列表的 ul 元素，并断言其类型为 HTMLUListElement
    const todosList = document.querySelector('#todos') as HTMLUListElement;

    // 定义 Todo 接口，用于约束待办事项对象的结构
    interface Todo {
        id: number;         // 每个待办事项的唯一 ID
        text: string;       // 待办事项的文本内容
        completed: boolean; // 是否完成的状态
    }
    

    // 创建一个空数组，用于存储待办事项
    const todos: Todo[] = [];

    // 添加新待办事项的函数
    const addTodo = () => {
        // 获取并修剪用户输入的文本（去除首尾空格）
        const newTodoText = newTodoInput.value.trim();

        // 检查输入是否非空
        if (newTodoText) {
            // 向 todos 数组中添加新的待办事项对象
            todos.push({
                id: Date.now(),            // 使用当前时间戳作为 ID
                text: newTodoText,         // 保存输入的待办事项文本
                completed: false           // 默认新事项为未完成状态
            });

            // 渲染最新的待办事项列表
            renderTodos();

            // 清空输入框内容
            newTodoInput.value = '';
        }
    };

    // 渲染待办事项列表的函数
    const renderTodos = () => {
        // 清空当前列表内容，以便重新渲染
        todosList.innerHTML = '';

        // 遍历所有的待办事项
        todos.forEach(todo => {
            // 创建一个新的 li 元素，用于显示单个待办事项
            const todoItem = document.createElement('li');

            // 创建一个复选框，用于标记待办事项是否完成
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';            // 设置复选框类型
            checkbox.checked = todo.completed;     // 根据待办事项的完成状态来设置复选框是否选中

            // 当复选框状态变化时，更新待办事项的完成状态
            checkbox.addEventListener('change', () => {
                todo.completed = checkbox.checked; // 更新待办事项的完成状态
            });

            // 创建一个文本节点，显示待办事项的文本内容
            const text = document.createTextNode(todo.text);

            // 将复选框和文本节点添加到 li 元素中
            todoItem.appendChild(checkbox);
            todoItem.appendChild(text);

            // 将 li 元素添加到待办事项列表 (ul) 中
            todosList.appendChild(todoItem);
        });
    };

    // 为“添加待办事项”按钮绑定点击事件，点击时调用 addTodo 函数
    document.querySelector('#addTodo')?.addEventListener('click', addTodo);

    // 为输入框绑定键盘事件，当按下回车键时调用 addTodo 函数
    newTodoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo(); // 按下回车键时添加新的待办事项
        }
    });
});
