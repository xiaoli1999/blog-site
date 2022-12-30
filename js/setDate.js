/**
 * @file setDate.js 设置日期
 * @description 设置当前年月日及时间
 * @author xiao li
 * @copyright 黎<https://www.xiaoli.vip>
 * @createDate 2022-12-30 16:20
 */

/**
 * @function addZero 补零
 * @param { Number } num
 * @return { String | Number } 返回补零后的值
 */
const addZero = (num = 0) => (num < 10 ? `0${num}` : num)

const weekName = { 1: '星期一', 2: '星期二', 3: '星期三', 4: '星期四', 5: '星期五', 6: '星期六', 0: '星期日' }

/**
 * @function getDate 获取当前日期时间
 * @return { { year: Number,  month: Number | String,  day: Number | String, week: String, h: Number | String, m: Number | String,  s:Number | String } } 返回日期时间
 */
const getDate = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = addZero(date.getMonth() + 1);
	const day = addZero(date.getDate());
	const week = weekName[date.getDay()]
	const h = addZero(date.getHours()) ;
	const m = addZero(date.getMinutes());
	const s = addZero(date.getSeconds());
	return { year, month, day, week, h, m, s }
}

let dateTimer = null

const setDate = () => {
	clearInterval(dateTimer)
	dateTimer = setInterval(() => {
		const dateObj = getDate()
		document.getElementById('date').innerHTML = `${dateObj.year}<span>年</span>${dateObj.month}<span>月</span>${dateObj.day}<span>日</span> ${dateObj.week}`
		document.getElementById('time').innerText = `${dateObj.h}:${dateObj.m}:${dateObj.s}`
	}, 1e3)
}

setDate()
