GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('liquid_nitrogen')
        .liquid(77)
        .color(0x2db5b5)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('molten_flux')
        .liquid(1200)
        .color(0x0a0000)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('impure_molten_flux')
        .liquid(1200)
        .color(0x660e19)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('hot_impure_titanium_tetrachloride')
        .gas(1250)
        .color(0x90a9ab)

    event.create('impure_titanium_tetrachloride')
        .gas(293)
        .color(0x90aeb0)

    event.create('saline_groundwater')
        .liquid(293)
        .color(0x4e60cc)

    event.create('crystalization_catalyst_solution')
        .liquid(293)
        .color(0xcccc81)
});