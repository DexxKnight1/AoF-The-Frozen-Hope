onEvent('recipes', (event) => {

    const idRemovals = [
        //Miscelleneous region
        'extendedcrafting:handheld_table',
        'buildersaddition:iron_rod',
        'undergarden:undergarden_scaffolding',
        'greekfantasy:totem_from_golden_fleece',
        'ae2:misc/vanilla_comparator',
        'botania:mushroom_stew',
        'forbidden_arcanus:enchanted_golden_apple',
        'biomesoplenty:rabbit_stew_from_toadstool',
        'blue_skies:furnace_compat',
        'untitledduckmod:crafting_shaped/pumpkin_pie',
        'extrautilitiesrebirth:comgravel_1rev_rcp',
        'tconstruct:common/materials/netherite_ingot_from_nuggets',
        //Twilight Forest
        'twilightforest:smeltery/melting/metal/fiery/nugget',
        'twilightforest:smeltery/melting/metal/knightmetal/nugget',
        //All the Ores region
        'alltheores:osmium_gear',
        'alltheores:platinum_gear',
        'alltheores:zinc_gear',
        'alltheores:brass_gear',
        //Pam's HarvestCraft region
        'pamhc2crops:paper_x2_paper_plants',
        'pamhc2crops:bread_grain',
        //Oh the Biomes You'll Go region
        'byg:torch_from_byg_coals',
        'byg:soul_torch_from_byg_coals',
        //Supplementaries region
        'supplementaries:flint_block_uncrafting',
        'supplementaries:flint_block',
        //Cyclic region
        'cyclic:crafting/repeater',
        'cyclic:crafting/chest',
        'cyclic:crafting/clay',
        'cyclic:crafting/glowstone',
        'cyclic:crafting/quartz',
        'cyclic:crafting/nether_wart_reverse',
        'cyclic:crafting/dispenser_alt',
        //Quark region
        'quark:building/crafting/compressed/apple_crate',
        'quark:building/crafting/compressed/apple_crate_uncompress',
        'quark:building/crafting/compressed/potato_crate',
        'quark:building/crafting/compressed/potato_crate_uncompress',
        'quark:building/crafting/compressed/carrot_crate',
        'quark:building/crafting/compressed/carrot_crate_uncompress',
        'quark:building/crafting/compressed/beetroot_crate',
        'quark:building/crafting/compressed/beetroot_crate_uncompress',
        'quark:building/crafting/compressed/gunpowder_sack',
        'quark:building/crafting/compressed/gunpowder_sack_uncompress',
        'quark:building/crafting/compressed/sugar_cane_block',
        'quark:building/crafting/compressed/sugar_cane_block_uncompress',       
        'quark:building/crafting/furnaces/cobblestone_furnace',
        'quark:building/crafting/furnaces/deepslate_smoker',
        'quark:building/crafting/furnaces/blackstone_smoker',
        'quark:building/crafting/furnaces/deepslate_blast_furnace',
        'quark:building/crafting/furnaces/blackstone_blast_furnace',
        'quark:building/crafting/furnaces/basalt_blast_furnace',
        'quark:tweaks/crafting/utility/bent/bread',
        'quark:tweaks/crafting/utility/bent/paper',
        'quark:tweaks/crafting/utility/wool/white_wool',
        'quark:tweaks/crafting/utility/wool/orange_wool',
        'quark:tweaks/crafting/utility/wool/magenta_wool',
        'quark:tweaks/crafting/utility/wool/light_blue_wool',
        'quark:tweaks/crafting/utility/wool/yellow_wool',
        'quark:tweaks/crafting/utility/wool/lime_wool',
        'quark:tweaks/crafting/utility/wool/pink_wool',
        'quark:tweaks/crafting/utility/wool/gray_wool',
        'quark:tweaks/crafting/utility/wool/light_gray_wool',
        'quark:tweaks/crafting/utility/wool/cyan_wool',
        'quark:tweaks/crafting/utility/wool/purple_wool',
        'quark:tweaks/crafting/utility/wool/blue_wool',
        'quark:tweaks/crafting/utility/wool/brown_wool',
        'quark:tweaks/crafting/utility/wool/green_wool',
        'quark:tweaks/crafting/utility/wool/red_wool',
        'quark:tweaks/crafting/utility/wool/black_wool',
        'quark:tweaks/crafting/elytra_duplication',
        //Enigmatic legacy region
        'enigmaticlegacy:wool/orange_wool',
        'enigmaticlegacy:wool/magenta_wool',
        'enigmaticlegacy:wool/light_blue_wool',
        'enigmaticlegacy:wool/yellow_wool',
        'enigmaticlegacy:wool/lime_wool',
        'enigmaticlegacy:wool/black_wool',
        'enigmaticlegacy:wool/pink_wool',
        'enigmaticlegacy:wool/gray_wool',
        'enigmaticlegacy:wool/light_gray_wool',
        'enigmaticlegacy:wool/cyan_wool',
        'enigmaticlegacy:wool/purple_wool',
        'enigmaticlegacy:wool/blue_wool',
        'enigmaticlegacy:wool/brown_wool',
        'enigmaticlegacy:wool/green_wool',
        'enigmaticlegacy:wool/red_wool',
        //Mana & artifice region
        'mna:chainmail_helmet',
        'mna:chainmail_chestplate',
        'mna:chainmail_leggings',
        'mna:chainmail_boots',
        //Mystical Agriculture
        'mysticalagriculture:mithril_seeds',
        'mysticalagriculture:mithril_essence',
        'mysticalagriculture:titanium_seeds',
        'mysticalagriculture:titanium_essence',
        'mysticalagriculture:chrome_seeds',
        'mysticalagriculture:chrome_essence',
        'mysticalagriculture:yellorium_seeds',
        'mysticalagriculture:yellorium_essence',
    ]

    idRemovals.forEach((id) => {
        event.remove({ id: id })
    })

})