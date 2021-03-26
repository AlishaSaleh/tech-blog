const editButtonHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('input[name="edit-blog-title"]').value;
    const description = document.querySelector('input[name="edit-blog-body"]').value;
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update blog');
        }
    }
};

document
    .querySelector('.edit-blog-form')
    .addEventListener('submit', editButtonHandler);