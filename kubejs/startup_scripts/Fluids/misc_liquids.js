GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('liquid_nitrogen')
        .liquid(77)
        .color(0x2db5b5)
        .iconSet(GTMaterialIconSet.FLUID)

    event.create('molten_flux')
        .liquid(1200)
        .color(0x0a0000)
        .iconSet(GTMaterialIconSet.FLUID)
});