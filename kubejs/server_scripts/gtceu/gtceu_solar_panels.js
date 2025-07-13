ServerEvents.recipes(event => {

  const panels = [
    {
      id: 'ulv_solar_panel',
      plate: 'bronze_plate',
      circuit: 'ulv_circuit',
      battery: 'ulv_battery',
      cable: 'copper_single_cable'
    },
    {
      id: 'lv_solar_panel',
      plate: 'steel_plate',
      circuit: 'lv_circuit',
      battery: 'lv_battery',
      cable: 'tin_single_cable'
    },
    {
      id: 'mv_solar_panel',
      plate: 'aluminium_plate',
      circuit: 'mv_circuit',
      battery: 'mv_battery',
      cable: 'copper_single_cable'
    },
    {
      id: 'hv_solar_panel',
      plate: 'stainless_steel_plate',
      circuit: 'hv_circuit',
      battery: 'hv_battery',
      cable: 'gold_single_cable'
    },
    {
      id: 'ev_solar_panel',
      plate: 'titanium_plate',
      circuit: 'ev_circuit',
      battery: 'ev_battery',
      cable: 'aluminium_single_cable'
    },
    {
      id: 'iv_solar_panel',
      plate: 'tungsten_steel_plate',
      circuit: 'iv_circuit',
      battery: 'iv_battery',
      cable: 'platinum_single_cable'
    },
    {
      id: 'luv_solar_panel',
      plate: 'naquadah_alloy_plate',
      circuit: 'luv_circuit',
      battery: 'luv_battery',
      cable: 'naquadah_single_cable'
    },
    {
      id: 'zpm_solar_panel',
      plate: 'duranium_plate',
      circuit: 'zpm_circuit',
      battery: 'zpm_battery',
      cable: 'tungsten_copper_single_cable'
    },
    {
      id: 'uv_solar_panel',
      plate: 'trinium_plate',
      circuit: 'uv_circuit',
      battery: 'uv_battery',
      cable: 'yttrium_barium_cuprate_single_cable'
    }
  ];

  panels.forEach(p => {
    event.shaped(`gtceu:${p.id}`, [
      'PCP',
      'CBC',
      'GDG'
    ], {
      P: `gtceu:${p.plate}`,
      C: `gtceu:${p.circuit}`,
      B: `gtceu:${p.battery}`,
      D: `gtceu:${p.cable}`,
      G: 'minecraft:glass_pane'
    });
  });

});
