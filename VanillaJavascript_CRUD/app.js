	//  Selectors
	const todoInput = document.querySelector('.todo-input');
	const todoButton = document.querySelector('.todo-button');
	const todoList = document.querySelector('.todo-list');
	
	// Event Listeners
	todoButton.addEventListener('click', addTodo);
	
	// Functions
	function addTodo(event) {
		//console.log('Hello!');
		
		// Prevent Form from Submitting
		event.preventDefault();
		// Todo Div
		
		const todoDiv = document.createElement('div');
		todoDiv.classList.add("todo");
		// Create LI
		const newTodo = document.createElement('li');
		newTodo.innerText = 'hey';
		newTodo.classList.add('todo-item');
		todoDiv.appendChild(newTodo);
		
		// Check Mark Button
		const  completeButton = document.createElement('button');
		completeButton.innerHTML = '<i class="fas fa-check"> </i>';
		completeButton.classList.add("complete-btn");
		todoDiv.appendChild(completeButton);
		
		// Check Trash Button
		const  trashButton = document.createElement('button');
		completeButton.innerHTML = '<i class="fas fa-trash"> </i>';
		completeButton.classList.add("complete-btn");
		todoDiv.appendChild(trashButton);
		
		// Append To List
		todoList.appendChild(todoDiv);
	}