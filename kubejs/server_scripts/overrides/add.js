    ServerEvents.recipes(event => {
        event.shaped('gtceu:mv_macerator', [
            'DCF',
            'AEF',
            'BBA'
        ], {
            A: 'gtceu:copper_single_cable',
            B: '#gtceu:circuits/mv',
            C: 'gtceu:mv_electric_motor',
            D: 'gtceu:mv_electric_piston',
            E: 'gtceu:mv_machine_hull',
            F: 'kubejs:terralite_grinding_head'

        })

        event.shaped('gtceu:mv_lathe', [
            'ABA',
            'CEF',
            'BAD'
        ], {
            A: 'gtceu:copper_single_cable',
            B: '#gtceu:circuits/mv',
            C: 'gtceu:mv_electric_motor',
            D: 'gtceu:mv_electric_piston',
            E: 'gtceu:mv_machine_hull',
            F: 'kubejs:terralite_grinding_head'
        })

        event.shaped('gtceu:mv_rock_crusher', [
            'DCF',
            'AEA',
            'BBB'
        ], {
            A: 'gtceu:copper_single_cable',
            B: '#forge:glass',
            C: 'gtceu:mv_electric_motor',
            D: 'gtceu:mv_electric_piston',
            E: 'gtceu:mv_machine_hull',
            F: 'kubejs:terralite_grinding_head'
        })

        event.shaped('gtceu:lv_macerator', [
            'DCF',
            'AAE',
            'BBA'
        ], {
            A: 'gtceu:tin_single_cable',
            B: '#gtceu:circuits/lv',
            C: 'gtceu:lv_electric_motor',
            D: 'gtceu:lv_electric_piston',
            E: 'gtceu:lv_machine_hull',
            F: 'kubejs:terralite_grinding_head'
        })

        event.shaped('gtceu:lv_rock_crusher', [
            'DCF',
            'AEA',
            'BBB'
        ], {
            A: 'gtceu:tin_single_cable',
            B: '#forge:glass',
            C: 'gtceu:lv_electric_motor',
            D: 'gtceu:lv_electric_piston',
            E: 'gtceu:lv_machine_hull',
            F: 'kubejs:terralite_grinding_head'
        })

        event.shaped('gtceu:lv_lathe', [
            'ABA',
            'CEF',
            'BAD'
        ], {
            A: 'gtceu:tin_single_cable',
            B: '#gtceu:circuits/lv',
            C: 'gtceu:lv_electric_motor',
            D: 'gtceu:lv_electric_piston',
            E: 'gtceu:lv_machine_hull',
            F: 'kubejs:terralite_grinding_head'
        })

    //Tom's
        event.shaped('toms_storage:ts.storage_terminal', [
            'ABA',
            'BCD',
            'ABA'
        ], {
            A: 'minecraft:stone_bricks',
            B: 'gtceu:tin_huge_item_pipe',
            C: 'gtceu:steel_crate',
            D: 'minecraft:glass'

        })

        event.shaped('toms_storage:ts.inventory_connector', [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: 'minecraft:stone_bricks',
            B: 'minecraft:redstone_block',
            C: 'gtceu:steel_crate',
            D: 'minecraft:diamond',
            E: 'gtceu:dense_low_grade_terralite_superconductor_quadruple_wire'
        })

        event.shaped('toms_storage:ts.inventory_cable_connector', [
            ' CB',
            'AED',
            ' CB'
        ], {
            A: 'toms_storage:ts.inventory_cable',
            B: '#minecraft:planks',
            C: 'gtceu:quartzite_gem',
            D: 'gtceu:tin_huge_item_pipe',
            E: '#forge:chests/wooden'
        })

                event.shaped('toms_storage:ts.inventory_cable_connector_filtered', [
            ' C ',
            'BAB',
            ' C '
        ], {
            A: 'toms_storage:ts.inventory_cable_connector',
            B: 'gtceu:quartzite_gem',
            C: 'minecraft:paper',
        })

    //LaserIO
     event.shaped('laserio:laser_wrench', [
            'ABA',
            ' C ',
            ' D '
        ], {
            A: 'gtceu:red_alloy_plate',
            B: '#forge:tools/hammers',
            C: 'laserio:logic_chip',
            D: 'gtceu:iron_plate',
        })
        
    event.shaped('minecraft:observer', [
            'AAA',
            'BBC',
            'AAA'
        ], {
            A: 'minecraft:stone',
            B: 'minecraft:redstone',
            C: 'gtceu:obsidian_plate',
        })
    
    event.shaped('laserio:logic_chip_raw', [
            'ABA',
            'CDC',
            'ABA'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'minecraft:clay_ball',
            D: 'minecraft:smooth_stone',
        })

    event.shaped('laserio:laser_connector_advanced', [
            'ABA',
            'CEC',
            'DDD'
        ], {
            A: 'gtceu:beryllium_plate',
            B: 'minecraft:diamond',
            C: 'minecraft:redstone',
            D: 'gtceu:gold_plate',
            E: 'laserio:laser_connector'
        })

    event.shaped('laserio:card_item', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'gtceu:obsidian_plate',
            E: 'gtceu:silver_plate'
        })

    event.shaped('laserio:card_redstone', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'gtceu:obsidian_plate',
            E: 'minecraft:redstone_block'
        })

    event.shaped('laserio:card_energy', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'gtceu:obsidian_plate',
            E: 'gtceu:fine_red_alloy_wire'
        })

    event.shaped('laserio:card_fluid', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'gtceu:obsidian_plate',
            E: 'minecraft:bucket'
        });

    //Vanilla
    event.shaped('minecraft:shears', [
        ' A ',
        'AB '
    ], {
        A: 'gtceu:iron_plate',
        B: '#forge:tools/hammers'
    });

    event.shaped('minecraft:elytra', [
        'BCB',
        'ADA',
        'A A'
    ], {
        A: 'gtceu:polytetrafluoroethylene_plate',
        B: 'gtceu:stainless_steel_gear',
        C: 'gtceu:long_stainless_steel_rod',
        D: '#forge:tools/wrenches'
    });

    // Ender Chests & Tanks
    event.shaped('endertanks:ender_bucket', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'minecraft:blaze_powder',
        B: 'gtceu:obsidian_plate',
        C: 'minecraft:bucket'
    });

    event.shaped('endertanks:ender_tank', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'minecraft:blaze_rod',
        B: 'gtceu:obsidian_plate',
        C: 'endertanks:ender_bucket'
    });

    event.shaped('enderchests:ender_chest', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'minecraft:blaze_rod',
        B: 'gtceu:obsidian_plate',
        C: '#forge:chests/wooden'
    });
});
