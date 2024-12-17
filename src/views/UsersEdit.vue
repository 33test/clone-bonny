<script setup>
import MemberNavbar from "../components/MemberNavbar.vue"
import LogOut from "@/components/Logout.vue";
import { ref, computed, onMounted } from "vue";

</script>

<template>
	<LogOut/>
	<MemberNavbar />

	<div
		class="p-10 pt-0 mb-10 mx-auto w-full justify-center flex-auto container"
	>
		<div
			class="w-[90%] flex-auto my-0 mx-auto justify-center bg-white p-10 flex-wrap border lg:w-full"
		>
			<div class="user">
				<i class="fa-solid fa-circle-user"></i>
				<h2>使用者姓名</h2>
				<span class="bg-amber-500 rounded-xl text-white py-1 px-2"
					>一般會員</span
				>
			</div>
			<div class="grid grid-cols-1 gap-5 mt-5 leading-7 lg:grid-cols-2">
				<div class="bg-[#EEEEEE] p-2.5">
					<p class="font-extrabold">
						<i class="fa-solid fa-star pr-2.5"></i>升級至VIP會員
					</p>
					<p>24 個月內累積消費額達 NT$4000即可升級</p>
					<!-- 點擊 -->
					<input type="checkbox" name="" id="rule" class="checkbox" />
					<label for="rule" class="text-blue-600 cursor-pointer"
						>查看所有會員等級規則</label
					>
					<!-- 遮罩區塊 -->
					<div
						class="overlay fixed inset-0 z-50 flex items-center justify-center"
					>
						<!-- 白色區塊 -->
						<div
							class="ruleContent bg-white rounded-lg p-6 max-w-md w-[90%] relative z-10 flex justify-between lg:max-w-lg"
						>
							<div>
								<div class="mb-2.5">
									<h3 class="font-extrabold">Bonny & Read 飾品會員等級規則</h3>
									<p class="font-extralight text-sm">
										會籍期效內若沒達成續會條件，將會自動降級
									</p>
								</div>
								<div class="mb-2.5">
									<h3 class="font-extrabold">VIP 會員</h3>
									<p class="font-extralight text-sm">
										本階升級條件 :24 個月內累積消費額達 NT$4000 即可升級
									</p>
									<p class="font-extralight text-sm">有效期限 :永久有效</p>
								</div>
								<div>
									<h3 class="font-extrabold">白金會員</h3>
									<p class="font-extralight text-sm">
										本階升級條件 :24 個月內累積消費額達 NT$6000 即可升級
									</p>
									<p class="font-extralight text-sm">有效期限 :永久有效</p>
								</div>
							</div>
							<label
								for="rule"
								class="text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
								>×</label
							>
						</div>
						<!-- 遮罩 -->
						<label
							for="rule"
							class="absolute inset-0 bg-black/50 cursor-pointer"
						></label>
					</div>
				</div>
				<div class="p-2.5">
					<h2 class="font-extrabold">
						<i class="fa-solid fa-flag pr-2.5"></i>24 個月內累積消費額
					</h2>
					<p class="text-sm text-gray-500">
						自動更新時間為訂單完成付款後的隔日凌晨，若因取消訂單或退貨未達成升級條件則不會升級。
					</p>
				</div>
			</div>
			<div class="block w-full my-10 leading-5 pl-[5px] lg:pl-0">
				<h2 class="mb-4 font-extrabold">
					<i class="fa-solid fa-circle-user pr-2.5"></i>會員推薦優惠
				</h2>
				<!-- 點擊 -->
				<input type="checkbox" name="" id="activity" class="checkbox" />
				<label for="activity"
					>推薦好友一起賺！領免費購物金:
					複製並分享連結給朋友，推薦對象和你將獲得購物金。
					<p class="text-blue-600 cursor-pointer">活動規則說明</p></label
				>
				<!-- 遮罩區塊 -->
				<div
					class="overlay fixed inset-0 z-50 flex items-center justify-center"
				>
					<!-- 白色區塊 -->
					<div
						class="ruleContent bg-white rounded-lg p-8 max-w-lg w-[90%] relative z-10 flex justify-between lg:max-w-2xl"
					>
						<div>
							<div class="mb-3">
								<h3 class="font-extrabold">活動規則說明</h3>
							</div>
							<div>
								<div class="font-extralight text-sm pb-2.5">
									<h3 class="font-normal pb-1">【活動說明】</h3>
									<p class="pl-5">
										推薦人：被推薦人註冊後完成訂單（需滿$350），即可獲得$50購物金
									</p>
									<p class="pl-5">
										被推薦人：使用推薦連結註冊成為會員，即可獲得$30購物金
									</p>
								</div>
								<div class="font-extralight text-sm pb-2.5">
									<h3 class="font-normal pb-1">【使用規則】</h3>
									<p class="pl-5">1-不限金額皆可使用</p>
									<p class="pl-5">2-使用期限為領取後90天內（含領取當天）</p>
									<p class="pl-5">
										3-Cosmic
										mansion韓國香氛、備品商品、指定系列3件5折、11元起商品不適用購物金
									</p>
								</div>
								<div class="font-extralight text-sm pb-2.5">
									<h3 class="font-normal pb-1">【如何推薦好友】</h3>
									<p class="pl-5">
										1-前往「 會員中心 >
										個人資訊」，找到「會員推薦優惠」區塊，點按「複製連結」
									</p>
									<p class="pl-5">
										2-需要先點按「產生推薦連結」，才會出現「推薦連結」及「複製連結」的按鈕
									</p>
									<p class="pl-5">3-將連結分享給朋友</p>
									<p class="pl-5">
										4-朋友成功註冊且第一筆訂單改為「已完成」&金額達350元，即可獲得購物金
									</p>
								</div>
								<div class="font-extralight text-sm">
									<h3 class="font-normal pb-1">【新會員如何使用購物金】</h3>
									<p class="pl-5">
										1-點按「會員推薦連結」後，點「註冊並領取」並註冊，即可獲得購物金
									</p>
									<p class="pl-5">2-註冊成功後，畫面會彈出獲得購物金的通知</p>
								</div>
							</div>
						</div>
						<label
							for="activity"
							class="text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
							>×</label
						>
					</div>
					<!-- 遮罩 -->
					<label
						for="activity"
						class="absolute inset-0 bg-black/50 cursor-pointer"
					></label>
				</div>
				<p>
					https://www.bonnyread.com.tw/?sl-mref=Q6Bto<a class="text-blue-600"
						><i class="fa-solid fa-link"></i>複製連結</a
					>
				</p>
			</div>
			<div class="grid w-full grid-cols-1 gap-5 justify-between lg:grid-cols-2">
				<form id="profile">
					<div class="w-full p-[25px_21px] pb-5 border">
						<div class="font-extrabold">
							<h2><i class="fa-solid fa-circle-user pr-2.5"></i>會員資料</h2>
						</div>
						<div class="name">
							<label>姓名</label>
							<input type="text" name="" id="" />
						</div>
						<div class="email">
							<label for="">電子郵件</label>
							<input type="email" name="" id="" />
						</div>
						<div class="cellphone">
							<label for="">手機號碼</label>
							<select></select>
							<input type="number" name="" id="" />
						</div>
						<div class="gender">
							<label for="">性別</label>
							<select>
								<option selected disabled>請選擇</option>
								<option value="m">男</option>
								<option value="f">女</option>
								<option value="o">不透露</option>
							</select>
						</div>
						<div class="birthday">
							<label for="">生日日期</label>
						</div>
						<div class="phone">
							<label for="">行動電話(選填)</label>
							<input type="number" name="" id="" />
						</div>
						<div class="store">
							<label for="">來自門市(選填)</label>
							<select name="" id="">
								<option value="" selected disabled>來自門市</option>
								<option value="">台北 信義威秀門市</option>
								<option value="">台中 新光三越櫃位</option>
								<option value="">台南 新光三越百貨小西門櫃位</option>
								<option value="">高雄 夢時代櫃位</option>
							</select>
						</div>
						<div class="introducer">
							<label for="">由誰介紹(選填)</label>
							<input type="text" name="" id="" />
						</div>
						<div class="password">
							<p>密碼</p>
							<a href="https://www.bonnyread.com.tw/users/edit" class="blue"
								>設定新的密碼</a
							>
						</div>
						<div class="thirdPartyRegistration">
							<p>第三方註冊</p>
						</div>
					</div>
				</form>
				<div class="flex flex-col">
					<div class="subscribeArea">
						<h2 class="mb-2 text-lg font-extrabold">
							<i class="fa-solid fa-bell pr-2.5"></i>訂閱
						</h2>
						<div class="grid grid-cols-1 lg:grid-cols-2">
							<div class="publicity">
								<h3>優惠宣傳</h3>
								<div class="subscribeItem">
									<p>電郵</p>
									<button>訂閱</button>
								</div>
								<div class="subscribeItem">
									<p>SMS</p>
									<button>訂閱</button>
								</div>
								<div class="subscribeItem">
									<p>Line</p>
									<button>訂閱</button>
								</div>
								<div class="subscribeItem">
									<p>Facebook</p>
									<button>訂閱</button>
								</div>
							</div>
							<div class="mt-5 pl-0 lg:pl-5">
								<h3>訂閱通知</h3>
								<div class="subscribeItem">
									<p>Line</p>
									<button>訂閱</button>
								</div>
								<div class="subscribeItem">
									<p>Facebook</p>
									<button>訂閱</button>
								</div>
							</div>
						</div>
					</div>
					<div class="payment">
						<h2 class="font-extrabold">
							<i class="fa-solid fa-circle-user pr-2.5"></i>送貨與付款資料
						</h2>
						<div class="cellphone">
							<label for="">聯絡電話(選填)</label>
							<select></select>
							<input type="number" name="" id="" />
						</div>
						<div class="address">
							<p>儲存的地址(選填)</p>
							<div class="addressRightArea">
								<p class="text-blue-600">新增送貨地址</p>
								<ul>
									<li>
										<p>收件人</p>
										<input type="text" name="" id="" />
									</li>
									<li>
										<p>收件人電話號碼</p>
										<div>
											<select>
												<option value="" selected>台灣+886</option>
											</select>
											<input type="number" name="" id="" />
										</div>
									</li>
									<li>
										<p>送貨地點</p>
										<select name="" id="">
											<option value="" selected>台灣</option>
										</select>
									</li>
									<li>
										<p>城市/縣</p>
										<select name="" id="">
											<option value="" selected disabled>請選擇</option>
										</select>
									</li>
									<li>
										<p>地區</p>
										<select name="" id="">
											<option value="" selected disabled>請選擇</option>
										</select>
									</li>
									<li>
										<p>地址</p>
										<input type="text" />
									</li>
								</ul>
							</div>
						</div>
						<div class="creditCard">
							<p>信用卡</p>
							<div class="creditCardRightArea">
								<p class="text-blue-600">新增信用卡</p>
							</div>
						</div>
					</div>
					<div class="btnArea">
						<button>取消</button>
						<button>儲存變更</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.checkbox {
	display: none;
}
.checkbox:not(:checked) ~ .overlay {
	display: none;
}
.ruleContent {
	animation: SlideIn 0.3s ease-out;
}

/* 模態框動畫 */
@keyframes SlideIn {
	from {
		opacity: 0;
		transform: scale(0.8);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
}
.container {
	max-width: 1438px;
}
.border {
	border: 1px solid #eeeeee;
}
input,
select {
	border: 1px solid #eeeeee;
	padding-inline: 8px;
}
.user {
	width: 100%;
	display: flex;
	gap: 10px;
	align-items: center;
	font-weight: 800;
}
.name,
.email,
.cellphone,
.gender,
.birthday,
.phone,
.store,
.introducer,
.password,
.thirdPartyRegistration,
.address {
	display: grid;
	grid-template-columns: 1fr 2fr;
	margin: 20px 0;
	font-size: 16px;
	line-height: 44px;
}
.cellphone {
	display: grid;
	grid-template-columns: 33.3% 14.7% 52%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.subscribeArea {
	border: 1px solid #eeeeee;
	padding: 20px;
}

.publicity {
	margin-top: 20px;
	border-right: 1px solid #eeeeee;
	padding-right: 20px;
}

.subscribeItem {
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin: 20px 0;
	height: 34px;
	line-height: 34px;
}

.subscribeItem button {
	border: 1px solid #eeeeee;
	border-radius: 10%;
	font-size: 14px;
	line-height: 30px;
	height: 30px;
	padding: 0 5px;
}

.subscribeItem button:hover {
	border: 1px solid black;
}

.payment {
	margin: 20px 0;
	border: 1px solid #eeeeee;
	padding: 20px;
}

.addressRightArea input,
select {
	width: 100%;
	height: 44px;
}
.addressRightArea li:nth-child(2) div,
.creditCard {
	display: grid;
	grid-template-columns: 1fr 2fr;
}
.btnArea {
	display: flex;
	justify-content: end;
	line-height: 36px;
	gap: 20px;
	text-align: center;
}
.btnArea button {
	border-radius: 10px;
	border: 1px solid #eeeeee;
	padding: 0 10px;
	text-align: center;
}
.btnArea button:nth-child(2) {
	background-color: black;
	color: white;
}

@media screen and (width <= 1024px) {
	.name,
	.email,
	.gender,
	.birthday,
	.phone,
	.store,
	.introducer,
	.password,
	.thirdPartyRegistration {
		grid-template-columns: 100%;
	}
	.gender select,
	.store select {
		height: 44px;
	}
	.cellphone {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(2, 1fr);
	}
	.cellphone label {
		grid-column-start: 1;
		grid-column-end: 7;
	}

	.cellphone select {
		grid-row-start: 2;
	}
	.cellphone input {
		grid-row-start: 2;
		grid-column-start: 2;
		grid-column-end: 7;
	}
	.btnArea {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.subscribeArea {
		margin-top: 20px;
	}
	.publicity {
		border-right: 0;
		border-bottom: 1px solid #eeeeee;
		padding-right: 0;
	}
	.address {
		grid-template-columns: 1fr;
		padding-bottom: 0;
	}
	.addressRightArea {
		padding: 20px;
		padding-top: 0;
	}
	.creditCard {
		grid-template-columns: 1fr;
		padding-top: 0;
		line-height: 44px;
	}
	.creditCardRightArea {
		padding: 20px;
		padding-top: 0;
	}
}
</style>
