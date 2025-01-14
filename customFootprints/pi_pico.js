module.exports = {
  nets: {
    RAW: "RAW",
    GND: "GND",
    RST: "RST",
    VCC: "VCC",
    R1: "R1",
    R2: "R2",
    R3: "R3",
    R4: "R4",
    C1: "C1",
    C2: "C2",
    C3: "C3",
    C4: "C4",
    C5: "C5",
    C6: "C6",
    C7: "C7",
    C8: "C8",
    C9: "C9",
    C10: "C10",
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
    (fp_text user "${p.ref}" (at 0 0 180) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
      (tstamp e8e10518-f244-4710-b94d-fad19b8c673f)
    )
    

    ${"" /* fp_line footprint references start */}
    (fp_line (start 10.5 -0.2) (end 10.5 0.2) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -5.3) (end 10.5 -4.9) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 12.5) (end 10.5 12.9) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -15.4) (end -10.5 -15) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -5.3) (end -10.5 -4.9) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 15.1) (end -10.5 15.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 15.1) (end 10.5 15.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 20.1) (end 10.5 20.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 2.3) (end -10.5 2.7) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -0.2) (end -10.5 0.2) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -2.7) (end -10.5 -2.3) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -23.1) (end -10.5 -22.7) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -12.9) (end 10.5 -12.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -18) (end -10.5 -17.6) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -10.4) (end 10.5 -10) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 2.3) (end 10.5 2.7) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 22.7) (end 10.5 23.1) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 7.4) (end 10.5 7.8) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -7.8) (end 10.5 -7.4) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 17.6) (end -10.5 18) (layer "F.SilkS") (width 0.12))
    (fp_line (start 1.1 25.5) (end 1.5 25.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 12.5) (end -10.5 12.9) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 7.4) (end -10.5 7.8) (layer "F.SilkS") (width 0.12))
    (fp_line (start -7.493 -22.833) (end -7.493 -25.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 17.6) (end 10.5 18) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -22.833) (end -7.493 -22.833) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -20.5) (end 10.5 -20.1) (layer "F.SilkS") (width 0.12))
    (fp_line (start -1.5 25.5) (end -1.1 25.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -23.1) (end 10.5 -22.7) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -10.4) (end -10.5 -10) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 20.1) (end -10.5 20.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 4.9) (end 10.5 5.3) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -20.5) (end -10.5 -20.1) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -12.9) (end -10.5 -12.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -18) (end 10.5 -17.6) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -15.4) (end 10.5 -15) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -2.7) (end 10.5 -2.3) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -25.5) (end -10.5 -25.2) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 25.5) (end 3.7 25.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 10) (end -10.5 10.4) (layer "F.SilkS") (width 0.12))
    (fp_line (start -3.7 25.5) (end -10.5 25.5) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 -25.5) (end 10.5 -25.2) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 -7.8) (end -10.5 -7.4) (layer "F.SilkS") (width 0.12))
    (fp_line (start 10.5 10) (end 10.5 10.4) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 22.7) (end -10.5 23.1) (layer "F.SilkS") (width 0.12))
    (fp_line (start -10.5 4.9) (end -10.5 5.3) (layer "F.SilkS") (width 0.12))
    (fp_poly (pts
        (xy -1.5 -14)
        (xy -3.5 -14)
        (xy -3.5 -16)
        (xy -1.5 -16)
      ) (layer "Dwgs.User") (width 0.1) (fill solid))
    (fp_poly (pts
        (xy 3.7 -20.2)
        (xy -3.7 -20.2)
        (xy -3.7 -24.9)
        (xy 3.7 -24.9)
      ) (layer "Dwgs.User") (width 0.1) (fill solid))
    (fp_poly (pts
        (xy -1.5 -11.5)
        (xy -3.5 -11.5)
        (xy -3.5 -13.5)
        (xy -1.5 -13.5)
      ) (layer "Dwgs.User") (width 0.1) (fill solid))
    (fp_poly (pts
        (xy -1.5 -16.5)
        (xy -3.5 -16.5)
        (xy -3.5 -18.5)
        (xy -1.5 -18.5)
      ) (layer "Dwgs.User") (width 0.1) (fill solid))
    (fp_line (start -11 -26) (end 11 -26) (layer "F.CrtYd") (width 0.12))
    (fp_line (start 11 26) (end -11 26) (layer "F.CrtYd") (width 0.12))
    (fp_line (start 11 -26) (end 11 26) (layer "F.CrtYd") (width 0.12))
    (fp_line (start -11 26) (end -11 -26) (layer "F.CrtYd") (width 0.12))
    (fp_line (start 10.5 25.5) (end -10.5 25.5) (layer "F.Fab") (width 0.12))
    (fp_line (start -10.5 -24.2) (end -9.2 -25.5) (layer "F.Fab") (width 0.12))
    (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer "F.Fab") (width 0.12))
    (fp_line (start -10.5 25.5) (end -10.5 -25.5) (layer "F.Fab") (width 0.12))
    (fp_line (start 10.5 -25.5) (end 10.5 25.5) (layer "F.Fab") (width 0.12))

    ${"" /* pad footprint references start */}
    (pad "" np_thru_hole oval (at -2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at -2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
    (pad "" np_thru_hole oval (at 2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
    (pad "1" thru_hole oval (at -8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C10.str
    })
    (pad "1" smd rect (at -8.89 -24.13) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C10.str
    })
    (pad "2" smd rect (at -8.89 -21.59) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C9.str
    })
    (pad "2" thru_hole oval (at -8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C9.str
    })
    (pad "3" thru_hole rect (at -8.89 -19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "3" smd rect (at -8.89 -19.05) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "4" thru_hole oval (at -8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C8.str
    })
    (pad "4" smd rect (at -8.89 -16.51) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C8.str
    })
    (pad "5" thru_hole oval (at -8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C7.str
    })
    (pad "5" smd rect (at -8.89 -13.97) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C7.str
    })
    (pad "6" thru_hole oval (at -8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C6.str
    })
    (pad "6" smd rect (at -8.89 -11.43) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C6.str
    })
    (pad "7" thru_hole oval (at -8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.R1.str
    })
    (pad "7" smd rect (at -8.89 -8.89) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.R1.str
    })
    (pad "8" thru_hole rect (at -8.89 -6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "8" smd rect (at -8.89 -6.35) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "9" smd rect (at -8.89 -3.81) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.R2.str
    })
    (pad "9" thru_hole oval (at -8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.R2.str
    })
    (pad "10" thru_hole oval (at -8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.R3.str
    })
    (pad "10" smd rect (at -8.89 -1.27) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.R3.str
    })
    (pad "11" thru_hole oval (at -8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.R4.str
    })
    (pad "11" smd rect (at -8.89 1.27) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.R4.str
    })
    (pad "12" thru_hole oval (at -8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "12" smd rect (at -8.89 3.81) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "13" thru_hole rect (at -8.89 6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "13" smd rect (at -8.89 6.35) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "14" thru_hole oval (at -8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "14" smd rect (at -8.89 8.89) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "15" thru_hole oval (at -8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "15" smd rect (at -8.89 11.43) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "16" smd rect (at -8.89 13.97) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "16" thru_hole oval (at -8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "17" thru_hole oval (at -8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "17" smd rect (at -8.89 16.51) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "18" smd rect (at -8.89 19.05) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "18" thru_hole rect (at -8.89 19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "19" thru_hole oval (at -8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "19" smd rect (at -8.89 21.59) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "20" thru_hole oval (at -8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "20" smd rect (at -8.89 24.13) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "21" smd rect (at 8.89 24.13) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "21" thru_hole oval (at 8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "22" smd rect (at 8.89 21.59) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "22" thru_hole oval (at 8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "23" smd rect (at 8.89 19.05) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "23" thru_hole rect (at 8.89 19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "24" smd rect (at 8.89 16.51) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "24" thru_hole oval (at 8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "25" thru_hole oval (at 8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "25" smd rect (at 8.89 13.97) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "26" thru_hole oval (at 8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C5.str
    })
    (pad "26" smd rect (at 8.89 11.43) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C5.str
    })
    (pad "27" thru_hole oval (at 8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C4.str
    })
    (pad "27" smd rect (at 8.89 8.89) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C4.str
    })
    (pad "28" smd rect (at 8.89 6.35) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "28" thru_hole rect (at 8.89 6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "29" thru_hole oval (at 8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C3.str
    })
    (pad "29" smd rect (at 8.89 3.81) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C3.str
    })
    (pad "30" thru_hole oval (at 8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "30" smd rect (at 8.89 1.27) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "31" thru_hole oval (at 8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C2.str
    })
    (pad "31" smd rect (at 8.89 -1.27) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C2.str
    })
    (pad "32" thru_hole oval (at 8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${
      p.net.C1.str
    })
    (pad "32" smd rect (at 8.89 -3.81) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask") ${
      p.net.C1.str
    })
    (pad "33" thru_hole rect (at 8.89 -6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "33" smd rect (at 8.89 -6.35) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "34" thru_hole oval (at 8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "34" smd rect (at 8.89 -8.89) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "35" thru_hole oval (at 8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "35" smd rect (at 8.89 -11.43) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "36" thru_hole oval (at 8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "36" smd rect (at 8.89 -13.97) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "37" thru_hole oval (at 8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "37" smd rect (at 8.89 -16.51) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "38" smd rect (at 8.89 -19.05) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "38" thru_hole rect (at 8.89 -19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "39" smd rect (at 8.89 -21.59) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "39" thru_hole oval (at 8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "40" thru_hole oval (at 8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "40" smd rect (at 8.89 -24.13) (size 3.5 1.7) (drill (offset 0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "41" smd rect (at -2.54 23.9 90) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "41" thru_hole oval (at -2.54 23.9) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "42" smd rect (at 0 23.9 90) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))
    (pad "42" thru_hole rect (at 0 23.9) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "43" thru_hole oval (at 2.54 23.9) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask))
    (pad "43" smd rect (at 2.54 23.9 90) (size 3.5 1.7) (drill (offset -0.9 0)) (layers "F.Cu" "F.Mask"))

    ${"" /* end of module below */}
    ) 
    `;
  },
};
