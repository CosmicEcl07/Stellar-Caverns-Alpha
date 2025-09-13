ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('fluxcores_assembly')
        .itemInputs('4x gtceu:obsidian_plate', 'minecraft:ender_eye')
        .inputFluids('gtceu:molten_flux 576')
        .itemOutputs('4x fluxnetworks:flux_core')
        .circuit(11)
        .duration(20)
        .EUt(440)

    event.recipes.gtceu.forming_press('form_flux_block')
        .itemInputs('4x fluxnetworks:flux_core', '5x gtceu:obsidian_dust')
        .notConsumable('gtceu:block_casting_mold')
        .itemOutputs('fluxnetworks:flux_block')
        .duration(20)
        .EUt(440)

    event.recipes.gtceu.extractor('extract_flux')
        .itemInputs('fluxnetworks:flux_dust')
        .outputFluids('gtceu:molten_flux 144')
        .duration(80)
        .EUt(28)

    event.recipes.gtceu.assembler('flux_controller_assembly')
        .itemInputs('4x fluxnetworks:flux_core', '5x fluxnetworks:flux_block', 'gtceu:hv_emitter')
        .itemOutputs('fluxnetworks:flux_controller')
        .circuit(11)
        .duration(600)
        .EUt(440)

    event.recipes.gtceu.assembler('basic_flux_assembly')
        .itemInputs('8x fluxnetworks:flux_block')
        .inputFluids('gtceu:glass 288')
        .itemOutputs('fluxnetworks:basic_flux_storage')
        .circuit(11)
        .duration(100)
        .EUt(110)

    event.recipes.gtceu.assembler('herc_flux_assembly')
        .itemInputs('8x fluxnetworks:basic_flux_storage')
        .inputFluids('gtceu:glass 288')
        .itemOutputs('fluxnetworks:herculean_flux_storage')
        .circuit(11)
        .duration(100)
        .EUt(440)

    event.recipes.gtceu.assembler('garg_flux_assembly')
        .itemInputs('8x fluxnetworks:herculean_flux_storage')
        .inputFluids('gtceu:glass 288')
        .itemOutputs('fluxnetworks:gargantuan_flux_storage')
        .circuit(11)
        .duration(100)
        .EUt(1760)

    event.shaped('fluxnetworks:flux_configurator', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'minecraft:ender_eye',
        B: 'gtceu:obsidian_plate'
    })

    });