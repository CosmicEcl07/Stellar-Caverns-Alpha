ServerEvents.recipes(event => {
    event.shaped('gtceu:lv_geothermal_generator', [
        'DED',
        'BCB',
        'DAD'
    ], {
        A: 'gtceu:tin_single_cable',
        B: 'gtceu:lv_electric_motor',
        C: 'gtceu:lv_machine_hull',
        D: 'gtceu:steel_plate',
        E: 'gtceu:lv_voltage_coil'
    });

    event.shaped('gtceu:lv_geothermal_generator', [
        'DED',
        'BCB',
        'DAD'
    ], {
        A: 'gtceu:gold_single_cable',
        B: 'gtceu:hv_electric_motor',
        C: 'gtceu:hv_machine_hull',
        D: 'gtceu:stainless_steel_plate',
        E: 'gtceu:hv_voltage_coil'
    });

    event.shaped('gtceu:lv_geothermal_generator', [
        'DED',
        'BCB',
        'DAD'
    ], {
        A: 'gtceu:copper_single_cable',
        B: 'gtceu:mv_electric_motor',
        C: 'gtceu:mv_machine_hull',
        D: 'gtceu:aluminium_plate',
        E: 'gtceu:mv_voltage_coil'
    });
});