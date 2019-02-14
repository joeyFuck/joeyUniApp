const state={ 
	 goodsList:[
				{
					id:'1',
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
					title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
					originalPrice: 9999,
					favourPrice: 8888,
					tip: '自营'
				},
				{
					id:'2',
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
					title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
					originalPrice: 3499,
					favourPrice: 3399,
					tip: '优惠'
				},
				{
					id:'3',
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
					title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
					originalPrice: 12999,
					favourPrice: 10688,
					tip: '秒杀'
				},
				{
					id:'4',
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
					title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
					originalPrice: 999,
					favourPrice: 958,
					tip: '秒杀'
				},
				{
					id:'5',
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
					title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
					originalPrice: 8888,
					favourPrice: 8288,
					tip: '优惠'
				},
				{
					id:'6',
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
					title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
					originalPrice: 2899,
					favourPrice: 2799,
					tip: '自营'
				}
	 ],
     cart: [], // [{id:"",count:1,goods:{},...}]
};

const getters = {    
    getCart(state) {  
       return state.cart
    },
	getCartCount(state){
	    let totalCount = 0;
		for (let i = 0; i < state.cart.length; i++) {
			 let item = state.cart[i];
			 totalCount = totalCount + item.count;
		}
		return totalCount;
	},
	getGoodsList(state) {  
	   return state.goodsList
	}
};

const mutations = {
    pushCart(state,newId) {  
		let cartArr = state.cart;
		let isExist = false;
		for (let i = 0; i < cartArr.length; i++) {
			let goods = cartArr[i];
			if (goods.id == newId) {
				goods.count++;
				isExist = true;
				break;
			} 
		} 
		if (!isExist) {
			let goodsListArr = state.goodsList;
			let goodsObj = {};
			for (let i = 0; i < goodsListArr.length; i++) {
				let goods = goodsListArr[i];
				if (goods.id == newId) {
				    goodsObj = goods;
					break;
				} 
			}
			cartArr.push({
				id:newId,
				count:1,
				goods:goodsObj
			});
		}  
        state.cart = cartArr;
    }
};

 const actions = {
    pushCartAction(context,newId) {  
        context.commit('pushCart',newId);
    }
};

const store =  {
       namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
       state,
       getters,
       mutations,
       actions
};
 
export default store;