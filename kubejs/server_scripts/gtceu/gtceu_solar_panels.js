ServerEvents.recipes(event => {

  // Supprimer uniquement les recettes ULV et LV
  event.remove({ output: 'gtceu:ulv_solar_panel' });
  event.remove({ output: 'gtceu:lv_solar_panel' });

  // ULV
  event.shaped('gtceu:ulv_solar_panel', [
    'PHP',
    'CBC',
    'GDG'
  ], {
    P: 'gtceu:bronze_plate',
    C: '#gtceu:circuits/lv',
    B: '#gtceu:batteries/ulv',
    D: 'gtceu:lead_single_cable',
    G: '#forge:glass_panes/colorless',
    H: 'gtceu:solar_panel'
  });

  // LV
  event.shaped('gtceu:lv_solar_panel', [
    'PHP',
    'CBC',
    'GDG'
  ], {
    P: 'gtceu:steel_plate',
    C: '#gtceu:circuits/lv',
    B: '#gtceu:batteries/lv',
    D: 'gtceu:tin_single_cable',
    G: '#forge:glass_panes/colorless',
    H: 'gtceu:ulv_solar_panel'
  });

  // MV
  event.shaped('gtceu:mv_solar_panel', [
    'PHP',
    'CBC',
    'GDG'
  ], {
    P: 'gtceu:aluminium_plate',
    C: '#gtceu:circuits/mv',
    B: '#gtceu:batteries/mv',
    D: 'gtceu:copper_single_cable',
    G: '#forge:glass_panes/colorless',
    H: 'gtceu:lv_solar_panel'
  });

  // HV
  event.shaped('gtceu:hv_solar_panel', [
    'PHP',
    'CBC',
    'GDG'
  ], {
    P: 'gtceu:stainless_steel_plate',
    C: '#gtceu:circuits/hv',
    B: '#gtceu:batteries/hv',
    D: 'gtceu:gold_single_cable',
    G: '#forge:glass_panes/colorless',
    H: 'gtceu:mv_solar_panel'
  });

  // EV
  event.shaped('gtceu:ev_solar_panel', [
    'PHP',
    'CBC',
    'GDG'
  ], {
    P: 'gtceu:titanium_plate',
    C: '#gtceu:circuits/ev',
    B: '#gtceu:batteries/ev',
    D: 'gtceu:aluminium_single_cable',
    G: '#forge:glass_panes/colorless',
    H: 'gtceu:hv_solar_panel'
  });

  // IV
  event.shaped('gtceu:iv_solar_panel', [
    'PHP',
    'CBC',
    'GDG'
  ], {
    P: 'gtceu:tungsten_steel_plate',
    C: '#gtceu:circuits/iv',
    B: '#gtceu:batteries/iv',
    D: 'gtceu:platinum_single_cable',
    G: '#forge:glass_panes/colorless',
    H: 'gtceu:ev_solar_panel'
  });

  // LuV
  event.shaped('gtceu:luv_solar_panel', [
    'PHP',
    'CBC',
    'GDG'
  ], {
    P: 'gtceu:naquadah_alloy_plate',
    C: '#gtceu:circuits/luv',
    B: '#gtceu:batteries/luv',
    D: 'gtceu:osmium_single_cable',
    G: '#forge:glass_panes/colorless',
    H: 'gtceu:iv_solar_panel'
  });

  // ZPM
  event.shaped('gtceu:zpm_solar_panel', [
    'PHP',
    'CBC',
    'GDG'
  ], {
    P: 'gtceu:duranium_plate',
    C: '#gtceu:circuits/zpm',
    B: '#gtceu:batteries/zpm',
    D: 'gtceu:naquadah_single_cable',
    G: '#forge:glass_panes/colorless',
    H: 'gtceu:luv_solar_panel'
  });

  // UV
  event.shaped('gtceu:uv_solar_panel', [
    'PHP',
    'CBC',
    'GDG'
  ], {
    P: 'gtceu:trinium_plate',
    C: '#gtceu:circuits/uv',
    B: '#gtceu:batteries/uv',
    D: 'gtceu:yttrium_barium_cuprate_single_cable',
    G: '#forge:glass_panes/colorless',
    H: 'gtceu:zpm_solar_panel'
  });

});
