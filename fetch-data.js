async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a list to hold user names
        const userList = document.createElement('ul');

        // Loop through each user and create a list item
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the name of the user
            userList.appendChild(listItem); // Append to the list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear existing content and show error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error); // Log the error
    }
}

// Invoke the fetchUserData function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
