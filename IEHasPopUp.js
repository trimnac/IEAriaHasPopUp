<script>
var items = document.getElementsByClassName("menu-item-has-children");
var item;

for(var i = 0; i < items.length; i++){
	item = items[i].firstChild;

	if(item.nodeName == "A"){
		item.setAttribute("aria-haspopup", true);
	}
}
</script>
