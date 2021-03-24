const logout = async () => {
    // Tells the server we're logging out
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If it can't logout, for whatever reason, it'll create a popup saying it failed to logout
      document.location.replace('/login');
    } else {
      alert('Failed to log out');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  