//<!--

//Sets the price based on success rate
function fnPrice(a,b) // a=SubPrice, b=SuccessRate
{
    varSubPrice = parseInt(a)
    varSuccess = parseInt(b)

    varItemPrice = (varSubPrice-((varSubPrice*varSuccess)/100))+varSubPrice;
}

/*  INITIALIZATION SCRIPTS */

function fnInitialize()
{
    fnArmorInitialize()
    fnShieldInitialize()
    fnBowInitialize()
    fnAxeInitialize()
    fnClubInitialize()
    fnGreataxeInitialize()
    fnGreatclubInitialize()
    fnGreatswordInitialize()
    fnKnifeInitialize()
    fnPolearmInitialize()
    fnSwordInitialize()
    fnSiegeInitialize() 
    fnStaffInitialize()
    fnSithraBladeInitialize()
    fnAlchemySiegeInitialize()
    fnPotionInitialize()
    fnHerbalismInitialize()
    fnSithraFibulaInitialize()
    fnSithraInitialize()
    fnJewelInitialize()
    fnRawReload()
}

function fnReloadGrandTotal()
{
    varGrandTotal = (varArmorTotal + varShieldTotal + varBowTotal + varAxeTotal + varClubTotal + varGreataxeTotal + varGreatclubTotal + varGreatswordTotal + varKnifeTotal + varPolearmTotal + varSwordTotal + varSiegeTotal + varStaffTotal + varSithraBladeTotal + varAlchemySiegeTotal + varPotionTotal + varHerbalismTotal + varSithraFibulaTotal + varSithraTotal + varJewelTotal);
    document.getElementById('ArmorGrandTotal').value = varGrandTotal;
    document.getElementById('ShieldGrandTotal').value = varGrandTotal;
    document.getElementById('BowGrandTotal').value = varGrandTotal;
    document.getElementById('AxeGrandTotal').value = varGrandTotal;
    document.getElementById('ClubGrandTotal').value = varGrandTotal;
    document.getElementById('GreataxeGrandTotal').value = varGrandTotal;
    document.getElementById('GreatclubGrandTotal').value = varGrandTotal;
    document.getElementById('GreatswordGrandTotal').value = varGrandTotal;
    document.getElementById('KnifeGrandTotal').value = varGrandTotal;
    document.getElementById('PolearmGrandTotal').value = varGrandTotal;
    document.getElementById('SwordGrandTotal').value = varGrandTotal;
    document.getElementById('SiegeGrandTotal').value = varGrandTotal;
    document.getElementById('StaffGrandTotal').value = varGrandTotal;
    document.getElementById('SithraBladeGrandTotal').value = varGrandTotal;
    document.getElementById('AlchemySiegeGrandTotal').value = varGrandTotal;
    document.getElementById('PotionGrandTotal').value = varGrandTotal;
    document.getElementById('HerbalismGrandTotal').value = varGrandTotal;
    document.getElementById('SithraFibulaGrandTotal').value = varGrandTotal;
    document.getElementById('SithraGrandTotal').value = varGrandTotal;
    document.getElementById('JewelGrandTotal').value = varGrandTotal;
}

/* RELOAD SCRIPTS */

//Used to indicate which form was changed
function fnReload(y)  // y= class
{
    switch(y)  //Select the class
    {
        // Run fnRawReload
        case 'Raw':
            fnRawReload();
            break;

        // Run fnArmorReload
        case 'Armor':
            fnArmorReload();
            break;

        // Run fnShieldReload
        case 'Shield':
            fnShieldReload();
            break;
		
		// Run fnBowReload
        case 'Bow':
            fnBowReload();
            break;

		// Run fnAxeReload
        case 'Axe':
            fnAxeReload();
            break;

		// Run fnClubReload
        case 'Club':
            fnClubReload();
            break;

		// Run fnGreataxeReload
        case 'Greataxe':
            fnGreataxeReload();
            break;

		// Run fnGreatclubReload
        case 'Greatclub':
            fnGreatclubReload();
            break;

		// Run fnGreatswordReload
        case 'Greatsword':
            fnGreatswordReload();
            break;

		// Run fnKnifeReload
        case 'Knife':
            fnKnifeReload();
            break;

		// Run fnPolearmReload
        case 'Polearm':
            fnPolearmReload();
            break;

		// Run fnSwordReload
        case 'Sword':
            fnSwordReload();
            break;

		// Run fnSiegeReload
        case 'Siege':
            fnSiegeReload();
            break;

		// Run fnSithraReload
        case 'Sithra':
            fnSithraReload();
            break;

        // Run fnStaffReload
        case 'Staff':
            fnStaffReload();
            break;
            
        // Run fnAlchemySiegeReload
        case 'AlchemySiege':
            fnAlchemySiegeReload();
            break;
            
        // Run fnSithraBladeReload
        case 'SithraBlade':
            fnSithraBladeReload();
            break;
            
        // Run fnPotionReload
        case 'Potion':
            fnPotionReload();
            break;
            
        // Run fnHerbalismReload
        case 'Herbalism':
            fnHerbalismReload();
            break;
            
        // Run fnSithraFibulaReload
        case 'SithraFibula':
            fnSithraFibulaReload();
            break;
            
        // Run fnSithraFibulaReload
        case 'SithraFibula':
            fnSithraFibulaReload();
            break;
            
        // Run fnJewelReload
        case 'Jewel':
            fnJewelReload();
            break;
            
        // Not sure if I really need this
        default:
            ;
            break;
    }
}

/* RAW MATERIAL INITIALIZATIONS */

function fnRawReload()
{
    fnRawInitialize()

    fnArmor()
    fnArmorTotal()
    fnReloadArmorPrices()

    fnShield()
    fnShieldTotal()
    fnReloadShieldPrices()
    
    fnBow()
    fnBowTotal()
    fnReloadBowPrices()
    
    fnAxe()
    fnAxeTotal()
    fnReloadAxePrices()
    
    fnClub()
    fnClubTotal()
    fnReloadClubPrices()
    
    fnGreataxe()
    fnGreataxeTotal()
    fnReloadGreataxePrices()
    
    fnGreatclub()
    fnGreatclubTotal()
    fnReloadGreatclubPrices()
    
    fnGreatsword()
    fnGreatswordTotal()
    fnReloadGreatswordPrices()
    
    fnKnife()
    fnKnifeTotal()
    fnReloadKnifePrices()
    
    fnPolearm()
    fnPolearmTotal()
    fnReloadPolearmPrices()
    
    fnSword()
    fnSwordTotal()
    fnReloadSwordPrices()
    
    fnSiege()
    fnSiegeTotal()
    fnReloadSiegePrices()
    
    fnStaff()
    fnStaffTotal()
    fnReloadStaffPrices()
    
    fnAlchemySiege()
    fnAlchemySiegeTotal()
    fnReloadAlchemySiegePrices()
    
    fnSithraBlade()
    fnSithraBladeTotal()
    fnReloadSithraBladePrices()
    
    fnPotion()
    fnPotionTotal()
    fnReloadPotionPrices()
    
    fnHerbalism()
    fnHerbalismTotal()
    fnReloadHerbalismPrices()
    
    fnSithraFibula()
    fnSithraFibulaTotal()
    fnReloadSithraFibulaPrices()
    
    fnSithra()
    fnSithraTotal()
    fnReloadSithraPrices()
    
    fnJewel()
    fnJewelTotal()
    fnReloadJewelPrices()
    
    fnReloadGrandTotal()
}

function fnRawInitialize()
{
    // Raw Value variables intialized into memory
    varIronIngotValue = document.getElementById("IronIngotValue").value;
    varWoodValue = document.getElementById("WoodValue").value;
    varLeatherValue = document.getElementById("LeatherValue").value;
    varStoneValue = document.getElementById("StoneValue").value;
    varSelentineIngotValue = document.getElementById("SelentineIngotValue").value;
    varVeilronIngotValue = document.getElementById("VeilronIngotValue").value;
    varNeithalIngotValue = document.getElementById("NeithalIngotValue").value;
    varLeensparIngotValue = document.getElementById("LeensparIngotValue").value;
    varTheyrilIngotValue = document.getElementById("TheyrilIngotValue").value;
    varBottleValue = document.getElementById("BottleValue").value;
    varArchangelicaValue = document.getElementById("ArchangelicaValue").value;
    varBaneberryValue = document.getElementById("BaneberryValue").value;
    varHellboreValue = document.getElementById("HellboreValue").value;
    varSnakeweedValue = document.getElementById("SnakeweedValue").value;
    varSteedgrassValue = document.getElementById("SteedgrassValue").value;
    varMandrakeValue = document.getElementById("MandrakeValue").value;
    varSulfurValue = document.getElementById("SulfurValue").value;
    varResinValue = document.getElementById("ResinValue").value;
    varNacreValue = document.getElementById("NacreValue").value;
    varBoneValue = document.getElementById("BoneValue").value;
    varAshValue = document.getElementById("AshValue").value;
    varAmethystValue = document.getElementById("AmethystValue").value;
    varAventurineValue = document.getElementById("AventurineValue").value;
    varCrystalValue = document.getElementById("CrystalValue").value;
    varDiamondValue = document.getElementById("DiamondValue").value;
    varEmeraldValue = document.getElementById("EmeraldValue").value;
    varGarnetValue = document.getElementById("GarnetValue").value;
    varPearlValue = document.getElementById("PearlValue").value;
    varRubyValue = document.getElementById("RubyValue").value;
    varSapphireValue = document.getElementById("SapphireValue").value;
    varTurquoiseValue = document.getElementById("TurquoiseValue").value;
    varDragonScaleValue = document.getElementById("DragonScaleValue").value;
    varSeedwoodValue = document.getElementById("SeedwoodValue").value;
    varObsidianValue = document.getElementById("ObsidianValue").value;
    varIldsteinValue = document.getElementById("IldsteinValue").value;
    varRiadanSteelValue = document.getElementById("RiadanSteelValue").value;
    varDarkshardValue = document.getElementById("DarkshardValue").value;
    varMoonstoneValue = document.getElementById("MoonstoneValue").value;
    varOrbMightValue = document.getElementById("OrbMightValue").value;
    varOrbDominionValue = document.getElementById("OrbDominionValue").value;
    varStrawberryValue = document.getElementById("StrawberryValue").value;
    varBlueberryValue = document.getElementById("BlueberryValue").value;
    varBassValue = document.getElementById("BassValue").value;
    varCodValue = document.getElementById("CodValue").value;
    varTroutValue = document.getElementById("TroutValue").value;
    varSalmonValue = document.getElementById("SalmonValue").value;
    varSwordfishValue = document.getElementById("SwordfishValue").value;
    varHerringValue = document.getElementById("HerringValue").value;
    varLobsterValue = document.getElementById("LobsterValue").value;
    varEggValue = document.getElementById("EggValue").value;
    varOnionValue = document.getElementById("OnionValue").value;
    varPotatoeValue = document.getElementById("PotatoeValue").value;
    varCarrotValue = document.getElementById("CarrotValue").value;
    varMeatValue = document.getElementById("MeatValue").value;
    varCheeseValue = document.getElementById("CheeseValue").value;
    varWheatValue = document.getElementById("WheatValue").value;
    varAppleValue = document.getElementById("AppleValue").value;
    varNumenValue = document.getElementById("NumenValue").value;
    varNithValue = document.getElementById("NithValue").value;
    varIchorValue = document.getElementById("IchorValue").value;
    varBileValue = document.getElementById("BileValue").value;
    varSarlidBileValue = document.getElementById("SarlidBileValue").value;
    varGolemBileValue = document.getElementById("GolemBileValue").value;
    varEvilEyeBileValue = document.getElementById("EvilEyeBileValue").value;
    varGauntBileValue = document.getElementById("GauntBileValue").value;
    varBloodValue = document.getElementById("BloodValue").value;
    varTrollBloodValue = document.getElementById("TrollBloodValue").value;
    varOrkBloodValue = document.getElementById("OrkBloodValue").value;
    varKnightBloodValue = document.getElementById("KnightBloodValue").value;
    varRaktaBloodValue = document.getElementById("RaktaBloodValue").value;
    varKoboldBoneValue = document.getElementById("KoboldBoneValue").value;
    varGiantBoneValue = document.getElementById("GiantBoneValue").value;
    varSeveriiBoneValue = document.getElementById("SeveriiBoneValue").value;
    varDragonBoneValue = document.getElementById("DragonBoneValue").value;
    varDeinosBoneValue = document.getElementById("DeinosBoneValue").value;
    varCinderValue = document.getElementById("CinderValue").value;
    varReptileCinderValue = document.getElementById("ReptileCinderValue").value;
    varElementalCinderValue = document.getElementById("ElementalCinderValue").value;
    varFireGiantCinderValue = document.getElementById("FireGiantCinderValue").value;
    varEldritchCinderValue = document.getElementById("EldritchCinderValue").value;
    varClawValue = document.getElementById("ClawValue").value;
    varHivekinClawValue = document.getElementById("HivekinClawValue").value;
    varMatayinClawValue = document.getElementById("MatayinClawValue").value;
    varHookedClawValue = document.getElementById("HookedClawValue").value;
    varFiendClawValue = document.getElementById("FiendClawValue").value;
    varCorpsefleshValue = document.getElementById("CorpsefleshValue").value;
    varZombieCorpsefleshValue = document.getElementById("ZombieCorpsefleshValue").value;
    varRevenantCorpsefleshValue = document.getElementById("RevenantCorpsefleshValue").value;
    varOathboundCorpsefleshValue = document.getElementById("OathboundCorpsefleshValue").value;
    varOncylusianCorpsefleshValue = document.getElementById("OncylusianCorpsefleshValue").value;
    varDarktaintValue = document.getElementById("DarktaintValue").value;
    varArachnidDarktaintValue = document.getElementById("ArachnidDarktaintValue").value;
    varBelowDarktaintValue = document.getElementById("BelowDarktaintValue").value;
    varSahulsDarktaintValue = document.getElementById("SahulsDarktaintValue").value;
    varGhostlyDarktaintValue = document.getElementById("GhostlyDarktaintValue").value;
    varOrkDarktaintValue = document.getElementById("OrkDarktaintValue").value;
    varTaintKhamsetValue = document.getElementById("TaintKhamsetValue").value;
    varEyeValue = document.getElementById("EyeValue").value;
    varCielFeyEyeValue = document.getElementById("CielFeyEyeValue").value;
    varHobgoblinEyeValue = document.getElementById("HobgoblinEyeValue").value;
    varSadayelEyeValue = document.getElementById("SadayelEyeValue").value;
    varGiantEyeValue = document.getElementById("GiantEyeValue").value;
    varEodrinEyeValue = document.getElementById("EodrinEyeValue").value;
    varGreenleafValue = document.getElementById("GreenleafValue").value;
    varSnakeGreenleafValue = document.getElementById("SnakeGreenleafValue").value;
    varOaklordGreenleafValue = document.getElementById("OaklordGreenleafValue").value;
    varSerpentineGreenleafValue = document.getElementById("SerpentineGreenleafValue").value;
    varYggdrasilLeafValue = document.getElementById("YggdrasilLeafValue").value;
    varHeartValue = document.getElementById("HeartValue").value;
    varHagHeartValue = document.getElementById("HagHeartValue").value;
    varCentaurHeartValue = document.getElementById("CentaurHeartValue").value;
    varDwarfHeartValue = document.getElementById("DwarfHeartValue").value;
    varMenhirHeartValue = document.getElementById("MenhirHeartValue").value;
    varNorthmanHeartValue = document.getElementById("NorthmanHeartValue").value;
    varDragonHeartValue = document.getElementById("DragonHeartValue").value;
    varHoarfrostValue = document.getElementById("HoarfrostValue").value;
    varGhoulHoarfrostValue = document.getElementById("GhoulHoarfrostValue").value;
    varElementalHoarfrostValue = document.getElementById("ElementalHoarfrostValue").value;
    varGolemHoarfrostValue = document.getElementById("GolemHoarfrostValue").value;
    varNiflFrostValue = document.getElementById("NiflFrostValue").value;
    varHornValue = document.getElementById("HornValue").value;
    varBrokenHornValue = document.getElementById("BrokenHornValue").value;
    varVileSpikeValue = document.getElementById("VileSpikeValue").value;
    varMinotaurHornValue = document.getElementById("MinotaurHornValue").value;
    varGargantuaHornValue = document.getElementById("GargantuaHornValue").value;
    varLifeforceValue = document.getElementById("LifeforceValue").value;
    varFeralLifeforceValue = document.getElementById("FeralLifeforceValue").value;
    varSylvanLifeforceValue = document.getElementById("SylvanLifeforceValue").value;
    varGuardianLifeforceValue = document.getElementById("GuardianLifeforceValue").value;
    varEmetLifeforceValue = document.getElementById("EmetLifeforceValue").value;
    varQuartzValue = document.getElementById("QuartzValue").value;
    varBrownieQuartzValue = document.getElementById("BrownieQuartzValue").value;
    varElementalQuartzValue = document.getElementById("ElementalQuartzValue").value;
    varGolemQuartzValue = document.getElementById("GolemQuartzValue").value;
    varRadiantQuartzValue = document.getElementById("RadiantQuartzValue").value;
    varQuintessenceValue = document.getElementById("QuintessenceValue").value;
    varVitalQuintessenceValue = document.getElementById("VitalQuintessenceValue").value;
    varAncientQuintessenceValue = document.getElementById("AncientQuintessenceValue").value;
    varDarkQuintessenceValue = document.getElementById("DarkQuintessenceValue").value;
    varPrimevalQuintessenceValue = document.getElementById("PrimevalQuintessenceValue").value;
    varShadowcrestValue = document.getElementById("ShadowcrestValue").value;
    varMelecharShadowcrestValue = document.getElementById("MelecharShadowcrestValue").value;
    varWindShadowcrestValue = document.getElementById("WindShadowcrestValue").value;
    varGoblinoidShadowcrestValue = document.getElementById("GoblinoidShadowcrestValue").value;
    varDeathlessShadowcrestValue = document.getElementById("DeathlessShadowcrestValue").value;
    varSparkstoneValue = document.getElementById("SparkstoneValue").value;
    varUndeathSparkstoneValue = document.getElementById("UndeathSparkstoneValue").value;
    varGolemSparkstoneValue = document.getElementById("GolemSparkstoneValue").value;
    varMetalSparkstoneValue = document.getElementById("MetalSparkstoneValue").value;
    varSearingSparkstoneValue = document.getElementById("SearingSparkstoneValue").value;
    varStormruneValue = document.getElementById("StormruneValue").value;
    varDimStormruneValue = document.getElementById("DimStormruneValue").value;
    varElementalStormruneValue = document.getElementById("ElementalStormruneValue").value;
    varResonantStormruneValue = document.getElementById("ResonantStormruneValue").value;
    varVortexRuneValue = document.getElementById("VortexRuneValue").value;
    varToothValue = document.getElementById("ToothValue").value;
    varGoblinToothValue = document.getElementById("GoblinToothValue").value;
    varBeastmanToothValue = document.getElementById("BeastmanToothValue").value;
    varCultistToothValue = document.getElementById("CultistToothValue").value;
    varGiantToothValue = document.getElementById("GiantToothValue").value;
    varDeathFangValue = document.getElementById("DeathFangValue").value;
    varVenomSacValue = document.getElementById("VenomSacValue").value;
    varArachnidVenomSacValue = document.getElementById("ArachnidVenomSacValue").value;
    varIklitVenomSacValue = document.getElementById("IklitVenomSacValue").value;
    varFoulVenomSacValue = document.getElementById("FoulVenomSacValue").value;
    varQueenVenomSacValue = document.getElementById("QueenVenomSacValue").value;
}

/* ARMOR */

//Used to reload items from Armor
function fnArmorReload()  // x= id, z= value
{
    fnArmorInitialize()

    fnArmor()

    fnArmorTotal()
    fnReloadArmorPrices()

    fnReloadGrandTotal()
}

//Loads up the various armor calculations
function fnArmor()
{
    fnChain()
    fnBanded()
    fnScale()
    fnPlate()
    fnFullPlate()
    fnInfernal()
    fnDragon()
    fnBloodcraft()
}

//Sets the price based on the material versus quantity
function fnArmorSubPrice(a,b,c,d,e,f,g,h,i,j) // a=Gold, b=Iron Quantity, c=Leather Quantity, d=Selentine Quantity, e=Leenspar Quantity, f=Theyril Quantity, g=Fiend Claw Quantity, h=RaktaBlood Quantity, i=Dragon Scale Quantity, j=Success Rate
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varLeather = parseInt(c)
    varSelentine = parseInt(d)
    varLeenspar = parseInt(e)
    varTheyril = parseInt(f)
    varFiendClaw = parseInt(g)
    varRaktaBlood = parseInt(h)
    varDragonScale = parseInt(i)
    varSuccess = parseInt(j)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varFiendClaw * varFiendClawValue) + (varRaktaBlood * varRaktaBloodValue) + (varDragonScale * varDragonScaleValue));
    fnPrice(varSubPrice,varSuccess)
}

//Sets the price based on the material versus quantity
function fnBCSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varLeather = parseInt(c)
    varSelentine = parseInt(d)
    varLeenspar = parseInt(e)
    varTheyril = parseInt(f)
    varFiendClaw = parseInt(g)
    varRaktaBlood = parseInt(h)
    varDragonScale = parseInt(i)
    varSuccess = parseInt(j)
    varHeart = parseInt(k)
    varHagHeart = parseInt(l)
    varDwarfHeart = parseInt(m)
    varBeastmanTooth = parseInt(n)
    varGhostlyDarktaint = parseInt(o)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varFiendClaw * varFiendClawValue) + (varRaktaBlood * varRaktaBloodValue) + (varDragonScale * varDragonScaleValue) + (varHeart * varHeartValue) + (varHagHeart * varHagHeartValue) + (varDwarfHeart * varDwarfHeartValue) + (varBeastmanTooth * varBeastmanToothValue) + (varGhostlyDarktaint * varGhostlyDarktaintValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of armor
function fnArmorTotal()
{
    varChainTotal = (varChainSleevesQuantity * varChainSleevesPrice) + (varChainLeggingsQuantity * varChainLeggingsPrice) + (varChainHauberkQuantity * varChainHauberkPrice) + (varChainSetQuantity * varChainSetPrice);
    varChainGoldTotal = (varChainSleevesQuantity * varChainSleevesGold) + (varChainLeggingsQuantity * varChainLeggingsGold) + (varChainHauberkQuantity * varChainHauberkGold) + (varChainSetQuantity * varChainSetGold);
    varChainIronTotal = (varChainSleevesQuantity * varChainSleevesIron) + (varChainLeggingsQuantity * varChainLeggingsIron) + (varChainHauberkQuantity * varChainHauberkIron) + (varChainSetQuantity * varChainSetIron);
    varChainLeatherTotal = (varChainSleevesQuantity * varChainSleevesLeather) + (varChainLeggingsQuantity * varChainLeggingsLeather) + (varChainHauberkQuantity * varChainHauberkLeather) + (varChainSetQuantity * varChainSetLeather);

    varBandedTotal = (varBandedElbowsQuantity * varBandedElbowsPrice) + (varBandedGreavesQuantity * varBandedGreavesPrice) + (varBandedShouldersQuantity * varBandedShouldersPrice) + (varBandedGirdleQuantity * varBandedGirdlePrice) + (varBandedVambracesQuantity * varBandedVambracesPrice) + (varBandedLeggingsQuantity * varBandedLeggingsPrice) + (varBandedHelmetQuantity * varBandedHelmetPrice) + (varBandedCuirassQuantity * varBandedCuirassPrice) + (varBandedSetQuantity * varBandedSetPrice);
    varBandedGoldTotal = (varBandedElbowsQuantity * varBandedElbowsGold) + (varBandedGreavesQuantity * varBandedGreavesGold) + (varBandedShouldersQuantity * varBandedShouldersGold) + (varBandedGirdleQuantity * varBandedGirdleGold) + (varBandedVambracesQuantity * varBandedVambracesGold) + (varBandedLeggingsQuantity * varBandedLeggingsGold) + (varBandedHelmetQuantity * varBandedHelmetGold) + (varBandedCuirassQuantity * varBandedCuirassGold) + (varBandedSetQuantity * varBandedSetGold);
    varBandedIronTotal = (varBandedElbowsQuantity * varBandedElbowsIron) + (varBandedGreavesQuantity * varBandedGreavesIron) + (varBandedShouldersQuantity * varBandedShouldersIron) + (varBandedGirdleQuantity * varBandedGirdleIron) + (varBandedVambracesQuantity * varBandedVambracesIron) + (varBandedLeggingsQuantity * varBandedLeggingsIron) + (varBandedHelmetQuantity * varBandedHelmetIron) + (varBandedCuirassQuantity * varBandedCuirassIron) + (varBandedSetQuantity * varBandedSetIron);
    varBandedLeatherTotal = (varBandedElbowsQuantity * varBandedElbowsLeather) + (varBandedGreavesQuantity * varBandedGreavesLeather) + (varBandedShouldersQuantity * varBandedShouldersLeather) + (varBandedGirdleQuantity * varBandedGirdleLeather) + (varBandedVambracesQuantity * varBandedVambracesLeather) + (varBandedLeggingsQuantity * varBandedLeggingsLeather) + (varBandedHelmetQuantity * varBandedHelmetLeather) + (varBandedCuirassQuantity * varBandedCuirassLeather) + (varBandedSetQuantity * varBandedSetLeather);
    
    varScaleTotal = (varScaleBootsQuantity * varScaleBootsPrice) + (varScaleGauntletsQuantity * varScaleGauntletsPrice) + (varScaleElbowsQuantity * varScaleElbowsPrice) + (varScaleGreavesQuantity * varScaleGreavesPrice) + (varScaleShouldersQuantity * varScaleShouldersPrice) + (varScaleGirdleQuantity * varScaleGirdlePrice) + (varScaleVambracesQuantity * varScaleVambracesPrice) + (varScaleLeggingsQuantity * varScaleLeggingsPrice) + (varScaleHelmetQuantity * varScaleHelmetPrice) + (varScaleCuirassQuantity * varScaleCuirassPrice) + (varScaleSetQuantity * varScaleSetPrice);
    varScaleGoldTotal = (varScaleBootsQuantity * varScaleBootsGold) + (varScaleGauntletsQuantity * varScaleGauntletsGold) + (varScaleElbowsQuantity * varScaleElbowsGold) + (varScaleGreavesQuantity * varScaleGreavesGold) + (varScaleShouldersQuantity * varScaleShouldersGold) + (varScaleGirdleQuantity * varScaleGirdleGold) + (varScaleVambracesQuantity * varScaleVambracesGold) + (varScaleLeggingsQuantity * varScaleLeggingsGold) + (varScaleHelmetQuantity * varScaleHelmetGold) + (varScaleCuirassQuantity * varScaleCuirassGold) + (varScaleSetQuantity * varScaleSetGold);
    varScaleIronTotal = (varScaleBootsQuantity * varScaleBootsIron) + (varScaleGauntletsQuantity * varScaleGauntletsIron) + (varScaleElbowsQuantity * varScaleElbowsIron) + (varScaleGreavesQuantity * varScaleGreavesIron) + (varScaleShouldersQuantity * varScaleShouldersIron) + (varScaleGirdleQuantity * varScaleGirdleIron) + (varScaleVambracesQuantity * varScaleVambracesIron) + (varScaleLeggingsQuantity * varScaleLeggingsIron) + (varScaleHelmetQuantity * varScaleHelmetIron) + (varScaleCuirassQuantity * varScaleCuirassIron) + (varScaleSetQuantity * varScaleSetIron);
    varScaleLeatherTotal = (varScaleBootsQuantity * varScaleBootsLeather) + (varScaleGauntletsQuantity * varScaleGauntletsLeather) + (varScaleElbowsQuantity * varScaleElbowsLeather) + (varScaleGreavesQuantity * varScaleGreavesLeather) + (varScaleShouldersQuantity * varScaleShouldersLeather) + (varScaleGirdleQuantity * varScaleGirdleLeather) + (varScaleVambracesQuantity * varScaleVambracesLeather) + (varScaleLeggingsQuantity * varScaleLeggingsLeather) + (varScaleHelmetQuantity * varScaleHelmetLeather) + (varScaleCuirassQuantity * varScaleCuirassLeather) + (varScaleSetQuantity * varScaleSetLeather);

    varPlateTotal = (varPlateCoutersQuantity * varPlateCoutersPrice) + (varPlateGreavesQuantity * varPlateGreavesPrice) + (varPlateShouldersQuantity * varPlateShouldersPrice) + (varPlateGirdleQuantity * varPlateGirdlePrice) + (varPlateHelmetQuantity * varPlateHelmetPrice) + (varPlateCuirassQuantity * varPlateCuirassPrice) + (varPlateSetQuantity * varPlateSetPrice);
    varPlateGoldTotal = (varPlateCoutersQuantity * varPlateCoutersGold) + (varPlateGreavesQuantity * varPlateGreavesGold) + (varPlateShouldersQuantity * varPlateShouldersGold) + (varPlateGirdleQuantity * varPlateGirdleGold) + (varPlateHelmetQuantity * varPlateHelmetGold) + (varPlateCuirassQuantity * varPlateCuirassGold) + (varPlateSetQuantity * varPlateSetGold);
    varPlateIronTotal = (varPlateCoutersQuantity * varPlateCoutersIron) + (varPlateGreavesQuantity * varPlateGreavesIron) + (varPlateShouldersQuantity * varPlateShouldersIron) + (varPlateGirdleQuantity * varPlateGirdleIron) + (varPlateHelmetQuantity * varPlateHelmetIron) + (varPlateCuirassQuantity * varPlateCuirassIron) + (varPlateSetQuantity * varPlateSetIron);
    varPlateLeatherTotal = (varPlateCoutersQuantity * varPlateCoutersLeather) + (varPlateGreavesQuantity * varPlateGreavesLeather) + (varPlateShouldersQuantity * varPlateShouldersLeather) + (varPlateGirdleQuantity * varPlateGirdleLeather) + (varPlateHelmetQuantity * varPlateHelmetLeather) + (varPlateCuirassQuantity * varPlateCuirassLeather) + (varPlateSetQuantity * varPlateSetLeather);

    varFullPlateTotal = (varFullPlateBootsQuantity * varFullPlateBootsPrice) + (varFullPlateGauntletsQuantity * varFullPlateGauntletsPrice) + (varFullPlateCoutersQuantity * varFullPlateCoutersPrice) + (varFullPlateGreavesQuantity * varFullPlateGreavesPrice) + (varFullPlateShouldersQuantity * varFullPlateShouldersPrice) + (varFullPlateGirdleQuantity * varFullPlateGirdlePrice) + (varFullPlateVambracesQuantity * varFullPlateVambracesPrice) + (varFullPlateLeggingsQuantity * varFullPlateLeggingsPrice) + (varFullPlateHelmetQuantity * varFullPlateHelmetPrice) + (varFullPlateCuirassQuantity * varFullPlateCuirassPrice) + (varFullPlateSetQuantity * varFullPlateSetPrice);
    varFullPlateGoldTotal = (varFullPlateBootsQuantity * varFullPlateBootsGold) + (varFullPlateGauntletsQuantity * varFullPlateGauntletsGold) + (varFullPlateCoutersQuantity * varFullPlateCoutersGold) + (varFullPlateGreavesQuantity * varFullPlateGreavesGold) + (varFullPlateShouldersQuantity * varFullPlateShouldersGold) + (varFullPlateGirdleQuantity * varFullPlateGirdleGold) + (varFullPlateVambracesQuantity * varFullPlateVambracesGold) + (varFullPlateLeggingsQuantity * varFullPlateLeggingsGold) + (varFullPlateHelmetQuantity * varFullPlateHelmetGold) + (varFullPlateCuirassQuantity * varFullPlateCuirassGold) + (varFullPlateSetQuantity * varFullPlateSetGold);
    varFullPlateIronTotal = (varFullPlateBootsQuantity * varFullPlateBootsIron) + (varFullPlateGauntletsQuantity * varFullPlateGauntletsIron) + (varFullPlateCoutersQuantity * varFullPlateCoutersIron) + (varFullPlateGreavesQuantity * varFullPlateGreavesIron) + (varFullPlateShouldersQuantity * varFullPlateShouldersIron) + (varFullPlateGirdleQuantity * varFullPlateGirdleIron) + (varFullPlateVambracesQuantity * varFullPlateVambracesIron) + (varFullPlateLeggingsQuantity * varFullPlateLeggingsIron) + (varFullPlateHelmetQuantity * varFullPlateHelmetIron) + (varFullPlateCuirassQuantity * varFullPlateCuirassIron) + (varFullPlateSetQuantity * varFullPlateSetIron);
    varFullPlateLeatherTotal = (varFullPlateBootsQuantity * varFullPlateBootsLeather) + (varFullPlateGauntletsQuantity * varFullPlateGauntletsLeather) + (varFullPlateCoutersQuantity * varFullPlateCoutersLeather) + (varFullPlateGreavesQuantity * varFullPlateGreavesLeather) + (varFullPlateShouldersQuantity * varFullPlateShouldersLeather) + (varFullPlateGirdleQuantity * varFullPlateGirdleLeather) + (varFullPlateVambracesQuantity * varFullPlateVambracesLeather) + (varFullPlateLeggingsQuantity * varFullPlateLeggingsLeather) + (varFullPlateHelmetQuantity * varFullPlateHelmetLeather) + (varFullPlateCuirassQuantity * varFullPlateCuirassLeather) + (varFullPlateSetQuantity * varFullPlateSetLeather);
    varFullPlateSelentineTotal = (varFullPlateBootsQuantity * varFullPlateBootsSelentine) + (varFullPlateGauntletsQuantity * varFullPlateGauntletsSelentine) + (varFullPlateCoutersQuantity * varFullPlateCoutersSelentine) + (varFullPlateGreavesQuantity * varFullPlateGreavesSelentine) + (varFullPlateShouldersQuantity * varFullPlateShouldersSelentine) + (varFullPlateGirdleQuantity * varFullPlateGirdleSelentine) + (varFullPlateVambracesQuantity * varFullPlateVambracesSelentine) + (varFullPlateLeggingsQuantity * varFullPlateLeggingsSelentine) + (varFullPlateHelmetQuantity * varFullPlateHelmetSelentine) + (varFullPlateCuirassQuantity * varFullPlateCuirassSelentine) + (varFullPlateSetQuantity * varFullPlateSetSelentine);

    varInfernalTotal = (varInfernalBootsQuantity * varInfernalBootsPrice) + (varInfernalGauntletsQuantity * varInfernalGauntletsPrice) + (varInfernalCoutersQuantity * varInfernalCoutersPrice) + (varInfernalGreavesQuantity * varInfernalGreavesPrice) + (varInfernalShouldersQuantity * varInfernalShouldersPrice) + (varInfernalGirdleQuantity * varInfernalGirdlePrice) + (varInfernalHelmetQuantity * varInfernalHelmetPrice) + (varInfernalCuirassQuantity * varInfernalCuirassPrice) + (varInfernalSetQuantity * varInfernalSetPrice);
    varInfernalGoldTotal = (varInfernalBootsQuantity * varInfernalBootsGold) + (varInfernalGauntletsQuantity * varInfernalGauntletsGold) + (varInfernalCoutersQuantity * varInfernalCoutersGold) + (varInfernalGreavesQuantity * varInfernalGreavesGold) + (varInfernalShouldersQuantity * varInfernalShouldersGold) + (varInfernalGirdleQuantity * varInfernalGirdleGold) + (varInfernalHelmetQuantity * varInfernalHelmetGold) + (varInfernalCuirassQuantity * varInfernalCuirassGold) + (varInfernalSetQuantity * varInfernalSetGold);
    varInfernalIronTotal = (varInfernalBootsQuantity * varInfernalBootsIron) + (varInfernalGauntletsQuantity * varInfernalGauntletsIron) + (varInfernalCoutersQuantity * varInfernalCoutersIron) + (varInfernalGreavesQuantity * varInfernalGreavesIron) + (varInfernalShouldersQuantity * varInfernalShouldersIron) + (varInfernalGirdleQuantity * varInfernalGirdleIron) + (varInfernalHelmetQuantity * varInfernalHelmetIron) + (varInfernalCuirassQuantity * varInfernalCuirassIron) + (varInfernalSetQuantity * varInfernalSetIron);
    varInfernalLeatherTotal = (varInfernalBootsQuantity * varInfernalBootsLeather) + (varInfernalGauntletsQuantity * varInfernalGauntletsLeather) + (varInfernalCoutersQuantity * varInfernalCoutersLeather) + (varInfernalGreavesQuantity * varInfernalGreavesLeather) + (varInfernalShouldersQuantity * varInfernalShouldersLeather) + (varInfernalGirdleQuantity * varInfernalGirdleLeather) + (varInfernalHelmetQuantity * varInfernalHelmetLeather) + (varInfernalCuirassQuantity * varInfernalCuirassLeather) + (varInfernalSetQuantity * varInfernalSetLeather);
    varInfernalLeensparTotal = (varInfernalBootsQuantity * varInfernalBootsLeenspar) + (varInfernalGauntletsQuantity * varInfernalGauntletsLeenspar) + (varInfernalCoutersQuantity * varInfernalCoutersLeenspar) + (varInfernalGreavesQuantity * varInfernalGreavesLeenspar) + (varInfernalShouldersQuantity * varInfernalShouldersLeenspar) + (varInfernalGirdleQuantity * varInfernalGirdleLeenspar) + (varInfernalHelmetQuantity * varInfernalHelmetLeenspar) + (varInfernalCuirassQuantity * varInfernalCuirassLeenspar) + (varInfernalSetQuantity * varInfernalSetLeenspar);
    varInfernalFiendClawTotal = (varInfernalBootsQuantity * varInfernalBootsFiendClaw) + (varInfernalGauntletsQuantity * varInfernalGauntletsFiendClaw) + (varInfernalCoutersQuantity * varInfernalCoutersFiendClaw) + (varInfernalGreavesQuantity * varInfernalGreavesFiendClaw) + (varInfernalShouldersQuantity * varInfernalShouldersFiendClaw) + (varInfernalGirdleQuantity * varInfernalGirdleFiendClaw) + (varInfernalHelmetQuantity * varInfernalHelmetFiendClaw) + (varInfernalCuirassQuantity * varInfernalCuirassFiendClaw) + (varInfernalSetQuantity * varInfernalSetFiendClaw);
    varInfernalRaktaBloodTotal = (varInfernalCuirassQuantity * varInfernalCuirassRaktaBlood) + (varInfernalSetQuantity * varInfernalSetRaktaBlood);

    varDragonTotal = (varDragonBootsQuantity * varDragonBootsPrice) + (varDragonGauntletsQuantity * varDragonGauntletsPrice) + (varDragonGreavesQuantity * varDragonGreavesPrice) + (varDragonShouldersQuantity * varDragonShouldersPrice) + (varDragonGirdleQuantity * varDragonGirdlePrice) + (varDragonHelmetQuantity * varDragonHelmetPrice) + (varDragonCuirassQuantity * varDragonCuirassPrice) + (varDragonSetQuantity * varDragonSetPrice);
    varDragonGoldTotal = (varDragonBootsQuantity * varDragonBootsGold) + (varDragonGauntletsQuantity * varDragonGauntletsGold) + (varDragonGreavesQuantity * varDragonGreavesGold) + (varDragonShouldersQuantity * varDragonShouldersGold) + (varDragonGirdleQuantity * varDragonGirdleGold) + (varDragonHelmetQuantity * varDragonHelmetGold) + (varDragonCuirassQuantity * varDragonCuirassGold) + (varDragonSetQuantity * varDragonSetGold);
    varDragonIronTotal = (varDragonBootsQuantity * varDragonBootsIron) + (varDragonGauntletsQuantity * varDragonGauntletsIron) + (varDragonGreavesQuantity * varDragonGreavesIron) + (varDragonShouldersQuantity * varDragonShouldersIron) + (varDragonGirdleQuantity * varDragonGirdleIron) + (varDragonHelmetQuantity * varDragonHelmetIron) + (varDragonCuirassQuantity * varDragonCuirassIron) + (varDragonSetQuantity * varDragonSetIron);
    varDragonLeatherTotal = (varDragonBootsQuantity * varDragonBootsLeather) + (varDragonGauntletsQuantity * varDragonGauntletsLeather) + (varDragonGreavesQuantity * varDragonGreavesLeather) + (varDragonShouldersQuantity * varDragonShouldersLeather) + (varDragonGirdleQuantity * varDragonGirdleLeather) + (varDragonHelmetQuantity * varDragonHelmetLeather) + (varDragonCuirassQuantity * varDragonCuirassLeather) + (varDragonSetQuantity * varDragonSetLeather);
    varDragonTheyrilTotal = (varDragonBootsQuantity * varDragonBootsTheyril) + (varDragonGauntletsQuantity * varDragonGauntletsTheyril) + (varDragonGreavesQuantity * varDragonGreavesTheyril) + (varDragonShouldersQuantity * varDragonShouldersTheyril) + (varDragonGirdleQuantity * varDragonGirdleTheyril) + (varDragonHelmetQuantity * varDragonHelmetTheyril) + (varDragonCuirassQuantity * varDragonCuirassTheyril) + (varDragonSetQuantity * varDragonSetTheyril);
    varDragonDragonScaleTotal = (varDragonBootsQuantity * varDragonBootsDragonScale) + (varDragonGauntletsQuantity * varDragonGauntletsDragonScale) + (varDragonGreavesQuantity * varDragonGreavesDragonScale) + (varDragonShouldersQuantity * varDragonShouldersDragonScale) + (varDragonGirdleQuantity * varDragonGirdleDragonScale) + (varDragonHelmetQuantity * varDragonHelmetDragonScale) + (varDragonCuirassQuantity * varDragonCuirassDragonScale) + (varDragonSetQuantity * varDragonSetDragonScale);
    
    varBCTotal = (varBCChainHauberkQuantity * varBCChainHauberkPrice) + (varBCChainSetQuantity * varBCChainSetPrice) + (varBCBandedCuirassQuantity * varBCBandedCuirassPrice) + (varBCBandedSetQuantity * varBCBandedSetPrice) + (varBCScaleHelmetQuantity * varBCScaleHelmetPrice) + (varBCScaleCuirassQuantity * varBCScaleCuirassPrice) + (varBCScaleSetQuantity * varBCScaleSetPrice) + (varBCPlateHelmetQuantity * varBCPlateHelmetPrice) + (varBCPlateCuirassQuantity * varBCPlateCuirassPrice) + (varBCPlateSetQuantity * varBCPlateSetPrice) + (varBCPlateHelmetQuantity * varBCPlateHelmetPrice) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassPrice) + (varBCFullPlateSetQuantity * varBCFullPlateSetPrice) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetPrice) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassPrice) + (varBCInfernalSetQuantity * varBCInfernalSetPrice) + (varBCDragonHelmetQuantity * varBCDragonHelmetPrice) + (varBCDragonCuirassQuantity * varBCDragonCuirassPrice) + (varBCDragonSetQuantity * varBCDragonSetPrice);
    varBCGoldTotal = (varBCChainHauberkQuantity * varBCChainHauberkGold) + (varBCChainSetQuantity * varBCChainSetGold) + (varBCBandedCuirassQuantity * varBCBandedCuirassGold) + (varBCBandedSetQuantity * varBCBandedSetGold) + (varBCScaleHelmetQuantity * varBCScaleHelmetGold) + (varBCScaleCuirassQuantity * varBCScaleCuirassGold) + (varBCScaleSetQuantity * varBCScaleSetGold) + (varBCPlateHelmetQuantity * varBCPlateHelmetGold) + (varBCPlateCuirassQuantity * varBCPlateCuirassGold) + (varBCPlateSetQuantity * varBCPlateSetGold) + (varBCPlateHelmetQuantity * varBCPlateHelmetGold) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassGold) + (varBCFullPlateSetQuantity * varBCFullPlateSetGold) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetGold) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassGold) + (varBCInfernalSetQuantity * varBCInfernalSetGold) + (varBCDragonHelmetQuantity * varBCDragonHelmetGold) + (varBCDragonCuirassQuantity * varBCDragonCuirassGold) + (varBCDragonSetQuantity * varBCDragonSetGold);
    varBCIronTotal = (varBCChainHauberkQuantity * varBCChainHauberkIron) + (varBCChainSetQuantity * varBCChainSetIron) + (varBCBandedCuirassQuantity * varBCBandedCuirassIron) + (varBCBandedSetQuantity * varBCBandedSetIron) + (varBCScaleHelmetQuantity * varBCScaleHelmetIron) + (varBCScaleCuirassQuantity * varBCScaleCuirassIron) + (varBCScaleSetQuantity * varBCScaleSetIron) + (varBCPlateHelmetQuantity * varBCPlateHelmetIron) + (varBCPlateCuirassQuantity * varBCPlateCuirassIron) + (varBCPlateSetQuantity * varBCPlateSetIron) + (varBCPlateHelmetQuantity * varBCPlateHelmetIron) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassIron) + (varBCFullPlateSetQuantity * varBCFullPlateSetIron) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetIron) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassIron) + (varBCInfernalSetQuantity * varBCInfernalSetIron) + (varBCDragonHelmetQuantity * varBCDragonHelmetIron) + (varBCDragonCuirassQuantity * varBCDragonCuirassIron) + (varBCDragonSetQuantity * varBCDragonSetIron);
    varBCLeatherTotal = (varBCChainHauberkQuantity * varBCChainHauberkLeather) + (varBCChainSetQuantity * varBCChainSetLeather) + (varBCBandedCuirassQuantity * varBCBandedCuirassLeather) + (varBCBandedSetQuantity * varBCBandedSetLeather) + (varBCScaleHelmetQuantity * varBCScaleHelmetLeather) + (varBCScaleCuirassQuantity * varBCScaleCuirassLeather) + (varBCScaleSetQuantity * varBCScaleSetLeather) + (varBCPlateHelmetQuantity * varBCPlateHelmetLeather) + (varBCPlateCuirassQuantity * varBCPlateCuirassLeather) + (varBCPlateSetQuantity * varBCPlateSetLeather) + (varBCPlateHelmetQuantity * varBCPlateHelmetLeather) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassLeather) + (varBCFullPlateSetQuantity * varBCFullPlateSetLeather) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetLeather) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassLeather) + (varBCInfernalSetQuantity * varBCInfernalSetLeather) + (varBCDragonHelmetQuantity * varBCDragonHelmetLeather) + (varBCDragonCuirassQuantity * varBCDragonCuirassLeather) + (varBCDragonSetQuantity * varBCDragonSetLeather);
    varBCSelentineTotal = (varBCChainHauberkQuantity * varBCChainHauberkSelentine) + (varBCChainSetQuantity * varBCChainSetSelentine) + (varBCBandedCuirassQuantity * varBCBandedCuirassSelentine) + (varBCBandedSetQuantity * varBCBandedSetSelentine) + (varBCScaleHelmetQuantity * varBCScaleHelmetSelentine) + (varBCScaleCuirassQuantity * varBCScaleCuirassSelentine) + (varBCScaleSetQuantity * varBCScaleSetSelentine) + (varBCPlateHelmetQuantity * varBCPlateHelmetSelentine) + (varBCPlateCuirassQuantity * varBCPlateCuirassSelentine) + (varBCPlateSetQuantity * varBCPlateSetSelentine) + (varBCPlateHelmetQuantity * varBCPlateHelmetSelentine) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassSelentine) + (varBCFullPlateSetQuantity * varBCFullPlateSetSelentine) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetSelentine) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassSelentine) + (varBCInfernalSetQuantity * varBCInfernalSetSelentine) + (varBCDragonHelmetQuantity * varBCDragonHelmetSelentine) + (varBCDragonCuirassQuantity * varBCDragonCuirassSelentine) + (varBCDragonSetQuantity * varBCDragonSetSelentine);
    varBCLeensparTotal = (varBCChainHauberkQuantity * varBCChainHauberkLeenspar) + (varBCChainSetQuantity * varBCChainSetLeenspar) + (varBCBandedCuirassQuantity * varBCBandedCuirassLeenspar) + (varBCBandedSetQuantity * varBCBandedSetLeenspar) + (varBCScaleHelmetQuantity * varBCScaleHelmetLeenspar) + (varBCScaleCuirassQuantity * varBCScaleCuirassLeenspar) + (varBCScaleSetQuantity * varBCScaleSetLeenspar) + (varBCPlateHelmetQuantity * varBCPlateHelmetLeenspar) + (varBCPlateCuirassQuantity * varBCPlateCuirassLeenspar) + (varBCPlateSetQuantity * varBCPlateSetLeenspar) + (varBCPlateHelmetQuantity * varBCPlateHelmetLeenspar) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassLeenspar) + (varBCFullPlateSetQuantity * varBCFullPlateSetLeenspar) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetLeenspar) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassLeenspar) + (varBCInfernalSetQuantity * varBCInfernalSetLeenspar) + (varBCDragonHelmetQuantity * varBCDragonHelmetLeenspar) + (varBCDragonCuirassQuantity * varBCDragonCuirassLeenspar) + (varBCDragonSetQuantity * varBCDragonSetLeenspar);
    varBCTheyrilTotal = (varBCChainHauberkQuantity * varBCChainHauberkTheyril) + (varBCChainSetQuantity * varBCChainSetTheyril) + (varBCBandedCuirassQuantity * varBCBandedCuirassTheyril) + (varBCBandedSetQuantity * varBCBandedSetTheyril) + (varBCScaleHelmetQuantity * varBCScaleHelmetTheyril) + (varBCScaleCuirassQuantity * varBCScaleCuirassTheyril) + (varBCScaleSetQuantity * varBCScaleSetTheyril) + (varBCPlateHelmetQuantity * varBCPlateHelmetTheyril) + (varBCPlateCuirassQuantity * varBCPlateCuirassTheyril) + (varBCPlateSetQuantity * varBCPlateSetTheyril) + (varBCPlateHelmetQuantity * varBCPlateHelmetTheyril) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassTheyril) + (varBCFullPlateSetQuantity * varBCFullPlateSetTheyril) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetTheyril) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassTheyril) + (varBCInfernalSetQuantity * varBCInfernalSetTheyril) + (varBCDragonHelmetQuantity * varBCDragonHelmetTheyril) + (varBCDragonCuirassQuantity * varBCDragonCuirassTheyril) + (varBCDragonSetQuantity * varBCDragonSetTheyril);
    varBCFiendClawTotal = (varBCChainHauberkQuantity * varBCChainHauberkFiendClaw) + (varBCChainSetQuantity * varBCChainSetFiendClaw) + (varBCBandedCuirassQuantity * varBCBandedCuirassFiendClaw) + (varBCBandedSetQuantity * varBCBandedSetFiendClaw) + (varBCScaleHelmetQuantity * varBCScaleHelmetFiendClaw) + (varBCScaleCuirassQuantity * varBCScaleCuirassFiendClaw) + (varBCScaleSetQuantity * varBCScaleSetFiendClaw) + (varBCPlateHelmetQuantity * varBCPlateHelmetFiendClaw) + (varBCPlateCuirassQuantity * varBCPlateCuirassFiendClaw) + (varBCPlateSetQuantity * varBCPlateSetFiendClaw) + (varBCPlateHelmetQuantity * varBCPlateHelmetFiendClaw) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassFiendClaw) + (varBCFullPlateSetQuantity * varBCFullPlateSetFiendClaw) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetFiendClaw) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassFiendClaw) + (varBCInfernalSetQuantity * varBCInfernalSetFiendClaw) + (varBCDragonHelmetQuantity * varBCDragonHelmetFiendClaw) + (varBCDragonCuirassQuantity * varBCDragonCuirassFiendClaw) + (varBCDragonSetQuantity * varBCDragonSetFiendClaw);
    varBCRaktaBloodTotal = (varBCChainHauberkQuantity * varBCChainHauberkRaktaBlood) + (varBCChainSetQuantity * varBCChainSetRaktaBlood) + (varBCBandedCuirassQuantity * varBCBandedCuirassRaktaBlood) + (varBCBandedSetQuantity * varBCBandedSetRaktaBlood) + (varBCScaleHelmetQuantity * varBCScaleHelmetRaktaBlood) + (varBCScaleCuirassQuantity * varBCScaleCuirassRaktaBlood) + (varBCScaleSetQuantity * varBCScaleSetRaktaBlood) + (varBCPlateHelmetQuantity * varBCPlateHelmetRaktaBlood) + (varBCPlateCuirassQuantity * varBCPlateCuirassRaktaBlood) + (varBCPlateSetQuantity * varBCPlateSetRaktaBlood) + (varBCPlateHelmetQuantity * varBCPlateHelmetRaktaBlood) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassRaktaBlood) + (varBCFullPlateSetQuantity * varBCFullPlateSetRaktaBlood) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetRaktaBlood) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassRaktaBlood) + (varBCInfernalSetQuantity * varBCInfernalSetRaktaBlood) + (varBCDragonHelmetQuantity * varBCDragonHelmetRaktaBlood) + (varBCDragonCuirassQuantity * varBCDragonCuirassRaktaBlood) + (varBCDragonSetQuantity * varBCDragonSetRaktaBlood);
    varBCDragonScaleTotal = (varBCChainHauberkQuantity * varBCChainHauberkDragonScale) + (varBCChainSetQuantity * varBCChainSetDragonScale) + (varBCBandedCuirassQuantity * varBCBandedCuirassDragonScale) + (varBCBandedSetQuantity * varBCBandedSetDragonScale) + (varBCScaleHelmetQuantity * varBCScaleHelmetDragonScale) + (varBCScaleCuirassQuantity * varBCScaleCuirassDragonScale) + (varBCScaleSetQuantity * varBCScaleSetDragonScale) + (varBCPlateHelmetQuantity * varBCPlateHelmetDragonScale) + (varBCPlateCuirassQuantity * varBCPlateCuirassDragonScale) + (varBCPlateSetQuantity * varBCPlateSetDragonScale) + (varBCPlateHelmetQuantity * varBCPlateHelmetDragonScale) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassDragonScale) + (varBCFullPlateSetQuantity * varBCFullPlateSetDragonScale) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetDragonScale) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassDragonScale) + (varBCInfernalSetQuantity * varBCInfernalSetDragonScale) + (varBCDragonHelmetQuantity * varBCDragonHelmetDragonScale) + (varBCDragonCuirassQuantity * varBCDragonCuirassDragonScale) + (varBCDragonSetQuantity * varBCDragonSetDragonScale);
    varBCHeartTotal = (varBCChainHauberkQuantity * varBCChainHauberkHeart) + (varBCChainSetQuantity * varBCChainSetHeart) + (varBCBandedCuirassQuantity * varBCBandedCuirassHeart) + (varBCBandedSetQuantity * varBCBandedSetHeart) + (varBCScaleHelmetQuantity * varBCScaleHelmetHeart) + (varBCScaleCuirassQuantity * varBCScaleCuirassHeart) + (varBCScaleSetQuantity * varBCScaleSetHeart) + (varBCPlateHelmetQuantity * varBCPlateHelmetHeart) + (varBCPlateCuirassQuantity * varBCPlateCuirassHeart) + (varBCPlateSetQuantity * varBCPlateSetHeart) + (varBCPlateHelmetQuantity * varBCPlateHelmetHeart) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassHeart) + (varBCFullPlateSetQuantity * varBCFullPlateSetHeart) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetHeart) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassHeart) + (varBCInfernalSetQuantity * varBCInfernalSetHeart) + (varBCDragonHelmetQuantity * varBCDragonHelmetHeart) + (varBCDragonCuirassQuantity * varBCDragonCuirassHeart) + (varBCDragonSetQuantity * varBCDragonSetHeart);
    varBCHagHeartTotal = (varBCChainHauberkQuantity * varBCChainHauberkHagHeart) + (varBCChainSetQuantity * varBCChainSetHagHeart) + (varBCBandedCuirassQuantity * varBCBandedCuirassHagHeart) + (varBCBandedSetQuantity * varBCBandedSetHagHeart) + (varBCScaleHelmetQuantity * varBCScaleHelmetHagHeart) + (varBCScaleCuirassQuantity * varBCScaleCuirassHagHeart) + (varBCScaleSetQuantity * varBCScaleSetHagHeart) + (varBCPlateHelmetQuantity * varBCPlateHelmetHagHeart) + (varBCPlateCuirassQuantity * varBCPlateCuirassHagHeart) + (varBCPlateSetQuantity * varBCPlateSetHagHeart) + (varBCPlateHelmetQuantity * varBCPlateHelmetHagHeart) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassHagHeart) + (varBCFullPlateSetQuantity * varBCFullPlateSetHagHeart) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetHagHeart) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassHagHeart) + (varBCInfernalSetQuantity * varBCInfernalSetHagHeart) + (varBCDragonHelmetQuantity * varBCDragonHelmetHagHeart) + (varBCDragonCuirassQuantity * varBCDragonCuirassHagHeart) + (varBCDragonSetQuantity * varBCDragonSetHagHeart);
    varBCDwarfHeartTotal = (varBCChainHauberkQuantity * varBCChainHauberkDwarfHeart) + (varBCChainSetQuantity * varBCChainSetDwarfHeart) + (varBCBandedCuirassQuantity * varBCBandedCuirassDwarfHeart) + (varBCBandedSetQuantity * varBCBandedSetDwarfHeart) + (varBCScaleHelmetQuantity * varBCScaleHelmetDwarfHeart) + (varBCScaleCuirassQuantity * varBCScaleCuirassDwarfHeart) + (varBCScaleSetQuantity * varBCScaleSetDwarfHeart) + (varBCPlateHelmetQuantity * varBCPlateHelmetDwarfHeart) + (varBCPlateCuirassQuantity * varBCPlateCuirassDwarfHeart) + (varBCPlateSetQuantity * varBCPlateSetDwarfHeart) + (varBCPlateHelmetQuantity * varBCPlateHelmetDwarfHeart) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassDwarfHeart) + (varBCFullPlateSetQuantity * varBCFullPlateSetDwarfHeart) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetDwarfHeart) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassDwarfHeart) + (varBCInfernalSetQuantity * varBCInfernalSetDwarfHeart) + (varBCDragonHelmetQuantity * varBCDragonHelmetDwarfHeart) + (varBCDragonCuirassQuantity * varBCDragonCuirassDwarfHeart) + (varBCDragonSetQuantity * varBCDragonSetDwarfHeart);
    varBCBeastmanToothTotal = (varBCChainHauberkQuantity * varBCChainHauberkBeastmanTooth) + (varBCChainSetQuantity * varBCChainSetBeastmanTooth) + (varBCBandedCuirassQuantity * varBCBandedCuirassBeastmanTooth) + (varBCBandedSetQuantity * varBCBandedSetBeastmanTooth) + (varBCScaleHelmetQuantity * varBCScaleHelmetBeastmanTooth) + (varBCScaleCuirassQuantity * varBCScaleCuirassBeastmanTooth) + (varBCScaleSetQuantity * varBCScaleSetBeastmanTooth) + (varBCPlateHelmetQuantity * varBCPlateHelmetBeastmanTooth) + (varBCPlateCuirassQuantity * varBCPlateCuirassBeastmanTooth) + (varBCPlateSetQuantity * varBCPlateSetBeastmanTooth) + (varBCPlateHelmetQuantity * varBCPlateHelmetBeastmanTooth) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassBeastmanTooth) + (varBCFullPlateSetQuantity * varBCFullPlateSetBeastmanTooth) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetBeastmanTooth) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassBeastmanTooth) + (varBCInfernalSetQuantity * varBCInfernalSetBeastmanTooth) + (varBCDragonHelmetQuantity * varBCDragonHelmetBeastmanTooth) + (varBCDragonCuirassQuantity * varBCDragonCuirassBeastmanTooth) + (varBCDragonSetQuantity * varBCDragonSetBeastmanTooth);
    varBCGhostlyDarktaintTotal = (varBCChainHauberkQuantity * varBCChainHauberkGhostlyDarktaint) + (varBCChainSetQuantity * varBCChainSetGhostlyDarktaint) + (varBCBandedCuirassQuantity * varBCBandedCuirassGhostlyDarktaint) + (varBCBandedSetQuantity * varBCBandedSetGhostlyDarktaint) + (varBCScaleHelmetQuantity * varBCScaleHelmetGhostlyDarktaint) + (varBCScaleCuirassQuantity * varBCScaleCuirassGhostlyDarktaint) + (varBCScaleSetQuantity * varBCScaleSetGhostlyDarktaint) + (varBCPlateHelmetQuantity * varBCPlateHelmetGhostlyDarktaint) + (varBCPlateCuirassQuantity * varBCPlateCuirassGhostlyDarktaint) + (varBCPlateSetQuantity * varBCPlateSetGhostlyDarktaint) + (varBCPlateHelmetQuantity * varBCPlateHelmetGhostlyDarktaint) + (varBCFullPlateCuirassQuantity * varBCFullPlateCuirassGhostlyDarktaint) + (varBCFullPlateSetQuantity * varBCFullPlateSetGhostlyDarktaint) + (varBCInfernalHelmetQuantity * varBCInfernalHelmetGhostlyDarktaint) + (varBCInfernalCuirassQuantity * varBCInfernalCuirassGhostlyDarktaint) + (varBCInfernalSetQuantity * varBCInfernalSetGhostlyDarktaint) + (varBCDragonHelmetQuantity * varBCDragonHelmetGhostlyDarktaint) + (varBCDragonCuirassQuantity * varBCDragonCuirassGhostlyDarktaint) + (varBCDragonSetQuantity * varBCDragonSetGhostlyDarktaint);

    varArmorTotal = (varChainTotal + varBandedTotal + varScaleTotal + varPlateTotal + varFullPlateTotal + varInfernalTotal + varDragonTotal + varBCTotal);
    varArmorGoldTotal = (varChainGoldTotal + varBandedGoldTotal + varScaleGoldTotal + varPlateGoldTotal + varFullPlateGoldTotal + varInfernalGoldTotal + varDragonGoldTotal + varBCGoldTotal);
    varArmorIronTotal = (varChainIronTotal + varBandedIronTotal + varScaleIronTotal + varPlateIronTotal + varFullPlateIronTotal + varInfernalIronTotal + varDragonIronTotal + varBCIronTotal);
    varArmorLeatherTotal = (varChainLeatherTotal + varBandedLeatherTotal + varScaleLeatherTotal + varPlateLeatherTotal + varFullPlateLeatherTotal + varInfernalLeatherTotal + varDragonLeatherTotal + varBCLeatherTotal);
    varArmorSelentineTotal = (varFullPlateSelentineTotal + varBCSelentineTotal);
    varArmorLeensparTotal = (varInfernalLeensparTotal + varBCLeensparTotal);
    varArmorTheyrilTotal = (varDragonTheyrilTotal + varBCTheyrilTotal);
    varArmorFiendClawTotal = (varInfernalFiendClawTotal + varBCFiendClawTotal);
    varArmorRaktaBloodTotal = (varInfernalRaktaBloodTotal + varBCRaktaBloodTotal);
    varArmorDragonScaleTotal = (varDragonDragonScaleTotal + varBCDragonScaleTotal);
    varArmorHeartTotal = (varBCHeartTotal);
    varArmorHagHeartTotal = (varBCHagHeartTotal);
    varArmorDwarfHeartTotal = (varBCDwarfHeartTotal);
    varArmorBeastmanToothTotal = (varBCBeastmanToothTotal);
    varArmorGhostlyDarktaintTotal = (varBCGhostlyDarktaintTotal);
}

//Chain Calculations
function fnChain()
{
    fnArmorSubPrice(varChainSleevesGold,varChainSleevesIron,varChainSleevesLeather,varChainSleevesSelentine,varChainSleevesLeenspar,varChainSleevesTheyril,varChainSleevesFiendClaw,varChainSleevesRaktaBlood,varChainSleevesDragonScale,varChainSleevesSuccess)
    varChainSleevesPrice = varItemPrice;

    fnArmorSubPrice(varChainLeggingsGold,varChainLeggingsIron,varChainLeggingsLeather,varChainLeggingsSelentine,varChainLeggingsLeenspar,varChainLeggingsTheyril,varChainLeggingsFiendClaw,varChainLeggingsRaktaBlood,varChainLeggingsDragonScale,varChainLeggingsSuccess)
    varChainLeggingsPrice = varItemPrice;

    fnArmorSubPrice(varChainHauberkGold,varChainHauberkIron,varChainHauberkLeather,varChainHauberkSelentine,varChainHauberkLeenspar,varChainHauberkTheyril,varChainHauberkFiendClaw,varChainHauberkRaktaBlood,varChainHauberkDragonScale,varChainHauberkSuccess)
    varChainHauberkPrice = varItemPrice;

    fnArmorSubPrice(varChainSetGold,varChainSetIron,varChainSetLeather,varChainSetSelentine,varChainSetLeenspar,varChainSetTheyril,varChainSetFiendClaw,varChainSetRaktaBlood,varChainSetDragonScale,varChainSetSuccess)
    varChainSetPrice = varItemPrice;
}

//Banded Calculations
function fnBanded()
{
    fnArmorSubPrice(varBandedElbowsGold,varBandedElbowsIron,varBandedElbowsLeather,varBandedElbowsSelentine,varBandedElbowsLeenspar,varBandedElbowsTheyril,varBandedElbowsFiendClaw,varBandedElbowsRaktaBlood,varBandedElbowsDragonScale,varBandedElbowsSuccess)
    varBandedElbowsPrice = varItemPrice;

    fnArmorSubPrice(varBandedGreavesGold,varBandedGreavesIron,varBandedGreavesLeather,varBandedGreavesSelentine,varBandedGreavesLeenspar,varBandedGreavesTheyril,varBandedGreavesFiendClaw,varBandedGreavesRaktaBlood,varBandedGreavesDragonScale,varBandedGreavesSuccess)
    varBandedGreavesPrice = varItemPrice;

    fnArmorSubPrice(varBandedShouldersGold,varBandedShouldersIron,varBandedShouldersLeather,varBandedShouldersSelentine,varBandedShouldersLeenspar,varBandedShouldersTheyril,varBandedShouldersFiendClaw,varBandedShouldersRaktaBlood,varBandedShouldersDragonScale,varBandedShouldersSuccess)
    varBandedShouldersPrice = varItemPrice;

    fnArmorSubPrice(varBandedGirdleGold,varBandedGirdleIron,varBandedGirdleLeather,varBandedGirdleSelentine,varBandedGirdleLeenspar,varBandedGirdleTheyril,varBandedGirdleFiendClaw,varBandedGirdleRaktaBlood,varBandedGirdleDragonScale,varBandedGirdleSuccess)
    varBandedGirdlePrice = varItemPrice;

    fnArmorSubPrice(varBandedVambracesGold,varBandedVambracesIron,varBandedVambracesLeather,varBandedVambracesSelentine,varBandedVambracesLeenspar,varBandedVambracesTheyril,varBandedVambracesFiendClaw,varBandedVambracesRaktaBlood,varBandedVambracesDragonScale,varBandedVambracesSuccess)
    varBandedVambracesPrice = varItemPrice;

    fnArmorSubPrice(varBandedLeggingsGold,varBandedLeggingsIron,varBandedLeggingsLeather,varBandedLeggingsSelentine,varBandedLeggingsLeenspar,varBandedLeggingsTheyril,varBandedLeggingsFiendClaw,varBandedLeggingsRaktaBlood,varBandedLeggingsDragonScale,varBandedLeggingsSuccess)
    varBandedLeggingsPrice = varItemPrice;

    fnArmorSubPrice(varBandedHelmetGold,varBandedHelmetIron,varBandedHelmetLeather,varBandedHelmetSelentine,varBandedHelmetLeenspar,varBandedHelmetTheyril,varBandedHelmetFiendClaw,varBandedHelmetRaktaBlood,varBandedHelmetDragonScale,varBandedHelmetSuccess)
    varBandedHelmetPrice = varItemPrice;

    fnArmorSubPrice(varBandedCuirassGold,varBandedCuirassIron,varBandedCuirassLeather,varBandedCuirassSelentine,varBandedCuirassLeenspar,varBandedCuirassTheyril,varBandedCuirassFiendClaw,varBandedCuirassRaktaBlood,varBandedCuirassDragonScale,varBandedCuirassSuccess)
    varBandedCuirassPrice = varItemPrice;

    fnArmorSubPrice(varBandedSetGold,varBandedSetIron,varBandedSetLeather,varBandedSetSelentine,varBandedSetLeenspar,varBandedSetTheyril,varBandedSetFiendClaw,varBandedSetRaktaBlood,varBandedSetDragonScale,varBandedSetSuccess)
    varBandedSetPrice = varItemPrice;
}

//Scale Calculations
function fnScale()
{
    fnArmorSubPrice(varScaleBootsGold,varScaleBootsIron,varScaleBootsLeather,varScaleBootsSelentine,varScaleBootsLeenspar,varScaleBootsTheyril,varScaleBootsFiendClaw,varScaleBootsRaktaBlood,varScaleBootsDragonScale,varScaleBootsSuccess)
    varScaleBootsPrice = varItemPrice;

    fnArmorSubPrice(varScaleGauntletsGold,varScaleGauntletsIron,varScaleGauntletsLeather,varScaleGauntletsSelentine,varScaleGauntletsLeenspar,varScaleGauntletsTheyril,varScaleGauntletsFiendClaw,varScaleGauntletsRaktaBlood,varScaleGauntletsDragonScale,varScaleGauntletsSuccess)
    varScaleGauntletsPrice = varItemPrice;

    fnArmorSubPrice(varScaleElbowsGold,varScaleElbowsIron,varScaleElbowsLeather,varScaleElbowsSelentine,varScaleElbowsLeenspar,varScaleElbowsTheyril,varScaleElbowsFiendClaw,varScaleElbowsRaktaBlood,varScaleElbowsDragonScale,varScaleElbowsSuccess)
    varScaleElbowsPrice = varItemPrice;

    fnArmorSubPrice(varScaleGreavesGold,varScaleGreavesIron,varScaleGreavesLeather,varScaleGreavesSelentine,varScaleGreavesLeenspar,varScaleGreavesTheyril,varScaleGreavesFiendClaw,varScaleGreavesRaktaBlood,varScaleGreavesDragonScale,varScaleGreavesSuccess)
    varScaleGreavesPrice = varItemPrice;

    fnArmorSubPrice(varScaleShouldersGold,varScaleShouldersIron,varScaleShouldersLeather,varScaleShouldersSelentine,varScaleShouldersLeenspar,varScaleShouldersTheyril,varScaleShouldersFiendClaw,varScaleShouldersRaktaBlood,varScaleShouldersDragonScale,varScaleShouldersSuccess)
    varScaleShouldersPrice = varItemPrice;

    fnArmorSubPrice(varScaleGirdleGold,varScaleGirdleIron,varScaleGirdleLeather,varScaleGirdleSelentine,varScaleGirdleLeenspar,varScaleGirdleTheyril,varScaleGirdleFiendClaw,varScaleGirdleRaktaBlood,varScaleGirdleDragonScale,varScaleGirdleSuccess)
    varScaleGirdlePrice = varItemPrice;

    fnArmorSubPrice(varScaleVambracesGold,varScaleVambracesIron,varScaleVambracesLeather,varScaleVambracesSelentine,varScaleVambracesLeenspar,varScaleVambracesTheyril,varScaleVambracesFiendClaw,varScaleVambracesRaktaBlood,varScaleVambracesDragonScale,varScaleVambracesSuccess)
    varScaleVambracesPrice = varItemPrice;

    fnArmorSubPrice(varScaleLeggingsGold,varScaleLeggingsIron,varScaleLeggingsLeather,varScaleLeggingsSelentine,varScaleLeggingsLeenspar,varScaleLeggingsTheyril,varScaleLeggingsFiendClaw,varScaleLeggingsRaktaBlood,varScaleLeggingsDragonScale,varScaleLeggingsSuccess)
    varScaleLeggingsPrice = varItemPrice;

    fnArmorSubPrice(varScaleHelmetGold,varScaleHelmetIron,varScaleHelmetLeather,varScaleHelmetSelentine,varScaleHelmetLeenspar,varScaleHelmetTheyril,varScaleHelmetFiendClaw,varScaleHelmetRaktaBlood,varScaleHelmetDragonScale,varScaleHelmetSuccess)
    varScaleHelmetPrice = varItemPrice;

    fnArmorSubPrice(varScaleCuirassGold,varScaleCuirassIron,varScaleCuirassLeather,varScaleCuirassSelentine,varScaleCuirassLeenspar,varScaleCuirassTheyril,varScaleCuirassFiendClaw,varScaleCuirassRaktaBlood,varScaleCuirassDragonScale,varScaleCuirassSuccess)
    varScaleCuirassPrice = varItemPrice;

    fnArmorSubPrice(varScaleSetGold,varScaleSetIron,varScaleSetLeather,varScaleSetSelentine,varScaleSetLeenspar,varScaleSetTheyril,varScaleSetFiendClaw,varScaleSetRaktaBlood,varScaleSetDragonScale,varScaleSetSuccess)
    varScaleSetPrice = varItemPrice;
}

//Plate Calculations
function fnPlate()
{
    fnArmorSubPrice(varPlateCoutersGold,varPlateCoutersIron,varPlateCoutersLeather,varPlateCoutersSelentine,varPlateCoutersLeenspar,varPlateCoutersTheyril,varPlateCoutersFiendClaw,varPlateCoutersRaktaBlood,varPlateCoutersDragonScale,varPlateCoutersSuccess)
    varPlateCoutersPrice = varItemPrice;

    fnArmorSubPrice(varPlateGreavesGold,varPlateGreavesIron,varPlateGreavesLeather,varPlateGreavesSelentine,varPlateGreavesLeenspar,varPlateGreavesTheyril,varPlateGreavesFiendClaw,varPlateGreavesRaktaBlood,varPlateGreavesDragonScale,varPlateGreavesSuccess)
    varPlateGreavesPrice = varItemPrice;

    fnArmorSubPrice(varPlateShouldersGold,varPlateShouldersIron,varPlateShouldersLeather,varPlateShouldersSelentine,varPlateShouldersLeenspar,varPlateShouldersTheyril,varPlateShouldersFiendClaw,varPlateShouldersRaktaBlood,varPlateShouldersDragonScale,varPlateShouldersSuccess)
    varPlateShouldersPrice = varItemPrice;

    fnArmorSubPrice(varPlateGirdleGold,varPlateGirdleIron,varPlateGirdleLeather,varPlateGirdleSelentine,varPlateGirdleLeenspar,varPlateGirdleTheyril,varPlateGirdleFiendClaw,varPlateGirdleRaktaBlood,varPlateGirdleDragonScale,varPlateGirdleSuccess)
    varPlateGirdlePrice = varItemPrice;

    fnArmorSubPrice(varPlateHelmetGold,varPlateHelmetIron,varPlateHelmetLeather,varPlateHelmetSelentine,varPlateHelmetLeenspar,varPlateHelmetTheyril,varPlateHelmetFiendClaw,varPlateHelmetRaktaBlood,varPlateHelmetDragonScale,varPlateHelmetSuccess)
    varPlateHelmetPrice = varItemPrice;

    fnArmorSubPrice(varPlateCuirassGold,varPlateCuirassIron,varPlateCuirassLeather,varPlateCuirassSelentine,varPlateCuirassLeenspar,varPlateCuirassTheyril,varPlateCuirassFiendClaw,varPlateCuirassRaktaBlood,varPlateCuirassDragonScale,varPlateCuirassSuccess)
    varPlateCuirassPrice = varItemPrice;

    fnArmorSubPrice(varPlateSetGold,varPlateSetIron,varPlateSetLeather,varPlateSetSelentine,varPlateSetLeenspar,varPlateSetTheyril,varPlateSetFiendClaw,varPlateSetRaktaBlood,varPlateSetDragonScale,varPlateSetSuccess)
    varPlateSetPrice = varItemPrice;
}

//FullPlate Calculations
function fnFullPlate()
{
    fnArmorSubPrice(varFullPlateBootsGold,varFullPlateBootsIron,varFullPlateBootsLeather,varFullPlateBootsSelentine,varFullPlateBootsLeenspar,varFullPlateBootsTheyril,varFullPlateBootsFiendClaw,varFullPlateBootsRaktaBlood,varFullPlateBootsDragonScale,varFullPlateBootsSuccess)
    varFullPlateBootsPrice = varItemPrice;

    fnArmorSubPrice(varFullPlateGauntletsGold,varFullPlateGauntletsIron,varFullPlateGauntletsLeather,varFullPlateGauntletsSelentine,varFullPlateGauntletsLeenspar,varFullPlateGauntletsTheyril,varFullPlateGauntletsFiendClaw,varFullPlateGauntletsRaktaBlood,varFullPlateGauntletsDragonScale,varFullPlateGauntletsSuccess)
    varFullPlateGauntletsPrice = varItemPrice;

    fnArmorSubPrice(varFullPlateCoutersGold,varFullPlateCoutersIron,varFullPlateCoutersLeather,varFullPlateCoutersSelentine,varFullPlateCoutersLeenspar,varFullPlateCoutersTheyril,varFullPlateCoutersFiendClaw,varFullPlateCoutersRaktaBlood,varFullPlateCoutersDragonScale,varFullPlateCoutersSuccess)
    varFullPlateCoutersPrice = varItemPrice;

    fnArmorSubPrice(varFullPlateGreavesGold,varFullPlateGreavesIron,varFullPlateGreavesLeather,varFullPlateGreavesSelentine,varFullPlateGreavesLeenspar,varFullPlateGreavesTheyril,varFullPlateGreavesFiendClaw,varFullPlateGreavesRaktaBlood,varFullPlateGreavesDragonScale,varFullPlateGreavesSuccess)
    varFullPlateGreavesPrice = varItemPrice;

    fnArmorSubPrice(varFullPlateShouldersGold,varFullPlateShouldersIron,varFullPlateShouldersLeather,varFullPlateShouldersSelentine,varFullPlateShouldersLeenspar,varFullPlateShouldersTheyril,varFullPlateShouldersFiendClaw,varFullPlateShouldersRaktaBlood,varFullPlateShouldersDragonScale,varFullPlateShouldersSuccess)
    varFullPlateShouldersPrice = varItemPrice;

    fnArmorSubPrice(varFullPlateGirdleGold,varFullPlateGirdleIron,varFullPlateGirdleLeather,varFullPlateGirdleSelentine,varFullPlateGirdleLeenspar,varFullPlateGirdleTheyril,varFullPlateGirdleFiendClaw,varFullPlateGirdleRaktaBlood,varFullPlateGirdleDragonScale,varFullPlateGirdleSuccess)
    varFullPlateGirdlePrice = varItemPrice;

    fnArmorSubPrice(varFullPlateVambracesGold,varFullPlateVambracesIron,varFullPlateVambracesLeather,varFullPlateVambracesSelentine,varFullPlateVambracesLeenspar,varFullPlateVambracesTheyril,varFullPlateVambracesFiendClaw,varFullPlateVambracesRaktaBlood,varFullPlateVambracesDragonScale,varFullPlateVambracesSuccess)
    varFullPlateVambracesPrice = varItemPrice;

    fnArmorSubPrice(varFullPlateLeggingsGold,varFullPlateLeggingsIron,varFullPlateLeggingsLeather,varFullPlateLeggingsSelentine,varFullPlateLeggingsLeenspar,varFullPlateLeggingsTheyril,varFullPlateLeggingsFiendClaw,varFullPlateLeggingsRaktaBlood,varFullPlateLeggingsDragonScale,varFullPlateLeggingsSuccess)
    varFullPlateLeggingsPrice = varItemPrice;

    fnArmorSubPrice(varFullPlateHelmetGold,varFullPlateHelmetIron,varFullPlateHelmetLeather,varFullPlateHelmetSelentine,varFullPlateHelmetLeenspar,varFullPlateHelmetTheyril,varFullPlateHelmetFiendClaw,varFullPlateHelmetRaktaBlood,varFullPlateHelmetDragonScale,varFullPlateHelmetSuccess)
    varFullPlateHelmetPrice = varItemPrice;

    fnArmorSubPrice(varFullPlateCuirassGold,varFullPlateCuirassIron,varFullPlateCuirassLeather,varFullPlateCuirassSelentine,varFullPlateCuirassLeenspar,varFullPlateCuirassTheyril,varFullPlateCuirassFiendClaw,varFullPlateCuirassRaktaBlood,varFullPlateCuirassDragonScale,varFullPlateCuirassSuccess)
    varFullPlateCuirassPrice = varItemPrice;

    fnArmorSubPrice(varFullPlateSetGold,varFullPlateSetIron,varFullPlateSetLeather,varFullPlateSetSelentine,varFullPlateSetLeenspar,varFullPlateSetTheyril,varFullPlateSetFiendClaw,varFullPlateSetRaktaBlood,varFullPlateSetDragonScale,varFullPlateSetSuccess)
    varFullPlateSetPrice = varItemPrice;
}

//Infernal Calculations
function fnInfernal()
{
    fnArmorSubPrice(varInfernalBootsGold,varInfernalBootsIron,varInfernalBootsLeather,varInfernalBootsSelentine,varInfernalBootsLeenspar,varInfernalBootsTheyril,varInfernalBootsFiendClaw,varInfernalBootsRaktaBlood,varInfernalBootsDragonScale,varInfernalBootsSuccess)
    varInfernalBootsPrice = varItemPrice;

    fnArmorSubPrice(varInfernalGauntletsGold,varInfernalGauntletsIron,varInfernalGauntletsLeather,varInfernalGauntletsSelentine,varInfernalGauntletsLeenspar,varInfernalGauntletsTheyril,varInfernalGauntletsFiendClaw,varInfernalGauntletsRaktaBlood,varInfernalGauntletsDragonScale,varInfernalGauntletsSuccess)
    varInfernalGauntletsPrice = varItemPrice;

    fnArmorSubPrice(varInfernalCoutersGold,varInfernalCoutersIron,varInfernalCoutersLeather,varInfernalCoutersSelentine,varInfernalCoutersLeenspar,varInfernalCoutersTheyril,varInfernalCoutersFiendClaw,varInfernalCoutersRaktaBlood,varInfernalCoutersDragonScale,varInfernalCoutersSuccess)
    varInfernalCoutersPrice = varItemPrice;

    fnArmorSubPrice(varInfernalGreavesGold,varInfernalGreavesIron,varInfernalGreavesLeather,varInfernalGreavesSelentine,varInfernalGreavesLeenspar,varInfernalGreavesTheyril,varInfernalGreavesFiendClaw,varInfernalGreavesRaktaBlood,varInfernalGreavesDragonScale,varInfernalGreavesSuccess)
    varInfernalGreavesPrice = varItemPrice;

    fnArmorSubPrice(varInfernalShouldersGold,varInfernalShouldersIron,varInfernalShouldersLeather,varInfernalShouldersSelentine,varInfernalShouldersLeenspar,varInfernalShouldersTheyril,varInfernalShouldersFiendClaw,varInfernalShouldersRaktaBlood,varInfernalShouldersDragonScale,varInfernalShouldersSuccess)
    varInfernalShouldersPrice = varItemPrice;

    fnArmorSubPrice(varInfernalGirdleGold,varInfernalGirdleIron,varInfernalGirdleLeather,varInfernalGirdleSelentine,varInfernalGirdleLeenspar,varInfernalGirdleTheyril,varInfernalGirdleFiendClaw,varInfernalGirdleRaktaBlood,varInfernalGirdleDragonScale,varInfernalGirdleSuccess)
    varInfernalGirdlePrice = varItemPrice;

    fnArmorSubPrice(varInfernalHelmetGold,varInfernalHelmetIron,varInfernalHelmetLeather,varInfernalHelmetSelentine,varInfernalHelmetLeenspar,varInfernalHelmetTheyril,varInfernalHelmetFiendClaw,varInfernalHelmetRaktaBlood,varInfernalHelmetDragonScale,varInfernalHelmetSuccess)
    varInfernalHelmetPrice = varItemPrice;

    fnArmorSubPrice(varInfernalCuirassGold,varInfernalCuirassIron,varInfernalCuirassLeather,varInfernalCuirassSelentine,varInfernalCuirassLeenspar,varInfernalCuirassTheyril,varInfernalCuirassFiendClaw,varInfernalCuirassRaktaBlood,varInfernalCuirassDragonScale,varInfernalCuirassSuccess)
    varInfernalCuirassPrice = varItemPrice;

    fnArmorSubPrice(varInfernalSetGold,varInfernalSetIron,varInfernalSetLeather,varInfernalSetSelentine,varInfernalSetLeenspar,varInfernalSetTheyril,varInfernalSetFiendClaw,varInfernalSetRaktaBlood,varInfernalSetDragonScale,varInfernalSetSuccess)
    varInfernalSetPrice = varItemPrice;
}

// a=Gold, b=Iron Quantity, c=Leather Quantity, d=Selentine Quantity, e=Leenspar Quantity, f=Theyril Quantity, g=Fiend Claw Quantity, h=RaktaBlood Quantity, i=Dragon Scale Quantity, j=Success Rate
//Dragon Calculations
function fnDragon()
{
    fnArmorSubPrice(varDragonBootsGold,varDragonBootsIron,varDragonBootsLeather,varDragonBootsSelentine,varDragonBootsLeenspar,varDragonBootsTheyril,varDragonBootsFiendClaw,varDragonBootsRaktaBlood,varDragonBootsDragonScale,varDragonBootsSuccess)
    varDragonBootsPrice = varItemPrice;

    fnArmorSubPrice(varDragonGauntletsGold,varDragonGauntletsIron,varDragonGauntletsLeather,varDragonGauntletsSelentine,varDragonGauntletsLeenspar,varDragonGauntletsTheyril,varDragonGauntletsFiendClaw,varDragonGauntletsRaktaBlood,varDragonGauntletsDragonScale,varDragonGauntletsSuccess)
    varDragonGauntletsPrice = varItemPrice;

    fnArmorSubPrice(varDragonGreavesGold,varDragonGreavesIron,varDragonGreavesLeather,varDragonGreavesSelentine,varDragonGreavesLeenspar,varDragonGreavesTheyril,varDragonGreavesFiendClaw,varDragonGreavesRaktaBlood,varDragonGreavesDragonScale,varDragonGreavesSuccess)
    varDragonGreavesPrice = varItemPrice;

    fnArmorSubPrice(varDragonShouldersGold,varDragonShouldersIron,varDragonShouldersLeather,varDragonShouldersSelentine,varDragonShouldersLeenspar,varDragonShouldersTheyril,varDragonShouldersFiendClaw,varDragonShouldersRaktaBlood,varDragonShouldersDragonScale,varDragonShouldersSuccess)
    varDragonShouldersPrice = varItemPrice;

    fnArmorSubPrice(varDragonGirdleGold,varDragonGirdleIron,varDragonGirdleLeather,varDragonGirdleSelentine,varDragonGirdleLeenspar,varDragonGirdleTheyril,varDragonGirdleFiendClaw,varDragonGirdleRaktaBlood,varDragonGirdleDragonScale,varDragonGirdleSuccess)
    varDragonGirdlePrice = varItemPrice;

    fnArmorSubPrice(varDragonHelmetGold,varDragonHelmetIron,varDragonHelmetLeather,varDragonHelmetSelentine,varDragonHelmetLeenspar,varDragonHelmetTheyril,varDragonHelmetFiendClaw,varDragonHelmetRaktaBlood,varDragonHelmetDragonScale,varDragonHelmetSuccess)
    varDragonHelmetPrice = varItemPrice;

    fnArmorSubPrice(varDragonCuirassGold,varDragonCuirassIron,varDragonCuirassLeather,varDragonCuirassSelentine,varDragonCuirassLeenspar,varDragonCuirassTheyril,varDragonCuirassFiendClaw,varDragonCuirassRaktaBlood,varDragonCuirassDragonScale,varDragonCuirassSuccess)
    varDragonCuirassPrice = varItemPrice;

    fnArmorSubPrice(varDragonSetGold,varDragonSetIron,varDragonSetLeather,varDragonSetSelentine,varDragonSetLeenspar,varDragonSetTheyril,varDragonSetFiendClaw,varDragonSetRaktaBlood,varDragonSetDragonScale,varDragonSetSuccess)
    varDragonSetPrice = varItemPrice;
}

//Dragon Calculations
function fnBloodcraft()
{
    fnBCSubPrice(varBCChainHauberkGold,varBCChainHauberkIron,varBCChainHauberkLeather,varBCChainHauberkSelentine,varBCChainHauberkLeenspar,varBCChainHauberkTheyril,varBCChainHauberkFiendClaw,varBCChainHauberkRaktaBlood,varBCChainHauberkDragonScale,varBCChainHauberkSuccess,varBCChainHauberkHeart,varBCChainHauberkHagHeart,varBCChainHauberkDwarfHeart,varBCChainHauberkBeastmanTooth,varBCChainHauberkGhostlyDarktaint)
    varBCChainHauberkPrice = varItemPrice;
    
    fnBCSubPrice(varBCChainSetGold,varBCChainSetIron,varBCChainSetLeather,varBCChainSetSelentine,varBCChainSetLeenspar,varBCChainSetTheyril,varBCChainSetFiendClaw,varBCChainSetRaktaBlood,varBCChainSetDragonScale,varBCChainSetSuccess,varBCChainSetHeart,varBCChainSetHagHeart,varBCChainSetDwarfHeart,varBCChainSetBeastmanTooth,varBCChainSetGhostlyDarktaint)
    varBCChainSetPrice = varItemPrice;
    
    fnBCSubPrice(varBCBandedCuirassGold,varBCBandedCuirassIron,varBCBandedCuirassLeather,varBCBandedCuirassSelentine,varBCBandedCuirassLeenspar,varBCBandedCuirassTheyril,varBCBandedCuirassFiendClaw,varBCBandedCuirassRaktaBlood,varBCBandedCuirassDragonScale,varBCBandedCuirassSuccess,varBCBandedCuirassHeart,varBCBandedCuirassHagHeart,varBCBandedCuirassDwarfHeart,varBCBandedCuirassBeastmanTooth,varBCBandedCuirassGhostlyDarktaint)
    varBCBandedCuirassPrice = varItemPrice;
    
    fnBCSubPrice(varBCBandedSetGold,varBCBandedSetIron,varBCBandedSetLeather,varBCBandedSetSelentine,varBCBandedSetLeenspar,varBCBandedSetTheyril,varBCBandedSetFiendClaw,varBCBandedSetRaktaBlood,varBCBandedSetDragonScale,varBCBandedSetSuccess,varBCBandedSetHeart,varBCBandedSetHagHeart,varBCBandedSetDwarfHeart,varBCBandedSetBeastmanTooth,varBCBandedSetGhostlyDarktaint)
    varBCBandedSetPrice = varItemPrice;
    
    fnBCSubPrice(varBCScaleHelmetGold,varBCScaleHelmetIron,varBCScaleHelmetLeather,varBCScaleHelmetSelentine,varBCScaleHelmetLeenspar,varBCScaleHelmetTheyril,varBCScaleHelmetFiendClaw,varBCScaleHelmetRaktaBlood,varBCScaleHelmetDragonScale,varBCScaleHelmetSuccess,varBCScaleHelmetHeart,varBCScaleHelmetHagHeart,varBCScaleHelmetDwarfHeart,varBCScaleHelmetBeastmanTooth,varBCScaleHelmetGhostlyDarktaint)
    varBCScaleHelmetPrice = varItemPrice;
    
    fnBCSubPrice(varBCScaleCuirassGold,varBCScaleCuirassIron,varBCScaleCuirassLeather,varBCScaleCuirassSelentine,varBCScaleCuirassLeenspar,varBCScaleCuirassTheyril,varBCScaleCuirassFiendClaw,varBCScaleCuirassRaktaBlood,varBCScaleCuirassDragonScale,varBCScaleCuirassSuccess,varBCScaleCuirassHeart,varBCScaleCuirassHagHeart,varBCScaleCuirassDwarfHeart,varBCScaleCuirassBeastmanTooth,varBCScaleCuirassGhostlyDarktaint)
    varBCScaleCuirassPrice = varItemPrice;
    
    fnBCSubPrice(varBCScaleSetGold,varBCScaleSetIron,varBCScaleSetLeather,varBCScaleSetSelentine,varBCScaleSetLeenspar,varBCScaleSetTheyril,varBCScaleSetFiendClaw,varBCScaleSetRaktaBlood,varBCScaleSetDragonScale,varBCScaleSetSuccess,varBCScaleSetHeart,varBCScaleSetHagHeart,varBCScaleSetDwarfHeart,varBCScaleSetBeastmanTooth,varBCScaleSetGhostlyDarktaint)
    varBCScaleSetPrice = varItemPrice;
    
    fnBCSubPrice(varBCPlateHelmetGold,varBCPlateHelmetIron,varBCPlateHelmetLeather,varBCPlateHelmetSelentine,varBCPlateHelmetLeenspar,varBCPlateHelmetTheyril,varBCPlateHelmetFiendClaw,varBCPlateHelmetRaktaBlood,varBCPlateHelmetDragonScale,varBCPlateHelmetSuccess,varBCPlateHelmetHeart,varBCPlateHelmetHagHeart,varBCPlateHelmetDwarfHeart,varBCPlateHelmetBeastmanTooth,varBCPlateHelmetGhostlyDarktaint)
    varBCPlateHelmetPrice = varItemPrice;
    
    fnBCSubPrice(varBCPlateCuirassGold,varBCPlateCuirassIron,varBCPlateCuirassLeather,varBCPlateCuirassSelentine,varBCPlateCuirassLeenspar,varBCPlateCuirassTheyril,varBCPlateCuirassFiendClaw,varBCPlateCuirassRaktaBlood,varBCPlateCuirassDragonScale,varBCPlateCuirassSuccess,varBCPlateCuirassHeart,varBCPlateCuirassHagHeart,varBCPlateCuirassDwarfHeart,varBCPlateCuirassBeastmanTooth,varBCPlateCuirassGhostlyDarktaint)
    varBCPlateCuirassPrice = varItemPrice;
    
    fnBCSubPrice(varBCPlateSetGold,varBCPlateSetIron,varBCPlateSetLeather,varBCPlateSetSelentine,varBCPlateSetLeenspar,varBCPlateSetTheyril,varBCPlateSetFiendClaw,varBCPlateSetRaktaBlood,varBCPlateSetDragonScale,varBCPlateSetSuccess,varBCPlateSetHeart,varBCPlateSetHagHeart,varBCPlateSetDwarfHeart,varBCPlateSetBeastmanTooth,varBCPlateSetGhostlyDarktaint)
    varBCPlateSetPrice = varItemPrice;
    
    fnBCSubPrice(varBCFullPlateHelmetGold,varBCFullPlateHelmetIron,varBCFullPlateHelmetLeather,varBCFullPlateHelmetSelentine,varBCFullPlateHelmetLeenspar,varBCFullPlateHelmetTheyril,varBCFullPlateHelmetFiendClaw,varBCFullPlateHelmetRaktaBlood,varBCFullPlateHelmetDragonScale,varBCFullPlateHelmetSuccess,varBCFullPlateHelmetHeart,varBCFullPlateHelmetHagHeart,varBCFullPlateHelmetDwarfHeart,varBCFullPlateHelmetBeastmanTooth,varBCFullPlateHelmetGhostlyDarktaint)
    varBCFullPlateHelmetPrice = varItemPrice;
    
    fnBCSubPrice(varBCFullPlateCuirassGold,varBCFullPlateCuirassIron,varBCFullPlateCuirassLeather,varBCFullPlateCuirassSelentine,varBCFullPlateCuirassLeenspar,varBCFullPlateCuirassTheyril,varBCFullPlateCuirassFiendClaw,varBCFullPlateCuirassRaktaBlood,varBCFullPlateCuirassDragonScale,varBCFullPlateCuirassSuccess,varBCFullPlateCuirassHeart,varBCFullPlateCuirassHagHeart,varBCFullPlateCuirassDwarfHeart,varBCFullPlateCuirassBeastmanTooth,varBCFullPlateCuirassGhostlyDarktaint)
    varBCFullPlateCuirassPrice = varItemPrice;
    
    fnBCSubPrice(varBCFullPlateSetGold,varBCFullPlateSetIron,varBCFullPlateSetLeather,varBCFullPlateSetSelentine,varBCFullPlateSetLeenspar,varBCFullPlateSetTheyril,varBCFullPlateSetFiendClaw,varBCFullPlateSetRaktaBlood,varBCFullPlateSetDragonScale,varBCFullPlateSetSuccess,varBCFullPlateSetHeart,varBCFullPlateSetHagHeart,varBCFullPlateSetDwarfHeart,varBCFullPlateSetBeastmanTooth,varBCFullPlateSetGhostlyDarktaint)
    varBCFullPlateSetPrice = varItemPrice;
    
    fnBCSubPrice(varBCInfernalHelmetGold,varBCInfernalHelmetIron,varBCInfernalHelmetLeather,varBCInfernalHelmetSelentine,varBCInfernalHelmetLeenspar,varBCInfernalHelmetTheyril,varBCInfernalHelmetFiendClaw,varBCInfernalHelmetRaktaBlood,varBCInfernalHelmetDragonScale,varBCInfernalHelmetSuccess,varBCInfernalHelmetHeart,varBCInfernalHelmetHagHeart,varBCInfernalHelmetDwarfHeart,varBCInfernalHelmetBeastmanTooth,varBCInfernalHelmetGhostlyDarktaint)
    varBCInfernalHelmetPrice = varItemPrice;
    
    fnBCSubPrice(varBCInfernalCuirassGold,varBCInfernalCuirassIron,varBCInfernalCuirassLeather,varBCInfernalCuirassSelentine,varBCInfernalCuirassLeenspar,varBCInfernalCuirassTheyril,varBCInfernalCuirassFiendClaw,varBCInfernalCuirassRaktaBlood,varBCInfernalCuirassDragonScale,varBCInfernalCuirassSuccess,varBCInfernalCuirassHeart,varBCInfernalCuirassHagHeart,varBCInfernalCuirassDwarfHeart,varBCInfernalCuirassBeastmanTooth,varBCInfernalCuirassGhostlyDarktaint)
    varBCInfernalCuirassPrice = varItemPrice;
    
    fnBCSubPrice(varBCInfernalSetGold,varBCInfernalSetIron,varBCInfernalSetLeather,varBCInfernalSetSelentine,varBCInfernalSetLeenspar,varBCInfernalSetTheyril,varBCInfernalSetFiendClaw,varBCInfernalSetRaktaBlood,varBCInfernalSetDragonScale,varBCInfernalSetSuccess,varBCInfernalSetHeart,varBCInfernalSetHagHeart,varBCInfernalSetDwarfHeart,varBCInfernalSetBeastmanTooth,varBCInfernalSetGhostlyDarktaint)
    varBCInfernalSetPrice = varItemPrice;
    
    fnBCSubPrice(varBCDragonHelmetGold,varBCDragonHelmetIron,varBCDragonHelmetLeather,varBCDragonHelmetSelentine,varBCDragonHelmetLeenspar,varBCDragonHelmetTheyril,varBCDragonHelmetFiendClaw,varBCDragonHelmetRaktaBlood,varBCDragonHelmetDragonScale,varBCDragonHelmetSuccess,varBCDragonHelmetHeart,varBCDragonHelmetHagHeart,varBCDragonHelmetDwarfHeart,varBCDragonHelmetBeastmanTooth,varBCDragonHelmetGhostlyDarktaint)
    varBCDragonHelmetPrice = varItemPrice;
    
    fnBCSubPrice(varBCDragonCuirassGold,varBCDragonCuirassIron,varBCDragonCuirassLeather,varBCDragonCuirassSelentine,varBCDragonCuirassLeenspar,varBCDragonCuirassTheyril,varBCDragonCuirassFiendClaw,varBCDragonCuirassRaktaBlood,varBCDragonCuirassDragonScale,varBCDragonCuirassSuccess,varBCDragonCuirassHeart,varBCDragonCuirassHagHeart,varBCDragonCuirassDwarfHeart,varBCDragonCuirassBeastmanTooth,varBCDragonCuirassGhostlyDarktaint)
    varBCDragonCuirassPrice = varItemPrice;
    
    fnBCSubPrice(varBCDragonSetGold,varBCDragonSetIron,varBCDragonSetLeather,varBCDragonSetSelentine,varBCDragonSetLeenspar,varBCDragonSetTheyril,varBCDragonSetFiendClaw,varBCDragonSetRaktaBlood,varBCDragonSetDragonScale,varBCDragonSetSuccess,varBCDragonSetHeart,varBCDragonSetHagHeart,varBCDragonSetDwarfHeart,varBCDragonSetBeastmanTooth,varBCDragonSetGhostlyDarktaint)
    varBCDragonSetPrice = varItemPrice;
}

function fnReloadArmorPrices()
{
    //Chain Prices
    document.getElementById('ChainSleevesPrice').value = varChainSleevesPrice;
    document.getElementById('ChainLeggingsPrice').value = varChainLeggingsPrice;
    document.getElementById('ChainHauberkPrice').value = varChainHauberkPrice;
    document.getElementById('ChainSetPrice').value = varChainSetPrice;

    //Banded Prices
    document.getElementById('BandedElbowsPrice').value = varBandedElbowsPrice;
    document.getElementById('BandedGreavesPrice').value = varBandedGreavesPrice;
    document.getElementById('BandedShouldersPrice').value = varBandedShouldersPrice;
    document.getElementById('BandedGirdlePrice').value = varBandedGirdlePrice;
    document.getElementById('BandedVambracesPrice').value = varBandedVambracesPrice;
    document.getElementById('BandedLeggingsPrice').value = varBandedLeggingsPrice;
    document.getElementById('BandedHelmetPrice').value = varBandedHelmetPrice;
    document.getElementById('BandedCuirassPrice').value = varBandedCuirassPrice;
    document.getElementById('BandedSetPrice').value = varBandedSetPrice;

    //Scale Prices
    document.getElementById('ScaleBootsPrice').value = varScaleBootsPrice;
    document.getElementById('ScaleGauntletsPrice').value = varScaleGauntletsPrice;
    document.getElementById('ScaleElbowsPrice').value = varScaleElbowsPrice;
    document.getElementById('ScaleGreavesPrice').value = varScaleGreavesPrice;
    document.getElementById('ScaleShouldersPrice').value = varScaleShouldersPrice;
    document.getElementById('ScaleGirdlePrice').value = varScaleGirdlePrice;
    document.getElementById('ScaleVambracesPrice').value = varScaleVambracesPrice;
    document.getElementById('ScaleLeggingsPrice').value = varScaleLeggingsPrice;
    document.getElementById('ScaleHelmetPrice').value = varScaleHelmetPrice;
    document.getElementById('ScaleCuirassPrice').value = varScaleCuirassPrice;
    document.getElementById('ScaleSetPrice').value = varScaleSetPrice;

    //Plate Prices
    document.getElementById('PlateCoutersPrice').value = varPlateCoutersPrice;
    document.getElementById('PlateGreavesPrice').value = varPlateGreavesPrice;
    document.getElementById('PlateShouldersPrice').value = varPlateShouldersPrice;
    document.getElementById('PlateGirdlePrice').value = varPlateGirdlePrice;
    document.getElementById('PlateHelmetPrice').value = varPlateHelmetPrice;
    document.getElementById('PlateCuirassPrice').value = varPlateCuirassPrice;
    document.getElementById('PlateSetPrice').value = varPlateSetPrice;

    //FullPlate Prices
    document.getElementById('FullPlateBootsPrice').value = varFullPlateBootsPrice;
    document.getElementById('FullPlateGauntletsPrice').value = varFullPlateGauntletsPrice;
    document.getElementById('FullPlateCoutersPrice').value = varFullPlateCoutersPrice;
    document.getElementById('FullPlateGreavesPrice').value = varFullPlateGreavesPrice;
    document.getElementById('FullPlateShouldersPrice').value = varFullPlateShouldersPrice;
    document.getElementById('FullPlateGirdlePrice').value = varFullPlateGirdlePrice;
    document.getElementById('FullPlateVambracesPrice').value = varFullPlateVambracesPrice;
    document.getElementById('FullPlateLeggingsPrice').value = varFullPlateLeggingsPrice;
    document.getElementById('FullPlateHelmetPrice').value = varFullPlateHelmetPrice;
    document.getElementById('FullPlateCuirassPrice').value = varFullPlateCuirassPrice;
    document.getElementById('FullPlateSetPrice').value = varFullPlateSetPrice;

    //Infernal Prices
    document.getElementById('InfernalBootsPrice').value = varInfernalBootsPrice;
    document.getElementById('InfernalGauntletsPrice').value = varInfernalGauntletsPrice;
    document.getElementById('InfernalCoutersPrice').value = varInfernalCoutersPrice;
    document.getElementById('InfernalGreavesPrice').value = varInfernalGreavesPrice;
    document.getElementById('InfernalShouldersPrice').value = varInfernalShouldersPrice;
    document.getElementById('InfernalGirdlePrice').value = varInfernalGirdlePrice;
    document.getElementById('InfernalHelmetPrice').value = varInfernalHelmetPrice;
    document.getElementById('InfernalCuirassPrice').value = varInfernalCuirassPrice;
    document.getElementById('InfernalSetPrice').value = varInfernalSetPrice;

    //Dragon Prices
    document.getElementById('DragonBootsPrice').value = varDragonBootsPrice;
    document.getElementById('DragonGauntletsPrice').value = varDragonGauntletsPrice;
    document.getElementById('DragonGreavesPrice').value = varDragonGreavesPrice;
    document.getElementById('DragonShouldersPrice').value = varDragonShouldersPrice;
    document.getElementById('DragonGirdlePrice').value = varDragonGirdlePrice;
    document.getElementById('DragonHelmetPrice').value = varDragonHelmetPrice;
    document.getElementById('DragonCuirassPrice').value = varDragonCuirassPrice;
    document.getElementById('DragonSetPrice').value = varDragonSetPrice;
    
    //Bloodcraft Prices
    document.getElementById('BCChainHauberkPrice').value = varBCChainHauberkPrice;
    document.getElementById('BCChainSetPrice').value = varBCChainSetPrice;
    document.getElementById('BCBandedCuirassPrice').value = varBCBandedCuirassPrice;
    document.getElementById('BCBandedSetPrice').value = varBCBandedSetPrice;
    document.getElementById('BCScaleHelmetPrice').value = varBCScaleHelmetPrice;
    document.getElementById('BCScaleCuirassPrice').value = varBCScaleCuirassPrice;
    document.getElementById('BCScaleSetPrice').value = varBCScaleSetPrice;
    document.getElementById('BCPlateHelmetPrice').value = varBCPlateHelmetPrice;
    document.getElementById('BCPlateCuirassPrice').value = varBCPlateCuirassPrice;
    document.getElementById('BCPlateSetPrice').value = varBCPlateSetPrice;
    document.getElementById('BCFullPlateHelmetPrice').value = varBCFullPlateHelmetPrice;
    document.getElementById('BCFullPlateCuirassPrice').value = varBCFullPlateCuirassPrice;
    document.getElementById('BCFullPlateSetPrice').value = varBCFullPlateSetPrice;
    document.getElementById('BCInfernalHelmetPrice').value = varBCInfernalHelmetPrice;
    document.getElementById('BCInfernalCuirassPrice').value = varBCInfernalCuirassPrice;
    document.getElementById('BCInfernalSetPrice').value = varBCInfernalSetPrice;
    document.getElementById('BCDragonHelmetPrice').value = varBCDragonHelmetPrice;
    document.getElementById('BCDragonCuirassPrice').value = varBCDragonCuirassPrice;
    document.getElementById('BCDragonSetPrice').value = varBCDragonSetPrice;
    
    //Armor Prices
    document.getElementById('ArmorTotal').value = varArmorTotal;
    document.getElementById('ArmorGoldTotal').value = varArmorGoldTotal;
    document.getElementById('ArmorIronTotal').value = varArmorIronTotal;
    document.getElementById('ArmorLeatherTotal').value = varArmorLeatherTotal;
    document.getElementById('ArmorSelentineTotal').value = varArmorSelentineTotal;
    document.getElementById('ArmorLeensparTotal').value = varArmorLeensparTotal;
    document.getElementById('ArmorTheyrilTotal').value = varArmorTheyrilTotal;
    document.getElementById('ArmorFiendClawTotal').value = varArmorFiendClawTotal;
    document.getElementById('ArmorRaktaBloodTotal').value = varArmorRaktaBloodTotal;
    document.getElementById('ArmorDragonScaleTotal').value = varArmorDragonScaleTotal;
    document.getElementById('ArmorHeartTotal').value = varArmorHeartTotal;
    document.getElementById('ArmorHagHeartTotal').value = varArmorHagHeartTotal;
    document.getElementById('ArmorDwarfHeartTotal').value = varArmorDwarfHeartTotal;
    document.getElementById('ArmorBeastmanToothTotal').value = varArmorBeastmanToothTotal;
    document.getElementById('ArmorGhostlyDarktaintTotal').value = varArmorGhostlyDarktaintTotal;
}

function fnArmorInitialize()
{
    varArmorTotal = document.getElementById("ArmorTotal").value;
    varArmorGoldTotal = document.getElementById("ArmorGoldTotal").value;
    varArmorIronTotal = document.getElementById("ArmorIronTotal").value;
    varArmorLeatherTotal = document.getElementById("ArmorLeatherTotal").value;
    varArmorSelentineTotal = document.getElementById("ArmorSelentineTotal").value;
    varArmorLeensparTotal = document.getElementById("ArmorLeensparTotal").value;
    varArmorTheyrilTotal = document.getElementById("ArmorTheyrilTotal").value;
    varArmorFiendClawTotal = document.getElementById("ArmorFiendClawTotal").value;
    varArmorRaktaBloodTotal = document.getElementById("ArmorRaktaBloodTotal").value;
    varArmorDragonScaleTotal = document.getElementById("ArmorDragonScaleTotal").value;
    varArmorHeartTotal = document.getElementById("ArmorHeartTotal").value;
    varArmorHagHeartTotal = document.getElementById("ArmorHagHeartTotal").value;
    varArmorDwarfHeartTotal = document.getElementById("ArmorDwarfHeartTotal").value;
    varArmorBeastmanToothTotal = document.getElementById("ArmorBeastmanToothTotal").value;
    varArmorGhostlyDarktaintTotal = document.getElementById("ArmorGhostlyDarktaintTotal").value;

    // *** CHAIN VARIABLES ***
    // Chain Sleeves variables intialized into memory
    varChainSleevesQuantity = document.getElementById("ChainSleevesQuantity").value;
    varChainSleevesPrice = document.getElementById("ChainSleevesPrice").value;
    varChainSleevesSuccess = document.getElementById("ChainSleevesSuccess").value;
    varChainSleevesGold = 0
    varChainSleevesIron = 2
    varChainSleevesLeather = 1
    varChainSleevesSelentine = 0
    varChainSleevesLeenspar = 0
    varChainSleevesFiendClaw = 0
    varChainSleevesRaktaBlood = 0
    varChainSleevesTheyril = 0
    varChainSleevesDragonScale = 0


    // Chain Legging variables intialized into memory
    varChainLeggingsQuantity = document.getElementById("ChainLeggingsQuantity").value;
    varChainLeggingsPrice = document.getElementById("ChainLeggingsPrice").value;
    varChainLeggingsSuccess = document.getElementById("ChainLeggingsSuccess").value;
    varChainLeggingsGold = 0
    varChainLeggingsIron = 2
    varChainLeggingsLeather = 1
    varChainLeggingsSelentine = 0
    varChainLeggingsLeenspar = 0
    varChainLeggingsFiendClaw = 0
    varChainLeggingsRaktaBlood = 0
    varChainLeggingsTheyril = 0
    varChainLeggingsDragonScale = 0

    // Chain Hauberk variables intialized into memory
    varChainHauberkQuantity = document.getElementById("ChainHauberkQuantity").value;
    varChainHauberkPrice = document.getElementById("ChainHauberkPrice").value;
    varChainHauberkSuccess = document.getElementById("ChainHauberkSuccess").value;
    varChainHauberkGold = 0
    varChainHauberkIron = 8
    varChainHauberkLeather = 2
    varChainHauberkSelentine = 0
    varChainHauberkLeenspar = 0
    varChainHauberkFiendClaw = 0
    varChainHauberkRaktaBlood = 0
    varChainHauberkTheyril = 0
    varChainHauberkDragonScale = 0

    // Chain Set variables intialized into memory
    varChainSetQuantity = document.getElementById("ChainSetQuantity").value;
    varChainSetPrice = document.getElementById("ChainSetPrice").value;
    varChainSetSuccess = document.getElementById("ChainSetSuccess").value;
    varChainSetGold = 0
    varChainSetIron = 12
    varChainSetLeather = 4
    varChainSetSelentine = 0
    varChainSetLeenspar = 0
    varChainSetFiendClaw = 0
    varChainSetRaktaBlood = 0
    varChainSetTheyril = 0
    varChainSetDragonScale = 0

    // *** BANDED VARIABLES ***
    // Banded Elbows variables intialized into memory
    varBandedElbowsQuantity = document.getElementById("BandedElbowsQuantity").value;
    varBandedElbowsPrice = document.getElementById("BandedElbowsPrice").value;
    varBandedElbowsSuccess = document.getElementById("BandedElbowsSuccess").value;
    varBandedElbowsGold = 5
    varBandedElbowsIron = 3
    varBandedElbowsLeather = 1
    varBandedElbowsSelentine = 0
    varBandedElbowsLeenspar = 0
    varBandedElbowsFiendClaw = 0
    varBandedElbowsRaktaBlood = 0
    varBandedElbowsTheyril = 0
    varBandedElbowsDragonScale = 0

    // Banded Greaves variables intialized into memory
    varBandedGreavesQuantity = document.getElementById("BandedGreavesQuantity").value;
    varBandedGreavesPrice = document.getElementById("BandedGreavesPrice").value;
    varBandedGreavesSuccess = document.getElementById("BandedGreavesSuccess").value;
    varBandedGreavesGold = 5
    varBandedGreavesIron = 3
    varBandedGreavesLeather = 1
    varBandedGreavesSelentine = 0
    varBandedGreavesLeenspar = 0
    varBandedGreavesFiendClaw = 0
    varBandedGreavesRaktaBlood = 0
    varBandedGreavesTheyril = 0
    varBandedGreavesDragonScale = 0

    // Banded Shoulders variables intialized into memory
    varBandedShouldersQuantity = document.getElementById("BandedShouldersQuantity").value;
    varBandedShouldersPrice = document.getElementById("BandedShouldersPrice").value;
    varBandedShouldersSuccess = document.getElementById("BandedShouldersSuccess").value;
    varBandedShouldersGold = 5
    varBandedShouldersIron = 3
    varBandedShouldersLeather = 1
    varBandedShouldersSelentine = 0
    varBandedShouldersLeenspar = 0
    varBandedShouldersFiendClaw = 0
    varBandedShouldersRaktaBlood = 0
    varBandedShouldersTheyril = 0
    varBandedShouldersDragonScale = 0

    // Banded Girdle variables intialized into memory
    varBandedGirdleQuantity = document.getElementById("BandedGirdleQuantity").value;
    varBandedGirdlePrice = document.getElementById("BandedGirdlePrice").value;
    varBandedGirdleSuccess = document.getElementById("BandedGirdleSuccess").value;
    varBandedGirdleGold = 5
    varBandedGirdleIron = 3
    varBandedGirdleLeather = 1
    varBandedGirdleSelentine = 0
    varBandedGirdleLeenspar = 0
    varBandedGirdleFiendClaw = 0
    varBandedGirdleRaktaBlood = 0
    varBandedGirdleTheyril = 0
    varBandedGirdleDragonScale = 0

    // Banded Vambraces variables intialized into memory
    varBandedVambracesQuantity = document.getElementById("BandedVambracesQuantity").value;
    varBandedVambracesPrice = document.getElementById("BandedVambracesPrice").value;
    varBandedVambracesSuccess = document.getElementById("BandedVambracesSuccess").value;
    varBandedVambracesGold = 5
    varBandedVambracesIron = 3
    varBandedVambracesLeather = 1
    varBandedVambracesSelentine = 0
    varBandedVambracesLeenspar = 0
    varBandedVambracesFiendClaw = 0
    varBandedVambracesRaktaBlood = 0
    varBandedVambracesTheyril = 0
    varBandedVambracesDragonScale = 0

    // Banded Leggings variables intialized into memory
    varBandedLeggingsQuantity = document.getElementById("BandedLeggingsQuantity").value;
    varBandedLeggingsPrice = document.getElementById("BandedLeggingsPrice").value;
    varBandedLeggingsSuccess = document.getElementById("BandedLeggingsSuccess").value;
    varBandedLeggingsGold = 5
    varBandedLeggingsIron = 3
    varBandedLeggingsLeather = 1
    varBandedLeggingsSelentine = 0
    varBandedLeggingsLeenspar = 0
    varBandedLeggingsFiendClaw = 0
    varBandedLeggingsRaktaBlood = 0
    varBandedLeggingsTheyril = 0
    varBandedLeggingsDragonScale = 0

    // Banded Helmet variables intialized into memory
    varBandedHelmetQuantity = document.getElementById("BandedHelmetQuantity").value;
    varBandedHelmetPrice = document.getElementById("BandedHelmetPrice").value;
    varBandedHelmetSuccess = document.getElementById("BandedHelmetSuccess").value;
    varBandedHelmetGold = 6
    varBandedHelmetIron = 5
    varBandedHelmetLeather = 2
    varBandedHelmetSelentine = 0
    varBandedHelmetLeenspar = 0
    varBandedHelmetFiendClaw = 0
    varBandedHelmetRaktaBlood = 0
    varBandedHelmetTheyril = 0
    varBandedHelmetDragonScale = 0

    // Banded Cuirass variables intialized into memory
    varBandedCuirassQuantity = document.getElementById("BandedCuirassQuantity").value;
    varBandedCuirassPrice = document.getElementById("BandedCuirassPrice").value;
    varBandedCuirassSuccess = document.getElementById("BandedCuirassSuccess").value;
    varBandedCuirassGold = 10
    varBandedCuirassIron = 12
    varBandedCuirassLeather = 4
    varBandedCuirassSelentine = 0
    varBandedCuirassLeenspar = 0
    varBandedCuirassFiendClaw = 0
    varBandedCuirassRaktaBlood = 0
    varBandedCuirassTheyril = 0
    varBandedCuirassDragonScale = 0

    // Banded Set variables intialized into memory
    varBandedSetQuantity = document.getElementById("BandedSetQuantity").value;
    varBandedSetPrice = document.getElementById("BandedSetPrice").value;
    varBandedSetSuccess = document.getElementById("BandedSetSuccess").value;
    varBandedSetGold = 45
    varBandedSetIron = 36
    varBandedSetLeather = 12
    varBandedSetSelentine = 0
    varBandedSetLeenspar = 0
    varBandedSetFiendClaw = 0
    varBandedSetRaktaBlood = 0
    varBandedSetTheyril = 0
    varBandedSetDragonScale = 0

    // *** SCALE VARIABLES ***
    // Scale Boots variables intialized into memory
    varScaleBootsQuantity = document.getElementById("ScaleBootsQuantity").value;
    varScaleBootsPrice = document.getElementById("ScaleBootsPrice").value;
    varScaleBootsSuccess = document.getElementById("ScaleBootsSuccess").value;
    varScaleBootsGold = 7
    varScaleBootsIron = 5
    varScaleBootsLeather = 2
    varScaleBootsSelentine = 0
    varScaleBootsLeenspar = 0
    varScaleBootsFiendClaw = 0
    varScaleBootsRaktaBlood = 0
    varScaleBootsTheyril = 0
    varScaleBootsDragonScale = 0

    // Scale Gauntlets variables intialized into memory
    varScaleGauntletsQuantity = document.getElementById("ScaleGauntletsQuantity").value;
    varScaleGauntletsPrice = document.getElementById("ScaleGauntletsPrice").value;
    varScaleGauntletsSuccess = document.getElementById("ScaleGauntletsSuccess").value;
    varScaleGauntletsGold = 7
    varScaleGauntletsIron = 5
    varScaleGauntletsLeather = 2
    varScaleGauntletsSelentine = 0
    varScaleGauntletsLeenspar = 0
    varScaleGauntletsFiendClaw = 0
    varScaleGauntletsRaktaBlood = 0
    varScaleGauntletsTheyril = 0
    varScaleGauntletsDragonScale = 0

    // Scale Elbows variables intialized into memory
    varScaleElbowsQuantity = document.getElementById("ScaleElbowsQuantity").value;
    varScaleElbowsPrice = document.getElementById("ScaleElbowsPrice").value;
    varScaleElbowsSuccess = document.getElementById("ScaleElbowsSuccess").value;
    varScaleElbowsGold = 7
    varScaleElbowsIron = 5
    varScaleElbowsLeather = 2
    varScaleElbowsSelentine = 0
    varScaleElbowsLeenspar = 0
    varScaleElbowsFiendClaw = 0
    varScaleElbowsRaktaBlood = 0
    varScaleElbowsTheyril = 0
    varScaleElbowsDragonScale = 0

    // Scale Greaves variables intialized into memory
    varScaleGreavesQuantity = document.getElementById("ScaleGreavesQuantity").value;
    varScaleGreavesPrice = document.getElementById("ScaleGreavesPrice").value;
    varScaleGreavesSuccess = document.getElementById("ScaleGreavesSuccess").value;
    varScaleGreavesGold = 7
    varScaleGreavesIron = 5
    varScaleGreavesLeather = 2
    varScaleGreavesSelentine = 0
    varScaleGreavesLeenspar = 0
    varScaleGreavesFiendClaw = 0
    varScaleGreavesRaktaBlood = 0
    varScaleGreavesTheyril = 0
    varScaleGreavesDragonScale = 0

    // Scale Shoulders variables intialized into memory
    varScaleShouldersQuantity = document.getElementById("ScaleShouldersQuantity").value;
    varScaleShouldersPrice = document.getElementById("ScaleShouldersPrice").value;
    varScaleShouldersSuccess = document.getElementById("ScaleShouldersSuccess").value;
    varScaleShouldersGold = 7
    varScaleShouldersIron = 5
    varScaleShouldersLeather = 2
    varScaleShouldersSelentine = 0
    varScaleShouldersLeenspar = 0
    varScaleShouldersFiendClaw = 0
    varScaleShouldersRaktaBlood = 0
    varScaleShouldersTheyril = 0
    varScaleShouldersDragonScale = 0

    // Scale Girdle variables intialized into memory
    varScaleGirdleQuantity = document.getElementById("ScaleGirdleQuantity").value;
    varScaleGirdlePrice = document.getElementById("ScaleGirdlePrice").value;
    varScaleGirdleSuccess = document.getElementById("ScaleGirdleSuccess").value;
    varScaleGirdleGold = 7
    varScaleGirdleIron = 5
    varScaleGirdleLeather = 2
    varScaleGirdleSelentine = 0
    varScaleGirdleLeenspar = 0
    varScaleGirdleFiendClaw = 0
    varScaleGirdleRaktaBlood = 0
    varScaleGirdleTheyril = 0
    varScaleGirdleDragonScale = 0

    // Scale Vambraces variables intialized into memory
    varScaleVambracesQuantity = document.getElementById("ScaleVambracesQuantity").value;
    varScaleVambracesPrice = document.getElementById("ScaleVambracesPrice").value;
    varScaleVambracesSuccess = document.getElementById("ScaleVambracesSuccess").value;
    varScaleVambracesGold = 7
    varScaleVambracesIron = 5
    varScaleVambracesLeather = 2
    varScaleVambracesSelentine = 0
    varScaleVambracesLeenspar = 0
    varScaleVambracesFiendClaw = 0
    varScaleVambracesRaktaBlood = 0
    varScaleVambracesTheyril = 0
    varScaleVambracesDragonScale = 0

    // Scale Leggings variables intialized into memory
    varScaleLeggingsQuantity = document.getElementById("ScaleLeggingsQuantity").value;
    varScaleLeggingsPrice = document.getElementById("ScaleLeggingsPrice").value;
    varScaleLeggingsSuccess = document.getElementById("ScaleLeggingsSuccess").value;
    varScaleLeggingsGold = 8
    varScaleLeggingsIron = 5
    varScaleLeggingsLeather = 2
    varScaleLeggingsSelentine = 0
    varScaleLeggingsLeenspar = 0
    varScaleLeggingsFiendClaw = 0
    varScaleLeggingsRaktaBlood = 0
    varScaleLeggingsTheyril = 0
    varScaleLeggingsDragonScale = 0

    // Scale Helmet variables intialized into memory
    varScaleHelmetQuantity = document.getElementById("ScaleHelmetQuantity").value;
    varScaleHelmetPrice = document.getElementById("ScaleHelmetPrice").value;
    varScaleHelmetSuccess = document.getElementById("ScaleHelmetSuccess").value;
    varScaleHelmetGold = 10
    varScaleHelmetIron = 10
    varScaleHelmetLeather = 3
    varScaleHelmetSelentine = 0
    varScaleHelmetLeenspar = 0
    varScaleHelmetFiendClaw = 0
    varScaleHelmetRaktaBlood = 0
    varScaleHelmetTheyril = 0
    varScaleHelmetDragonScale = 0

    // Scale Cuirass variables intialized into memory
    varScaleCuirassQuantity = document.getElementById("ScaleCuirassQuantity").value;
    varScaleCuirassPrice = document.getElementById("ScaleCuirassPrice").value;
    varScaleCuirassSuccess = document.getElementById("ScaleCuirassSuccess").value;
    varScaleCuirassGold = 15
    varScaleCuirassIron = 20
    varScaleCuirassLeather = 4
    varScaleCuirassSelentine = 0
    varScaleCuirassLeenspar = 0
    varScaleCuirassFiendClaw = 0
    varScaleCuirassRaktaBlood = 0
    varScaleCuirassTheyril = 0
    varScaleCuirassDragonScale = 0

    // Scale Set variables intialized into memory
    varScaleSetQuantity = document.getElementById("ScaleSetQuantity").value;
    varScaleSetPrice = document.getElementById("ScaleSetPrice").value;
    varScaleSetSuccess = document.getElementById("ScaleSetSuccess").value;
    varScaleSetGold = 82
    varScaleSetIron = 70
    varScaleSetLeather = 23
    varScaleSetSelentine = 0
    varScaleSetLeenspar = 0
    varScaleSetFiendClaw = 0
    varScaleSetRaktaBlood = 0
    varScaleSetTheyril = 0
    varScaleSetDragonScale = 0

    // *** PLATE VARIABLES ***
    // Plate Couters variables intialized into memory
    varPlateCoutersQuantity = document.getElementById("PlateCoutersQuantity").value;
    varPlateCoutersPrice = document.getElementById("PlateCoutersPrice").value;
    varPlateCoutersSuccess = document.getElementById("PlateCoutersSuccess").value;
    varPlateCoutersGold = 40
    varPlateCoutersIron = 14
    varPlateCoutersLeather = 4
    varPlateCoutersSelentine = 0
    varPlateCoutersLeenspar = 0
    varPlateCoutersFiendClaw = 0
    varPlateCoutersRaktaBlood = 0
    varPlateCoutersTheyril = 0
    varPlateCoutersDragonScale = 0

    // Plate Greaves variables intialized into memory
    varPlateGreavesQuantity = document.getElementById("PlateGreavesQuantity").value;
    varPlateGreavesPrice = document.getElementById("PlateGreavesPrice").value;
    varPlateGreavesSuccess = document.getElementById("PlateGreavesSuccess").value;
    varPlateGreavesGold = 40
    varPlateGreavesIron = 14
    varPlateGreavesLeather = 4
    varPlateGreavesSelentine = 0
    varPlateGreavesLeenspar = 0
    varPlateGreavesFiendClaw = 0
    varPlateGreavesRaktaBlood = 0
    varPlateGreavesTheyril = 0
    varPlateGreavesDragonScale = 0

    // Plate Shoulders variables intialized into memory
    varPlateShouldersQuantity = document.getElementById("PlateShouldersQuantity").value;
    varPlateShouldersPrice = document.getElementById("PlateShouldersPrice").value;
    varPlateShouldersSuccess = document.getElementById("PlateShouldersSuccess").value;
    varPlateShouldersGold = 40
    varPlateShouldersIron = 14
    varPlateShouldersLeather = 4
    varPlateShouldersSelentine = 0
    varPlateShouldersLeenspar = 0
    varPlateShouldersFiendClaw = 0
    varPlateShouldersRaktaBlood = 0
    varPlateShouldersTheyril = 0
    varPlateShouldersDragonScale = 0

    // Plate Girdle variables intialized into memory
    varPlateGirdleQuantity = document.getElementById("PlateGirdleQuantity").value;
    varPlateGirdlePrice = document.getElementById("PlateGirdlePrice").value;
    varPlateGirdleSuccess = document.getElementById("PlateGirdleSuccess").value;
    varPlateGirdleGold = 40
    varPlateGirdleIron = 14
    varPlateGirdleLeather = 4
    varPlateGirdleSelentine = 0
    varPlateGirdleLeenspar = 0
    varPlateGirdleFiendClaw = 0
    varPlateGirdleRaktaBlood = 0
    varPlateGirdleTheyril = 0
    varPlateGirdleDragonScale = 0

    // Plate Helmet variables intialized into memory
    varPlateHelmetQuantity = document.getElementById("PlateHelmetQuantity").value;
    varPlateHelmetPrice = document.getElementById("PlateHelmetPrice").value;
    varPlateHelmetSuccess = document.getElementById("PlateHelmetSuccess").value;
    varPlateHelmetGold = 55
    varPlateHelmetIron = 20
    varPlateHelmetLeather = 6
    varPlateHelmetSelentine = 0
    varPlateHelmetLeenspar = 0
    varPlateHelmetFiendClaw = 0
    varPlateHelmetRaktaBlood = 0
    varPlateHelmetTheyril = 0
    varPlateHelmetDragonScale = 0

    // Plate Cuirass variables intialized into memory
    varPlateCuirassQuantity = document.getElementById("PlateCuirassQuantity").value;
    varPlateCuirassPrice = document.getElementById("PlateCuirassPrice").value;
    varPlateCuirassSuccess = document.getElementById("PlateCuirassSuccess").value;
    varPlateCuirassGold = 75
    varPlateCuirassIron = 40
    varPlateCuirassLeather = 8
    varPlateCuirassSelentine = 0
    varPlateCuirassLeenspar = 0
    varPlateCuirassFiendClaw = 0
    varPlateCuirassRaktaBlood = 0
    varPlateCuirassTheyril = 0
    varPlateCuirassDragonScale = 0

    // Plate Set variables intialized into memory
    varPlateSetQuantity = document.getElementById("PlateSetQuantity").value;
    varPlateSetPrice = document.getElementById("PlateSetPrice").value;
    varPlateSetSuccess = document.getElementById("PlateSetSuccess").value;
    varPlateSetGold = 290
    varPlateSetIron = 116
    varPlateSetLeather = 30
    varPlateSetSelentine = 0
    varPlateSetLeenspar = 0
    varPlateSetFiendClaw = 0
    varPlateSetRaktaBlood = 0
    varPlateSetTheyril = 0
    varPlateSetDragonScale = 0

    // *** FULL PLATE VARIABLES ***
    // FullPlate Boots variables intialized into memory
    varFullPlateBootsQuantity = document.getElementById("FullPlateBootsQuantity").value;
    varFullPlateBootsPrice = document.getElementById("FullPlateBootsPrice").value;
    varFullPlateBootsSuccess = document.getElementById("FullPlateBootsSuccess").value;
    varFullPlateBootsGold = 50
    varFullPlateBootsIron = 12
    varFullPlateBootsLeather = 4
    varFullPlateBootsSelentine = 1
    varFullPlateBootsLeenspar = 0
    varFullPlateBootsFiendClaw = 0
    varFullPlateBootsRaktaBlood = 0
    varFullPlateBootsTheyril = 0
    varFullPlateBootsDragonScale = 0

    // FullPlate Gauntlets variables intialized into memory
    varFullPlateGauntletsQuantity = document.getElementById("FullPlateGauntletsQuantity").value;
    varFullPlateGauntletsPrice = document.getElementById("FullPlateGauntletsPrice").value;
    varFullPlateGauntletsSuccess = document.getElementById("FullPlateGauntletsSuccess").value;
    varFullPlateGauntletsGold = 50
    varFullPlateGauntletsIron = 12
    varFullPlateGauntletsLeather = 4
    varFullPlateGauntletsSelentine = 1
    varFullPlateGauntletsLeenspar = 0
    varFullPlateGauntletsFiendClaw = 0
    varFullPlateGauntletsRaktaBlood = 0
    varFullPlateGauntletsTheyril = 0
    varFullPlateGauntletsDragonScale = 0

    // FullPlate Couters variables intialized into memory
    varFullPlateCoutersQuantity = document.getElementById("FullPlateCoutersQuantity").value;
    varFullPlateCoutersPrice = document.getElementById("FullPlateCoutersPrice").value;
    varFullPlateCoutersSuccess = document.getElementById("FullPlateCoutersSuccess").value;
    varFullPlateCoutersGold = 50
    varFullPlateCoutersIron = 12
    varFullPlateCoutersLeather = 4
    varFullPlateCoutersSelentine = 1
    varFullPlateCoutersLeenspar = 0
    varFullPlateCoutersFiendClaw = 0
    varFullPlateCoutersRaktaBlood = 0
    varFullPlateCoutersTheyril = 0
    varFullPlateCoutersDragonScale = 0

    // FullPlate Greaves variables intialized into memory
    varFullPlateGreavesQuantity = document.getElementById("FullPlateGreavesQuantity").value;
    varFullPlateGreavesPrice = document.getElementById("FullPlateGreavesPrice").value;
    varFullPlateGreavesSuccess = document.getElementById("FullPlateGreavesSuccess").value;
    varFullPlateGreavesGold = 50
    varFullPlateGreavesIron = 12
    varFullPlateGreavesLeather = 4
    varFullPlateGreavesSelentine = 1
    varFullPlateGreavesLeenspar = 0
    varFullPlateGreavesFiendClaw = 0
    varFullPlateGreavesRaktaBlood = 0
    varFullPlateGreavesTheyril = 0
    varFullPlateGreavesDragonScale = 0

    // FullPlate Shoulders variables intialized into memory
    varFullPlateShouldersQuantity = document.getElementById("FullPlateShouldersQuantity").value;
    varFullPlateShouldersPrice = document.getElementById("FullPlateShouldersPrice").value;
    varFullPlateShouldersSuccess = document.getElementById("FullPlateShouldersSuccess").value;
    varFullPlateShouldersGold = 50
    varFullPlateShouldersIron = 12
    varFullPlateShouldersLeather = 4
    varFullPlateShouldersSelentine = 1
    varFullPlateShouldersLeenspar = 0
    varFullPlateShouldersFiendClaw = 0
    varFullPlateShouldersRaktaBlood = 0
    varFullPlateShouldersTheyril = 0
    varFullPlateShouldersDragonScale = 0

    // FullPlate Girdle variables intialized into memory
    varFullPlateGirdleQuantity = document.getElementById("FullPlateGirdleQuantity").value;
    varFullPlateGirdlePrice = document.getElementById("FullPlateGirdlePrice").value;
    varFullPlateGirdleSuccess = document.getElementById("FullPlateGirdleSuccess").value;
    varFullPlateGirdleGold = 50
    varFullPlateGirdleIron = 12
    varFullPlateGirdleLeather = 4
    varFullPlateGirdleSelentine = 1
    varFullPlateGirdleLeenspar = 0
    varFullPlateGirdleFiendClaw = 0
    varFullPlateGirdleRaktaBlood = 0
    varFullPlateGirdleTheyril = 0
    varFullPlateGirdleDragonScale = 0

    // FullPlate Vambraces variables intialized into memory
    varFullPlateVambracesQuantity = document.getElementById("FullPlateVambracesQuantity").value;
    varFullPlateVambracesPrice = document.getElementById("FullPlateVambracesPrice").value;
    varFullPlateVambracesSuccess = document.getElementById("FullPlateVambracesSuccess").value;
    varFullPlateVambracesGold = 50
    varFullPlateVambracesIron = 12
    varFullPlateVambracesLeather = 4
    varFullPlateVambracesSelentine = 1
    varFullPlateVambracesLeenspar = 0
    varFullPlateVambracesFiendClaw = 0
    varFullPlateVambracesRaktaBlood = 0
    varFullPlateVambracesTheyril = 0
    varFullPlateVambracesDragonScale = 0

    // FullPlate Leggings variables intialized into memory
    varFullPlateLeggingsQuantity = document.getElementById("FullPlateLeggingsQuantity").value;
    varFullPlateLeggingsPrice = document.getElementById("FullPlateLeggingsPrice").value;
    varFullPlateLeggingsSuccess = document.getElementById("FullPlateLeggingsSuccess").value;
    varFullPlateLeggingsGold = 50
    varFullPlateLeggingsIron = 12
    varFullPlateLeggingsLeather = 4
    varFullPlateLeggingsSelentine = 1
    varFullPlateLeggingsLeenspar = 0
    varFullPlateLeggingsFiendClaw = 0
    varFullPlateLeggingsRaktaBlood = 0
    varFullPlateLeggingsTheyril = 0
    varFullPlateLeggingsDragonScale = 0

    // FullPlate Helmet variables intialized into memory
    varFullPlateHelmetQuantity = document.getElementById("FullPlateHelmetQuantity").value;
    varFullPlateHelmetPrice = document.getElementById("FullPlateHelmetPrice").value;
    varFullPlateHelmetSuccess = document.getElementById("FullPlateHelmetSuccess").value;
    varFullPlateHelmetGold = 70
    varFullPlateHelmetIron = 18
    varFullPlateHelmetLeather = 6
    varFullPlateHelmetSelentine = 1
    varFullPlateHelmetLeenspar = 0
    varFullPlateHelmetFiendClaw = 0
    varFullPlateHelmetRaktaBlood = 0
    varFullPlateHelmetTheyril = 0
    varFullPlateHelmetDragonScale = 0

    // FullPlate Cuirass variables intialized into memory
    varFullPlateCuirassQuantity = document.getElementById("FullPlateCuirassQuantity").value;
    varFullPlateCuirassPrice = document.getElementById("FullPlateCuirassPrice").value;
    varFullPlateCuirassSuccess = document.getElementById("FullPlateCuirassSuccess").value;
    varFullPlateCuirassGold = 90
    varFullPlateCuirassIron = 24
    varFullPlateCuirassLeather = 8
    varFullPlateCuirassSelentine = 2
    varFullPlateCuirassLeenspar = 0
    varFullPlateCuirassFiendClaw = 0
    varFullPlateCuirassRaktaBlood = 0
    varFullPlateCuirassTheyril = 0
    varFullPlateCuirassDragonScale = 0

    // FullPlate Set variables intialized into memory
    varFullPlateSetQuantity = document.getElementById("FullPlateSetQuantity").value;
    varFullPlateSetPrice = document.getElementById("FullPlateSetPrice").value;
    varFullPlateSetSuccess = document.getElementById("FullPlateSetSuccess").value;
    varFullPlateSetGold = 560
    varFullPlateSetIron = 70
    varFullPlateSetLeather = 23
    varFullPlateSetSelentine = 11
    varFullPlateSetLeenspar = 0
    varFullPlateSetFiendClaw = 0
    varFullPlateSetRaktaBlood = 0
    varFullPlateSetTheyril = 0
    varFullPlateSetDragonScale = 0

    // *** INFERNAL VARIABLES ***
    // Infernal Boots variables intialized into memory
    varInfernalBootsQuantity = document.getElementById("InfernalBootsQuantity").value;
    varInfernalBootsPrice = document.getElementById("InfernalBootsPrice").value;
    varInfernalBootsSuccess = document.getElementById("InfernalBootsSuccess").value;
    varInfernalBootsGold = 100
    varInfernalBootsIron = 0
    varInfernalBootsLeather = 4
    varInfernalBootsLeenspar = 2
    varInfernalBootsFiendClaw = 1
    varInfernalBootsRaktaBlood = 0
    varInfernalBootsSelentine = 0
    varInfernalBootsTheyril = 0
    varInfernalBootsDragonScale = 0

    // Infernal Gauntlets variables intialized into memory
    varInfernalGauntletsQuantity = document.getElementById("InfernalGauntletsQuantity").value;
    varInfernalGauntletsPrice = document.getElementById("InfernalGauntletsPrice").value;
    varInfernalGauntletsSuccess = document.getElementById("InfernalGauntletsSuccess").value;
    varInfernalGauntletsGold = 100
    varInfernalGauntletsIron = 0
    varInfernalGauntletsLeather = 4
    varInfernalGauntletsLeenspar = 2
    varInfernalGauntletsFiendClaw = 1
    varInfernalGauntletsRaktaBlood = 0
    varInfernalGauntletsSelentine = 0
    varInfernalGauntletsTheyril = 0
    varInfernalGauntletsDragonScale = 0

    // Infernal Couters variables intialized into memory
    varInfernalCoutersQuantity = document.getElementById("InfernalCoutersQuantity").value;
    varInfernalCoutersPrice = document.getElementById("InfernalCoutersPrice").value;
    varInfernalCoutersSuccess = document.getElementById("InfernalCoutersSuccess").value;
    varInfernalCoutersGold = 100
    varInfernalCoutersIron = 0
    varInfernalCoutersLeather = 4
    varInfernalCoutersLeenspar = 2
    varInfernalCoutersFiendClaw = 1
    varInfernalCoutersRaktaBlood = 0
    varInfernalCoutersSelentine = 0
    varInfernalCoutersTheyril = 0
    varInfernalCoutersDragonScale = 0

    // Infernal Greaves variables intialized into memory
    varInfernalGreavesQuantity = document.getElementById("InfernalGreavesQuantity").value;
    varInfernalGreavesPrice = document.getElementById("InfernalGreavesPrice").value;
    varInfernalGreavesSuccess = document.getElementById("InfernalGreavesSuccess").value;
    varInfernalGreavesGold = 100
    varInfernalGreavesIron = 0
    varInfernalGreavesLeather = 4
    varInfernalGreavesLeenspar = 2
    varInfernalGreavesFiendClaw = 1
    varInfernalGreavesRaktaBlood = 0
    varInfernalGreavesSelentine = 0
    varInfernalGreavesTheyril = 0
    varInfernalGreavesDragonScale = 0

    // Infernal Shoulders variables intialized into memory
    varInfernalShouldersQuantity = document.getElementById("InfernalShouldersQuantity").value;
    varInfernalShouldersPrice = document.getElementById("InfernalShouldersPrice").value;
    varInfernalShouldersSuccess = document.getElementById("InfernalShouldersSuccess").value;
    varInfernalShouldersGold = 100
    varInfernalShouldersIron = 0
    varInfernalShouldersLeather = 4
    varInfernalShouldersLeenspar = 2
    varInfernalShouldersFiendClaw = 1
    varInfernalShouldersRaktaBlood = 0
    varInfernalShouldersSelentine = 0
    varInfernalShouldersTheyril = 0
    varInfernalShouldersDragonScale = 0

    // Infernal Girdle variables intialized into memory
    varInfernalGirdleQuantity = document.getElementById("InfernalGirdleQuantity").value;
    varInfernalGirdlePrice = document.getElementById("InfernalGirdlePrice").value;
    varInfernalGirdleSuccess = document.getElementById("InfernalGirdleSuccess").value;
    varInfernalGirdleGold = 100
    varInfernalGirdleIron = 0
    varInfernalGirdleLeather = 4
    varInfernalGirdleLeenspar = 2
    varInfernalGirdleFiendClaw = 1
    varInfernalGirdleRaktaBlood = 0
    varInfernalGirdleSelentine = 0
    varInfernalGirdleTheyril = 0
    varInfernalGirdleDragonScale = 0

    // Infernal Helmet variables intialized into memory
    varInfernalHelmetQuantity = document.getElementById("InfernalHelmetQuantity").value;
    varInfernalHelmetPrice = document.getElementById("InfernalHelmetPrice").value;
    varInfernalHelmetSuccess = document.getElementById("InfernalHelmetSuccess").value;
    varInfernalHelmetGold = 150
    varInfernalHelmetIron = 0
    varInfernalHelmetLeather = 6
    varInfernalHelmetLeenspar = 3
    varInfernalHelmetFiendClaw = 1
    varInfernalHelmetRaktaBlood = 0
    varInfernalHelmetSelentine = 0
    varInfernalHelmetTheyril = 0
    varInfernalHelmetDragonScale = 0

    // Infernal Cuirass variables intialized into memory
    varInfernalCuirassQuantity = document.getElementById("InfernalCuirassQuantity").value;
    varInfernalCuirassPrice = document.getElementById("InfernalCuirassPrice").value;
    varInfernalCuirassSuccess = document.getElementById("InfernalCuirassSuccess").value;
    varInfernalCuirassGold = 175
    varInfernalCuirassIron = 0
    varInfernalCuirassLeather = 8
    varInfernalCuirassLeenspar = 4
    varInfernalCuirassFiendClaw = 1
    varInfernalCuirassRaktaBlood = 1
    varInfernalCuirassSelentine = 0
    varInfernalCuirassTheyril = 0
    varInfernalCuirassDragonScale = 0

    // Infernal Set variables intialized into memory
    varInfernalSetQuantity = document.getElementById("InfernalSetQuantity").value;
    varInfernalSetPrice = document.getElementById("InfernalSetPrice").value;
    varInfernalSetSuccess = document.getElementById("InfernalSetSuccess").value;
    varInfernalSetGold = 925
    varInfernalSetIron = 0
    varInfernalSetLeather = 32
    varInfernalSetLeenspar = 19
    varInfernalSetFiendClaw = 8
    varInfernalSetRaktaBlood = 1
    varInfernalSetSelentine = 0
    varInfernalSetTheyril = 0
    varInfernalSetDragonScale = 0

    // *** DRAGON VARIABLES ***
    // Dragon Boots variables intialized into memory
    varDragonBootsQuantity = document.getElementById("DragonBootsQuantity").value;
    varDragonBootsPrice = document.getElementById("DragonBootsPrice").value;
    varDragonBootsSuccess = document.getElementById("DragonBootsSuccess").value;
    varDragonBootsGold = 200
    varDragonBootsIron = 0
    varDragonBootsLeather = 4
    varDragonBootsTheyril = 3
    varDragonBootsDragonScale = 4
    varDragonBootsSelentine = 0
    varDragonBootsLeenspar = 0
    varDragonBootsFiendClaw = 0
    varDragonBootsRaktaBlood = 0

    // Dragon Gauntlets variables intialized into memory
    varDragonGauntletsQuantity = document.getElementById("DragonGauntletsQuantity").value;
    varDragonGauntletsPrice = document.getElementById("DragonGauntletsPrice").value;
    varDragonGauntletsSuccess = document.getElementById("DragonGauntletsSuccess").value;
    varDragonGauntletsGold = 200
    varDragonGauntletsIron = 0
    varDragonGauntletsLeather = 4
    varDragonGauntletsTheyril = 3
    varDragonGauntletsDragonScale = 4
    varDragonGauntletsSelentine = 0
    varDragonGauntletsLeenspar = 0
    varDragonGauntletsFiendClaw = 0
    varDragonGauntletsRaktaBlood = 0

    // Dragon Greaves variables intialized into memory
    varDragonGreavesQuantity = document.getElementById("DragonGreavesQuantity").value;
    varDragonGreavesPrice = document.getElementById("DragonGreavesPrice").value;
    varDragonGreavesSuccess = document.getElementById("DragonGreavesSuccess").value;
    varDragonGreavesGold = 200
    varDragonGreavesIron = 0
    varDragonGreavesLeather = 4
    varDragonGreavesTheyril = 3
    varDragonGreavesDragonScale = 4
    varDragonGreavesSelentine = 0
    varDragonGreavesLeenspar = 0
    varDragonGreavesFiendClaw = 0
    varDragonGreavesRaktaBlood = 0

    // Dragon Shoulders variables intialized into memory
    varDragonShouldersQuantity = document.getElementById("DragonShouldersQuantity").value;
    varDragonShouldersPrice = document.getElementById("DragonShouldersPrice").value;
    varDragonShouldersSuccess = document.getElementById("DragonShouldersSuccess").value;
    varDragonShouldersGold = 200
    varDragonShouldersIron = 0
    varDragonShouldersLeather = 4
    varDragonShouldersTheyril = 3
    varDragonShouldersDragonScale = 4
    varDragonShouldersSelentine = 0
    varDragonShouldersLeenspar = 0
    varDragonShouldersFiendClaw = 0
    varDragonShouldersRaktaBlood = 0

    // Dragon Girdle variables intialized into memory
    varDragonGirdleQuantity = document.getElementById("DragonGirdleQuantity").value;
    varDragonGirdlePrice = document.getElementById("DragonGirdlePrice").value;
    varDragonGirdleSuccess = document.getElementById("DragonGirdleSuccess").value;
    varDragonGirdleGold = 200
    varDragonGirdleIron = 0
    varDragonGirdleLeather = 4
    varDragonGirdleTheyril = 3
    varDragonGirdleDragonScale = 4
    varDragonGirdleSelentine = 0
    varDragonGirdleLeenspar = 0
    varDragonGirdleFiendClaw = 0
    varDragonGirdleRaktaBlood = 0

    // Dragon Helmet variables intialized into memory
    varDragonHelmetQuantity = document.getElementById("DragonHelmetQuantity").value;
    varDragonHelmetPrice = document.getElementById("DragonHelmetPrice").value;
    varDragonHelmetSuccess = document.getElementById("DragonHelmetSuccess").value;
    varDragonHelmetGold = 250
    varDragonHelmetIron = 0
    varDragonHelmetLeather = 6
    varDragonHelmetTheyril = 4
    varDragonHelmetDragonScale = 5
    varDragonHelmetSelentine = 0
    varDragonHelmetLeenspar = 0
    varDragonHelmetFiendClaw = 0
    varDragonHelmetRaktaBlood = 0

    // Dragon Cuirass variables intialized into memory
    varDragonCuirassQuantity = document.getElementById("DragonCuirassQuantity").value;
    varDragonCuirassPrice = document.getElementById("DragonCuirassPrice").value;
    varDragonCuirassSuccess = document.getElementById("DragonCuirassSuccess").value;
    varDragonCuirassGold = 350
    varDragonCuirassIron = 0
    varDragonCuirassLeather = 8
    varDragonCuirassTheyril = 6
    varDragonCuirassDragonScale = 8
    varDragonCuirassSelentine = 0
    varDragonCuirassLeenspar = 0
    varDragonCuirassFiendClaw = 0
    varDragonCuirassRaktaBlood = 0

    // Dragon Set variables intialized into memory
    varDragonSetQuantity = document.getElementById("DragonSetQuantity").value;
    varDragonSetPrice = document.getElementById("DragonSetPrice").value;
    varDragonSetSuccess = document.getElementById("DragonSetSuccess").value;
    varDragonSetGold = 1600
    varDragonSetIron = 0
    varDragonSetLeather = 32
    varDragonSetTheyril = 25
    varDragonSetDragonScale = 33
    varDragonSetSelentine = 0
    varDragonSetLeenspar = 0
    varDragonSetFiendClaw = 0
    varDragonSetRaktaBlood = 0

    // Bloodcraft variables intialized into memory
    varBCChainHauberkQuantity = document.getElementById("BCChainHauberkQuantity").value;
    varBCChainHauberkPrice = document.getElementById("BCChainHauberkPrice").value;
    varBCChainHauberkSuccess = document.getElementById("BCChainHauberkSuccess").value;
    varBCChainHauberkGold = 0
    varBCChainHauberkIron = 8
    varBCChainHauberkLeather = 2
    varBCChainHauberkSelentine = 0
    varBCChainHauberkLeenspar = 0
    varBCChainHauberkFiendClaw = 0
    varBCChainHauberkRaktaBlood = 0
    varBCChainHauberkTheyril = 0
    varBCChainHauberkDragonScale = 0
    varBCChainHauberkHeart = 3
    varBCChainHauberkHagHeart = 0
    varBCChainHauberkDwarfHeart = 0
    varBCChainHauberkBeastmanTooth = 0
    varBCChainHauberkGhostlyDarktaint = 0
    
    varBCChainSetQuantity = document.getElementById("BCChainSetQuantity").value;
    varBCChainSetPrice = document.getElementById("BCChainSetPrice").value;
    varBCChainSetSuccess = document.getElementById("BCChainSetSuccess").value;
    varBCChainSetGold = 0
    varBCChainSetIron = 12
    varBCChainSetLeather = 4
    varBCChainSetSelentine = 0
    varBCChainSetLeenspar = 0
    varBCChainSetFiendClaw = 0
    varBCChainSetRaktaBlood = 0
    varBCChainSetTheyril = 0
    varBCChainSetDragonScale = 0
    varBCChainSetHeart = 3
    varBCChainSetHagHeart = 0
    varBCChainSetDwarfHeart = 0
    varBCChainSetBeastmanTooth = 0
    varBCChainSetGhostlyDarktaint = 0
    
    varBCBandedCuirassQuantity = document.getElementById("BCBandedCuirassQuantity").value;
    varBCBandedCuirassPrice = document.getElementById("BCBandedCuirassPrice").value;
    varBCBandedCuirassSuccess = document.getElementById("BCBandedCuirassSuccess").value;
    varBCBandedCuirassGold = 15
    varBCBandedCuirassIron = 12
    varBCBandedCuirassLeather = 4
    varBCBandedCuirassSelentine = 0
    varBCBandedCuirassLeenspar = 0
    varBCBandedCuirassFiendClaw = 0
    varBCBandedCuirassRaktaBlood = 0
    varBCBandedCuirassTheyril = 0
    varBCBandedCuirassDragonScale = 0
    varBCBandedCuirassHeart = 3
    varBCBandedCuirassHagHeart = 0
    varBCBandedCuirassDwarfHeart = 0
    varBCBandedCuirassBeastmanTooth = 0
    varBCBandedCuirassGhostlyDarktaint = 0
    
    varBCBandedSetQuantity = document.getElementById("BCBandedSetQuantity").value;
    varBCBandedSetPrice = document.getElementById("BCBandedSetPrice").value;
    varBCBandedSetSuccess = document.getElementById("BCBandedSetSuccess").value;
    varBCBandedSetGold = 50
    varBCBandedSetIron = 36
    varBCBandedSetLeather = 12
    varBCBandedSetSelentine = 0
    varBCBandedSetLeenspar = 0
    varBCBandedSetFiendClaw = 0
    varBCBandedSetRaktaBlood = 0
    varBCBandedSetTheyril = 0
    varBCBandedSetDragonScale = 0
    varBCBandedSetHeart = 3
    varBCBandedSetHagHeart = 0
    varBCBandedSetDwarfHeart = 0
    varBCBandedSetBeastmanTooth = 0
    varBCBandedSetGhostlyDarktaint = 0
    
    varBCScaleHelmetQuantity = document.getElementById("BCScaleHelmetQuantity").value;
    varBCScaleHelmetPrice = document.getElementById("BCScaleHelmetPrice").value;
    varBCScaleHelmetSuccess = document.getElementById("BCScaleHelmetSuccess").value;
    varBCScaleHelmetGold = 20
    varBCScaleHelmetIron = 10
    varBCScaleHelmetLeather = 3
    varBCScaleHelmetSelentine = 0
    varBCScaleHelmetLeenspar = 0
    varBCScaleHelmetFiendClaw = 0
    varBCScaleHelmetRaktaBlood = 0
    varBCScaleHelmetTheyril = 0
    varBCScaleHelmetDragonScale = 0
    varBCScaleHelmetHeart = 0
    varBCScaleHelmetHagHeart = 3
    varBCScaleHelmetDwarfHeart = 0
    varBCScaleHelmetBeastmanTooth = 2
    varBCScaleHelmetGhostlyDarktaint = 0
    
    varBCScaleCuirassQuantity = document.getElementById("BCScaleCuirassQuantity").value;
    varBCScaleCuirassPrice = document.getElementById("BCScaleCuirassPrice").value;
    varBCScaleCuirassSuccess = document.getElementById("BCScaleCuirassSuccess").value;
    varBCScaleCuirassGold = 30
    varBCScaleCuirassIron = 20
    varBCScaleCuirassLeather = 4
    varBCScaleCuirassSelentine = 0
    varBCScaleCuirassLeenspar = 0
    varBCScaleCuirassFiendClaw = 0
    varBCScaleCuirassRaktaBlood = 0
    varBCScaleCuirassTheyril = 0
    varBCScaleCuirassDragonScale = 0
    varBCScaleCuirassHeart = 0
    varBCScaleCuirassHagHeart = 3
    varBCScaleCuirassDwarfHeart = 0
    varBCScaleCuirassBeastmanTooth = 2
    varBCScaleCuirassGhostlyDarktaint = 0
    
    varBCScaleSetQuantity = document.getElementById("BCScaleSetQuantity").value;
    varBCScaleSetPrice = document.getElementById("BCScaleSetPrice").value;
    varBCScaleSetSuccess = document.getElementById("BCScaleSetSuccess").value;
    varBCScaleSetGold = 107
    varBCScaleSetIron = 70
    varBCScaleSetLeather = 23
    varBCScaleSetSelentine = 0
    varBCScaleSetLeenspar = 0
    varBCScaleSetFiendClaw = 0
    varBCScaleSetRaktaBlood = 0
    varBCScaleSetTheyril = 0
    varBCScaleSetDragonScale = 0
    varBCScaleSetHeart = 0
    varBCScaleSetHagHeart = 6
    varBCScaleSetDwarfHeart = 0
    varBCScaleSetBeastmanTooth = 4
    varBCScaleSetGhostlyDarktaint = 0
    
    varBCPlateHelmetQuantity = document.getElementById("BCPlateHelmetQuantity").value;
    varBCPlateHelmetPrice = document.getElementById("BCPlateHelmetPrice").value;
    varBCPlateHelmetSuccess = document.getElementById("BCPlateHelmetSuccess").value;
    varBCPlateHelmetGold = 110
    varBCPlateHelmetIron = 20
    varBCPlateHelmetLeather = 6
    varBCPlateHelmetSelentine = 0
    varBCPlateHelmetLeenspar = 0
    varBCPlateHelmetFiendClaw = 0
    varBCPlateHelmetRaktaBlood = 0
    varBCPlateHelmetTheyril = 0
    varBCPlateHelmetDragonScale = 0
    varBCPlateHelmetHeart = 0
    varBCPlateHelmetHagHeart = 3
    varBCPlateHelmetDwarfHeart = 0
    varBCPlateHelmetBeastmanTooth = 2
    varBCPlateHelmetGhostlyDarktaint = 0
    
    varBCPlateCuirassQuantity = document.getElementById("BCPlateCuirassQuantity").value;
    varBCPlateCuirassPrice = document.getElementById("BCPlateCuirassPrice").value;
    varBCPlateCuirassSuccess = document.getElementById("BCPlateCuirassSuccess").value;
    varBCPlateCuirassGold = 150
    varBCPlateCuirassIron = 40
    varBCPlateCuirassLeather = 8
    varBCPlateCuirassSelentine = 0
    varBCPlateCuirassLeenspar = 0
    varBCPlateCuirassFiendClaw = 0
    varBCPlateCuirassRaktaBlood = 0
    varBCPlateCuirassTheyril = 0
    varBCPlateCuirassDragonScale = 0
    varBCPlateCuirassHeart = 0
    varBCPlateCuirassHagHeart = 3
    varBCPlateCuirassDwarfHeart = 0
    varBCPlateCuirassBeastmanTooth = 2
    varBCPlateCuirassGhostlyDarktaint = 0
    
    varBCPlateSetQuantity = document.getElementById("BCPlateSetQuantity").value;
    varBCPlateSetPrice = document.getElementById("BCPlateSetPrice").value;
    varBCPlateSetSuccess = document.getElementById("BCPlateSetSuccess").value;
    varBCPlateSetGold = 420
    varBCPlateSetIron = 116
    varBCPlateSetLeather = 30
    varBCPlateSetSelentine = 0
    varBCPlateSetLeenspar = 0
    varBCPlateSetFiendClaw = 0
    varBCPlateSetRaktaBlood = 0
    varBCPlateSetTheyril = 0
    varBCPlateSetDragonScale = 0
    varBCPlateSetHeart = 0
    varBCPlateSetHagHeart = 6
    varBCPlateSetDwarfHeart = 0
    varBCPlateSetBeastmanTooth = 4
    varBCPlateSetGhostlyDarktaint = 0
    
    varBCFullPlateHelmetQuantity = document.getElementById("BCFullPlateHelmetQuantity").value;
    varBCFullPlateHelmetPrice = document.getElementById("BCFullPlateHelmetPrice").value;
    varBCFullPlateHelmetSuccess = document.getElementById("BCFullPlateHelmetSuccess").value;
    varBCFullPlateHelmetGold = 140
    varBCFullPlateHelmetIron = 18
    varBCFullPlateHelmetLeather = 6
    varBCFullPlateHelmetSelentine = 1
    varBCFullPlateHelmetLeenspar = 0
    varBCFullPlateHelmetFiendClaw = 0
    varBCFullPlateHelmetRaktaBlood = 0
    varBCFullPlateHelmetTheyril = 0
    varBCFullPlateHelmetDragonScale = 0
    varBCFullPlateHelmetHeart = 0
    varBCFullPlateHelmetHagHeart = 0
    varBCFullPlateHelmetDwarfHeart = 3
    varBCFullPlateHelmetBeastmanTooth = 2
    varBCFullPlateHelmetGhostlyDarktaint = 0
    
    varBCFullPlateCuirassQuantity = document.getElementById("BCFullPlateCuirassQuantity").value;
    varBCFullPlateCuirassPrice = document.getElementById("BCFullPlateCuirassPrice").value;
    varBCFullPlateCuirassSuccess = document.getElementById("BCFullPlateCuirassSuccess").value;
    varBCFullPlateCuirassGold = 180
    varBCFullPlateCuirassIron = 24
    varBCFullPlateCuirassLeather = 8
    varBCFullPlateCuirassSelentine = 2
    varBCFullPlateCuirassLeenspar = 0
    varBCFullPlateCuirassFiendClaw = 0
    varBCFullPlateCuirassRaktaBlood = 0
    varBCFullPlateCuirassTheyril = 0
    varBCFullPlateCuirassDragonScale = 0
    varBCFullPlateCuirassHeart = 0
    varBCFullPlateCuirassHagHeart = 0
    varBCFullPlateCuirassDwarfHeart = 3
    varBCFullPlateCuirassBeastmanTooth = 2
    varBCFullPlateCuirassGhostlyDarktaint = 0
    
    varBCFullPlateSetQuantity = document.getElementById("BCFullPlateSetQuantity").value;
    varBCFullPlateSetPrice = document.getElementById("BCFullPlateSetPrice").value;
    varBCFullPlateSetSuccess = document.getElementById("BCFullPlateSetSuccess").value;
    varBCFullPlateSetGold = 720
    varBCFullPlateSetIron = 70
    varBCFullPlateSetLeather = 23
    varBCFullPlateSetSelentine = 11
    varBCFullPlateSetLeenspar = 0
    varBCFullPlateSetFiendClaw = 0
    varBCFullPlateSetRaktaBlood = 0
    varBCFullPlateSetTheyril = 0
    varBCFullPlateSetDragonScale = 0
    varBCFullPlateSetHeart = 0
    varBCFullPlateSetHagHeart = 0
    varBCFullPlateSetDwarfHeart = 6
    varBCFullPlateSetBeastmanTooth = 4
    varBCFullPlateSetGhostlyDarktaint = 0
    
    varBCInfernalHelmetQuantity = document.getElementById("BCInfernalHelmetQuantity").value;
    varBCInfernalHelmetPrice = document.getElementById("BCInfernalHelmetPrice").value;
    varBCInfernalHelmetSuccess = document.getElementById("BCInfernalHelmetSuccess").value;
    varBCInfernalHelmetGold = 150
    varBCInfernalHelmetIron = 0
    varBCInfernalHelmetLeather = 6
    varBCInfernalHelmetSelentine = 0
    varBCInfernalHelmetLeenspar = 3
    varBCInfernalHelmetFiendClaw = 1
    varBCInfernalHelmetRaktaBlood = 0
    varBCInfernalHelmetTheyril = 0
    varBCInfernalHelmetDragonScale = 0
    varBCInfernalHelmetHeart = 0
    varBCInfernalHelmetHagHeart = 0
    varBCInfernalHelmetDwarfHeart = 3
    varBCInfernalHelmetBeastmanTooth = 0
    varBCInfernalHelmetGhostlyDarktaint = 2
    
    varBCInfernalCuirassQuantity = document.getElementById("BCInfernalCuirassQuantity").value;
    varBCInfernalCuirassPrice = document.getElementById("BCInfernalCuirassPrice").value;
    varBCInfernalCuirassSuccess = document.getElementById("BCInfernalCuirassSuccess").value;
    varBCInfernalCuirassGold = 175
    varBCInfernalCuirassIron = 0
    varBCInfernalCuirassLeather = 8
    varBCInfernalCuirassSelentine = 0
    varBCInfernalCuirassLeenspar = 4
    varBCInfernalCuirassFiendClaw = 1
    varBCInfernalCuirassRaktaBlood = 1
    varBCInfernalCuirassTheyril = 0
    varBCInfernalCuirassDragonScale = 0
    varBCInfernalCuirassHeart = 0
    varBCInfernalCuirassHagHeart = 0
    varBCInfernalCuirassDwarfHeart = 3
    varBCInfernalCuirassBeastmanTooth = 0
    varBCInfernalCuirassGhostlyDarktaint = 2
    
    varBCInfernalSetQuantity = document.getElementById("BCInfernalSetQuantity").value;
    varBCInfernalSetPrice = document.getElementById("BCInfernalSetPrice").value;
    varBCInfernalSetSuccess = document.getElementById("BCInfernalSetSuccess").value;
    varBCInfernalSetGold = 925
    varBCInfernalSetIron = 0
    varBCInfernalSetLeather = 32
    varBCInfernalSetSelentine = 0
    varBCInfernalSetLeenspar = 19
    varBCInfernalSetFiendClaw = 8
    varBCInfernalSetRaktaBlood = 1
    varBCInfernalSetTheyril = 0
    varBCInfernalSetDragonScale = 0
    varBCInfernalSetHeart = 0
    varBCInfernalSetHagHeart = 0
    varBCInfernalSetDwarfHeart = 6
    varBCInfernalSetBeastmanTooth = 0
    varBCInfernalSetGhostlyDarktaint = 4
    
    varBCDragonHelmetQuantity = document.getElementById("BCDragonHelmetQuantity").value;
    varBCDragonHelmetPrice = document.getElementById("BCDragonHelmetPrice").value;
    varBCDragonHelmetSuccess = document.getElementById("BCDragonHelmetSuccess").value;
    varBCDragonHelmetGold = 250
    varBCDragonHelmetIron = 0
    varBCDragonHelmetLeather = 4
    varBCDragonHelmetSelentine = 0
    varBCDragonHelmetLeenspar = 0
    varBCDragonHelmetFiendClaw = 0
    varBCDragonHelmetRaktaBlood = 0
    varBCDragonHelmetTheyril = 4
    varBCDragonHelmetDragonScale = 5
    varBCDragonHelmetHeart = 0
    varBCDragonHelmetHagHeart = 0
    varBCDragonHelmetDwarfHeart = 3
    varBCDragonHelmetBeastmanTooth = 0
    varBCDragonHelmetGhostlyDarktaint = 2
    
    varBCDragonCuirassQuantity = document.getElementById("BCDragonCuirassQuantity").value;
    varBCDragonCuirassPrice = document.getElementById("BCDragonCuirassPrice").value;
    varBCDragonCuirassSuccess = document.getElementById("BCDragonCuirassSuccess").value;
    varBCDragonCuirassGold = 350
    varBCDragonCuirassIron = 0
    varBCDragonCuirassLeather = 8
    varBCDragonCuirassSelentine = 0
    varBCDragonCuirassLeenspar = 0
    varBCDragonCuirassFiendClaw = 0
    varBCDragonCuirassRaktaBlood = 0
    varBCDragonCuirassTheyril = 6
    varBCDragonCuirassDragonScale = 8
    varBCDragonCuirassHeart = 0
    varBCDragonCuirassHagHeart = 0
    varBCDragonCuirassDwarfHeart = 3
    varBCDragonCuirassBeastmanTooth = 0
    varBCDragonCuirassGhostlyDarktaint = 2
    
    varBCDragonSetQuantity = document.getElementById("BCDragonSetQuantity").value;
    varBCDragonSetPrice = document.getElementById("BCDragonSetPrice").value;
    varBCDragonSetSuccess = document.getElementById("BCDragonSetSuccess").value;
    varBCDragonSetGold = 1600
    varBCDragonSetIron = 0
    varBCDragonSetLeather = 32
    varBCDragonSetSelentine = 0
    varBCDragonSetLeenspar = 0
    varBCDragonSetFiendClaw = 0
    varBCDragonSetRaktaBlood = 0
    varBCDragonSetTheyril = 25
    varBCDragonSetDragonScale = 33
    varBCDragonSetHeart = 0
    varBCDragonSetHagHeart = 0
    varBCDragonSetDwarfHeart = 6
    varBCDragonSetBeastmanTooth = 0
    varBCDragonSetGhostlyDarktaint = 4
}

/* SHIELD */

//Used to reload items from Shield
function fnShieldReload()  // x= id, z= value
{
    fnShieldInitialize()

    fnShield()

    fnShieldTotal()
    fnReloadShieldPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnShieldSubPrice(a,b,c,d,e,f,g,h,i,j) // a=Gold, b=Iron Quantity, c=Wood Quantity, d=Leather Quantity, e=Selentine Quantity, f=Veilron Quantity, g=Neithal Quantity, h=Leenspar Quantity, i=Theyril Quantity, j=Success Rate
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varLeenspar = parseInt(h)
    varTheyril = parseInt(i)
    varSuccess = parseInt(j)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Shield
function fnShieldTotal()
{
    varShieldTotal = ((varShield01Price * varShield01Quantity) + (varShield02Price * varShield02Quantity) + (varShield03Price * varShield03Quantity) + (varShield04Price * varShield04Quantity) + (varShield05Price * varShield05Quantity) + (varShield06Price * varShield06Quantity) + (varShield07Price * varShield07Quantity) + (varShield08Price * varShield08Quantity) + (varShield09Price * varShield09Quantity) + (varShield10Price * varShield10Quantity) + (varShield11Price * varShield11Quantity) + (varShield12Price * varShield12Quantity) + (varShield13Price * varShield13Quantity) + (varShield14Price * varShield14Quantity) + (varShield15Price * varShield15Quantity) + (varShield16Price * varShield16Quantity) + (varShield17Price * varShield17Quantity) + (varShield18Price * varShield18Quantity) + (varShield19Price * varShield19Quantity) + (varShield20Price * varShield20Quantity) + (varShield21Price * varShield21Quantity) + (varShield22Price * varShield22Quantity) + (varShield23Price * varShield23Quantity) + (varShield24Price * varShield24Quantity) + (varShield25Price * varShield25Quantity) + (varShield26Price * varShield26Quantity) + (varShield27Price * varShield27Quantity) + (varShield28Price * varShield28Quantity) + (varShield29Price * varShield29Quantity) + (varShield30Price * varShield30Quantity) + (varShield31Price * varShield31Quantity) + (varShield32Price * varShield32Quantity) + (varShield33Price * varShield33Quantity) + (varShield34Price * varShield34Quantity) + (varShield35Price * varShield35Quantity) + (varShield36Price * varShield36Quantity) + (varShield37Price * varShield37Quantity) + (varShield38Price * varShield38Quantity) + (varShield39Price * varShield39Quantity) + (varShield40Price * varShield40Quantity) + (varShield41Price * varShield41Quantity) + (varShield42Price * varShield42Quantity) + (varShield43Price * varShield43Quantity) + (varShield44Price * varShield44Quantity) + (varShield45Price * varShield45Quantity) + (varShield46Price * varShield46Quantity) + (varShield47Price * varShield47Quantity) + (varShield48Price * varShield48Quantity) + (varShield49Price * varShield49Quantity) + (varShield50Price * varShield50Quantity) + (varShield51Price * varShield51Quantity) + (varShield52Price * varShield52Quantity));
    varShieldGoldTotal = ((varShield01Gold * varShield01Quantity) + (varShield02Gold * varShield02Quantity) + (varShield03Gold * varShield03Quantity) + (varShield04Gold * varShield04Quantity) + (varShield05Gold * varShield05Quantity) + (varShield06Gold * varShield06Quantity) + (varShield07Gold * varShield07Quantity) + (varShield08Gold * varShield08Quantity) + (varShield09Gold * varShield09Quantity) + (varShield10Gold * varShield10Quantity) + (varShield11Gold * varShield11Quantity) + (varShield12Gold * varShield12Quantity) + (varShield13Gold * varShield13Quantity) + (varShield14Gold * varShield14Quantity) + (varShield15Gold * varShield15Quantity) + (varShield16Gold * varShield16Quantity) + (varShield17Gold * varShield17Quantity) + (varShield18Gold * varShield18Quantity) + (varShield19Gold * varShield19Quantity) + (varShield20Gold * varShield20Quantity) + (varShield21Gold * varShield21Quantity) + (varShield22Gold * varShield22Quantity) + (varShield23Gold * varShield23Quantity) + (varShield24Gold * varShield24Quantity) + (varShield25Gold * varShield25Quantity) + (varShield26Gold * varShield26Quantity) + (varShield27Gold * varShield27Quantity) + (varShield28Gold * varShield28Quantity) + (varShield29Gold * varShield29Quantity) + (varShield30Gold * varShield30Quantity) + (varShield31Gold * varShield31Quantity) + (varShield32Gold * varShield32Quantity) + (varShield33Gold * varShield33Quantity) + (varShield34Gold * varShield34Quantity) + (varShield35Gold * varShield35Quantity) + (varShield36Gold * varShield36Quantity) + (varShield37Gold * varShield37Quantity) + (varShield38Gold * varShield38Quantity) + (varShield39Gold * varShield39Quantity) + (varShield40Gold * varShield40Quantity) + (varShield41Gold * varShield41Quantity) + (varShield42Gold * varShield42Quantity) + (varShield43Gold * varShield43Quantity) + (varShield44Gold * varShield44Quantity) + (varShield45Gold * varShield45Quantity) + (varShield46Gold * varShield46Quantity) + (varShield47Gold * varShield47Quantity) + (varShield48Gold * varShield48Quantity) + (varShield49Gold * varShield49Quantity) + (varShield50Gold * varShield50Quantity) + (varShield51Gold * varShield51Quantity) + (varShield52Gold * varShield52Quantity));
    varShieldIronTotal = ((varShield01Iron * varShield01Quantity) + (varShield02Iron * varShield02Quantity) + (varShield03Iron * varShield03Quantity) + (varShield04Iron * varShield04Quantity) + (varShield05Iron * varShield05Quantity) + (varShield06Iron * varShield06Quantity) + (varShield07Iron * varShield07Quantity) + (varShield08Iron * varShield08Quantity) + (varShield09Iron * varShield09Quantity) + (varShield10Iron * varShield10Quantity) + (varShield11Iron * varShield11Quantity) + (varShield12Iron * varShield12Quantity) + (varShield13Iron * varShield13Quantity) + (varShield14Iron * varShield14Quantity) + (varShield15Iron * varShield15Quantity) + (varShield16Iron * varShield16Quantity) + (varShield17Iron * varShield17Quantity) + (varShield18Iron * varShield18Quantity) + (varShield19Iron * varShield19Quantity) + (varShield20Iron * varShield20Quantity) + (varShield21Iron * varShield21Quantity) + (varShield22Iron * varShield22Quantity) + (varShield23Iron * varShield23Quantity) + (varShield24Iron * varShield24Quantity) + (varShield25Iron * varShield25Quantity) + (varShield26Iron * varShield26Quantity) + (varShield27Iron * varShield27Quantity) + (varShield28Iron * varShield28Quantity) + (varShield29Iron * varShield29Quantity) + (varShield30Iron * varShield30Quantity) + (varShield31Iron * varShield31Quantity) + (varShield32Iron * varShield32Quantity) + (varShield33Iron * varShield33Quantity) + (varShield34Iron * varShield34Quantity) + (varShield35Iron * varShield35Quantity) + (varShield36Iron * varShield36Quantity) + (varShield37Iron * varShield37Quantity) + (varShield38Iron * varShield38Quantity) + (varShield39Iron * varShield39Quantity) + (varShield40Iron * varShield40Quantity) + (varShield41Iron * varShield41Quantity) + (varShield42Iron * varShield42Quantity) + (varShield43Iron * varShield43Quantity) + (varShield44Iron * varShield44Quantity) + (varShield45Iron * varShield45Quantity) + (varShield46Iron * varShield46Quantity) + (varShield47Iron * varShield47Quantity) + (varShield48Iron * varShield48Quantity) + (varShield49Iron * varShield49Quantity) + (varShield50Iron * varShield50Quantity) + (varShield51Iron * varShield51Quantity) + (varShield52Iron * varShield52Quantity));
    varShieldWoodTotal = ((varShield01Wood * varShield01Quantity) + (varShield02Wood * varShield02Quantity) + (varShield03Wood * varShield03Quantity) + (varShield04Wood * varShield04Quantity) + (varShield05Wood * varShield05Quantity) + (varShield06Wood * varShield06Quantity) + (varShield07Wood * varShield07Quantity) + (varShield08Wood * varShield08Quantity) + (varShield09Wood * varShield09Quantity) + (varShield10Wood * varShield10Quantity) + (varShield11Wood * varShield11Quantity) + (varShield12Wood * varShield12Quantity) + (varShield13Wood * varShield13Quantity) + (varShield14Wood * varShield14Quantity) + (varShield15Wood * varShield15Quantity) + (varShield16Wood * varShield16Quantity) + (varShield17Wood * varShield17Quantity) + (varShield18Wood * varShield18Quantity) + (varShield19Wood * varShield19Quantity) + (varShield20Wood * varShield20Quantity) + (varShield21Wood * varShield21Quantity) + (varShield22Wood * varShield22Quantity) + (varShield23Wood * varShield23Quantity) + (varShield24Wood * varShield24Quantity) + (varShield25Wood * varShield25Quantity) + (varShield26Wood * varShield26Quantity) + (varShield27Wood * varShield27Quantity) + (varShield28Wood * varShield28Quantity) + (varShield29Wood * varShield29Quantity) + (varShield30Wood * varShield30Quantity) + (varShield31Wood * varShield31Quantity) + (varShield32Wood * varShield32Quantity) + (varShield33Wood * varShield33Quantity) + (varShield34Wood * varShield34Quantity) + (varShield35Wood * varShield35Quantity) + (varShield36Wood * varShield36Quantity) + (varShield37Wood * varShield37Quantity) + (varShield38Wood * varShield38Quantity) + (varShield39Wood * varShield39Quantity) + (varShield40Wood * varShield40Quantity) + (varShield41Wood * varShield41Quantity) + (varShield42Wood * varShield42Quantity) + (varShield43Wood * varShield43Quantity) + (varShield44Wood * varShield44Quantity) + (varShield45Wood * varShield45Quantity) + (varShield46Wood * varShield46Quantity) + (varShield47Wood * varShield47Quantity) + (varShield48Wood * varShield48Quantity) + (varShield49Wood * varShield49Quantity) + (varShield50Wood * varShield50Quantity) + (varShield51Wood * varShield51Quantity) + (varShield52Wood * varShield52Quantity));
    varShieldLeatherTotal = ((varShield01Leather * varShield01Quantity) + (varShield02Leather * varShield02Quantity) + (varShield03Leather * varShield03Quantity) + (varShield04Leather * varShield04Quantity) + (varShield05Leather * varShield05Quantity) + (varShield06Leather * varShield06Quantity) + (varShield07Leather * varShield07Quantity) + (varShield08Leather * varShield08Quantity) + (varShield09Leather * varShield09Quantity) + (varShield10Leather * varShield10Quantity) + (varShield11Leather * varShield11Quantity) + (varShield12Leather * varShield12Quantity) + (varShield13Leather * varShield13Quantity) + (varShield14Leather * varShield14Quantity) + (varShield15Leather * varShield15Quantity) + (varShield16Leather * varShield16Quantity) + (varShield17Leather * varShield17Quantity) + (varShield18Leather * varShield18Quantity) + (varShield19Leather * varShield19Quantity) + (varShield20Leather * varShield20Quantity) + (varShield21Leather * varShield21Quantity) + (varShield22Leather * varShield22Quantity) + (varShield23Leather * varShield23Quantity) + (varShield24Leather * varShield24Quantity) + (varShield25Leather * varShield25Quantity) + (varShield26Leather * varShield26Quantity) + (varShield27Leather * varShield27Quantity) + (varShield28Leather * varShield28Quantity) + (varShield29Leather * varShield29Quantity) + (varShield30Leather * varShield30Quantity) + (varShield31Leather * varShield31Quantity) + (varShield32Leather * varShield32Quantity) + (varShield33Leather * varShield33Quantity) + (varShield34Leather * varShield34Quantity) + (varShield35Leather * varShield35Quantity) + (varShield36Leather * varShield36Quantity) + (varShield37Leather * varShield37Quantity) + (varShield38Leather * varShield38Quantity) + (varShield39Leather * varShield39Quantity) + (varShield40Leather * varShield40Quantity) + (varShield41Leather * varShield41Quantity) + (varShield42Leather * varShield42Quantity) + (varShield43Leather * varShield43Quantity) + (varShield44Leather * varShield44Quantity) + (varShield45Leather * varShield45Quantity) + (varShield46Leather * varShield46Quantity) + (varShield47Leather * varShield47Quantity) + (varShield48Leather * varShield48Quantity) + (varShield49Leather * varShield49Quantity) + (varShield50Leather * varShield50Quantity) + (varShield51Leather * varShield51Quantity) + (varShield52Leather * varShield52Quantity));
    varShieldSelentineTotal = ((varShield01Selentine * varShield01Quantity) + (varShield02Selentine * varShield02Quantity) + (varShield03Selentine * varShield03Quantity) + (varShield04Selentine * varShield04Quantity) + (varShield05Selentine * varShield05Quantity) + (varShield06Selentine * varShield06Quantity) + (varShield07Selentine * varShield07Quantity) + (varShield08Selentine * varShield08Quantity) + (varShield09Selentine * varShield09Quantity) + (varShield10Selentine * varShield10Quantity) + (varShield11Selentine * varShield11Quantity) + (varShield12Selentine * varShield12Quantity) + (varShield13Selentine * varShield13Quantity) + (varShield14Selentine * varShield14Quantity) + (varShield15Selentine * varShield15Quantity) + (varShield16Selentine * varShield16Quantity) + (varShield17Selentine * varShield17Quantity) + (varShield18Selentine * varShield18Quantity) + (varShield19Selentine * varShield19Quantity) + (varShield20Selentine * varShield20Quantity) + (varShield21Selentine * varShield21Quantity) + (varShield22Selentine * varShield22Quantity) + (varShield23Selentine * varShield23Quantity) + (varShield24Selentine * varShield24Quantity) + (varShield25Selentine * varShield25Quantity) + (varShield26Selentine * varShield26Quantity) + (varShield27Selentine * varShield27Quantity) + (varShield28Selentine * varShield28Quantity) + (varShield29Selentine * varShield29Quantity) + (varShield30Selentine * varShield30Quantity) + (varShield31Selentine * varShield31Quantity) + (varShield32Selentine * varShield32Quantity) + (varShield33Selentine * varShield33Quantity) + (varShield34Selentine * varShield34Quantity) + (varShield35Selentine * varShield35Quantity) + (varShield36Selentine * varShield36Quantity) + (varShield37Selentine * varShield37Quantity) + (varShield38Selentine * varShield38Quantity) + (varShield39Selentine * varShield39Quantity) + (varShield40Selentine * varShield40Quantity) + (varShield41Selentine * varShield41Quantity) + (varShield42Selentine * varShield42Quantity) + (varShield43Selentine * varShield43Quantity) + (varShield44Selentine * varShield44Quantity) + (varShield45Selentine * varShield45Quantity) + (varShield46Selentine * varShield46Quantity) + (varShield47Selentine * varShield47Quantity) + (varShield48Selentine * varShield48Quantity) + (varShield49Selentine * varShield49Quantity) + (varShield50Selentine * varShield50Quantity) + (varShield51Selentine * varShield51Quantity) + (varShield52Selentine * varShield52Quantity));
    varShieldVeilronTotal = ((varShield01Veilron * varShield01Quantity) + (varShield02Veilron * varShield02Quantity) + (varShield03Veilron * varShield03Quantity) + (varShield04Veilron * varShield04Quantity) + (varShield05Veilron * varShield05Quantity) + (varShield06Veilron * varShield06Quantity) + (varShield07Veilron * varShield07Quantity) + (varShield08Veilron * varShield08Quantity) + (varShield09Veilron * varShield09Quantity) + (varShield10Veilron * varShield10Quantity) + (varShield11Veilron * varShield11Quantity) + (varShield12Veilron * varShield12Quantity) + (varShield13Veilron * varShield13Quantity) + (varShield14Veilron * varShield14Quantity) + (varShield15Veilron * varShield15Quantity) + (varShield16Veilron * varShield16Quantity) + (varShield17Veilron * varShield17Quantity) + (varShield18Veilron * varShield18Quantity) + (varShield19Veilron * varShield19Quantity) + (varShield20Veilron * varShield20Quantity) + (varShield21Veilron * varShield21Quantity) + (varShield22Veilron * varShield22Quantity) + (varShield23Veilron * varShield23Quantity) + (varShield24Veilron * varShield24Quantity) + (varShield25Veilron * varShield25Quantity) + (varShield26Veilron * varShield26Quantity) + (varShield27Veilron * varShield27Quantity) + (varShield28Veilron * varShield28Quantity) + (varShield29Veilron * varShield29Quantity) + (varShield30Veilron * varShield30Quantity) + (varShield31Veilron * varShield31Quantity) + (varShield32Veilron * varShield32Quantity) + (varShield33Veilron * varShield33Quantity) + (varShield34Veilron * varShield34Quantity) + (varShield35Veilron * varShield35Quantity) + (varShield36Veilron * varShield36Quantity) + (varShield37Veilron * varShield37Quantity) + (varShield38Veilron * varShield38Quantity) + (varShield39Veilron * varShield39Quantity) + (varShield40Veilron * varShield40Quantity) + (varShield41Veilron * varShield41Quantity) + (varShield42Veilron * varShield42Quantity) + (varShield43Veilron * varShield43Quantity) + (varShield44Veilron * varShield44Quantity) + (varShield45Veilron * varShield45Quantity) + (varShield46Veilron * varShield46Quantity) + (varShield47Veilron * varShield47Quantity) + (varShield48Veilron * varShield48Quantity) + (varShield49Veilron * varShield49Quantity) + (varShield50Veilron * varShield50Quantity) + (varShield51Veilron * varShield51Quantity) + (varShield52Veilron * varShield52Quantity));
    varShieldNeithalTotal = ((varShield01Neithal * varShield01Quantity) + (varShield02Neithal * varShield02Quantity) + (varShield03Neithal * varShield03Quantity) + (varShield04Neithal * varShield04Quantity) + (varShield05Neithal * varShield05Quantity) + (varShield06Neithal * varShield06Quantity) + (varShield07Neithal * varShield07Quantity) + (varShield08Neithal * varShield08Quantity) + (varShield09Neithal * varShield09Quantity) + (varShield10Neithal * varShield10Quantity) + (varShield11Neithal * varShield11Quantity) + (varShield12Neithal * varShield12Quantity) + (varShield13Neithal * varShield13Quantity) + (varShield14Neithal * varShield14Quantity) + (varShield15Neithal * varShield15Quantity) + (varShield16Neithal * varShield16Quantity) + (varShield17Neithal * varShield17Quantity) + (varShield18Neithal * varShield18Quantity) + (varShield19Neithal * varShield19Quantity) + (varShield20Neithal * varShield20Quantity) + (varShield21Neithal * varShield21Quantity) + (varShield22Neithal * varShield22Quantity) + (varShield23Neithal * varShield23Quantity) + (varShield24Neithal * varShield24Quantity) + (varShield25Neithal * varShield25Quantity) + (varShield26Neithal * varShield26Quantity) + (varShield27Neithal * varShield27Quantity) + (varShield28Neithal * varShield28Quantity) + (varShield29Neithal * varShield29Quantity) + (varShield30Neithal * varShield30Quantity) + (varShield31Neithal * varShield31Quantity) + (varShield32Neithal * varShield32Quantity) + (varShield33Neithal * varShield33Quantity) + (varShield34Neithal * varShield34Quantity) + (varShield35Neithal * varShield35Quantity) + (varShield36Neithal * varShield36Quantity) + (varShield37Neithal * varShield37Quantity) + (varShield38Neithal * varShield38Quantity) + (varShield39Neithal * varShield39Quantity) + (varShield40Neithal * varShield40Quantity) + (varShield41Neithal * varShield41Quantity) + (varShield42Neithal * varShield42Quantity) + (varShield43Neithal * varShield43Quantity) + (varShield44Neithal * varShield44Quantity) + (varShield45Neithal * varShield45Quantity) + (varShield46Neithal * varShield46Quantity) + (varShield47Neithal * varShield47Quantity) + (varShield48Neithal * varShield48Quantity) + (varShield49Neithal * varShield49Quantity) + (varShield50Neithal * varShield50Quantity) + (varShield51Neithal * varShield51Quantity) + (varShield52Neithal * varShield52Quantity));
    varShieldLeensparTotal = ((varShield01Leenspar * varShield01Quantity) + (varShield02Leenspar * varShield02Quantity) + (varShield03Leenspar * varShield03Quantity) + (varShield04Leenspar * varShield04Quantity) + (varShield05Leenspar * varShield05Quantity) + (varShield06Leenspar * varShield06Quantity) + (varShield07Leenspar * varShield07Quantity) + (varShield08Leenspar * varShield08Quantity) + (varShield09Leenspar * varShield09Quantity) + (varShield10Leenspar * varShield10Quantity) + (varShield11Leenspar * varShield11Quantity) + (varShield12Leenspar * varShield12Quantity) + (varShield13Leenspar * varShield13Quantity) + (varShield14Leenspar * varShield14Quantity) + (varShield15Leenspar * varShield15Quantity) + (varShield16Leenspar * varShield16Quantity) + (varShield17Leenspar * varShield17Quantity) + (varShield18Leenspar * varShield18Quantity) + (varShield19Leenspar * varShield19Quantity) + (varShield20Leenspar * varShield20Quantity) + (varShield21Leenspar * varShield21Quantity) + (varShield22Leenspar * varShield22Quantity) + (varShield23Leenspar * varShield23Quantity) + (varShield24Leenspar * varShield24Quantity) + (varShield25Leenspar * varShield25Quantity) + (varShield26Leenspar * varShield26Quantity) + (varShield27Leenspar * varShield27Quantity) + (varShield28Leenspar * varShield28Quantity) + (varShield29Leenspar * varShield29Quantity) + (varShield30Leenspar * varShield30Quantity) + (varShield31Leenspar * varShield31Quantity) + (varShield32Leenspar * varShield32Quantity) + (varShield33Leenspar * varShield33Quantity) + (varShield34Leenspar * varShield34Quantity) + (varShield35Leenspar * varShield35Quantity) + (varShield36Leenspar * varShield36Quantity) + (varShield37Leenspar * varShield37Quantity) + (varShield38Leenspar * varShield38Quantity) + (varShield39Leenspar * varShield39Quantity) + (varShield40Leenspar * varShield40Quantity) + (varShield41Leenspar * varShield41Quantity) + (varShield42Leenspar * varShield42Quantity) + (varShield43Leenspar * varShield43Quantity) + (varShield44Leenspar * varShield44Quantity) + (varShield45Leenspar * varShield45Quantity) + (varShield46Leenspar * varShield46Quantity) + (varShield47Leenspar * varShield47Quantity) + (varShield48Leenspar * varShield48Quantity) + (varShield49Leenspar * varShield49Quantity) + (varShield50Leenspar * varShield50Quantity) + (varShield51Leenspar * varShield51Quantity) + (varShield52Leenspar * varShield52Quantity));
    varShieldTheyrilTotal = ((varShield01Theyril * varShield01Quantity) + (varShield02Theyril * varShield02Quantity) + (varShield03Theyril * varShield03Quantity) + (varShield04Theyril * varShield04Quantity) + (varShield05Theyril * varShield05Quantity) + (varShield06Theyril * varShield06Quantity) + (varShield07Theyril * varShield07Quantity) + (varShield08Theyril * varShield08Quantity) + (varShield09Theyril * varShield09Quantity) + (varShield10Theyril * varShield10Quantity) + (varShield11Theyril * varShield11Quantity) + (varShield12Theyril * varShield12Quantity) + (varShield13Theyril * varShield13Quantity) + (varShield14Theyril * varShield14Quantity) + (varShield15Theyril * varShield15Quantity) + (varShield16Theyril * varShield16Quantity) + (varShield17Theyril * varShield17Quantity) + (varShield18Theyril * varShield18Quantity) + (varShield19Theyril * varShield19Quantity) + (varShield20Theyril * varShield20Quantity) + (varShield21Theyril * varShield21Quantity) + (varShield22Theyril * varShield22Quantity) + (varShield23Theyril * varShield23Quantity) + (varShield24Theyril * varShield24Quantity) + (varShield25Theyril * varShield25Quantity) + (varShield26Theyril * varShield26Quantity) + (varShield27Theyril * varShield27Quantity) + (varShield28Theyril * varShield28Quantity) + (varShield29Theyril * varShield29Quantity) + (varShield30Theyril * varShield30Quantity) + (varShield31Theyril * varShield31Quantity) + (varShield32Theyril * varShield32Quantity) + (varShield33Theyril * varShield33Quantity) + (varShield34Theyril * varShield34Quantity) + (varShield35Theyril * varShield35Quantity) + (varShield36Theyril * varShield36Quantity) + (varShield37Theyril * varShield37Quantity) + (varShield38Theyril * varShield38Quantity) + (varShield39Theyril * varShield39Quantity) + (varShield40Theyril * varShield40Quantity) + (varShield41Theyril * varShield41Quantity) + (varShield42Theyril * varShield42Quantity) + (varShield43Theyril * varShield43Quantity) + (varShield44Theyril * varShield44Quantity) + (varShield45Theyril * varShield45Quantity) + (varShield46Theyril * varShield46Quantity) + (varShield47Theyril * varShield47Quantity) + (varShield48Theyril * varShield48Quantity) + (varShield49Theyril * varShield49Quantity) + (varShield50Theyril * varShield50Quantity) + (varShield51Theyril * varShield51Quantity) + (varShield52Theyril * varShield52Quantity));
}

//Shield Calculations
function fnShield()
{
    fnShieldSubPrice(varShield01Gold,varShield01Iron,varShield01Wood,varShield01Leather,varShield01Selentine,varShield01Veilron,varShield01Neithal,varShield01Leenspar,varShield01Theyril,varShield01Success)
    varShield01Price = varItemPrice;
    fnShieldSubPrice(varShield02Gold,varShield02Iron,varShield02Wood,varShield02Leather,varShield02Selentine,varShield02Veilron,varShield02Neithal,varShield02Leenspar,varShield02Theyril,varShield02Success)
    varShield02Price = varItemPrice;
    fnShieldSubPrice(varShield03Gold,varShield03Iron,varShield03Wood,varShield03Leather,varShield03Selentine,varShield03Veilron,varShield03Neithal,varShield03Leenspar,varShield03Theyril,varShield03Success)
    varShield03Price = varItemPrice;
    fnShieldSubPrice(varShield04Gold,varShield04Iron,varShield04Wood,varShield04Leather,varShield04Selentine,varShield04Veilron,varShield04Neithal,varShield04Leenspar,varShield04Theyril,varShield04Success)
    varShield04Price = varItemPrice;
    fnShieldSubPrice(varShield05Gold,varShield05Iron,varShield05Wood,varShield05Leather,varShield05Selentine,varShield05Veilron,varShield05Neithal,varShield05Leenspar,varShield05Theyril,varShield05Success)
    varShield05Price = varItemPrice;
    fnShieldSubPrice(varShield06Gold,varShield06Iron,varShield06Wood,varShield06Leather,varShield06Selentine,varShield06Veilron,varShield06Neithal,varShield06Leenspar,varShield06Theyril,varShield06Success)
    varShield06Price = varItemPrice;
    fnShieldSubPrice(varShield07Gold,varShield07Iron,varShield07Wood,varShield07Leather,varShield07Selentine,varShield07Veilron,varShield07Neithal,varShield07Leenspar,varShield07Theyril,varShield07Success)
    varShield07Price = varItemPrice;
    fnShieldSubPrice(varShield08Gold,varShield08Iron,varShield08Wood,varShield08Leather,varShield08Selentine,varShield08Veilron,varShield08Neithal,varShield08Leenspar,varShield08Theyril,varShield08Success)
    varShield08Price = varItemPrice;
    fnShieldSubPrice(varShield09Gold,varShield09Iron,varShield09Wood,varShield09Leather,varShield09Selentine,varShield09Veilron,varShield09Neithal,varShield09Leenspar,varShield09Theyril,varShield09Success)
    varShield09Price = varItemPrice;
    fnShieldSubPrice(varShield10Gold,varShield10Iron,varShield10Wood,varShield10Leather,varShield10Selentine,varShield10Veilron,varShield10Neithal,varShield10Leenspar,varShield10Theyril,varShield10Success)
    varShield10Price = varItemPrice;
    fnShieldSubPrice(varShield11Gold,varShield11Iron,varShield11Wood,varShield11Leather,varShield11Selentine,varShield11Veilron,varShield11Neithal,varShield11Leenspar,varShield11Theyril,varShield11Success)
    varShield11Price = varItemPrice;
    fnShieldSubPrice(varShield12Gold,varShield12Iron,varShield12Wood,varShield12Leather,varShield12Selentine,varShield12Veilron,varShield12Neithal,varShield12Leenspar,varShield12Theyril,varShield12Success)
    varShield12Price = varItemPrice;
    fnShieldSubPrice(varShield13Gold,varShield13Iron,varShield13Wood,varShield13Leather,varShield13Selentine,varShield13Veilron,varShield13Neithal,varShield13Leenspar,varShield13Theyril,varShield13Success)
    varShield13Price = varItemPrice;
    fnShieldSubPrice(varShield14Gold,varShield14Iron,varShield14Wood,varShield14Leather,varShield14Selentine,varShield14Veilron,varShield14Neithal,varShield14Leenspar,varShield14Theyril,varShield14Success)
    varShield14Price = varItemPrice;
    fnShieldSubPrice(varShield15Gold,varShield15Iron,varShield15Wood,varShield15Leather,varShield15Selentine,varShield15Veilron,varShield15Neithal,varShield15Leenspar,varShield15Theyril,varShield15Success)
    varShield15Price = varItemPrice;
    fnShieldSubPrice(varShield16Gold,varShield16Iron,varShield16Wood,varShield16Leather,varShield16Selentine,varShield16Veilron,varShield16Neithal,varShield16Leenspar,varShield16Theyril,varShield16Success)
    varShield16Price = varItemPrice;
    fnShieldSubPrice(varShield17Gold,varShield17Iron,varShield17Wood,varShield17Leather,varShield17Selentine,varShield17Veilron,varShield17Neithal,varShield17Leenspar,varShield17Theyril,varShield17Success)
    varShield17Price = varItemPrice;
    fnShieldSubPrice(varShield18Gold,varShield18Iron,varShield18Wood,varShield18Leather,varShield18Selentine,varShield18Veilron,varShield18Neithal,varShield18Leenspar,varShield18Theyril,varShield18Success)
    varShield18Price = varItemPrice;
    fnShieldSubPrice(varShield19Gold,varShield19Iron,varShield19Wood,varShield19Leather,varShield19Selentine,varShield19Veilron,varShield19Neithal,varShield19Leenspar,varShield19Theyril,varShield19Success)
    varShield19Price = varItemPrice;
    fnShieldSubPrice(varShield20Gold,varShield20Iron,varShield20Wood,varShield20Leather,varShield20Selentine,varShield20Veilron,varShield20Neithal,varShield20Leenspar,varShield20Theyril,varShield20Success)
    varShield20Price = varItemPrice;
    fnShieldSubPrice(varShield21Gold,varShield21Iron,varShield21Wood,varShield21Leather,varShield21Selentine,varShield21Veilron,varShield21Neithal,varShield21Leenspar,varShield21Theyril,varShield21Success)
    varShield21Price = varItemPrice;
    fnShieldSubPrice(varShield22Gold,varShield22Iron,varShield22Wood,varShield22Leather,varShield22Selentine,varShield22Veilron,varShield22Neithal,varShield22Leenspar,varShield22Theyril,varShield22Success)
    varShield22Price = varItemPrice;
    fnShieldSubPrice(varShield23Gold,varShield23Iron,varShield23Wood,varShield23Leather,varShield23Selentine,varShield23Veilron,varShield23Neithal,varShield23Leenspar,varShield23Theyril,varShield23Success)
    varShield23Price = varItemPrice;
    fnShieldSubPrice(varShield24Gold,varShield24Iron,varShield24Wood,varShield24Leather,varShield24Selentine,varShield24Veilron,varShield24Neithal,varShield24Leenspar,varShield24Theyril,varShield24Success)
    varShield24Price = varItemPrice;
    fnShieldSubPrice(varShield25Gold,varShield25Iron,varShield25Wood,varShield25Leather,varShield25Selentine,varShield25Veilron,varShield25Neithal,varShield25Leenspar,varShield25Theyril,varShield25Success)
    varShield25Price = varItemPrice;
    fnShieldSubPrice(varShield26Gold,varShield26Iron,varShield26Wood,varShield26Leather,varShield26Selentine,varShield26Veilron,varShield26Neithal,varShield26Leenspar,varShield26Theyril,varShield26Success)
    varShield26Price = varItemPrice;
    fnShieldSubPrice(varShield27Gold,varShield27Iron,varShield27Wood,varShield27Leather,varShield27Selentine,varShield27Veilron,varShield27Neithal,varShield27Leenspar,varShield27Theyril,varShield27Success)
    varShield27Price = varItemPrice;
    fnShieldSubPrice(varShield28Gold,varShield28Iron,varShield28Wood,varShield28Leather,varShield28Selentine,varShield28Veilron,varShield28Neithal,varShield28Leenspar,varShield28Theyril,varShield28Success)
    varShield28Price = varItemPrice;
    fnShieldSubPrice(varShield29Gold,varShield29Iron,varShield29Wood,varShield29Leather,varShield29Selentine,varShield29Veilron,varShield29Neithal,varShield29Leenspar,varShield29Theyril,varShield29Success)
    varShield29Price = varItemPrice;
    fnShieldSubPrice(varShield30Gold,varShield30Iron,varShield30Wood,varShield30Leather,varShield30Selentine,varShield30Veilron,varShield30Neithal,varShield30Leenspar,varShield30Theyril,varShield30Success)
    varShield30Price = varItemPrice;
    fnShieldSubPrice(varShield31Gold,varShield31Iron,varShield31Wood,varShield31Leather,varShield31Selentine,varShield31Veilron,varShield31Neithal,varShield31Leenspar,varShield31Theyril,varShield31Success)
    varShield31Price = varItemPrice;
    fnShieldSubPrice(varShield32Gold,varShield32Iron,varShield32Wood,varShield32Leather,varShield32Selentine,varShield32Veilron,varShield32Neithal,varShield32Leenspar,varShield32Theyril,varShield32Success)
    varShield32Price = varItemPrice;
    fnShieldSubPrice(varShield33Gold,varShield33Iron,varShield33Wood,varShield33Leather,varShield33Selentine,varShield33Veilron,varShield33Neithal,varShield33Leenspar,varShield33Theyril,varShield33Success)
    varShield33Price = varItemPrice;
    fnShieldSubPrice(varShield34Gold,varShield34Iron,varShield34Wood,varShield34Leather,varShield34Selentine,varShield34Veilron,varShield34Neithal,varShield34Leenspar,varShield34Theyril,varShield34Success)
    varShield34Price = varItemPrice;
    fnShieldSubPrice(varShield35Gold,varShield35Iron,varShield35Wood,varShield35Leather,varShield35Selentine,varShield35Veilron,varShield35Neithal,varShield35Leenspar,varShield35Theyril,varShield35Success)
    varShield35Price = varItemPrice;
    fnShieldSubPrice(varShield36Gold,varShield36Iron,varShield36Wood,varShield36Leather,varShield36Selentine,varShield36Veilron,varShield36Neithal,varShield36Leenspar,varShield36Theyril,varShield36Success)
    varShield36Price = varItemPrice;
    fnShieldSubPrice(varShield37Gold,varShield37Iron,varShield37Wood,varShield37Leather,varShield37Selentine,varShield37Veilron,varShield37Neithal,varShield37Leenspar,varShield37Theyril,varShield37Success)
    varShield37Price = varItemPrice;
    fnShieldSubPrice(varShield38Gold,varShield38Iron,varShield38Wood,varShield38Leather,varShield38Selentine,varShield38Veilron,varShield38Neithal,varShield38Leenspar,varShield38Theyril,varShield38Success)
    varShield38Price = varItemPrice;
    fnShieldSubPrice(varShield39Gold,varShield39Iron,varShield39Wood,varShield39Leather,varShield39Selentine,varShield39Veilron,varShield39Neithal,varShield39Leenspar,varShield39Theyril,varShield39Success)
    varShield39Price = varItemPrice;
    fnShieldSubPrice(varShield40Gold,varShield40Iron,varShield40Wood,varShield40Leather,varShield40Selentine,varShield40Veilron,varShield40Neithal,varShield40Leenspar,varShield40Theyril,varShield40Success)
    varShield40Price = varItemPrice;
    fnShieldSubPrice(varShield41Gold,varShield41Iron,varShield41Wood,varShield41Leather,varShield41Selentine,varShield41Veilron,varShield41Neithal,varShield41Leenspar,varShield41Theyril,varShield41Success)
    varShield41Price = varItemPrice;
    fnShieldSubPrice(varShield42Gold,varShield42Iron,varShield42Wood,varShield42Leather,varShield42Selentine,varShield42Veilron,varShield42Neithal,varShield42Leenspar,varShield42Theyril,varShield42Success)
    varShield42Price = varItemPrice;
    fnShieldSubPrice(varShield43Gold,varShield43Iron,varShield43Wood,varShield43Leather,varShield43Selentine,varShield43Veilron,varShield43Neithal,varShield43Leenspar,varShield43Theyril,varShield43Success)
    varShield43Price = varItemPrice;
    fnShieldSubPrice(varShield44Gold,varShield44Iron,varShield44Wood,varShield44Leather,varShield44Selentine,varShield44Veilron,varShield44Neithal,varShield44Leenspar,varShield44Theyril,varShield44Success)
    varShield44Price = varItemPrice;
    fnShieldSubPrice(varShield45Gold,varShield45Iron,varShield45Wood,varShield45Leather,varShield45Selentine,varShield45Veilron,varShield45Neithal,varShield45Leenspar,varShield45Theyril,varShield45Success)
    varShield45Price = varItemPrice;
    fnShieldSubPrice(varShield46Gold,varShield46Iron,varShield46Wood,varShield46Leather,varShield46Selentine,varShield46Veilron,varShield46Neithal,varShield46Leenspar,varShield46Theyril,varShield46Success)
    varShield46Price = varItemPrice;
    fnShieldSubPrice(varShield47Gold,varShield47Iron,varShield47Wood,varShield47Leather,varShield47Selentine,varShield47Veilron,varShield47Neithal,varShield47Leenspar,varShield47Theyril,varShield47Success)
    varShield47Price = varItemPrice;
    fnShieldSubPrice(varShield48Gold,varShield48Iron,varShield48Wood,varShield48Leather,varShield48Selentine,varShield48Veilron,varShield48Neithal,varShield48Leenspar,varShield48Theyril,varShield48Success)
    varShield48Price = varItemPrice;
    fnShieldSubPrice(varShield49Gold,varShield49Iron,varShield49Wood,varShield49Leather,varShield49Selentine,varShield49Veilron,varShield49Neithal,varShield49Leenspar,varShield49Theyril,varShield49Success)
    varShield49Price = varItemPrice;
    fnShieldSubPrice(varShield50Gold,varShield50Iron,varShield50Wood,varShield50Leather,varShield50Selentine,varShield50Veilron,varShield50Neithal,varShield50Leenspar,varShield50Theyril,varShield50Success)
    varShield50Price = varItemPrice;
    fnShieldSubPrice(varShield51Gold,varShield51Iron,varShield51Wood,varShield51Leather,varShield51Selentine,varShield51Veilron,varShield51Neithal,varShield51Leenspar,varShield51Theyril,varShield51Success)
    varShield51Price = varItemPrice;
    fnShieldSubPrice(varShield52Gold,varShield52Iron,varShield52Wood,varShield52Leather,varShield52Selentine,varShield52Veilron,varShield52Neithal,varShield52Leenspar,varShield52Theyril,varShield52Success)
    varShield52Price = varItemPrice;
}

function fnReloadShieldPrices()
{
    //Shield Prices
    document.getElementById('Shield01Price').value = varShield01Price;
    document.getElementById('Shield02Price').value = varShield02Price;
    document.getElementById('Shield03Price').value = varShield03Price;
    document.getElementById('Shield04Price').value = varShield04Price;
    document.getElementById('Shield05Price').value = varShield05Price;
    document.getElementById('Shield06Price').value = varShield06Price;
    document.getElementById('Shield07Price').value = varShield07Price;
    document.getElementById('Shield08Price').value = varShield08Price;
    document.getElementById('Shield09Price').value = varShield09Price;
    document.getElementById('Shield10Price').value = varShield10Price;
    document.getElementById('Shield11Price').value = varShield11Price;
    document.getElementById('Shield12Price').value = varShield12Price;
    document.getElementById('Shield13Price').value = varShield13Price;
    document.getElementById('Shield14Price').value = varShield14Price;
    document.getElementById('Shield15Price').value = varShield15Price;
    document.getElementById('Shield16Price').value = varShield16Price;
    document.getElementById('Shield17Price').value = varShield17Price;
    document.getElementById('Shield18Price').value = varShield18Price;
    document.getElementById('Shield19Price').value = varShield19Price;
    document.getElementById('Shield20Price').value = varShield20Price;
    document.getElementById('Shield21Price').value = varShield21Price;
    document.getElementById('Shield22Price').value = varShield22Price;
    document.getElementById('Shield23Price').value = varShield23Price;
    document.getElementById('Shield24Price').value = varShield24Price;
    document.getElementById('Shield25Price').value = varShield25Price;
    document.getElementById('Shield26Price').value = varShield26Price;
    document.getElementById('Shield27Price').value = varShield27Price;
    document.getElementById('Shield28Price').value = varShield28Price;
    document.getElementById('Shield29Price').value = varShield29Price;
    document.getElementById('Shield30Price').value = varShield30Price;
    document.getElementById('Shield31Price').value = varShield31Price;
    document.getElementById('Shield32Price').value = varShield32Price;
    document.getElementById('Shield33Price').value = varShield33Price;
    document.getElementById('Shield34Price').value = varShield34Price;
    document.getElementById('Shield35Price').value = varShield35Price;
    document.getElementById('Shield36Price').value = varShield36Price;
    document.getElementById('Shield37Price').value = varShield37Price;
    document.getElementById('Shield38Price').value = varShield38Price;
    document.getElementById('Shield39Price').value = varShield39Price;
    document.getElementById('Shield40Price').value = varShield40Price;
    document.getElementById('Shield41Price').value = varShield41Price;
    document.getElementById('Shield42Price').value = varShield42Price;
    document.getElementById('Shield43Price').value = varShield43Price;
    document.getElementById('Shield44Price').value = varShield44Price;
    document.getElementById('Shield45Price').value = varShield45Price;
    document.getElementById('Shield46Price').value = varShield46Price;
    document.getElementById('Shield47Price').value = varShield47Price;
    document.getElementById('Shield48Price').value = varShield48Price;
    document.getElementById('Shield49Price').value = varShield49Price;
    document.getElementById('Shield50Price').value = varShield50Price;
    document.getElementById('Shield51Price').value = varShield51Price;
    document.getElementById('Shield52Price').value = varShield52Price;

    //Shield Total Prices
    document.getElementById('ShieldTotal').value = varShieldTotal;
    document.getElementById('ShieldGoldTotal').value = varShieldGoldTotal;
    document.getElementById('ShieldIronTotal').value = varShieldIronTotal;
    document.getElementById('ShieldWoodTotal').value = varShieldWoodTotal;
    document.getElementById('ShieldLeatherTotal').value = varShieldLeatherTotal;
    document.getElementById('ShieldSelentineTotal').value = varShieldSelentineTotal;
    document.getElementById('ShieldVeilronTotal').value = varShieldVeilronTotal;
    document.getElementById('ShieldNeithalTotal').value = varShieldNeithalTotal;
    document.getElementById('ShieldLeensparTotal').value = varShieldLeensparTotal;
    document.getElementById('ShieldTheyrilTotal').value = varShieldTheyrilTotal;
}

function fnShieldInitialize()
{
    varShieldTotal = document.getElementById("ShieldTotal").value;
    varShieldGoldTotal = document.getElementById("ShieldGoldTotal").value;
    varShieldIronTotal = document.getElementById("ShieldIronTotal").value;
    varShieldWoodTotal = document.getElementById("ShieldWoodTotal").value;
    varShieldLeatherTotal = document.getElementById("ShieldLeatherTotal").value;
    varShieldSelentineTotal = document.getElementById("ShieldSelentineTotal").value;
    varShieldVeilronTotal = document.getElementById("ShieldVeilronTotal").value;
    varShieldNeithalTotal = document.getElementById("ShieldNeithalTotal").value;
    varShieldLeensparTotal = document.getElementById("ShieldLeensparTotal").value;
    varShieldTheyrilTotal = document.getElementById("ShieldTheyrilTotal").value;

    // *** SHIELD VARIABLES ***
	//Small Wooden Buckler
    varShield01Quantity = document.getElementById("Shield01Quantity").value;
    varShield01Price = document.getElementById("Shield01Price").value;
    varShield01Success = document.getElementById("Shield01Success").value;
    varShield01Gold = 0
    varShield01Iron = 0
    varShield01Wood = 3
    varShield01Leather = 1
    varShield01Selentine = 0
    varShield01Veilron = 0
    varShield01Neithal = 0
    varShield01Leenspar = 0
    varShield01Theyril = 0
	//Wood Buckler
    varShield02Quantity = document.getElementById("Shield02Quantity").value;
    varShield02Price = document.getElementById("Shield02Price").value;
    varShield02Success = document.getElementById("Shield02Success").value;
    varShield02Gold = 0
    varShield02Iron = 0
    varShield02Wood = 3
    varShield02Leather = 1
    varShield02Selentine = 0
    varShield02Veilron = 0
    varShield02Neithal = 0
    varShield02Leenspar = 0
    varShield02Theyril = 0
	//Wood Kite Shield
    varShield03Quantity = document.getElementById("Shield03Quantity").value;
    varShield03Price = document.getElementById("Shield03Price").value;
    varShield03Success = document.getElementById("Shield03Success").value;
    varShield03Gold = 0
    varShield03Iron = 0
    varShield03Wood = 3
    varShield03Leather = 1
    varShield03Selentine = 0
    varShield03Veilron = 0
    varShield03Neithal = 0
    varShield03Leenspar = 0
    varShield03Theyril = 0
	//Stake Shield
    varShield04Quantity = document.getElementById("Shield04Quantity").value;
    varShield04Price = document.getElementById("Shield04Price").value;
    varShield04Success = document.getElementById("Shield04Success").value;
    varShield04Gold = 0
    varShield04Iron = 0
    varShield04Wood = 3
    varShield04Leather = 1
    varShield04Selentine = 0
    varShield04Veilron = 0
    varShield04Neithal = 0
    varShield04Leenspar = 0
    varShield04Theyril = 0
	//Round Shield
    varShield05Quantity = document.getElementById("Shield05Quantity").value;
    varShield05Price = document.getElementById("Shield05Price").value;
    varShield05Success = document.getElementById("Shield05Success").value;
    varShield05Gold = 0
    varShield05Iron = 1
    varShield05Wood = 2
    varShield05Leather = 1
    varShield05Selentine = 0
    varShield05Veilron = 0
    varShield05Neithal = 0
    varShield05Leenspar = 0
    varShield05Theyril = 0
	//Corner Shield
    varShield06Quantity = document.getElementById("Shield06Quantity").value;
    varShield06Price = document.getElementById("Shield06Price").value;
    varShield06Success = document.getElementById("Shield06Success").value;
    varShield06Gold = 0
    varShield06Iron = 1
    varShield06Wood = 2
    varShield06Leather = 1
    varShield06Selentine = 0
    varShield06Veilron = 0
    varShield06Neithal = 0
    varShield06Leenspar = 0
    varShield06Theyril = 0
	//Cultist Shield
    varShield07Quantity = document.getElementById("Shield07Quantity").value;
    varShield07Price = document.getElementById("Shield07Price").value;
    varShield07Success = document.getElementById("Shield07Success").value;
    varShield07Gold = 5
    varShield07Iron = 0
    varShield07Wood = 1
    varShield07Leather = 5
    varShield07Selentine = 0
    varShield07Veilron = 0
    varShield07Neithal = 0
    varShield07Leenspar = 0
    varShield07Theyril = 0
	//Tall Shield
    varShield08Quantity = document.getElementById("Shield08Quantity").value;
    varShield08Price = document.getElementById("Shield08Price").value;
    varShield08Success = document.getElementById("Shield08Success").value;
    varShield08Gold = 5
    varShield08Iron = 0
    varShield08Wood = 5
    varShield08Leather = 1
    varShield08Selentine = 0
    varShield08Veilron = 0
    varShield08Neithal = 0
    varShield08Leenspar = 0
    varShield08Theyril = 0
	//Wooden Tower Shield
    varShield09Quantity = document.getElementById("Shield09Quantity").value;
    varShield09Price = document.getElementById("Shield09Price").value;
    varShield09Success = document.getElementById("Shield09Success").value;
    varShield09Gold = 5
    varShield09Iron = 0
    varShield09Wood = 5
    varShield09Leather = 1
    varShield09Selentine = 0
    varShield09Veilron = 0
    varShield09Neithal = 0
    varShield09Leenspar = 0
    varShield09Theyril = 0
	//Tribal Shield
    varShield10Quantity = document.getElementById("Shield10Quantity").value;
    varShield10Price = document.getElementById("Shield10Price").value;
    varShield10Success = document.getElementById("Shield10Success").value;
    varShield10Gold = 5
    varShield10Iron = 0
    varShield10Wood = 5
    varShield10Leather = 1
    varShield10Selentine = 0
    varShield10Veilron = 0
    varShield10Neithal = 0
    varShield10Leenspar = 0
    varShield10Theyril = 0
	//Sideward
    varShield11Quantity = document.getElementById("Shield11Quantity").value;
    varShield11Price = document.getElementById("Shield11Price").value;
    varShield11Success = document.getElementById("Shield11Success").value;
    varShield11Gold = 5
    varShield11Iron = 1
    varShield11Wood = 4
    varShield11Leather = 1
    varShield11Selentine = 0
    varShield11Veilron = 0
    varShield11Neithal = 0
    varShield11Leenspar = 0
    varShield11Theyril = 0
	//Inlaid Protector
    varShield12Quantity = document.getElementById("Shield12Quantity").value;
    varShield12Price = document.getElementById("Shield12Price").value;
    varShield12Success = document.getElementById("Shield12Success").value;
    varShield12Gold = 5
    varShield12Iron = 1
    varShield12Wood = 4
    varShield12Leather = 1
    varShield12Selentine = 0
    varShield12Veilron = 0
    varShield12Neithal = 0
    varShield12Leenspar = 0
    varShield12Theyril = 0
	//Guardian
    varShield13Quantity = document.getElementById("Shield13Quantity").value;
    varShield13Price = document.getElementById("Shield13Price").value;
    varShield13Success = document.getElementById("Shield13Success").value;
    varShield13Gold = 5
    varShield13Iron = 1
    varShield13Wood = 4
    varShield13Leather = 1
    varShield13Selentine = 0
    varShield13Veilron = 0
    varShield13Neithal = 0
    varShield13Leenspar = 0
    varShield13Theyril = 0
	//Spiked Scutum
    varShield14Quantity = document.getElementById("Shield14Quantity").value;
    varShield14Price = document.getElementById("Shield14Price").value;
    varShield14Success = document.getElementById("Shield14Success").value;
    varShield14Gold = 5
    varShield14Iron = 0
    varShield14Wood = 7
    varShield14Leather = 2
    varShield14Selentine = 0
    varShield14Veilron = 0
    varShield14Neithal = 0
    varShield14Leenspar = 0
    varShield14Theyril = 0
	//Large Shield
    varShield15Quantity = document.getElementById("Shield15Quantity").value;
    varShield15Price = document.getElementById("Shield15Price").value;
    varShield15Success = document.getElementById("Shield15Success").value;
    varShield15Gold = 5
    varShield15Iron = 2
    varShield15Wood = 5
    varShield15Leather = 2
    varShield15Selentine = 0
    varShield15Veilron = 0
    varShield15Neithal = 0
    varShield15Leenspar = 0
    varShield15Theyril = 0
	//Visage
    varShield16Quantity = document.getElementById("Shield16Quantity").value;
    varShield16Price = document.getElementById("Shield16Price").value;
    varShield16Success = document.getElementById("Shield16Success").value;
    varShield16Gold = 5
    varShield16Iron = 2
    varShield16Wood = 5
    varShield16Leather = 2
    varShield16Selentine = 0
    varShield16Veilron = 0
    varShield16Neithal = 0
    varShield16Leenspar = 0
    varShield16Theyril = 0
	//Inlaid Shield
    varShield17Quantity = document.getElementById("Shield17Quantity").value;
    varShield17Price = document.getElementById("Shield17Price").value;
    varShield17Success = document.getElementById("Shield17Success").value;
    varShield17Gold = 5
    varShield17Iron = 2
    varShield17Wood = 5
    varShield17Leather = 2
    varShield17Selentine = 0
    varShield17Veilron = 0
    varShield17Neithal = 0
    varShield17Leenspar = 0
    varShield17Theyril = 0
	//Thorned Protector
    varShield18Quantity = document.getElementById("Shield18Quantity").value;
    varShield18Price = document.getElementById("Shield18Price").value;
    varShield18Success = document.getElementById("Shield18Success").value;
    varShield18Gold = 5
    varShield18Iron = 3
    varShield18Wood = 4
    varShield18Leather = 2
    varShield18Selentine = 0
    varShield18Veilron = 0
    varShield18Neithal = 0
    varShield18Leenspar = 0
    varShield18Theyril = 0
	//Thorned Buckler
    varShield19Quantity = document.getElementById("Shield19Quantity").value;
    varShield19Price = document.getElementById("Shield19Price").value;
    varShield19Success = document.getElementById("Shield19Success").value;
    varShield19Gold = 5
    varShield19Iron = 3
    varShield19Wood = 4
    varShield19Leather = 2
    varShield19Selentine = 0
    varShield19Veilron = 0
    varShield19Neithal = 0
    varShield19Leenspar = 0
    varShield19Theyril = 0
	//Blade Shield
    varShield20Quantity = document.getElementById("Shield20Quantity").value;
    varShield20Price = document.getElementById("Shield20Price").value;
    varShield20Success = document.getElementById("Shield20Success").value;
    varShield20Gold = 5
    varShield20Iron = 3
    varShield20Wood = 4
    varShield20Leather = 2
    varShield20Selentine = 0
    varShield20Veilron = 0
    varShield20Neithal = 0
    varShield20Leenspar = 0
    varShield20Theyril = 0
	//Mercian Round Shield
    varShield21Quantity = document.getElementById("Shield21Quantity").value;
    varShield21Price = document.getElementById("Shield21Price").value;
    varShield21Success = document.getElementById("Shield21Success").value;
    varShield21Gold = 5
    varShield21Iron = 3
    varShield21Wood = 4
    varShield21Leather = 2
    varShield21Selentine = 0
    varShield21Veilron = 0
    varShield21Neithal = 0
    varShield21Leenspar = 0
    varShield21Theyril = 0
	//Mirdain Guardian
    varShield22Quantity = document.getElementById("Shield22Quantity").value;
    varShield22Price = document.getElementById("Shield22Price").value;
    varShield22Success = document.getElementById("Shield22Success").value;
    varShield22Gold = 5
    varShield22Iron = 4
    varShield22Wood = 3
    varShield22Leather = 2
    varShield22Selentine = 0
    varShield22Veilron = 0
    varShield22Neithal = 0
    varShield22Leenspar = 0
    varShield22Theyril = 0
	//Dwarven Battle Shield
    varShield23Quantity = document.getElementById("Shield23Quantity").value;
    varShield23Price = document.getElementById("Shield23Price").value;
    varShield23Success = document.getElementById("Shield23Success").value;
    varShield23Gold = 5
    varShield23Iron = 6
    varShield23Wood = 1
    varShield23Leather = 2
    varShield23Selentine = 0
    varShield23Veilron = 0
    varShield23Neithal = 0
    varShield23Leenspar = 0
    varShield23Theyril = 0
	//Mahirim War Shield
    varShield24Quantity = document.getElementById("Shield24Quantity").value;
    varShield24Price = document.getElementById("Shield24Price").value;
    varShield24Success = document.getElementById("Shield24Success").value;
    varShield24Gold = 5
    varShield24Iron = 4
    varShield24Wood = 3
    varShield24Leather = 2
    varShield24Selentine = 0
    varShield24Veilron = 0
    varShield24Neithal = 0
    varShield24Leenspar = 0
    varShield24Theyril = 0
	//Orkish Round Shield
    varShield25Quantity = document.getElementById("Shield25Quantity").value;
    varShield25Price = document.getElementById("Shield25Price").value;
    varShield25Success = document.getElementById("Shield25Success").value;
    varShield25Gold = 5
    varShield25Iron = 6
    varShield25Wood = 1
    varShield25Leather = 2
    varShield25Selentine = 0
    varShield25Veilron = 0
    varShield25Neithal = 0
    varShield25Leenspar = 0
    varShield25Theyril = 0
	//Alfar Buckler
    varShield26Quantity = document.getElementById("Shield26Quantity").value;
    varShield26Price = document.getElementById("Shield26Price").value;
    varShield26Success = document.getElementById("Shield26Success").value;
    varShield26Gold = 5
    varShield26Iron = 5
    varShield26Wood = 2
    varShield26Leather = 2
    varShield26Selentine = 0
    varShield26Veilron = 0
    varShield26Neithal = 0
    varShield26Leenspar = 0
    varShield26Theyril = 0
	//Neithguard
    varShield27Quantity = document.getElementById("Shield27Quantity").value;
    varShield27Price = document.getElementById("Shield27Price").value;
    varShield27Success = document.getElementById("Shield27Success").value;
    varShield27Gold = 15
    varShield27Iron = 2
    varShield27Wood = 8
    varShield27Leather = 2
    varShield27Selentine = 0
    varShield27Veilron = 0
    varShield27Neithal = 0
    varShield27Leenspar = 0
    varShield27Theyril = 0
	//Spider's Web
    varShield28Quantity = document.getElementById("Shield28Quantity").value;
    varShield28Price = document.getElementById("Shield28Price").value;
    varShield28Success = document.getElementById("Shield28Success").value;
    varShield28Gold = 15
    varShield28Iron = 4
    varShield28Wood = 6
    varShield28Leather = 2
    varShield28Selentine = 0
    varShield28Veilron = 0
    varShield28Neithal = 0
    varShield28Leenspar = 0
    varShield28Theyril = 0
	//Reinforced Blade Shield
    varShield29Quantity = document.getElementById("Shield29Quantity").value;
    varShield29Price = document.getElementById("Shield29Price").value;
    varShield29Success = document.getElementById("Shield29Success").value;
    varShield29Gold = 15
    varShield29Iron = 5
    varShield29Wood = 5
    varShield29Leather = 2
    varShield29Selentine = 0
    varShield29Veilron = 0
    varShield29Neithal = 0
    varShield29Leenspar = 0
    varShield29Theyril = 0
	//Angra Ward
    varShield30Quantity = document.getElementById("Shield30Quantity").value;
    varShield30Price = document.getElementById("Shield30Price").value;
    varShield30Success = document.getElementById("Shield30Success").value;
    varShield30Gold = 15
    varShield30Iron = 5
    varShield30Wood = 5
    varShield30Leather = 2
    varShield30Selentine = 0
    varShield30Veilron = 0
    varShield30Neithal = 0
    varShield30Leenspar = 0
    varShield30Theyril = 0
	//Iron Enforcer
    varShield31Quantity = document.getElementById("Shield31Quantity").value;
    varShield31Price = document.getElementById("Shield31Price").value;
    varShield31Success = document.getElementById("Shield31Success").value;
    varShield31Gold = 15
    varShield31Iron = 6
    varShield31Wood = 4
    varShield31Leather = 2
    varShield31Selentine = 0
    varShield31Veilron = 0
    varShield31Neithal = 0
    varShield31Leenspar = 0
    varShield31Theyril = 0
	//Masquerade
    varShield32Quantity = document.getElementById("Shield32Quantity").value;
    varShield32Price = document.getElementById("Shield32Price").value;
    varShield32Success = document.getElementById("Shield32Success").value;
    varShield32Gold = 15
    varShield32Iron = 7
    varShield32Wood = 3
    varShield32Leather = 2
    varShield32Selentine = 0
    varShield32Veilron = 0
    varShield32Neithal = 0
    varShield32Leenspar = 0
    varShield32Theyril = 0
	//Alderward
    varShield33Quantity = document.getElementById("Shield33Quantity").value;
    varShield33Price = document.getElementById("Shield33Price").value;
    varShield33Success = document.getElementById("Shield33Success").value;
    varShield33Gold = 15
    varShield33Iron = 7
    varShield33Wood = 3
    varShield33Leather = 2
    varShield33Selentine = 0
    varShield33Veilron = 0
    varShield33Neithal = 0
    varShield33Leenspar = 0
    varShield33Theyril = 0
	//Scarabios
    varShield34Quantity = document.getElementById("Shield34Quantity").value;
    varShield34Price = document.getElementById("Shield34Price").value;
    varShield34Success = document.getElementById("Shield34Success").value;
    varShield34Gold = 15
    varShield34Iron = 8
    varShield34Wood = 1
    varShield34Leather = 3
    varShield34Selentine = 0
    varShield34Veilron = 0
    varShield34Neithal = 0
    varShield34Leenspar = 0
    varShield34Theyril = 0
	//Star of Eanna
    varShield35Quantity = document.getElementById("Shield35Quantity").value;
    varShield35Price = document.getElementById("Shield35Price").value;
    varShield35Success = document.getElementById("Shield35Success").value;
    varShield35Gold = 15
    varShield35Iron = 7
    varShield35Wood = 3
    varShield35Leather = 2
    varShield35Selentine = 0
    varShield35Veilron = 0
    varShield35Neithal = 0
    varShield35Leenspar = 0
    varShield35Theyril = 0
	//Aspis
    varShield36Quantity = document.getElementById("Shield36Quantity").value;
    varShield36Price = document.getElementById("Shield36Price").value;
    varShield36Success = document.getElementById("Shield36Success").value;
    varShield36Gold = 120
    varShield36Iron = 5
    varShield36Wood = 9
    varShield36Leather = 4
    varShield36Selentine = 0
    varShield36Veilron = 0
    varShield36Neithal = 0
    varShield36Leenspar = 0
    varShield36Theyril = 0
	//Heater
    varShield37Quantity = document.getElementById("Shield37Quantity").value;
    varShield37Price = document.getElementById("Shield37Price").value;
    varShield37Success = document.getElementById("Shield37Success").value;
    varShield37Gold = 120
    varShield37Iron = 6
    varShield37Wood = 8
    varShield37Leather = 2
    varShield37Selentine = 0
    varShield37Veilron = 0
    varShield37Neithal = 0
    varShield37Leenspar = 0
    varShield37Theyril = 0
	//Arachnia
    varShield38Quantity = document.getElementById("Shield38Quantity").value;
    varShield38Price = document.getElementById("Shield38Price").value;
    varShield38Success = document.getElementById("Shield38Success").value;
    varShield38Gold = 120
    varShield38Iron = 7
    varShield38Wood = 7
    varShield38Leather = 2
    varShield38Selentine = 0
    varShield38Veilron = 0
    varShield38Neithal = 0
    varShield38Leenspar = 0
    varShield38Theyril = 0
	//Darkguard
    varShield39Quantity = document.getElementById("Shield39Quantity").value;
    varShield39Price = document.getElementById("Shield39Price").value;
    varShield39Success = document.getElementById("Shield39Success").value;
    varShield39Gold = 120
    varShield39Iron = 8
    varShield39Wood = 6
    varShield39Leather = 2
    varShield39Selentine = 0
    varShield39Veilron = 0
    varShield39Neithal = 0
    varShield39Leenspar = 0
    varShield39Theyril = 0
	//Seeker
    varShield40Quantity = document.getElementById("Shield40Quantity").value;
    varShield40Price = document.getElementById("Shield40Price").value;
    varShield40Success = document.getElementById("Shield40Success").value;
    varShield40Gold = 120
    varShield40Iron = 8
    varShield40Wood = 6
    varShield40Leather = 2
    varShield40Selentine = 0
    varShield40Veilron = 0
    varShield40Neithal = 0
    varShield40Leenspar = 0
    varShield40Theyril = 0
	//Dawnguard
    varShield41Quantity = document.getElementById("Shield41Quantity").value;
    varShield41Price = document.getElementById("Shield41Price").value;
    varShield41Success = document.getElementById("Shield41Success").value;
    varShield41Gold = 120
    varShield41Iron = 10
    varShield41Wood = 4
    varShield41Leather = 2
    varShield41Selentine = 0
    varShield41Veilron = 0
    varShield41Neithal = 0
    varShield41Leenspar = 0
    varShield41Theyril = 0
	//Mercian Heater
    varShield42Quantity = document.getElementById("Shield42Quantity").value;
    varShield42Price = document.getElementById("Shield42Price").value;
    varShield42Success = document.getElementById("Shield42Success").value;
    varShield42Gold = 120
    varShield42Iron = 7
    varShield42Wood = 6
    varShield42Leather = 2
    varShield42Selentine = 0
    varShield42Veilron = 0
    varShield42Neithal = 0
    varShield42Leenspar = 0
    varShield42Theyril = 0
	//Mirdain Protector
    varShield43Quantity = document.getElementById("Shield43Quantity").value;
    varShield43Price = document.getElementById("Shield43Price").value;
    varShield43Success = document.getElementById("Shield43Success").value;
    varShield43Gold = 120
    varShield43Iron = 6
    varShield43Wood = 8
    varShield43Leather = 2
    varShield43Selentine = 0
    varShield43Veilron = 0
    varShield43Neithal = 0
    varShield43Leenspar = 0
    varShield43Theyril = 0
	//Dwarven Defender
    varShield44Quantity = document.getElementById("Shield44Quantity").value;
    varShield44Price = document.getElementById("Shield44Price").value;
    varShield44Success = document.getElementById("Shield44Success").value;
    varShield44Gold = 120
    varShield44Iron = 11
    varShield44Wood = 3
    varShield44Leather = 2
    varShield44Selentine = 0
    varShield44Veilron = 0
    varShield44Neithal = 0
    varShield44Leenspar = 0
    varShield44Theyril = 0
	//Mahirim Hunter Shield
    varShield45Quantity = document.getElementById("Shield45Quantity").value;
    varShield45Price = document.getElementById("Shield45Price").value;
    varShield45Success = document.getElementById("Shield45Success").value;
    varShield45Gold = 120
    varShield45Iron = 5
    varShield45Wood = 5
    varShield45Leather = 6
    varShield45Selentine = 0
    varShield45Veilron = 0
    varShield45Neithal = 0
    varShield45Leenspar = 0
    varShield45Theyril = 0
	//Orkish Large Shield
    varShield46Quantity = document.getElementById("Shield46Quantity").value;
    varShield46Price = document.getElementById("Shield46Price").value;
    varShield46Success = document.getElementById("Shield46Success").value;
    varShield46Gold = 120
    varShield46Iron = 10
    varShield46Wood = 4
    varShield46Leather = 2
    varShield46Selentine = 0
    varShield46Veilron = 0
    varShield46Neithal = 0
    varShield46Leenspar = 0
    varShield46Theyril = 0
	//Alfar Large Shield
    varShield47Quantity = document.getElementById("Shield47Quantity").value;
    varShield47Price = document.getElementById("Shield47Price").value;
    varShield47Success = document.getElementById("Shield47Success").value;
    varShield47Gold = 120
    varShield47Iron = 8
    varShield47Wood = 6
    varShield47Leather = 2
    varShield47Selentine = 0
    varShield47Veilron = 0
    varShield47Neithal = 0
    varShield47Leenspar = 0
    varShield47Theyril = 0
	//Earthrune
    varShield48Quantity = document.getElementById("Shield48Quantity").value;
    varShield48Price = document.getElementById("Shield48Price").value;
    varShield48Success = document.getElementById("Shield48Success").value;
    varShield48Gold = 230
    varShield48Iron = 7
    varShield48Wood = 7
    varShield48Leather = 2
    varShield48Selentine = 0
    varShield48Veilron = 1
    varShield48Neithal = 0
    varShield48Leenspar = 0
    varShield48Theyril = 0
	//Frostshroud
    varShield49Quantity = document.getElementById("Shield49Quantity").value;
    varShield49Price = document.getElementById("Shield49Price").value;
    varShield49Success = document.getElementById("Shield49Success").value;
    varShield49Gold = 230
    varShield49Iron = 7
    varShield49Wood = 7
    varShield49Leather = 2
    varShield49Selentine = 0
    varShield49Veilron = 0
    varShield49Neithal = 1
    varShield49Leenspar = 0
    varShield49Theyril = 0
	//Moonshade
    varShield50Quantity = document.getElementById("Shield50Quantity").value;
    varShield50Price = document.getElementById("Shield50Price").value;
    varShield50Success = document.getElementById("Shield50Success").value;
    varShield50Gold = 230
    varShield50Iron = 7
    varShield50Wood = 7
    varShield50Leather = 2
    varShield50Selentine = 0
    varShield50Veilron = 0
    varShield50Neithal = 0
    varShield50Leenspar = 1
    varShield50Theyril = 0
	//Aegis
    varShield51Quantity = document.getElementById("Shield51Quantity").value;
    varShield51Price = document.getElementById("Shield51Price").value;
    varShield51Success = document.getElementById("Shield51Success").value;
    varShield51Gold = 230
    varShield51Iron = 7
    varShield51Wood = 7
    varShield51Leather = 2
    varShield51Selentine = 1
    varShield51Veilron = 0
    varShield51Neithal = 0
    varShield51Leenspar = 0
    varShield51Theyril = 0
	//Shredder
    varShield52Quantity = document.getElementById("Shield52Quantity").value;
    varShield52Price = document.getElementById("Shield52Price").value;
    varShield52Success = document.getElementById("Shield52Success").value;
    varShield52Gold = 230
    varShield52Iron = 9
    varShield52Wood = 5
    varShield52Leather = 2
    varShield52Selentine = 0
    varShield52Veilron = 0
    varShield52Neithal = 0
    varShield52Leenspar = 0
    varShield52Theyril = 1
}

/* BOW */

//Used to reload items from Bow
function fnBowReload()  // x= id, z= value
{
    fnBowInitialize()

    fnBow()

    fnBowTotal()
    fnReloadBowPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
// a=Gold, b=Iron Quantity, c=Wood Quantity, d=Leather Quantity, e=Selentine Quantity, f=Veilron Quantity, g=Neithal Quantity, h=Theyril Quantity, i=Bone Quantity, j=Seedwood Quantity, k=Success Rate
function fnBowSubPrice(a,b,c,d,e,f,g,h,i,j,k)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varTheyril = parseInt(h)
    varBone = parseInt(i)
    varSeedwood = parseInt(j)
    varSuccess = parseInt(k)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varTheyril * varTheyrilIngotValue) + (varBone * varBoneValue) + (varSeedwood * varSeedwoodValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Bow
function fnBowTotal()
{
    varBowTotal = ((varBow01Price * varBow01Quantity) + (varBow02Price * varBow02Quantity) + (varBow03Price * varBow03Quantity) + (varBow04Price * varBow04Quantity) + (varBow05Price * varBow05Quantity) + (varBow06Price * varBow06Quantity) + (varBow07Price * varBow07Quantity) + (varBow08Price * varBow08Quantity) + (varBow09Price * varBow09Quantity) + (varBow10Price * varBow10Quantity) + (varBow11Price * varBow11Quantity) + (varBow12Price * varBow12Quantity) + (varBow13Price * varBow13Quantity) + (varBow14Price * varBow14Quantity) + (varBow15Price * varBow15Quantity) + (varBow16Price * varBow16Quantity) + (varBow17Price * varBow17Quantity) + (varBow18Price * varBow18Quantity) + (varBow19Price * varBow19Quantity) + (varBow20Price * varBow20Quantity) + (varBow21Price * varBow21Quantity) + (varBow22Price * varBow22Quantity) + (varBow23Price * varBow23Quantity));
    varBowGoldTotal = ((varBow01Gold * varBow01Quantity) + (varBow02Gold * varBow02Quantity) + (varBow03Gold * varBow03Quantity) + (varBow04Gold * varBow04Quantity) + (varBow05Gold * varBow05Quantity) + (varBow06Gold * varBow06Quantity) + (varBow07Gold * varBow07Quantity) + (varBow08Gold * varBow08Quantity) + (varBow09Gold * varBow09Quantity) + (varBow10Gold * varBow10Quantity) + (varBow11Gold * varBow11Quantity) + (varBow12Gold * varBow12Quantity) + (varBow13Gold * varBow13Quantity) + (varBow14Gold * varBow14Quantity) + (varBow15Gold * varBow15Quantity) + (varBow16Gold * varBow16Quantity) + (varBow17Gold * varBow17Quantity) + (varBow18Gold * varBow18Quantity) + (varBow19Gold * varBow19Quantity) + (varBow20Gold * varBow20Quantity) + (varBow21Gold * varBow21Quantity) + (varBow22Gold * varBow22Quantity) + (varBow23Gold * varBow23Quantity));
    varBowIronTotal = ((varBow01Iron * varBow01Quantity) + (varBow02Iron * varBow02Quantity) + (varBow03Iron * varBow03Quantity) + (varBow04Iron * varBow04Quantity) + (varBow05Iron * varBow05Quantity) + (varBow06Iron * varBow06Quantity) + (varBow07Iron * varBow07Quantity) + (varBow08Iron * varBow08Quantity) + (varBow09Iron * varBow09Quantity) + (varBow10Iron * varBow10Quantity) + (varBow11Iron * varBow11Quantity) + (varBow12Iron * varBow12Quantity) + (varBow13Iron * varBow13Quantity) + (varBow14Iron * varBow14Quantity) + (varBow15Iron * varBow15Quantity) + (varBow16Iron * varBow16Quantity) + (varBow17Iron * varBow17Quantity) + (varBow18Iron * varBow18Quantity) + (varBow19Iron * varBow19Quantity) + (varBow20Iron * varBow20Quantity) + (varBow21Iron * varBow21Quantity) + (varBow22Iron * varBow22Quantity) + (varBow23Iron * varBow23Quantity));
    varBowWoodTotal = ((varBow01Wood * varBow01Quantity) + (varBow02Wood * varBow02Quantity) + (varBow03Wood * varBow03Quantity) + (varBow04Wood * varBow04Quantity) + (varBow05Wood * varBow05Quantity) + (varBow06Wood * varBow06Quantity) + (varBow07Wood * varBow07Quantity) + (varBow08Wood * varBow08Quantity) + (varBow09Wood * varBow09Quantity) + (varBow10Wood * varBow10Quantity) + (varBow11Wood * varBow11Quantity) + (varBow12Wood * varBow12Quantity) + (varBow13Wood * varBow13Quantity) + (varBow14Wood * varBow14Quantity) + (varBow15Wood * varBow15Quantity) + (varBow16Wood * varBow16Quantity) + (varBow17Wood * varBow17Quantity) + (varBow18Wood * varBow18Quantity) + (varBow19Wood * varBow19Quantity) + (varBow20Wood * varBow20Quantity) + (varBow21Wood * varBow21Quantity) + (varBow22Wood * varBow22Quantity) + (varBow23Wood * varBow23Quantity));
    varBowLeatherTotal = ((varBow01Leather * varBow01Quantity) + (varBow02Leather * varBow02Quantity) + (varBow03Leather * varBow03Quantity) + (varBow04Leather * varBow04Quantity) + (varBow05Leather * varBow05Quantity) + (varBow06Leather * varBow06Quantity) + (varBow07Leather * varBow07Quantity) + (varBow08Leather * varBow08Quantity) + (varBow09Leather * varBow09Quantity) + (varBow10Leather * varBow10Quantity) + (varBow11Leather * varBow11Quantity) + (varBow12Leather * varBow12Quantity) + (varBow13Leather * varBow13Quantity) + (varBow14Leather * varBow14Quantity) + (varBow15Leather * varBow15Quantity) + (varBow16Leather * varBow16Quantity) + (varBow17Leather * varBow17Quantity) + (varBow18Leather * varBow18Quantity) + (varBow19Leather * varBow19Quantity) + (varBow20Leather * varBow20Quantity) + (varBow21Leather * varBow21Quantity) + (varBow22Leather * varBow22Quantity) + (varBow23Leather * varBow23Quantity));
    varBowSelentineTotal = ((varBow01Selentine * varBow01Quantity) + (varBow02Selentine * varBow02Quantity) + (varBow03Selentine * varBow03Quantity) + (varBow04Selentine * varBow04Quantity) + (varBow05Selentine * varBow05Quantity) + (varBow06Selentine * varBow06Quantity) + (varBow07Selentine * varBow07Quantity) + (varBow08Selentine * varBow08Quantity) + (varBow09Selentine * varBow09Quantity) + (varBow10Selentine * varBow10Quantity) + (varBow11Selentine * varBow11Quantity) + (varBow12Selentine * varBow12Quantity) + (varBow13Selentine * varBow13Quantity) + (varBow14Selentine * varBow14Quantity) + (varBow15Selentine * varBow15Quantity) + (varBow16Selentine * varBow16Quantity) + (varBow17Selentine * varBow17Quantity) + (varBow18Selentine * varBow18Quantity) + (varBow19Selentine * varBow19Quantity) + (varBow20Selentine * varBow20Quantity) + (varBow21Selentine * varBow21Quantity) + (varBow22Selentine * varBow22Quantity) + (varBow23Selentine * varBow23Quantity));
    varBowVeilronTotal = ((varBow01Veilron * varBow01Quantity) + (varBow02Veilron * varBow02Quantity) + (varBow03Veilron * varBow03Quantity) + (varBow04Veilron * varBow04Quantity) + (varBow05Veilron * varBow05Quantity) + (varBow06Veilron * varBow06Quantity) + (varBow07Veilron * varBow07Quantity) + (varBow08Veilron * varBow08Quantity) + (varBow09Veilron * varBow09Quantity) + (varBow10Veilron * varBow10Quantity) + (varBow11Veilron * varBow11Quantity) + (varBow12Veilron * varBow12Quantity) + (varBow13Veilron * varBow13Quantity) + (varBow14Veilron * varBow14Quantity) + (varBow15Veilron * varBow15Quantity) + (varBow16Veilron * varBow16Quantity) + (varBow17Veilron * varBow17Quantity) + (varBow18Veilron * varBow18Quantity) + (varBow19Veilron * varBow19Quantity) + (varBow20Veilron * varBow20Quantity) + (varBow21Veilron * varBow21Quantity) + (varBow22Veilron * varBow22Quantity) + (varBow23Veilron * varBow23Quantity));
    varBowNeithalTotal = ((varBow01Neithal * varBow01Quantity) + (varBow02Neithal * varBow02Quantity) + (varBow03Neithal * varBow03Quantity) + (varBow04Neithal * varBow04Quantity) + (varBow05Neithal * varBow05Quantity) + (varBow06Neithal * varBow06Quantity) + (varBow07Neithal * varBow07Quantity) + (varBow08Neithal * varBow08Quantity) + (varBow09Neithal * varBow09Quantity) + (varBow10Neithal * varBow10Quantity) + (varBow11Neithal * varBow11Quantity) + (varBow12Neithal * varBow12Quantity) + (varBow13Neithal * varBow13Quantity) + (varBow14Neithal * varBow14Quantity) + (varBow15Neithal * varBow15Quantity) + (varBow16Neithal * varBow16Quantity) + (varBow17Neithal * varBow17Quantity) + (varBow18Neithal * varBow18Quantity) + (varBow19Neithal * varBow19Quantity) + (varBow20Neithal * varBow20Quantity) + (varBow21Neithal * varBow21Quantity) + (varBow22Neithal * varBow22Quantity) + (varBow23Neithal * varBow23Quantity));
    varBowTheyrilTotal = ((varBow01Theyril * varBow01Quantity) + (varBow02Theyril * varBow02Quantity) + (varBow03Theyril * varBow03Quantity) + (varBow04Theyril * varBow04Quantity) + (varBow05Theyril * varBow05Quantity) + (varBow06Theyril * varBow06Quantity) + (varBow07Theyril * varBow07Quantity) + (varBow08Theyril * varBow08Quantity) + (varBow09Theyril * varBow09Quantity) + (varBow10Theyril * varBow10Quantity) + (varBow11Theyril * varBow11Quantity) + (varBow12Theyril * varBow12Quantity) + (varBow13Theyril * varBow13Quantity) + (varBow14Theyril * varBow14Quantity) + (varBow15Theyril * varBow15Quantity) + (varBow16Theyril * varBow16Quantity) + (varBow17Theyril * varBow17Quantity) + (varBow18Theyril * varBow18Quantity) + (varBow19Theyril * varBow19Quantity) + (varBow20Theyril * varBow20Quantity) + (varBow21Theyril * varBow21Quantity) + (varBow22Theyril * varBow22Quantity) + (varBow23Theyril * varBow23Quantity));
    varBowBoneTotal = ((varBow01Bone * varBow01Quantity) + (varBow02Bone * varBow02Quantity) + (varBow03Bone * varBow03Quantity) + (varBow04Bone * varBow04Quantity) + (varBow05Bone * varBow05Quantity) + (varBow06Bone * varBow06Quantity) + (varBow07Bone * varBow07Quantity) + (varBow08Bone * varBow08Quantity) + (varBow09Bone * varBow09Quantity) + (varBow10Bone * varBow10Quantity) + (varBow11Bone * varBow11Quantity) + (varBow12Bone * varBow12Quantity) + (varBow13Bone * varBow13Quantity) + (varBow14Bone * varBow14Quantity) + (varBow15Bone * varBow15Quantity) + (varBow16Bone * varBow16Quantity) + (varBow17Bone * varBow17Quantity) + (varBow18Bone * varBow18Quantity) + (varBow19Bone * varBow19Quantity) + (varBow20Bone * varBow20Quantity) + (varBow21Bone * varBow21Quantity) + (varBow22Bone * varBow22Quantity) + (varBow23Bone * varBow23Quantity));
    varBowSeedwoodTotal = ((varBow01Seedwood * varBow01Quantity) + (varBow02Seedwood * varBow02Quantity) + (varBow03Seedwood * varBow03Quantity) + (varBow04Seedwood * varBow04Quantity) + (varBow05Seedwood * varBow05Quantity) + (varBow06Seedwood * varBow06Quantity) + (varBow07Seedwood * varBow07Quantity) + (varBow08Seedwood * varBow08Quantity) + (varBow09Seedwood * varBow09Quantity) + (varBow10Seedwood * varBow10Quantity) + (varBow11Seedwood * varBow11Quantity) + (varBow12Seedwood * varBow12Quantity) + (varBow13Seedwood * varBow13Quantity) + (varBow14Seedwood * varBow14Quantity) + (varBow15Seedwood * varBow15Quantity) + (varBow16Seedwood * varBow16Quantity) + (varBow17Seedwood * varBow17Quantity) + (varBow18Seedwood * varBow18Quantity) + (varBow19Seedwood * varBow19Quantity) + (varBow20Seedwood * varBow20Quantity) + (varBow21Seedwood * varBow21Quantity) + (varBow22Seedwood * varBow22Quantity) + (varBow23Seedwood * varBow23Quantity));
}

//Bow Calculations
function fnBow()
{
    fnBowSubPrice(varBow01Gold,varBow01Iron,varBow01Wood,varBow01Leather,varBow01Selentine,varBow01Veilron,varBow01Neithal,varBow01Theyril,varBow01Bone,varBow01Seedwood,varBow01Success)
    varBow01Price = varItemPrice;
    fnBowSubPrice(varBow02Gold,varBow02Iron,varBow02Wood,varBow02Leather,varBow02Selentine,varBow02Veilron,varBow02Neithal,varBow02Theyril,varBow02Bone,varBow02Seedwood,varBow02Success)
    varBow02Price = varItemPrice;
    fnBowSubPrice(varBow03Gold,varBow03Iron,varBow03Wood,varBow03Leather,varBow03Selentine,varBow03Veilron,varBow03Neithal,varBow03Theyril,varBow03Bone,varBow03Seedwood,varBow03Success)
    varBow03Price = varItemPrice;
    fnBowSubPrice(varBow04Gold,varBow04Iron,varBow04Wood,varBow04Leather,varBow04Selentine,varBow04Veilron,varBow04Neithal,varBow04Theyril,varBow04Bone,varBow04Seedwood,varBow04Success)
    varBow04Price = varItemPrice;
    fnBowSubPrice(varBow05Gold,varBow05Iron,varBow05Wood,varBow05Leather,varBow05Selentine,varBow05Veilron,varBow05Neithal,varBow05Theyril,varBow05Bone,varBow05Seedwood,varBow05Success)
    varBow05Price = varItemPrice;
    fnBowSubPrice(varBow06Gold,varBow06Iron,varBow06Wood,varBow06Leather,varBow06Selentine,varBow06Veilron,varBow06Neithal,varBow06Theyril,varBow06Bone,varBow06Seedwood,varBow06Success)
    varBow06Price = varItemPrice;
    fnBowSubPrice(varBow07Gold,varBow07Iron,varBow07Wood,varBow07Leather,varBow07Selentine,varBow07Veilron,varBow07Neithal,varBow07Theyril,varBow07Bone,varBow07Seedwood,varBow07Success)
    varBow07Price = varItemPrice;
    fnBowSubPrice(varBow08Gold,varBow08Iron,varBow08Wood,varBow08Leather,varBow08Selentine,varBow08Veilron,varBow08Neithal,varBow08Theyril,varBow08Bone,varBow08Seedwood,varBow08Success)
    varBow08Price = varItemPrice;
    fnBowSubPrice(varBow09Gold,varBow09Iron,varBow09Wood,varBow09Leather,varBow09Selentine,varBow09Veilron,varBow09Neithal,varBow09Theyril,varBow09Bone,varBow09Seedwood,varBow09Success)
    varBow09Price = varItemPrice;
    fnBowSubPrice(varBow10Gold,varBow10Iron,varBow10Wood,varBow10Leather,varBow10Selentine,varBow10Veilron,varBow10Neithal,varBow10Theyril,varBow10Bone,varBow10Seedwood,varBow10Success)
    varBow10Price = varItemPrice;
    fnBowSubPrice(varBow11Gold,varBow11Iron,varBow11Wood,varBow11Leather,varBow11Selentine,varBow11Veilron,varBow11Neithal,varBow11Theyril,varBow11Bone,varBow11Seedwood,varBow11Success)
    varBow11Price = varItemPrice;
    fnBowSubPrice(varBow12Gold,varBow12Iron,varBow12Wood,varBow12Leather,varBow12Selentine,varBow12Veilron,varBow12Neithal,varBow12Theyril,varBow12Bone,varBow12Seedwood,varBow12Success)
    varBow12Price = varItemPrice;
    fnBowSubPrice(varBow13Gold,varBow13Iron,varBow13Wood,varBow13Leather,varBow13Selentine,varBow13Veilron,varBow13Neithal,varBow13Theyril,varBow13Bone,varBow13Seedwood,varBow13Success)
    varBow13Price = varItemPrice;
    fnBowSubPrice(varBow14Gold,varBow14Iron,varBow14Wood,varBow14Leather,varBow14Selentine,varBow14Veilron,varBow14Neithal,varBow14Theyril,varBow14Bone,varBow14Seedwood,varBow14Success)
    varBow14Price = varItemPrice;
    fnBowSubPrice(varBow15Gold,varBow15Iron,varBow15Wood,varBow15Leather,varBow15Selentine,varBow15Veilron,varBow15Neithal,varBow15Theyril,varBow15Bone,varBow15Seedwood,varBow15Success)
    varBow15Price = varItemPrice;
    fnBowSubPrice(varBow16Gold,varBow16Iron,varBow16Wood,varBow16Leather,varBow16Selentine,varBow16Veilron,varBow16Neithal,varBow16Theyril,varBow16Bone,varBow16Seedwood,varBow16Success)
    varBow16Price = varItemPrice;
    fnBowSubPrice(varBow17Gold,varBow17Iron,varBow17Wood,varBow17Leather,varBow17Selentine,varBow17Veilron,varBow17Neithal,varBow17Theyril,varBow17Bone,varBow17Seedwood,varBow17Success)
    varBow17Price = varItemPrice;
    fnBowSubPrice(varBow18Gold,varBow18Iron,varBow18Wood,varBow18Leather,varBow18Selentine,varBow18Veilron,varBow18Neithal,varBow18Theyril,varBow18Bone,varBow18Seedwood,varBow18Success)
    varBow18Price = varItemPrice;
    fnBowSubPrice(varBow19Gold,varBow19Iron,varBow19Wood,varBow19Leather,varBow19Selentine,varBow19Veilron,varBow19Neithal,varBow19Theyril,varBow19Bone,varBow19Seedwood,varBow19Success)
    varBow19Price = varItemPrice;
    fnBowSubPrice(varBow20Gold,varBow20Iron,varBow20Wood,varBow20Leather,varBow20Selentine,varBow20Veilron,varBow20Neithal,varBow20Theyril,varBow20Bone,varBow20Seedwood,varBow20Success)
    varBow20Price = varItemPrice;
    fnBowSubPrice(varBow21Gold,varBow21Iron,varBow21Wood,varBow21Leather,varBow21Selentine,varBow21Veilron,varBow21Neithal,varBow21Theyril,varBow21Bone,varBow21Seedwood,varBow21Success)
    varBow21Price = varItemPrice;
    fnBowSubPrice(varBow22Gold,varBow22Iron,varBow22Wood,varBow22Leather,varBow22Selentine,varBow22Veilron,varBow22Neithal,varBow22Theyril,varBow22Bone,varBow22Seedwood,varBow22Success)
    varBow22Price = varItemPrice;
    fnBowSubPrice(varBow23Gold,varBow23Iron,varBow23Wood,varBow23Leather,varBow23Selentine,varBow23Veilron,varBow23Neithal,varBow23Theyril,varBow23Bone,varBow23Seedwood,varBow23Success)
    varBow23Price = varItemPrice;
}

function fnReloadBowPrices()
{
    //Bow Prices
    document.getElementById('Bow01Price').value = varBow01Price;
    document.getElementById('Bow02Price').value = varBow02Price;
    document.getElementById('Bow03Price').value = varBow03Price;
    document.getElementById('Bow04Price').value = varBow04Price;
    document.getElementById('Bow05Price').value = varBow05Price;
    document.getElementById('Bow06Price').value = varBow06Price;
    document.getElementById('Bow07Price').value = varBow07Price;
    document.getElementById('Bow08Price').value = varBow08Price;
    document.getElementById('Bow09Price').value = varBow09Price;
    document.getElementById('Bow10Price').value = varBow10Price;
    document.getElementById('Bow11Price').value = varBow11Price;
    document.getElementById('Bow12Price').value = varBow12Price;
    document.getElementById('Bow13Price').value = varBow13Price;
    document.getElementById('Bow14Price').value = varBow14Price;
    document.getElementById('Bow15Price').value = varBow15Price;
    document.getElementById('Bow16Price').value = varBow16Price;
    document.getElementById('Bow17Price').value = varBow17Price;
    document.getElementById('Bow18Price').value = varBow18Price;
    document.getElementById('Bow19Price').value = varBow19Price;
    document.getElementById('Bow20Price').value = varBow20Price;
    document.getElementById('Bow21Price').value = varBow21Price;
    document.getElementById('Bow22Price').value = varBow22Price;
    document.getElementById('Bow23Price').value = varBow23Price;

    //Bow Total Prices
    document.getElementById('BowTotal').value = varBowTotal;
    document.getElementById('BowGoldTotal').value = varBowGoldTotal;
    document.getElementById('BowIronTotal').value = varBowIronTotal;
    document.getElementById('BowWoodTotal').value = varBowWoodTotal;
    document.getElementById('BowLeatherTotal').value = varBowLeatherTotal;
    document.getElementById('BowSelentineTotal').value = varBowSelentineTotal;
    document.getElementById('BowVeilronTotal').value = varBowVeilronTotal;
    document.getElementById('BowNeithalTotal').value = varBowNeithalTotal;
    document.getElementById('BowTheyrilTotal').value = varBowTheyrilTotal;
    document.getElementById('BowBoneTotal').value = varBowBoneTotal;
    document.getElementById('BowSeedwoodTotal').value = varBowSeedwoodTotal;
}

function fnBowInitialize()
{
    varBowTotal = document.getElementById("BowTotal").value;
    varBowGoldTotal = document.getElementById("BowGoldTotal").value;
    varBowIronTotal = document.getElementById("BowIronTotal").value;
    varBowWoodTotal = document.getElementById("BowWoodTotal").value;
    varBowLeatherTotal = document.getElementById("BowLeatherTotal").value;
    varBowSelentineTotal = document.getElementById("BowSelentineTotal").value;
    varBowVeilronTotal = document.getElementById("BowVeilronTotal").value;
    varBowNeithalTotal = document.getElementById("BowNeithalTotal").value;
    varBowTheyrilTotal = document.getElementById("BowTheyrilTotal").value;
    varBowBoneTotal = document.getElementById("BowBoneTotal").value;
    varBowSeedwoodTotal = document.getElementById("BowSeedwoodTotal").value;

    // *** Bow VARIABLES ***
	//Arrow
    varBow01Quantity = document.getElementById("Bow01Quantity").value;
    varBow01Price = document.getElementById("Bow01Price").value;
    varBow01Success = document.getElementById("Bow01Success").value;
    varBow01Gold = 0
    varBow01Iron = 1
    varBow01Wood = 1
    varBow01Leather = 0
    varBow01Selentine = 0
    varBow01Veilron = 0
    varBow01Neithal = 0
    varBow01Bone = 0
    varBow01Seedwood = 0
    varBow01Theyril = 0
	//Short Bow
    varBow02Quantity = document.getElementById("Bow02Quantity").value;
    varBow02Price = document.getElementById("Bow02Price").value;
    varBow02Success = document.getElementById("Bow02Success").value;
    varBow02Gold = 0
    varBow02Iron = 0
    varBow02Wood = 2
    varBow02Leather = 1
    varBow02Selentine = 0
    varBow02Veilron = 0
    varBow02Neithal = 0
    varBow02Bone = 0
    varBow02Seedwood = 0
    varBow02Theyril = 0
	//Flatbow
    varBow03Quantity = document.getElementById("Bow03Quantity").value;
    varBow03Price = document.getElementById("Bow03Price").value;
    varBow03Success = document.getElementById("Bow03Success").value;
    varBow03Gold = 15
    varBow03Iron = 0
    varBow03Wood = 4
    varBow03Leather = 2
    varBow03Selentine = 0
    varBow03Veilron = 0
    varBow03Neithal = 0
    varBow03Bone = 0
    varBow03Seedwood = 0
    varBow03Theyril = 0
	//Hunting Bow
    varBow04Quantity = document.getElementById("Bow04Quantity").value;
    varBow04Price = document.getElementById("Bow04Price").value;
    varBow04Success = document.getElementById("Bow04Success").value;
    varBow04Gold = 22
    varBow04Iron = 0
    varBow04Wood = 5
    varBow04Leather = 3
    varBow04Selentine = 0
    varBow04Veilron = 0
    varBow04Neithal = 0
    varBow04Bone = 0
    varBow04Seedwood = 0
    varBow04Theyril = 0
	//Warbow
    varBow05Quantity = document.getElementById("Bow05Quantity").value;
    varBow05Price = document.getElementById("Bow05Price").value;
    varBow05Success = document.getElementById("Bow05Success").value;
    varBow05Gold = 22
    varBow05Iron = 0
    varBow05Wood = 6
    varBow05Leather = 2
    varBow05Selentine = 0
    varBow05Veilron = 0
    varBow05Neithal = 0
    varBow05Bone = 0
    varBow05Seedwood = 0
    varBow05Theyril = 0
	//Angra Bow
    varBow06Quantity = document.getElementById("Bow06Quantity").value;
    varBow06Price = document.getElementById("Bow06Price").value;
    varBow06Success = document.getElementById("Bow06Success").value;
    varBow06Gold = 22
    varBow06Iron = 0
    varBow06Wood = 7
    varBow06Leather = 1
    varBow06Selentine = 0
    varBow06Veilron = 0
    varBow06Neithal = 0
    varBow06Bone = 0
    varBow06Seedwood = 0
    varBow06Theyril = 0
	//Assassin's Bow
    varBow07Quantity = document.getElementById("Bow07Quantity").value;
    varBow07Price = document.getElementById("Bow07Price").value;
    varBow07Success = document.getElementById("Bow07Success").value;
    varBow07Gold = 42
    varBow07Iron = 0
    varBow07Wood = 7
    varBow07Leather = 3
    varBow07Selentine = 0
    varBow07Veilron = 0
    varBow07Neithal = 0
    varBow07Bone = 0
    varBow07Seedwood = 0
    varBow07Theyril = 0
	//Doublestring Bow
    varBow08Quantity = document.getElementById("Bow08Quantity").value;
    varBow08Price = document.getElementById("Bow08Price").value;
    varBow08Success = document.getElementById("Bow08Success").value;
    varBow08Gold = 42
    varBow08Iron = 0
    varBow08Wood = 7
    varBow08Leather = 3
    varBow08Selentine = 0
    varBow08Veilron = 0
    varBow08Neithal = 0
    varBow08Bone = 0
    varBow08Seedwood = 0
    varBow08Theyril = 0
	//Farbow
    varBow09Quantity = document.getElementById("Bow09Quantity").value;
    varBow09Price = document.getElementById("Bow09Price").value;
    varBow09Success = document.getElementById("Bow09Success").value;
    varBow09Gold = 42
    varBow09Iron = 0
    varBow09Wood = 8
    varBow09Leather = 2
    varBow09Selentine = 0
    varBow09Veilron = 0
    varBow09Neithal = 0
    varBow09Bone = 0
    varBow09Seedwood = 0
    varBow09Theyril = 0
	//Alfar Deathsinger
    varBow10Quantity = document.getElementById("Bow10Quantity").value;
    varBow10Price = document.getElementById("Bow10Price").value;
    varBow10Success = document.getElementById("Bow10Success").value;
    varBow10Gold = 80
    varBow10Iron = 0
    varBow10Wood = 9
    varBow10Leather = 3
    varBow10Selentine = 0
    varBow10Veilron = 0
    varBow10Neithal = 0
    varBow10Bone = 0
    varBow10Seedwood = 0
    varBow10Theyril = 0
	//Dwarven Warbow
    varBow11Quantity = document.getElementById("Bow11Quantity").value;
    varBow11Price = document.getElementById("Bow11Price").value;
    varBow11Success = document.getElementById("Bow11Success").value;
    varBow11Gold = 80
    varBow11Iron = 0
    varBow11Wood = 9
    varBow11Leather = 3
    varBow11Selentine = 0
    varBow11Veilron = 0
    varBow11Neithal = 0
    varBow11Bone = 0
    varBow11Seedwood = 0
    varBow11Theyril = 0
	//Mahirim Preyfinder
    varBow12Quantity = document.getElementById("Bow12Quantity").value;
    varBow12Price = document.getElementById("Bow12Price").value;
    varBow12Success = document.getElementById("Bow12Success").value;
    varBow12Gold = 80
    varBow12Iron = 0
    varBow12Wood = 9
    varBow12Leather = 3
    varBow12Selentine = 0
    varBow12Veilron = 0
    varBow12Neithal = 0
    varBow12Bone = 0
    varBow12Seedwood = 0
    varBow12Theyril = 0
	//Mercian Composite
    varBow13Quantity = document.getElementById("Bow13Quantity").value;
    varBow13Price = document.getElementById("Bow13Price").value;
    varBow13Success = document.getElementById("Bow13Success").value;
    varBow13Gold = 80
    varBow13Iron = 0
    varBow13Wood = 9
    varBow13Leather = 3
    varBow13Selentine = 0
    varBow13Veilron = 0
    varBow13Neithal = 0
    varBow13Bone = 0
    varBow13Seedwood = 0
    varBow13Theyril = 0
	//Mirdain Seeker
    varBow14Quantity = document.getElementById("Bow14Quantity").value;
    varBow14Price = document.getElementById("Bow14Price").value;
    varBow14Success = document.getElementById("Bow14Success").value;
    varBow14Gold = 80
    varBow14Iron = 0
    varBow14Wood = 9
    varBow14Leather = 3
    varBow14Selentine = 0
    varBow14Veilron = 0
    varBow14Neithal = 0
    varBow14Bone = 0
    varBow14Seedwood = 0
    varBow14Theyril = 0
	//Orkish Stronbow
    varBow15Quantity = document.getElementById("Bow15Quantity").value;
    varBow15Price = document.getElementById("Bow15Price").value;
    varBow15Success = document.getElementById("Bow15Success").value;
    varBow15Gold = 80
    varBow15Iron = 0
    varBow15Wood = 9
    varBow15Leather = 3
    varBow15Selentine = 0
    varBow15Veilron = 0
    varBow15Neithal = 0
    varBow15Bone = 0
    varBow15Seedwood = 0
    varBow15Theyril = 0
	//Longbow
    varBow16Quantity = document.getElementById("Bow16Quantity").value;
    varBow16Price = document.getElementById("Bow16Price").value;
    varBow16Success = document.getElementById("Bow16Success").value;
    varBow16Gold = 80
    varBow16Iron = 0
    varBow16Wood = 9
    varBow16Leather = 3
    varBow16Selentine = 0
    varBow16Veilron = 0
    varBow16Neithal = 0
    varBow16Bone = 0
    varBow16Seedwood = 0
    varBow16Theyril = 0
	//Composite Bow
    varBow17Quantity = document.getElementById("Bow17Quantity").value;
    varBow17Price = document.getElementById("Bow17Price").value;
    varBow17Success = document.getElementById("Bow17Success").value;
    varBow17Gold = 80
    varBow17Iron = 0
    varBow17Wood = 10
    varBow17Leather = 2
    varBow17Selentine = 0
    varBow17Veilron = 0
    varBow17Neithal = 0
    varBow17Bone = 0
    varBow17Seedwood = 0
    varBow17Theyril = 0
	//Stalker Bow
    varBow18Quantity = document.getElementById("Bow18Quantity").value;
    varBow18Price = document.getElementById("Bow18Price").value;
    varBow18Success = document.getElementById("Bow18Success").value;
    varBow18Gold = 80
    varBow18Iron = 0
    varBow18Wood = 10
    varBow18Leather = 2
    varBow18Selentine = 0
    varBow18Veilron = 0
    varBow18Neithal = 0
    varBow18Bone = 0
    varBow18Seedwood = 0
    varBow18Theyril = 0
	//Spider Bow
    varBow19Quantity = document.getElementById("Bow19Quantity").value;
    varBow19Price = document.getElementById("Bow19Price").value;
    varBow19Success = document.getElementById("Bow19Success").value;
    varBow19Gold = 375
    varBow19Iron = 0
    varBow19Wood = 10
    varBow19Leather = 5
    varBow19Selentine = 0
    varBow19Veilron = 0
    varBow19Neithal = 1
    varBow19Bone = 0
    varBow19Seedwood = 0
    varBow19Theyril = 0
	//Spiked Bow
    varBow20Quantity = document.getElementById("Bow20Quantity").value;
    varBow20Price = document.getElementById("Bow20Price").value;
    varBow20Success = document.getElementById("Bow20Success").value;
    varBow20Gold = 375
    varBow20Iron = 2
    varBow20Wood = 10
    varBow20Leather = 3
    varBow20Selentine = 0
    varBow20Veilron = 1
    varBow20Neithal = 0
    varBow20Bone = 0
    varBow20Seedwood = 0
    varBow20Theyril = 0
	//Gravesong
    varBow21Quantity = document.getElementById("Bow21Quantity").value;
    varBow21Price = document.getElementById("Bow21Price").value;
    varBow21Success = document.getElementById("Bow21Success").value;
    varBow21Gold = 800
    varBow21Iron = 0
    varBow21Wood = 1
    varBow21Leather = 3
    varBow21Selentine = 3
    varBow21Veilron = 0
    varBow21Neithal = 0
    varBow21Bone = 16
    varBow21Seedwood = 0
    varBow21Theyril = 0
	//Silver Branch
    varBow22Quantity = document.getElementById("Bow22Quantity").value;
    varBow22Price = document.getElementById("Bow22Price").value;
    varBow22Success = document.getElementById("Bow22Success").value;
    varBow22Gold = 800
    varBow22Iron = 0
    varBow22Wood = 17
    varBow22Leather = 3
    varBow22Selentine = 1
    varBow22Veilron = 0
    varBow22Neithal = 0
    varBow22Bone = 0
    varBow22Seedwood = 0
    varBow22Theyril = 1
	//Sunbow
    varBow23Quantity = document.getElementById("Bow23Quantity").value;
    varBow23Price = document.getElementById("Bow23Price").value;
    varBow23Success = document.getElementById("Bow23Success").value;
    varBow23Gold = 10000
    varBow23Iron = 0
    varBow23Wood = 30
    varBow23Leather = 10
    varBow23Selentine = 0
    varBow23Veilron = 0
    varBow23Neithal = 0
    varBow23Bone = 0
    varBow23Seedwood = 3
    varBow23Theyril = 10
}

/* STAFF */
//Used to reload items from Staff
function fnStaffReload()  // x= id, z= value
{
    fnStaffInitialize()

    fnStaff()

    fnStaffTotal()
    fnReloadStaffPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnStaffSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varSnakeweed = parseInt(d)
    varBaneberry = parseInt(e)
    varArchangelica = parseInt(f)
    varHellbore = parseInt(g)
    varMandrake = parseInt(h)
    varCrystal = parseInt(i)
    varRuby = parseInt(j)
    varGarnet = parseInt(k)
    varBlood = parseInt(l)
    varHeart = parseInt(m)
    varBone = parseInt(n)
    varSulfur = parseInt(o)
    varDarktaint = parseInt(p)
    varLifeforce = parseInt(q)
    varShadowcrest = parseInt(r)
    varCielFeyEye = parseInt(s)
    varVitalQuintessence = parseInt(t)
    varElementalCinder = parseInt(u)
    varOncylusianCorpseflesh = parseInt(v)
    varTaintKhamset = parseInt(w)
    varElementalQuartz = parseInt(x)
    varFeralLifeforce = parseInt(y)
    varSuccess = parseInt(z)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varSnakeweed * varSnakeweedValue) + (varBaneberry * varBaneberryValue) + (varArchangelica * varArchangelicaValue) + (varHellbore * varHellboreValue) + (varMandrake * varMandrakeValue) + (varCrystal * varCrystalValue) + (varRuby * varRubyValue) + (varGarnet * varGarnetValue) + (varBlood * varBloodValue) + (varHeart * varHeartValue) + (varBone * varBoneValue) + (varSulfur * varSulfurValue) + (varDarktaint * varDarktaintValue) + (varLifeforce * varLifeforceValue) + (varShadowcrest * varShadowcrestValue) + (varCielFeyEye * varCielFeyEyeValue) + (varVitalQuintessence * varVitalQuintessenceValue) + (varElementalCinder * varElementalCinderValue) + (varOncylusianCorpseflesh * varOncylusianCorpsefleshValue) + (varTaintKhamset * varTaintKhamsetValue) + (varElementalQuartz * varElementalQuartzValue) + (varFeralLifeforce * varFeralLifeforceValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Staff
function fnStaffTotal()
{
    varStaffTotal = ((varStaff01Price * varStaff01Quantity) + (varStaff02Price * varStaff02Quantity) + (varStaff03Price * varStaff03Quantity) + (varStaff04Price * varStaff04Quantity) + (varStaff05Price * varStaff05Quantity) + (varStaff06Price * varStaff06Quantity) + (varStaff07Price * varStaff07Quantity) + (varStaff08Price * varStaff08Quantity) + (varStaff09Price * varStaff09Quantity) + (varStaff10Price * varStaff10Quantity) + (varStaff11Price * varStaff11Quantity) + (varStaff12Price * varStaff12Quantity) + (varStaff13Price * varStaff13Quantity) + (varStaff14Price * varStaff14Quantity) + (varStaff15Price * varStaff15Quantity) + (varStaff16Price * varStaff16Quantity) + (varStaff17Price * varStaff17Quantity) + (varStaff18Price * varStaff18Quantity) + (varStaff19Price * varStaff19Quantity) + (varStaff20Price * varStaff20Quantity) + (varStaff21Price * varStaff21Quantity));
    varStaffGoldTotal = ((varStaff01Gold * varStaff01Quantity) + (varStaff02Gold * varStaff02Quantity) + (varStaff03Gold * varStaff03Quantity) + (varStaff04Gold * varStaff04Quantity) + (varStaff05Gold * varStaff05Quantity) + (varStaff06Gold * varStaff06Quantity) + (varStaff07Gold * varStaff07Quantity) + (varStaff08Gold * varStaff08Quantity) + (varStaff09Gold * varStaff09Quantity) + (varStaff10Gold * varStaff10Quantity) + (varStaff11Gold * varStaff11Quantity) + (varStaff12Gold * varStaff12Quantity) + (varStaff13Gold * varStaff13Quantity) + (varStaff14Gold * varStaff14Quantity) + (varStaff15Gold * varStaff15Quantity) + (varStaff16Gold * varStaff16Quantity) + (varStaff17Gold * varStaff17Quantity) + (varStaff18Gold * varStaff18Quantity) + (varStaff19Gold * varStaff19Quantity) + (varStaff20Gold * varStaff20Quantity) + (varStaff21Gold * varStaff21Quantity));
    varStaffIronTotal = ((varStaff01Iron * varStaff01Quantity) + (varStaff02Iron * varStaff02Quantity) + (varStaff03Iron * varStaff03Quantity) + (varStaff04Iron * varStaff04Quantity) + (varStaff05Iron * varStaff05Quantity) + (varStaff06Iron * varStaff06Quantity) + (varStaff07Iron * varStaff07Quantity) + (varStaff08Iron * varStaff08Quantity) + (varStaff09Iron * varStaff09Quantity) + (varStaff10Iron * varStaff10Quantity) + (varStaff11Iron * varStaff11Quantity) + (varStaff12Iron * varStaff12Quantity) + (varStaff13Iron * varStaff13Quantity) + (varStaff14Iron * varStaff14Quantity) + (varStaff15Iron * varStaff15Quantity) + (varStaff16Iron * varStaff16Quantity) + (varStaff17Iron * varStaff17Quantity) + (varStaff18Iron * varStaff18Quantity) + (varStaff19Iron * varStaff19Quantity) + (varStaff20Iron * varStaff20Quantity) + (varStaff21Iron * varStaff21Quantity));
    varStaffWoodTotal = ((varStaff01Wood * varStaff01Quantity) + (varStaff02Wood * varStaff02Quantity) + (varStaff03Wood * varStaff03Quantity) + (varStaff04Wood * varStaff04Quantity) + (varStaff05Wood * varStaff05Quantity) + (varStaff06Wood * varStaff06Quantity) + (varStaff07Wood * varStaff07Quantity) + (varStaff08Wood * varStaff08Quantity) + (varStaff09Wood * varStaff09Quantity) + (varStaff10Wood * varStaff10Quantity) + (varStaff11Wood * varStaff11Quantity) + (varStaff12Wood * varStaff12Quantity) + (varStaff13Wood * varStaff13Quantity) + (varStaff14Wood * varStaff14Quantity) + (varStaff15Wood * varStaff15Quantity) + (varStaff16Wood * varStaff16Quantity) + (varStaff17Wood * varStaff17Quantity) + (varStaff18Wood * varStaff18Quantity) + (varStaff19Wood * varStaff19Quantity) + (varStaff20Wood * varStaff20Quantity) + (varStaff21Wood * varStaff21Quantity));
    varStaffSnakeweedTotal = ((varStaff01Snakeweed * varStaff01Quantity) + (varStaff02Snakeweed * varStaff02Quantity) + (varStaff03Snakeweed * varStaff03Quantity) + (varStaff04Snakeweed * varStaff04Quantity) + (varStaff05Snakeweed * varStaff05Quantity) + (varStaff06Snakeweed * varStaff06Quantity) + (varStaff07Snakeweed * varStaff07Quantity) + (varStaff08Snakeweed * varStaff08Quantity) + (varStaff09Snakeweed * varStaff09Quantity) + (varStaff10Snakeweed * varStaff10Quantity) + (varStaff11Snakeweed * varStaff11Quantity) + (varStaff12Snakeweed * varStaff12Quantity) + (varStaff13Snakeweed * varStaff13Quantity) + (varStaff14Snakeweed * varStaff14Quantity) + (varStaff15Snakeweed * varStaff15Quantity) + (varStaff16Snakeweed * varStaff16Quantity) + (varStaff17Snakeweed * varStaff17Quantity) + (varStaff18Snakeweed * varStaff18Quantity) + (varStaff19Snakeweed * varStaff19Quantity) + (varStaff20Snakeweed * varStaff20Quantity) + (varStaff21Snakeweed * varStaff21Quantity));
    varStaffBaneberryTotal = ((varStaff01Baneberry * varStaff01Quantity) + (varStaff02Baneberry * varStaff02Quantity) + (varStaff03Baneberry * varStaff03Quantity) + (varStaff04Baneberry * varStaff04Quantity) + (varStaff05Baneberry * varStaff05Quantity) + (varStaff06Baneberry * varStaff06Quantity) + (varStaff07Baneberry * varStaff07Quantity) + (varStaff08Baneberry * varStaff08Quantity) + (varStaff09Baneberry * varStaff09Quantity) + (varStaff10Baneberry * varStaff10Quantity) + (varStaff11Baneberry * varStaff11Quantity) + (varStaff12Baneberry * varStaff12Quantity) + (varStaff13Baneberry * varStaff13Quantity) + (varStaff14Baneberry * varStaff14Quantity) + (varStaff15Baneberry * varStaff15Quantity) + (varStaff16Baneberry * varStaff16Quantity) + (varStaff17Baneberry * varStaff17Quantity) + (varStaff18Baneberry * varStaff18Quantity) + (varStaff19Baneberry * varStaff19Quantity) + (varStaff20Baneberry * varStaff20Quantity) + (varStaff21Baneberry * varStaff21Quantity));
    varStaffArchangelicaTotal = ((varStaff01Archangelica * varStaff01Quantity) + (varStaff02Archangelica * varStaff02Quantity) + (varStaff03Archangelica * varStaff03Quantity) + (varStaff04Archangelica * varStaff04Quantity) + (varStaff05Archangelica * varStaff05Quantity) + (varStaff06Archangelica * varStaff06Quantity) + (varStaff07Archangelica * varStaff07Quantity) + (varStaff08Archangelica * varStaff08Quantity) + (varStaff09Archangelica * varStaff09Quantity) + (varStaff10Archangelica * varStaff10Quantity) + (varStaff11Archangelica * varStaff11Quantity) + (varStaff12Archangelica * varStaff12Quantity) + (varStaff13Archangelica * varStaff13Quantity) + (varStaff14Archangelica * varStaff14Quantity) + (varStaff15Archangelica * varStaff15Quantity) + (varStaff16Archangelica * varStaff16Quantity) + (varStaff17Archangelica * varStaff17Quantity) + (varStaff18Archangelica * varStaff18Quantity) + (varStaff19Archangelica * varStaff19Quantity) + (varStaff20Archangelica * varStaff20Quantity) + (varStaff21Archangelica * varStaff21Quantity));
    varStaffHellboreTotal = ((varStaff01Hellbore * varStaff01Quantity) + (varStaff02Hellbore * varStaff02Quantity) + (varStaff03Hellbore * varStaff03Quantity) + (varStaff04Hellbore * varStaff04Quantity) + (varStaff05Hellbore * varStaff05Quantity) + (varStaff06Hellbore * varStaff06Quantity) + (varStaff07Hellbore * varStaff07Quantity) + (varStaff08Hellbore * varStaff08Quantity) + (varStaff09Hellbore * varStaff09Quantity) + (varStaff10Hellbore * varStaff10Quantity) + (varStaff11Hellbore * varStaff11Quantity) + (varStaff12Hellbore * varStaff12Quantity) + (varStaff13Hellbore * varStaff13Quantity) + (varStaff14Hellbore * varStaff14Quantity) + (varStaff15Hellbore * varStaff15Quantity) + (varStaff16Hellbore * varStaff16Quantity) + (varStaff17Hellbore * varStaff17Quantity) + (varStaff18Hellbore * varStaff18Quantity) + (varStaff19Hellbore * varStaff19Quantity) + (varStaff20Hellbore * varStaff20Quantity) + (varStaff21Hellbore * varStaff21Quantity));
    varStaffMandrakeTotal = ((varStaff01Mandrake * varStaff01Quantity) + (varStaff02Mandrake * varStaff02Quantity) + (varStaff03Mandrake * varStaff03Quantity) + (varStaff04Mandrake * varStaff04Quantity) + (varStaff05Mandrake * varStaff05Quantity) + (varStaff06Mandrake * varStaff06Quantity) + (varStaff07Mandrake * varStaff07Quantity) + (varStaff08Mandrake * varStaff08Quantity) + (varStaff09Mandrake * varStaff09Quantity) + (varStaff10Mandrake * varStaff10Quantity) + (varStaff11Mandrake * varStaff11Quantity) + (varStaff12Mandrake * varStaff12Quantity) + (varStaff13Mandrake * varStaff13Quantity) + (varStaff14Mandrake * varStaff14Quantity) + (varStaff15Mandrake * varStaff15Quantity) + (varStaff16Mandrake * varStaff16Quantity) + (varStaff17Mandrake * varStaff17Quantity) + (varStaff18Mandrake * varStaff18Quantity) + (varStaff19Mandrake * varStaff19Quantity) + (varStaff20Mandrake * varStaff20Quantity) + (varStaff21Mandrake * varStaff21Quantity));
    varStaffCrystalTotal = ((varStaff01Crystal * varStaff01Quantity) + (varStaff02Crystal * varStaff02Quantity) + (varStaff03Crystal * varStaff03Quantity) + (varStaff04Crystal * varStaff04Quantity) + (varStaff05Crystal * varStaff05Quantity) + (varStaff06Crystal * varStaff06Quantity) + (varStaff07Crystal * varStaff07Quantity) + (varStaff08Crystal * varStaff08Quantity) + (varStaff09Crystal * varStaff09Quantity) + (varStaff10Crystal * varStaff10Quantity) + (varStaff11Crystal * varStaff11Quantity) + (varStaff12Crystal * varStaff12Quantity) + (varStaff13Crystal * varStaff13Quantity) + (varStaff14Crystal * varStaff14Quantity) + (varStaff15Crystal * varStaff15Quantity) + (varStaff16Crystal * varStaff16Quantity) + (varStaff17Crystal * varStaff17Quantity) + (varStaff18Crystal * varStaff18Quantity) + (varStaff19Crystal * varStaff19Quantity) + (varStaff20Crystal * varStaff20Quantity) + (varStaff21Crystal * varStaff21Quantity));
    varStaffRubyTotal = ((varStaff01Ruby * varStaff01Quantity) + (varStaff02Ruby * varStaff02Quantity) + (varStaff03Ruby * varStaff03Quantity) + (varStaff04Ruby * varStaff04Quantity) + (varStaff05Ruby * varStaff05Quantity) + (varStaff06Ruby * varStaff06Quantity) + (varStaff07Ruby * varStaff07Quantity) + (varStaff08Ruby * varStaff08Quantity) + (varStaff09Ruby * varStaff09Quantity) + (varStaff10Ruby * varStaff10Quantity) + (varStaff11Ruby * varStaff11Quantity) + (varStaff12Ruby * varStaff12Quantity) + (varStaff13Ruby * varStaff13Quantity) + (varStaff14Ruby * varStaff14Quantity) + (varStaff15Ruby * varStaff15Quantity) + (varStaff16Ruby * varStaff16Quantity) + (varStaff17Ruby * varStaff17Quantity) + (varStaff18Ruby * varStaff18Quantity) + (varStaff19Ruby * varStaff19Quantity) + (varStaff20Ruby * varStaff20Quantity) + (varStaff21Ruby * varStaff21Quantity));
    varStaffGarnetTotal = ((varStaff01Garnet * varStaff01Quantity) + (varStaff02Garnet * varStaff02Quantity) + (varStaff03Garnet * varStaff03Quantity) + (varStaff04Garnet * varStaff04Quantity) + (varStaff05Garnet * varStaff05Quantity) + (varStaff06Garnet * varStaff06Quantity) + (varStaff07Garnet * varStaff07Quantity) + (varStaff08Garnet * varStaff08Quantity) + (varStaff09Garnet * varStaff09Quantity) + (varStaff10Garnet * varStaff10Quantity) + (varStaff11Garnet * varStaff11Quantity) + (varStaff12Garnet * varStaff12Quantity) + (varStaff13Garnet * varStaff13Quantity) + (varStaff14Garnet * varStaff14Quantity) + (varStaff15Garnet * varStaff15Quantity) + (varStaff16Garnet * varStaff16Quantity) + (varStaff17Garnet * varStaff17Quantity) + (varStaff18Garnet * varStaff18Quantity) + (varStaff19Garnet * varStaff19Quantity) + (varStaff20Garnet * varStaff20Quantity) + (varStaff21Garnet * varStaff21Quantity));
    varStaffBloodTotal = ((varStaff01Blood * varStaff01Quantity) + (varStaff02Blood * varStaff02Quantity) + (varStaff03Blood * varStaff03Quantity) + (varStaff04Blood * varStaff04Quantity) + (varStaff05Blood * varStaff05Quantity) + (varStaff06Blood * varStaff06Quantity) + (varStaff07Blood * varStaff07Quantity) + (varStaff08Blood * varStaff08Quantity) + (varStaff09Blood * varStaff09Quantity) + (varStaff10Blood * varStaff10Quantity) + (varStaff11Blood * varStaff11Quantity) + (varStaff12Blood * varStaff12Quantity) + (varStaff13Blood * varStaff13Quantity) + (varStaff14Blood * varStaff14Quantity) + (varStaff15Blood * varStaff15Quantity) + (varStaff16Blood * varStaff16Quantity) + (varStaff17Blood * varStaff17Quantity) + (varStaff18Blood * varStaff18Quantity) + (varStaff19Blood * varStaff19Quantity) + (varStaff20Blood * varStaff20Quantity) + (varStaff21Blood * varStaff21Quantity));
    varStaffHeartTotal = ((varStaff01Heart * varStaff01Quantity) + (varStaff02Heart * varStaff02Quantity) + (varStaff03Heart * varStaff03Quantity) + (varStaff04Heart * varStaff04Quantity) + (varStaff05Heart * varStaff05Quantity) + (varStaff06Heart * varStaff06Quantity) + (varStaff07Heart * varStaff07Quantity) + (varStaff08Heart * varStaff08Quantity) + (varStaff09Heart * varStaff09Quantity) + (varStaff10Heart * varStaff10Quantity) + (varStaff11Heart * varStaff11Quantity) + (varStaff12Heart * varStaff12Quantity) + (varStaff13Heart * varStaff13Quantity) + (varStaff14Heart * varStaff14Quantity) + (varStaff15Heart * varStaff15Quantity) + (varStaff16Heart * varStaff16Quantity) + (varStaff17Heart * varStaff17Quantity) + (varStaff18Heart * varStaff18Quantity) + (varStaff19Heart * varStaff19Quantity) + (varStaff20Heart * varStaff20Quantity) + (varStaff21Heart * varStaff21Quantity));
    varStaffBoneTotal = ((varStaff01Bone * varStaff01Quantity) + (varStaff02Bone * varStaff02Quantity) + (varStaff03Bone * varStaff03Quantity) + (varStaff04Bone * varStaff04Quantity) + (varStaff05Bone * varStaff05Quantity) + (varStaff06Bone * varStaff06Quantity) + (varStaff07Bone * varStaff07Quantity) + (varStaff08Bone * varStaff08Quantity) + (varStaff09Bone * varStaff09Quantity) + (varStaff10Bone * varStaff10Quantity) + (varStaff11Bone * varStaff11Quantity) + (varStaff12Bone * varStaff12Quantity) + (varStaff13Bone * varStaff13Quantity) + (varStaff14Bone * varStaff14Quantity) + (varStaff15Bone * varStaff15Quantity) + (varStaff16Bone * varStaff16Quantity) + (varStaff17Bone * varStaff17Quantity) + (varStaff18Bone * varStaff18Quantity) + (varStaff19Bone * varStaff19Quantity) + (varStaff20Bone * varStaff20Quantity) + (varStaff21Bone * varStaff21Quantity));
    varStaffSulfurTotal = ((varStaff01Sulfur * varStaff01Quantity) + (varStaff02Sulfur * varStaff02Quantity) + (varStaff03Sulfur * varStaff03Quantity) + (varStaff04Sulfur * varStaff04Quantity) + (varStaff05Sulfur * varStaff05Quantity) + (varStaff06Sulfur * varStaff06Quantity) + (varStaff07Sulfur * varStaff07Quantity) + (varStaff08Sulfur * varStaff08Quantity) + (varStaff09Sulfur * varStaff09Quantity) + (varStaff10Sulfur * varStaff10Quantity) + (varStaff11Sulfur * varStaff11Quantity) + (varStaff12Sulfur * varStaff12Quantity) + (varStaff13Sulfur * varStaff13Quantity) + (varStaff14Sulfur * varStaff14Quantity) + (varStaff15Sulfur * varStaff15Quantity) + (varStaff16Sulfur * varStaff16Quantity) + (varStaff17Sulfur * varStaff17Quantity) + (varStaff18Sulfur * varStaff18Quantity) + (varStaff19Sulfur * varStaff19Quantity) + (varStaff20Sulfur * varStaff20Quantity) + (varStaff21Sulfur * varStaff21Quantity));
    varStaffDarktaintTotal = ((varStaff01Darktaint * varStaff01Quantity) + (varStaff02Darktaint * varStaff02Quantity) + (varStaff03Darktaint * varStaff03Quantity) + (varStaff04Darktaint * varStaff04Quantity) + (varStaff05Darktaint * varStaff05Quantity) + (varStaff06Darktaint * varStaff06Quantity) + (varStaff07Darktaint * varStaff07Quantity) + (varStaff08Darktaint * varStaff08Quantity) + (varStaff09Darktaint * varStaff09Quantity) + (varStaff10Darktaint * varStaff10Quantity) + (varStaff11Darktaint * varStaff11Quantity) + (varStaff12Darktaint * varStaff12Quantity) + (varStaff13Darktaint * varStaff13Quantity) + (varStaff14Darktaint * varStaff14Quantity) + (varStaff15Darktaint * varStaff15Quantity) + (varStaff16Darktaint * varStaff16Quantity) + (varStaff17Darktaint * varStaff17Quantity) + (varStaff18Darktaint * varStaff18Quantity) + (varStaff19Darktaint * varStaff19Quantity) + (varStaff20Darktaint * varStaff20Quantity) + (varStaff21Darktaint * varStaff21Quantity));
    varStaffLifeforceTotal = ((varStaff01Lifeforce * varStaff01Quantity) + (varStaff02Lifeforce * varStaff02Quantity) + (varStaff03Lifeforce * varStaff03Quantity) + (varStaff04Lifeforce * varStaff04Quantity) + (varStaff05Lifeforce * varStaff05Quantity) + (varStaff06Lifeforce * varStaff06Quantity) + (varStaff07Lifeforce * varStaff07Quantity) + (varStaff08Lifeforce * varStaff08Quantity) + (varStaff09Lifeforce * varStaff09Quantity) + (varStaff10Lifeforce * varStaff10Quantity) + (varStaff11Lifeforce * varStaff11Quantity) + (varStaff12Lifeforce * varStaff12Quantity) + (varStaff13Lifeforce * varStaff13Quantity) + (varStaff14Lifeforce * varStaff14Quantity) + (varStaff15Lifeforce * varStaff15Quantity) + (varStaff16Lifeforce * varStaff16Quantity) + (varStaff17Lifeforce * varStaff17Quantity) + (varStaff18Lifeforce * varStaff18Quantity) + (varStaff19Lifeforce * varStaff19Quantity) + (varStaff20Lifeforce * varStaff20Quantity) + (varStaff21Lifeforce * varStaff21Quantity));
    varStaffShadowcrestTotal = ((varStaff01Shadowcrest * varStaff01Quantity) + (varStaff02Shadowcrest * varStaff02Quantity) + (varStaff03Shadowcrest * varStaff03Quantity) + (varStaff04Shadowcrest * varStaff04Quantity) + (varStaff05Shadowcrest * varStaff05Quantity) + (varStaff06Shadowcrest * varStaff06Quantity) + (varStaff07Shadowcrest * varStaff07Quantity) + (varStaff08Shadowcrest * varStaff08Quantity) + (varStaff09Shadowcrest * varStaff09Quantity) + (varStaff10Shadowcrest * varStaff10Quantity) + (varStaff11Shadowcrest * varStaff11Quantity) + (varStaff12Shadowcrest * varStaff12Quantity) + (varStaff13Shadowcrest * varStaff13Quantity) + (varStaff14Shadowcrest * varStaff14Quantity) + (varStaff15Shadowcrest * varStaff15Quantity) + (varStaff16Shadowcrest * varStaff16Quantity) + (varStaff17Shadowcrest * varStaff17Quantity) + (varStaff18Shadowcrest * varStaff18Quantity) + (varStaff19Shadowcrest * varStaff19Quantity) + (varStaff20Shadowcrest * varStaff20Quantity) + (varStaff21Shadowcrest * varStaff21Quantity));
    varStaffCielFeyEyeTotal = ((varStaff01CielFeyEye * varStaff01Quantity) + (varStaff02CielFeyEye * varStaff02Quantity) + (varStaff03CielFeyEye * varStaff03Quantity) + (varStaff04CielFeyEye * varStaff04Quantity) + (varStaff05CielFeyEye * varStaff05Quantity) + (varStaff06CielFeyEye * varStaff06Quantity) + (varStaff07CielFeyEye * varStaff07Quantity) + (varStaff08CielFeyEye * varStaff08Quantity) + (varStaff09CielFeyEye * varStaff09Quantity) + (varStaff10CielFeyEye * varStaff10Quantity) + (varStaff11CielFeyEye * varStaff11Quantity) + (varStaff12CielFeyEye * varStaff12Quantity) + (varStaff13CielFeyEye * varStaff13Quantity) + (varStaff14CielFeyEye * varStaff14Quantity) + (varStaff15CielFeyEye * varStaff15Quantity) + (varStaff16CielFeyEye * varStaff16Quantity) + (varStaff17CielFeyEye * varStaff17Quantity) + (varStaff18CielFeyEye * varStaff18Quantity) + (varStaff19CielFeyEye * varStaff19Quantity) + (varStaff20CielFeyEye * varStaff20Quantity) + (varStaff21CielFeyEye * varStaff21Quantity));
    varStaffVitalQuintessenceTotal = ((varStaff01VitalQuintessence * varStaff01Quantity) + (varStaff02VitalQuintessence * varStaff02Quantity) + (varStaff03VitalQuintessence * varStaff03Quantity) + (varStaff04VitalQuintessence * varStaff04Quantity) + (varStaff05VitalQuintessence * varStaff05Quantity) + (varStaff06VitalQuintessence * varStaff06Quantity) + (varStaff07VitalQuintessence * varStaff07Quantity) + (varStaff08VitalQuintessence * varStaff08Quantity) + (varStaff09VitalQuintessence * varStaff09Quantity) + (varStaff10VitalQuintessence * varStaff10Quantity) + (varStaff11VitalQuintessence * varStaff11Quantity) + (varStaff12VitalQuintessence * varStaff12Quantity) + (varStaff13VitalQuintessence * varStaff13Quantity) + (varStaff14VitalQuintessence * varStaff14Quantity) + (varStaff15VitalQuintessence * varStaff15Quantity) + (varStaff16VitalQuintessence * varStaff16Quantity) + (varStaff17VitalQuintessence * varStaff17Quantity) + (varStaff18VitalQuintessence * varStaff18Quantity) + (varStaff19VitalQuintessence * varStaff19Quantity) + (varStaff20VitalQuintessence * varStaff20Quantity) + (varStaff21VitalQuintessence * varStaff21Quantity));
    varStaffElementalCinderTotal = ((varStaff01ElementalCinder * varStaff01Quantity) + (varStaff02ElementalCinder * varStaff02Quantity) + (varStaff03ElementalCinder * varStaff03Quantity) + (varStaff04ElementalCinder * varStaff04Quantity) + (varStaff05ElementalCinder * varStaff05Quantity) + (varStaff06ElementalCinder * varStaff06Quantity) + (varStaff07ElementalCinder * varStaff07Quantity) + (varStaff08ElementalCinder * varStaff08Quantity) + (varStaff09ElementalCinder * varStaff09Quantity) + (varStaff10ElementalCinder * varStaff10Quantity) + (varStaff11ElementalCinder * varStaff11Quantity) + (varStaff12ElementalCinder * varStaff12Quantity) + (varStaff13ElementalCinder * varStaff13Quantity) + (varStaff14ElementalCinder * varStaff14Quantity) + (varStaff15ElementalCinder * varStaff15Quantity) + (varStaff16ElementalCinder * varStaff16Quantity) + (varStaff17ElementalCinder * varStaff17Quantity) + (varStaff18ElementalCinder * varStaff18Quantity) + (varStaff19ElementalCinder * varStaff19Quantity) + (varStaff20ElementalCinder * varStaff20Quantity) + (varStaff21ElementalCinder * varStaff21Quantity));
    varStaffOncylusianCorpsefleshTotal = ((varStaff01OncylusianCorpseflesh * varStaff01Quantity) + (varStaff02OncylusianCorpseflesh * varStaff02Quantity) + (varStaff03OncylusianCorpseflesh * varStaff03Quantity) + (varStaff04OncylusianCorpseflesh * varStaff04Quantity) + (varStaff05OncylusianCorpseflesh * varStaff05Quantity) + (varStaff06OncylusianCorpseflesh * varStaff06Quantity) + (varStaff07OncylusianCorpseflesh * varStaff07Quantity) + (varStaff08OncylusianCorpseflesh * varStaff08Quantity) + (varStaff09OncylusianCorpseflesh * varStaff09Quantity) + (varStaff10OncylusianCorpseflesh * varStaff10Quantity) + (varStaff11OncylusianCorpseflesh * varStaff11Quantity) + (varStaff12OncylusianCorpseflesh * varStaff12Quantity) + (varStaff13OncylusianCorpseflesh * varStaff13Quantity) + (varStaff14OncylusianCorpseflesh * varStaff14Quantity) + (varStaff15OncylusianCorpseflesh * varStaff15Quantity) + (varStaff16OncylusianCorpseflesh * varStaff16Quantity) + (varStaff17OncylusianCorpseflesh * varStaff17Quantity) + (varStaff18OncylusianCorpseflesh * varStaff18Quantity) + (varStaff19OncylusianCorpseflesh * varStaff19Quantity) + (varStaff20OncylusianCorpseflesh * varStaff20Quantity) + (varStaff21OncylusianCorpseflesh * varStaff21Quantity));
    varStaffTaintKhamsetTotal = ((varStaff01TaintKhamset * varStaff01Quantity) + (varStaff02TaintKhamset * varStaff02Quantity) + (varStaff03TaintKhamset * varStaff03Quantity) + (varStaff04TaintKhamset * varStaff04Quantity) + (varStaff05TaintKhamset * varStaff05Quantity) + (varStaff06TaintKhamset * varStaff06Quantity) + (varStaff07TaintKhamset * varStaff07Quantity) + (varStaff08TaintKhamset * varStaff08Quantity) + (varStaff09TaintKhamset * varStaff09Quantity) + (varStaff10TaintKhamset * varStaff10Quantity) + (varStaff11TaintKhamset * varStaff11Quantity) + (varStaff12TaintKhamset * varStaff12Quantity) + (varStaff13TaintKhamset * varStaff13Quantity) + (varStaff14TaintKhamset * varStaff14Quantity) + (varStaff15TaintKhamset * varStaff15Quantity) + (varStaff16TaintKhamset * varStaff16Quantity) + (varStaff17TaintKhamset * varStaff17Quantity) + (varStaff18TaintKhamset * varStaff18Quantity) + (varStaff19TaintKhamset * varStaff19Quantity) + (varStaff20TaintKhamset * varStaff20Quantity) + (varStaff21TaintKhamset * varStaff21Quantity));
    varStaffElementalQuartzTotal = ((varStaff01ElementalQuartz * varStaff01Quantity) + (varStaff02ElementalQuartz * varStaff02Quantity) + (varStaff03ElementalQuartz * varStaff03Quantity) + (varStaff04ElementalQuartz * varStaff04Quantity) + (varStaff05ElementalQuartz * varStaff05Quantity) + (varStaff06ElementalQuartz * varStaff06Quantity) + (varStaff07ElementalQuartz * varStaff07Quantity) + (varStaff08ElementalQuartz * varStaff08Quantity) + (varStaff09ElementalQuartz * varStaff09Quantity) + (varStaff10ElementalQuartz * varStaff10Quantity) + (varStaff11ElementalQuartz * varStaff11Quantity) + (varStaff12ElementalQuartz * varStaff12Quantity) + (varStaff13ElementalQuartz * varStaff13Quantity) + (varStaff14ElementalQuartz * varStaff14Quantity) + (varStaff15ElementalQuartz * varStaff15Quantity) + (varStaff16ElementalQuartz * varStaff16Quantity) + (varStaff17ElementalQuartz * varStaff17Quantity) + (varStaff18ElementalQuartz * varStaff18Quantity) + (varStaff19ElementalQuartz * varStaff19Quantity) + (varStaff20ElementalQuartz * varStaff20Quantity) + (varStaff21ElementalQuartz * varStaff21Quantity));
    varStaffFeralLifeforceTotal = ((varStaff01FeralLifeforce * varStaff01Quantity) + (varStaff02FeralLifeforce * varStaff02Quantity) + (varStaff03FeralLifeforce * varStaff03Quantity) + (varStaff04FeralLifeforce * varStaff04Quantity) + (varStaff05FeralLifeforce * varStaff05Quantity) + (varStaff06FeralLifeforce * varStaff06Quantity) + (varStaff07FeralLifeforce * varStaff07Quantity) + (varStaff08FeralLifeforce * varStaff08Quantity) + (varStaff09FeralLifeforce * varStaff09Quantity) + (varStaff10FeralLifeforce * varStaff10Quantity) + (varStaff11FeralLifeforce * varStaff11Quantity) + (varStaff12FeralLifeforce * varStaff12Quantity) + (varStaff13FeralLifeforce * varStaff13Quantity) + (varStaff14FeralLifeforce * varStaff14Quantity) + (varStaff15FeralLifeforce * varStaff15Quantity) + (varStaff16FeralLifeforce * varStaff16Quantity) + (varStaff17FeralLifeforce * varStaff17Quantity) + (varStaff18FeralLifeforce * varStaff18Quantity) + (varStaff19FeralLifeforce * varStaff19Quantity) + (varStaff20FeralLifeforce * varStaff20Quantity) + (varStaff21FeralLifeforce * varStaff21Quantity));
}

//Staff Calculations
function fnStaff()
{
    fnStaffSubPrice(varStaff01Gold,varStaff01Iron,varStaff01Wood,varStaff01Snakeweed,varStaff01Baneberry,varStaff01Archangelica,varStaff01Hellbore,varStaff01Mandrake,varStaff01Crystal,varStaff01Ruby,varStaff01Garnet,varStaff01Blood,varStaff01Heart,varStaff01Bone,varStaff01Sulfur,varStaff01Darktaint,varStaff01Lifeforce,varStaff01Shadowcrest,varStaff01CielFeyEye,varStaff01VitalQuintessence,varStaff01ElementalCinder,varStaff01OncylusianCorpseflesh,varStaff01TaintKhamset,varStaff01ElementalQuartz,varStaff01FeralLifeforce,varStaff01Success)
    varStaff01Price = varItemPrice;
    fnStaffSubPrice(varStaff02Gold,varStaff02Iron,varStaff02Wood,varStaff02Snakeweed,varStaff02Baneberry,varStaff02Archangelica,varStaff02Hellbore,varStaff02Mandrake,varStaff02Crystal,varStaff02Ruby,varStaff02Garnet,varStaff02Blood,varStaff02Heart,varStaff02Bone,varStaff02Sulfur,varStaff02Darktaint,varStaff02Lifeforce,varStaff02Shadowcrest,varStaff02CielFeyEye,varStaff02VitalQuintessence,varStaff02ElementalCinder,varStaff02OncylusianCorpseflesh,varStaff02TaintKhamset,varStaff02ElementalQuartz,varStaff02FeralLifeforce,varStaff02Success)
    varStaff02Price = varItemPrice;
    fnStaffSubPrice(varStaff03Gold,varStaff03Iron,varStaff03Wood,varStaff03Snakeweed,varStaff03Baneberry,varStaff03Archangelica,varStaff03Hellbore,varStaff03Mandrake,varStaff03Crystal,varStaff03Ruby,varStaff03Garnet,varStaff03Blood,varStaff03Heart,varStaff03Bone,varStaff03Sulfur,varStaff03Darktaint,varStaff03Lifeforce,varStaff03Shadowcrest,varStaff03CielFeyEye,varStaff03VitalQuintessence,varStaff03ElementalCinder,varStaff03OncylusianCorpseflesh,varStaff03TaintKhamset,varStaff03ElementalQuartz,varStaff03FeralLifeforce,varStaff03Success)
    varStaff03Price = varItemPrice;
    fnStaffSubPrice(varStaff04Gold,varStaff04Iron,varStaff04Wood,varStaff04Snakeweed,varStaff04Baneberry,varStaff04Archangelica,varStaff04Hellbore,varStaff04Mandrake,varStaff04Crystal,varStaff04Ruby,varStaff04Garnet,varStaff04Blood,varStaff04Heart,varStaff04Bone,varStaff04Sulfur,varStaff04Darktaint,varStaff04Lifeforce,varStaff04Shadowcrest,varStaff04CielFeyEye,varStaff04VitalQuintessence,varStaff04ElementalCinder,varStaff04OncylusianCorpseflesh,varStaff04TaintKhamset,varStaff04ElementalQuartz,varStaff04FeralLifeforce,varStaff04Success)
    varStaff04Price = varItemPrice;
    fnStaffSubPrice(varStaff05Gold,varStaff05Iron,varStaff05Wood,varStaff05Snakeweed,varStaff05Baneberry,varStaff05Archangelica,varStaff05Hellbore,varStaff05Mandrake,varStaff05Crystal,varStaff05Ruby,varStaff05Garnet,varStaff05Blood,varStaff05Heart,varStaff05Bone,varStaff05Sulfur,varStaff05Darktaint,varStaff05Lifeforce,varStaff05Shadowcrest,varStaff05CielFeyEye,varStaff05VitalQuintessence,varStaff05ElementalCinder,varStaff05OncylusianCorpseflesh,varStaff05TaintKhamset,varStaff05ElementalQuartz,varStaff05FeralLifeforce,varStaff05Success)
    varStaff05Price = varItemPrice;
    fnStaffSubPrice(varStaff06Gold,varStaff06Iron,varStaff06Wood,varStaff06Snakeweed,varStaff06Baneberry,varStaff06Archangelica,varStaff06Hellbore,varStaff06Mandrake,varStaff06Crystal,varStaff06Ruby,varStaff06Garnet,varStaff06Blood,varStaff06Heart,varStaff06Bone,varStaff06Sulfur,varStaff06Darktaint,varStaff06Lifeforce,varStaff06Shadowcrest,varStaff06CielFeyEye,varStaff06VitalQuintessence,varStaff06ElementalCinder,varStaff06OncylusianCorpseflesh,varStaff06TaintKhamset,varStaff06ElementalQuartz,varStaff06FeralLifeforce,varStaff06Success)
    varStaff06Price = varItemPrice;
    fnStaffSubPrice(varStaff07Gold,varStaff07Iron,varStaff07Wood,varStaff07Snakeweed,varStaff07Baneberry,varStaff07Archangelica,varStaff07Hellbore,varStaff07Mandrake,varStaff07Crystal,varStaff07Ruby,varStaff07Garnet,varStaff07Blood,varStaff07Heart,varStaff07Bone,varStaff07Sulfur,varStaff07Darktaint,varStaff07Lifeforce,varStaff07Shadowcrest,varStaff07CielFeyEye,varStaff07VitalQuintessence,varStaff07ElementalCinder,varStaff07OncylusianCorpseflesh,varStaff07TaintKhamset,varStaff07ElementalQuartz,varStaff07FeralLifeforce,varStaff07Success)
    varStaff07Price = varItemPrice;
    fnStaffSubPrice(varStaff08Gold,varStaff08Iron,varStaff08Wood,varStaff08Snakeweed,varStaff08Baneberry,varStaff08Archangelica,varStaff08Hellbore,varStaff08Mandrake,varStaff08Crystal,varStaff08Ruby,varStaff08Garnet,varStaff08Blood,varStaff08Heart,varStaff08Bone,varStaff08Sulfur,varStaff08Darktaint,varStaff08Lifeforce,varStaff08Shadowcrest,varStaff08CielFeyEye,varStaff08VitalQuintessence,varStaff08ElementalCinder,varStaff08OncylusianCorpseflesh,varStaff08TaintKhamset,varStaff08ElementalQuartz,varStaff08FeralLifeforce,varStaff08Success)
    varStaff08Price = varItemPrice;
    fnStaffSubPrice(varStaff09Gold,varStaff09Iron,varStaff09Wood,varStaff09Snakeweed,varStaff09Baneberry,varStaff09Archangelica,varStaff09Hellbore,varStaff09Mandrake,varStaff09Crystal,varStaff09Ruby,varStaff09Garnet,varStaff09Blood,varStaff09Heart,varStaff09Bone,varStaff09Sulfur,varStaff09Darktaint,varStaff09Lifeforce,varStaff09Shadowcrest,varStaff09CielFeyEye,varStaff09VitalQuintessence,varStaff09ElementalCinder,varStaff09OncylusianCorpseflesh,varStaff09TaintKhamset,varStaff09ElementalQuartz,varStaff09FeralLifeforce,varStaff09Success)
    varStaff09Price = varItemPrice;
    fnStaffSubPrice(varStaff10Gold,varStaff10Iron,varStaff10Wood,varStaff10Snakeweed,varStaff10Baneberry,varStaff10Archangelica,varStaff10Hellbore,varStaff10Mandrake,varStaff10Crystal,varStaff10Ruby,varStaff10Garnet,varStaff10Blood,varStaff10Heart,varStaff10Bone,varStaff10Sulfur,varStaff10Darktaint,varStaff10Lifeforce,varStaff10Shadowcrest,varStaff10CielFeyEye,varStaff10VitalQuintessence,varStaff10ElementalCinder,varStaff10OncylusianCorpseflesh,varStaff10TaintKhamset,varStaff10ElementalQuartz,varStaff10FeralLifeforce,varStaff10Success)
    varStaff10Price = varItemPrice;
    fnStaffSubPrice(varStaff11Gold,varStaff11Iron,varStaff11Wood,varStaff11Snakeweed,varStaff11Baneberry,varStaff11Archangelica,varStaff11Hellbore,varStaff11Mandrake,varStaff11Crystal,varStaff11Ruby,varStaff11Garnet,varStaff11Blood,varStaff11Heart,varStaff11Bone,varStaff11Sulfur,varStaff11Darktaint,varStaff11Lifeforce,varStaff11Shadowcrest,varStaff11CielFeyEye,varStaff11VitalQuintessence,varStaff11ElementalCinder,varStaff11OncylusianCorpseflesh,varStaff11TaintKhamset,varStaff11ElementalQuartz,varStaff11FeralLifeforce,varStaff11Success)
    varStaff11Price = varItemPrice;
    fnStaffSubPrice(varStaff12Gold,varStaff12Iron,varStaff12Wood,varStaff12Snakeweed,varStaff12Baneberry,varStaff12Archangelica,varStaff12Hellbore,varStaff12Mandrake,varStaff12Crystal,varStaff12Ruby,varStaff12Garnet,varStaff12Blood,varStaff12Heart,varStaff12Bone,varStaff12Sulfur,varStaff12Darktaint,varStaff12Lifeforce,varStaff12Shadowcrest,varStaff12CielFeyEye,varStaff12VitalQuintessence,varStaff12ElementalCinder,varStaff12OncylusianCorpseflesh,varStaff12TaintKhamset,varStaff12ElementalQuartz,varStaff12FeralLifeforce,varStaff12Success)
    varStaff12Price = varItemPrice;
    fnStaffSubPrice(varStaff13Gold,varStaff13Iron,varStaff13Wood,varStaff13Snakeweed,varStaff13Baneberry,varStaff13Archangelica,varStaff13Hellbore,varStaff13Mandrake,varStaff13Crystal,varStaff13Ruby,varStaff13Garnet,varStaff13Blood,varStaff13Heart,varStaff13Bone,varStaff13Sulfur,varStaff13Darktaint,varStaff13Lifeforce,varStaff13Shadowcrest,varStaff13CielFeyEye,varStaff13VitalQuintessence,varStaff13ElementalCinder,varStaff13OncylusianCorpseflesh,varStaff13TaintKhamset,varStaff13ElementalQuartz,varStaff13FeralLifeforce,varStaff13Success)
    varStaff13Price = varItemPrice;
    fnStaffSubPrice(varStaff14Gold,varStaff14Iron,varStaff14Wood,varStaff14Snakeweed,varStaff14Baneberry,varStaff14Archangelica,varStaff14Hellbore,varStaff14Mandrake,varStaff14Crystal,varStaff14Ruby,varStaff14Garnet,varStaff14Blood,varStaff14Heart,varStaff14Bone,varStaff14Sulfur,varStaff14Darktaint,varStaff14Lifeforce,varStaff14Shadowcrest,varStaff14CielFeyEye,varStaff14VitalQuintessence,varStaff14ElementalCinder,varStaff14OncylusianCorpseflesh,varStaff14TaintKhamset,varStaff14ElementalQuartz,varStaff14FeralLifeforce,varStaff14Success)
    varStaff14Price = varItemPrice;
    fnStaffSubPrice(varStaff15Gold,varStaff15Iron,varStaff15Wood,varStaff15Snakeweed,varStaff15Baneberry,varStaff15Archangelica,varStaff15Hellbore,varStaff15Mandrake,varStaff15Crystal,varStaff15Ruby,varStaff15Garnet,varStaff15Blood,varStaff15Heart,varStaff15Bone,varStaff15Sulfur,varStaff15Darktaint,varStaff15Lifeforce,varStaff15Shadowcrest,varStaff15CielFeyEye,varStaff15VitalQuintessence,varStaff15ElementalCinder,varStaff15OncylusianCorpseflesh,varStaff15TaintKhamset,varStaff15ElementalQuartz,varStaff15FeralLifeforce,varStaff15Success)
    varStaff15Price = varItemPrice;
    fnStaffSubPrice(varStaff16Gold,varStaff16Iron,varStaff16Wood,varStaff16Snakeweed,varStaff16Baneberry,varStaff16Archangelica,varStaff16Hellbore,varStaff16Mandrake,varStaff16Crystal,varStaff16Ruby,varStaff16Garnet,varStaff16Blood,varStaff16Heart,varStaff16Bone,varStaff16Sulfur,varStaff16Darktaint,varStaff16Lifeforce,varStaff16Shadowcrest,varStaff16CielFeyEye,varStaff16VitalQuintessence,varStaff16ElementalCinder,varStaff16OncylusianCorpseflesh,varStaff16TaintKhamset,varStaff16ElementalQuartz,varStaff16FeralLifeforce,varStaff16Success)
    varStaff16Price = varItemPrice;
    fnStaffSubPrice(varStaff17Gold,varStaff17Iron,varStaff17Wood,varStaff17Snakeweed,varStaff17Baneberry,varStaff17Archangelica,varStaff17Hellbore,varStaff17Mandrake,varStaff17Crystal,varStaff17Ruby,varStaff17Garnet,varStaff17Blood,varStaff17Heart,varStaff17Bone,varStaff17Sulfur,varStaff17Darktaint,varStaff17Lifeforce,varStaff17Shadowcrest,varStaff17CielFeyEye,varStaff17VitalQuintessence,varStaff17ElementalCinder,varStaff17OncylusianCorpseflesh,varStaff17TaintKhamset,varStaff17ElementalQuartz,varStaff17FeralLifeforce,varStaff17Success)
    varStaff17Price = varItemPrice;
    fnStaffSubPrice(varStaff18Gold,varStaff18Iron,varStaff18Wood,varStaff18Snakeweed,varStaff18Baneberry,varStaff18Archangelica,varStaff18Hellbore,varStaff18Mandrake,varStaff18Crystal,varStaff18Ruby,varStaff18Garnet,varStaff18Blood,varStaff18Heart,varStaff18Bone,varStaff18Sulfur,varStaff18Darktaint,varStaff18Lifeforce,varStaff18Shadowcrest,varStaff18CielFeyEye,varStaff18VitalQuintessence,varStaff18ElementalCinder,varStaff18OncylusianCorpseflesh,varStaff18TaintKhamset,varStaff18ElementalQuartz,varStaff18FeralLifeforce,varStaff18Success)
    varStaff18Price = varItemPrice;
    fnStaffSubPrice(varStaff19Gold,varStaff19Iron,varStaff19Wood,varStaff19Snakeweed,varStaff19Baneberry,varStaff19Archangelica,varStaff19Hellbore,varStaff19Mandrake,varStaff19Crystal,varStaff19Ruby,varStaff19Garnet,varStaff19Blood,varStaff19Heart,varStaff19Bone,varStaff19Sulfur,varStaff19Darktaint,varStaff19Lifeforce,varStaff19Shadowcrest,varStaff19CielFeyEye,varStaff19VitalQuintessence,varStaff19ElementalCinder,varStaff19OncylusianCorpseflesh,varStaff19TaintKhamset,varStaff19ElementalQuartz,varStaff19FeralLifeforce,varStaff19Success)
    varStaff19Price = varItemPrice;
    fnStaffSubPrice(varStaff20Gold,varStaff20Iron,varStaff20Wood,varStaff20Snakeweed,varStaff20Baneberry,varStaff20Archangelica,varStaff20Hellbore,varStaff20Mandrake,varStaff20Crystal,varStaff20Ruby,varStaff20Garnet,varStaff20Blood,varStaff20Heart,varStaff20Bone,varStaff20Sulfur,varStaff20Darktaint,varStaff20Lifeforce,varStaff20Shadowcrest,varStaff20CielFeyEye,varStaff20VitalQuintessence,varStaff20ElementalCinder,varStaff20OncylusianCorpseflesh,varStaff20TaintKhamset,varStaff20ElementalQuartz,varStaff20FeralLifeforce,varStaff20Success)
    varStaff20Price = varItemPrice;
    fnStaffSubPrice(varStaff21Gold,varStaff21Iron,varStaff21Wood,varStaff21Snakeweed,varStaff21Baneberry,varStaff21Archangelica,varStaff21Hellbore,varStaff21Mandrake,varStaff21Crystal,varStaff21Ruby,varStaff21Garnet,varStaff21Blood,varStaff21Heart,varStaff21Bone,varStaff21Sulfur,varStaff21Darktaint,varStaff21Lifeforce,varStaff21Shadowcrest,varStaff21CielFeyEye,varStaff21VitalQuintessence,varStaff21ElementalCinder,varStaff21OncylusianCorpseflesh,varStaff21TaintKhamset,varStaff21ElementalQuartz,varStaff21FeralLifeforce,varStaff21Success)
    varStaff21Price = varItemPrice;
}

function fnReloadStaffPrices()
{
    //Staff Prices
    document.getElementById('Staff01Price').value = varStaff01Price;
    document.getElementById('Staff02Price').value = varStaff02Price;
    document.getElementById('Staff03Price').value = varStaff03Price;
    document.getElementById('Staff04Price').value = varStaff04Price;
    document.getElementById('Staff05Price').value = varStaff05Price;
    document.getElementById('Staff06Price').value = varStaff06Price;
    document.getElementById('Staff07Price').value = varStaff07Price;
    document.getElementById('Staff08Price').value = varStaff08Price;
    document.getElementById('Staff09Price').value = varStaff09Price;
    document.getElementById('Staff10Price').value = varStaff10Price;
    document.getElementById('Staff11Price').value = varStaff11Price;
    document.getElementById('Staff12Price').value = varStaff12Price;
    document.getElementById('Staff13Price').value = varStaff13Price;
    document.getElementById('Staff14Price').value = varStaff14Price;
    document.getElementById('Staff15Price').value = varStaff15Price;
    document.getElementById('Staff16Price').value = varStaff16Price;
    document.getElementById('Staff17Price').value = varStaff17Price;
    document.getElementById('Staff18Price').value = varStaff18Price;
    document.getElementById('Staff19Price').value = varStaff19Price;
    document.getElementById('Staff20Price').value = varStaff20Price;
    document.getElementById('Staff21Price').value = varStaff21Price;

    //Staff Total Prices
    document.getElementById('StaffTotal').value = varStaffTotal;
    document.getElementById('StaffGoldTotal').value = varStaffGoldTotal;
    document.getElementById('StaffIronTotal').value = varStaffIronTotal;
    document.getElementById('StaffWoodTotal').value = varStaffWoodTotal;
    document.getElementById('StaffSnakeweedTotal').value = varStaffSnakeweedTotal;
    document.getElementById('StaffBaneberryTotal').value = varStaffBaneberryTotal;
    document.getElementById('StaffArchangelicaTotal').value = varStaffArchangelicaTotal;
    document.getElementById('StaffHellboreTotal').value = varStaffHellboreTotal;
    document.getElementById('StaffMandrakeTotal').value = varStaffMandrakeTotal;
    document.getElementById('StaffCrystalTotal').value = varStaffCrystalTotal;
    document.getElementById('StaffRubyTotal').value = varStaffRubyTotal;
    document.getElementById('StaffGarnetTotal').value = varStaffGarnetTotal;
    document.getElementById('StaffBloodTotal').value = varStaffBloodTotal;
    document.getElementById('StaffHeartTotal').value = varStaffHeartTotal;
    document.getElementById('StaffBoneTotal').value = varStaffBoneTotal;
    document.getElementById('StaffSulfurTotal').value = varStaffSulfurTotal;
    document.getElementById('StaffDarktaintTotal').value = varStaffDarktaintTotal;
    document.getElementById('StaffLifeforceTotal').value = varStaffLifeforceTotal;
    document.getElementById('StaffShadowcrestTotal').value = varStaffShadowcrestTotal;
    document.getElementById('StaffCielFeyEyeTotal').value = varStaffCielFeyEyeTotal;
    document.getElementById('StaffVitalQuintessenceTotal').value = varStaffVitalQuintessenceTotal;
    document.getElementById('StaffElementalCinderTotal').value = varStaffElementalCinderTotal;
    document.getElementById('StaffOncylusianCorpsefleshTotal').value = varStaffOncylusianCorpsefleshTotal;
    document.getElementById('StaffTaintKhamsetTotal').value = varStaffTaintKhamsetTotal;
    document.getElementById('StaffElementalQuartzTotal').value = varStaffElementalQuartzTotal;
    document.getElementById('StaffFeralLifeforceTotal').value = varStaffFeralLifeforceTotal;
    
}

function fnStaffInitialize()
{
    varStaffTotal = document.getElementById("StaffTotal").value;
    varStaffGoldTotal = document.getElementById("StaffGoldTotal").value;
    varStaffIronTotal = document.getElementById("StaffIronTotal").value;
    varStaffWoodTotal = document.getElementById("StaffWoodTotal").value;
    varStaffSnakeweedTotal = document.getElementById('StaffSnakeweedTotal').value;
    varStaffBaneberryTotal = document.getElementById('StaffBaneberryTotal').value;
    varStaffArchangelicaTotal = document.getElementById('StaffArchangelicaTotal').value;
    varStaffHellboreTotal = document.getElementById('StaffHellboreTotal').value;
    varStaffMandrakeTotal = document.getElementById('StaffMandrakeTotal').value;
    varStaffCrystalTotal = document.getElementById('StaffCrystalTotal').value;
    varStaffRubyTotal = document.getElementById('StaffRubyTotal').value;
    varStaffGarnetTotal = document.getElementById('StaffGarnetTotal').value;
    varStaffBloodTotal = document.getElementById('StaffBloodTotal').value;
    varStaffHeartTotal = document.getElementById('StaffHeartTotal').value;
    varStaffBoneTotal = document.getElementById('StaffBoneTotal').value;
    varStaffSulfurTotal = document.getElementById('StaffSulfurTotal').value;
    varStaffDarktaintTotal = document.getElementById('StaffDarktaintTotal').value;
    varStaffLifeforceTotal = document.getElementById('StaffLifeforceTotal').value;
    varStaffShadowcrestTotal = document.getElementById('StaffShadowcrestTotal').value;
    varStaffCielFeyEyeTotal = document.getElementById('StaffCielFeyEyeTotal').value;
    varStaffVitalQuintessenceTotal = document.getElementById('StaffVitalQuintessenceTotal').value;
    varStaffElementalCinderTotal = document.getElementById('StaffElementalCinderTotal').value;
    varStaffOncylusianCorpsefleshTotal = document.getElementById('StaffOncylusianCorpsefleshTotal').value;
    varStaffTaintKhamsetTotal = document.getElementById('StaffTaintKhamsetTotal').value;
    varStaffElementalQuartzTotal = document.getElementById('StaffElementalQuartzTotal').value;
    varStaffFeralLifeforceTotal = document.getElementById('StaffFeralLifeforceTotal').value;

    // *** Staff VARIABLES ***
	//Alfar Mage Staff
    varStaff01Quantity = document.getElementById("Staff01Quantity").value;
    varStaff01Price = document.getElementById("Staff01Price").value;
    varStaff01Success = document.getElementById("Staff01Success").value;
    varStaff01Gold = 0
    varStaff01Iron = 0
    varStaff01Wood = 1
    varStaff01Snakeweed = 2
    varStaff01Baneberry = 0
    varStaff01Archangelica = 0
    varStaff01Hellbore = 0
    varStaff01Mandrake = 0
    varStaff01Crystal = 0
    varStaff01Ruby = 0
    varStaff01Garnet = 0
    varStaff01Blood = 0
    varStaff01Heart = 0
    varStaff01Bone = 0
    varStaff01Sulfur = 0
    varStaff01Darktaint = 0
    varStaff01Lifeforce = 0
    varStaff01Shadowcrest = 0
    varStaff01CielFeyEye = 0
    varStaff01VitalQuintessence = 0
    varStaff01ElementalCinder = 0
    varStaff01OncylusianCorpseflesh = 0
    varStaff01TaintKhamset = 0
    varStaff01ElementalQuartz = 0
    varStaff01FeralLifeforce = 0
    //Mahirim Tribal Staff
    varStaff02Quantity = document.getElementById("Staff02Quantity").value;
    varStaff02Price = document.getElementById("Staff02Price").value;
    varStaff02Success = document.getElementById("Staff02Success").value;
    varStaff02Gold = 0
    varStaff02Iron = 0
    varStaff02Wood = 1
    varStaff02Snakeweed = 0
    varStaff02Baneberry = 2
    varStaff02Archangelica = 0
    varStaff02Hellbore = 0
    varStaff02Mandrake = 0
    varStaff02Crystal = 0
    varStaff02Ruby = 0
    varStaff02Garnet = 0
    varStaff02Blood = 0
    varStaff02Heart = 0
    varStaff02Bone = 0
    varStaff02Sulfur = 0
    varStaff02Darktaint = 0
    varStaff02Lifeforce = 0
    varStaff02Shadowcrest = 0
    varStaff02CielFeyEye = 0
    varStaff02VitalQuintessence = 0
    varStaff02ElementalCinder = 0
    varStaff02OncylusianCorpseflesh = 0
    varStaff02TaintKhamset = 0
    varStaff02ElementalQuartz = 0
    varStaff02FeralLifeforce = 0
    //Mercian Mage Staff
    varStaff03Quantity = document.getElementById("Staff03Quantity").value;
    varStaff03Price = document.getElementById("Staff03Price").value;
    varStaff03Success = document.getElementById("Staff03Success").value;
    varStaff03Gold = 0
    varStaff03Iron = 0
    varStaff03Wood = 1
    varStaff03Snakeweed = 0
    varStaff03Baneberry = 0
    varStaff03Archangelica = 2
    varStaff03Hellbore = 0
    varStaff03Mandrake = 0
    varStaff03Crystal = 0
    varStaff03Ruby = 0
    varStaff03Garnet = 0
    varStaff03Blood = 0
    varStaff03Heart = 0
    varStaff03Bone = 0
    varStaff03Sulfur = 0
    varStaff03Darktaint = 0
    varStaff03Lifeforce = 0
    varStaff03Shadowcrest = 0
    varStaff03CielFeyEye = 0
    varStaff03VitalQuintessence = 0
    varStaff03ElementalCinder = 0
    varStaff03OncylusianCorpseflesh = 0
    varStaff03TaintKhamset = 0
    varStaff03ElementalQuartz = 0
    varStaff03FeralLifeforce = 0
    //Mirdain Spellstaff
    varStaff04Quantity = document.getElementById("Staff04Quantity").value;
    varStaff04Price = document.getElementById("Staff04Price").value;
    varStaff04Success = document.getElementById("Staff04Success").value;
    varStaff04Gold = 0
    varStaff04Iron = 0
    varStaff04Wood = 1
    varStaff04Snakeweed = 0
    varStaff04Baneberry = 0
    varStaff04Archangelica = 0
    varStaff04Hellbore = 0
    varStaff04Mandrake = 2
    varStaff04Crystal = 0
    varStaff04Ruby = 0
    varStaff04Garnet = 0
    varStaff04Blood = 0
    varStaff04Heart = 0
    varStaff04Bone = 0
    varStaff04Sulfur = 0
    varStaff04Darktaint = 0
    varStaff04Lifeforce = 0
    varStaff04Shadowcrest = 0
    varStaff04CielFeyEye = 0
    varStaff04VitalQuintessence = 0
    varStaff04ElementalCinder = 0
    varStaff04OncylusianCorpseflesh = 0
    varStaff04TaintKhamset = 0
    varStaff04ElementalQuartz = 0
    varStaff04FeralLifeforce = 0
    //Orkish Magic Staff
    varStaff05Quantity = document.getElementById("Staff05Quantity").value;
    varStaff05Price = document.getElementById("Staff05Price").value;
    varStaff05Success = document.getElementById("Staff05Success").value;
    varStaff05Gold = 0
    varStaff05Iron = 0
    varStaff05Wood = 1
    varStaff05Snakeweed = 0
    varStaff05Baneberry = 0
    varStaff05Archangelica = 0
    varStaff05Hellbore = 2
    varStaff05Mandrake = 0
    varStaff05Crystal = 0
    varStaff05Ruby = 0
    varStaff05Garnet = 0
    varStaff05Blood = 0
    varStaff05Heart = 0
    varStaff05Bone = 0
    varStaff05Sulfur = 0
    varStaff05Darktaint = 0
    varStaff05Lifeforce = 0
    varStaff05Shadowcrest = 0
    varStaff05CielFeyEye = 0
    varStaff05VitalQuintessence = 0
    varStaff05ElementalCinder = 0
    varStaff05OncylusianCorpseflesh = 0
    varStaff05TaintKhamset = 0
    varStaff05ElementalQuartz = 0
    varStaff05FeralLifeforce = 0
    //Dwarven Staff
    varStaff06Quantity = document.getElementById("Staff06Quantity").value;
    varStaff06Price = document.getElementById("Staff06Price").value;
    varStaff06Success = document.getElementById("Staff06Success").value;
    varStaff06Gold = 0
    varStaff06Iron = 0
    varStaff06Wood = 1
    varStaff06Snakeweed = 0
    varStaff06Baneberry = 0
    varStaff06Archangelica = 0
    varStaff06Hellbore = 0
    varStaff06Mandrake = 0
    varStaff06Crystal = 0
    varStaff06Ruby = 0
    varStaff06Garnet = 0
    varStaff06Blood = 0
    varStaff06Heart = 0
    varStaff06Bone = 0
    varStaff06Sulfur = 2
    varStaff06Darktaint = 0
    varStaff06Lifeforce = 0
    varStaff06Shadowcrest = 0
    varStaff06CielFeyEye = 0
    varStaff06VitalQuintessence = 0
    varStaff06ElementalCinder = 0
    varStaff06OncylusianCorpseflesh = 0
    varStaff06TaintKhamset = 0
    varStaff06ElementalQuartz = 0
    varStaff06FeralLifeforce = 0
    //Troll Staff
    varStaff07Quantity = document.getElementById("Staff07Quantity").value;
    varStaff07Price = document.getElementById("Staff07Price").value;
    varStaff07Success = document.getElementById("Staff07Success").value;
    varStaff07Gold = 0
    varStaff07Iron = 0
    varStaff07Wood = 0
    varStaff07Snakeweed = 0
    varStaff07Baneberry = 0
    varStaff07Archangelica = 0
    varStaff07Hellbore = 0
    varStaff07Mandrake = 0
    varStaff07Crystal = 0
    varStaff07Ruby = 0
    varStaff07Garnet = 0
    varStaff07Blood = 0
    varStaff07Heart = 0
    varStaff07Bone = 2
    varStaff07Sulfur = 2
    varStaff07Darktaint = 0
    varStaff07Lifeforce = 0
    varStaff07Shadowcrest = 0
    varStaff07CielFeyEye = 0
    varStaff07VitalQuintessence = 0
    varStaff07ElementalCinder = 0
    varStaff07OncylusianCorpseflesh = 0
    varStaff07TaintKhamset = 0
    varStaff07ElementalQuartz = 0
    varStaff07FeralLifeforce = 0
    //Darkheart
    varStaff08Quantity = document.getElementById("Staff08Quantity").value;
    varStaff08Price = document.getElementById("Staff08Price").value;
    varStaff08Success = document.getElementById("Staff08Success").value;
    varStaff08Gold = 0
    varStaff08Iron = 0
    varStaff08Wood = 1
    varStaff08Snakeweed = 0
    varStaff08Baneberry = 5
    varStaff08Archangelica = 0
    varStaff08Hellbore = 0
    varStaff08Mandrake = 0
    varStaff08Crystal = 0
    varStaff08Ruby = 0
    varStaff08Garnet = 0
    varStaff08Blood = 0
    varStaff08Heart = 2
    varStaff08Bone = 0
    varStaff08Sulfur = 0
    varStaff08Darktaint = 0
    varStaff08Lifeforce = 0
    varStaff08Shadowcrest = 0
    varStaff08CielFeyEye = 0
    varStaff08VitalQuintessence = 0
    varStaff08ElementalCinder = 0
    varStaff08OncylusianCorpseflesh = 0
    varStaff08TaintKhamset = 0
    varStaff08ElementalQuartz = 0
    varStaff08FeralLifeforce = 0
    //Traitor's Glory
    varStaff09Quantity = document.getElementById("Staff09Quantity").value;
    varStaff09Price = document.getElementById("Staff09Price").value;
    varStaff09Success = document.getElementById("Staff09Success").value;
    varStaff09Gold = 0
    varStaff09Iron = 2
    varStaff09Wood = 1
    varStaff09Snakeweed = 9
    varStaff09Baneberry = 0
    varStaff09Archangelica = 0
    varStaff09Hellbore = 0
    varStaff09Mandrake = 0
    varStaff09Crystal = 0
    varStaff09Ruby = 0
    varStaff09Garnet = 0
    varStaff09Blood = 0
    varStaff09Heart = 0
    varStaff09Bone = 0
    varStaff09Sulfur = 0
    varStaff09Darktaint = 0
    varStaff09Lifeforce = 0
    varStaff09Shadowcrest = 0
    varStaff09CielFeyEye = 0
    varStaff09VitalQuintessence = 0
    varStaff09ElementalCinder = 0
    varStaff09OncylusianCorpseflesh = 0
    varStaff09TaintKhamset = 0
    varStaff09ElementalQuartz = 0
    varStaff09FeralLifeforce = 0
    //Blackbolt
    varStaff10Quantity = document.getElementById("Staff10Quantity").value;
    varStaff10Price = document.getElementById("Staff10Price").value;
    varStaff10Success = document.getElementById("Staff10Success").value;
    varStaff10Gold = 15
    varStaff10Iron = 3
    varStaff10Wood = 0
    varStaff10Snakeweed = 8
    varStaff10Baneberry = 0
    varStaff10Archangelica = 0
    varStaff10Hellbore = 0
    varStaff10Mandrake = 0
    varStaff10Crystal = 0
    varStaff10Ruby = 0
    varStaff10Garnet = 0
    varStaff10Blood = 0
    varStaff10Heart = 0
    varStaff10Bone = 0
    varStaff10Sulfur = 7
    varStaff10Darktaint = 0
    varStaff10Lifeforce = 0
    varStaff10Shadowcrest = 0
    varStaff10CielFeyEye = 0
    varStaff10VitalQuintessence = 0
    varStaff10ElementalCinder = 0
    varStaff10OncylusianCorpseflesh = 0
    varStaff10TaintKhamset = 0
    varStaff10ElementalQuartz = 0
    varStaff10FeralLifeforce = 0
    //Deerstick
    varStaff11Quantity = document.getElementById("Staff11Quantity").value;
    varStaff11Price = document.getElementById("Staff11Price").value;
    varStaff11Success = document.getElementById("Staff11Success").value;
    varStaff11Gold = 15
    varStaff11Iron = 0
    varStaff11Wood = 1
    varStaff11Snakeweed = 8
    varStaff11Baneberry = 0
    varStaff11Archangelica = 0
    varStaff11Hellbore = 0
    varStaff11Mandrake = 0
    varStaff11Crystal = 0
    varStaff11Ruby = 0
    varStaff11Garnet = 0
    varStaff11Blood = 0
    varStaff11Heart = 0
    varStaff11Bone = 17
    varStaff11Sulfur = 0
    varStaff11Darktaint = 0
    varStaff11Lifeforce = 0
    varStaff11Shadowcrest = 0
    varStaff11CielFeyEye = 0
    varStaff11VitalQuintessence = 0
    varStaff11ElementalCinder = 0
    varStaff11OncylusianCorpseflesh = 0
    varStaff11TaintKhamset = 0
    varStaff11ElementalQuartz = 0
    varStaff11FeralLifeforce = 0
    //Darkscepter
    varStaff12Quantity = document.getElementById("Staff12Quantity").value;
    varStaff12Price = document.getElementById("Staff12Price").value;
    varStaff12Success = document.getElementById("Staff12Success").value;
    varStaff12Gold = 25
    varStaff12Iron = 3
    varStaff12Wood = 2
    varStaff12Snakeweed = 0
    varStaff12Baneberry = 0
    varStaff12Archangelica = 0
    varStaff12Hellbore = 0
    varStaff12Mandrake = 0
    varStaff12Crystal = 0
    varStaff12Ruby = 0
    varStaff12Garnet = 0
    varStaff12Blood = 0
    varStaff12Heart = 0
    varStaff12Bone = 0
    varStaff12Sulfur = 0
    varStaff12Darktaint = 8
    varStaff12Lifeforce = 0
    varStaff12Shadowcrest = 0
    varStaff12CielFeyEye = 0
    varStaff12VitalQuintessence = 0
    varStaff12ElementalCinder = 0
    varStaff12OncylusianCorpseflesh = 0
    varStaff12TaintKhamset = 0
    varStaff12ElementalQuartz = 0
    varStaff12FeralLifeforce = 0
    //Lightstealer
    varStaff13Quantity = document.getElementById("Staff13Quantity").value;
    varStaff13Price = document.getElementById("Staff13Price").value;
    varStaff13Success = document.getElementById("Staff13Success").value;
    varStaff13Gold = 25
    varStaff13Iron = 3
    varStaff13Wood = 3
    varStaff13Snakeweed = 0
    varStaff13Baneberry = 0
    varStaff13Archangelica = 0
    varStaff13Hellbore = 0
    varStaff13Mandrake = 0
    varStaff13Crystal = 0
    varStaff13Ruby = 0
    varStaff13Garnet = 0
    varStaff13Blood = 0
    varStaff13Heart = 0
    varStaff13Bone = 0
    varStaff13Sulfur = 0
    varStaff13Darktaint = 0
    varStaff13Lifeforce = 0
    varStaff13Shadowcrest = 2
    varStaff13CielFeyEye = 0
    varStaff13VitalQuintessence = 0
    varStaff13ElementalCinder = 0
    varStaff13OncylusianCorpseflesh = 0
    varStaff13TaintKhamset = 0
    varStaff13ElementalQuartz = 0
    varStaff13FeralLifeforce = 0
    //Alfar Staff
    varStaff14Quantity = document.getElementById("Staff14Quantity").value;
    varStaff14Price = document.getElementById("Staff14Price").value;
    varStaff14Success = document.getElementById("Staff14Success").value;
    varStaff14Gold = 100
    varStaff14Iron = 0
    varStaff14Wood = 3
    varStaff14Snakeweed = 0
    varStaff14Baneberry = 0
    varStaff14Archangelica = 0
    varStaff14Hellbore = 0
    varStaff14Mandrake = 0
    varStaff14Crystal = 0
    varStaff14Ruby = 2
    varStaff14Garnet = 0
    varStaff14Blood = 0
    varStaff14Heart = 0
    varStaff14Bone = 0
    varStaff14Sulfur = 0
    varStaff14Darktaint = 0
    varStaff14Lifeforce = 0
    varStaff14Shadowcrest = 0
    varStaff14CielFeyEye = 0
    varStaff14VitalQuintessence = 13
    varStaff14ElementalCinder = 0
    varStaff14OncylusianCorpseflesh = 0
    varStaff14TaintKhamset = 0
    varStaff14ElementalQuartz = 0
    varStaff14FeralLifeforce = 0
    //Dwarven Longstaff
    varStaff15Quantity = document.getElementById("Staff15Quantity").value;
    varStaff15Price = document.getElementById("Staff15Price").value;
    varStaff15Success = document.getElementById("Staff15Success").value;
    varStaff15Gold = 100
    varStaff15Iron = 10
    varStaff15Wood = 0
    varStaff15Snakeweed = 0
    varStaff15Baneberry = 0
    varStaff15Archangelica = 0
    varStaff15Hellbore = 0
    varStaff15Mandrake = 0
    varStaff15Crystal = 0
    varStaff15Ruby = 0
    varStaff15Garnet = 0
    varStaff15Blood = 0
    varStaff15Heart = 0
    varStaff15Bone = 0
    varStaff15Sulfur = 12
    varStaff15Darktaint = 0
    varStaff15Lifeforce = 0
    varStaff15Shadowcrest = 0
    varStaff15CielFeyEye = 0
    varStaff15VitalQuintessence = 0
    varStaff15ElementalCinder = 0
    varStaff15OncylusianCorpseflesh = 0
    varStaff15TaintKhamset = 0
    varStaff15ElementalQuartz = 2
    varStaff15FeralLifeforce = 0
    //Mahirim Staff
    varStaff16Quantity = document.getElementById("Staff16Quantity").value;
    varStaff16Price = document.getElementById("Staff16Price").value;
    varStaff16Success = document.getElementById("Staff16Success").value;
    varStaff16Gold = 100
    varStaff16Iron = 0
    varStaff16Wood = 6
    varStaff16Snakeweed = 10
    varStaff16Baneberry = 0
    varStaff16Archangelica = 0
    varStaff16Hellbore = 0
    varStaff16Mandrake = 0
    varStaff16Crystal = 0
    varStaff16Ruby = 0
    varStaff16Garnet = 0
    varStaff16Blood = 0
    varStaff16Heart = 0
    varStaff16Bone = 0
    varStaff16Sulfur = 0
    varStaff16Darktaint = 0
    varStaff16Lifeforce = 0
    varStaff16Shadowcrest = 0
    varStaff16CielFeyEye = 0
    varStaff16VitalQuintessence = 0
    varStaff16ElementalCinder = 0
    varStaff16OncylusianCorpseflesh = 0
    varStaff16TaintKhamset = 0
    varStaff16ElementalQuartz = 0
    varStaff16FeralLifeforce = 5
    //Mercian Wizard Staff
    varStaff17Quantity = document.getElementById("Staff17Quantity").value;
    varStaff17Price = document.getElementById("Staff17Price").value;
    varStaff17Success = document.getElementById("Staff17Success").value;
    varStaff17Gold = 100
    varStaff17Iron = 7
    varStaff17Wood = 3
    varStaff17Snakeweed = 0
    varStaff17Baneberry = 0
    varStaff17Archangelica = 0
    varStaff17Hellbore = 0
    varStaff17Mandrake = 0
    varStaff17Crystal = 0
    varStaff17Ruby = 0
    varStaff17Garnet = 2
    varStaff17Blood = 0
    varStaff17Heart = 0
    varStaff17Bone = 0
    varStaff17Sulfur = 0
    varStaff17Darktaint = 0
    varStaff17Lifeforce = 0
    varStaff17Shadowcrest = 0
    varStaff17CielFeyEye = 0
    varStaff17VitalQuintessence = 0
    varStaff17ElementalCinder = 2
    varStaff17OncylusianCorpseflesh = 0
    varStaff17TaintKhamset = 0
    varStaff17ElementalQuartz = 0
    varStaff17FeralLifeforce = 0
    //Mirdain Crystal Staff
    varStaff18Quantity = document.getElementById("Staff18Quantity").value;
    varStaff18Price = document.getElementById("Staff18Price").value;
    varStaff18Success = document.getElementById("Staff18Success").value;
    varStaff18Gold = 100
    varStaff18Iron = 4
    varStaff18Wood = 8
    varStaff18Snakeweed = 0
    varStaff18Baneberry = 0
    varStaff18Archangelica = 0
    varStaff18Hellbore = 0
    varStaff18Mandrake = 0
    varStaff18Crystal = 1
    varStaff18Ruby = 0
    varStaff18Garnet = 0
    varStaff18Blood = 0
    varStaff18Heart = 0
    varStaff18Bone = 0
    varStaff18Sulfur = 0
    varStaff18Darktaint = 0
    varStaff18Lifeforce = 0
    varStaff18Shadowcrest = 0
    varStaff18CielFeyEye = 4
    varStaff18VitalQuintessence = 0
    varStaff18ElementalCinder = 0
    varStaff18OncylusianCorpseflesh = 0
    varStaff18TaintKhamset = 0
    varStaff18ElementalQuartz = 0
    varStaff18FeralLifeforce = 0
    //Orkish Boomstick
    varStaff19Quantity = document.getElementById("Staff19Quantity").value;
    varStaff19Price = document.getElementById("Staff19Price").value;
    varStaff19Success = document.getElementById("Staff19Success").value;
    varStaff19Gold = 100
    varStaff19Iron = 3
    varStaff19Wood = 0
    varStaff19Snakeweed = 0
    varStaff19Baneberry = 0
    varStaff19Archangelica = 0
    varStaff19Hellbore = 0
    varStaff19Mandrake = 0
    varStaff19Crystal = 2
    varStaff19Ruby = 0
    varStaff19Garnet = 0
    varStaff19Blood = 20
    varStaff19Heart = 0
    varStaff19Bone = 0
    varStaff19Sulfur = 0
    varStaff19Darktaint = 0
    varStaff19Lifeforce = 0
    varStaff19Shadowcrest = 0
    varStaff19CielFeyEye = 0
    varStaff19VitalQuintessence = 0
    varStaff19ElementalCinder = 0
    varStaff19OncylusianCorpseflesh = 0
    varStaff19TaintKhamset = 0
    varStaff19ElementalQuartz = 0
    varStaff19FeralLifeforce = 0
    //Corpsecall
    varStaff20Quantity = document.getElementById("Staff20Quantity").value;
    varStaff20Price = document.getElementById("Staff20Price").value;
    varStaff20Success = document.getElementById("Staff20Success").value;
    varStaff20Gold = 200
    varStaff20Iron = 7
    varStaff20Wood = 0
    varStaff20Snakeweed = 0
    varStaff20Baneberry = 0
    varStaff20Archangelica = 0
    varStaff20Hellbore = 0
    varStaff20Mandrake = 0
    varStaff20Crystal = 0
    varStaff20Ruby = 0
    varStaff20Garnet = 0
    varStaff20Blood = 0
    varStaff20Heart = 0
    varStaff20Bone = 0
    varStaff20Sulfur = 0
    varStaff20Darktaint = 0
    varStaff20Lifeforce = 7
    varStaff20Shadowcrest = 0
    varStaff20CielFeyEye = 0
    varStaff20VitalQuintessence = 0
    varStaff20ElementalCinder = 0
    varStaff20OncylusianCorpseflesh = 2
    varStaff20TaintKhamset = 0
    varStaff20ElementalQuartz = 0
    varStaff20FeralLifeforce = 0
    //Cobra Staff
    varStaff21Quantity = document.getElementById("Staff21Quantity").value;
    varStaff21Price = document.getElementById("Staff21Price").value;
    varStaff21Success = document.getElementById("Staff21Success").value;
    varStaff21Gold = 200
    varStaff21Iron = 0
    varStaff21Wood = 7
    varStaff21Snakeweed = 0
    varStaff21Baneberry = 0
    varStaff21Archangelica = 0
    varStaff21Hellbore = 0
    varStaff21Mandrake = 0
    varStaff21Crystal = 0
    varStaff21Ruby = 0
    varStaff21Garnet = 0
    varStaff21Blood = 0
    varStaff21Heart = 0
    varStaff21Bone = 0
    varStaff21Sulfur = 0
    varStaff21Darktaint = 0
    varStaff21Lifeforce = 0
    varStaff21Shadowcrest = 0
    varStaff21CielFeyEye = 0
    varStaff21VitalQuintessence = 0
    varStaff21ElementalCinder = 0
    varStaff21OncylusianCorpseflesh = 0
    varStaff21TaintKhamset = 2
    varStaff21ElementalQuartz = 0
    varStaff21FeralLifeforce = 0
}

/* POTION */
//Used to reload items from Potion
function fnPotionReload()  // x= id, z= value
{
    fnPotionInitialize()

    fnPotion()

    fnPotionTotal()
    fnReloadPotionPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnPotionSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m)
{
    varGold = parseInt(a)
    varBottle = parseInt(b)
    varBone = parseInt(c)
    varBile = parseInt(d)
    varBlood = parseInt(e)
    varHeart = parseInt(f)
    varGreenleaf = parseInt(g)
    varTooth = parseInt(h)
    varVenomSac = parseInt(i)
    varLifeforce = parseInt(j)
    varQuintessence = parseInt(k)
    varShadowcrest = parseInt(l)
    varSuccess = parseInt(m)

    varSubPrice = ((varGold) + (varBottle * varBottleValue) + (varBone * varBoneValue) + (varBile * varBileValue) + (varBlood * varBloodValue) + (varHeart * varHeartValue) + (varGreenleaf * varGreenleafValue) + (varTooth * varToothValue) + (varVenomSac * varVenomSacValue) + (varLifeforce * varLifeforceValue) + (varQuintessence * varQuintessenceValue) + (varShadowcrest * varShadowcrestValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Potion
function fnPotionTotal()
{
    varPotionTotal = ((varPotion01Price * varPotion01Quantity) + (varPotion02Price * varPotion02Quantity) + (varPotion03Price * varPotion03Quantity) + (varPotion04Price * varPotion04Quantity) + (varPotion05Price * varPotion05Quantity) + (varPotion06Price * varPotion06Quantity) + (varPotion07Price * varPotion07Quantity) + (varPotion08Price * varPotion08Quantity) + (varPotion09Price * varPotion09Quantity));
    varPotionGoldTotal = ((varPotion01Gold * varPotion01Quantity) + (varPotion02Gold * varPotion02Quantity) + (varPotion03Gold * varPotion03Quantity) + (varPotion04Gold * varPotion04Quantity) + (varPotion05Gold * varPotion05Quantity) + (varPotion06Gold * varPotion06Quantity) + (varPotion07Gold * varPotion07Quantity) + (varPotion08Gold * varPotion08Quantity) + (varPotion09Gold * varPotion09Quantity));
    varPotionBottleTotal = ((varPotion01Bottle * varPotion01Quantity) + (varPotion02Bottle * varPotion02Quantity) + (varPotion03Bottle * varPotion03Quantity) + (varPotion04Bottle * varPotion04Quantity) + (varPotion05Bottle * varPotion05Quantity) + (varPotion06Bottle * varPotion06Quantity) + (varPotion07Bottle * varPotion07Quantity) + (varPotion08Bottle * varPotion08Quantity) + (varPotion09Bottle * varPotion09Quantity));
    varPotionBoneTotal = ((varPotion01Bone * varPotion01Quantity) + (varPotion02Bone * varPotion02Quantity) + (varPotion03Bone * varPotion03Quantity) + (varPotion04Bone * varPotion04Quantity) + (varPotion05Bone * varPotion05Quantity) + (varPotion06Bone * varPotion06Quantity) + (varPotion07Bone * varPotion07Quantity) + (varPotion08Bone * varPotion08Quantity) + (varPotion09Bone * varPotion09Quantity));
    varPotionBileTotal = ((varPotion01Bile * varPotion01Quantity) + (varPotion02Bile * varPotion02Quantity) + (varPotion03Bile * varPotion03Quantity) + (varPotion04Bile * varPotion04Quantity) + (varPotion05Bile * varPotion05Quantity) + (varPotion06Bile * varPotion06Quantity) + (varPotion07Bile * varPotion07Quantity) + (varPotion08Bile * varPotion08Quantity) + (varPotion09Bile * varPotion09Quantity));
    varPotionBloodTotal = ((varPotion01Blood * varPotion01Quantity) + (varPotion02Blood * varPotion02Quantity) + (varPotion03Blood * varPotion03Quantity) + (varPotion04Blood * varPotion04Quantity) + (varPotion05Blood * varPotion05Quantity) + (varPotion06Blood * varPotion06Quantity) + (varPotion07Blood * varPotion07Quantity) + (varPotion08Blood * varPotion08Quantity) + (varPotion09Blood * varPotion09Quantity));
    varPotionHeartTotal = ((varPotion01Heart * varPotion01Quantity) + (varPotion02Heart * varPotion02Quantity) + (varPotion03Heart * varPotion03Quantity) + (varPotion04Heart * varPotion04Quantity) + (varPotion05Heart * varPotion05Quantity) + (varPotion06Heart * varPotion06Quantity) + (varPotion07Heart * varPotion07Quantity) + (varPotion08Heart * varPotion08Quantity) + (varPotion09Heart * varPotion09Quantity));
    varPotionGreenleafTotal = ((varPotion01Greenleaf * varPotion01Quantity) + (varPotion02Greenleaf * varPotion02Quantity) + (varPotion03Greenleaf * varPotion03Quantity) + (varPotion04Greenleaf * varPotion04Quantity) + (varPotion05Greenleaf * varPotion05Quantity) + (varPotion06Greenleaf * varPotion06Quantity) + (varPotion07Greenleaf * varPotion07Quantity) + (varPotion08Greenleaf * varPotion08Quantity) + (varPotion09Greenleaf * varPotion09Quantity));
    varPotionToothTotal = ((varPotion01Tooth * varPotion01Quantity) + (varPotion02Tooth * varPotion02Quantity) + (varPotion03Tooth * varPotion03Quantity) + (varPotion04Tooth * varPotion04Quantity) + (varPotion05Tooth * varPotion05Quantity) + (varPotion06Tooth * varPotion06Quantity) + (varPotion07Tooth * varPotion07Quantity) + (varPotion08Tooth * varPotion08Quantity) + (varPotion09Tooth * varPotion09Quantity));
    varPotionVenomSacTotal = ((varPotion01VenomSac * varPotion01Quantity) + (varPotion02VenomSac * varPotion02Quantity) + (varPotion03VenomSac * varPotion03Quantity) + (varPotion04VenomSac * varPotion04Quantity) + (varPotion05VenomSac * varPotion05Quantity) + (varPotion06VenomSac * varPotion06Quantity) + (varPotion07VenomSac * varPotion07Quantity) + (varPotion08VenomSac * varPotion08Quantity) + (varPotion09VenomSac * varPotion09Quantity));
    varPotionLifeforceTotal = ((varPotion01Lifeforce * varPotion01Quantity) + (varPotion02Lifeforce * varPotion02Quantity) + (varPotion03Lifeforce * varPotion03Quantity) + (varPotion04Lifeforce * varPotion04Quantity) + (varPotion05Lifeforce * varPotion05Quantity) + (varPotion06Lifeforce * varPotion06Quantity) + (varPotion07Lifeforce * varPotion07Quantity) + (varPotion08Lifeforce * varPotion08Quantity) + (varPotion09Lifeforce * varPotion09Quantity));
    varPotionQuintessenceTotal = ((varPotion01Quintessence * varPotion01Quantity) + (varPotion02Quintessence * varPotion02Quantity) + (varPotion03Quintessence * varPotion03Quantity) + (varPotion04Quintessence * varPotion04Quantity) + (varPotion05Quintessence * varPotion05Quantity) + (varPotion06Quintessence * varPotion06Quantity) + (varPotion07Quintessence * varPotion07Quantity) + (varPotion08Quintessence * varPotion08Quantity) + (varPotion09Quintessence * varPotion09Quantity));
    varPotionShadowcrestTotal = ((varPotion01Shadowcrest * varPotion01Quantity) + (varPotion02Shadowcrest * varPotion02Quantity) + (varPotion03Shadowcrest * varPotion03Quantity) + (varPotion04Shadowcrest * varPotion04Quantity) + (varPotion05Shadowcrest * varPotion05Quantity) + (varPotion06Shadowcrest * varPotion06Quantity) + (varPotion07Shadowcrest * varPotion07Quantity) + (varPotion08Shadowcrest * varPotion08Quantity) + (varPotion09Shadowcrest * varPotion09Quantity));
}

//Potion Calculations
function fnPotion()
{
    fnPotionSubPrice(varPotion01Gold,varPotion01Bottle,varPotion01Bone,varPotion01Bile,varPotion01Blood,varPotion01Heart,varPotion01Greenleaf,varPotion01Tooth,varPotion01VenomSac,varPotion01Lifeforce,varPotion01Quintessence,varPotion01Shadowcrest,varPotion01Success)
    varPotion01Price = varItemPrice;
    fnPotionSubPrice(varPotion02Gold,varPotion02Bottle,varPotion02Bone,varPotion02Bile,varPotion02Blood,varPotion02Heart,varPotion02Greenleaf,varPotion02Tooth,varPotion02VenomSac,varPotion02Lifeforce,varPotion02Quintessence,varPotion02Shadowcrest,varPotion02Success)
    varPotion02Price = varItemPrice;
    fnPotionSubPrice(varPotion03Gold,varPotion03Bottle,varPotion03Bone,varPotion03Bile,varPotion03Blood,varPotion03Heart,varPotion03Greenleaf,varPotion03Tooth,varPotion03VenomSac,varPotion03Lifeforce,varPotion03Quintessence,varPotion03Shadowcrest,varPotion03Success)
    varPotion03Price = varItemPrice;
    fnPotionSubPrice(varPotion04Gold,varPotion04Bottle,varPotion04Bone,varPotion04Bile,varPotion04Blood,varPotion04Heart,varPotion04Greenleaf,varPotion04Tooth,varPotion04VenomSac,varPotion04Lifeforce,varPotion04Quintessence,varPotion04Shadowcrest,varPotion04Success)
    varPotion04Price = varItemPrice;
    fnPotionSubPrice(varPotion05Gold,varPotion05Bottle,varPotion05Bone,varPotion05Bile,varPotion05Blood,varPotion05Heart,varPotion05Greenleaf,varPotion05Tooth,varPotion05VenomSac,varPotion05Lifeforce,varPotion05Quintessence,varPotion05Shadowcrest,varPotion05Success)
    varPotion05Price = varItemPrice;
    fnPotionSubPrice(varPotion06Gold,varPotion06Bottle,varPotion06Bone,varPotion06Bile,varPotion06Blood,varPotion06Heart,varPotion06Greenleaf,varPotion06Tooth,varPotion06VenomSac,varPotion06Lifeforce,varPotion06Quintessence,varPotion06Shadowcrest,varPotion06Success)
    varPotion06Price = varItemPrice;
    fnPotionSubPrice(varPotion07Gold,varPotion07Bottle,varPotion07Bone,varPotion07Bile,varPotion07Blood,varPotion07Heart,varPotion07Greenleaf,varPotion07Tooth,varPotion07VenomSac,varPotion07Lifeforce,varPotion07Quintessence,varPotion07Shadowcrest,varPotion07Success)
    varPotion07Price = varItemPrice;
    fnPotionSubPrice(varPotion08Gold,varPotion08Bottle,varPotion08Bone,varPotion08Bile,varPotion08Blood,varPotion08Heart,varPotion08Greenleaf,varPotion08Tooth,varPotion08VenomSac,varPotion08Lifeforce,varPotion08Quintessence,varPotion08Shadowcrest,varPotion08Success)
    varPotion08Price = varItemPrice;
    fnPotionSubPrice(varPotion09Gold,varPotion09Bottle,varPotion09Bone,varPotion09Bile,varPotion09Blood,varPotion09Heart,varPotion09Greenleaf,varPotion09Tooth,varPotion09VenomSac,varPotion09Lifeforce,varPotion09Quintessence,varPotion09Shadowcrest,varPotion09Success)
    varPotion09Price = varItemPrice;
}

function fnReloadPotionPrices()
{
    //Potion Prices
    document.getElementById('Potion01Price').value = varPotion01Price;
    document.getElementById('Potion02Price').value = varPotion02Price;
    document.getElementById('Potion03Price').value = varPotion03Price;
    document.getElementById('Potion04Price').value = varPotion04Price;
    document.getElementById('Potion05Price').value = varPotion05Price;
    document.getElementById('Potion06Price').value = varPotion06Price;
    document.getElementById('Potion07Price').value = varPotion07Price;
    document.getElementById('Potion08Price').value = varPotion08Price;
    document.getElementById('Potion09Price').value = varPotion09Price;

    //Potion Total Prices
    document.getElementById('PotionTotal').value = varPotionTotal;
    document.getElementById('PotionGoldTotal').value = varPotionGoldTotal;
    document.getElementById('PotionBottleTotal').value = varPotionBottleTotal;
    document.getElementById('PotionBoneTotal').value = varPotionBoneTotal;
    document.getElementById('PotionBileTotal').value = varPotionBileTotal;
    document.getElementById('PotionBloodTotal').value = varPotionBloodTotal;
    document.getElementById('PotionHeartTotal').value = varPotionHeartTotal;
    document.getElementById('PotionGreenleafTotal').value = varPotionGreenleafTotal;
    document.getElementById('PotionToothTotal').value = varPotionToothTotal;
    document.getElementById('PotionVenomSacTotal').value = varPotionVenomSacTotal;
    document.getElementById('PotionLifeforceTotal').value = varPotionLifeforceTotal;
    document.getElementById('PotionQuintessenceTotal').value = varPotionQuintessenceTotal;
    document.getElementById('PotionShadowcrestTotal').value = varPotionShadowcrestTotal;
}

function fnPotionInitialize()
{
    varPotionTotal = document.getElementById("PotionTotal").value;
    varPotionGoldTotal = document.getElementById("PotionGoldTotal").value;
    varPotionBottleTotal = document.getElementById("PotionBottleTotal").value;
    varPotionBoneTotal = document.getElementById("PotionBoneTotal").value;
    varPotionBileTotal = document.getElementById('PotionBileTotal').value;
    varPotionBloodTotal = document.getElementById('PotionBloodTotal').value;
    varPotionHeartTotal = document.getElementById('PotionHeartTotal').value;
    varPotionGreenleafTotal = document.getElementById('PotionGreenleafTotal').value;
    varPotionToothTotal = document.getElementById('PotionToothTotal').value;
    varPotionVenomSacTotal = document.getElementById('PotionVenomSacTotal').value;
    varPotionLifeforceTotal = document.getElementById('PotionLifeforceTotal').value;
    varPotionQuintessenceTotal = document.getElementById('PotionQuintessenceTotal').value;
    varPotionShadowcrestTotal = document.getElementById('PotionShadowcrestTotal').value;

    // *** Potion VARIABLES ***
	//Major Healing
    varPotion01Quantity = document.getElementById("Potion01Quantity").value;
    varPotion01Price = document.getElementById("Potion01Price").value;
    varPotion01Success = document.getElementById("Potion01Success").value;
    varPotion01Gold = 10
    varPotion01Bottle = 1
    varPotion01Bone = 0
    varPotion01Bile = 0
    varPotion01Blood = 1
    varPotion01Heart = 2
    varPotion01Greenleaf = 0
    varPotion01Tooth = 0
    varPotion01VenomSac = 0
    varPotion01Lifeforce = 0
    varPotion01Quintessence = 0
    varPotion01Shadowcrest = 0
    //Major Stamina
    varPotion02Quantity = document.getElementById("Potion02Quantity").value;
    varPotion02Price = document.getElementById("Potion02Price").value;
    varPotion02Success = document.getElementById("Potion02Success").value;
    varPotion02Gold = 10
    varPotion02Bottle = 1
    varPotion02Bone = 0
    varPotion02Bile = 0
    varPotion02Blood = 1
    varPotion02Heart = 0
    varPotion02Greenleaf = 0
    varPotion02Tooth = 2
    varPotion02VenomSac = 0
    varPotion02Lifeforce = 0
    varPotion02Quintessence = 0
    varPotion02Shadowcrest = 0
    //Major Mana
    varPotion03Quantity = document.getElementById("Potion03Quantity").value;
    varPotion03Price = document.getElementById("Potion03Price").value;
    varPotion03Success = document.getElementById("Potion03Success").value;
    varPotion03Gold = 10
    varPotion03Bottle = 1
    varPotion03Bone = 1
    varPotion03Bile = 0
    varPotion03Blood = 1
    varPotion03Heart = 0
    varPotion03Greenleaf = 0
    varPotion03Tooth = 0
    varPotion03VenomSac = 0
    varPotion03Lifeforce = 0
    varPotion03Quintessence = 2
    varPotion03Shadowcrest = 0
    //Rejuvenation
    varPotion04Quantity = document.getElementById("Potion04Quantity").value;
    varPotion04Price = document.getElementById("Potion04Price").value;
    varPotion04Success = document.getElementById("Potion04Success").value;
    varPotion04Gold = 10
    varPotion04Bottle = 1
    varPotion04Bone = 0
    varPotion04Bile = 0
    varPotion04Blood = 2
    varPotion04Heart = 0
    varPotion04Greenleaf = 0
    varPotion04Tooth = 0
    varPotion04VenomSac = 2
    varPotion04Lifeforce = 0
    varPotion04Quintessence = 0
    varPotion04Shadowcrest = 0
    //Remedy
    varPotion05Quantity = document.getElementById("Potion05Quantity").value;
    varPotion05Price = document.getElementById("Potion05Price").value;
    varPotion05Success = document.getElementById("Potion05Success").value;
    varPotion05Gold = 10
    varPotion05Bottle = 1
    varPotion05Bone = 0
    varPotion05Bile = 0
    varPotion05Blood = 2
    varPotion05Heart = 0
    varPotion05Greenleaf = 0
    varPotion05Tooth = 0
    varPotion05VenomSac = 0
    varPotion05Lifeforce = 0
    varPotion05Quintessence = 2
    varPotion05Shadowcrest = 0
    //First Aid
    varPotion06Quantity = document.getElementById("Potion06Quantity").value;
    varPotion06Price = document.getElementById("Potion06Price").value;
    varPotion06Success = document.getElementById("Potion06Success").value;
    varPotion06Gold = 15
    varPotion06Bottle = 1
    varPotion06Bone = 2
    varPotion06Bile = 0
    varPotion06Blood = 1
    varPotion06Heart = 0
    varPotion06Greenleaf = 0
    varPotion06Tooth = 0
    varPotion06VenomSac = 0
    varPotion06Lifeforce = 2
    varPotion06Quintessence = 0
    varPotion06Shadowcrest = 0
    //Supress Weakness
    varPotion07Quantity = document.getElementById("Potion07Quantity").value;
    varPotion07Price = document.getElementById("Potion07Price").value;
    varPotion07Success = document.getElementById("Potion07Success").value;
    varPotion07Gold = 15
    varPotion07Bottle = 1
    varPotion07Bone = 0
    varPotion07Bile = 5
    varPotion07Blood = 1
    varPotion07Heart = 0
    varPotion07Greenleaf = 0
    varPotion07Tooth = 0
    varPotion07VenomSac = 0
    varPotion07Lifeforce = 0
    varPotion07Quintessence = 0
    varPotion07Shadowcrest = 0
    //Clean Slate
    varPotion08Quantity = document.getElementById("Potion08Quantity").value;
    varPotion08Price = document.getElementById("Potion08Price").value;
    varPotion08Success = document.getElementById("Potion08Success").value;
    varPotion08Gold = 25
    varPotion08Bottle = 1
    varPotion08Bone = 0
    varPotion08Bile = 0
    varPotion08Blood = 1
    varPotion08Heart = 0
    varPotion08Greenleaf = 0
    varPotion08Tooth = 0
    varPotion08VenomSac = 0
    varPotion08Lifeforce = 0
    varPotion08Quintessence = 0
    varPotion08Shadowcrest = 5
    //Clear Mind
    varPotion09Quantity = document.getElementById("Potion09Quantity").value;
    varPotion09Price = document.getElementById("Potion09Price").value;
    varPotion09Success = document.getElementById("Potion09Success").value;
    varPotion09Gold = 25
    varPotion09Bottle = 1
    varPotion09Bone = 0
    varPotion09Bile = 0
    varPotion09Blood = 3
    varPotion09Heart = 0
    varPotion09Greenleaf = 2
    varPotion09Tooth = 0
    varPotion09VenomSac = 0
    varPotion09Lifeforce = 0
    varPotion09Quintessence = 0
    varPotion09Shadowcrest = 0
}

/* HERBALISM */
//Used to reload items from Herbalism
function fnHerbalismReload()  // x= id, z= value
{
    fnHerbalismInitialize()

    fnHerbalism()

    fnHerbalismTotal()
    fnReloadHerbalismPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnHerbalismSubPrice(a,b,c,d,e,f)
{
    varBottle = parseInt(a)
    varBaneberry = parseInt(b)
    varArchangelica = parseInt(c)
    varHellbore = parseInt(d)
    varSnakeweed = parseInt(e)
    varSuccess = parseInt(f)

    varSubPrice = ((varBottle) + (varBaneberry * varBaneberryValue) + (varArchangelica * varArchangelicaValue) + (varHellbore * varHellboreValue) + (varSnakeweed * varSnakeweedValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Herbalism
function fnHerbalismTotal()
{
    varHerbalismTotal = ((varHerbalism01Price * varHerbalism01Quantity) + (varHerbalism02Price * varHerbalism02Quantity) + (varHerbalism03Price * varHerbalism03Quantity) + (varHerbalism04Price * varHerbalism04Quantity) + (varHerbalism05Price * varHerbalism05Quantity) + (varHerbalism06Price * varHerbalism06Quantity));
    varHerbalismBottleTotal = ((varHerbalism01Bottle * varHerbalism01Quantity) + (varHerbalism02Bottle * varHerbalism02Quantity) + (varHerbalism03Bottle * varHerbalism03Quantity) + (varHerbalism04Bottle * varHerbalism04Quantity) + (varHerbalism05Bottle * varHerbalism05Quantity) + (varHerbalism06Bottle * varHerbalism06Quantity));
    varHerbalismBaneberryTotal = ((varHerbalism01Baneberry * varHerbalism01Quantity) + (varHerbalism02Baneberry * varHerbalism02Quantity) + (varHerbalism03Baneberry * varHerbalism03Quantity) + (varHerbalism04Baneberry * varHerbalism04Quantity) + (varHerbalism05Baneberry * varHerbalism05Quantity) + (varHerbalism06Baneberry * varHerbalism06Quantity));
    varHerbalismArchangelicaTotal = ((varHerbalism01Archangelica * varHerbalism01Quantity) + (varHerbalism02Archangelica * varHerbalism02Quantity) + (varHerbalism03Archangelica * varHerbalism03Quantity) + (varHerbalism04Archangelica * varHerbalism04Quantity) + (varHerbalism05Archangelica * varHerbalism05Quantity) + (varHerbalism06Archangelica * varHerbalism06Quantity));
    varHerbalismHellboreTotal = ((varHerbalism01Hellbore * varHerbalism01Quantity) + (varHerbalism02Hellbore * varHerbalism02Quantity) + (varHerbalism03Hellbore * varHerbalism03Quantity) + (varHerbalism04Hellbore * varHerbalism04Quantity) + (varHerbalism05Hellbore * varHerbalism05Quantity) + (varHerbalism06Hellbore * varHerbalism06Quantity));
    varHerbalismSnakeweedTotal = ((varHerbalism01Snakeweed * varHerbalism01Quantity) + (varHerbalism02Snakeweed * varHerbalism02Quantity) + (varHerbalism03Snakeweed * varHerbalism03Quantity) + (varHerbalism04Snakeweed * varHerbalism04Quantity) + (varHerbalism05Snakeweed * varHerbalism05Quantity) + (varHerbalism06Snakeweed * varHerbalism06Quantity));
}

//Herbalism Calculations
function fnHerbalism()
{
    fnHerbalismSubPrice(varHerbalism01Bottle,varHerbalism01Baneberry,varHerbalism01Archangelica,varHerbalism01Hellbore,varHerbalism01Snakeweed,varHerbalism01Success)
    varHerbalism01Price = varItemPrice;
    fnHerbalismSubPrice(varHerbalism02Bottle,varHerbalism02Baneberry,varHerbalism02Archangelica,varHerbalism02Hellbore,varHerbalism02Snakeweed,varHerbalism02Success)
    varHerbalism02Price = varItemPrice;
    fnHerbalismSubPrice(varHerbalism03Bottle,varHerbalism03Baneberry,varHerbalism03Archangelica,varHerbalism03Hellbore,varHerbalism03Snakeweed,varHerbalism03Success)
    varHerbalism03Price = varItemPrice;
    fnHerbalismSubPrice(varHerbalism04Bottle,varHerbalism04Baneberry,varHerbalism04Archangelica,varHerbalism04Hellbore,varHerbalism04Snakeweed,varHerbalism04Success)
    varHerbalism04Price = varItemPrice;
    fnHerbalismSubPrice(varHerbalism05Bottle,varHerbalism05Baneberry,varHerbalism05Archangelica,varHerbalism05Hellbore,varHerbalism05Snakeweed,varHerbalism05Success)
    varHerbalism05Price = varItemPrice;
    fnHerbalismSubPrice(varHerbalism06Bottle,varHerbalism06Baneberry,varHerbalism06Archangelica,varHerbalism06Hellbore,varHerbalism06Snakeweed,varHerbalism06Success)
    varHerbalism06Price = varItemPrice;
}

function fnReloadHerbalismPrices()
{
    //Herbalism Prices
    document.getElementById('Herbalism01Price').value = varHerbalism01Price;
    document.getElementById('Herbalism02Price').value = varHerbalism02Price;
    document.getElementById('Herbalism03Price').value = varHerbalism03Price;
    document.getElementById('Herbalism04Price').value = varHerbalism04Price;
    document.getElementById('Herbalism05Price').value = varHerbalism05Price;
    document.getElementById('Herbalism06Price').value = varHerbalism06Price;

    //Herbalism Total Prices
    document.getElementById('HerbalismTotal').value = varHerbalismTotal;
    document.getElementById('HerbalismBottleTotal').value = varHerbalismBottleTotal;
    document.getElementById('HerbalismBaneberryTotal').value = varHerbalismBaneberryTotal;
    document.getElementById('HerbalismArchangelicaTotal').value = varHerbalismArchangelicaTotal;
    document.getElementById('HerbalismHellboreTotal').value = varHerbalismHellboreTotal;
    document.getElementById('HerbalismSnakeweedTotal').value = varHerbalismSnakeweedTotal;
}

function fnHerbalismInitialize()
{
    varHerbalismTotal = document.getElementById("HerbalismTotal").value;
    varHerbalismBottleTotal = document.getElementById("HerbalismBottleTotal").value;
    varHerbalismBaneberryTotal = document.getElementById("HerbalismBaneberryTotal").value;
    varHerbalismArchangelicaTotal = document.getElementById("HerbalismArchangelicaTotal").value;
    varHerbalismHellboreTotal = document.getElementById('HerbalismHellboreTotal').value;
    varHerbalismSnakeweedTotal = document.getElementById('HerbalismSnakeweedTotal').value;

    // *** Herbalism VARIABLES ***
	//Minor Healing
    varHerbalism01Quantity = document.getElementById("Herbalism01Quantity").value;
    varHerbalism01Price = document.getElementById("Herbalism01Price").value;
    varHerbalism01Success = document.getElementById("Herbalism01Success").value;
    varHerbalism01Bottle = 1
    varHerbalism01Baneberry = 3
    varHerbalism01Archangelica = 0
    varHerbalism01Hellbore = 0
    varHerbalism01Snakeweed = 0
    //Minor Stamina
    varHerbalism02Quantity = document.getElementById("Herbalism02Quantity").value;
    varHerbalism02Price = document.getElementById("Herbalism02Price").value;
    varHerbalism02Success = document.getElementById("Herbalism02Success").value;
    varHerbalism02Bottle = 1
    varHerbalism02Baneberry = 0
    varHerbalism02Archangelica = 3
    varHerbalism02Hellbore = 0
    varHerbalism02Snakeweed = 0
    //Minor Mana
    varHerbalism03Quantity = document.getElementById("Herbalism03Quantity").value;
    varHerbalism03Price = document.getElementById("Herbalism03Price").value;
    varHerbalism03Success = document.getElementById("Herbalism03Success").value;
    varHerbalism03Bottle = 1
    varHerbalism03Baneberry = 0
    varHerbalism03Archangelica = 0
    varHerbalism03Hellbore = 3
    varHerbalism03Snakeweed = 0
    //Moderate Healing
    varHerbalism04Quantity = document.getElementById("Herbalism04Quantity").value;
    varHerbalism04Price = document.getElementById("Herbalism04Price").value;
    varHerbalism04Success = document.getElementById("Herbalism04Success").value;
    varHerbalism04Bottle = 1
    varHerbalism04Baneberry = 5
    varHerbalism04Archangelica = 0
    varHerbalism04Hellbore = 0
    varHerbalism04Snakeweed = 2
    //Moderate Stamina
    varHerbalism05Quantity = document.getElementById("Herbalism05Quantity").value;
    varHerbalism05Price = document.getElementById("Herbalism05Price").value;
    varHerbalism05Success = document.getElementById("Herbalism05Success").value;
    varHerbalism05Bottle = 1
    varHerbalism05Baneberry = 0
    varHerbalism05Archangelica = 5
    varHerbalism05Hellbore = 0
    varHerbalism05Snakeweed = 2
    //Moderate Mana
    varHerbalism06Quantity = document.getElementById("Herbalism06Quantity").value;
    varHerbalism06Price = document.getElementById("Herbalism06Price").value;
    varHerbalism06Success = document.getElementById("Herbalism06Success").value;
    varHerbalism06Bottle = 1
    varHerbalism06Baneberry = 0
    varHerbalism06Archangelica = 0
    varHerbalism06Hellbore = 5
    varHerbalism06Snakeweed = 2
}

/* SITHRA BLADE */
//Used to reload items from SithraBlade
function fnSithraBladeReload()  // x= id, z= value
{
    fnSithraBladeInitialize()

    fnSithraBlade()

    fnSithraBladeTotal()
    fnReloadSithraBladePrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnSithraBladeSubPrice(a,b,c,d,e,f,g,h,i,j,k)
{
    varGold = parseInt(a)
    varLeenspar = parseInt(b)
    varTheyril = parseInt(c)
    varRadiantQuartz = parseInt(d)
    varEldritchCinder = parseInt(e)
    varPrimevalQuintessence = parseInt(f)
    varNiflFrost = parseInt(g)
    varVortexRune = parseInt(h)
    varQueenVenomSac = parseInt(i)
    varDeathlessShadowcrest = parseInt(j)
    varSuccess = parseInt(k)

    varSubPrice = ((varGold) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varRadiantQuartz * varRadiantQuartzValue) + (varEldritchCinder * varEldritchCinderValue) + (varPrimevalQuintessence * varPrimevalQuintessenceValue) + (varNiflFrost * varNiflFrostValue) + (varVortexRune * varVortexRuneValue) + (varQueenVenomSac * varQueenVenomSacValue) + (varDeathlessShadowcrest * varDeathlessShadowcrestValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of SithraBlade
function fnSithraBladeTotal()
{
    varSithraBladeTotal = ((varSithraBlade01Price * varSithraBlade01Quantity) + (varSithraBlade02Price * varSithraBlade02Quantity) + (varSithraBlade03Price * varSithraBlade03Quantity) + (varSithraBlade04Price * varSithraBlade04Quantity) + (varSithraBlade05Price * varSithraBlade05Quantity) + (varSithraBlade06Price * varSithraBlade06Quantity) + (varSithraBlade07Price * varSithraBlade07Quantity));
    varSithraBladeGoldTotal = ((varSithraBlade01Gold * varSithraBlade01Quantity) + (varSithraBlade02Gold * varSithraBlade02Quantity) + (varSithraBlade03Gold * varSithraBlade03Quantity) + (varSithraBlade04Gold * varSithraBlade04Quantity) + (varSithraBlade05Gold * varSithraBlade05Quantity) + (varSithraBlade06Gold * varSithraBlade06Quantity) + (varSithraBlade07Gold * varSithraBlade07Quantity));
    varSithraBladeLeensparTotal = ((varSithraBlade01Leenspar * varSithraBlade01Quantity) + (varSithraBlade02Leenspar * varSithraBlade02Quantity) + (varSithraBlade03Leenspar * varSithraBlade03Quantity) + (varSithraBlade04Leenspar * varSithraBlade04Quantity) + (varSithraBlade05Leenspar * varSithraBlade05Quantity) + (varSithraBlade06Leenspar * varSithraBlade06Quantity) + (varSithraBlade07Leenspar * varSithraBlade07Quantity));
    varSithraBladeTheyrilTotal = ((varSithraBlade01Theyril * varSithraBlade01Quantity) + (varSithraBlade02Theyril * varSithraBlade02Quantity) + (varSithraBlade03Theyril * varSithraBlade03Quantity) + (varSithraBlade04Theyril * varSithraBlade04Quantity) + (varSithraBlade05Theyril * varSithraBlade05Quantity) + (varSithraBlade06Theyril * varSithraBlade06Quantity) + (varSithraBlade07Theyril * varSithraBlade07Quantity));
    varSithraBladeRadiantQuartzTotal = ((varSithraBlade01RadiantQuartz * varSithraBlade01Quantity) + (varSithraBlade02RadiantQuartz * varSithraBlade02Quantity) + (varSithraBlade03RadiantQuartz * varSithraBlade03Quantity) + (varSithraBlade04RadiantQuartz * varSithraBlade04Quantity) + (varSithraBlade05RadiantQuartz * varSithraBlade05Quantity) + (varSithraBlade06RadiantQuartz * varSithraBlade06Quantity) + (varSithraBlade07RadiantQuartz * varSithraBlade07Quantity));
    varSithraBladeEldritchCinderTotal = ((varSithraBlade01EldritchCinder * varSithraBlade01Quantity) + (varSithraBlade02EldritchCinder * varSithraBlade02Quantity) + (varSithraBlade03EldritchCinder * varSithraBlade03Quantity) + (varSithraBlade04EldritchCinder * varSithraBlade04Quantity) + (varSithraBlade05EldritchCinder * varSithraBlade05Quantity) + (varSithraBlade06EldritchCinder * varSithraBlade06Quantity) + (varSithraBlade07EldritchCinder * varSithraBlade07Quantity));
    varSithraBladePrimevalQuintessenceTotal = ((varSithraBlade01PrimevalQuintessence * varSithraBlade01Quantity) + (varSithraBlade02PrimevalQuintessence * varSithraBlade02Quantity) + (varSithraBlade03PrimevalQuintessence * varSithraBlade03Quantity) + (varSithraBlade04PrimevalQuintessence * varSithraBlade04Quantity) + (varSithraBlade05PrimevalQuintessence * varSithraBlade05Quantity) + (varSithraBlade06PrimevalQuintessence * varSithraBlade06Quantity) + (varSithraBlade07PrimevalQuintessence * varSithraBlade07Quantity));
    varSithraBladeNiflFrostTotal = ((varSithraBlade01NiflFrost * varSithraBlade01Quantity) + (varSithraBlade02NiflFrost * varSithraBlade02Quantity) + (varSithraBlade03NiflFrost * varSithraBlade03Quantity) + (varSithraBlade04NiflFrost * varSithraBlade04Quantity) + (varSithraBlade05NiflFrost * varSithraBlade05Quantity) + (varSithraBlade06NiflFrost * varSithraBlade06Quantity) + (varSithraBlade07NiflFrost * varSithraBlade07Quantity));
    varSithraBladeVortexRuneTotal = ((varSithraBlade01VortexRune * varSithraBlade01Quantity) + (varSithraBlade02VortexRune * varSithraBlade02Quantity) + (varSithraBlade03VortexRune * varSithraBlade03Quantity) + (varSithraBlade04VortexRune * varSithraBlade04Quantity) + (varSithraBlade05VortexRune * varSithraBlade05Quantity) + (varSithraBlade06VortexRune * varSithraBlade06Quantity) + (varSithraBlade07VortexRune * varSithraBlade07Quantity));
    varSithraBladeQueenVenomSacTotal = ((varSithraBlade01QueenVenomSac * varSithraBlade01Quantity) + (varSithraBlade02QueenVenomSac * varSithraBlade02Quantity) + (varSithraBlade03QueenVenomSac * varSithraBlade03Quantity) + (varSithraBlade04QueenVenomSac * varSithraBlade04Quantity) + (varSithraBlade05QueenVenomSac * varSithraBlade05Quantity) + (varSithraBlade06QueenVenomSac * varSithraBlade06Quantity) + (varSithraBlade07QueenVenomSac * varSithraBlade07Quantity));
    varSithraBladeDeathlessShadowcrestTotal = ((varSithraBlade01DeathlessShadowcrest * varSithraBlade01Quantity) + (varSithraBlade02DeathlessShadowcrest * varSithraBlade02Quantity) + (varSithraBlade03DeathlessShadowcrest * varSithraBlade03Quantity) + (varSithraBlade04DeathlessShadowcrest * varSithraBlade04Quantity) + (varSithraBlade05DeathlessShadowcrest * varSithraBlade05Quantity) + (varSithraBlade06DeathlessShadowcrest * varSithraBlade06Quantity) + (varSithraBlade07DeathlessShadowcrest * varSithraBlade07Quantity));
}

//SithraBlade Calculations
function fnSithraBlade()
{
    fnSithraBladeSubPrice(varSithraBlade01Gold,varSithraBlade01Leenspar,varSithraBlade01Theyril,varSithraBlade01RadiantQuartz,varSithraBlade01EldritchCinder,varSithraBlade01PrimevalQuintessence,varSithraBlade01NiflFrost,varSithraBlade01VortexRune,varSithraBlade01QueenVenomSac,varSithraBlade01DeathlessShadowcrest,varSithraBlade01Success)
    varSithraBlade01Price = varItemPrice;
    fnSithraBladeSubPrice(varSithraBlade02Gold,varSithraBlade02Leenspar,varSithraBlade02Theyril,varSithraBlade02RadiantQuartz,varSithraBlade02EldritchCinder,varSithraBlade02PrimevalQuintessence,varSithraBlade02NiflFrost,varSithraBlade02VortexRune,varSithraBlade02QueenVenomSac,varSithraBlade02DeathlessShadowcrest,varSithraBlade02Success)
    varSithraBlade02Price = varItemPrice;
    fnSithraBladeSubPrice(varSithraBlade03Gold,varSithraBlade03Leenspar,varSithraBlade03Theyril,varSithraBlade03RadiantQuartz,varSithraBlade03EldritchCinder,varSithraBlade03PrimevalQuintessence,varSithraBlade03NiflFrost,varSithraBlade03VortexRune,varSithraBlade03QueenVenomSac,varSithraBlade03DeathlessShadowcrest,varSithraBlade03Success)
    varSithraBlade03Price = varItemPrice;
    fnSithraBladeSubPrice(varSithraBlade04Gold,varSithraBlade04Leenspar,varSithraBlade04Theyril,varSithraBlade04RadiantQuartz,varSithraBlade04EldritchCinder,varSithraBlade04PrimevalQuintessence,varSithraBlade04NiflFrost,varSithraBlade04VortexRune,varSithraBlade04QueenVenomSac,varSithraBlade04DeathlessShadowcrest,varSithraBlade04Success)
    varSithraBlade04Price = varItemPrice;
    fnSithraBladeSubPrice(varSithraBlade05Gold,varSithraBlade05Leenspar,varSithraBlade05Theyril,varSithraBlade05RadiantQuartz,varSithraBlade05EldritchCinder,varSithraBlade05PrimevalQuintessence,varSithraBlade05NiflFrost,varSithraBlade05VortexRune,varSithraBlade05QueenVenomSac,varSithraBlade05DeathlessShadowcrest,varSithraBlade05Success)
    varSithraBlade05Price = varItemPrice;
    fnSithraBladeSubPrice(varSithraBlade06Gold,varSithraBlade06Leenspar,varSithraBlade06Theyril,varSithraBlade06RadiantQuartz,varSithraBlade06EldritchCinder,varSithraBlade06PrimevalQuintessence,varSithraBlade06NiflFrost,varSithraBlade06VortexRune,varSithraBlade06QueenVenomSac,varSithraBlade06DeathlessShadowcrest,varSithraBlade06Success)
    varSithraBlade06Price = varItemPrice;
    fnSithraBladeSubPrice(varSithraBlade07Gold,varSithraBlade07Leenspar,varSithraBlade07Theyril,varSithraBlade07RadiantQuartz,varSithraBlade07EldritchCinder,varSithraBlade07PrimevalQuintessence,varSithraBlade07NiflFrost,varSithraBlade07VortexRune,varSithraBlade07QueenVenomSac,varSithraBlade07DeathlessShadowcrest,varSithraBlade07Success)
    varSithraBlade07Price = varItemPrice;
}

function fnReloadSithraBladePrices()
{
    //SithraBlade Prices
    document.getElementById('SithraBlade01Price').value = varSithraBlade01Price;
    document.getElementById('SithraBlade02Price').value = varSithraBlade02Price;
    document.getElementById('SithraBlade03Price').value = varSithraBlade03Price;
    document.getElementById('SithraBlade04Price').value = varSithraBlade04Price;
    document.getElementById('SithraBlade05Price').value = varSithraBlade05Price;
    document.getElementById('SithraBlade06Price').value = varSithraBlade06Price;
    document.getElementById('SithraBlade07Price').value = varSithraBlade07Price;

    //SithraBlade Total Prices
    document.getElementById('SithraBladeTotal').value = varSithraBladeTotal;
    document.getElementById('SithraBladeGoldTotal').value = varSithraBladeGoldTotal;
    document.getElementById('SithraBladeLeensparTotal').value = varSithraBladeLeensparTotal;
    document.getElementById('SithraBladeTheyrilTotal').value = varSithraBladeTheyrilTotal;
    document.getElementById('SithraBladeRadiantQuartzTotal').value = varSithraBladeRadiantQuartzTotal;
    document.getElementById('SithraBladeEldritchCinderTotal').value = varSithraBladeEldritchCinderTotal;
    document.getElementById('SithraBladePrimevalQuintessenceTotal').value = varSithraBladePrimevalQuintessenceTotal;
    document.getElementById('SithraBladeNiflFrostTotal').value = varSithraBladeNiflFrostTotal;
    document.getElementById('SithraBladeVortexRuneTotal').value = varSithraBladeVortexRuneTotal;
    document.getElementById('SithraBladeQueenVenomSacTotal').value = varSithraBladeQueenVenomSacTotal;
    document.getElementById('SithraBladeDeathlessShadowcrestTotal').value = varSithraBladeDeathlessShadowcrestTotal;
}

function fnSithraBladeInitialize()
{
    varSithraBladeTotal = document.getElementById("SithraBladeTotal").value;
    varSithraBladeGoldTotal = document.getElementById("SithraBladeGoldTotal").value;
    varSithraBladeLeensparTotal = document.getElementById("SithraBladeLeensparTotal").value;
    varSithraBladeTheyrilTotal = document.getElementById("SithraBladeTheyrilTotal").value;
    varSithraBladeRadiantQuartzTotal = document.getElementById('SithraBladeRadiantQuartzTotal').value;
    varSithraBladeEldritchCinderTotal = document.getElementById('SithraBladeEldritchCinderTotal').value;
    varSithraBladePrimevalQuintessenceTotal = document.getElementById('SithraBladePrimevalQuintessenceTotal').value;
    varSithraBladeNiflFrostTotal = document.getElementById('SithraBladeNiflFrostTotal').value;
    varSithraBladeVortexRuneTotal = document.getElementById('SithraBladeVortexRuneTotal').value;
    varSithraBladeQueenVenomSacTotal = document.getElementById('SithraBladeQueenVenomSacTotal').value;
    varSithraBladeDeathlessShadowcrestTotal = document.getElementById('SithraBladeDeathlessShadowcrestTotal').value;

    // *** SithraBlade VARIABLES ***
	//Acid Blade
    varSithraBlade01Quantity = document.getElementById("SithraBlade01Quantity").value;
    varSithraBlade01Price = document.getElementById("SithraBlade01Price").value;
    varSithraBlade01Success = document.getElementById("SithraBlade01Success").value;
    varSithraBlade01Gold = 1000
    varSithraBlade01Leenspar = 1
    varSithraBlade01Theyril = 0
    varSithraBlade01RadiantQuartz = 2
    varSithraBlade01EldritchCinder = 0
    varSithraBlade01PrimevalQuintessence = 0
    varSithraBlade01NiflFrost = 0
    varSithraBlade01VortexRune = 0
    varSithraBlade01QueenVenomSac = 0
    varSithraBlade01DeathlessShadowcrest = 0
    //Fire Blade
    varSithraBlade02Quantity = document.getElementById("SithraBlade02Quantity").value;
    varSithraBlade02Price = document.getElementById("SithraBlade02Price").value;
    varSithraBlade02Success = document.getElementById("SithraBlade02Success").value;
    varSithraBlade02Gold = 1000
    varSithraBlade02Leenspar = 1
    varSithraBlade02Theyril = 0
    varSithraBlade02RadiantQuartz = 0
    varSithraBlade02EldritchCinder = 2
    varSithraBlade02PrimevalQuintessence = 0
    varSithraBlade02NiflFrost = 0
    varSithraBlade02VortexRune = 0
    varSithraBlade02QueenVenomSac = 0
    varSithraBlade02DeathlessShadowcrest = 0
    //Holy Blade
    varSithraBlade03Quantity = document.getElementById("SithraBlade03Quantity").value;
    varSithraBlade03Price = document.getElementById("SithraBlade03Price").value;
    varSithraBlade03Success = document.getElementById("SithraBlade03Success").value;
    varSithraBlade03Gold = 1000
    varSithraBlade03Leenspar = 0
    varSithraBlade03Theyril = 1
    varSithraBlade03RadiantQuartz = 0
    varSithraBlade03EldritchCinder = 0
    varSithraBlade03PrimevalQuintessence = 2
    varSithraBlade03NiflFrost = 0
    varSithraBlade03VortexRune = 0
    varSithraBlade03QueenVenomSac = 0
    varSithraBlade03DeathlessShadowcrest = 0
    //Ice Blade
    varSithraBlade04Quantity = document.getElementById("SithraBlade04Quantity").value;
    varSithraBlade04Price = document.getElementById("SithraBlade04Price").value;
    varSithraBlade04Success = document.getElementById("SithraBlade04Success").value;
    varSithraBlade04Gold = 1000
    varSithraBlade04Leenspar = 1
    varSithraBlade04Theyril = 0
    varSithraBlade04RadiantQuartz = 0
    varSithraBlade04EldritchCinder = 0
    varSithraBlade04PrimevalQuintessence = 0
    varSithraBlade04NiflFrost = 2
    varSithraBlade04VortexRune = 0
    varSithraBlade04QueenVenomSac = 0
    varSithraBlade04DeathlessShadowcrest = 0
    //Lightning Blade
    varSithraBlade05Quantity = document.getElementById("SithraBlade05Quantity").value;
    varSithraBlade05Price = document.getElementById("SithraBlade05Price").value;
    varSithraBlade05Success = document.getElementById("SithraBlade05Success").value;
    varSithraBlade05Gold = 1000
    varSithraBlade05Leenspar = 1
    varSithraBlade05Theyril = 0
    varSithraBlade05RadiantQuartz = 0
    varSithraBlade05EldritchCinder = 0
    varSithraBlade05PrimevalQuintessence = 0
    varSithraBlade05NiflFrost = 0
    varSithraBlade05VortexRune = 2
    varSithraBlade05QueenVenomSac = 0
    varSithraBlade05DeathlessShadowcrest = 0
    //Poison Blade
    varSithraBlade06Quantity = document.getElementById("SithraBlade06Quantity").value;
    varSithraBlade06Price = document.getElementById("SithraBlade06Price").value;
    varSithraBlade06Success = document.getElementById("SithraBlade06Success").value;
    varSithraBlade06Gold = 1000
    varSithraBlade06Leenspar = 1
    varSithraBlade06Theyril = 0
    varSithraBlade06RadiantQuartz = 0
    varSithraBlade06EldritchCinder = 0
    varSithraBlade06PrimevalQuintessence = 0
    varSithraBlade06NiflFrost = 0
    varSithraBlade06VortexRune = 0
    varSithraBlade06QueenVenomSac = 2
    varSithraBlade06DeathlessShadowcrest = 0
    //Unholy Blade
    varSithraBlade07Quantity = document.getElementById("SithraBlade07Quantity").value;
    varSithraBlade07Price = document.getElementById("SithraBlade07Price").value;
    varSithraBlade07Success = document.getElementById("SithraBlade07Success").value;
    varSithraBlade07Gold = 1000
    varSithraBlade07Leenspar = 0
    varSithraBlade07Theyril = 1
    varSithraBlade07RadiantQuartz = 0
    varSithraBlade07EldritchCinder = 0
    varSithraBlade07PrimevalQuintessence = 0
    varSithraBlade07NiflFrost = 0
    varSithraBlade07VortexRune = 0
    varSithraBlade07QueenVenomSac = 0
    varSithraBlade07DeathlessShadowcrest = 2
}

/* JEWELCRAFTING */

//Used to reload items from Jewel
function fnJewelReload()  // x= id, z= value
{
    fnJewelInitialize()

    fnJewel()

    fnJewelTotal()
    fnReloadJewelPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnJewelSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varLeather = parseInt(c)
    varGarnet = parseInt(d)
    varCrystal = parseInt(e)
    varRuby = parseInt(f)
    varTooth = parseInt(g)
    varBone = parseInt(h)
    varNacre = parseInt(i)
    varSuccess = parseInt(j)
    varLifeforce = parseInt(k)
    varVenomSac = parseInt(l)
    varReptileCinder = parseInt(m)
    varDimStormrune = parseInt(n)
    varGhostlyDarktaint = parseInt(o)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varLeather * varLeatherValue) + (varGarnet * varGarnetValue) + (varCrystal * varCrystalValue) + (varRuby * varRubyValue) + (varTooth * varToothValue) + (varBone * varBoneValue) + (varNacre * varNacreValue) + (varLifeforce * varLifeforceValue) + (varVenomSac * varVenomSacValue) + (varReptileCinder * varReptileCinderValue) + (varDimStormrune * varDimStormruneValue) + (varGhostlyDarktaint * varGhostlyDarktaintValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Jewel
function fnJewelTotal()
{
    varJewelTotal = ((varJewel01Price * varJewel01Quantity) + (varJewel02Price * varJewel02Quantity) + (varJewel03Price * varJewel03Quantity) + (varJewel04Price * varJewel04Quantity) + (varJewel05Price * varJewel05Quantity) + (varJewel06Price * varJewel06Quantity) + (varJewel07Price * varJewel07Quantity) + (varJewel08Price * varJewel08Quantity) + (varJewel09Price * varJewel09Quantity) + (varJewel10Price * varJewel10Quantity) + (varJewel11Price * varJewel11Quantity) + (varJewel12Price * varJewel12Quantity) + (varJewel13Price * varJewel13Quantity) + (varJewel14Price * varJewel14Quantity) + (varJewel15Price * varJewel15Quantity) + (varJewel16Price * varJewel16Quantity) + (varJewel17Price * varJewel17Quantity) + (varJewel18Price * varJewel18Quantity) + (varJewel19Price * varJewel19Quantity) + (varJewel20Price * varJewel20Quantity) + (varJewel21Price * varJewel21Quantity) + (varJewel22Price * varJewel22Quantity) + (varJewel23Price * varJewel23Quantity) + (varJewel24Price * varJewel24Quantity));
    varJewelGoldTotal = ((varJewel01Gold * varJewel01Quantity) + (varJewel02Gold * varJewel02Quantity) + (varJewel03Gold * varJewel03Quantity) + (varJewel04Gold * varJewel04Quantity) + (varJewel05Gold * varJewel05Quantity) + (varJewel06Gold * varJewel06Quantity) + (varJewel07Gold * varJewel07Quantity) + (varJewel08Gold * varJewel08Quantity) + (varJewel09Gold * varJewel09Quantity) + (varJewel10Gold * varJewel10Quantity) + (varJewel11Gold * varJewel11Quantity) + (varJewel12Gold * varJewel12Quantity) + (varJewel13Gold * varJewel13Quantity) + (varJewel14Gold * varJewel14Quantity) + (varJewel15Gold * varJewel15Quantity) + (varJewel16Gold * varJewel16Quantity) + (varJewel17Gold * varJewel17Quantity) + (varJewel18Gold * varJewel18Quantity) + (varJewel19Gold * varJewel19Quantity) + (varJewel20Gold * varJewel20Quantity) + (varJewel21Gold * varJewel21Quantity) + (varJewel22Gold * varJewel22Quantity) + (varJewel23Gold * varJewel23Quantity) + (varJewel24Gold * varJewel24Quantity));
    varJewelIronTotal = ((varJewel01Iron * varJewel01Quantity) + (varJewel02Iron * varJewel02Quantity) + (varJewel03Iron * varJewel03Quantity) + (varJewel04Iron * varJewel04Quantity) + (varJewel05Iron * varJewel05Quantity) + (varJewel06Iron * varJewel06Quantity) + (varJewel07Iron * varJewel07Quantity) + (varJewel08Iron * varJewel08Quantity) + (varJewel09Iron * varJewel09Quantity) + (varJewel10Iron * varJewel10Quantity) + (varJewel11Iron * varJewel11Quantity) + (varJewel12Iron * varJewel12Quantity) + (varJewel13Iron * varJewel13Quantity) + (varJewel14Iron * varJewel14Quantity) + (varJewel15Iron * varJewel15Quantity) + (varJewel16Iron * varJewel16Quantity) + (varJewel17Iron * varJewel17Quantity) + (varJewel18Iron * varJewel18Quantity) + (varJewel19Iron * varJewel19Quantity) + (varJewel20Iron * varJewel20Quantity) + (varJewel21Iron * varJewel21Quantity) + (varJewel22Iron * varJewel22Quantity) + (varJewel23Iron * varJewel23Quantity) + (varJewel24Iron * varJewel24Quantity));
    varJewelLeatherTotal = ((varJewel01Leather * varJewel01Quantity) + (varJewel02Leather * varJewel02Quantity) + (varJewel03Leather * varJewel03Quantity) + (varJewel04Leather * varJewel04Quantity) + (varJewel05Leather * varJewel05Quantity) + (varJewel06Leather * varJewel06Quantity) + (varJewel07Leather * varJewel07Quantity) + (varJewel08Leather * varJewel08Quantity) + (varJewel09Leather * varJewel09Quantity) + (varJewel10Leather * varJewel10Quantity) + (varJewel11Leather * varJewel11Quantity) + (varJewel12Leather * varJewel12Quantity) + (varJewel13Leather * varJewel13Quantity) + (varJewel14Leather * varJewel14Quantity) + (varJewel15Leather * varJewel15Quantity) + (varJewel16Leather * varJewel16Quantity) + (varJewel17Leather * varJewel17Quantity) + (varJewel18Leather * varJewel18Quantity) + (varJewel19Leather * varJewel19Quantity) + (varJewel20Leather * varJewel20Quantity) + (varJewel21Leather * varJewel21Quantity) + (varJewel22Leather * varJewel22Quantity) + (varJewel23Leather * varJewel23Quantity) + (varJewel24Leather * varJewel24Quantity));
    varJewelGarnetTotal = ((varJewel01Garnet * varJewel01Quantity) + (varJewel02Garnet * varJewel02Quantity) + (varJewel03Garnet * varJewel03Quantity) + (varJewel04Garnet * varJewel04Quantity) + (varJewel05Garnet * varJewel05Quantity) + (varJewel06Garnet * varJewel06Quantity) + (varJewel07Garnet * varJewel07Quantity) + (varJewel08Garnet * varJewel08Quantity) + (varJewel09Garnet * varJewel09Quantity) + (varJewel10Garnet * varJewel10Quantity) + (varJewel11Garnet * varJewel11Quantity) + (varJewel12Garnet * varJewel12Quantity) + (varJewel13Garnet * varJewel13Quantity) + (varJewel14Garnet * varJewel14Quantity) + (varJewel15Garnet * varJewel15Quantity) + (varJewel16Garnet * varJewel16Quantity) + (varJewel17Garnet * varJewel17Quantity) + (varJewel18Garnet * varJewel18Quantity) + (varJewel19Garnet * varJewel19Quantity) + (varJewel20Garnet * varJewel20Quantity) + (varJewel21Garnet * varJewel21Quantity) + (varJewel22Garnet * varJewel22Quantity) + (varJewel23Garnet * varJewel23Quantity) + (varJewel24Garnet * varJewel24Quantity));
    varJewelCrystalTotal = ((varJewel01Crystal * varJewel01Quantity) + (varJewel02Crystal * varJewel02Quantity) + (varJewel03Crystal * varJewel03Quantity) + (varJewel04Crystal * varJewel04Quantity) + (varJewel05Crystal * varJewel05Quantity) + (varJewel06Crystal * varJewel06Quantity) + (varJewel07Crystal * varJewel07Quantity) + (varJewel08Crystal * varJewel08Quantity) + (varJewel09Crystal * varJewel09Quantity) + (varJewel10Crystal * varJewel10Quantity) + (varJewel11Crystal * varJewel11Quantity) + (varJewel12Crystal * varJewel12Quantity) + (varJewel13Crystal * varJewel13Quantity) + (varJewel14Crystal * varJewel14Quantity) + (varJewel15Crystal * varJewel15Quantity) + (varJewel16Crystal * varJewel16Quantity) + (varJewel17Crystal * varJewel17Quantity) + (varJewel18Crystal * varJewel18Quantity) + (varJewel19Crystal * varJewel19Quantity) + (varJewel20Crystal * varJewel20Quantity) + (varJewel21Crystal * varJewel21Quantity) + (varJewel22Crystal * varJewel22Quantity) + (varJewel23Crystal * varJewel23Quantity) + (varJewel24Crystal * varJewel24Quantity));
    varJewelRubyTotal = ((varJewel01Ruby * varJewel01Quantity) + (varJewel02Ruby * varJewel02Quantity) + (varJewel03Ruby * varJewel03Quantity) + (varJewel04Ruby * varJewel04Quantity) + (varJewel05Ruby * varJewel05Quantity) + (varJewel06Ruby * varJewel06Quantity) + (varJewel07Ruby * varJewel07Quantity) + (varJewel08Ruby * varJewel08Quantity) + (varJewel09Ruby * varJewel09Quantity) + (varJewel10Ruby * varJewel10Quantity) + (varJewel11Ruby * varJewel11Quantity) + (varJewel12Ruby * varJewel12Quantity) + (varJewel13Ruby * varJewel13Quantity) + (varJewel14Ruby * varJewel14Quantity) + (varJewel15Ruby * varJewel15Quantity) + (varJewel16Ruby * varJewel16Quantity) + (varJewel17Ruby * varJewel17Quantity) + (varJewel18Ruby * varJewel18Quantity) + (varJewel19Ruby * varJewel19Quantity) + (varJewel20Ruby * varJewel20Quantity) + (varJewel21Ruby * varJewel21Quantity) + (varJewel22Ruby * varJewel22Quantity) + (varJewel23Ruby * varJewel23Quantity) + (varJewel24Ruby * varJewel24Quantity));
    varJewelToothTotal = ((varJewel01Tooth * varJewel01Quantity) + (varJewel02Tooth * varJewel02Quantity) + (varJewel03Tooth * varJewel03Quantity) + (varJewel04Tooth * varJewel04Quantity) + (varJewel05Tooth * varJewel05Quantity) + (varJewel06Tooth * varJewel06Quantity) + (varJewel07Tooth * varJewel07Quantity) + (varJewel08Tooth * varJewel08Quantity) + (varJewel09Tooth * varJewel09Quantity) + (varJewel10Tooth * varJewel10Quantity) + (varJewel11Tooth * varJewel11Quantity) + (varJewel12Tooth * varJewel12Quantity) + (varJewel13Tooth * varJewel13Quantity) + (varJewel14Tooth * varJewel14Quantity) + (varJewel15Tooth * varJewel15Quantity) + (varJewel16Tooth * varJewel16Quantity) + (varJewel17Tooth * varJewel17Quantity) + (varJewel18Tooth * varJewel18Quantity) + (varJewel19Tooth * varJewel19Quantity) + (varJewel20Tooth * varJewel20Quantity) + (varJewel21Tooth * varJewel21Quantity) + (varJewel22Tooth * varJewel22Quantity) + (varJewel23Tooth * varJewel23Quantity) + (varJewel24Tooth * varJewel24Quantity));
    varJewelBoneTotal = ((varJewel01Bone * varJewel01Quantity) + (varJewel02Bone * varJewel02Quantity) + (varJewel03Bone * varJewel03Quantity) + (varJewel04Bone * varJewel04Quantity) + (varJewel05Bone * varJewel05Quantity) + (varJewel06Bone * varJewel06Quantity) + (varJewel07Bone * varJewel07Quantity) + (varJewel08Bone * varJewel08Quantity) + (varJewel09Bone * varJewel09Quantity) + (varJewel10Bone * varJewel10Quantity) + (varJewel11Bone * varJewel11Quantity) + (varJewel12Bone * varJewel12Quantity) + (varJewel13Bone * varJewel13Quantity) + (varJewel14Bone * varJewel14Quantity) + (varJewel15Bone * varJewel15Quantity) + (varJewel16Bone * varJewel16Quantity) + (varJewel17Bone * varJewel17Quantity) + (varJewel18Bone * varJewel18Quantity) + (varJewel19Bone * varJewel19Quantity) + (varJewel20Bone * varJewel20Quantity) + (varJewel21Bone * varJewel21Quantity) + (varJewel22Bone * varJewel22Quantity) + (varJewel23Bone * varJewel23Quantity) + (varJewel24Bone * varJewel24Quantity));
    varJewelNacreTotal = ((varJewel01Nacre * varJewel01Quantity) + (varJewel02Nacre * varJewel02Quantity) + (varJewel03Nacre * varJewel03Quantity) + (varJewel04Nacre * varJewel04Quantity) + (varJewel05Nacre * varJewel05Quantity) + (varJewel06Nacre * varJewel06Quantity) + (varJewel07Nacre * varJewel07Quantity) + (varJewel08Nacre * varJewel08Quantity) + (varJewel09Nacre * varJewel09Quantity) + (varJewel10Nacre * varJewel10Quantity) + (varJewel11Nacre * varJewel11Quantity) + (varJewel12Nacre * varJewel12Quantity) + (varJewel13Nacre * varJewel13Quantity) + (varJewel14Nacre * varJewel14Quantity) + (varJewel15Nacre * varJewel15Quantity) + (varJewel16Nacre * varJewel16Quantity) + (varJewel17Nacre * varJewel17Quantity) + (varJewel18Nacre * varJewel18Quantity) + (varJewel19Nacre * varJewel19Quantity) + (varJewel20Nacre * varJewel20Quantity) + (varJewel21Nacre * varJewel21Quantity) + (varJewel22Nacre * varJewel22Quantity) + (varJewel23Nacre * varJewel23Quantity) + (varJewel24Nacre * varJewel24Quantity));
    varJewelLifeforceTotal = ((varJewel01Lifeforce * varJewel01Quantity) + (varJewel02Lifeforce * varJewel02Quantity) + (varJewel03Lifeforce * varJewel03Quantity) + (varJewel04Lifeforce * varJewel04Quantity) + (varJewel05Lifeforce * varJewel05Quantity) + (varJewel06Lifeforce * varJewel06Quantity) + (varJewel07Lifeforce * varJewel07Quantity) + (varJewel08Lifeforce * varJewel08Quantity) + (varJewel09Lifeforce * varJewel09Quantity) + (varJewel10Lifeforce * varJewel10Quantity) + (varJewel11Lifeforce * varJewel11Quantity) + (varJewel12Lifeforce * varJewel12Quantity) + (varJewel13Lifeforce * varJewel13Quantity) + (varJewel14Lifeforce * varJewel14Quantity) + (varJewel15Lifeforce * varJewel15Quantity) + (varJewel16Lifeforce * varJewel16Quantity) + (varJewel17Lifeforce * varJewel17Quantity) + (varJewel18Lifeforce * varJewel18Quantity) + (varJewel19Lifeforce * varJewel19Quantity) + (varJewel20Lifeforce * varJewel20Quantity) + (varJewel21Lifeforce * varJewel21Quantity) + (varJewel22Lifeforce * varJewel22Quantity) + (varJewel23Lifeforce * varJewel23Quantity) + (varJewel24Lifeforce * varJewel24Quantity));
    varJewelVenomSacTotal = ((varJewel01VenomSac * varJewel01Quantity) + (varJewel02VenomSac * varJewel02Quantity) + (varJewel03VenomSac * varJewel03Quantity) + (varJewel04VenomSac * varJewel04Quantity) + (varJewel05VenomSac * varJewel05Quantity) + (varJewel06VenomSac * varJewel06Quantity) + (varJewel07VenomSac * varJewel07Quantity) + (varJewel08VenomSac * varJewel08Quantity) + (varJewel09VenomSac * varJewel09Quantity) + (varJewel10VenomSac * varJewel10Quantity) + (varJewel11VenomSac * varJewel11Quantity) + (varJewel12VenomSac * varJewel12Quantity) + (varJewel13VenomSac * varJewel13Quantity) + (varJewel14VenomSac * varJewel14Quantity) + (varJewel15VenomSac * varJewel15Quantity) + (varJewel16VenomSac * varJewel16Quantity) + (varJewel17VenomSac * varJewel17Quantity) + (varJewel18VenomSac * varJewel18Quantity) + (varJewel19VenomSac * varJewel19Quantity) + (varJewel20VenomSac * varJewel20Quantity) + (varJewel21VenomSac * varJewel21Quantity) + (varJewel22VenomSac * varJewel22Quantity) + (varJewel23VenomSac * varJewel23Quantity) + (varJewel24VenomSac * varJewel24Quantity));
    varJewelReptileCinderTotal = ((varJewel01ReptileCinder * varJewel01Quantity) + (varJewel02ReptileCinder * varJewel02Quantity) + (varJewel03ReptileCinder * varJewel03Quantity) + (varJewel04ReptileCinder * varJewel04Quantity) + (varJewel05ReptileCinder * varJewel05Quantity) + (varJewel06ReptileCinder * varJewel06Quantity) + (varJewel07ReptileCinder * varJewel07Quantity) + (varJewel08ReptileCinder * varJewel08Quantity) + (varJewel09ReptileCinder * varJewel09Quantity) + (varJewel10ReptileCinder * varJewel10Quantity) + (varJewel11ReptileCinder * varJewel11Quantity) + (varJewel12ReptileCinder * varJewel12Quantity) + (varJewel13ReptileCinder * varJewel13Quantity) + (varJewel14ReptileCinder * varJewel14Quantity) + (varJewel15ReptileCinder * varJewel15Quantity) + (varJewel16ReptileCinder * varJewel16Quantity) + (varJewel17ReptileCinder * varJewel17Quantity) + (varJewel18ReptileCinder * varJewel18Quantity) + (varJewel19ReptileCinder * varJewel19Quantity) + (varJewel20ReptileCinder * varJewel20Quantity) + (varJewel21ReptileCinder * varJewel21Quantity) + (varJewel22ReptileCinder * varJewel22Quantity) + (varJewel23ReptileCinder * varJewel23Quantity) + (varJewel24ReptileCinder * varJewel24Quantity));
    varJewelDimStormruneTotal = ((varJewel01DimStormrune * varJewel01Quantity) + (varJewel02DimStormrune * varJewel02Quantity) + (varJewel03DimStormrune * varJewel03Quantity) + (varJewel04DimStormrune * varJewel04Quantity) + (varJewel05DimStormrune * varJewel05Quantity) + (varJewel06DimStormrune * varJewel06Quantity) + (varJewel07DimStormrune * varJewel07Quantity) + (varJewel08DimStormrune * varJewel08Quantity) + (varJewel09DimStormrune * varJewel09Quantity) + (varJewel10DimStormrune * varJewel10Quantity) + (varJewel11DimStormrune * varJewel11Quantity) + (varJewel12DimStormrune * varJewel12Quantity) + (varJewel13DimStormrune * varJewel13Quantity) + (varJewel14DimStormrune * varJewel14Quantity) + (varJewel15DimStormrune * varJewel15Quantity) + (varJewel16DimStormrune * varJewel16Quantity) + (varJewel17DimStormrune * varJewel17Quantity) + (varJewel18DimStormrune * varJewel18Quantity) + (varJewel19DimStormrune * varJewel19Quantity) + (varJewel20DimStormrune * varJewel20Quantity) + (varJewel21DimStormrune * varJewel21Quantity) + (varJewel22DimStormrune * varJewel22Quantity) + (varJewel23DimStormrune * varJewel23Quantity) + (varJewel24DimStormrune * varJewel24Quantity));
    varJewelGhostlyDarktaintTotal = ((varJewel01GhostlyDarktaint * varJewel01Quantity) + (varJewel02GhostlyDarktaint * varJewel02Quantity) + (varJewel03GhostlyDarktaint * varJewel03Quantity) + (varJewel04GhostlyDarktaint * varJewel04Quantity) + (varJewel05GhostlyDarktaint * varJewel05Quantity) + (varJewel06GhostlyDarktaint * varJewel06Quantity) + (varJewel07GhostlyDarktaint * varJewel07Quantity) + (varJewel08GhostlyDarktaint * varJewel08Quantity) + (varJewel09GhostlyDarktaint * varJewel09Quantity) + (varJewel10GhostlyDarktaint * varJewel10Quantity) + (varJewel11GhostlyDarktaint * varJewel11Quantity) + (varJewel12GhostlyDarktaint * varJewel12Quantity) + (varJewel13GhostlyDarktaint * varJewel13Quantity) + (varJewel14GhostlyDarktaint * varJewel14Quantity) + (varJewel15GhostlyDarktaint * varJewel15Quantity) + (varJewel16GhostlyDarktaint * varJewel16Quantity) + (varJewel17GhostlyDarktaint * varJewel17Quantity) + (varJewel18GhostlyDarktaint * varJewel18Quantity) + (varJewel19GhostlyDarktaint * varJewel19Quantity) + (varJewel20GhostlyDarktaint * varJewel20Quantity) + (varJewel21GhostlyDarktaint * varJewel21Quantity) + (varJewel22GhostlyDarktaint * varJewel22Quantity) + (varJewel23GhostlyDarktaint * varJewel23Quantity) + (varJewel24GhostlyDarktaint * varJewel24Quantity));
}

//Jewel Calculations
function fnJewel()
{
    fnJewelSubPrice(varJewel01Gold,varJewel01Iron,varJewel01Leather,varJewel01Garnet,varJewel01Crystal,varJewel01Ruby,varJewel01Tooth,varJewel01Bone,varJewel01Nacre,varJewel01Success,varJewel01Lifeforce,varJewel01VenomSac,varJewel01ReptileCinder,varJewel01DimStormrune,varJewel01GhostlyDarktaint)
    varJewel01Price = varItemPrice;
    fnJewelSubPrice(varJewel02Gold,varJewel02Iron,varJewel02Leather,varJewel02Garnet,varJewel02Crystal,varJewel02Ruby,varJewel02Tooth,varJewel02Bone,varJewel02Nacre,varJewel02Success,varJewel02Lifeforce,varJewel02VenomSac,varJewel02ReptileCinder,varJewel02DimStormrune,varJewel02GhostlyDarktaint)
    varJewel02Price = varItemPrice;
    fnJewelSubPrice(varJewel03Gold,varJewel03Iron,varJewel03Leather,varJewel03Garnet,varJewel03Crystal,varJewel03Ruby,varJewel03Tooth,varJewel03Bone,varJewel03Nacre,varJewel03Success,varJewel03Lifeforce,varJewel03VenomSac,varJewel03ReptileCinder,varJewel03DimStormrune,varJewel03GhostlyDarktaint)
    varJewel03Price = varItemPrice;
    fnJewelSubPrice(varJewel04Gold,varJewel04Iron,varJewel04Leather,varJewel04Garnet,varJewel04Crystal,varJewel04Ruby,varJewel04Tooth,varJewel04Bone,varJewel04Nacre,varJewel04Success,varJewel04Lifeforce,varJewel04VenomSac,varJewel04ReptileCinder,varJewel04DimStormrune,varJewel04GhostlyDarktaint)
    varJewel04Price = varItemPrice;
    fnJewelSubPrice(varJewel05Gold,varJewel05Iron,varJewel05Leather,varJewel05Garnet,varJewel05Crystal,varJewel05Ruby,varJewel05Tooth,varJewel05Bone,varJewel05Nacre,varJewel05Success,varJewel05Lifeforce,varJewel05VenomSac,varJewel05ReptileCinder,varJewel05DimStormrune,varJewel05GhostlyDarktaint)
    varJewel05Price = varItemPrice;
    fnJewelSubPrice(varJewel06Gold,varJewel06Iron,varJewel06Leather,varJewel06Garnet,varJewel06Crystal,varJewel06Ruby,varJewel06Tooth,varJewel06Bone,varJewel06Nacre,varJewel06Success,varJewel06Lifeforce,varJewel06VenomSac,varJewel06ReptileCinder,varJewel06DimStormrune,varJewel06GhostlyDarktaint)
    varJewel06Price = varItemPrice;
    fnJewelSubPrice(varJewel07Gold,varJewel07Iron,varJewel07Leather,varJewel07Garnet,varJewel07Crystal,varJewel07Ruby,varJewel07Tooth,varJewel07Bone,varJewel07Nacre,varJewel07Success,varJewel07Lifeforce,varJewel07VenomSac,varJewel07ReptileCinder,varJewel07DimStormrune,varJewel07GhostlyDarktaint)
    varJewel07Price = varItemPrice;
    fnJewelSubPrice(varJewel08Gold,varJewel08Iron,varJewel08Leather,varJewel08Garnet,varJewel08Crystal,varJewel08Ruby,varJewel08Tooth,varJewel08Bone,varJewel08Nacre,varJewel08Success,varJewel08Lifeforce,varJewel08VenomSac,varJewel08ReptileCinder,varJewel08DimStormrune,varJewel08GhostlyDarktaint)
    varJewel08Price = varItemPrice;
    fnJewelSubPrice(varJewel09Gold,varJewel09Iron,varJewel09Leather,varJewel09Garnet,varJewel09Crystal,varJewel09Ruby,varJewel09Tooth,varJewel09Bone,varJewel09Nacre,varJewel09Success,varJewel09Lifeforce,varJewel09VenomSac,varJewel09ReptileCinder,varJewel09DimStormrune,varJewel09GhostlyDarktaint)
    varJewel09Price = varItemPrice;
    fnJewelSubPrice(varJewel10Gold,varJewel10Iron,varJewel10Leather,varJewel10Garnet,varJewel10Crystal,varJewel10Ruby,varJewel10Tooth,varJewel10Bone,varJewel10Nacre,varJewel10Success,varJewel10Lifeforce,varJewel10VenomSac,varJewel10ReptileCinder,varJewel10DimStormrune,varJewel10GhostlyDarktaint)
    varJewel10Price = varItemPrice;
    fnJewelSubPrice(varJewel11Gold,varJewel11Iron,varJewel11Leather,varJewel11Garnet,varJewel11Crystal,varJewel11Ruby,varJewel11Tooth,varJewel11Bone,varJewel11Nacre,varJewel11Success,varJewel11Lifeforce,varJewel11VenomSac,varJewel11ReptileCinder,varJewel11DimStormrune,varJewel11GhostlyDarktaint)
    varJewel11Price = varItemPrice;
    fnJewelSubPrice(varJewel12Gold,varJewel12Iron,varJewel12Leather,varJewel12Garnet,varJewel12Crystal,varJewel12Ruby,varJewel12Tooth,varJewel12Bone,varJewel12Nacre,varJewel12Success,varJewel12Lifeforce,varJewel12VenomSac,varJewel12ReptileCinder,varJewel12DimStormrune,varJewel12GhostlyDarktaint)
    varJewel12Price = varItemPrice;
    fnJewelSubPrice(varJewel13Gold,varJewel13Iron,varJewel13Leather,varJewel13Garnet,varJewel13Crystal,varJewel13Ruby,varJewel13Tooth,varJewel13Bone,varJewel13Nacre,varJewel13Success,varJewel13Lifeforce,varJewel13VenomSac,varJewel13ReptileCinder,varJewel13DimStormrune,varJewel13GhostlyDarktaint)
    varJewel13Price = varItemPrice;
    fnJewelSubPrice(varJewel14Gold,varJewel14Iron,varJewel14Leather,varJewel14Garnet,varJewel14Crystal,varJewel14Ruby,varJewel14Tooth,varJewel14Bone,varJewel14Nacre,varJewel14Success,varJewel14Lifeforce,varJewel14VenomSac,varJewel14ReptileCinder,varJewel14DimStormrune,varJewel14GhostlyDarktaint)
    varJewel14Price = varItemPrice;
    fnJewelSubPrice(varJewel15Gold,varJewel15Iron,varJewel15Leather,varJewel15Garnet,varJewel15Crystal,varJewel15Ruby,varJewel15Tooth,varJewel15Bone,varJewel15Nacre,varJewel15Success,varJewel15Lifeforce,varJewel15VenomSac,varJewel15ReptileCinder,varJewel15DimStormrune,varJewel15GhostlyDarktaint)
    varJewel15Price = varItemPrice;
    fnJewelSubPrice(varJewel16Gold,varJewel16Iron,varJewel16Leather,varJewel16Garnet,varJewel16Crystal,varJewel16Ruby,varJewel16Tooth,varJewel16Bone,varJewel16Nacre,varJewel16Success,varJewel16Lifeforce,varJewel16VenomSac,varJewel16ReptileCinder,varJewel16DimStormrune,varJewel16GhostlyDarktaint)
    varJewel16Price = varItemPrice;
    fnJewelSubPrice(varJewel17Gold,varJewel17Iron,varJewel17Leather,varJewel17Garnet,varJewel17Crystal,varJewel17Ruby,varJewel17Tooth,varJewel17Bone,varJewel17Nacre,varJewel17Success,varJewel17Lifeforce,varJewel17VenomSac,varJewel17ReptileCinder,varJewel17DimStormrune,varJewel17GhostlyDarktaint)
    varJewel17Price = varItemPrice;
    fnJewelSubPrice(varJewel18Gold,varJewel18Iron,varJewel18Leather,varJewel18Garnet,varJewel18Crystal,varJewel18Ruby,varJewel18Tooth,varJewel18Bone,varJewel18Nacre,varJewel18Success,varJewel18Lifeforce,varJewel18VenomSac,varJewel18ReptileCinder,varJewel18DimStormrune,varJewel18GhostlyDarktaint)
    varJewel18Price = varItemPrice;
    fnJewelSubPrice(varJewel19Gold,varJewel19Iron,varJewel19Leather,varJewel19Garnet,varJewel19Crystal,varJewel19Ruby,varJewel19Tooth,varJewel19Bone,varJewel19Nacre,varJewel19Success,varJewel19Lifeforce,varJewel19VenomSac,varJewel19ReptileCinder,varJewel19DimStormrune,varJewel19GhostlyDarktaint)
    varJewel19Price = varItemPrice;
    fnJewelSubPrice(varJewel20Gold,varJewel20Iron,varJewel20Leather,varJewel20Garnet,varJewel20Crystal,varJewel20Ruby,varJewel20Tooth,varJewel20Bone,varJewel20Nacre,varJewel20Success,varJewel20Lifeforce,varJewel20VenomSac,varJewel20ReptileCinder,varJewel20DimStormrune,varJewel20GhostlyDarktaint)
    varJewel20Price = varItemPrice;
    fnJewelSubPrice(varJewel21Gold,varJewel21Iron,varJewel21Leather,varJewel21Garnet,varJewel21Crystal,varJewel21Ruby,varJewel21Tooth,varJewel21Bone,varJewel21Nacre,varJewel21Success,varJewel21Lifeforce,varJewel21VenomSac,varJewel21ReptileCinder,varJewel21DimStormrune,varJewel21GhostlyDarktaint)
    varJewel21Price = varItemPrice;
    fnJewelSubPrice(varJewel22Gold,varJewel22Iron,varJewel22Leather,varJewel22Garnet,varJewel22Crystal,varJewel22Ruby,varJewel22Tooth,varJewel22Bone,varJewel22Nacre,varJewel22Success,varJewel22Lifeforce,varJewel22VenomSac,varJewel22ReptileCinder,varJewel22DimStormrune,varJewel22GhostlyDarktaint)
    varJewel22Price = varItemPrice;
    fnJewelSubPrice(varJewel23Gold,varJewel23Iron,varJewel23Leather,varJewel23Garnet,varJewel23Crystal,varJewel23Ruby,varJewel23Tooth,varJewel23Bone,varJewel23Nacre,varJewel23Success,varJewel23Lifeforce,varJewel23VenomSac,varJewel23ReptileCinder,varJewel23DimStormrune,varJewel23GhostlyDarktaint)
    varJewel23Price = varItemPrice;
    fnJewelSubPrice(varJewel24Gold,varJewel24Iron,varJewel24Leather,varJewel24Garnet,varJewel24Crystal,varJewel24Ruby,varJewel24Tooth,varJewel24Bone,varJewel24Nacre,varJewel24Success,varJewel24Lifeforce,varJewel24VenomSac,varJewel24ReptileCinder,varJewel24DimStormrune,varJewel24GhostlyDarktaint)
    varJewel24Price = varItemPrice;
}

function fnReloadJewelPrices()
{
    //Jewel Prices
    document.getElementById('Jewel01Price').value = varJewel01Price;
    document.getElementById('Jewel02Price').value = varJewel02Price;
    document.getElementById('Jewel03Price').value = varJewel03Price;
    document.getElementById('Jewel04Price').value = varJewel04Price;
    document.getElementById('Jewel05Price').value = varJewel05Price;
    document.getElementById('Jewel06Price').value = varJewel06Price;
    document.getElementById('Jewel07Price').value = varJewel07Price;
    document.getElementById('Jewel08Price').value = varJewel08Price;
    document.getElementById('Jewel09Price').value = varJewel09Price;
    document.getElementById('Jewel10Price').value = varJewel10Price;
    document.getElementById('Jewel11Price').value = varJewel11Price;
    document.getElementById('Jewel12Price').value = varJewel12Price;
    document.getElementById('Jewel13Price').value = varJewel13Price;
    document.getElementById('Jewel14Price').value = varJewel14Price;
    document.getElementById('Jewel15Price').value = varJewel15Price;
    document.getElementById('Jewel16Price').value = varJewel16Price;
    document.getElementById('Jewel17Price').value = varJewel17Price;
    document.getElementById('Jewel18Price').value = varJewel18Price;
    document.getElementById('Jewel19Price').value = varJewel19Price;
    document.getElementById('Jewel20Price').value = varJewel20Price;
    document.getElementById('Jewel21Price').value = varJewel21Price;
    document.getElementById('Jewel22Price').value = varJewel22Price;
    document.getElementById('Jewel23Price').value = varJewel23Price;
    document.getElementById('Jewel24Price').value = varJewel24Price;

    //Jewel Total Prices
    document.getElementById('JewelTotal').value = varJewelTotal;
    document.getElementById('JewelGoldTotal').value = varJewelGoldTotal;
    document.getElementById('JewelIronTotal').value = varJewelIronTotal;
    document.getElementById('JewelLeatherTotal').value = varJewelLeatherTotal;
    document.getElementById('JewelGarnetTotal').value = varJewelGarnetTotal;
    document.getElementById('JewelCrystalTotal').value = varJewelCrystalTotal;
    document.getElementById('JewelRubyTotal').value = varJewelRubyTotal;
    document.getElementById('JewelToothTotal').value = varJewelToothTotal;
    document.getElementById('JewelBoneTotal').value = varJewelBoneTotal;
    document.getElementById('JewelNacreTotal').value = varJewelNacreTotal;
    document.getElementById('JewelLifeforceTotal').value = varJewelLifeforceTotal;
    document.getElementById('JewelVenomSacTotal').value = varJewelVenomSacTotal;
    document.getElementById('JewelReptileCinderTotal').value = varJewelReptileCinderTotal;
    document.getElementById('JewelDimStormruneTotal').value = varJewelDimStormruneTotal;
    document.getElementById('JewelGhostlyDarktaintTotal').value = varJewelGhostlyDarktaintTotal;
}

function fnJewelInitialize()
{
    varJewelTotal = document.getElementById("JewelTotal").value;
    varJewelGoldTotal = document.getElementById("JewelGoldTotal").value;
    varJewelIronTotal = document.getElementById("JewelIronTotal").value;
    varJewelLeatherTotal = document.getElementById("JewelLeatherTotal").value;
    varJewelGarnetTotal = document.getElementById("JewelGarnetTotal").value;
    varJewelCrystalTotal = document.getElementById("JewelCrystalTotal").value;
    varJewelRubyTotal = document.getElementById("JewelRubyTotal").value;
    varJewelToothTotal = document.getElementById("JewelToothTotal").value;
    varJewelBoneTotal = document.getElementById("JewelBoneTotal").value;
    varJewelNacreTotal = document.getElementById("JewelNacreTotal").value;
    varJewelLifeforceTotal = document.getElementById("JewelLifeforceTotal").value;
    varJewelVenomSacTotal = document.getElementById("JewelVenomSacTotal").value;
    varJewelReptileCinderTotal = document.getElementById("JewelReptileCinderTotal").value;
    varJewelDimStormruneTotal = document.getElementById("JewelDimStormruneTotal").value;
    varJewelGhostlyDarktaintTotal = document.getElementById("JewelGhostlyDarktaintTotal").value;

    // *** Jewel VARIABLES ***
	//Choker
    varJewel01Quantity = document.getElementById("Jewel01Quantity").value;
    varJewel01Price = document.getElementById("Jewel01Price").value;
    varJewel01Success = document.getElementById("Jewel01Success").value;
    varJewel01Gold = 0
    varJewel01Iron = 0
    varJewel01Leather = 2
    varJewel01Garnet = 0
    varJewel01Crystal = 0
    varJewel01Ruby = 0
    varJewel01Tooth = 0
    varJewel01Bone = 0
    varJewel01Nacre = 0
    varJewel01Lifeforce = 0
    varJewel01VenomSac = 0
    varJewel01ReptileCinder = 0
    varJewel01DimStormrune = 0
    varJewel01GhostlyDarktaint = 0
	//Heart Locket
    varJewel02Quantity = document.getElementById("Jewel02Quantity").value;
    varJewel02Price = document.getElementById("Jewel02Price").value;
    varJewel02Success = document.getElementById("Jewel02Success").value;
    varJewel02Gold = 10
    varJewel02Iron = 0
    varJewel02Leather = 0
    varJewel02Garnet = 0
    varJewel02Crystal = 0
    varJewel02Ruby = 0
    varJewel02Tooth = 0
    varJewel02Bone = 0
    varJewel02Nacre = 0
    varJewel02Lifeforce = 0
    varJewel02VenomSac = 0
    varJewel02ReptileCinder = 0
    varJewel02DimStormrune = 0
    varJewel02GhostlyDarktaint = 0
	//Medallion
    varJewel03Quantity = document.getElementById("Jewel03Quantity").value;
    varJewel03Price = document.getElementById("Jewel03Price").value;
    varJewel03Success = document.getElementById("Jewel03Success").value;
    varJewel03Gold = 7
    varJewel03Iron = 0
    varJewel03Leather = 1
    varJewel03Garnet = 0
    varJewel03Crystal = 0
    varJewel03Ruby = 0
    varJewel03Tooth = 0
    varJewel03Bone = 0
    varJewel03Nacre = 0
    varJewel03Lifeforce = 0
    varJewel03VenomSac = 0
    varJewel03ReptileCinder = 0
    varJewel03DimStormrune = 0
    varJewel03GhostlyDarktaint = 0
	//Silver Necklace
    varJewel04Quantity = document.getElementById("Jewel04Quantity").value;
    varJewel04Price = document.getElementById("Jewel04Price").value;
    varJewel04Success = document.getElementById("Jewel04Success").value;
    varJewel04Gold = 10
    varJewel04Iron = 0
    varJewel04Leather = 0
    varJewel04Garnet = 0
    varJewel04Crystal = 0
    varJewel04Ruby = 0
    varJewel04Tooth = 0
    varJewel04Bone = 0
    varJewel04Nacre = 0
    varJewel04Lifeforce = 0
    varJewel04VenomSac = 0
    varJewel04ReptileCinder = 0
    varJewel04DimStormrune = 0
    varJewel04GhostlyDarktaint = 0
	//Spiked collar
    varJewel05Quantity = document.getElementById("Jewel05Quantity").value;
    varJewel05Price = document.getElementById("Jewel05Price").value;
    varJewel05Success = document.getElementById("Jewel05Success").value;
    varJewel05Gold = 0
    varJewel05Iron = 2
    varJewel05Leather = 1
    varJewel05Garnet = 0
    varJewel05Crystal = 0
    varJewel05Ruby = 0
    varJewel05Tooth = 0
    varJewel05Bone = 0
    varJewel05Nacre = 0
    varJewel05Lifeforce = 0
    varJewel05VenomSac = 0
    varJewel05ReptileCinder = 0
    varJewel05DimStormrune = 0
    varJewel05GhostlyDarktaint = 0
	//Beast Charm
    varJewel06Quantity = document.getElementById("Jewel06Quantity").value;
    varJewel06Price = document.getElementById("Jewel06Price").value;
    varJewel06Success = document.getElementById("Jewel06Success").value;
    varJewel06Gold = 0
    varJewel06Iron = 0
    varJewel06Leather = 1
    varJewel06Garnet = 0
    varJewel06Crystal = 0
    varJewel06Ruby = 0
    varJewel06Tooth = 7
    varJewel06Bone = 0
    varJewel06Nacre = 0
    varJewel06Lifeforce = 0
    varJewel06VenomSac = 0
    varJewel06ReptileCinder = 0
    varJewel06DimStormrune = 0
    varJewel06GhostlyDarktaint = 0
	//Bone Amulet
    varJewel07Quantity = document.getElementById("Jewel07Quantity").value;
    varJewel07Price = document.getElementById("Jewel07Price").value;
    varJewel07Success = document.getElementById("Jewel07Success").value;
    varJewel07Gold = 0
    varJewel07Iron = 0
    varJewel07Leather = 1
    varJewel07Garnet = 0
    varJewel07Crystal = 0
    varJewel07Ruby = 0
    varJewel07Tooth = 0
    varJewel07Bone = 5
    varJewel07Nacre = 0
    varJewel07Lifeforce = 0
    varJewel07VenomSac = 0
    varJewel07ReptileCinder = 0
    varJewel07DimStormrune = 0
    varJewel07GhostlyDarktaint = 0
	//Beads
    varJewel08Quantity = document.getElementById("Jewel08Quantity").value;
    varJewel08Price = document.getElementById("Jewel08Price").value;
    varJewel08Success = document.getElementById("Jewel08Success").value;
    varJewel08Gold = 0
    varJewel08Iron = 0
    varJewel08Leather = 0
    varJewel08Garnet = 1
    varJewel08Crystal = 0
    varJewel08Ruby = 0
    varJewel08Tooth = 0
    varJewel08Bone = 0
    varJewel08Nacre = 2
    varJewel08Lifeforce = 0
    varJewel08VenomSac = 0
    varJewel08ReptileCinder = 0
    varJewel08DimStormrune = 0
    varJewel08GhostlyDarktaint = 0
	//Gemstone amulet
    varJewel09Quantity = document.getElementById("Jewel09Quantity").value;
    varJewel09Price = document.getElementById("Jewel09Price").value;
    varJewel09Success = document.getElementById("Jewel09Success").value;
    varJewel09Gold = 0
    varJewel09Iron = 0
    varJewel09Leather = 1
    varJewel09Garnet = 0
    varJewel09Crystal = 0
    varJewel09Ruby = 1
    varJewel09Tooth = 0
    varJewel09Bone = 0
    varJewel09Nacre = 0
    varJewel09Lifeforce = 0
    varJewel09VenomSac = 0
    varJewel09ReptileCinder = 0
    varJewel09DimStormrune = 0
    varJewel09GhostlyDarktaint = 0
	//Star Pendant
    varJewel10Quantity = document.getElementById("Jewel10Quantity").value;
    varJewel10Price = document.getElementById("Jewel10Price").value;
    varJewel10Success = document.getElementById("Jewel10Success").value;
    varJewel10Gold = 10
    varJewel10Iron = 0
    varJewel10Leather = 0
    varJewel10Garnet = 0
    varJewel10Crystal = 0
    varJewel10Ruby = 0
    varJewel10Tooth = 0
    varJewel10Bone = 0
    varJewel10Nacre = 0
    varJewel10Lifeforce = 5
    varJewel10VenomSac = 0
    varJewel10ReptileCinder = 0
    varJewel10DimStormrune = 0
    varJewel10GhostlyDarktaint = 0
	//Wyrd Amulet
    varJewel11Quantity = document.getElementById("Jewel11Quantity").value;
    varJewel11Price = document.getElementById("Jewel11Price").value;
    varJewel11Success = document.getElementById("Jewel11Success").value;
    varJewel11Gold = 0
    varJewel11Iron = 0
    varJewel11Leather = 1
    varJewel11Garnet = 0
    varJewel11Crystal = 0
    varJewel11Ruby = 0
    varJewel11Tooth = 0
    varJewel11Bone = 0
    varJewel11Nacre = 0
    varJewel11Lifeforce = 0
    varJewel11VenomSac = 0
    varJewel11ReptileCinder = 2
    varJewel11DimStormrune = 4
    varJewel11GhostlyDarktaint = 0
	//Band
    varJewel12Quantity = document.getElementById("Jewel12Quantity").value;
    varJewel12Price = document.getElementById("Jewel12Price").value;
    varJewel12Success = document.getElementById("Jewel12Success").value;
    varJewel12Gold = 8
    varJewel12Iron = 0
    varJewel12Leather = 0
    varJewel12Garnet = 0
    varJewel12Crystal = 0
    varJewel12Ruby = 0
    varJewel12Tooth = 0
    varJewel12Bone = 0
    varJewel12Nacre = 0
    varJewel12Lifeforce = 0
    varJewel12VenomSac = 0
    varJewel12ReptileCinder = 0
    varJewel12DimStormrune = 0
    varJewel12GhostlyDarktaint = 0
	//Crystal Ring
    varJewel13Quantity = document.getElementById("Jewel13Quantity").value;
    varJewel13Price = document.getElementById("Jewel13Price").value;
    varJewel13Success = document.getElementById("Jewel13Success").value;
    varJewel13Gold = 5
    varJewel13Iron = 0
    varJewel13Leather = 0
    varJewel13Garnet = 0
    varJewel13Crystal = 1
    varJewel13Ruby = 0
    varJewel13Tooth = 0
    varJewel13Bone = 0
    varJewel13Nacre = 0
    varJewel13Lifeforce = 0
    varJewel13VenomSac = 0
    varJewel13ReptileCinder = 0
    varJewel13DimStormrune = 0
    varJewel13GhostlyDarktaint = 0
	//Iron Ring
    varJewel14Quantity = document.getElementById("Jewel14Quantity").value;
    varJewel14Price = document.getElementById("Jewel14Price").value;
    varJewel14Success = document.getElementById("Jewel14Success").value;
    varJewel14Gold = 5
    varJewel14Iron = 1
    varJewel14Leather = 0
    varJewel14Garnet = 0
    varJewel14Crystal = 0
    varJewel14Ruby = 0
    varJewel14Tooth = 0
    varJewel14Bone = 0
    varJewel14Nacre = 0
    varJewel14Lifeforce = 0
    varJewel14VenomSac = 0
    varJewel14ReptileCinder = 0
    varJewel14DimStormrune = 0
    varJewel14GhostlyDarktaint = 0
	//Simple Ring
    varJewel15Quantity = document.getElementById("Jewel15Quantity").value;
    varJewel15Price = document.getElementById("Jewel15Price").value;
    varJewel15Success = document.getElementById("Jewel15Success").value;
    varJewel15Gold = 0
    varJewel15Iron = 1
    varJewel15Leather = 0
    varJewel15Garnet = 0
    varJewel15Crystal = 0
    varJewel15Ruby = 0
    varJewel15Tooth = 0
    varJewel15Bone = 0
    varJewel15Nacre = 0
    varJewel15Lifeforce = 0
    varJewel15VenomSac = 0
    varJewel15ReptileCinder = 0
    varJewel15DimStormrune = 0
    varJewel15GhostlyDarktaint = 0
	//Ring
    varJewel16Quantity = document.getElementById("Jewel16Quantity").value;
    varJewel16Price = document.getElementById("Jewel16Price").value;
    varJewel16Success = document.getElementById("Jewel16Success").value;
    varJewel16Gold = 5
    varJewel16Iron = 1
    varJewel16Leather = 0
    varJewel16Garnet = 0
    varJewel16Crystal = 0
    varJewel16Ruby = 0
    varJewel16Tooth = 0
    varJewel16Bone = 0
    varJewel16Nacre = 0
    varJewel16Lifeforce = 0
    varJewel16VenomSac = 0
    varJewel16ReptileCinder = 0
    varJewel16DimStormrune = 0
    varJewel16GhostlyDarktaint = 0
	//Signet Ring
    varJewel17Quantity = document.getElementById("Jewel17Quantity").value;
    varJewel17Price = document.getElementById("Jewel17Price").value;
    varJewel17Success = document.getElementById("Jewel17Success").value;
    varJewel17Gold = 15
    varJewel17Iron = 0
    varJewel17Leather = 0
    varJewel17Garnet = 0
    varJewel17Crystal = 0
    varJewel17Ruby = 0
    varJewel17Tooth = 0
    varJewel17Bone = 0
    varJewel17Nacre = 0
    varJewel17Lifeforce = 0
    varJewel17VenomSac = 0
    varJewel17ReptileCinder = 0
    varJewel17DimStormrune = 0
    varJewel17GhostlyDarktaint = 0
	//Gold Ring
    varJewel18Quantity = document.getElementById("Jewel18Quantity").value;
    varJewel18Price = document.getElementById("Jewel18Price").value;
    varJewel18Success = document.getElementById("Jewel18Success").value;
    varJewel18Gold = 15
    varJewel18Iron = 0
    varJewel18Leather = 0
    varJewel18Garnet = 0
    varJewel18Crystal = 0
    varJewel18Ruby = 0
    varJewel18Tooth = 0
    varJewel18Bone = 0
    varJewel18Nacre = 0
    varJewel18Lifeforce = 0
    varJewel18VenomSac = 0
    varJewel18ReptileCinder = 0
    varJewel18DimStormrune = 0
    varJewel18GhostlyDarktaint = 0
	//Runic Band
    varJewel19Quantity = document.getElementById("Jewel19Quantity").value;
    varJewel19Price = document.getElementById("Jewel19Price").value;
    varJewel19Success = document.getElementById("Jewel19Success").value;
    varJewel19Gold = 10
    varJewel19Iron = 2
    varJewel19Leather = 0
    varJewel19Garnet = 0
    varJewel19Crystal = 0
    varJewel19Ruby = 0
    varJewel19Tooth = 0
    varJewel19Bone = 0
    varJewel19Nacre = 0
    varJewel19Lifeforce = 0
    varJewel19VenomSac = 0
    varJewel19ReptileCinder = 0
    varJewel19DimStormrune = 0
    varJewel19GhostlyDarktaint = 0
	//Serpent Ring
    varJewel20Quantity = document.getElementById("Jewel20Quantity").value;
    varJewel20Price = document.getElementById("Jewel20Price").value;
    varJewel20Success = document.getElementById("Jewel20Success").value;
    varJewel20Gold = 5
    varJewel20Iron = 0
    varJewel20Leather = 0
    varJewel20Garnet = 0
    varJewel20Crystal = 0
    varJewel20Ruby = 0
    varJewel20Tooth = 0
    varJewel20Bone = 0
    varJewel20Nacre = 0
    varJewel20Lifeforce = 0
    varJewel20VenomSac = 1
    varJewel20ReptileCinder = 0
    varJewel20DimStormrune = 0
    varJewel20GhostlyDarktaint = 0
	//Silver Ring
    varJewel21Quantity = document.getElementById("Jewel21Quantity").value;
    varJewel21Price = document.getElementById("Jewel21Price").value;
    varJewel21Success = document.getElementById("Jewel21Success").value;
    varJewel21Gold = 10
    varJewel21Iron = 0
    varJewel21Leather = 0
    varJewel21Garnet = 0
    varJewel21Crystal = 0
    varJewel21Ruby = 0
    varJewel21Tooth = 0
    varJewel21Bone = 0
    varJewel21Nacre = 0
    varJewel21Lifeforce = 0
    varJewel21VenomSac = 0
    varJewel21ReptileCinder = 0
    varJewel21DimStormrune = 0
    varJewel21GhostlyDarktaint = 0
	//Ornate Ring
    varJewel22Quantity = document.getElementById("Jewel22Quantity").value;
    varJewel22Price = document.getElementById("Jewel22Price").value;
    varJewel22Success = document.getElementById("Jewel22Success").value;
    varJewel22Gold = 20
    varJewel22Iron = 2
    varJewel22Leather = 0
    varJewel22Garnet = 0
    varJewel22Crystal = 0
    varJewel22Ruby = 0
    varJewel22Tooth = 0
    varJewel22Bone = 0
    varJewel22Nacre = 0
    varJewel22Lifeforce = 0
    varJewel22VenomSac = 0
    varJewel22ReptileCinder = 0
    varJewel22DimStormrune = 0
    varJewel22GhostlyDarktaint = 0
	//Ruby Ring
    varJewel23Quantity = document.getElementById("Jewel23Quantity").value;
    varJewel23Price = document.getElementById("Jewel23Price").value;
    varJewel23Success = document.getElementById("Jewel23Success").value;
    varJewel23Gold = 10
    varJewel23Iron = 0
    varJewel23Leather = 0
    varJewel23Garnet = 0
    varJewel23Crystal = 0
    varJewel23Ruby = 1
    varJewel23Tooth = 0
    varJewel23Bone = 0
    varJewel23Nacre = 0
    varJewel23Lifeforce = 0
    varJewel23VenomSac = 0
    varJewel23ReptileCinder = 0
    varJewel23DimStormrune = 0
    varJewel23GhostlyDarktaint = 0
	//Arcane Ring
    varJewel24Quantity = document.getElementById("Jewel24Quantity").value;
    varJewel24Price = document.getElementById("Jewel24Price").value;
    varJewel24Success = document.getElementById("Jewel24Success").value;
    varJewel24Gold = 10
    varJewel24Iron = 0
    varJewel24Leather = 0
    varJewel24Garnet = 0
    varJewel24Crystal = 2
    varJewel24Ruby = 0
    varJewel24Tooth = 0
    varJewel24Bone = 0
    varJewel24Nacre = 0
    varJewel24Lifeforce = 0
    varJewel24VenomSac = 0
    varJewel24ReptileCinder = 0
    varJewel24DimStormrune = 0
    varJewel24GhostlyDarktaint = 3
}

/* SITHRA FIBULA */
//Used to reload items from SithraFibula
function fnSithraFibulaReload()  // x= id, z= value
{
    fnSithraFibulaInitialize()

    fnSithraFibula()

    fnSithraFibulaTotal()
    fnReloadSithraFibulaPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnSithraFibulaSubPrice(a,b,c,d,e,f,g,h,i)
{
    varGold = parseInt(a)
    varEmerald = parseInt(b)
    varRuby = parseInt(c)
    varSapphire = parseInt(d)
    varCrystal = parseInt(e)
    varTurquoise = parseInt(f)
    varAmethyst = parseInt(g)
    varAventurine = parseInt(h)
    varSuccess = parseInt(i)

    varSubPrice = ((varGold) + (varEmerald * varEmeraldValue) + (varRuby * varRubyValue) + (varSapphire * varSapphireValue) + (varCrystal * varCrystalValue) + (varTurquoise * varTurquoiseValue) + (varAmethyst * varAmethystValue) + (varAventurine * varAventurineValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of SithraFibula
function fnSithraFibulaTotal()
{
    varSithraFibulaTotal = ((varSithraFibula01Price * varSithraFibula01Quantity) + (varSithraFibula02Price * varSithraFibula02Quantity) + (varSithraFibula03Price * varSithraFibula03Quantity) + (varSithraFibula04Price * varSithraFibula04Quantity) + (varSithraFibula05Price * varSithraFibula05Quantity) + (varSithraFibula06Price * varSithraFibula06Quantity) + (varSithraFibula07Price * varSithraFibula07Quantity));
    varSithraFibulaGoldTotal = ((varSithraFibula01Gold * varSithraFibula01Quantity) + (varSithraFibula02Gold * varSithraFibula02Quantity) + (varSithraFibula03Gold * varSithraFibula03Quantity) + (varSithraFibula04Gold * varSithraFibula04Quantity) + (varSithraFibula05Gold * varSithraFibula05Quantity) + (varSithraFibula06Gold * varSithraFibula06Quantity) + (varSithraFibula07Gold * varSithraFibula07Quantity));
    varSithraFibulaEmeraldTotal = ((varSithraFibula01Emerald * varSithraFibula01Quantity) + (varSithraFibula02Emerald * varSithraFibula02Quantity) + (varSithraFibula03Emerald * varSithraFibula03Quantity) + (varSithraFibula04Emerald * varSithraFibula04Quantity) + (varSithraFibula05Emerald * varSithraFibula05Quantity) + (varSithraFibula06Emerald * varSithraFibula06Quantity) + (varSithraFibula07Emerald * varSithraFibula07Quantity));
    varSithraFibulaRubyTotal = ((varSithraFibula01Ruby * varSithraFibula01Quantity) + (varSithraFibula02Ruby * varSithraFibula02Quantity) + (varSithraFibula03Ruby * varSithraFibula03Quantity) + (varSithraFibula04Ruby * varSithraFibula04Quantity) + (varSithraFibula05Ruby * varSithraFibula05Quantity) + (varSithraFibula06Ruby * varSithraFibula06Quantity) + (varSithraFibula07Ruby * varSithraFibula07Quantity));
    varSithraFibulaSapphireTotal = ((varSithraFibula01Sapphire * varSithraFibula01Quantity) + (varSithraFibula02Sapphire * varSithraFibula02Quantity) + (varSithraFibula03Sapphire * varSithraFibula03Quantity) + (varSithraFibula04Sapphire * varSithraFibula04Quantity) + (varSithraFibula05Sapphire * varSithraFibula05Quantity) + (varSithraFibula06Sapphire * varSithraFibula06Quantity) + (varSithraFibula07Sapphire * varSithraFibula07Quantity));
    varSithraFibulaCrystalTotal = ((varSithraFibula01Crystal * varSithraFibula01Quantity) + (varSithraFibula02Crystal * varSithraFibula02Quantity) + (varSithraFibula03Crystal * varSithraFibula03Quantity) + (varSithraFibula04Crystal * varSithraFibula04Quantity) + (varSithraFibula05Crystal * varSithraFibula05Quantity) + (varSithraFibula06Crystal * varSithraFibula06Quantity) + (varSithraFibula07Crystal * varSithraFibula07Quantity));
    varSithraFibulaTurquoiseTotal = ((varSithraFibula01Turquoise * varSithraFibula01Quantity) + (varSithraFibula02Turquoise * varSithraFibula02Quantity) + (varSithraFibula03Turquoise * varSithraFibula03Quantity) + (varSithraFibula04Turquoise * varSithraFibula04Quantity) + (varSithraFibula05Turquoise * varSithraFibula05Quantity) + (varSithraFibula06Turquoise * varSithraFibula06Quantity) + (varSithraFibula07Turquoise * varSithraFibula07Quantity));
    varSithraFibulaAmethystTotal = ((varSithraFibula01Amethyst * varSithraFibula01Quantity) + (varSithraFibula02Amethyst * varSithraFibula02Quantity) + (varSithraFibula03Amethyst * varSithraFibula03Quantity) + (varSithraFibula04Amethyst * varSithraFibula04Quantity) + (varSithraFibula05Amethyst * varSithraFibula05Quantity) + (varSithraFibula06Amethyst * varSithraFibula06Quantity) + (varSithraFibula07Amethyst * varSithraFibula07Quantity));
    varSithraFibulaAventurineTotal = ((varSithraFibula01Aventurine * varSithraFibula01Quantity) + (varSithraFibula02Aventurine * varSithraFibula02Quantity) + (varSithraFibula03Aventurine * varSithraFibula03Quantity) + (varSithraFibula04Aventurine * varSithraFibula04Quantity) + (varSithraFibula05Aventurine * varSithraFibula05Quantity) + (varSithraFibula06Aventurine * varSithraFibula06Quantity) + (varSithraFibula07Aventurine * varSithraFibula07Quantity));
}

//SithraFibula Calculations
function fnSithraFibula()
{
    fnSithraFibulaSubPrice(varSithraFibula01Gold,varSithraFibula01Emerald,varSithraFibula01Ruby,varSithraFibula01Sapphire,varSithraFibula01Crystal,varSithraFibula01Turquoise,varSithraFibula01Amethyst,varSithraFibula01Aventurine,varSithraFibula01Success)
    varSithraFibula01Price = varItemPrice;
    fnSithraFibulaSubPrice(varSithraFibula02Gold,varSithraFibula02Emerald,varSithraFibula02Ruby,varSithraFibula02Sapphire,varSithraFibula02Crystal,varSithraFibula02Turquoise,varSithraFibula02Amethyst,varSithraFibula02Aventurine,varSithraFibula02Success)
    varSithraFibula02Price = varItemPrice;
    fnSithraFibulaSubPrice(varSithraFibula03Gold,varSithraFibula03Emerald,varSithraFibula03Ruby,varSithraFibula03Sapphire,varSithraFibula03Crystal,varSithraFibula03Turquoise,varSithraFibula03Amethyst,varSithraFibula03Aventurine,varSithraFibula03Success)
    varSithraFibula03Price = varItemPrice;
    fnSithraFibulaSubPrice(varSithraFibula04Gold,varSithraFibula04Emerald,varSithraFibula04Ruby,varSithraFibula04Sapphire,varSithraFibula04Crystal,varSithraFibula04Turquoise,varSithraFibula04Amethyst,varSithraFibula04Aventurine,varSithraFibula04Success)
    varSithraFibula04Price = varItemPrice;
    fnSithraFibulaSubPrice(varSithraFibula05Gold,varSithraFibula05Emerald,varSithraFibula05Ruby,varSithraFibula05Sapphire,varSithraFibula05Crystal,varSithraFibula05Turquoise,varSithraFibula05Amethyst,varSithraFibula05Aventurine,varSithraFibula05Success)
    varSithraFibula05Price = varItemPrice;
    fnSithraFibulaSubPrice(varSithraFibula06Gold,varSithraFibula06Emerald,varSithraFibula06Ruby,varSithraFibula06Sapphire,varSithraFibula06Crystal,varSithraFibula06Turquoise,varSithraFibula06Amethyst,varSithraFibula06Aventurine,varSithraFibula06Success)
    varSithraFibula06Price = varItemPrice;
    fnSithraFibulaSubPrice(varSithraFibula07Gold,varSithraFibula07Emerald,varSithraFibula07Ruby,varSithraFibula07Sapphire,varSithraFibula07Crystal,varSithraFibula07Turquoise,varSithraFibula07Amethyst,varSithraFibula07Aventurine,varSithraFibula07Success)
    varSithraFibula07Price = varItemPrice;
}

function fnReloadSithraFibulaPrices()
{
    //SithraFibula Prices
    document.getElementById('SithraFibula01Price').value = varSithraFibula01Price;
    document.getElementById('SithraFibula02Price').value = varSithraFibula02Price;
    document.getElementById('SithraFibula03Price').value = varSithraFibula03Price;
    document.getElementById('SithraFibula04Price').value = varSithraFibula04Price;
    document.getElementById('SithraFibula05Price').value = varSithraFibula05Price;
    document.getElementById('SithraFibula06Price').value = varSithraFibula06Price;
    document.getElementById('SithraFibula07Price').value = varSithraFibula07Price;

    //SithraFibula Total Prices
    document.getElementById('SithraFibulaTotal').value = varSithraFibulaTotal;
    document.getElementById('SithraFibulaGoldTotal').value = varSithraFibulaGoldTotal;
    document.getElementById('SithraFibulaEmeraldTotal').value = varSithraFibulaEmeraldTotal;
    document.getElementById('SithraFibulaRubyTotal').value = varSithraFibulaRubyTotal;
    document.getElementById('SithraFibulaSapphireTotal').value = varSithraFibulaSapphireTotal;
    document.getElementById('SithraFibulaCrystalTotal').value = varSithraFibulaCrystalTotal;
    document.getElementById('SithraFibulaTurquoiseTotal').value = varSithraFibulaTurquoiseTotal;
    document.getElementById('SithraFibulaAmethystTotal').value = varSithraFibulaAmethystTotal;
    document.getElementById('SithraFibulaAventurineTotal').value = varSithraFibulaAventurineTotal;
}

function fnSithraFibulaInitialize()
{
    varSithraFibulaTotal = document.getElementById("SithraFibulaTotal").value;
    varSithraFibulaGoldTotal = document.getElementById("SithraFibulaGoldTotal").value;
    varSithraFibulaEmeraldTotal = document.getElementById("SithraFibulaEmeraldTotal").value;
    varSithraFibulaRubyTotal = document.getElementById("SithraFibulaRubyTotal").value;
    varSithraFibulaSapphireTotal = document.getElementById('SithraFibulaSapphireTotal').value;
    varSithraFibulaCrystalTotal = document.getElementById('SithraFibulaCrystalTotal').value;
    varSithraFibulaTurquoiseTotal = document.getElementById('SithraFibulaTurquoiseTotal').value;
    varSithraFibulaAmethystTotal = document.getElementById('SithraFibulaAmethystTotal').value;
    varSithraFibulaAventurineTotal = document.getElementById('SithraFibulaAventurineTotal').value;

    // *** SithraFibula VARIABLES ***
	//Acid Fibula
    varSithraFibula01Quantity = document.getElementById("SithraFibula01Quantity").value;
    varSithraFibula01Price = document.getElementById("SithraFibula01Price").value;
    varSithraFibula01Success = document.getElementById("SithraFibula01Success").value;
    varSithraFibula01Gold = 1000
    varSithraFibula01Emerald = 7
    varSithraFibula01Ruby = 0
    varSithraFibula01Sapphire = 0
    varSithraFibula01Crystal = 0
    varSithraFibula01Turquoise = 0
    varSithraFibula01Amethyst = 0
    varSithraFibula01Aventurine = 0
    //Fire Fibula
    varSithraFibula02Quantity = document.getElementById("SithraFibula02Quantity").value;
    varSithraFibula02Price = document.getElementById("SithraFibula02Price").value;
    varSithraFibula02Success = document.getElementById("SithraFibula02Success").value;
    varSithraFibula02Gold = 1000
    varSithraFibula02Emerald = 0
    varSithraFibula02Ruby = 7
    varSithraFibula02Sapphire = 0
    varSithraFibula02Crystal = 0
    varSithraFibula02Turquoise = 0
    varSithraFibula02Amethyst = 0
    varSithraFibula02Aventurine = 0
    //Holy Fibula
    varSithraFibula03Quantity = document.getElementById("SithraFibula03Quantity").value;
    varSithraFibula03Price = document.getElementById("SithraFibula03Price").value;
    varSithraFibula03Success = document.getElementById("SithraFibula03Success").value;
    varSithraFibula03Gold = 1000
    varSithraFibula03Emerald = 0
    varSithraFibula03Ruby = 0
    varSithraFibula03Sapphire = 7
    varSithraFibula03Crystal = 0
    varSithraFibula03Turquoise = 0
    varSithraFibula03Amethyst = 0
    varSithraFibula03Aventurine = 0
    //Ice Fibula
    varSithraFibula04Quantity = document.getElementById("SithraFibula04Quantity").value;
    varSithraFibula04Price = document.getElementById("SithraFibula04Price").value;
    varSithraFibula04Success = document.getElementById("SithraFibula04Success").value;
    varSithraFibula04Gold = 1000
    varSithraFibula04Emerald = 0
    varSithraFibula04Ruby = 0
    varSithraFibula04Sapphire = 0
    varSithraFibula04Crystal = 7
    varSithraFibula04Turquoise = 0
    varSithraFibula04Amethyst = 0
    varSithraFibula04Aventurine = 0
    //Lightning Fibula
    varSithraFibula05Quantity = document.getElementById("SithraFibula05Quantity").value;
    varSithraFibula05Price = document.getElementById("SithraFibula05Price").value;
    varSithraFibula05Success = document.getElementById("SithraFibula05Success").value;
    varSithraFibula05Gold = 1000
    varSithraFibula05Emerald = 0
    varSithraFibula05Ruby = 0
    varSithraFibula05Sapphire = 0
    varSithraFibula05Crystal = 0
    varSithraFibula05Turquoise = 7
    varSithraFibula05Amethyst = 0
    varSithraFibula05Aventurine = 0
    //Poison Fibula
    varSithraFibula06Quantity = document.getElementById("SithraFibula06Quantity").value;
    varSithraFibula06Price = document.getElementById("SithraFibula06Price").value;
    varSithraFibula06Success = document.getElementById("SithraFibula06Success").value;
    varSithraFibula06Gold = 1000
    varSithraFibula06Emerald = 0
    varSithraFibula06Ruby = 0
    varSithraFibula06Sapphire = 0
    varSithraFibula06Crystal = 0
    varSithraFibula06Turquoise = 0
    varSithraFibula06Amethyst = 7
    varSithraFibula06Aventurine = 0
    //Unholy Fibula
    varSithraFibula07Quantity = document.getElementById("SithraFibula07Quantity").value;
    varSithraFibula07Price = document.getElementById("SithraFibula07Price").value;
    varSithraFibula07Success = document.getElementById("SithraFibula07Success").value;
    varSithraFibula07Gold = 1000
    varSithraFibula07Emerald = 0
    varSithraFibula07Ruby = 0
    varSithraFibula07Sapphire = 0
    varSithraFibula07Crystal = 0
    varSithraFibula07Turquoise = 0
    varSithraFibula07Amethyst = 0
    varSithraFibula07Aventurine = 7
}

/* ALCHEMY SIEGE */
//Used to reload items from AlchemySiege
function fnAlchemySiegeReload()  // x= id, z= value
{
    fnAlchemySiegeInitialize()

    fnAlchemySiege()

    fnAlchemySiegeTotal()
    fnReloadAlchemySiegePrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnAlchemySiegeSubPrice(a,b,c,d,e,f)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varSparkstone = parseInt(c)
    varSulfur = parseInt(d)
    varStone = parseInt(e)
    varSuccess = parseInt(f)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varSparkstone * varSparkstoneValue) + (varSulfur * varSulfurValue) + (varStone * varStoneValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of AlchemySiege
function fnAlchemySiegeTotal()
{
    varAlchemySiegeTotal = ((varAlchemySiege01Price * varAlchemySiege01Quantity) + (varAlchemySiege02Price * varAlchemySiege02Quantity) + (varAlchemySiege03Price * varAlchemySiege03Quantity) + (varAlchemySiege04Price * varAlchemySiege04Quantity));
    varAlchemySiegeGoldTotal = ((varAlchemySiege01Gold * varAlchemySiege01Quantity) + (varAlchemySiege02Gold * varAlchemySiege02Quantity) + (varAlchemySiege03Gold * varAlchemySiege03Quantity) + (varAlchemySiege04Gold * varAlchemySiege04Quantity));
    varAlchemySiegeIronTotal = ((varAlchemySiege01Iron * varAlchemySiege01Quantity) + (varAlchemySiege02Iron * varAlchemySiege02Quantity) + (varAlchemySiege03Iron * varAlchemySiege03Quantity) + (varAlchemySiege04Iron * varAlchemySiege04Quantity));
    varAlchemySiegeSparkstoneTotal = ((varAlchemySiege01Sparkstone * varAlchemySiege01Quantity) + (varAlchemySiege02Sparkstone * varAlchemySiege02Quantity) + (varAlchemySiege03Sparkstone * varAlchemySiege03Quantity) + (varAlchemySiege04Sparkstone * varAlchemySiege04Quantity));
    varAlchemySiegeSulfurTotal = ((varAlchemySiege01Sulfur * varAlchemySiege01Quantity) + (varAlchemySiege02Sulfur * varAlchemySiege02Quantity) + (varAlchemySiege03Sulfur * varAlchemySiege03Quantity) + (varAlchemySiege04Sulfur * varAlchemySiege04Quantity));
    varAlchemySiegeStoneTotal = ((varAlchemySiege01Stone * varAlchemySiege01Quantity) + (varAlchemySiege02Stone * varAlchemySiege02Quantity) + (varAlchemySiege03Stone * varAlchemySiege03Quantity) + (varAlchemySiege04Stone * varAlchemySiege04Quantity));
    }

//AlchemySiege Calculations
function fnAlchemySiege()
{
    fnAlchemySiegeSubPrice(varAlchemySiege01Gold,varAlchemySiege01Iron,varAlchemySiege01Sparkstone,varAlchemySiege01Sulfur,varAlchemySiege01Stone,varAlchemySiege01Success)
    varAlchemySiege01Price = varItemPrice;
    fnAlchemySiegeSubPrice(varAlchemySiege02Gold,varAlchemySiege02Iron,varAlchemySiege02Sparkstone,varAlchemySiege02Sulfur,varAlchemySiege02Stone,varAlchemySiege02Success)
    varAlchemySiege02Price = varItemPrice;
    fnAlchemySiegeSubPrice(varAlchemySiege03Gold,varAlchemySiege03Iron,varAlchemySiege03Sparkstone,varAlchemySiege03Sulfur,varAlchemySiege03Stone,varAlchemySiege03Success)
    varAlchemySiege03Price = varItemPrice;
    fnAlchemySiegeSubPrice(varAlchemySiege04Gold,varAlchemySiege04Iron,varAlchemySiege04Sparkstone,varAlchemySiege04Sulfur,varAlchemySiege04Stone,varAlchemySiege04Success)
    varAlchemySiege04Price = varItemPrice;
    
}

function fnReloadAlchemySiegePrices()
{
    //AlchemySiege Prices
    document.getElementById('AlchemySiege01Price').value = varAlchemySiege01Price;
    document.getElementById('AlchemySiege02Price').value = varAlchemySiege02Price;
    document.getElementById('AlchemySiege03Price').value = varAlchemySiege03Price;
    document.getElementById('AlchemySiege04Price').value = varAlchemySiege04Price;

    //AlchemySiege Total Prices
    document.getElementById('AlchemySiegeTotal').value = varAlchemySiegeTotal;
    document.getElementById('AlchemySiegeGoldTotal').value = varAlchemySiegeGoldTotal;
    document.getElementById('AlchemySiegeIronTotal').value = varAlchemySiegeIronTotal;
    document.getElementById('AlchemySiegeSparkstoneTotal').value = varAlchemySiegeSparkstoneTotal;
    document.getElementById('AlchemySiegeSulfurTotal').value = varAlchemySiegeSulfurTotal;
    document.getElementById('AlchemySiegeStoneTotal').value = varAlchemySiegeStoneTotal;
}

function fnAlchemySiegeInitialize()
{
    varAlchemySiegeTotal = document.getElementById("AlchemySiegeTotal").value;
    varAlchemySiegeGoldTotal = document.getElementById("AlchemySiegeGoldTotal").value;
    varAlchemySiegeIronTotal = document.getElementById("AlchemySiegeIronTotal").value;
    varAlchemySiegeSparkstoneTotal = document.getElementById("AlchemySiegeSparkstoneTotal").value;
    varAlchemySiegeSulfurTotal = document.getElementById("AlchemySiegeSulfurTotal").value;
    varAlchemySiegeStoneTotal = document.getElementById("AlchemySiegeStoneTotal").value;

    // *** AlchemySiege VARIABLES ***
	//Light Battlespike
    varAlchemySiege01Quantity = document.getElementById("AlchemySiege01Quantity").value;
    varAlchemySiege01Price = document.getElementById("AlchemySiege01Price").value;
    varAlchemySiege01Success = document.getElementById("AlchemySiege01Success").value;
    varAlchemySiege01Gold = 0
    varAlchemySiege01Iron = 1
    varAlchemySiege01Sparkstone = 1
    varAlchemySiege01Sulfur = 0
    varAlchemySiege01Stone = 0
    //Medium Battlespike
    varAlchemySiege02Quantity = document.getElementById("AlchemySiege02Quantity").value;
    varAlchemySiege02Price = document.getElementById("AlchemySiege02Price").value;
    varAlchemySiege02Success = document.getElementById("AlchemySiege02Success").value;
    varAlchemySiege02Gold = 0
    varAlchemySiege02Iron = 2
    varAlchemySiege02Sparkstone = 1
    varAlchemySiege02Sulfur = 0
    varAlchemySiege02Stone = 0
    //Heavy Battlespike
    varAlchemySiege03Quantity = document.getElementById("AlchemySiege03Quantity").value;
    varAlchemySiege03Price = document.getElementById("AlchemySiege03Price").value;
    varAlchemySiege03Success = document.getElementById("AlchemySiege03Success").value;
    varAlchemySiege03Gold = 0
    varAlchemySiege03Iron = 2
    varAlchemySiege03Sparkstone = 2
    varAlchemySiege03Sulfur = 0
    varAlchemySiege03Stone = 0
    //Black Powder
    varAlchemySiege04Quantity = document.getElementById("AlchemySiege04Quantity").value;
    varAlchemySiege04Price = document.getElementById("AlchemySiege04Price").value;
    varAlchemySiege04Success = document.getElementById("AlchemySiege04Success").value;
    varAlchemySiege04Gold = 5
    varAlchemySiege04Iron = 0
    varAlchemySiege04Sparkstone = 0
    varAlchemySiege04Sulfur = 2
    varAlchemySiege04Stone = 8
}

/* AXE */

//Used to reload items from Axe
function fnAxeReload()  // x= id, z= value
{
    fnAxeInitialize()

    fnAxe()

    fnAxeTotal()
    fnReloadAxePrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnAxeSubPrice(a,b,c,d,e,f,g,h,i,j,k) // a=Gold, b=Iron, c=Wood, d=Leather, e=Selentine, f=Veilron, g=Neithal, h=Leenspar, i=Theyril, j=Yggdrasil Leaf, k=Success Rate
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varLeenspar = parseInt(h)
    varTheyril = parseInt(i)
    varYggdrasilLeaf = parseInt(j)
    varSuccess = parseInt(k)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varYggdrasilLeaf * varYggdrasilLeafValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Axe
function fnAxeTotal()
{
    varAxeTotal = ((varAxe01Price * varAxe01Quantity) + (varAxe02Price * varAxe02Quantity) + (varAxe03Price * varAxe03Quantity) + (varAxe04Price * varAxe04Quantity) + (varAxe05Price * varAxe05Quantity) + (varAxe06Price * varAxe06Quantity) + (varAxe07Price * varAxe07Quantity) + (varAxe08Price * varAxe08Quantity) + (varAxe09Price * varAxe09Quantity) + (varAxe10Price * varAxe10Quantity) + (varAxe11Price * varAxe11Quantity) + (varAxe12Price * varAxe12Quantity) + (varAxe13Price * varAxe13Quantity) + (varAxe14Price * varAxe14Quantity) + (varAxe15Price * varAxe15Quantity) + (varAxe16Price * varAxe16Quantity) + (varAxe17Price * varAxe17Quantity) + (varAxe18Price * varAxe18Quantity) + (varAxe19Price * varAxe19Quantity) + (varAxe20Price * varAxe20Quantity) + (varAxe21Price * varAxe21Quantity) + (varAxe22Price * varAxe22Quantity));
    varAxeGoldTotal = ((varAxe01Gold * varAxe01Quantity) + (varAxe02Gold * varAxe02Quantity) + (varAxe03Gold * varAxe03Quantity) + (varAxe04Gold * varAxe04Quantity) + (varAxe05Gold * varAxe05Quantity) + (varAxe06Gold * varAxe06Quantity) + (varAxe07Gold * varAxe07Quantity) + (varAxe08Gold * varAxe08Quantity) + (varAxe09Gold * varAxe09Quantity) + (varAxe10Gold * varAxe10Quantity) + (varAxe11Gold * varAxe11Quantity) + (varAxe12Gold * varAxe12Quantity) + (varAxe13Gold * varAxe13Quantity) + (varAxe14Gold * varAxe14Quantity) + (varAxe15Gold * varAxe15Quantity) + (varAxe16Gold * varAxe16Quantity) + (varAxe17Gold * varAxe17Quantity) + (varAxe18Gold * varAxe18Quantity) + (varAxe19Gold * varAxe19Quantity) + (varAxe20Gold * varAxe20Quantity) + (varAxe21Gold * varAxe21Quantity) + (varAxe22Gold * varAxe22Quantity));
    varAxeIronTotal = ((varAxe01Iron * varAxe01Quantity) + (varAxe02Iron * varAxe02Quantity) + (varAxe03Iron * varAxe03Quantity) + (varAxe04Iron * varAxe04Quantity) + (varAxe05Iron * varAxe05Quantity) + (varAxe06Iron * varAxe06Quantity) + (varAxe07Iron * varAxe07Quantity) + (varAxe08Iron * varAxe08Quantity) + (varAxe09Iron * varAxe09Quantity) + (varAxe10Iron * varAxe10Quantity) + (varAxe11Iron * varAxe11Quantity) + (varAxe12Iron * varAxe12Quantity) + (varAxe13Iron * varAxe13Quantity) + (varAxe14Iron * varAxe14Quantity) + (varAxe15Iron * varAxe15Quantity) + (varAxe16Iron * varAxe16Quantity) + (varAxe17Iron * varAxe17Quantity) + (varAxe18Iron * varAxe18Quantity) + (varAxe19Iron * varAxe19Quantity) + (varAxe20Iron * varAxe20Quantity) + (varAxe21Iron * varAxe21Quantity) + (varAxe22Iron * varAxe22Quantity));
    varAxeWoodTotal = ((varAxe01Wood * varAxe01Quantity) + (varAxe02Wood * varAxe02Quantity) + (varAxe03Wood * varAxe03Quantity) + (varAxe04Wood * varAxe04Quantity) + (varAxe05Wood * varAxe05Quantity) + (varAxe06Wood * varAxe06Quantity) + (varAxe07Wood * varAxe07Quantity) + (varAxe08Wood * varAxe08Quantity) + (varAxe09Wood * varAxe09Quantity) + (varAxe10Wood * varAxe10Quantity) + (varAxe11Wood * varAxe11Quantity) + (varAxe12Wood * varAxe12Quantity) + (varAxe13Wood * varAxe13Quantity) + (varAxe14Wood * varAxe14Quantity) + (varAxe15Wood * varAxe15Quantity) + (varAxe16Wood * varAxe16Quantity) + (varAxe17Wood * varAxe17Quantity) + (varAxe18Wood * varAxe18Quantity) + (varAxe19Wood * varAxe19Quantity) + (varAxe20Wood * varAxe20Quantity) + (varAxe21Wood * varAxe21Quantity) + (varAxe22Wood * varAxe22Quantity));
    varAxeLeatherTotal = ((varAxe01Leather * varAxe01Quantity) + (varAxe02Leather * varAxe02Quantity) + (varAxe03Leather * varAxe03Quantity) + (varAxe04Leather * varAxe04Quantity) + (varAxe05Leather * varAxe05Quantity) + (varAxe06Leather * varAxe06Quantity) + (varAxe07Leather * varAxe07Quantity) + (varAxe08Leather * varAxe08Quantity) + (varAxe09Leather * varAxe09Quantity) + (varAxe10Leather * varAxe10Quantity) + (varAxe11Leather * varAxe11Quantity) + (varAxe12Leather * varAxe12Quantity) + (varAxe13Leather * varAxe13Quantity) + (varAxe14Leather * varAxe14Quantity) + (varAxe15Leather * varAxe15Quantity) + (varAxe16Leather * varAxe16Quantity) + (varAxe17Leather * varAxe17Quantity) + (varAxe18Leather * varAxe18Quantity) + (varAxe19Leather * varAxe19Quantity) + (varAxe20Leather * varAxe20Quantity) + (varAxe21Leather * varAxe21Quantity) + (varAxe22Leather * varAxe22Quantity));
    varAxeSelentineTotal = ((varAxe01Selentine * varAxe01Quantity) + (varAxe02Selentine * varAxe02Quantity) + (varAxe03Selentine * varAxe03Quantity) + (varAxe04Selentine * varAxe04Quantity) + (varAxe05Selentine * varAxe05Quantity) + (varAxe06Selentine * varAxe06Quantity) + (varAxe07Selentine * varAxe07Quantity) + (varAxe08Selentine * varAxe08Quantity) + (varAxe09Selentine * varAxe09Quantity) + (varAxe10Selentine * varAxe10Quantity) + (varAxe11Selentine * varAxe11Quantity) + (varAxe12Selentine * varAxe12Quantity) + (varAxe13Selentine * varAxe13Quantity) + (varAxe14Selentine * varAxe14Quantity) + (varAxe15Selentine * varAxe15Quantity) + (varAxe16Selentine * varAxe16Quantity) + (varAxe17Selentine * varAxe17Quantity) + (varAxe18Selentine * varAxe18Quantity) + (varAxe19Selentine * varAxe19Quantity) + (varAxe20Selentine * varAxe20Quantity) + (varAxe21Selentine * varAxe21Quantity) + (varAxe22Selentine * varAxe22Quantity));
    varAxeVeilronTotal = ((varAxe01Veilron * varAxe01Quantity) + (varAxe02Veilron * varAxe02Quantity) + (varAxe03Veilron * varAxe03Quantity) + (varAxe04Veilron * varAxe04Quantity) + (varAxe05Veilron * varAxe05Quantity) + (varAxe06Veilron * varAxe06Quantity) + (varAxe07Veilron * varAxe07Quantity) + (varAxe08Veilron * varAxe08Quantity) + (varAxe09Veilron * varAxe09Quantity) + (varAxe10Veilron * varAxe10Quantity) + (varAxe11Veilron * varAxe11Quantity) + (varAxe12Veilron * varAxe12Quantity) + (varAxe13Veilron * varAxe13Quantity) + (varAxe14Veilron * varAxe14Quantity) + (varAxe15Veilron * varAxe15Quantity) + (varAxe16Veilron * varAxe16Quantity) + (varAxe17Veilron * varAxe17Quantity) + (varAxe18Veilron * varAxe18Quantity) + (varAxe19Veilron * varAxe19Quantity) + (varAxe20Veilron * varAxe20Quantity) + (varAxe21Veilron * varAxe21Quantity) + (varAxe22Veilron * varAxe22Quantity));
    varAxeNeithalTotal = ((varAxe01Neithal * varAxe01Quantity) + (varAxe02Neithal * varAxe02Quantity) + (varAxe03Neithal * varAxe03Quantity) + (varAxe04Neithal * varAxe04Quantity) + (varAxe05Neithal * varAxe05Quantity) + (varAxe06Neithal * varAxe06Quantity) + (varAxe07Neithal * varAxe07Quantity) + (varAxe08Neithal * varAxe08Quantity) + (varAxe09Neithal * varAxe09Quantity) + (varAxe10Neithal * varAxe10Quantity) + (varAxe11Neithal * varAxe11Quantity) + (varAxe12Neithal * varAxe12Quantity) + (varAxe13Neithal * varAxe13Quantity) + (varAxe14Neithal * varAxe14Quantity) + (varAxe15Neithal * varAxe15Quantity) + (varAxe16Neithal * varAxe16Quantity) + (varAxe17Neithal * varAxe17Quantity) + (varAxe18Neithal * varAxe18Quantity) + (varAxe19Neithal * varAxe19Quantity) + (varAxe20Neithal * varAxe20Quantity) + (varAxe21Neithal * varAxe21Quantity) + (varAxe22Neithal * varAxe22Quantity));
    varAxeLeensparTotal = ((varAxe01Leenspar * varAxe01Quantity) + (varAxe02Leenspar * varAxe02Quantity) + (varAxe03Leenspar * varAxe03Quantity) + (varAxe04Leenspar * varAxe04Quantity) + (varAxe05Leenspar * varAxe05Quantity) + (varAxe06Leenspar * varAxe06Quantity) + (varAxe07Leenspar * varAxe07Quantity) + (varAxe08Leenspar * varAxe08Quantity) + (varAxe09Leenspar * varAxe09Quantity) + (varAxe10Leenspar * varAxe10Quantity) + (varAxe11Leenspar * varAxe11Quantity) + (varAxe12Leenspar * varAxe12Quantity) + (varAxe13Leenspar * varAxe13Quantity) + (varAxe14Leenspar * varAxe14Quantity) + (varAxe15Leenspar * varAxe15Quantity) + (varAxe16Leenspar * varAxe16Quantity) + (varAxe17Leenspar * varAxe17Quantity) + (varAxe18Leenspar * varAxe18Quantity) + (varAxe19Leenspar * varAxe19Quantity) + (varAxe20Leenspar * varAxe20Quantity) + (varAxe21Leenspar * varAxe21Quantity) + (varAxe22Leenspar * varAxe22Quantity));
    varAxeTheyrilTotal = ((varAxe01Theyril * varAxe01Quantity) + (varAxe02Theyril * varAxe02Quantity) + (varAxe03Theyril * varAxe03Quantity) + (varAxe04Theyril * varAxe04Quantity) + (varAxe05Theyril * varAxe05Quantity) + (varAxe06Theyril * varAxe06Quantity) + (varAxe07Theyril * varAxe07Quantity) + (varAxe08Theyril * varAxe08Quantity) + (varAxe09Theyril * varAxe09Quantity) + (varAxe10Theyril * varAxe10Quantity) + (varAxe11Theyril * varAxe11Quantity) + (varAxe12Theyril * varAxe12Quantity) + (varAxe13Theyril * varAxe13Quantity) + (varAxe14Theyril * varAxe14Quantity) + (varAxe15Theyril * varAxe15Quantity) + (varAxe16Theyril * varAxe16Quantity) + (varAxe17Theyril * varAxe17Quantity) + (varAxe18Theyril * varAxe18Quantity) + (varAxe19Theyril * varAxe19Quantity) + (varAxe20Theyril * varAxe20Quantity) + (varAxe21Theyril * varAxe21Quantity) + (varAxe22Theyril * varAxe22Quantity));
    varAxeYggdrasilLeafTotal = ((varAxe01YggdrasilLeaf * varAxe01Quantity) + (varAxe02YggdrasilLeaf * varAxe02Quantity) + (varAxe03YggdrasilLeaf * varAxe03Quantity) + (varAxe04YggdrasilLeaf * varAxe04Quantity) + (varAxe05YggdrasilLeaf * varAxe05Quantity) + (varAxe06YggdrasilLeaf * varAxe06Quantity) + (varAxe07YggdrasilLeaf * varAxe07Quantity) + (varAxe08YggdrasilLeaf * varAxe08Quantity) + (varAxe09YggdrasilLeaf * varAxe09Quantity) + (varAxe10YggdrasilLeaf * varAxe10Quantity) + (varAxe11YggdrasilLeaf * varAxe11Quantity) + (varAxe12YggdrasilLeaf * varAxe12Quantity) + (varAxe13YggdrasilLeaf * varAxe13Quantity) + (varAxe14YggdrasilLeaf * varAxe14Quantity) + (varAxe15YggdrasilLeaf * varAxe15Quantity) + (varAxe16YggdrasilLeaf * varAxe16Quantity) + (varAxe17YggdrasilLeaf * varAxe17Quantity) + (varAxe18YggdrasilLeaf * varAxe18Quantity) + (varAxe19YggdrasilLeaf * varAxe19Quantity) + (varAxe20YggdrasilLeaf * varAxe20Quantity) + (varAxe21YggdrasilLeaf * varAxe21Quantity) + (varAxe22YggdrasilLeaf * varAxe22Quantity));
}

//Axe Calculations
function fnAxe()
{
    fnAxeSubPrice(varAxe01Gold,varAxe01Iron,varAxe01Wood,varAxe01Leather,varAxe01Selentine,varAxe01Veilron,varAxe01Neithal,varAxe01Leenspar,varAxe01Theyril,varAxe01YggdrasilLeaf,varAxe01Success)
    varAxe01Price = varItemPrice;
    fnAxeSubPrice(varAxe02Gold,varAxe02Iron,varAxe02Wood,varAxe02Leather,varAxe02Selentine,varAxe02Veilron,varAxe02Neithal,varAxe02Leenspar,varAxe02Theyril,varAxe02YggdrasilLeaf,varAxe02Success)
    varAxe02Price = varItemPrice;
    fnAxeSubPrice(varAxe03Gold,varAxe03Iron,varAxe03Wood,varAxe03Leather,varAxe03Selentine,varAxe03Veilron,varAxe03Neithal,varAxe03Leenspar,varAxe03Theyril,varAxe03YggdrasilLeaf,varAxe03Success)
    varAxe03Price = varItemPrice;
    fnAxeSubPrice(varAxe04Gold,varAxe04Iron,varAxe04Wood,varAxe04Leather,varAxe04Selentine,varAxe04Veilron,varAxe04Neithal,varAxe04Leenspar,varAxe04Theyril,varAxe04YggdrasilLeaf,varAxe04Success)
    varAxe04Price = varItemPrice;
    fnAxeSubPrice(varAxe05Gold,varAxe05Iron,varAxe05Wood,varAxe05Leather,varAxe05Selentine,varAxe05Veilron,varAxe05Neithal,varAxe05Leenspar,varAxe05Theyril,varAxe05YggdrasilLeaf,varAxe05Success)
    varAxe05Price = varItemPrice;
    fnAxeSubPrice(varAxe06Gold,varAxe06Iron,varAxe06Wood,varAxe06Leather,varAxe06Selentine,varAxe06Veilron,varAxe06Neithal,varAxe06Leenspar,varAxe06Theyril,varAxe06YggdrasilLeaf,varAxe06Success)
    varAxe06Price = varItemPrice;
    fnAxeSubPrice(varAxe07Gold,varAxe07Iron,varAxe07Wood,varAxe07Leather,varAxe07Selentine,varAxe07Veilron,varAxe07Neithal,varAxe07Leenspar,varAxe07Theyril,varAxe07YggdrasilLeaf,varAxe07Success)
    varAxe07Price = varItemPrice;
    fnAxeSubPrice(varAxe08Gold,varAxe08Iron,varAxe08Wood,varAxe08Leather,varAxe08Selentine,varAxe08Veilron,varAxe08Neithal,varAxe08Leenspar,varAxe08Theyril,varAxe08YggdrasilLeaf,varAxe08Success)
    varAxe08Price = varItemPrice;
    fnAxeSubPrice(varAxe09Gold,varAxe09Iron,varAxe09Wood,varAxe09Leather,varAxe09Selentine,varAxe09Veilron,varAxe09Neithal,varAxe09Leenspar,varAxe09Theyril,varAxe09YggdrasilLeaf,varAxe09Success)
    varAxe09Price = varItemPrice;
    fnAxeSubPrice(varAxe10Gold,varAxe10Iron,varAxe10Wood,varAxe10Leather,varAxe10Selentine,varAxe10Veilron,varAxe10Neithal,varAxe10Leenspar,varAxe10Theyril,varAxe10YggdrasilLeaf,varAxe10Success)
    varAxe10Price = varItemPrice;
    fnAxeSubPrice(varAxe11Gold,varAxe11Iron,varAxe11Wood,varAxe11Leather,varAxe11Selentine,varAxe11Veilron,varAxe11Neithal,varAxe11Leenspar,varAxe11Theyril,varAxe11YggdrasilLeaf,varAxe11Success)
    varAxe11Price = varItemPrice;
    fnAxeSubPrice(varAxe12Gold,varAxe12Iron,varAxe12Wood,varAxe12Leather,varAxe12Selentine,varAxe12Veilron,varAxe12Neithal,varAxe12Leenspar,varAxe12Theyril,varAxe12YggdrasilLeaf,varAxe12Success)
    varAxe12Price = varItemPrice;
    fnAxeSubPrice(varAxe13Gold,varAxe13Iron,varAxe13Wood,varAxe13Leather,varAxe13Selentine,varAxe13Veilron,varAxe13Neithal,varAxe13Leenspar,varAxe13Theyril,varAxe13YggdrasilLeaf,varAxe13Success)
    varAxe13Price = varItemPrice;
    fnAxeSubPrice(varAxe14Gold,varAxe14Iron,varAxe14Wood,varAxe14Leather,varAxe14Selentine,varAxe14Veilron,varAxe14Neithal,varAxe14Leenspar,varAxe14Theyril,varAxe14YggdrasilLeaf,varAxe14Success)
    varAxe14Price = varItemPrice;
    fnAxeSubPrice(varAxe15Gold,varAxe15Iron,varAxe15Wood,varAxe15Leather,varAxe15Selentine,varAxe15Veilron,varAxe15Neithal,varAxe15Leenspar,varAxe15Theyril,varAxe15YggdrasilLeaf,varAxe15Success)
    varAxe15Price = varItemPrice;
    fnAxeSubPrice(varAxe16Gold,varAxe16Iron,varAxe16Wood,varAxe16Leather,varAxe16Selentine,varAxe16Veilron,varAxe16Neithal,varAxe16Leenspar,varAxe16Theyril,varAxe16YggdrasilLeaf,varAxe16Success)
    varAxe16Price = varItemPrice;
    fnAxeSubPrice(varAxe17Gold,varAxe17Iron,varAxe17Wood,varAxe17Leather,varAxe17Selentine,varAxe17Veilron,varAxe17Neithal,varAxe17Leenspar,varAxe17Theyril,varAxe17YggdrasilLeaf,varAxe17Success)
    varAxe17Price = varItemPrice;
    fnAxeSubPrice(varAxe18Gold,varAxe18Iron,varAxe18Wood,varAxe18Leather,varAxe18Selentine,varAxe18Veilron,varAxe18Neithal,varAxe18Leenspar,varAxe18Theyril,varAxe18YggdrasilLeaf,varAxe18Success)
    varAxe18Price = varItemPrice;
    fnAxeSubPrice(varAxe19Gold,varAxe19Iron,varAxe19Wood,varAxe19Leather,varAxe19Selentine,varAxe19Veilron,varAxe19Neithal,varAxe19Leenspar,varAxe19Theyril,varAxe19YggdrasilLeaf,varAxe19Success)
    varAxe19Price = varItemPrice;
    fnAxeSubPrice(varAxe20Gold,varAxe20Iron,varAxe20Wood,varAxe20Leather,varAxe20Selentine,varAxe20Veilron,varAxe20Neithal,varAxe20Leenspar,varAxe20Theyril,varAxe20YggdrasilLeaf,varAxe20Success)
    varAxe20Price = varItemPrice;
    fnAxeSubPrice(varAxe21Gold,varAxe21Iron,varAxe21Wood,varAxe21Leather,varAxe21Selentine,varAxe21Veilron,varAxe21Neithal,varAxe21Leenspar,varAxe21Theyril,varAxe21YggdrasilLeaf,varAxe21Success)
    varAxe21Price = varItemPrice;
    fnAxeSubPrice(varAxe22Gold,varAxe22Iron,varAxe22Wood,varAxe22Leather,varAxe22Selentine,varAxe22Veilron,varAxe22Neithal,varAxe22Leenspar,varAxe22Theyril,varAxe22YggdrasilLeaf,varAxe22Success)
    varAxe22Price = varItemPrice;
}

function fnReloadAxePrices()
{
    //Axe Prices
    document.getElementById('Axe01Price').value = varAxe01Price;
    document.getElementById('Axe02Price').value = varAxe02Price;
    document.getElementById('Axe03Price').value = varAxe03Price;
    document.getElementById('Axe04Price').value = varAxe04Price;
    document.getElementById('Axe05Price').value = varAxe05Price;
    document.getElementById('Axe06Price').value = varAxe06Price;
    document.getElementById('Axe07Price').value = varAxe07Price;
    document.getElementById('Axe08Price').value = varAxe08Price;
    document.getElementById('Axe09Price').value = varAxe09Price;
    document.getElementById('Axe10Price').value = varAxe10Price;
    document.getElementById('Axe11Price').value = varAxe11Price;
    document.getElementById('Axe12Price').value = varAxe12Price;
    document.getElementById('Axe13Price').value = varAxe13Price;
    document.getElementById('Axe14Price').value = varAxe14Price;
    document.getElementById('Axe15Price').value = varAxe15Price;
    document.getElementById('Axe16Price').value = varAxe16Price;
    document.getElementById('Axe17Price').value = varAxe17Price;
    document.getElementById('Axe18Price').value = varAxe18Price;
    document.getElementById('Axe19Price').value = varAxe19Price;
    document.getElementById('Axe20Price').value = varAxe20Price;
    document.getElementById('Axe21Price').value = varAxe21Price;
    document.getElementById('Axe22Price').value = varAxe22Price;

    //Axe Total Prices
    document.getElementById('AxeTotal').value = varAxeTotal;
    document.getElementById('AxeGoldTotal').value = varAxeGoldTotal;
    document.getElementById('AxeIronTotal').value = varAxeIronTotal;
    document.getElementById('AxeWoodTotal').value = varAxeWoodTotal;
    document.getElementById('AxeLeatherTotal').value = varAxeLeatherTotal;
    document.getElementById('AxeSelentineTotal').value = varAxeSelentineTotal;
    document.getElementById('AxeVeilronTotal').value = varAxeVeilronTotal;
    document.getElementById('AxeNeithalTotal').value = varAxeNeithalTotal;
    document.getElementById('AxeLeensparTotal').value = varAxeLeensparTotal;
    document.getElementById('AxeTheyrilTotal').value = varAxeTheyrilTotal;
    document.getElementById('AxeYggdrasilLeafTotal').value = varAxeYggdrasilLeafTotal;
}

function fnAxeInitialize()
{
    varAxeTotal = document.getElementById("AxeTotal").value;
    varAxeGoldTotal = document.getElementById("AxeGoldTotal").value;
    varAxeIronTotal = document.getElementById("AxeIronTotal").value;
    varAxeWoodTotal = document.getElementById("AxeWoodTotal").value;
    varAxeLeatherTotal = document.getElementById("AxeLeatherTotal").value;
    varAxeSelentineTotal = document.getElementById("AxeSelentineTotal").value;
    varAxeVeilronTotal = document.getElementById("AxeVeilronTotal").value;
    varAxeNeithalTotal = document.getElementById("AxeNeithalTotal").value;
    varAxeLeensparTotal = document.getElementById("AxeLeensparTotal").value;
    varAxeTheyrilTotal = document.getElementById("AxeTheyrilTotal").value;
    varAxeYggdrasilLeafTotal = document.getElementById("AxeYggdrasilLeafTotal").value;

    // *** Axe VARIABLES ***
	//Cleaver
    varAxe01Quantity = document.getElementById("Axe01Quantity").value;
    varAxe01Price = document.getElementById("Axe01Price").value;
    varAxe01Success = document.getElementById("Axe01Success").value;
    varAxe01Gold = 0
    varAxe01Iron = 2
    varAxe01Wood = 2
    varAxe01Leather = 0
    varAxe01Selentine = 0
    varAxe01Veilron = 0
    varAxe01Neithal = 0
    varAxe01Leenspar = 0
    varAxe01Theyril = 0
    varAxe01YggdrasilLeaf = 0
	//Goblin Axe
    varAxe02Quantity = document.getElementById("Axe02Quantity").value;
    varAxe02Price = document.getElementById("Axe02Price").value;
    varAxe02Success = document.getElementById("Axe02Success").value;
    varAxe02Gold = 0
    varAxe02Iron = 2
    varAxe02Wood = 2
    varAxe02Leather = 0
    varAxe02Selentine = 0
    varAxe02Veilron = 0
    varAxe02Neithal = 0
    varAxe02Leenspar = 0
    varAxe02Theyril = 0
    varAxe02YggdrasilLeaf = 0
	//Hatchet
    varAxe03Quantity = document.getElementById("Axe03Quantity").value;
    varAxe03Price = document.getElementById("Axe03Price").value;
    varAxe03Success = document.getElementById("Axe03Success").value;
    varAxe03Gold = 10
    varAxe03Iron = 3
    varAxe03Wood = 3
    varAxe03Leather = 0
    varAxe03Selentine = 0
    varAxe03Veilron = 0
    varAxe03Neithal = 0
    varAxe03Leenspar = 0
    varAxe03Theyril = 0
    varAxe03YggdrasilLeaf = 0
	//Sagaris
    varAxe04Quantity = document.getElementById("Axe04Quantity").value;
    varAxe04Price = document.getElementById("Axe04Price").value;
    varAxe04Success = document.getElementById("Axe04Success").value;
    varAxe04Gold = 10
    varAxe04Iron = 3
    varAxe04Wood = 3
    varAxe04Leather = 0
    varAxe04Selentine = 0
    varAxe04Veilron = 0
    varAxe04Neithal = 0
    varAxe04Leenspar = 0
    varAxe04Theyril = 0
    varAxe04YggdrasilLeaf = 0
	//Handaxe
    varAxe05Quantity = document.getElementById("Axe05Quantity").value;
    varAxe05Price = document.getElementById("Axe05Price").value;
    varAxe05Success = document.getElementById("Axe05Success").value;
    varAxe05Gold = 20
    varAxe05Iron = 4
    varAxe05Wood = 4
    varAxe05Leather = 0
    varAxe05Selentine = 0
    varAxe05Veilron = 0
    varAxe05Neithal = 0
    varAxe05Leenspar = 0
    varAxe05Theyril = 0
    varAxe05YggdrasilLeaf = 0
	//Serpent's Kiss
    varAxe06Quantity = document.getElementById("Axe06Quantity").value;
    varAxe06Price = document.getElementById("Axe06Price").value;
    varAxe06Success = document.getElementById("Axe06Success").value;
    varAxe06Gold = 20
    varAxe06Iron = 4
    varAxe06Wood = 4
    varAxe06Leather = 0
    varAxe06Selentine = 0
    varAxe06Veilron = 0
    varAxe06Neithal = 0
    varAxe06Leenspar = 0
    varAxe06Theyril = 0
    varAxe06YggdrasilLeaf = 0
	//Svartdvergir Pickaxe
    varAxe07Quantity = document.getElementById("Axe07Quantity").value;
    varAxe07Price = document.getElementById("Axe07Price").value;
    varAxe07Success = document.getElementById("Axe07Success").value;
    varAxe07Gold = 20
    varAxe07Iron = 5
    varAxe07Wood = 3
    varAxe07Leather = 0
    varAxe07Selentine = 0
    varAxe07Veilron = 0
    varAxe07Neithal = 0
    varAxe07Leenspar = 0
    varAxe07Theyril = 0
    varAxe07YggdrasilLeaf = 0
	//Scorpio
    varAxe08Quantity = document.getElementById("Axe08Quantity").value;
    varAxe08Price = document.getElementById("Axe08Price").value;
    varAxe08Success = document.getElementById("Axe08Success").value;
    varAxe08Gold = 35
    varAxe08Iron = 5
    varAxe08Wood = 6
    varAxe08Leather = 3
    varAxe08Selentine = 0
    varAxe08Veilron = 0
    varAxe08Neithal = 0
    varAxe08Leenspar = 0
    varAxe08Theyril = 0
    varAxe08YggdrasilLeaf = 0
	//Revenant Axe
    varAxe09Quantity = document.getElementById("Axe09Quantity").value;
    varAxe09Price = document.getElementById("Axe09Price").value;
    varAxe09Success = document.getElementById("Axe09Success").value;
    varAxe09Gold = 35
    varAxe09Iron = 6
    varAxe09Wood = 6
    varAxe09Leather = 0
    varAxe09Selentine = 0
    varAxe09Veilron = 0
    varAxe09Neithal = 0
    varAxe09Leenspar = 0
    varAxe09Theyril = 0
    varAxe09YggdrasilLeaf = 0
	//War Pick
    varAxe10Quantity = document.getElementById("Axe10Quantity").value;
    varAxe10Price = document.getElementById("Axe10Price").value;
    varAxe10Success = document.getElementById("Axe10Success").value;
    varAxe10Gold = 35
    varAxe10Iron = 6
    varAxe10Wood = 6
    varAxe10Leather = 0
    varAxe10Selentine = 0
    varAxe10Veilron = 0
    varAxe10Neithal = 0
    varAxe10Leenspar = 0
    varAxe10Theyril = 0
    varAxe10YggdrasilLeaf = 0
	//Mercian Handaxe
    varAxe11Quantity = document.getElementById("Axe11Quantity").value;
    varAxe11Price = document.getElementById("Axe11Price").value;
    varAxe11Success = document.getElementById("Axe11Success").value;
    varAxe11Gold = 80
    varAxe11Iron = 10
    varAxe11Wood = 8
    varAxe11Leather = 0
    varAxe11Selentine = 0
    varAxe11Veilron = 0
    varAxe11Neithal = 0
    varAxe11Leenspar = 0
    varAxe11Theyril = 0
    varAxe11YggdrasilLeaf = 0
	//Mirdain Handaxe
    varAxe12Quantity = document.getElementById("Axe12Quantity").value;
    varAxe12Price = document.getElementById("Axe12Price").value;
    varAxe12Success = document.getElementById("Axe12Success").value;
    varAxe12Gold = 80
    varAxe12Iron = 6
    varAxe12Wood = 12
    varAxe12Leather = 0
    varAxe12Selentine = 0
    varAxe12Veilron = 0
    varAxe12Neithal = 0
    varAxe12Leenspar = 0
    varAxe12Theyril = 0
    varAxe12YggdrasilLeaf = 0
	//Dwarven Equalizer
    varAxe13Quantity = document.getElementById("Axe13Quantity").value;
    varAxe13Price = document.getElementById("Axe13Price").value;
    varAxe13Success = document.getElementById("Axe13Success").value;
    varAxe13Gold = 80
    varAxe13Iron = 14
    varAxe13Wood = 4
    varAxe13Leather = 0
    varAxe13Selentine = 0
    varAxe13Veilron = 0
    varAxe13Neithal = 0
    varAxe13Leenspar = 0
    varAxe13Theyril = 0
    varAxe13YggdrasilLeaf = 0
	//Moon Axe
    varAxe14Quantity = document.getElementById("Axe14Quantity").value;
    varAxe14Price = document.getElementById("Axe14Price").value;
    varAxe14Success = document.getElementById("Axe14Success").value;
    varAxe14Gold = 80
    varAxe14Iron = 14
    varAxe14Wood = 4
    varAxe14Leather = 0
    varAxe14Selentine = 0
    varAxe14Veilron = 0
    varAxe14Neithal = 0
    varAxe14Leenspar = 0
    varAxe14Theyril = 0
    varAxe14YggdrasilLeaf = 0
	//Orkish Troublemaker
    varAxe15Quantity = document.getElementById("Axe15Quantity").value;
    varAxe15Price = document.getElementById("Axe15Price").value;
    varAxe15Success = document.getElementById("Axe15Success").value;
    varAxe15Gold = 80
    varAxe15Iron = 11
    varAxe15Wood = 7
    varAxe15Leather = 0
    varAxe15Selentine = 0
    varAxe15Veilron = 0
    varAxe15Neithal = 0
    varAxe15Leenspar = 0
    varAxe15Theyril = 0
    varAxe15YggdrasilLeaf = 0
	//Alfar Mutilator
    varAxe16Quantity = document.getElementById("Axe16Quantity").value;
    varAxe16Price = document.getElementById("Axe16Price").value;
    varAxe16Success = document.getElementById("Axe16Success").value;
    varAxe16Gold = 80
    varAxe16Iron = 14
    varAxe16Wood = 4
    varAxe16Leather = 0
    varAxe16Selentine = 0
    varAxe16Veilron = 0
    varAxe16Neithal = 0
    varAxe16Leenspar = 0
    varAxe16Theyril = 0
    varAxe16YggdrasilLeaf = 0
	//Gloomblade
    varAxe17Quantity = document.getElementById("Axe17Quantity").value;
    varAxe17Price = document.getElementById("Axe17Price").value;
    varAxe17Success = document.getElementById("Axe17Success").value;
    varAxe17Gold = 80
    varAxe17Iron = 10
    varAxe17Wood = 8
    varAxe17Leather = 0
    varAxe17Selentine = 0
    varAxe17Veilron = 0
    varAxe17Neithal = 0
    varAxe17Leenspar = 0
    varAxe17Theyril = 0
    varAxe17YggdrasilLeaf = 0
	//Anathema
    varAxe18Quantity = document.getElementById("Axe18Quantity").value;
    varAxe18Price = document.getElementById("Axe18Price").value;
    varAxe18Success = document.getElementById("Axe18Success").value;
    varAxe18Gold = 125
    varAxe18Iron = 6
    varAxe18Wood = 3
    varAxe18Leather = 2
    varAxe18Selentine = 0
    varAxe18Veilron = 0
    varAxe18Neithal = 0
    varAxe18Leenspar = 1
    varAxe18Theyril = 0
    varAxe18YggdrasilLeaf = 0
	//Terror
    varAxe19Quantity = document.getElementById("Axe19Quantity").value;
    varAxe19Price = document.getElementById("Axe19Price").value;
    varAxe19Success = document.getElementById("Axe19Success").value;
    varAxe19Gold = 125
    varAxe19Iron = 9
    varAxe19Wood = 0
    varAxe19Leather = 2
    varAxe19Selentine = 0
    varAxe19Veilron = 0
    varAxe19Neithal = 1
    varAxe19Leenspar = 0
    varAxe19Theyril = 0
    varAxe19YggdrasilLeaf = 0
	//Ymirsbane
    varAxe20Quantity = document.getElementById("Axe20Quantity").value;
    varAxe20Price = document.getElementById("Axe20Price").value;
    varAxe20Success = document.getElementById("Axe20Success").value;
    varAxe20Gold = 200
    varAxe20Iron = 8
    varAxe20Wood = 7
    varAxe20Leather = 0
    varAxe20Selentine = 1
    varAxe20Veilron = 1
    varAxe20Neithal = 0
    varAxe20Leenspar = 0
    varAxe20Theyril = 0
    varAxe20YggdrasilLeaf = 0
	//Orthus
    varAxe21Quantity = document.getElementById("Axe21Quantity").value;
    varAxe21Price = document.getElementById("Axe21Price").value;
    varAxe21Success = document.getElementById("Axe21Success").value;
    varAxe21Gold = 100
    varAxe21Iron = 8
    varAxe21Wood = 0
    varAxe21Leather = 0
    varAxe21Selentine = 0
    varAxe21Veilron = 0
    varAxe21Neithal = 0
    varAxe21Leenspar = 1
    varAxe21Theyril = 1
    varAxe21YggdrasilLeaf = 0
	//Locust
    varAxe22Quantity = document.getElementById("Axe22Quantity").value;
    varAxe22Price = document.getElementById("Axe22Price").value;
    varAxe22Success = document.getElementById("Axe22Success").value;
    varAxe22Gold = 4000
    varAxe22Iron = 0
    varAxe22Wood = 10
    varAxe22Leather = 0
    varAxe22Selentine = 0
    varAxe22Veilron = 0
    varAxe22Neithal = 2
    varAxe22Leenspar = 2
    varAxe22Theyril = 0
    varAxe22YggdrasilLeaf = 3
}

/* CLUB */

//Used to reload items from Club
function fnClubReload()  // x= id, z= value
{
    fnClubInitialize()

    fnClub()

    fnClubTotal()
    fnReloadClubPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnClubSubPrice(a,b,c,d,e,f,g,h,i,j,k,l) // a=Gold, b=Iron, c=Wood, d=Leather, e=Selentine, f=Veilron, g=Neithal, h=Leenspar, i=Theyril, j=Emerald, k=Vortex Rune, l=Success Rate
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varLeenspar = parseInt(h)
    varTheyril = parseInt(i)
    varEmerald = parseInt(j)
    varVortexRune = parseInt(k)
    varSuccess = parseInt(l)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varEmerald * varEmeraldValue) + (varVortexRune * varVortexRuneValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Club
function fnClubTotal()
{
    varClubTotal = ((varClub01Price * varClub01Quantity) + (varClub02Price * varClub02Quantity) + (varClub03Price * varClub03Quantity) + (varClub04Price * varClub04Quantity) + (varClub05Price * varClub05Quantity) + (varClub06Price * varClub06Quantity) + (varClub07Price * varClub07Quantity) + (varClub08Price * varClub08Quantity) + (varClub09Price * varClub09Quantity) + (varClub10Price * varClub10Quantity) + (varClub11Price * varClub11Quantity) + (varClub12Price * varClub12Quantity) + (varClub13Price * varClub13Quantity) + (varClub14Price * varClub14Quantity) + (varClub15Price * varClub15Quantity) + (varClub16Price * varClub16Quantity) + (varClub17Price * varClub17Quantity) + (varClub18Price * varClub18Quantity) + (varClub19Price * varClub19Quantity) + (varClub20Price * varClub20Quantity));
    varClubGoldTotal = ((varClub01Gold * varClub01Quantity) + (varClub02Gold * varClub02Quantity) + (varClub03Gold * varClub03Quantity) + (varClub04Gold * varClub04Quantity) + (varClub05Gold * varClub05Quantity) + (varClub06Gold * varClub06Quantity) + (varClub07Gold * varClub07Quantity) + (varClub08Gold * varClub08Quantity) + (varClub09Gold * varClub09Quantity) + (varClub10Gold * varClub10Quantity) + (varClub11Gold * varClub11Quantity) + (varClub12Gold * varClub12Quantity) + (varClub13Gold * varClub13Quantity) + (varClub14Gold * varClub14Quantity) + (varClub15Gold * varClub15Quantity) + (varClub16Gold * varClub16Quantity) + (varClub17Gold * varClub17Quantity) + (varClub18Gold * varClub18Quantity) + (varClub19Gold * varClub19Quantity) + (varClub20Gold * varClub20Quantity));
    varClubIronTotal = ((varClub01Iron * varClub01Quantity) + (varClub02Iron * varClub02Quantity) + (varClub03Iron * varClub03Quantity) + (varClub04Iron * varClub04Quantity) + (varClub05Iron * varClub05Quantity) + (varClub06Iron * varClub06Quantity) + (varClub07Iron * varClub07Quantity) + (varClub08Iron * varClub08Quantity) + (varClub09Iron * varClub09Quantity) + (varClub10Iron * varClub10Quantity) + (varClub11Iron * varClub11Quantity) + (varClub12Iron * varClub12Quantity) + (varClub13Iron * varClub13Quantity) + (varClub14Iron * varClub14Quantity) + (varClub15Iron * varClub15Quantity) + (varClub16Iron * varClub16Quantity) + (varClub17Iron * varClub17Quantity) + (varClub18Iron * varClub18Quantity) + (varClub19Iron * varClub19Quantity) + (varClub20Iron * varClub20Quantity));
    varClubWoodTotal = ((varClub01Wood * varClub01Quantity) + (varClub02Wood * varClub02Quantity) + (varClub03Wood * varClub03Quantity) + (varClub04Wood * varClub04Quantity) + (varClub05Wood * varClub05Quantity) + (varClub06Wood * varClub06Quantity) + (varClub07Wood * varClub07Quantity) + (varClub08Wood * varClub08Quantity) + (varClub09Wood * varClub09Quantity) + (varClub10Wood * varClub10Quantity) + (varClub11Wood * varClub11Quantity) + (varClub12Wood * varClub12Quantity) + (varClub13Wood * varClub13Quantity) + (varClub14Wood * varClub14Quantity) + (varClub15Wood * varClub15Quantity) + (varClub16Wood * varClub16Quantity) + (varClub17Wood * varClub17Quantity) + (varClub18Wood * varClub18Quantity) + (varClub19Wood * varClub19Quantity) + (varClub20Wood * varClub20Quantity));
    varClubLeatherTotal = ((varClub01Leather * varClub01Quantity) + (varClub02Leather * varClub02Quantity) + (varClub03Leather * varClub03Quantity) + (varClub04Leather * varClub04Quantity) + (varClub05Leather * varClub05Quantity) + (varClub06Leather * varClub06Quantity) + (varClub07Leather * varClub07Quantity) + (varClub08Leather * varClub08Quantity) + (varClub09Leather * varClub09Quantity) + (varClub10Leather * varClub10Quantity) + (varClub11Leather * varClub11Quantity) + (varClub12Leather * varClub12Quantity) + (varClub13Leather * varClub13Quantity) + (varClub14Leather * varClub14Quantity) + (varClub15Leather * varClub15Quantity) + (varClub16Leather * varClub16Quantity) + (varClub17Leather * varClub17Quantity) + (varClub18Leather * varClub18Quantity) + (varClub19Leather * varClub19Quantity) + (varClub20Leather * varClub20Quantity));
    varClubSelentineTotal = ((varClub01Selentine * varClub01Quantity) + (varClub02Selentine * varClub02Quantity) + (varClub03Selentine * varClub03Quantity) + (varClub04Selentine * varClub04Quantity) + (varClub05Selentine * varClub05Quantity) + (varClub06Selentine * varClub06Quantity) + (varClub07Selentine * varClub07Quantity) + (varClub08Selentine * varClub08Quantity) + (varClub09Selentine * varClub09Quantity) + (varClub10Selentine * varClub10Quantity) + (varClub11Selentine * varClub11Quantity) + (varClub12Selentine * varClub12Quantity) + (varClub13Selentine * varClub13Quantity) + (varClub14Selentine * varClub14Quantity) + (varClub15Selentine * varClub15Quantity) + (varClub16Selentine * varClub16Quantity) + (varClub17Selentine * varClub17Quantity) + (varClub18Selentine * varClub18Quantity) + (varClub19Selentine * varClub19Quantity) + (varClub20Selentine * varClub20Quantity));
    varClubVeilronTotal = ((varClub01Veilron * varClub01Quantity) + (varClub02Veilron * varClub02Quantity) + (varClub03Veilron * varClub03Quantity) + (varClub04Veilron * varClub04Quantity) + (varClub05Veilron * varClub05Quantity) + (varClub06Veilron * varClub06Quantity) + (varClub07Veilron * varClub07Quantity) + (varClub08Veilron * varClub08Quantity) + (varClub09Veilron * varClub09Quantity) + (varClub10Veilron * varClub10Quantity) + (varClub11Veilron * varClub11Quantity) + (varClub12Veilron * varClub12Quantity) + (varClub13Veilron * varClub13Quantity) + (varClub14Veilron * varClub14Quantity) + (varClub15Veilron * varClub15Quantity) + (varClub16Veilron * varClub16Quantity) + (varClub17Veilron * varClub17Quantity) + (varClub18Veilron * varClub18Quantity) + (varClub19Veilron * varClub19Quantity) + (varClub20Veilron * varClub20Quantity));
    varClubNeithalTotal = ((varClub01Neithal * varClub01Quantity) + (varClub02Neithal * varClub02Quantity) + (varClub03Neithal * varClub03Quantity) + (varClub04Neithal * varClub04Quantity) + (varClub05Neithal * varClub05Quantity) + (varClub06Neithal * varClub06Quantity) + (varClub07Neithal * varClub07Quantity) + (varClub08Neithal * varClub08Quantity) + (varClub09Neithal * varClub09Quantity) + (varClub10Neithal * varClub10Quantity) + (varClub11Neithal * varClub11Quantity) + (varClub12Neithal * varClub12Quantity) + (varClub13Neithal * varClub13Quantity) + (varClub14Neithal * varClub14Quantity) + (varClub15Neithal * varClub15Quantity) + (varClub16Neithal * varClub16Quantity) + (varClub17Neithal * varClub17Quantity) + (varClub18Neithal * varClub18Quantity) + (varClub19Neithal * varClub19Quantity) + (varClub20Neithal * varClub20Quantity));
    varClubLeensparTotal = ((varClub01Leenspar * varClub01Quantity) + (varClub02Leenspar * varClub02Quantity) + (varClub03Leenspar * varClub03Quantity) + (varClub04Leenspar * varClub04Quantity) + (varClub05Leenspar * varClub05Quantity) + (varClub06Leenspar * varClub06Quantity) + (varClub07Leenspar * varClub07Quantity) + (varClub08Leenspar * varClub08Quantity) + (varClub09Leenspar * varClub09Quantity) + (varClub10Leenspar * varClub10Quantity) + (varClub11Leenspar * varClub11Quantity) + (varClub12Leenspar * varClub12Quantity) + (varClub13Leenspar * varClub13Quantity) + (varClub14Leenspar * varClub14Quantity) + (varClub15Leenspar * varClub15Quantity) + (varClub16Leenspar * varClub16Quantity) + (varClub17Leenspar * varClub17Quantity) + (varClub18Leenspar * varClub18Quantity) + (varClub19Leenspar * varClub19Quantity) + (varClub20Leenspar * varClub20Quantity));
    varClubTheyrilTotal = ((varClub01Theyril * varClub01Quantity) + (varClub02Theyril * varClub02Quantity) + (varClub03Theyril * varClub03Quantity) + (varClub04Theyril * varClub04Quantity) + (varClub05Theyril * varClub05Quantity) + (varClub06Theyril * varClub06Quantity) + (varClub07Theyril * varClub07Quantity) + (varClub08Theyril * varClub08Quantity) + (varClub09Theyril * varClub09Quantity) + (varClub10Theyril * varClub10Quantity) + (varClub11Theyril * varClub11Quantity) + (varClub12Theyril * varClub12Quantity) + (varClub13Theyril * varClub13Quantity) + (varClub14Theyril * varClub14Quantity) + (varClub15Theyril * varClub15Quantity) + (varClub16Theyril * varClub16Quantity) + (varClub17Theyril * varClub17Quantity) + (varClub18Theyril * varClub18Quantity) + (varClub19Theyril * varClub19Quantity) + (varClub20Theyril * varClub20Quantity));
    varClubEmeraldTotal = ((varClub01Emerald * varClub01Quantity) + (varClub02Emerald * varClub02Quantity) + (varClub03Emerald * varClub03Quantity) + (varClub04Emerald * varClub04Quantity) + (varClub05Emerald * varClub05Quantity) + (varClub06Emerald * varClub06Quantity) + (varClub07Emerald * varClub07Quantity) + (varClub08Emerald * varClub08Quantity) + (varClub09Emerald * varClub09Quantity) + (varClub10Emerald * varClub10Quantity) + (varClub11Emerald * varClub11Quantity) + (varClub12Emerald * varClub12Quantity) + (varClub13Emerald * varClub13Quantity) + (varClub14Emerald * varClub14Quantity) + (varClub15Emerald * varClub15Quantity) + (varClub16Emerald * varClub16Quantity) + (varClub17Emerald * varClub17Quantity) + (varClub18Emerald * varClub18Quantity) + (varClub19Emerald * varClub19Quantity) + (varClub20Emerald * varClub20Quantity));
    varClubVortexRuneTotal = ((varClub01VortexRune * varClub01Quantity) + (varClub02VortexRune * varClub02Quantity) + (varClub03VortexRune * varClub03Quantity) + (varClub04VortexRune * varClub04Quantity) + (varClub05VortexRune * varClub05Quantity) + (varClub06VortexRune * varClub06Quantity) + (varClub07VortexRune * varClub07Quantity) + (varClub08VortexRune * varClub08Quantity) + (varClub09VortexRune * varClub09Quantity) + (varClub10VortexRune * varClub10Quantity) + (varClub11VortexRune * varClub11Quantity) + (varClub12VortexRune * varClub12Quantity) + (varClub13VortexRune * varClub13Quantity) + (varClub14VortexRune * varClub14Quantity) + (varClub15VortexRune * varClub15Quantity) + (varClub16VortexRune * varClub16Quantity) + (varClub17VortexRune * varClub17Quantity) + (varClub18VortexRune * varClub18Quantity) + (varClub19VortexRune * varClub19Quantity) + (varClub20VortexRune * varClub20Quantity));
}

//Club Calculations
function fnClub()
{
    fnClubSubPrice(varClub01Gold,varClub01Iron,varClub01Wood,varClub01Leather,varClub01Selentine,varClub01Veilron,varClub01Neithal,varClub01Leenspar,varClub01Theyril,varClub01Emerald,varClub01VortexRune,varClub01Success)
    varClub01Price = varItemPrice;
    fnClubSubPrice(varClub02Gold,varClub02Iron,varClub02Wood,varClub02Leather,varClub02Selentine,varClub02Veilron,varClub02Neithal,varClub02Leenspar,varClub02Theyril,varClub02Emerald,varClub02VortexRune,varClub02Success)
    varClub02Price = varItemPrice;
    fnClubSubPrice(varClub03Gold,varClub03Iron,varClub03Wood,varClub03Leather,varClub03Selentine,varClub03Veilron,varClub03Neithal,varClub03Leenspar,varClub03Theyril,varClub03Emerald,varClub03VortexRune,varClub03Success)
    varClub03Price = varItemPrice;
    fnClubSubPrice(varClub04Gold,varClub04Iron,varClub04Wood,varClub04Leather,varClub04Selentine,varClub04Veilron,varClub04Neithal,varClub04Leenspar,varClub04Theyril,varClub04Emerald,varClub04VortexRune,varClub04Success)
    varClub04Price = varItemPrice;
    fnClubSubPrice(varClub05Gold,varClub05Iron,varClub05Wood,varClub05Leather,varClub05Selentine,varClub05Veilron,varClub05Neithal,varClub05Leenspar,varClub05Theyril,varClub05Emerald,varClub05VortexRune,varClub05Success)
    varClub05Price = varItemPrice;
    fnClubSubPrice(varClub06Gold,varClub06Iron,varClub06Wood,varClub06Leather,varClub06Selentine,varClub06Veilron,varClub06Neithal,varClub06Leenspar,varClub06Theyril,varClub06Emerald,varClub06VortexRune,varClub06Success)
    varClub06Price = varItemPrice;
    fnClubSubPrice(varClub07Gold,varClub07Iron,varClub07Wood,varClub07Leather,varClub07Selentine,varClub07Veilron,varClub07Neithal,varClub07Leenspar,varClub07Theyril,varClub07Emerald,varClub07VortexRune,varClub07Success)
    varClub07Price = varItemPrice;
    fnClubSubPrice(varClub08Gold,varClub08Iron,varClub08Wood,varClub08Leather,varClub08Selentine,varClub08Veilron,varClub08Neithal,varClub08Leenspar,varClub08Theyril,varClub08Emerald,varClub08VortexRune,varClub08Success)
    varClub08Price = varItemPrice;
    fnClubSubPrice(varClub09Gold,varClub09Iron,varClub09Wood,varClub09Leather,varClub09Selentine,varClub09Veilron,varClub09Neithal,varClub09Leenspar,varClub09Theyril,varClub09Emerald,varClub09VortexRune,varClub09Success)
    varClub09Price = varItemPrice;
    fnClubSubPrice(varClub10Gold,varClub10Iron,varClub10Wood,varClub10Leather,varClub10Selentine,varClub10Veilron,varClub10Neithal,varClub10Leenspar,varClub10Theyril,varClub10Emerald,varClub10VortexRune,varClub10Success)
    varClub10Price = varItemPrice;
    fnClubSubPrice(varClub11Gold,varClub11Iron,varClub11Wood,varClub11Leather,varClub11Selentine,varClub11Veilron,varClub11Neithal,varClub11Leenspar,varClub11Theyril,varClub11Emerald,varClub11VortexRune,varClub11Success)
    varClub11Price = varItemPrice;
    fnClubSubPrice(varClub12Gold,varClub12Iron,varClub12Wood,varClub12Leather,varClub12Selentine,varClub12Veilron,varClub12Neithal,varClub12Leenspar,varClub12Theyril,varClub12Emerald,varClub12VortexRune,varClub12Success)
    varClub12Price = varItemPrice;
    fnClubSubPrice(varClub13Gold,varClub13Iron,varClub13Wood,varClub13Leather,varClub13Selentine,varClub13Veilron,varClub13Neithal,varClub13Leenspar,varClub13Theyril,varClub13Emerald,varClub13VortexRune,varClub13Success)
    varClub13Price = varItemPrice;
    fnClubSubPrice(varClub14Gold,varClub14Iron,varClub14Wood,varClub14Leather,varClub14Selentine,varClub14Veilron,varClub14Neithal,varClub14Leenspar,varClub14Theyril,varClub14Emerald,varClub14VortexRune,varClub14Success)
    varClub14Price = varItemPrice;
    fnClubSubPrice(varClub15Gold,varClub15Iron,varClub15Wood,varClub15Leather,varClub15Selentine,varClub15Veilron,varClub15Neithal,varClub15Leenspar,varClub15Theyril,varClub15Emerald,varClub15VortexRune,varClub15Success)
    varClub15Price = varItemPrice;
    fnClubSubPrice(varClub16Gold,varClub16Iron,varClub16Wood,varClub16Leather,varClub16Selentine,varClub16Veilron,varClub16Neithal,varClub16Leenspar,varClub16Theyril,varClub16Emerald,varClub16VortexRune,varClub16Success)
    varClub16Price = varItemPrice;
    fnClubSubPrice(varClub17Gold,varClub17Iron,varClub17Wood,varClub17Leather,varClub17Selentine,varClub17Veilron,varClub17Neithal,varClub17Leenspar,varClub17Theyril,varClub17Emerald,varClub17VortexRune,varClub17Success)
    varClub17Price = varItemPrice;
    fnClubSubPrice(varClub18Gold,varClub18Iron,varClub18Wood,varClub18Leather,varClub18Selentine,varClub18Veilron,varClub18Neithal,varClub18Leenspar,varClub18Theyril,varClub18Emerald,varClub18VortexRune,varClub18Success)
    varClub18Price = varItemPrice;
    fnClubSubPrice(varClub19Gold,varClub19Iron,varClub19Wood,varClub19Leather,varClub19Selentine,varClub19Veilron,varClub19Neithal,varClub19Leenspar,varClub19Theyril,varClub19Emerald,varClub19VortexRune,varClub19Success)
    varClub19Price = varItemPrice;
    fnClubSubPrice(varClub20Gold,varClub20Iron,varClub20Wood,varClub20Leather,varClub20Selentine,varClub20Veilron,varClub20Neithal,varClub20Leenspar,varClub20Theyril,varClub20Emerald,varClub20VortexRune,varClub20Success)
    varClub20Price = varItemPrice;
}

function fnReloadClubPrices()
{
    //Club Prices
    document.getElementById('Club01Price').value = varClub01Price;
    document.getElementById('Club02Price').value = varClub02Price;
    document.getElementById('Club03Price').value = varClub03Price;
    document.getElementById('Club04Price').value = varClub04Price;
    document.getElementById('Club05Price').value = varClub05Price;
    document.getElementById('Club06Price').value = varClub06Price;
    document.getElementById('Club07Price').value = varClub07Price;
    document.getElementById('Club08Price').value = varClub08Price;
    document.getElementById('Club09Price').value = varClub09Price;
    document.getElementById('Club10Price').value = varClub10Price;
    document.getElementById('Club11Price').value = varClub11Price;
    document.getElementById('Club12Price').value = varClub12Price;
    document.getElementById('Club13Price').value = varClub13Price;
    document.getElementById('Club14Price').value = varClub14Price;
    document.getElementById('Club15Price').value = varClub15Price;
    document.getElementById('Club16Price').value = varClub16Price;
    document.getElementById('Club17Price').value = varClub17Price;
    document.getElementById('Club18Price').value = varClub18Price;
    document.getElementById('Club19Price').value = varClub19Price;
    document.getElementById('Club20Price').value = varClub20Price;

    //Club Total Prices
    document.getElementById('ClubTotal').value = varClubTotal;
    document.getElementById('ClubGoldTotal').value = varClubGoldTotal;
    document.getElementById('ClubIronTotal').value = varClubIronTotal;
    document.getElementById('ClubWoodTotal').value = varClubWoodTotal;
    document.getElementById('ClubLeatherTotal').value = varClubLeatherTotal;
    document.getElementById('ClubSelentineTotal').value = varClubSelentineTotal;
    document.getElementById('ClubVeilronTotal').value = varClubVeilronTotal;
    document.getElementById('ClubNeithalTotal').value = varClubNeithalTotal;
    document.getElementById('ClubLeensparTotal').value = varClubLeensparTotal;
    document.getElementById('ClubTheyrilTotal').value = varClubTheyrilTotal;
    document.getElementById('ClubEmeraldTotal').value = varClubEmeraldTotal;
    document.getElementById('ClubVortexRuneTotal').value = varClubVortexRuneTotal;
}

function fnClubInitialize()
{
    varClubTotal = document.getElementById("ClubTotal").value;
    varClubGoldTotal = document.getElementById("ClubGoldTotal").value;
    varClubIronTotal = document.getElementById("ClubIronTotal").value;
    varClubWoodTotal = document.getElementById("ClubWoodTotal").value;
    varClubLeatherTotal = document.getElementById("ClubLeatherTotal").value;
    varClubSelentineTotal = document.getElementById("ClubSelentineTotal").value;
    varClubVeilronTotal = document.getElementById("ClubVeilronTotal").value;
    varClubNeithalTotal = document.getElementById("ClubNeithalTotal").value;
    varClubLeensparTotal = document.getElementById("ClubLeensparTotal").value;
    varClubTheyrilTotal = document.getElementById("ClubTheyrilTotal").value;
    varClubEmeraldTotal = document.getElementById("ClubEmeraldTotal").value;
    varClubVortexRuneTotal = document.getElementById("ClubVortexRuneTotal").value;

    // *** Club VARIABLES ***
	//Spiked Club
    varClub01Quantity = document.getElementById("Club01Quantity").value;
    varClub01Price = document.getElementById("Club01Price").value;
    varClub01Success = document.getElementById("Club01Success").value;
    varClub01Gold = 0
    varClub01Iron = 1
    varClub01Wood = 3
    varClub01Leather = 0
    varClub01Selentine = 0
    varClub01Veilron = 0
    varClub01Neithal = 0
    varClub01Leenspar = 0
    varClub01Theyril = 0
    varClub01Emerald = 0
    varClub01VortexRune = 0
	//Gnoll Stomper
    varClub02Quantity = document.getElementById("Club02Quantity").value;
    varClub02Price = document.getElementById("Club02Price").value;
    varClub02Success = document.getElementById("Club02Success").value;
    varClub02Gold = 10
    varClub02Iron = 2
    varClub02Wood = 4
    varClub02Leather = 0
    varClub02Selentine = 0
    varClub02Veilron = 0
    varClub02Neithal = 0
    varClub02Leenspar = 0
    varClub02Theyril = 0
    varClub02Emerald = 0
    varClub02VortexRune = 0
	//Smacker
    varClub03Quantity = document.getElementById("Club03Quantity").value;
    varClub03Price = document.getElementById("Club03Price").value;
    varClub03Success = document.getElementById("Club03Success").value;
    varClub03Gold = 10
    varClub03Iron = 2
    varClub03Wood = 4
    varClub03Leather = 0
    varClub03Selentine = 0
    varClub03Veilron = 0
    varClub03Neithal = 0
    varClub03Leenspar = 0
    varClub03Theyril = 0
    varClub03Emerald = 0
    varClub03VortexRune = 0
	//Large Spiked Club
    varClub04Quantity = document.getElementById("Club04Quantity").value;
    varClub04Price = document.getElementById("Club04Price").value;
    varClub04Success = document.getElementById("Club04Success").value;
    varClub04Gold = 20
    varClub04Iron = 3
    varClub04Wood = 5
    varClub04Leather = 0
    varClub04Selentine = 0
    varClub04Veilron = 0
    varClub04Neithal = 0
    varClub04Leenspar = 0
    varClub04Theyril = 0
    varClub04Emerald = 0
    varClub04VortexRune = 0
	//Punisher
    varClub05Quantity = document.getElementById("Club05Quantity").value;
    varClub05Price = document.getElementById("Club05Price").value;
    varClub05Success = document.getElementById("Club05Success").value;
    varClub05Gold = 20
    varClub05Iron = 0
    varClub05Wood = 8
    varClub05Leather = 0
    varClub05Selentine = 0
    varClub05Veilron = 0
    varClub05Neithal = 0
    varClub05Leenspar = 0
    varClub05Theyril = 0
    varClub05Emerald = 0
    varClub05VortexRune = 0
	//Heavy Spiked Club
    varClub06Quantity = document.getElementById("Club06Quantity").value;
    varClub06Price = document.getElementById("Club06Price").value;
    varClub06Success = document.getElementById("Club06Success").value;
    varClub06Gold = 35
    varClub06Iron = 5
    varClub06Wood = 7
    varClub06Leather = 0
    varClub06Selentine = 0
    varClub06Veilron = 0
    varClub06Neithal = 0
    varClub06Leenspar = 0
    varClub06Theyril = 0
    varClub06Emerald = 0
    varClub06VortexRune = 0
	//Enigma
    varClub07Quantity = document.getElementById("Club07Quantity").value;
    varClub07Price = document.getElementById("Club07Price").value;
    varClub07Success = document.getElementById("Club07Success").value;
    varClub07Gold = 35
    varClub07Iron = 12
    varClub07Wood = 0
    varClub07Leather = 0
    varClub07Selentine = 0
    varClub07Veilron = 0
    varClub07Neithal = 0
    varClub07Leenspar = 0
    varClub07Theyril = 0
    varClub07Emerald = 0
    varClub07VortexRune = 0
	//Bonecrippler
    varClub08Quantity = document.getElementById("Club08Quantity").value;
    varClub08Price = document.getElementById("Club08Price").value;
    varClub08Success = document.getElementById("Club08Success").value;
    varClub08Gold = 80
    varClub08Iron = 6
    varClub08Wood = 10
    varClub08Leather = 2
    varClub08Selentine = 0
    varClub08Veilron = 0
    varClub08Neithal = 0
    varClub08Leenspar = 0
    varClub08Theyril = 0
    varClub08Emerald = 0
    varClub08VortexRune = 0
	//Composite Club
    varClub09Quantity = document.getElementById("Club09Quantity").value;
    varClub09Price = document.getElementById("Club09Price").value;
    varClub09Success = document.getElementById("Club09Success").value;
    varClub09Gold = 80
    varClub09Iron = 9
    varClub09Wood = 8
    varClub09Leather = 0
    varClub09Selentine = 0
    varClub09Veilron = 0
    varClub09Neithal = 0
    varClub09Leenspar = 0
    varClub09Theyril = 0
    varClub09Emerald = 0
    varClub09VortexRune = 0
	//Mercian Mace
    varClub10Quantity = document.getElementById("Club10Quantity").value;
    varClub10Price = document.getElementById("Club10Price").value;
    varClub10Success = document.getElementById("Club10Success").value;
    varClub10Gold = 80
    varClub10Iron = 10
    varClub10Wood = 6
    varClub10Leather = 2
    varClub10Selentine = 0
    varClub10Veilron = 0
    varClub10Neithal = 0
    varClub10Leenspar = 0
    varClub10Theyril = 0
    varClub10Emerald = 0
    varClub10VortexRune = 0
	//Mirdain Mace
    varClub11Quantity = document.getElementById("Club11Quantity").value;
    varClub11Price = document.getElementById("Club11Price").value;
    varClub11Success = document.getElementById("Club11Success").value;
    varClub11Gold = 80
    varClub11Iron = 12
    varClub11Wood = 4
    varClub11Leather = 2
    varClub11Selentine = 0
    varClub11Veilron = 0
    varClub11Neithal = 0
    varClub11Leenspar = 0
    varClub11Theyril = 0
    varClub11Emerald = 0
    varClub11VortexRune = 0
	//Dwarven War Mace
    varClub12Quantity = document.getElementById("Club12Quantity").value;
    varClub12Price = document.getElementById("Club12Price").value;
    varClub12Success = document.getElementById("Club12Success").value;
    varClub12Gold = 80
    varClub12Iron = 12
    varClub12Wood = 4
    varClub12Leather = 2
    varClub12Selentine = 0
    varClub12Veilron = 0
    varClub12Neithal = 0
    varClub12Leenspar = 0
    varClub12Theyril = 0
    varClub12Emerald = 0
    varClub12VortexRune = 0
	//Mahirim Heavy Club
    varClub13Quantity = document.getElementById("Club13Quantity").value;
    varClub13Price = document.getElementById("Club13Price").value;
    varClub13Success = document.getElementById("Club13Success").value;
    varClub13Gold = 80
    varClub13Iron = 2
    varClub13Wood = 12
    varClub13Leather = 4
    varClub13Selentine = 0
    varClub13Veilron = 0
    varClub13Neithal = 0
    varClub13Leenspar = 0
    varClub13Theyril = 0
    varClub13Emerald = 0
    varClub13VortexRune = 0
	//Orkish Clubber
    varClub14Quantity = document.getElementById("Club14Quantity").value;
    varClub14Price = document.getElementById("Club14Price").value;
    varClub14Success = document.getElementById("Club14Success").value;
    varClub14Gold = 80
    varClub14Iron = 16
    varClub14Wood = 0
    varClub14Leather = 2
    varClub14Selentine = 0
    varClub14Veilron = 0
    varClub14Neithal = 0
    varClub14Leenspar = 0
    varClub14Theyril = 0
    varClub14Emerald = 0
    varClub14VortexRune = 0
	//Alfar Mace
    varClub15Quantity = document.getElementById("Club15Quantity").value;
    varClub15Price = document.getElementById("Club15Price").value;
    varClub15Success = document.getElementById("Club15Success").value;
    varClub15Gold = 80
    varClub15Iron = 10
    varClub15Wood = 6
    varClub15Leather = 2
    varClub15Selentine = 0
    varClub15Veilron = 0
    varClub15Neithal = 0
    varClub15Leenspar = 0
    varClub15Theyril = 0
    varClub15Emerald = 0
    varClub15VortexRune = 0
	//Cudgel
    varClub16Quantity = document.getElementById("Club16Quantity").value;
    varClub16Price = document.getElementById("Club16Price").value;
    varClub16Success = document.getElementById("Club16Success").value;
    varClub16Gold = 125
    varClub16Iron = 4
    varClub16Wood = 5
    varClub16Leather = 2
    varClub16Selentine = 0
    varClub16Veilron = 1
    varClub16Neithal = 0
    varClub16Leenspar = 0
    varClub16Theyril = 0
    varClub16Emerald = 0
    varClub16VortexRune = 0
	//Manus Dei
    varClub17Quantity = document.getElementById("Club17Quantity").value;
    varClub17Price = document.getElementById("Club17Price").value;
    varClub17Success = document.getElementById("Club17Success").value;
    varClub17Gold = 125
    varClub17Iron = 9
    varClub17Wood = 0
    varClub17Leather = 0
    varClub17Selentine = 0
    varClub17Veilron = 0
    varClub17Neithal = 0
    varClub17Leenspar = 1
    varClub17Theyril = 0
    varClub17Emerald = 0
    varClub17VortexRune = 0
	//Heavy War Club
    varClub18Quantity = document.getElementById("Club18Quantity").value;
    varClub18Price = document.getElementById("Club18Price").value;
    varClub18Success = document.getElementById("Club18Success").value;
    varClub18Gold = 100
    varClub18Iron = 3
    varClub18Wood = 4
    varClub18Leather = 0
    varClub18Selentine = 0
    varClub18Veilron = 0
    varClub18Neithal = 1
    varClub18Leenspar = 0
    varClub18Theyril = 1
    varClub18Emerald = 0
    varClub18VortexRune = 0
	//Spirit Club
    varClub19Quantity = document.getElementById("Club19Quantity").value;
    varClub19Price = document.getElementById("Club19Price").value;
    varClub19Success = document.getElementById("Club19Success").value;
    varClub19Gold = 100
    varClub19Iron = 0
    varClub19Wood = 6
    varClub19Leather = 0
    varClub19Selentine = 1
    varClub19Veilron = 0
    varClub19Neithal = 0
    varClub19Leenspar = 1
    varClub19Theyril = 0
    varClub19Emerald = 2
    varClub19VortexRune = 0
	//Mjolner
    varClub20Quantity = document.getElementById("Club20Quantity").value;
    varClub20Price = document.getElementById("Club20Price").value;
    varClub20Success = document.getElementById("Club20Success").value;
    varClub20Gold = 4000
    varClub20Iron = 10
    varClub20Wood = 0
    varClub20Leather = 0
    varClub20Selentine = 3
    varClub20Veilron = 1
    varClub20Neithal = 0
    varClub20Leenspar = 0
    varClub20Theyril = 0
    varClub20Emerald = 0
    varClub20VortexRune = 3
}

/* GREATAXE */

//Used to reload items from Greataxe
function fnGreataxeReload()  // x= id, z= value
{
    fnGreataxeInitialize()

    fnGreataxe()

    fnGreataxeTotal()
    fnReloadGreataxePrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnGreataxeSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varLeenspar = parseInt(h)
    varTheyril = parseInt(i)
    varSuccess = parseInt(j)
    varStone = parseInt(k)
    varBone = parseInt(l)
    varPrimevalQuintessence = parseInt(m)
    varRadiantQuartz = parseInt(n)
    varObsidian = parseInt(o)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varStone * varStoneValue) + (varBone * varBoneValue) + (varPrimevalQuintessence * varPrimevalQuintessenceValue) + (varRadiantQuartz * varRadiantQuartzValue) + (varObsidian * varObsidianValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Greataxe
function fnGreataxeTotal()
{
    varGreataxeTotal = ((varGreataxe01Price * varGreataxe01Quantity) + (varGreataxe02Price * varGreataxe02Quantity) + (varGreataxe03Price * varGreataxe03Quantity) + (varGreataxe04Price * varGreataxe04Quantity) + (varGreataxe05Price * varGreataxe05Quantity) + (varGreataxe06Price * varGreataxe06Quantity) + (varGreataxe07Price * varGreataxe07Quantity) + (varGreataxe08Price * varGreataxe08Quantity) + (varGreataxe09Price * varGreataxe09Quantity) + (varGreataxe10Price * varGreataxe10Quantity) + (varGreataxe11Price * varGreataxe11Quantity) + (varGreataxe12Price * varGreataxe12Quantity) + (varGreataxe13Price * varGreataxe13Quantity) + (varGreataxe14Price * varGreataxe14Quantity) + (varGreataxe15Price * varGreataxe15Quantity) + (varGreataxe16Price * varGreataxe16Quantity) + (varGreataxe17Price * varGreataxe17Quantity) + (varGreataxe18Price * varGreataxe18Quantity) + (varGreataxe19Price * varGreataxe19Quantity) + (varGreataxe20Price * varGreataxe20Quantity) + (varGreataxe21Price * varGreataxe21Quantity) + (varGreataxe22Price * varGreataxe22Quantity) + (varGreataxe23Price * varGreataxe23Quantity) + (varGreataxe24Price * varGreataxe24Quantity) + (varGreataxe25Price * varGreataxe25Quantity) + (varGreataxe26Price * varGreataxe26Quantity) + (varGreataxe27Price * varGreataxe27Quantity) + (varGreataxe28Price * varGreataxe28Quantity) + (varGreataxe29Price * varGreataxe29Quantity));
    varGreataxeGoldTotal = ((varGreataxe01Gold * varGreataxe01Quantity) + (varGreataxe02Gold * varGreataxe02Quantity) + (varGreataxe03Gold * varGreataxe03Quantity) + (varGreataxe04Gold * varGreataxe04Quantity) + (varGreataxe05Gold * varGreataxe05Quantity) + (varGreataxe06Gold * varGreataxe06Quantity) + (varGreataxe07Gold * varGreataxe07Quantity) + (varGreataxe08Gold * varGreataxe08Quantity) + (varGreataxe09Gold * varGreataxe09Quantity) + (varGreataxe10Gold * varGreataxe10Quantity) + (varGreataxe11Gold * varGreataxe11Quantity) + (varGreataxe12Gold * varGreataxe12Quantity) + (varGreataxe13Gold * varGreataxe13Quantity) + (varGreataxe14Gold * varGreataxe14Quantity) + (varGreataxe15Gold * varGreataxe15Quantity) + (varGreataxe16Gold * varGreataxe16Quantity) + (varGreataxe17Gold * varGreataxe17Quantity) + (varGreataxe18Gold * varGreataxe18Quantity) + (varGreataxe19Gold * varGreataxe19Quantity) + (varGreataxe20Gold * varGreataxe20Quantity) + (varGreataxe21Gold * varGreataxe21Quantity) + (varGreataxe22Gold * varGreataxe22Quantity) + (varGreataxe23Gold * varGreataxe23Quantity) + (varGreataxe24Gold * varGreataxe24Quantity) + (varGreataxe25Gold * varGreataxe25Quantity) + (varGreataxe26Gold * varGreataxe26Quantity) + (varGreataxe27Gold * varGreataxe27Quantity) + (varGreataxe28Gold * varGreataxe28Quantity) + (varGreataxe29Gold * varGreataxe29Quantity));
    varGreataxeIronTotal = ((varGreataxe01Iron * varGreataxe01Quantity) + (varGreataxe02Iron * varGreataxe02Quantity) + (varGreataxe03Iron * varGreataxe03Quantity) + (varGreataxe04Iron * varGreataxe04Quantity) + (varGreataxe05Iron * varGreataxe05Quantity) + (varGreataxe06Iron * varGreataxe06Quantity) + (varGreataxe07Iron * varGreataxe07Quantity) + (varGreataxe08Iron * varGreataxe08Quantity) + (varGreataxe09Iron * varGreataxe09Quantity) + (varGreataxe10Iron * varGreataxe10Quantity) + (varGreataxe11Iron * varGreataxe11Quantity) + (varGreataxe12Iron * varGreataxe12Quantity) + (varGreataxe13Iron * varGreataxe13Quantity) + (varGreataxe14Iron * varGreataxe14Quantity) + (varGreataxe15Iron * varGreataxe15Quantity) + (varGreataxe16Iron * varGreataxe16Quantity) + (varGreataxe17Iron * varGreataxe17Quantity) + (varGreataxe18Iron * varGreataxe18Quantity) + (varGreataxe19Iron * varGreataxe19Quantity) + (varGreataxe20Iron * varGreataxe20Quantity) + (varGreataxe21Iron * varGreataxe21Quantity) + (varGreataxe22Iron * varGreataxe22Quantity) + (varGreataxe23Iron * varGreataxe23Quantity) + (varGreataxe24Iron * varGreataxe24Quantity) + (varGreataxe25Iron * varGreataxe25Quantity) + (varGreataxe26Iron * varGreataxe26Quantity) + (varGreataxe27Iron * varGreataxe27Quantity) + (varGreataxe28Iron * varGreataxe28Quantity) + (varGreataxe29Iron * varGreataxe29Quantity));
    varGreataxeWoodTotal = ((varGreataxe01Wood * varGreataxe01Quantity) + (varGreataxe02Wood * varGreataxe02Quantity) + (varGreataxe03Wood * varGreataxe03Quantity) + (varGreataxe04Wood * varGreataxe04Quantity) + (varGreataxe05Wood * varGreataxe05Quantity) + (varGreataxe06Wood * varGreataxe06Quantity) + (varGreataxe07Wood * varGreataxe07Quantity) + (varGreataxe08Wood * varGreataxe08Quantity) + (varGreataxe09Wood * varGreataxe09Quantity) + (varGreataxe10Wood * varGreataxe10Quantity) + (varGreataxe11Wood * varGreataxe11Quantity) + (varGreataxe12Wood * varGreataxe12Quantity) + (varGreataxe13Wood * varGreataxe13Quantity) + (varGreataxe14Wood * varGreataxe14Quantity) + (varGreataxe15Wood * varGreataxe15Quantity) + (varGreataxe16Wood * varGreataxe16Quantity) + (varGreataxe17Wood * varGreataxe17Quantity) + (varGreataxe18Wood * varGreataxe18Quantity) + (varGreataxe19Wood * varGreataxe19Quantity) + (varGreataxe20Wood * varGreataxe20Quantity) + (varGreataxe21Wood * varGreataxe21Quantity) + (varGreataxe22Wood * varGreataxe22Quantity) + (varGreataxe23Wood * varGreataxe23Quantity) + (varGreataxe24Wood * varGreataxe24Quantity) + (varGreataxe25Wood * varGreataxe25Quantity) + (varGreataxe26Wood * varGreataxe26Quantity) + (varGreataxe27Wood * varGreataxe27Quantity) + (varGreataxe28Wood * varGreataxe28Quantity) + (varGreataxe29Wood * varGreataxe29Quantity));
    varGreataxeLeatherTotal = ((varGreataxe01Leather * varGreataxe01Quantity) + (varGreataxe02Leather * varGreataxe02Quantity) + (varGreataxe03Leather * varGreataxe03Quantity) + (varGreataxe04Leather * varGreataxe04Quantity) + (varGreataxe05Leather * varGreataxe05Quantity) + (varGreataxe06Leather * varGreataxe06Quantity) + (varGreataxe07Leather * varGreataxe07Quantity) + (varGreataxe08Leather * varGreataxe08Quantity) + (varGreataxe09Leather * varGreataxe09Quantity) + (varGreataxe10Leather * varGreataxe10Quantity) + (varGreataxe11Leather * varGreataxe11Quantity) + (varGreataxe12Leather * varGreataxe12Quantity) + (varGreataxe13Leather * varGreataxe13Quantity) + (varGreataxe14Leather * varGreataxe14Quantity) + (varGreataxe15Leather * varGreataxe15Quantity) + (varGreataxe16Leather * varGreataxe16Quantity) + (varGreataxe17Leather * varGreataxe17Quantity) + (varGreataxe18Leather * varGreataxe18Quantity) + (varGreataxe19Leather * varGreataxe19Quantity) + (varGreataxe20Leather * varGreataxe20Quantity) + (varGreataxe21Leather * varGreataxe21Quantity) + (varGreataxe22Leather * varGreataxe22Quantity) + (varGreataxe23Leather * varGreataxe23Quantity) + (varGreataxe24Leather * varGreataxe24Quantity) + (varGreataxe25Leather * varGreataxe25Quantity) + (varGreataxe26Leather * varGreataxe26Quantity) + (varGreataxe27Leather * varGreataxe27Quantity) + (varGreataxe28Leather * varGreataxe28Quantity) + (varGreataxe29Leather * varGreataxe29Quantity));
    varGreataxeSelentineTotal = ((varGreataxe01Selentine * varGreataxe01Quantity) + (varGreataxe02Selentine * varGreataxe02Quantity) + (varGreataxe03Selentine * varGreataxe03Quantity) + (varGreataxe04Selentine * varGreataxe04Quantity) + (varGreataxe05Selentine * varGreataxe05Quantity) + (varGreataxe06Selentine * varGreataxe06Quantity) + (varGreataxe07Selentine * varGreataxe07Quantity) + (varGreataxe08Selentine * varGreataxe08Quantity) + (varGreataxe09Selentine * varGreataxe09Quantity) + (varGreataxe10Selentine * varGreataxe10Quantity) + (varGreataxe11Selentine * varGreataxe11Quantity) + (varGreataxe12Selentine * varGreataxe12Quantity) + (varGreataxe13Selentine * varGreataxe13Quantity) + (varGreataxe14Selentine * varGreataxe14Quantity) + (varGreataxe15Selentine * varGreataxe15Quantity) + (varGreataxe16Selentine * varGreataxe16Quantity) + (varGreataxe17Selentine * varGreataxe17Quantity) + (varGreataxe18Selentine * varGreataxe18Quantity) + (varGreataxe19Selentine * varGreataxe19Quantity) + (varGreataxe20Selentine * varGreataxe20Quantity) + (varGreataxe21Selentine * varGreataxe21Quantity) + (varGreataxe22Selentine * varGreataxe22Quantity) + (varGreataxe23Selentine * varGreataxe23Quantity) + (varGreataxe24Selentine * varGreataxe24Quantity) + (varGreataxe25Selentine * varGreataxe25Quantity) + (varGreataxe26Selentine * varGreataxe26Quantity) + (varGreataxe27Selentine * varGreataxe27Quantity) + (varGreataxe28Selentine * varGreataxe28Quantity) + (varGreataxe29Selentine * varGreataxe29Quantity));
    varGreataxeVeilronTotal = ((varGreataxe01Veilron * varGreataxe01Quantity) + (varGreataxe02Veilron * varGreataxe02Quantity) + (varGreataxe03Veilron * varGreataxe03Quantity) + (varGreataxe04Veilron * varGreataxe04Quantity) + (varGreataxe05Veilron * varGreataxe05Quantity) + (varGreataxe06Veilron * varGreataxe06Quantity) + (varGreataxe07Veilron * varGreataxe07Quantity) + (varGreataxe08Veilron * varGreataxe08Quantity) + (varGreataxe09Veilron * varGreataxe09Quantity) + (varGreataxe10Veilron * varGreataxe10Quantity) + (varGreataxe11Veilron * varGreataxe11Quantity) + (varGreataxe12Veilron * varGreataxe12Quantity) + (varGreataxe13Veilron * varGreataxe13Quantity) + (varGreataxe14Veilron * varGreataxe14Quantity) + (varGreataxe15Veilron * varGreataxe15Quantity) + (varGreataxe16Veilron * varGreataxe16Quantity) + (varGreataxe17Veilron * varGreataxe17Quantity) + (varGreataxe18Veilron * varGreataxe18Quantity) + (varGreataxe19Veilron * varGreataxe19Quantity) + (varGreataxe20Veilron * varGreataxe20Quantity) + (varGreataxe21Veilron * varGreataxe21Quantity) + (varGreataxe22Veilron * varGreataxe22Quantity) + (varGreataxe23Veilron * varGreataxe23Quantity) + (varGreataxe24Veilron * varGreataxe24Quantity) + (varGreataxe25Veilron * varGreataxe25Quantity) + (varGreataxe26Veilron * varGreataxe26Quantity) + (varGreataxe27Veilron * varGreataxe27Quantity) + (varGreataxe28Veilron * varGreataxe28Quantity) + (varGreataxe29Veilron * varGreataxe29Quantity));
    varGreataxeNeithalTotal = ((varGreataxe01Neithal * varGreataxe01Quantity) + (varGreataxe02Neithal * varGreataxe02Quantity) + (varGreataxe03Neithal * varGreataxe03Quantity) + (varGreataxe04Neithal * varGreataxe04Quantity) + (varGreataxe05Neithal * varGreataxe05Quantity) + (varGreataxe06Neithal * varGreataxe06Quantity) + (varGreataxe07Neithal * varGreataxe07Quantity) + (varGreataxe08Neithal * varGreataxe08Quantity) + (varGreataxe09Neithal * varGreataxe09Quantity) + (varGreataxe10Neithal * varGreataxe10Quantity) + (varGreataxe11Neithal * varGreataxe11Quantity) + (varGreataxe12Neithal * varGreataxe12Quantity) + (varGreataxe13Neithal * varGreataxe13Quantity) + (varGreataxe14Neithal * varGreataxe14Quantity) + (varGreataxe15Neithal * varGreataxe15Quantity) + (varGreataxe16Neithal * varGreataxe16Quantity) + (varGreataxe17Neithal * varGreataxe17Quantity) + (varGreataxe18Neithal * varGreataxe18Quantity) + (varGreataxe19Neithal * varGreataxe19Quantity) + (varGreataxe20Neithal * varGreataxe20Quantity) + (varGreataxe21Neithal * varGreataxe21Quantity) + (varGreataxe22Neithal * varGreataxe22Quantity) + (varGreataxe23Neithal * varGreataxe23Quantity) + (varGreataxe24Neithal * varGreataxe24Quantity) + (varGreataxe25Neithal * varGreataxe25Quantity) + (varGreataxe26Neithal * varGreataxe26Quantity) + (varGreataxe27Neithal * varGreataxe27Quantity) + (varGreataxe28Neithal * varGreataxe28Quantity) + (varGreataxe29Neithal * varGreataxe29Quantity));
    varGreataxeLeensparTotal = ((varGreataxe01Leenspar * varGreataxe01Quantity) + (varGreataxe02Leenspar * varGreataxe02Quantity) + (varGreataxe03Leenspar * varGreataxe03Quantity) + (varGreataxe04Leenspar * varGreataxe04Quantity) + (varGreataxe05Leenspar * varGreataxe05Quantity) + (varGreataxe06Leenspar * varGreataxe06Quantity) + (varGreataxe07Leenspar * varGreataxe07Quantity) + (varGreataxe08Leenspar * varGreataxe08Quantity) + (varGreataxe09Leenspar * varGreataxe09Quantity) + (varGreataxe10Leenspar * varGreataxe10Quantity) + (varGreataxe11Leenspar * varGreataxe11Quantity) + (varGreataxe12Leenspar * varGreataxe12Quantity) + (varGreataxe13Leenspar * varGreataxe13Quantity) + (varGreataxe14Leenspar * varGreataxe14Quantity) + (varGreataxe15Leenspar * varGreataxe15Quantity) + (varGreataxe16Leenspar * varGreataxe16Quantity) + (varGreataxe17Leenspar * varGreataxe17Quantity) + (varGreataxe18Leenspar * varGreataxe18Quantity) + (varGreataxe19Leenspar * varGreataxe19Quantity) + (varGreataxe20Leenspar * varGreataxe20Quantity) + (varGreataxe21Leenspar * varGreataxe21Quantity) + (varGreataxe22Leenspar * varGreataxe22Quantity) + (varGreataxe23Leenspar * varGreataxe23Quantity) + (varGreataxe24Leenspar * varGreataxe24Quantity) + (varGreataxe25Leenspar * varGreataxe25Quantity) + (varGreataxe26Leenspar * varGreataxe26Quantity) + (varGreataxe27Leenspar * varGreataxe27Quantity) + (varGreataxe28Leenspar * varGreataxe28Quantity) + (varGreataxe29Leenspar * varGreataxe29Quantity));
    varGreataxeTheyrilTotal = ((varGreataxe01Theyril * varGreataxe01Quantity) + (varGreataxe02Theyril * varGreataxe02Quantity) + (varGreataxe03Theyril * varGreataxe03Quantity) + (varGreataxe04Theyril * varGreataxe04Quantity) + (varGreataxe05Theyril * varGreataxe05Quantity) + (varGreataxe06Theyril * varGreataxe06Quantity) + (varGreataxe07Theyril * varGreataxe07Quantity) + (varGreataxe08Theyril * varGreataxe08Quantity) + (varGreataxe09Theyril * varGreataxe09Quantity) + (varGreataxe10Theyril * varGreataxe10Quantity) + (varGreataxe11Theyril * varGreataxe11Quantity) + (varGreataxe12Theyril * varGreataxe12Quantity) + (varGreataxe13Theyril * varGreataxe13Quantity) + (varGreataxe14Theyril * varGreataxe14Quantity) + (varGreataxe15Theyril * varGreataxe15Quantity) + (varGreataxe16Theyril * varGreataxe16Quantity) + (varGreataxe17Theyril * varGreataxe17Quantity) + (varGreataxe18Theyril * varGreataxe18Quantity) + (varGreataxe19Theyril * varGreataxe19Quantity) + (varGreataxe20Theyril * varGreataxe20Quantity) + (varGreataxe21Theyril * varGreataxe21Quantity) + (varGreataxe22Theyril * varGreataxe22Quantity) + (varGreataxe23Theyril * varGreataxe23Quantity) + (varGreataxe24Theyril * varGreataxe24Quantity) + (varGreataxe25Theyril * varGreataxe25Quantity) + (varGreataxe26Theyril * varGreataxe26Quantity) + (varGreataxe27Theyril * varGreataxe27Quantity) + (varGreataxe28Theyril * varGreataxe28Quantity) + (varGreataxe29Theyril * varGreataxe29Quantity));
    varGreataxeStoneTotal = ((varGreataxe01Stone * varGreataxe01Quantity) + (varGreataxe02Stone * varGreataxe02Quantity) + (varGreataxe03Stone * varGreataxe03Quantity) + (varGreataxe04Stone * varGreataxe04Quantity) + (varGreataxe05Stone * varGreataxe05Quantity) + (varGreataxe06Stone * varGreataxe06Quantity) + (varGreataxe07Stone * varGreataxe07Quantity) + (varGreataxe08Stone * varGreataxe08Quantity) + (varGreataxe09Stone * varGreataxe09Quantity) + (varGreataxe10Stone * varGreataxe10Quantity) + (varGreataxe11Stone * varGreataxe11Quantity) + (varGreataxe12Stone * varGreataxe12Quantity) + (varGreataxe13Stone * varGreataxe13Quantity) + (varGreataxe14Stone * varGreataxe14Quantity) + (varGreataxe15Stone * varGreataxe15Quantity) + (varGreataxe16Stone * varGreataxe16Quantity) + (varGreataxe17Stone * varGreataxe17Quantity) + (varGreataxe18Stone * varGreataxe18Quantity) + (varGreataxe19Stone * varGreataxe19Quantity) + (varGreataxe20Stone * varGreataxe20Quantity) + (varGreataxe21Stone * varGreataxe21Quantity) + (varGreataxe22Stone * varGreataxe22Quantity) + (varGreataxe23Stone * varGreataxe23Quantity) + (varGreataxe24Stone * varGreataxe24Quantity) + (varGreataxe25Stone * varGreataxe25Quantity) + (varGreataxe26Stone * varGreataxe26Quantity) + (varGreataxe27Stone * varGreataxe27Quantity) + (varGreataxe28Stone * varGreataxe28Quantity) + (varGreataxe29Stone * varGreataxe29Quantity));
    varGreataxeBoneTotal = ((varGreataxe01Bone * varGreataxe01Quantity) + (varGreataxe02Bone * varGreataxe02Quantity) + (varGreataxe03Bone * varGreataxe03Quantity) + (varGreataxe04Bone * varGreataxe04Quantity) + (varGreataxe05Bone * varGreataxe05Quantity) + (varGreataxe06Bone * varGreataxe06Quantity) + (varGreataxe07Bone * varGreataxe07Quantity) + (varGreataxe08Bone * varGreataxe08Quantity) + (varGreataxe09Bone * varGreataxe09Quantity) + (varGreataxe10Bone * varGreataxe10Quantity) + (varGreataxe11Bone * varGreataxe11Quantity) + (varGreataxe12Bone * varGreataxe12Quantity) + (varGreataxe13Bone * varGreataxe13Quantity) + (varGreataxe14Bone * varGreataxe14Quantity) + (varGreataxe15Bone * varGreataxe15Quantity) + (varGreataxe16Bone * varGreataxe16Quantity) + (varGreataxe17Bone * varGreataxe17Quantity) + (varGreataxe18Bone * varGreataxe18Quantity) + (varGreataxe19Bone * varGreataxe19Quantity) + (varGreataxe20Bone * varGreataxe20Quantity) + (varGreataxe21Bone * varGreataxe21Quantity) + (varGreataxe22Bone * varGreataxe22Quantity) + (varGreataxe23Bone * varGreataxe23Quantity) + (varGreataxe24Bone * varGreataxe24Quantity) + (varGreataxe25Bone * varGreataxe25Quantity) + (varGreataxe26Bone * varGreataxe26Quantity) + (varGreataxe27Bone * varGreataxe27Quantity) + (varGreataxe28Bone * varGreataxe28Quantity) + (varGreataxe29Bone * varGreataxe29Quantity));
    varGreataxePrimevalQuintessenceTotal = ((varGreataxe01PrimevalQuintessence * varGreataxe01Quantity) + (varGreataxe02PrimevalQuintessence * varGreataxe02Quantity) + (varGreataxe03PrimevalQuintessence * varGreataxe03Quantity) + (varGreataxe04PrimevalQuintessence * varGreataxe04Quantity) + (varGreataxe05PrimevalQuintessence * varGreataxe05Quantity) + (varGreataxe06PrimevalQuintessence * varGreataxe06Quantity) + (varGreataxe07PrimevalQuintessence * varGreataxe07Quantity) + (varGreataxe08PrimevalQuintessence * varGreataxe08Quantity) + (varGreataxe09PrimevalQuintessence * varGreataxe09Quantity) + (varGreataxe10PrimevalQuintessence * varGreataxe10Quantity) + (varGreataxe11PrimevalQuintessence * varGreataxe11Quantity) + (varGreataxe12PrimevalQuintessence * varGreataxe12Quantity) + (varGreataxe13PrimevalQuintessence * varGreataxe13Quantity) + (varGreataxe14PrimevalQuintessence * varGreataxe14Quantity) + (varGreataxe15PrimevalQuintessence * varGreataxe15Quantity) + (varGreataxe16PrimevalQuintessence * varGreataxe16Quantity) + (varGreataxe17PrimevalQuintessence * varGreataxe17Quantity) + (varGreataxe18PrimevalQuintessence * varGreataxe18Quantity) + (varGreataxe19PrimevalQuintessence * varGreataxe19Quantity) + (varGreataxe20PrimevalQuintessence * varGreataxe20Quantity) + (varGreataxe21PrimevalQuintessence * varGreataxe21Quantity) + (varGreataxe22PrimevalQuintessence * varGreataxe22Quantity) + (varGreataxe23PrimevalQuintessence * varGreataxe23Quantity) + (varGreataxe24PrimevalQuintessence * varGreataxe24Quantity) + (varGreataxe25PrimevalQuintessence * varGreataxe25Quantity) + (varGreataxe26PrimevalQuintessence * varGreataxe26Quantity) + (varGreataxe27PrimevalQuintessence * varGreataxe27Quantity) + (varGreataxe28PrimevalQuintessence * varGreataxe28Quantity) + (varGreataxe29PrimevalQuintessence * varGreataxe29Quantity));
    varGreataxeRadiantQuartzTotal = ((varGreataxe01RadiantQuartz * varGreataxe01Quantity) + (varGreataxe02RadiantQuartz * varGreataxe02Quantity) + (varGreataxe03RadiantQuartz * varGreataxe03Quantity) + (varGreataxe04RadiantQuartz * varGreataxe04Quantity) + (varGreataxe05RadiantQuartz * varGreataxe05Quantity) + (varGreataxe06RadiantQuartz * varGreataxe06Quantity) + (varGreataxe07RadiantQuartz * varGreataxe07Quantity) + (varGreataxe08RadiantQuartz * varGreataxe08Quantity) + (varGreataxe09RadiantQuartz * varGreataxe09Quantity) + (varGreataxe10RadiantQuartz * varGreataxe10Quantity) + (varGreataxe11RadiantQuartz * varGreataxe11Quantity) + (varGreataxe12RadiantQuartz * varGreataxe12Quantity) + (varGreataxe13RadiantQuartz * varGreataxe13Quantity) + (varGreataxe14RadiantQuartz * varGreataxe14Quantity) + (varGreataxe15RadiantQuartz * varGreataxe15Quantity) + (varGreataxe16RadiantQuartz * varGreataxe16Quantity) + (varGreataxe17RadiantQuartz * varGreataxe17Quantity) + (varGreataxe18RadiantQuartz * varGreataxe18Quantity) + (varGreataxe19RadiantQuartz * varGreataxe19Quantity) + (varGreataxe20RadiantQuartz * varGreataxe20Quantity) + (varGreataxe21RadiantQuartz * varGreataxe21Quantity) + (varGreataxe22RadiantQuartz * varGreataxe22Quantity) + (varGreataxe23RadiantQuartz * varGreataxe23Quantity) + (varGreataxe24RadiantQuartz * varGreataxe24Quantity) + (varGreataxe25RadiantQuartz * varGreataxe25Quantity) + (varGreataxe26RadiantQuartz * varGreataxe26Quantity) + (varGreataxe27RadiantQuartz * varGreataxe27Quantity) + (varGreataxe28RadiantQuartz * varGreataxe28Quantity) + (varGreataxe29RadiantQuartz * varGreataxe29Quantity));
    varGreataxeObsidianTotal = ((varGreataxe01Obsidian * varGreataxe01Quantity) + (varGreataxe02Obsidian * varGreataxe02Quantity) + (varGreataxe03Obsidian * varGreataxe03Quantity) + (varGreataxe04Obsidian * varGreataxe04Quantity) + (varGreataxe05Obsidian * varGreataxe05Quantity) + (varGreataxe06Obsidian * varGreataxe06Quantity) + (varGreataxe07Obsidian * varGreataxe07Quantity) + (varGreataxe08Obsidian * varGreataxe08Quantity) + (varGreataxe09Obsidian * varGreataxe09Quantity) + (varGreataxe10Obsidian * varGreataxe10Quantity) + (varGreataxe11Obsidian * varGreataxe11Quantity) + (varGreataxe12Obsidian * varGreataxe12Quantity) + (varGreataxe13Obsidian * varGreataxe13Quantity) + (varGreataxe14Obsidian * varGreataxe14Quantity) + (varGreataxe15Obsidian * varGreataxe15Quantity) + (varGreataxe16Obsidian * varGreataxe16Quantity) + (varGreataxe17Obsidian * varGreataxe17Quantity) + (varGreataxe18Obsidian * varGreataxe18Quantity) + (varGreataxe19Obsidian * varGreataxe19Quantity) + (varGreataxe20Obsidian * varGreataxe20Quantity) + (varGreataxe21Obsidian * varGreataxe21Quantity) + (varGreataxe22Obsidian * varGreataxe22Quantity) + (varGreataxe23Obsidian * varGreataxe23Quantity) + (varGreataxe24Obsidian * varGreataxe24Quantity) + (varGreataxe25Obsidian * varGreataxe25Quantity) + (varGreataxe26Obsidian * varGreataxe26Quantity) + (varGreataxe27Obsidian * varGreataxe27Quantity) + (varGreataxe28Obsidian * varGreataxe28Quantity) + (varGreataxe29Obsidian * varGreataxe29Quantity));
}

//Greataxe Calculations
function fnGreataxe()
{
    fnGreataxeSubPrice(varGreataxe01Gold,varGreataxe01Iron,varGreataxe01Wood,varGreataxe01Leather,varGreataxe01Selentine,varGreataxe01Veilron,varGreataxe01Neithal,varGreataxe01Leenspar,varGreataxe01Theyril,varGreataxe01Success,varGreataxe01Stone,varGreataxe01Bone,varGreataxe01PrimevalQuintessence,varGreataxe01RadiantQuartz,varGreataxe01Obsidian)
    varGreataxe01Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe02Gold,varGreataxe02Iron,varGreataxe02Wood,varGreataxe02Leather,varGreataxe02Selentine,varGreataxe02Veilron,varGreataxe02Neithal,varGreataxe02Leenspar,varGreataxe02Theyril,varGreataxe02Success,varGreataxe02Stone,varGreataxe02Bone,varGreataxe02PrimevalQuintessence,varGreataxe02RadiantQuartz,varGreataxe02Obsidian)
    varGreataxe02Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe03Gold,varGreataxe03Iron,varGreataxe03Wood,varGreataxe03Leather,varGreataxe03Selentine,varGreataxe03Veilron,varGreataxe03Neithal,varGreataxe03Leenspar,varGreataxe03Theyril,varGreataxe03Success,varGreataxe03Stone,varGreataxe03Bone,varGreataxe03PrimevalQuintessence,varGreataxe03RadiantQuartz,varGreataxe03Obsidian)
    varGreataxe03Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe04Gold,varGreataxe04Iron,varGreataxe04Wood,varGreataxe04Leather,varGreataxe04Selentine,varGreataxe04Veilron,varGreataxe04Neithal,varGreataxe04Leenspar,varGreataxe04Theyril,varGreataxe04Success,varGreataxe04Stone,varGreataxe04Bone,varGreataxe04PrimevalQuintessence,varGreataxe04RadiantQuartz,varGreataxe04Obsidian)
    varGreataxe04Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe05Gold,varGreataxe05Iron,varGreataxe05Wood,varGreataxe05Leather,varGreataxe05Selentine,varGreataxe05Veilron,varGreataxe05Neithal,varGreataxe05Leenspar,varGreataxe05Theyril,varGreataxe05Success,varGreataxe05Stone,varGreataxe05Bone,varGreataxe05PrimevalQuintessence,varGreataxe05RadiantQuartz,varGreataxe05Obsidian)
    varGreataxe05Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe06Gold,varGreataxe06Iron,varGreataxe06Wood,varGreataxe06Leather,varGreataxe06Selentine,varGreataxe06Veilron,varGreataxe06Neithal,varGreataxe06Leenspar,varGreataxe06Theyril,varGreataxe06Success,varGreataxe06Stone,varGreataxe06Bone,varGreataxe06PrimevalQuintessence,varGreataxe06RadiantQuartz,varGreataxe06Obsidian)
    varGreataxe06Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe07Gold,varGreataxe07Iron,varGreataxe07Wood,varGreataxe07Leather,varGreataxe07Selentine,varGreataxe07Veilron,varGreataxe07Neithal,varGreataxe07Leenspar,varGreataxe07Theyril,varGreataxe07Success,varGreataxe07Stone,varGreataxe07Bone,varGreataxe07PrimevalQuintessence,varGreataxe07RadiantQuartz,varGreataxe07Obsidian)
    varGreataxe07Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe08Gold,varGreataxe08Iron,varGreataxe08Wood,varGreataxe08Leather,varGreataxe08Selentine,varGreataxe08Veilron,varGreataxe08Neithal,varGreataxe08Leenspar,varGreataxe08Theyril,varGreataxe08Success,varGreataxe08Stone,varGreataxe08Bone,varGreataxe08PrimevalQuintessence,varGreataxe08RadiantQuartz,varGreataxe08Obsidian)
    varGreataxe08Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe09Gold,varGreataxe09Iron,varGreataxe09Wood,varGreataxe09Leather,varGreataxe09Selentine,varGreataxe09Veilron,varGreataxe09Neithal,varGreataxe09Leenspar,varGreataxe09Theyril,varGreataxe09Success,varGreataxe09Stone,varGreataxe09Bone,varGreataxe09PrimevalQuintessence,varGreataxe09RadiantQuartz,varGreataxe09Obsidian)
    varGreataxe09Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe10Gold,varGreataxe10Iron,varGreataxe10Wood,varGreataxe10Leather,varGreataxe10Selentine,varGreataxe10Veilron,varGreataxe10Neithal,varGreataxe10Leenspar,varGreataxe10Theyril,varGreataxe10Success,varGreataxe10Stone,varGreataxe10Bone,varGreataxe10PrimevalQuintessence,varGreataxe10RadiantQuartz,varGreataxe10Obsidian)
    varGreataxe10Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe11Gold,varGreataxe11Iron,varGreataxe11Wood,varGreataxe11Leather,varGreataxe11Selentine,varGreataxe11Veilron,varGreataxe11Neithal,varGreataxe11Leenspar,varGreataxe11Theyril,varGreataxe11Success,varGreataxe11Stone,varGreataxe11Bone,varGreataxe11PrimevalQuintessence,varGreataxe11RadiantQuartz,varGreataxe11Obsidian)
    varGreataxe11Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe12Gold,varGreataxe12Iron,varGreataxe12Wood,varGreataxe12Leather,varGreataxe12Selentine,varGreataxe12Veilron,varGreataxe12Neithal,varGreataxe12Leenspar,varGreataxe12Theyril,varGreataxe12Success,varGreataxe12Stone,varGreataxe12Bone,varGreataxe12PrimevalQuintessence,varGreataxe12RadiantQuartz,varGreataxe12Obsidian)
    varGreataxe12Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe13Gold,varGreataxe13Iron,varGreataxe13Wood,varGreataxe13Leather,varGreataxe13Selentine,varGreataxe13Veilron,varGreataxe13Neithal,varGreataxe13Leenspar,varGreataxe13Theyril,varGreataxe13Success,varGreataxe13Stone,varGreataxe13Bone,varGreataxe13PrimevalQuintessence,varGreataxe13RadiantQuartz,varGreataxe13Obsidian)
    varGreataxe13Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe14Gold,varGreataxe14Iron,varGreataxe14Wood,varGreataxe14Leather,varGreataxe14Selentine,varGreataxe14Veilron,varGreataxe14Neithal,varGreataxe14Leenspar,varGreataxe14Theyril,varGreataxe14Success,varGreataxe14Stone,varGreataxe14Bone,varGreataxe14PrimevalQuintessence,varGreataxe14RadiantQuartz,varGreataxe14Obsidian)
    varGreataxe14Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe15Gold,varGreataxe15Iron,varGreataxe15Wood,varGreataxe15Leather,varGreataxe15Selentine,varGreataxe15Veilron,varGreataxe15Neithal,varGreataxe15Leenspar,varGreataxe15Theyril,varGreataxe15Success,varGreataxe15Stone,varGreataxe15Bone,varGreataxe15PrimevalQuintessence,varGreataxe15RadiantQuartz,varGreataxe15Obsidian)
    varGreataxe15Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe16Gold,varGreataxe16Iron,varGreataxe16Wood,varGreataxe16Leather,varGreataxe16Selentine,varGreataxe16Veilron,varGreataxe16Neithal,varGreataxe16Leenspar,varGreataxe16Theyril,varGreataxe16Success,varGreataxe16Stone,varGreataxe16Bone,varGreataxe16PrimevalQuintessence,varGreataxe16RadiantQuartz,varGreataxe16Obsidian)
    varGreataxe16Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe17Gold,varGreataxe17Iron,varGreataxe17Wood,varGreataxe17Leather,varGreataxe17Selentine,varGreataxe17Veilron,varGreataxe17Neithal,varGreataxe17Leenspar,varGreataxe17Theyril,varGreataxe17Success,varGreataxe17Stone,varGreataxe17Bone,varGreataxe17PrimevalQuintessence,varGreataxe17RadiantQuartz,varGreataxe17Obsidian)
    varGreataxe17Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe18Gold,varGreataxe18Iron,varGreataxe18Wood,varGreataxe18Leather,varGreataxe18Selentine,varGreataxe18Veilron,varGreataxe18Neithal,varGreataxe18Leenspar,varGreataxe18Theyril,varGreataxe18Success,varGreataxe18Stone,varGreataxe18Bone,varGreataxe18PrimevalQuintessence,varGreataxe18RadiantQuartz,varGreataxe18Obsidian)
    varGreataxe18Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe19Gold,varGreataxe19Iron,varGreataxe19Wood,varGreataxe19Leather,varGreataxe19Selentine,varGreataxe19Veilron,varGreataxe19Neithal,varGreataxe19Leenspar,varGreataxe19Theyril,varGreataxe19Success,varGreataxe19Stone,varGreataxe19Bone,varGreataxe19PrimevalQuintessence,varGreataxe19RadiantQuartz,varGreataxe19Obsidian)
    varGreataxe19Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe20Gold,varGreataxe20Iron,varGreataxe20Wood,varGreataxe20Leather,varGreataxe20Selentine,varGreataxe20Veilron,varGreataxe20Neithal,varGreataxe20Leenspar,varGreataxe20Theyril,varGreataxe20Success,varGreataxe20Stone,varGreataxe20Bone,varGreataxe20PrimevalQuintessence,varGreataxe20RadiantQuartz,varGreataxe20Obsidian)
    varGreataxe20Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe21Gold,varGreataxe21Iron,varGreataxe21Wood,varGreataxe21Leather,varGreataxe21Selentine,varGreataxe21Veilron,varGreataxe21Neithal,varGreataxe21Leenspar,varGreataxe21Theyril,varGreataxe21Success,varGreataxe21Stone,varGreataxe21Bone,varGreataxe21PrimevalQuintessence,varGreataxe21RadiantQuartz,varGreataxe21Obsidian)
    varGreataxe21Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe22Gold,varGreataxe22Iron,varGreataxe22Wood,varGreataxe22Leather,varGreataxe22Selentine,varGreataxe22Veilron,varGreataxe22Neithal,varGreataxe22Leenspar,varGreataxe22Theyril,varGreataxe22Success,varGreataxe22Stone,varGreataxe22Bone,varGreataxe22PrimevalQuintessence,varGreataxe22RadiantQuartz,varGreataxe22Obsidian)
    varGreataxe22Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe23Gold,varGreataxe23Iron,varGreataxe23Wood,varGreataxe23Leather,varGreataxe23Selentine,varGreataxe23Veilron,varGreataxe23Neithal,varGreataxe23Leenspar,varGreataxe23Theyril,varGreataxe23Success,varGreataxe23Stone,varGreataxe23Bone,varGreataxe23PrimevalQuintessence,varGreataxe23RadiantQuartz,varGreataxe23Obsidian)
    varGreataxe23Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe24Gold,varGreataxe24Iron,varGreataxe24Wood,varGreataxe24Leather,varGreataxe24Selentine,varGreataxe24Veilron,varGreataxe24Neithal,varGreataxe24Leenspar,varGreataxe24Theyril,varGreataxe24Success,varGreataxe24Stone,varGreataxe24Bone,varGreataxe24PrimevalQuintessence,varGreataxe24RadiantQuartz,varGreataxe24Obsidian)
    varGreataxe24Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe25Gold,varGreataxe25Iron,varGreataxe25Wood,varGreataxe25Leather,varGreataxe25Selentine,varGreataxe25Veilron,varGreataxe25Neithal,varGreataxe25Leenspar,varGreataxe25Theyril,varGreataxe25Success,varGreataxe25Stone,varGreataxe25Bone,varGreataxe25PrimevalQuintessence,varGreataxe25RadiantQuartz,varGreataxe25Obsidian)
    varGreataxe25Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe26Gold,varGreataxe26Iron,varGreataxe26Wood,varGreataxe26Leather,varGreataxe26Selentine,varGreataxe26Veilron,varGreataxe26Neithal,varGreataxe26Leenspar,varGreataxe26Theyril,varGreataxe26Success,varGreataxe26Stone,varGreataxe26Bone,varGreataxe26PrimevalQuintessence,varGreataxe26RadiantQuartz,varGreataxe26Obsidian)
    varGreataxe26Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe27Gold,varGreataxe27Iron,varGreataxe27Wood,varGreataxe27Leather,varGreataxe27Selentine,varGreataxe27Veilron,varGreataxe27Neithal,varGreataxe27Leenspar,varGreataxe27Theyril,varGreataxe27Success,varGreataxe27Stone,varGreataxe27Bone,varGreataxe27PrimevalQuintessence,varGreataxe27RadiantQuartz,varGreataxe27Obsidian)
    varGreataxe27Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe28Gold,varGreataxe28Iron,varGreataxe28Wood,varGreataxe28Leather,varGreataxe28Selentine,varGreataxe28Veilron,varGreataxe28Neithal,varGreataxe28Leenspar,varGreataxe28Theyril,varGreataxe28Success,varGreataxe28Stone,varGreataxe28Bone,varGreataxe28PrimevalQuintessence,varGreataxe28RadiantQuartz,varGreataxe28Obsidian)
    varGreataxe28Price = varItemPrice;
    fnGreataxeSubPrice(varGreataxe29Gold,varGreataxe29Iron,varGreataxe29Wood,varGreataxe29Leather,varGreataxe29Selentine,varGreataxe29Veilron,varGreataxe29Neithal,varGreataxe29Leenspar,varGreataxe29Theyril,varGreataxe29Success,varGreataxe29Stone,varGreataxe29Bone,varGreataxe29PrimevalQuintessence,varGreataxe29RadiantQuartz,varGreataxe29Obsidian)
    varGreataxe29Price = varItemPrice;
}

function fnReloadGreataxePrices()
{
    //Greataxe Prices
    document.getElementById('Greataxe01Price').value = varGreataxe01Price;
    document.getElementById('Greataxe02Price').value = varGreataxe02Price;
    document.getElementById('Greataxe03Price').value = varGreataxe03Price;
    document.getElementById('Greataxe04Price').value = varGreataxe04Price;
    document.getElementById('Greataxe05Price').value = varGreataxe05Price;
    document.getElementById('Greataxe06Price').value = varGreataxe06Price;
    document.getElementById('Greataxe07Price').value = varGreataxe07Price;
    document.getElementById('Greataxe08Price').value = varGreataxe08Price;
    document.getElementById('Greataxe09Price').value = varGreataxe09Price;
    document.getElementById('Greataxe10Price').value = varGreataxe10Price;
    document.getElementById('Greataxe11Price').value = varGreataxe11Price;
    document.getElementById('Greataxe12Price').value = varGreataxe12Price;
    document.getElementById('Greataxe13Price').value = varGreataxe13Price;
    document.getElementById('Greataxe14Price').value = varGreataxe14Price;
    document.getElementById('Greataxe15Price').value = varGreataxe15Price;
    document.getElementById('Greataxe16Price').value = varGreataxe16Price;
    document.getElementById('Greataxe17Price').value = varGreataxe17Price;
    document.getElementById('Greataxe18Price').value = varGreataxe18Price;
    document.getElementById('Greataxe19Price').value = varGreataxe19Price;
    document.getElementById('Greataxe20Price').value = varGreataxe20Price;
    document.getElementById('Greataxe21Price').value = varGreataxe21Price;
    document.getElementById('Greataxe22Price').value = varGreataxe22Price;
    document.getElementById('Greataxe23Price').value = varGreataxe23Price;
    document.getElementById('Greataxe24Price').value = varGreataxe24Price;
    document.getElementById('Greataxe25Price').value = varGreataxe25Price;
    document.getElementById('Greataxe26Price').value = varGreataxe26Price;
    document.getElementById('Greataxe27Price').value = varGreataxe27Price;
    document.getElementById('Greataxe28Price').value = varGreataxe28Price;
    document.getElementById('Greataxe29Price').value = varGreataxe29Price;

    //Greataxe Total Prices
    document.getElementById('GreataxeTotal').value = varGreataxeTotal;
    document.getElementById('GreataxeGoldTotal').value = varGreataxeGoldTotal;
    document.getElementById('GreataxeIronTotal').value = varGreataxeIronTotal;
    document.getElementById('GreataxeWoodTotal').value = varGreataxeWoodTotal;
    document.getElementById('GreataxeLeatherTotal').value = varGreataxeLeatherTotal;
    document.getElementById('GreataxeSelentineTotal').value = varGreataxeSelentineTotal;
    document.getElementById('GreataxeVeilronTotal').value = varGreataxeVeilronTotal;
    document.getElementById('GreataxeNeithalTotal').value = varGreataxeNeithalTotal;
    document.getElementById('GreataxeLeensparTotal').value = varGreataxeLeensparTotal;
    document.getElementById('GreataxeTheyrilTotal').value = varGreataxeTheyrilTotal;
    document.getElementById('GreataxeStoneTotal').value = varGreataxeStoneTotal;
    document.getElementById('GreataxeBoneTotal').value = varGreataxeBoneTotal;
    document.getElementById('GreataxePrimevalQuintessenceTotal').value = varGreataxePrimevalQuintessenceTotal;
    document.getElementById('GreataxeRadiantQuartzTotal').value = varGreataxeRadiantQuartzTotal;
    document.getElementById('GreataxeObsidianTotal').value = varGreataxeObsidianTotal;
}

function fnGreataxeInitialize()
{
    varGreataxeTotal = document.getElementById("GreataxeTotal").value;
    varGreataxeGoldTotal = document.getElementById("GreataxeGoldTotal").value;
    varGreataxeIronTotal = document.getElementById("GreataxeIronTotal").value;
    varGreataxeWoodTotal = document.getElementById("GreataxeWoodTotal").value;
    varGreataxeLeatherTotal = document.getElementById("GreataxeLeatherTotal").value;
    varGreataxeSelentineTotal = document.getElementById("GreataxeSelentineTotal").value;
    varGreataxeVeilronTotal = document.getElementById("GreataxeVeilronTotal").value;
    varGreataxeNeithalTotal = document.getElementById("GreataxeNeithalTotal").value;
    varGreataxeLeensparTotal = document.getElementById("GreataxeLeensparTotal").value;
    varGreataxeTheyrilTotal = document.getElementById("GreataxeTheyrilTotal").value;
    varGreataxeStoneTotal = document.getElementById("GreataxeStoneTotal").value;
    varGreataxeBoneTotal = document.getElementById("GreataxeBoneTotal").value;
    varGreataxePrimevalQuintessenceTotal = document.getElementById("GreataxePrimevalQuintessenceTotal").value;
    varGreataxeRadiantQuartzTotal = document.getElementById("GreataxeRadiantQuartzTotal").value;
    varGreataxeObsidianTotal = document.getElementById("GreataxeObsidianTotal").value;

    // *** Greataxe VARIABLES ***
	//Aernaran
    varGreataxe01Quantity = document.getElementById("Greataxe01Quantity").value;
    varGreataxe01Price = document.getElementById("Greataxe01Price").value;
    varGreataxe01Success = document.getElementById("Greataxe01Success").value;
    varGreataxe01Gold = 0
    varGreataxe01Iron = 3
    varGreataxe01Wood = 2
    varGreataxe01Leather = 2
    varGreataxe01Selentine = 0
    varGreataxe01Veilron = 0
    varGreataxe01Neithal = 0
    varGreataxe01Leenspar = 0
    varGreataxe01Theyril = 0
    varGreataxe01Stone = 0
    varGreataxe01Bone = 0
    varGreataxe01PrimevalQuintessence = 0
    varGreataxe01RadiantQuartz = 0
    varGreataxe01Obsidian = 0
	//Mercian Double-Bladed Axe
    varGreataxe02Quantity = document.getElementById("Greataxe02Quantity").value;
    varGreataxe02Price = document.getElementById("Greataxe02Price").value;
    varGreataxe02Success = document.getElementById("Greataxe02Success").value;
    varGreataxe02Gold = 0
    varGreataxe02Iron = 4
    varGreataxe02Wood = 2
    varGreataxe02Leather = 0
    varGreataxe02Selentine = 0
    varGreataxe02Veilron = 0
    varGreataxe02Neithal = 0
    varGreataxe02Leenspar = 0
    varGreataxe02Theyril = 0
    varGreataxe02Stone = 0
    varGreataxe02Bone = 0
    varGreataxe02PrimevalQuintessence = 0
    varGreataxe02RadiantQuartz = 0
    varGreataxe02Obsidian = 0
	//Mirdain Waraxe
    varGreataxe03Quantity = document.getElementById("Greataxe03Quantity").value;
    varGreataxe03Price = document.getElementById("Greataxe03Price").value;
    varGreataxe03Success = document.getElementById("Greataxe03Success").value;
    varGreataxe03Gold = 0
    varGreataxe03Iron = 4
    varGreataxe03Wood = 2
    varGreataxe03Leather = 0
    varGreataxe03Selentine = 0
    varGreataxe03Veilron = 0
    varGreataxe03Neithal = 0
    varGreataxe03Leenspar = 0
    varGreataxe03Theyril = 0
    varGreataxe03Stone = 0
    varGreataxe03Bone = 0
    varGreataxe03PrimevalQuintessence = 0
    varGreataxe03RadiantQuartz = 0
    varGreataxe03Obsidian = 0
	//Dwarven Greataxe
    varGreataxe04Quantity = document.getElementById("Greataxe04Quantity").value;
    varGreataxe04Price = document.getElementById("Greataxe04Price").value;
    varGreataxe04Success = document.getElementById("Greataxe04Success").value;
    varGreataxe04Gold = 0
    varGreataxe04Iron = 5
    varGreataxe04Wood = 1
    varGreataxe04Leather = 0
    varGreataxe04Selentine = 0
    varGreataxe04Veilron = 0
    varGreataxe04Neithal = 0
    varGreataxe04Leenspar = 0
    varGreataxe04Theyril = 0
    varGreataxe04Stone = 0
    varGreataxe04Bone = 0
    varGreataxe04PrimevalQuintessence = 0
    varGreataxe04RadiantQuartz = 0
    varGreataxe04Obsidian = 0
	//Mahirim Heavy Axe
    varGreataxe05Quantity = document.getElementById("Greataxe05Quantity").value;
    varGreataxe05Price = document.getElementById("Greataxe05Price").value;
    varGreataxe05Success = document.getElementById("Greataxe05Success").value;
    varGreataxe05Gold = 0
    varGreataxe05Iron = 4
    varGreataxe05Wood = 2
    varGreataxe05Leather = 0
    varGreataxe05Selentine = 0
    varGreataxe05Veilron = 0
    varGreataxe05Neithal = 0
    varGreataxe05Leenspar = 0
    varGreataxe05Theyril = 0
    varGreataxe05Stone = 0
    varGreataxe05Bone = 0
    varGreataxe05PrimevalQuintessence = 0
    varGreataxe05RadiantQuartz = 0
    varGreataxe05Obsidian = 0
	//Orkish Waraxe
    varGreataxe06Quantity = document.getElementById("Greataxe06Quantity").value;
    varGreataxe06Price = document.getElementById("Greataxe06Price").value;
    varGreataxe06Success = document.getElementById("Greataxe06Success").value;
    varGreataxe06Gold = 0
    varGreataxe06Iron = 5
    varGreataxe06Wood = 1
    varGreataxe06Leather = 0
    varGreataxe06Selentine = 0
    varGreataxe06Veilron = 0
    varGreataxe06Neithal = 0
    varGreataxe06Leenspar = 0
    varGreataxe06Theyril = 0
    varGreataxe06Stone = 0
    varGreataxe06Bone = 0
    varGreataxe06PrimevalQuintessence = 0
    varGreataxe06RadiantQuartz = 0
    varGreataxe06Obsidian = 0
	//Alfar Large Axe
    varGreataxe07Quantity = document.getElementById("Greataxe07Quantity").value;
    varGreataxe07Price = document.getElementById("Greataxe07Price").value;
    varGreataxe07Success = document.getElementById("Greataxe07Success").value;
    varGreataxe07Gold = 0
    varGreataxe07Iron = 5
    varGreataxe07Wood = 1
    varGreataxe07Leather = 0
    varGreataxe07Selentine = 0
    varGreataxe07Veilron = 0
    varGreataxe07Neithal = 0
    varGreataxe07Leenspar = 0
    varGreataxe07Theyril = 0
    varGreataxe07Stone = 0
    varGreataxe07Bone = 0
    varGreataxe07PrimevalQuintessence = 0
    varGreataxe07RadiantQuartz = 0
    varGreataxe07Obsidian = 0
	//Spirit Axe
    varGreataxe08Quantity = document.getElementById("Greataxe08Quantity").value;
    varGreataxe08Price = document.getElementById("Greataxe08Price").value;
    varGreataxe08Success = document.getElementById("Greataxe08Success").value;
    varGreataxe08Gold = 15
    varGreataxe08Iron = 0
    varGreataxe08Wood = 5
    varGreataxe08Leather = 3
    varGreataxe08Selentine = 0
    varGreataxe08Veilron = 0
    varGreataxe08Neithal = 0
    varGreataxe08Leenspar = 0
    varGreataxe08Theyril = 0
    varGreataxe08Stone = 0
    varGreataxe08Bone = 12
    varGreataxe08PrimevalQuintessence = 0
    varGreataxe08RadiantQuartz = 0
    varGreataxe08Obsidian = 0
	//Ravager
    varGreataxe09Quantity = document.getElementById("Greataxe09Quantity").value;
    varGreataxe09Price = document.getElementById("Greataxe09Price").value;
    varGreataxe09Success = document.getElementById("Greataxe09Success").value;
    varGreataxe09Gold = 15
    varGreataxe09Iron = 0
    varGreataxe09Wood = 5
    varGreataxe09Leather = 5
    varGreataxe09Selentine = 0
    varGreataxe09Veilron = 0
    varGreataxe09Neithal = 0
    varGreataxe09Leenspar = 0
    varGreataxe09Theyril = 0
    varGreataxe09Stone = 10
    varGreataxe09Bone = 0
    varGreataxe09PrimevalQuintessence = 0
    varGreataxe09RadiantQuartz = 0
    varGreataxe09Obsidian = 0
	//Beastbrand
    varGreataxe10Quantity = document.getElementById("Greataxe10Quantity").value;
    varGreataxe10Price = document.getElementById("Greataxe10Price").value;
    varGreataxe10Success = document.getElementById("Greataxe10Success").value;
    varGreataxe10Gold = 15
    varGreataxe10Iron = 6
    varGreataxe10Wood = 3
    varGreataxe10Leather = 0
    varGreataxe10Selentine = 0
    varGreataxe10Veilron = 0
    varGreataxe10Neithal = 0
    varGreataxe10Leenspar = 0
    varGreataxe10Theyril = 0
    varGreataxe10Stone = 0
    varGreataxe10Bone = 0
    varGreataxe10PrimevalQuintessence = 0
    varGreataxe10RadiantQuartz = 0
    varGreataxe10Obsidian = 0
	//Hornclaw
    varGreataxe11Quantity = document.getElementById("Greataxe11Quantity").value;
    varGreataxe11Price = document.getElementById("Greataxe11Price").value;
    varGreataxe11Success = document.getElementById("Greataxe11Success").value;
    varGreataxe11Gold = 30
    varGreataxe11Iron = 8
    varGreataxe11Wood = 3
    varGreataxe11Leather = 0
    varGreataxe11Selentine = 0
    varGreataxe11Veilron = 0
    varGreataxe11Neithal = 0
    varGreataxe11Leenspar = 0
    varGreataxe11Theyril = 0
    varGreataxe11Stone = 0
    varGreataxe11Bone = 6
    varGreataxe11PrimevalQuintessence = 0
    varGreataxe11RadiantQuartz = 0
    varGreataxe11Obsidian = 0
	//Revenant Double-Bladed Axe
    varGreataxe12Quantity = document.getElementById("Greataxe12Quantity").value;
    varGreataxe12Price = document.getElementById("Greataxe12Price").value;
    varGreataxe12Success = document.getElementById("Greataxe12Success").value;
    varGreataxe12Gold = 30
    varGreataxe12Iron = 9
    varGreataxe12Wood = 4
    varGreataxe12Leather = 0
    varGreataxe12Selentine = 0
    varGreataxe12Veilron = 0
    varGreataxe12Neithal = 0
    varGreataxe12Leenspar = 0
    varGreataxe12Theyril = 0
    varGreataxe12Stone = 0
    varGreataxe12Bone = 0
    varGreataxe12PrimevalQuintessence = 0
    varGreataxe12RadiantQuartz = 0
    varGreataxe12Obsidian = 0
	//Feral Edge
    varGreataxe13Quantity = document.getElementById("Greataxe13Quantity").value;
    varGreataxe13Price = document.getElementById("Greataxe13Price").value;
    varGreataxe13Success = document.getElementById("Greataxe13Success").value;
    varGreataxe13Gold = 30
    varGreataxe13Iron = 9
    varGreataxe13Wood = 4
    varGreataxe13Leather = 0
    varGreataxe13Selentine = 0
    varGreataxe13Veilron = 0
    varGreataxe13Neithal = 0
    varGreataxe13Leenspar = 0
    varGreataxe13Theyril = 0
    varGreataxe13Stone = 0
    varGreataxe13Bone = 0
    varGreataxe13PrimevalQuintessence = 0
    varGreataxe13RadiantQuartz = 0
    varGreataxe13Obsidian = 0
	//Sicklehead
    varGreataxe14Quantity = document.getElementById("Greataxe14Quantity").value;
    varGreataxe14Price = document.getElementById("Greataxe14Price").value;
    varGreataxe14Success = document.getElementById("Greataxe14Success").value;
    varGreataxe14Gold = 60
    varGreataxe14Iron = 7
    varGreataxe14Wood = 12
    varGreataxe14Leather = 0
    varGreataxe14Selentine = 0
    varGreataxe14Veilron = 0
    varGreataxe14Neithal = 0
    varGreataxe14Leenspar = 0
    varGreataxe14Theyril = 0
    varGreataxe14Stone = 0
    varGreataxe14Bone = 30
    varGreataxe14PrimevalQuintessence = 0
    varGreataxe14RadiantQuartz = 0
    varGreataxe14Obsidian = 0
	//Doomaxe
    varGreataxe15Quantity = document.getElementById("Greataxe15Quantity").value;
    varGreataxe15Price = document.getElementById("Greataxe15Price").value;
    varGreataxe15Success = document.getElementById("Greataxe15Success").value;
    varGreataxe15Gold = 60
    varGreataxe15Iron = 16
    varGreataxe15Wood = 4
    varGreataxe15Leather = 0
    varGreataxe15Selentine = 0
    varGreataxe15Veilron = 0
    varGreataxe15Neithal = 0
    varGreataxe15Leenspar = 0
    varGreataxe15Theyril = 0
    varGreataxe15Stone = 0
    varGreataxe15Bone = 0
    varGreataxe15PrimevalQuintessence = 0
    varGreataxe15RadiantQuartz = 0
    varGreataxe15Obsidian = 0
	//Korthar
    varGreataxe16Quantity = document.getElementById("Greataxe16Quantity").value;
    varGreataxe16Price = document.getElementById("Greataxe16Price").value;
    varGreataxe16Success = document.getElementById("Greataxe16Success").value;
    varGreataxe16Gold = 60
    varGreataxe16Iron = 16
    varGreataxe16Wood = 4
    varGreataxe16Leather = 0
    varGreataxe16Selentine = 0
    varGreataxe16Veilron = 0
    varGreataxe16Neithal = 0
    varGreataxe16Leenspar = 0
    varGreataxe16Theyril = 0
    varGreataxe16Stone = 0
    varGreataxe16Bone = 0
    varGreataxe16PrimevalQuintessence = 0
    varGreataxe16RadiantQuartz = 0
    varGreataxe16Obsidian = 0
	//Minotaur Great Axe
    varGreataxe17Quantity = document.getElementById("Greataxe17Quantity").value;
    varGreataxe17Price = document.getElementById("Greataxe17Price").value;
    varGreataxe17Success = document.getElementById("Greataxe17Success").value;
    varGreataxe17Gold = 160
    varGreataxe17Iron = 26
    varGreataxe17Wood = 0
    varGreataxe17Leather = 10
    varGreataxe17Selentine = 0
    varGreataxe17Veilron = 0
    varGreataxe17Neithal = 0
    varGreataxe17Leenspar = 0
    varGreataxe17Theyril = 0
    varGreataxe17Stone = 0
    varGreataxe17Bone = 0
    varGreataxe17PrimevalQuintessence = 0
    varGreataxe17RadiantQuartz = 0
    varGreataxe17Obsidian = 0
	//Talon Axe
    varGreataxe18Quantity = document.getElementById("Greataxe18Quantity").value;
    varGreataxe18Price = document.getElementById("Greataxe18Price").value;
    varGreataxe18Success = document.getElementById("Greataxe18Success").value;
    varGreataxe18Gold = 160
    varGreataxe18Iron = 32
    varGreataxe18Wood = 4
    varGreataxe18Leather = 0
    varGreataxe18Selentine = 0
    varGreataxe18Veilron = 0
    varGreataxe18Neithal = 0
    varGreataxe18Leenspar = 0
    varGreataxe18Theyril = 0
    varGreataxe18Stone = 0
    varGreataxe18Bone = 0
    varGreataxe18PrimevalQuintessence = 0
    varGreataxe18RadiantQuartz = 0
    varGreataxe18Obsidian = 0
	//Mercian Waraxe
    varGreataxe19Quantity = document.getElementById("Greataxe19Quantity").value;
    varGreataxe19Price = document.getElementById("Greataxe19Price").value;
    varGreataxe19Success = document.getElementById("Greataxe19Success").value;
    varGreataxe19Gold = 160
    varGreataxe19Iron = 32
    varGreataxe19Wood = 4
    varGreataxe19Leather = 0
    varGreataxe19Selentine = 0
    varGreataxe19Veilron = 0
    varGreataxe19Neithal = 0
    varGreataxe19Leenspar = 0
    varGreataxe19Theyril = 0
    varGreataxe19Stone = 0
    varGreataxe19Bone = 0
    varGreataxe19PrimevalQuintessence = 0
    varGreataxe19RadiantQuartz = 0
    varGreataxe19Obsidian = 0
	//Mirdain Crossaxe
    varGreataxe20Quantity = document.getElementById("Greataxe20Quantity").value;
    varGreataxe20Price = document.getElementById("Greataxe20Price").value;
    varGreataxe20Success = document.getElementById("Greataxe20Success").value;
    varGreataxe20Gold = 160
    varGreataxe20Iron = 32
    varGreataxe20Wood = 4
    varGreataxe20Leather = 0
    varGreataxe20Selentine = 0
    varGreataxe20Veilron = 0
    varGreataxe20Neithal = 0
    varGreataxe20Leenspar = 0
    varGreataxe20Theyril = 0
    varGreataxe20Stone = 0
    varGreataxe20Bone = 0
    varGreataxe20PrimevalQuintessence = 0
    varGreataxe20RadiantQuartz = 0
    varGreataxe20Obsidian = 0
	//Dwarven Battleaxe
    varGreataxe21Quantity = document.getElementById("Greataxe21Quantity").value;
    varGreataxe21Price = document.getElementById("Greataxe21Price").value;
    varGreataxe21Success = document.getElementById("Greataxe21Success").value;
    varGreataxe21Gold = 160
    varGreataxe21Iron = 32
    varGreataxe21Wood = 4
    varGreataxe21Leather = 0
    varGreataxe21Selentine = 0
    varGreataxe21Veilron = 0
    varGreataxe21Neithal = 0
    varGreataxe21Leenspar = 0
    varGreataxe21Theyril = 0
    varGreataxe21Stone = 0
    varGreataxe21Bone = 0
    varGreataxe21PrimevalQuintessence = 0
    varGreataxe21RadiantQuartz = 0
    varGreataxe21Obsidian = 0
	//Mahirim Twinaxe
    varGreataxe22Quantity = document.getElementById("Greataxe22Quantity").value;
    varGreataxe22Price = document.getElementById("Greataxe22Price").value;
    varGreataxe22Success = document.getElementById("Greataxe22Success").value;
    varGreataxe22Gold = 160
    varGreataxe22Iron = 32
    varGreataxe22Wood = 4
    varGreataxe22Leather = 0
    varGreataxe22Selentine = 0
    varGreataxe22Veilron = 0
    varGreataxe22Neithal = 0
    varGreataxe22Leenspar = 0
    varGreataxe22Theyril = 0
    varGreataxe22Stone = 0
    varGreataxe22Bone = 0
    varGreataxe22PrimevalQuintessence = 0
    varGreataxe22RadiantQuartz = 0
    varGreataxe22Obsidian = 0
	//Orkish Headsplitter
    varGreataxe23Quantity = document.getElementById("Greataxe23Quantity").value;
    varGreataxe23Price = document.getElementById("Greataxe23Price").value;
    varGreataxe23Success = document.getElementById("Greataxe23Success").value;
    varGreataxe23Gold = 160
    varGreataxe23Iron = 32
    varGreataxe23Wood = 0
    varGreataxe23Leather = 4
    varGreataxe23Selentine = 0
    varGreataxe23Veilron = 0
    varGreataxe23Neithal = 0
    varGreataxe23Leenspar = 0
    varGreataxe23Theyril = 0
    varGreataxe23Stone = 0
    varGreataxe23Bone = 0
    varGreataxe23PrimevalQuintessence = 0
    varGreataxe23RadiantQuartz = 0
    varGreataxe23Obsidian = 0
	//Alfar Bladeaxe
    varGreataxe24Quantity = document.getElementById("Greataxe24Quantity").value;
    varGreataxe24Price = document.getElementById("Greataxe24Price").value;
    varGreataxe24Success = document.getElementById("Greataxe24Success").value;
    varGreataxe24Gold = 160
    varGreataxe24Iron = 32
    varGreataxe24Wood = 4
    varGreataxe24Leather = 0
    varGreataxe24Selentine = 0
    varGreataxe24Veilron = 0
    varGreataxe24Neithal = 0
    varGreataxe24Leenspar = 0
    varGreataxe24Theyril = 0
    varGreataxe24Stone = 0
    varGreataxe24Bone = 0
    varGreataxe24PrimevalQuintessence = 0
    varGreataxe24RadiantQuartz = 0
    varGreataxe24Obsidian = 0
	//Goraxe
    varGreataxe25Quantity = document.getElementById("Greataxe25Quantity").value;
    varGreataxe25Price = document.getElementById("Greataxe25Price").value;
    varGreataxe25Success = document.getElementById("Greataxe25Success").value;
    varGreataxe25Gold = 250
    varGreataxe25Iron = 18
    varGreataxe25Wood = 0
    varGreataxe25Leather = 4
    varGreataxe25Selentine = 0
    varGreataxe25Veilron = 1
    varGreataxe25Neithal = 0
    varGreataxe25Leenspar = 0
    varGreataxe25Theyril = 0
    varGreataxe25Stone = 0
    varGreataxe25Bone = 0
    varGreataxe25PrimevalQuintessence = 0
    varGreataxe25RadiantQuartz = 0
    varGreataxe25Obsidian = 0
	//Decapitator
    varGreataxe26Quantity = document.getElementById("Greataxe26Quantity").value;
    varGreataxe26Price = document.getElementById("Greataxe26Price").value;
    varGreataxe26Success = document.getElementById("Greataxe26Success").value;
    varGreataxe26Gold = 250
    varGreataxe26Iron = 18
    varGreataxe26Wood = 0
    varGreataxe26Leather = 4
    varGreataxe26Selentine = 1
    varGreataxe26Veilron = 0
    varGreataxe26Neithal = 0
    varGreataxe26Leenspar = 0
    varGreataxe26Theyril = 0
    varGreataxe26Stone = 0
    varGreataxe26Bone = 0
    varGreataxe26PrimevalQuintessence = 0
    varGreataxe26RadiantQuartz = 0
    varGreataxe26Obsidian = 0
	//Executioner's Axe
    varGreataxe27Quantity = document.getElementById("Greataxe27Quantity").value;
    varGreataxe27Price = document.getElementById("Greataxe27Price").value;
    varGreataxe27Success = document.getElementById("Greataxe27Success").value;
    varGreataxe27Gold = 300
    varGreataxe27Iron = 30
    varGreataxe27Wood = 6
    varGreataxe27Leather = 0
    varGreataxe27Selentine = 0
    varGreataxe27Veilron = 2
    varGreataxe27Neithal = 0
    varGreataxe27Leenspar = 0
    varGreataxe27Theyril = 1
    varGreataxe27Stone = 0
    varGreataxe27Bone = 0
    varGreataxe27PrimevalQuintessence = 0
    varGreataxe27RadiantQuartz = 0
    varGreataxe27Obsidian = 0
	//Hexbringer
    varGreataxe28Quantity = document.getElementById("Greataxe28Quantity").value;
    varGreataxe28Price = document.getElementById("Greataxe28Price").value;
    varGreataxe28Success = document.getElementById("Greataxe28Success").value;
    varGreataxe28Gold = 7500
    varGreataxe28Iron = 0
    varGreataxe28Wood = 10
    varGreataxe28Leather = 0
    varGreataxe28Selentine = 0
    varGreataxe28Veilron = 0
    varGreataxe28Neithal = 0
    varGreataxe28Leenspar = 9
    varGreataxe28Theyril = 2
    varGreataxe28Stone = 0
    varGreataxe28Bone = 0
    varGreataxe28PrimevalQuintessence = 3
    varGreataxe28RadiantQuartz = 0
    varGreataxe28Obsidian = 0
    //Aldaruk
    varGreataxe29Quantity = document.getElementById("Greataxe29Quantity").value;
    varGreataxe29Price = document.getElementById("Greataxe29Price").value;
    varGreataxe29Success = document.getElementById("Greataxe29Success").value;
    varGreataxe29Gold = 10000
    varGreataxe29Iron = 20
    varGreataxe29Wood = 0
    varGreataxe29Leather = 0
    varGreataxe29Selentine = 0
    varGreataxe29Veilron = 11
    varGreataxe29Neithal = 0
    varGreataxe29Leenspar = 0
    varGreataxe29Theyril = 0
    varGreataxe29Stone = 0
    varGreataxe29Bone = 0
    varGreataxe29PrimevalQuintessence = 0
    varGreataxe29RadiantQuartz = 3
    varGreataxe29Obsidian = 3
}

/* GREATCLUB */

//Used to reload items from Greatclub
function fnGreatclubReload()  // x= id, z= value
{
    fnGreatclubInitialize()

    fnGreatclub()

    fnGreatclubTotal()
    fnReloadGreatclubPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnGreatclubSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varLeenspar = parseInt(h)
    varTheyril = parseInt(i)
    varSuccess = parseInt(j)
    varStone = parseInt(k)
    varBone = parseInt(l)
    varResonantStormrune = parseInt(m)
    varGargantuaHorn = parseInt(n)
    varEldritchCinder = parseInt(o)
    varIldstein = parseInt(p)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varStone * varStoneValue) + (varBone * varBoneValue) + (varResonantStormrune * varResonantStormruneValue) + (varGargantuaHorn * varGargantuaHornValue) + (varEldritchCinder * varEldritchCinderValue) + (varIldstein * varIldsteinValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Greatclub
function fnGreatclubTotal()
{
    varGreatclubTotal = ((varGreatclub01Price * varGreatclub01Quantity) + (varGreatclub02Price * varGreatclub02Quantity) + (varGreatclub03Price * varGreatclub03Quantity) + (varGreatclub04Price * varGreatclub04Quantity) + (varGreatclub05Price * varGreatclub05Quantity) + (varGreatclub06Price * varGreatclub06Quantity) + (varGreatclub07Price * varGreatclub07Quantity) + (varGreatclub08Price * varGreatclub08Quantity) + (varGreatclub09Price * varGreatclub09Quantity) + (varGreatclub10Price * varGreatclub10Quantity) + (varGreatclub11Price * varGreatclub11Quantity) + (varGreatclub12Price * varGreatclub12Quantity) + (varGreatclub13Price * varGreatclub13Quantity) + (varGreatclub14Price * varGreatclub14Quantity) + (varGreatclub15Price * varGreatclub15Quantity) + (varGreatclub16Price * varGreatclub16Quantity) + (varGreatclub17Price * varGreatclub17Quantity) + (varGreatclub18Price * varGreatclub18Quantity) + (varGreatclub19Price * varGreatclub19Quantity) + (varGreatclub20Price * varGreatclub20Quantity) + (varGreatclub21Price * varGreatclub21Quantity) + (varGreatclub22Price * varGreatclub22Quantity) + (varGreatclub23Price * varGreatclub23Quantity) + (varGreatclub24Price * varGreatclub24Quantity) + (varGreatclub25Price * varGreatclub25Quantity) + (varGreatclub26Price * varGreatclub26Quantity) + (varGreatclub27Price * varGreatclub27Quantity) + (varGreatclub28Price * varGreatclub28Quantity));
    varGreatclubGoldTotal = ((varGreatclub01Gold * varGreatclub01Quantity) + (varGreatclub02Gold * varGreatclub02Quantity) + (varGreatclub03Gold * varGreatclub03Quantity) + (varGreatclub04Gold * varGreatclub04Quantity) + (varGreatclub05Gold * varGreatclub05Quantity) + (varGreatclub06Gold * varGreatclub06Quantity) + (varGreatclub07Gold * varGreatclub07Quantity) + (varGreatclub08Gold * varGreatclub08Quantity) + (varGreatclub09Gold * varGreatclub09Quantity) + (varGreatclub10Gold * varGreatclub10Quantity) + (varGreatclub11Gold * varGreatclub11Quantity) + (varGreatclub12Gold * varGreatclub12Quantity) + (varGreatclub13Gold * varGreatclub13Quantity) + (varGreatclub14Gold * varGreatclub14Quantity) + (varGreatclub15Gold * varGreatclub15Quantity) + (varGreatclub16Gold * varGreatclub16Quantity) + (varGreatclub17Gold * varGreatclub17Quantity) + (varGreatclub18Gold * varGreatclub18Quantity) + (varGreatclub19Gold * varGreatclub19Quantity) + (varGreatclub20Gold * varGreatclub20Quantity) + (varGreatclub21Gold * varGreatclub21Quantity) + (varGreatclub22Gold * varGreatclub22Quantity) + (varGreatclub23Gold * varGreatclub23Quantity) + (varGreatclub24Gold * varGreatclub24Quantity) + (varGreatclub25Gold * varGreatclub25Quantity) + (varGreatclub26Gold * varGreatclub26Quantity) + (varGreatclub27Gold * varGreatclub27Quantity) + (varGreatclub28Gold * varGreatclub28Quantity));
    varGreatclubIronTotal = ((varGreatclub01Iron * varGreatclub01Quantity) + (varGreatclub02Iron * varGreatclub02Quantity) + (varGreatclub03Iron * varGreatclub03Quantity) + (varGreatclub04Iron * varGreatclub04Quantity) + (varGreatclub05Iron * varGreatclub05Quantity) + (varGreatclub06Iron * varGreatclub06Quantity) + (varGreatclub07Iron * varGreatclub07Quantity) + (varGreatclub08Iron * varGreatclub08Quantity) + (varGreatclub09Iron * varGreatclub09Quantity) + (varGreatclub10Iron * varGreatclub10Quantity) + (varGreatclub11Iron * varGreatclub11Quantity) + (varGreatclub12Iron * varGreatclub12Quantity) + (varGreatclub13Iron * varGreatclub13Quantity) + (varGreatclub14Iron * varGreatclub14Quantity) + (varGreatclub15Iron * varGreatclub15Quantity) + (varGreatclub16Iron * varGreatclub16Quantity) + (varGreatclub17Iron * varGreatclub17Quantity) + (varGreatclub18Iron * varGreatclub18Quantity) + (varGreatclub19Iron * varGreatclub19Quantity) + (varGreatclub20Iron * varGreatclub20Quantity) + (varGreatclub21Iron * varGreatclub21Quantity) + (varGreatclub22Iron * varGreatclub22Quantity) + (varGreatclub23Iron * varGreatclub23Quantity) + (varGreatclub24Iron * varGreatclub24Quantity) + (varGreatclub25Iron * varGreatclub25Quantity) + (varGreatclub26Iron * varGreatclub26Quantity) + (varGreatclub27Iron * varGreatclub27Quantity) + (varGreatclub28Iron * varGreatclub28Quantity));
    varGreatclubWoodTotal = ((varGreatclub01Wood * varGreatclub01Quantity) + (varGreatclub02Wood * varGreatclub02Quantity) + (varGreatclub03Wood * varGreatclub03Quantity) + (varGreatclub04Wood * varGreatclub04Quantity) + (varGreatclub05Wood * varGreatclub05Quantity) + (varGreatclub06Wood * varGreatclub06Quantity) + (varGreatclub07Wood * varGreatclub07Quantity) + (varGreatclub08Wood * varGreatclub08Quantity) + (varGreatclub09Wood * varGreatclub09Quantity) + (varGreatclub10Wood * varGreatclub10Quantity) + (varGreatclub11Wood * varGreatclub11Quantity) + (varGreatclub12Wood * varGreatclub12Quantity) + (varGreatclub13Wood * varGreatclub13Quantity) + (varGreatclub14Wood * varGreatclub14Quantity) + (varGreatclub15Wood * varGreatclub15Quantity) + (varGreatclub16Wood * varGreatclub16Quantity) + (varGreatclub17Wood * varGreatclub17Quantity) + (varGreatclub18Wood * varGreatclub18Quantity) + (varGreatclub19Wood * varGreatclub19Quantity) + (varGreatclub20Wood * varGreatclub20Quantity) + (varGreatclub21Wood * varGreatclub21Quantity) + (varGreatclub22Wood * varGreatclub22Quantity) + (varGreatclub23Wood * varGreatclub23Quantity) + (varGreatclub24Wood * varGreatclub24Quantity) + (varGreatclub25Wood * varGreatclub25Quantity) + (varGreatclub26Wood * varGreatclub26Quantity) + (varGreatclub27Wood * varGreatclub27Quantity) + (varGreatclub28Wood * varGreatclub28Quantity));
    varGreatclubLeatherTotal = ((varGreatclub01Leather * varGreatclub01Quantity) + (varGreatclub02Leather * varGreatclub02Quantity) + (varGreatclub03Leather * varGreatclub03Quantity) + (varGreatclub04Leather * varGreatclub04Quantity) + (varGreatclub05Leather * varGreatclub05Quantity) + (varGreatclub06Leather * varGreatclub06Quantity) + (varGreatclub07Leather * varGreatclub07Quantity) + (varGreatclub08Leather * varGreatclub08Quantity) + (varGreatclub09Leather * varGreatclub09Quantity) + (varGreatclub10Leather * varGreatclub10Quantity) + (varGreatclub11Leather * varGreatclub11Quantity) + (varGreatclub12Leather * varGreatclub12Quantity) + (varGreatclub13Leather * varGreatclub13Quantity) + (varGreatclub14Leather * varGreatclub14Quantity) + (varGreatclub15Leather * varGreatclub15Quantity) + (varGreatclub16Leather * varGreatclub16Quantity) + (varGreatclub17Leather * varGreatclub17Quantity) + (varGreatclub18Leather * varGreatclub18Quantity) + (varGreatclub19Leather * varGreatclub19Quantity) + (varGreatclub20Leather * varGreatclub20Quantity) + (varGreatclub21Leather * varGreatclub21Quantity) + (varGreatclub22Leather * varGreatclub22Quantity) + (varGreatclub23Leather * varGreatclub23Quantity) + (varGreatclub24Leather * varGreatclub24Quantity) + (varGreatclub25Leather * varGreatclub25Quantity) + (varGreatclub26Leather * varGreatclub26Quantity) + (varGreatclub27Leather * varGreatclub27Quantity) + (varGreatclub28Leather * varGreatclub28Quantity));
    varGreatclubSelentineTotal = ((varGreatclub01Selentine * varGreatclub01Quantity) + (varGreatclub02Selentine * varGreatclub02Quantity) + (varGreatclub03Selentine * varGreatclub03Quantity) + (varGreatclub04Selentine * varGreatclub04Quantity) + (varGreatclub05Selentine * varGreatclub05Quantity) + (varGreatclub06Selentine * varGreatclub06Quantity) + (varGreatclub07Selentine * varGreatclub07Quantity) + (varGreatclub08Selentine * varGreatclub08Quantity) + (varGreatclub09Selentine * varGreatclub09Quantity) + (varGreatclub10Selentine * varGreatclub10Quantity) + (varGreatclub11Selentine * varGreatclub11Quantity) + (varGreatclub12Selentine * varGreatclub12Quantity) + (varGreatclub13Selentine * varGreatclub13Quantity) + (varGreatclub14Selentine * varGreatclub14Quantity) + (varGreatclub15Selentine * varGreatclub15Quantity) + (varGreatclub16Selentine * varGreatclub16Quantity) + (varGreatclub17Selentine * varGreatclub17Quantity) + (varGreatclub18Selentine * varGreatclub18Quantity) + (varGreatclub19Selentine * varGreatclub19Quantity) + (varGreatclub20Selentine * varGreatclub20Quantity) + (varGreatclub21Selentine * varGreatclub21Quantity) + (varGreatclub22Selentine * varGreatclub22Quantity) + (varGreatclub23Selentine * varGreatclub23Quantity) + (varGreatclub24Selentine * varGreatclub24Quantity) + (varGreatclub25Selentine * varGreatclub25Quantity) + (varGreatclub26Selentine * varGreatclub26Quantity) + (varGreatclub27Selentine * varGreatclub27Quantity) + (varGreatclub28Selentine * varGreatclub28Quantity));
    varGreatclubVeilronTotal = ((varGreatclub01Veilron * varGreatclub01Quantity) + (varGreatclub02Veilron * varGreatclub02Quantity) + (varGreatclub03Veilron * varGreatclub03Quantity) + (varGreatclub04Veilron * varGreatclub04Quantity) + (varGreatclub05Veilron * varGreatclub05Quantity) + (varGreatclub06Veilron * varGreatclub06Quantity) + (varGreatclub07Veilron * varGreatclub07Quantity) + (varGreatclub08Veilron * varGreatclub08Quantity) + (varGreatclub09Veilron * varGreatclub09Quantity) + (varGreatclub10Veilron * varGreatclub10Quantity) + (varGreatclub11Veilron * varGreatclub11Quantity) + (varGreatclub12Veilron * varGreatclub12Quantity) + (varGreatclub13Veilron * varGreatclub13Quantity) + (varGreatclub14Veilron * varGreatclub14Quantity) + (varGreatclub15Veilron * varGreatclub15Quantity) + (varGreatclub16Veilron * varGreatclub16Quantity) + (varGreatclub17Veilron * varGreatclub17Quantity) + (varGreatclub18Veilron * varGreatclub18Quantity) + (varGreatclub19Veilron * varGreatclub19Quantity) + (varGreatclub20Veilron * varGreatclub20Quantity) + (varGreatclub21Veilron * varGreatclub21Quantity) + (varGreatclub22Veilron * varGreatclub22Quantity) + (varGreatclub23Veilron * varGreatclub23Quantity) + (varGreatclub24Veilron * varGreatclub24Quantity) + (varGreatclub25Veilron * varGreatclub25Quantity) + (varGreatclub26Veilron * varGreatclub26Quantity) + (varGreatclub27Veilron * varGreatclub27Quantity) + (varGreatclub28Veilron * varGreatclub28Quantity));
    varGreatclubNeithalTotal = ((varGreatclub01Neithal * varGreatclub01Quantity) + (varGreatclub02Neithal * varGreatclub02Quantity) + (varGreatclub03Neithal * varGreatclub03Quantity) + (varGreatclub04Neithal * varGreatclub04Quantity) + (varGreatclub05Neithal * varGreatclub05Quantity) + (varGreatclub06Neithal * varGreatclub06Quantity) + (varGreatclub07Neithal * varGreatclub07Quantity) + (varGreatclub08Neithal * varGreatclub08Quantity) + (varGreatclub09Neithal * varGreatclub09Quantity) + (varGreatclub10Neithal * varGreatclub10Quantity) + (varGreatclub11Neithal * varGreatclub11Quantity) + (varGreatclub12Neithal * varGreatclub12Quantity) + (varGreatclub13Neithal * varGreatclub13Quantity) + (varGreatclub14Neithal * varGreatclub14Quantity) + (varGreatclub15Neithal * varGreatclub15Quantity) + (varGreatclub16Neithal * varGreatclub16Quantity) + (varGreatclub17Neithal * varGreatclub17Quantity) + (varGreatclub18Neithal * varGreatclub18Quantity) + (varGreatclub19Neithal * varGreatclub19Quantity) + (varGreatclub20Neithal * varGreatclub20Quantity) + (varGreatclub21Neithal * varGreatclub21Quantity) + (varGreatclub22Neithal * varGreatclub22Quantity) + (varGreatclub23Neithal * varGreatclub23Quantity) + (varGreatclub24Neithal * varGreatclub24Quantity) + (varGreatclub25Neithal * varGreatclub25Quantity) + (varGreatclub26Neithal * varGreatclub26Quantity) + (varGreatclub27Neithal * varGreatclub27Quantity) + (varGreatclub28Neithal * varGreatclub28Quantity));
    varGreatclubLeensparTotal = ((varGreatclub01Leenspar * varGreatclub01Quantity) + (varGreatclub02Leenspar * varGreatclub02Quantity) + (varGreatclub03Leenspar * varGreatclub03Quantity) + (varGreatclub04Leenspar * varGreatclub04Quantity) + (varGreatclub05Leenspar * varGreatclub05Quantity) + (varGreatclub06Leenspar * varGreatclub06Quantity) + (varGreatclub07Leenspar * varGreatclub07Quantity) + (varGreatclub08Leenspar * varGreatclub08Quantity) + (varGreatclub09Leenspar * varGreatclub09Quantity) + (varGreatclub10Leenspar * varGreatclub10Quantity) + (varGreatclub11Leenspar * varGreatclub11Quantity) + (varGreatclub12Leenspar * varGreatclub12Quantity) + (varGreatclub13Leenspar * varGreatclub13Quantity) + (varGreatclub14Leenspar * varGreatclub14Quantity) + (varGreatclub15Leenspar * varGreatclub15Quantity) + (varGreatclub16Leenspar * varGreatclub16Quantity) + (varGreatclub17Leenspar * varGreatclub17Quantity) + (varGreatclub18Leenspar * varGreatclub18Quantity) + (varGreatclub19Leenspar * varGreatclub19Quantity) + (varGreatclub20Leenspar * varGreatclub20Quantity) + (varGreatclub21Leenspar * varGreatclub21Quantity) + (varGreatclub22Leenspar * varGreatclub22Quantity) + (varGreatclub23Leenspar * varGreatclub23Quantity) + (varGreatclub24Leenspar * varGreatclub24Quantity) + (varGreatclub25Leenspar * varGreatclub25Quantity) + (varGreatclub26Leenspar * varGreatclub26Quantity) + (varGreatclub27Leenspar * varGreatclub27Quantity) + (varGreatclub28Leenspar * varGreatclub28Quantity));
    varGreatclubTheyrilTotal = ((varGreatclub01Theyril * varGreatclub01Quantity) + (varGreatclub02Theyril * varGreatclub02Quantity) + (varGreatclub03Theyril * varGreatclub03Quantity) + (varGreatclub04Theyril * varGreatclub04Quantity) + (varGreatclub05Theyril * varGreatclub05Quantity) + (varGreatclub06Theyril * varGreatclub06Quantity) + (varGreatclub07Theyril * varGreatclub07Quantity) + (varGreatclub08Theyril * varGreatclub08Quantity) + (varGreatclub09Theyril * varGreatclub09Quantity) + (varGreatclub10Theyril * varGreatclub10Quantity) + (varGreatclub11Theyril * varGreatclub11Quantity) + (varGreatclub12Theyril * varGreatclub12Quantity) + (varGreatclub13Theyril * varGreatclub13Quantity) + (varGreatclub14Theyril * varGreatclub14Quantity) + (varGreatclub15Theyril * varGreatclub15Quantity) + (varGreatclub16Theyril * varGreatclub16Quantity) + (varGreatclub17Theyril * varGreatclub17Quantity) + (varGreatclub18Theyril * varGreatclub18Quantity) + (varGreatclub19Theyril * varGreatclub19Quantity) + (varGreatclub20Theyril * varGreatclub20Quantity) + (varGreatclub21Theyril * varGreatclub21Quantity) + (varGreatclub22Theyril * varGreatclub22Quantity) + (varGreatclub23Theyril * varGreatclub23Quantity) + (varGreatclub24Theyril * varGreatclub24Quantity) + (varGreatclub25Theyril * varGreatclub25Quantity) + (varGreatclub26Theyril * varGreatclub26Quantity) + (varGreatclub27Theyril * varGreatclub27Quantity) + (varGreatclub28Theyril * varGreatclub28Quantity));
    varGreatclubStoneTotal = ((varGreatclub01Stone * varGreatclub01Quantity) + (varGreatclub02Stone * varGreatclub02Quantity) + (varGreatclub03Stone * varGreatclub03Quantity) + (varGreatclub04Stone * varGreatclub04Quantity) + (varGreatclub05Stone * varGreatclub05Quantity) + (varGreatclub06Stone * varGreatclub06Quantity) + (varGreatclub07Stone * varGreatclub07Quantity) + (varGreatclub08Stone * varGreatclub08Quantity) + (varGreatclub09Stone * varGreatclub09Quantity) + (varGreatclub10Stone * varGreatclub10Quantity) + (varGreatclub11Stone * varGreatclub11Quantity) + (varGreatclub12Stone * varGreatclub12Quantity) + (varGreatclub13Stone * varGreatclub13Quantity) + (varGreatclub14Stone * varGreatclub14Quantity) + (varGreatclub15Stone * varGreatclub15Quantity) + (varGreatclub16Stone * varGreatclub16Quantity) + (varGreatclub17Stone * varGreatclub17Quantity) + (varGreatclub18Stone * varGreatclub18Quantity) + (varGreatclub19Stone * varGreatclub19Quantity) + (varGreatclub20Stone * varGreatclub20Quantity) + (varGreatclub21Stone * varGreatclub21Quantity) + (varGreatclub22Stone * varGreatclub22Quantity) + (varGreatclub23Stone * varGreatclub23Quantity) + (varGreatclub24Stone * varGreatclub24Quantity) + (varGreatclub25Stone * varGreatclub25Quantity) + (varGreatclub26Stone * varGreatclub26Quantity) + (varGreatclub27Stone * varGreatclub27Quantity) + (varGreatclub28Stone * varGreatclub28Quantity));
    varGreatclubBoneTotal = ((varGreatclub01Bone * varGreatclub01Quantity) + (varGreatclub02Bone * varGreatclub02Quantity) + (varGreatclub03Bone * varGreatclub03Quantity) + (varGreatclub04Bone * varGreatclub04Quantity) + (varGreatclub05Bone * varGreatclub05Quantity) + (varGreatclub06Bone * varGreatclub06Quantity) + (varGreatclub07Bone * varGreatclub07Quantity) + (varGreatclub08Bone * varGreatclub08Quantity) + (varGreatclub09Bone * varGreatclub09Quantity) + (varGreatclub10Bone * varGreatclub10Quantity) + (varGreatclub11Bone * varGreatclub11Quantity) + (varGreatclub12Bone * varGreatclub12Quantity) + (varGreatclub13Bone * varGreatclub13Quantity) + (varGreatclub14Bone * varGreatclub14Quantity) + (varGreatclub15Bone * varGreatclub15Quantity) + (varGreatclub16Bone * varGreatclub16Quantity) + (varGreatclub17Bone * varGreatclub17Quantity) + (varGreatclub18Bone * varGreatclub18Quantity) + (varGreatclub19Bone * varGreatclub19Quantity) + (varGreatclub20Bone * varGreatclub20Quantity) + (varGreatclub21Bone * varGreatclub21Quantity) + (varGreatclub22Bone * varGreatclub22Quantity) + (varGreatclub23Bone * varGreatclub23Quantity) + (varGreatclub24Bone * varGreatclub24Quantity) + (varGreatclub25Bone * varGreatclub25Quantity) + (varGreatclub26Bone * varGreatclub26Quantity) + (varGreatclub27Bone * varGreatclub27Quantity) + (varGreatclub28Bone * varGreatclub28Quantity));
    varGreatclubResonantStormruneTotal = ((varGreatclub01ResonantStormrune * varGreatclub01Quantity) + (varGreatclub02ResonantStormrune * varGreatclub02Quantity) + (varGreatclub03ResonantStormrune * varGreatclub03Quantity) + (varGreatclub04ResonantStormrune * varGreatclub04Quantity) + (varGreatclub05ResonantStormrune * varGreatclub05Quantity) + (varGreatclub06ResonantStormrune * varGreatclub06Quantity) + (varGreatclub07ResonantStormrune * varGreatclub07Quantity) + (varGreatclub08ResonantStormrune * varGreatclub08Quantity) + (varGreatclub09ResonantStormrune * varGreatclub09Quantity) + (varGreatclub10ResonantStormrune * varGreatclub10Quantity) + (varGreatclub11ResonantStormrune * varGreatclub11Quantity) + (varGreatclub12ResonantStormrune * varGreatclub12Quantity) + (varGreatclub13ResonantStormrune * varGreatclub13Quantity) + (varGreatclub14ResonantStormrune * varGreatclub14Quantity) + (varGreatclub15ResonantStormrune * varGreatclub15Quantity) + (varGreatclub16ResonantStormrune * varGreatclub16Quantity) + (varGreatclub17ResonantStormrune * varGreatclub17Quantity) + (varGreatclub18ResonantStormrune * varGreatclub18Quantity) + (varGreatclub19ResonantStormrune * varGreatclub19Quantity) + (varGreatclub20ResonantStormrune * varGreatclub20Quantity) + (varGreatclub21ResonantStormrune * varGreatclub21Quantity) + (varGreatclub22ResonantStormrune * varGreatclub22Quantity) + (varGreatclub23ResonantStormrune * varGreatclub23Quantity) + (varGreatclub24ResonantStormrune * varGreatclub24Quantity) + (varGreatclub25ResonantStormrune * varGreatclub25Quantity) + (varGreatclub26ResonantStormrune * varGreatclub26Quantity) + (varGreatclub27ResonantStormrune * varGreatclub27Quantity) + (varGreatclub28ResonantStormrune * varGreatclub28Quantity));
    varGreatclubGargantuaHornTotal = ((varGreatclub01GargantuaHorn * varGreatclub01Quantity) + (varGreatclub02GargantuaHorn * varGreatclub02Quantity) + (varGreatclub03GargantuaHorn * varGreatclub03Quantity) + (varGreatclub04GargantuaHorn * varGreatclub04Quantity) + (varGreatclub05GargantuaHorn * varGreatclub05Quantity) + (varGreatclub06GargantuaHorn * varGreatclub06Quantity) + (varGreatclub07GargantuaHorn * varGreatclub07Quantity) + (varGreatclub08GargantuaHorn * varGreatclub08Quantity) + (varGreatclub09GargantuaHorn * varGreatclub09Quantity) + (varGreatclub10GargantuaHorn * varGreatclub10Quantity) + (varGreatclub11GargantuaHorn * varGreatclub11Quantity) + (varGreatclub12GargantuaHorn * varGreatclub12Quantity) + (varGreatclub13GargantuaHorn * varGreatclub13Quantity) + (varGreatclub14GargantuaHorn * varGreatclub14Quantity) + (varGreatclub15GargantuaHorn * varGreatclub15Quantity) + (varGreatclub16GargantuaHorn * varGreatclub16Quantity) + (varGreatclub17GargantuaHorn * varGreatclub17Quantity) + (varGreatclub18GargantuaHorn * varGreatclub18Quantity) + (varGreatclub19GargantuaHorn * varGreatclub19Quantity) + (varGreatclub20GargantuaHorn * varGreatclub20Quantity) + (varGreatclub21GargantuaHorn * varGreatclub21Quantity) + (varGreatclub22GargantuaHorn * varGreatclub22Quantity) + (varGreatclub23GargantuaHorn * varGreatclub23Quantity) + (varGreatclub24GargantuaHorn * varGreatclub24Quantity) + (varGreatclub25GargantuaHorn * varGreatclub25Quantity) + (varGreatclub26GargantuaHorn * varGreatclub26Quantity) + (varGreatclub27GargantuaHorn * varGreatclub27Quantity) + (varGreatclub28GargantuaHorn * varGreatclub28Quantity));
    varGreatclubEldritchCinderTotal = ((varGreatclub01EldritchCinder * varGreatclub01Quantity) + (varGreatclub02EldritchCinder * varGreatclub02Quantity) + (varGreatclub03EldritchCinder * varGreatclub03Quantity) + (varGreatclub04EldritchCinder * varGreatclub04Quantity) + (varGreatclub05EldritchCinder * varGreatclub05Quantity) + (varGreatclub06EldritchCinder * varGreatclub06Quantity) + (varGreatclub07EldritchCinder * varGreatclub07Quantity) + (varGreatclub08EldritchCinder * varGreatclub08Quantity) + (varGreatclub09EldritchCinder * varGreatclub09Quantity) + (varGreatclub10EldritchCinder * varGreatclub10Quantity) + (varGreatclub11EldritchCinder * varGreatclub11Quantity) + (varGreatclub12EldritchCinder * varGreatclub12Quantity) + (varGreatclub13EldritchCinder * varGreatclub13Quantity) + (varGreatclub14EldritchCinder * varGreatclub14Quantity) + (varGreatclub15EldritchCinder * varGreatclub15Quantity) + (varGreatclub16EldritchCinder * varGreatclub16Quantity) + (varGreatclub17EldritchCinder * varGreatclub17Quantity) + (varGreatclub18EldritchCinder * varGreatclub18Quantity) + (varGreatclub19EldritchCinder * varGreatclub19Quantity) + (varGreatclub20EldritchCinder * varGreatclub20Quantity) + (varGreatclub21EldritchCinder * varGreatclub21Quantity) + (varGreatclub22EldritchCinder * varGreatclub22Quantity) + (varGreatclub23EldritchCinder * varGreatclub23Quantity) + (varGreatclub24EldritchCinder * varGreatclub24Quantity) + (varGreatclub25EldritchCinder * varGreatclub25Quantity) + (varGreatclub26EldritchCinder * varGreatclub26Quantity) + (varGreatclub27EldritchCinder * varGreatclub27Quantity) + (varGreatclub28EldritchCinder * varGreatclub28Quantity));
    varGreatclubIldsteinTotal = ((varGreatclub01Ildstein * varGreatclub01Quantity) + (varGreatclub02Ildstein * varGreatclub02Quantity) + (varGreatclub03Ildstein * varGreatclub03Quantity) + (varGreatclub04Ildstein * varGreatclub04Quantity) + (varGreatclub05Ildstein * varGreatclub05Quantity) + (varGreatclub06Ildstein * varGreatclub06Quantity) + (varGreatclub07Ildstein * varGreatclub07Quantity) + (varGreatclub08Ildstein * varGreatclub08Quantity) + (varGreatclub09Ildstein * varGreatclub09Quantity) + (varGreatclub10Ildstein * varGreatclub10Quantity) + (varGreatclub11Ildstein * varGreatclub11Quantity) + (varGreatclub12Ildstein * varGreatclub12Quantity) + (varGreatclub13Ildstein * varGreatclub13Quantity) + (varGreatclub14Ildstein * varGreatclub14Quantity) + (varGreatclub15Ildstein * varGreatclub15Quantity) + (varGreatclub16Ildstein * varGreatclub16Quantity) + (varGreatclub17Ildstein * varGreatclub17Quantity) + (varGreatclub18Ildstein * varGreatclub18Quantity) + (varGreatclub19Ildstein * varGreatclub19Quantity) + (varGreatclub20Ildstein * varGreatclub20Quantity) + (varGreatclub21Ildstein * varGreatclub21Quantity) + (varGreatclub22Ildstein * varGreatclub22Quantity) + (varGreatclub23Ildstein * varGreatclub23Quantity) + (varGreatclub24Ildstein * varGreatclub24Quantity) + (varGreatclub25Ildstein * varGreatclub25Quantity) + (varGreatclub26Ildstein * varGreatclub26Quantity) + (varGreatclub27Ildstein * varGreatclub27Quantity) + (varGreatclub28Ildstein * varGreatclub28Quantity));
}

//Greatclub Calculations
function fnGreatclub()
{
    fnGreatclubSubPrice(varGreatclub01Gold,varGreatclub01Iron,varGreatclub01Wood,varGreatclub01Leather,varGreatclub01Selentine,varGreatclub01Veilron,varGreatclub01Neithal,varGreatclub01Leenspar,varGreatclub01Theyril,varGreatclub01Success,varGreatclub01Stone,varGreatclub01Bone,varGreatclub01ResonantStormrune,varGreatclub01GargantuaHorn,varGreatclub01EldritchCinder,varGreatclub01Ildstein)
    varGreatclub01Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub02Gold,varGreatclub02Iron,varGreatclub02Wood,varGreatclub02Leather,varGreatclub02Selentine,varGreatclub02Veilron,varGreatclub02Neithal,varGreatclub02Leenspar,varGreatclub02Theyril,varGreatclub02Success,varGreatclub02Stone,varGreatclub02Bone,varGreatclub02ResonantStormrune,varGreatclub02GargantuaHorn,varGreatclub02EldritchCinder,varGreatclub02Ildstein)
    varGreatclub02Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub03Gold,varGreatclub03Iron,varGreatclub03Wood,varGreatclub03Leather,varGreatclub03Selentine,varGreatclub03Veilron,varGreatclub03Neithal,varGreatclub03Leenspar,varGreatclub03Theyril,varGreatclub03Success,varGreatclub03Stone,varGreatclub03Bone,varGreatclub03ResonantStormrune,varGreatclub03GargantuaHorn,varGreatclub03EldritchCinder,varGreatclub03Ildstein)
    varGreatclub03Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub04Gold,varGreatclub04Iron,varGreatclub04Wood,varGreatclub04Leather,varGreatclub04Selentine,varGreatclub04Veilron,varGreatclub04Neithal,varGreatclub04Leenspar,varGreatclub04Theyril,varGreatclub04Success,varGreatclub04Stone,varGreatclub04Bone,varGreatclub04ResonantStormrune,varGreatclub04GargantuaHorn,varGreatclub04EldritchCinder,varGreatclub04Ildstein)
    varGreatclub04Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub05Gold,varGreatclub05Iron,varGreatclub05Wood,varGreatclub05Leather,varGreatclub05Selentine,varGreatclub05Veilron,varGreatclub05Neithal,varGreatclub05Leenspar,varGreatclub05Theyril,varGreatclub05Success,varGreatclub05Stone,varGreatclub05Bone,varGreatclub05ResonantStormrune,varGreatclub05GargantuaHorn,varGreatclub05EldritchCinder,varGreatclub05Ildstein)
    varGreatclub05Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub06Gold,varGreatclub06Iron,varGreatclub06Wood,varGreatclub06Leather,varGreatclub06Selentine,varGreatclub06Veilron,varGreatclub06Neithal,varGreatclub06Leenspar,varGreatclub06Theyril,varGreatclub06Success,varGreatclub06Stone,varGreatclub06Bone,varGreatclub06ResonantStormrune,varGreatclub06GargantuaHorn,varGreatclub06EldritchCinder,varGreatclub06Ildstein)
    varGreatclub06Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub07Gold,varGreatclub07Iron,varGreatclub07Wood,varGreatclub07Leather,varGreatclub07Selentine,varGreatclub07Veilron,varGreatclub07Neithal,varGreatclub07Leenspar,varGreatclub07Theyril,varGreatclub07Success,varGreatclub07Stone,varGreatclub07Bone,varGreatclub07ResonantStormrune,varGreatclub07GargantuaHorn,varGreatclub07EldritchCinder,varGreatclub07Ildstein)
    varGreatclub07Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub08Gold,varGreatclub08Iron,varGreatclub08Wood,varGreatclub08Leather,varGreatclub08Selentine,varGreatclub08Veilron,varGreatclub08Neithal,varGreatclub08Leenspar,varGreatclub08Theyril,varGreatclub08Success,varGreatclub08Stone,varGreatclub08Bone,varGreatclub08ResonantStormrune,varGreatclub08GargantuaHorn,varGreatclub08EldritchCinder,varGreatclub08Ildstein)
    varGreatclub08Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub09Gold,varGreatclub09Iron,varGreatclub09Wood,varGreatclub09Leather,varGreatclub09Selentine,varGreatclub09Veilron,varGreatclub09Neithal,varGreatclub09Leenspar,varGreatclub09Theyril,varGreatclub09Success,varGreatclub09Stone,varGreatclub09Bone,varGreatclub09ResonantStormrune,varGreatclub09GargantuaHorn,varGreatclub09EldritchCinder,varGreatclub09Ildstein)
    varGreatclub09Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub10Gold,varGreatclub10Iron,varGreatclub10Wood,varGreatclub10Leather,varGreatclub10Selentine,varGreatclub10Veilron,varGreatclub10Neithal,varGreatclub10Leenspar,varGreatclub10Theyril,varGreatclub10Success,varGreatclub10Stone,varGreatclub10Bone,varGreatclub10ResonantStormrune,varGreatclub10GargantuaHorn,varGreatclub10EldritchCinder,varGreatclub10Ildstein)
    varGreatclub10Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub11Gold,varGreatclub11Iron,varGreatclub11Wood,varGreatclub11Leather,varGreatclub11Selentine,varGreatclub11Veilron,varGreatclub11Neithal,varGreatclub11Leenspar,varGreatclub11Theyril,varGreatclub11Success,varGreatclub11Stone,varGreatclub11Bone,varGreatclub11ResonantStormrune,varGreatclub11GargantuaHorn,varGreatclub11EldritchCinder,varGreatclub11Ildstein)
    varGreatclub11Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub12Gold,varGreatclub12Iron,varGreatclub12Wood,varGreatclub12Leather,varGreatclub12Selentine,varGreatclub12Veilron,varGreatclub12Neithal,varGreatclub12Leenspar,varGreatclub12Theyril,varGreatclub12Success,varGreatclub12Stone,varGreatclub12Bone,varGreatclub12ResonantStormrune,varGreatclub12GargantuaHorn,varGreatclub12EldritchCinder,varGreatclub12Ildstein)
    varGreatclub12Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub13Gold,varGreatclub13Iron,varGreatclub13Wood,varGreatclub13Leather,varGreatclub13Selentine,varGreatclub13Veilron,varGreatclub13Neithal,varGreatclub13Leenspar,varGreatclub13Theyril,varGreatclub13Success,varGreatclub13Stone,varGreatclub13Bone,varGreatclub13ResonantStormrune,varGreatclub13GargantuaHorn,varGreatclub13EldritchCinder,varGreatclub13Ildstein)
    varGreatclub13Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub14Gold,varGreatclub14Iron,varGreatclub14Wood,varGreatclub14Leather,varGreatclub14Selentine,varGreatclub14Veilron,varGreatclub14Neithal,varGreatclub14Leenspar,varGreatclub14Theyril,varGreatclub14Success,varGreatclub14Stone,varGreatclub14Bone,varGreatclub14ResonantStormrune,varGreatclub14GargantuaHorn,varGreatclub14EldritchCinder,varGreatclub14Ildstein)
    varGreatclub14Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub15Gold,varGreatclub15Iron,varGreatclub15Wood,varGreatclub15Leather,varGreatclub15Selentine,varGreatclub15Veilron,varGreatclub15Neithal,varGreatclub15Leenspar,varGreatclub15Theyril,varGreatclub15Success,varGreatclub15Stone,varGreatclub15Bone,varGreatclub15ResonantStormrune,varGreatclub15GargantuaHorn,varGreatclub15EldritchCinder,varGreatclub15Ildstein)
    varGreatclub15Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub16Gold,varGreatclub16Iron,varGreatclub16Wood,varGreatclub16Leather,varGreatclub16Selentine,varGreatclub16Veilron,varGreatclub16Neithal,varGreatclub16Leenspar,varGreatclub16Theyril,varGreatclub16Success,varGreatclub16Stone,varGreatclub16Bone,varGreatclub16ResonantStormrune,varGreatclub16GargantuaHorn,varGreatclub16EldritchCinder,varGreatclub16Ildstein)
    varGreatclub16Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub17Gold,varGreatclub17Iron,varGreatclub17Wood,varGreatclub17Leather,varGreatclub17Selentine,varGreatclub17Veilron,varGreatclub17Neithal,varGreatclub17Leenspar,varGreatclub17Theyril,varGreatclub17Success,varGreatclub17Stone,varGreatclub17Bone,varGreatclub17ResonantStormrune,varGreatclub17GargantuaHorn,varGreatclub17EldritchCinder,varGreatclub17Ildstein)
    varGreatclub17Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub18Gold,varGreatclub18Iron,varGreatclub18Wood,varGreatclub18Leather,varGreatclub18Selentine,varGreatclub18Veilron,varGreatclub18Neithal,varGreatclub18Leenspar,varGreatclub18Theyril,varGreatclub18Success,varGreatclub18Stone,varGreatclub18Bone,varGreatclub18ResonantStormrune,varGreatclub18GargantuaHorn,varGreatclub18EldritchCinder,varGreatclub18Ildstein)
    varGreatclub18Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub19Gold,varGreatclub19Iron,varGreatclub19Wood,varGreatclub19Leather,varGreatclub19Selentine,varGreatclub19Veilron,varGreatclub19Neithal,varGreatclub19Leenspar,varGreatclub19Theyril,varGreatclub19Success,varGreatclub19Stone,varGreatclub19Bone,varGreatclub19ResonantStormrune,varGreatclub19GargantuaHorn,varGreatclub19EldritchCinder,varGreatclub19Ildstein)
    varGreatclub19Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub20Gold,varGreatclub20Iron,varGreatclub20Wood,varGreatclub20Leather,varGreatclub20Selentine,varGreatclub20Veilron,varGreatclub20Neithal,varGreatclub20Leenspar,varGreatclub20Theyril,varGreatclub20Success,varGreatclub20Stone,varGreatclub20Bone,varGreatclub20ResonantStormrune,varGreatclub20GargantuaHorn,varGreatclub20EldritchCinder,varGreatclub20Ildstein)
    varGreatclub20Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub21Gold,varGreatclub21Iron,varGreatclub21Wood,varGreatclub21Leather,varGreatclub21Selentine,varGreatclub21Veilron,varGreatclub21Neithal,varGreatclub21Leenspar,varGreatclub21Theyril,varGreatclub21Success,varGreatclub21Stone,varGreatclub21Bone,varGreatclub21ResonantStormrune,varGreatclub21GargantuaHorn,varGreatclub21EldritchCinder,varGreatclub21Ildstein)
    varGreatclub21Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub22Gold,varGreatclub22Iron,varGreatclub22Wood,varGreatclub22Leather,varGreatclub22Selentine,varGreatclub22Veilron,varGreatclub22Neithal,varGreatclub22Leenspar,varGreatclub22Theyril,varGreatclub22Success,varGreatclub22Stone,varGreatclub22Bone,varGreatclub22ResonantStormrune,varGreatclub22GargantuaHorn,varGreatclub22EldritchCinder,varGreatclub22Ildstein)
    varGreatclub22Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub23Gold,varGreatclub23Iron,varGreatclub23Wood,varGreatclub23Leather,varGreatclub23Selentine,varGreatclub23Veilron,varGreatclub23Neithal,varGreatclub23Leenspar,varGreatclub23Theyril,varGreatclub23Success,varGreatclub23Stone,varGreatclub23Bone,varGreatclub23ResonantStormrune,varGreatclub23GargantuaHorn,varGreatclub23EldritchCinder,varGreatclub23Ildstein)
    varGreatclub23Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub24Gold,varGreatclub24Iron,varGreatclub24Wood,varGreatclub24Leather,varGreatclub24Selentine,varGreatclub24Veilron,varGreatclub24Neithal,varGreatclub24Leenspar,varGreatclub24Theyril,varGreatclub24Success,varGreatclub24Stone,varGreatclub24Bone,varGreatclub24ResonantStormrune,varGreatclub24GargantuaHorn,varGreatclub24EldritchCinder,varGreatclub24Ildstein)
    varGreatclub24Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub25Gold,varGreatclub25Iron,varGreatclub25Wood,varGreatclub25Leather,varGreatclub25Selentine,varGreatclub25Veilron,varGreatclub25Neithal,varGreatclub25Leenspar,varGreatclub25Theyril,varGreatclub25Success,varGreatclub25Stone,varGreatclub25Bone,varGreatclub25ResonantStormrune,varGreatclub25GargantuaHorn,varGreatclub25EldritchCinder,varGreatclub25Ildstein)
    varGreatclub25Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub26Gold,varGreatclub26Iron,varGreatclub26Wood,varGreatclub26Leather,varGreatclub26Selentine,varGreatclub26Veilron,varGreatclub26Neithal,varGreatclub26Leenspar,varGreatclub26Theyril,varGreatclub26Success,varGreatclub26Stone,varGreatclub26Bone,varGreatclub26ResonantStormrune,varGreatclub26GargantuaHorn,varGreatclub26EldritchCinder,varGreatclub26Ildstein)
    varGreatclub26Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub27Gold,varGreatclub27Iron,varGreatclub27Wood,varGreatclub27Leather,varGreatclub27Selentine,varGreatclub27Veilron,varGreatclub27Neithal,varGreatclub27Leenspar,varGreatclub27Theyril,varGreatclub27Success,varGreatclub27Stone,varGreatclub27Bone,varGreatclub27ResonantStormrune,varGreatclub27GargantuaHorn,varGreatclub27EldritchCinder,varGreatclub27Ildstein)
    varGreatclub27Price = varItemPrice;
    fnGreatclubSubPrice(varGreatclub28Gold,varGreatclub28Iron,varGreatclub28Wood,varGreatclub28Leather,varGreatclub28Selentine,varGreatclub28Veilron,varGreatclub28Neithal,varGreatclub28Leenspar,varGreatclub28Theyril,varGreatclub28Success,varGreatclub28Stone,varGreatclub28Bone,varGreatclub28ResonantStormrune,varGreatclub28GargantuaHorn,varGreatclub28EldritchCinder,varGreatclub28Ildstein)
    varGreatclub28Price = varItemPrice;
}

function fnReloadGreatclubPrices()
{
    //Greatclub Prices
    document.getElementById('Greatclub01Price').value = varGreatclub01Price;
    document.getElementById('Greatclub02Price').value = varGreatclub02Price;
    document.getElementById('Greatclub03Price').value = varGreatclub03Price;
    document.getElementById('Greatclub04Price').value = varGreatclub04Price;
    document.getElementById('Greatclub05Price').value = varGreatclub05Price;
    document.getElementById('Greatclub06Price').value = varGreatclub06Price;
    document.getElementById('Greatclub07Price').value = varGreatclub07Price;
    document.getElementById('Greatclub08Price').value = varGreatclub08Price;
    document.getElementById('Greatclub09Price').value = varGreatclub09Price;
    document.getElementById('Greatclub10Price').value = varGreatclub10Price;
    document.getElementById('Greatclub11Price').value = varGreatclub11Price;
    document.getElementById('Greatclub12Price').value = varGreatclub12Price;
    document.getElementById('Greatclub13Price').value = varGreatclub13Price;
    document.getElementById('Greatclub14Price').value = varGreatclub14Price;
    document.getElementById('Greatclub15Price').value = varGreatclub15Price;
    document.getElementById('Greatclub16Price').value = varGreatclub16Price;
    document.getElementById('Greatclub17Price').value = varGreatclub17Price;
    document.getElementById('Greatclub18Price').value = varGreatclub18Price;
    document.getElementById('Greatclub19Price').value = varGreatclub19Price;
    document.getElementById('Greatclub20Price').value = varGreatclub20Price;
    document.getElementById('Greatclub21Price').value = varGreatclub21Price;
    document.getElementById('Greatclub22Price').value = varGreatclub22Price;
    document.getElementById('Greatclub23Price').value = varGreatclub23Price;
    document.getElementById('Greatclub24Price').value = varGreatclub24Price;
    document.getElementById('Greatclub25Price').value = varGreatclub25Price;
    document.getElementById('Greatclub26Price').value = varGreatclub26Price;
    document.getElementById('Greatclub27Price').value = varGreatclub27Price;
    document.getElementById('Greatclub28Price').value = varGreatclub28Price;

    //Greatclub Total Prices
    document.getElementById('GreatclubTotal').value = varGreatclubTotal;
    document.getElementById('GreatclubGoldTotal').value = varGreatclubGoldTotal;
    document.getElementById('GreatclubIronTotal').value = varGreatclubIronTotal;
    document.getElementById('GreatclubWoodTotal').value = varGreatclubWoodTotal;
    document.getElementById('GreatclubLeatherTotal').value = varGreatclubLeatherTotal;
    document.getElementById('GreatclubSelentineTotal').value = varGreatclubSelentineTotal;
    document.getElementById('GreatclubVeilronTotal').value = varGreatclubVeilronTotal;
    document.getElementById('GreatclubNeithalTotal').value = varGreatclubNeithalTotal;
    document.getElementById('GreatclubLeensparTotal').value = varGreatclubLeensparTotal;
    document.getElementById('GreatclubTheyrilTotal').value = varGreatclubTheyrilTotal;
    document.getElementById('GreatclubStoneTotal').value = varGreatclubStoneTotal;
    document.getElementById('GreatclubBoneTotal').value = varGreatclubBoneTotal;
    document.getElementById('GreatclubResonantStormruneTotal').value = varGreatclubResonantStormruneTotal;
    document.getElementById('GreatclubGargantuaHornTotal').value = varGreatclubGargantuaHornTotal;
    document.getElementById('GreatclubEldritchCinderTotal').value = varGreatclubEldritchCinderTotal;
    document.getElementById('GreatclubIldsteinTotal').value = varGreatclubIldsteinTotal;
}

function fnGreatclubInitialize()
{
    varGreatclubTotal = document.getElementById("GreatclubTotal").value;
    varGreatclubGoldTotal = document.getElementById("GreatclubGoldTotal").value;
    varGreatclubIronTotal = document.getElementById("GreatclubIronTotal").value;
    varGreatclubWoodTotal = document.getElementById("GreatclubWoodTotal").value;
    varGreatclubLeatherTotal = document.getElementById("GreatclubLeatherTotal").value;
    varGreatclubSelentineTotal = document.getElementById("GreatclubSelentineTotal").value;
    varGreatclubVeilronTotal = document.getElementById("GreatclubVeilronTotal").value;
    varGreatclubNeithalTotal = document.getElementById("GreatclubNeithalTotal").value;
    varGreatclubLeensparTotal = document.getElementById("GreatclubLeensparTotal").value;
    varGreatclubTheyrilTotal = document.getElementById("GreatclubTheyrilTotal").value;
    varGreatclubStoneTotal = document.getElementById("GreatclubStoneTotal").value;
    varGreatclubBoneTotal = document.getElementById("GreatclubBoneTotal").value;
    varGreatclubResonantStormruneTotal = document.getElementById("GreatclubResonantStormruneTotal").value;
    varGreatclubGargantuaHornTotal = document.getElementById("GreatclubGargantuaHornTotal").value;
    varGreatclubEldritchCinderTotal = document.getElementById("GreatclubEldritchCinderTotal").value;
    varGreatclubIldsteinTotal = document.getElementById("GreatclubIldsteinTotal").value;

    // *** Greatclub VARIABLES ***
	//Boulder
    varGreatclub01Quantity = document.getElementById("Greatclub01Quantity").value;
    varGreatclub01Price = document.getElementById("Greatclub01Price").value;
    varGreatclub01Success = document.getElementById("Greatclub01Success").value;
    varGreatclub01Gold = 0
    varGreatclub01Iron = 2
    varGreatclub01Wood = 2
    varGreatclub01Leather = 0
    varGreatclub01Selentine = 0
    varGreatclub01Veilron = 0
    varGreatclub01Neithal = 0
    varGreatclub01Leenspar = 0
    varGreatclub01Theyril = 0
    varGreatclub01Stone = 8
    varGreatclub01Bone = 0
    varGreatclub01ResonantStormrune = 0
    varGreatclub01GargantuaHorn = 0
    varGreatclub01EldritchCinder = 0
    varGreatclub01Ildstein = 0
	//Wild Hunt
    varGreatclub02Quantity = document.getElementById("Greatclub02Quantity").value;
    varGreatclub02Price = document.getElementById("Greatclub02Price").value;
    varGreatclub02Success = document.getElementById("Greatclub02Success").value;
    varGreatclub02Gold = 0
    varGreatclub02Iron = 6
    varGreatclub02Wood = 0
    varGreatclub02Leather = 0
    varGreatclub02Selentine = 0
    varGreatclub02Veilron = 0
    varGreatclub02Neithal = 0
    varGreatclub02Leenspar = 0
    varGreatclub02Theyril = 0
    varGreatclub02Stone = 0
    varGreatclub02Bone = 0
    varGreatclub02ResonantStormrune = 0
    varGreatclub02GargantuaHorn = 0
    varGreatclub02EldritchCinder = 0
    varGreatclub02Ildstein = 0
	//Wooden Warhammer
    varGreatclub03Quantity = document.getElementById("Greatclub03Quantity").value;
    varGreatclub03Price = document.getElementById("Greatclub03Price").value;
    varGreatclub03Success = document.getElementById("Greatclub03Success").value;
    varGreatclub03Gold = 0
    varGreatclub03Iron = 2
    varGreatclub03Wood = 4
    varGreatclub03Leather = 0
    varGreatclub03Selentine = 0
    varGreatclub03Veilron = 0
    varGreatclub03Neithal = 0
    varGreatclub03Leenspar = 0
    varGreatclub03Theyril = 0
    varGreatclub03Stone = 0
    varGreatclub03Bone = 0
    varGreatclub03ResonantStormrune = 0
    varGreatclub03GargantuaHorn = 0
    varGreatclub03EldritchCinder = 0
    varGreatclub03Ildstein = 0
	//Skull Hammer
    varGreatclub04Quantity = document.getElementById("Greatclub04Quantity").value;
    varGreatclub04Price = document.getElementById("Greatclub04Price").value;
    varGreatclub04Success = document.getElementById("Greatclub04Success").value;
    varGreatclub04Gold = 15
    varGreatclub04Iron = 2
    varGreatclub04Wood = 5
    varGreatclub04Leather = 0
    varGreatclub04Selentine = 0
    varGreatclub04Veilron = 0
    varGreatclub04Neithal = 0
    varGreatclub04Leenspar = 0
    varGreatclub04Theyril = 0
    varGreatclub04Stone = 0
    varGreatclub04Bone = 0
    varGreatclub04ResonantStormrune = 0
    varGreatclub04GargantuaHorn = 0
    varGreatclub04EldritchCinder = 0
    varGreatclub04Ildstein = 0
	//Great Maul
    varGreatclub05Quantity = document.getElementById("Greatclub05Quantity").value;
    varGreatclub05Price = document.getElementById("Greatclub05Price").value;
    varGreatclub05Success = document.getElementById("Greatclub05Success").value;
    varGreatclub05Gold = 15
    varGreatclub05Iron = 6
    varGreatclub05Wood = 2
    varGreatclub05Leather = 2
    varGreatclub05Selentine = 0
    varGreatclub05Veilron = 0
    varGreatclub05Neithal = 0
    varGreatclub05Leenspar = 0
    varGreatclub05Theyril = 0
    varGreatclub05Stone = 0
    varGreatclub05Bone = 0
    varGreatclub05ResonantStormrune = 0
    varGreatclub05GargantuaHorn = 0
    varGreatclub05EldritchCinder = 0
    varGreatclub05Ildstein = 0
	//Rock Smasher
    varGreatclub06Quantity = document.getElementById("Greatclub06Quantity").value;
    varGreatclub06Price = document.getElementById("Greatclub06Price").value;
    varGreatclub06Success = document.getElementById("Greatclub06Success").value;
    varGreatclub06Gold = 15
    varGreatclub06Iron = 2
    varGreatclub06Wood = 4
    varGreatclub06Leather = 0
    varGreatclub06Selentine = 0
    varGreatclub06Veilron = 0
    varGreatclub06Neithal = 0
    varGreatclub06Leenspar = 0
    varGreatclub06Theyril = 0
    varGreatclub06Stone = 10
    varGreatclub06Bone = 0
    varGreatclub06ResonantStormrune = 0
    varGreatclub06GargantuaHorn = 0
    varGreatclub06EldritchCinder = 0
    varGreatclub06Ildstein = 0
	//Anvil Warhammer
    varGreatclub07Quantity = document.getElementById("Greatclub07Quantity").value;
    varGreatclub07Price = document.getElementById("Greatclub07Price").value;
    varGreatclub07Success = document.getElementById("Greatclub07Success").value;
    varGreatclub07Gold = 30
    varGreatclub07Iron = 11
    varGreatclub07Wood = 2
    varGreatclub07Leather = 0
    varGreatclub07Selentine = 0
    varGreatclub07Veilron = 0
    varGreatclub07Neithal = 0
    varGreatclub07Leenspar = 0
    varGreatclub07Theyril = 0
    varGreatclub07Stone = 0
    varGreatclub07Bone = 0
    varGreatclub07ResonantStormrune = 0
    varGreatclub07GargantuaHorn = 0
    varGreatclub07EldritchCinder = 0
    varGreatclub07Ildstein = 0
	//Heavy Maul
    varGreatclub08Quantity = document.getElementById("Greatclub08Quantity").value;
    varGreatclub08Price = document.getElementById("Greatclub08Price").value;
    varGreatclub08Success = document.getElementById("Greatclub08Success").value;
    varGreatclub08Gold = 30
    varGreatclub08Iron = 9
    varGreatclub08Wood = 4
    varGreatclub08Leather = 0
    varGreatclub08Selentine = 0
    varGreatclub08Veilron = 0
    varGreatclub08Neithal = 0
    varGreatclub08Leenspar = 0
    varGreatclub08Theyril = 0
    varGreatclub08Stone = 0
    varGreatclub08Bone = 12
    varGreatclub08ResonantStormrune = 0
    varGreatclub08GargantuaHorn = 0
    varGreatclub08EldritchCinder = 0
    varGreatclub08Ildstein = 0
	//Warhammer
    varGreatclub09Quantity = document.getElementById("Greatclub09Quantity").value;
    varGreatclub09Price = document.getElementById("Greatclub09Price").value;
    varGreatclub09Success = document.getElementById("Greatclub09Success").value;
    varGreatclub09Gold = 30
    varGreatclub09Iron = 10
    varGreatclub09Wood = 3
    varGreatclub09Leather = 5
    varGreatclub09Selentine = 0
    varGreatclub09Veilron = 0
    varGreatclub09Neithal = 0
    varGreatclub09Leenspar = 0
    varGreatclub09Theyril = 0
    varGreatclub09Stone = 0
    varGreatclub09Bone = 0
    varGreatclub09ResonantStormrune = 0
    varGreatclub09GargantuaHorn = 0
    varGreatclub09EldritchCinder = 0
    varGreatclub09Ildstein = 0
	//Thunderpick
    varGreatclub10Quantity = document.getElementById("Greatclub10Quantity").value;
    varGreatclub10Price = document.getElementById("Greatclub10Price").value;
    varGreatclub10Success = document.getElementById("Greatclub10Success").value;
    varGreatclub10Gold = 35
    varGreatclub10Iron = 12
    varGreatclub10Wood = 0
    varGreatclub10Leather = 0
    varGreatclub10Selentine = 0
    varGreatclub10Veilron = 0
    varGreatclub10Neithal = 0
    varGreatclub10Leenspar = 0
    varGreatclub10Theyril = 0
    varGreatclub10Stone = 0
    varGreatclub10Bone = 0
    varGreatclub10ResonantStormrune = 0
    varGreatclub10GargantuaHorn = 0
    varGreatclub10EldritchCinder = 0
    varGreatclub10Ildstein = 0
	//Peoplecrusher
    varGreatclub11Quantity = document.getElementById("Greatclub11Quantity").value;
    varGreatclub11Price = document.getElementById("Greatclub11Price").value;
    varGreatclub11Success = document.getElementById("Greatclub11Success").value;
    varGreatclub11Gold = 60
    varGreatclub11Iron = 18
    varGreatclub11Wood = 2
    varGreatclub11Leather = 0
    varGreatclub11Selentine = 0
    varGreatclub11Veilron = 0
    varGreatclub11Neithal = 0
    varGreatclub11Leenspar = 0
    varGreatclub11Theyril = 0
    varGreatclub11Stone = 0
    varGreatclub11Bone = 0
    varGreatclub11ResonantStormrune = 0
    varGreatclub11GargantuaHorn = 0
    varGreatclub11EldritchCinder = 0
    varGreatclub11Ildstein = 0
	//Iron Warhammer
    varGreatclub12Quantity = document.getElementById("Greatclub12Quantity").value;
    varGreatclub12Price = document.getElementById("Greatclub12Price").value;
    varGreatclub12Success = document.getElementById("Greatclub12Success").value;
    varGreatclub12Gold = 70
    varGreatclub12Iron = 18
    varGreatclub12Wood = 2
    varGreatclub12Leather = 0
    varGreatclub12Selentine = 0
    varGreatclub12Veilron = 0
    varGreatclub12Neithal = 0
    varGreatclub12Leenspar = 0
    varGreatclub12Theyril = 0
    varGreatclub12Stone = 0
    varGreatclub12Bone = 0
    varGreatclub12ResonantStormrune = 0
    varGreatclub12GargantuaHorn = 0
    varGreatclub12EldritchCinder = 0
    varGreatclub12Ildstein = 0
	//Outlaw
    varGreatclub13Quantity = document.getElementById("Greatclub13Quantity").value;
    varGreatclub13Price = document.getElementById("Greatclub13Price").value;
    varGreatclub13Success = document.getElementById("Greatclub13Success").value;
    varGreatclub13Gold = 60
    varGreatclub13Iron = 18
    varGreatclub13Wood = 2
    varGreatclub13Leather = 0
    varGreatclub13Selentine = 0
    varGreatclub13Veilron = 0
    varGreatclub13Neithal = 0
    varGreatclub13Leenspar = 0
    varGreatclub13Theyril = 0
    varGreatclub13Stone = 0
    varGreatclub13Bone = 0
    varGreatclub13ResonantStormrune = 0
    varGreatclub13GargantuaHorn = 0
    varGreatclub13EldritchCinder = 0
    varGreatclub13Ildstein = 0
	//War Maul
    varGreatclub14Quantity = document.getElementById("Greatclub14Quantity").value;
    varGreatclub14Price = document.getElementById("Greatclub14Price").value;
    varGreatclub14Success = document.getElementById("Greatclub14Success").value;
    varGreatclub14Gold = 60
    varGreatclub14Iron = 17
    varGreatclub14Wood = 3
    varGreatclub14Leather = 0
    varGreatclub14Selentine = 0
    varGreatclub14Veilron = 0
    varGreatclub14Neithal = 0
    varGreatclub14Leenspar = 0
    varGreatclub14Theyril = 0
    varGreatclub14Stone = 0
    varGreatclub14Bone = 0
    varGreatclub14ResonantStormrune = 0
    varGreatclub14GargantuaHorn = 0
    varGreatclub14EldritchCinder = 0
    varGreatclub14Ildstein = 0
	//Mercian Battlehammer
    varGreatclub15Quantity = document.getElementById("Greatclub15Quantity").value;
    varGreatclub15Price = document.getElementById("Greatclub15Price").value;
    varGreatclub15Success = document.getElementById("Greatclub15Success").value;
    varGreatclub15Gold = 160
    varGreatclub15Iron = 30
    varGreatclub15Wood = 6
    varGreatclub15Leather = 0
    varGreatclub15Selentine = 0
    varGreatclub15Veilron = 0
    varGreatclub15Neithal = 0
    varGreatclub15Leenspar = 0
    varGreatclub15Theyril = 0
    varGreatclub15Stone = 0
    varGreatclub15Bone = 0
    varGreatclub15ResonantStormrune = 0
    varGreatclub15GargantuaHorn = 0
    varGreatclub15EldritchCinder = 0
    varGreatclub15Ildstein = 0
	//Skygazer
    varGreatclub16Quantity = document.getElementById("Greatclub16Quantity").value;
    varGreatclub16Price = document.getElementById("Greatclub16Price").value;
    varGreatclub16Success = document.getElementById("Greatclub16Success").value;
    varGreatclub16Gold = 160
    varGreatclub16Iron = 4
    varGreatclub16Wood = 26
    varGreatclub16Leather = 0
    varGreatclub16Selentine = 0
    varGreatclub16Veilron = 0
    varGreatclub16Neithal = 0
    varGreatclub16Leenspar = 0
    varGreatclub16Theyril = 0
    varGreatclub16Stone = 0
    varGreatclub16Bone = 6
    varGreatclub16ResonantStormrune = 0
    varGreatclub16GargantuaHorn = 0
    varGreatclub16EldritchCinder = 0
    varGreatclub16Ildstein = 0
	//Dwarven Greathammer
    varGreatclub17Quantity = document.getElementById("Greatclub17Quantity").value;
    varGreatclub17Price = document.getElementById("Greatclub17Price").value;
    varGreatclub17Success = document.getElementById("Greatclub17Success").value;
    varGreatclub17Gold = 160
    varGreatclub17Iron = 24
    varGreatclub17Wood = 10
    varGreatclub17Leather = 2
    varGreatclub17Selentine = 0
    varGreatclub17Veilron = 0
    varGreatclub17Neithal = 0
    varGreatclub17Leenspar = 0
    varGreatclub17Theyril = 0
    varGreatclub17Stone = 0
    varGreatclub17Bone = 0
    varGreatclub17ResonantStormrune = 0
    varGreatclub17GargantuaHorn = 0
    varGreatclub17EldritchCinder = 0
    varGreatclub17Ildstein = 0
	//Slavemaster
    varGreatclub18Quantity = document.getElementById("Greatclub18Quantity").value;
    varGreatclub18Price = document.getElementById("Greatclub18Price").value;
    varGreatclub18Success = document.getElementById("Greatclub18Success").value;
    varGreatclub18Gold = 160
    varGreatclub18Iron = 30
    varGreatclub18Wood = 6
    varGreatclub18Leather = 0
    varGreatclub18Selentine = 0
    varGreatclub18Veilron = 0
    varGreatclub18Neithal = 0
    varGreatclub18Leenspar = 0
    varGreatclub18Theyril = 0
    varGreatclub18Stone = 0
    varGreatclub18Bone = 0
    varGreatclub18ResonantStormrune = 0
    varGreatclub18GargantuaHorn = 0
    varGreatclub18EldritchCinder = 0
    varGreatclub18Ildstein = 0
	//Orkish Warhammer
    varGreatclub19Quantity = document.getElementById("Greatclub19Quantity").value;
    varGreatclub19Price = document.getElementById("Greatclub19Price").value;
    varGreatclub19Success = document.getElementById("Greatclub19Success").value;
    varGreatclub19Gold = 160
    varGreatclub19Iron = 24
    varGreatclub19Wood = 12
    varGreatclub19Leather = 0
    varGreatclub19Selentine = 0
    varGreatclub19Veilron = 0
    varGreatclub19Neithal = 0
    varGreatclub19Leenspar = 0
    varGreatclub19Theyril = 0
    varGreatclub19Stone = 0
    varGreatclub19Bone = 0
    varGreatclub19ResonantStormrune = 0
    varGreatclub19GargantuaHorn = 0
    varGreatclub19EldritchCinder = 0
    varGreatclub19Ildstein = 0
	//Decorated Ironhammer
    varGreatclub20Quantity = document.getElementById("Greatclub20Quantity").value;
    varGreatclub20Price = document.getElementById("Greatclub20Price").value;
    varGreatclub20Success = document.getElementById("Greatclub20Success").value;
    varGreatclub20Gold = 160
    varGreatclub20Iron = 28
    varGreatclub20Wood = 8
    varGreatclub20Leather = 0
    varGreatclub20Selentine = 0
    varGreatclub20Veilron = 0
    varGreatclub20Neithal = 0
    varGreatclub20Leenspar = 0
    varGreatclub20Theyril = 0
    varGreatclub20Stone = 0
    varGreatclub20Bone = 0
    varGreatclub20ResonantStormrune = 0
    varGreatclub20GargantuaHorn = 0
    varGreatclub20EldritchCinder = 0
    varGreatclub20Ildstein = 0
	//Grief
    varGreatclub21Quantity = document.getElementById("Greatclub21Quantity").value;
    varGreatclub21Price = document.getElementById("Greatclub21Price").value;
    varGreatclub21Success = document.getElementById("Greatclub21Success").value;
    varGreatclub21Gold = 160
    varGreatclub21Iron = 35
    varGreatclub21Wood = 0
    varGreatclub21Leather = 3
    varGreatclub21Selentine = 0
    varGreatclub21Veilron = 0
    varGreatclub21Neithal = 0
    varGreatclub21Leenspar = 0
    varGreatclub21Theyril = 0
    varGreatclub21Stone = 0
    varGreatclub21Bone = 0
    varGreatclub21ResonantStormrune = 0
    varGreatclub21GargantuaHorn = 0
    varGreatclub21EldritchCinder = 0
    varGreatclub21Ildstein = 0
	//Oathbreaker
    varGreatclub22Quantity = document.getElementById("Greatclub22Quantity").value;
    varGreatclub22Price = document.getElementById("Greatclub22Price").value;
    varGreatclub22Success = document.getElementById("Greatclub22Success").value;
    varGreatclub22Gold = 160
    varGreatclub22Iron = 30
    varGreatclub22Wood = 6
    varGreatclub22Leather = 0
    varGreatclub22Selentine = 0
    varGreatclub22Veilron = 0
    varGreatclub22Neithal = 0
    varGreatclub22Leenspar = 0
    varGreatclub22Theyril = 0
    varGreatclub22Stone = 0
    varGreatclub22Bone = 0
    varGreatclub22ResonantStormrune = 0
    varGreatclub22GargantuaHorn = 0
    varGreatclub22EldritchCinder = 0
    varGreatclub22Ildstein = 0
	//Einherjar
    varGreatclub23Quantity = document.getElementById("Greatclub23Quantity").value;
    varGreatclub23Price = document.getElementById("Greatclub23Price").value;
    varGreatclub23Success = document.getElementById("Greatclub23Success").value;
    varGreatclub23Gold = 250
    varGreatclub23Iron = 20
    varGreatclub23Wood = 0
    varGreatclub23Leather = 0
    varGreatclub23Selentine = 0
    varGreatclub23Veilron = 0
    varGreatclub23Neithal = 1
    varGreatclub23Leenspar = 0
    varGreatclub23Theyril = 0
    varGreatclub23Stone = 0
    varGreatclub23Bone = 0
    varGreatclub23ResonantStormrune = 0
    varGreatclub23GargantuaHorn = 0
    varGreatclub23EldritchCinder = 0
    varGreatclub23Ildstein = 0
	//Ram's Head
    varGreatclub24Quantity = document.getElementById("Greatclub24Quantity").value;
    varGreatclub24Price = document.getElementById("Greatclub24Price").value;
    varGreatclub24Success = document.getElementById("Greatclub24Success").value;
    varGreatclub24Gold = 250
    varGreatclub24Iron = 18
    varGreatclub24Wood = 0
    varGreatclub24Leather = 5
    varGreatclub24Selentine = 0
    varGreatclub24Veilron = 0
    varGreatclub24Neithal = 0
    varGreatclub24Leenspar = 1
    varGreatclub24Theyril = 0
    varGreatclub24Stone = 0
    varGreatclub24Bone = 0
    varGreatclub24ResonantStormrune = 0
    varGreatclub24GargantuaHorn = 0
    varGreatclub24EldritchCinder = 0
    varGreatclub24Ildstein = 0
	//Headcrusher
    varGreatclub25Quantity = document.getElementById("Greatclub25Quantity").value;
    varGreatclub25Price = document.getElementById("Greatclub25Price").value;
    varGreatclub25Success = document.getElementById("Greatclub25Success").value;
    varGreatclub25Gold = 300
    varGreatclub25Iron = 23
    varGreatclub25Wood = 0
    varGreatclub25Leather = 0
    varGreatclub25Selentine = 0
    varGreatclub25Veilron = 0
    varGreatclub25Neithal = 2
    varGreatclub25Leenspar = 0
    varGreatclub25Theyril = 1
    varGreatclub25Stone = 0
    varGreatclub25Bone = 0
    varGreatclub25ResonantStormrune = 0
    varGreatclub25GargantuaHorn = 0
    varGreatclub25EldritchCinder = 0
    varGreatclub25Ildstein = 0
	//Thorgrim
    varGreatclub26Quantity = document.getElementById("Greatclub26Quantity").value;
    varGreatclub26Price = document.getElementById("Greatclub26Price").value;
    varGreatclub26Success = document.getElementById("Greatclub26Success").value;
    varGreatclub26Gold = 400
    varGreatclub26Iron = 7
    varGreatclub26Wood = 23
    varGreatclub26Leather = 0
    varGreatclub26Selentine = 0
    varGreatclub26Veilron = 0
    varGreatclub26Neithal = 0
    varGreatclub26Leenspar = 1
    varGreatclub26Theyril = 0
    varGreatclub26Stone = 0
    varGreatclub26Bone = 0
    varGreatclub26ResonantStormrune = 2
    varGreatclub26GargantuaHorn = 0
    varGreatclub26EldritchCinder = 0
    varGreatclub26Ildstein = 0
	//Legbreaker
    varGreatclub27Quantity = document.getElementById("Greatclub27Quantity").value;
    varGreatclub27Price = document.getElementById("Greatclub27Price").value;
    varGreatclub27Success = document.getElementById("Greatclub27Success").value;
    varGreatclub27Gold = 7500
    varGreatclub27Iron = 20
    varGreatclub27Wood = 0
    varGreatclub27Leather = 0
    varGreatclub27Selentine = 3
    varGreatclub27Veilron = 6
    varGreatclub27Neithal = 0
    varGreatclub27Leenspar = 0
    varGreatclub27Theyril = 0
    varGreatclub27Stone = 0
    varGreatclub27Bone = 0
    varGreatclub27ResonantStormrune = 0
    varGreatclub27GargantuaHorn = 3
    varGreatclub27EldritchCinder = 0
    varGreatclub27Ildstein = 0
	//Ildhammer
    varGreatclub28Quantity = document.getElementById("Greatclub28Quantity").value;
    varGreatclub28Price = document.getElementById("Greatclub28Price").value;
    varGreatclub28Success = document.getElementById("Greatclub28Success").value;
    varGreatclub28Gold = 10000
    varGreatclub28Iron = 20
    varGreatclub28Wood = 0
    varGreatclub28Leather = 0
    varGreatclub28Selentine = 0
    varGreatclub28Veilron = 0
    varGreatclub28Neithal = 0
    varGreatclub28Leenspar = 11
    varGreatclub28Theyril = 0
    varGreatclub28Stone = 0
    varGreatclub28Bone = 0
    varGreatclub28ResonantStormrune = 0
    varGreatclub28GargantuaHorn = 0
    varGreatclub28EldritchCinder = 3
    varGreatclub28Ildstein = 3
}

/* GREATSWORD */

//Used to reload items from Greatsword
function fnGreatswordReload()  // x= id, z= value
{
    fnGreatswordInitialize()

    fnGreatsword()

    fnGreatswordTotal()
    fnReloadGreatswordPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnGreatswordSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varLeenspar = parseInt(h)
    varTheyril = parseInt(i)
    varSuccess = parseInt(j)
    varTooth = parseInt(k)
    varBone = parseInt(l)
    varGiantBone = parseInt(m)
    varGauntBile = parseInt(n)
    varRiadanSteel = parseInt(o)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varTooth * varToothValue) + (varBone * varBoneValue) + (varGiantBone * varGiantBoneValue) + (varGauntBile * varGauntBileValue) + (varRiadanSteel * varRiadanSteelValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Greatsword
function fnGreatswordTotal()
{
    varGreatswordTotal = ((varGreatsword01Price * varGreatsword01Quantity) + (varGreatsword02Price * varGreatsword02Quantity) + (varGreatsword03Price * varGreatsword03Quantity) + (varGreatsword04Price * varGreatsword04Quantity) + (varGreatsword05Price * varGreatsword05Quantity) + (varGreatsword06Price * varGreatsword06Quantity) + (varGreatsword07Price * varGreatsword07Quantity) + (varGreatsword08Price * varGreatsword08Quantity) + (varGreatsword09Price * varGreatsword09Quantity) + (varGreatsword10Price * varGreatsword10Quantity) + (varGreatsword11Price * varGreatsword11Quantity) + (varGreatsword12Price * varGreatsword12Quantity) + (varGreatsword13Price * varGreatsword13Quantity) + (varGreatsword14Price * varGreatsword14Quantity) + (varGreatsword15Price * varGreatsword15Quantity) + (varGreatsword16Price * varGreatsword16Quantity) + (varGreatsword17Price * varGreatsword17Quantity) + (varGreatsword18Price * varGreatsword18Quantity) + (varGreatsword19Price * varGreatsword19Quantity) + (varGreatsword20Price * varGreatsword20Quantity) + (varGreatsword21Price * varGreatsword21Quantity) + (varGreatsword22Price * varGreatsword22Quantity) + (varGreatsword23Price * varGreatsword23Quantity) + (varGreatsword24Price * varGreatsword24Quantity) + (varGreatsword25Price * varGreatsword25Quantity) + (varGreatsword26Price * varGreatsword26Quantity));
    varGreatswordGoldTotal = ((varGreatsword01Gold * varGreatsword01Quantity) + (varGreatsword02Gold * varGreatsword02Quantity) + (varGreatsword03Gold * varGreatsword03Quantity) + (varGreatsword04Gold * varGreatsword04Quantity) + (varGreatsword05Gold * varGreatsword05Quantity) + (varGreatsword06Gold * varGreatsword06Quantity) + (varGreatsword07Gold * varGreatsword07Quantity) + (varGreatsword08Gold * varGreatsword08Quantity) + (varGreatsword09Gold * varGreatsword09Quantity) + (varGreatsword10Gold * varGreatsword10Quantity) + (varGreatsword11Gold * varGreatsword11Quantity) + (varGreatsword12Gold * varGreatsword12Quantity) + (varGreatsword13Gold * varGreatsword13Quantity) + (varGreatsword14Gold * varGreatsword14Quantity) + (varGreatsword15Gold * varGreatsword15Quantity) + (varGreatsword16Gold * varGreatsword16Quantity) + (varGreatsword17Gold * varGreatsword17Quantity) + (varGreatsword18Gold * varGreatsword18Quantity) + (varGreatsword19Gold * varGreatsword19Quantity) + (varGreatsword20Gold * varGreatsword20Quantity) + (varGreatsword21Gold * varGreatsword21Quantity) + (varGreatsword22Gold * varGreatsword22Quantity) + (varGreatsword23Gold * varGreatsword23Quantity) + (varGreatsword24Gold * varGreatsword24Quantity) + (varGreatsword25Gold * varGreatsword25Quantity) + (varGreatsword26Gold * varGreatsword26Quantity));
    varGreatswordIronTotal = ((varGreatsword01Iron * varGreatsword01Quantity) + (varGreatsword02Iron * varGreatsword02Quantity) + (varGreatsword03Iron * varGreatsword03Quantity) + (varGreatsword04Iron * varGreatsword04Quantity) + (varGreatsword05Iron * varGreatsword05Quantity) + (varGreatsword06Iron * varGreatsword06Quantity) + (varGreatsword07Iron * varGreatsword07Quantity) + (varGreatsword08Iron * varGreatsword08Quantity) + (varGreatsword09Iron * varGreatsword09Quantity) + (varGreatsword10Iron * varGreatsword10Quantity) + (varGreatsword11Iron * varGreatsword11Quantity) + (varGreatsword12Iron * varGreatsword12Quantity) + (varGreatsword13Iron * varGreatsword13Quantity) + (varGreatsword14Iron * varGreatsword14Quantity) + (varGreatsword15Iron * varGreatsword15Quantity) + (varGreatsword16Iron * varGreatsword16Quantity) + (varGreatsword17Iron * varGreatsword17Quantity) + (varGreatsword18Iron * varGreatsword18Quantity) + (varGreatsword19Iron * varGreatsword19Quantity) + (varGreatsword20Iron * varGreatsword20Quantity) + (varGreatsword21Iron * varGreatsword21Quantity) + (varGreatsword22Iron * varGreatsword22Quantity) + (varGreatsword23Iron * varGreatsword23Quantity) + (varGreatsword24Iron * varGreatsword24Quantity) + (varGreatsword25Iron * varGreatsword25Quantity) + (varGreatsword26Iron * varGreatsword26Quantity));
    varGreatswordWoodTotal = ((varGreatsword01Wood * varGreatsword01Quantity) + (varGreatsword02Wood * varGreatsword02Quantity) + (varGreatsword03Wood * varGreatsword03Quantity) + (varGreatsword04Wood * varGreatsword04Quantity) + (varGreatsword05Wood * varGreatsword05Quantity) + (varGreatsword06Wood * varGreatsword06Quantity) + (varGreatsword07Wood * varGreatsword07Quantity) + (varGreatsword08Wood * varGreatsword08Quantity) + (varGreatsword09Wood * varGreatsword09Quantity) + (varGreatsword10Wood * varGreatsword10Quantity) + (varGreatsword11Wood * varGreatsword11Quantity) + (varGreatsword12Wood * varGreatsword12Quantity) + (varGreatsword13Wood * varGreatsword13Quantity) + (varGreatsword14Wood * varGreatsword14Quantity) + (varGreatsword15Wood * varGreatsword15Quantity) + (varGreatsword16Wood * varGreatsword16Quantity) + (varGreatsword17Wood * varGreatsword17Quantity) + (varGreatsword18Wood * varGreatsword18Quantity) + (varGreatsword19Wood * varGreatsword19Quantity) + (varGreatsword20Wood * varGreatsword20Quantity) + (varGreatsword21Wood * varGreatsword21Quantity) + (varGreatsword22Wood * varGreatsword22Quantity) + (varGreatsword23Wood * varGreatsword23Quantity) + (varGreatsword24Wood * varGreatsword24Quantity) + (varGreatsword25Wood * varGreatsword25Quantity) + (varGreatsword26Wood * varGreatsword26Quantity));
    varGreatswordLeatherTotal = ((varGreatsword01Leather * varGreatsword01Quantity) + (varGreatsword02Leather * varGreatsword02Quantity) + (varGreatsword03Leather * varGreatsword03Quantity) + (varGreatsword04Leather * varGreatsword04Quantity) + (varGreatsword05Leather * varGreatsword05Quantity) + (varGreatsword06Leather * varGreatsword06Quantity) + (varGreatsword07Leather * varGreatsword07Quantity) + (varGreatsword08Leather * varGreatsword08Quantity) + (varGreatsword09Leather * varGreatsword09Quantity) + (varGreatsword10Leather * varGreatsword10Quantity) + (varGreatsword11Leather * varGreatsword11Quantity) + (varGreatsword12Leather * varGreatsword12Quantity) + (varGreatsword13Leather * varGreatsword13Quantity) + (varGreatsword14Leather * varGreatsword14Quantity) + (varGreatsword15Leather * varGreatsword15Quantity) + (varGreatsword16Leather * varGreatsword16Quantity) + (varGreatsword17Leather * varGreatsword17Quantity) + (varGreatsword18Leather * varGreatsword18Quantity) + (varGreatsword19Leather * varGreatsword19Quantity) + (varGreatsword20Leather * varGreatsword20Quantity) + (varGreatsword21Leather * varGreatsword21Quantity) + (varGreatsword22Leather * varGreatsword22Quantity) + (varGreatsword23Leather * varGreatsword23Quantity) + (varGreatsword24Leather * varGreatsword24Quantity) + (varGreatsword25Leather * varGreatsword25Quantity) + (varGreatsword26Leather * varGreatsword26Quantity));
    varGreatswordSelentineTotal = ((varGreatsword01Selentine * varGreatsword01Quantity) + (varGreatsword02Selentine * varGreatsword02Quantity) + (varGreatsword03Selentine * varGreatsword03Quantity) + (varGreatsword04Selentine * varGreatsword04Quantity) + (varGreatsword05Selentine * varGreatsword05Quantity) + (varGreatsword06Selentine * varGreatsword06Quantity) + (varGreatsword07Selentine * varGreatsword07Quantity) + (varGreatsword08Selentine * varGreatsword08Quantity) + (varGreatsword09Selentine * varGreatsword09Quantity) + (varGreatsword10Selentine * varGreatsword10Quantity) + (varGreatsword11Selentine * varGreatsword11Quantity) + (varGreatsword12Selentine * varGreatsword12Quantity) + (varGreatsword13Selentine * varGreatsword13Quantity) + (varGreatsword14Selentine * varGreatsword14Quantity) + (varGreatsword15Selentine * varGreatsword15Quantity) + (varGreatsword16Selentine * varGreatsword16Quantity) + (varGreatsword17Selentine * varGreatsword17Quantity) + (varGreatsword18Selentine * varGreatsword18Quantity) + (varGreatsword19Selentine * varGreatsword19Quantity) + (varGreatsword20Selentine * varGreatsword20Quantity) + (varGreatsword21Selentine * varGreatsword21Quantity) + (varGreatsword22Selentine * varGreatsword22Quantity) + (varGreatsword23Selentine * varGreatsword23Quantity) + (varGreatsword24Selentine * varGreatsword24Quantity) + (varGreatsword25Selentine * varGreatsword25Quantity) + (varGreatsword26Selentine * varGreatsword26Quantity));
    varGreatswordVeilronTotal = ((varGreatsword01Veilron * varGreatsword01Quantity) + (varGreatsword02Veilron * varGreatsword02Quantity) + (varGreatsword03Veilron * varGreatsword03Quantity) + (varGreatsword04Veilron * varGreatsword04Quantity) + (varGreatsword05Veilron * varGreatsword05Quantity) + (varGreatsword06Veilron * varGreatsword06Quantity) + (varGreatsword07Veilron * varGreatsword07Quantity) + (varGreatsword08Veilron * varGreatsword08Quantity) + (varGreatsword09Veilron * varGreatsword09Quantity) + (varGreatsword10Veilron * varGreatsword10Quantity) + (varGreatsword11Veilron * varGreatsword11Quantity) + (varGreatsword12Veilron * varGreatsword12Quantity) + (varGreatsword13Veilron * varGreatsword13Quantity) + (varGreatsword14Veilron * varGreatsword14Quantity) + (varGreatsword15Veilron * varGreatsword15Quantity) + (varGreatsword16Veilron * varGreatsword16Quantity) + (varGreatsword17Veilron * varGreatsword17Quantity) + (varGreatsword18Veilron * varGreatsword18Quantity) + (varGreatsword19Veilron * varGreatsword19Quantity) + (varGreatsword20Veilron * varGreatsword20Quantity) + (varGreatsword21Veilron * varGreatsword21Quantity) + (varGreatsword22Veilron * varGreatsword22Quantity) + (varGreatsword23Veilron * varGreatsword23Quantity) + (varGreatsword24Veilron * varGreatsword24Quantity) + (varGreatsword25Veilron * varGreatsword25Quantity) + (varGreatsword26Veilron * varGreatsword26Quantity));
    varGreatswordNeithalTotal = ((varGreatsword01Neithal * varGreatsword01Quantity) + (varGreatsword02Neithal * varGreatsword02Quantity) + (varGreatsword03Neithal * varGreatsword03Quantity) + (varGreatsword04Neithal * varGreatsword04Quantity) + (varGreatsword05Neithal * varGreatsword05Quantity) + (varGreatsword06Neithal * varGreatsword06Quantity) + (varGreatsword07Neithal * varGreatsword07Quantity) + (varGreatsword08Neithal * varGreatsword08Quantity) + (varGreatsword09Neithal * varGreatsword09Quantity) + (varGreatsword10Neithal * varGreatsword10Quantity) + (varGreatsword11Neithal * varGreatsword11Quantity) + (varGreatsword12Neithal * varGreatsword12Quantity) + (varGreatsword13Neithal * varGreatsword13Quantity) + (varGreatsword14Neithal * varGreatsword14Quantity) + (varGreatsword15Neithal * varGreatsword15Quantity) + (varGreatsword16Neithal * varGreatsword16Quantity) + (varGreatsword17Neithal * varGreatsword17Quantity) + (varGreatsword18Neithal * varGreatsword18Quantity) + (varGreatsword19Neithal * varGreatsword19Quantity) + (varGreatsword20Neithal * varGreatsword20Quantity) + (varGreatsword21Neithal * varGreatsword21Quantity) + (varGreatsword22Neithal * varGreatsword22Quantity) + (varGreatsword23Neithal * varGreatsword23Quantity) + (varGreatsword24Neithal * varGreatsword24Quantity) + (varGreatsword25Neithal * varGreatsword25Quantity) + (varGreatsword26Neithal * varGreatsword26Quantity));
    varGreatswordLeensparTotal = ((varGreatsword01Leenspar * varGreatsword01Quantity) + (varGreatsword02Leenspar * varGreatsword02Quantity) + (varGreatsword03Leenspar * varGreatsword03Quantity) + (varGreatsword04Leenspar * varGreatsword04Quantity) + (varGreatsword05Leenspar * varGreatsword05Quantity) + (varGreatsword06Leenspar * varGreatsword06Quantity) + (varGreatsword07Leenspar * varGreatsword07Quantity) + (varGreatsword08Leenspar * varGreatsword08Quantity) + (varGreatsword09Leenspar * varGreatsword09Quantity) + (varGreatsword10Leenspar * varGreatsword10Quantity) + (varGreatsword11Leenspar * varGreatsword11Quantity) + (varGreatsword12Leenspar * varGreatsword12Quantity) + (varGreatsword13Leenspar * varGreatsword13Quantity) + (varGreatsword14Leenspar * varGreatsword14Quantity) + (varGreatsword15Leenspar * varGreatsword15Quantity) + (varGreatsword16Leenspar * varGreatsword16Quantity) + (varGreatsword17Leenspar * varGreatsword17Quantity) + (varGreatsword18Leenspar * varGreatsword18Quantity) + (varGreatsword19Leenspar * varGreatsword19Quantity) + (varGreatsword20Leenspar * varGreatsword20Quantity) + (varGreatsword21Leenspar * varGreatsword21Quantity) + (varGreatsword22Leenspar * varGreatsword22Quantity) + (varGreatsword23Leenspar * varGreatsword23Quantity) + (varGreatsword24Leenspar * varGreatsword24Quantity) + (varGreatsword25Leenspar * varGreatsword25Quantity) + (varGreatsword26Leenspar * varGreatsword26Quantity));
    varGreatswordTheyrilTotal = ((varGreatsword01Theyril * varGreatsword01Quantity) + (varGreatsword02Theyril * varGreatsword02Quantity) + (varGreatsword03Theyril * varGreatsword03Quantity) + (varGreatsword04Theyril * varGreatsword04Quantity) + (varGreatsword05Theyril * varGreatsword05Quantity) + (varGreatsword06Theyril * varGreatsword06Quantity) + (varGreatsword07Theyril * varGreatsword07Quantity) + (varGreatsword08Theyril * varGreatsword08Quantity) + (varGreatsword09Theyril * varGreatsword09Quantity) + (varGreatsword10Theyril * varGreatsword10Quantity) + (varGreatsword11Theyril * varGreatsword11Quantity) + (varGreatsword12Theyril * varGreatsword12Quantity) + (varGreatsword13Theyril * varGreatsword13Quantity) + (varGreatsword14Theyril * varGreatsword14Quantity) + (varGreatsword15Theyril * varGreatsword15Quantity) + (varGreatsword16Theyril * varGreatsword16Quantity) + (varGreatsword17Theyril * varGreatsword17Quantity) + (varGreatsword18Theyril * varGreatsword18Quantity) + (varGreatsword19Theyril * varGreatsword19Quantity) + (varGreatsword20Theyril * varGreatsword20Quantity) + (varGreatsword21Theyril * varGreatsword21Quantity) + (varGreatsword22Theyril * varGreatsword22Quantity) + (varGreatsword23Theyril * varGreatsword23Quantity) + (varGreatsword24Theyril * varGreatsword24Quantity) + (varGreatsword25Theyril * varGreatsword25Quantity) + (varGreatsword26Theyril * varGreatsword26Quantity));
    varGreatswordToothTotal = ((varGreatsword01Tooth * varGreatsword01Quantity) + (varGreatsword02Tooth * varGreatsword02Quantity) + (varGreatsword03Tooth * varGreatsword03Quantity) + (varGreatsword04Tooth * varGreatsword04Quantity) + (varGreatsword05Tooth * varGreatsword05Quantity) + (varGreatsword06Tooth * varGreatsword06Quantity) + (varGreatsword07Tooth * varGreatsword07Quantity) + (varGreatsword08Tooth * varGreatsword08Quantity) + (varGreatsword09Tooth * varGreatsword09Quantity) + (varGreatsword10Tooth * varGreatsword10Quantity) + (varGreatsword11Tooth * varGreatsword11Quantity) + (varGreatsword12Tooth * varGreatsword12Quantity) + (varGreatsword13Tooth * varGreatsword13Quantity) + (varGreatsword14Tooth * varGreatsword14Quantity) + (varGreatsword15Tooth * varGreatsword15Quantity) + (varGreatsword16Tooth * varGreatsword16Quantity) + (varGreatsword17Tooth * varGreatsword17Quantity) + (varGreatsword18Tooth * varGreatsword18Quantity) + (varGreatsword19Tooth * varGreatsword19Quantity) + (varGreatsword20Tooth * varGreatsword20Quantity) + (varGreatsword21Tooth * varGreatsword21Quantity) + (varGreatsword22Tooth * varGreatsword22Quantity) + (varGreatsword23Tooth * varGreatsword23Quantity) + (varGreatsword24Tooth * varGreatsword24Quantity) + (varGreatsword25Tooth * varGreatsword25Quantity) + (varGreatsword26Tooth * varGreatsword26Quantity));
    varGreatswordBoneTotal = ((varGreatsword01Bone * varGreatsword01Quantity) + (varGreatsword02Bone * varGreatsword02Quantity) + (varGreatsword03Bone * varGreatsword03Quantity) + (varGreatsword04Bone * varGreatsword04Quantity) + (varGreatsword05Bone * varGreatsword05Quantity) + (varGreatsword06Bone * varGreatsword06Quantity) + (varGreatsword07Bone * varGreatsword07Quantity) + (varGreatsword08Bone * varGreatsword08Quantity) + (varGreatsword09Bone * varGreatsword09Quantity) + (varGreatsword10Bone * varGreatsword10Quantity) + (varGreatsword11Bone * varGreatsword11Quantity) + (varGreatsword12Bone * varGreatsword12Quantity) + (varGreatsword13Bone * varGreatsword13Quantity) + (varGreatsword14Bone * varGreatsword14Quantity) + (varGreatsword15Bone * varGreatsword15Quantity) + (varGreatsword16Bone * varGreatsword16Quantity) + (varGreatsword17Bone * varGreatsword17Quantity) + (varGreatsword18Bone * varGreatsword18Quantity) + (varGreatsword19Bone * varGreatsword19Quantity) + (varGreatsword20Bone * varGreatsword20Quantity) + (varGreatsword21Bone * varGreatsword21Quantity) + (varGreatsword22Bone * varGreatsword22Quantity) + (varGreatsword23Bone * varGreatsword23Quantity) + (varGreatsword24Bone * varGreatsword24Quantity) + (varGreatsword25Bone * varGreatsword25Quantity) + (varGreatsword26Bone * varGreatsword26Quantity));
    varGreatswordGiantBoneTotal = ((varGreatsword01GiantBone * varGreatsword01Quantity) + (varGreatsword02GiantBone * varGreatsword02Quantity) + (varGreatsword03GiantBone * varGreatsword03Quantity) + (varGreatsword04GiantBone * varGreatsword04Quantity) + (varGreatsword05GiantBone * varGreatsword05Quantity) + (varGreatsword06GiantBone * varGreatsword06Quantity) + (varGreatsword07GiantBone * varGreatsword07Quantity) + (varGreatsword08GiantBone * varGreatsword08Quantity) + (varGreatsword09GiantBone * varGreatsword09Quantity) + (varGreatsword10GiantBone * varGreatsword10Quantity) + (varGreatsword11GiantBone * varGreatsword11Quantity) + (varGreatsword12GiantBone * varGreatsword12Quantity) + (varGreatsword13GiantBone * varGreatsword13Quantity) + (varGreatsword14GiantBone * varGreatsword14Quantity) + (varGreatsword15GiantBone * varGreatsword15Quantity) + (varGreatsword16GiantBone * varGreatsword16Quantity) + (varGreatsword17GiantBone * varGreatsword17Quantity) + (varGreatsword18GiantBone * varGreatsword18Quantity) + (varGreatsword19GiantBone * varGreatsword19Quantity) + (varGreatsword20GiantBone * varGreatsword20Quantity) + (varGreatsword21GiantBone * varGreatsword21Quantity) + (varGreatsword22GiantBone * varGreatsword22Quantity) + (varGreatsword23GiantBone * varGreatsword23Quantity) + (varGreatsword24GiantBone * varGreatsword24Quantity) + (varGreatsword25GiantBone * varGreatsword25Quantity) + (varGreatsword26GiantBone * varGreatsword26Quantity));
    varGreatswordGauntBileTotal = ((varGreatsword01GauntBile * varGreatsword01Quantity) + (varGreatsword02GauntBile * varGreatsword02Quantity) + (varGreatsword03GauntBile * varGreatsword03Quantity) + (varGreatsword04GauntBile * varGreatsword04Quantity) + (varGreatsword05GauntBile * varGreatsword05Quantity) + (varGreatsword06GauntBile * varGreatsword06Quantity) + (varGreatsword07GauntBile * varGreatsword07Quantity) + (varGreatsword08GauntBile * varGreatsword08Quantity) + (varGreatsword09GauntBile * varGreatsword09Quantity) + (varGreatsword10GauntBile * varGreatsword10Quantity) + (varGreatsword11GauntBile * varGreatsword11Quantity) + (varGreatsword12GauntBile * varGreatsword12Quantity) + (varGreatsword13GauntBile * varGreatsword13Quantity) + (varGreatsword14GauntBile * varGreatsword14Quantity) + (varGreatsword15GauntBile * varGreatsword15Quantity) + (varGreatsword16GauntBile * varGreatsword16Quantity) + (varGreatsword17GauntBile * varGreatsword17Quantity) + (varGreatsword18GauntBile * varGreatsword18Quantity) + (varGreatsword19GauntBile * varGreatsword19Quantity) + (varGreatsword20GauntBile * varGreatsword20Quantity) + (varGreatsword21GauntBile * varGreatsword21Quantity) + (varGreatsword22GauntBile * varGreatsword22Quantity) + (varGreatsword23GauntBile * varGreatsword23Quantity) + (varGreatsword24GauntBile * varGreatsword24Quantity) + (varGreatsword25GauntBile * varGreatsword25Quantity) + (varGreatsword26GauntBile * varGreatsword26Quantity));
    varGreatswordRiadanSteelTotal = ((varGreatsword01RiadanSteel * varGreatsword01Quantity) + (varGreatsword02RiadanSteel * varGreatsword02Quantity) + (varGreatsword03RiadanSteel * varGreatsword03Quantity) + (varGreatsword04RiadanSteel * varGreatsword04Quantity) + (varGreatsword05RiadanSteel * varGreatsword05Quantity) + (varGreatsword06RiadanSteel * varGreatsword06Quantity) + (varGreatsword07RiadanSteel * varGreatsword07Quantity) + (varGreatsword08RiadanSteel * varGreatsword08Quantity) + (varGreatsword09RiadanSteel * varGreatsword09Quantity) + (varGreatsword10RiadanSteel * varGreatsword10Quantity) + (varGreatsword11RiadanSteel * varGreatsword11Quantity) + (varGreatsword12RiadanSteel * varGreatsword12Quantity) + (varGreatsword13RiadanSteel * varGreatsword13Quantity) + (varGreatsword14RiadanSteel * varGreatsword14Quantity) + (varGreatsword15RiadanSteel * varGreatsword15Quantity) + (varGreatsword16RiadanSteel * varGreatsword16Quantity) + (varGreatsword17RiadanSteel * varGreatsword17Quantity) + (varGreatsword18RiadanSteel * varGreatsword18Quantity) + (varGreatsword19RiadanSteel * varGreatsword19Quantity) + (varGreatsword20RiadanSteel * varGreatsword20Quantity) + (varGreatsword21RiadanSteel * varGreatsword21Quantity) + (varGreatsword22RiadanSteel * varGreatsword22Quantity) + (varGreatsword23RiadanSteel * varGreatsword23Quantity) + (varGreatsword24RiadanSteel * varGreatsword24Quantity) + (varGreatsword25RiadanSteel * varGreatsword25Quantity) + (varGreatsword26RiadanSteel * varGreatsword26Quantity));
}

//Greatsword Calculations
function fnGreatsword()
{
    fnGreatswordSubPrice(varGreatsword01Gold,varGreatsword01Iron,varGreatsword01Wood,varGreatsword01Leather,varGreatsword01Selentine,varGreatsword01Veilron,varGreatsword01Neithal,varGreatsword01Leenspar,varGreatsword01Theyril,varGreatsword01Success,varGreatsword01Tooth,varGreatsword01Bone,varGreatsword01GiantBone,varGreatsword01GauntBile,varGreatsword01RiadanSteel)
    varGreatsword01Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword02Gold,varGreatsword02Iron,varGreatsword02Wood,varGreatsword02Leather,varGreatsword02Selentine,varGreatsword02Veilron,varGreatsword02Neithal,varGreatsword02Leenspar,varGreatsword02Theyril,varGreatsword02Success,varGreatsword02Tooth,varGreatsword02Bone,varGreatsword02GiantBone,varGreatsword02GauntBile,varGreatsword02RiadanSteel)
    varGreatsword02Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword03Gold,varGreatsword03Iron,varGreatsword03Wood,varGreatsword03Leather,varGreatsword03Selentine,varGreatsword03Veilron,varGreatsword03Neithal,varGreatsword03Leenspar,varGreatsword03Theyril,varGreatsword03Success,varGreatsword03Tooth,varGreatsword03Bone,varGreatsword03GiantBone,varGreatsword03GauntBile,varGreatsword03RiadanSteel)
    varGreatsword03Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword04Gold,varGreatsword04Iron,varGreatsword04Wood,varGreatsword04Leather,varGreatsword04Selentine,varGreatsword04Veilron,varGreatsword04Neithal,varGreatsword04Leenspar,varGreatsword04Theyril,varGreatsword04Success,varGreatsword04Tooth,varGreatsword04Bone,varGreatsword04GiantBone,varGreatsword04GauntBile,varGreatsword04RiadanSteel)
    varGreatsword04Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword05Gold,varGreatsword05Iron,varGreatsword05Wood,varGreatsword05Leather,varGreatsword05Selentine,varGreatsword05Veilron,varGreatsword05Neithal,varGreatsword05Leenspar,varGreatsword05Theyril,varGreatsword05Success,varGreatsword05Tooth,varGreatsword05Bone,varGreatsword05GiantBone,varGreatsword05GauntBile,varGreatsword05RiadanSteel)
    varGreatsword05Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword06Gold,varGreatsword06Iron,varGreatsword06Wood,varGreatsword06Leather,varGreatsword06Selentine,varGreatsword06Veilron,varGreatsword06Neithal,varGreatsword06Leenspar,varGreatsword06Theyril,varGreatsword06Success,varGreatsword06Tooth,varGreatsword06Bone,varGreatsword06GiantBone,varGreatsword06GauntBile,varGreatsword06RiadanSteel)
    varGreatsword06Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword07Gold,varGreatsword07Iron,varGreatsword07Wood,varGreatsword07Leather,varGreatsword07Selentine,varGreatsword07Veilron,varGreatsword07Neithal,varGreatsword07Leenspar,varGreatsword07Theyril,varGreatsword07Success,varGreatsword07Tooth,varGreatsword07Bone,varGreatsword07GiantBone,varGreatsword07GauntBile,varGreatsword07RiadanSteel)
    varGreatsword07Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword08Gold,varGreatsword08Iron,varGreatsword08Wood,varGreatsword08Leather,varGreatsword08Selentine,varGreatsword08Veilron,varGreatsword08Neithal,varGreatsword08Leenspar,varGreatsword08Theyril,varGreatsword08Success,varGreatsword08Tooth,varGreatsword08Bone,varGreatsword08GiantBone,varGreatsword08GauntBile,varGreatsword08RiadanSteel)
    varGreatsword08Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword09Gold,varGreatsword09Iron,varGreatsword09Wood,varGreatsword09Leather,varGreatsword09Selentine,varGreatsword09Veilron,varGreatsword09Neithal,varGreatsword09Leenspar,varGreatsword09Theyril,varGreatsword09Success,varGreatsword09Tooth,varGreatsword09Bone,varGreatsword09GiantBone,varGreatsword09GauntBile,varGreatsword09RiadanSteel)
    varGreatsword09Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword10Gold,varGreatsword10Iron,varGreatsword10Wood,varGreatsword10Leather,varGreatsword10Selentine,varGreatsword10Veilron,varGreatsword10Neithal,varGreatsword10Leenspar,varGreatsword10Theyril,varGreatsword10Success,varGreatsword10Tooth,varGreatsword10Bone,varGreatsword10GiantBone,varGreatsword10GauntBile,varGreatsword10RiadanSteel)
    varGreatsword10Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword11Gold,varGreatsword11Iron,varGreatsword11Wood,varGreatsword11Leather,varGreatsword11Selentine,varGreatsword11Veilron,varGreatsword11Neithal,varGreatsword11Leenspar,varGreatsword11Theyril,varGreatsword11Success,varGreatsword11Tooth,varGreatsword11Bone,varGreatsword11GiantBone,varGreatsword11GauntBile,varGreatsword11RiadanSteel)
    varGreatsword11Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword12Gold,varGreatsword12Iron,varGreatsword12Wood,varGreatsword12Leather,varGreatsword12Selentine,varGreatsword12Veilron,varGreatsword12Neithal,varGreatsword12Leenspar,varGreatsword12Theyril,varGreatsword12Success,varGreatsword12Tooth,varGreatsword12Bone,varGreatsword12GiantBone,varGreatsword12GauntBile,varGreatsword12RiadanSteel)
    varGreatsword12Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword13Gold,varGreatsword13Iron,varGreatsword13Wood,varGreatsword13Leather,varGreatsword13Selentine,varGreatsword13Veilron,varGreatsword13Neithal,varGreatsword13Leenspar,varGreatsword13Theyril,varGreatsword13Success,varGreatsword13Tooth,varGreatsword13Bone,varGreatsword13GiantBone,varGreatsword13GauntBile,varGreatsword13RiadanSteel)
    varGreatsword13Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword14Gold,varGreatsword14Iron,varGreatsword14Wood,varGreatsword14Leather,varGreatsword14Selentine,varGreatsword14Veilron,varGreatsword14Neithal,varGreatsword14Leenspar,varGreatsword14Theyril,varGreatsword14Success,varGreatsword14Tooth,varGreatsword14Bone,varGreatsword14GiantBone,varGreatsword14GauntBile,varGreatsword14RiadanSteel)
    varGreatsword14Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword15Gold,varGreatsword15Iron,varGreatsword15Wood,varGreatsword15Leather,varGreatsword15Selentine,varGreatsword15Veilron,varGreatsword15Neithal,varGreatsword15Leenspar,varGreatsword15Theyril,varGreatsword15Success,varGreatsword15Tooth,varGreatsword15Bone,varGreatsword15GiantBone,varGreatsword15GauntBile,varGreatsword15RiadanSteel)
    varGreatsword15Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword16Gold,varGreatsword16Iron,varGreatsword16Wood,varGreatsword16Leather,varGreatsword16Selentine,varGreatsword16Veilron,varGreatsword16Neithal,varGreatsword16Leenspar,varGreatsword16Theyril,varGreatsword16Success,varGreatsword16Tooth,varGreatsword16Bone,varGreatsword16GiantBone,varGreatsword16GauntBile,varGreatsword16RiadanSteel)
    varGreatsword16Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword17Gold,varGreatsword17Iron,varGreatsword17Wood,varGreatsword17Leather,varGreatsword17Selentine,varGreatsword17Veilron,varGreatsword17Neithal,varGreatsword17Leenspar,varGreatsword17Theyril,varGreatsword17Success,varGreatsword17Tooth,varGreatsword17Bone,varGreatsword17GiantBone,varGreatsword17GauntBile,varGreatsword17RiadanSteel)
    varGreatsword17Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword18Gold,varGreatsword18Iron,varGreatsword18Wood,varGreatsword18Leather,varGreatsword18Selentine,varGreatsword18Veilron,varGreatsword18Neithal,varGreatsword18Leenspar,varGreatsword18Theyril,varGreatsword18Success,varGreatsword18Tooth,varGreatsword18Bone,varGreatsword18GiantBone,varGreatsword18GauntBile,varGreatsword18RiadanSteel)
    varGreatsword18Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword19Gold,varGreatsword19Iron,varGreatsword19Wood,varGreatsword19Leather,varGreatsword19Selentine,varGreatsword19Veilron,varGreatsword19Neithal,varGreatsword19Leenspar,varGreatsword19Theyril,varGreatsword19Success,varGreatsword19Tooth,varGreatsword19Bone,varGreatsword19GiantBone,varGreatsword19GauntBile,varGreatsword19RiadanSteel)
    varGreatsword19Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword20Gold,varGreatsword20Iron,varGreatsword20Wood,varGreatsword20Leather,varGreatsword20Selentine,varGreatsword20Veilron,varGreatsword20Neithal,varGreatsword20Leenspar,varGreatsword20Theyril,varGreatsword20Success,varGreatsword20Tooth,varGreatsword20Bone,varGreatsword20GiantBone,varGreatsword20GauntBile,varGreatsword20RiadanSteel)
    varGreatsword20Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword21Gold,varGreatsword21Iron,varGreatsword21Wood,varGreatsword21Leather,varGreatsword21Selentine,varGreatsword21Veilron,varGreatsword21Neithal,varGreatsword21Leenspar,varGreatsword21Theyril,varGreatsword21Success,varGreatsword21Tooth,varGreatsword21Bone,varGreatsword21GiantBone,varGreatsword21GauntBile,varGreatsword21RiadanSteel)
    varGreatsword21Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword22Gold,varGreatsword22Iron,varGreatsword22Wood,varGreatsword22Leather,varGreatsword22Selentine,varGreatsword22Veilron,varGreatsword22Neithal,varGreatsword22Leenspar,varGreatsword22Theyril,varGreatsword22Success,varGreatsword22Tooth,varGreatsword22Bone,varGreatsword22GiantBone,varGreatsword22GauntBile,varGreatsword22RiadanSteel)
    varGreatsword22Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword23Gold,varGreatsword23Iron,varGreatsword23Wood,varGreatsword23Leather,varGreatsword23Selentine,varGreatsword23Veilron,varGreatsword23Neithal,varGreatsword23Leenspar,varGreatsword23Theyril,varGreatsword23Success,varGreatsword23Tooth,varGreatsword23Bone,varGreatsword23GiantBone,varGreatsword23GauntBile,varGreatsword23RiadanSteel)
    varGreatsword23Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword24Gold,varGreatsword24Iron,varGreatsword24Wood,varGreatsword24Leather,varGreatsword24Selentine,varGreatsword24Veilron,varGreatsword24Neithal,varGreatsword24Leenspar,varGreatsword24Theyril,varGreatsword24Success,varGreatsword24Tooth,varGreatsword24Bone,varGreatsword24GiantBone,varGreatsword24GauntBile,varGreatsword24RiadanSteel)
    varGreatsword24Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword25Gold,varGreatsword25Iron,varGreatsword25Wood,varGreatsword25Leather,varGreatsword25Selentine,varGreatsword25Veilron,varGreatsword25Neithal,varGreatsword25Leenspar,varGreatsword25Theyril,varGreatsword25Success,varGreatsword25Tooth,varGreatsword25Bone,varGreatsword25GiantBone,varGreatsword25GauntBile,varGreatsword25RiadanSteel)
    varGreatsword25Price = varItemPrice;
    fnGreatswordSubPrice(varGreatsword26Gold,varGreatsword26Iron,varGreatsword26Wood,varGreatsword26Leather,varGreatsword26Selentine,varGreatsword26Veilron,varGreatsword26Neithal,varGreatsword26Leenspar,varGreatsword26Theyril,varGreatsword26Success,varGreatsword26Tooth,varGreatsword26Bone,varGreatsword26GiantBone,varGreatsword26GauntBile,varGreatsword26RiadanSteel)
    varGreatsword26Price = varItemPrice;
}

function fnReloadGreatswordPrices()
{
    //Greatsword Prices
    document.getElementById('Greatsword01Price').value = varGreatsword01Price;
    document.getElementById('Greatsword02Price').value = varGreatsword02Price;
    document.getElementById('Greatsword03Price').value = varGreatsword03Price;
    document.getElementById('Greatsword04Price').value = varGreatsword04Price;
    document.getElementById('Greatsword05Price').value = varGreatsword05Price;
    document.getElementById('Greatsword06Price').value = varGreatsword06Price;
    document.getElementById('Greatsword07Price').value = varGreatsword07Price;
    document.getElementById('Greatsword08Price').value = varGreatsword08Price;
    document.getElementById('Greatsword09Price').value = varGreatsword09Price;
    document.getElementById('Greatsword10Price').value = varGreatsword10Price;
    document.getElementById('Greatsword11Price').value = varGreatsword11Price;
    document.getElementById('Greatsword12Price').value = varGreatsword12Price;
    document.getElementById('Greatsword13Price').value = varGreatsword13Price;
    document.getElementById('Greatsword14Price').value = varGreatsword14Price;
    document.getElementById('Greatsword15Price').value = varGreatsword15Price;
    document.getElementById('Greatsword16Price').value = varGreatsword16Price;
    document.getElementById('Greatsword17Price').value = varGreatsword17Price;
    document.getElementById('Greatsword18Price').value = varGreatsword18Price;
    document.getElementById('Greatsword19Price').value = varGreatsword19Price;
    document.getElementById('Greatsword20Price').value = varGreatsword20Price;
    document.getElementById('Greatsword21Price').value = varGreatsword21Price;
    document.getElementById('Greatsword22Price').value = varGreatsword22Price;
    document.getElementById('Greatsword23Price').value = varGreatsword23Price;
    document.getElementById('Greatsword24Price').value = varGreatsword24Price;
    document.getElementById('Greatsword25Price').value = varGreatsword25Price;
    document.getElementById('Greatsword26Price').value = varGreatsword26Price;

    //Greatsword Total Prices
    document.getElementById('GreatswordTotal').value = varGreatswordTotal;
    document.getElementById('GreatswordGoldTotal').value = varGreatswordGoldTotal;
    document.getElementById('GreatswordIronTotal').value = varGreatswordIronTotal;
    document.getElementById('GreatswordWoodTotal').value = varGreatswordWoodTotal;
    document.getElementById('GreatswordLeatherTotal').value = varGreatswordLeatherTotal;
    document.getElementById('GreatswordSelentineTotal').value = varGreatswordSelentineTotal;
    document.getElementById('GreatswordVeilronTotal').value = varGreatswordVeilronTotal;
    document.getElementById('GreatswordNeithalTotal').value = varGreatswordNeithalTotal;
    document.getElementById('GreatswordLeensparTotal').value = varGreatswordLeensparTotal;
    document.getElementById('GreatswordTheyrilTotal').value = varGreatswordTheyrilTotal;
    document.getElementById('GreatswordToothTotal').value = varGreatswordToothTotal;
    document.getElementById('GreatswordBoneTotal').value = varGreatswordBoneTotal;
    document.getElementById('GreatswordGiantBoneTotal').value = varGreatswordGiantBoneTotal;
    document.getElementById('GreatswordGauntBileTotal').value = varGreatswordGauntBileTotal;
    document.getElementById('GreatswordRiadanSteelTotal').value = varGreatswordRiadanSteelTotal;
}

function fnGreatswordInitialize()
{
    varGreatswordTotal = document.getElementById("GreatswordTotal").value;
    varGreatswordGoldTotal = document.getElementById("GreatswordGoldTotal").value;
    varGreatswordIronTotal = document.getElementById("GreatswordIronTotal").value;
    varGreatswordWoodTotal = document.getElementById("GreatswordWoodTotal").value;
    varGreatswordLeatherTotal = document.getElementById("GreatswordLeatherTotal").value;
    varGreatswordSelentineTotal = document.getElementById("GreatswordSelentineTotal").value;
    varGreatswordVeilronTotal = document.getElementById("GreatswordVeilronTotal").value;
    varGreatswordNeithalTotal = document.getElementById("GreatswordNeithalTotal").value;
    varGreatswordLeensparTotal = document.getElementById("GreatswordLeensparTotal").value;
    varGreatswordTheyrilTotal = document.getElementById("GreatswordTheyrilTotal").value;
    varGreatswordToothTotal = document.getElementById("GreatswordToothTotal").value;
    varGreatswordBoneTotal = document.getElementById("GreatswordBoneTotal").value;
    varGreatswordGiantBoneTotal = document.getElementById("GreatswordGiantBoneTotal").value;
    varGreatswordGauntBileTotal = document.getElementById("GreatswordGauntBileTotal").value;
    varGreatswordRiadanSteelTotal = document.getElementById("GreatswordRiadanSteelTotal").value;

    // *** Greatsword VARIABLES ***
	//Troll Clubber
    varGreatsword01Quantity = document.getElementById("Greatsword01Quantity").value;
    varGreatsword01Price = document.getElementById("Greatsword01Price").value;
    varGreatsword01Success = document.getElementById("Greatsword01Success").value;
    varGreatsword01Gold = 0
    varGreatsword01Iron = 0
    varGreatsword01Wood = 0
    varGreatsword01Leather = 2
    varGreatsword01Selentine = 0
    varGreatsword01Veilron = 0
    varGreatsword01Neithal = 0
    varGreatsword01Leenspar = 0
    varGreatsword01Theyril = 0
    varGreatsword01Tooth = 2
    varGreatsword01Bone = 6
    varGreatsword01GiantBone = 0
    varGreatsword01GauntBile = 0
    varGreatsword01RiadanSteel = 0

	//Mercian Flameberge
    varGreatsword02Quantity = document.getElementById("Greatsword02Quantity").value;
    varGreatsword02Price = document.getElementById("Greatsword02Price").value;
    varGreatsword02Success = document.getElementById("Greatsword02Success").value;
    varGreatsword02Gold = 0
    varGreatsword02Iron = 5
    varGreatsword02Wood = 1
    varGreatsword02Leather = 0
    varGreatsword02Selentine = 0
    varGreatsword02Veilron = 0
    varGreatsword02Neithal = 0
    varGreatsword02Leenspar = 0
    varGreatsword02Theyril = 0
    varGreatsword02Tooth = 0
    varGreatsword02Bone = 0
    varGreatsword02GiantBone = 0
    varGreatsword02GauntBile = 0
    varGreatsword02RiadanSteel = 0

	//Mirdain Claymore
    varGreatsword03Quantity = document.getElementById("Greatsword03Quantity").value;
    varGreatsword03Price = document.getElementById("Greatsword03Price").value;
    varGreatsword03Success = document.getElementById("Greatsword03Success").value;
    varGreatsword03Gold = 0
    varGreatsword03Iron = 4
    varGreatsword03Wood = 2
    varGreatsword03Leather = 0
    varGreatsword03Selentine = 0
    varGreatsword03Veilron = 0
    varGreatsword03Neithal = 0
    varGreatsword03Leenspar = 0
    varGreatsword03Theyril = 0
    varGreatsword03Tooth = 0
    varGreatsword03Bone = 0
    varGreatsword03GiantBone = 0
    varGreatsword03GauntBile = 0
    varGreatsword03RiadanSteel = 0

	//Dwarven Zweihander
    varGreatsword04Quantity = document.getElementById("Greatsword04Quantity").value;
    varGreatsword04Price = document.getElementById("Greatsword04Price").value;
    varGreatsword04Success = document.getElementById("Greatsword04Success").value;
    varGreatsword04Gold = 0
    varGreatsword04Iron = 5
    varGreatsword04Wood = 1
    varGreatsword04Leather = 0
    varGreatsword04Selentine = 0
    varGreatsword04Veilron = 0
    varGreatsword04Neithal = 0
    varGreatsword04Leenspar = 0
    varGreatsword04Theyril = 0
    varGreatsword04Tooth = 0
    varGreatsword04Bone = 0
    varGreatsword04GiantBone = 0
    varGreatsword04GauntBile = 0
    varGreatsword04RiadanSteel = 0

	//Mahirim Greatsword
    varGreatsword05Quantity = document.getElementById("Greatsword05Quantity").value;
    varGreatsword05Price = document.getElementById("Greatsword05Price").value;
    varGreatsword05Success = document.getElementById("Greatsword05Success").value;
    varGreatsword05Gold = 0
    varGreatsword05Iron = 4
    varGreatsword05Wood = 2
    varGreatsword05Leather = 0
    varGreatsword05Selentine = 0
    varGreatsword05Veilron = 0
    varGreatsword05Neithal = 0
    varGreatsword05Leenspar = 0
    varGreatsword05Theyril = 0
    varGreatsword05Tooth = 0
    varGreatsword05Bone = 0
    varGreatsword05GiantBone = 0
    varGreatsword05GauntBile = 0
    varGreatsword05RiadanSteel = 0

	//Orkish Two-Hander
    varGreatsword06Quantity = document.getElementById("Greatsword06Quantity").value;
    varGreatsword06Price = document.getElementById("Greatsword06Price").value;
    varGreatsword06Success = document.getElementById("Greatsword06Success").value;
    varGreatsword06Gold = 0
    varGreatsword06Iron = 5
    varGreatsword06Wood = 1
    varGreatsword06Leather = 0
    varGreatsword06Selentine = 0
    varGreatsword06Veilron = 0
    varGreatsword06Neithal = 0
    varGreatsword06Leenspar = 0
    varGreatsword06Theyril = 0
    varGreatsword06Tooth = 0
    varGreatsword06Bone = 0
    varGreatsword06GiantBone = 0
    varGreatsword06GauntBile = 0
    varGreatsword06RiadanSteel = 0

	//Alfar Claymore
    varGreatsword07Quantity = document.getElementById("Greatsword07Quantity").value;
    varGreatsword07Price = document.getElementById("Greatsword07Price").value;
    varGreatsword07Success = document.getElementById("Greatsword07Success").value;
    varGreatsword07Gold = 0
    varGreatsword07Iron = 5
    varGreatsword07Wood = 1
    varGreatsword07Leather = 0
    varGreatsword07Selentine = 0
    varGreatsword07Veilron = 0
    varGreatsword07Neithal = 0
    varGreatsword07Leenspar = 0
    varGreatsword07Theyril = 0
    varGreatsword07Tooth = 0
    varGreatsword07Bone = 0
    varGreatsword07GiantBone = 0
    varGreatsword07GauntBile = 0
    varGreatsword07RiadanSteel = 0

	//Doubleblade
    varGreatsword08Quantity = document.getElementById("Greatsword08Quantity").value;
    varGreatsword08Price = document.getElementById("Greatsword08Price").value;
    varGreatsword08Success = document.getElementById("Greatsword08Success").value;
    varGreatsword08Gold = 15
    varGreatsword08Iron = 7
    varGreatsword08Wood = 2
    varGreatsword08Leather = 0
    varGreatsword08Selentine = 0
    varGreatsword08Veilron = 0
    varGreatsword08Neithal = 0
    varGreatsword08Leenspar = 0
    varGreatsword08Theyril = 0
    varGreatsword08Tooth = 0
    varGreatsword08Bone = 0
    varGreatsword08GiantBone = 0
    varGreatsword08GauntBile = 0
    varGreatsword08RiadanSteel = 0

	//Frostfall
    varGreatsword09Quantity = document.getElementById("Greatsword09Quantity").value;
    varGreatsword09Price = document.getElementById("Greatsword09Price").value;
    varGreatsword09Success = document.getElementById("Greatsword09Success").value;
    varGreatsword09Gold = 15
    varGreatsword09Iron = 7
    varGreatsword09Wood = 2
    varGreatsword09Leather = 0
    varGreatsword09Selentine = 0
    varGreatsword09Veilron = 0
    varGreatsword09Neithal = 0
    varGreatsword09Leenspar = 0
    varGreatsword09Theyril = 0
    varGreatsword09Tooth = 0
    varGreatsword09Bone = 0
    varGreatsword09GiantBone = 0
    varGreatsword09GauntBile = 0
    varGreatsword09RiadanSteel = 0

	//Deepblade
    varGreatsword10Quantity = document.getElementById("Greatsword10Quantity").value;
    varGreatsword10Price = document.getElementById("Greatsword10Price").value;
    varGreatsword10Success = document.getElementById("Greatsword10Success").value;
    varGreatsword10Gold = 15
    varGreatsword10Iron = 7
    varGreatsword10Wood = 2
    varGreatsword10Leather = 0
    varGreatsword10Selentine = 0
    varGreatsword10Veilron = 0
    varGreatsword10Neithal = 0
    varGreatsword10Leenspar = 0
    varGreatsword10Theyril = 0
    varGreatsword10Tooth = 0
    varGreatsword10Bone = 0
    varGreatsword10GiantBone = 0
    varGreatsword10GauntBile = 0
    varGreatsword10RiadanSteel = 0

	//Shadesword
    varGreatsword11Quantity = document.getElementById("Greatsword11Quantity").value;
    varGreatsword11Price = document.getElementById("Greatsword11Price").value;
    varGreatsword11Success = document.getElementById("Greatsword11Success").value;
    varGreatsword11Gold = 30
    varGreatsword11Iron = 10
    varGreatsword11Wood = 3
    varGreatsword11Leather = 0
    varGreatsword11Selentine = 0
    varGreatsword11Veilron = 0
    varGreatsword11Neithal = 0
    varGreatsword11Leenspar = 0
    varGreatsword11Theyril = 0
    varGreatsword11Tooth = 0
    varGreatsword11Bone = 0
    varGreatsword11GiantBone = 0
    varGreatsword11GauntBile = 0
    varGreatsword11RiadanSteel = 0

	//Nodachi
    varGreatsword12Quantity = document.getElementById("Greatsword12Quantity").value;
    varGreatsword12Price = document.getElementById("Greatsword12Price").value;
    varGreatsword12Success = document.getElementById("Greatsword12Success").value;
    varGreatsword12Gold = 30
    varGreatsword12Iron = 11
    varGreatsword12Wood = 2
    varGreatsword12Leather = 0
    varGreatsword12Selentine = 0
    varGreatsword12Veilron = 0
    varGreatsword12Neithal = 0
    varGreatsword12Leenspar = 0
    varGreatsword12Theyril = 0
    varGreatsword12Tooth = 0
    varGreatsword12Bone = 0
    varGreatsword12GiantBone = 0
    varGreatsword12GauntBile = 0
    varGreatsword12RiadanSteel = 0

	//Boneblade
    varGreatsword13Quantity = document.getElementById("Greatsword13Quantity").value;
    varGreatsword13Price = document.getElementById("Greatsword13Price").value;
    varGreatsword13Success = document.getElementById("Greatsword13Success").value;
    varGreatsword13Gold = 60
    varGreatsword13Iron = 4
    varGreatsword13Wood = 5
    varGreatsword13Leather = 8
    varGreatsword13Selentine = 0
    varGreatsword13Veilron = 0
    varGreatsword13Neithal = 0
    varGreatsword13Leenspar = 0
    varGreatsword13Theyril = 0
    varGreatsword13Tooth = 0
    varGreatsword13Bone = 0
    varGreatsword13GiantBone = 5
    varGreatsword13GauntBile = 0
    varGreatsword13RiadanSteel = 0

	//Clawblade
    varGreatsword14Quantity = document.getElementById("Greatsword14Quantity").value;
    varGreatsword14Price = document.getElementById("Greatsword14Price").value;
    varGreatsword14Success = document.getElementById("Greatsword14Success").value;
    varGreatsword14Gold = 60
    varGreatsword14Iron = 16
    varGreatsword14Wood = 4
    varGreatsword14Leather = 0
    varGreatsword14Selentine = 0
    varGreatsword14Veilron = 0
    varGreatsword14Neithal = 0
    varGreatsword14Leenspar = 0
    varGreatsword14Theyril = 0
    varGreatsword14Tooth = 0
    varGreatsword14Bone = 0
    varGreatsword14GiantBone = 0
    varGreatsword14GauntBile = 0
    varGreatsword14RiadanSteel = 0

	//Leensword
    varGreatsword15Quantity = document.getElementById("Greatsword15Quantity").value;
    varGreatsword15Price = document.getElementById("Greatsword15Price").value;
    varGreatsword15Success = document.getElementById("Greatsword15Success").value;
    varGreatsword15Gold = 60
    varGreatsword15Iron = 17
    varGreatsword15Wood = 3
    varGreatsword15Leather = 0
    varGreatsword15Selentine = 0
    varGreatsword15Veilron = 0
    varGreatsword15Neithal = 0
    varGreatsword15Leenspar = 0
    varGreatsword15Theyril = 0
    varGreatsword15Tooth = 0
    varGreatsword15Bone = 0
    varGreatsword15GiantBone = 0
    varGreatsword15GauntBile = 0
    varGreatsword15RiadanSteel = 0

	//Mercian Greatsword
    varGreatsword16Quantity = document.getElementById("Greatsword16Quantity").value;
    varGreatsword16Price = document.getElementById("Greatsword16Price").value;
    varGreatsword16Success = document.getElementById("Greatsword16Success").value;
    varGreatsword16Gold = 160
    varGreatsword16Iron = 32
    varGreatsword16Wood = 4
    varGreatsword16Leather = 0
    varGreatsword16Selentine = 0
    varGreatsword16Veilron = 0
    varGreatsword16Neithal = 0
    varGreatsword16Leenspar = 0
    varGreatsword16Theyril = 0
    varGreatsword16Tooth = 0
    varGreatsword16Bone = 0
    varGreatsword16GiantBone = 0
    varGreatsword16GauntBile = 0
    varGreatsword16RiadanSteel = 0

	//Mirdain Greatsword
    varGreatsword17Quantity = document.getElementById("Greatsword17Quantity").value;
    varGreatsword17Price = document.getElementById("Greatsword17Price").value;
    varGreatsword17Success = document.getElementById("Greatsword17Success").value;
    varGreatsword17Gold = 160
    varGreatsword17Iron = 32
    varGreatsword17Wood = 4
    varGreatsword17Leather = 0
    varGreatsword17Selentine = 0
    varGreatsword17Veilron = 0
    varGreatsword17Neithal = 0
    varGreatsword17Leenspar = 0
    varGreatsword17Theyril = 0
    varGreatsword17Tooth = 0
    varGreatsword17Bone = 0
    varGreatsword17GiantBone = 0
    varGreatsword17GauntBile = 0
    varGreatsword17RiadanSteel = 0

	//Dwarven Greatsword
    varGreatsword18Quantity = document.getElementById("Greatsword18Quantity").value;
    varGreatsword18Price = document.getElementById("Greatsword18Price").value;
    varGreatsword18Success = document.getElementById("Greatsword18Success").value;
    varGreatsword18Gold = 160
    varGreatsword18Iron = 32
    varGreatsword18Wood = 4
    varGreatsword18Leather = 0
    varGreatsword18Selentine = 0
    varGreatsword18Veilron = 0
    varGreatsword18Neithal = 0
    varGreatsword18Leenspar = 0
    varGreatsword18Theyril = 0
    varGreatsword18Tooth = 0
    varGreatsword18Bone = 0
    varGreatsword18GiantBone = 0
    varGreatsword18GauntBile = 0
    varGreatsword18RiadanSteel = 0

	//Mahirim Two-handed Sword
    varGreatsword19Quantity = document.getElementById("Greatsword19Quantity").value;
    varGreatsword19Price = document.getElementById("Greatsword19Price").value;
    varGreatsword19Success = document.getElementById("Greatsword19Success").value;
    varGreatsword19Gold = 160
    varGreatsword19Iron = 28
    varGreatsword19Wood = 6
    varGreatsword19Leather = 6
    varGreatsword19Selentine = 0
    varGreatsword19Veilron = 0
    varGreatsword19Neithal = 0
    varGreatsword19Leenspar = 0
    varGreatsword19Theyril = 0
    varGreatsword19Tooth = 0
    varGreatsword19Bone = 0
    varGreatsword19GiantBone = 0
    varGreatsword19GauntBile = 0
    varGreatsword19RiadanSteel = 0

	//Orkish Greatsword
    varGreatsword20Quantity = document.getElementById("Greatsword20Quantity").value;
    varGreatsword20Price = document.getElementById("Greatsword20Price").value;
    varGreatsword20Success = document.getElementById("Greatsword20Success").value;
    varGreatsword20Gold = 160
    varGreatsword20Iron = 30
    varGreatsword20Wood = 6
    varGreatsword20Leather = 0
    varGreatsword20Selentine = 0
    varGreatsword20Veilron = 0
    varGreatsword20Neithal = 0
    varGreatsword20Leenspar = 0
    varGreatsword20Theyril = 0
    varGreatsword20Tooth = 0
    varGreatsword20Bone = 0
    varGreatsword20GiantBone = 0
    varGreatsword20GauntBile = 0
    varGreatsword20RiadanSteel = 0

	//Alfar Flameberge
    varGreatsword21Quantity = document.getElementById("Greatsword21Quantity").value;
    varGreatsword21Price = document.getElementById("Greatsword21Price").value;
    varGreatsword21Success = document.getElementById("Greatsword21Success").value;
    varGreatsword21Gold = 160
    varGreatsword21Iron = 32
    varGreatsword21Wood = 0
    varGreatsword21Leather = 4
    varGreatsword21Selentine = 0
    varGreatsword21Veilron = 0
    varGreatsword21Neithal = 0
    varGreatsword21Leenspar = 0
    varGreatsword21Theyril = 0
    varGreatsword21Tooth = 0
    varGreatsword21Bone = 0
    varGreatsword21GiantBone = 0
    varGreatsword21GauntBile = 0
    varGreatsword21RiadanSteel = 0

	//Dawnrazor
    varGreatsword22Quantity = document.getElementById("Greatsword22Quantity").value;
    varGreatsword22Price = document.getElementById("Greatsword22Price").value;
    varGreatsword22Success = document.getElementById("Greatsword22Success").value;
    varGreatsword22Gold = 250
    varGreatsword22Iron = 17
    varGreatsword22Wood = 3
    varGreatsword22Leather = 0
    varGreatsword22Selentine = 0
    varGreatsword22Veilron = 1
    varGreatsword22Neithal = 0
    varGreatsword22Leenspar = 0
    varGreatsword22Theyril = 0
    varGreatsword22Tooth = 0
    varGreatsword22Bone = 0
    varGreatsword22GiantBone = 0
    varGreatsword22GauntBile = 0
    varGreatsword22RiadanSteel = 0

	//Knightblade
    varGreatsword23Quantity = document.getElementById("Greatsword23Quantity").value;
    varGreatsword23Price = document.getElementById("Greatsword23Price").value;
    varGreatsword23Success = document.getElementById("Greatsword23Success").value;
    varGreatsword23Gold = 250
    varGreatsword23Iron = 19
    varGreatsword23Wood = 0
    varGreatsword23Leather = 2
    varGreatsword23Selentine = 1
    varGreatsword23Veilron = 0
    varGreatsword23Neithal = 0
    varGreatsword23Leenspar = 0
    varGreatsword23Theyril = 0
    varGreatsword23Tooth = 0
    varGreatsword23Bone = 0
    varGreatsword23GiantBone = 0
    varGreatsword23GauntBile = 0
    varGreatsword23RiadanSteel = 0

	//Justicebringer
    varGreatsword24Quantity = document.getElementById("Greatsword24Quantity").value;
    varGreatsword24Price = document.getElementById("Greatsword24Price").value;
    varGreatsword24Success = document.getElementById("Greatsword24Success").value;
    varGreatsword24Gold = 400
    varGreatsword24Iron = 30
    varGreatsword24Wood = 0
    varGreatsword24Leather = 0
    varGreatsword24Selentine = 0
    varGreatsword24Veilron = 2
    varGreatsword24Neithal = 1
    varGreatsword24Leenspar = 0
    varGreatsword24Theyril = 0
    varGreatsword24Tooth = 0
    varGreatsword24Bone = 0
    varGreatsword24GiantBone = 0
    varGreatsword24GauntBile = 0
    varGreatsword24RiadanSteel = 0

	//Hellraiser
    varGreatsword25Quantity = document.getElementById("Greatsword25Quantity").value;
    varGreatsword25Price = document.getElementById("Greatsword25Price").value;
    varGreatsword25Success = document.getElementById("Greatsword25Success").value;
    varGreatsword25Gold = 7500
    varGreatsword25Iron = 18
    varGreatsword25Wood = 2
    varGreatsword25Leather = 0
    varGreatsword25Selentine = 0
    varGreatsword25Veilron = 9
    varGreatsword25Neithal = 0
    varGreatsword25Leenspar = 0
    varGreatsword25Theyril = 0
    varGreatsword25Tooth = 0
    varGreatsword25Bone = 0
    varGreatsword25GiantBone = 0
    varGreatsword25GauntBile = 3
    varGreatsword25RiadanSteel = 0

	//Lightbringer
    varGreatsword26Quantity = document.getElementById("Greatsword26Quantity").value;
    varGreatsword26Price = document.getElementById("Greatsword26Price").value;
    varGreatsword26Success = document.getElementById("Greatsword26Success").value;
    varGreatsword26Gold = 10000
    varGreatsword26Iron = 18
    varGreatsword26Wood = 2
    varGreatsword26Leather = 0
    varGreatsword26Selentine = 14
    varGreatsword26Veilron = 0
    varGreatsword26Neithal = 0
    varGreatsword26Leenspar = 0
    varGreatsword26Theyril = 0
    varGreatsword26Tooth = 0
    varGreatsword26Bone = 0
    varGreatsword26GiantBone = 0
    varGreatsword26GauntBile = 0
    varGreatsword26RiadanSteel = 3
}

/* KNIFE */

//Used to reload items from Knife
function fnKnifeReload()  // x= id, z= value
{
    fnKnifeInitialize()

    fnKnife()

    fnKnifeTotal()
    fnReloadKnifePrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnKnifeSubPrice(a,b,c,d,e,f,g,h,i,j,k)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varLeenspar = parseInt(h)
    varTheyril = parseInt(i)
    varSuccess = parseInt(j)
    varDeathlessShadowcrest = parseInt(k)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varDeathlessShadowcrest * varDeathlessShadowcrestValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Knife
function fnKnifeTotal()
{
    varKnifeTotal = ((varKnife01Price * varKnife01Quantity) + (varKnife02Price * varKnife02Quantity) + (varKnife03Price * varKnife03Quantity) + (varKnife04Price * varKnife04Quantity) + (varKnife05Price * varKnife05Quantity) + (varKnife06Price * varKnife06Quantity) + (varKnife07Price * varKnife07Quantity) + (varKnife08Price * varKnife08Quantity) + (varKnife09Price * varKnife09Quantity) + (varKnife10Price * varKnife10Quantity) + (varKnife11Price * varKnife11Quantity) + (varKnife12Price * varKnife12Quantity) + (varKnife13Price * varKnife13Quantity) + (varKnife14Price * varKnife14Quantity) + (varKnife15Price * varKnife15Quantity) + (varKnife16Price * varKnife16Quantity) + (varKnife17Price * varKnife17Quantity) + (varKnife18Price * varKnife18Quantity) + (varKnife19Price * varKnife19Quantity) + (varKnife20Price * varKnife20Quantity) + (varKnife21Price * varKnife21Quantity) + (varKnife22Price * varKnife22Quantity) + (varKnife23Price * varKnife23Quantity) + (varKnife24Price * varKnife24Quantity) + (varKnife25Price * varKnife25Quantity) + (varKnife26Price * varKnife26Quantity) + (varKnife27Price * varKnife27Quantity) + (varKnife28Price * varKnife28Quantity) + (varKnife29Price * varKnife29Quantity));
    varKnifeGoldTotal = ((varKnife01Gold * varKnife01Quantity) + (varKnife02Gold * varKnife02Quantity) + (varKnife03Gold * varKnife03Quantity) + (varKnife04Gold * varKnife04Quantity) + (varKnife05Gold * varKnife05Quantity) + (varKnife06Gold * varKnife06Quantity) + (varKnife07Gold * varKnife07Quantity) + (varKnife08Gold * varKnife08Quantity) + (varKnife09Gold * varKnife09Quantity) + (varKnife10Gold * varKnife10Quantity) + (varKnife11Gold * varKnife11Quantity) + (varKnife12Gold * varKnife12Quantity) + (varKnife13Gold * varKnife13Quantity) + (varKnife14Gold * varKnife14Quantity) + (varKnife15Gold * varKnife15Quantity) + (varKnife16Gold * varKnife16Quantity) + (varKnife17Gold * varKnife17Quantity) + (varKnife18Gold * varKnife18Quantity) + (varKnife19Gold * varKnife19Quantity) + (varKnife20Gold * varKnife20Quantity) + (varKnife21Gold * varKnife21Quantity) + (varKnife22Gold * varKnife22Quantity) + (varKnife23Gold * varKnife23Quantity) + (varKnife24Gold * varKnife24Quantity) + (varKnife25Gold * varKnife25Quantity) + (varKnife26Gold * varKnife26Quantity) + (varKnife27Gold * varKnife27Quantity) + (varKnife28Gold * varKnife28Quantity) + (varKnife29Gold * varKnife29Quantity));
    varKnifeIronTotal = ((varKnife01Iron * varKnife01Quantity) + (varKnife02Iron * varKnife02Quantity) + (varKnife03Iron * varKnife03Quantity) + (varKnife04Iron * varKnife04Quantity) + (varKnife05Iron * varKnife05Quantity) + (varKnife06Iron * varKnife06Quantity) + (varKnife07Iron * varKnife07Quantity) + (varKnife08Iron * varKnife08Quantity) + (varKnife09Iron * varKnife09Quantity) + (varKnife10Iron * varKnife10Quantity) + (varKnife11Iron * varKnife11Quantity) + (varKnife12Iron * varKnife12Quantity) + (varKnife13Iron * varKnife13Quantity) + (varKnife14Iron * varKnife14Quantity) + (varKnife15Iron * varKnife15Quantity) + (varKnife16Iron * varKnife16Quantity) + (varKnife17Iron * varKnife17Quantity) + (varKnife18Iron * varKnife18Quantity) + (varKnife19Iron * varKnife19Quantity) + (varKnife20Iron * varKnife20Quantity) + (varKnife21Iron * varKnife21Quantity) + (varKnife22Iron * varKnife22Quantity) + (varKnife23Iron * varKnife23Quantity) + (varKnife24Iron * varKnife24Quantity) + (varKnife25Iron * varKnife25Quantity) + (varKnife26Iron * varKnife26Quantity) + (varKnife27Iron * varKnife27Quantity) + (varKnife28Iron * varKnife28Quantity) + (varKnife29Iron * varKnife29Quantity));
    varKnifeWoodTotal = ((varKnife01Wood * varKnife01Quantity) + (varKnife02Wood * varKnife02Quantity) + (varKnife03Wood * varKnife03Quantity) + (varKnife04Wood * varKnife04Quantity) + (varKnife05Wood * varKnife05Quantity) + (varKnife06Wood * varKnife06Quantity) + (varKnife07Wood * varKnife07Quantity) + (varKnife08Wood * varKnife08Quantity) + (varKnife09Wood * varKnife09Quantity) + (varKnife10Wood * varKnife10Quantity) + (varKnife11Wood * varKnife11Quantity) + (varKnife12Wood * varKnife12Quantity) + (varKnife13Wood * varKnife13Quantity) + (varKnife14Wood * varKnife14Quantity) + (varKnife15Wood * varKnife15Quantity) + (varKnife16Wood * varKnife16Quantity) + (varKnife17Wood * varKnife17Quantity) + (varKnife18Wood * varKnife18Quantity) + (varKnife19Wood * varKnife19Quantity) + (varKnife20Wood * varKnife20Quantity) + (varKnife21Wood * varKnife21Quantity) + (varKnife22Wood * varKnife22Quantity) + (varKnife23Wood * varKnife23Quantity) + (varKnife24Wood * varKnife24Quantity) + (varKnife25Wood * varKnife25Quantity) + (varKnife26Wood * varKnife26Quantity) + (varKnife27Wood * varKnife27Quantity) + (varKnife28Wood * varKnife28Quantity) + (varKnife29Wood * varKnife29Quantity));
    varKnifeLeatherTotal = ((varKnife01Leather * varKnife01Quantity) + (varKnife02Leather * varKnife02Quantity) + (varKnife03Leather * varKnife03Quantity) + (varKnife04Leather * varKnife04Quantity) + (varKnife05Leather * varKnife05Quantity) + (varKnife06Leather * varKnife06Quantity) + (varKnife07Leather * varKnife07Quantity) + (varKnife08Leather * varKnife08Quantity) + (varKnife09Leather * varKnife09Quantity) + (varKnife10Leather * varKnife10Quantity) + (varKnife11Leather * varKnife11Quantity) + (varKnife12Leather * varKnife12Quantity) + (varKnife13Leather * varKnife13Quantity) + (varKnife14Leather * varKnife14Quantity) + (varKnife15Leather * varKnife15Quantity) + (varKnife16Leather * varKnife16Quantity) + (varKnife17Leather * varKnife17Quantity) + (varKnife18Leather * varKnife18Quantity) + (varKnife19Leather * varKnife19Quantity) + (varKnife20Leather * varKnife20Quantity) + (varKnife21Leather * varKnife21Quantity) + (varKnife22Leather * varKnife22Quantity) + (varKnife23Leather * varKnife23Quantity) + (varKnife24Leather * varKnife24Quantity) + (varKnife25Leather * varKnife25Quantity) + (varKnife26Leather * varKnife26Quantity) + (varKnife27Leather * varKnife27Quantity) + (varKnife28Leather * varKnife28Quantity) + (varKnife29Leather * varKnife29Quantity));
    varKnifeSelentineTotal = ((varKnife01Selentine * varKnife01Quantity) + (varKnife02Selentine * varKnife02Quantity) + (varKnife03Selentine * varKnife03Quantity) + (varKnife04Selentine * varKnife04Quantity) + (varKnife05Selentine * varKnife05Quantity) + (varKnife06Selentine * varKnife06Quantity) + (varKnife07Selentine * varKnife07Quantity) + (varKnife08Selentine * varKnife08Quantity) + (varKnife09Selentine * varKnife09Quantity) + (varKnife10Selentine * varKnife10Quantity) + (varKnife11Selentine * varKnife11Quantity) + (varKnife12Selentine * varKnife12Quantity) + (varKnife13Selentine * varKnife13Quantity) + (varKnife14Selentine * varKnife14Quantity) + (varKnife15Selentine * varKnife15Quantity) + (varKnife16Selentine * varKnife16Quantity) + (varKnife17Selentine * varKnife17Quantity) + (varKnife18Selentine * varKnife18Quantity) + (varKnife19Selentine * varKnife19Quantity) + (varKnife20Selentine * varKnife20Quantity) + (varKnife21Selentine * varKnife21Quantity) + (varKnife22Selentine * varKnife22Quantity) + (varKnife23Selentine * varKnife23Quantity) + (varKnife24Selentine * varKnife24Quantity) + (varKnife25Selentine * varKnife25Quantity) + (varKnife26Selentine * varKnife26Quantity) + (varKnife27Selentine * varKnife27Quantity) + (varKnife28Selentine * varKnife28Quantity) + (varKnife29Selentine * varKnife29Quantity));
    varKnifeVeilronTotal = ((varKnife01Veilron * varKnife01Quantity) + (varKnife02Veilron * varKnife02Quantity) + (varKnife03Veilron * varKnife03Quantity) + (varKnife04Veilron * varKnife04Quantity) + (varKnife05Veilron * varKnife05Quantity) + (varKnife06Veilron * varKnife06Quantity) + (varKnife07Veilron * varKnife07Quantity) + (varKnife08Veilron * varKnife08Quantity) + (varKnife09Veilron * varKnife09Quantity) + (varKnife10Veilron * varKnife10Quantity) + (varKnife11Veilron * varKnife11Quantity) + (varKnife12Veilron * varKnife12Quantity) + (varKnife13Veilron * varKnife13Quantity) + (varKnife14Veilron * varKnife14Quantity) + (varKnife15Veilron * varKnife15Quantity) + (varKnife16Veilron * varKnife16Quantity) + (varKnife17Veilron * varKnife17Quantity) + (varKnife18Veilron * varKnife18Quantity) + (varKnife19Veilron * varKnife19Quantity) + (varKnife20Veilron * varKnife20Quantity) + (varKnife21Veilron * varKnife21Quantity) + (varKnife22Veilron * varKnife22Quantity) + (varKnife23Veilron * varKnife23Quantity) + (varKnife24Veilron * varKnife24Quantity) + (varKnife25Veilron * varKnife25Quantity) + (varKnife26Veilron * varKnife26Quantity) + (varKnife27Veilron * varKnife27Quantity) + (varKnife28Veilron * varKnife28Quantity) + (varKnife29Veilron * varKnife29Quantity));
    varKnifeNeithalTotal = ((varKnife01Neithal * varKnife01Quantity) + (varKnife02Neithal * varKnife02Quantity) + (varKnife03Neithal * varKnife03Quantity) + (varKnife04Neithal * varKnife04Quantity) + (varKnife05Neithal * varKnife05Quantity) + (varKnife06Neithal * varKnife06Quantity) + (varKnife07Neithal * varKnife07Quantity) + (varKnife08Neithal * varKnife08Quantity) + (varKnife09Neithal * varKnife09Quantity) + (varKnife10Neithal * varKnife10Quantity) + (varKnife11Neithal * varKnife11Quantity) + (varKnife12Neithal * varKnife12Quantity) + (varKnife13Neithal * varKnife13Quantity) + (varKnife14Neithal * varKnife14Quantity) + (varKnife15Neithal * varKnife15Quantity) + (varKnife16Neithal * varKnife16Quantity) + (varKnife17Neithal * varKnife17Quantity) + (varKnife18Neithal * varKnife18Quantity) + (varKnife19Neithal * varKnife19Quantity) + (varKnife20Neithal * varKnife20Quantity) + (varKnife21Neithal * varKnife21Quantity) + (varKnife22Neithal * varKnife22Quantity) + (varKnife23Neithal * varKnife23Quantity) + (varKnife24Neithal * varKnife24Quantity) + (varKnife25Neithal * varKnife25Quantity) + (varKnife26Neithal * varKnife26Quantity) + (varKnife27Neithal * varKnife27Quantity) + (varKnife28Neithal * varKnife28Quantity) + (varKnife29Neithal * varKnife29Quantity));
    varKnifeLeensparTotal = ((varKnife01Leenspar * varKnife01Quantity) + (varKnife02Leenspar * varKnife02Quantity) + (varKnife03Leenspar * varKnife03Quantity) + (varKnife04Leenspar * varKnife04Quantity) + (varKnife05Leenspar * varKnife05Quantity) + (varKnife06Leenspar * varKnife06Quantity) + (varKnife07Leenspar * varKnife07Quantity) + (varKnife08Leenspar * varKnife08Quantity) + (varKnife09Leenspar * varKnife09Quantity) + (varKnife10Leenspar * varKnife10Quantity) + (varKnife11Leenspar * varKnife11Quantity) + (varKnife12Leenspar * varKnife12Quantity) + (varKnife13Leenspar * varKnife13Quantity) + (varKnife14Leenspar * varKnife14Quantity) + (varKnife15Leenspar * varKnife15Quantity) + (varKnife16Leenspar * varKnife16Quantity) + (varKnife17Leenspar * varKnife17Quantity) + (varKnife18Leenspar * varKnife18Quantity) + (varKnife19Leenspar * varKnife19Quantity) + (varKnife20Leenspar * varKnife20Quantity) + (varKnife21Leenspar * varKnife21Quantity) + (varKnife22Leenspar * varKnife22Quantity) + (varKnife23Leenspar * varKnife23Quantity) + (varKnife24Leenspar * varKnife24Quantity) + (varKnife25Leenspar * varKnife25Quantity) + (varKnife26Leenspar * varKnife26Quantity) + (varKnife27Leenspar * varKnife27Quantity) + (varKnife28Leenspar * varKnife28Quantity) + (varKnife29Leenspar * varKnife29Quantity));
    varKnifeTheyrilTotal = ((varKnife01Theyril * varKnife01Quantity) + (varKnife02Theyril * varKnife02Quantity) + (varKnife03Theyril * varKnife03Quantity) + (varKnife04Theyril * varKnife04Quantity) + (varKnife05Theyril * varKnife05Quantity) + (varKnife06Theyril * varKnife06Quantity) + (varKnife07Theyril * varKnife07Quantity) + (varKnife08Theyril * varKnife08Quantity) + (varKnife09Theyril * varKnife09Quantity) + (varKnife10Theyril * varKnife10Quantity) + (varKnife11Theyril * varKnife11Quantity) + (varKnife12Theyril * varKnife12Quantity) + (varKnife13Theyril * varKnife13Quantity) + (varKnife14Theyril * varKnife14Quantity) + (varKnife15Theyril * varKnife15Quantity) + (varKnife16Theyril * varKnife16Quantity) + (varKnife17Theyril * varKnife17Quantity) + (varKnife18Theyril * varKnife18Quantity) + (varKnife19Theyril * varKnife19Quantity) + (varKnife20Theyril * varKnife20Quantity) + (varKnife21Theyril * varKnife21Quantity) + (varKnife22Theyril * varKnife22Quantity) + (varKnife23Theyril * varKnife23Quantity) + (varKnife24Theyril * varKnife24Quantity) + (varKnife25Theyril * varKnife25Quantity) + (varKnife26Theyril * varKnife26Quantity) + (varKnife27Theyril * varKnife27Quantity) + (varKnife28Theyril * varKnife28Quantity) + (varKnife29Theyril * varKnife29Quantity));
    varKnifeDeathlessShadowcrestTotal = ((varKnife01DeathlessShadowcrest * varKnife01Quantity) + (varKnife02DeathlessShadowcrest * varKnife02Quantity) + (varKnife03DeathlessShadowcrest * varKnife03Quantity) + (varKnife04DeathlessShadowcrest * varKnife04Quantity) + (varKnife05DeathlessShadowcrest * varKnife05Quantity) + (varKnife06DeathlessShadowcrest * varKnife06Quantity) + (varKnife07DeathlessShadowcrest * varKnife07Quantity) + (varKnife08DeathlessShadowcrest * varKnife08Quantity) + (varKnife09DeathlessShadowcrest * varKnife09Quantity) + (varKnife10DeathlessShadowcrest * varKnife10Quantity) + (varKnife11DeathlessShadowcrest * varKnife11Quantity) + (varKnife12DeathlessShadowcrest * varKnife12Quantity) + (varKnife13DeathlessShadowcrest * varKnife13Quantity) + (varKnife14DeathlessShadowcrest * varKnife14Quantity) + (varKnife15DeathlessShadowcrest * varKnife15Quantity) + (varKnife16DeathlessShadowcrest * varKnife16Quantity) + (varKnife17DeathlessShadowcrest * varKnife17Quantity) + (varKnife18DeathlessShadowcrest * varKnife18Quantity) + (varKnife19DeathlessShadowcrest * varKnife19Quantity) + (varKnife20DeathlessShadowcrest * varKnife20Quantity) + (varKnife21DeathlessShadowcrest * varKnife21Quantity) + (varKnife22DeathlessShadowcrest * varKnife22Quantity) + (varKnife23DeathlessShadowcrest * varKnife23Quantity) + (varKnife24DeathlessShadowcrest * varKnife24Quantity) + (varKnife25DeathlessShadowcrest * varKnife25Quantity) + (varKnife26DeathlessShadowcrest * varKnife26Quantity) + (varKnife27DeathlessShadowcrest * varKnife27Quantity) + (varKnife28DeathlessShadowcrest * varKnife28Quantity) + (varKnife29DeathlessShadowcrest * varKnife29Quantity));
}

//Knife Calculations
function fnKnife()
{
    fnKnifeSubPrice(varKnife01Gold,varKnife01Iron,varKnife01Wood,varKnife01Leather,varKnife01Selentine,varKnife01Veilron,varKnife01Neithal,varKnife01Leenspar,varKnife01Theyril,varKnife01Success,varKnife01DeathlessShadowcrest)
    varKnife01Price = varItemPrice;
    fnKnifeSubPrice(varKnife02Gold,varKnife02Iron,varKnife02Wood,varKnife02Leather,varKnife02Selentine,varKnife02Veilron,varKnife02Neithal,varKnife02Leenspar,varKnife02Theyril,varKnife02Success,varKnife02DeathlessShadowcrest)
    varKnife02Price = varItemPrice;
    fnKnifeSubPrice(varKnife03Gold,varKnife03Iron,varKnife03Wood,varKnife03Leather,varKnife03Selentine,varKnife03Veilron,varKnife03Neithal,varKnife03Leenspar,varKnife03Theyril,varKnife03Success,varKnife03DeathlessShadowcrest)
    varKnife03Price = varItemPrice;
    fnKnifeSubPrice(varKnife04Gold,varKnife04Iron,varKnife04Wood,varKnife04Leather,varKnife04Selentine,varKnife04Veilron,varKnife04Neithal,varKnife04Leenspar,varKnife04Theyril,varKnife04Success,varKnife04DeathlessShadowcrest)
    varKnife04Price = varItemPrice;
    fnKnifeSubPrice(varKnife05Gold,varKnife05Iron,varKnife05Wood,varKnife05Leather,varKnife05Selentine,varKnife05Veilron,varKnife05Neithal,varKnife05Leenspar,varKnife05Theyril,varKnife05Success,varKnife05DeathlessShadowcrest)
    varKnife05Price = varItemPrice;
    fnKnifeSubPrice(varKnife06Gold,varKnife06Iron,varKnife06Wood,varKnife06Leather,varKnife06Selentine,varKnife06Veilron,varKnife06Neithal,varKnife06Leenspar,varKnife06Theyril,varKnife06Success,varKnife06DeathlessShadowcrest)
    varKnife06Price = varItemPrice;
    fnKnifeSubPrice(varKnife07Gold,varKnife07Iron,varKnife07Wood,varKnife07Leather,varKnife07Selentine,varKnife07Veilron,varKnife07Neithal,varKnife07Leenspar,varKnife07Theyril,varKnife07Success,varKnife07DeathlessShadowcrest)
    varKnife07Price = varItemPrice;
    fnKnifeSubPrice(varKnife08Gold,varKnife08Iron,varKnife08Wood,varKnife08Leather,varKnife08Selentine,varKnife08Veilron,varKnife08Neithal,varKnife08Leenspar,varKnife08Theyril,varKnife08Success,varKnife08DeathlessShadowcrest)
    varKnife08Price = varItemPrice;
    fnKnifeSubPrice(varKnife09Gold,varKnife09Iron,varKnife09Wood,varKnife09Leather,varKnife09Selentine,varKnife09Veilron,varKnife09Neithal,varKnife09Leenspar,varKnife09Theyril,varKnife09Success,varKnife09DeathlessShadowcrest)
    varKnife09Price = varItemPrice;
    fnKnifeSubPrice(varKnife10Gold,varKnife10Iron,varKnife10Wood,varKnife10Leather,varKnife10Selentine,varKnife10Veilron,varKnife10Neithal,varKnife10Leenspar,varKnife10Theyril,varKnife10Success,varKnife10DeathlessShadowcrest)
    varKnife10Price = varItemPrice;
    fnKnifeSubPrice(varKnife11Gold,varKnife11Iron,varKnife11Wood,varKnife11Leather,varKnife11Selentine,varKnife11Veilron,varKnife11Neithal,varKnife11Leenspar,varKnife11Theyril,varKnife11Success,varKnife11DeathlessShadowcrest)
    varKnife11Price = varItemPrice;
    fnKnifeSubPrice(varKnife12Gold,varKnife12Iron,varKnife12Wood,varKnife12Leather,varKnife12Selentine,varKnife12Veilron,varKnife12Neithal,varKnife12Leenspar,varKnife12Theyril,varKnife12Success,varKnife12DeathlessShadowcrest)
    varKnife12Price = varItemPrice;
    fnKnifeSubPrice(varKnife13Gold,varKnife13Iron,varKnife13Wood,varKnife13Leather,varKnife13Selentine,varKnife13Veilron,varKnife13Neithal,varKnife13Leenspar,varKnife13Theyril,varKnife13Success,varKnife13DeathlessShadowcrest)
    varKnife13Price = varItemPrice;
    fnKnifeSubPrice(varKnife14Gold,varKnife14Iron,varKnife14Wood,varKnife14Leather,varKnife14Selentine,varKnife14Veilron,varKnife14Neithal,varKnife14Leenspar,varKnife14Theyril,varKnife14Success,varKnife14DeathlessShadowcrest)
    varKnife14Price = varItemPrice;
    fnKnifeSubPrice(varKnife15Gold,varKnife15Iron,varKnife15Wood,varKnife15Leather,varKnife15Selentine,varKnife15Veilron,varKnife15Neithal,varKnife15Leenspar,varKnife15Theyril,varKnife15Success,varKnife15DeathlessShadowcrest)
    varKnife15Price = varItemPrice;
    fnKnifeSubPrice(varKnife16Gold,varKnife16Iron,varKnife16Wood,varKnife16Leather,varKnife16Selentine,varKnife16Veilron,varKnife16Neithal,varKnife16Leenspar,varKnife16Theyril,varKnife16Success,varKnife16DeathlessShadowcrest)
    varKnife16Price = varItemPrice;
    fnKnifeSubPrice(varKnife17Gold,varKnife17Iron,varKnife17Wood,varKnife17Leather,varKnife17Selentine,varKnife17Veilron,varKnife17Neithal,varKnife17Leenspar,varKnife17Theyril,varKnife17Success,varKnife17DeathlessShadowcrest)
    varKnife17Price = varItemPrice;
    fnKnifeSubPrice(varKnife18Gold,varKnife18Iron,varKnife18Wood,varKnife18Leather,varKnife18Selentine,varKnife18Veilron,varKnife18Neithal,varKnife18Leenspar,varKnife18Theyril,varKnife18Success,varKnife18DeathlessShadowcrest)
    varKnife18Price = varItemPrice;
    fnKnifeSubPrice(varKnife19Gold,varKnife19Iron,varKnife19Wood,varKnife19Leather,varKnife19Selentine,varKnife19Veilron,varKnife19Neithal,varKnife19Leenspar,varKnife19Theyril,varKnife19Success,varKnife19DeathlessShadowcrest)
    varKnife19Price = varItemPrice;
    fnKnifeSubPrice(varKnife20Gold,varKnife20Iron,varKnife20Wood,varKnife20Leather,varKnife20Selentine,varKnife20Veilron,varKnife20Neithal,varKnife20Leenspar,varKnife20Theyril,varKnife20Success,varKnife20DeathlessShadowcrest)
    varKnife20Price = varItemPrice;
    fnKnifeSubPrice(varKnife21Gold,varKnife21Iron,varKnife21Wood,varKnife21Leather,varKnife21Selentine,varKnife21Veilron,varKnife21Neithal,varKnife21Leenspar,varKnife21Theyril,varKnife21Success,varKnife21DeathlessShadowcrest)
    varKnife21Price = varItemPrice;
    fnKnifeSubPrice(varKnife22Gold,varKnife22Iron,varKnife22Wood,varKnife22Leather,varKnife22Selentine,varKnife22Veilron,varKnife22Neithal,varKnife22Leenspar,varKnife22Theyril,varKnife22Success,varKnife22DeathlessShadowcrest)
    varKnife22Price = varItemPrice;
    fnKnifeSubPrice(varKnife23Gold,varKnife23Iron,varKnife23Wood,varKnife23Leather,varKnife23Selentine,varKnife23Veilron,varKnife23Neithal,varKnife23Leenspar,varKnife23Theyril,varKnife23Success,varKnife23DeathlessShadowcrest)
    varKnife23Price = varItemPrice;
    fnKnifeSubPrice(varKnife24Gold,varKnife24Iron,varKnife24Wood,varKnife24Leather,varKnife24Selentine,varKnife24Veilron,varKnife24Neithal,varKnife24Leenspar,varKnife24Theyril,varKnife24Success,varKnife24DeathlessShadowcrest)
    varKnife24Price = varItemPrice;
    fnKnifeSubPrice(varKnife25Gold,varKnife25Iron,varKnife25Wood,varKnife25Leather,varKnife25Selentine,varKnife25Veilron,varKnife25Neithal,varKnife25Leenspar,varKnife25Theyril,varKnife25Success,varKnife25DeathlessShadowcrest)
    varKnife25Price = varItemPrice;
    fnKnifeSubPrice(varKnife26Gold,varKnife26Iron,varKnife26Wood,varKnife26Leather,varKnife26Selentine,varKnife26Veilron,varKnife26Neithal,varKnife26Leenspar,varKnife26Theyril,varKnife26Success,varKnife26DeathlessShadowcrest)
    varKnife26Price = varItemPrice;
    fnKnifeSubPrice(varKnife27Gold,varKnife27Iron,varKnife27Wood,varKnife27Leather,varKnife27Selentine,varKnife27Veilron,varKnife27Neithal,varKnife27Leenspar,varKnife27Theyril,varKnife27Success,varKnife27DeathlessShadowcrest)
    varKnife27Price = varItemPrice;
    fnKnifeSubPrice(varKnife28Gold,varKnife28Iron,varKnife28Wood,varKnife28Leather,varKnife28Selentine,varKnife28Veilron,varKnife28Neithal,varKnife28Leenspar,varKnife28Theyril,varKnife28Success,varKnife28DeathlessShadowcrest)
    varKnife28Price = varItemPrice;
    fnKnifeSubPrice(varKnife29Gold,varKnife29Iron,varKnife29Wood,varKnife29Leather,varKnife29Selentine,varKnife29Veilron,varKnife29Neithal,varKnife29Leenspar,varKnife29Theyril,varKnife29Success,varKnife29DeathlessShadowcrest)
    varKnife29Price = varItemPrice;
}

function fnReloadKnifePrices()
{
    //Knife Prices
    document.getElementById('Knife01Price').value = varKnife01Price;
    document.getElementById('Knife02Price').value = varKnife02Price;
    document.getElementById('Knife03Price').value = varKnife03Price;
    document.getElementById('Knife04Price').value = varKnife04Price;
    document.getElementById('Knife05Price').value = varKnife05Price;
    document.getElementById('Knife06Price').value = varKnife06Price;
    document.getElementById('Knife07Price').value = varKnife07Price;
    document.getElementById('Knife08Price').value = varKnife08Price;
    document.getElementById('Knife09Price').value = varKnife09Price;
    document.getElementById('Knife10Price').value = varKnife10Price;
    document.getElementById('Knife11Price').value = varKnife11Price;
    document.getElementById('Knife12Price').value = varKnife12Price;
    document.getElementById('Knife13Price').value = varKnife13Price;
    document.getElementById('Knife14Price').value = varKnife14Price;
    document.getElementById('Knife15Price').value = varKnife15Price;
    document.getElementById('Knife16Price').value = varKnife16Price;
    document.getElementById('Knife17Price').value = varKnife17Price;
    document.getElementById('Knife18Price').value = varKnife18Price;
    document.getElementById('Knife19Price').value = varKnife19Price;
    document.getElementById('Knife20Price').value = varKnife20Price;
    document.getElementById('Knife21Price').value = varKnife21Price;
    document.getElementById('Knife22Price').value = varKnife22Price;
    document.getElementById('Knife23Price').value = varKnife23Price;
    document.getElementById('Knife24Price').value = varKnife24Price;
    document.getElementById('Knife25Price').value = varKnife25Price;
    document.getElementById('Knife26Price').value = varKnife26Price;
    document.getElementById('Knife27Price').value = varKnife27Price;
    document.getElementById('Knife28Price').value = varKnife28Price;
    document.getElementById('Knife29Price').value = varKnife29Price;

    //Knife Total Prices
    document.getElementById('KnifeTotal').value = varKnifeTotal;
    document.getElementById('KnifeGoldTotal').value = varKnifeGoldTotal;
    document.getElementById('KnifeIronTotal').value = varKnifeIronTotal;
    document.getElementById('KnifeWoodTotal').value = varKnifeWoodTotal;
    document.getElementById('KnifeLeatherTotal').value = varKnifeLeatherTotal;
    document.getElementById('KnifeSelentineTotal').value = varKnifeSelentineTotal;
    document.getElementById('KnifeVeilronTotal').value = varKnifeVeilronTotal;
    document.getElementById('KnifeNeithalTotal').value = varKnifeNeithalTotal;
    document.getElementById('KnifeLeensparTotal').value = varKnifeLeensparTotal;
    document.getElementById('KnifeTheyrilTotal').value = varKnifeTheyrilTotal;
    document.getElementById('KnifeDeathlessShadowcrestTotal').value = varKnifeDeathlessShadowcrestTotal;
}

function fnKnifeInitialize()
{
    varKnifeTotal = document.getElementById("KnifeTotal").value;
    varKnifeGoldTotal = document.getElementById("KnifeGoldTotal").value;
    varKnifeIronTotal = document.getElementById("KnifeIronTotal").value;
    varKnifeWoodTotal = document.getElementById("KnifeWoodTotal").value;
    varKnifeLeatherTotal = document.getElementById("KnifeLeatherTotal").value;
    varKnifeSelentineTotal = document.getElementById("KnifeSelentineTotal").value;
    varKnifeVeilronTotal = document.getElementById("KnifeVeilronTotal").value;
    varKnifeNeithalTotal = document.getElementById("KnifeNeithalTotal").value;
    varKnifeLeensparTotal = document.getElementById("KnifeLeensparTotal").value;
    varKnifeTheyrilTotal = document.getElementById("KnifeTheyrilTotal").value;
    varKnifeDeathlessShadowcrestTotal = document.getElementById("KnifeDeathlessShadowcrestTotal").value;

    // *** Knife VARIABLES ***
	//Mercian Twin Knives
    varKnife01Quantity = document.getElementById("Knife01Quantity").value;
    varKnife01Price = document.getElementById("Knife01Price").value;
    varKnife01Success = document.getElementById("Knife01Success").value;
    varKnife01Gold = 0
    varKnife01Iron = 3
    varKnife01Wood = 1
    varKnife01Leather = 2
    varKnife01Selentine = 0
    varKnife01Veilron = 0
    varKnife01Neithal = 0
    varKnife01Leenspar = 0
    varKnife01Theyril = 0
    varKnife01DeathlessShadowcrest = 0

	//Mirdain Twin Daggers
    varKnife02Quantity = document.getElementById("Knife02Quantity").value;
    varKnife02Price = document.getElementById("Knife02Price").value;
    varKnife02Success = document.getElementById("Knife02Success").value;
    varKnife02Gold = 0
    varKnife02Iron = 4
    varKnife02Wood = 1
    varKnife02Leather = 0
    varKnife02Selentine = 0
    varKnife02Veilron = 0
    varKnife02Neithal = 0
    varKnife02Leenspar = 0
    varKnife02Theyril = 0
    varKnife02DeathlessShadowcrest = 0

	//Dwarven Gladii
    varKnife03Quantity = document.getElementById("Knife03Quantity").value;
    varKnife03Price = document.getElementById("Knife03Price").value;
    varKnife03Success = document.getElementById("Knife03Success").value;
    varKnife03Gold = 0
    varKnife03Iron = 4
    varKnife03Wood = 1
    varKnife03Leather = 0
    varKnife03Selentine = 0
    varKnife03Veilron = 0
    varKnife03Neithal = 0
    varKnife03Leenspar = 0
    varKnife03Theyril = 0
    varKnife03DeathlessShadowcrest = 0

	//Mahirim Carvers
    varKnife04Quantity = document.getElementById("Knife04Quantity").value;
    varKnife04Price = document.getElementById("Knife04Price").value;
    varKnife04Success = document.getElementById("Knife04Success").value;
    varKnife04Gold = 0
    varKnife04Iron = 3
    varKnife04Wood = 1
    varKnife04Leather = 2
    varKnife04Selentine = 0
    varKnife04Veilron = 0
    varKnife04Neithal = 0
    varKnife04Leenspar = 0
    varKnife04Theyril = 0
    varKnife04DeathlessShadowcrest = 0

	//Orkish Stabber Combo
    varKnife05Quantity = document.getElementById("Knife05Quantity").value;
    varKnife05Price = document.getElementById("Knife05Price").value;
    varKnife05Success = document.getElementById("Knife05Success").value;
    varKnife05Gold = 0
    varKnife05Iron = 4
    varKnife05Wood = 1
    varKnife05Leather = 0
    varKnife05Selentine = 0
    varKnife05Veilron = 0
    varKnife05Neithal = 0
    varKnife05Leenspar = 0
    varKnife05Theyril = 0
    varKnife05DeathlessShadowcrest = 0

	//Twin Daggers
    varKnife06Quantity = document.getElementById("Knife06Quantity").value;
    varKnife06Price = document.getElementById("Knife06Price").value;
    varKnife06Success = document.getElementById("Knife06Success").value;
    varKnife06Gold = 15
    varKnife06Iron = 4
    varKnife06Wood = 2
    varKnife06Leather = 2
    varKnife06Selentine = 0
    varKnife06Veilron = 0
    varKnife06Neithal = 0
    varKnife06Leenspar = 0
    varKnife06Theyril = 0
    varKnife06DeathlessShadowcrest = 0

	//Wormtusks
    varKnife07Quantity = document.getElementById("Knife07Quantity").value;
    varKnife07Price = document.getElementById("Knife07Price").value;
    varKnife07Success = document.getElementById("Knife07Success").value;
    varKnife07Gold = 15
    varKnife07Iron = 4
    varKnife07Wood = 2
    varKnife07Leather = 2
    varKnife07Selentine = 0
    varKnife07Veilron = 0
    varKnife07Neithal = 0
    varKnife07Leenspar = 0
    varKnife07Theyril = 0
    varKnife07DeathlessShadowcrest = 0

	//Revenant Dagger
    varKnife08Quantity = document.getElementById("Knife08Quantity").value;
    varKnife08Price = document.getElementById("Knife08Price").value;
    varKnife08Success = document.getElementById("Knife08Success").value;
    varKnife08Gold = 20
    varKnife08Iron = 6
    varKnife08Wood = 4
    varKnife08Leather = 0
    varKnife08Selentine = 0
    varKnife08Veilron = 0
    varKnife08Neithal = 0
    varKnife08Leenspar = 0
    varKnife08Theyril = 0
    varKnife08DeathlessShadowcrest = 0

	//Mercian Blades
    varKnife09Quantity = document.getElementById("Knife09Quantity").value;
    varKnife09Price = document.getElementById("Knife09Price").value;
    varKnife09Success = document.getElementById("Knife09Success").value;
    varKnife09Gold = 20
    varKnife09Iron = 8
    varKnife09Wood = 2
    varKnife09Leather = 0
    varKnife09Selentine = 0
    varKnife09Veilron = 0
    varKnife09Neithal = 0
    varKnife09Leenspar = 0
    varKnife09Theyril = 0
    varKnife09DeathlessShadowcrest = 0

	//Mirdain Twin Stillettos
    varKnife10Quantity = document.getElementById("Knife10Quantity").value;
    varKnife10Price = document.getElementById("Knife10Price").value;
    varKnife10Success = document.getElementById("Knife10Success").value;
    varKnife10Gold = 20
    varKnife10Iron = 7
    varKnife10Wood = 3
    varKnife10Leather = 0
    varKnife10Selentine = 0
    varKnife10Veilron = 0
    varKnife10Neithal = 0
    varKnife10Leenspar = 0
    varKnife10Theyril = 0
    varKnife10DeathlessShadowcrest = 0

	//Dwarven Hunting Knives
    varKnife11Quantity = document.getElementById("Knife11Quantity").value;
    varKnife11Price = document.getElementById("Knife11Price").value;
    varKnife11Success = document.getElementById("Knife11Success").value;
    varKnife11Gold = 20
    varKnife11Iron = 8
    varKnife11Wood = 2
    varKnife11Leather = 0
    varKnife11Selentine = 0
    varKnife11Veilron = 0
    varKnife11Neithal = 0
    varKnife11Leenspar = 0
    varKnife11Theyril = 0
    varKnife11DeathlessShadowcrest = 0

	//Mahirim Knives
    varKnife12Quantity = document.getElementById("Knife12Quantity").value;
    varKnife12Price = document.getElementById("Knife12Price").value;
    varKnife12Success = document.getElementById("Knife12Success").value;
    varKnife12Gold = 20
    varKnife12Iron = 6
    varKnife12Wood = 3
    varKnife12Leather = 2
    varKnife12Selentine = 0
    varKnife12Veilron = 0
    varKnife12Neithal = 0
    varKnife12Leenspar = 0
    varKnife12Theyril = 0
    varKnife12DeathlessShadowcrest = 0

	//Orkish Twin Blades
    varKnife13Quantity = document.getElementById("Knife13Quantity").value;
    varKnife13Price = document.getElementById("Knife13Price").value;
    varKnife13Success = document.getElementById("Knife13Success").value;
    varKnife13Gold = 20
    varKnife13Iron = 8
    varKnife13Wood = 2
    varKnife13Leather = 0
    varKnife13Selentine = 0
    varKnife13Veilron = 0
    varKnife13Neithal = 0
    varKnife13Leenspar = 0
    varKnife13Theyril = 0
    varKnife13DeathlessShadowcrest = 0

	//Alfar Curved Daggers
    varKnife14Quantity = document.getElementById("Knife14Quantity").value;
    varKnife14Price = document.getElementById("Knife14Price").value;
    varKnife14Success = document.getElementById("Knife14Success").value;
    varKnife14Gold = 20
    varKnife14Iron = 8
    varKnife14Wood = 2
    varKnife14Leather = 0
    varKnife14Selentine = 0
    varKnife14Veilron = 0
    varKnife14Neithal = 0
    varKnife14Leenspar = 0
    varKnife14Theyril = 0
    varKnife14DeathlessShadowcrest = 0

	//Stake Daggers
    varKnife15Quantity = document.getElementById("Knife15Quantity").value;
    varKnife15Price = document.getElementById("Knife15Price").value;
    varKnife15Success = document.getElementById("Knife15Success").value;
    varKnife15Gold = 35
    varKnife15Iron = 11
    varKnife15Wood = 5
    varKnife15Leather = 0
    varKnife15Selentine = 0
    varKnife15Veilron = 0
    varKnife15Neithal = 0
    varKnife15Leenspar = 0
    varKnife15Theyril = 0
    varKnife15DeathlessShadowcrest = 0

	//Mercian Twin Daggers
    varKnife16Quantity = document.getElementById("Knife16Quantity").value;
    varKnife16Price = document.getElementById("Knife16Price").value;
    varKnife16Success = document.getElementById("Knife16Success").value;
    varKnife16Gold = 80
    varKnife16Iron = 16
    varKnife16Wood = 8
    varKnife16Leather = 0
    varKnife16Selentine = 0
    varKnife16Veilron = 0
    varKnife16Neithal = 0
    varKnife16Leenspar = 0
    varKnife16Theyril = 0
    varKnife16DeathlessShadowcrest = 0

	//Mirdain Knives
    varKnife17Quantity = document.getElementById("Knife17Quantity").value;
    varKnife17Price = document.getElementById("Knife17Price").value;
    varKnife17Success = document.getElementById("Knife17Success").value;
    varKnife17Gold = 80
    varKnife17Iron = 14
    varKnife17Wood = 10
    varKnife17Leather = 0
    varKnife17Selentine = 0
    varKnife17Veilron = 0
    varKnife17Neithal = 0
    varKnife17Leenspar = 0
    varKnife17Theyril = 0
    varKnife17DeathlessShadowcrest = 0

	//Simple Dwarven Daggers
    varKnife18Quantity = document.getElementById("Knife18Quantity").value;
    varKnife18Price = document.getElementById("Knife18Price").value;
    varKnife18Success = document.getElementById("Knife18Success").value;
    varKnife18Gold = 80
    varKnife18Iron = 16
    varKnife18Wood = 8
    varKnife18Leather = 0
    varKnife18Selentine = 0
    varKnife18Veilron = 0
    varKnife18Neithal = 0
    varKnife18Leenspar = 0
    varKnife18Theyril = 0
    varKnife18DeathlessShadowcrest = 0

	//Mahirim Double Daggers
    varKnife19Quantity = document.getElementById("Knife19Quantity").value;
    varKnife19Price = document.getElementById("Knife19Price").value;
    varKnife19Success = document.getElementById("Knife19Success").value;
    varKnife19Gold = 80
    varKnife19Iron = 14
    varKnife19Wood = 6
    varKnife19Leather = 4
    varKnife19Selentine = 0
    varKnife19Veilron = 0
    varKnife19Neithal = 0
    varKnife19Leenspar = 0
    varKnife19Theyril = 0
    varKnife19DeathlessShadowcrest = 0

	//Orkish Dirks
    varKnife20Quantity = document.getElementById("Knife20Quantity").value;
    varKnife20Price = document.getElementById("Knife20Price").value;
    varKnife20Success = document.getElementById("Knife20Success").value;
    varKnife20Gold = 80
    varKnife20Iron = 16
    varKnife20Wood = 8
    varKnife20Leather = 0
    varKnife20Selentine = 0
    varKnife20Veilron = 0
    varKnife20Neithal = 0
    varKnife20Leenspar = 0
    varKnife20Theyril = 0
    varKnife20DeathlessShadowcrest = 0

	//Alfar Krises
    varKnife21Quantity = document.getElementById("Knife21Quantity").value;
    varKnife21Price = document.getElementById("Knife21Price").value;
    varKnife21Success = document.getElementById("Knife21Success").value;
    varKnife21Gold = 80
    varKnife21Iron = 16
    varKnife21Wood = 8
    varKnife21Leather = 0
    varKnife21Selentine = 0
    varKnife21Veilron = 0
    varKnife21Neithal = 0
    varKnife21Leenspar = 0
    varKnife21Theyril = 0
    varKnife21DeathlessShadowcrest = 0

	//Hookblades
    varKnife22Quantity = document.getElementById("Knife22Quantity").value;
    varKnife22Price = document.getElementById("Knife22Price").value;
    varKnife22Success = document.getElementById("Knife22Success").value;
    varKnife22Gold = 175
    varKnife22Iron = 10
    varKnife22Wood = 5
    varKnife22Leather = 0
    varKnife22Selentine = 1
    varKnife22Veilron = 0
    varKnife22Neithal = 0
    varKnife22Leenspar = 0
    varKnife22Theyril = 0
    varKnife22DeathlessShadowcrest = 0

	//Mercian Twin Dirks
    varKnife23Quantity = document.getElementById("Knife23Quantity").value;
    varKnife23Price = document.getElementById("Knife23Price").value;
    varKnife23Success = document.getElementById("Knife23Success").value;
    varKnife23Gold = 300
    varKnife23Iron = 16
    varKnife23Wood = 6
    varKnife23Leather = 0
    varKnife23Selentine = 2
    varKnife23Veilron = 0
    varKnife23Neithal = 0
    varKnife23Leenspar = 0
    varKnife23Theyril = 0
    varKnife23DeathlessShadowcrest = 0

	//Mirdain Halfblades
    varKnife24Quantity = document.getElementById("Knife24Quantity").value;
    varKnife24Price = document.getElementById("Knife24Price").value;
    varKnife24Success = document.getElementById("Knife24Success").value;
    varKnife24Gold = 300
    varKnife24Iron = 16
    varKnife24Wood = 7
    varKnife24Leather = 0
    varKnife24Selentine = 0
    varKnife24Veilron = 0
    varKnife24Neithal = 0
    varKnife24Leenspar = 2
    varKnife24Theyril = 0
    varKnife24DeathlessShadowcrest = 0

	//Dwarven Double-dirks
    varKnife25Quantity = document.getElementById("Knife25Quantity").value;
    varKnife25Price = document.getElementById("Knife25Price").value;
    varKnife25Success = document.getElementById("Knife25Success").value;
    varKnife25Gold = 300
    varKnife25Iron = 17
    varKnife25Wood = 5
    varKnife25Leather = 0
    varKnife25Selentine = 0
    varKnife25Veilron = 2
    varKnife25Neithal = 0
    varKnife25Leenspar = 0
    varKnife25Theyril = 0
    varKnife25DeathlessShadowcrest = 0

	//Mahirim Hunting Daggers
    varKnife26Quantity = document.getElementById("Knife26Quantity").value;
    varKnife26Price = document.getElementById("Knife26Price").value;
    varKnife26Success = document.getElementById("Knife26Success").value;
    varKnife26Gold = 300
    varKnife26Iron = 15
    varKnife26Wood = 7
    varKnife26Leather = 0
    varKnife26Selentine = 0
    varKnife26Veilron = 2
    varKnife26Neithal = 0
    varKnife26Leenspar = 0
    varKnife26Theyril = 0
    varKnife26DeathlessShadowcrest = 0

	//Orkish Toothpicks
    varKnife27Quantity = document.getElementById("Knife27Quantity").value;
    varKnife27Price = document.getElementById("Knife27Price").value;
    varKnife27Success = document.getElementById("Knife27Success").value;
    varKnife27Gold = 300
    varKnife27Iron = 16
    varKnife27Wood = 6
    varKnife27Leather = 0
    varKnife27Selentine = 0
    varKnife27Veilron = 0
    varKnife27Neithal = 2
    varKnife27Leenspar = 0
    varKnife27Theyril = 0
    varKnife27DeathlessShadowcrest = 0

	//Alfar Widowmakers
    varKnife28Quantity = document.getElementById("Knife28Quantity").value;
    varKnife28Price = document.getElementById("Knife28Price").value;
    varKnife28Success = document.getElementById("Knife28Success").value;
    varKnife28Gold = 300
    varKnife28Iron = 16
    varKnife28Wood = 6
    varKnife28Leather = 0
    varKnife28Selentine = 0
    varKnife28Veilron = 0
    varKnife28Neithal = 2
    varKnife28Leenspar = 0
    varKnife28Theyril = 0
    varKnife28DeathlessShadowcrest = 0

    //Shadowstealers
    varKnife29Quantity = document.getElementById("Knife29Quantity").value;
    varKnife29Price = document.getElementById("Knife29Price").value;
    varKnife29Success = document.getElementById("Knife29Success").value;
    varKnife29Gold = 4200
    varKnife29Iron = 13
    varKnife29Wood = 0
    varKnife29Leather = 0
    varKnife29Selentine = 0
    varKnife29Veilron = 0
    varKnife29Neithal = 2
    varKnife29Leenspar = 0
    varKnife29Theyril = 4
    varKnife29DeathlessShadowcrest = 3
}

/* POLEARM */

//Used to reload items from Polearm
function fnPolearmReload()  // x= id, z= value
{
    fnPolearmInitialize()

    fnPolearm()

    fnPolearmTotal()
    fnReloadPolearmPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnPolearmSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m,n)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varLeenspar = parseInt(h)
    varTheyril = parseInt(i)
    varSuccess = parseInt(j)
    varStone = parseInt(k)
    varMenhirHeart = parseInt(l)
    varEmetLifeforce = parseInt(m)
    varDarkshard = parseInt(n)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varStone * varStoneValue) + (varMenhirHeart * varMenhirHeartValue) + (varEmetLifeforce * varEmetLifeforceValue) + (varDarkshard * varDarkshardValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Polearm
function fnPolearmTotal()
{
    varPolearmTotal = ((varPolearm01Price * varPolearm01Quantity) + (varPolearm02Price * varPolearm02Quantity) + (varPolearm03Price * varPolearm03Quantity) + (varPolearm04Price * varPolearm04Quantity) + (varPolearm05Price * varPolearm05Quantity) + (varPolearm06Price * varPolearm06Quantity) + (varPolearm07Price * varPolearm07Quantity) + (varPolearm08Price * varPolearm08Quantity) + (varPolearm09Price * varPolearm09Quantity) + (varPolearm10Price * varPolearm10Quantity) + (varPolearm11Price * varPolearm11Quantity) + (varPolearm12Price * varPolearm12Quantity) + (varPolearm13Price * varPolearm13Quantity) + (varPolearm14Price * varPolearm14Quantity) + (varPolearm15Price * varPolearm15Quantity) + (varPolearm16Price * varPolearm16Quantity) + (varPolearm17Price * varPolearm17Quantity) + (varPolearm18Price * varPolearm18Quantity) + (varPolearm19Price * varPolearm19Quantity) + (varPolearm20Price * varPolearm20Quantity) + (varPolearm21Price * varPolearm21Quantity) + (varPolearm22Price * varPolearm22Quantity) + (varPolearm23Price * varPolearm23Quantity) + (varPolearm24Price * varPolearm24Quantity) + (varPolearm25Price * varPolearm25Quantity));
    varPolearmGoldTotal = ((varPolearm01Gold * varPolearm01Quantity) + (varPolearm02Gold * varPolearm02Quantity) + (varPolearm03Gold * varPolearm03Quantity) + (varPolearm04Gold * varPolearm04Quantity) + (varPolearm05Gold * varPolearm05Quantity) + (varPolearm06Gold * varPolearm06Quantity) + (varPolearm07Gold * varPolearm07Quantity) + (varPolearm08Gold * varPolearm08Quantity) + (varPolearm09Gold * varPolearm09Quantity) + (varPolearm10Gold * varPolearm10Quantity) + (varPolearm11Gold * varPolearm11Quantity) + (varPolearm12Gold * varPolearm12Quantity) + (varPolearm13Gold * varPolearm13Quantity) + (varPolearm14Gold * varPolearm14Quantity) + (varPolearm15Gold * varPolearm15Quantity) + (varPolearm16Gold * varPolearm16Quantity) + (varPolearm17Gold * varPolearm17Quantity) + (varPolearm18Gold * varPolearm18Quantity) + (varPolearm19Gold * varPolearm19Quantity) + (varPolearm20Gold * varPolearm20Quantity) + (varPolearm21Gold * varPolearm21Quantity) + (varPolearm22Gold * varPolearm22Quantity) + (varPolearm23Gold * varPolearm23Quantity) + (varPolearm24Gold * varPolearm24Quantity) + (varPolearm25Gold * varPolearm25Quantity));
    varPolearmIronTotal = ((varPolearm01Iron * varPolearm01Quantity) + (varPolearm02Iron * varPolearm02Quantity) + (varPolearm03Iron * varPolearm03Quantity) + (varPolearm04Iron * varPolearm04Quantity) + (varPolearm05Iron * varPolearm05Quantity) + (varPolearm06Iron * varPolearm06Quantity) + (varPolearm07Iron * varPolearm07Quantity) + (varPolearm08Iron * varPolearm08Quantity) + (varPolearm09Iron * varPolearm09Quantity) + (varPolearm10Iron * varPolearm10Quantity) + (varPolearm11Iron * varPolearm11Quantity) + (varPolearm12Iron * varPolearm12Quantity) + (varPolearm13Iron * varPolearm13Quantity) + (varPolearm14Iron * varPolearm14Quantity) + (varPolearm15Iron * varPolearm15Quantity) + (varPolearm16Iron * varPolearm16Quantity) + (varPolearm17Iron * varPolearm17Quantity) + (varPolearm18Iron * varPolearm18Quantity) + (varPolearm19Iron * varPolearm19Quantity) + (varPolearm20Iron * varPolearm20Quantity) + (varPolearm21Iron * varPolearm21Quantity) + (varPolearm22Iron * varPolearm22Quantity) + (varPolearm23Iron * varPolearm23Quantity) + (varPolearm24Iron * varPolearm24Quantity) + (varPolearm25Iron * varPolearm25Quantity));
    varPolearmWoodTotal = ((varPolearm01Wood * varPolearm01Quantity) + (varPolearm02Wood * varPolearm02Quantity) + (varPolearm03Wood * varPolearm03Quantity) + (varPolearm04Wood * varPolearm04Quantity) + (varPolearm05Wood * varPolearm05Quantity) + (varPolearm06Wood * varPolearm06Quantity) + (varPolearm07Wood * varPolearm07Quantity) + (varPolearm08Wood * varPolearm08Quantity) + (varPolearm09Wood * varPolearm09Quantity) + (varPolearm10Wood * varPolearm10Quantity) + (varPolearm11Wood * varPolearm11Quantity) + (varPolearm12Wood * varPolearm12Quantity) + (varPolearm13Wood * varPolearm13Quantity) + (varPolearm14Wood * varPolearm14Quantity) + (varPolearm15Wood * varPolearm15Quantity) + (varPolearm16Wood * varPolearm16Quantity) + (varPolearm17Wood * varPolearm17Quantity) + (varPolearm18Wood * varPolearm18Quantity) + (varPolearm19Wood * varPolearm19Quantity) + (varPolearm20Wood * varPolearm20Quantity) + (varPolearm21Wood * varPolearm21Quantity) + (varPolearm22Wood * varPolearm22Quantity) + (varPolearm23Wood * varPolearm23Quantity) + (varPolearm24Wood * varPolearm24Quantity) + (varPolearm25Wood * varPolearm25Quantity));
    varPolearmLeatherTotal = ((varPolearm01Leather * varPolearm01Quantity) + (varPolearm02Leather * varPolearm02Quantity) + (varPolearm03Leather * varPolearm03Quantity) + (varPolearm04Leather * varPolearm04Quantity) + (varPolearm05Leather * varPolearm05Quantity) + (varPolearm06Leather * varPolearm06Quantity) + (varPolearm07Leather * varPolearm07Quantity) + (varPolearm08Leather * varPolearm08Quantity) + (varPolearm09Leather * varPolearm09Quantity) + (varPolearm10Leather * varPolearm10Quantity) + (varPolearm11Leather * varPolearm11Quantity) + (varPolearm12Leather * varPolearm12Quantity) + (varPolearm13Leather * varPolearm13Quantity) + (varPolearm14Leather * varPolearm14Quantity) + (varPolearm15Leather * varPolearm15Quantity) + (varPolearm16Leather * varPolearm16Quantity) + (varPolearm17Leather * varPolearm17Quantity) + (varPolearm18Leather * varPolearm18Quantity) + (varPolearm19Leather * varPolearm19Quantity) + (varPolearm20Leather * varPolearm20Quantity) + (varPolearm21Leather * varPolearm21Quantity) + (varPolearm22Leather * varPolearm22Quantity) + (varPolearm23Leather * varPolearm23Quantity) + (varPolearm24Leather * varPolearm24Quantity) + (varPolearm25Leather * varPolearm25Quantity));
    varPolearmSelentineTotal = ((varPolearm01Selentine * varPolearm01Quantity) + (varPolearm02Selentine * varPolearm02Quantity) + (varPolearm03Selentine * varPolearm03Quantity) + (varPolearm04Selentine * varPolearm04Quantity) + (varPolearm05Selentine * varPolearm05Quantity) + (varPolearm06Selentine * varPolearm06Quantity) + (varPolearm07Selentine * varPolearm07Quantity) + (varPolearm08Selentine * varPolearm08Quantity) + (varPolearm09Selentine * varPolearm09Quantity) + (varPolearm10Selentine * varPolearm10Quantity) + (varPolearm11Selentine * varPolearm11Quantity) + (varPolearm12Selentine * varPolearm12Quantity) + (varPolearm13Selentine * varPolearm13Quantity) + (varPolearm14Selentine * varPolearm14Quantity) + (varPolearm15Selentine * varPolearm15Quantity) + (varPolearm16Selentine * varPolearm16Quantity) + (varPolearm17Selentine * varPolearm17Quantity) + (varPolearm18Selentine * varPolearm18Quantity) + (varPolearm19Selentine * varPolearm19Quantity) + (varPolearm20Selentine * varPolearm20Quantity) + (varPolearm21Selentine * varPolearm21Quantity) + (varPolearm22Selentine * varPolearm22Quantity) + (varPolearm23Selentine * varPolearm23Quantity) + (varPolearm24Selentine * varPolearm24Quantity) + (varPolearm25Selentine * varPolearm25Quantity));
    varPolearmVeilronTotal = ((varPolearm01Veilron * varPolearm01Quantity) + (varPolearm02Veilron * varPolearm02Quantity) + (varPolearm03Veilron * varPolearm03Quantity) + (varPolearm04Veilron * varPolearm04Quantity) + (varPolearm05Veilron * varPolearm05Quantity) + (varPolearm06Veilron * varPolearm06Quantity) + (varPolearm07Veilron * varPolearm07Quantity) + (varPolearm08Veilron * varPolearm08Quantity) + (varPolearm09Veilron * varPolearm09Quantity) + (varPolearm10Veilron * varPolearm10Quantity) + (varPolearm11Veilron * varPolearm11Quantity) + (varPolearm12Veilron * varPolearm12Quantity) + (varPolearm13Veilron * varPolearm13Quantity) + (varPolearm14Veilron * varPolearm14Quantity) + (varPolearm15Veilron * varPolearm15Quantity) + (varPolearm16Veilron * varPolearm16Quantity) + (varPolearm17Veilron * varPolearm17Quantity) + (varPolearm18Veilron * varPolearm18Quantity) + (varPolearm19Veilron * varPolearm19Quantity) + (varPolearm20Veilron * varPolearm20Quantity) + (varPolearm21Veilron * varPolearm21Quantity) + (varPolearm22Veilron * varPolearm22Quantity) + (varPolearm23Veilron * varPolearm23Quantity) + (varPolearm24Veilron * varPolearm24Quantity) + (varPolearm25Veilron * varPolearm25Quantity));
    varPolearmNeithalTotal = ((varPolearm01Neithal * varPolearm01Quantity) + (varPolearm02Neithal * varPolearm02Quantity) + (varPolearm03Neithal * varPolearm03Quantity) + (varPolearm04Neithal * varPolearm04Quantity) + (varPolearm05Neithal * varPolearm05Quantity) + (varPolearm06Neithal * varPolearm06Quantity) + (varPolearm07Neithal * varPolearm07Quantity) + (varPolearm08Neithal * varPolearm08Quantity) + (varPolearm09Neithal * varPolearm09Quantity) + (varPolearm10Neithal * varPolearm10Quantity) + (varPolearm11Neithal * varPolearm11Quantity) + (varPolearm12Neithal * varPolearm12Quantity) + (varPolearm13Neithal * varPolearm13Quantity) + (varPolearm14Neithal * varPolearm14Quantity) + (varPolearm15Neithal * varPolearm15Quantity) + (varPolearm16Neithal * varPolearm16Quantity) + (varPolearm17Neithal * varPolearm17Quantity) + (varPolearm18Neithal * varPolearm18Quantity) + (varPolearm19Neithal * varPolearm19Quantity) + (varPolearm20Neithal * varPolearm20Quantity) + (varPolearm21Neithal * varPolearm21Quantity) + (varPolearm22Neithal * varPolearm22Quantity) + (varPolearm23Neithal * varPolearm23Quantity) + (varPolearm24Neithal * varPolearm24Quantity) + (varPolearm25Neithal * varPolearm25Quantity));
    varPolearmLeensparTotal = ((varPolearm01Leenspar * varPolearm01Quantity) + (varPolearm02Leenspar * varPolearm02Quantity) + (varPolearm03Leenspar * varPolearm03Quantity) + (varPolearm04Leenspar * varPolearm04Quantity) + (varPolearm05Leenspar * varPolearm05Quantity) + (varPolearm06Leenspar * varPolearm06Quantity) + (varPolearm07Leenspar * varPolearm07Quantity) + (varPolearm08Leenspar * varPolearm08Quantity) + (varPolearm09Leenspar * varPolearm09Quantity) + (varPolearm10Leenspar * varPolearm10Quantity) + (varPolearm11Leenspar * varPolearm11Quantity) + (varPolearm12Leenspar * varPolearm12Quantity) + (varPolearm13Leenspar * varPolearm13Quantity) + (varPolearm14Leenspar * varPolearm14Quantity) + (varPolearm15Leenspar * varPolearm15Quantity) + (varPolearm16Leenspar * varPolearm16Quantity) + (varPolearm17Leenspar * varPolearm17Quantity) + (varPolearm18Leenspar * varPolearm18Quantity) + (varPolearm19Leenspar * varPolearm19Quantity) + (varPolearm20Leenspar * varPolearm20Quantity) + (varPolearm21Leenspar * varPolearm21Quantity) + (varPolearm22Leenspar * varPolearm22Quantity) + (varPolearm23Leenspar * varPolearm23Quantity) + (varPolearm24Leenspar * varPolearm24Quantity) + (varPolearm25Leenspar * varPolearm25Quantity));
    varPolearmTheyrilTotal = ((varPolearm01Theyril * varPolearm01Quantity) + (varPolearm02Theyril * varPolearm02Quantity) + (varPolearm03Theyril * varPolearm03Quantity) + (varPolearm04Theyril * varPolearm04Quantity) + (varPolearm05Theyril * varPolearm05Quantity) + (varPolearm06Theyril * varPolearm06Quantity) + (varPolearm07Theyril * varPolearm07Quantity) + (varPolearm08Theyril * varPolearm08Quantity) + (varPolearm09Theyril * varPolearm09Quantity) + (varPolearm10Theyril * varPolearm10Quantity) + (varPolearm11Theyril * varPolearm11Quantity) + (varPolearm12Theyril * varPolearm12Quantity) + (varPolearm13Theyril * varPolearm13Quantity) + (varPolearm14Theyril * varPolearm14Quantity) + (varPolearm15Theyril * varPolearm15Quantity) + (varPolearm16Theyril * varPolearm16Quantity) + (varPolearm17Theyril * varPolearm17Quantity) + (varPolearm18Theyril * varPolearm18Quantity) + (varPolearm19Theyril * varPolearm19Quantity) + (varPolearm20Theyril * varPolearm20Quantity) + (varPolearm21Theyril * varPolearm21Quantity) + (varPolearm22Theyril * varPolearm22Quantity) + (varPolearm23Theyril * varPolearm23Quantity) + (varPolearm24Theyril * varPolearm24Quantity) + (varPolearm25Theyril * varPolearm25Quantity));
    varPolearmStoneTotal = ((varPolearm01Stone * varPolearm01Quantity) + (varPolearm02Stone * varPolearm02Quantity) + (varPolearm03Stone * varPolearm03Quantity) + (varPolearm04Stone * varPolearm04Quantity) + (varPolearm05Stone * varPolearm05Quantity) + (varPolearm06Stone * varPolearm06Quantity) + (varPolearm07Stone * varPolearm07Quantity) + (varPolearm08Stone * varPolearm08Quantity) + (varPolearm09Stone * varPolearm09Quantity) + (varPolearm10Stone * varPolearm10Quantity) + (varPolearm11Stone * varPolearm11Quantity) + (varPolearm12Stone * varPolearm12Quantity) + (varPolearm13Stone * varPolearm13Quantity) + (varPolearm14Stone * varPolearm14Quantity) + (varPolearm15Stone * varPolearm15Quantity) + (varPolearm16Stone * varPolearm16Quantity) + (varPolearm17Stone * varPolearm17Quantity) + (varPolearm18Stone * varPolearm18Quantity) + (varPolearm19Stone * varPolearm19Quantity) + (varPolearm20Stone * varPolearm20Quantity) + (varPolearm21Stone * varPolearm21Quantity) + (varPolearm22Stone * varPolearm22Quantity) + (varPolearm23Stone * varPolearm23Quantity) + (varPolearm24Stone * varPolearm24Quantity) + (varPolearm25Stone * varPolearm25Quantity));
    varPolearmMenhirHeartTotal = ((varPolearm01MenhirHeart * varPolearm01Quantity) + (varPolearm02MenhirHeart * varPolearm02Quantity) + (varPolearm03MenhirHeart * varPolearm03Quantity) + (varPolearm04MenhirHeart * varPolearm04Quantity) + (varPolearm05MenhirHeart * varPolearm05Quantity) + (varPolearm06MenhirHeart * varPolearm06Quantity) + (varPolearm07MenhirHeart * varPolearm07Quantity) + (varPolearm08MenhirHeart * varPolearm08Quantity) + (varPolearm09MenhirHeart * varPolearm09Quantity) + (varPolearm10MenhirHeart * varPolearm10Quantity) + (varPolearm11MenhirHeart * varPolearm11Quantity) + (varPolearm12MenhirHeart * varPolearm12Quantity) + (varPolearm13MenhirHeart * varPolearm13Quantity) + (varPolearm14MenhirHeart * varPolearm14Quantity) + (varPolearm15MenhirHeart * varPolearm15Quantity) + (varPolearm16MenhirHeart * varPolearm16Quantity) + (varPolearm17MenhirHeart * varPolearm17Quantity) + (varPolearm18MenhirHeart * varPolearm18Quantity) + (varPolearm19MenhirHeart * varPolearm19Quantity) + (varPolearm20MenhirHeart * varPolearm20Quantity) + (varPolearm21MenhirHeart * varPolearm21Quantity) + (varPolearm22MenhirHeart * varPolearm22Quantity) + (varPolearm23MenhirHeart * varPolearm23Quantity) + (varPolearm24MenhirHeart * varPolearm24Quantity) + (varPolearm25MenhirHeart * varPolearm25Quantity));
    varPolearmEmetLifeforceTotal = ((varPolearm01EmetLifeforce * varPolearm01Quantity) + (varPolearm02EmetLifeforce * varPolearm02Quantity) + (varPolearm03EmetLifeforce * varPolearm03Quantity) + (varPolearm04EmetLifeforce * varPolearm04Quantity) + (varPolearm05EmetLifeforce * varPolearm05Quantity) + (varPolearm06EmetLifeforce * varPolearm06Quantity) + (varPolearm07EmetLifeforce * varPolearm07Quantity) + (varPolearm08EmetLifeforce * varPolearm08Quantity) + (varPolearm09EmetLifeforce * varPolearm09Quantity) + (varPolearm10EmetLifeforce * varPolearm10Quantity) + (varPolearm11EmetLifeforce * varPolearm11Quantity) + (varPolearm12EmetLifeforce * varPolearm12Quantity) + (varPolearm13EmetLifeforce * varPolearm13Quantity) + (varPolearm14EmetLifeforce * varPolearm14Quantity) + (varPolearm15EmetLifeforce * varPolearm15Quantity) + (varPolearm16EmetLifeforce * varPolearm16Quantity) + (varPolearm17EmetLifeforce * varPolearm17Quantity) + (varPolearm18EmetLifeforce * varPolearm18Quantity) + (varPolearm19EmetLifeforce * varPolearm19Quantity) + (varPolearm20EmetLifeforce * varPolearm20Quantity) + (varPolearm21EmetLifeforce * varPolearm21Quantity) + (varPolearm22EmetLifeforce * varPolearm22Quantity) + (varPolearm23EmetLifeforce * varPolearm23Quantity) + (varPolearm24EmetLifeforce * varPolearm24Quantity) + (varPolearm25EmetLifeforce * varPolearm25Quantity));
    varPolearmDarkshardTotal = ((varPolearm01Darkshard * varPolearm01Quantity) + (varPolearm02Darkshard * varPolearm02Quantity) + (varPolearm03Darkshard * varPolearm03Quantity) + (varPolearm04Darkshard * varPolearm04Quantity) + (varPolearm05Darkshard * varPolearm05Quantity) + (varPolearm06Darkshard * varPolearm06Quantity) + (varPolearm07Darkshard * varPolearm07Quantity) + (varPolearm08Darkshard * varPolearm08Quantity) + (varPolearm09Darkshard * varPolearm09Quantity) + (varPolearm10Darkshard * varPolearm10Quantity) + (varPolearm11Darkshard * varPolearm11Quantity) + (varPolearm12Darkshard * varPolearm12Quantity) + (varPolearm13Darkshard * varPolearm13Quantity) + (varPolearm14Darkshard * varPolearm14Quantity) + (varPolearm15Darkshard * varPolearm15Quantity) + (varPolearm16Darkshard * varPolearm16Quantity) + (varPolearm17Darkshard * varPolearm17Quantity) + (varPolearm18Darkshard * varPolearm18Quantity) + (varPolearm19Darkshard * varPolearm19Quantity) + (varPolearm20Darkshard * varPolearm20Quantity) + (varPolearm21Darkshard * varPolearm21Quantity) + (varPolearm22Darkshard * varPolearm22Quantity) + (varPolearm23Darkshard * varPolearm23Quantity) + (varPolearm24Darkshard * varPolearm24Quantity) + (varPolearm25Darkshard * varPolearm25Quantity));
}

//Polearm Calculations
function fnPolearm()
{
    fnPolearmSubPrice(varPolearm01Gold,varPolearm01Iron,varPolearm01Wood,varPolearm01Leather,varPolearm01Selentine,varPolearm01Veilron,varPolearm01Neithal,varPolearm01Leenspar,varPolearm01Theyril,varPolearm01Success,varPolearm01Stone,varPolearm01MenhirHeart,varPolearm01EmetLifeforce,varPolearm01Darkshard)
    varPolearm01Price = varItemPrice;
    fnPolearmSubPrice(varPolearm02Gold,varPolearm02Iron,varPolearm02Wood,varPolearm02Leather,varPolearm02Selentine,varPolearm02Veilron,varPolearm02Neithal,varPolearm02Leenspar,varPolearm02Theyril,varPolearm02Success,varPolearm02Stone,varPolearm02MenhirHeart,varPolearm02EmetLifeforce,varPolearm02Darkshard)
    varPolearm02Price = varItemPrice;
    fnPolearmSubPrice(varPolearm03Gold,varPolearm03Iron,varPolearm03Wood,varPolearm03Leather,varPolearm03Selentine,varPolearm03Veilron,varPolearm03Neithal,varPolearm03Leenspar,varPolearm03Theyril,varPolearm03Success,varPolearm03Stone,varPolearm03MenhirHeart,varPolearm03EmetLifeforce,varPolearm03Darkshard)
    varPolearm03Price = varItemPrice;
    fnPolearmSubPrice(varPolearm04Gold,varPolearm04Iron,varPolearm04Wood,varPolearm04Leather,varPolearm04Selentine,varPolearm04Veilron,varPolearm04Neithal,varPolearm04Leenspar,varPolearm04Theyril,varPolearm04Success,varPolearm04Stone,varPolearm04MenhirHeart,varPolearm04EmetLifeforce,varPolearm04Darkshard)
    varPolearm04Price = varItemPrice;
    fnPolearmSubPrice(varPolearm05Gold,varPolearm05Iron,varPolearm05Wood,varPolearm05Leather,varPolearm05Selentine,varPolearm05Veilron,varPolearm05Neithal,varPolearm05Leenspar,varPolearm05Theyril,varPolearm05Success,varPolearm05Stone,varPolearm05MenhirHeart,varPolearm05EmetLifeforce,varPolearm05Darkshard)
    varPolearm05Price = varItemPrice;
    fnPolearmSubPrice(varPolearm06Gold,varPolearm06Iron,varPolearm06Wood,varPolearm06Leather,varPolearm06Selentine,varPolearm06Veilron,varPolearm06Neithal,varPolearm06Leenspar,varPolearm06Theyril,varPolearm06Success,varPolearm06Stone,varPolearm06MenhirHeart,varPolearm06EmetLifeforce,varPolearm06Darkshard)
    varPolearm06Price = varItemPrice;
    fnPolearmSubPrice(varPolearm07Gold,varPolearm07Iron,varPolearm07Wood,varPolearm07Leather,varPolearm07Selentine,varPolearm07Veilron,varPolearm07Neithal,varPolearm07Leenspar,varPolearm07Theyril,varPolearm07Success,varPolearm07Stone,varPolearm07MenhirHeart,varPolearm07EmetLifeforce,varPolearm07Darkshard)
    varPolearm07Price = varItemPrice;
    fnPolearmSubPrice(varPolearm08Gold,varPolearm08Iron,varPolearm08Wood,varPolearm08Leather,varPolearm08Selentine,varPolearm08Veilron,varPolearm08Neithal,varPolearm08Leenspar,varPolearm08Theyril,varPolearm08Success,varPolearm08Stone,varPolearm08MenhirHeart,varPolearm08EmetLifeforce,varPolearm08Darkshard)
    varPolearm08Price = varItemPrice;
    fnPolearmSubPrice(varPolearm09Gold,varPolearm09Iron,varPolearm09Wood,varPolearm09Leather,varPolearm09Selentine,varPolearm09Veilron,varPolearm09Neithal,varPolearm09Leenspar,varPolearm09Theyril,varPolearm09Success,varPolearm09Stone,varPolearm09MenhirHeart,varPolearm09EmetLifeforce,varPolearm09Darkshard)
    varPolearm09Price = varItemPrice;
    fnPolearmSubPrice(varPolearm10Gold,varPolearm10Iron,varPolearm10Wood,varPolearm10Leather,varPolearm10Selentine,varPolearm10Veilron,varPolearm10Neithal,varPolearm10Leenspar,varPolearm10Theyril,varPolearm10Success,varPolearm10Stone,varPolearm10MenhirHeart,varPolearm10EmetLifeforce,varPolearm10Darkshard)
    varPolearm10Price = varItemPrice;
    fnPolearmSubPrice(varPolearm11Gold,varPolearm11Iron,varPolearm11Wood,varPolearm11Leather,varPolearm11Selentine,varPolearm11Veilron,varPolearm11Neithal,varPolearm11Leenspar,varPolearm11Theyril,varPolearm11Success,varPolearm11Stone,varPolearm11MenhirHeart,varPolearm11EmetLifeforce,varPolearm11Darkshard)
    varPolearm11Price = varItemPrice;
    fnPolearmSubPrice(varPolearm12Gold,varPolearm12Iron,varPolearm12Wood,varPolearm12Leather,varPolearm12Selentine,varPolearm12Veilron,varPolearm12Neithal,varPolearm12Leenspar,varPolearm12Theyril,varPolearm12Success,varPolearm12Stone,varPolearm12MenhirHeart,varPolearm12EmetLifeforce,varPolearm12Darkshard)
    varPolearm12Price = varItemPrice;
    fnPolearmSubPrice(varPolearm13Gold,varPolearm13Iron,varPolearm13Wood,varPolearm13Leather,varPolearm13Selentine,varPolearm13Veilron,varPolearm13Neithal,varPolearm13Leenspar,varPolearm13Theyril,varPolearm13Success,varPolearm13Stone,varPolearm13MenhirHeart,varPolearm13EmetLifeforce,varPolearm13Darkshard)
    varPolearm13Price = varItemPrice;
    fnPolearmSubPrice(varPolearm14Gold,varPolearm14Iron,varPolearm14Wood,varPolearm14Leather,varPolearm14Selentine,varPolearm14Veilron,varPolearm14Neithal,varPolearm14Leenspar,varPolearm14Theyril,varPolearm14Success,varPolearm14Stone,varPolearm14MenhirHeart,varPolearm14EmetLifeforce,varPolearm14Darkshard)
    varPolearm14Price = varItemPrice;
    fnPolearmSubPrice(varPolearm15Gold,varPolearm15Iron,varPolearm15Wood,varPolearm15Leather,varPolearm15Selentine,varPolearm15Veilron,varPolearm15Neithal,varPolearm15Leenspar,varPolearm15Theyril,varPolearm15Success,varPolearm15Stone,varPolearm15MenhirHeart,varPolearm15EmetLifeforce,varPolearm15Darkshard)
    varPolearm15Price = varItemPrice;
    fnPolearmSubPrice(varPolearm16Gold,varPolearm16Iron,varPolearm16Wood,varPolearm16Leather,varPolearm16Selentine,varPolearm16Veilron,varPolearm16Neithal,varPolearm16Leenspar,varPolearm16Theyril,varPolearm16Success,varPolearm16Stone,varPolearm16MenhirHeart,varPolearm16EmetLifeforce,varPolearm16Darkshard)
    varPolearm16Price = varItemPrice;
    fnPolearmSubPrice(varPolearm17Gold,varPolearm17Iron,varPolearm17Wood,varPolearm17Leather,varPolearm17Selentine,varPolearm17Veilron,varPolearm17Neithal,varPolearm17Leenspar,varPolearm17Theyril,varPolearm17Success,varPolearm17Stone,varPolearm17MenhirHeart,varPolearm17EmetLifeforce,varPolearm17Darkshard)
    varPolearm17Price = varItemPrice;
    fnPolearmSubPrice(varPolearm18Gold,varPolearm18Iron,varPolearm18Wood,varPolearm18Leather,varPolearm18Selentine,varPolearm18Veilron,varPolearm18Neithal,varPolearm18Leenspar,varPolearm18Theyril,varPolearm18Success,varPolearm18Stone,varPolearm18MenhirHeart,varPolearm18EmetLifeforce,varPolearm18Darkshard)
    varPolearm18Price = varItemPrice;
    fnPolearmSubPrice(varPolearm19Gold,varPolearm19Iron,varPolearm19Wood,varPolearm19Leather,varPolearm19Selentine,varPolearm19Veilron,varPolearm19Neithal,varPolearm19Leenspar,varPolearm19Theyril,varPolearm19Success,varPolearm19Stone,varPolearm19MenhirHeart,varPolearm19EmetLifeforce,varPolearm19Darkshard)
    varPolearm19Price = varItemPrice;
    fnPolearmSubPrice(varPolearm20Gold,varPolearm20Iron,varPolearm20Wood,varPolearm20Leather,varPolearm20Selentine,varPolearm20Veilron,varPolearm20Neithal,varPolearm20Leenspar,varPolearm20Theyril,varPolearm20Success,varPolearm20Stone,varPolearm20MenhirHeart,varPolearm20EmetLifeforce,varPolearm20Darkshard)
    varPolearm20Price = varItemPrice;
    fnPolearmSubPrice(varPolearm21Gold,varPolearm21Iron,varPolearm21Wood,varPolearm21Leather,varPolearm21Selentine,varPolearm21Veilron,varPolearm21Neithal,varPolearm21Leenspar,varPolearm21Theyril,varPolearm21Success,varPolearm21Stone,varPolearm21MenhirHeart,varPolearm21EmetLifeforce,varPolearm21Darkshard)
    varPolearm21Price = varItemPrice;
    fnPolearmSubPrice(varPolearm22Gold,varPolearm22Iron,varPolearm22Wood,varPolearm22Leather,varPolearm22Selentine,varPolearm22Veilron,varPolearm22Neithal,varPolearm22Leenspar,varPolearm22Theyril,varPolearm22Success,varPolearm22Stone,varPolearm22MenhirHeart,varPolearm22EmetLifeforce,varPolearm22Darkshard)
    varPolearm22Price = varItemPrice;
    fnPolearmSubPrice(varPolearm23Gold,varPolearm23Iron,varPolearm23Wood,varPolearm23Leather,varPolearm23Selentine,varPolearm23Veilron,varPolearm23Neithal,varPolearm23Leenspar,varPolearm23Theyril,varPolearm23Success,varPolearm23Stone,varPolearm23MenhirHeart,varPolearm23EmetLifeforce,varPolearm23Darkshard)
    varPolearm23Price = varItemPrice;
    fnPolearmSubPrice(varPolearm24Gold,varPolearm24Iron,varPolearm24Wood,varPolearm24Leather,varPolearm24Selentine,varPolearm24Veilron,varPolearm24Neithal,varPolearm24Leenspar,varPolearm24Theyril,varPolearm24Success,varPolearm24Stone,varPolearm24MenhirHeart,varPolearm24EmetLifeforce,varPolearm24Darkshard)
    varPolearm24Price = varItemPrice;
    fnPolearmSubPrice(varPolearm25Gold,varPolearm25Iron,varPolearm25Wood,varPolearm25Leather,varPolearm25Selentine,varPolearm25Veilron,varPolearm25Neithal,varPolearm25Leenspar,varPolearm25Theyril,varPolearm25Success,varPolearm25Stone,varPolearm25MenhirHeart,varPolearm25EmetLifeforce,varPolearm25Darkshard)
    varPolearm25Price = varItemPrice;
}

function fnReloadPolearmPrices()
{
    //Polearm Prices
    document.getElementById('Polearm01Price').value = varPolearm01Price;
    document.getElementById('Polearm02Price').value = varPolearm02Price;
    document.getElementById('Polearm03Price').value = varPolearm03Price;
    document.getElementById('Polearm04Price').value = varPolearm04Price;
    document.getElementById('Polearm05Price').value = varPolearm05Price;
    document.getElementById('Polearm06Price').value = varPolearm06Price;
    document.getElementById('Polearm07Price').value = varPolearm07Price;
    document.getElementById('Polearm08Price').value = varPolearm08Price;
    document.getElementById('Polearm09Price').value = varPolearm09Price;
    document.getElementById('Polearm10Price').value = varPolearm10Price;
    document.getElementById('Polearm11Price').value = varPolearm11Price;
    document.getElementById('Polearm12Price').value = varPolearm12Price;
    document.getElementById('Polearm13Price').value = varPolearm13Price;
    document.getElementById('Polearm14Price').value = varPolearm14Price;
    document.getElementById('Polearm15Price').value = varPolearm15Price;
    document.getElementById('Polearm16Price').value = varPolearm16Price;
    document.getElementById('Polearm17Price').value = varPolearm17Price;
    document.getElementById('Polearm18Price').value = varPolearm18Price;
    document.getElementById('Polearm19Price').value = varPolearm19Price;
    document.getElementById('Polearm20Price').value = varPolearm20Price;
    document.getElementById('Polearm21Price').value = varPolearm21Price;
    document.getElementById('Polearm22Price').value = varPolearm22Price;
    document.getElementById('Polearm23Price').value = varPolearm23Price;
    document.getElementById('Polearm24Price').value = varPolearm24Price;
    document.getElementById('Polearm25Price').value = varPolearm25Price;

    //Polearm Total Prices
    document.getElementById('PolearmTotal').value = varPolearmTotal;
    document.getElementById('PolearmGoldTotal').value = varPolearmGoldTotal;
    document.getElementById('PolearmIronTotal').value = varPolearmIronTotal;
    document.getElementById('PolearmWoodTotal').value = varPolearmWoodTotal;
    document.getElementById('PolearmLeatherTotal').value = varPolearmLeatherTotal;
    document.getElementById('PolearmSelentineTotal').value = varPolearmSelentineTotal;
    document.getElementById('PolearmVeilronTotal').value = varPolearmVeilronTotal;
    document.getElementById('PolearmNeithalTotal').value = varPolearmNeithalTotal;
    document.getElementById('PolearmLeensparTotal').value = varPolearmLeensparTotal;
    document.getElementById('PolearmTheyrilTotal').value = varPolearmTheyrilTotal;
    document.getElementById('PolearmStoneTotal').value = varPolearmStoneTotal;
    document.getElementById('PolearmMenhirHeartTotal').value = varPolearmMenhirHeartTotal;
    document.getElementById('PolearmEmetLifeforceTotal').value = varPolearmEmetLifeforceTotal;
    document.getElementById('PolearmDarkshardTotal').value = varPolearmDarkshardTotal;
}

function fnPolearmInitialize()
{
    varPolearmTotal = document.getElementById("PolearmTotal").value;
    varPolearmGoldTotal = document.getElementById("PolearmGoldTotal").value;
    varPolearmIronTotal = document.getElementById("PolearmIronTotal").value;
    varPolearmWoodTotal = document.getElementById("PolearmWoodTotal").value;
    varPolearmLeatherTotal = document.getElementById("PolearmLeatherTotal").value;
    varPolearmSelentineTotal = document.getElementById("PolearmSelentineTotal").value;
    varPolearmVeilronTotal = document.getElementById("PolearmVeilronTotal").value;
    varPolearmNeithalTotal = document.getElementById("PolearmNeithalTotal").value;
    varPolearmLeensparTotal = document.getElementById("PolearmLeensparTotal").value;
    varPolearmTheyrilTotal = document.getElementById("PolearmTheyrilTotal").value;
    varPolearmStoneTotal = document.getElementById("PolearmStoneTotal").value;
    varPolearmMenhirHeartTotal = document.getElementById("PolearmMenhirHeartTotal").value;
    varPolearmEmetLifeforceTotal = document.getElementById("PolearmEmetLifeforceTotal").value;
    varPolearmDarkshardTotal = document.getElementById("PolearmDarkshardTotal").value;

    // *** Polearm VARIABLES ***
	//Impaler
    varPolearm01Quantity = document.getElementById("Polearm01Quantity").value;
    varPolearm01Price = document.getElementById("Polearm01Price").value;
    varPolearm01Success = document.getElementById("Polearm01Success").value;
    varPolearm01Gold = 0
    varPolearm01Iron = 0
    varPolearm01Wood = 4
    varPolearm01Leather = 2
    varPolearm01Selentine = 0
    varPolearm01Veilron = 0
    varPolearm01Neithal = 0
    varPolearm01Leenspar = 0
    varPolearm01Theyril = 0
    varPolearm01Stone = 1
    varPolearm01MenhirHeart = 0
    varPolearm01EmetLifeforce = 0
    varPolearm01Darkshard = 0

	//Cultist Glaive
    varPolearm02Quantity = document.getElementById("Polearm02Quantity").value;
    varPolearm02Price = document.getElementById("Polearm02Price").value;
    varPolearm02Success = document.getElementById("Polearm02Success").value;
    varPolearm02Gold = 0
    varPolearm02Iron = 2
    varPolearm02Wood = 3
    varPolearm02Leather = 2
    varPolearm02Selentine = 0
    varPolearm02Veilron = 0
    varPolearm02Neithal = 0
    varPolearm02Leenspar = 0
    varPolearm02Theyril = 0
    varPolearm02Stone = 0
    varPolearm02MenhirHeart = 0
    varPolearm02EmetLifeforce = 0
    varPolearm02Darkshard = 0

	//Cultist Polearm
    varPolearm03Quantity = document.getElementById("Polearm03Quantity").value;
    varPolearm03Price = document.getElementById("Polearm03Price").value;
    varPolearm03Success = document.getElementById("Polearm03Success").value;
    varPolearm03Gold = 15
    varPolearm03Iron = 6
    varPolearm03Wood = 7
    varPolearm03Leather = 3
    varPolearm03Selentine = 0
    varPolearm03Veilron = 0
    varPolearm03Neithal = 0
    varPolearm03Leenspar = 0
    varPolearm03Theyril = 0
    varPolearm03Stone = 0
    varPolearm03MenhirHeart = 0
    varPolearm03EmetLifeforce = 0
    varPolearm03Darkshard = 0

	//Glaive
    varPolearm04Quantity = document.getElementById("Polearm04Quantity").value;
    varPolearm04Price = document.getElementById("Polearm04Price").value;
    varPolearm04Success = document.getElementById("Polearm04Success").value;
    varPolearm04Gold = 15
    varPolearm04Iron = 5
    varPolearm04Wood = 5
    varPolearm04Leather = 0
    varPolearm04Selentine = 0
    varPolearm04Veilron = 0
    varPolearm04Neithal = 0
    varPolearm04Leenspar = 0
    varPolearm04Theyril = 0
    varPolearm04Stone = 0
    varPolearm04MenhirHeart = 0
    varPolearm04EmetLifeforce = 0
    varPolearm04Darkshard = 0

	//Tribal Pike
    varPolearm05Quantity = document.getElementById("Polearm05Quantity").value;
    varPolearm05Price = document.getElementById("Polearm05Price").value;
    varPolearm05Success = document.getElementById("Polearm05Success").value;
    varPolearm05Gold = 15
    varPolearm05Iron = 7
    varPolearm05Wood = 7
    varPolearm05Leather = 3
    varPolearm05Selentine = 0
    varPolearm05Veilron = 0
    varPolearm05Neithal = 0
    varPolearm05Leenspar = 0
    varPolearm05Theyril = 0
    varPolearm05Stone = 0
    varPolearm05MenhirHeart = 0
    varPolearm05EmetLifeforce = 0
    varPolearm05Darkshard = 0

	//Fauchard
    varPolearm06Quantity = document.getElementById("Polearm06Quantity").value;
    varPolearm06Price = document.getElementById("Polearm06Price").value;
    varPolearm06Success = document.getElementById("Polearm06Success").value;
    varPolearm06Gold = 30
    varPolearm06Iron = 7
    varPolearm06Wood = 7
    varPolearm06Leather = 0
    varPolearm06Selentine = 0
    varPolearm06Veilron = 0
    varPolearm06Neithal = 0
    varPolearm06Leenspar = 0
    varPolearm06Theyril = 0
    varPolearm06Stone = 0
    varPolearm06MenhirHeart = 0
    varPolearm06EmetLifeforce = 0
    varPolearm06Darkshard = 0

	//Revenant Halberd
    varPolearm07Quantity = document.getElementById("Polearm07Quantity").value;
    varPolearm07Price = document.getElementById("Polearm07Price").value;
    varPolearm07Success = document.getElementById("Polearm07Success").value;
    varPolearm07Gold = 30
    varPolearm07Iron = 6
    varPolearm07Wood = 7
    varPolearm07Leather = 3
    varPolearm07Selentine = 0
    varPolearm07Veilron = 0
    varPolearm07Neithal = 0
    varPolearm07Leenspar = 0
    varPolearm07Theyril = 0
    varPolearm07Stone = 0
    varPolearm07MenhirHeart = 0
    varPolearm07EmetLifeforce = 0
    varPolearm07Darkshard = 0

	//Skewer
    varPolearm08Quantity = document.getElementById("Polearm08Quantity").value;
    varPolearm08Price = document.getElementById("Polearm08Price").value;
    varPolearm08Success = document.getElementById("Polearm08Success").value;
    varPolearm08Gold = 30
    varPolearm08Iron = 6
    varPolearm08Wood = 8
    varPolearm08Leather = 0
    varPolearm08Selentine = 0
    varPolearm08Veilron = 0
    varPolearm08Neithal = 0
    varPolearm08Leenspar = 0
    varPolearm08Theyril = 0
    varPolearm08Stone = 0
    varPolearm08MenhirHeart = 0
    varPolearm08EmetLifeforce = 0
    varPolearm08Darkshard = 0

	//Dragon Tail
    varPolearm09Quantity = document.getElementById("Polearm09Quantity").value;
    varPolearm09Price = document.getElementById("Polearm09Price").value;
    varPolearm09Success = document.getElementById("Polearm09Success").value;
    varPolearm09Gold = 60
    varPolearm09Iron = 9
    varPolearm09Wood = 13
    varPolearm09Leather = 0
    varPolearm09Selentine = 0
    varPolearm09Veilron = 0
    varPolearm09Neithal = 0
    varPolearm09Leenspar = 0
    varPolearm09Theyril = 0
    varPolearm09Stone = 0
    varPolearm09MenhirHeart = 0
    varPolearm09EmetLifeforce = 0
    varPolearm09Darkshard = 0

	//Minotaur Halberd
    varPolearm10Quantity = document.getElementById("Polearm10Quantity").value;
    varPolearm10Price = document.getElementById("Polearm10Price").value;
    varPolearm10Success = document.getElementById("Polearm10Success").value;
    varPolearm10Gold = 60
    varPolearm10Iron = 10
    varPolearm10Wood = 12
    varPolearm10Leather = 0
    varPolearm10Selentine = 0
    varPolearm10Veilron = 0
    varPolearm10Neithal = 0
    varPolearm10Leenspar = 0
    varPolearm10Theyril = 0
    varPolearm10Stone = 0
    varPolearm10MenhirHeart = 0
    varPolearm10EmetLifeforce = 0
    varPolearm10Darkshard = 0

	//Mercian Halberd
    varPolearm11Quantity = document.getElementById("Polearm11Quantity").value;
    varPolearm11Price = document.getElementById("Polearm11Price").value;
    varPolearm11Success = document.getElementById("Polearm11Success").value;
    varPolearm11Gold = 160
    varPolearm11Iron = 19
    varPolearm11Wood = 20
    varPolearm11Leather = 0
    varPolearm11Selentine = 0
    varPolearm11Veilron = 0
    varPolearm11Neithal = 0
    varPolearm11Leenspar = 0
    varPolearm11Theyril = 0
    varPolearm11Stone = 0
    varPolearm11MenhirHeart = 0
    varPolearm11EmetLifeforce = 0
    varPolearm11Darkshard = 0

	//Mirdain Spetum
    varPolearm12Quantity = document.getElementById("Polearm12Quantity").value;
    varPolearm12Price = document.getElementById("Polearm12Price").value;
    varPolearm12Success = document.getElementById("Polearm12Success").value;
    varPolearm12Gold = 160
    varPolearm12Iron = 30
    varPolearm12Wood = 9
    varPolearm12Leather = 0
    varPolearm12Selentine = 0
    varPolearm12Veilron = 0
    varPolearm12Neithal = 0
    varPolearm12Leenspar = 0
    varPolearm12Theyril = 0
    varPolearm12Stone = 0
    varPolearm12MenhirHeart = 0
    varPolearm12EmetLifeforce = 0
    varPolearm12Darkshard = 0

	//Dwarven Halberd
    varPolearm13Quantity = document.getElementById("Polearm13Quantity").value;
    varPolearm13Price = document.getElementById("Polearm13Price").value;
    varPolearm13Success = document.getElementById("Polearm13Success").value;
    varPolearm13Gold = 160
    varPolearm13Iron = 33
    varPolearm13Wood = 6
    varPolearm13Leather = 0
    varPolearm13Selentine = 0
    varPolearm13Veilron = 0
    varPolearm13Neithal = 0
    varPolearm13Leenspar = 0
    varPolearm13Theyril = 0
    varPolearm13Stone = 0
    varPolearm13MenhirHeart = 0
    varPolearm13EmetLifeforce = 0
    varPolearm13Darkshard = 0

	//Mahirim Halberd
    varPolearm14Quantity = document.getElementById("Polearm14Quantity").value;
    varPolearm14Price = document.getElementById("Polearm14Price").value;
    varPolearm14Success = document.getElementById("Polearm14Success").value;
    varPolearm14Gold = 160
    varPolearm14Iron = 33
    varPolearm14Wood = 6
    varPolearm14Leather = 0
    varPolearm14Selentine = 0
    varPolearm14Veilron = 0
    varPolearm14Neithal = 0
    varPolearm14Leenspar = 0
    varPolearm14Theyril = 0
    varPolearm14Stone = 0
    varPolearm14MenhirHeart = 0
    varPolearm14EmetLifeforce = 0
    varPolearm14Darkshard = 0

	//Orkish Spiked Halberd
    varPolearm15Quantity = document.getElementById("Polearm15Quantity").value;
    varPolearm15Price = document.getElementById("Polearm15Price").value;
    varPolearm15Success = document.getElementById("Polearm15Success").value;
    varPolearm15Gold = 160
    varPolearm15Iron = 33
    varPolearm15Wood = 6
    varPolearm15Leather = 0
    varPolearm15Selentine = 0
    varPolearm15Veilron = 0
    varPolearm15Neithal = 0
    varPolearm15Leenspar = 0
    varPolearm15Theyril = 0
    varPolearm15Stone = 0
    varPolearm15MenhirHeart = 0
    varPolearm15EmetLifeforce = 0
    varPolearm15Darkshard = 0

	//Alfar Poleaxe
    varPolearm16Quantity = document.getElementById("Polearm16Quantity").value;
    varPolearm16Price = document.getElementById("Polearm16Price").value;
    varPolearm16Success = document.getElementById("Polearm16Success").value;
    varPolearm16Gold = 160
    varPolearm16Iron = 33
    varPolearm16Wood = 6
    varPolearm16Leather = 0
    varPolearm16Selentine = 0
    varPolearm16Veilron = 0
    varPolearm16Neithal = 0
    varPolearm16Leenspar = 0
    varPolearm16Theyril = 0
    varPolearm16Stone = 0
    varPolearm16MenhirHeart = 0
    varPolearm16EmetLifeforce = 0
    varPolearm16Darkshard = 0

	//Imperial Halberd
    varPolearm17Quantity = document.getElementById("Polearm17Quantity").value;
    varPolearm17Price = document.getElementById("Polearm17Price").value;
    varPolearm17Success = document.getElementById("Polearm17Success").value;
    varPolearm17Gold = 160
    varPolearm17Iron = 28
    varPolearm17Wood = 11
    varPolearm17Leather = 0
    varPolearm17Selentine = 0
    varPolearm17Veilron = 0
    varPolearm17Neithal = 0
    varPolearm17Leenspar = 0
    varPolearm17Theyril = 0
    varPolearm17Stone = 0
    varPolearm17MenhirHeart = 0
    varPolearm17EmetLifeforce = 0
    varPolearm17Darkshard = 0

	//Guisarme
    varPolearm18Quantity = document.getElementById("Polearm18Quantity").value;
    varPolearm18Price = document.getElementById("Polearm18Price").value;
    varPolearm18Success = document.getElementById("Polearm18Success").value;
    varPolearm18Gold = 250
    varPolearm18Iron = 16
    varPolearm18Wood = 6
    varPolearm18Leather = 0
    varPolearm18Selentine = 0
    varPolearm18Veilron = 1
    varPolearm18Neithal = 0
    varPolearm18Leenspar = 0
    varPolearm18Theyril = 0
    varPolearm18Stone = 0
    varPolearm18MenhirHeart = 0
    varPolearm18EmetLifeforce = 0
    varPolearm18Darkshard = 0

	//Partisan
    varPolearm19Quantity = document.getElementById("Polearm19Quantity").value;
    varPolearm19Price = document.getElementById("Polearm19Price").value;
    varPolearm19Success = document.getElementById("Polearm19Success").value;
    varPolearm19Gold = 250
    varPolearm19Iron = 16
    varPolearm19Wood = 6
    varPolearm19Leather = 0
    varPolearm19Selentine = 0
    varPolearm19Veilron = 0
    varPolearm19Neithal = 1
    varPolearm19Leenspar = 0
    varPolearm19Theyril = 0
    varPolearm19Stone = 0
    varPolearm19MenhirHeart = 0
    varPolearm19EmetLifeforce = 0
    varPolearm19Darkshard = 0

	//Taelis
    varPolearm20Quantity = document.getElementById("Polearm20Quantity").value;
    varPolearm20Price = document.getElementById("Polearm20Price").value;
    varPolearm20Success = document.getElementById("Polearm20Success").value;
    varPolearm20Gold = 150
    varPolearm20Iron = 15
    varPolearm20Wood = 0
    varPolearm20Leather = 0
    varPolearm20Selentine = 0
    varPolearm20Veilron = 0
    varPolearm20Neithal = 0
    varPolearm20Leenspar = 0
    varPolearm20Theyril = 1
    varPolearm20Stone = 0
    varPolearm20MenhirHeart = 0
    varPolearm20EmetLifeforce = 0
    varPolearm20Darkshard = 0

	//Pole Hammer
    varPolearm21Quantity = document.getElementById("Polearm21Quantity").value;
    varPolearm21Price = document.getElementById("Polearm21Price").value;
    varPolearm21Success = document.getElementById("Polearm21Success").value;
    varPolearm21Gold = 600
    varPolearm21Iron = 36
    varPolearm21Wood = 6
    varPolearm21Leather = 6
    varPolearm21Selentine = 0
    varPolearm21Veilron = 0
    varPolearm21Neithal = 0
    varPolearm21Leenspar = 0
    varPolearm21Theyril = 2
    varPolearm21Stone = 0
    varPolearm21MenhirHeart = 0
    varPolearm21EmetLifeforce = 0
    varPolearm21Darkshard = 0

	//Ripper
    varPolearm22Quantity = document.getElementById("Polearm22Quantity").value;
    varPolearm22Price = document.getElementById("Polearm22Price").value;
    varPolearm22Success = document.getElementById("Polearm22Success").value;
    varPolearm22Gold = 400
    varPolearm22Iron = 33
    varPolearm22Wood = 0
    varPolearm22Leather = 0
    varPolearm22Selentine = 0
    varPolearm22Veilron = 1
    varPolearm22Neithal = 2
    varPolearm22Leenspar = 0
    varPolearm22Theyril = 0
    varPolearm22Stone = 0
    varPolearm22MenhirHeart = 0
    varPolearm22EmetLifeforce = 0
    varPolearm22Darkshard = 0

	//Spetum
    varPolearm23Quantity = document.getElementById("Polearm23Quantity").value;
    varPolearm23Price = document.getElementById("Polearm23Price").value;
    varPolearm23Success = document.getElementById("Polearm23Success").value;
    varPolearm23Gold = 300
    varPolearm23Iron = 20
    varPolearm23Wood = 5
    varPolearm23Leather = 0
    varPolearm23Selentine = 0
    varPolearm23Veilron = 0
    varPolearm23Neithal = 0
    varPolearm23Leenspar = 2
    varPolearm23Theyril = 1
    varPolearm23Stone = 0
    varPolearm23MenhirHeart = 0
    varPolearm23EmetLifeforce = 0
    varPolearm23Darkshard = 0

	//Veilcutter
    varPolearm24Quantity = document.getElementById("Polearm24Quantity").value;
    varPolearm24Price = document.getElementById("Polearm24Price").value;
    varPolearm24Success = document.getElementById("Polearm24Success").value;
    varPolearm24Gold = 10000
    varPolearm24Iron = 22
    varPolearm24Wood = 0
    varPolearm24Leather = 0
    varPolearm24Selentine = 4
    varPolearm24Veilron = 0
    varPolearm24Neithal = 0
    varPolearm24Leenspar = 4
    varPolearm24Theyril = 0
    varPolearm24Stone = 0
    varPolearm24MenhirHeart = 10
    varPolearm24EmetLifeforce = 0
    varPolearm24Darkshard = 0

	//Ilshard
    varPolearm25Quantity = document.getElementById("Polearm25Quantity").value;
    varPolearm25Price = document.getElementById("Polearm25Price").value;
    varPolearm25Success = document.getElementById("Polearm25Success").value;
    varPolearm25Gold = 10000
    varPolearm25Iron = 22
    varPolearm25Wood = 0
    varPolearm25Leather = 0
    varPolearm25Selentine = 0
    varPolearm25Veilron = 0
    varPolearm25Neithal = 10
    varPolearm25Leenspar = 0
    varPolearm25Theyril = 0
    varPolearm25Stone = 0
    varPolearm25MenhirHeart = 0
    varPolearm25EmetLifeforce = 5
    varPolearm25Darkshard = 3
}

/* SWORD */

//Used to reload items from Sword
function fnSwordReload()  // x= id, z= value
{
    fnSwordInitialize()

    fnSword()

    fnSwordTotal()
    fnReloadSwordPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnSwordSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varLeather = parseInt(d)
    varSelentine = parseInt(e)
    varVeilron = parseInt(f)
    varNeithal = parseInt(g)
    varLeenspar = parseInt(h)
    varTheyril = parseInt(i)
    varSuccess = parseInt(j)
    varStone = parseInt(k)
    varKoboldBone = parseInt(l)
    varGhoulHoarfrost = parseInt(m)
    varVitalQuintessence = parseInt(n)
    varFoulVenomSac = parseInt(o)
    varDeathFang = parseInt(p)
    varMoonstone = parseInt(q)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varLeather * varLeatherValue) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varStone * varStoneValue) + (varKoboldBone * varKoboldBoneValue) + (varGhoulHoarfrost * varGhoulHoarfrostValue) + (varVitalQuintessence * varVitalQuintessenceValue) + (varFoulVenomSac * varFoulVenomSacValue) + (varDeathFang * varDeathFangValue) + (varMoonstone * varMoonstoneValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Sword
function fnSwordTotal()
{
    varSwordTotal = ((varSword01Price * varSword01Quantity) + (varSword02Price * varSword02Quantity) + (varSword03Price * varSword03Quantity) + (varSword04Price * varSword04Quantity) + (varSword05Price * varSword05Quantity) + (varSword06Price * varSword06Quantity) + (varSword07Price * varSword07Quantity) + (varSword08Price * varSword08Quantity) + (varSword09Price * varSword09Quantity) + (varSword10Price * varSword10Quantity) + (varSword11Price * varSword11Quantity) + (varSword12Price * varSword12Quantity) + (varSword13Price * varSword13Quantity) + (varSword14Price * varSword14Quantity) + (varSword15Price * varSword15Quantity) + (varSword16Price * varSword16Quantity) + (varSword17Price * varSword17Quantity) + (varSword18Price * varSword18Quantity) + (varSword19Price * varSword19Quantity) + (varSword20Price * varSword20Quantity) + (varSword21Price * varSword21Quantity) + (varSword22Price * varSword22Quantity) + (varSword23Price * varSword23Quantity) + (varSword24Price * varSword24Quantity) + (varSword25Price * varSword25Quantity) + (varSword26Price * varSword26Quantity) + (varSword27Price * varSword27Quantity) + (varSword28Price * varSword28Quantity) + (varSword29Price * varSword29Quantity) + (varSword30Price * varSword30Quantity) + (varSword31Price * varSword31Quantity) + (varSword32Price * varSword32Quantity) + (varSword33Price * varSword33Quantity) + (varSword34Price * varSword34Quantity) + (varSword35Price * varSword35Quantity) + (varSword36Price * varSword36Quantity) + (varSword37Price * varSword37Quantity) + (varSword38Price * varSword38Quantity) + (varSword39Price * varSword39Quantity) + (varSword40Price * varSword40Quantity) + (varSword41Price * varSword41Quantity) + (varSword42Price * varSword42Quantity) + (varSword43Price * varSword43Quantity));
    varSwordGoldTotal = ((varSword01Gold * varSword01Quantity) + (varSword02Gold * varSword02Quantity) + (varSword03Gold * varSword03Quantity) + (varSword04Gold * varSword04Quantity) + (varSword05Gold * varSword05Quantity) + (varSword06Gold * varSword06Quantity) + (varSword07Gold * varSword07Quantity) + (varSword08Gold * varSword08Quantity) + (varSword09Gold * varSword09Quantity) + (varSword10Gold * varSword10Quantity) + (varSword11Gold * varSword11Quantity) + (varSword12Gold * varSword12Quantity) + (varSword13Gold * varSword13Quantity) + (varSword14Gold * varSword14Quantity) + (varSword15Gold * varSword15Quantity) + (varSword16Gold * varSword16Quantity) + (varSword17Gold * varSword17Quantity) + (varSword18Gold * varSword18Quantity) + (varSword19Gold * varSword19Quantity) + (varSword20Gold * varSword20Quantity) + (varSword21Gold * varSword21Quantity) + (varSword22Gold * varSword22Quantity) + (varSword23Gold * varSword23Quantity) + (varSword24Gold * varSword24Quantity) + (varSword25Gold * varSword25Quantity) + (varSword26Gold * varSword26Quantity) + (varSword27Gold * varSword27Quantity) + (varSword28Gold * varSword28Quantity) + (varSword29Gold * varSword29Quantity) + (varSword30Gold * varSword30Quantity) + (varSword31Gold * varSword31Quantity) + (varSword32Gold * varSword32Quantity) + (varSword33Gold * varSword33Quantity) + (varSword34Gold * varSword34Quantity) + (varSword35Gold * varSword35Quantity) + (varSword36Gold * varSword36Quantity) + (varSword37Gold * varSword37Quantity) + (varSword38Gold * varSword38Quantity) + (varSword39Gold * varSword39Quantity) + (varSword40Gold * varSword40Quantity) + (varSword41Gold * varSword41Quantity) + (varSword42Gold * varSword42Quantity) + (varSword43Gold * varSword43Quantity));
    varSwordIronTotal = ((varSword01Iron * varSword01Quantity) + (varSword02Iron * varSword02Quantity) + (varSword03Iron * varSword03Quantity) + (varSword04Iron * varSword04Quantity) + (varSword05Iron * varSword05Quantity) + (varSword06Iron * varSword06Quantity) + (varSword07Iron * varSword07Quantity) + (varSword08Iron * varSword08Quantity) + (varSword09Iron * varSword09Quantity) + (varSword10Iron * varSword10Quantity) + (varSword11Iron * varSword11Quantity) + (varSword12Iron * varSword12Quantity) + (varSword13Iron * varSword13Quantity) + (varSword14Iron * varSword14Quantity) + (varSword15Iron * varSword15Quantity) + (varSword16Iron * varSword16Quantity) + (varSword17Iron * varSword17Quantity) + (varSword18Iron * varSword18Quantity) + (varSword19Iron * varSword19Quantity) + (varSword20Iron * varSword20Quantity) + (varSword21Iron * varSword21Quantity) + (varSword22Iron * varSword22Quantity) + (varSword23Iron * varSword23Quantity) + (varSword24Iron * varSword24Quantity) + (varSword25Iron * varSword25Quantity) + (varSword26Iron * varSword26Quantity) + (varSword27Iron * varSword27Quantity) + (varSword28Iron * varSword28Quantity) + (varSword29Iron * varSword29Quantity) + (varSword30Iron * varSword30Quantity) + (varSword31Iron * varSword31Quantity) + (varSword32Iron * varSword32Quantity) + (varSword33Iron * varSword33Quantity) + (varSword34Iron * varSword34Quantity) + (varSword35Iron * varSword35Quantity) + (varSword36Iron * varSword36Quantity) + (varSword37Iron * varSword37Quantity) + (varSword38Iron * varSword38Quantity) + (varSword39Iron * varSword39Quantity) + (varSword40Iron * varSword40Quantity) + (varSword41Iron * varSword41Quantity) + (varSword42Iron * varSword42Quantity) + (varSword43Iron * varSword43Quantity));
    varSwordWoodTotal = ((varSword01Wood * varSword01Quantity) + (varSword02Wood * varSword02Quantity) + (varSword03Wood * varSword03Quantity) + (varSword04Wood * varSword04Quantity) + (varSword05Wood * varSword05Quantity) + (varSword06Wood * varSword06Quantity) + (varSword07Wood * varSword07Quantity) + (varSword08Wood * varSword08Quantity) + (varSword09Wood * varSword09Quantity) + (varSword10Wood * varSword10Quantity) + (varSword11Wood * varSword11Quantity) + (varSword12Wood * varSword12Quantity) + (varSword13Wood * varSword13Quantity) + (varSword14Wood * varSword14Quantity) + (varSword15Wood * varSword15Quantity) + (varSword16Wood * varSword16Quantity) + (varSword17Wood * varSword17Quantity) + (varSword18Wood * varSword18Quantity) + (varSword19Wood * varSword19Quantity) + (varSword20Wood * varSword20Quantity) + (varSword21Wood * varSword21Quantity) + (varSword22Wood * varSword22Quantity) + (varSword23Wood * varSword23Quantity) + (varSword24Wood * varSword24Quantity) + (varSword25Wood * varSword25Quantity) + (varSword26Wood * varSword26Quantity) + (varSword27Wood * varSword27Quantity) + (varSword28Wood * varSword28Quantity) + (varSword29Wood * varSword29Quantity) + (varSword30Wood * varSword30Quantity) + (varSword31Wood * varSword31Quantity) + (varSword32Wood * varSword32Quantity) + (varSword33Wood * varSword33Quantity) + (varSword34Wood * varSword34Quantity) + (varSword35Wood * varSword35Quantity) + (varSword36Wood * varSword36Quantity) + (varSword37Wood * varSword37Quantity) + (varSword38Wood * varSword38Quantity) + (varSword39Wood * varSword39Quantity) + (varSword40Wood * varSword40Quantity) + (varSword41Wood * varSword41Quantity) + (varSword42Wood * varSword42Quantity) + (varSword43Wood * varSword43Quantity));
    varSwordLeatherTotal = ((varSword01Leather * varSword01Quantity) + (varSword02Leather * varSword02Quantity) + (varSword03Leather * varSword03Quantity) + (varSword04Leather * varSword04Quantity) + (varSword05Leather * varSword05Quantity) + (varSword06Leather * varSword06Quantity) + (varSword07Leather * varSword07Quantity) + (varSword08Leather * varSword08Quantity) + (varSword09Leather * varSword09Quantity) + (varSword10Leather * varSword10Quantity) + (varSword11Leather * varSword11Quantity) + (varSword12Leather * varSword12Quantity) + (varSword13Leather * varSword13Quantity) + (varSword14Leather * varSword14Quantity) + (varSword15Leather * varSword15Quantity) + (varSword16Leather * varSword16Quantity) + (varSword17Leather * varSword17Quantity) + (varSword18Leather * varSword18Quantity) + (varSword19Leather * varSword19Quantity) + (varSword20Leather * varSword20Quantity) + (varSword21Leather * varSword21Quantity) + (varSword22Leather * varSword22Quantity) + (varSword23Leather * varSword23Quantity) + (varSword24Leather * varSword24Quantity) + (varSword25Leather * varSword25Quantity) + (varSword26Leather * varSword26Quantity) + (varSword27Leather * varSword27Quantity) + (varSword28Leather * varSword28Quantity) + (varSword29Leather * varSword29Quantity) + (varSword30Leather * varSword30Quantity) + (varSword31Leather * varSword31Quantity) + (varSword32Leather * varSword32Quantity) + (varSword33Leather * varSword33Quantity) + (varSword34Leather * varSword34Quantity) + (varSword35Leather * varSword35Quantity) + (varSword36Leather * varSword36Quantity) + (varSword37Leather * varSword37Quantity) + (varSword38Leather * varSword38Quantity) + (varSword39Leather * varSword39Quantity) + (varSword40Leather * varSword40Quantity) + (varSword41Leather * varSword41Quantity) + (varSword42Leather * varSword42Quantity) + (varSword43Leather * varSword43Quantity));
    varSwordSelentineTotal = ((varSword01Selentine * varSword01Quantity) + (varSword02Selentine * varSword02Quantity) + (varSword03Selentine * varSword03Quantity) + (varSword04Selentine * varSword04Quantity) + (varSword05Selentine * varSword05Quantity) + (varSword06Selentine * varSword06Quantity) + (varSword07Selentine * varSword07Quantity) + (varSword08Selentine * varSword08Quantity) + (varSword09Selentine * varSword09Quantity) + (varSword10Selentine * varSword10Quantity) + (varSword11Selentine * varSword11Quantity) + (varSword12Selentine * varSword12Quantity) + (varSword13Selentine * varSword13Quantity) + (varSword14Selentine * varSword14Quantity) + (varSword15Selentine * varSword15Quantity) + (varSword16Selentine * varSword16Quantity) + (varSword17Selentine * varSword17Quantity) + (varSword18Selentine * varSword18Quantity) + (varSword19Selentine * varSword19Quantity) + (varSword20Selentine * varSword20Quantity) + (varSword21Selentine * varSword21Quantity) + (varSword22Selentine * varSword22Quantity) + (varSword23Selentine * varSword23Quantity) + (varSword24Selentine * varSword24Quantity) + (varSword25Selentine * varSword25Quantity) + (varSword26Selentine * varSword26Quantity) + (varSword27Selentine * varSword27Quantity) + (varSword28Selentine * varSword28Quantity) + (varSword29Selentine * varSword29Quantity) + (varSword30Selentine * varSword30Quantity) + (varSword31Selentine * varSword31Quantity) + (varSword32Selentine * varSword32Quantity) + (varSword33Selentine * varSword33Quantity) + (varSword34Selentine * varSword34Quantity) + (varSword35Selentine * varSword35Quantity) + (varSword36Selentine * varSword36Quantity) + (varSword37Selentine * varSword37Quantity) + (varSword38Selentine * varSword38Quantity) + (varSword39Selentine * varSword39Quantity) + (varSword40Selentine * varSword40Quantity) + (varSword41Selentine * varSword41Quantity) + (varSword42Selentine * varSword42Quantity) + (varSword43Selentine * varSword43Quantity));
    varSwordVeilronTotal = ((varSword01Veilron * varSword01Quantity) + (varSword02Veilron * varSword02Quantity) + (varSword03Veilron * varSword03Quantity) + (varSword04Veilron * varSword04Quantity) + (varSword05Veilron * varSword05Quantity) + (varSword06Veilron * varSword06Quantity) + (varSword07Veilron * varSword07Quantity) + (varSword08Veilron * varSword08Quantity) + (varSword09Veilron * varSword09Quantity) + (varSword10Veilron * varSword10Quantity) + (varSword11Veilron * varSword11Quantity) + (varSword12Veilron * varSword12Quantity) + (varSword13Veilron * varSword13Quantity) + (varSword14Veilron * varSword14Quantity) + (varSword15Veilron * varSword15Quantity) + (varSword16Veilron * varSword16Quantity) + (varSword17Veilron * varSword17Quantity) + (varSword18Veilron * varSword18Quantity) + (varSword19Veilron * varSword19Quantity) + (varSword20Veilron * varSword20Quantity) + (varSword21Veilron * varSword21Quantity) + (varSword22Veilron * varSword22Quantity) + (varSword23Veilron * varSword23Quantity) + (varSword24Veilron * varSword24Quantity) + (varSword25Veilron * varSword25Quantity) + (varSword26Veilron * varSword26Quantity) + (varSword27Veilron * varSword27Quantity) + (varSword28Veilron * varSword28Quantity) + (varSword29Veilron * varSword29Quantity) + (varSword30Veilron * varSword30Quantity) + (varSword31Veilron * varSword31Quantity) + (varSword32Veilron * varSword32Quantity) + (varSword33Veilron * varSword33Quantity) + (varSword34Veilron * varSword34Quantity) + (varSword35Veilron * varSword35Quantity) + (varSword36Veilron * varSword36Quantity) + (varSword37Veilron * varSword37Quantity) + (varSword38Veilron * varSword38Quantity) + (varSword39Veilron * varSword39Quantity) + (varSword40Veilron * varSword40Quantity) + (varSword41Veilron * varSword41Quantity) + (varSword42Veilron * varSword42Quantity) + (varSword43Veilron * varSword43Quantity));
    varSwordNeithalTotal = ((varSword01Neithal * varSword01Quantity) + (varSword02Neithal * varSword02Quantity) + (varSword03Neithal * varSword03Quantity) + (varSword04Neithal * varSword04Quantity) + (varSword05Neithal * varSword05Quantity) + (varSword06Neithal * varSword06Quantity) + (varSword07Neithal * varSword07Quantity) + (varSword08Neithal * varSword08Quantity) + (varSword09Neithal * varSword09Quantity) + (varSword10Neithal * varSword10Quantity) + (varSword11Neithal * varSword11Quantity) + (varSword12Neithal * varSword12Quantity) + (varSword13Neithal * varSword13Quantity) + (varSword14Neithal * varSword14Quantity) + (varSword15Neithal * varSword15Quantity) + (varSword16Neithal * varSword16Quantity) + (varSword17Neithal * varSword17Quantity) + (varSword18Neithal * varSword18Quantity) + (varSword19Neithal * varSword19Quantity) + (varSword20Neithal * varSword20Quantity) + (varSword21Neithal * varSword21Quantity) + (varSword22Neithal * varSword22Quantity) + (varSword23Neithal * varSword23Quantity) + (varSword24Neithal * varSword24Quantity) + (varSword25Neithal * varSword25Quantity) + (varSword26Neithal * varSword26Quantity) + (varSword27Neithal * varSword27Quantity) + (varSword28Neithal * varSword28Quantity) + (varSword29Neithal * varSword29Quantity) + (varSword30Neithal * varSword30Quantity) + (varSword31Neithal * varSword31Quantity) + (varSword32Neithal * varSword32Quantity) + (varSword33Neithal * varSword33Quantity) + (varSword34Neithal * varSword34Quantity) + (varSword35Neithal * varSword35Quantity) + (varSword36Neithal * varSword36Quantity) + (varSword37Neithal * varSword37Quantity) + (varSword38Neithal * varSword38Quantity) + (varSword39Neithal * varSword39Quantity) + (varSword40Neithal * varSword40Quantity) + (varSword41Neithal * varSword41Quantity) + (varSword42Neithal * varSword42Quantity) + (varSword43Neithal * varSword43Quantity));
    varSwordLeensparTotal = ((varSword01Leenspar * varSword01Quantity) + (varSword02Leenspar * varSword02Quantity) + (varSword03Leenspar * varSword03Quantity) + (varSword04Leenspar * varSword04Quantity) + (varSword05Leenspar * varSword05Quantity) + (varSword06Leenspar * varSword06Quantity) + (varSword07Leenspar * varSword07Quantity) + (varSword08Leenspar * varSword08Quantity) + (varSword09Leenspar * varSword09Quantity) + (varSword10Leenspar * varSword10Quantity) + (varSword11Leenspar * varSword11Quantity) + (varSword12Leenspar * varSword12Quantity) + (varSword13Leenspar * varSword13Quantity) + (varSword14Leenspar * varSword14Quantity) + (varSword15Leenspar * varSword15Quantity) + (varSword16Leenspar * varSword16Quantity) + (varSword17Leenspar * varSword17Quantity) + (varSword18Leenspar * varSword18Quantity) + (varSword19Leenspar * varSword19Quantity) + (varSword20Leenspar * varSword20Quantity) + (varSword21Leenspar * varSword21Quantity) + (varSword22Leenspar * varSword22Quantity) + (varSword23Leenspar * varSword23Quantity) + (varSword24Leenspar * varSword24Quantity) + (varSword25Leenspar * varSword25Quantity) + (varSword26Leenspar * varSword26Quantity) + (varSword27Leenspar * varSword27Quantity) + (varSword28Leenspar * varSword28Quantity) + (varSword29Leenspar * varSword29Quantity) + (varSword30Leenspar * varSword30Quantity) + (varSword31Leenspar * varSword31Quantity) + (varSword32Leenspar * varSword32Quantity) + (varSword33Leenspar * varSword33Quantity) + (varSword34Leenspar * varSword34Quantity) + (varSword35Leenspar * varSword35Quantity) + (varSword36Leenspar * varSword36Quantity) + (varSword37Leenspar * varSword37Quantity) + (varSword38Leenspar * varSword38Quantity) + (varSword39Leenspar * varSword39Quantity) + (varSword40Leenspar * varSword40Quantity) + (varSword41Leenspar * varSword41Quantity) + (varSword42Leenspar * varSword42Quantity) + (varSword43Leenspar * varSword43Quantity));
    varSwordTheyrilTotal = ((varSword01Theyril * varSword01Quantity) + (varSword02Theyril * varSword02Quantity) + (varSword03Theyril * varSword03Quantity) + (varSword04Theyril * varSword04Quantity) + (varSword05Theyril * varSword05Quantity) + (varSword06Theyril * varSword06Quantity) + (varSword07Theyril * varSword07Quantity) + (varSword08Theyril * varSword08Quantity) + (varSword09Theyril * varSword09Quantity) + (varSword10Theyril * varSword10Quantity) + (varSword11Theyril * varSword11Quantity) + (varSword12Theyril * varSword12Quantity) + (varSword13Theyril * varSword13Quantity) + (varSword14Theyril * varSword14Quantity) + (varSword15Theyril * varSword15Quantity) + (varSword16Theyril * varSword16Quantity) + (varSword17Theyril * varSword17Quantity) + (varSword18Theyril * varSword18Quantity) + (varSword19Theyril * varSword19Quantity) + (varSword20Theyril * varSword20Quantity) + (varSword21Theyril * varSword21Quantity) + (varSword22Theyril * varSword22Quantity) + (varSword23Theyril * varSword23Quantity) + (varSword24Theyril * varSword24Quantity) + (varSword25Theyril * varSword25Quantity) + (varSword26Theyril * varSword26Quantity) + (varSword27Theyril * varSword27Quantity) + (varSword28Theyril * varSword28Quantity) + (varSword29Theyril * varSword29Quantity) + (varSword30Theyril * varSword30Quantity) + (varSword31Theyril * varSword31Quantity) + (varSword32Theyril * varSword32Quantity) + (varSword33Theyril * varSword33Quantity) + (varSword34Theyril * varSword34Quantity) + (varSword35Theyril * varSword35Quantity) + (varSword36Theyril * varSword36Quantity) + (varSword37Theyril * varSword37Quantity) + (varSword38Theyril * varSword38Quantity) + (varSword39Theyril * varSword39Quantity) + (varSword40Theyril * varSword40Quantity) + (varSword41Theyril * varSword41Quantity) + (varSword42Theyril * varSword42Quantity) + (varSword43Theyril * varSword43Quantity));
    varSwordStoneTotal = ((varSword01Stone * varSword01Quantity) + (varSword02Stone * varSword02Quantity) + (varSword03Stone * varSword03Quantity) + (varSword04Stone * varSword04Quantity) + (varSword05Stone * varSword05Quantity) + (varSword06Stone * varSword06Quantity) + (varSword07Stone * varSword07Quantity) + (varSword08Stone * varSword08Quantity) + (varSword09Stone * varSword09Quantity) + (varSword10Stone * varSword10Quantity) + (varSword11Stone * varSword11Quantity) + (varSword12Stone * varSword12Quantity) + (varSword13Stone * varSword13Quantity) + (varSword14Stone * varSword14Quantity) + (varSword15Stone * varSword15Quantity) + (varSword16Stone * varSword16Quantity) + (varSword17Stone * varSword17Quantity) + (varSword18Stone * varSword18Quantity) + (varSword19Stone * varSword19Quantity) + (varSword20Stone * varSword20Quantity) + (varSword21Stone * varSword21Quantity) + (varSword22Stone * varSword22Quantity) + (varSword23Stone * varSword23Quantity) + (varSword24Stone * varSword24Quantity) + (varSword25Stone * varSword25Quantity) + (varSword26Stone * varSword26Quantity) + (varSword27Stone * varSword27Quantity) + (varSword28Stone * varSword28Quantity) + (varSword29Stone * varSword29Quantity) + (varSword30Stone * varSword30Quantity) + (varSword31Stone * varSword31Quantity) + (varSword32Stone * varSword32Quantity) + (varSword33Stone * varSword33Quantity) + (varSword34Stone * varSword34Quantity) + (varSword35Stone * varSword35Quantity) + (varSword36Stone * varSword36Quantity) + (varSword37Stone * varSword37Quantity) + (varSword38Stone * varSword38Quantity) + (varSword39Stone * varSword39Quantity) + (varSword40Stone * varSword40Quantity) + (varSword41Stone * varSword41Quantity) + (varSword42Stone * varSword42Quantity) + (varSword43Stone * varSword43Quantity));
    varSwordKoboldBoneTotal = ((varSword01KoboldBone * varSword01Quantity) + (varSword02KoboldBone * varSword02Quantity) + (varSword03KoboldBone * varSword03Quantity) + (varSword04KoboldBone * varSword04Quantity) + (varSword05KoboldBone * varSword05Quantity) + (varSword06KoboldBone * varSword06Quantity) + (varSword07KoboldBone * varSword07Quantity) + (varSword08KoboldBone * varSword08Quantity) + (varSword09KoboldBone * varSword09Quantity) + (varSword10KoboldBone * varSword10Quantity) + (varSword11KoboldBone * varSword11Quantity) + (varSword12KoboldBone * varSword12Quantity) + (varSword13KoboldBone * varSword13Quantity) + (varSword14KoboldBone * varSword14Quantity) + (varSword15KoboldBone * varSword15Quantity) + (varSword16KoboldBone * varSword16Quantity) + (varSword17KoboldBone * varSword17Quantity) + (varSword18KoboldBone * varSword18Quantity) + (varSword19KoboldBone * varSword19Quantity) + (varSword20KoboldBone * varSword20Quantity) + (varSword21KoboldBone * varSword21Quantity) + (varSword22KoboldBone * varSword22Quantity) + (varSword23KoboldBone * varSword23Quantity) + (varSword24KoboldBone * varSword24Quantity) + (varSword25KoboldBone * varSword25Quantity) + (varSword26KoboldBone * varSword26Quantity) + (varSword27KoboldBone * varSword27Quantity) + (varSword28KoboldBone * varSword28Quantity) + (varSword29KoboldBone * varSword29Quantity) + (varSword30KoboldBone * varSword30Quantity) + (varSword31KoboldBone * varSword31Quantity) + (varSword32KoboldBone * varSword32Quantity) + (varSword33KoboldBone * varSword33Quantity) + (varSword34KoboldBone * varSword34Quantity) + (varSword35KoboldBone * varSword35Quantity) + (varSword36KoboldBone * varSword36Quantity) + (varSword37KoboldBone * varSword37Quantity) + (varSword38KoboldBone * varSword38Quantity) + (varSword39KoboldBone * varSword39Quantity) + (varSword40KoboldBone * varSword40Quantity) + (varSword41KoboldBone * varSword41Quantity) + (varSword42KoboldBone * varSword42Quantity) + (varSword43KoboldBone * varSword43Quantity));
    varSwordGhoulHoarfrostTotal = ((varSword01GhoulHoarfrost * varSword01Quantity) + (varSword02GhoulHoarfrost * varSword02Quantity) + (varSword03GhoulHoarfrost * varSword03Quantity) + (varSword04GhoulHoarfrost * varSword04Quantity) + (varSword05GhoulHoarfrost * varSword05Quantity) + (varSword06GhoulHoarfrost * varSword06Quantity) + (varSword07GhoulHoarfrost * varSword07Quantity) + (varSword08GhoulHoarfrost * varSword08Quantity) + (varSword09GhoulHoarfrost * varSword09Quantity) + (varSword10GhoulHoarfrost * varSword10Quantity) + (varSword11GhoulHoarfrost * varSword11Quantity) + (varSword12GhoulHoarfrost * varSword12Quantity) + (varSword13GhoulHoarfrost * varSword13Quantity) + (varSword14GhoulHoarfrost * varSword14Quantity) + (varSword15GhoulHoarfrost * varSword15Quantity) + (varSword16GhoulHoarfrost * varSword16Quantity) + (varSword17GhoulHoarfrost * varSword17Quantity) + (varSword18GhoulHoarfrost * varSword18Quantity) + (varSword19GhoulHoarfrost * varSword19Quantity) + (varSword20GhoulHoarfrost * varSword20Quantity) + (varSword21GhoulHoarfrost * varSword21Quantity) + (varSword22GhoulHoarfrost * varSword22Quantity) + (varSword23GhoulHoarfrost * varSword23Quantity) + (varSword24GhoulHoarfrost * varSword24Quantity) + (varSword25GhoulHoarfrost * varSword25Quantity) + (varSword26GhoulHoarfrost * varSword26Quantity) + (varSword27GhoulHoarfrost * varSword27Quantity) + (varSword28GhoulHoarfrost * varSword28Quantity) + (varSword29GhoulHoarfrost * varSword29Quantity) + (varSword30GhoulHoarfrost * varSword30Quantity) + (varSword31GhoulHoarfrost * varSword31Quantity) + (varSword32GhoulHoarfrost * varSword32Quantity) + (varSword33GhoulHoarfrost * varSword33Quantity) + (varSword34GhoulHoarfrost * varSword34Quantity) + (varSword35GhoulHoarfrost * varSword35Quantity) + (varSword36GhoulHoarfrost * varSword36Quantity) + (varSword37GhoulHoarfrost * varSword37Quantity) + (varSword38GhoulHoarfrost * varSword38Quantity) + (varSword39GhoulHoarfrost * varSword39Quantity) + (varSword40GhoulHoarfrost * varSword40Quantity) + (varSword41GhoulHoarfrost * varSword41Quantity) + (varSword42GhoulHoarfrost * varSword42Quantity) + (varSword43GhoulHoarfrost * varSword43Quantity));
    varSwordVitalQuintessenceTotal = ((varSword01VitalQuintessence * varSword01Quantity) + (varSword02VitalQuintessence * varSword02Quantity) + (varSword03VitalQuintessence * varSword03Quantity) + (varSword04VitalQuintessence * varSword04Quantity) + (varSword05VitalQuintessence * varSword05Quantity) + (varSword06VitalQuintessence * varSword06Quantity) + (varSword07VitalQuintessence * varSword07Quantity) + (varSword08VitalQuintessence * varSword08Quantity) + (varSword09VitalQuintessence * varSword09Quantity) + (varSword10VitalQuintessence * varSword10Quantity) + (varSword11VitalQuintessence * varSword11Quantity) + (varSword12VitalQuintessence * varSword12Quantity) + (varSword13VitalQuintessence * varSword13Quantity) + (varSword14VitalQuintessence * varSword14Quantity) + (varSword15VitalQuintessence * varSword15Quantity) + (varSword16VitalQuintessence * varSword16Quantity) + (varSword17VitalQuintessence * varSword17Quantity) + (varSword18VitalQuintessence * varSword18Quantity) + (varSword19VitalQuintessence * varSword19Quantity) + (varSword20VitalQuintessence * varSword20Quantity) + (varSword21VitalQuintessence * varSword21Quantity) + (varSword22VitalQuintessence * varSword22Quantity) + (varSword23VitalQuintessence * varSword23Quantity) + (varSword24VitalQuintessence * varSword24Quantity) + (varSword25VitalQuintessence * varSword25Quantity) + (varSword26VitalQuintessence * varSword26Quantity) + (varSword27VitalQuintessence * varSword27Quantity) + (varSword28VitalQuintessence * varSword28Quantity) + (varSword29VitalQuintessence * varSword29Quantity) + (varSword30VitalQuintessence * varSword30Quantity) + (varSword31VitalQuintessence * varSword31Quantity) + (varSword32VitalQuintessence * varSword32Quantity) + (varSword33VitalQuintessence * varSword33Quantity) + (varSword34VitalQuintessence * varSword34Quantity) + (varSword35VitalQuintessence * varSword35Quantity) + (varSword36VitalQuintessence * varSword36Quantity) + (varSword37VitalQuintessence * varSword37Quantity) + (varSword38VitalQuintessence * varSword38Quantity) + (varSword39VitalQuintessence * varSword39Quantity) + (varSword40VitalQuintessence * varSword40Quantity) + (varSword41VitalQuintessence * varSword41Quantity) + (varSword42VitalQuintessence * varSword42Quantity) + (varSword43VitalQuintessence * varSword43Quantity));
    varSwordFoulVenomSacTotal = ((varSword01FoulVenomSac * varSword01Quantity) + (varSword02FoulVenomSac * varSword02Quantity) + (varSword03FoulVenomSac * varSword03Quantity) + (varSword04FoulVenomSac * varSword04Quantity) + (varSword05FoulVenomSac * varSword05Quantity) + (varSword06FoulVenomSac * varSword06Quantity) + (varSword07FoulVenomSac * varSword07Quantity) + (varSword08FoulVenomSac * varSword08Quantity) + (varSword09FoulVenomSac * varSword09Quantity) + (varSword10FoulVenomSac * varSword10Quantity) + (varSword11FoulVenomSac * varSword11Quantity) + (varSword12FoulVenomSac * varSword12Quantity) + (varSword13FoulVenomSac * varSword13Quantity) + (varSword14FoulVenomSac * varSword14Quantity) + (varSword15FoulVenomSac * varSword15Quantity) + (varSword16FoulVenomSac * varSword16Quantity) + (varSword17FoulVenomSac * varSword17Quantity) + (varSword18FoulVenomSac * varSword18Quantity) + (varSword19FoulVenomSac * varSword19Quantity) + (varSword20FoulVenomSac * varSword20Quantity) + (varSword21FoulVenomSac * varSword21Quantity) + (varSword22FoulVenomSac * varSword22Quantity) + (varSword23FoulVenomSac * varSword23Quantity) + (varSword24FoulVenomSac * varSword24Quantity) + (varSword25FoulVenomSac * varSword25Quantity) + (varSword26FoulVenomSac * varSword26Quantity) + (varSword27FoulVenomSac * varSword27Quantity) + (varSword28FoulVenomSac * varSword28Quantity) + (varSword29FoulVenomSac * varSword29Quantity) + (varSword30FoulVenomSac * varSword30Quantity) + (varSword31FoulVenomSac * varSword31Quantity) + (varSword32FoulVenomSac * varSword32Quantity) + (varSword33FoulVenomSac * varSword33Quantity) + (varSword34FoulVenomSac * varSword34Quantity) + (varSword35FoulVenomSac * varSword35Quantity) + (varSword36FoulVenomSac * varSword36Quantity) + (varSword37FoulVenomSac * varSword37Quantity) + (varSword38FoulVenomSac * varSword38Quantity) + (varSword39FoulVenomSac * varSword39Quantity) + (varSword40FoulVenomSac * varSword40Quantity) + (varSword41FoulVenomSac * varSword41Quantity) + (varSword42FoulVenomSac * varSword42Quantity) + (varSword43FoulVenomSac * varSword43Quantity));
    varSwordDeathFangTotal = ((varSword01DeathFang * varSword01Quantity) + (varSword02DeathFang * varSword02Quantity) + (varSword03DeathFang * varSword03Quantity) + (varSword04DeathFang * varSword04Quantity) + (varSword05DeathFang * varSword05Quantity) + (varSword06DeathFang * varSword06Quantity) + (varSword07DeathFang * varSword07Quantity) + (varSword08DeathFang * varSword08Quantity) + (varSword09DeathFang * varSword09Quantity) + (varSword10DeathFang * varSword10Quantity) + (varSword11DeathFang * varSword11Quantity) + (varSword12DeathFang * varSword12Quantity) + (varSword13DeathFang * varSword13Quantity) + (varSword14DeathFang * varSword14Quantity) + (varSword15DeathFang * varSword15Quantity) + (varSword16DeathFang * varSword16Quantity) + (varSword17DeathFang * varSword17Quantity) + (varSword18DeathFang * varSword18Quantity) + (varSword19DeathFang * varSword19Quantity) + (varSword20DeathFang * varSword20Quantity) + (varSword21DeathFang * varSword21Quantity) + (varSword22DeathFang * varSword22Quantity) + (varSword23DeathFang * varSword23Quantity) + (varSword24DeathFang * varSword24Quantity) + (varSword25DeathFang * varSword25Quantity) + (varSword26DeathFang * varSword26Quantity) + (varSword27DeathFang * varSword27Quantity) + (varSword28DeathFang * varSword28Quantity) + (varSword29DeathFang * varSword29Quantity) + (varSword30DeathFang * varSword30Quantity) + (varSword31DeathFang * varSword31Quantity) + (varSword32DeathFang * varSword32Quantity) + (varSword33DeathFang * varSword33Quantity) + (varSword34DeathFang * varSword34Quantity) + (varSword35DeathFang * varSword35Quantity) + (varSword36DeathFang * varSword36Quantity) + (varSword37DeathFang * varSword37Quantity) + (varSword38DeathFang * varSword38Quantity) + (varSword39DeathFang * varSword39Quantity) + (varSword40DeathFang * varSword40Quantity) + (varSword41DeathFang * varSword41Quantity) + (varSword42DeathFang * varSword42Quantity) + (varSword43DeathFang * varSword43Quantity));
    varSwordMoonstoneTotal = ((varSword01Moonstone * varSword01Quantity) + (varSword02Moonstone * varSword02Quantity) + (varSword03Moonstone * varSword03Quantity) + (varSword04Moonstone * varSword04Quantity) + (varSword05Moonstone * varSword05Quantity) + (varSword06Moonstone * varSword06Quantity) + (varSword07Moonstone * varSword07Quantity) + (varSword08Moonstone * varSword08Quantity) + (varSword09Moonstone * varSword09Quantity) + (varSword10Moonstone * varSword10Quantity) + (varSword11Moonstone * varSword11Quantity) + (varSword12Moonstone * varSword12Quantity) + (varSword13Moonstone * varSword13Quantity) + (varSword14Moonstone * varSword14Quantity) + (varSword15Moonstone * varSword15Quantity) + (varSword16Moonstone * varSword16Quantity) + (varSword17Moonstone * varSword17Quantity) + (varSword18Moonstone * varSword18Quantity) + (varSword19Moonstone * varSword19Quantity) + (varSword20Moonstone * varSword20Quantity) + (varSword21Moonstone * varSword21Quantity) + (varSword22Moonstone * varSword22Quantity) + (varSword23Moonstone * varSword23Quantity) + (varSword24Moonstone * varSword24Quantity) + (varSword25Moonstone * varSword25Quantity) + (varSword26Moonstone * varSword26Quantity) + (varSword27Moonstone * varSword27Quantity) + (varSword28Moonstone * varSword28Quantity) + (varSword29Moonstone * varSword29Quantity) + (varSword30Moonstone * varSword30Quantity) + (varSword31Moonstone * varSword31Quantity) + (varSword32Moonstone * varSword32Quantity) + (varSword33Moonstone * varSword33Quantity) + (varSword34Moonstone * varSword34Quantity) + (varSword35Moonstone * varSword35Quantity) + (varSword36Moonstone * varSword36Quantity) + (varSword37Moonstone * varSword37Quantity) + (varSword38Moonstone * varSword38Quantity) + (varSword39Moonstone * varSword39Quantity) + (varSword40Moonstone * varSword40Quantity) + (varSword41Moonstone * varSword41Quantity) + (varSword42Moonstone * varSword42Quantity) + (varSword43Moonstone * varSword43Quantity));
}

//Sword Calculations
function fnSword()
{
    fnSwordSubPrice(varSword01Gold,varSword01Iron,varSword01Wood,varSword01Leather,varSword01Selentine,varSword01Veilron,varSword01Neithal,varSword01Leenspar,varSword01Theyril,varSword01Success,varSword01Stone,varSword01KoboldBone,varSword01GhoulHoarfrost,varSword01VitalQuintessence,varSword01FoulVenomSac,varSword01DeathFang,varSword01Moonstone)
    varSword01Price = varItemPrice;
    fnSwordSubPrice(varSword02Gold,varSword02Iron,varSword02Wood,varSword02Leather,varSword02Selentine,varSword02Veilron,varSword02Neithal,varSword02Leenspar,varSword02Theyril,varSword02Success,varSword02Stone,varSword02KoboldBone,varSword02GhoulHoarfrost,varSword02VitalQuintessence,varSword02FoulVenomSac,varSword02DeathFang,varSword02Moonstone)
    varSword02Price = varItemPrice;
    fnSwordSubPrice(varSword03Gold,varSword03Iron,varSword03Wood,varSword03Leather,varSword03Selentine,varSword03Veilron,varSword03Neithal,varSword03Leenspar,varSword03Theyril,varSword03Success,varSword03Stone,varSword03KoboldBone,varSword03GhoulHoarfrost,varSword03VitalQuintessence,varSword03FoulVenomSac,varSword03DeathFang,varSword03Moonstone)
    varSword03Price = varItemPrice;
    fnSwordSubPrice(varSword04Gold,varSword04Iron,varSword04Wood,varSword04Leather,varSword04Selentine,varSword04Veilron,varSword04Neithal,varSword04Leenspar,varSword04Theyril,varSword04Success,varSword04Stone,varSword04KoboldBone,varSword04GhoulHoarfrost,varSword04VitalQuintessence,varSword04FoulVenomSac,varSword04DeathFang,varSword04Moonstone)
    varSword04Price = varItemPrice;
    fnSwordSubPrice(varSword05Gold,varSword05Iron,varSword05Wood,varSword05Leather,varSword05Selentine,varSword05Veilron,varSword05Neithal,varSword05Leenspar,varSword05Theyril,varSword05Success,varSword05Stone,varSword05KoboldBone,varSword05GhoulHoarfrost,varSword05VitalQuintessence,varSword05FoulVenomSac,varSword05DeathFang,varSword05Moonstone)
    varSword05Price = varItemPrice;
    fnSwordSubPrice(varSword06Gold,varSword06Iron,varSword06Wood,varSword06Leather,varSword06Selentine,varSword06Veilron,varSword06Neithal,varSword06Leenspar,varSword06Theyril,varSword06Success,varSword06Stone,varSword06KoboldBone,varSword06GhoulHoarfrost,varSword06VitalQuintessence,varSword06FoulVenomSac,varSword06DeathFang,varSword06Moonstone)
    varSword06Price = varItemPrice;
    fnSwordSubPrice(varSword07Gold,varSword07Iron,varSword07Wood,varSword07Leather,varSword07Selentine,varSword07Veilron,varSword07Neithal,varSword07Leenspar,varSword07Theyril,varSword07Success,varSword07Stone,varSword07KoboldBone,varSword07GhoulHoarfrost,varSword07VitalQuintessence,varSword07FoulVenomSac,varSword07DeathFang,varSword07Moonstone)
    varSword07Price = varItemPrice;
    fnSwordSubPrice(varSword08Gold,varSword08Iron,varSword08Wood,varSword08Leather,varSword08Selentine,varSword08Veilron,varSword08Neithal,varSword08Leenspar,varSword08Theyril,varSword08Success,varSword08Stone,varSword08KoboldBone,varSword08GhoulHoarfrost,varSword08VitalQuintessence,varSword08FoulVenomSac,varSword08DeathFang,varSword08Moonstone)
    varSword08Price = varItemPrice;
    fnSwordSubPrice(varSword09Gold,varSword09Iron,varSword09Wood,varSword09Leather,varSword09Selentine,varSword09Veilron,varSword09Neithal,varSword09Leenspar,varSword09Theyril,varSword09Success,varSword09Stone,varSword09KoboldBone,varSword09GhoulHoarfrost,varSword09VitalQuintessence,varSword09FoulVenomSac,varSword09DeathFang,varSword09Moonstone)
    varSword09Price = varItemPrice;
    fnSwordSubPrice(varSword10Gold,varSword10Iron,varSword10Wood,varSword10Leather,varSword10Selentine,varSword10Veilron,varSword10Neithal,varSword10Leenspar,varSword10Theyril,varSword10Success,varSword10Stone,varSword10KoboldBone,varSword10GhoulHoarfrost,varSword10VitalQuintessence,varSword10FoulVenomSac,varSword10DeathFang,varSword10Moonstone)
    varSword10Price = varItemPrice;
    fnSwordSubPrice(varSword11Gold,varSword11Iron,varSword11Wood,varSword11Leather,varSword11Selentine,varSword11Veilron,varSword11Neithal,varSword11Leenspar,varSword11Theyril,varSword11Success,varSword11Stone,varSword11KoboldBone,varSword11GhoulHoarfrost,varSword11VitalQuintessence,varSword11FoulVenomSac,varSword11DeathFang,varSword11Moonstone)
    varSword11Price = varItemPrice;
    fnSwordSubPrice(varSword12Gold,varSword12Iron,varSword12Wood,varSword12Leather,varSword12Selentine,varSword12Veilron,varSword12Neithal,varSword12Leenspar,varSword12Theyril,varSword12Success,varSword12Stone,varSword12KoboldBone,varSword12GhoulHoarfrost,varSword12VitalQuintessence,varSword12FoulVenomSac,varSword12DeathFang,varSword12Moonstone)
    varSword12Price = varItemPrice;
    fnSwordSubPrice(varSword13Gold,varSword13Iron,varSword13Wood,varSword13Leather,varSword13Selentine,varSword13Veilron,varSword13Neithal,varSword13Leenspar,varSword13Theyril,varSword13Success,varSword13Stone,varSword13KoboldBone,varSword13GhoulHoarfrost,varSword13VitalQuintessence,varSword13FoulVenomSac,varSword13DeathFang,varSword13Moonstone)
    varSword13Price = varItemPrice;
    fnSwordSubPrice(varSword14Gold,varSword14Iron,varSword14Wood,varSword14Leather,varSword14Selentine,varSword14Veilron,varSword14Neithal,varSword14Leenspar,varSword14Theyril,varSword14Success,varSword14Stone,varSword14KoboldBone,varSword14GhoulHoarfrost,varSword14VitalQuintessence,varSword14FoulVenomSac,varSword14DeathFang,varSword14Moonstone)
    varSword14Price = varItemPrice;
    fnSwordSubPrice(varSword15Gold,varSword15Iron,varSword15Wood,varSword15Leather,varSword15Selentine,varSword15Veilron,varSword15Neithal,varSword15Leenspar,varSword15Theyril,varSword15Success,varSword15Stone,varSword15KoboldBone,varSword15GhoulHoarfrost,varSword15VitalQuintessence,varSword15FoulVenomSac,varSword15DeathFang,varSword15Moonstone)
    varSword15Price = varItemPrice;
    fnSwordSubPrice(varSword16Gold,varSword16Iron,varSword16Wood,varSword16Leather,varSword16Selentine,varSword16Veilron,varSword16Neithal,varSword16Leenspar,varSword16Theyril,varSword16Success,varSword16Stone,varSword16KoboldBone,varSword16GhoulHoarfrost,varSword16VitalQuintessence,varSword16FoulVenomSac,varSword16DeathFang,varSword16Moonstone)
    varSword16Price = varItemPrice;
    fnSwordSubPrice(varSword17Gold,varSword17Iron,varSword17Wood,varSword17Leather,varSword17Selentine,varSword17Veilron,varSword17Neithal,varSword17Leenspar,varSword17Theyril,varSword17Success,varSword17Stone,varSword17KoboldBone,varSword17GhoulHoarfrost,varSword17VitalQuintessence,varSword17FoulVenomSac,varSword17DeathFang,varSword17Moonstone)
    varSword17Price = varItemPrice;
    fnSwordSubPrice(varSword18Gold,varSword18Iron,varSword18Wood,varSword18Leather,varSword18Selentine,varSword18Veilron,varSword18Neithal,varSword18Leenspar,varSword18Theyril,varSword18Success,varSword18Stone,varSword18KoboldBone,varSword18GhoulHoarfrost,varSword18VitalQuintessence,varSword18FoulVenomSac,varSword18DeathFang,varSword18Moonstone)
    varSword18Price = varItemPrice;
    fnSwordSubPrice(varSword19Gold,varSword19Iron,varSword19Wood,varSword19Leather,varSword19Selentine,varSword19Veilron,varSword19Neithal,varSword19Leenspar,varSword19Theyril,varSword19Success,varSword19Stone,varSword19KoboldBone,varSword19GhoulHoarfrost,varSword19VitalQuintessence,varSword19FoulVenomSac,varSword19DeathFang,varSword19Moonstone)
    varSword19Price = varItemPrice;
    fnSwordSubPrice(varSword20Gold,varSword20Iron,varSword20Wood,varSword20Leather,varSword20Selentine,varSword20Veilron,varSword20Neithal,varSword20Leenspar,varSword20Theyril,varSword20Success,varSword20Stone,varSword20KoboldBone,varSword20GhoulHoarfrost,varSword20VitalQuintessence,varSword20FoulVenomSac,varSword20DeathFang,varSword20Moonstone)
    varSword20Price = varItemPrice;
    fnSwordSubPrice(varSword21Gold,varSword21Iron,varSword21Wood,varSword21Leather,varSword21Selentine,varSword21Veilron,varSword21Neithal,varSword21Leenspar,varSword21Theyril,varSword21Success,varSword21Stone,varSword21KoboldBone,varSword21GhoulHoarfrost,varSword21VitalQuintessence,varSword21FoulVenomSac,varSword21DeathFang,varSword21Moonstone)
    varSword21Price = varItemPrice;
    fnSwordSubPrice(varSword22Gold,varSword22Iron,varSword22Wood,varSword22Leather,varSword22Selentine,varSword22Veilron,varSword22Neithal,varSword22Leenspar,varSword22Theyril,varSword22Success,varSword22Stone,varSword22KoboldBone,varSword22GhoulHoarfrost,varSword22VitalQuintessence,varSword22FoulVenomSac,varSword22DeathFang,varSword22Moonstone)
    varSword22Price = varItemPrice;
    fnSwordSubPrice(varSword23Gold,varSword23Iron,varSword23Wood,varSword23Leather,varSword23Selentine,varSword23Veilron,varSword23Neithal,varSword23Leenspar,varSword23Theyril,varSword23Success,varSword23Stone,varSword23KoboldBone,varSword23GhoulHoarfrost,varSword23VitalQuintessence,varSword23FoulVenomSac,varSword23DeathFang,varSword23Moonstone)
    varSword23Price = varItemPrice;
    fnSwordSubPrice(varSword24Gold,varSword24Iron,varSword24Wood,varSword24Leather,varSword24Selentine,varSword24Veilron,varSword24Neithal,varSword24Leenspar,varSword24Theyril,varSword24Success,varSword24Stone,varSword24KoboldBone,varSword24GhoulHoarfrost,varSword24VitalQuintessence,varSword24FoulVenomSac,varSword24DeathFang,varSword24Moonstone)
    varSword24Price = varItemPrice;
    fnSwordSubPrice(varSword25Gold,varSword25Iron,varSword25Wood,varSword25Leather,varSword25Selentine,varSword25Veilron,varSword25Neithal,varSword25Leenspar,varSword25Theyril,varSword25Success,varSword25Stone,varSword25KoboldBone,varSword25GhoulHoarfrost,varSword25VitalQuintessence,varSword25FoulVenomSac,varSword25DeathFang,varSword25Moonstone)
    varSword25Price = varItemPrice;
    fnSwordSubPrice(varSword26Gold,varSword26Iron,varSword26Wood,varSword26Leather,varSword26Selentine,varSword26Veilron,varSword26Neithal,varSword26Leenspar,varSword26Theyril,varSword26Success,varSword26Stone,varSword26KoboldBone,varSword26GhoulHoarfrost,varSword26VitalQuintessence,varSword26FoulVenomSac,varSword26DeathFang,varSword26Moonstone)
    varSword26Price = varItemPrice;
    fnSwordSubPrice(varSword27Gold,varSword27Iron,varSword27Wood,varSword27Leather,varSword27Selentine,varSword27Veilron,varSword27Neithal,varSword27Leenspar,varSword27Theyril,varSword27Success,varSword27Stone,varSword27KoboldBone,varSword27GhoulHoarfrost,varSword27VitalQuintessence,varSword27FoulVenomSac,varSword27DeathFang,varSword27Moonstone)
    varSword27Price = varItemPrice;
    fnSwordSubPrice(varSword28Gold,varSword28Iron,varSword28Wood,varSword28Leather,varSword28Selentine,varSword28Veilron,varSword28Neithal,varSword28Leenspar,varSword28Theyril,varSword28Success,varSword28Stone,varSword28KoboldBone,varSword28GhoulHoarfrost,varSword28VitalQuintessence,varSword28FoulVenomSac,varSword28DeathFang,varSword28Moonstone)
    varSword28Price = varItemPrice;
    fnSwordSubPrice(varSword29Gold,varSword29Iron,varSword29Wood,varSword29Leather,varSword29Selentine,varSword29Veilron,varSword29Neithal,varSword29Leenspar,varSword29Theyril,varSword29Success,varSword29Stone,varSword29KoboldBone,varSword29GhoulHoarfrost,varSword29VitalQuintessence,varSword29FoulVenomSac,varSword29DeathFang,varSword29Moonstone)
    varSword29Price = varItemPrice;
    fnSwordSubPrice(varSword30Gold,varSword30Iron,varSword30Wood,varSword30Leather,varSword30Selentine,varSword30Veilron,varSword30Neithal,varSword30Leenspar,varSword30Theyril,varSword30Success,varSword30Stone,varSword30KoboldBone,varSword30GhoulHoarfrost,varSword30VitalQuintessence,varSword30FoulVenomSac,varSword30DeathFang,varSword30Moonstone)
    varSword30Price = varItemPrice;
    fnSwordSubPrice(varSword31Gold,varSword31Iron,varSword31Wood,varSword31Leather,varSword31Selentine,varSword31Veilron,varSword31Neithal,varSword31Leenspar,varSword31Theyril,varSword31Success,varSword31Stone,varSword31KoboldBone,varSword31GhoulHoarfrost,varSword31VitalQuintessence,varSword31FoulVenomSac,varSword31DeathFang,varSword31Moonstone)
    varSword31Price = varItemPrice;
    fnSwordSubPrice(varSword32Gold,varSword32Iron,varSword32Wood,varSword32Leather,varSword32Selentine,varSword32Veilron,varSword32Neithal,varSword32Leenspar,varSword32Theyril,varSword32Success,varSword32Stone,varSword32KoboldBone,varSword32GhoulHoarfrost,varSword32VitalQuintessence,varSword32FoulVenomSac,varSword32DeathFang,varSword32Moonstone)
    varSword32Price = varItemPrice;
    fnSwordSubPrice(varSword33Gold,varSword33Iron,varSword33Wood,varSword33Leather,varSword33Selentine,varSword33Veilron,varSword33Neithal,varSword33Leenspar,varSword33Theyril,varSword33Success,varSword33Stone,varSword33KoboldBone,varSword33GhoulHoarfrost,varSword33VitalQuintessence,varSword33FoulVenomSac,varSword33DeathFang,varSword33Moonstone)
    varSword33Price = varItemPrice;
    fnSwordSubPrice(varSword34Gold,varSword34Iron,varSword34Wood,varSword34Leather,varSword34Selentine,varSword34Veilron,varSword34Neithal,varSword34Leenspar,varSword34Theyril,varSword34Success,varSword34Stone,varSword34KoboldBone,varSword34GhoulHoarfrost,varSword34VitalQuintessence,varSword34FoulVenomSac,varSword34DeathFang,varSword34Moonstone)
    varSword34Price = varItemPrice;
    fnSwordSubPrice(varSword35Gold,varSword35Iron,varSword35Wood,varSword35Leather,varSword35Selentine,varSword35Veilron,varSword35Neithal,varSword35Leenspar,varSword35Theyril,varSword35Success,varSword35Stone,varSword35KoboldBone,varSword35GhoulHoarfrost,varSword35VitalQuintessence,varSword35FoulVenomSac,varSword35DeathFang,varSword35Moonstone)
    varSword35Price = varItemPrice;
    fnSwordSubPrice(varSword36Gold,varSword36Iron,varSword36Wood,varSword36Leather,varSword36Selentine,varSword36Veilron,varSword36Neithal,varSword36Leenspar,varSword36Theyril,varSword36Success,varSword36Stone,varSword36KoboldBone,varSword36GhoulHoarfrost,varSword36VitalQuintessence,varSword36FoulVenomSac,varSword36DeathFang,varSword36Moonstone)
    varSword36Price = varItemPrice;
    fnSwordSubPrice(varSword37Gold,varSword37Iron,varSword37Wood,varSword37Leather,varSword37Selentine,varSword37Veilron,varSword37Neithal,varSword37Leenspar,varSword37Theyril,varSword37Success,varSword37Stone,varSword37KoboldBone,varSword37GhoulHoarfrost,varSword37VitalQuintessence,varSword37FoulVenomSac,varSword37DeathFang,varSword37Moonstone)
    varSword37Price = varItemPrice;
    fnSwordSubPrice(varSword38Gold,varSword38Iron,varSword38Wood,varSword38Leather,varSword38Selentine,varSword38Veilron,varSword38Neithal,varSword38Leenspar,varSword38Theyril,varSword38Success,varSword38Stone,varSword38KoboldBone,varSword38GhoulHoarfrost,varSword38VitalQuintessence,varSword38FoulVenomSac,varSword38DeathFang,varSword38Moonstone)
    varSword38Price = varItemPrice;
    fnSwordSubPrice(varSword39Gold,varSword39Iron,varSword39Wood,varSword39Leather,varSword39Selentine,varSword39Veilron,varSword39Neithal,varSword39Leenspar,varSword39Theyril,varSword39Success,varSword39Stone,varSword39KoboldBone,varSword39GhoulHoarfrost,varSword39VitalQuintessence,varSword39FoulVenomSac,varSword39DeathFang,varSword39Moonstone)
    varSword39Price = varItemPrice;
    fnSwordSubPrice(varSword40Gold,varSword40Iron,varSword40Wood,varSword40Leather,varSword40Selentine,varSword40Veilron,varSword40Neithal,varSword40Leenspar,varSword40Theyril,varSword40Success,varSword40Stone,varSword40KoboldBone,varSword40GhoulHoarfrost,varSword40VitalQuintessence,varSword40FoulVenomSac,varSword40DeathFang,varSword40Moonstone)
    varSword40Price = varItemPrice;
    fnSwordSubPrice(varSword41Gold,varSword41Iron,varSword41Wood,varSword41Leather,varSword41Selentine,varSword41Veilron,varSword41Neithal,varSword41Leenspar,varSword41Theyril,varSword41Success,varSword41Stone,varSword41KoboldBone,varSword41GhoulHoarfrost,varSword41VitalQuintessence,varSword41FoulVenomSac,varSword41DeathFang,varSword41Moonstone)
    varSword41Price = varItemPrice;
    fnSwordSubPrice(varSword42Gold,varSword42Iron,varSword42Wood,varSword42Leather,varSword42Selentine,varSword42Veilron,varSword42Neithal,varSword42Leenspar,varSword42Theyril,varSword42Success,varSword42Stone,varSword42KoboldBone,varSword42GhoulHoarfrost,varSword42VitalQuintessence,varSword42FoulVenomSac,varSword42DeathFang,varSword42Moonstone)
    varSword42Price = varItemPrice;
    fnSwordSubPrice(varSword43Gold,varSword43Iron,varSword43Wood,varSword43Leather,varSword43Selentine,varSword43Veilron,varSword43Neithal,varSword43Leenspar,varSword43Theyril,varSword43Success,varSword43Stone,varSword43KoboldBone,varSword43GhoulHoarfrost,varSword43VitalQuintessence,varSword43FoulVenomSac,varSword43DeathFang,varSword43Moonstone)
    varSword43Price = varItemPrice;
}

function fnReloadSwordPrices()
{
    //Sword Prices
    document.getElementById('Sword01Price').value = varSword01Price;
    document.getElementById('Sword02Price').value = varSword02Price;
    document.getElementById('Sword03Price').value = varSword03Price;
    document.getElementById('Sword04Price').value = varSword04Price;
    document.getElementById('Sword05Price').value = varSword05Price;
    document.getElementById('Sword06Price').value = varSword06Price;
    document.getElementById('Sword07Price').value = varSword07Price;
    document.getElementById('Sword08Price').value = varSword08Price;
    document.getElementById('Sword09Price').value = varSword09Price;
    document.getElementById('Sword10Price').value = varSword10Price;
    document.getElementById('Sword11Price').value = varSword11Price;
    document.getElementById('Sword12Price').value = varSword12Price;
    document.getElementById('Sword13Price').value = varSword13Price;
    document.getElementById('Sword14Price').value = varSword14Price;
    document.getElementById('Sword15Price').value = varSword15Price;
    document.getElementById('Sword16Price').value = varSword16Price;
    document.getElementById('Sword17Price').value = varSword17Price;
    document.getElementById('Sword18Price').value = varSword18Price;
    document.getElementById('Sword19Price').value = varSword19Price;
    document.getElementById('Sword20Price').value = varSword20Price;
    document.getElementById('Sword21Price').value = varSword21Price;
    document.getElementById('Sword22Price').value = varSword22Price;
    document.getElementById('Sword23Price').value = varSword23Price;
    document.getElementById('Sword24Price').value = varSword24Price;
    document.getElementById('Sword25Price').value = varSword25Price;
    document.getElementById('Sword26Price').value = varSword26Price;
    document.getElementById('Sword27Price').value = varSword27Price;
    document.getElementById('Sword28Price').value = varSword28Price;
    document.getElementById('Sword29Price').value = varSword29Price;
    document.getElementById('Sword30Price').value = varSword30Price;
    document.getElementById('Sword31Price').value = varSword31Price;
    document.getElementById('Sword32Price').value = varSword32Price;
    document.getElementById('Sword33Price').value = varSword33Price;
    document.getElementById('Sword34Price').value = varSword34Price;
    document.getElementById('Sword35Price').value = varSword35Price;
    document.getElementById('Sword36Price').value = varSword36Price;
    document.getElementById('Sword37Price').value = varSword37Price;
    document.getElementById('Sword38Price').value = varSword38Price;
    document.getElementById('Sword39Price').value = varSword39Price;
    document.getElementById('Sword40Price').value = varSword40Price;
    document.getElementById('Sword41Price').value = varSword41Price;
    document.getElementById('Sword42Price').value = varSword42Price;
    document.getElementById('Sword43Price').value = varSword43Price;

    //Sword Total Prices
    document.getElementById('SwordTotal').value = varSwordTotal;
    document.getElementById('SwordGoldTotal').value = varSwordGoldTotal;
    document.getElementById('SwordIronTotal').value = varSwordIronTotal;
    document.getElementById('SwordWoodTotal').value = varSwordWoodTotal;
    document.getElementById('SwordLeatherTotal').value = varSwordLeatherTotal;
    document.getElementById('SwordSelentineTotal').value = varSwordSelentineTotal;
    document.getElementById('SwordVeilronTotal').value = varSwordVeilronTotal;
    document.getElementById('SwordNeithalTotal').value = varSwordNeithalTotal;
    document.getElementById('SwordLeensparTotal').value = varSwordLeensparTotal;
    document.getElementById('SwordTheyrilTotal').value = varSwordTheyrilTotal;
    document.getElementById('SwordStoneTotal').value = varSwordStoneTotal;
    document.getElementById('SwordKoboldBoneTotal').value = varSwordKoboldBoneTotal;
    document.getElementById('SwordGhoulHoarfrostTotal').value = varSwordGhoulHoarfrostTotal;
    document.getElementById('SwordVitalQuintessenceTotal').value = varSwordVitalQuintessenceTotal;
    document.getElementById('SwordFoulVenomSacTotal').value = varSwordFoulVenomSacTotal;
    document.getElementById('SwordDeathFangTotal').value = varSwordDeathFangTotal;
    document.getElementById('SwordMoonstoneTotal').value = varSwordMoonstoneTotal;
}

function fnSwordInitialize()
{
    varSwordTotal = document.getElementById("SwordTotal").value;
    varSwordGoldTotal = document.getElementById("SwordGoldTotal").value;
    varSwordIronTotal = document.getElementById("SwordIronTotal").value;
    varSwordWoodTotal = document.getElementById("SwordWoodTotal").value;
    varSwordLeatherTotal = document.getElementById("SwordLeatherTotal").value;
    varSwordSelentineTotal = document.getElementById("SwordSelentineTotal").value;
    varSwordVeilronTotal = document.getElementById("SwordVeilronTotal").value;
    varSwordNeithalTotal = document.getElementById("SwordNeithalTotal").value;
    varSwordLeensparTotal = document.getElementById("SwordLeensparTotal").value;
    varSwordTheyrilTotal = document.getElementById("SwordTheyrilTotal").value;
    varSwordStoneTotal = document.getElementById("SwordStoneTotal").value;
    varSwordKoboldBoneTotal = document.getElementById("SwordKoboldBoneTotal").value;
    varSwordGhoulHoarfrostTotal = document.getElementById("SwordGhoulHoarfrostTotal").value;
    varSwordVitalQuintessenceTotal = document.getElementById("SwordVitalQuintessenceTotal").value;
    varSwordFoulVenomSacTotal = document.getElementById("SwordFoulVenomSacTotal").value;
    varSwordDeathFangTotal = document.getElementById("SwordDeathFangTotal").value;
    varSwordMoonstoneTotal = document.getElementById("SwordMoonstoneTotal").value;

    // *** Sword VARIABLES ***
	//Troll Tooth
    varSword01Quantity = document.getElementById("Sword01Quantity").value;
    varSword01Price = document.getElementById("Sword01Price").value;
    varSword01Success = document.getElementById("Sword01Success").value;
    varSword01Gold = 0
    varSword01Iron = 0
    varSword01Wood = 1
    varSword01Leather = 6
    varSword01Selentine = 0
    varSword01Veilron = 0
    varSword01Neithal = 0
    varSword01Leenspar = 0
    varSword01Theyril = 0
    varSword01Stone = 8
    varSword01KoboldBone = 0
    varSword01GhoulHoarfrost = 0
    varSword01VitalQuintessence = 0
    varSword01FoulVenomSac = 0
    varSword01DeathFang = 0
    varSword01Moonstone = 0
    
	//Shortsword
    varSword02Quantity = document.getElementById("Sword02Quantity").value;
    varSword02Price = document.getElementById("Sword02Price").value;
    varSword02Success = document.getElementById("Sword02Success").value;
    varSword02Gold = 0
    varSword02Iron = 3
    varSword02Wood = 1
    varSword02Leather = 0
    varSword02Selentine = 0
    varSword02Veilron = 0
    varSword02Neithal = 0
    varSword02Leenspar = 0
    varSword02Theyril = 0
    varSword02Stone = 0
    varSword02KoboldBone = 0
    varSword02GhoulHoarfrost = 0
    varSword02VitalQuintessence = 0
    varSword02FoulVenomSac = 0
    varSword02DeathFang = 0
    varSword02Moonstone = 0
    
	//Rapier
    varSword03Quantity = document.getElementById("Sword03Quantity").value;
    varSword03Price = document.getElementById("Sword03Price").value;
    varSword03Success = document.getElementById("Sword03Success").value;
    varSword03Gold = 0
    varSword03Iron = 3
    varSword03Wood = 1
    varSword03Leather = 0
    varSword03Selentine = 0
    varSword03Veilron = 0
    varSword03Neithal = 0
    varSword03Leenspar = 0
    varSword03Theyril = 0
    varSword03Stone = 0
    varSword03KoboldBone = 0
    varSword03GhoulHoarfrost = 0
    varSword03VitalQuintessence = 0
    varSword03FoulVenomSac = 0
    varSword03DeathFang = 0
    varSword03Moonstone = 0
    
	//Mercian Longsword
    varSword04Quantity = document.getElementById("Sword04Quantity").value;
    varSword04Price = document.getElementById("Sword04Price").value;
    varSword04Success = document.getElementById("Sword04Success").value;
    varSword04Gold = 0
    varSword04Iron = 3
    varSword04Wood = 1
    varSword04Leather = 0
    varSword04Selentine = 0
    varSword04Veilron = 0
    varSword04Neithal = 0
    varSword04Leenspar = 0
    varSword04Theyril = 0
    varSword04Stone = 0
    varSword04KoboldBone = 0
    varSword04GhoulHoarfrost = 0
    varSword04VitalQuintessence = 0
    varSword04FoulVenomSac = 0
    varSword04DeathFang = 0
    varSword04Moonstone = 0
    
	//Mirdain Longsword
    varSword05Quantity = document.getElementById("Sword05Quantity").value;
    varSword05Price = document.getElementById("Sword05Price").value;
    varSword05Success = document.getElementById("Sword05Success").value;
    varSword05Gold = 0
    varSword05Iron = 3
    varSword05Wood = 1
    varSword05Leather = 0
    varSword05Selentine = 0
    varSword05Veilron = 0
    varSword05Neithal = 0
    varSword05Leenspar = 0
    varSword05Theyril = 0
    varSword05Stone = 0
    varSword05KoboldBone = 0
    varSword05GhoulHoarfrost = 0
    varSword05VitalQuintessence = 0
    varSword05FoulVenomSac = 0
    varSword05DeathFang = 0
    varSword05Moonstone = 0
    
	//Heavy Sword
    varSword06Quantity = document.getElementById("Sword06Quantity").value;
    varSword06Price = document.getElementById("Sword06Price").value;
    varSword06Success = document.getElementById("Sword06Success").value;
    varSword06Gold = 0
    varSword06Iron = 3
    varSword06Wood = 1
    varSword06Leather = 0
    varSword06Selentine = 0
    varSword06Veilron = 0
    varSword06Neithal = 0
    varSword06Leenspar = 0
    varSword06Theyril = 0
    varSword06Stone = 0
    varSword06KoboldBone = 0
    varSword06GhoulHoarfrost = 0
    varSword06VitalQuintessence = 0
    varSword06FoulVenomSac = 0
    varSword06DeathFang = 0
    varSword06Moonstone = 0
    
	//Mahirim Sword
    varSword07Quantity = document.getElementById("Sword07Quantity").value;
    varSword07Price = document.getElementById("Sword07Price").value;
    varSword07Success = document.getElementById("Sword07Success").value;
    varSword07Gold = 0
    varSword07Iron = 2
    varSword07Wood = 2
    varSword07Leather = 0
    varSword07Selentine = 0
    varSword07Veilron = 0
    varSword07Neithal = 0
    varSword07Leenspar = 0
    varSword07Theyril = 0
    varSword07Stone = 0
    varSword07KoboldBone = 0
    varSword07GhoulHoarfrost = 0
    varSword07VitalQuintessence = 0
    varSword07FoulVenomSac = 0
    varSword07DeathFang = 0
    varSword07Moonstone = 0
    
	//Orkish Bastard Sword
    varSword08Quantity = document.getElementById("Sword08Quantity").value;
    varSword08Price = document.getElementById("Sword08Price").value;
    varSword08Success = document.getElementById("Sword08Success").value;
    varSword08Gold = 0
    varSword08Iron = 3
    varSword08Wood = 1
    varSword08Leather = 0
    varSword08Selentine = 0
    varSword08Veilron = 0
    varSword08Neithal = 0
    varSword08Leenspar = 0
    varSword08Theyril = 0
    varSword08Stone = 0
    varSword08KoboldBone = 0
    varSword08GhoulHoarfrost = 0
    varSword08VitalQuintessence = 0
    varSword08FoulVenomSac = 0
    varSword08DeathFang = 0
    varSword08Moonstone = 0
    
	//Shadowtongue
    varSword09Quantity = document.getElementById("Sword09Quantity").value;
    varSword09Price = document.getElementById("Sword09Price").value;
    varSword09Success = document.getElementById("Sword09Success").value;
    varSword09Gold = 0
    varSword09Iron = 3
    varSword09Wood = 1
    varSword09Leather = 0
    varSword09Selentine = 0
    varSword09Veilron = 0
    varSword09Neithal = 0
    varSword09Leenspar = 0
    varSword09Theyril = 0
    varSword09Stone = 0
    varSword09KoboldBone = 0
    varSword09GhoulHoarfrost = 0
    varSword09VitalQuintessence = 0
    varSword09FoulVenomSac = 0
    varSword09DeathFang = 0
    varSword09Moonstone = 0
    
	//Twisted Sword
    varSword10Quantity = document.getElementById("Sword10Quantity").value;
    varSword10Price = document.getElementById("Sword10Price").value;
    varSword10Success = document.getElementById("Sword10Success").value;
    varSword10Gold = 10
    varSword10Iron = 5
    varSword10Wood = 1
    varSword10Leather = 2
    varSword10Selentine = 0
    varSword10Veilron = 0
    varSword10Neithal = 0
    varSword10Leenspar = 0
    varSword10Theyril = 0
    varSword10Stone = 0
    varSword10KoboldBone = 0
    varSword10GhoulHoarfrost = 0
    varSword10VitalQuintessence = 0
    varSword10FoulVenomSac = 0
    varSword10DeathFang = 0
    varSword10Moonstone = 0
    
	//Ironthorn
    varSword11Quantity = document.getElementById("Sword11Quantity").value;
    varSword11Price = document.getElementById("Sword11Price").value;
    varSword11Success = document.getElementById("Sword11Success").value;
    varSword11Gold = 10
    varSword11Iron = 5
    varSword11Wood = 0
    varSword11Leather = 0
    varSword11Selentine = 0
    varSword11Veilron = 0
    varSword11Neithal = 0
    varSword11Leenspar = 0
    varSword11Theyril = 0
    varSword11Stone = 0
    varSword11KoboldBone = 1
    varSword11GhoulHoarfrost = 0
    varSword11VitalQuintessence = 0
    varSword11FoulVenomSac = 0
    varSword11DeathFang = 0
    varSword11Moonstone = 0
    
	//Bastard Sword
    varSword12Quantity = document.getElementById("Sword12Quantity").value;
    varSword12Price = document.getElementById("Sword12Price").value;
    varSword12Success = document.getElementById("Sword12Success").value;
    varSword12Gold = 10
    varSword12Iron = 5
    varSword12Wood = 1
    varSword12Leather = 0
    varSword12Selentine = 0
    varSword12Veilron = 0
    varSword12Neithal = 0
    varSword12Leenspar = 0
    varSword12Theyril = 0
    varSword12Stone = 0
    varSword12KoboldBone = 0
    varSword12GhoulHoarfrost = 0
    varSword12VitalQuintessence = 0
    varSword12FoulVenomSac = 0
    varSword12DeathFang = 0
    varSword12Moonstone = 0
    
	//Axeblade
    varSword13Quantity = document.getElementById("Sword13Quantity").value;
    varSword13Price = document.getElementById("Sword13Price").value;
    varSword13Success = document.getElementById("Sword13Success").value;
    varSword13Gold = 10
    varSword13Iron = 5
    varSword13Wood = 1
    varSword13Leather = 0
    varSword13Selentine = 0
    varSword13Veilron = 0
    varSword13Neithal = 0
    varSword13Leenspar = 0
    varSword13Theyril = 0
    varSword13Stone = 0
    varSword13KoboldBone = 0
    varSword13GhoulHoarfrost = 0
    varSword13VitalQuintessence = 0
    varSword13FoulVenomSac = 0
    varSword13DeathFang = 0
    varSword13Moonstone = 0
    
	//Cross Blade
    varSword14Quantity = document.getElementById("Sword14Quantity").value;
    varSword14Price = document.getElementById("Sword14Price").value;
    varSword14Success = document.getElementById("Sword14Success").value;
    varSword14Gold = 10
    varSword14Iron = 5
    varSword14Wood = 1
    varSword14Leather = 0
    varSword14Selentine = 0
    varSword14Veilron = 0
    varSword14Neithal = 0
    varSword14Leenspar = 0
    varSword14Theyril = 0
    varSword14Stone = 0
    varSword14KoboldBone = 0
    varSword14GhoulHoarfrost = 0
    varSword14VitalQuintessence = 0
    varSword14FoulVenomSac = 0
    varSword14DeathFang = 0
    varSword14Moonstone = 0
    
	//Mairilis
    varSword15Quantity = document.getElementById("Sword15Quantity").value;
    varSword15Price = document.getElementById("Sword15Price").value;
    varSword15Success = document.getElementById("Sword15Success").value;
    varSword15Gold = 10
    varSword15Iron = 5
    varSword15Wood = 1
    varSword15Leather = 0
    varSword15Selentine = 0
    varSword15Veilron = 0
    varSword15Neithal = 0
    varSword15Leenspar = 0
    varSword15Theyril = 0
    varSword15Stone = 0
    varSword15KoboldBone = 0
    varSword15GhoulHoarfrost = 0
    varSword15VitalQuintessence = 0
    varSword15FoulVenomSac = 0
    varSword15DeathFang = 0
    varSword15Moonstone = 0
    
	//Siltblade
    varSword16Quantity = document.getElementById("Sword16Quantity").value;
    varSword16Price = document.getElementById("Sword16Price").value;
    varSword16Success = document.getElementById("Sword16Success").value;
    varSword16Gold = 10
    varSword16Iron = 6
    varSword16Wood = 0
    varSword16Leather = 0
    varSword16Selentine = 0
    varSword16Veilron = 0
    varSword16Neithal = 0
    varSword16Leenspar = 0
    varSword16Theyril = 0
    varSword16Stone = 0
    varSword16KoboldBone = 0
    varSword16GhoulHoarfrost = 0
    varSword16VitalQuintessence = 0
    varSword16FoulVenomSac = 0
    varSword16DeathFang = 0
    varSword16Moonstone = 0
    
	//Hookblade
    varSword17Quantity = document.getElementById("Sword17Quantity").value;
    varSword17Price = document.getElementById("Sword17Price").value;
    varSword17Success = document.getElementById("Sword17Success").value;
    varSword17Gold = 20
    varSword17Iron = 6
    varSword17Wood = 1
    varSword17Leather = 3
    varSword17Selentine = 0
    varSword17Veilron = 0
    varSword17Neithal = 0
    varSword17Leenspar = 0
    varSword17Theyril = 0
    varSword17Stone = 0
    varSword17KoboldBone = 0
    varSword17GhoulHoarfrost = 0
    varSword17VitalQuintessence = 0
    varSword17FoulVenomSac = 0
    varSword17DeathFang = 0
    varSword17Moonstone = 0
    
	//Revenant Scimitar
    varSword18Quantity = document.getElementById("Sword18Quantity").value;
    varSword18Price = document.getElementById("Sword18Price").value;
    varSword18Success = document.getElementById("Sword18Success").value;
    varSword18Gold = 20
    varSword18Iron = 6
    varSword18Wood = 1
    varSword18Leather = 3
    varSword18Selentine = 0
    varSword18Veilron = 0
    varSword18Neithal = 0
    varSword18Leenspar = 0
    varSword18Theyril = 0
    varSword18Stone = 0
    varSword18KoboldBone = 0
    varSword18GhoulHoarfrost = 0
    varSword18VitalQuintessence = 0
    varSword18FoulVenomSac = 0
    varSword18DeathFang = 0
    varSword18Moonstone = 0
    
	//Vipertongue
    varSword19Quantity = document.getElementById("Sword19Quantity").value;
    varSword19Price = document.getElementById("Sword19Price").value;
    varSword19Success = document.getElementById("Sword19Success").value;
    varSword19Gold = 20
    varSword19Iron = 5
    varSword19Wood = 2
    varSword19Leather = 3
    varSword19Selentine = 0
    varSword19Veilron = 0
    varSword19Neithal = 0
    varSword19Leenspar = 0
    varSword19Theyril = 0
    varSword19Stone = 0
    varSword19KoboldBone = 0
    varSword19GhoulHoarfrost = 0
    varSword19VitalQuintessence = 0
    varSword19FoulVenomSac = 0
    varSword19DeathFang = 0
    varSword19Moonstone = 0
    
	//Sawblade
    varSword20Quantity = document.getElementById("Sword20Quantity").value;
    varSword20Price = document.getElementById("Sword20Price").value;
    varSword20Success = document.getElementById("Sword20Success").value;
    varSword20Gold = 20
    varSword20Iron = 6
    varSword20Wood = 1
    varSword20Leather = 3
    varSword20Selentine = 0
    varSword20Veilron = 0
    varSword20Neithal = 0
    varSword20Leenspar = 0
    varSword20Theyril = 0
    varSword20Stone = 0
    varSword20KoboldBone = 0
    varSword20GhoulHoarfrost = 0
    varSword20VitalQuintessence = 0
    varSword20FoulVenomSac = 0
    varSword20DeathFang = 0
    varSword20Moonstone = 0
    
	//Scimitar
    varSword21Quantity = document.getElementById("Sword21Quantity").value;
    varSword21Price = document.getElementById("Sword21Price").value;
    varSword21Success = document.getElementById("Sword21Success").value;
    varSword21Gold = 20
    varSword21Iron = 6
    varSword21Wood = 2
    varSword21Leather = 0
    varSword21Selentine = 0
    varSword21Veilron = 0
    varSword21Neithal = 0
    varSword21Leenspar = 0
    varSword21Theyril = 0
    varSword21Stone = 0
    varSword21KoboldBone = 0
    varSword21GhoulHoarfrost = 0
    varSword21VitalQuintessence = 0
    varSword21FoulVenomSac = 0
    varSword21DeathFang = 0
    varSword21Moonstone = 0
    
	//Sharktooth
    varSword22Quantity = document.getElementById("Sword22Quantity").value;
    varSword22Price = document.getElementById("Sword22Price").value;
    varSword22Success = document.getElementById("Sword22Success").value;
    varSword22Gold = 20
    varSword22Iron = 6
    varSword22Wood = 2
    varSword22Leather = 0
    varSword22Selentine = 0
    varSword22Veilron = 0
    varSword22Neithal = 0
    varSword22Leenspar = 0
    varSword22Theyril = 0
    varSword22Stone = 0
    varSword22KoboldBone = 0
    varSword22GhoulHoarfrost = 0
    varSword22VitalQuintessence = 0
    varSword22FoulVenomSac = 0
    varSword22DeathFang = 0
    varSword22Moonstone = 0
    
	//Widesword
    varSword23Quantity = document.getElementById("Sword23Quantity").value;
    varSword23Price = document.getElementById("Sword23Price").value;
    varSword23Success = document.getElementById("Sword23Success").value;
    varSword23Gold = 20
    varSword23Iron = 7
    varSword23Wood = 1
    varSword23Leather = 0
    varSword23Selentine = 0
    varSword23Veilron = 0
    varSword23Neithal = 0
    varSword23Leenspar = 0
    varSword23Theyril = 0
    varSword23Stone = 0
    varSword23KoboldBone = 0
    varSword23GhoulHoarfrost = 0
    varSword23VitalQuintessence = 0
    varSword23FoulVenomSac = 0
    varSword23DeathFang = 0
    varSword23Moonstone = 0
    
	//Frostbrand
    varSword24Quantity = document.getElementById("Sword24Quantity").value;
    varSword24Price = document.getElementById("Sword24Price").value;
    varSword24Success = document.getElementById("Sword24Success").value;
    varSword24Gold = 35
    varSword24Iron = 9
    varSword24Wood = 0
    varSword24Leather = 0
    varSword24Selentine = 0
    varSword24Veilron = 0
    varSword24Neithal = 0
    varSword24Leenspar = 0
    varSword24Theyril = 0
    varSword24Stone = 0
    varSword24KoboldBone = 0
    varSword24GhoulHoarfrost = 1
    varSword24VitalQuintessence = 0
    varSword24FoulVenomSac = 0
    varSword24DeathFang = 0
    varSword24Moonstone = 0
    
	//Lightblade
    varSword25Quantity = document.getElementById("Sword25Quantity").value;
    varSword25Price = document.getElementById("Sword25Price").value;
    varSword25Success = document.getElementById("Sword25Success").value;
    varSword25Gold = 35
    varSword25Iron = 10
    varSword25Wood = 0
    varSword25Leather = 0
    varSword25Selentine = 0
    varSword25Veilron = 0
    varSword25Neithal = 0
    varSword25Leenspar = 0
    varSword25Theyril = 0
    varSword25Stone = 0
    varSword25KoboldBone = 0
    varSword25GhoulHoarfrost = 0
    varSword25VitalQuintessence = 1
    varSword25FoulVenomSac = 0
    varSword25DeathFang = 0
    varSword25Moonstone = 0
    
	//Morneid
    varSword26Quantity = document.getElementById("Sword26Quantity").value;
    varSword26Price = document.getElementById("Sword26Price").value;
    varSword26Success = document.getElementById("Sword26Success").value;
    varSword26Gold = 35
    varSword26Iron = 8
    varSword26Wood = 3
    varSword26Leather = 3
    varSword26Selentine = 0
    varSword26Veilron = 0
    varSword26Neithal = 0
    varSword26Leenspar = 0
    varSword26Theyril = 0
    varSword26Stone = 0
    varSword26KoboldBone = 0
    varSword26GhoulHoarfrost = 0
    varSword26VitalQuintessence = 0
    varSword26FoulVenomSac = 0
    varSword26DeathFang = 0
    varSword26Moonstone = 0
    
	//Brutal Sword
    varSword27Quantity = document.getElementById("Sword27Quantity").value;
    varSword27Price = document.getElementById("Sword27Price").value;
    varSword27Success = document.getElementById("Sword27Success").value;
    varSword27Gold = 35
    varSword27Iron = 9
    varSword27Wood = 2
    varSword27Leather = 3
    varSword27Selentine = 0
    varSword27Veilron = 0
    varSword27Neithal = 0
    varSword27Leenspar = 0
    varSword27Theyril = 0
    varSword27Stone = 0
    varSword27KoboldBone = 0
    varSword27GhoulHoarfrost = 0
    varSword27VitalQuintessence = 0
    varSword27FoulVenomSac = 0
    varSword27DeathFang = 0
    varSword27Moonstone = 0
    
	//Tarlis
    varSword28Quantity = document.getElementById("Sword28Quantity").value;
    varSword28Price = document.getElementById("Sword28Price").value;
    varSword28Success = document.getElementById("Sword28Success").value;
    varSword28Gold = 35
    varSword28Iron = 9
    varSword28Wood = 3
    varSword28Leather = 0
    varSword28Selentine = 0
    varSword28Veilron = 0
    varSword28Neithal = 0
    varSword28Leenspar = 0
    varSword28Theyril = 0
    varSword28Stone = 0
    varSword28KoboldBone = 0
    varSword28GhoulHoarfrost = 0
    varSword28VitalQuintessence = 0
    varSword28FoulVenomSac = 0
    varSword28DeathFang = 0
    varSword28Moonstone = 0
    
    //Denier
    varSword29Quantity = document.getElementById("Sword29Quantity").value;
    varSword29Price = document.getElementById("Sword29Price").value;
    varSword29Success = document.getElementById("Sword29Success").value;
    varSword29Gold = 80
    varSword29Iron = 13
    varSword29Wood = 4
    varSword29Leather = 4
    varSword29Selentine = 0
    varSword29Veilron = 0
    varSword29Neithal = 0
    varSword29Leenspar = 0
    varSword29Theyril = 0
    varSword29Stone = 0
    varSword29KoboldBone = 0
    varSword29GhoulHoarfrost = 0
    varSword29VitalQuintessence = 0
    varSword29FoulVenomSac = 0
    varSword29DeathFang = 0
    varSword29Moonstone = 0
    
    //Iceclaw
    varSword30Quantity = document.getElementById("Sword30Quantity").value;
    varSword30Price = document.getElementById("Sword30Price").value;
    varSword30Success = document.getElementById("Sword30Success").value;
    varSword30Gold = 80
    varSword30Iron = 14
    varSword30Wood = 4
    varSword30Leather = 0
    varSword30Selentine = 0
    varSword30Veilron = 0
    varSword30Neithal = 0
    varSword30Leenspar = 0
    varSword30Theyril = 0
    varSword30Stone = 0
    varSword30KoboldBone = 0
    varSword30GhoulHoarfrost = 0
    varSword30VitalQuintessence = 0
    varSword30FoulVenomSac = 0
    varSword30DeathFang = 0
    varSword30Moonstone = 0
    
    //Mercian Broadsword
    varSword31Quantity = document.getElementById("Sword31Quantity").value;
    varSword31Price = document.getElementById("Sword31Price").value;
    varSword31Success = document.getElementById("Sword31Success").value;
    varSword31Gold = 80
    varSword31Iron = 14
    varSword31Wood = 4
    varSword31Leather = 0
    varSword31Selentine = 0
    varSword31Veilron = 0
    varSword31Neithal = 0
    varSword31Leenspar = 0
    varSword31Theyril = 0
    varSword31Stone = 0
    varSword31KoboldBone = 0
    varSword31GhoulHoarfrost = 0
    varSword31VitalQuintessence = 0
    varSword31FoulVenomSac = 0
    varSword31DeathFang = 0
    varSword31Moonstone = 0
    
    //Mirdain Scimitar
    varSword32Quantity = document.getElementById("Sword32Quantity").value;
    varSword32Price = document.getElementById("Sword32Price").value;
    varSword32Success = document.getElementById("Sword32Success").value;
    varSword32Gold = 80
    varSword32Iron = 14
    varSword32Wood = 4
    varSword32Leather = 0
    varSword32Selentine = 0
    varSword32Veilron = 0
    varSword32Neithal = 0
    varSword32Leenspar = 0
    varSword32Theyril = 0
    varSword32Stone = 0
    varSword32KoboldBone = 0
    varSword32GhoulHoarfrost = 0
    varSword32VitalQuintessence = 0
    varSword32FoulVenomSac = 0
    varSword32DeathFang = 0
    varSword32Moonstone = 0
    
    //Silverswain
    varSword33Quantity = document.getElementById("Sword33Quantity").value;
    varSword33Price = document.getElementById("Sword33Price").value;
    varSword33Success = document.getElementById("Sword33Success").value;
    varSword33Gold = 80
    varSword33Iron = 14
    varSword33Wood = 4
    varSword33Leather = 0
    varSword33Selentine = 0
    varSword33Veilron = 0
    varSword33Neithal = 0
    varSword33Leenspar = 0
    varSword33Theyril = 0
    varSword33Stone = 0
    varSword33KoboldBone = 0
    varSword33GhoulHoarfrost = 0
    varSword33VitalQuintessence = 0
    varSword33FoulVenomSac = 0
    varSword33DeathFang = 0
    varSword33Moonstone = 0
    
    //Mahirim Moonblade
    varSword34Quantity = document.getElementById("Sword34Quantity").value;
    varSword34Price = document.getElementById("Sword34Price").value;
    varSword34Success = document.getElementById("Sword34Success").value;
    varSword34Gold = 80
    varSword34Iron = 14
    varSword34Wood = 4
    varSword34Leather = 0
    varSword34Selentine = 0
    varSword34Veilron = 0
    varSword34Neithal = 0
    varSword34Leenspar = 0
    varSword34Theyril = 0
    varSword34Stone = 0
    varSword34KoboldBone = 0
    varSword34GhoulHoarfrost = 0
    varSword34VitalQuintessence = 0
    varSword34FoulVenomSac = 0
    varSword34DeathFang = 0
    varSword34Moonstone = 0
    
    //Orkish Triblade
    varSword35Quantity = document.getElementById("Sword35Quantity").value;
    varSword35Price = document.getElementById("Sword35Price").value;
    varSword35Success = document.getElementById("Sword35Success").value;
    varSword35Gold = 80
    varSword35Iron = 14
    varSword35Wood = 4
    varSword35Leather = 0
    varSword35Selentine = 0
    varSword35Veilron = 0
    varSword35Neithal = 0
    varSword35Leenspar = 0
    varSword35Theyril = 0
    varSword35Stone = 0
    varSword35KoboldBone = 0
    varSword35GhoulHoarfrost = 0
    varSword35VitalQuintessence = 0
    varSword35FoulVenomSac = 0
    varSword35DeathFang = 0
    varSword35Moonstone = 0
    
    //Ghostsong
    varSword36Quantity = document.getElementById("Sword36Quantity").value;
    varSword36Price = document.getElementById("Sword36Price").value;
    varSword36Success = document.getElementById("Sword36Success").value;
    varSword36Gold = 80
    varSword36Iron = 14
    varSword36Wood = 4
    varSword36Leather = 0
    varSword36Selentine = 0
    varSword36Veilron = 0
    varSword36Neithal = 0
    varSword36Leenspar = 0
    varSword36Theyril = 0
    varSword36Stone = 0
    varSword36KoboldBone = 0
    varSword36GhoulHoarfrost = 0
    varSword36VitalQuintessence = 0
    varSword36FoulVenomSac = 0
    varSword36DeathFang = 0
    varSword36Moonstone = 0
    
    //Bloodleech
    varSword37Quantity = document.getElementById("Sword37Quantity").value;
    varSword37Price = document.getElementById("Sword37Price").value;
    varSword37Success = document.getElementById("Sword37Success").value;
    varSword37Gold = 125
    varSword37Iron = 10
    varSword37Wood = 0
    varSword37Leather = 0
    varSword37Selentine = 0
    varSword37Veilron = 0
    varSword37Neithal = 0
    varSword37Leenspar = 1
    varSword37Theyril = 0
    varSword37Stone = 0
    varSword37KoboldBone = 0
    varSword37GhoulHoarfrost = 0
    varSword37VitalQuintessence = 0
    varSword37FoulVenomSac = 0
    varSword37DeathFang = 0
    varSword37Moonstone = 0
    
    //Beguiler's Blade
    varSword38Quantity = document.getElementById("Sword38Quantity").value;
    varSword38Price = document.getElementById("Sword38Price").value;
    varSword38Success = document.getElementById("Sword38Success").value;
    varSword38Gold = 125
    varSword38Iron = 10
    varSword38Wood = 0
    varSword38Leather = 0
    varSword38Selentine = 1
    varSword38Veilron = 0
    varSword38Neithal = 0
    varSword38Leenspar = 0
    varSword38Theyril = 0
    varSword38Stone = 0
    varSword38KoboldBone = 0
    varSword38GhoulHoarfrost = 0
    varSword38VitalQuintessence = 0
    varSword38FoulVenomSac = 0
    varSword38DeathFang = 0
    varSword38Moonstone = 0
    
    //Lightsplitter
    varSword39Quantity = document.getElementById("Sword39Quantity").value;
    varSword39Price = document.getElementById("Sword39Price").value;
    varSword39Success = document.getElementById("Sword39Success").value;
    varSword39Gold = 25
    varSword39Iron = 3
    varSword39Wood = 0
    varSword39Leather = 0
    varSword39Selentine = 0
    varSword39Veilron = 0
    varSword39Neithal = 0
    varSword39Leenspar = 0
    varSword39Theyril = 1
    varSword39Stone = 0
    varSword39KoboldBone = 0
    varSword39GhoulHoarfrost = 0
    varSword39VitalQuintessence = 0
    varSword39FoulVenomSac = 0
    varSword39DeathFang = 0
    varSword39Moonstone = 0
    
    //Demon's Ember
    varSword40Quantity = document.getElementById("Sword40Quantity").value;
    varSword40Price = document.getElementById("Sword40Price").value;
    varSword40Success = document.getElementById("Sword40Success").value;
    varSword40Gold = 100
    varSword40Iron = 7
    varSword40Wood = 2
    varSword40Leather = 0
    varSword40Selentine = 0
    varSword40Veilron = 0
    varSword40Neithal = 0
    varSword40Leenspar = 1
    varSword40Theyril = 1
    varSword40Stone = 0
    varSword40KoboldBone = 0
    varSword40GhoulHoarfrost = 0
    varSword40VitalQuintessence = 0
    varSword40FoulVenomSac = 0
    varSword40DeathFang = 0
    varSword40Moonstone = 0
    
    //Omrog
    varSword41Quantity = document.getElementById("Sword41Quantity").value;
    varSword41Price = document.getElementById("Sword41Price").value;
    varSword41Success = document.getElementById("Sword41Success").value;
    varSword41Gold = 200
    varSword41Iron = 9
    varSword41Wood = 6
    varSword41Leather = 0
    varSword41Selentine = 1
    varSword41Veilron = 1
    varSword41Neithal = 0
    varSword41Leenspar = 0
    varSword41Theyril = 0
    varSword41Stone = 0
    varSword41KoboldBone = 0
    varSword41GhoulHoarfrost = 0
    varSword41VitalQuintessence = 0
    varSword41FoulVenomSac = 0
    varSword41DeathFang = 0
    varSword41Moonstone = 0
    
    //Deepcurse
    varSword42Quantity = document.getElementById("Sword42Quantity").value;
    varSword42Price = document.getElementById("Sword42Price").value;
    varSword42Success = document.getElementById("Sword42Success").value;
    varSword42Gold = 5000
    varSword42Iron = 10
    varSword42Wood = 0
    varSword42Leather = 0
    varSword42Selentine = 0
    varSword42Veilron = 4
    varSword42Neithal = 1
    varSword42Leenspar = 0
    varSword42Theyril = 0
    varSword42Stone = 0
    varSword42KoboldBone = 0
    varSword42GhoulHoarfrost = 0
    varSword42VitalQuintessence = 0
    varSword42FoulVenomSac = 2
    varSword42DeathFang = 0
    varSword42Moonstone = 0
    
    //Ghost Claw
    varSword43Quantity = document.getElementById("Sword43Quantity").value;
    varSword43Price = document.getElementById("Sword43Price").value;
    varSword43Success = document.getElementById("Sword43Success").value;
    varSword43Gold = 5000
    varSword43Iron = 10
    varSword43Wood = 0
    varSword43Leather = 0
    varSword43Selentine = 0
    varSword43Veilron = 0
    varSword43Neithal = 0
    varSword43Leenspar = 0
    varSword43Theyril = 6
    varSword43Stone = 0
    varSword43KoboldBone = 0
    varSword43GhoulHoarfrost = 0
    varSword43VitalQuintessence = 0
    varSword43FoulVenomSac = 0
    varSword43DeathFang = 3
    varSword43Moonstone = 3
}

/* Siege */

//Used to reload items from Siege
function fnSiegeReload()  // x= id, z= value
{
    fnSiegeInitialize()

    fnSiege()

    fnSiegeTotal()
    fnReloadSiegePrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnSiegeSubPrice(a,b,c,d,e)
{
    varGold = parseInt(a)
    varIron = parseInt(b)
    varWood = parseInt(c)
    varGolemSparkstone = parseInt(d)
    varSuccess = parseInt(e)

    varSubPrice = ((varGold) + (varIron * varIronIngotValue) + (varWood * varWoodValue) + (varGolemSparkstone * varGolemSparkstoneValue));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Siege
function fnSiegeTotal()
{
    varSiegeTotal = ((varSiege01Price * varSiege01Quantity));
    varSiegeGoldTotal = ((varSiege01Gold * varSiege01Quantity));
    varSiegeIronTotal = ((varSiege01Iron * varSiege01Quantity));
    varSiegeWoodTotal = ((varSiege01Wood * varSiege01Quantity));
    varSiegeGolemSparkstoneTotal = ((varSiege01GolemSparkstone * varSiege01Quantity));
}

//Siege Calculations
function fnSiege()
{
    fnSiegeSubPrice(varSiege01Gold,varSiege01Iron,varSiege01Wood,varSiege01GolemSparkstone,varSiege01Success)
    varSiege01Price = varItemPrice;
}

function fnReloadSiegePrices()
{
    //Siege Prices
    document.getElementById('Siege01Price').value = varSiege01Price;

    //Siege Total Prices
    document.getElementById('SiegeTotal').value = varSiegeTotal;
    document.getElementById('SiegeGoldTotal').value = varSiegeGoldTotal;
    document.getElementById('SiegeIronTotal').value = varSiegeIronTotal;
    document.getElementById('SiegeWoodTotal').value = varSiegeWoodTotal;
    document.getElementById('SiegeGolemSparkstoneTotal').value = varSiegeGolemSparkstoneTotal;
}

function fnSiegeInitialize()
{
    varSiegeTotal = document.getElementById("SiegeTotal").value;
    varSiegeGoldTotal = document.getElementById("SiegeGoldTotal").value;
    varSiegeIronTotal = document.getElementById("SiegeIronTotal").value;
    varSiegeWoodTotal = document.getElementById("SiegeWoodTotal").value;
    varSiegeGolemSparkstoneTotal = document.getElementById("SiegeGolemSparkstoneTotal").value;

    // *** Siege VARIABLES ***
	//Siege Hammer
    varSiege01Quantity = document.getElementById("Siege01Quantity").value;
    varSiege01Price = document.getElementById("Siege01Price").value;
    varSiege01Success = document.getElementById("Siege01Success").value;
    varSiege01Gold = 100
    varSiege01Iron = 18
    varSiege01Wood = 8
    varSiege01GolemSparkstone = 1
}

/* SITHRA */

//Used to reload items from Sithra
function fnSithraReload()  // x= id, z= value
{
    fnSithraInitialize()

    fnSithra()

    fnSithraTotal()
    fnReloadSithraPrices()

    fnReloadGrandTotal()
}

//Sets the price based on the material versus quantity
function fnSithraSubPrice(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u)
{
    varGold = parseInt(a)
    varSelentine = parseInt(b)
    varVeilron = parseInt(c)
    varNeithal = parseInt(d)
    varLeenspar = parseInt(e)
    varTheyril = parseInt(f)
    varAcidFibula = parseInt(g)
    varAcidBlade = parseInt(h)
    varFireFibula = parseInt(i)
    varFireBlade = parseInt(j)
    varPoisonFibula = parseInt(k)
    varPoisonBlade = parseInt(l)
    varHolyFibula = parseInt(m)
    varHolyBlade = parseInt(n)
    varUnholyFibula = parseInt(o)
    varUnholyBlade = parseInt(p)
    varIceFibula = parseInt(q)
    varIceBlade = parseInt(r)
    varLightningFibula = parseInt(s)
    varLightningBlade = parseInt(t)
    varSuccess = parseInt(u)

    varSubPrice = ((varGold) + (varSelentine * varSelentineIngotValue) + (varVeilron * varVeilronIngotValue) + (varNeithal * varNeithalIngotValue) + (varLeenspar * varLeensparIngotValue) + (varTheyril * varTheyrilIngotValue) + (varAcidFibula * varSithraFibula01Price) + (varAcidBlade * varSithraBlade01Price) + (varFireFibula * varSithraFibula02Price) + (varFireBlade * varSithraBlade02Price) + (varHolyFibula * varSithraFibula03Price) + (varHolyBlade * varSithraBlade03Price) + (varIceFibula * varSithraFibula04Price) + (varIceBlade * varSithraBlade04Price) + (varLightningFibula * varSithraFibula05Price) + (varLightningBlade * varSithraBlade05Price) + (varPoisonFibula * varSithraFibula06Price) + (varPoisonBlade * varSithraBlade06Price) + (varUnholyFibula * varSithraFibula07Price) + (varUnholyBlade * varSithraBlade07Price));
    fnPrice(varSubPrice,varSuccess)
}

//Calculates the total prices of Sithra
function fnSithraTotal()
{
    varSithraTotal = ((varSithra01Price * varSithra01Quantity) + (varSithra02Price * varSithra02Quantity) + (varSithra03Price * varSithra03Quantity) + (varSithra04Price * varSithra04Quantity) + (varSithra05Price * varSithra05Quantity) + (varSithra06Price * varSithra06Quantity) + (varSithra07Price * varSithra07Quantity));
    varSithraGoldTotal = ((varSithra01Gold * varSithra01Quantity) + (varSithra02Gold * varSithra02Quantity) + (varSithra03Gold * varSithra03Quantity) + (varSithra04Gold * varSithra04Quantity) + (varSithra05Gold * varSithra05Quantity) + (varSithra06Gold * varSithra06Quantity) + (varSithra07Gold * varSithra07Quantity));
    varSithraSelentineTotal = ((varSithra01Selentine * varSithra01Quantity) + (varSithra02Selentine * varSithra02Quantity) + (varSithra03Selentine * varSithra03Quantity) + (varSithra04Selentine * varSithra04Quantity) + (varSithra05Selentine * varSithra05Quantity) + (varSithra06Selentine * varSithra06Quantity) + (varSithra07Selentine * varSithra07Quantity));
    varSithraVeilronTotal = ((varSithra01Veilron * varSithra01Quantity) + (varSithra02Veilron * varSithra02Quantity) + (varSithra03Veilron * varSithra03Quantity) + (varSithra04Veilron * varSithra04Quantity) + (varSithra05Veilron * varSithra05Quantity) + (varSithra06Veilron * varSithra06Quantity) + (varSithra07Veilron * varSithra07Quantity));
    varSithraNeithalTotal = ((varSithra01Neithal * varSithra01Quantity) + (varSithra02Neithal * varSithra02Quantity) + (varSithra03Neithal * varSithra03Quantity) + (varSithra04Neithal * varSithra04Quantity) + (varSithra05Neithal * varSithra05Quantity) + (varSithra06Neithal * varSithra06Quantity) + (varSithra07Neithal * varSithra07Quantity));
    varSithraLeensparTotal = ((varSithra01Leenspar * varSithra01Quantity) + (varSithra02Leenspar * varSithra02Quantity) + (varSithra03Leenspar * varSithra03Quantity) + (varSithra04Leenspar * varSithra04Quantity) + (varSithra05Leenspar * varSithra05Quantity) + (varSithra06Leenspar * varSithra06Quantity) + (varSithra07Leenspar * varSithra07Quantity));
    varSithraTheyrilTotal = ((varSithra01Theyril * varSithra01Quantity) + (varSithra02Theyril * varSithra02Quantity) + (varSithra03Theyril * varSithra03Quantity) + (varSithra04Theyril * varSithra04Quantity) + (varSithra05Theyril * varSithra05Quantity) + (varSithra06Theyril * varSithra06Quantity) + (varSithra07Theyril * varSithra07Quantity));
    varSithraAcidFibulaTotal = ((varSithra01AcidFibula * varSithra01Quantity) + (varSithra02AcidFibula * varSithra02Quantity) + (varSithra03AcidFibula * varSithra03Quantity) + (varSithra04AcidFibula * varSithra04Quantity) + (varSithra05AcidFibula * varSithra05Quantity) + (varSithra06AcidFibula * varSithra06Quantity) + (varSithra07AcidFibula * varSithra07Quantity));
    varSithraAcidBladeTotal = ((varSithra01AcidBlade * varSithra01Quantity) + (varSithra02AcidBlade * varSithra02Quantity) + (varSithra03AcidBlade * varSithra03Quantity) + (varSithra04AcidBlade * varSithra04Quantity) + (varSithra05AcidBlade * varSithra05Quantity) + (varSithra06AcidBlade * varSithra06Quantity) + (varSithra07AcidBlade * varSithra07Quantity));
    varSithraFireFibulaTotal = ((varSithra01FireFibula * varSithra01Quantity) + (varSithra02FireFibula * varSithra02Quantity) + (varSithra03FireFibula * varSithra03Quantity) + (varSithra04FireFibula * varSithra04Quantity) + (varSithra05FireFibula * varSithra05Quantity) + (varSithra06FireFibula * varSithra06Quantity) + (varSithra07FireFibula * varSithra07Quantity));
    varSithraFireBladeTotal = ((varSithra01FireBlade * varSithra01Quantity) + (varSithra02FireBlade * varSithra02Quantity) + (varSithra03FireBlade * varSithra03Quantity) + (varSithra04FireBlade * varSithra04Quantity) + (varSithra05FireBlade * varSithra05Quantity) + (varSithra06FireBlade * varSithra06Quantity) + (varSithra07FireBlade * varSithra07Quantity));
    varSithraPoisonFibulaTotal = ((varSithra01PoisonFibula * varSithra01Quantity) + (varSithra02PoisonFibula * varSithra02Quantity) + (varSithra03PoisonFibula * varSithra03Quantity) + (varSithra04PoisonFibula * varSithra04Quantity) + (varSithra05PoisonFibula * varSithra05Quantity) + (varSithra06PoisonFibula * varSithra06Quantity) + (varSithra07PoisonFibula * varSithra07Quantity));
    varSithraPoisonBladeTotal = ((varSithra01PoisonBlade * varSithra01Quantity) + (varSithra02PoisonBlade * varSithra02Quantity) + (varSithra03PoisonBlade * varSithra03Quantity) + (varSithra04PoisonBlade * varSithra04Quantity) + (varSithra05PoisonBlade * varSithra05Quantity) + (varSithra06PoisonBlade * varSithra06Quantity) + (varSithra07PoisonBlade * varSithra07Quantity));
    varSithraHolyFibulaTotal = ((varSithra01HolyFibula * varSithra01Quantity) + (varSithra02HolyFibula * varSithra02Quantity) + (varSithra03HolyFibula * varSithra03Quantity) + (varSithra04HolyFibula * varSithra04Quantity) + (varSithra05HolyFibula * varSithra05Quantity) + (varSithra06HolyFibula * varSithra06Quantity) + (varSithra07HolyFibula * varSithra07Quantity));
    varSithraHolyBladeTotal = ((varSithra01HolyBlade * varSithra01Quantity) + (varSithra02HolyBlade * varSithra02Quantity) + (varSithra03HolyBlade * varSithra03Quantity) + (varSithra04HolyBlade * varSithra04Quantity) + (varSithra05HolyBlade * varSithra05Quantity) + (varSithra06HolyBlade * varSithra06Quantity) + (varSithra07HolyBlade * varSithra07Quantity));
    varSithraUnholyFibulaTotal = ((varSithra01UnholyFibula * varSithra01Quantity) + (varSithra02UnholyFibula * varSithra02Quantity) + (varSithra03UnholyFibula * varSithra03Quantity) + (varSithra04UnholyFibula * varSithra04Quantity) + (varSithra05UnholyFibula * varSithra05Quantity) + (varSithra06UnholyFibula * varSithra06Quantity) + (varSithra07UnholyFibula * varSithra07Quantity));
    varSithraUnholyBladeTotal = ((varSithra01UnholyBlade * varSithra01Quantity) + (varSithra02UnholyBlade * varSithra02Quantity) + (varSithra03UnholyBlade * varSithra03Quantity) + (varSithra04UnholyBlade * varSithra04Quantity) + (varSithra05UnholyBlade * varSithra05Quantity) + (varSithra06UnholyBlade * varSithra06Quantity) + (varSithra07UnholyBlade * varSithra07Quantity));
    varSithraIceFibulaTotal = ((varSithra01IceFibula * varSithra01Quantity) + (varSithra02IceFibula * varSithra02Quantity) + (varSithra03IceFibula * varSithra03Quantity) + (varSithra04IceFibula * varSithra04Quantity) + (varSithra05IceFibula * varSithra05Quantity) + (varSithra06IceFibula * varSithra06Quantity) + (varSithra07IceFibula * varSithra07Quantity));
    varSithraIceBladeTotal = ((varSithra01IceBlade * varSithra01Quantity) + (varSithra02IceBlade * varSithra02Quantity) + (varSithra03IceBlade * varSithra03Quantity) + (varSithra04IceBlade * varSithra04Quantity) + (varSithra05IceBlade * varSithra05Quantity) + (varSithra06IceBlade * varSithra06Quantity) + (varSithra07IceBlade * varSithra07Quantity));
    varSithraLightningFibulaTotal = ((varSithra01LightningFibula * varSithra01Quantity) + (varSithra02LightningFibula * varSithra02Quantity) + (varSithra03LightningFibula * varSithra03Quantity) + (varSithra04LightningFibula * varSithra04Quantity) + (varSithra05LightningFibula * varSithra05Quantity) + (varSithra06LightningFibula * varSithra06Quantity) + (varSithra07LightningFibula * varSithra07Quantity));
    varSithraLightningBladeTotal = ((varSithra01LightningBlade * varSithra01Quantity) + (varSithra02LightningBlade * varSithra02Quantity) + (varSithra03LightningBlade * varSithra03Quantity) + (varSithra04LightningBlade * varSithra04Quantity) + (varSithra05LightningBlade * varSithra05Quantity) + (varSithra06LightningBlade * varSithra06Quantity) + (varSithra07LightningBlade * varSithra07Quantity));
}

//Sithra Calculations
function fnSithra()
{
    fnSithraSubPrice(varSithra01Gold,varSithra01Selentine,varSithra01Veilron,varSithra01Neithal,varSithra01Leenspar,varSithra01Theyril,varSithra01AcidFibula,varSithra01AcidBlade,varSithra01FireFibula,varSithra01FireBlade,varSithra01PoisonFibula,varSithra01PoisonBlade,varSithra01HolyFibula,varSithra01HolyBlade,varSithra01UnholyFibula,varSithra01UnholyBlade,varSithra01IceFibula,varSithra01IceBlade,varSithra01LightningFibula,varSithra01LightningBlade,varSithra01Success)
    varSithra01Price = varItemPrice;
    fnSithraSubPrice(varSithra02Gold,varSithra02Selentine,varSithra02Veilron,varSithra02Neithal,varSithra02Leenspar,varSithra02Theyril,varSithra02AcidFibula,varSithra02AcidBlade,varSithra02FireFibula,varSithra02FireBlade,varSithra02PoisonFibula,varSithra02PoisonBlade,varSithra02HolyFibula,varSithra02HolyBlade,varSithra02UnholyFibula,varSithra02UnholyBlade,varSithra02IceFibula,varSithra02IceBlade,varSithra02LightningFibula,varSithra02LightningBlade,varSithra02Success)
    varSithra02Price = varItemPrice;
    fnSithraSubPrice(varSithra03Gold,varSithra03Selentine,varSithra03Veilron,varSithra03Neithal,varSithra03Leenspar,varSithra03Theyril,varSithra03AcidFibula,varSithra03AcidBlade,varSithra03FireFibula,varSithra03FireBlade,varSithra03PoisonFibula,varSithra03PoisonBlade,varSithra03HolyFibula,varSithra03HolyBlade,varSithra03UnholyFibula,varSithra03UnholyBlade,varSithra03IceFibula,varSithra03IceBlade,varSithra03LightningFibula,varSithra03LightningBlade,varSithra03Success)
    varSithra03Price = varItemPrice;
    fnSithraSubPrice(varSithra04Gold,varSithra04Selentine,varSithra04Veilron,varSithra04Neithal,varSithra04Leenspar,varSithra04Theyril,varSithra04AcidFibula,varSithra04AcidBlade,varSithra04FireFibula,varSithra04FireBlade,varSithra04PoisonFibula,varSithra04PoisonBlade,varSithra04HolyFibula,varSithra04HolyBlade,varSithra04UnholyFibula,varSithra04UnholyBlade,varSithra04IceFibula,varSithra04IceBlade,varSithra04LightningFibula,varSithra04LightningBlade,varSithra04Success)
    varSithra04Price = varItemPrice;
    fnSithraSubPrice(varSithra05Gold,varSithra05Selentine,varSithra05Veilron,varSithra05Neithal,varSithra05Leenspar,varSithra05Theyril,varSithra05AcidFibula,varSithra05AcidBlade,varSithra05FireFibula,varSithra05FireBlade,varSithra05PoisonFibula,varSithra05PoisonBlade,varSithra05HolyFibula,varSithra05HolyBlade,varSithra05UnholyFibula,varSithra05UnholyBlade,varSithra05IceFibula,varSithra05IceBlade,varSithra05LightningFibula,varSithra05LightningBlade,varSithra05Success)
    varSithra05Price = varItemPrice;
    fnSithraSubPrice(varSithra06Gold,varSithra06Selentine,varSithra06Veilron,varSithra06Neithal,varSithra06Leenspar,varSithra06Theyril,varSithra06AcidFibula,varSithra06AcidBlade,varSithra06FireFibula,varSithra06FireBlade,varSithra06PoisonFibula,varSithra06PoisonBlade,varSithra06HolyFibula,varSithra06HolyBlade,varSithra06UnholyFibula,varSithra06UnholyBlade,varSithra06IceFibula,varSithra06IceBlade,varSithra06LightningFibula,varSithra06LightningBlade,varSithra06Success)
    varSithra06Price = varItemPrice;
    fnSithraSubPrice(varSithra07Gold,varSithra07Selentine,varSithra07Veilron,varSithra07Neithal,varSithra07Leenspar,varSithra07Theyril,varSithra07AcidFibula,varSithra07AcidBlade,varSithra07FireFibula,varSithra07FireBlade,varSithra07PoisonFibula,varSithra07PoisonBlade,varSithra07HolyFibula,varSithra07HolyBlade,varSithra07UnholyFibula,varSithra07UnholyBlade,varSithra07IceFibula,varSithra07IceBlade,varSithra07LightningFibula,varSithra07LightningBlade,varSithra07Success)
    varSithra07Price = varItemPrice;
}

function fnReloadSithraPrices()
{
    //Sithra Prices
    document.getElementById('Sithra01Price').value = varSithra01Price;
    document.getElementById('Sithra02Price').value = varSithra02Price;
    document.getElementById('Sithra03Price').value = varSithra03Price;
    document.getElementById('Sithra04Price').value = varSithra04Price;
    document.getElementById('Sithra05Price').value = varSithra05Price;
    document.getElementById('Sithra06Price').value = varSithra06Price;
    document.getElementById('Sithra07Price').value = varSithra07Price;

    //Sithra Total Prices
    document.getElementById('SithraTotal').value = varSithraTotal;
    document.getElementById('SithraGoldTotal').value = varSithraGoldTotal;
    document.getElementById('SithraSelentineTotal').value = varSithraSelentineTotal;
    document.getElementById('SithraVeilronTotal').value = varSithraVeilronTotal;
    document.getElementById('SithraNeithalTotal').value = varSithraNeithalTotal;
    document.getElementById('SithraLeensparTotal').value = varSithraLeensparTotal;
    document.getElementById('SithraTheyrilTotal').value = varSithraTheyrilTotal;
    document.getElementById('SithraAcidFibulaTotal').value = varSithraAcidFibulaTotal;
    document.getElementById('SithraAcidBladeTotal').value = varSithraAcidBladeTotal;
    document.getElementById('SithraFireFibulaTotal').value = varSithraFireFibulaTotal;
    document.getElementById('SithraFireBladeTotal').value = varSithraFireBladeTotal;
    document.getElementById('SithraPoisonFibulaTotal').value = varSithraPoisonFibulaTotal;
    document.getElementById('SithraPoisonBladeTotal').value = varSithraPoisonBladeTotal;
    document.getElementById('SithraHolyFibulaTotal').value = varSithraHolyFibulaTotal;
    document.getElementById('SithraHolyBladeTotal').value = varSithraHolyBladeTotal;
    document.getElementById('SithraUnholyFibulaTotal').value = varSithraUnholyFibulaTotal;
    document.getElementById('SithraUnholyBladeTotal').value = varSithraUnholyBladeTotal;
    document.getElementById('SithraIceFibulaTotal').value = varSithraIceFibulaTotal;
    document.getElementById('SithraIceBladeTotal').value = varSithraIceBladeTotal;
    document.getElementById('SithraLightningFibulaTotal').value = varSithraLightningFibulaTotal;
    document.getElementById('SithraLightningBladeTotal').value = varSithraLightningBladeTotal;
}

function fnSithraInitialize()
{
    varSithraTotal = document.getElementById("SithraTotal").value;
    varSithraGoldTotal = document.getElementById("SithraGoldTotal").value;
    varSithraSelentineTotal = document.getElementById("SithraSelentineTotal").value;
    varSithraVeilronTotal = document.getElementById("SithraVeilronTotal").value;
    varSithraNeithalTotal = document.getElementById("SithraNeithalTotal").value;
    varSithraLeensparTotal = document.getElementById("SithraLeensparTotal").value;
    varSithraTheyrilTotal = document.getElementById("SithraTheyrilTotal").value;
    varSithraAcidFibulaTotal = document.getElementById("SithraAcidFibulaTotal").value;
    varSithraAcidBladeTotal = document.getElementById("SithraAcidBladeTotal").value;
    varSithraFireFibulaTotal = document.getElementById("SithraFireFibulaTotal").value;
    varSithraFireBladeTotal = document.getElementById("SithraFireBladeTotal").value;
    varSithraPoisonFibulaTotal = document.getElementById("SithraPoisonFibulaTotal").value;
    varSithraPoisonBladeTotal = document.getElementById("SithraPoisonBladeTotal").value;
    varSithraHolyFibulaTotal = document.getElementById("SithraHolyFibulaTotal").value;
    varSithraHolyBladeTotal = document.getElementById("SithraHolyBladeTotal").value;
    varSithraUnholyFibulaTotal = document.getElementById("SithraUnholyFibulaTotal").value;
    varSithraUnholyBladeTotal = document.getElementById("SithraUnholyBladeTotal").value;
    varSithraIceFibulaTotal = document.getElementById("SithraIceFibulaTotal").value;
    varSithraIceBladeTotal = document.getElementById("SithraIceBladeTotal").value;
    varSithraLightningFibulaTotal = document.getElementById("SithraLightningFibulaTotal").value;
    varSithraLightningBladeTotal = document.getElementById("SithraLightningBladeTotal").value;

    // *** Sithra VARIABLES ***
	//Betrayer
    varSithra01Quantity = document.getElementById("Sithra01Quantity").value;
    varSithra01Price = document.getElementById("Sithra01Price").value;
    varSithra01Success = document.getElementById("Sithra01Success").value;
    varSithra01Gold = 5000
    varSithra01Selentine = 0
    varSithra01Veilron = 0
    varSithra01Neithal = 5
    varSithra01Leenspar = 0
    varSithra01Theyril = 0
    varSithra01AcidFibula = 1
    varSithra01AcidBlade = 1
    varSithra01FireFibula = 0
    varSithra01FireBlade = 0
    varSithra01PoisonFibula = 0
    varSithra01PoisonBlade = 0
    varSithra01HolyFibula = 0
    varSithra01HolyBlade = 0
    varSithra01UnholyFibula = 0
    varSithra01UnholyBlade = 0
    varSithra01IceFibula = 0
    varSithra01IceBlade = 0
    varSithra01LightningFibula = 0
    varSithra01LightningBlade = 0
    
    //Conqueror
    varSithra02Quantity = document.getElementById("Sithra02Quantity").value;
    varSithra02Price = document.getElementById("Sithra02Price").value;
    varSithra02Success = document.getElementById("Sithra02Success").value;
    varSithra02Gold = 5000
    varSithra02Selentine = 0
    varSithra02Veilron = 0
    varSithra02Neithal = 0
    varSithra02Leenspar = 5
    varSithra02Theyril = 0
    varSithra02AcidFibula = 0
    varSithra02AcidBlade = 0
    varSithra02FireFibula = 1
    varSithra02FireBlade = 1
    varSithra02PoisonFibula = 0
    varSithra02PoisonBlade = 0
    varSithra02HolyFibula = 0
    varSithra02HolyBlade = 0
    varSithra02UnholyFibula = 0
    varSithra02UnholyBlade = 0
    varSithra02IceFibula = 0
    varSithra02IceBlade = 0
    varSithra02LightningFibula = 0
    varSithra02LightningBlade = 0
    
    //Plaguebearer
    varSithra03Quantity = document.getElementById("Sithra03Quantity").value;
    varSithra03Price = document.getElementById("Sithra03Price").value;
    varSithra03Success = document.getElementById("Sithra03Success").value;
    varSithra03Gold = 5000
    varSithra03Selentine = 0
    varSithra03Veilron = 0
    varSithra03Neithal = 0
    varSithra03Leenspar = 5
    varSithra03Theyril = 0
    varSithra03AcidFibula = 0
    varSithra03AcidBlade = 0
    varSithra03FireFibula = 0
    varSithra03FireBlade = 0
    varSithra03PoisonFibula = 1
    varSithra03PoisonBlade = 1
    varSithra03HolyFibula = 0
    varSithra03HolyBlade = 0
    varSithra03UnholyFibula = 0
    varSithra03UnholyBlade = 0
    varSithra03IceFibula = 0
    varSithra03IceBlade = 0
    varSithra03LightningFibula = 0
    varSithra03LightningBlade = 0
    
    //Redeemer
    varSithra04Quantity = document.getElementById("Sithra04Quantity").value;
    varSithra04Price = document.getElementById("Sithra04Price").value;
    varSithra04Success = document.getElementById("Sithra04Success").value;
    varSithra04Gold = 5000
    varSithra04Selentine = 0
    varSithra04Veilron = 0
    varSithra04Neithal = 0
    varSithra04Leenspar = 0
    varSithra04Theyril = 4
    varSithra04AcidFibula = 0
    varSithra04AcidBlade = 0
    varSithra04FireFibula = 0
    varSithra04FireBlade = 0
    varSithra04PoisonFibula = 0
    varSithra04PoisonBlade = 0
    varSithra04HolyFibula = 1
    varSithra04HolyBlade = 1
    varSithra04UnholyFibula = 0
    varSithra04UnholyBlade = 0
    varSithra04IceFibula = 0
    varSithra04IceBlade = 0
    varSithra04LightningFibula = 0
    varSithra04LightningBlade = 0
    
    //Shadebringer
    varSithra05Quantity = document.getElementById("Sithra05Quantity").value;
    varSithra05Price = document.getElementById("Sithra05Price").value;
    varSithra05Success = document.getElementById("Sithra05Success").value;
    varSithra05Gold = 5000
    varSithra05Selentine = 0
    varSithra05Veilron = 0
    varSithra05Neithal = 0
    varSithra05Leenspar = 0
    varSithra05Theyril = 4
    varSithra05AcidFibula = 0
    varSithra05AcidBlade = 0
    varSithra05FireFibula = 0
    varSithra05FireBlade = 0
    varSithra05PoisonFibula = 0
    varSithra05PoisonBlade = 0
    varSithra05HolyFibula = 0
    varSithra05HolyBlade = 0
    varSithra05UnholyFibula = 1
    varSithra05UnholyBlade = 1
    varSithra05IceFibula = 0
    varSithra05IceBlade = 0
    varSithra05LightningFibula = 0
    varSithra05LightningBlade = 0
    
    //Souleater
    varSithra06Quantity = document.getElementById("Sithra06Quantity").value;
    varSithra06Price = document.getElementById("Sithra06Price").value;
    varSithra06Success = document.getElementById("Sithra06Success").value;
    varSithra06Gold = 5000
    varSithra06Selentine = 5
    varSithra06Veilron = 0
    varSithra06Neithal = 0
    varSithra06Leenspar = 0
    varSithra06Theyril = 0
    varSithra06AcidFibula = 0
    varSithra06AcidBlade = 0
    varSithra06FireFibula = 0
    varSithra06FireBlade = 0
    varSithra06PoisonFibula = 0
    varSithra06PoisonBlade = 0
    varSithra06HolyFibula = 0
    varSithra06HolyBlade = 0
    varSithra06UnholyFibula = 0
    varSithra06UnholyBlade = 0
    varSithra06IceFibula = 1
    varSithra06IceBlade = 1
    varSithra06LightningFibula = 0
    varSithra06LightningBlade = 0
    
    //Stormcaller
    varSithra07Quantity = document.getElementById("Sithra07Quantity").value;
    varSithra07Price = document.getElementById("Sithra07Price").value;
    varSithra07Success = document.getElementById("Sithra07Success").value;
    varSithra07Gold = 5000
    varSithra07Selentine = 0
    varSithra07Veilron = 5
    varSithra07Neithal = 0
    varSithra07Leenspar = 0
    varSithra07Theyril = 0
    varSithra07AcidFibula = 0
    varSithra07AcidBlade = 0
    varSithra07FireFibula = 0
    varSithra07FireBlade = 0
    varSithra07PoisonFibula = 0
    varSithra07PoisonBlade = 0
    varSithra07HolyFibula = 0
    varSithra07HolyBlade = 0
    varSithra07UnholyFibula = 0
    varSithra07UnholyBlade = 0
    varSithra07IceFibula = 0
    varSithra07IceBlade = 0
    varSithra07LightningFibula = 1
    varSithra07LightningBlade = 1
}

//-->
