// 根据键值匹配数组
export function dataGetKey (key, value, data) {
  let obj
  data.forEach((cur, index) => {
  	if (cur[key].toString() === value.toString()) {
  		obj = JSON.parse(JSON.stringify(cur))
  		return
  	}
  })
  return obj
}