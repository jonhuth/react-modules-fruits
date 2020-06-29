function choice(items) {
  let randIdx = Math.floor(Math.random() * items.length);

  return items[randIdx];
}

function remove(items, item) {

  let itemIdx = items.indexOf(item);
  if (itemIdx === -1) {
    return;
  }

  return items.splice(itemIdx, 1)[0];
}


export { choice, remove };