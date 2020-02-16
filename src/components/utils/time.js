export function separateTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  return minutes + ":" + seconds;
}
