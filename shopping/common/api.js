import http from '@/common/http'

export function getBanner() {
	return http.post('nav', {nav_type: [0, 1, 2]})
}

export function getSofa() {
	return http.get('product/getHomeProducts')
}

export function getCategory() {
	return http.get('category')
}

//获取商品列表的数据
export function list1(cat_id, sort = 0, priceOrder = 1) {
	//console.log(cat_id,sort,priceOrder);
	return http.get('product/getList', {
		cat_id,
		sort,
		priceOrder
	});
}

//获取商品列表的数据 销量
export function list2(cat_id, sort = 1, priceOrder = 1) {
	//console.log(cat_id,sort,priceOrder);
	return http.get('product/getList', {
		cat_id,
		sort,
		priceOrder
	});
}

//获取商品列表的数据 价格
export function list3(cat_id, sort = 0, priceOrder = 0) {
	//console.log(cat_id,sort,priceOrder);
	return http.get('product/getList', {
		cat_id,
		sort,
		priceOrder
	});
}

// 登录
export function getLogin(data) {
	return http.post('index/login',data)
}

//检查是否登录 登录了就调用
export function getUser() {
	return http.get('user')
}