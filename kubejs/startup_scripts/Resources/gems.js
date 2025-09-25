GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('silmaril')
        .gem() 
        .liquid()
        .color(0xf5d9d7)
        .secondaryColor(0x430252)

    event.create('soul_lava')
        .liquid(2000)
        .color(0x00DAFF)

    event.create('monoammonium_phosphate')
        .gem()
        .color(0xe1e7f0)
        .iconSet(GTMaterialIconSet.QUARTZ)
});