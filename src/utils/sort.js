export const dateDescending = (objects) => (
  objects.sort((a, b) => b.timestamp - a.timestamp)
)

export const dateAscending = (objects) => (
  objects.sort((a, b) => a.timestamp - a.timestamp)
)
