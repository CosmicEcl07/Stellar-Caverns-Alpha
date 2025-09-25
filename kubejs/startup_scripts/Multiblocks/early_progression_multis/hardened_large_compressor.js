GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('high_pressure_compression')
        .category('simple')
        .setMaxIOSize(2, 2, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)


});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('high_pressure_compressor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .recipeTypes(['high_pressure_compression', 'compressor'])
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' AAA ',' AAA ','  A  ','     ')
            .aisle('AAAAA','A   A',' A A ','  A  ')
            .aisle('AAAAA','A C A','A C A',' ADA ')
            .aisle('AAAAA','A   A',' A A ','  A  ')
            .aisle(' AAA ',' A@A ', '  A  ','     ')
            .where('A', Predicates.blocks('kubejs:high_steam_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)))
            .where(' ', Predicates.any())
            .where('C', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('D', Predicates.blocks('gtceu:lv_muffler_hatch'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build())


        .workableCasingRenderer(
            "kubejs:block/borrowed_from_start/high_steam_machine_casing",
            "gtceu:block/machines/forge_hammer", false
        );
});