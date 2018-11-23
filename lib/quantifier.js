module.exports = function (str) {
	const reg = /[0-9]+\.(jpe?g)$/
	return reg.test(str)
  // TODO
}