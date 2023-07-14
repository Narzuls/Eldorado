// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')


onEvent('rei.hide.items', e => {
	e.hide([
	  'ae2:facade',
	  'jsonthings:sp_1',
	  'jsonthings:sp_2',
	  'jsonthings:sp_3',
	  'jsonthings:sp_4',
	  'jsonthings:sp_5',
	  'jsonthings:sp_6',
	  'jsonthings:sp_7',
	  'jsonthings:sp_8',
	  'excompressum:mana_hammer',
	  'industrialforegoing:transporter',
	  'titanium:block_test',
	  'titanium:block_asset_test',
	  'titanium:machine_test',
	  'titanium:block_twenty_four_test',
	  'titanium:creative_generator'
	])
})

console.info('*****SCRIPT RELOADED*****')