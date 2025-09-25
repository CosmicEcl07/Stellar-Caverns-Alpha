GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // Thermal Generator
	event.create('geothermal_generator')
		.category('basic')
		.setEUIO('in')
		.setMaxIOSize(1, 0, 2, 0)
		.setSlotOverlay(false, false, GuiTextures.MOLECULAR_OVERLAY_1)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.TURBINE);
});


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('geothermal_generator', 'generator')
		.tiers(GTValues.LV, GTValues.MV, GTValues.HV)
		.definition((tier, builder) => (
			builder
				.recipeType('geothermal_generator')
				.regressWhenWaiting(false)
                .workableTieredHullRenderer("kubejs:block/singleblock/thermal_generator") 
		))
});



