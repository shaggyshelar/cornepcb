module.exports = {
  nets: {
    GND: "GND",
    VCC: "3V3",
    SCL: "SCL",
    SDA: "SDA",
  },
  params: {
    class: "MCU",
  },
  body: (p) => {
    return `
      (module Connector_OLED:SSD1306 (layer F.Cu) (tedit 6224DF39)
        ${p.at /* parametric position */}
  
      ${"" /* footprint description, tags and reference */}
      (descr "")
      (tags "")
      (attr through_hole)

      ${"" /* footprint text references */}
      (fp_text reference "${p.ref}" (at 0 0 ${p.rot + 90}) (layer "F.SilkS") ${
      p.ref_hide
    }
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value "OLED" (at 0 9.95) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text user "${p.ref}" (at 0 3.81 90) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    
    ${"" /* fp_line footprint references start */}
    (fp_line (start -1.33 1.27) (end -1.33 8.95) (layer "F.SilkS") (width 0.12))
    (fp_line (start -1.33 8.95) (end 1.33 8.95) (layer "F.SilkS") (width 0.12))
    (fp_line (start 1.33 1.27) (end 1.33 8.95) (layer "F.SilkS") (width 0.12))
    (fp_line (start -1.33 1.27) (end 1.33 1.27) (layer "F.SilkS") (width 0.12))
    (fp_line (start -1.33 0) (end -1.33 -1.33) (layer "F.SilkS") (width 0.12))
    (fp_line (start -1.33 -1.33) (end 0 -1.33) (layer "F.SilkS") (width 0.12))
    (fp_line (start 1.8 9.4) (end 1.8 -1.8) (layer "F.CrtYd") (width 0.05))
    (fp_line (start -1.8 -1.8) (end -1.8 9.4) (layer "F.CrtYd") (width 0.05))
    (fp_line (start -1.8 9.4) (end 1.8 9.4) (layer "F.CrtYd") (width 0.05))
    (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (layer "F.CrtYd") (width 0.05))
    (fp_line (start 1.27 -1.27) (end 1.27 8.89) (layer "F.Fab") (width 0.1))
    (fp_line (start 1.27 8.89) (end -1.27 8.89) (layer "F.Fab") (width 0.1))
    (fp_line (start -0.635 -1.27) (end 1.27 -1.27) (layer "F.Fab") (width 0.1))
    (fp_line (start -1.27 -0.635) (end -0.635 -1.27) (layer "F.Fab") (width 0.1))
    (fp_line (start -1.27 8.89) (end -1.27 -0.635) (layer "F.Fab") (width 0.1))
    (pad "1" thru_hole rect (at 0 0) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${
      p.net.VCC.str
    })
    (pad "2" thru_hole oval (at 0 2.54) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${
      p.net.GND.str
    })
    (pad "3" thru_hole oval (at 0 5.08) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${
      p.net.SCL.str
    })
    (pad "4" thru_hole oval (at 0 7.62) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${
      p.net.SDA.str
    })
    
    ) 
    `;
  },
};
