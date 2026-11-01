// Runs before first paint so a saved day theme doesn't flash night first.
try { if (localStorage.getItem('dojo-java.theme') === 'day') document.documentElement.dataset.theme = 'day'; } catch (e) {}
