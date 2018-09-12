/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let index = 0; index < preferences.length; index++) {
    if (preferences[index] -1== index) continue;
    const element = preferences[index];
    const element2 = preferences[element-1];
    const element3 = preferences[element2-1];
    if (element3-1==index){
      count+=1
      preferences[index]=0
      preferences[element-1]=0
      preferences[element2-1]=0;
    }

  }
return count;
};

