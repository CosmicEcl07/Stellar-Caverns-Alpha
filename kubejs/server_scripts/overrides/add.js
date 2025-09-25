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
            E: 'gtceu:low_grade_terralite_superconductor_quadruple_wire'
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

    event.shaped('minecraft:book', [
        'AAA',
        'B  '
    ], {
        A: 'minecraft:paper',
        B: 'kubejs:plant_fabric'
    });

    event.shaped('minecraft:item_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:stick',
        B: 'kubejs:plant_fabric'
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

    event.shaped('travelanchors:travel_staff', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'gtceu:beryllium_ingot',
        B: 'gtceu:steel_rod'
    });

    event.shaped('travelanchors:travel_anchor', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'gtceu:double_steel_plate',
        B: 'gtceu:beryllium_plate'
    });

    //Toolbelts
    event.shaped('toolbelt:belt', [
        'BAB',
        'A A',
        'ACA'
    ], {
        A: 'kubejs:plant_fabric',
        B: 'minecraft:string',
        C: 'gtceu:iron_ring'
    });
    event.shaped('toolbelt:pouch', [
        'BCB',
        'A A',
        'BAB'
    ], {
        A: 'kubejs:plant_fabric',
        B: 'minecraft:string',
        C: 'gtceu:gold_ring'
    });
    
    //Backpacks

    event.shaped('sophisticatedbackpacks:magnet_upgrade', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'sophisticatedbackpacks:upgrade_base',
        B: 'gtceu:magnetic_iron_ingot'
    });

    event.shaped('sophisticatedbackpacks:advanced_magnet_upgrade', [
        'ABA',
    ], {
        A: 'sophisticatedbackpacks:magnet_upgrade',
        B: 'gtceu:magnetic_neodymium_ingot'
    });

    event.shaped('sophisticatedbackpacks:refill_upgrade', [
        ' E ',
        'BAB',
        'CDC'
    ], {
        A: 'sophisticatedbackpacks:upgrade_base',
        B: 'minecraft:iron_ingot',
        C: 'minecraft:redstone',
        D: '#forge:chests/wooden',
        E: 'gtceu:double_beryllium_plate'
    });

    event.shaped('sophisticatedbackpacks:upgrade_base', [
        'CBC',
        'BAB',
        'CBC'
    ], {
        A: 'kubejs:plant_fabric',
        B: 'gtceu:bronze_plate',
        C: 'minecraft:string'
    });

    event.shaped('sophisticatedbackpacks:backpack', [
        'CAC',
        'CBC',
        'AAA'
    ], {
        A: 'kubejs:plant_fabric',
        B: '#forge:chests/wooden',
        C: 'minecraft:string'
    });

    event.shaped('sophisticatedbackpacks:copper_backpack', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#gtceu:circuits/lv',
        B: '#forge:chests/wooden',
        C: 'sophisticatedbackpacks:backpack'
    });

    event.shaped('sophisticatedbackpacks:iron_backpack', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#gtceu:circuits/mv',
        B: '#forge:chests/wooden',
        C: 'sophisticatedbackpacks:copper_backpack'
    });

    event.shaped('sophisticatedbackpacks:gold_backpack', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#gtceu:circuits/hv',
        B: '#forge:chests/wooden',
        C: 'sophisticatedbackpacks:iron_backpack'
    });

    event.shaped('sophisticatedbackpacks:diamond_backpack', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#gtceu:circuits/ev',
        B: '#forge:chests/wooden',
        C: 'sophisticatedbackpacks:gold_backpack'
    });

    event.shaped('sophisticatedbackpacks:netherite_backpack', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#gtceu:circuits/iv',
        B: '#forge:chests/wooden',
        C: 'sophisticatedbackpacks:diamond_backpack'
    });

    event.shaped('gtceu:multi_smelter', [
        'AAA',
        'BCB',
        'DBD'
    ], {
        A: 'minecraft:furnace',
        B: '#gtceu:circuits/mv',
        C: 'gtceu:heatproof_machine_casing',
        D: 'gtceu:copper_single_cable'
    });

    //quality of life logs
    event.shaped('16x minecraft:stick', [
        'A  ',
        'A  '
    ], {
        A: '#minecraft:logs'
    });

    event.shaped('4x minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: '#minecraft:logs'
    });
});