function bestSprint(storyPoints) {
  let maxSum = 0;
  let newArray = [];
  if (storyPoints.length < 3) {
    console.log("error");

    return;
  }

  for (let i = 0; i < storyPoints.length - 2; i++) {
    let currentSum = storyPoints[i] + storyPoints[i + 1] + storyPoints[i + 2];

    if (currentSum >= maxSum) {
      maxSum = currentSum;
      newArray = [storyPoints[i], storyPoints[i + 1], storyPoints[i + 2]];
    }
  }

  console.log(newArray);
  console.log(maxSum);
}
bestSprint([76, 80,2]);
