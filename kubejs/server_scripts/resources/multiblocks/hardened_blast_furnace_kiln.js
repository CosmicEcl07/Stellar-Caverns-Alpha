ServerEvents.recipes(event => {
    event.recipes.gtceu.hardened_blast_furnace('hbf_sand_to_glass_logs')
        .itemInputs('8x minecraft:sand', '4x #minecraft:logs')
        .itemOutputs('4x minecraft:glass')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_sand_to_glass_planks')
        .itemInputs('8x minecraft:sand', '16x #minecraft:planks')
        .itemOutputs('4x minecraft:glass')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_sand_to_glass_charcoal')
        .itemInputs('8x minecraft:sand', '1x minecraft:charcoal')
        .itemOutputs('4x minecraft:glass')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_iron_dust_to_ingot')
        .itemInputs('4x gtceu:iron_dust', '1x minecraft:charcoal')
        .itemOutputs('4x minecraft:iron_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_copper_dust_to_ingot')
        .itemInputs('4x gtceu:copper_dust', '1x minecraft:charcoal')
        .itemOutputs('4x minecraft:copper_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_lead_dust_to_ingot')
        .itemInputs('4x gtceu:lead_dust', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:lead_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_iron_to_wrought_iron')
        .itemInputs('4x minecraft:iron_ingot', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:wrought_iron_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_raw_rubber_ingot')
        .itemInputs('12x gtceu:raw_rubber_dust', "4x gtceu:sulfur_dust")
        .itemOutputs('4x gtceu:rubber_ingot')
        .duration(160)

    event.recipes.gtceu.hardened_blast_furnace('hbf_charcoal')
        .itemInputs('4x #minecraft:logs', '4x #minecraft:planks')
        .itemOutputs('4x minecraft:charcoal')
        .duration(160)

    event.recipes.gtceu.hardened_blast_furnace('hbf_better_charcoal')
        .itemInputs('1x minecraft:charcoal', '8x #minecraft:logs')
        .itemOutputs('8x minecraft:charcoal')
        .duration(320)
    
    event.recipes.gtceu.hardened_blast_furnace('hbf_wrought_iron_to_steel')
        .itemInputs('1x minecraft:charcoal', 'gtceu:wrought_iron_ingot')
        .itemOutputs('gtceu:steel_ingot')
        .duration(600)
       
    event.recipes.gtceu.hardened_blast_furnace('hbf_red_alloy_dust_to_ingot')
        .itemInputs('4x gtceu:red_alloy_dust', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:red_alloy_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_zinc_dust_to_ingot')
        .itemInputs('4x gtceu:zinc_dust', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:zinc_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_bronze_dust_to_ingot')
        .itemInputs('4x gtceu:bronze_dust', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:bronze_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_brass_dust_to_ingot')
        .itemInputs('4x gtceu:brass_dust', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:brass_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('hbf_tin_dust_to_ingot')
        .itemInputs('4x gtceu:tin_dust', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:tin_ingot')
        .duration(80)

    event.recipes.gtceu.coke_oven('double_charcoal')
        .itemInputs('#minecraft:logs')
        .itemOutputs('2x minecraft:charcoal')
        .outputFluids('gtceu:creosote 50')
        .duration(300)

    event.recipes.gtceu.hardened_blast_furnace('invar_dust_to_ingot')
        .itemInputs('4x gtceu:invar_dust', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:invar_ingot')
        .duration(80)

    event.recipes.gtceu.hardened_blast_furnace('cupronickel_dust_to_ingot')
        .itemInputs('4x gtceu:cupronickel_dust', '1x minecraft:charcoal')
        .itemOutputs('4x gtceu:cupronickel_ingot')
        .duration(80)
    
    // event.recipes.gtceu.hardened_blast_furnace('_dust_to_ingot')
    //     .itemInputs('4x gtceu:_dust', '1x minecraft:charcoal')
    //     .itemOutputs('4x gtceu:_ingot')
    //     .duration(80)
});

