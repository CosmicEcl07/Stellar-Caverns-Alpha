ServerEvents.recipes(event => {
    event.recipes.gtceu.high_pressure_compression('compressor_lava')
        .itemInputs('64x minecraft:cobblestone')
        .outputFluids('minecraft:lava 1000',)
        .duration(800)
        .EUt(15)

    event.recipes.gtceu.high_pressure_compression('carbon_to_diamond')
        .itemInputs('64x gtceu:carbon_dust')
        .itemOutputs('1x minecraft:diamond')
        .duration(600)
        .EUt(30)
    
    event.recipes.gtceu.high_pressure_compression('compress_exquisite_ruby')
        .itemInputs('9x gtceu:ruby_dust')
        .itemOutputs('gtceu:exquisite_ruby_gem')
        .duration(2400)
        .EUt(96)

    event.recipes.gtceu.high_pressure_compression('compress_exquisite_emerald')
        .itemInputs('9x gtceu:emerald_dust')
        .itemOutputs('gtceu:exquisite_emerald_gem')
        .duration(2400)
        .EUt(96)
    
    event.recipes.gtceu.high_pressure_compression('compress_exquisite_sapphire')
        .itemInputs('9x gtceu:sapphire_dust')
        .itemOutputs('gtceu:exquisite_sapphire_gem')
        .duration(2400)
        .EUt(96)
    
    event.recipes.gtceu.high_pressure_compression('compress_exquisite_diamond')
        .itemInputs('9x gtceu:diamond_dust')
        .itemOutputs('gtceu:exquisite_diamond_gem')
        .duration(2400)
        .EUt(96)
});