module.exports = {
  nets: {
    RAW: "RAW",
    GND: "GND",
    RST: "RST",
    VCC: "VCC",
    TOUCH1: "TOUCH1",
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
      (module ESP32:ESP32-S3-DevKitC (layer F.Cu) (tedit 6224DF39)
        ${p.at /* parametric position */}
  
      ${"" /* footprint description, tags and reference */}
      (descr "ESP32-S3 general-purpose development board, based on ESP32-S3-WROOM-1 or ESP32-S3-WROOM-1U,It has all the ESP32-S3 pins exposed and is easy to connect and use.")
      (tags "ESP32-S3")
      (attr through_hole)

      ${"" /* footprint text references */}
      (fp_text reference "${p.ref}" (at 0 0 ${p.rot + 90}) (layer F.SilkS) ${
      p.ref_hide
    }
        (effects (font (size 1 1) (thickness 0.15)))
      )
      
      (fp_text value "ESP32-S3-DevKitC" (at 11.42632 29.46128 90) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text user "IO7" (at 1.27 15.24 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO44/U0RXD" (at 21.59 5.08 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO13" (at 1.27 45.72 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO8" (at 1.27 27.94 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO9" (at 1.27 35.56 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO12" (at 1.27 43.18 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO0" (at 25 33.02 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "GND" (at 21.59 50.8 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO17" (at 1.27 22.86 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO37" (at 25 25.4 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO4" (at 1.27 7.62 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "GND" (at 21.59 0 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO3" (at 1.27 30.48 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO40/MTDO" (at 21.59 17.78 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO42/MTMS" (at 21.59 12.7 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO21" (at 25 43.18 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO15" (at 1.27 17.78 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO35" (at 25 30.48 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO2" (at 25 10.16 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO19" (at 25 48.26 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO1" (at 25 7.62 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "5V" (at 1.52032 50.79728 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO48" (at 25 38.1 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO14" (at 1.27 48.26 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO39/MTCK" (at 21.59 20.32 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO20" (at 25 45.72 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO43/U0TXD" (at 21.59 2.54 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "GND" (at 1.52032 53.33728 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO6" (at 1.27 12.7 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO41/MTDI" (at 21.59 15.24 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO16" (at 1.27 20.32 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO5" (at 1.27 10.16 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "EN/RESET" (at 8.88632 5.07728 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO46" (at 1.27 33.02 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "3V3" (at 1.27 2.54 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO47" (at 25 40.64 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO10" (at 1.27 38.1 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO11" (at 1.27 40.64 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO45" (at 25 35.56 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO36" (at 25 27.94 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "GND" (at 21.59 53.34 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "IO18" (at 1.27 25.4 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "IO38" (at 25 22.86 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify right))
    )
    (fp_text user "3V3" (at 1.27 0 unlocked) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)) (justify left))
    )
    (fp_text user "REF**" (at -0.00368 -0.00272) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    

    ${"" /* fp_line footprint references start */}
    (fp_line (start 24.359999 62.79728) (end 24.36 -1.1) (layer "F.SilkS") (width 0.12))
    (fp_line (start -1.5 62.79728) (end 24.359999 62.79728) (layer "F.SilkS") (width 0.12))
    (fp_line (start -1.499999 -1.1) (end -1.5 62.79728) (layer "F.SilkS") (width 0.12))
    (fp_line (start 24.36 -1.1) (end -1.499999 -1.1) (layer "F.SilkS") (width 0.12))
    (fp_line (start 2.46012 -1.12032) (end 2.46012 -7.01312) (layer "F.SilkS") (width 0.12))
    (fp_line (start 2.46012 -7.01312) (end 20.44332 -7.01312) (layer "F.SilkS") (width 0.12))
    (fp_line (start 20.44332 -7.01312) (end 20.44332 -1.12032) (layer "F.SilkS") (width 0.12))
    (fp_line (start 24.11 -0.85) (end 24.11 62.54728) (layer "F.CrtYd") (width 0.05))
    (fp_line (start -1.25 -0.85) (end 24.11 -0.85) (layer "F.CrtYd") (width 0.05))
    (fp_line (start -1.25 62.54728) (end -1.25 -0.85) (layer "F.CrtYd") (width 0.05))
    (fp_line (start 24.11 62.54728) (end -1.25 62.54728) (layer "F.CrtYd") (width 0.05))
    

    ${"" /* pad footprint references start */}
    (pad "1" thru_hole rect (at 0 0 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "2" thru_hole oval (at 0 2.54 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "3" thru_hole oval (at 0 5.08 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "4" thru_hole oval (at 0 7.62 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.TOUCH1.str
    })
    (pad "5" thru_hole oval (at 0 10.16 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask)  ${
      p.net.C10.str
    })
    (pad "6" thru_hole oval (at 0 12.7 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask)  ${
      p.net.C9.str
    })
    (pad "7" thru_hole oval (at 0 15.24 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask)  ${
      p.net.C8.str
    })
    (pad "8" thru_hole oval (at 0 17.78 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.C7.str
    })
    (pad "9" thru_hole oval (at 0 20.32 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.C6.str
    })
    (pad "10" thru_hole oval (at 0 22.86 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.R4.str
    })
    (pad "11" thru_hole oval (at 0 25.4 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.R3.str
    })
    (pad "12" thru_hole oval (at 0 27.94 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "13" thru_hole oval (at 0 30.48 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "14" thru_hole oval (at 0 33.02 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "15" thru_hole oval (at 0 35.56 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "16" thru_hole oval (at 0 38.1 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "17" thru_hole oval (at 0 40.64 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "18" thru_hole oval (at 0 43.18 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "19" thru_hole oval (at 0 45.72 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "20" thru_hole oval (at -0.00368 48.25728 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "21" thru_hole oval (at -0.00368 50.79728 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "22" thru_hole oval (at -0.00368 53.33728 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "23" thru_hole oval (at 22.86 53.34 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "24" thru_hole oval (at 22.86 50.8 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "25" thru_hole oval (at 22.86 48.26 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "26" thru_hole oval (at 22.86 45.72 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "27" thru_hole oval (at 22.86 43.18 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.C1.str
    })
    (pad "28" thru_hole oval (at 22.86 40.64 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.C2.str
    })
    (pad "29" thru_hole oval (at 22.86 38.1 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.C3.str
    })
    (pad "30" thru_hole oval (at 22.86 35.56 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.C4.str
    })
    (pad "31" thru_hole oval (at 22.86 33.02 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.C5.str
    })
    (pad "32" thru_hole oval (at 22.86 30.48 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "33" thru_hole oval (at 22.86 27.94 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "34" thru_hole oval (at 22.86 25.4 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.R1.str
    })
    (pad "35" thru_hole oval (at 22.86 22.86 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask) ${
      p.net.R2.str
    })
    (pad "36" thru_hole oval (at 22.86 20.32 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "37" thru_hole oval (at 22.86 17.78 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "38" thru_hole oval (at 22.86 15.24 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "39" thru_hole oval (at 22.86 12.7 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "40" thru_hole oval (at 22.86 10.16 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "41" thru_hole oval (at 22.86 7.62 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "42" thru_hole oval (at 22.86 5.08 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "43" thru_hole oval (at 22.86 2.54 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))
    (pad "44" thru_hole oval (at 22.86 0 270) (size 1.2 2) (drill 0.8) (layers *.Cu *.Mask))


    ${"" /* end of module below */}
    ) 
    `;
  },
};
