onEvent('recipes', (event) => {

    //Applied Energistics Creative Item Cell
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABCCDCCBA',
            'BEFCACFEB',
            'CFEGHGEFC',
            'CCGIJIGCC',
            'KAHJLJHAK',
            'CCGIJIGCC',
            'CFEGHGEFC',
            'BEFCACFEB',
            'ABCCDCCBA',
        ],
        key: {
            A: {item: 'botania:laputa_shard', },
            B: {item: 'ae2:fluix_crystal', },
            C: {item: 'ftbic:silicon', },
            D: {item: 'mekanism:creative_bin', },
            E: {item: 'ae2:calculation_processor', },
            F: {item: 'ae2:engineering_processor', },
            G: {item: 'ae2:logic_processor', },
            H: {item: 'ae2:spatial_storage_cell_128', },
            I: {item: 'megacells:item_storage_cell_16m', },
            J: {item: 'mysticalagradditions:creative_essence', },
            K: {item: 'storagedrawers:creative_storage_upgrade', },
            L: {item: 'storagedrawers:creative_vending_upgrade',},
        },
        result: {item: 'ae2:creative_item_cell', },
    }).id(`kubejs:ae2/creative_item_cell`)

    //Refined Storage Creative Item Storage Disk
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'NABBBBBAN',
            'ACDBMBDCA',
            'BDCEFECDB',
            'BBEGHGEBB',
            'BMIHJHKMB',
            'BBEGHGEBB',
            'BDCELECDB',
            'ACDBMBDCA',
            'NABBBBBAN',
        ],
        key: {
            A: {item: 'refinedstorage:processor_binding', },
            B: {item: 'ftbic:silicon', },
            C: {item: 'refinedstorage:advanced_processor', },
            D: {item: 'refinedstorage:basic_processor', },
            E: {item: 'refinedstorage:improved_processor', },
            F: {item: 'extrastorage:disk_1024k', },
            G: {item: 'refinedstorage:64k_storage_disk', },
            H: {item: 'mysticalagradditions:creative_essence', },
            I: {item: 'extrastorage:disk_1024k', },
            J: {item: 'storagedrawers:creative_storage_upgrade', },
            K: {item: 'extrastorage:disk_1024k', },
            L: {item: 'extrastorage:disk_1024k', },
            M: {item: 'extradisks:infinite_storage_disk', },
            N: {item: 'extradisks:withering_processor', },
        },
        result: {item: 'refinedstorage:creative_storage_disk', },
    }).id(`kubejs:refinedstorage/creative_storage_disk`)

    //Refined Storage Creative Fluid storage Disk
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'OABBBBBAO',
            'ACDBNBDCA',
            'BDCEFECDB',
            'BBEGHIEBB',
            'BNJHKHLNB',
            'BBEMHGEBB',
            'BDCELECDB',
            'ACDBNBDCA',
            'OABBBBBAO',
        ],
        key: {
            A: {item: 'refinedstorage:processor_binding', },
            B: {item: 'ftbic:silicon', },
            C: {item: 'refinedstorage:advanced_processor', },
            D: {item: 'refinedstorage:basic_processor', },
            E: {item: 'refinedstorage:improved_processor', },
            F: {item: 'extrastorage:disk_65536k_fluid', },
            G: {item: 'refinedstorage:4096k_fluid_storage_disk', },
            H: {item: 'mysticalagradditions:creative_essence', },
            I: {item: 'refinedstorage:4096k_fluid_storage_disk', },
            J: {item: 'extrastorage:disk_65536k_fluid', },
            K: {item: 'storagedrawers:creative_storage_upgrade', },
            L: {item: 'extrastorage:disk_65536k_fluid', },
            M: {item: 'refinedstorage:4096k_fluid_storage_disk', },
            N: {item: 'extradisks:infinite_fluid_storage_disk', },
            O: {item: 'extradisks:withering_processor', },
        },
        result: {item: 'refinedstorage:creative_fluid_storage_disk', },
    }).id(`kubejs:refinedstorage/creative_fluid_storage_disk`)

    //Botania Creative Mana Tablet
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABABABABA',
            'BACACACAB',
            'ACDEDEDCA',
            'BAEFGFEAB',
            'ACDGHGDCA',
            'BAEFGFEAB',
            'ACDEDEDCA',
            'BACACACAB',
            'ABABABABA',
        ],
        key: {
            A: {item: 'botania:terrasteel_ingot', },
            B: {item: 'botania:mana_pearl', },
            C: {item: 'botania:mana_diamond', },
            D: {item: 'botania:gaia_ingot', },
            E: {item: 'botania:manasteel_ingot', },
            F: {type: 'forge:nbt',
                item: 'botania:mana_tablet',
                count: 1,
                nbt: '{mana:500000}', },
            G: {item: 'mysticalagradditions:creative_essence', },
            H: {item: 'enigmaticlegacy:cosmic_heart', },
        },
        result: {type: 'forge:nbt',
            item: 'botania:mana_tablet',
            count: 1,
            nbt: '{mana:500000, creative: 1b}', },
    }).id(`kubejs:botania/mana_tablet`)

    //Botanical Machinery Creative Mana Battery
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'JBABIBABJ',
            'BACLCLCAB',
            'ACDEDEDCA',
            'BMEFGFEMB',
            'ICDGHGDCI',
            'BMEFGFEMB',
            'ACDEDEDCA',
            'BACLCLCAB',
            'JBABIBABJ',
        ],
        key: {
            A: {item: 'botania:terrasteel_ingot', },
            B: {item: 'botania:rune_mana', },
            C: {item: 'botania:corporea_index', },
            D: {item: 'botania:gaia_ingot', },
            E: {item: 'botania:spawner_mover', },
            F: {type: 'forge:nbt',
                item: 'botania:mana_tablet',
                count: 1,
                nbt: '{mana:500000}', },
            G: {item: 'mysticalagradditions:creative_essence', },
            H: {type: 'forge:nbt',
                item: 'botania:mana_tablet',
                count: 1,
                nbt: '{mana:500000, creative: 1b}',
            },
            I: {item:'botanicalmachinery:mana_battery', },
            J: {type: 'forge:nbt',
                item: 'mna:major_mana_gem',
                count: 1,
                nbt: '{Damage:0,mana:15000.0f}',
            },
            L: {item: 'botania:mana_pylon', },
            M: {item: 'botania:gaia_spreader', },
        },
        result: {item: 'botanicalmachinery:mana_battery_creative', },
    }).id(`kubejs:botanicalmachinery/mana_battery_creative`)

    //Mekanism Creative Fluid Tank
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABCBCBCBA',
            'BCDCECDCB',
            'CDFBGBFDC',
            'BCBHKHBCB',
            'CEGILIGEC',
            'BCBHKHBCB',
            'CJFBGBFJC',
            'BCJCECJCB',
            'ABCBCBCBA',
        ],
        key: {
            A: {item: 'mekanism:dynamic_tank', },
            B: {item: 'mekanism:alloy_atomic', },
            C: {item: 'minecraft:iron_ingot', },
            D: {item: 'fluidtank:tank_diamond', },
            E: {item: 'fluidtank:tank_star', },
            F: {item: 'industrialforegoing:supreme_black_hole_tank', },
            G: {item: 'enderstorage:ender_tank', },
            H: {item: 'extendedcrafting:ultimate_singularity', },
            I: {item: 'mekanism:ultimate_fluid_tank', },
            J: {item: 'tconstruct:seared_ingot_gauge', },
            K: {item: 'mysticalagradditions:creative_essence', },
            L: {type: "forge:nbt",
                item: "mekanism:creative_energy_cube",
                count: 1,
                nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
            },
        },
        result: {item: 'mekanism:creative_fluid_tank', },
    }).id(`kubejs:mekanism/creative_fluid_tank`)

    //Mystical Agriculture Creative Essence
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABCDEDFGH",
            "IJDKDLDMN",
            "ODPDQDRDS",
            "DTDUVUDWD",
            "XDYZ123D4",
            "D5DU6UD7D",
            "aDsDdDfDg",
            "hjDkDlDqw",
            "ertDyDuio",
        ],
        key: {
            A: {item: "mysticalagriculture:nickel_seeds", },
            B: {item: "mysticalagriculture:manasteel_seeds", },
            C: {item: "mysticalagriculture:experience_seeds", },
            D: {item: "mysticalagradditions:insanium_essence", },
            E: {item: "mysticalagriculture:diamond_seeds", },
            F: {item: "mysticalagriculture:constantan_seeds", },
            G: {item: "mysticalagriculture:ghast_seeds", },
            H: {item: "mysticalagriculture:lumium_seeds", },
            I: {item: "mysticalagriculture:redstone_seeds", },
            J: {item: "mysticalagriculture:elementium_seeds", },
            K: {item: "mysticalagriculture:queens_slime_seeds", },
            L: {item: "mysticalagriculture:hepatizon_seeds", },
            M: {item: "mysticalagriculture:fluix_seeds", },
            N: {item: "mysticalagriculture:pig_iron_seeds", },
            O: {item: "mysticalagriculture:hop_graphite_seeds", },
            P: {item: "mysticalagriculture:air_seeds", },
            Q: {item: "mysticalagriculture:stone_seeds", },
            R: {item: "mysticalagriculture:fiery_ingot_seeds", },
            S: {item: "mysticalagriculture:invar_seeds", },
            T: {item: "mysticalagriculture:electrum_seeds", },
            U: {item: "extendedcrafting:ultimate_singularity", },
            V: {item: "mysticalagriculture:squid_seeds", },
            W: {item: "mysticalagriculture:starmetal_seeds", },
            X: {item: "mysticalagriculture:wither_skeleton_seeds", },
            Y: {item: "mysticalagriculture:refined_obsidian_seeds", },
            Z: {item: "mysticalagriculture:earth_seeds", },
            1: {item: "mysticalagriculture:master_infusion_crystal", },
            2: {item: "mysticalagriculture:fire_seeds", },
            3: {item: "mysticalagriculture:terrasteel_seeds", },
            4: {item: "mysticalagriculture:netherite_seeds", },
            5: {item: "mysticalagriculture:manyullyn_seeds", },
            6: {item: "mysticalagriculture:water_seeds", },
            7: {item: "mysticalagriculture:uranium_seeds", },
            a: {item: "mysticalagriculture:signalum_seeds", },
            s: {item: "mysticalagriculture:nether_star_seeds", },
            d: {item: "mysticalagriculture:pink_slime_seeds", },
            f: {item: "mysticalagriculture:dragon_egg_seeds", },
            g: {item: "mysticalagriculture:cobalt_seeds", },
            h: {item: "mysticalagriculture:enderman_seeds", },
            j: {item: "mysticalagriculture:refined_glowstone_seeds", },
            k: {item: "mysticalagriculture:enderium_seeds", },
            l: {item: "mysticalagriculture:fluorite_seeds", },
            q: {item: "mysticalagriculture:steel_seeds", },
            w: {item: "mysticalagriculture:tinkers_bronze_seeds", },
            e: {item: "mysticalagriculture:osmium_seeds", },
            r: {item: "mysticalagriculture:lapis_lazuli_seeds", },
            t: {item: "mysticalagriculture:blaze_seeds", },
            y: {item: "mysticalagriculture:emerald_seeds", },
            u: {item: "mysticalagriculture:gold_seeds", },
            i: {item: "mysticalagriculture:rose_gold_seeds", },
            o: {item: "mysticalagriculture:end_seeds", },
        },
        result: {item: "mysticalagradditions:creative_essence", },
    }).id(`kubejs:mysticalagradditions/creative_essence`)

    //Blood Magic Creative Activation Crystal
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBCDDDA",
            "EFGHIHGFJ",
            "EGKLKLKGJ",
            "EMNOPONMJ",
            "CIKPQPKIC",
            "RMNOPONMS",
            "RTKLKLKTS",
            "RFTHIHTFS",
            "AUUUCVVVA",
        ],
        key: {
            A: {item: "bloodmagic:bloodlightsigil", },
            B: {item: "bloodmagic:chargingrune", },
            C: {item: "bloodmagic:sigilofholding", },
            D: {item: "bloodmagic:selfsacrificerune", },
            E: {item: "bloodmagic:accelerationrune", },
            F: {item: "bloodmagic:airsigil", },
            G: {item: "bloodmagic:demonslate", },
            H: {item: "bloodmagic:voidsigil", },
            I: {item: "bloodmagic:watersigil", },
            J: {item: "bloodmagic:altarcapacityrune", },
            K: {item: "bloodmagic:life_essence_bucket", },
            L: {item: "bloodmagic:reinforcedslate", },
            M: {item: "bloodmagic:lavasigil", },
            N: {item: "bloodmagic:blankslate", },
            O: {item: "mysticalagradditions:creative_essence", },
            P: {item: "bloodmagic:activationcrystalweak", },
            Q: {item: "enigmaticlegacy:fabulous_scroll", },
            R: {item: "bloodmagic:sacrificerune", },
            S: {item: "bloodmagic:bettercapacityrune", },
            T: {item: "bloodmagic:infusedslate", },
            U: {item: "bloodmagic:speedrune", },
            V: {item: "bloodmagic:dislocationrune", },
        },
        result: {item: "bloodmagic:activationcrystalcreative", },
    }).id(`kubejs:bloodmagic/activationcrystalcreative`)

    //Mekanism Creative Gas Tank
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABABABABA",
            "BABABABAB",
            "ABDBABEBA",
            "BABCDCBAB",
            "ABAEFGABA",
            "BABCHCBAB",
            "ABHBABGBA",
            "BABABABAB",
            "ABABABABA",
        ],
        key: {
            A: {item: "mekanism:alloy_atomic", },
            B: {item: "mekanism:ingot_osmium", },
            C: {item: "mysticalagradditions:creative_essence", },
            D: {type: "forge:nbt",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:ethene",amount:512000L}}]}}',
            },
            E: {type: "forge:nbt",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanismgenerators:fusion_fuel",amount:512000L}}]}}',
            },
            F: {item: "mekanism:creative_fluid_tank", },
            G: {type: "forge:nbt",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:nutritional_paste",amount:512000L}}]}}',
            },
            H: {type: "forge:nbt",
                item: "mekanism:ultimate_chemical_tank",
                count: 1,
                nbt: '{mekData:{GasTanks:[{Tank:0b,stored:{gasName:"mekanism:uranium_hexafluoride",amount:512000L}}]}}',
            },
        },
        result: {item: "mekanism:creative_chemical_tank", },
    }).id(`kubejs:mekanism/creative_chemical_tank`)

    //Creative Storage Drawer Vending Upgrade
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBCBBBA",
            "BDMLELMDB",
            "BLFGHGFLB",
            "BLGIJIGLB",
            "CEHJKJHEC",
            "BLGIJIGLB",
            "BLFGHGFLB",
            "BDMLELMDB",
            "ABBBCBBBA",
        ],
        key: {
            A: {item: "ae2:singularity", },
            B: {item: "tinkers_reforged:felsteel_ingot", },
            C: {item: "forbidden_arcanus:eternal_stella", },
            D: {item: "mekanism:supercharged_coil", },
            E: {item: "rftoolscontrol:programmer", },
            F: {item: "mysticalagriculture:infusion_pedestal", },
            G: {item: "extendedcrafting:crafting_core", },
            H: {item: "extendedcrafting:the_ultimate_block", },
            I: {item: "extendedcrafting:ultimate_singularity", },
            J: {item: "storagedrawers:upgrade_template", },
            K: {item: "alexsmobs:void_worm_eye", },
            L: {item: "ob_aquamirae:abyssal_amethyst", },
            M: {item: "mysticalagradditions:creative_essence", },
        },
        result: {item: "storagedrawers:creative_vending_upgrade", },
    }).id(`kubejs:storagedrawers/creative_vending_upgrade`)

    //Creative Storage Drawer Vending Upgrade
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBCBBBA",
            "BDBBEBBDB",
            "BBFGHGFBB",
            "BBGIJIGBB",
            "CEHJKJHEC",
            "BBGIJIGBB",
            "BBFGHGFBB",
            "BDBBEBBDB",
            "ABBBCBBBA",
        ],
        key: {
            A: {item: "forbidden_arcanus:eternal_stella", },
            B: {item: "forbidden_arcanus:dark_nether_star", },
            C: {item: "allthecompressed:oak_log_block_9x", },
            D: {item: "mekanism:laser", },
            E: {item: "rftoolscontrol:programmer", },
            F: {item: "mysticalagriculture:infusion_pedestal", },
            G: {item: "extendedcrafting:crafting_core", },
            H: {item: "botania:gaia_ingot", },
            I: {item: "mysticalagradditions:creative_essence", },
            J: {item: "mekanism:personal_chest", },
            K: {item: "storagedrawers:upgrade_template", },
        },
        result: {item: "storagedrawers:creative_storage_upgrade", },
    }).id(`kubejs:storagedrawers/creative_storage_upgrade`)

    //Simply Jetpacks Creative Jetpack
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABCCDCCBA',
            'BEFCACFEB',
            'CFEGHGEFC',
            'CCGIJIGCC',
            'KAHJLJHAK',
            'CCGIJIGCC',
            'CFEGHGEFC',
            'BEFCACFEB',
            'ABCCDCCBA',
        ],
        key: {
            A: {item: 'ars_nouveau:glyph_glide', },
            B: {item: 'reliquary:angelic_feather', },
            C: {item: 'minecraft:elytra', },
            D: {item: 'forbidden_arcanus:golden_dragon_scale', },
            E: {item: 'simplyjetpacks:jetpack_mek4', },
            F: {item: 'simplyjetpacks:jetpack_te4', },
            G: {item: 'simplyjetpacks:jetpack_ie3', },
            H: {item: 'simplyjetpacks:jetpack_vanilla4', },
            I: {item: 'powah:capacitor_nitro', },
            J: {item: 'mysticalagradditions:creative_essence', },
            K: {item: 'simplyjetpacks:jetpack_te5', },
            L: {item: 'enigmaticlegacy:enigmatic_elytra', },
        },
        result: {item: 'simplyjetpacks:jetpack_creative', },
    }).id(`kubejs:simplyjetpacks/jetpack_creative`)

    //Simply Jetpacks Creative Jetpack (Armored)
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "DBABHBABD",
            "BDBAHABDB",
            "ABDGGGDBA",
            "BAGCECGAB",
            "HHGEFEGHH",
            "BAGCECGAB",
            "ABDGGGDBA",
            "BDBAHABDB",
            "DBABHBABD",
        ],
        key: {
            A: {item: "alltheores:platinum_plate", },
            B: {item: "simplyjetpacks:armorplating_ie3", },
            C: {type: "forge:nbt",
                item: "extendedcrafting:singularity",
                count: 1,
                nbt: '{Id:"extendedcrafting:refined_obsidian"}',
            },
            D: {item: "forbidden_arcanus:dark_nether_star_block", },
            E: {item: "mysticalagradditions:creative_essence", },
            F: {item: "simplyjetpacks:jetpack_creative", },
            G: {item: "minecraft:netherite_block", },
            H: {item: "minecraft:nether_star", },
        },
        result: {item: "simplyjetpacks:jetpack_creative_armored", },
    }).id(`kubejs:simplyjetpacks/jetpack_creative_armored`)

    //Ars Nouveau Creative Source Jar
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABCCDCCBA',
            'BMFCACFMB',
            'CFEGHGEFC',
            'CCGIJIGCC',
            'KAHJLJHAK',
            'CCGIJIGCC',
            'CFEGHGEFC',
            'BMFCACFMB',
            'ABCCDCCBA',
        ],
        key: {
            A: {item: 'ars_nouveau:summon_focus', },
            B: {item: 'ars_nouveau:source_gem_block', },
            C: {item: 'ars_nouveau:ring_of_lesser_discount', },
            D: {item: 'ars_nouveau:jar_of_light', },
            E: {item: 'botania:gaia_spreader', },
            F: {item: 'botania:lens_flare', },
            G: {item: 'mna:resonating_lump', },
            H: {item: 'forbidden_arcanus:smelter_prism', },
            I: {item: 'mythicbotany:mana_infuser', },
            J: {item: 'mysticalagradditions:creative_essence', },
            K: {item: 'botanicalmachinery:mana_battery', },
            L: {item: 'ars_nouveau:source_jar',},
            M: {item: 'botania:elven_spreader',},
        },
        result: {item: 'ars_nouveau:creative_source_jar', },
    }).id(`kubejs:ars_nouveau/creative_source_jar`)

    //Ars Nouveau Creative Spell Book
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABCCDCCBA',
            'BMFCACFMB',
            'CFEGHGEFC',
            'CCGIJIGCC',
            'KAHJLJHAK',
            'CCGIJIGCC',
            'CFEGHGEFC',
            'BMFCACFMB',
            'ABCCDCCBA',
        ],
        key: {
            A: {item: 'ars_nouveau:spell_prism', },
            B: {item: 'reliquary:alkahestry_tome', },
            C: {item: 'cyclic:ender_book', },
            D: {item: 'extendedcrafting:ultimate_singularity', },
            E: {item: 'mythicbotany:fire_ring', },
            F: {item: 'evilcraft:blood_infusion_core', },
            G: {item: 'bloodmagic:masterbloodorb', },
            H: {item: 'enigmaticlegacy:lore_inscriber', },
            I: {item: 'cyclic:crafter', },
            J: {item: 'mysticalagradditions:creative_essence', },
            K: {item: 'ftbic:ev_transformer', },
            L: {item: 'ars_nouveau:archmage_spell_book',},
            M: {item: 'mythicbotany:andwari_ring',},
        },
        result: {item: 'ars_nouveau:creative_spell_book', },
    }).id(`kubejs:ars_nouveau/creative_spell_book`)

    //Mekanism Creative Energy Cube
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABIBABIBA',
            'BICACACIB',
            'ICDAEADCI',
            'BAEFGFEAB',
            'ACDGHGDCA',
            'BAEFGFEAB',
            'ICDAEADCI',
            'BICACACIB',
            'ABIBABIBA',
        ],
        key: {
            A: {item: 'mekanism:alloy_atomic', },
            B: {item: 'forbidden_arcanus:dark_nether_star', },
            C: {item: 'mekanism:pellet_antimatter', },
            D: {item: 'mekanism:pellet_polonium', },
            E: {item: 'mekanism:ultimate_induction_provider', },
            F: {item: 'extendedcrafting:ultimate_singularity', },
            G: {item: 'mekanism:ultimate_induction_cell', },
            H: {type: "forge:nbt",
                item: "mekanism:ultimate_energy_cube",
                count: 1,
                nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"256000000"}]}}',
            },
            I: {type: "forge:nbt",
                item: "powah:battery_nitro",
                count: 1,
                nbt:   '{powah_tile_data:{energy_stored_main_energy:2000000000L}}',
            },
        },
        result: {
            type: "forge:nbt",
            item: "mekanism:creative_energy_cube",
            count: 1,
            nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
        },
    }).id(`kubejs:mekanis/creative_energy_cube`)

    //Mekanism Creative Bin
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            'ABABABABA',
            'BACACACAB',
            'ACDAEADCA',
            'BAEFGFEAB',
            'ACDGHGDCA',
            'BAEFGFEAB',
            'ACDAEADCA',
            'BACACACAB',
            'ABABABABA',
        ],
        key: {
            A: {item: 'storagedrawers:upgrade_template', },
            B: {item: 'forbidden_arcanus:dark_nether_star', },
            C: {item: 'mekanism:pellet_antimatter', },
            D: {item: 'storagedrawers:controller', },
            E: {item: 'sophisticatedstorage:netherite_chest', },
            F: {item: 'mysticalagradditions:creative_essence', },
            G: {item: 'mekanism:ultimate_bin', },
            H: {item: 'storagedrawers:creative_storage_upgrade', },
        },
        result: {item: 'mekanism:creative_bin', },
    }).id(`kubejs:mekanism/creative_bin`)

    //RS Creative Crafter
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBCBBBA",
            "BDLLELLDB",
            "BLFGHGFLB",
            "BLGIJIGLB",
            "CEHJKJHEC",
            "BLGIJIGLB",
            "BLFGHGFLB",
            "BDLLELLDB",
            "ABBBCBBBA",
        ],
        key: {
            A: {item: "forbidden_arcanus:eternal_stella", },
            B: {item: "ae2:matter_ball", },
            C: {item: "rftoolscontrol:cpu_core_2000", },
            D: {item: "rebornstorage:multiblock_cpu", },
            E: {item: "rftoolscontrol:programmer", },
            F: {item: "extradisks:infinite_storage_part", },
            G: {item: "megacells:mega_crafting_accelerator", },
            H: {item: "megacells:cell_component_256m", },
            I: {item: "mysticalagradditions:creative_essence", },
            J: {item: "extendedcrafting:ultimate_auto_table", },
            K: {item: "extrastorage:netherite_crafter", },
            L: {item: "extrastorage:neural_processor", },
        },
        result: {item: "creativecrafter:creative_crafter", },
    }).id(`kubejs:creativecrafter/creative_crafter`)

    //RS Creative Transmitter
    event.recipes.extendedcrafting.shaped_table({
        pattern: [
            "ABBBCBBBA",
            "BDLLELLDB",
            "BLFGHGFLB",
            "BLGIJIGLB",
            "CEHJKJHEC",
            "BLGIJIGLB",
            "BLFGHGFLB",
            "BDLLELLDB",
            "ABBBCBBBA",
        ],
        key: {
            A: {item: "mna:ender_disc", },
            B: {item: "ae2:matter_ball", },
            C: {item: "rftoolscontrol:cpu_core_2000", },
            D: {item: "rftoolscontrol:processor", },
            E: {item: "mna:refraction_lens_ender", },
            F: {item: "allthecompressed:ender_pearl_block_9x", },
            G: {item: "mna:eldrin_conduit_ender", },
            H: {item: "mna:transitory_tunnel", },
            I: {item: "mysticalagradditions:creative_essence", },
            J: {item: "powah:player_transmitter_nitro", },
            K: {item: "refinedstorage:wireless_transmitter", },
            L: {item: "extrastorage:neural_processor", },
        },
        result: {item: "creativewirelesstransmitter:creative_wireless_transmitter", },
    }).id(`kubejs:creativewirelesstransmitter/creative_wireless_transmitter`)

})
