<template>
	<div class="navbarMain">
		<!-- nav bar -->
		<nav>
			<ul class="memberNavbar">
				<li class="memberOptions" @click="navigateTo('/users/edit')">
					<div>個人資訊</div>
				</li>
				<li class="memberOptions" @click="navigateTo('/MemberPoint')">
					<div>會員點數</div>
				</li>
				<li class="memberOptions" @click="navigateTo('/MemberShoppingGold')">
					<div>商店購物金</div>
				</li>
				<li class="memberOptions" @click="navigateTo('/MemberCoupons')">
					<div>優惠券</div>
				</li>
				<li class="memberOptions" @click="navigateTo('/MemberMessage')">
					<div>訊息</div>
				</li>
				<li class="memberOptions" @click="navigateTo('/MemberOrder')">
					<div>訂單</div>
				</li>
				<li class="memberOptions" @click="navigateTo('/MemberWishList')">
					<div>追蹤清單</div>
				</li>
			</ul>
		</nav>
		<!-- nav bar -->
	</div>
</template>

<script>
export default {
	methods: {
		navigateTo(route) {
			this.$router.push(route)
		},
	},
}
</script>

<style scoped>
* {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 14px;
	color: #333333;
}
.navbarMain {
	border: 1px solid #ddd;
	max-width: 1358px;
	margin: auto;
}
/* nav bar */
.memberNavbar {
	display: flex;
	background-color: rgba(204, 204, 204, 0.2);
	padding: 0;
}
.memberOptions {
	width: 100%;
	max-width: 100%;
	list-style-type: none;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: #33333399;
	border-left: solid 1px #ddd;
}
.memberOptions:first-of-type {
	border-left: none;
}
.memberOptions:hover{
	cursor: pointer;
}
@media (max-width: 768px) {
	/* nav bar */
	.memberNavbar {
		display: flex;
		background-color: #fff;
		padding: 0;
		margin: auto;
		max-width: 80%;
		overflow-x: auto; /* 開啟水平捲動 */
	}
	.memberOptions {
		min-width: 70px;
		list-style-type: none;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #33333399;
		border-left: none;
		border-bottom: solid 1px #ddd;
		border-top: none;
		white-space: nowrap;
		background-color: #fff;
		margin-top: 20px;
	}
	.memberOptions:first-of-type {
		border-left: none;
	}
	/* nav bar */
}
</style>
