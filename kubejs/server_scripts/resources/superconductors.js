ServerEvents.recipes(event => {
    event.recipes.gtceu.high_pressure_compression('lv_super_con')
      .itemInputs('gtceu:low_grade_terralite_superconductor_dust')
      .itemOutputs('gtceu:low_grade_terralite_superconductor_ingot')
      .duration(400)
      .EUt(32)

   event.recipes.gtceu.mixer('lv_super_con_base')
      .itemInputs('2x gtceu:dense_low_grade_terralite_dust', '3x gtceu:copper_dust', '5x minecraft:redstone')
      .itemOutputs('10x gtceu:low_grade_terralite_superconductor_dust')
      .duration(200)
      .EUt(16)
   
   event.recipes.gtceu.mixer('mv_super_con_base')
      .itemInputs('4x gtceu:dense_low_grade_terralite_dust', '2x gtceu:magnesium_dust')
      .itemOutputs('6x gtceu:magnesiated_terralite_superconductor_dust')
      .duration(250)
      .EUt(24)

   event.recipes.gtceu.mixer('mix_hazium_tempcon')
      .itemInputs('3x gtceu:magnesiated_terralite_superconductor_dust', '2x gtceu:electrum_dust')
      .itemOutputs('5x gtceu:hazium_supertemporaryconductor_dust')
      .duration(300)
      .EUt(96)

   event.recipes.gtceu.chemical_bath('cool_hazium')
      .itemInputs('gtceu:hot_hazium_supertemporaryconductor_ingot')
      .inputFluids('minecraft:water 144')
      .itemOutputs('gtceu:hazium_supertemporaryconductor_ingot')
      .duration(400)
      .EUt(120)

   event.recipes.gtceu.chemical_bath('cool_hazium_distilled')
      .itemInputs('gtceu:hot_hazium_supertemporaryconductor_ingot')
      .inputFluids('gtceu:distilled_water 144')
      .itemOutputs('gtceu:hazium_supertemporaryconductor_ingot')
      .duration(250)
      .EUt(120)
});