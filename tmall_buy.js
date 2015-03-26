var buy_btn;
var order_btn;

function check_buy()
{
	if (!buy_btn)
	{
		buy_btn = KISSY.all("#J_LinkBuy");
	} 
	if (buy_btn) {
		buy_btn.fire("click");
		setTimeout("check_buy();", 50);
	} else {
		setTimeout("check_buy();", 50);
	}
}

function place_order()
{
	if (!order_btn)
	{
		order_btn = KISSY.all("#submitOrder_1 a.go-btn");
	}
	if (order_btn) {
		order_btn.fire("click");
	} else {
		setTimeout("place_order();", 50);
	}
}

KISSY.ready(function(S) {
	var url = window.location.href;
	if (url.indexOf("http://detail.tmall.com") >= 0)
	{
		check_buy();
	} else {
		place_order();
	}
});