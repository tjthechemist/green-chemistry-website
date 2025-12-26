const res = await fetch(`/api/groups/${groupId}`);
const group = await res.json();