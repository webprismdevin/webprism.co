import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (a695e8b)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,Image,addFonts,withCSS,addPropertyControls,ControlType,cx,useVariantState}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const cycleOrder=["Au1S2sYQk","hJuBjLHAv","juurHAkzx"];const variantClassNames={Au1S2sYQk:"framer-v-1cw7b0w",hJuBjLHAv:"framer-v-102hnqi",juurHAkzx:"framer-v-vpmu74"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={"Variant 1":"Au1S2sYQk","Variant 2":"hJuBjLHAv","Variant 3":"juurHAkzx"};const transitions={default:{type:"spring",ease:[0.44,0,0.56,1],duration:0.3,delay:0,stiffness:500,damping:60,mass:1}};const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="Au1S2sYQk",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"Au1S2sYQk",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap1h2bbu8=activeVariantCallback(async(...args)=>{setVariant("juurHAkzx");});const onTap5id7wp=activeVariantCallback(async(...args)=>{setVariant("hJuBjLHAv");});const onTap12zb227=activeVariantCallback(async(...args)=>{setVariant("Au1S2sYQk");});const onTap1v4rxfh=activeVariantCallback(async(...args)=>{setVariant("Au1S2sYQk");});const onTap1qdawc7=activeVariantCallback(async(...args)=>{setVariant("hJuBjLHAv");});const onTapu9vjpu=activeVariantCallback(async(...args)=>{setVariant("Au1S2sYQk");});const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-LhpAx",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"Au1S2sYQk",className:cx("framer-1cw7b0w",className),style:{...style},transition:transition,layoutDependency:layoutDependency,background:null,"data-framer-name":"Variant 1",ref:ref,...addPropertyOverrides({hJuBjLHAv:{"data-framer-name":"Variant 2"},juurHAkzx:{"data-framer-name":"Variant 3"}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(Image,{layoutId:"kGWbJx4Ix",className:"framer-1h2bbu8",style:{borderBottomLeftRadius:6,borderBottomRightRadius:6,borderTopRightRadius:6,borderTopLeftRadius:6},transition:transition,layoutDependency:layoutDependency,background:{src:new URL("assets/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 2048w, ${new URL("assets/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 2880w`,sizes:"935px",pixelWidth:2880,pixelHeight:1642,intrinsicWidth:2880,intrinsicHeight:1642,fit:"fill"},"data-highlight":true,"data-framer-name":"tor",alt:"",onTap:onTap1h2bbu8,...addPropertyOverrides({hJuBjLHAv:{background:{src:new URL("assets/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 2048w, ${new URL("assets/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 2880w`,sizes:"935px",pixelWidth:2880,pixelHeight:1642,intrinsicWidth:2880,intrinsicHeight:1642,fit:"fill"}},juurHAkzx:{background:{src:new URL("assets/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 2048w, ${new URL("assets/6CsD5GDXmz1jLl82kdbT0SjdBdo.jpg",import.meta.url).href} 2880w`,sizes:"935px",pixelWidth:2880,pixelHeight:1642,intrinsicWidth:2880,intrinsicHeight:1642,fit:"fill"}}},baseVariant,gestureVariant)}),/*#__PURE__*/ _jsx(Image,{layoutId:"Yj8pHezeR",className:"framer-5id7wp",style:{borderBottomLeftRadius:6,borderBottomRightRadius:6,borderTopRightRadius:6,borderTopLeftRadius:6},transition:transition,layoutDependency:layoutDependency,background:{src:new URL("assets/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 2048w, ${new URL("assets/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 2880w`,sizes:"935px",pixelWidth:2880,pixelHeight:1642,intrinsicWidth:2880,intrinsicHeight:1642,fit:"fill"},"data-highlight":true,"data-framer-name":"hh",alt:"",onTap:onTap5id7wp,...addPropertyOverrides({hJuBjLHAv:{background:{src:new URL("assets/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 2048w, ${new URL("assets/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 2880w`,sizes:"935px",pixelWidth:2880,pixelHeight:1642,intrinsicWidth:2880,intrinsicHeight:1642,fit:"fill"}},juurHAkzx:{onTap:onTap1qdawc7,background:{src:new URL("assets/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 2048w, ${new URL("assets/zvJrfIo65zJ0g1LvPo5EkrnkTyE.jpg",import.meta.url).href} 2880w`,sizes:"935px",pixelWidth:2880,pixelHeight:1642,intrinsicWidth:2880,intrinsicHeight:1642,fit:"fill"},"data-highlight":true}},baseVariant,gestureVariant)}),/*#__PURE__*/ _jsx(Image,{layoutId:"O80qlV9bq",className:"framer-12zb227",style:{borderBottomLeftRadius:6,borderBottomRightRadius:6,borderTopRightRadius:6,borderTopLeftRadius:6},transition:transition,layoutDependency:layoutDependency,background:{src:new URL("assets/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 2048w, ${new URL("assets/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 2880w`,sizes:"935px",pixelWidth:2880,pixelHeight:1642,intrinsicWidth:2880,intrinsicHeight:1642,fit:"fill"},"data-highlight":true,"data-framer-name":"sls",alt:"",onTap:onTap12zb227,...addPropertyOverrides({hJuBjLHAv:{onTap:onTap1v4rxfh,background:{src:new URL("assets/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 2048w, ${new URL("assets/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 2880w`,sizes:"935px",pixelWidth:2880,pixelHeight:1642,intrinsicWidth:2880,intrinsicHeight:1642,fit:"fill"},"data-highlight":true},juurHAkzx:{onTap:onTapu9vjpu,background:{src:new URL("assets/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href,srcSet:`${new URL("assets/512/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 512w, ${new URL("assets/1024/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 1024w, ${new URL("assets/2048/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 2048w, ${new URL("assets/g3CI7WK8KOHeNgR8NCb9Y88aY2E.jpg",import.meta.url).href} 2880w`,sizes:"935px",pixelWidth:2880,pixelHeight:1642,intrinsicWidth:2880,intrinsicHeight:1642,fit:"fill"},"data-highlight":true}},baseVariant,gestureVariant)})]})})}));});const css=[".framer-LhpAx [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-LhpAx * { box-sizing: border-box; }",".framer-LhpAx .framer-1cw7b0w { position: relative; overflow: hidden; width: 1255px; height: 616px; }",".framer-LhpAx .framer-1h2bbu8 { position: absolute; cursor: pointer; overflow: visible; width: 935px; height: var(--framer-aspect-ratio-supported, 533px); left: -829px; top: calc(50.00000000000002% - 533px / 2); flex: none; aspect-ratio: 1.753958587088916 / 1; }",".framer-LhpAx .framer-5id7wp { position: absolute; cursor: pointer; overflow: visible; width: 935px; height: var(--framer-aspect-ratio-supported, 533px); right: -831px; top: calc(50.00000000000002% - 533px / 2); flex: none; aspect-ratio: 1.753958587088916 / 1; }",".framer-LhpAx .framer-12zb227 { position: absolute; cursor: pointer; overflow: visible; width: 935px; height: var(--framer-aspect-ratio-supported, 533px); left: calc(50.03984063745022% - 935px / 2); top: calc(50.00000000000002% - 533px / 2); flex: none; aspect-ratio: 1.753958587088916 / 1; }",".framer-LhpAx.framer-v-102hnqi .framer-5id7wp, .framer-LhpAx.framer-v-vpmu74 .framer-1h2bbu8 { width: 935px; height: var(--framer-aspect-ratio-supported, 533px); right: auto; bottom: auto; left: calc(49.960159362549824% - 935px / 2); top: calc(50.00000000000002% - 533px / 2); flex: none; aspect-ratio: 1.753958587088916 / 1; }",".framer-LhpAx.framer-v-102hnqi .framer-12zb227, .framer-LhpAx.framer-v-vpmu74 .framer-5id7wp { width: 935px; height: var(--framer-aspect-ratio-supported, 533px); right: auto; bottom: auto; left: -831px; top: calc(50.00000000000002% - 533px / 2); flex: none; aspect-ratio: 1.753958587088916 / 1; cursor: pointer; }",".framer-LhpAx.framer-v-102hnqi .framer-1h2bbu8 { width: 935px; height: var(--framer-aspect-ratio-supported, 533px); right: -831px; bottom: auto; left: auto; top: calc(49.83766233766236% - 533px / 2); flex: none; aspect-ratio: 1.753958587088916 / 1; }",".framer-LhpAx.framer-v-vpmu74 .framer-12zb227 { width: 935px; height: var(--framer-aspect-ratio-supported, 533px); right: -831px; bottom: auto; left: auto; top: calc(50.00000000000002% - 533px / 2); flex: none; aspect-ratio: 1.753958587088916 / 1; cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 616
 * @framerIntrinsicWidth 1255
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"hJuBjLHAv":{"layout":["fixed","fixed"]},"juurHAkzx":{"layout":["fixed","fixed"]}}}
 */ const FramerlfFK8GaOi=withCSS(Component,css);export default FramerlfFK8GaOi;FramerlfFK8GaOi.displayName="Slider";FramerlfFK8GaOi.defaultProps={width:1255,height:616};addPropertyControls(FramerlfFK8GaOi,{variant:{type:ControlType.Enum,title:"Variant",options:["Au1S2sYQk","hJuBjLHAv","juurHAkzx"],optionTitles:["Variant 1","Variant 2","Variant 3"]}});addFonts(FramerlfFK8GaOi,[]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerlfFK8GaOi","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicHeight":"616","framerIntrinsicWidth":"1255","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]},\"hJuBjLHAv\":{\"layout\":[\"fixed\",\"fixed\"]},\"juurHAkzx\":{\"layout\":[\"fixed\",\"fixed\"]}}}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./lfFK8GaOi.map