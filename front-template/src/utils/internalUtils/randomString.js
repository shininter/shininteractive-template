export default function randomString(len) {
  len = len || 32
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZ012345678'
  var maxPos = $chars.length
  var pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}
