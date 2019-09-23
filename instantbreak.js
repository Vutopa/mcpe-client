if(toggled.instB) {
						if(!blocks.hasOwnProperty(Player.getPointedBlockId())) blocks[Player.getPointedBlockId()] = { friction: Block.getFriction(Player.getPointedBlockId(), Player.getPointedBlockData()), breakSpeed: Block.getDestroyTime(Player.getPointedBlockId(), Player.getPointedBlockData()), fricS: false, fricM: false, instaB: false }
						if(!blocks[Player.getPointedBlockId()].instaB) {
 blocks[Player.getPointedBlockId()].instaB = true
 Block.setDestroyTime(Player.getPointedBlockId(), 0.00001)
 }
						}else if(blocks.hasOwnProperty(Player.getPointedBlockId())) if(blocks[Player.getPointedBlockId()].instaB) {
 Block.setDestroyTime(Player.getPointedBlockId(), blocks[Player.getPointedBlockId()].breakSpeed)
 blocks[Player.getPointedBlockId()].instaB = false
 }
