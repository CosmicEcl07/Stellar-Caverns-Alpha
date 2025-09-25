ServerEvents.recipes(event => {
    event.recipes.gtceu.primitive_maceration('wood_pulp')
        .itemInputs('#minecraft:logs')
        .itemOutputs('4x gtceu:wood_dust')
        .duration(320)
        .EUt(2)

    event.recipes.gtceu.primitive_maceration('gravel_pulp')
        .itemInputs('minecraft:gravel')
        .itemOutputs('gtceu:flint_dust')
        .duration(40)
        .EUt(2)   

    event.recipes.gtceu.primitive_maceration('sand_pulp')
        .itemInputs('minecraft:sand')
        .itemOutputs('gtceu:quartz_sand_dust')
        .duration(40)
        .EUt(2)

    event.recipes.gtceu.primitive_maceration('glass_pulp')
        .itemInputs('#forge:glass')
        .itemOutputs('gtceu:glass_dust')
        .duration(40)
        .EUt(2)
});