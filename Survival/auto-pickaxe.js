
var array = [ Item.internalNameToId('wooden_pickaxe'), Item.internalNameToId('stone_pickaxe'), Item.internalNameToId('gold_pickaxe'), Item.internalNameToId('iron_pickaxe'), Item.internalNameToId('diamond_pickaxe')],//Defines Id
			i = 0, //This Goes Through Slots In Order
			ii = 4 //This Checks Diamond Pickaxe First
			while(ii >= 0) { //Run Code Till No Pick Is Found
			if(Player.getInventorySlot(i) == array[ii]) { //If The Slot Has Id Executed code
			Player.setSelectedSlotId(i)//Sets Your Inhand Item To Id
			break
			}
			if(i < 9) i++ //Increases Slot Count
			else{
            i = 0 //Resets To Check For A Lower Grade Id
			ii-- //Goes Down A Pickaxe
			}
			}
