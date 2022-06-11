import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (d4eeff2)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useVariantState,RichText,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import*as sharedStyle from"https://framerusercontent.com/modules/ag0U6xGrDRtTpIcflMiH/LP979wf1tUSutcJW1zUU/oRkw8Hqwb.js";import*as sharedStyle1 from"https://framerusercontent.com/modules/lLikN8s1S8AfzkOTutws/Bj9Nw2blDSFk2mkYWe0S/stylesPresetHeading3.js";const enabledGestures={"sxyoGWZAk":{"hover":true}};const cycleOrder=["sxyoGWZAk"];const variantClassNames={"sxyoGWZAk":"framer-v-17iwngi"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="sxyoGWZAk",title:j65g3LWAa="Event Site for a Big Brand",supertext:FORWKFQdy="Jenni Kayne X The Mint Gardener",superTextColor:EEivlCBqi="rgb(153, 153, 153)",titleColor:Zh6NBlih8="rgb(51, 51, 51)",tap:wC86rtweY,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"sxyoGWZAk",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap7bmrvt=activeVariantCallback(async(...args)=>{if(wC86rtweY){const res=await wC86rtweY(...args);if(res===false)return false;}});const isDisplayed1=()=>{if(gestureVariant==="sxyoGWZAk-hover")return true;return false;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-wWEGP",sharedStyle.className,sharedStyle1.className,classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:"auto"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"sxyoGWZAk",className:cx("framer-17iwngi",className),style:{...style},transition:transition,layoutDependency:layoutDependency,background:null,"data-framer-name":"Variant 1",ref:ref,children:[/*#__PURE__*/ _jsxs(Stack,{layoutId:"N1pieazWm",className:"framer-1la8gue",style:{},transition:transition,layoutDependency:layoutDependency,background:null,direction:"vertical",distribution:"space-between",alignment:"start",gap:10,wrap:false,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"100%","padding":"0px 0px 0px 0px"},center:false,...addPropertyOverrides({"sxyoGWZAk-hover":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"100%","padding":"0px 0px 0px 0px"},"background":null}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(RichText,{fonts:[],style:{"--variable-reference-EEivlCBqi-qqNBvBu5u":EEivlCBqi,"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,layoutId:"iM_fiCpE7",className:"framer-fxv7mp",transition:transition,layoutDependency:layoutDependency,__htmlStructure:"<p class=\"framer-styles-preset-1uds43d\" data-styles-preset=\"oRkw8Hqwb\"><span style=\"--framer-text-color:var(--variable-reference-EEivlCBqi-qqNBvBu5u);\">{{ text-placeholder }}</span></p>",htmlFromDesign:"<p class=\"framer-styles-preset-1uds43d\" data-styles-preset=\"oRkw8Hqwb\"><span style=\"--framer-text-color:var(--variable-reference-EEivlCBqi-qqNBvBu5u);\">Jenni Kayne X The Mint Gardener</span></p>",textFromDesign:FORWKFQdy}),/*#__PURE__*/ _jsx(RichText,{fonts:[],style:{"--variable-reference-Zh6NBlih8-qqNBvBu5u":Zh6NBlih8,"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,layoutId:"MpG2zLGUY",className:"framer-pv46s7",transition:transition,layoutDependency:layoutDependency,__htmlStructure:"<h3 class=\"framer-styles-preset-ci2ngw\" data-styles-preset=\"stylesPresetHeading3\"><span style=\"--framer-text-color:var(--variable-reference-Zh6NBlih8-qqNBvBu5u);\">{{ text-placeholder }}</span></h3>",htmlFromDesign:"<h3 class=\"framer-styles-preset-ci2ngw\" data-styles-preset=\"stylesPresetHeading3\"><span style=\"--framer-text-color:var(--variable-reference-Zh6NBlih8-qqNBvBu5u);\">Event Site for a Big Brand</span></h3>",textFromDesign:j65g3LWAa})]}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{layoutId:"seU0svyJd",className:"framer-7bmrvt",style:{},transition:transition,layoutDependency:layoutDependency,background:null,"data-highlight":true,onTap:onTap7bmrvt,children:/*#__PURE__*/ _jsx(RichText,{fonts:["GF;Montserrat-600"],style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",center:true,__fromCanvasComponent:true,layoutId:"s3CL6rF3G",className:"framer-1ut63tm",transition:transition,layoutDependency:layoutDependency,__htmlStructure:"<p><span style=\"--framer-font-family:&quot;Montserrat&quot;, serif; --framer-font-style:normal; --framer-font-weight:600; --font-selector:R0Y7TW9udHNlcnJhdC02MDA=; --framer-text-color:rgb(119, 119, 119);\">{{ text-placeholder }}</span></p>",htmlFromDesign:"<p><span style=\"--framer-font-family:&quot;Montserrat&quot;, serif; --framer-font-style:normal; --framer-font-weight:600; --font-selector:R0Y7TW9udHNlcnJhdC02MDA=; --framer-text-color:rgb(119, 119, 119);\">SEE PROJECT →</span></p>"})})]})})}));});const css=[".framer-wWEGP [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-wWEGP * { box-sizing: border-box; }",".framer-wWEGP .framer-17iwngi { position: relative; overflow: hidden; width: 372px; height: 200px; }",".framer-wWEGP .framer-1la8gue { position: absolute; overflow: visible; width: 289px; height: 58px; left: 40px; top: 71px; flex: none; }",".framer-wWEGP .framer-fxv7mp { position: relative; width: auto; height: 28px; flex: none; white-space: pre; }",".framer-wWEGP .framer-pv46s7 { position: relative; width: 100%; height: auto; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-wWEGP .framer-7bmrvt { position: absolute; cursor: pointer; overflow: hidden; width: 145px; height: 39px; right: 20px; bottom: 20px; flex: none; }",".framer-wWEGP .framer-1ut63tm { position: absolute; width: auto; height: auto; left: 50%; top: 49%; flex: none; white-space: pre; }",".framer-wWEGP.framer-v-17iwngi .framer-17iwngi { cursor: pointer; }",".framer-wWEGP.framer-v-17iwngi.hover .framer-1la8gue { width: 289px; height: 58px; right: auto; bottom: auto; left: 40px; top: 40px; flex: none; aspect-ratio: unset; }",...sharedStyle.css,...sharedStyle1.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 200
 * @framerIntrinsicWidth 372
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "SkR6uamvT": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"j65g3LWAa": "title", "FORWKFQdy": "supertext", "EEivlCBqi": "superTextColor", "Zh6NBlih8": "titleColor", "wC86rtweY": "tap"}
 */ const FramerqqNBvBu5u=withCSS(Component,css);export default FramerqqNBvBu5u;FramerqqNBvBu5u.displayName="Project Feature";FramerqqNBvBu5u.defaultProps={"width":372,"height":200};addPropertyControls(FramerqqNBvBu5u,{"j65g3LWAa":{"type":ControlType.String,"title":"Title","defaultValue":"Event Site for a Big Brand","displayTextArea":false},"FORWKFQdy":{"type":ControlType.String,"title":"Supertext","defaultValue":"Jenni Kayne X The Mint Gardener"},"EEivlCBqi":{"type":ControlType.Color,"title":"Super Text Color","defaultValue":"rgb(153, 153, 153)"},"Zh6NBlih8":{"type":ControlType.Color,"title":"Title Color","defaultValue":"rgb(51, 51, 51)"},"wC86rtweY":{"type":ControlType.EventHandler,"title":"Tap"}});addFonts(FramerqqNBvBu5u,[{"url":"https://fonts.gstatic.com/s/montserrat/v24/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf","family":"Montserrat","style":"normal","weight":"600","moduleAsset":{"url":"https://fonts.gstatic.com/s/montserrat/v24/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf","localModuleIdentifier":"local-module:canvasComponent/qqNBvBu5u:default"}},...sharedStyle.fonts,...sharedStyle1.fonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerqqNBvBu5u","slots":[],"annotations":{"framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"SkR6uamvT\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerVariables":"{\"j65g3LWAa\": \"title\", \"FORWKFQdy\": \"supertext\", \"EEivlCBqi\": \"superTextColor\", \"Zh6NBlih8\": \"titleColor\", \"wC86rtweY\": \"tap\"}","framerIntrinsicWidth":"372","framerIntrinsicHeight":"200","framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./qqNBvBu5u.map