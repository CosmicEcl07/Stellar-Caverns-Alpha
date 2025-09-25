ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('copper_upgrade_assembly')
        .itemInputs('#forge:chests/wooden')
        .inputFluids('gtceu:copper 4608')
        .itemOutputs('functionalstorage:copper_upgrade')
        .duration(200)
        .EUt(24)

    event.shaped('functionalstorage:fluid_1', [
        'AAA',
        'ABA',
        'AAA'
    ], { 
        A:'gtceu:double_steel_plate',
        B:'gtceu:steel_pipe_casing'
    });

    event.shaped('functionalstorage:configuration_tool', [
        'AAB',
        'ACB',
        'ADA'
    ], { 
        A:'gtceu:iron_plate',
        B:'gtceu:fine_red_alloy_wire',
        C:'#functionalstorage:drawer',
        D:'minecraft:redstone'
    });    

    event.shaped('functionalstorage:linking_tool', [
        'AAB',
        'ACB',
        'ADA'
    ], { 
        A:'gtceu:iron_plate',
        B:'gtceu:fine_red_alloy_wire',
        C:'#functionalstorage:drawer',
        D:'gtceu:quartzite_gem'
    }); 

    event.recipes.gtceu.assembler('void_upgrade_assembly')
        .itemInputs('#forge:chests/wooden', 'gtceu:dense_obsidian_plate')
        .inputFluids('gtceu:beryllium 144')
        .itemOutputs('functionalstorage:void_upgrade')
        .duration(200)
        .EUt(96)

    event.recipes.gtceu.assembler('storage_controller_assembly')
        .itemInputs('8x minecraft:smooth_stone', 'gtceu:lv_emitter')
        .inputFluids('gtceu:steel 576')
        .itemOutputs('functionalstorage:storage_controller')
        .duration(100)
        .EUt(16)

    event.shaped('gtceu:lv_emitter', [
        'ABC',
        'BDB',
        'CBA'
    ], { 
        A:'gtceu:tin_single_cable',
        B:'gtceu:tin_rod',
        C:'#gtceu:circuits/lv',
        D:'gtceu:quartzite_gem'
    });

    event.recipes.gtceu.assembler('lv_emitter_assembly')
        .itemInputs('4x gtceu:tin_rod', '2x gtceu:tin_single_cable', '2x #gtceu:circuits/lv', 'gtceu:quartzite_gem')
        .itemOutputs('gtceu:lv_emitter')
        .circuit(1)
        .duration(100)
        .EUt(30)

    event.shaped('gtceu:fluid_filter', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'gtceu:zinc_foil',
        B: 'gtceu:sapphire_plate'
    })
});