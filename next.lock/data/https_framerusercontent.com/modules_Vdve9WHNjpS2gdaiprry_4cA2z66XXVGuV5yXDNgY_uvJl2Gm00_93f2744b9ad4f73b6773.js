import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (0c10378)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,getFonts,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import{Button}from"https://framerusercontent.com/modules/9yCP42jHRUKb7D1zVIaf/jELzsaEO9VFGKZorPLi1/Button.js";const ButtonFonts=getFonts(Button);const enabledGestures={"kQfxNIzB4":{"hover":true},"LkcAeKzVZ":{"hover":true}};const cycleOrder=["kQfxNIzB4","LkcAeKzVZ","UYTZYiAoE","E7DkHpX1y"];const variantClassNames={"kQfxNIzB4":"framer-v-1t0qern","LkcAeKzVZ":"framer-v-ovoajs","UYTZYiAoE":"framer-v-17thh27","E7DkHpX1y":"framer-v-qx3mli"};const humanReadableVariantMap={"light":"kQfxNIzB4","dark":"LkcAeKzVZ","mobile-light":"UYTZYiAoE","mobile-dark":"E7DkHpX1y"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1},"kQfxNIzB4-hover":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":267,"damping":69,"mass":5}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="kQfxNIzB4",title:Z1GFObvNH="project feature",title2:mOa1q8B25="LE MARCHE REVERIE",text:Fmd3trS1t="Daily workshops will be taught by Sarah Simon and Teressa Johnson, with Kara Mercer to document still and moving content throughout. Receive expert art, floral and creative instruction, and explore new and mindful approaches to painting and arranging florals in these classic subject matters, drawing inspiration from the fresh flowers local to this stunning Italian region.",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"kQfxNIzB4",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const variantProps=React.useMemo(()=>({"kQfxNIzB4-hover":{"Svfe90zbL":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},"background":null},"kYXz4z3zR":{"center":false},"dFsyXeIQs":{"center":false},"Nw8SYKjp7":{"center":false},"jtzZO_teh":{"defaultBackground":"rgb(22, 23, 24)"},"jtzZO_teh-container":{"transformTemplate":undefined}},"LkcAeKzVZ":{"kQfxNIzB4":{"data-framer-name":"dark"},"kYXz4z3zR":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>project feature</span><br></span></span>","fonts":["GF;Montserrat-300italic"]},"dFsyXeIQs":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>LE MARCHE REVERIE</span><br></span></span>","fonts":["GF;Montserrat-500"]}},"LkcAeKzVZ-hover":{"Svfe90zbL":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},"background":null},"kYXz4z3zR":{"center":false},"dFsyXeIQs":{"center":false},"Nw8SYKjp7":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Daily workshops will be taught by Sarah Simon and Teressa Johnson, with Kara Mercer to document still and moving content throughout. Receive expert art, floral and creative instruction, and explore new and mindful approaches to painting and arranging florals in these classic subject matters, drawing inspiration from the fresh flowers local to this stunning Italian region.</span><br></span></span>","fonts":["GF;Montserrat-regular"],"center":false},"jtzZO_teh":{"defaultBackground":"var(--token-fd55116d-62f5-4047-b631-e2176ab15d14, rgb(253, 33, 135)) /* {\"name\":\"Pink Glow\"} */","defaultTextColor":"var(--token-d6f51f89-2862-4e3a-8ceb-dd51ac05e9f8, rgb(255, 255, 255)) /* {\"name\":\"White\"} */"}},"UYTZYiAoE":{"kQfxNIzB4":{"data-framer-name":"mobile-light"},"Svfe90zbL":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},"background":null},"dFsyXeIQs":{"center":false},"Nw8SYKjp7":{"center":false},"jtzZO_teh-container":{"transformTemplate":undefined}},"E7DkHpX1y":{"kQfxNIzB4":{"data-framer-name":"mobile-dark"},"Svfe90zbL":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},"background":null},"kYXz4z3zR":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>project feature</span><br></span></span>","fonts":["GF;Montserrat-300italic"]},"dFsyXeIQs":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>LE MARCHE REVERIE</span><br></span></span>","fonts":["GF;Montserrat-500"]},"Nw8SYKjp7":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Daily workshops will be taught by Sarah Simon and Teressa Johnson, with Kara Mercer to document still and moving content throughout. Receive expert art, floral and creative instruction, and explore new and mindful approaches to painting and arranging florals in these classic subject matters, drawing inspiration from the fresh flowers local to this stunning Italian region.</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"jtzZO_teh-container":{"transformTemplate":undefined}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-WcYNL",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsx(motion.div,{...restProps,layoutId:"kQfxNIzB4",className:cx("framer-1t0qern",className),style:{"borderBottomLeftRadius":10,"borderBottomRightRadius":10,"borderTopRightRadius":10,"borderTopLeftRadius":10,"boxShadow":"0px 5px 5px 3px rgba(0,0,0,0.25)","backgroundColor":"rgb(247, 244, 237)","WebkitFilter":"none","filter":"none",...style},"data-framer-name":"light",variants:{"LkcAeKzVZ":{"backgroundColor":"rgb(22, 23, 24)","WebkitFilter":"none","filter":"none","boxShadow":"0px 3px 4px 1px rgba(255, 255, 255, 0.75), 0px 5px 14px 8px #00D5FF"},"E7DkHpX1y":{"backgroundColor":"rgb(22, 23, 24)","WebkitFilter":"none","filter":"none","boxShadow":"0px 3px 4px 1px hsla(0, 0%, 100%, 0.75), 0px 5px 14px 8px var(--token-336d9f03-678e-40d4-a564-1b6f1f4b947b, rgb(153, 238, 255)) /* {\"name\":\"Electric Blue\"} */"}},transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("kQfxNIzB4"),children:/*#__PURE__*/ _jsxs(Stack,{layoutId:"Svfe90zbL",className:"framer-1u0l69c",style:{"backgroundColor":"transparent"},background:null,direction:"vertical",distribution:"start",alignment:"start",gap:15,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,variants:{"kQfxNIzB4-hover":{"backgroundColor":"transparent"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("Svfe90zbL"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"italic","--framer-font-weight":300,"--framer-text-color":"var(--token-94784971-71f3-41dd-9d7a-e5d03ec4ebce, rgb(0, 0, 0))","--framer-font-size":"30px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-300italic"],layoutId:"kYXz4z3zR",className:"framer-mfvkgi",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>project feature</span><br></span></span>",text:Z1GFObvNH,variants:{"LkcAeKzVZ":{"--framer-text-color":"var(--token-d6f51f89-2862-4e3a-8ceb-dd51ac05e9f8, rgb(255, 255, 255))"},"E7DkHpX1y":{"--framer-text-color":"var(--token-d6f51f89-2862-4e3a-8ceb-dd51ac05e9f8, rgb(255, 255, 255))"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("kYXz4z3zR")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"var(--token-94784971-71f3-41dd-9d7a-e5d03ec4ebce, rgb(0, 0, 0))","--framer-font-size":"42px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-500"],layoutId:"dFsyXeIQs",className:"framer-w3tei1",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>LE MARCHE REVERIE</span><br></span></span>",text:mOa1q8B25,variants:{"LkcAeKzVZ":{"--framer-text-color":"var(--token-d6f51f89-2862-4e3a-8ceb-dd51ac05e9f8, rgb(255, 255, 255))"},"E7DkHpX1y":{"--framer-text-color":"var(--token-d6f51f89-2862-4e3a-8ceb-dd51ac05e9f8, rgb(255, 255, 255))"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("dFsyXeIQs")}),/*#__PURE__*/ _jsx(Text,{style:{"opacity":0,"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-94784971-71f3-41dd-9d7a-e5d03ec4ebce, rgb(0, 0, 0))","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.5em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"Nw8SYKjp7",className:"framer-1x3phj6",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Daily workshops will be taught by Sarah Simon and Teressa Johnson, with Kara Mercer to document still and moving content throughout. Receive expert art, floral and creative instruction, and explore new and mindful approaches to painting and arranging florals in these classic subject matters, drawing inspiration from the fresh flowers local to this stunning Italian region.</span><br></span></span>",text:Fmd3trS1t,variants:{"kQfxNIzB4-hover":{"opacity":1},"LkcAeKzVZ-hover":{"--framer-text-color":"var(--token-d6f51f89-2862-4e3a-8ceb-dd51ac05e9f8, rgb(255, 255, 255))","opacity":1},"UYTZYiAoE":{"opacity":1},"E7DkHpX1y":{"--framer-text-color":"var(--token-d6f51f89-2862-4e3a-8ceb-dd51ac05e9f8, rgb(255, 255, 255))","opacity":1}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("Nw8SYKjp7")}),/*#__PURE__*/ _jsx(motion.div,{style:{"opacity":0},layoutId:"jtzZO_teh-container",className:"framer-1h5urb6-container",variants:{"kQfxNIzB4-hover":{"opacity":1},"LkcAeKzVZ-hover":{"opacity":1},"UYTZYiAoE":{"opacity":1},"E7DkHpX1y":{"opacity":1}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("jtzZO_teh-container"),children:/*#__PURE__*/ _jsx(Button,{width:"100%",height:"100%",layoutId:"jtzZO_teh",id:"jtzZO_teh",text:"VIEW PROJECT",alignment:"center",shadow:false,font:false,fontFamily:"",fontWeight:600,disabled:false,variant:"Default",defaultBackground:"rgb(35, 48, 57)",defaultTextColor:"rgb(255, 255, 255)",hoverBackground:"rgb(145, 154, 172)",hoverTextColor:"rgb(255, 255, 255)",pressedBackground:"rgb(0, 136, 255)",pressedTextColor:"rgb(255, 255, 255)",disabledBackground:"rgb(243, 243, 243)",disabledTextColor:"rgb(170, 170, 170)",padding:10,paddingPerSide:true,paddingTop:15,paddingRight:25,paddingBottom:15,paddingLeft:25,borderRadius:8,isMixedBorderRadius:false,topLeftRadius:0,topRightRadius:0,bottomRightRadius:0,bottomLeftRadius:0,fontSize:16,whileHoverScale:1.1,whileTapScale:0.95,scaleTransition:{"type":"spring","duration":0.3,"delay":0,"stiffness":600,"damping":30,"mass":1},colorTransition:{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1},transition:transition,layoutDependency:layoutDependency,...addVariantProps("jtzZO_teh")})})]})})})}));});const css=[".framer-WcYNL [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-WcYNL * { box-sizing: border-box; }",".framer-WcYNL .framer-1t0qern { position: relative; overflow: hidden; width: 610px; height: 200px; }",".framer-WcYNL .framer-1u0l69c { position: absolute; overflow: visible; width: 80%; height: min-content; left: 51px; top: 48px; flex: none; }",".framer-WcYNL .framer-mfvkgi { position: relative; overflow: hidden; width: 100%; height: 43px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-WcYNL .framer-w3tei1 { position: relative; overflow: hidden; width: 100%; height: 61px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-WcYNL .framer-1x3phj6 { position: relative; overflow: hidden; width: 100%; height: 247px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-WcYNL .framer-1h5urb6-container { position: relative; width: auto; height: auto; flex: none; }",".framer-WcYNL.framer-v-1t0qern .framer-1t0qern, .framer-WcYNL.framer-v-ovoajs .framer-1t0qern { cursor: pointer; }",".framer-WcYNL.framer-v-1t0qern.hover .framer-1t0qern, .framer-WcYNL.framer-v-ovoajs.hover .framer-1t0qern { width: 610px; height: 460px; }",".framer-WcYNL.framer-v-1t0qern.hover .framer-1u0l69c { width: 80%; height: min-content; right: auto; bottom: auto; left: 51px; top: 48px; flex: none; aspect-ratio: unset; overflow: visible; }",".framer-WcYNL.framer-v-1t0qern.hover .framer-mfvkgi { width: 100%; height: 43px; right: auto; bottom: auto; left: auto; top: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-WcYNL.framer-v-1t0qern.hover .framer-w3tei1 { width: 100%; height: 61px; right: auto; bottom: auto; left: auto; top: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-WcYNL.framer-v-1t0qern.hover .framer-1x3phj6, .framer-WcYNL.framer-v-17thh27 .framer-w3tei1, .framer-WcYNL.framer-v-17thh27 .framer-1x3phj6, .framer-WcYNL.framer-v-qx3mli .framer-w3tei1, .framer-WcYNL.framer-v-qx3mli .framer-1x3phj6 { width: 100%; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-WcYNL.framer-v-1t0qern.hover .framer-1h5urb6-container, .framer-WcYNL.framer-v-17thh27 .framer-1h5urb6-container, .framer-WcYNL.framer-v-qx3mli .framer-1h5urb6-container { width: auto; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; aspect-ratio: unset; }",".framer-WcYNL.framer-v-ovoajs.hover .framer-1u0l69c { width: 1px; height: min-content; right: auto; bottom: auto; left: 51px; top: 48px; flex: none; aspect-ratio: unset; }",".framer-WcYNL.framer-v-ovoajs.hover .framer-mfvkgi { width: auto; height: 43px; right: auto; bottom: auto; left: auto; top: auto; flex: none; white-space: pre; }",".framer-WcYNL.framer-v-ovoajs.hover .framer-w3tei1 { width: auto; height: 61px; right: auto; bottom: auto; left: auto; top: auto; flex: none; white-space: pre; }",".framer-WcYNL.framer-v-ovoajs.hover .framer-1x3phj6 { width: 529px; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-WcYNL.framer-v-17thh27 .framer-1t0qern, .framer-WcYNL.framer-v-qx3mli .framer-1t0qern { width: 340px; height: 630px; }",".framer-WcYNL.framer-v-17thh27 .framer-1u0l69c, .framer-WcYNL.framer-v-qx3mli .framer-1u0l69c { width: 80%; height: min-content; right: auto; bottom: auto; left: 34px; top: 48px; flex: none; aspect-ratio: unset; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 200
 * @framerIntrinsicWidth 610
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "aMcDMvTZB": {"layout": ["fixed", "fixed"]}, "LkcAeKzVZ": {"layout": ["fixed", "fixed"]}, "Ubpiqy8to": {"layout": ["fixed", "fixed"]}, "UYTZYiAoE": {"layout": ["fixed", "fixed"]}, "E7DkHpX1y": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"Z1GFObvNH": "title", "mOa1q8B25": "title2", "Fmd3trS1t": "text"}
 */ const FrameruvJl2Gm00=withCSS(Component,css);export default FrameruvJl2Gm00;FrameruvJl2Gm00.displayName="Project Feature";FrameruvJl2Gm00.defaultProps={"width":610,"height":200};addPropertyControls(FrameruvJl2Gm00,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["kQfxNIzB4","LkcAeKzVZ","UYTZYiAoE","E7DkHpX1y"],"optionTitles":["light","dark","mobile-light","mobile-dark"]},"Z1GFObvNH":{"type":ControlType.String,"title":"Title","defaultValue":"project feature","displayTextArea":false},"mOa1q8B25":{"type":ControlType.String,"title":"Title 2","defaultValue":"LE MARCHE REVERIE","displayTextArea":false},"Fmd3trS1t":{"type":ControlType.String,"title":"Text","defaultValue":"Daily workshops will be taught by Sarah Simon and Teressa Johnson, with Kara Mercer to document still and moving content throughout. Receive expert art, floral and creative instruction, and explore new and mindful approaches to painting and arranging florals in these classic subject matters, drawing inspiration from the fresh flowers local to this stunning Italian region.","displayTextArea":false}});addFonts(FrameruvJl2Gm00,[{"url":"https://fonts.gstatic.com/s/montserrat/v21/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq_p9aX9-p7K5ILg.ttf","family":"Montserrat","style":"italic","weight":"300","moduleAsset":{"url":"https://fonts.gstatic.com/s/montserrat/v21/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq_p9aX9-p7K5ILg.ttf","localModuleIdentifier":"local-module:canvasComponent/uvJl2Gm00:default"}},{"url":"https://fonts.gstatic.com/s/montserrat/v21/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf","family":"Montserrat","style":"normal","weight":"500","moduleAsset":{"url":"https://fonts.gstatic.com/s/montserrat/v21/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf","localModuleIdentifier":"local-module:canvasComponent/uvJl2Gm00:default"}},{"url":"https://fonts.gstatic.com/s/montserrat/v21/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf","family":"Montserrat","style":"normal","weight":"400","moduleAsset":{"url":"https://fonts.gstatic.com/s/montserrat/v21/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf","localModuleIdentifier":"local-module:canvasComponent/uvJl2Gm00:default"}},...ButtonFonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FrameruvJl2Gm00","slots":[],"annotations":{"framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"aMcDMvTZB\": {\"layout\": [\"fixed\", \"fixed\"]}, \"LkcAeKzVZ\": {\"layout\": [\"fixed\", \"fixed\"]}, \"Ubpiqy8to\": {\"layout\": [\"fixed\", \"fixed\"]}, \"UYTZYiAoE\": {\"layout\": [\"fixed\", \"fixed\"]}, \"E7DkHpX1y\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerIntrinsicWidth":"610","framerIntrinsicHeight":"200","framerContractVersion":"1","framerVariables":"{\"Z1GFObvNH\": \"title\", \"mOa1q8B25\": \"title2\", \"Fmd3trS1t\": \"text\"}"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./uvJl2Gm00.map