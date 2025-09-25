ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_sifter('tuff_granite_dripstone_dusts')
        .itemInputs('32x gtceu:stone_dust')
        .itemOutputs('4x gtceu:tuff_dust', '4x gtceu:granite_dust','8x gtceu:dripstone_dust','16x gtceu:dirt_dust')
        .duration(60)
        .circuit(3)
        .EUt(4)

    event.recipes.gtceu.primitive_mixer('light_tuffaceous_slurry_synthesis')
        .itemInputs(Item.of('16x gtceu:tuff_dust'))
        .inputFluids('minecraft:water')
        .outputFluids(Fluid.of('gtceu:light_tuffaceous_slurry', 2000))
        .duration(20)
        .EUt(4)

    event.recipes.gtceu.primitive_centrifuge('concentrated_tuffaceous_slurry')
        .inputFluids(Fluid.of('gtceu:light_tuffaceous_slurry', 2000))
        .outputFluids(Fluid.of('gtceu:concentrated_tuffaceous_slurry', 1500))
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.primitive_kiln('tuffaceous_slurry_blast_cake')
        .inputFluids(Fluid.of('gtceu:concentrated_tuffaceous_slurry', 1000))
        .itemOutputs('kubejs:tuffaceous_slurry_residue_cake')
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.primitive_maceration('tuffaceous_slurry_residue_dust')
        .itemInputs('kubejs:tuffaceous_slurry_residue_cake')
        .itemOutputs(Item.of('20x gtceu:concentrated_tuffaceous_slurry_residue_dust'))
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.primitive_sifter('tuffaceous_residue_sifting')
        .itemInputs('10x gtceu:concentrated_tuffaceous_slurry_residue_dust')
        .itemOutputs(Item.of('2x gtceu:sulfur_dust'))
        .itemOutputs(Item.of('3x gtceu:tin_dust'))
        .itemOutputs(Item.of('5x minecraft:redstone'))
        .duration(100)
        .EUt(4)

});

