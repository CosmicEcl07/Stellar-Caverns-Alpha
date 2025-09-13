GTCEuStartupEvents.registry('gtceu:material', event => {

    //Milling
    event.create('debris')
        .dust()
        .color(0x6E351D)

    event.create('volcanic_ash')
        .dust()
        .color(0x201010)

    event.create('alumina')
        .dust()
        .color(0x6BC3D1)

    event.create('dolomite')
        .dust()
        .color(0xF7F7F7)
    
    event.create('hornblende')
        .dust()
        .color(0x282828)

    event.create('schist')
        .dust()
        .color(0xB3C2B0)

    event.create('plagioclase')
        .dust()
        .color(0xFDFFDD)

    event.create('sial')
        .dust()
        .color(0x8C5582)
    
    event.create('augite')
        .dust()
        .color(0x171616)

    event.create('augite_blend')
        .dust()
        .color(0x524548)
    
    event.create('titanaugite')
        .dust()
        .color(0xe3c5c5)
    
    event.create('enriched_mineral_mixture')
        .dust()
        .color(0xbdb5bc)

    //ae2
    event.create('fluix_pearl')
        .dust()
        .color(0x866696)
});