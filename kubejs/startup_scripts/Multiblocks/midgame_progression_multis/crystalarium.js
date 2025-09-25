GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

     event.create('crystalarium')
        .category('resources')
        .setMaxIOSize(2, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR )
    });

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('gtceu:crystalarium','multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:clean_machine_casing'))
        .recipeTypes(['crystalarium'])
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FBBBBBF','FCCCCCF','FCGGGCF','FCGGGCF','#CCCCC#')
            .aisle('BCCCCCB','C#####C','C#####C','C#####C','FCTTTCF')
            .aisle('BCCCCCB','CMMMMMC','CPPPPPC','CMMMMMC','FCTTTCF')
            .aisle('BCCCCCB','C#####C','C#####C','C#####C','FCTTTCF')
            .aisle('FBBBBBF','FCC@CCF','FCGGGCF','FCGGGCF','#CCCCC#')
            .where('C', Predicates.blocks('gtceu:clean_machine_casing')
            .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('F', Predicates.blocks('gtceu:titanium_frame'))
            .where('B', Predicates.blocks('gtceu:titanium_firebox_casing'))
            .where('P', Predicates.blocks('gtceu:titanium_pipe_casing'))
            .where('M', Predicates.blocks('gtceu:molybdenum_disilicide_coil_block'))
            .where('G', Predicates.blocks('gtceu:cleanroom_glass'))
            .where('T', Predicates.blocks('gtceu:filter_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('#', Predicates.any())
        .build())

        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/power_substation", false
        );
});