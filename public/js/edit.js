const editButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update blog');
        }
    }
};

document
    .querySelector('#edit-btn')
    .addEventListener('click', delButtonHandler);