import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (0c10378)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,getFonts,getPropertyControls}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import AboutUsButton from"https://framerusercontent.com/modules/cBPfLbNJwIgHBDpNHUoU/Q8siBng6bDPqjqp9vJGv/cN3KhDZAW.js";const AboutUsButtonFonts=getFonts(AboutUsButton);const AboutUsButtonControls=getPropertyControls(AboutUsButton);const enabledGestures={"RgsC7tYwM":{"hover":true}};const cycleOrder=["RgsC7tYwM"];const variantClassNames={"RgsC7tYwM":"framer-v-1q9my7v"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="RgsC7tYwM",bgColor:UH5V5RoS_="var(--token-6eea85af-89ac-4cf2-b4af-e90478abdfd0, rgb(247, 244, 238)) /* {\"name\":\"Paper\"} */",textColor:hNI2SCBgG="rgb(0, 0, 0)",buttonVariant:M0s9NtTSr="RriYiYWSe",aboutUsClick:k88OEomr_,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"RgsC7tYwM",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const tap15hh2j5=activeVariantCallback(async(...args)=>{if(k88OEomr_){const res=await k88OEomr_(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({"RgsC7tYwM-hover":{"TYtjeAfyO":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>W</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"GpduP7Zq_":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>E</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"I5CM0oPbh":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>B</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"VhYoEgWPw":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>P</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"tanJmwsnp":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>R</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"p8qUyhD0g":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>I</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"Vz8l1Vj4i":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>S</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"z9VAtHuYy":{"center":false,"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>M</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"hfLlXFXf0":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>WE&#39;RE</span><br></span></span>","fonts":["GF;Montserrat-regular"]},"eBSnOvcZc":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>We build websites that unlock online marketing for our customers. We&#39;ll also help our customers support and market their website after launch with SEO, a content strategy, and social advertising. We&#39;ve worked with small teams so far, becoming a marketing partner and digital advisor to our clients.</span><br></span></span>","fonts":["GF;Montserrat-regular"]}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(gestureVariant==="RgsC7tYwM-hover")return true;return false;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-zNKgv",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"RgsC7tYwM",className:cx("framer-1q9my7v",className),style:{"backgroundColor":UH5V5RoS_,...style},"data-framer-name":"Variant 1",variants:{"RgsC7tYwM-hover":{"backgroundColor":UH5V5RoS_}},transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("RgsC7tYwM"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"130px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"TYtjeAfyO",className:"framer-12a6tdg",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>W</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("TYtjeAfyO")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"130px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"GpduP7Zq_",className:"framer-pkuxii",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>E</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("GpduP7Zq_")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"130px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"I5CM0oPbh",className:"framer-3cxvrs",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>B</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("I5CM0oPbh")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"130px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"VhYoEgWPw",className:"framer-190w8c7",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>P</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("VhYoEgWPw")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"130px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"tanJmwsnp",className:"framer-1y3h4fe",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>R</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("tanJmwsnp")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"130px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"p8qUyhD0g",className:"framer-1ci22w3",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>I</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("p8qUyhD0g")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"130px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"Vz8l1Vj4i",className:"framer-b0ltlu",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>S</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("Vz8l1Vj4i")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"130px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"z9VAtHuYy",className:"framer-lkoe7v",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>M</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("z9VAtHuYy")}),/*#__PURE__*/ _jsx(Text,{style:{"opacity":0,"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"42px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"hfLlXFXf0",className:"framer-1jmwyxx",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>WE&#39;RE</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG,"opacity":1}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("hfLlXFXf0")}),/*#__PURE__*/ _jsx(Text,{style:{"opacity":0,"--framer-font-family":"\"Montserrat\", serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":hNI2SCBgG,"--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Montserrat-regular"],layoutId:"eBSnOvcZc",className:"framer-etfme5",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>We build websites that unlock online marketing for our customers. We&#39;ll also help our customers support and market their website after launch with SEO, a content strategy, and social advertising. We&#39;ve worked with small teams so far, becoming a marketing partner and digital advisor to our clients.</span><br></span></span>",variants:{"RgsC7tYwM-hover":{"--framer-text-color":hNI2SCBgG,"opacity":1}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("eBSnOvcZc")}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{style:{"opacity":0},layoutId:"zZyon1273-container",className:"framer-15hh2j5-container",variants:{"RgsC7tYwM-hover":{"opacity":1}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("zZyon1273-container"),children:/*#__PURE__*/ _jsx(AboutUsButton,{width:"100%",height:"100%",layoutId:"zZyon1273",id:"zZyon1273",variant:M0s9NtTSr,title:"About Us",tap:tap15hh2j5,transition:transition,layoutDependency:layoutDependency,...addVariantProps("zZyon1273")})})]})})}));});const css=[".framer-zNKgv [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-zNKgv * { box-sizing: border-box; }",".framer-zNKgv .framer-1q9my7v { position: relative; overflow: visible; width: 1200px; height: 600px; }",".framer-zNKgv .framer-12a6tdg { position: absolute; overflow: visible; width: auto; height: auto; left: 1008px; top: 128px; flex: none; white-space: pre; }",".framer-zNKgv .framer-pkuxii { position: absolute; overflow: visible; width: auto; height: auto; left: 584px; top: 168px; flex: none; white-space: pre; }",".framer-zNKgv .framer-3cxvrs { position: absolute; overflow: visible; width: auto; height: auto; left: 332px; top: 186px; flex: none; white-space: pre; }",".framer-zNKgv .framer-190w8c7 { position: absolute; overflow: visible; width: auto; height: auto; left: 491px; top: 310px; flex: none; white-space: pre; }",".framer-zNKgv .framer-1y3h4fe { position: absolute; overflow: visible; width: auto; height: auto; left: 220px; top: 315px; flex: none; white-space: pre; }",".framer-zNKgv .framer-1ci22w3 { position: absolute; overflow: visible; width: auto; height: auto; left: 732px; top: 298px; flex: none; white-space: pre; }",".framer-zNKgv .framer-b0ltlu { position: absolute; overflow: visible; width: auto; height: auto; left: 867px; top: 246px; flex: none; white-space: pre; }",".framer-zNKgv .framer-lkoe7v { position: absolute; overflow: visible; width: auto; height: auto; left: 48px; top: 128px; flex: none; white-space: pre; }",".framer-zNKgv .framer-1jmwyxx { position: absolute; overflow: visible; width: auto; height: auto; left: 70px; top: 64px; flex: none; white-space: pre; }",".framer-zNKgv .framer-etfme5 { position: absolute; overflow: hidden; width: 577px; height: auto; left: 70px; top: 300px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-zNKgv .framer-15hh2j5-container { position: absolute; width: auto; height: auto; left: 70px; top: 414px; flex: none; }",".framer-zNKgv.framer-v-1q9my7v .framer-1q9my7v { cursor: pointer; }",".framer-zNKgv.framer-v-1q9my7v.hover .framer-1q9my7v { width: 1200px; height: 600px; }",".framer-zNKgv.framer-v-1q9my7v.hover .framer-12a6tdg { width: auto; height: auto; right: auto; bottom: auto; left: 70px; top: 129px; flex: none; white-space: pre; }",".framer-zNKgv.framer-v-1q9my7v.hover .framer-pkuxii { width: auto; height: auto; right: auto; bottom: auto; left: 232px; top: 129px; flex: none; white-space: pre; }",".framer-zNKgv.framer-v-1q9my7v.hover .framer-3cxvrs { width: auto; height: auto; right: auto; bottom: auto; left: 337px; top: 129px; flex: none; white-space: pre; }",".framer-zNKgv.framer-v-1q9my7v.hover .framer-190w8c7 { width: auto; height: auto; right: auto; bottom: auto; left: 453px; top: 129px; flex: none; white-space: pre; }",".framer-zNKgv.framer-v-1q9my7v.hover .framer-1y3h4fe { width: auto; height: auto; right: auto; bottom: auto; left: 564px; top: 129px; flex: none; white-space: pre; }",".framer-zNKgv.framer-v-1q9my7v.hover .framer-1ci22w3 { width: auto; height: auto; right: auto; bottom: auto; left: 676px; top: 129px; flex: none; white-space: pre; }",".framer-zNKgv.framer-v-1q9my7v.hover .framer-b0ltlu { width: auto; height: auto; right: auto; bottom: auto; left: 733px; top: 129px; flex: none; white-space: pre; }",".framer-zNKgv.framer-v-1q9my7v.hover .framer-lkoe7v { width: auto; height: auto; right: auto; bottom: auto; left: 831px; top: 129px; flex: none; white-space: pre; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 600
 * @framerIntrinsicWidth 1200
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "ydfN2EVZq": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"UH5V5RoS_": "bgColor", "hNI2SCBgG": "textColor", "M0s9NtTSr": "buttonVariant", "k88OEomr_": "aboutUsClick"}
 */ const Framero8FBBUJak=withCSS(Component,css);export default Framero8FBBUJak;Framero8FBBUJak.displayName="Letter Gather";Framero8FBBUJak.defaultProps={"width":1200,"height":600};addPropertyControls(Framero8FBBUJak,{"UH5V5RoS_":{"type":ControlType.Color,"title":"Bg Color","defaultValue":"var(--token-6eea85af-89ac-4cf2-b4af-e90478abdfd0, rgb(247, 244, 238)) /* {\"name\":\"Paper\"} */"},"hNI2SCBgG":{"type":ControlType.Color,"title":"Text Color","defaultValue":"rgb(0, 0, 0)"},"M0s9NtTSr":(AboutUsButtonControls===null||AboutUsButtonControls===void 0?void 0:AboutUsButtonControls["variant"])&&{...AboutUsButtonControls["variant"],"hidden":undefined,"title":"Button Variant","defaultValue":"RriYiYWSe"},"k88OEomr_":{"type":ControlType.EventHandler,"title":"About Us Click"}});addFonts(Framero8FBBUJak,[{"url":"https://fonts.gstatic.com/s/montserrat/v21/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf","family":"Montserrat","style":"normal","weight":"400","moduleAsset":{"url":"https://fonts.gstatic.com/s/montserrat/v21/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf","localModuleIdentifier":"local-module:canvasComponent/o8FBBUJak:default"}},...AboutUsButtonFonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"Framero8FBBUJak","slots":[],"annotations":{"framerVariables":"{\"UH5V5RoS_\": \"bgColor\", \"hNI2SCBgG\": \"textColor\", \"M0s9NtTSr\": \"buttonVariant\", \"k88OEomr_\": \"aboutUsClick\"}","framerIntrinsicHeight":"600","framerContractVersion":"1","framerIntrinsicWidth":"1200","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"ydfN2EVZq\": {\"layout\": [\"fixed\", \"fixed\"]}}}"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./o8FBBUJak.map