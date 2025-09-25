GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	// Machines
	event.create('primitive_maceration')
	     .category('simple')
		 .setEUIO('in')
		 .setMaxIOSize(1,1,0,0)
		 .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		 .setSound(GTSoundEntries.MACERATOR);

	event.create('primitive_mixer')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(3, 2, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.MIXER);

	event.create('primitive_extractor')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(1, 1, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.BOILER);

	event.create('primitive_forge_hammer')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(1, 1, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.COMPRESSOR);

	event.create('primitive_compressor')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(1, 1, 0, 1)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.COMPRESSOR);

	event.create('primitive_kiln')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 2, 1, 0)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FIRE);

	event.create('primitive_sifter')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(2, 6, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.EXTRACTOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.MACERATOR);

	event.create('primitive_centrifuge')
		.category('simple')
		.setEUIO('in')
		.setMaxIOSize(1, 3, 1, 3)
		.setSlotOverlay(false, false, GuiTextures.CENTRIFUGE_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.CENTRIFUGE);



    // Thermal Generator
	event.create('thermal_generator')
		.category('simple')
		.setEUIO('out')
		.setMaxIOSize(1, 0, 1, 0)
		.setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.CENTRIFUGE);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Machines
	event.create('macerator', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_maceration')
				.workableCasingRenderer('minecraft:block/cobblestone', 'gtceu:block/machines/macerator', false)
		))

	event.create('centrifuge', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_centrifuge')
				.workableCasingRenderer('minecraft:block/stone_bricks', 'gtceu:block/machines/centrifuge', false)
		))

	event.create('mixer', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_mixer')
				.workableCasingRenderer('minecraft:block/cobblestone', 'gtceu:block/machines/mixer', false)
		))

	event.create('extractor', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_extractor')
				.workableCasingRenderer('minecraft:block/cobblestone', 'gtceu:block/machines/extractor', false)
		))


	event.create('compressor', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_compressor')
				.workableCasingRenderer('minecraft:block/cobblestone', 'gtceu:block/machines/compressor', false)
		))


	event.create('forge_hammer', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_forge_hammer')
				.workableCasingRenderer('minecraft:block/cobblestone', 'gtceu:block/machines/forge_hammer', false)
		))

	event.create('kiln', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_kiln')
				.workableCasingRenderer('minecraft:block/stone_bricks', 'gtceu:block/machines/arc_furnace', false)
		))

	event.create('sifter', 'simple')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('primitive_sifter')
				.workableCasingRenderer('minecraft:block/stone_bricks', 'gtceu:block/machines/sifter', false)
		))

	// Generators
	event.create('thermal_generator', 'generator')
		.tiers(GTValues.ULV)
		.definition((tier, builder) => (
			builder
				.recipeType('thermal_generator')
				.regressWhenWaiting(false)
				.workableCasingRenderer('minecraft:block/stone_bricks', 'kubejs:block/singleblock/thermal_generator', false)
		))
});




