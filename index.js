// add solution here



function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(factsarray) {
  let i = 0
  while (i < factsarray.length) {
    factsarray[i] = factsarray[i]+"!!!"
    i += 1
  }
  return factsarray
}
