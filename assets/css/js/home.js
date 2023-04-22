function deleteTask() {
    // Send an AJAX request to the server to delete the checked tasks
    fetch('/delete-task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tasks: getCheckedTasks()
      })
    })
    .then(response => {
      // Handle the response from the server
      console.log(response);
    })
    .catch(error => {
      // Handle errors
      console.error(error);
    });
  }
  
  function getCheckedTasks() {
    // Get an array of checked tasks
    const checkedTasks = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
      checkedTasks.push(checkbox.value);
    });
    return checkedTasks;
  }
  