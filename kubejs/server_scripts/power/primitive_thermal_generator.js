ServerEvents.recipes(event => {
    // Stone burning generator
    event.recipes.gtceu.thermal_generator('primitive_stone_burning')
        .itemInputs('4x gtceu:stone_dust')
        .inputFluids(Fluid.of('minecraft:water', 500))
        .duration(160)
        .EUt(-8);

    // Light stone slurry burning
    event.recipes.gtceu.thermal_generator('primitive_light_calcareous_slurry_burning')
        .inputFluids(Fluid.of('gtceu:light_calcareous_slurry', 2000))
        .itemInputs('2x gtceu:dense_low_grade_terralite_dust')
        .duration(4800)
        .EUt(-8);

    event.recipes.gtceu.thermal_generator('primitive_light_tuffaceous_slurry_burning')
        .inputFluids(Fluid.of('gtceu:light_tuffaceous_slurry', 2000))
        .itemInputs('2x gtceu:dense_low_grade_terralite_dust')
        .duration(4800)
        .EUt(-8);

    event.recipes.gtceu.thermal_generator('primitive_light_granitic_slurry_burning')
        .inputFluids(Fluid.of('gtceu:light_granitic_slurry', 2000))
        .itemInputs('2x gtceu:dense_low_grade_terralite_dust')
        .duration(4800)
        .EUt(-8);
});
