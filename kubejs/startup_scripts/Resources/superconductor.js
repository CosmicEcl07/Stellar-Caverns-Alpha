GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('low_grade_terralite_superconductor')
        .ingot() 
        .cableProperties(32, 2, 0, true, 90)
        .color(0x696969)

    event.create('magnesiated_terralite_superconductor')
        .cableProperties(128, 4, 0, true)
        .color(0x3e5c43)
        .ingot()
        .blastTemp(1600, 'low', 48, 300)

    event.create('hazium_supertemporaryconductor')
        .cableProperties(512, 8, 0, true)
        .color(0xe3e364)
        .ingot()
        .blastTemp(1800,'low', 400, 400)
});

