module.exports = {
  nets: {
    TOUCH: "TOUCH1",
  },
  params: {
    class: "PAD", // for Button
  },
  body: (p) => `
    
    (module Connector_Wire:SolderWirePad_1x01_SMD_5x10mm (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
      (descr "Wire Pad, Square, SMD Pad,  5mm x 10mm,")
      (tags "MesurementPoint Square SMDPad 5mmx10mm ")
	  (fp_text reference "${p.ref}" (at 0 -5.08 0) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value "T1" (at 5.08 0 0) (layer "F.Fab")
      (effects (font (size 1 1) (thickness 0.15)))
    )
    
      (pad "1" smd rect (at 0 0 90) (size 5 10) (layers "F.Cu" "F.Paste" "F.Mask") ${
        p.net.TOUCH.str
      })
     
     
      )

    `,
};
