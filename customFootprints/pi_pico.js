module.exports = {
  nets: {
    RAW: "RAW",
    GND: "GND",
    RST: "RST",
    VCC: "VCC",
    P21: "P21",
    P20: "P20",
    P19: "P19",
    P18: "P18",
    P15: "P15",
    P14: "P14",
    P16: "P16",
    P10: "P10",
    P1: "P1",
    P0: "P0",
    P2: "P2",
    P3: "P3",
    P4: "P4",
    P5: "P5",
    P6: "P6",
    P7: "P7",
    P8: "P8",
    P9: "P9",
  },
  params: {
    class: "MCU",
  },
  body: (p) => {
    return `
      (module MCU_RaspberryPi_and_Boards:RPi_Pico_SMD_TH (layer F.Cu) (tedit 6224DF39)
        ${p.at /* parametric position */}
  
      ${"" /* footprint description, tags and reference */}
      (descr "Through hole straight pin header, 2x20, 2.54mm pitch, double rows")
      (tags "Through hole pin header THT 2x20 2.54mm double row")
      (attr through_hole)

      ${"" /* footprint text references */}
      (fp_text reference "${p.ref}" (at 0 0 ${p.rot + 90}) (layer F.SilkS) ${
      p.ref_hide
    }
        (effects (font (size 1 1) (thickness 0.15)))
      )
      

    (fp_text value "RPi_Pico_SMD_TH" (at 0 2.159) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text user "GND" (at -12.8 19.05 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP16" (at 13.054 24.13 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP21" (at 13.054 8.9 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP4" (at -12.8 -11.43 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GND" (at -12.8 -6.35 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GND" (at 12.8 -19.05 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP11" (at -13.2 11.43 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GND" (at 12.8 6.35 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP28" (at 13.054 -9.144 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
      (tstamp 32f45ba9-59d9-45a5-b76c-8cd243906b73)
    )
    (fp_text user "GP9" (at -12.8 3.81 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "3V3" (at 12.9 -13.9 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP5" (at -12.8 -8.89 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "3V3_EN" (at 13.7 -17.2 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP3" (at -12.8 -13.97 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP1" (at -12.9 -21.6 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP26" (at 13.054 -1.27 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP10" (at -13.054 8.89 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GND" (at 12.8 19.05 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP27" (at 13.054 -3.8 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP14" (at -13.1 21.59 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP22" (at 13.054 3.81 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "RUN" (at 13 1.27 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP7" (at -12.7 -1.3 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP18" (at 13.054 16.51 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP12" (at -13.2 13.97 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "AGND" (at 13.054 -6.35 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP8" (at -12.8 1.27 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP13" (at -13.054 16.51 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP0" (at -12.8 -24.13 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
      (tstamp ab692f3c-2958-44a9-ad2f-9d7ca9161dfb)
    )
    (fp_text user "GP2" (at -12.9 -16.51 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP15" (at -13.054 24.13 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GND" (at -12.8 -19.05 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP20" (at 13.054 11.43 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "VSYS" (at 13.2 -21.59 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP17" (at 13.054 21.59 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP19" (at 13.054 13.97 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GND" (at -12.8 6.35 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "SWDIO" (at 5.6 26.2) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "VBUS" (at 13.3 -24.2 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "GP6" (at -12.8 -3.81 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "SWCLK" (at -5.7 26.2) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "ADC_VREF" (at 14 -12.5 45) (layer "F.SilkS")
      (effects (font (size 0.8 0.8) (thickness 0.15)))
    )
    (fp_text user "Copper Keepouts shown on Dwgs layer" (at 0.1 -30.2) (layer "Cmts.User")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    
    ) 
    `;
  },
};
