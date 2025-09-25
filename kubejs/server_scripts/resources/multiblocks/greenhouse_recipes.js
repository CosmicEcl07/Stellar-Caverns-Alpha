ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu;

//Flowers

const flowers = [
    'minecraft:mangrove_propagule',
    'minecraft:cocoa_beans',
    'minecraft:lily_of_the_valley',
    'minecraft:wither_rose',
    'minecraft:pink_tulip',
    'minecraft:torchflower',
    'minecraft:pitcher_plant',
    'minecraft:azure_bluet',
    'minecraft:allium',
    'minecraft:blue_orchid',
    'minecraft:poppy',
    'minecraft:dandelion',
    'minecraft:cornflower'
];

const recipe = event.recipes.gtceu.greenhouse_flowers('flowers')
    .circuit(1)
    .itemInputs('minecraft:bone_meal')
    .inputFluids(Fluid.of('minecraft:water', 1000))
    .duration(200)
    .EUt(32);

flowers.forEach(flower => {
    recipe.chancedOutput(flower, 500, 0); 

});

//Trees

const trees = [
        ["minecraft:oak_sapling", "minecraft:oak_log"],
        ["minecraft:dark_oak_sapling", "minecraft:dark_oak_log"],
        ["minecraft:spruce_sapling", "minecraft:spruce_log"],
        ["minecraft:birch_sapling", "minecraft:birch_log"],
        ["minecraft:acacia_sapling", "minecraft:acacia_log"],
        ["minecraft:jungle_sapling", "minecraft:jungle_log"],
        ["gtceu:rubber_sapling", "gtceu:rubber_log"],
        ["minecraft:cherry_sapling", "minecraft:cherry_log"]
    ];

trees.forEach((tree) => {
    const sapling = tree[0];
    const log = tree[1];

    //Circuit 1
    if (sapling === "gtceu:rubber_sapling") {
        greg.greenhouse(sapling)
            .notConsumable(sapling)
            .inputFluids("water 1000")
            .itemOutputs(`8x ${log}`, `2x ${sapling}`, "2x gtceu:sticky_resin")
            .duration(320)
            .EUt(32)
            .circuit(1);
    } else {
        greg.greenhouse(sapling)
            .notConsumable(sapling)
            .inputFluids("water 1000")
            .itemOutputs(`8x ${log}`, `2x ${sapling}`)
            .duration(320)
            .EUt(32)
            .circuit(1);
    }

    //Circuit 2
    if (sapling === "gtceu:rubber_sapling") {
        greg.greenhouse(`${sapling}_fertiliser`)
            .notConsumable(sapling)
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(`16x ${log}`, `4x ${sapling}`, "4x gtceu:sticky_resin")
            .duration(160)
            .EUt(32)
            .circuit(2);
    } else {
        greg.greenhouse(`${sapling}_fertiliser`)
            .notConsumable(sapling)
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(`16x ${log}`, `4x ${sapling}`)
            .duration(160)
            .EUt(32)
            .circuit(2);
    }
})

//Giving Mangrove a dye
event.shapeless('minecraft:green_dye', [ 'minecraft:mangrove_propagule' ]);

});