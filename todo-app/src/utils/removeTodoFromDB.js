export const removeTodoFromDB = async (newTodoList) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodoList),
    };

    const response = await fetch('https://todo-app-e79d2-default-rtdb.firebaseio.com/todos.json', requestOptions);
    if (!response.ok) {
        throw new Error("Could not send put request");
    }
}