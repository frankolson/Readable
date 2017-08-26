export const dateDescending = (objects) => (
  objects.sort((a, b) => b.timestamp - a.timestamp)
)

export const dateAscending = (objects) => (
  objects.sort((a, b) => a.timestamp - b.timestamp)
)

export const scoreDescending = (objects) => (
  objects.sort((a, b) => b.voteScore - a.voteScore)
)

export const scoreAscending = (objects) => (
  objects.sort((a, b) => a.voteScore - b.voteScore)
)
