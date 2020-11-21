export const addToFavourites = (favouritesList, itemToAdd) => {
    const existingItem = favouritesList.find(item => item.id === itemToAdd.id);

    if(!existingItem) {
        return [...favouritesList, {...itemToAdd}]
    }
    return [...favouritesList]
}

export const removeFromFavourites = (favouritesList, itemToRemove) => {
    const existingItem = favouritesList.find(
      item => item.id === itemToRemove.id
    );

    return favouritesList.filter(item => item !== existingItem);
  }

export const addToLocalStorage = (name, items) => {
    return localStorage.setItem(name, JSON.stringify(items));
}